/* ============================================================
   RegCripto — Lógica principal
   ============================================================ */

'use strict';

// ---------- Metadados dos módulos ----------
const MODULOS_META = [
  { id: 0, titulo: 'Panorama Regulatório',        icone: '🗺️', cor: 'decreto' },
  { id: 1, titulo: 'GAFI/FATF',                   icone: '🌐', cor: 'gafi'    },
  { id: 2, titulo: 'Lei 14.478/2022',              icone: '📜', cor: 'lei'     },
  { id: 3, titulo: 'Decreto 11.563/2023',          icone: '🏛️', cor: 'decreto' },
  { id: 4, titulo: 'Capital Mínimo',               icone: '💰', cor: 'bcb'    },
  { id: 5, titulo: 'Res. BCB 519 — Autorização',  icone: '✅', cor: 'bcb'    },
  { id: 6, titulo: 'Res. BCB 520 — Funcionamento',icone: '⚙️', cor: 'bcb'    },
  { id: 7, titulo: 'Res. BCB 521 — Câmbio',       icone: '💱', cor: 'bcb'    },
  { id: 8, titulo: 'IN RFB 2.291 — DeCripto',     icone: '🧾', cor: 'rfb'    },
  { id: 9, titulo: 'Checklist PSAV',               icone: '📋', cor: 'rfb'    },
  { id:10, titulo: 'Quiz & Revisão',               icone: '🎯', cor: 'gafi'   },
];

// ---------- Estado global ----------
let estado = {
  moduloAtual: 0,
  modo: 'estudo',           // 'aula' | 'estudo'
  tema: 'light',            // 'light' | 'dark'
  progresso: {},            // { id: { visto: bool, quizFeito: bool, acertos: int, total: int } }
  favoritos: [],            // [{ moduloId, secaoId, titulo, texto }]
  quizRespostas: {},        // { 'modId-qIdx': respostaIdx }
};

// ---------- Inicialização ----------
document.addEventListener('DOMContentLoaded', () => {
  carregarEstado();
  inicializarUI();
  construirSidebar();
  registrarEventos();

  // Home só na 1ª visita; depois abre no último módulo visto
  const jaVisitou = localStorage.getItem('regcripto_visited') === '1';
  if (jaVisitou) {
    irParaModulo(estado.moduloAtual, false);
  } else {
    mostrarHome();
  }
});

// ---------- Persistência ----------
function salvarEstado() {
  try {
    localStorage.setItem('regcripto_v2', JSON.stringify(estado));
  } catch (e) { /* ignora erros de storage */ }
}

function carregarEstado() {
  try {
    const raw = localStorage.getItem('regcripto_v2');
    if (raw) {
      const salvo = JSON.parse(raw);
      // Merge cuidadoso para preservar estrutura
      if (salvo.moduloAtual !== undefined) estado.moduloAtual = salvo.moduloAtual;
      if (salvo.modo)        estado.modo      = salvo.modo;
      if (salvo.tema)        estado.tema      = salvo.tema;
      if (salvo.progresso)   estado.progresso = salvo.progresso;
      if (salvo.favoritos)   estado.favoritos = salvo.favoritos;
      if (salvo.quizRespostas) estado.quizRespostas = salvo.quizRespostas;
    }
  } catch (e) { /* ignora */ }
}

// ---------- UI inicial ----------
function inicializarUI() {
  aplicarTema(estado.tema);
  aplicarModo(estado.modo);
}

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-theme', tema);
  document.getElementById('icon-light').style.display = tema === 'light' ? '' : 'none';
  document.getElementById('icon-dark').style.display  = tema === 'dark'  ? '' : 'none';
}

function aplicarModo(modo) {
  document.documentElement.setAttribute('data-mode', modo);
  document.getElementById('btn-modo-aula').classList.toggle('active',   modo === 'aula');
  document.getElementById('btn-modo-estudo').classList.toggle('active', modo === 'estudo');
}

// ---------- Sidebar ----------
function construirSidebar() {
  const nav = document.getElementById('module-nav');
  nav.innerHTML = MODULOS_META.map(m => `
    <div class="nav-item cor-${m.cor}" data-id="${m.id}" role="button" tabindex="0" aria-label="Módulo ${m.id}: ${m.titulo}">
      <span class="nav-item-icon">${m.icone}</span>
      <div class="nav-item-text">
        <div class="nav-item-num">Módulo ${m.id}</div>
        <div>${m.titulo}</div>
      </div>
      <div class="nav-item-check" aria-hidden="true">${progresso_icon(m.id)}</div>
    </div>
  `).join('');

  nav.addEventListener('click', e => {
    const item = e.target.closest('.nav-item');
    if (item) irParaModulo(parseInt(item.dataset.id));
  });
  nav.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.nav-item');
      if (item) irParaModulo(parseInt(item.dataset.id));
    }
  });

  atualizarSidebar();
}

function progresso_icon(id) {
  const p = estado.progresso[id];
  return (p && p.visto) ? '✓' : '';
}

function atualizarSidebar() {
  // Destaque do item ativo
  document.querySelectorAll('.nav-item').forEach(el => {
    const id = parseInt(el.dataset.id);
    el.classList.toggle('active', id === estado.moduloAtual);
    el.classList.toggle('done', !!(estado.progresso[id] && estado.progresso[id].visto));
    el.querySelector('.nav-item-check').innerHTML = progresso_icon(id);
  });

  // Progresso geral
  const total = MODULOS_META.length;
  const vistos = Object.values(estado.progresso).filter(p => p.visto).length;
  const pct = Math.round((vistos / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

// ---------- Home / Página inicial ----------
const CRONOGRAMA_HOME = [
  { data: 'Dez 2022', evento: 'Lei 14.478', cor: 'lei' },
  { data: 'Jun 2023', evento: 'Decreto 11.563 — BCB regula', cor: 'decreto' },
  { data: 'Nov 2025', evento: 'Res. BCB 519/520/521', cor: 'bcb' },
  { data: '2 Fev 2026', evento: 'Vigência do marco', cor: 'bcb' },
  { data: '30 Out 2026', evento: 'Prazo p/ autorização', cor: 'bcb' },
  { data: 'Fev 2028', evento: 'Travel Rule plena', cor: 'bcb' },
];

function renderizarHome() {
  const cards = MODULOS_META.map(m => {
    const done = estado.progresso[m.id] && estado.progresso[m.id].visto;
    return `
      <button class="home-module-card cor-${m.cor} ${done ? 'done' : ''}" data-id="${m.id}">
        <div class="home-module-top">
          <span class="home-module-icon">${m.icone}</span>
          <span class="home-module-num">${m.id}</span>
        </div>
        <span class="home-module-title">${m.titulo}</span>
      </button>`;
  }).join('');

  const tl = CRONOGRAMA_HOME.map(t => `
    <div class="home-tl-item ${t.cor}">
      <span class="home-tl-dot"></span>
      <div class="home-tl-data">${t.data}</div>
      <div class="home-tl-evento">${t.evento}</div>
    </div>`).join('');

  const view = document.getElementById('home-view');
  view.innerHTML = `
    <div class="home-hero">
      <span class="home-hero-badge">⚖ Marco Regulatório 2025–2026</span>
      <div class="home-hero-icon">🪙</div>
      <h1>Regulação de <span class="gradient-text">Criptoativos</span><br>no Brasil</h1>
      <p class="home-hero-tagline">
        Do GAFI ao Banco Central: um guia interativo e prático sobre o marco regulatório
        completo das Prestadoras de Serviços de Ativos Virtuais (PSAVs).
      </p>
      <button class="home-cta" id="home-comecar">
        Começar pelo início
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
      <span class="home-cta-sub">11 módulos · quizzes · checklist PSAV · fontes oficiais</span>
    </div>

    <div class="home-section">
      <div class="home-cards">
        <div class="home-card">
          <span class="home-card-icon">📘</span>
          <h3>O que é</h3>
          <p>Uma plataforma de estudo que traduz a linguagem jurídico-regulatória em texto objetivo e acessível — sem perder o rigor técnico. Cobre desde as recomendações internacionais do GAFI até as obrigações fiscais da Receita Federal.</p>
        </div>
        <div class="home-card">
          <span class="home-card-icon">🎯</span>
          <h3>Para quem é</h3>
          <ul>
            <li>PSAVs entrando ou se adequando à regulação</li>
            <li>Profissionais de compliance e jurídico</li>
            <li>Estudantes e participantes de aulas</li>
            <li>Quem precisa de um baseline de conformidade</li>
          </ul>
        </div>
        <div class="home-card">
          <span class="home-card-icon">🧭</span>
          <h3>Como navegar</h3>
          <p>Use o menu <strong>☰</strong> para busca, checklist e progresso. O botão <strong>RegCripto</strong> no topo sempre traz você de volta aqui. Seu progresso fica salvo no navegador.</p>
        </div>
      </div>
    </div>

    <div class="home-section">
      <h2 class="home-section-title">Dois modos de uso</h2>
      <p class="home-section-sub">Alterne a qualquer momento no topo da tela</p>
      <div class="home-modos">
        <div class="home-modo">
          <span class="home-modo-tag aula">🖥 Modo Aula</span>
          <p>Tela limpa e ampliada, ideal para projetar durante a apresentação. O quiz mostra apenas acerto ou erro, mantendo o desafio para a turma.</p>
        </div>
        <div class="home-modo">
          <span class="home-modo-tag estudo">📚 Modo Estudo</span>
          <p>Barra lateral com todos os módulos e barra de progresso. O quiz revela o gabarito e a explicação completa após cada resposta. Perfeito para revisão.</p>
        </div>
      </div>
    </div>

    <div class="home-section">
      <h2 class="home-section-title">Os 11 módulos</h2>
      <p class="home-section-sub">Clique em qualquer um para ir direto ao conteúdo</p>
      <div class="home-modules-grid">${cards}</div>
    </div>

    <div class="home-section">
      <h2 class="home-section-title">Linha do tempo regulatória</h2>
      <p class="home-section-sub">Da Lei 14.478 à conformidade plena</p>
      <div class="home-timeline">${tl}</div>
    </div>

    <div class="home-section">
      <div class="home-disclaimer">
        <span class="home-disclaimer-icon">ℹ️</span>
        <span>Material educativo elaborado com base nos textos oficiais das normas (BCB, RFB, Planalto, GAFI/OCDE). Não substitui assessoria jurídica especializada nem a leitura integral das normas. Vigência de referência: 2 de fevereiro de 2026.</span>
      </div>
    </div>
  `;

  // Eventos da home
  view.querySelector('#home-comecar').addEventListener('click', () => irParaModulo(0));
  view.querySelectorAll('.home-module-card').forEach(c => {
    c.addEventListener('click', () => irParaModulo(parseInt(c.dataset.id)));
  });
}

function mostrarHome() {
  renderizarHome();
  document.documentElement.setAttribute('data-view', 'home');
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('module-view').classList.add('hidden');

  // Limpa destaque de módulo ativo na sidebar
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  // Fecha sidebar em mobile
  if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.add('hidden');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Navegação principal ----------
async function irParaModulo(id, scroll = true) {
  id = Math.max(0, Math.min(MODULOS_META.length - 1, id));
  estado.moduloAtual = id;

  // Marca a 1ª visita como concluída e sai da home
  localStorage.setItem('regcripto_visited', '1');
  document.documentElement.setAttribute('data-view', 'module');
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('module-view').classList.remove('hidden');

  // Marca como visto
  if (!estado.progresso[id]) estado.progresso[id] = { visto: false, quizFeito: false, acertos: 0, total: 0 };
  estado.progresso[id].visto = true;

  atualizarSidebar();
  salvarEstado();

  // Atualiza botões
  document.getElementById('btn-prev').disabled = id === 0;
  document.getElementById('btn-next').disabled = id === MODULOS_META.length - 1;
  document.getElementById('module-counter').textContent = `${id + 1} / ${MODULOS_META.length}`;

  // Fecha sidebar em mobile
  if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.add('hidden');
  }

  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });

  // Carrega conteúdo
  document.getElementById('module-content').innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Carregando…</p></div>';
  document.getElementById('quiz-container').classList.add('hidden');

  try {
    const dados = await carregarModulo(id);
    renderizarModulo(dados);
  } catch (err) {
    document.getElementById('module-content').innerHTML = `
      <div class="loading-state">
        <p>⚠️ Erro ao carregar o módulo ${id}.</p>
        <p style="font-size:.8rem;color:var(--text-muted)">${err.message}</p>
      </div>`;
  }
}

// ---------- Carregamento de conteúdo ----------
// Usa conteúdo embutido (content.js) se disponível, senão tenta fetch
const _cache = {};
async function carregarModulo(id) {
  if (_cache[id]) return _cache[id];

  // Fallback 1: conteúdo embutido (evita problemas com file:// em Chrome)
  if (typeof CONTENT_DATA !== 'undefined' && CONTENT_DATA[id]) {
    _cache[id] = CONTENT_DATA[id];
    return _cache[id];
  }

  // Fallback 2: fetch do JSON (funciona em servidor HTTP)
  try {
    const res = await fetch(`content/modulo-${id}.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const dados = await res.json();
    _cache[id] = dados;
    return dados;
  } catch (err) {
    throw new Error(`Não foi possível carregar o módulo ${id}. ${err.message}. Tente abrir via servidor HTTP (python3 -m http.server) ou GitHub Pages.`);
  }
}

// ---------- Renderização ----------
function renderizarModulo(dados) {
  const meta = MODULOS_META[dados.id];

  // Header
  const tag = document.getElementById('module-tag');
  tag.textContent = dados.norma || `Módulo ${dados.id}`;
  tag.className = `module-tag cor-${meta.cor}`;
  document.getElementById('module-vigencia').textContent = dados.vigencia ? `⏱ Vigência: ${dados.vigencia}` : '';
  document.getElementById('module-title').textContent = dados.titulo;
  document.getElementById('module-subtitle').textContent = dados.subtitulo || '';

  // Links oficiais
  const linksEl = document.getElementById('module-links');
  if (linksEl) {
    if (dados.links && dados.links.length) {
      linksEl.innerHTML = dados.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="link-oficial" title="${escapar(l.label)}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${escapar(l.label)}
        </a>`).join('');
      linksEl.classList.remove('hidden');
    } else {
      linksEl.classList.add('hidden');
    }
  }

  // Conteúdo
  const area = document.getElementById('module-content');
  area.innerHTML = (dados.secoes || []).map((s, i) => renderizarSecao(s, i, dados)).join('');

  // Glossário → tooltips
  if (dados.glossario) configurarTooltips(dados.glossario);

  // Checkboxes do checklist
  area.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(cb => {
    const chave = `check_${dados.id}_${cb.dataset.key}`;
    cb.checked = localStorage.getItem(chave) === '1';
    if (cb.checked) cb.closest('.checklist-item').classList.add('done');
    cb.addEventListener('change', () => {
      localStorage.setItem(chave, cb.checked ? '1' : '0');
      cb.closest('.checklist-item').classList.toggle('done', cb.checked);
      atualizarProgressoChecklist(dados.id);
    });
  });
  atualizarProgressoChecklist(dados.id);

  // Accordions
  area.querySelectorAll('.secao').forEach(secao => {
    const header = secao.querySelector('.secao-header');
    if (header) {
      header.addEventListener('click', e => {
        if (e.target.closest('.btn-favorite')) return;
        secao.classList.toggle('open');
      });
    }

    // Favoritar
    secao.querySelectorAll('.btn-favorite').forEach(btn => {
      const key = btn.dataset.fav;
      btn.classList.toggle('saved', estado.favoritos.some(f => f.key === key));
      btn.addEventListener('click', e => {
        e.stopPropagation();
        toggleFavorito(dados.id, key, btn.dataset.titulo);
        btn.classList.toggle('saved', estado.favoritos.some(f => f.key === key));
      });
    });

    // Abre a primeira seção por padrão
    if (!secao.classList.contains('open')) {
      const first = area.querySelector('.secao');
      if (first) first.classList.add('open');
    }
  });

  // Quiz
  if (dados.quiz && dados.quiz.length > 0) {
    renderizarQuiz(dados);
  }
}

function renderizarSecao(s, i, dados) {
  const favKey = `${dados.id}_${s.id || i}`;
  const favBtn = `<button class="btn-favorite" data-fav="${favKey}" data-titulo="${escapar(s.titulo)}" aria-label="Favoritar seção" title="Favoritar">★</button>`;

  let corpo = '';

  switch (s.tipo) {
    case 'intro':        corpo = renderIntro(s);              break;
    case 'duplo-painel': corpo = renderDuploP(s);             break;
    case 'lista':        corpo = renderLista(s);              break;
    case 'timeline':     corpo = renderTimeline(s);           break;
    case 'fluxo':        corpo = renderFluxo(s);              break;
    case 'tabela':       corpo = renderTabela(s);             break;
    case 'checklist':    corpo = renderChecklist(s, dados.id);break;
    case 'info-grid':    corpo = renderInfoGrid(s);           break;
    case 'texto':        corpo = renderTexto(s);              break;
    default:             corpo = renderTexto(s);
  }

  // Seções intro não usam accordion
  if (s.tipo === 'intro') return corpo;

  return `
    <div class="secao ${i === 0 ? 'open' : ''}" id="secao-${favKey}">
      <div class="secao-header">
        <div class="secao-header-left">
          <span class="secao-titulo">${s.titulo || ''}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          ${favBtn}
          <svg class="secao-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div class="secao-corpo">${corpo}</div>
    </div>`;
}

// ---------- Renderers por tipo ----------

function renderIntro(s) {
  const badges = (s.normas || []).map(n =>
    `<span class="badge badge-${n.cor || 'bcb'}">${n.texto}</span>`
  ).join('');

  return `
    <div class="intro-card">
      <p style="color:var(--text-secondary);line-height:1.7">${s.texto || ''}</p>
      ${badges ? `<div class="intro-normas">${badges}</div>` : ''}
    </div>`;
}

function renderDuploP(s) {
  const atencao = s.atencao ? `
    <div class="box-atencao">
      <span class="box-atencao-icon">⚠️</span>
      <span>${s.atencao}</span>
    </div>` : '';

  const extra = s.destaque ? `
    <div class="box-destaque" style="margin-top:.75rem">
      <span>💡</span>
      <span>${s.destaque}</span>
    </div>` : '';

  return `
    <div class="duplo-painel">
      <div class="painel-norma">
        <div class="painel-label">📋 O que a norma diz</div>
        <div class="painel-texto">${s.norma_diz || ''}</div>
      </div>
      <div class="painel-pratica">
        <div class="painel-label">💡 Na prática</div>
        <div class="painel-texto">${s.na_pratica || ''}</div>
      </div>
    </div>
    ${atencao}${extra}`;
}

function renderLista(s) {
  const itens = (s.itens || []).map(it => `
    <li>
      ${it.num ? `<span class="item-num">${it.num}</span>` : ''}
      <div class="item-texto">
        <div class="item-destaque">${it.titulo || it.texto || ''}</div>
        ${it.desc ? `<div class="item-pratica">${it.desc}</div>` : ''}
      </div>
    </li>`).join('');

  const atencao = s.atencao ? `
    <div class="box-atencao" style="margin-top:1rem">
      <span class="box-atencao-icon">⚠️</span>
      <span>${s.atencao}</span>
    </div>` : '';

  return `
    ${s.intro ? `<p style="margin-bottom:.75rem;color:var(--text-secondary);font-size:var(--font-size-sm)">${s.intro}</p>` : ''}
    <ul class="lista-reg">${itens}</ul>
    ${atencao}`;
}

function renderTimeline(s) {
  const itens = (s.itens || []).map(it => `
    <div class="timeline-item ${it.cor || ''}">
      <div class="timeline-data">${it.data || ''}</div>
      <div class="timeline-evento">${it.evento || ''}</div>
      ${it.detalhe ? `<div class="timeline-detalhe">${it.detalhe}</div>` : ''}
    </div>`).join('');

  return `<div class="timeline">${itens}</div>`;
}

function renderFluxo(s) {
  const passos = (s.passos || []).map((p, i) => `
    <div class="fluxo-step">
      <div class="fluxo-conector">
        <div class="fluxo-num">${i + 1}</div>
        <div class="fluxo-linha"></div>
      </div>
      <div class="fluxo-conteudo">
        <div class="fluxo-titulo">${p.titulo || ''}</div>
        <div class="fluxo-desc">${p.desc || ''}</div>
        ${p.prazo ? `<span class="badge badge-alerta" style="margin-top:6px;display:inline-flex">⏱ ${p.prazo}</span>` : ''}
      </div>
    </div>`).join('');

  return `<div class="fluxo">${passos}</div>`;
}

function renderTabela(s) {
  const headers = (s.colunas || []).map(c => `<th>${c}</th>`).join('');
  const linhas = (s.linhas || []).map(l => {
    const cels = l.map(c => `<td>${c}</td>`).join('');
    return `<tr>${cels}</tr>`;
  }).join('');

  return `
    ${s.intro ? `<p style="margin-bottom:.75rem;color:var(--text-secondary);font-size:var(--font-size-sm)">${s.intro}</p>` : ''}
    <div style="overflow-x:auto">
      <table class="tabela-comp">
        <thead><tr>${headers}</tr></thead>
        <tbody>${linhas}</tbody>
      </table>
    </div>`;
}

function renderChecklist(s, moduloId) {
  const categorias = (s.categorias || []).map(cat => {
    const itens = (cat.itens || []).map((it, i) => {
      const key = `${cat.id}_${i}`;
      return `
        <label class="checklist-item" data-key="${key}">
          <input type="checkbox" data-key="${key}">
          <span class="checklist-texto">${it.texto}</span>
          ${it.ref ? `<span class="checklist-ref">${it.ref}</span>` : ''}
        </label>`;
    }).join('');

    return `
      <div class="checklist-categoria" data-cat="${cat.id}">
        <div class="checklist-categoria-titulo">
          ${cat.icone || '📌'} ${cat.titulo}
        </div>
        ${itens}
      </div>`;
  }).join('');

  return `
    <div class="checklist-progress">
      <div class="checklist-progress-bar">
        <div class="checklist-progress-fill" id="cl-fill-${moduloId}" style="width:0%"></div>
      </div>
      <span id="cl-count-${moduloId}">0 / 0</span>
    </div>
    <button class="btn-print" onclick="window.print()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
      Imprimir / Exportar PDF
    </button>
    ${categorias}`;
}

function renderInfoGrid(s) {
  const cards = (s.cards || []).map(c => `
    <div class="info-card">
      <div class="info-card-label">${c.label}</div>
      <div class="info-card-valor">${c.valor}</div>
      ${c.sub ? `<div class="info-card-sub">${c.sub}</div>` : ''}
    </div>`).join('');

  return `<div class="info-grid">${cards}</div>`;
}

function renderTexto(s) {
  return `<div style="color:var(--text-secondary);line-height:1.7;font-size:var(--font-size-sm)">${s.texto || s.html || ''}</div>`;
}

// ---------- Atualiza progresso do checklist ----------
function atualizarProgressoChecklist(moduloId) {
  const area = document.getElementById('module-content');
  const all = area.querySelectorAll('.checklist-item input[type="checkbox"]');
  if (!all.length) return;
  const checked = area.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
  const fill = document.getElementById(`cl-fill-${moduloId}`);
  const count = document.getElementById(`cl-count-${moduloId}`);
  if (fill) fill.style.width = Math.round((checked / all.length) * 100) + '%';
  if (count) count.textContent = `${checked} / ${all.length}`;
}

// ---------- Tooltips ----------
const tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

function configurarTooltips(glossario) {
  const area = document.getElementById('module-content');
  // Encontra termos marcados com classe .termo
  area.querySelectorAll('.termo').forEach(el => {
    const termo = el.dataset.termo || el.textContent;
    const def = glossario[termo];
    if (!def) return;
    el.addEventListener('mouseenter', e => mostrarTooltip(e, def));
    el.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
    el.addEventListener('mousemove', e => posicionarTooltip(e));
  });
}

function mostrarTooltip(e, texto) {
  tooltip.textContent = texto;
  tooltip.classList.add('visible');
  posicionarTooltip(e);
}

function posicionarTooltip(e) {
  const x = e.clientX + 12, y = e.clientY + 12;
  const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
  const maxX = window.innerWidth - tw - 8, maxY = window.innerHeight - th - 8;
  tooltip.style.left = Math.min(x, maxX) + 'px';
  tooltip.style.top  = Math.min(y, maxY) + 'px';
}

// ---------- Quiz ----------
function renderizarQuiz(dados) {
  const container = document.getElementById('quiz-container');
  const questoes = document.getElementById('quiz-questions');
  const subtitulo = document.getElementById('quiz-subtitle');

  container.classList.remove('hidden');
  subtitulo.textContent = `${dados.quiz.length} questões — ${estado.modo === 'estudo' ? 'gabarito e explicação disponíveis' : 'modo aula: apenas acerto/erro'}`;

  questoes.innerHTML = dados.quiz.map((q, qi) => {
    const qKey = `${dados.id}-${qi}`;
    const resposta = estado.quizRespostas[qKey];
    const respondida = resposta !== undefined;

    const opcoes = q.opcoes.map((op, oi) => {
      let cls = '';
      if (respondida) {
        if (oi === q.correta) cls = 'correct';
        else if (oi === resposta && oi !== q.correta) cls = 'wrong';
      }
      return `
        <button class="quiz-option ${cls}" data-qidx="${qi}" data-oidx="${oi}"
          ${respondida ? 'disabled' : ''}>
          <span class="quiz-option-letra">${String.fromCharCode(65 + oi)}</span>
          ${op}
        </button>`;
    }).join('');

    const explicacaoVisivel = respondida && estado.modo === 'estudo';

    return `
      <div class="quiz-question" data-qi="${qi}">
        <div class="quiz-question-num">Questão ${qi + 1}</div>
        <div class="quiz-question-texto">${q.pergunta}</div>
        <div class="quiz-options">${opcoes}</div>
        <div class="quiz-explicacao ${explicacaoVisivel ? 'visible' : ''}" id="exp-${dados.id}-${qi}">
          💬 ${q.explicacao || ''}
        </div>
      </div>`;
  }).join('');

  // Resultado se já respondeu tudo
  const total = dados.quiz.length;
  const respondidas = dados.quiz.filter((_, qi) => estado.quizRespostas[`${dados.id}-${qi}`] !== undefined).length;
  if (respondidas === total) mostrarResultadoQuiz(dados);

  // Eventos
  questoes.addEventListener('click', e => {
    const btn = e.target.closest('.quiz-option');
    if (!btn || btn.disabled) return;
    const qi = parseInt(btn.dataset.qidx);
    const oi = parseInt(btn.dataset.oidx);
    responderQuestao(dados, qi, oi);
  });

  document.getElementById('btn-quiz-retry').addEventListener('click', () => {
    // Remove respostas deste módulo
    dados.quiz.forEach((_, qi) => delete estado.quizRespostas[`${dados.id}-${qi}`]);
    salvarEstado();
    renderizarQuiz(dados);
    document.getElementById('quiz-result').classList.add('hidden');
  });
}

function responderQuestao(dados, qi, oi) {
  const qKey = `${dados.id}-${qi}`;
  estado.quizRespostas[qKey] = oi;
  salvarEstado();

  const questaoEl = document.querySelector(`.quiz-question[data-qi="${qi}"]`);
  const q = dados.quiz[qi];

  // Marca botões
  questaoEl.querySelectorAll('.quiz-option').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correta) btn.classList.add('correct');
    else if (idx === oi && idx !== q.correta) btn.classList.add('wrong');
  });

  // Explicação (modo estudo)
  if (estado.modo === 'estudo') {
    const exp = document.getElementById(`exp-${dados.id}-${qi}`);
    if (exp) exp.classList.add('visible');
  }

  // Verifica se respondeu tudo
  const total = dados.quiz.length;
  const respondidas = dados.quiz.filter((_, i) => estado.quizRespostas[`${dados.id}-${i}`] !== undefined).length;
  if (respondidas === total) {
    setTimeout(() => mostrarResultadoQuiz(dados), 500);
  }
}

function mostrarResultadoQuiz(dados) {
  const total = dados.quiz.length;
  const acertos = dados.quiz.filter((q, qi) => estado.quizRespostas[`${dados.id}-${qi}`] === q.correta).length;
  const pct = Math.round((acertos / total) * 100);

  estado.progresso[dados.id] = estado.progresso[dados.id] || {};
  estado.progresso[dados.id].quizFeito = true;
  estado.progresso[dados.id].acertos = acertos;
  estado.progresso[dados.id].total = total;
  salvarEstado();
  atualizarSidebar();

  const cls = pct >= 80 ? 'excelente' : pct >= 60 ? 'bom' : 'ruim';
  const msg = pct >= 80 ? '🎉 Excelente!' : pct >= 60 ? '👍 Bom resultado' : '📚 Revise o conteúdo';

  document.getElementById('quiz-score-display').innerHTML = `
    <div class="quiz-score-circle ${cls}">${pct}%</div>
    <p style="font-weight:600;margin-bottom:.3rem">${msg}</p>
    <p style="color:var(--text-secondary);font-size:var(--font-size-sm)">${acertos} de ${total} questões corretas</p>
  `;
  document.getElementById('quiz-result').classList.remove('hidden');
}

// ---------- Favoritos ----------
function toggleFavorito(moduloId, key, titulo) {
  const idx = estado.favoritos.findIndex(f => f.key === key);
  if (idx >= 0) {
    estado.favoritos.splice(idx, 1);
  } else {
    const meta = MODULOS_META[moduloId];
    estado.favoritos.push({ key, moduloId, titulo, modulo: meta.titulo });
  }
  salvarEstado();
  renderizarFavoritos();
}

function renderizarFavoritos() {
  const lista = document.getElementById('favorites-list');
  if (!estado.favoritos.length) {
    lista.innerHTML = '<p class="empty-state">Nenhum favorito ainda.<br>Clique no ★ em qualquer seção para salvar.</p>';
    return;
  }
  lista.innerHTML = estado.favoritos.map(f => `
    <div class="favorites-item" onclick="irParaModulo(${f.moduloId})">
      <div class="favorites-item-modulo">${f.modulo}</div>
      <div>${f.titulo}</div>
    </div>`).join('');
}

// ---------- Eventos ----------
function registrarEventos() {
  // Logo → home
  document.getElementById('logo-home').addEventListener('click', mostrarHome);

  // Tema
  document.getElementById('theme-toggle').addEventListener('click', () => {
    estado.tema = estado.tema === 'light' ? 'dark' : 'light';
    aplicarTema(estado.tema);
    salvarEstado();
  });

  // Modo
  document.getElementById('btn-modo-aula').addEventListener('click', () => setModo('aula'));
  document.getElementById('btn-modo-estudo').addEventListener('click', () => setModo('estudo'));

  // Navegação
  document.getElementById('btn-prev').addEventListener('click', () => irParaModulo(estado.moduloAtual - 1));
  document.getElementById('btn-next').addEventListener('click', () => irParaModulo(estado.moduloAtual + 1));

  // Dropdown hambúrguer
  const btnHamburger = document.getElementById('sidebar-toggle');
  const dropdown = document.getElementById('main-dropdown');

  btnHamburger.addEventListener('click', e => {
    e.stopPropagation();
    const open = dropdown.classList.toggle('hidden');
    btnHamburger.setAttribute('aria-expanded', String(!open));
    // Em mobile, também abre/fecha sidebar junto
    if (window.innerWidth < 768 && !dropdown.classList.contains('hidden') === false) {
      const sb = document.getElementById('sidebar');
      sb.classList.toggle('open');
    }
  });

  // Ações do dropdown
  dropdown.addEventListener('click', e => {
    const item = e.target.closest('.dropdown-item');
    if (!item) return;
    dropdown.classList.add('hidden');
    btnHamburger.setAttribute('aria-expanded', 'false');
    const acao = item.dataset.action;
    switch (acao) {
      case 'sidebar':
        toggleSidebar();
        break;
      case 'checklist':
        irParaModulo(9);
        break;
      case 'quiz':
        scrollParaQuiz();
        break;
      case 'favorites':
        abrirFavoritos();
        break;
      case 'search':
        abrirBusca();
        break;
      case 'progress':
        abrirProgresso();
        break;
      case 'reset':
        confirmarReset();
        break;
    }
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown-wrap')) {
      dropdown.classList.add('hidden');
      btnHamburger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      dropdown.classList.add('hidden');
      fecharTodosModais();
    }
    if (e.target.matches('input, textarea, select, button')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') irParaModulo(estado.moduloAtual + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'PageUp')   irParaModulo(estado.moduloAtual - 1);
  });

  // Overlay
  document.getElementById('overlay').addEventListener('click', fecharTodosModais);

  // Favoritos
  document.getElementById('btn-favorites').addEventListener('click', abrirFavoritos);
  document.getElementById('btn-close-favorites').addEventListener('click', () => {
    document.getElementById('favorites-panel').classList.remove('open');
    document.getElementById('overlay').classList.add('hidden');
  });

  // Modal busca
  document.getElementById('btn-close-search').addEventListener('click', () => fecharModal('search-modal'));
  document.getElementById('search-input').addEventListener('input', e => executarBusca(e.target.value));

  // Modal progresso
  document.getElementById('btn-close-progress').addEventListener('click', () => fecharModal('progress-modal'));
}

// ---------- Helpers de modal ----------
function fecharTodosModais() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('favorites-panel').classList.remove('open');
  document.getElementById('overlay').classList.add('hidden');
  fecharModal('search-modal');
  fecharModal('progress-modal');
}

function abrirModal(id) {
  document.getElementById('overlay').classList.remove('hidden');
  document.getElementById(id).classList.remove('hidden');
}

function fecharModal(id) {
  document.getElementById(id).classList.add('hidden');
  // Remove overlay só se não houver outros painéis abertos
  const temAberto = document.getElementById('favorites-panel').classList.contains('open');
  if (!temAberto) document.getElementById('overlay').classList.add('hidden');
}

// ---------- Ações do dropdown ----------
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('overlay');
  if (window.innerWidth < 768) {
    const isOpen = sb.classList.toggle('open');
    ov.classList.toggle('hidden', !isOpen);
  } else {
    // Desktop: alterna margem do main
    const main = document.getElementById('main');
    const collapsed = sb.classList.toggle('sidebar-collapsed');
    main.style.marginLeft = collapsed ? '0' : 'var(--sidebar-width)';
    sb.style.transform = collapsed ? 'translateX(-100%)' : '';
  }
}

function scrollParaQuiz() {
  const qc = document.getElementById('quiz-container');
  if (qc && !qc.classList.contains('hidden')) {
    qc.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Quiz ainda não carregado — navega para o módulo atual e tenta depois
    const check = setInterval(() => {
      const el = document.getElementById('quiz-container');
      if (el && !el.classList.contains('hidden')) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearInterval(check);
      }
    }, 200);
    setTimeout(() => clearInterval(check), 4000);
  }
}

function abrirFavoritos() {
  const panel = document.getElementById('favorites-panel');
  const ov = document.getElementById('overlay');
  const isOpen = panel.classList.toggle('open');
  ov.classList.toggle('hidden', !isOpen);
  if (isOpen) renderizarFavoritos();
}

// ---------- Busca ----------
let _dadosBusca = null;

function construirIndiceBusca() {
  if (_dadosBusca || typeof CONTENT_DATA === 'undefined') return;
  _dadosBusca = [];
  CONTENT_DATA.forEach(mod => {
    // Títulos de seções
    (mod.secoes || []).forEach(s => {
      if (!s.titulo || s.tipo === 'intro') return;
      _dadosBusca.push({ tipo: 'seção', moduloId: mod.id, modulo: mod.titulo, texto: s.titulo, id: s.id });
    });
    // Glossário
    Object.entries(mod.glossario || {}).forEach(([termo, def]) => {
      _dadosBusca.push({ tipo: 'glossário', moduloId: mod.id, modulo: mod.titulo, texto: termo, detalhe: def });
    });
  });
}

function abrirBusca() {
  construirIndiceBusca();
  abrirModal('search-modal');
  setTimeout(() => document.getElementById('search-input').focus(), 50);
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '<p class="empty-state">Digite pelo menos 2 caracteres para buscar.</p>';
}

function executarBusca(q) {
  const area = document.getElementById('search-results');
  q = q.trim();
  if (q.length < 2) {
    area.innerHTML = '<p class="empty-state">Digite pelo menos 2 caracteres para buscar.</p>';
    return;
  }
  const lower = q.toLowerCase();
  const resultados = (_dadosBusca || [])
    .filter(item => item.texto.toLowerCase().includes(lower) || (item.detalhe || '').toLowerCase().includes(lower))
    .slice(0, 20);

  if (!resultados.length) {
    area.innerHTML = `<p class="empty-state">Nenhum resultado para "<strong>${escapar(q)}</strong>".</p>`;
    return;
  }

  area.innerHTML = resultados.map(r => {
    const titulo = destacar(r.texto, q);
    const detalhe = r.detalhe ? `<div class="search-result-tipo">${destacar(r.detalhe.slice(0, 80), q)}…</div>` : `<div class="search-result-tipo">${r.tipo}</div>`;
    return `
      <div class="search-result-item" data-mod="${r.moduloId}" data-sec="${r.id || ''}">
        <span class="search-result-modulo">Módulo ${r.moduloId} — ${escapar(r.modulo)}</span>
        <span class="search-result-titulo">${titulo}</span>
        ${detalhe}
      </div>`;
  }).join('');

  area.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      const mod = parseInt(el.dataset.mod);
      fecharModal('search-modal');
      irParaModulo(mod).then(() => {
        const secId = el.dataset.sec;
        if (secId) {
          setTimeout(() => {
            const secEl = document.getElementById(`secao-${mod}_${secId}`);
            if (secEl) {
              secEl.classList.add('open');
              secEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }
      });
    });
  });
}

function destacar(texto, q) {
  const escaped = escapar(texto);
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escaped.replace(re, '<mark>$1</mark>');
}

// ---------- Progresso ----------
function abrirProgresso() {
  const area = document.getElementById('progress-detail');
  const total = MODULOS_META.length;
  const vistos = MODULOS_META.filter(m => estado.progresso[m.id] && estado.progresso[m.id].visto).length;
  const quizFeitos = MODULOS_META.filter(m => estado.progresso[m.id] && estado.progresso[m.id].quizFeito).length;

  const linhas = MODULOS_META.map(m => {
    const p = estado.progresso[m.id] || {};
    const visto = p.visto ? '<span class="status-ok">✓ Visto</span>' : '<span class="status-no">—</span>';
    const quiz = p.quizFeito
      ? `<span class="status-ok">✓ ${p.acertos}/${p.total} (${Math.round(p.acertos/p.total*100)}%)</span>`
      : '<span class="status-no">—</span>';
    return `<tr><td>${m.icone} ${m.titulo}</td><td>${visto}</td><td>${quiz}</td></tr>`;
  }).join('');

  area.innerHTML = `
    <table class="progress-table">
      <thead><tr><th>Módulo</th><th>Visto</th><th>Quiz</th></tr></thead>
      <tbody>${linhas}</tbody>
    </table>
    <div class="progress-total">
      <span>📖 Vistos: <strong>${vistos}/${total}</strong></span>
      <span>🎯 Quizzes: <strong>${quizFeitos}/${total}</strong></span>
      <span>📊 Geral: <strong>${Math.round((vistos/total)*100)}%</strong></span>
    </div>`;

  abrirModal('progress-modal');
}

// ---------- Reset ----------
function confirmarReset() {
  if (!confirm('Apagar todo o progresso, favoritos e respostas de quiz?\nEssa ação não pode ser desfeita.')) return;
  estado.progresso = {};
  estado.favoritos = [];
  estado.quizRespostas = {};
  salvarEstado();
  atualizarSidebar();
  irParaModulo(0);
}

function setModo(modo) {
  estado.modo = modo;
  aplicarModo(modo);
  salvarEstado();
}

// ---------- Utilitários ----------
function escapar(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
