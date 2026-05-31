const CONTENT_DATA = [
  {
    "id": 0,
    "titulo": "Panorama Regulatório",
    "subtitulo": "O ecossistema de regulação de criptoativos no Brasil e no mundo",
    "norma": "Visão Geral",
    "vigencia": "",
    "glossario": {
      "PSAV": "Prestador de Serviços de Ativos Virtuais — qualquer empresa que, em nome de terceiros, execute pelo menos um serviço com ativos virtuais (intermediação, custódia, câmbio, etc.)",
      "SPSAV": "Sociedade Prestadora de Serviços de Ativos Virtuais — a entidade específica constituída no Brasil para operar como PSAV, sujeita a autorização do BCB",
      "Ativo virtual": "Representação digital de valor que pode ser negociada ou transferida eletronicamente e usada para pagamento ou investimento (exceto moeda nacional, estrangeira e valores mobiliários)",
      "BCB": "Banco Central do Brasil — regulador e supervisor das SPSAVs no Brasil",
      "CVM": "Comissão de Valores Mobiliários — regula ativos virtuais com característica de valor mobiliário",
      "COAF": "Conselho de Controle de Atividades Financeiras — unidade de inteligência financeira do Brasil",
      "GAFI": "Grupo de Ação Financeira Internacional (FATF em inglês) — organismo intergovernamental que emite padrões globais de PLD/FT",
      "PLD/FT": "Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo",
      "ABR": "Abordagem Baseada em Risco — metodologia do GAFI onde os controles são proporcionais ao nível de risco identificado",
      "CARF": "Crypto-Asset Reporting Framework — padrão da OCDE para troca automática de informações fiscais sobre criptoativos entre países"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "O Brasil regulamentou o mercado de criptoativos de forma abrangente entre 2022 e 2025. Este material cobre o arcabouço completo: das recomendações internacionais do GAFI às normas operacionais do BCB e às obrigações fiscais da RFB. O foco é prático — entender o que a norma exige e o que isso significa para uma PSAV no dia a dia.",
        "normas": [
          {
            "texto": "Lei 14.478/2022",
            "cor": "lei"
          },
          {
            "texto": "Decreto 11.563/2023",
            "cor": "decreto"
          },
          {
            "texto": "BCB 519/520/521",
            "cor": "bcb"
          },
          {
            "texto": "IN RFB 2.291/2025",
            "cor": "rfb"
          }
        ]
      },
      {
        "id": "porque-regular",
        "tipo": "duplo-painel",
        "titulo": "Por que regular criptoativos?",
        "norma_diz": "O GAFI exige desde 2019 que jurisdições licenciem e supervisionem os Prestadores de Serviços de Ativos Virtuais (VASPs/PSAVs). O Brasil seguiu esse mandato com a Lei 14.478/2022 e as normas subsequentes do BCB.",
        "na_pratica": "Sem regulação, exchanges operam sem capital mínimo, sem segregação de ativos dos clientes e sem controles de PLD. A regulação cria 'nível bancário' de segurança: se a exchange quebrar, seus ativos devem estar seguros.",
        "atencao": "O Brasil adotou modelo de regulação por atividade (o que você faz determina quem te regula), não por tipo de instrumento. BCB regula PSAVs; CVM regula tokens com característica de valor mobiliário."
      },
      {
        "id": "timeline",
        "tipo": "timeline",
        "titulo": "Linha do Tempo Regulatória",
        "itens": [
          {
            "data": "Dez 2022",
            "evento": "Lei 14.478/2022 sancionada",
            "detalhe": "Marco Legal dos Criptoativos — define ativo virtual, PSAV e obrigações gerais de PLD",
            "cor": "lei"
          },
          {
            "data": "Jun 2023",
            "evento": "Decreto 11.563/2023 publicado",
            "detalhe": "BCB designado como único regulador das PSAVs (ativos não-mobiliários)",
            "cor": "decreto"
          },
          {
            "data": "Nov 2024",
            "evento": "Consultas Públicas BCB nº 109 e 110",
            "detalhe": "Mercado contribui com sugestões para o marco regulatório das SPSAVs"
          },
          {
            "data": "3 Nov 2025",
            "evento": "Res. Conjunta CMN/BCB 14 + Res. BCB 517",
            "detalhe": "Nova metodologia de capital mínimo baseada em atividades — R$ 10,8M a R$ 37,2M",
            "cor": "bcb"
          },
          {
            "data": "10 Nov 2025",
            "evento": "Res. BCB 519, 520 e 521 publicadas",
            "detalhe": "Marco completo: autorização, constituição/funcionamento e câmbio com ativos virtuais",
            "cor": "bcb"
          },
          {
            "data": "14 Nov 2025",
            "evento": "IN RFB 2.291/2025 (DeCripto) publicada",
            "detalhe": "Substitui INs 1.888 e 1.899/2019 — implementa o CARF da OCDE",
            "cor": "rfb"
          },
          {
            "data": "1 Jan 2026",
            "evento": "DeCripto: vigência CARF",
            "detalhe": "Obrigações do Crypto-Asset Reporting Framework entram em vigor",
            "cor": "rfb"
          },
          {
            "data": "2 Fev 2026",
            "evento": "BCB 519, 520 e 521 entram em vigor",
            "detalhe": "Marco regulatório completo do BCB para SPSAVs em vigor — PRAZO CRÍTICO",
            "cor": "bcb"
          },
          {
            "data": "4 Mai 2026",
            "evento": "BCB 521: reporte cambial obrigatório",
            "detalhe": "Envio mensal do ACAM212 via STA começa",
            "cor": "bcb"
          },
          {
            "data": "1 Jul 2026",
            "evento": "DeCripto: demais informações",
            "detalhe": "Restante das obrigações da IN 2.291/2025 em vigor",
            "cor": "rfb"
          },
          {
            "data": "30 Out 2026",
            "evento": "PRAZO FINAL — pedido de autorização",
            "detalhe": "SPSAVs em operação devem ter protocolado o pedido de autorização. Após essa data: vedado operar com entidades não autorizadas",
            "cor": "bcb"
          },
          {
            "data": "Jan 2028",
            "evento": "Capital mínimo: plena conformidade",
            "detalhe": "Transição do capital mínimo concluída (Res. BCB 517)",
            "cor": "bcb"
          },
          {
            "data": "Fev 2028",
            "evento": "Travel Rule: obrigatória para todos",
            "detalhe": "Transmissão de informações em operações nacionais E internacionais obrigatória",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "arquitetura",
        "tipo": "tabela",
        "titulo": "Quem regula o quê?",
        "intro": "O modelo regulatório brasileiro é baseado na atividade e no tipo de instrumento, não na tecnologia subjacente.",
        "colunas": [
          "Órgão",
          "O que regula",
          "Instrumento principal"
        ],
        "linhas": [
          [
            "<strong>BCB</strong>",
            "PSAVs / SPSAVs — intermediação, custódia, câmbio com ativos virtuais",
            "Res. BCB 519, 520, 521"
          ],
          [
            "<strong>CVM</strong>",
            "Ativos virtuais com característica de valor mobiliário (security tokens)",
            "RCVM 88, pareceres de orientação"
          ],
          [
            "<strong>RFB</strong>",
            "Obrigações fiscais e declaratórias sobre operações com criptoativos",
            "IN RFB 2.291/2025 (DeCripto)"
          ],
          [
            "<strong>COAF</strong>",
            "Inteligência financeira — recebe comunicações de operações suspeitas",
            "Lei 9.613/1998 (PLD)"
          ],
          [
            "<strong>PROCON / SENACON</strong>",
            "Defesa do consumidor nas relações com PSAVs",
            "CDC, Decreto 11.034/2022"
          ]
        ]
      },
      {
        "id": "tipos-psav",
        "tipo": "lista",
        "titulo": "Quem pode ser PSAV no Brasil?",
        "intro": "A Res. BCB 520 define quem pode prestar serviços de ativos virtuais e em quais modalidades:",
        "itens": [
          {
            "num": "1",
            "titulo": "SPSAVs (novas ou já existentes)",
            "desc": "Sociedade empresária limitada ou anônima constituída especificamente para o mercado de ativos virtuais. Precisa de autorização do BCB antes de operar."
          },
          {
            "num": "2",
            "titulo": "Bancos comerciais, de câmbio, de investimento, múltiplos e Caixa",
            "desc": "Podem prestar intermediação e custódia. Precisam comunicar ao BCB com 90 dias de antecedência (se novas) ou 270 dias (se já atuantes)."
          },
          {
            "num": "3",
            "titulo": "Corretoras e distribuidoras de TVM",
            "desc": "Podem prestar intermediação e custódia. Mesmos prazos de comunicação que os bancos."
          },
          {
            "num": "4",
            "titulo": "Corretoras de câmbio",
            "desc": "Somente modalidade de intermediação de ativos virtuais (não custódia, exceto via corretagem)."
          }
        ],
        "atencao": "Entidades estrangeiras que já operam no Brasil têm 270 dias a partir de 2/2/2026 para transferir operações e clientes para uma instituição elegível constituída no Brasil."
      }
    ],
    "quiz": [
      {
        "pergunta": "Qual órgão é o regulador principal das SPSAVs no Brasil?",
        "opcoes": [
          "Comissão de Valores Mobiliários (CVM)",
          "Banco Central do Brasil (BCB)",
          "Conselho Monetário Nacional (CMN)",
          "Receita Federal do Brasil (RFB)"
        ],
        "correta": 1,
        "explicacao": "O Decreto 11.563/2023 designou o BCB como regulador e supervisor das Prestadoras de Serviços de Ativos Virtuais. A CVM regula tokens com característica de valor mobiliário, não as PSAVs em geral."
      },
      {
        "pergunta": "Qual é o prazo máximo para uma SPSAV já em operação protocolar seu pedido de autorização no BCB?",
        "opcoes": [
          "2 de fevereiro de 2026",
          "4 de maio de 2026",
          "30 de outubro de 2026",
          "1 de janeiro de 2027"
        ],
        "correta": 2,
        "explicacao": "O Art. 88 da Res. BCB 520 estabelece 270 dias a partir de 2/2/2026 para protocolar o pedido. Após 30/10/2026, instituições autorizadas são proibidas de operar com PSAVs sem autorização ou pedido em análise (Art. 91)."
      },
      {
        "pergunta": "O que é a DeCripto (IN RFB 2.291/2025)?",
        "opcoes": [
          "Uma resolução do BCB sobre declaração de reservas",
          "A obrigação de comunicar operações suspeitas ao COAF",
          "A declaração acessória de operações com criptoativos, que implementa o CARF da OCDE",
          "O sistema de autorização das SPSAVs junto ao BCB"
        ],
        "correta": 2,
        "explicacao": "A IN RFB 2.291/2025 criou a Declaração de Criptoativos (DeCripto), substituindo as antigas INs 1.888 e 1.899/2019. Ela implementa o Crypto-Asset Reporting Framework (CARF) da OCDE para troca automática de informações fiscais entre países."
      },
      {
        "pergunta": "Uma fintech estrangeira que opera no Brasil tem quantos dias, após 2/2/2026, para transferir suas operações e clientes para uma entidade brasileira autorizada?",
        "opcoes": [
          "90 dias",
          "180 dias",
          "270 dias",
          "365 dias"
        ],
        "correta": 2,
        "explicacao": "O Art. 23 da Res. BCB 520 estabelece prazo de 270 dias para que entidades constituídas no exterior que já operam no Brasil transfiram suas operações e clientes para instituição elegível brasileira, garantindo continuidade, segurança, transparência e consentimento dos clientes."
      }
    ],
    "links": [
      {
        "label": "BCB — Ativos Virtuais",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/ativosvirtuais"
      },
      {
        "label": "GAFI — Virtual Assets",
        "url": "https://www.fatf-gafi.org/en/topics/virtual-assets.html"
      },
      {
        "label": "Lei 14.478/2022 — Planalto",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14478.htm"
      }
    ]
  },
  {
    "id": 1,
    "titulo": "GAFI / FATF",
    "subtitulo": "As recomendações internacionais que moldam a regulação brasileira de PSAVs",
    "norma": "GAFI — Recomendações 15 e 16",
    "vigencia": "Nota interpretativa 2019 | Atualização jun/2025",
    "glossario": {
      "GAFI": "Grupo de Ação Financeira Internacional (FATF em inglês) — 40 países-membros + Comissão Europeia. Emite padrões globais de PLD/FT e avalia os países em processos de revisão mútua.",
      "VASP": "Virtual Asset Service Provider — termo do GAFI equivalente ao PSAV brasileiro",
      "Travel Rule": "Obrigação (Rec. 16 do GAFI) de transmitir informações do originador e do beneficiário junto a cada transferência de ativos virtuais, análoga ao 'wire transfer rule' bancário",
      "ABR": "Abordagem Baseada em Risco — os controles de PLD/FT são proporcionais ao risco identificado, não uniformes",
      "KYC": "Know Your Customer — procedimentos de identificação e verificação da identidade dos clientes",
      "PEP": "Pessoa Politicamente Exposta — cargo público relevante; exige due diligence reforçada",
      "Due diligence simplificada": "Controles reduzidos aplicáveis a clientes ou operações de baixo risco, conforme critérios da Abordagem Baseada em Risco",
      "Due diligence reforçada": "Controles ampliados para clientes ou operações de alto risco (PEPs, países de alto risco, operações atípicas)",
      "CARF": "Crypto-Asset Reporting Framework — padrão da OCDE (não do GAFI) para troca automática de dados fiscais entre países. Adotado pelo Brasil via IN RFB 2.291/2025"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "O GAFI (Financial Action Task Force — FATF) é o principal organismo intergovernamental de combate à lavagem de dinheiro e financiamento do terrorismo. Suas 40 Recomendações são o padrão global adotado por +200 jurisdições. A Recomendação 15 (2019) foi o turning point: estendeu todas as obrigações de PLD/FT aos VASPs — equivalente ao PSAV brasileiro. O Brasil implementou integralmente esse mandato via Lei 14.478/2022 e normas do BCB.",
        "normas": [
          {
            "texto": "GAFI Rec. 15 (2019)",
            "cor": "gafi"
          },
          {
            "texto": "GAFI Rec. 16 — Travel Rule",
            "cor": "gafi"
          },
          {
            "texto": "Targeted Update Jun/2025",
            "cor": "gafi"
          }
        ]
      },
      {
        "id": "rec15",
        "tipo": "duplo-painel",
        "titulo": "Recomendação 15 — Obrigações para VASPs",
        "norma_diz": "Os países devem: (i) identificar, avaliar e compreender os riscos de LD/FT em atividades de VASP; (ii) aplicar Abordagem Baseada em Risco; (iii) exigir que VASPs sejam licenciados ou registrados; (iv) supervisionar ativamente os VASPs; (v) aplicar sanções efetivas. Os VASPs devem implementar as mesmas medidas de PLD/FT que as instituições financeiras.",
        "na_pratica": "Uma SPSAV brasileira tem as mesmas obrigações que um banco: KYC completo de todos os clientes, monitoramento contínuo de transações, comunicação de operações suspeitas ao COAF, PEP check, listas de sanções, identificação de beneficiário final (UBO ≥25%), due diligence proporcional ao risco.",
        "atencao": "O GAFI não trata criptoativos como uma categoria especial de baixo risco. O padrão é: mesmos controles de um banco, adaptados à tecnologia blockchain."
      },
      {
        "id": "rec16",
        "tipo": "duplo-painel",
        "titulo": "Recomendação 16 — Travel Rule",
        "norma_diz": "Em transferências de ativos virtuais, o VASP originador deve obter e transmitir ao VASP beneficiário as seguintes informações: (a) nome do originador; (b) número de conta (endereço de carteira); (c) endereço físico, número de documento ou data de nascimento; (d) nome do beneficiário; (e) conta do beneficiário. Isso se aplica para transferências ≥ USD 1.000 (threshold orientativo do GAFI).",
        "na_pratica": "Se a SPSAV A envia Bitcoin para a SPSAV B em nome de um cliente, ela deve transmitir os dados do remetente e do destinatário junto com a transação, além do registro blockchain. No Brasil, o Art. 44 da Res. BCB 520 codificou essa obrigação. A implementação é faseada: nacional ≈ fev/2027, internacional ≈ fev/2028.",
        "atencao": "O maior desafio técnico é identificar o VASP de destino e estabelecer comunicação segura. Até a conclusão das etapas, a Res. BCB 520 permite autodeclarações dos clientes como substituto temporário (Art. 89, §1º).",
        "destaque": "Carteiras autocustodiadas (self-custody) são um ponto crítico: a PSAV deve identificar o proprietário e verificar origem/destino dos ativos (Art. 76-A, §5 da Res. BCB 521)."
      },
      {
        "id": "40-rec",
        "tipo": "tabela",
        "titulo": "As 40 Recomendações — Impacto nas PSAVs",
        "intro": "Dentre as 40 Recomendações do GAFI, as seguintes têm impacto direto e relevante nas PSAVs:",
        "colunas": [
          "Rec.",
          "Tema",
          "Impacto para PSAV"
        ],
        "linhas": [
          [
            "<strong>10</strong>",
            "Due diligence do cliente (DDC)",
            "KYC obrigatório para todos os clientes — identificação, verificação, monitoramento contínuo"
          ],
          [
            "<strong>12</strong>",
            "Pessoas Politicamente Expostas (PEPs)",
            "Due diligence reforçada para PEPs nacionais e estrangeiros e seus familiares/associados"
          ],
          [
            "<strong>13</strong>",
            "Bancos correspondentes",
            "Aplicável a PSAVs que prestam serviços para outras PSAVs (sub-relação)"
          ],
          [
            "<strong>15</strong>",
            "Tecnologias novas",
            "PSAVs sujeitas a todas as medidas de PLD/FT; licenciamento e supervisão obrigatórios"
          ],
          [
            "<strong>16</strong>",
            "Transferências eletrônicas (Travel Rule)",
            "Transmissão de dados do originador e beneficiário em cada transfer"
          ],
          [
            "<strong>18</strong>",
            "Controles internos de grupos",
            "Grupos financeiros devem ter políticas de PLD/FT em todas as subsidiárias e países"
          ],
          [
            "<strong>19</strong>",
            "Países de alto risco",
            "DDC reforçada para clientes de países em lista cinza ou vermelha do GAFI"
          ],
          [
            "<strong>20</strong>",
            "Comunicação de operações suspeitas",
            "Comunicação imediata ao COAF quando identificadas operações suspeitas"
          ]
        ]
      },
      {
        "id": "abr",
        "tipo": "duplo-painel",
        "titulo": "Abordagem Baseada em Risco (ABR)",
        "norma_diz": "As medidas de PLD/FT devem ser proporcionais ao risco identificado. Clientes, produtos, canais de distribuição e países devem ser classificados por nível de risco. Controles mais intensos para riscos mais altos; simplificados para riscos mais baixos.",
        "na_pratica": "Na prática para uma SPSAV:\n• <strong>Baixo risco</strong>: cliente PF brasileiro, pequenas transações, moedas principais → KYC simplificado, monitoramento automático básico.\n• <strong>Médio risco</strong>: padrão → KYC completo, monitoramento periódico.\n• <strong>Alto risco</strong>: PEP, país lista cinza, transações atípicas, stablecoins, DeFi → due diligence reforçada, aprovação de compliance, monitoramento intensivo.",
        "atencao": "A Circular BCB 3.978/2020 (aplicável às PSAVs) codifica a ABR no Brasil. O Art. 44 da Res. BCB 520 exige que as PSAVs atendam a essa regulamentação específica de PLD/FT."
      },
      {
        "id": "update2025",
        "tipo": "duplo-painel",
        "titulo": "Targeted Update do GAFI — Junho 2025",
        "norma_diz": "O GAFI publicou em junho/2025 a 6ª atualização sobre implementação das normas para ativos virtuais. O relatório reconhece avanços, mas aponta persistentes dificuldades: identificação de VASPs offshore, controle de wallets autocustodiadas, implementação da Travel Rule, e PSAVs operando em jurisdições sem regulação.",
        "na_pratica": "Para o Brasil: o marco regulatório publicado em novembro/2025 coloca o país em linha com as melhores práticas internacionais. Empresas brasileiras devem ter isso como diferencial: conformidade plena com padrões GAFI em um mercado global que ainda luta com a implementação.",
        "destaque": "O GAFI mantém uma 'lista cinza' (jurisdições sob monitoramento aumentado) e uma 'lista negra' (chamadas de Alto Risco). PSAVs devem aplicar due diligence reforçada para clientes/operações provenientes dessas jurisdições (Art. 43, §5 da Res. BCB 520 faz referência explícita às listas do GAFI)."
      }
    ],
    "quiz": [
      {
        "pergunta": "A Recomendação 15 do GAFI (2019) determina que os VASPs devem:",
        "opcoes": [
          "Ser regulados exclusivamente pelo banco central de cada país",
          "Implementar as mesmas medidas de PLD/FT aplicáveis às instituições financeiras",
          "Operar apenas com criptomoedas listadas em exchanges reguladas",
          "Reportar apenas transações acima de USD 10.000 às autoridades"
        ],
        "correta": 1,
        "explicacao": "A Rec. 15 do GAFI estabelece que os países devem licenciar/registrar VASPs e que esses devem implementar as mesmas obrigações de PLD/FT das instituições financeiras — KYC, monitoramento, comunicação de suspeitas, etc."
      },
      {
        "pergunta": "A Travel Rule (Rec. 16 do GAFI) obriga o VASP originador a transmitir ao VASP beneficiário:",
        "opcoes": [
          "Apenas o endereço de carteira do remetente",
          "Nome e conta do originador, nome e conta do beneficiário",
          "O valor total em moeda fiduciária equivalente da transação",
          "A hash da transação na blockchain"
        ],
        "correta": 1,
        "explicacao": "A Travel Rule exige a transmissão de dados de identificação do originador (nome, conta/carteira, endereço ou documento) E do beneficiário (nome, conta/carteira). O Art. 44 da Res. BCB 520 implementa essa obrigação no Brasil."
      },
      {
        "pergunta": "Na Abordagem Baseada em Risco (ABR), a due diligence reforçada é aplicada para:",
        "opcoes": [
          "Todos os clientes, independentemente do perfil de risco",
          "Apenas para transações acima de R$ 100.000",
          "Pessoas Politicamente Expostas (PEPs), clientes de países de alto risco e operações atípicas",
          "Somente para clientes pessoas jurídicas"
        ],
        "correta": 2,
        "explicacao": "Na ABR, a due diligence reforçada é aplicada a situações de alto risco identificadas: PEPs, clientes de países em lista cinza/negra do GAFI, operações atípicas, produtos de alto risco como DeFi e privacidade. O grau de controle é proporcional ao risco — não uniforme."
      },
      {
        "pergunta": "Qual é o status do Brasil em relação à implementação das normas do GAFI para VASPs após novembro de 2025?",
        "opcoes": [
          "O Brasil ainda não tem regulação para VASPs e está na lista cinza do GAFI",
          "O Brasil implementou o marco regulatório completo com Res. BCB 519/520/521, alinhado aos padrões GAFI",
          "O Brasil adota apenas a Travel Rule, sem exigências de licenciamento",
          "A regulação brasileira é de responsabilidade da CVM, não do BCB"
        ],
        "correta": 1,
        "explicacao": "Com a publicação das Resoluções BCB 519, 520 e 521 em novembro/2025 (vigência fev/2026), o Brasil implementou um marco regulatório completo para PSAVs, incluindo licenciamento, requisitos de capital, PLD/FT, governança e Travel Rule — alinhado integralmente com os padrões do GAFI."
      }
    ],
    "links": [
      {
        "label": "GAFI — Rec. 15 e Nota Interpretativa",
        "url": "https://www.fatf-gafi.org/en/topics/virtual-assets.html"
      },
      {
        "label": "GAFI — Targeted Update jun/2025",
        "url": "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/targeted-update-virtual-assets-vasps-2024.html"
      },
      {
        "label": "As 40 Recomendações (PT-BR)",
        "url": "https://www.fatf-gafi.org/content/dam/fatf-gafi/translations/Recommendations/FATF-40-Rec-2012-Portuguese-GAFISUD.pdf.coredownload.inline.pdf"
      }
    ]
  },
  {
    "id": 2,
    "titulo": "Lei 14.478/2022",
    "subtitulo": "O Marco Legal dos Criptoativos no Brasil",
    "norma": "Lei 14.478/2022",
    "vigencia": "Publicada 21 dez 2022",
    "glossario": {
      "Ativo virtual": "Representação digital de valor que pode ser negociada ou transferida eletronicamente e utilizada para pagamento ou investimento — EXCETO moeda nacional, moeda estrangeira, e valores mobiliários (art. 3º)",
      "PSAV": "Pessoa jurídica que executa, em nome de terceiros, ao menos um dos serviços de ativos virtuais (art. 5º)",
      "Serviços de ativos virtuais": "Troca AV ↔ moeda nacional; troca AV ↔ moeda estrangeira; transferência de AV; custódia de AV; administração de AV (art. 5º, inc. I-V)",
      "Pessoa obrigada": "Entidade sujeita às obrigações da Lei 9.613/1998 (PLD) — as PSAVs são expressamente incluídas (art. 11)",
      "Valor mobiliário": "Instrumento regulado pela CVM (ações, debêntures, tokens de investimento coletivo etc.) — excluído da definição de ativo virtual para fins desta lei"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "A Lei 14.478, sancionada em 21 de dezembro de 2022, é o 'Marco Legal dos Criptoativos'. Ela criou o arcabouço legislativo mínimo: definiu ativo virtual, estabeleceu quem é PSAV, impôs obrigações gerais e delegou ao Poder Executivo a designação do regulador. Toda a regulamentação infralegal do BCB (Res. 519/520/521) emana dessa lei.",
        "normas": [
          {
            "texto": "Lei 14.478/2022",
            "cor": "lei"
          },
          {
            "texto": "Base para Decreto 11.563/2023",
            "cor": "decreto"
          },
          {
            "texto": "Base para Res. BCB 519/520/521",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "ativo-virtual",
        "tipo": "duplo-painel",
        "titulo": "O que é Ativo Virtual? (Art. 3º)",
        "norma_diz": "Ativo virtual é a representação digital de valor que pode ser negociada ou transferida por meios eletrônicos e utilizada para realização de pagamentos ou com propósito de investimento. NÃO são ativos virtuais para fins desta lei: (I) moeda nacional e moedas estrangeiras; (II) moeda eletrônica (do SPB); (III) instrumentos que provejam acesso a produtos ou serviços especificados; (IV) representações de ativos cujo emissor deve registrar na CVM.",
        "na_pratica": "Bitcoin, Ethereum e a maioria das criptomoedas são ativos virtuais. Stablecoins atreladas ao dólar: são ativos virtuais sob o BCB (quando usadas para pagamento/investimento), mas podem ser valores mobiliários se estruturadas como investimento coletivo. Tokens de acesso a plataformas (utility tokens): podem ser excluídos. A linha não é sempre clara — a natureza do instrumento define quem regula.",
        "atencao": "Se o ativo virtual tem características de valor mobiliário (retorno esperado de lucro de esforço de terceiros), a CVM tem jurisdição. BCB e CVM divulgaram nota conjunta em 2023 orientando como diferenciar os casos."
      },
      {
        "id": "psav",
        "tipo": "duplo-painel",
        "titulo": "Quem é PSAV? (Art. 5º)",
        "norma_diz": "Considera-se PSAV a pessoa jurídica que executa, em nome de terceiros, pelo menos um dos seguintes serviços: I - troca entre ativos virtuais e moeda nacional; II - troca entre ativos virtuais e moeda estrangeira; III - transferência de ativos virtuais; IV - custódia ou administração de ativos virtuais ou de instrumentos que possibilitem controle sobre ativos virtuais; V - participação e prestação de serviços financeiros relacionados à oferta de um emissor ou venda de ativos virtuais.",
        "na_pratica": "Você é PSAV se: (a) opera como exchange (compra/venda de cripto por BRL ou USD); (b) custodia cripto de clientes; (c) faz transferências de cripto em nome de clientes; (d) participa de ofertas de tokens. Não importa o nome da empresa — o que importa é a atividade exercida em nome de terceiros.",
        "atencao": "Operar em nome PRÓPRIO (trading proprietário, market-making por conta própria) NÃO torna você uma PSAV. A lei exige 'em nome de terceiros'. Mas a Res. BCB 520 impõe normas prudenciais para operações por conta própria das SPSAVs (Art. 13).",
        "destaque": "Nota importante: A Res. BCB 520 (Art. 1º, §ú) define que uma PSAV funciona 'no país' se está constituída no Brasil E tem sede/administração em território nacional. PSAVs estrangeiras que atendam clientes brasileiros sem constituição local são irregulares e têm 270 dias para regularizar."
      },
      {
        "id": "servicos",
        "tipo": "lista",
        "titulo": "Os 5 Serviços de Ativos Virtuais (Art. 5º)",
        "itens": [
          {
            "num": "I",
            "titulo": "Troca AV ↔ Moeda Nacional (BRL)",
            "desc": "Compra/venda de Bitcoin, Ethereum etc. por Reais. É o serviço típico de uma exchange brasileira."
          },
          {
            "num": "II",
            "titulo": "Troca AV ↔ Moeda Estrangeira (USD, EUR…)",
            "desc": "Compra/venda de cripto por moeda estrangeira. Quando envolve câmbio, submete-se também à Res. BCB 521 e à regulamentação cambial."
          },
          {
            "num": "III",
            "titulo": "Transferência de Ativos Virtuais",
            "desc": "Envio de cripto de uma carteira para outra em nome do cliente. Inclui transferências internacionais que são reguladas como câmbio."
          },
          {
            "num": "IV",
            "titulo": "Custódia ou administração de AV",
            "desc": "Guardar as chaves privadas dos ativos dos clientes. Exige contrato de custódia com 19 elementos mínimos (Res. BCB 520, Art. 73)."
          },
          {
            "num": "V",
            "titulo": "Serviços em oferta de tokens",
            "desc": "Estruturação e distribuição de tokens (ICOs, IEOs, STOs). Se o token for valor mobiliário, a CVM também é competente."
          }
        ]
      },
      {
        "id": "pld",
        "tipo": "duplo-painel",
        "titulo": "PSAVs são Pessoas Obrigadas (Art. 11)",
        "norma_diz": "As PSAVs estão sujeitas às obrigações da Lei 9.613/1998 (Lei de Lavagem de Dinheiro). Devem: identificar clientes; manter registros de transações; monitorar operações; comunicar ao COAF operações suspeitas ou com valor acima dos limites regulatórios; aplicar políticas de PLD/FT compatíveis com seu porte e risco.",
        "na_pratica": "Toda SPSAV brasileira é obrigada a manter programa de PLD/FT com: (a) política aprovada pela diretoria; (b) gerente de compliance designado; (c) monitoramento automatizado de transações; (d) comunicação de suspeitas ao COAF; (e) treinamento periódico de funcionários. A não conformidade gera multas e pode levar ao cancelamento da autorização.",
        "atencao": "A Circular BCB 3.978/2020 detalha como implementar a política de PLD/FT para IFs e aplica-se às PSAVs conforme Art. 44 da Res. BCB 520. Inclui: KYC, UBO, PEP, listas de sanções, ABR, trilha de auditoria."
      },
      {
        "id": "autoridade",
        "tipo": "duplo-painel",
        "titulo": "Delegação ao Poder Executivo (Arts. 7-9)",
        "norma_diz": "O Poder Executivo designará órgão(s) da administração pública para regular e fiscalizar as PSAVs, podendo estabelecer: requisitos para funcionamento; capital mínimo; regras de governança; medidas de proteção ao consumidor; e normas de PLD/FT específicas. As PSAVs precisam de prévia autorização da autoridade competente.",
        "na_pratica": "Com base nessa delegação, o Decreto 11.563/2023 nomeou o BCB como autoridade reguladora. O BCB então editou as Res. 519, 520 e 521 (em novembro/2025), concretizando todos os requisitos que a lei delegou. É uma pirâmide regulatória: Lei → Decreto → Resolução.",
        "destaque": "Art. 9º da Lei: PSAVs em operação na data de publicação da regulamentação podem continuar operando pelo período de adequação. Esse é o fundamento para o prazo de 270 dias da Res. BCB 520 (Art. 88)."
      },
      {
        "id": "protecao",
        "tipo": "lista",
        "titulo": "Proteção do Consumidor (Arts. 12-14)",
        "intro": "A Lei 14.478 estabelece princípios básicos de proteção ao usuário de ativos virtuais:",
        "itens": [
          {
            "num": "Art. 12",
            "titulo": "Segregação patrimonial obrigatória",
            "desc": "Os ativos dos clientes devem ser separados dos ativos da própria PSAV. Proibido usar ativos de clientes para operações próprias."
          },
          {
            "num": "Art. 13",
            "titulo": "Informações claras",
            "desc": "PSAVs devem informar riscos, condições e características dos serviços de forma clara e acessível antes da contratação."
          },
          {
            "num": "Art. 14",
            "titulo": "Aplicação do CDC",
            "desc": "As relações de consumo entre PSAVs e clientes pessoa física são regidas pelo Código de Defesa do Consumidor."
          }
        ],
        "atencao": "A Lei criou o princípio — as Res. BCB 520 Arts. 28-31 detalham tecnicamente como implementar a segregação patrimonial (contas individualizadas, carteiras distintas, prova de reservas, auditoria bienal)."
      }
    ],
    "quiz": [
      {
        "pergunta": "Segundo o Art. 3º da Lei 14.478/2022, qual dos seguintes NÃO é considerado 'ativo virtual'?",
        "opcoes": [
          "Bitcoin (BTC)",
          "Ether (ETH)",
          "Moeda eletrônica do Sistema de Pagamentos Brasileiro (ex.: saldo no Pix)",
          "Stablecoin lastreada em dólar"
        ],
        "correta": 2,
        "explicacao": "A Lei 14.478/2022 exclui expressamente da definição de ativo virtual: (I) moeda nacional e estrangeiras; (II) moeda eletrônica do SPB; (III) instrumentos de acesso a produtos/serviços específicos; (IV) representações de ativos com emissores regulados pela CVM. Saldos em contas de pagamento (Pix, carteiras digitais) são moeda eletrônica — não ativos virtuais."
      },
      {
        "pergunta": "Uma empresa brasileira que mantém a custódia de Bitcoin de seus clientes (guarda as chaves privadas) é classificada como:",
        "opcoes": [
          "Instituição financeira regulada pelo BCB (banco)",
          "PSAV, pois executa o serviço de custódia de ativos virtuais em nome de terceiros",
          "Apenas um prestador de serviço de TI, sem obrigações regulatórias",
          "Valor mobiliário, sujeita à CVM"
        ],
        "correta": 1,
        "explicacao": "O Art. 5º, inciso IV da Lei 14.478/2022 inclui a 'custódia ou administração de ativos virtuais' como serviço de ativo virtual. Quem presta esse serviço em nome de terceiros é uma PSAV, sujeita às normas do BCB (Res. 519/520)."
      },
      {
        "pergunta": "O Art. 11 da Lei 14.478/2022 determina que as PSAVs são 'pessoas obrigadas'. Isso significa que devem:",
        "opcoes": [
          "Obrigatoriamente se constituir como sociedade anônima",
          "Pagar tributo especial sobre operações com ativos virtuais",
          "Cumprir as obrigações da Lei de Lavagem de Dinheiro (Lei 9.613/1998): identificar clientes, monitorar transações e comunicar suspeitas ao COAF",
          "Obrigatoriamente ter conta no Banco Central do Brasil"
        ],
        "correta": 2,
        "explicacao": "Ser 'pessoa obrigada' no regime PLD/FT significa estar sujeito às obrigações da Lei 9.613/1998: identificação e verificação de clientes (KYC), monitoramento contínuo de operações, registro e retenção de dados, e comunicação de operações suspeitas ao COAF."
      },
      {
        "pergunta": "A pirâmide normativa para regulação de PSAVs no Brasil é:",
        "opcoes": [
          "GAFI → BCB → Decreto → Lei",
          "Lei 14.478/2022 → Decreto 11.563/2023 → Res. BCB 519/520/521",
          "CVM → BCB → RFB → COAF",
          "Constituição Federal → CVM → BCB → Lei 14.478"
        ],
        "correta": 1,
        "explicacao": "A pirâmide é: Lei 14.478/2022 (Marco Legal, emana do Congresso) → Decreto 11.563/2023 (Poder Executivo designa o BCB como regulador) → Res. BCB 519/520/521 (BCB detalha os requisitos operacionais). Cada nível emana do superior."
      }
    ],
    "links": [
      {
        "label": "Lei 14.478/2022 — Planalto",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14478.htm"
      },
      {
        "label": "Lei 9.613/1998 (PLD) — Planalto",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l9613.htm"
      }
    ]
  },
  {
    "id": 3,
    "titulo": "Decreto 11.563/2023",
    "subtitulo": "BCB como regulador único das Prestadoras de Serviços de Ativos Virtuais",
    "norma": "Decreto nº 11.563/2023",
    "vigencia": "Publicado 13 jun 2023 | Vigência 20 jun 2023",
    "glossario": {
      "BCB": "Banco Central do Brasil — designado como autoridade reguladora e supervisora das PSAVs pelo Decreto 11.563/2023",
      "CVM": "Comissão de Valores Mobiliários — mantém competência sobre ativos virtuais com características de valor mobiliário",
      "PROCON": "Órgão estadual de proteção ao consumidor — atua em conjunto com o SENACON em defesa dos usuários de PSAVs",
      "Valor mobiliário": "Instrumento como ações, debêntures e security tokens — regulado pela CVM, não sujeito à exclusividade do BCB sobre PSAVs"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "O Decreto 11.563/2023 é o elo entre a Lei 14.478/2022 e as normas do BCB. Em apenas dois artigos centrais, ele resolveu a questão mais urgente do mercado: quem, afinal, regula as exchanges de criptoativos no Brasil? A resposta foi clara — o BCB. Mas com ressalvas importantes: a CVM mantém sua competência sobre tokens de valor mobiliário, e as autoridades de defesa do consumidor e de combate ao crime preservam suas atribuições.",
        "normas": [
          {
            "texto": "Decreto 11.563/2023",
            "cor": "decreto"
          },
          {
            "texto": "Base para Res. BCB 519/520/521",
            "cor": "bcb"
          },
          {
            "texto": "Vinculado à Lei 14.478/2022",
            "cor": "lei"
          }
        ]
      },
      {
        "id": "competencia",
        "tipo": "duplo-painel",
        "titulo": "BCB como Autoridade Reguladora (Art. 1º)",
        "norma_diz": "Fica o Banco Central do Brasil autorizado a regulamentar e a supervisionar as prestadoras de serviços de ativos virtuais de que trata a Lei 14.478/2022. Cabe ao BCB: (a) autorizar o funcionamento das PSAVs; (b) estabelecer requisitos e procedimentos para autorização; (c) cancelar autorizações; (d) supervisionar e fiscalizar; (e) aplicar penalidades.",
        "na_pratica": "Na prática: o BCB tem poderes de banco central sobre as exchanges. Pode autorizar, supervisionar, multar e cancelar licenças. Isso coloca o mercado brasileiro no mesmo patamar que os bancos: sujeito à fiscalização da autoridade monetária, com capacidade de intervenção em caso de irregularidade.",
        "atencao": "O Decreto é de 2023, mas as normas operacionais (Res. 519/520/521) só foram publicadas em novembro/2025 — um hiato de 2 anos em que o mercado operou sem regulamentação infralegal completa. Durante esse período, aplicavam-se as disposições transitórias da Lei 14.478."
      },
      {
        "id": "competencias",
        "tipo": "tabela",
        "titulo": "Distribuição de Competências",
        "intro": "O Decreto preserva um ecossistema regulatório múltiplo. Entender quem faz o quê é essencial para a conformidade:",
        "colunas": [
          "Órgão",
          "Competência",
          "Excluído de"
        ],
        "linhas": [
          [
            "<strong>BCB</strong>",
            "Regular e supervisionar PSAVs que prestam serviços com ativos virtuais (não-mobiliários). Autorizar funcionamento, fiscalizar, sancionar.",
            "Ativos virtuais com característica de valor mobiliário — esses ficam com a CVM"
          ],
          [
            "<strong>CVM</strong>",
            "Emissão e negociação de ativos virtuais com característica de valor mobiliário (security tokens, tokens de renda fixa coletiva, etc.)",
            "PSAVs que só operam com criptomoedas sem característica mobiliária"
          ],
          [
            "<strong>COAF</strong>",
            "Inteligência financeira: receber comunicações de operações suspeitas das PSAVs, analisar e repassar a autoridades investigativas",
            "Supervisão e autorização de PSAVs — essa é do BCB"
          ],
          [
            "<strong>PROCON / SENACON</strong>",
            "Defesa do consumidor nas relações entre PSAVs e clientes pessoa física — CDC aplica-se integralmente",
            "Regulação prudencial e de mercado — essa é do BCB"
          ],
          [
            "<strong>MP / Polícia Federal</strong>",
            "Investigação e repressão criminal: fraudes, lavagem de dinheiro, crimes financeiros no mercado de ativos virtuais",
            "Regulação e supervisão do mercado — essas são do BCB e CVM"
          ]
        ]
      },
      {
        "id": "transicao",
        "tipo": "duplo-painel",
        "titulo": "Período de Transição e o Art. 9º da Lei",
        "norma_diz": "O Art. 9º da Lei 14.478/2022 prevê que as PSAVs em atividade na data de entrada em vigor da regulamentação podem continuar operando durante o período de adequação, observados os prazos e condições estabelecidos pela autoridade reguladora.",
        "na_pratica": "Isso criou o 'período de tolerância' que a Res. BCB 520 implementou: PSAVs já em operação em 2/2/2026 têm 270 dias para protocolar o pedido de autorização (até ~30/10/2026). Durante esse período, podem operar, mas devem cumprir progressivamente os requisitos da Resolução.",
        "atencao": "A Res. BCB 520, Art. 26 da Res. BCB 519 e Art. 88 da Res. BCB 520 detalham exatamente o que é o 'período de adequação': obrigações que começam imediatamente (PLD, segregação, saldo diário ao BCB) e aquelas com prazo estendido."
      },
      {
        "id": "pratica",
        "tipo": "fluxo",
        "titulo": "Da Lei ao Decreto às Resoluções — Como Funciona",
        "passos": [
          {
            "titulo": "Lei 14.478/2022 (Congresso Nacional)",
            "desc": "Estabelece o marco legal: define ativo virtual, PSAV, obrigações gerais, delega regulação ao Executivo. É a lei de referência — tudo emana dela."
          },
          {
            "titulo": "Decreto 11.563/2023 (Presidência da República)",
            "desc": "Designa o BCB como autoridade reguladora e supervisora das PSAVs. Define a estrutura de competências (BCB/CVM/COAF/PROCON). Vigência: 20/06/2023."
          },
          {
            "titulo": "Resolução BCB 519/2025 (BCB)",
            "desc": "Detalha os processos de autorização: 10 requisitos, 9 eventos que exigem autorização prévia, 2 fases para empresas em operação. Vigência: 2/2/2026."
          },
          {
            "titulo": "Resolução BCB 520/2025 (BCB)",
            "desc": "Detalha a constituição e funcionamento: 3 modalidades, capital, denominação, governança, segregação, PLD, Travel Rule, custódia. Vigência: 2/2/2026."
          },
          {
            "titulo": "Resolução BCB 521/2025 (BCB)",
            "desc": "Integra ativos virtuais ao câmbio: 4 categorias de operações cambiais, limites por tipo de IF, reporte mensal, altera Res. 277/278/279. Vigência: 2/2/2026 e 4/5/2026."
          }
        ]
      }
    ],
    "quiz": [
      {
        "pergunta": "O Decreto 11.563/2023 designou qual órgão como responsável por regular e supervisionar as PSAVs no Brasil?",
        "opcoes": [
          "Comissão de Valores Mobiliários (CVM)",
          "Conselho Monetário Nacional (CMN)",
          "Banco Central do Brasil (BCB)",
          "Receita Federal do Brasil (RFB)"
        ],
        "correta": 2,
        "explicacao": "O Decreto 11.563/2023 (Art. 1º) autoriza expressamente o BCB a regulamentar e supervisionar as PSAVs, incluindo autorizar funcionamento, fiscalizar e aplicar penalidades."
      },
      {
        "pergunta": "Segundo o Decreto 11.563/2023, a CVM mantém competência sobre:",
        "opcoes": [
          "Todas as PSAVs, em conjunto com o BCB",
          "Ativos virtuais com característica de valor mobiliário (security tokens)",
          "Apenas exchanges estrangeiras operando no Brasil",
          "Nenhuma — a CVM não tem papel no mercado de ativos virtuais"
        ],
        "correta": 1,
        "explicacao": "O Decreto preserva a competência da CVM sobre ativos virtuais que tenham característica de valor mobiliário (security tokens). A CVM e o BCB divulgaram notas conjuntas orientando como diferenciar os casos. A exclusividade do BCB é apenas para PSAVs que operem com ativos não-mobiliários."
      },
      {
        "pergunta": "Uma PSAV em operação antes de 2 de fevereiro de 2026 pode continuar operando durante o período de adequação. Qual é o prazo para protocolar o pedido de autorização?",
        "opcoes": [
          "2 de fevereiro de 2026 (imediatamente na vigência da norma)",
          "90 dias a partir da vigência",
          "270 dias a partir da vigência da Res. BCB 520 (~30/10/2026)",
          "365 dias a partir da vigência"
        ],
        "correta": 2,
        "explicacao": "O Art. 88, inciso I da Res. BCB 520 estabelece 270 dias contados de 2/2/2026 para protocolar o pedido de autorização — o que resulta em aproximadamente 30 de outubro de 2026. Esse prazo tem base no Art. 9º da Lei 14.478/2022."
      }
    ],
    "links": [
      {
        "label": "Decreto 11.563/2023 — Planalto",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/d11563.htm"
      },
      {
        "label": "BCB — Nota sobre competências BCB/CVM",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/ativosvirtuais"
      }
    ]
  },
  {
    "id": 4,
    "titulo": "Capital Mínimo",
    "subtitulo": "Res. Conjunta CMN/BCB nº 14 e Res. BCB nº 517, de 3 de novembro de 2025",
    "norma": "Res. Conjunta 14 + BCB 517",
    "vigencia": "Publicadas 3 nov 2025 | Cálculo vigora 1 jul 2026",
    "glossario": {
      "Capital mínimo": "Valor mínimo de capital social integralizado e patrimônio líquido que uma SPSAV deve manter para obter e manter autorização de funcionamento",
      "Patrimônio de Referência": "Medida prudencial do BCB que considera o capital social mais reservas, subtraídos ativos intangíveis e ajustes regulatórios",
      "Integralização imediata": "O capital subscrito deve ser depositado imediatamente, sem prazo para pagamento parcelado",
      "Atividade principal": "Para fins de capital, o BCB classifica as atividades por nível de risco para determinar o capital base exigido"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "As Res. Conjunta CMN/BCB nº 14 e Res. BCB nº 517 (ambas de 3/11/2025) reformularam completamente a metodologia de capital mínimo para instituições autorizadas pelo BCB — incluindo as SPSAVs. A nova metodologia é baseada nas atividades efetivamente exercidas, não mais na categoria de licença. Para SPSAVs, o resultado é um capital mínimo entre R$ 10,8 milhões e R$ 37,2 milhões.",
        "normas": [
          {
            "texto": "Res. Conjunta CMN/BCB 14/2025",
            "cor": "bcb"
          },
          {
            "texto": "Res. BCB 517/2025",
            "cor": "bcb"
          },
          {
            "texto": "Complementa Res. BCB 520/2025",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "metodologia",
        "tipo": "duplo-painel",
        "titulo": "Nova Metodologia: Por Atividade, Não Por Licença",
        "norma_diz": "O capital mínimo passa a ser calculado em função das atividades efetivamente desenvolvidas por cada instituição. A estrutura tem três camadas: (1) custo base por categoria de atividade; (2) custo tecnológico (por serviços intensivos em tecnologia); (3) fator de captação (para atividades que envolvem recursos de terceiros).",
        "na_pratica": "Antes: o capital dependia apenas do tipo de licença. Agora: depende do que você faz. Uma SPSAV que só faz custódia paga menos capital que uma que faz custódia + intermediação + câmbio. Isso torna o requisito mais justo, mas também mais complexo de calcular. O BCB disponibilizou calculadora no seu site.",
        "atencao": "O capital deve ser realizado em moeda corrente (Reais). A subscrição deve ser integralmente integralizada de imediato — não há prazo para pagamento parcelado (Art. 18, §1º da Res. BCB 520)."
      },
      {
        "id": "faixas",
        "tipo": "info-grid",
        "titulo": "Faixas de Capital para SPSAVs",
        "cards": [
          {
            "label": "Capital Mínimo",
            "valor": "R$ 10,8M",
            "sub": "Atividade mais simples (ex: só custódia)"
          },
          {
            "label": "Capital Máximo",
            "valor": "R$ 37,2M",
            "sub": "Combinação de todas as atividades"
          },
          {
            "label": "Base tecnológica",
            "valor": "R$ 2M+",
            "sub": "Por primeiro serviço intensivo em TI"
          },
          {
            "label": "Transição completa",
            "valor": "Jan 2028",
            "sub": "Plena conformidade com novo modelo"
          }
        ]
      },
      {
        "id": "cronograma-capital",
        "tipo": "timeline",
        "titulo": "Cronograma de Implementação do Capital",
        "itens": [
          {
            "data": "3 Nov 2025",
            "evento": "Res. Conjunta 14 e BCB 517 publicadas",
            "detalhe": "Nova metodologia aprovada"
          },
          {
            "data": "2 Fev 2026",
            "evento": "SPSAVs iniciam protocolo de autorização",
            "detalhe": "Apresentam demonstração de capital mínimo como requisito do Art. 2º, inciso IX da Res. BCB 519"
          },
          {
            "data": "30 Jun 2026",
            "evento": "Metodologia antiga encerra",
            "detalhe": "A partir de 1/7/2026 apenas a nova metodologia é válida"
          },
          {
            "data": "1 Jul 2026 – 31 Dez 2027",
            "evento": "Transição faseada",
            "detalhe": "Ajuste progressivo: 25% → 50% → 75% → 100% do capital exigido pela nova metodologia",
            "cor": "bcb"
          },
          {
            "data": "1 Jan 2028",
            "evento": "Plena conformidade",
            "detalhe": "100% do capital mínimo calculado pela nova metodologia",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "origem-capital",
        "tipo": "duplo-painel",
        "titulo": "Origem Lícita dos Recursos (Art. 2º, II — Res. BCB 519)",
        "norma_diz": "A origem dos recursos utilizados na integralização do capital social e na aquisição de controle e participação qualificada deve ser lícita. O BCB poderá requerer declarações de imposto de renda dos últimos 3 exercícios dos controladores, detentores de participação qualificada e administradores.",
        "na_pratica": "Os controladores precisam demonstrar que o capital investido na SPSAV vem de atividade lícita — não de crime. O BCB pode solicitar: IR dos últimos 3 anos; demonstrações financeiras do grupo; e acesso a qualquer sistema público ou privado de cadastro. Se o controlador for entidade estrangeira, precisa apresentar documentação equivalente no país de origem.",
        "atencao": "O BCB pode, subsidiariamente, considerar o patrimônio líquido da SPSAV já em operação (lucro recorrente dos últimos 5 anos) para comprovar a capacidade econômico-financeira dos controladores — isso facilita a adequação de empresas já consolidadas (Art. 2º, §2º da Res. BCB 519)."
      }
    ],
    "quiz": [
      {
        "pergunta": "Qual é o principal critério da nova metodologia de capital mínimo (Res. Conjunta 14 + BCB 517) para SPSAVs?",
        "opcoes": [
          "O tipo de licença obtida pelo BCB",
          "O volume de transações no ano anterior",
          "As atividades efetivamente exercidas pela SPSAV",
          "O número de clientes ativos"
        ],
        "correta": 2,
        "explicacao": "A nova metodologia da Res. Conjunta CMN/BCB 14 e Res. BCB 517 baseia o capital mínimo nas atividades concretas exercidas pela instituição, não mais apenas no tipo de licença. Uma SPSAV que só faz custódia tem capital menor do que uma que também faz intermediação e câmbio."
      },
      {
        "pergunta": "Qual é a faixa de capital mínimo para uma SPSAV no Brasil?",
        "opcoes": [
          "R$ 1 milhão a R$ 5 milhões",
          "R$ 5 milhões a R$ 20 milhões",
          "R$ 10,8 milhões a R$ 37,2 milhões",
          "R$ 50 milhões a R$ 100 milhões"
        ],
        "correta": 2,
        "explicacao": "Conforme as Res. Conjunta CMN/BCB 14 e Res. BCB 517, o capital mínimo para SPSAVs varia de R$ 10,8 milhões (atividades mais simples) a R$ 37,2 milhões (combinação de todas as atividades permitidas). O BCB disponibiliza calculadora no seu site para o cálculo exato."
      },
      {
        "pergunta": "Sobre a integralização do capital social de uma SPSAV, o Art. 18 da Res. BCB 520 determina que:",
        "opcoes": [
          "Pode ser integralizado em moeda estrangeira",
          "A subscrição deve ser realizada com integralização imediata da totalidade do valor subscrito, em moeda corrente",
          "Pode ser parcelado em até 24 meses",
          "Pode ser integralizado com ativos virtuais"
        ],
        "correta": 1,
        "explicacao": "O Art. 18, §1º da Res. BCB 520 é claro: 'a subscrição do capital em moeda corrente deve ser realizada mediante imediata integralização da totalidade do valor subscrito'. Não há prazo — o capital deve ser todo integralizado no ato da subscrição, em Reais."
      }
    ],
    "links": [
      {
        "label": "Res. Conjunta CMN/BCB 14/2025 — BCB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução Conjunta CMN/BCB&numero=14"
      },
      {
        "label": "Res. BCB 517/2025 — BCB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=517"
      }
    ]
  },
  {
    "id": 5,
    "titulo": "Res. BCB 519 — Autorização",
    "subtitulo": "Processos de autorização para funcionamento das SPSAVs",
    "norma": "Resolução BCB nº 519/2025",
    "vigencia": "2 de fevereiro de 2026 | 28 artigos, 10 capítulos",
    "glossario": {
      "Autorização para funcionamento": "Ato administrativo do BCB que permite a uma SPSAV iniciar legalmente as atividades de prestação de serviços de ativos virtuais",
      "Participação qualificada": "Participação direta ≥15% do capital votante ou ≥10% do capital total de uma SPSAV. Exige comunicação ao BCB e comprovação de requisitos.",
      "Grupo de controle": "Conjunto de pessoas vinculadas por acordo de votos ou controle comum que assume a condição de controlador da instituição",
      "Reputação ilibada": "Ausência de processos criminais relevantes, condenações, inadimplementos e demais situações que afetem a idoneidade do administrador ou controlador",
      "Cadeia de controle": "Conjunto de pessoas jurídicas por meio do qual o controle da instituição é exercido",
      "Detentor de participação qualificada": "Fundo de investimento ou pessoa natural/jurídica não-controladora que detenha ≥15% do capital votante ou ≥10% do capital total"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "A Res. BCB 519 disciplina o processo de autorização para funcionamento das SPSAVs — o 'rito de passagem' para operar legalmente no mercado regulado. Ela se aplica não apenas às SPSAVs, mas também a sociedades corretoras de câmbio, corretoras e distribuidoras de TVM que queiram atuar como PSAVs. O foco aqui é no processo de autorização e nos requisitos que o BCB vai avaliar antes de conceder a licença.",
        "normas": [
          {
            "texto": "Res. BCB 519/2025",
            "cor": "bcb"
          },
          {
            "texto": "Lei 14.478/2022, Arts. 2-9",
            "cor": "lei"
          },
          {
            "texto": "Decreto 11.563/2023",
            "cor": "decreto"
          },
          {
            "texto": "Res. CMN 5.105/2023",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "requisitos",
        "tipo": "lista",
        "titulo": "Os 10 Requisitos de Autorização (Art. 2º)",
        "intro": "O BCB avaliará o cumprimento de todos os requisitos antes de expedir a autorização. São condições cumulativas — a ausência de qualquer uma pode resultar em indeferimento:",
        "itens": [
          {
            "num": "I",
            "titulo": "Capacidade econômico-financeira dos controladores",
            "desc": "Os controladores (individualmente ou em conjunto) devem ter patrimônio compatível com o capital necessário para estruturar e operar a SPSAV, incluindo contingências de mercado. O BCB pode exigir IRs dos últimos 3 anos e acessar sistemas de cadastro."
          },
          {
            "num": "II",
            "titulo": "Origem lícita dos recursos",
            "desc": "O capital integralizado, o preço pago na aquisição de controle e participações qualificadas devem ser de origem comprovadamente lícita. Recursos de origem criminosa ou de paraísos fiscais sem documentação adequada inviabilizam a autorização."
          },
          {
            "num": "III",
            "titulo": "Viabilidade econômico-financeira",
            "desc": "O plano de negócios deve demonstrar que a SPSAV é economicamente viável — não apenas no papel, mas com projeções realistas de receita, despesa e capital. O BCB pode exigir a apresentação do plano antes ou depois da expedição da autorização."
          },
          {
            "num": "IV",
            "titulo": "Infraestrutura de TI compatível",
            "desc": "Os sistemas tecnológicos devem ser adequados à complexidade e aos riscos do negócio. O BCB pode requisitar certificação técnica de empresa qualificada independente."
          },
          {
            "num": "V",
            "titulo": "Estrutura de governança corporativa",
            "desc": "A governança deve ser compatível com a complexidade e os riscos da operação. Isso inclui: conselho de administração (se houver), diretoria, auditoria interna, compliance."
          },
          {
            "num": "VI",
            "titulo": "Reputação ilibada",
            "desc": "Administradores, controladores e detentores de participação qualificada (pessoas naturais) devem ter reputação ilibada: sem processos criminais, judiciais/administrativos no SFN, insolvência, inadimplementos ou outros casos que afetem a idoneidade."
          },
          {
            "num": "VII",
            "titulo": "Conhecimento do ramo do negócio",
            "desc": "A administração deve conhecer o mercado de ativos virtuais, suas fontes de recursos, a dinâmica de mercado e o gerenciamento de riscos associados."
          },
          {
            "num": "VIII",
            "titulo": "Capacitação técnica dos administradores",
            "desc": "Os diretores devem ter as competências técnicas necessárias para exercer suas funções. Pode ser dispensado para administradores com mandato em vigor na mesma instituição ou em conglomerado prudencial previamente aprovado."
          },
          {
            "num": "IX",
            "titulo": "Atendimento ao capital mínimo",
            "desc": "A SPSAV deve atender ao capital mínimo calculado conforme Res. Conjunta CMN/BCB 14 e Res. BCB 517 (R$ 10,8M a R$ 37,2M dependendo das atividades)."
          },
          {
            "num": "X",
            "titulo": "Endereço físico da sede",
            "desc": "Deve ser endereço de uso efetivo e exclusivo. Vedado indicar coworking, escritório virtual ou espaço compartilhado — exceto para empresas do mesmo conglomerado."
          }
        ],
        "atencao": "O BCB pode realizar inspeção pré-operacional para avaliar se a estrutura implementada é compatível com os requisitos III-V (Art. 25). Se constatar incompatibilidade, dará prazo para correção — e se não corrigido, indeferirá o pedido."
      },
      {
        "id": "eventos-autorizacao",
        "tipo": "lista",
        "titulo": "Os 9 Eventos que Exigem Autorização Prévia (Art. 3º)",
        "intro": "Além da autorização inicial para funcionar, outros eventos corporativos também exigem autorização prévia do BCB:",
        "itens": [
          {
            "num": "I",
            "titulo": "Funcionamento (autorização inicial)",
            "desc": "Condicionado a todos os 10 requisitos do Art. 2º."
          },
          {
            "num": "II",
            "titulo": "Mudança de modalidade",
            "desc": "Ex.: de intermediária para corretora. Condicionada aos requisitos III, IV, V, VII e IX."
          },
          {
            "num": "III",
            "titulo": "Transferência ou alteração de controle societário",
            "desc": "Condicionada aos requisitos I, II, VI e às condições de controle societário (Caps. IV e V). Dispensa: quando a transferência não altera os controladores finais."
          },
          {
            "num": "IV",
            "titulo": "Fusão, cisão ou incorporação",
            "desc": "Condicionadas ao cumprimento dos requisitos III e IX."
          },
          {
            "num": "V",
            "titulo": "Transformação societária",
            "desc": "Ex.: de Ltda. para S.A. Não há requisitos específicos além da observância geral."
          },
          {
            "num": "VI",
            "titulo": "Posse e exercício em cargos de administração",
            "desc": "Condicionada à reputação ilibada (VI) e capacitação técnica (VIII). Isso inclui diretores, membros do CA."
          },
          {
            "num": "VII",
            "titulo": "Alteração do valor do capital social",
            "desc": "Aumento: comprovação da origem lícita dos recursos (II). Redução: viabilidade (III) e capital mínimo (IX). Não se aplica a aumentos por incorporação de lucros ou reservas."
          },
          {
            "num": "VIII",
            "titulo": "Mudança de denominação social",
            "desc": "Qualquer alteração no nome empresarial exige prévia autorização."
          },
          {
            "num": "IX",
            "titulo": "Mudança de objeto social",
            "desc": "Se a nova atividade se enquadrar como PSAV. Condicionada aos requisitos III e IX."
          }
        ],
        "atencao": "Atenção especial ao item VI: a posse de um novo diretor exige autorização prévia do BCB. Se o BCB indeferir, a empresa tem 30 dias para eleger ou nomear um substituto (Art. 13)."
      },
      {
        "id": "controle",
        "tipo": "duplo-painel",
        "titulo": "Controle Societário — Quem Pode Controlar? (Art. 8º)",
        "norma_diz": "A participação societária direta que implique controle somente pode ser exercida por: (I) pessoas naturais; (II) instituições autorizadas a funcionar pelo BCB; (III) instituições financeiras sediadas no exterior; (IV) pessoas jurídicas nacionais com objeto social exclusivo de participação em IFs autorizadas pelo BCB. Fundos de investimento NÃO podem ser controladores (Art. 7º, §7º).",
        "na_pratica": "Um fundo de private equity NÃO pode diretamente controlar uma SPSAV. Mas pode ter participação qualificada (≥15% do capital votante) — apenas não pode ser controlador. A alternativa é: o fundo controla uma holding que, por sua vez, controla a SPSAV.",
        "atencao": "Participação qualificada (sem controle) ≥15% do capital votante ou ≥10% do capital total deve ser comunicada ao BCB (Art. 22). O BCB tem 60 dias para exigir comprovação de requisitos. Se não conformes, pode determinar o desfazimento da participação.",
        "destaque": "Para fundos de investimento com participação qualificada, o BCB pode extensível os requisitos aplicáveis às pessoas naturais/jurídicas para os cotistas que efetivamente conduzam a atuação do fundo (Art. 7º, §4º)."
      },
      {
        "id": "diretores",
        "tipo": "lista",
        "titulo": "Condições para Diretores e Controladores (Art. 11)",
        "intro": "Além dos requisitos de reputação e capacitação do Art. 2º, o Art. 11 estabelece condições adicionais:",
        "itens": [
          {
            "num": "I",
            "titulo": "Residência no País (obrigatória para diretores)",
            "desc": "Todos os diretores devem ser residentes no Brasil. Não há exceção. Diretores no exterior implicam indeferimento ou cancelamento."
          },
          {
            "num": "II",
            "titulo": "Ausência de condenações criminais específicas",
            "desc": "Crimes que desclassificam: falimentar, sonegação fiscal, prevaricação, corrupção ativa/passiva, concussão, peculato, contra a economia popular, a fé pública, a propriedade ou o SFN. Também: pena que vede acesso a cargos públicos."
          },
          {
            "num": "III",
            "titulo": "Não inabilitado ou suspenso",
            "desc": "Não pode estar declarado inabilitado pelo BCB, CVM, SUSEP ou órgãos similares para cargo em órgãos estatutários/contratuais de IFs ou seguradoras."
          },
          {
            "num": "IV",
            "titulo": "Não declarado falido ou insolvente",
            "desc": "Falência ou insolvência pessoal declarada desqualifica o administrador ou controlador."
          },
          {
            "num": "V",
            "titulo": "Sem indeferimento nos últimos 3 anos por declaração falsa",
            "desc": "Se o BCB já indeferiu um pedido de autorização do mesmo interessado por declaração falsa nos últimos 3 anos, esse impedimento se mantém."
          }
        ],
        "atencao": "O mandato dos administradores de SPSAVs constituídas como Ltda. deve ser por prazo determinado, com limite de 4 anos, com possibilidade de recondução (Art. 12). O mandato se estende até a posse do substituto."
      },
      {
        "id": "processo-fases",
        "tipo": "fluxo",
        "titulo": "Processo de Autorização em 2 Fases (para empresas em operação — Art. 26)",
        "passos": [
          {
            "titulo": "Fase 1 — Análise Preliminar",
            "desc": "O BCB analisa: (a) comprovação de que a SPSAV estava em atividade em 2/2/2026; (b) reputação de controladores e detentores de participação qualificada (Req. VI e Cap. V); (c) atendimento ao capital mínimo (Req. IX). O BCB pode exigir demonstrações financeiras auditadas.",
            "prazo": "Inicia após protocolo do pedido"
          },
          {
            "titulo": "Fase 2 — Análise Completa",
            "desc": "O BCB analisa os demais requisitos: capacidade dos controladores (I), viabilidade (III), TI (IV), governança (V), conhecimento do ramo (VII), capacitação técnica (VIII). Pode atualizar documentos das Fases 1b e 1c.",
            "prazo": "Após manifestação do BCB na Fase 1"
          },
          {
            "titulo": "Aprovação e Autorização",
            "desc": "BCB expede a autorização para funcionamento na modalidade solicitada. A partir daí, a SPSAV opera regularmente e está sujeita à supervisão contínua.",
            "prazo": "Sem prazo legal definido para o BCB deliberar"
          },
          {
            "titulo": "Indeferimento — Consequências (Art. 18)",
            "desc": "Se indeferido e sem recurso: a SPSAV tem 30 dias para (I) cessar a prestação de serviços de AV; (II) comunicar o encerramento; (III) devolver ativos virtuais para instituições habilitadas indicadas pelos clientes; (IV) devolver recursos financeiros para contas dos clientes.",
            "prazo": "30 dias da notificação definitiva"
          }
        ]
      },
      {
        "id": "cancelamento",
        "tipo": "duplo-painel",
        "titulo": "Cancelamento de Autorização (Arts. 19-21)",
        "norma_diz": "O cancelamento pode ocorrer: (I) a pedido da instituição; ou (II) de ofício pelo BCB quando verificar: falta de prática habitual da atividade; não localização no endereço informado; interrupção por mais de 4 meses do envio de demonstrativos sem justificativa; descumprimento do plano de negócios de forma injustificada.",
        "na_pratica": "Uma SPSAV não pode simplesmente abandonar suas atividades sem processo formal. Deve comunicar clientes com 30 dias de antecedência antes de pedir o cancelamento (Art. 20). O BCB, antes de cancelar de ofício, deve: (1) publicar a intenção com prazo de 30 dias para objeções; (2) notificar a instituição; (3) considerar os riscos para o mercado.",
        "atencao": "O cancelamento em caso de fusão/incorporação não exige processo específico se a sociedade resultante for IF autorizada pelo BCB (Art. 19, §1º)."
      }
    ],
    "quiz": [
      {
        "pergunta": "O Art. 2º, inciso X da Res. BCB 519 veda que a sede de uma SPSAV seja em:",
        "opcoes": [
          "Zona rural ou área de baixa densidade urbana",
          "Coworking, escritório virtual ou espaço compartilhado",
          "Imóvel alugado (exige sede própria)",
          "Edifício compartilhado com mais de uma empresa"
        ],
        "correta": 1,
        "explicacao": "O Art. 2º, §6º da Res. BCB 519 é explícito: o endereço deve ser de uso efetivo e exclusivo da instituição. É vedada a indicação de coworking, escritório virtual ou espaço compartilhado como sede — exceto para empresas do mesmo conglomerado."
      },
      {
        "pergunta": "Qual das seguintes pessoas jurídicas NÃO pode exercer controle direto sobre uma SPSAV?",
        "opcoes": [
          "Pessoa natural (sócio controlador)",
          "Banco múltiplo autorizado pelo BCB",
          "Instituição financeira sediada no exterior",
          "Fundo de investimento"
        ],
        "correta": 3,
        "explicacao": "O Art. 7º, §7º da Res. BCB 519 é categórico: 'Não são admitidos fundos de investimento como controladores ou integrantes de grupo de controle das instituições'. Fundos podem ter participação qualificada (sem controle), mas não podem controlar."
      },
      {
        "pergunta": "Um diretor de uma SPSAV é residente no exterior. Isso é:",
        "opcoes": [
          "Permitido, desde que tenha representante legal no Brasil",
          "Permitido apenas para diretores não-executivos",
          "Vedado pela Res. BCB 519, que exige residência no país para cargos de direção",
          "Permitido com autorização especial do BCB"
        ],
        "correta": 2,
        "explicacao": "O Art. 11, inciso I da Res. BCB 519 é imperativo: 'ser residente no país, para os cargos de direção'. Não há exceção ou autorização especial — diretores devem ser residentes no Brasil."
      },
      {
        "pergunta": "Uma SPSAV tem seu pedido de autorização indeferido definitivamente. Em quanto tempo deve devolver os ativos dos clientes?",
        "opcoes": [
          "Imediatamente (no mesmo dia da notificação)",
          "30 dias contados da notificação definitiva do indeferimento",
          "60 dias contados do indeferimento",
          "90 dias ou na data acordada com cada cliente"
        ],
        "correta": 1,
        "explicacao": "O Art. 18 da Res. BCB 519 determina que, após indeferimento definitivo, a SPSAV tem 30 dias para: cessar serviços, comunicar clientes, devolver ativos virtuais para instituições habilitadas indicadas pelos clientes, e devolver recursos financeiros para contas dos clientes."
      },
      {
        "pergunta": "No processo em 2 fases da Res. BCB 519, a Fase 1 analisa principalmente:",
        "opcoes": [
          "Todos os 10 requisitos do Art. 2º simultaneamente",
          "Comprovação de atividade, reputação dos controladores e capital mínimo",
          "Plano de negócios e viabilidade econômica",
          "Infraestrutura de TI e governança corporativa"
        ],
        "correta": 1,
        "explicacao": "O Art. 26, inciso I da Res. BCB 519 define a Fase 1: (a) comprovação de que a SPSAV estava em atividade na data de vigência; (b) reputação de controladores e participantes qualificados (Req. VI e Cap. V); (c) capital mínimo (Req. IX). A Fase 2 analisa os demais requisitos."
      }
    ],
    "links": [
      {
        "label": "Res. BCB 519/2025 — Texto Oficial",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=519"
      },
      {
        "label": "Res. CMN 5.105/2023 — BCB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução CMN&numero=5105"
      }
    ]
  },
  {
    "id": 6,
    "titulo": "Res. BCB 520 — Funcionamento",
    "subtitulo": "Constituição, operação, governança, PLD e custódia das SPSAVs",
    "norma": "Resolução BCB nº 520/2025",
    "vigencia": "2 de fevereiro de 2026 | 92 artigos + Anexo (33 páginas)",
    "glossario": {
      "Prova de reservas": "Mecanismo criptográfico (geralmente árvore de Merkle) para demonstrar publicamente que a SPSAV possui os ativos virtuais que declara ter em nome dos clientes, sem revelar saldos individuais",
      "Segregação patrimonial": "Separação legal e contábil entre os ativos da SPSAV e os ativos dos clientes — proibida a mistura ou uso de ativos de clientes para operações próprias",
      "Staking": "Bloqueio de ativos virtuais pela SPSAV para participar da validação de transações em redes de prova de participação (Proof of Stake) — clientes recebem recompensas proporcionais",
      "Stablecoin": "Ativo virtual referenciado em moeda fiduciária — lastreado em moeda fiduciária e títulos públicos emitidos pelos mesmos governos",
      "Carteira fria": "Carteira de ativos virtuais desconectada da internet — mais segura para guarda de grandes volumes",
      "Carteira quente": "Carteira constantemente conectada à internet — mais ágil para operações, mas com maior risco de ataque",
      "Carteira morna": "Carteira com camadas de segurança adicionais, mantida conectada com proteções extras — intermediária entre fria e quente",
      "Chave privada": "Instrumento criptográfico que controla e autentica transações com ativos virtuais — quem possui a chave, controla o ativo",
      "Contrato inteligente": "Programa que executa automaticamente condições predefinidas em blockchain — a SPSAV deve testar vulnerabilidades em contratos inteligentes que usa",
      "Travel Rule": "Obrigação de transmitir dados do originador e beneficiário em transfers de ativos virtuais (Art. 44 da Res. BCB 520, implementa Rec. 16 do GAFI)",
      "UBO": "Beneficiário final (Ultimate Beneficial Owner) — pessoa natural que efetivamente controla ou se beneficia de uma entidade ou operação. Identificação obrigatória até 25% de participação",
      "Suitability": "Avaliação do perfil de risco do cliente antes de oferecer produtos/serviços — cliente com perfil incompatível deve assinar termo de ciência de risco",
      "Airdrop": "Distribuição gratuita de ativos virtuais para clientes, geralmente para fomento de liquidez ou estágio inicial do projeto",
      "Formador de mercado": "Entidade que apresenta cotações de compra e venda de forma contínua no ambiente de negociação, fomentando liquidez",
      "Provedor de liquidez": "Entidade que fornece liquidez para operações — tem como contrapartes principais investidores institucionais e PSAVs"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "A Resolução BCB 520/2025 é o coração do marco regulatório para SPSAVs. Com 92 artigos e um Anexo detalhado, ela define tudo desde as modalidades de atuação até os contratos de custódia, passando por PLD/FT, Travel Rule, segurança cibernética e proteção do consumidor. É o documento de referência obrigatório para qualquer SPSAV — equivale ao estatuto regulatório de um banco no mundo dos ativos virtuais.",
        "normas": [
          {
            "texto": "Res. BCB 520/2025",
            "cor": "bcb"
          },
          {
            "texto": "Circ. BCB 3.978/2020 (PLD)",
            "cor": "bcb"
          },
          {
            "texto": "Lei 14.478/2022",
            "cor": "lei"
          },
          {
            "texto": "Lei 13.810/2019 (sanções)",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "modalidades",
        "tipo": "tabela",
        "titulo": "As 3 Modalidades de SPSAV (Arts. 4-10)",
        "intro": "A Res. BCB 520 classifica as SPSAVs em 3 modalidades exclusivas. Intermediárias e Custodiantes NÃO podem acumular as atividades uma da outra — a Corretora é a única que faz ambas:",
        "colunas": [
          "Modalidade",
          "Objeto Social Principal",
          "Atividades Permitidas",
          "Vedação"
        ],
        "linhas": [
          [
            "<strong>Intermediária</strong> de Ativos Virtuais",
            "Intermediação de AV",
            "Subscrição de emissões; compra/venda/troca; gestão de carteiras; agente fiduciário; staking; câmbio com AV; emissão e-money; provedor de liquidez; formador de mercado; aconselhamento financeiro",
            "Não pode acumular atividades de custódia isoladamente"
          ],
          [
            "<strong>Custodiante</strong> de Ativos Virtuais",
            "Custódia de AV",
            "Guarda e controle de chaves privadas; posição atualizada dos ativos; atendimento de instruções; tratamento de eventos; administração de dados. Staking: somente se autorizado para todas as atividades I-IV.",
            "Não pode acumular atividades de intermediação isoladamente"
          ],
          [
            "<strong>Corretora</strong> de Ativos Virtuais",
            "Intermediação + Custódia",
            "Todas as atividades de intermediação E custódia (com segregação funcional interna entre as duas).",
            "Deve manter separação clara entre unidades de intermediação e custódia (Art. 85)"
          ]
        ]
      },
      {
        "id": "constituicao",
        "tipo": "duplo-painel",
        "titulo": "Constituição e Denominação (Arts. 14-17)",
        "norma_diz": "A SPSAV deve: (I) ser constituída como sociedade empresária limitada ou anônima; (II) ter objeto social principal voltado às atividades da Resolução; (III) possuir mínimo 3 diretores com responsabilidades por: (a) condução geral; (b) PLD/FT; (c) controles internos/compliance; (d) riscos/capital/divulgação; (e) segurança cibernética. É vedada a constituição como empresa individual (unipessoal). A expressão 'Sociedade Prestadora de Serviços de Ativos Virtuais' é obrigatória no nome e privativa.",
        "na_pratica": "Na prática: (a) você não pode abrir uma MEI ou firma individual para ser SPSAV — exige Ltda. ou S.A.; (b) se já existe com outro nome, precisa alterar para incluir 'SPSAV' antes de protocolar o pedido de autorização (Art. 15, §3º); (c) os 3 diretores podem ser a mesma pessoa para diferentes responsabilidades (a e b podem acumular, exceto quando há conflito de interesses).",
        "atencao": "Fundos de investimento não podem ser controladores, mas SPSAVs podem captar recursos via emissão de ações (Art. 12, II). Vedado: captar recursos do público de outra forma, oferecer crédito aos clientes, ou participar do capital de outras IFs."
      },
      {
        "id": "segregacao",
        "tipo": "duplo-painel",
        "titulo": "Segregação Patrimonial (Arts. 28-31)",
        "norma_diz": "As PSAVs devem: (1) manter recursos financeiros próprios segregados dos dos clientes, em contas de pagamento ou depósito individualizadas em nome de cada cliente; (2) separar ativos virtuais próprios dos ativos dos clientes em carteiras distintas; (3) documentar a política de segregação; (4) realizar auditoria independente bienalmente (com resultado publicado no site); (5) implementar prova de reservas. Limite: até 5% dos ativos totais dos clientes podem ficar em carteiras dos clientes (apenas para cobrir liquidez imediata).",
        "na_pratica": "Os ativos dos clientes NÃO pertencem à SPSAV. Se a SPSAV falir, os ativos dos clientes devem estar protegidos. A segregação técnica exige: carteiras de AV separadas para cada cliente (ou segregadas por cliente), contas bancárias individualizadas para os recursos em BRL, e registros que identifiquem com clareza quem é o titular de cada ativo.",
        "atencao": "Vedado usar ativos de clientes para operações próprias (Art. 31). Exceção apenas para: (a) staking com anuência do cliente; (b) operações com investidores qualificados/profissionais com anuência expressa. Mesmo nesses casos, o cliente deve ser previamente informado dos riscos."
      },
      {
        "id": "prova-reservas",
        "tipo": "duplo-painel",
        "titulo": "Prova de Reservas e Auditoria (Art. 30)",
        "norma_diz": "A política de segregação deve incluir: (I) carteiras distintas para ativos de clientes; (II) métodos para prova de reservas; (III) auditoria independente bienal com nível de asseguração razoável, resultado publicado no site; (IV) procedimentos para transferência de ativos em caso de descontinuidade.",
        "na_pratica": "A prova de reservas (geralmente via árvore de Merkle) permite que qualquer cliente verifique se seus ativos estão realmente custodiados, sem revelar o saldo dos outros. É uma resposta direta à crise da FTX (2022): a fraude da FTX só foi possível porque não havia transparência sobre as reservas. A auditoria bienal deve ter resultado tornado público no site da SPSAV.",
        "destaque": "Custodiantes devem realizar auditoria ANUAL (mais frequente que a bienal geral — Art. 73, §5º). Devem também entregar ao BCB mensalmente a prova de reservas dos ativos custodiados (Art. 88, inciso III, alínea d)."
      },
      {
        "id": "pld",
        "tipo": "duplo-painel",
        "titulo": "PLD/FT — Controle e Monitoramento (Arts. 43-47)",
        "norma_diz": "As PSAVs devem manter 11 políticas documentadas: conduta; coleta/análise de dados; fraudes; riscos e continuidade; terceiros; chaves privadas; PLD/FT; segurança institucional; segurança cibernética; cloud; proteção de dados pessoais. Devem atender à regulamentação específica de PLD/FT (Circ. BCB 3.978/2020). Para cada transferência, devem transmitir: nome, conta, endereço e CPF/CNPJ do originador + nome e conta do beneficiário.",
        "na_pratica": "As 11 políticas devem ser documentadas, aprovadas pela diretoria e revisadas periodicamente. Não basta ter — precisa documentar, implementar e auditar. A transmissão de dados do originador e beneficiário nas transferências (Travel Rule) é implementada em etapas: nacional até ~fev/2027, internacional até ~fev/2028. Até lá: autodeclarações dos clientes são admitidas.",
        "atencao": "Art. 43, §5º faz referência explícita às listas do GAFI: as listas de suspeição se referem às listas de países com medidas frágeis de combate à LD/FT elaboradas pelo GAFI (lista cinza e lista negra). A PSAV deve monitorar e aplicar controles reforçados para clientes e operações dessas jurisdições."
      },
      {
        "id": "travel-rule",
        "tipo": "fluxo",
        "titulo": "Travel Rule — Implementação Faseada (Art. 89)",
        "passos": [
          {
            "titulo": "Fase Transitória (até conclusão das etapas)",
            "desc": "As PSAVs podem usar autodeclarações dos clientes para identificar: cliente, beneficiário, ativo virtual, montante e finalidade da transação. Essas declarações devem ser documentadas e mantidas à disposição do BCB.",
            "prazo": "Até fev/2027 (nacional) ou fev/2028 (internacional)"
          },
          {
            "titulo": "Etapa I — Mercado Nacional (~fev/2027)",
            "desc": "Estabelecer procedimentos para transmissão de informações entre PSAVs constituídas no Brasil. Inclui: nome, conta, CPF/CNPJ, endereço e carteira do originador + nome, conta e carteira do beneficiário.",
            "prazo": "365 dias após 2/2/2026"
          },
          {
            "titulo": "Etapa II — Mercado Internacional (~fev/2028)",
            "desc": "Estender os procedimentos para operações internacionais, incluindo entidades fora do Brasil com as quais as PSAVs mantenham relações comerciais.",
            "prazo": "365 dias após conclusão da Etapa I"
          },
          {
            "titulo": "Plena Conformidade (2/2/2028)",
            "desc": "Travel Rule obrigatória para todas as SPSAVs autorizadas a funcionar no país — tanto nacionais quanto internacionais.",
            "prazo": "2 de fevereiro de 2028"
          }
        ]
      },
      {
        "id": "seguranca-cyber",
        "tipo": "lista",
        "titulo": "Segurança Cibernética (Arts. 48-50)",
        "intro": "A Res. BCB 520 detalha requisitos robustos de segurança, compatíveis com os de instituições financeiras:",
        "itens": [
          {
            "num": "1",
            "titulo": "Gestão de identidades e controle de acessos",
            "desc": "Controles físicos e lógicos para prevenir acesso não autorizado a sistemas e dados sensíveis. Alçadas: concessão, criação de senhas, desativação preventiva em situações suspeitas."
          },
          {
            "num": "2",
            "titulo": "Monitoramento contínuo e resposta a incidentes",
            "desc": "Sistema permanente de detecção de ameaças e incidentes, com plano de resposta documentado e compatível com a política de cybersecurity."
          },
          {
            "num": "3",
            "titulo": "Medidas preventivas para DeFi",
            "desc": "Obrigação específica de adotar medidas preventivas para mitigar incidentes cibernéticos em operações com DeFi (finanças descentralizadas)."
          },
          {
            "num": "4",
            "titulo": "Guarda de chaves privadas",
            "desc": "Política documentada para geração, custódia e gerenciamento de chaves privadas. Se segmentadas: armazenadas em locais diferentes. Módulos de segurança (HSMs), protocolos de acesso por alçadas."
          },
          {
            "num": "5",
            "titulo": "Testes de sistemas e contratos inteligentes",
            "desc": "Análise de vulnerabilidades dos sistemas e do ambiente computacional. Revisão por analistas independentes. Testes de robustez e segurança — incluindo contratos inteligentes que a PSAV utiliza."
          },
          {
            "num": "6",
            "titulo": "Cultura de segurança",
            "desc": "Treinamentos regulares de funcionários, certificações técnicas, qualificações externas para reforço das práticas."
          }
        ],
        "atencao": "A PSAV permanece responsável mesmo quando terceiriza a segurança cibernética para fornecedores (Art. 51). A contratação de serviços de TI é considerada 'serviço relevante' sujeito às regras dos Arts. 32-42 (diligência prévia, plano de recuperação, acesso do BCB ao contratado)."
      },
      {
        "id": "suitability",
        "tipo": "duplo-painel",
        "titulo": "Suitability — Perfil de Risco do Cliente (Arts. 58-59)",
        "norma_diz": "As PSAVs devem conhecer o perfil do cliente quanto a: nível de familiaridade com o mercado de ativos virtuais; interesses financeiros; tolerância ao risco. Quando o cliente desejar realizar operações incompatíveis com seu perfil, a PSAV deve solicitar declaração específica ou termo de ciência de risco. A avaliação de perfil deve ser documentada e mantida à disposição do BCB.",
        "na_pratica": "Uma SPSAV não pode simplesmente deixar qualquer cliente fazer qualquer operação. O processo de onboarding deve incluir um questionário de suitability para avaliar: experiência com cripto, objetivos de investimento, tolerância à volatilidade. Cliente sem perfil adequado para derivativos de cripto, por exemplo, deve assinar um 'termo de ciência de risco' antes de operar.",
        "destaque": "A PSAV deve informar claramente a ausência de cobertura do FGC (Fundo Garantidor de Créditos) e do FGCoop para os ativos virtuais (Art. 68). Isso deve constar no contrato e ser apresentado no cadastro, antes da assinatura."
      },
      {
        "id": "custodia",
        "tipo": "duplo-painel",
        "titulo": "Custódia — Os 19 Elementos do Contrato (Art. 73)",
        "norma_diz": "O contrato de custódia de ativos virtuais deve conter no mínimo: (I) identificação das partes; (II) deveres e direitos; (III) natureza do serviço (tipos de carteiras: quente/morna/fria, coletiva/individual); (IV) riscos e mitigações; (V) método de guarda da chave privada; (VI) meios de comunicação; (VII) terceiros contratados; (VIII) tarifas; (IX) legislação aplicável; (X) controles internos e auditoria anual; (XI) staking; (XII) transferência de custódia; (XIII) somente sob instrução do titular; (XIV) prazos de atendimento; (XV) eventos; (XVI) períodos de atualização; (XVII) risco de atraso; (XVIII) fontes de precificação; (XIX) ativos e sistemas regulados.",
        "na_pratica": "O contrato de custódia é muito mais detalhado do que um contrato de conta bancária comum. Precisa descrever tecnicamente como a SPSAV guarda as chaves (HSM? Multi-sig? Air-gapped?), quais carteiras usa (fria, morna, quente — em que percentual?), e o que acontece se ela falir. O custodiante é responsável objetivamente por perdas causadas por negligência, imperícia, imprudência ou dolo (Art. 81).",
        "atencao": "Vedado ao custodiante usar instrumentos de controle que impeçam o atendimento imediato de ordens judiciais ou de autoridades competentes (Art. 73, §3º). Os ativos dos clientes precisam estar sempre acessíveis às autoridades legítimas."
      },
      {
        "id": "elegibilidade-ativos",
        "tipo": "duplo-painel",
        "titulo": "Elegibilidade de Ativos — Curadoria (Arts. 64-66)",
        "norma_diz": "A seleção de ativos virtuais ofertados deve ser baseada em critérios claros, justificados, transparentes e amplamente divulgados. A PSAV deve estabelecer políticas de oferta, listagem, suspensão e deslistagem, baseadas em decisões de comitês técnicos. O Anexo da Res. BCB 520 lista 20 requisitos mínimos para seleção, incluindo: whitepaper, mecanismo de consenso, equipe, auditoria de código, concentração de propriedade, histórico de segurança.",
        "na_pratica": "A SPSAV não pode listar qualquer token sem análise. Deve ter um 'Comitê de Listing' com critérios documentados e públicos para: (a) inclusão; (b) revisão periódica; (c) suspensão; (d) deslistagem. Vedada a oferta de ativos que facilitem anonimato ou dificultem a identificação do titular (Art. 64, §2º, III) — isso inclui 'moedas de privacidade' como Monero.",
        "atencao": "Stablecoins têm requisitos adicionais (Art. 65): análise da qualidade do mecanismo de estabilização, reservas, auditorias do emissor, rating do emissor/custodiante. Vedada a oferta de stablecoin cujas reservas sejam controladas por algoritmos — exige reservas em moeda fiduciária e títulos públicos."
      },
      {
        "id": "vedacoes",
        "tipo": "lista",
        "titulo": "Vedações Críticas (Arts. 12, 31, 90, 91)",
        "intro": "A Res. BCB 520 estabelece vedações expressas que não admitem exceção:",
        "itens": [
          {
            "num": "Art. 12",
            "titulo": "Vedado às SPSAVs:",
            "desc": "(I) oferecer crédito a clientes; (II) captar recursos do público exceto via ações; (III) participar do capital de outras IFs autorizadas pelo BCB."
          },
          {
            "num": "Art. 31",
            "titulo": "Vedado usar ativos de clientes para operações próprias",
            "desc": "Exceções: staking com anuência do cliente e operações com investidores qualificados com anuência expressa."
          },
          {
            "num": "Art. 90, III",
            "titulo": "Vedado mixers e embaralhadores",
            "desc": "Proibido contratar, adotar ou usar mecanismos e procedimentos que dificultem a detecção, investigação ou processamento de crimes — especificamente mixers (misturadores) e tumblers (embaralhadores)."
          },
          {
            "num": "Art. 91",
            "titulo": "Vedado operar com não-autorizadas a partir de 30/10/2026",
            "desc": "A partir de 30 de outubro de 2026, IFs e PSAVs não podem realizar ou viabilizar operações com entidades que prestem serviços de AV no país sem autorização ou pedido em análise no BCB."
          }
        ],
        "atencao": "O Art. 91 cria um 'efeito cascata': não é só a PSAV não-autorizada que está proibida — qualquer IF (banco, corretora) também fica proibida de operar com ela. Isso cria incentivo para que o mercado completo se regularize."
      },
      {
        "id": "transicao-270",
        "tipo": "fluxo",
        "titulo": "Transição — O que a SPSAV deve fazer desde o protocolo (Art. 88)",
        "passos": [
          {
            "titulo": "Imediatamente na vigência (2/2/2026)",
            "desc": "Começar a ajustar processos para compatibilização com a Resolução: PLD, segregação, governança.",
            "prazo": "A partir de 2/2/2026"
          },
          {
            "titulo": "Protocolar o pedido de autorização",
            "desc": "Com a documentação da Fase 1 (prova de atividade, reputação dos controladores, capital mínimo). Apresentar comprovação de: (a) estrutura de gerenciamento de riscos; (b) política de segurança cibernética; (c) política de controles internos PLD; (d) procedimentos para sanções Lei 13.810/2019; (e) regulação contábil COSIF.",
            "prazo": "Até 270 dias = ~30/10/2026"
          },
          {
            "titulo": "A partir do protocolo: enviar ao BCB periodicamente",
            "desc": "(a) diariamente: dados dos clientes ao CCS; (b) diariamente: saldos contábeis em favor dos clientes; (c) diariamente: total de AV custodiados por conta própria e de terceiros; (d) mensalmente: prova de reservas (por AV, quantidades e valores); (e) mensalmente: total em staking.",
            "prazo": "Desde o protocolo até conclusão da Fase 1"
          },
          {
            "titulo": "Concluída Fase 1 — plena conformidade",
            "desc": "SPSAV passa a observar integralmente a Res. BCB 520, incluindo todos os demais requisitos ainda não exigidos durante o período de adequação.",
            "prazo": "Após manifestação do BCB na Fase 1"
          }
        ]
      }
    ],
    "quiz": [
      {
        "pergunta": "Uma Corretora de Ativos Virtuais (Art. 10 da Res. BCB 520) pode:",
        "opcoes": [
          "Somente fazer custódia de ativos virtuais",
          "Somente fazer intermediação de ativos virtuais",
          "Fazer intermediação E custódia, mas com separação funcional interna",
          "Fazer intermediação, custódia e oferecer crédito aos clientes"
        ],
        "correta": 2,
        "explicacao": "O Art. 10 define que a Corretora de Ativos Virtuais tem por objeto social a intermediação E a custódia. O Art. 85 exige separação interna entre as funções para mitigar conflitos de interesses. O Art. 12 veda a oferta de crédito a clientes para qualquer SPSAV."
      },
      {
        "pergunta": "A prova de reservas (Art. 30 da Res. BCB 520) serve para:",
        "opcoes": [
          "Comprovar para a RFB o pagamento de impostos sobre criptoativos",
          "Demonstrar publicamente que a SPSAV possui os ativos virtuais que declara ter em nome dos clientes",
          "Verificar se o capital mínimo está integralizado",
          "Aprovar a listagem de novos ativos virtuais na plataforma"
        ],
        "correta": 1,
        "explicacao": "A prova de reservas é um mecanismo criptográfico (geralmente via árvore de Merkle) que permite a qualquer cliente verificar se seus ativos estão custodiados, sem revelar saldos individuais de outros clientes. Foi criada como resposta a fraudes como a da FTX, onde ativos dos clientes foram usados para operações próprias."
      },
      {
        "pergunta": "A Travel Rule (Art. 44 e 89 da Res. BCB 520) exige transmissão de dados entre PSAVs. Qual é o prazo para implementação no mercado nacional?",
        "opcoes": [
          "2 de fevereiro de 2026 (imediatamente na vigência)",
          "365 dias a partir da vigência (~fev/2027)",
          "2 de fevereiro de 2028 (mesmo prazo do mercado internacional)",
          "Sem prazo definido — a critério de cada SPSAV"
        ],
        "correta": 1,
        "explicacao": "O Art. 89 da Res. BCB 520 define implementação em duas etapas: Etapa I (mercado nacional): 365 dias após 2/2/2026, i.e., aproximadamente fevereiro/2027. Etapa II (mercado internacional): mais 365 dias, i.e., fevereiro/2028. Até a conclusão, autodeclarações dos clientes são admitidas."
      },
      {
        "pergunta": "Quais ativos virtuais são expressamente vedados de oferta pelas SPSAVs (Art. 64, §2º, III)?",
        "opcoes": [
          "Ativos com volatilidade acima de 50% ao ano",
          "Ativos cujo preço seja inferior a R$ 1,00",
          "Ativos que facilitem anonimato ou dificultem a identificação do titular (moedas de privacidade)",
          "Ativos não listados em bolsas estrangeiras reguladas"
        ],
        "correta": 2,
        "explicacao": "O Art. 64, §2º, inciso III da Res. BCB 520 veda a oferta de ativos virtuais que contenham características de fragilidade, insegurança ou riscos que favoreçam lavagem de dinheiro e financiamento do terrorismo 'por meio de facilitação de anonimato ou dificuldade de identificação do titular'. Isso abrange moedas de privacidade como Monero (XMR), Zcash (ZEC) e similares."
      },
      {
        "pergunta": "A partir de quando as PSAVs são proibidas de operar com entidades não autorizadas (Art. 91)?",
        "opcoes": [
          "2 de fevereiro de 2026",
          "4 de maio de 2026",
          "30 de outubro de 2026",
          "1 de janeiro de 2027"
        ],
        "correta": 2,
        "explicacao": "O Art. 91 da Res. BCB 520 estabelece que, a partir de 30 de outubro de 2026, as IFs e PSAVs ficam proibidas de realizar ou viabilizar operações no mercado de ativos virtuais com entidades não autorizadas ou sem pedido em análise no BCB."
      }
    ],
    "links": [
      {
        "label": "Res. BCB 520/2025 — Texto Oficial",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=520"
      },
      {
        "label": "Circular BCB 3.978/2020 (PLD) — BCB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978"
      },
      {
        "label": "Lei 13.810/2019 (Sanções) — Planalto",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13810.htm"
      }
    ]
  },
  {
    "id": 7,
    "titulo": "Res. BCB 521 — Câmbio",
    "subtitulo": "Ativos virtuais no mercado de câmbio brasileiro — alterações às Res. BCB 277, 278 e 279",
    "norma": "Resolução BCB nº 521/2025",
    "vigencia": "2 fev 2026 (estrutural) | 4 mai 2026 (reporte ACAM212)",
    "glossario": {
      "Operação cambial com AV": "Pagamento, transferência, ou troca de ativos virtuais que envolva relação entre residentes e não-residentes no Brasil",
      "Stablecoin": "Ativo virtual referenciado em moeda fiduciária — compra, venda ou troca de stablecoins é operação cambial (Art. 76-A, IV)",
      "Carteira autocustodiada": "Carteira cujo proprietário detém o controle da chave privada, sem necessidade de participação de PSAV (self-custody wallet)",
      "Res. BCB 277/2022": "Resolução que regulamenta o mercado de câmbio brasileiro — alterada pela Res. BCB 521 para incluir as atividades de ativos virtuais",
      "Res. BCB 278/2022": "Disciplina capitais estrangeiros no país — alterada para incluir crédito externo e IED em ativos virtuais",
      "Res. BCB 279/2022": "Disciplina capitais brasileiros no exterior — alterada para incluir operações com AV",
      "ACAM212": "Arquivo de reporte de operações de câmbio com ativos virtuais — envio mensal via STA (Sistema de Transferência de Arquivos) em formato XML",
      "STA": "Sistema de Transferência de Arquivos — sistema do BCB para recebimento de informações das instituições supervisionadas",
      "SCE-IED": "Sistema de Controle Externo — Investimento Estrangeiro Direto. Usado para reportar aportes de capital em AV por estrangeiros",
      "SCE-Crédito": "Sistema de Controle Externo — Crédito. Usado para reportar empréstimos externos em stablecoins"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "A Resolução BCB 521/2025 integra os ativos virtuais ao mercado de câmbio brasileiro. Ela altera as Res. BCB 277 (mercado de câmbio), 278 (capitais estrangeiros) e 279 (capitais brasileiros no exterior) para incluir as atividades das PSAVs. Complementada pela IN BCB 693/2025 (19/12/2025), que detalha o reporte técnico via ACAM212. A vigência é faseada: aspectos estruturais em 2/2/2026; reporte mensal em 4/5/2026.",
        "normas": [
          {
            "texto": "Res. BCB 521/2025",
            "cor": "bcb"
          },
          {
            "texto": "Altera BCB 277/278/279",
            "cor": "bcb"
          },
          {
            "texto": "IN BCB 693/2025",
            "cor": "bcb"
          },
          {
            "texto": "Lei 14.286/2021 (câmbio)",
            "cor": "lei"
          }
        ]
      },
      {
        "id": "operacoes-cambiais",
        "tipo": "lista",
        "titulo": "As 4 Operações de AV Enquadradas como Câmbio (Art. 76-A)",
        "intro": "O novo Título VIII-A inserido na Res. BCB 277 define quais atividades com ativos virtuais são operações cambiais:",
        "itens": [
          {
            "num": "I",
            "titulo": "Pagamento ou transferência internacional com ativos virtuais",
            "desc": "Liquidação que envolva alteração de titularidade entre residente e não-residente (ou entre não-residentes). Inclui envio ou recebimento de AV do exterior pela mesma pessoa."
          },
          {
            "num": "II",
            "titulo": "Transferência de AV relacionada a cartão/pagamento eletrônico internacional",
            "desc": "Transferência de AV de ou para cliente de PSAV para cumprir obrigação de uso internacional de cartão ou meio de pagamento eletrônico."
          },
          {
            "num": "III",
            "titulo": "Transferência de ou para carteira autocustodiada",
            "desc": "Mesmo sem ser pagamento internacional — qualquer transferência para self-custody wallet exige identificação do proprietário da carteira."
          },
          {
            "num": "IV",
            "titulo": "Compra, venda ou troca de stablecoins",
            "desc": "Qualquer operação com ativos virtuais referenciados em moeda fiduciária (USDT, USDC, BRL Coin etc.) é operação cambial."
          }
        ],
        "atencao": "Vedado: (a) comprar ou vender AV com pagamento em moeda estrangeira (mesmo em livro de ofertas — Art. 76-A, §2º); (b) movimentar recursos de terceiros via AV no câmbio, exceto quando a PSAV presta serviço a IF autorizada que atue no interesse de seus clientes (Art. 76-A, §3º)."
      },
      {
        "id": "limites",
        "tipo": "tabela",
        "titulo": "Limites por Tipo de Instituição (Art. 29 alterado da Res. BCB 277)",
        "intro": "A Res. BCB 521 definiu limites diferentes para cada tipo de instituição autorizada a operar com AV no câmbio:",
        "colunas": [
          "Tipo de IF",
          "Operações Permitidas com AV",
          "Limite — Contraparte Não Autorizada"
        ],
        "linhas": [
          [
            "<strong>Bancos comerciais, de câmbio, de investimento, múltiplos e CEF</strong>",
            "Todas as operações cambiais — AV somente para IFs que também sejam PSAVs",
            "N/A (operações interbancárias sem limite específico)"
          ],
          [
            "<strong>Corretoras e Distribuidoras de TVM</strong>",
            "Câmbio com clientes (pronta); interbancário e arbitragens",
            "N/A"
          ],
          [
            "<strong>Corretoras de câmbio</strong>",
            "Câmbio com clientes até US$500k; AV como PSAV",
            "<strong>US$ 500.000</strong> por pagamento ou transferência com AV quando contraparte não autorizada"
          ],
          [
            "<strong>SPSAVs</strong>",
            "Operações de prestação de serviços de AV no câmbio. Vedado: moeda em espécie (nacional ou estrangeira)",
            "<strong>US$ 100.000</strong> por pagamento ou transferência quando contraparte não é IF autorizada a operar câmbio"
          ]
        ]
      },
      {
        "id": "carteira-auto",
        "tipo": "duplo-painel",
        "titulo": "Carteira Autocustodiada (Art. 76-A, §5º)",
        "norma_diz": "A prestadora de serviços de ativos virtuais deve identificar o proprietário de carteira autocustodiada, implementar e ter documentados os processos para verificar a origem e o destino dos ativos virtuais nas operações que envolvam carteiras autocustodiadas.",
        "na_pratica": "Self-custody wallets são o ponto mais difícil da regulação. Uma SPSAV não pode simplesmente aceitar uma transferência de uma carteira externa sem saber quem é o dono. Na prática: (a) o cliente declara que a carteira é dele; (b) pode ser solicitado saque para confirmar; (c) sistemas de análise de blockchain (Chainalysis, Elliptic etc.) ajudam a identificar risco. A documentação desse processo deve estar na política de PLD/FT.",
        "atencao": "Transferências de ou para carteiras autocustodiadas precisam ser reportadas mensalmente ao BCB via ACAM212 (categoria 3 do Anexo II-A). Devem incluir: identificação do proprietário da carteira e se é origem ou destino."
      },
      {
        "id": "psav-exterior",
        "tipo": "duplo-painel",
        "titulo": "Operações com PSAVs no Exterior (Art. 76-B, §2º)",
        "norma_diz": "No caso de operação que envolva prestadora de serviços de ativos virtuais no exterior, a PSAV brasileira deve verificar se a entidade no exterior está sob efetiva supervisão prudencial e de conduta ou se é integrante de grupo financeiro sujeito a supervisão consolidada. Se a jurisdição da entidade estrangeira não estabelece tais requerimentos, a PSAV deve ter documentada avaliação sobre os riscos de realizar negócios com essa entidade.",
        "na_pratica": "Antes de fechar operações com uma exchange estrangeira, a SPSAV brasileira deve verificar se essa exchange tem licença em alguma jurisdição regulada (ex: EUA, UE, Reino Unido, Japão). Se a exchange estrangeira estiver em jurisdição sem regulação ou na lista cinza/negra do GAFI, a SPSAV deve documentar a avaliação de risco e pode precisar de due diligence reforçada.",
        "destaque": "O limite de US$100k (para SPSAVs) ou US$500k (para corretoras de câmbio) aplica-se apenas quando a contraparte NÃO é IF autorizada a operar no mercado de câmbio. PSAVs reconhecidas entre si podem ter outros limites."
      },
      {
        "id": "finalidade",
        "tipo": "duplo-painel",
        "titulo": "Finalidade da Operação — Classificação (Art. 76-C)",
        "norma_diz": "Para operações internacionais com AV, a SPSAV deve: (I) obter do cliente a informação sobre a finalidade do pagamento/transferência, usando os códigos dos Anexos III ou IV da Res. BCB 277 (limite US$50k para usar código simplificado); (II) prestar orientação e suporte para classificação correta; (III) obter dados do pagador/recebedor no exterior e a relação de vínculo com o cliente.",
        "na_pratica": "Cada operação de câmbio (incluindo AV) precisa de uma classificação de finalidade no sistema do BCB. Exemplos: remessa de capitais, compra de serviços, pagamento de importação. Para operações abaixo de US$50k, o código pode ser mais genérico (Anexo III). Acima de US$50k, exige maior detalhamento (Anexo IV). A PSAV deve orientar o cliente a classificar corretamente.",
        "atencao": "O Art. 76-C só entra em vigor em 4/5/2026 (diferente da vigência geral de 2/2/2026). As SPSAVs têm esse período extra para preparar seus sistemas de classificação de finalidade."
      },
      {
        "id": "reporte",
        "tipo": "fluxo",
        "titulo": "Reporte Mensal — ACAM212 (Arts. 82-A + IN BCB 693/2025)",
        "passos": [
          {
            "titulo": "O que deve ser reportado (4 categorias)",
            "desc": "1) Pagamentos/transferências internacionais com AV: data, finalidade, denominação/quantidade/valor do AV, pagador/recebedor exterior, relação de vínculo. 2) Transferências para cartões internacionais: similar. 3) Carteiras autocustodiadas: data, AV, proprietário, origem/destino. 4) Total mensal de stablecoins: mês, cliente, denominação, quantidade obtida/entregue.",
            "prazo": "Vigência: 4/5/2026"
          },
          {
            "titulo": "Quando enviar",
            "desc": "Até o 5º dia útil do mês subsequente à operação.",
            "prazo": "Dia 5 de cada mês"
          },
          {
            "titulo": "Como enviar",
            "desc": "Via arquivo ACAM212, usando o Sistema de Transferência de Arquivos (STA) do BCB, em formato XML. Os detalhes técnicos foram detalhados pela IN BCB 693/2025 (publicada em 19/12/2025).",
            "prazo": "Vigência da IN BCB 693: 2/2/2026"
          },
          {
            "titulo": "Quem está obrigado",
            "desc": "Todas as IFs autorizadas a operar no mercado de câmbio que realizem operações com AV, E as SPSAVs em período de adequação (Art. 29, §5º da Res. BCB 277, inserido pela 521).",
            "prazo": "A partir de 4/5/2026"
          }
        ]
      },
      {
        "id": "capitais",
        "tipo": "duplo-painel",
        "titulo": "Capitais Estrangeiros e Brasileiros no Exterior (Res. 278 e 279)",
        "norma_diz": "Res. BCB 278 (capitais estrangeiros): crédito externo em stablecoins deve ser reportado no SCE-Crédito pelo valor equivalente na moeda fiduciária de referência. Investimento Estrangeiro Direto (IED) pode ser feito por integralização em ativos virtuais — reportado no SCE-IED. Res. BCB 279 (capitais brasileiros no exterior): operações em AV por residentes no exterior devem observar a Res. BCB 279.",
        "na_pratica": "Antes da Res. 521, não havia clareza sobre como reportar créditos e investimentos internacionais feitos com AV. Agora: (a) se um fundo estrangeiro investir em uma startup brasileira integralizando capital em USDC — é IED reportável no SCE-IED pelo valor em USD; (b) se empresa brasileira tomar empréstimo externo em ETH — é crédito externo reportável no SCE-Crédito pelo valor em ETH convertido para USD.",
        "destaque": "Essas mudanças nas Res. 278 e 279 entram em vigor em 4/5/2026 (mesmo prazo do reporte ACAM212), não em 2/2/2026 como as demais disposições da Res. 521."
      }
    ],
    "quiz": [
      {
        "pergunta": "Qual das seguintes operações com ativos virtuais é enquadrada como operação cambial pela Res. BCB 521?",
        "opcoes": [
          "Transferência de Bitcoin entre duas carteiras do mesmo cliente dentro do Brasil",
          "Compra de Bitcoin com Reais em uma exchange nacional",
          "Compra de USDT (stablecoin) em uma exchange nacional",
          "Staking de Ethereum em plataforma nacional"
        ],
        "correta": 2,
        "explicacao": "O Art. 76-A, inciso IV inserido na Res. BCB 277 enquadra 'compra, venda ou troca de ativos virtuais referenciados em moeda fiduciária (stablecoins)' como operação cambial. O USDT é uma stablecoin atrelada ao dólar, portanto sua compra ou venda é operação cambial. A compra de Bitcoin com Reais (sem stablecoin) e transferências nacionais não são cambiais."
      },
      {
        "pergunta": "Qual é o limite de pagamento ou transferência internacional com ativos virtuais para uma SPSAV quando a contraparte não é IF autorizada a operar no câmbio?",
        "opcoes": [
          "Sem limite — livre movimentação",
          "US$ 50.000 por operação",
          "US$ 100.000 por operação",
          "US$ 500.000 por operação"
        ],
        "correta": 2,
        "explicacao": "O Art. 29, inciso IV da Res. BCB 277 (alterada pela 521) estabelece que SPSAVs têm limite de US$ 100.000 por pagamento ou transferência internacional quando a contraparte não é IF autorizada a operar no mercado de câmbio. Corretoras de câmbio têm limite de US$ 500.000. Bancos não têm limite específico nessas operações."
      },
      {
        "pergunta": "Quando começa o reporte mensal obrigatório via ACAM212 (Art. 82-A)?",
        "opcoes": [
          "2 de fevereiro de 2026 (mesmo que a vigência geral da Res. 521)",
          "4 de maio de 2026 (vigência específica do Art. 82-A)",
          "1 de julho de 2026",
          "1 de janeiro de 2027"
        ],
        "correta": 1,
        "explicacao": "O Art. 6º, inciso I da Res. BCB 521 especifica que o Art. 82-A (reporte mensal ACAM212) entra em vigor em 4 de maio de 2026 — diferente da vigência geral de 2/2/2026. Isso deu às PSAVs 3 meses adicionais para preparar seus sistemas de reporte."
      },
      {
        "pergunta": "Uma SPSAV recebe transferência de Bitcoin de uma carteira autocustodiada de um cliente. O que deve fazer?",
        "opcoes": [
          "Nada especial — carteiras autocustodiadas são livres de controle",
          "Bloquear a transferência até que o cliente prove KYC completo",
          "Identificar o proprietário da carteira, documentar o processo de verificação de origem/destino, e reportar mensalmente ao BCB via ACAM212",
          "Comunicar ao COAF toda transferência de carteira autocustodiada"
        ],
        "correta": 2,
        "explicacao": "O Art. 76-A, §5º exige que a PSAV identifique o proprietário da carteira autocustodiada e documente os processos de verificação de origem e destino. As transferências para/de carteiras autocustodiadas também devem ser reportadas mensalmente no ACAM212 (categoria 3 do Anexo II-A), incluindo identificação do proprietário."
      }
    ],
    "links": [
      {
        "label": "Res. BCB 521/2025 — Texto Oficial",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=521"
      },
      {
        "label": "Res. BCB 277/2022 (câmbio) — BCB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=277"
      },
      {
        "label": "IN BCB 693/2025 — BCB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Instrução Normativa BCB&numero=693"
      },
      {
        "label": "Lei 14.286/2021 (câmbio) — Planalto",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14286.htm"
      }
    ]
  },
  {
    "id": 8,
    "titulo": "IN RFB 2.291 — DeCripto",
    "subtitulo": "Declaração de Criptoativos — obrigações fiscais e declaratórias",
    "norma": "IN RFB nº 2.291/2025",
    "vigencia": "CARF: 1 jan 2026 | Demais: 1 jul 2026",
    "glossario": {
      "DeCripto": "Declaração de Criptoativos — obrigação acessória criada pela IN RFB 2.291/2025, substituindo as antigas INs 1.888 e 1.899/2019",
      "CARF": "Crypto-Asset Reporting Framework — padrão da OCDE para troca automática de informações fiscais sobre criptoativos entre países (não confundir com o Conselho Administrativo de Recursos Fiscais)",
      "Responsável obrigado": "Pessoa física ou jurídica obrigada a enviar a DeCripto — PSAVs com presença no Brasil, pessoas que realizem operações em plataformas estrangeiras ou descentralizadas",
      "Operações declaráveis": "Compra/venda, permuta, staking, DeFi, airdrops, pagamentos acima de US$50k, transferências entre carteiras — desde que acima do limite de R$35k mensais",
      "Limite declaratório": "R$ 35.000 mensais — operações abaixo desse valor em cada mês não precisam ser declaradas",
      "IN 1.888/2019": "Instrução Normativa substituída pela DeCripto — exigia reporte de operações com criptoativos, mas não implementava o CARF",
      "IN 1.899/2019": "Instrução Normativa substituída pela DeCripto — disciplinava ganhos de capital em criptoativos",
      "OCDE": "Organização para Cooperação e Desenvolvimento Económico — criou o CARF (padrão de reporte automático para criptoativos) adotado pelo Brasil"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Introdução",
        "texto": "A IN RFB 2.291, publicada em 14 de novembro de 2025, criou a Declaração de Criptoativos (DeCripto) — a principal obrigação acessória fiscal do mercado cripto brasileiro. Ela substitui as antigas INs 1.888 e 1.899/2019 e implementa o Crypto-Asset Reporting Framework (CARF) da OCDE, permitindo troca automática de dados fiscais sobre criptoativos entre Brasil e outros países. A DeCripto é mais abrangente que o regime anterior: inclui DeFi, staking, airdrops e wallets descentralizadas.",
        "normas": [
          {
            "texto": "IN RFB 2.291/2025",
            "cor": "rfb"
          },
          {
            "texto": "Substitui INs 1.888 e 1.899/2019",
            "cor": "rfb"
          },
          {
            "texto": "Implementa CARF/OCDE",
            "cor": "gafi"
          }
        ]
      },
      {
        "id": "obrigados",
        "tipo": "lista",
        "titulo": "Quem está Obrigado a Declarar?",
        "intro": "A DeCripto ampliou o rol de obrigados em relação ao regime anterior. São obrigados:",
        "itens": [
          {
            "num": "1",
            "titulo": "PSAVs com presença no Brasil",
            "desc": "Qualquer plataforma de criptoativos que: (a) seja constituída no Brasil; (b) gerencie operações brasileiras; (c) tenha presença local (domínio .br, receba valores de residentes, use PIX). Obrigação: reportar operações de TODOS os clientes."
          },
          {
            "num": "2",
            "titulo": "Pessoas físicas com transações via plataformas estrangeiras",
            "desc": "Quem usa exchanges estrangeiras (Coinbase, Binance.us, etc.) deve declarar suas próprias operações acima de R$35k/mês."
          },
          {
            "num": "3",
            "titulo": "Pessoas físicas com transações em DeFi",
            "desc": "Quem usa protocolos descentralizados (Uniswap, Aave, Compound etc.) sem intermediário humano deve declarar operações acima de R$35k/mês."
          },
          {
            "num": "4",
            "titulo": "Pessoas físicas e jurídicas sem intermediário (P2P)",
            "desc": "Transações diretas entre partes, sem PSAV intermediária, também são declaráveis se acima do limite."
          }
        ],
        "atencao": "O limite de R$35.000 mensais é por mês, não por operação. Se o total de operações de um contribuinte em um mês superar R$35k, TODAS as operações daquele mês devem ser declaradas — incluindo as primeiras que somadas não atingiam o limite."
      },
      {
        "id": "operacoes",
        "tipo": "tabela",
        "titulo": "Operações Declaráveis vs. Não Declaráveis",
        "intro": "A DeCripto amplia o escopo além das operações tradicionais de compra e venda:",
        "colunas": [
          "Operação",
          "Declarável?",
          "Observação"
        ],
        "linhas": [
          [
            "Compra ou venda de criptoativos",
            "✅ Sim",
            "Quando o total mensal supera R$35k"
          ],
          [
            "Permuta entre criptoativos (ex: BTC ↔ ETH)",
            "✅ Sim",
            "Cada permuta é um evento tributável"
          ],
          [
            "Staking — recompensas recebidas",
            "✅ Sim",
            "Rendimento sujeito a IR"
          ],
          [
            "Airdrops recebidos",
            "✅ Sim",
            "Receita tributável no recebimento"
          ],
          [
            "Participação em DeFi (fornecimento de liquidez)",
            "✅ Sim",
            "Rendimentos e operações acima do limite"
          ],
          [
            "Pagamento em cripto por bens/serviços ≥ US$50k",
            "✅ Sim",
            "Obrigação especial acima de US$50k"
          ],
          [
            "Transferências entre carteiras próprias",
            "✅ Sim",
            "Declarável para rastreabilidade"
          ],
          [
            "Distribuição de stablecoins",
            "✅ Sim",
            "Se acima do limite"
          ],
          [
            "Operações abaixo de R$35k/mês",
            "❌ Não",
            "Abaixo do limite declaratório"
          ],
          [
            "Saldo mantido em carteira sem movimentação",
            "❌ Não",
            "Apenas operações, não saldo estático"
          ],
          [
            "NFTs de arte sem fungibilidade",
            "Depende",
            "A critério da RFB — norma em evolução"
          ]
        ]
      },
      {
        "id": "prazos-vigencia",
        "tipo": "timeline",
        "titulo": "Vigência Faseada da DeCripto",
        "itens": [
          {
            "data": "14 Nov 2025",
            "evento": "IN RFB 2.291/2025 publicada",
            "detalhe": "Substitui as INs 1.888 e 1.899/2019"
          },
          {
            "data": "1 Jan 2026",
            "evento": "Vigência das obrigações CARF",
            "detalhe": "Troca automática de dados fiscais com outros países começa. PSAVs devem reportar dados de clientes de países signatários do CARF.",
            "cor": "rfb"
          },
          {
            "data": "1 Jul 2026",
            "evento": "Vigência das demais obrigações",
            "detalhe": "Demais obrigações da DeCripto entram em vigor — incluindo declarações de pessoas físicas com transações em plataformas estrangeiras e DeFi.",
            "cor": "rfb"
          },
          {
            "data": "Fev 2028",
            "evento": "Primeira troca internacional de dados",
            "detalhe": "BCB e RFB trocam dados de criptoativos com autoridades fiscais de países signatários (prazo referenciado no marco regulatório)"
          }
        ]
      },
      {
        "id": "penalidades",
        "tipo": "duplo-painel",
        "titulo": "Penalidades pelo Descumprimento",
        "norma_diz": "Pelo atraso na entrega: (a) R$500/mês para pessoas jurídicas optantes pelo Simples Nacional; (b) R$1.500/mês para demais pessoas jurídicas; (c) R$100/mês para pessoas físicas. Por informação incorreta, incompleta ou omitida: (a) 3% do valor da operação para pessoas jurídicas, mínimo R$100; (b) 1,5% do valor da operação para pessoas físicas. Além das multas administrativas, o descumprimento pode ser comunicado ao Ministério Público caso configure indício de crime.",
        "na_pratica": "Para uma PSAV que processa R$100 milhões/mês em operações: (a) atraso de 1 mês = R$1.500; (b) omissão de 3% sobre R$100M = R$3 MILHÕES de multa. As penalidades administrativas são relativamente baixas, mas a comunicação ao MP e os impactos reputacionais podem ser devastadores. A conformidade fiscal é não-negociável.",
        "atencao": "A DeCripto exige manutenção de documentação por pelo menos 5 anos a partir da data de liquidação das operações. A RFB pode cruzar dados da DeCripto com as informações do BCB (Res. 520, Art. 88) e com declarações do IRPF para identificar inconsistências."
      },
      {
        "id": "carf-ocde",
        "tipo": "duplo-painel",
        "titulo": "CARF — O Padrão Internacional (OCDE)",
        "norma_diz": "O Crypto-Asset Reporting Framework (CARF) da OCDE é o padrão global de troca automática de informações fiscais sobre criptoativos, análogo ao CRS (Common Reporting Standard) para contas bancárias. Países signatários trocam automaticamente dados sobre clientes não-residentes que realizam operações com criptoativos em suas jurisdições.",
        "na_pratica": "O CARF significa que: (a) uma PSAV brasileira deve reportar à RFB os dados de clientes americanos — e a RFB repassa ao IRS (EUA); (b) exchanges americanas repassa dados de clientes brasileiros ao IRS, que repassa à RFB. A evasão fiscal usando criptoativos em exchanges estrangeiras ficou muito mais difícil: os dados são trocados automaticamente, sem necessidade de requisição judicial.",
        "destaque": "O CARF não é igual ao GAFI: CARF é padrão fiscal (OCDE), GAFI é padrão de combate à lavagem de dinheiro e financiamento do terrorismo. O Brasil adota ambos — DeCripto implementa o CARF, e as Res. BCB 519/520/521 implementam os padrões GAFI."
      }
    ],
    "quiz": [
      {
        "pergunta": "Uma pessoa física usa uma exchange estrangeira e realiza operações totalizando R$20.000 em um mês. Ela precisa declarar na DeCripto?",
        "opcoes": [
          "Sim — qualquer operação com criptoativos deve ser declarada",
          "Não — o limite declaratório é R$35.000 mensais e o total ficou abaixo",
          "Sim — exchanges estrangeiras sempre exigem declaração",
          "Não — apenas PSAVs são obrigadas a declarar"
        ],
        "correta": 1,
        "explicacao": "O limite declaratório da DeCripto (IN RFB 2.291/2025) é de R$35.000 mensais. Operações abaixo desse valor em um mês não precisam ser declaradas. Com R$20.000, a pessoa física está abaixo do limite e não tem obrigação de declarar naquele mês."
      },
      {
        "pergunta": "Qual é a penalidade para uma pessoa jurídica (não-Simples) que entrega a DeCripto com atraso de 2 meses?",
        "opcoes": [
          "R$100 por mês = R$200 no total",
          "R$500 por mês = R$1.000 no total",
          "R$1.500 por mês = R$3.000 no total",
          "3% do valor das operações"
        ],
        "correta": 2,
        "explicacao": "Para pessoas jurídicas não-optantes pelo Simples Nacional, a multa por atraso na entrega da DeCripto é de R$1.500 por mês de atraso. Em 2 meses: 2 × R$1.500 = R$3.000. Para Simples Nacional: R$500/mês. Para PF: R$100/mês. A multa por omissão de informações é diferente: 3% do valor da operação (mínimo R$100)."
      },
      {
        "pergunta": "O CARF (Crypto-Asset Reporting Framework) da OCDE implementado pela DeCripto permite:",
        "opcoes": [
          "Regulação de PSAVs pelo Banco Central de cada país",
          "Troca automática de informações fiscais sobre criptoativos entre países signatários",
          "Rastreamento de transações na blockchain pelo governo",
          "Tributação uniforme de criptoativos em todos os países da OCDE"
        ],
        "correta": 1,
        "explicacao": "O CARF é um padrão da OCDE que permite a troca automática de dados fiscais sobre criptoativos entre países signatários — análogo ao CRS para contas bancárias. Com o CARF, a RFB brasileira recebe automaticamente dados de brasileiros que operem em exchanges de países parceiros, e vice-versa, sem precisar de requisição judicial individual."
      },
      {
        "pergunta": "A recepção de recompensas de staking é declarável na DeCripto?",
        "opcoes": [
          "Não — staking não é uma operação de compra ou venda",
          "Somente se o valor total do mês superar R$100.000",
          "Sim — recompensas de staking são declaráveis quando o total mensal de operações supera R$35.000",
          "Sim — independentemente do valor"
        ],
        "correta": 2,
        "explicacao": "A DeCripto inclui staking entre as operações declaráveis. Mas a obrigação de declarar está sujeita ao limite mensal de R$35.000. Se o total de operações (incluindo as recompensas de staking) no mês superar R$35.000, todas as operações daquele mês devem ser declaradas."
      }
    ],
    "links": [
      {
        "label": "IN RFB 2.291/2025 — Normas Legais",
        "url": "https://www.normaslegais.com.br/legislacao/instrucao-normativa-rfb-2291-2025.htm"
      },
      {
        "label": "CARF — OCDE (inglês)",
        "url": "https://www.oecd.org/en/topics/sub-issues/crypto-asset-reporting-framework-and-amendments-to-the-common-reporting-standard.html"
      },
      {
        "label": "RFB — Receita Federal",
        "url": "https://www.gov.br/receitafederal/pt-br"
      }
    ]
  },
  {
    "id": 9,
    "titulo": "Checklist PSAV",
    "subtitulo": "Guia prático de entrada, adequação e conformidade contínua no mercado regulado",
    "norma": "Res. BCB 519 | 520 | 521 | IN RFB 2.291",
    "vigencia": "Referência: 2 fev 2026",
    "glossario": {
      "COSIF": "Padrão Contábil das Instituições reguladas pelo BCB — as SPSAVs devem adotar as práticas contábeis do COSIF a partir da solicitação de autorização",
      "CCS": "Cadastro de Clientes do Sistema Financeiro Nacional — as SPSAVs devem enviar dados de clientes ao CCS a partir do protocolo do pedido de autorização",
      "PLD/FT": "Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo",
      "UBO": "Beneficiário final — pessoa natural que efetivamente controla ou se beneficia de uma entidade. Identificação obrigatória até 25% de participação (Circ. BCB 3.978/2020)"
    },
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Como usar este Checklist",
        "texto": "Este checklist consolida as principais obrigações regulatórias das SPSAVs em 5 categorias: Societário, Autorização, Operacional, PLD/FT e Fiscal. Use os checkboxes para acompanhar o progresso de adequação da sua empresa. O checklist pode ser impresso em PDF via o botão abaixo. Todas as referências são aos artigos das normas oficiais.",
        "normas": [
          {
            "texto": "Checklist interativo",
            "cor": "rfb"
          },
          {
            "texto": "Exportável em PDF",
            "cor": "rfb"
          }
        ]
      },
      {
        "id": "cl-main",
        "tipo": "checklist",
        "titulo": "Checklist Completo",
        "categorias": [
          {
            "id": "societario",
            "icone": "🏢",
            "titulo": "1. Estrutura Societária",
            "itens": [
              {
                "texto": "Constituída como sociedade limitada (Ltda.) ou anônima (S.A.) — vedada empresa individual",
                "ref": "Art. 14 Res. 520"
              },
              {
                "texto": "Denominação social inclui a expressão 'Sociedade Prestadora de Serviços de Ativos Virtuais'",
                "ref": "Art. 15 Res. 520"
              },
              {
                "texto": "Objeto social principal é voltado às atividades de AV conforme a modalidade escolhida",
                "ref": "Art. 14, II Res. 520"
              },
              {
                "texto": "Contrato/estatuto social atualizado com as novas exigências regulatórias",
                "ref": "Art. 24 Res. 519"
              },
              {
                "texto": "Para Ltda.: contrato social prevê mandato determinado de até 4 anos para administradores",
                "ref": "Art. 12 Res. 519"
              },
              {
                "texto": "Fundos de investimento não participam do grupo de controle",
                "ref": "Art. 7º, §7º Res. 519"
              },
              {
                "texto": "Capital social integralizado em moeda corrente — integralização imediata à subscrição",
                "ref": "Art. 18 Res. 520"
              },
              {
                "texto": "Capital mínimo calculado conforme Res. Conjunta CMN/BCB 14 (R$10,8M–R$37,2M)",
                "ref": "Res. Conj. 14 + BCB 517"
              }
            ]
          },
          {
            "id": "administracao",
            "icone": "👥",
            "titulo": "2. Administração e Diretoria",
            "itens": [
              {
                "texto": "Mínimo 3 diretores/administradores designados formalmente",
                "ref": "Art. 14, III Res. 520"
              },
              {
                "texto": "Diretor responsável pela condução geral das atividades designado",
                "ref": "Art. 14, III, (a) Res. 520"
              },
              {
                "texto": "Diretor responsável por PLD/FT designado",
                "ref": "Art. 14, III, (b) Res. 520"
              },
              {
                "texto": "Diretor responsável por controles internos e compliance designado",
                "ref": "Art. 14, III, (c) Res. 520"
              },
              {
                "texto": "Diretor responsável por riscos, capital e divulgação designado",
                "ref": "Art. 14, III, (d) Res. 520"
              },
              {
                "texto": "Diretor responsável pela política de segurança cibernética designado",
                "ref": "Art. 14, III, (e) Res. 520"
              },
              {
                "texto": "Todos os diretores são residentes no Brasil",
                "ref": "Art. 11, I Res. 519"
              },
              {
                "texto": "Reputação ilibada verificada para todos os administradores e controladores",
                "ref": "Art. 9º Res. 519"
              },
              {
                "texto": "Nenhum diretor condenado pelos crimes listados no Art. 11, II da Res. 519",
                "ref": "Art. 11, II Res. 519"
              }
            ]
          },
          {
            "id": "autorizacao",
            "icone": "✅",
            "titulo": "3. Processo de Autorização (BCB)",
            "itens": [
              {
                "texto": "Plano de negócios elaborado e atualizado",
                "ref": "Art. 2º, §3º Res. 519"
              },
              {
                "texto": "Documentação de capacidade econômica dos controladores preparada (IRs últimos 3 anos)",
                "ref": "Art. 3º, §2º Res. 519"
              },
              {
                "texto": "Comprovação de origem lícita dos recursos do capital preparada",
                "ref": "Art. 2º, II Res. 519"
              },
              {
                "texto": "Endereço físico da sede confirmado (uso efetivo e exclusivo — sem coworking)",
                "ref": "Art. 2º, X, §6º Res. 519"
              },
              {
                "texto": "Pedido de autorização protocolado no BCB (prazo: até 30/10/2026)",
                "ref": "Art. 88, I Res. 520"
              },
              {
                "texto": "Pedido de autorização inclui solicitação para operar no mercado de câmbio (se aplicável)",
                "ref": "Art. 29, §5º Res. BCB 277"
              },
              {
                "texto": "Certificação técnica de empresa qualificada independente obtida (para IFs atuantes)",
                "ref": "Art. 22, §2º Res. 520"
              }
            ]
          },
          {
            "id": "operacional",
            "icone": "⚙️",
            "titulo": "4. Operacional e Governança",
            "itens": [
              {
                "texto": "Política de governança documentada e aprovada pelo CA ou diretoria — revisão bienal prevista",
                "ref": "Art. 16 Res. 520"
              },
              {
                "texto": "Segregação patrimonial implementada: contas individualizadas por cliente para recursos em BRL",
                "ref": "Art. 28 Res. 520"
              },
              {
                "texto": "Carteiras de AV de clientes separadas das carteiras próprias da SPSAV",
                "ref": "Art. 29-30 Res. 520"
              },
              {
                "texto": "Prova de reservas implementada e testada",
                "ref": "Art. 30, II Res. 520"
              },
              {
                "texto": "Auditoria independente bienal da segregação patrimonial contratada",
                "ref": "Art. 30, III Res. 520"
              },
              {
                "texto": "Política de segurança cibernética documentada e aprovada",
                "ref": "Art. 48 Res. 520"
              },
              {
                "texto": "Plano de ação e resposta a incidentes cibernéticos elaborado",
                "ref": "Art. 48, II Res. 520"
              },
              {
                "texto": "Política de guarda e proteção de chaves privadas implementada",
                "ref": "Art. 49 Res. 520"
              },
              {
                "texto": "Chaves privadas múltiplas ou segmentadas em locais diferentes",
                "ref": "Art. 49, §3º Res. 520"
              },
              {
                "texto": "Avaliação de perfil de risco (suitability) de clientes implementada",
                "ref": "Art. 58-59 Res. 520"
              },
              {
                "texto": "Política de elegibilidade de ativos com comitê técnico constituída",
                "ref": "Art. 64 Res. 520"
              },
              {
                "texto": "Ausência de cobertura FGC/FGCoop informada nos contratos e no onboarding",
                "ref": "Art. 68 Res. 520"
              },
              {
                "texto": "Canais de atendimento com opção humana implementados",
                "ref": "Art. 60 Res. 520"
              },
              {
                "texto": "11 políticas documentadas: conduta, coleta de dados, fraudes, riscos, terceiros, chaves, PLD, seg. institucional, cibersegurança, cloud, proteção de dados pessoais",
                "ref": "Art. 43 Res. 520"
              }
            ]
          },
          {
            "id": "pld",
            "icone": "🔍",
            "titulo": "5. PLD/FT — Prevenção à Lavagem de Dinheiro",
            "itens": [
              {
                "texto": "Política de PLD/FT baseada em Abordagem Baseada em Risco (ABR) documentada",
                "ref": "Circ. BCB 3.978/2020"
              },
              {
                "texto": "Diretor de PLD/FT designado e com mandato formal",
                "ref": "Art. 14, III, (b) Res. 520"
              },
              {
                "texto": "KYC completo implementado: identificação, verificação e monitoramento contínuo de clientes",
                "ref": "Art. 47 Res. 520"
              },
              {
                "texto": "Identificação de Beneficiário Final (UBO) implementada para PJ: até 25% de participação",
                "ref": "Circ. BCB 3.978/2020"
              },
              {
                "texto": "Processo de due diligence reforçada para PEPs, países de alto risco e operações atípicas",
                "ref": "Circ. BCB 3.978/2020"
              },
              {
                "texto": "Monitoramento de listas de sanções nacionais e internacionais implementado",
                "ref": "Art. 34, III Res. 520"
              },
              {
                "texto": "Processo de identificação e comunicação de operações suspeitas ao COAF",
                "ref": "Lei 9.613/1998, Art. 11"
              },
              {
                "texto": "Registros de transações mantidos por mínimo 5 anos",
                "ref": "Art. 45, II Res. 520"
              },
              {
                "texto": "Identificação de proprietário de carteiras autocustodiadas implementada",
                "ref": "Art. 76-A, §5º Res. BCB 277"
              },
              {
                "texto": "Procedimentos de Travel Rule (transferência de dados entre PSAVs) em desenvolvimento",
                "ref": "Art. 44 e 89 Res. 520"
              },
              {
                "texto": "Mixers e embaralhadores de transações não são utilizados nem contratados",
                "ref": "Art. 90, III Res. 520"
              },
              {
                "texto": "Listas GAFI (países de alto risco) monitoradas para due diligence reforçada",
                "ref": "Art. 43, §5º Res. 520"
              },
              {
                "texto": "Procedimentos para cumprimento das medidas da Lei 13.810/2019 (sanções internacionais)",
                "ref": "Art. 88, II, (d) Res. 520"
              }
            ]
          },
          {
            "id": "cambio",
            "icone": "💱",
            "titulo": "6. Câmbio com Ativos Virtuais",
            "itens": [
              {
                "texto": "Pedido de autorização inclui solicitação para operar no mercado de câmbio",
                "ref": "Art. 29, §5º Res. BCB 277"
              },
              {
                "texto": "Limite de US$100k por operação para contraparte não autorizada implementado",
                "ref": "Art. 29, IV Res. BCB 277"
              },
              {
                "texto": "Processo de verificação de supervisão de PSAVs estrangeiras documentado",
                "ref": "Art. 76-B, §2º Res. BCB 277"
              },
              {
                "texto": "Código de finalidade da operação obtido do cliente (acima de US$50k: Anexo IV)",
                "ref": "Art. 76-C Res. BCB 277"
              },
              {
                "texto": "Sistema de reporte ACAM212 preparado para início em 4/5/2026",
                "ref": "Art. 82-A Res. BCB 277 + IN BCB 693"
              },
              {
                "texto": "Proibição de operações em espécie implementada",
                "ref": "Art. 29, IV Res. BCB 277"
              }
            ]
          },
          {
            "id": "fiscal",
            "icone": "🧾",
            "titulo": "7. Obrigações Fiscais (DeCripto)",
            "itens": [
              {
                "texto": "Sistema de coleta de dados de operações para DeCripto implementado ou em implementação",
                "ref": "IN RFB 2.291/2025"
              },
              {
                "texto": "CARF: dados de clientes não-residentes prontos para reporte a partir de 1/1/2026",
                "ref": "IN RFB 2.291 — CARF"
              },
              {
                "texto": "Demais obrigações DeCripto prontas para 1/7/2026 (clientes com operações > R$35k/mês)",
                "ref": "IN RFB 2.291"
              },
              {
                "texto": "Documentação de operações armazenada por mínimo 5 anos",
                "ref": "IN RFB 2.291"
              },
              {
                "texto": "Processo de orientação fiscal aos clientes sobre tributação de criptoativos",
                "ref": "Art. 43, III Res. 520"
              }
            ]
          },
          {
            "id": "contabil",
            "icone": "📊",
            "titulo": "8. Contabilidade e Relatórios",
            "itens": [
              {
                "texto": "Adoção do COSIF (Padrão Contábil BCB) iniciada",
                "ref": "Art. 88, II, (e) Res. 520"
              },
              {
                "texto": "Demonstrações financeiras semestrais e anuais auditadas previstas",
                "ref": "Art. 88, §5º Res. 520"
              },
              {
                "texto": "Envio diário de saldos contábeis em favor dos clientes ao BCB (após protocolo)",
                "ref": "Art. 88, III, (b) Res. 520"
              },
              {
                "texto": "Envio diário de dados de custódia (total AV por conta própria e de terceiros)",
                "ref": "Art. 88, III, (c) Res. 520"
              },
              {
                "texto": "Envio mensal de prova de reservas ao BCB (discriminada por AV)",
                "ref": "Art. 88, III, (d) Res. 520"
              },
              {
                "texto": "Envio mensal de demonstrações de staking ao BCB (se aplicável)",
                "ref": "Art. 88, III, (e) Res. 520"
              }
            ]
          }
        ]
      }
    ],
    "quiz": [],
    "links": [
      {
        "label": "BCB — Página PSAV/SPSAV",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/ativosvirtuais"
      },
      {
        "label": "Res. BCB 519/2025",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=519"
      },
      {
        "label": "Res. BCB 520/2025",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=520"
      },
      {
        "label": "Res. BCB 521/2025",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=521"
      }
    ]
  },
  {
    "id": 10,
    "titulo": "Quiz & Revisão",
    "subtitulo": "Simulado geral — teste seus conhecimentos sobre o marco regulatório completo",
    "norma": "Todas as normas",
    "vigencia": "",
    "glossario": {},
    "secoes": [
      {
        "id": "intro",
        "tipo": "intro",
        "titulo": "Simulado Geral",
        "texto": "Este módulo contém um simulado geral com questões de todos os módulos anteriores. No modo Estudo, você verá o gabarito e a explicação após cada resposta. No modo Aula, apenas acerto ou erro. Boa sorte!",
        "normas": [
          {
            "texto": "GAFI | Lei 14.478 | Decreto 11.563",
            "cor": "gafi"
          },
          {
            "texto": "BCB 519 | 520 | 521 | IN 2.291",
            "cor": "bcb"
          }
        ]
      },
      {
        "id": "resumo",
        "tipo": "tabela",
        "titulo": "Mapa Normativo — Referência Rápida",
        "intro": "Use esta tabela como referência rápida do marco regulatório completo das PSAVs:",
        "colunas": [
          "Norma",
          "Data",
          "Vigência",
          "Assunto Principal"
        ],
        "linhas": [
          [
            "<strong>Lei 14.478/2022</strong>",
            "21 dez 2022",
            "Imediata",
            "Marco Legal: define AV, PSAV, obrigações gerais, delega regulação"
          ],
          [
            "<strong>Decreto 11.563/2023</strong>",
            "13 jun 2023",
            "20 jun 2023",
            "BCB como regulador único das PSAVs"
          ],
          [
            "<strong>Res. Conj. CMN/BCB 14</strong>",
            "3 nov 2025",
            "1 jul 2026",
            "Capital mínimo por atividade"
          ],
          [
            "<strong>Res. BCB 517/2025</strong>",
            "3 nov 2025",
            "1 jul 2026",
            "Metodologia de cálculo do capital (R$10,8M–R$37,2M)"
          ],
          [
            "<strong>Res. BCB 519/2025</strong>",
            "10 nov 2025",
            "2 fev 2026",
            "Autorização: 10 requisitos, 9 eventos, 2 fases para empresas em operação"
          ],
          [
            "<strong>Res. BCB 520/2025</strong>",
            "10 nov 2025",
            "2 fev 2026",
            "Constituição, funcionamento, governança, PLD/FT, custódia, Travel Rule"
          ],
          [
            "<strong>Res. BCB 521/2025</strong>",
            "10 nov 2025",
            "2 fev 2026 / 4 mai 2026",
            "Câmbio com AV: 4 categorias, US$100k limite, reporte ACAM212"
          ],
          [
            "<strong>IN BCB 693/2025</strong>",
            "19 dez 2025",
            "2 fev 2026",
            "Complementa Res. 521 — detalha envio ACAM212 via STA/XML"
          ],
          [
            "<strong>IN RFB 2.291/2025</strong>",
            "14 nov 2025",
            "1 jan 2026 (CARF) / 1 jul 2026",
            "DeCripto — declaração de criptoativos; implementa CARF/OCDE"
          ]
        ]
      },
      {
        "id": "prazos",
        "tipo": "timeline",
        "titulo": "Prazos Críticos — Nunca Esqueça",
        "itens": [
          {
            "data": "2 fev 2026",
            "evento": "BCB 519/520/521 entram em vigor",
            "detalhe": "SPSAVs em operação iniciam o período de adequação de 270 dias",
            "cor": "bcb"
          },
          {
            "data": "4 mai 2026",
            "evento": "Reporte ACAM212 obrigatório",
            "detalhe": "1º envio mensal de dados cambiais de AV; Res. BCB 521 (Art. 82-A) e IN BCB 693",
            "cor": "bcb"
          },
          {
            "data": "1 jul 2026",
            "evento": "DeCripto — demais obrigações",
            "detalhe": "Declarações de PF com plataformas estrangeiras e DeFi obrigatórias",
            "cor": "rfb"
          },
          {
            "data": "30 out 2026",
            "evento": "PRAZO FINAL para autorização + vedação de operar com não-autorizadas",
            "detalhe": "270 dias da vigência. Após essa data: IFs proibidas de operar com PSAVs não autorizadas",
            "cor": "bcb"
          },
          {
            "data": "~fev 2027",
            "evento": "Travel Rule — mercado nacional",
            "detalhe": "365 dias após 2/2/2026: dados do originador/beneficiário devem ser transmitidos entre PSAVs nacionais",
            "cor": "bcb"
          },
          {
            "data": "~fev 2028",
            "evento": "Travel Rule — mercado internacional + capital pleno",
            "detalhe": "365 dias após Etapa I + plena conformidade com capital mínimo (Res. BCB 517)",
            "cor": "bcb"
          }
        ]
      }
    ],
    "quiz": [
      {
        "pergunta": "Qual norma define as 3 modalidades de SPSAV (intermediária, custodiante, corretora)?",
        "opcoes": [
          "Lei 14.478/2022",
          "Resolução BCB 519/2025",
          "Resolução BCB 520/2025",
          "Decreto 11.563/2023"
        ],
        "correta": 2,
        "explicacao": "A Resolução BCB 520/2025 (Arts. 4-10) define as 3 modalidades de SPSAV: intermediária, custodiante e corretora. A Lei 14.478/2022 define os tipos de serviços de ativos virtuais, e a Res. BCB 519 disciplina o processo de autorização."
      },
      {
        "pergunta": "Uma SPSAV em operação em 2/2/2026 pode continuar operando durante o período de adequação? Qual é a condição?",
        "opcoes": [
          "Sim, pode operar por tempo indeterminado sem apresentar pedido de autorização",
          "Sim, desde que protocole o pedido de autorização até 270 dias após 2/2/2026 (~30/10/2026)",
          "Não — deve cessar operações imediatamente em 2/2/2026 até obter a autorização",
          "Sim, pode operar por 1 ano sem nenhuma obrigação adicional"
        ],
        "correta": 1,
        "explicacao": "O Art. 88 da Res. BCB 520 permite que SPSAVs em operação continuem funcionando durante o período de adequação, mas devem protocolar o pedido de autorização em até 270 dias (≈30/10/2026). Após esse prazo sem protocolo: devem cessar atividades em até 30 dias adicionais."
      },
      {
        "pergunta": "A Recomendação 15 do GAFI, implementada no Brasil via Lei 14.478/2022 e Res. BCB 520, exige que PSAVs tenham as mesmas obrigações de PLD/FT que:",
        "opcoes": [
          "Startups de tecnologia financeira (fintechs)",
          "Prestadores de serviços autônomos",
          "Instituições financeiras bancárias",
          "Corretoras de valores não-bancárias"
        ],
        "correta": 2,
        "explicacao": "A Rec. 15 do GAFI (2019) estendeu as obrigações de PLD/FT dos VASPs ao mesmo padrão das instituições financeiras. No Brasil, isso foi implementado pela Lei 14.478/2022 (Art. 11, pessoas obrigadas) e pela Res. BCB 520 (Art. 44, referência à Circular BCB 3.978/2020)."
      },
      {
        "pergunta": "Qual é o limite de transferência internacional com ativos virtuais para SPSAVs quando a contraparte não é IF autorizada a operar câmbio?",
        "opcoes": [
          "Sem limite",
          "US$ 50.000",
          "US$ 100.000",
          "US$ 500.000"
        ],
        "correta": 2,
        "explicacao": "O Art. 29, inciso IV da Res. BCB 277 (alterado pela Res. BCB 521) estabelece US$ 100.000 como limite para SPSAVs em operações com contraparte não autorizada a operar no câmbio. Corretoras de câmbio têm limite de US$ 500.000."
      },
      {
        "pergunta": "Qual o principal risco de uma SPSAV que não cumpre o Travel Rule até fevereiro de 2028?",
        "opcoes": [
          "Apenas multa administrativa de R$500 por operação",
          "Cancelamento automático da autorização sem processo administrativo",
          "Não conformidade com a Rec. 16 do GAFI e com o Art. 44 da Res. BCB 520, podendo resultar em penalidades e questionamentos na supervisão do BCB",
          "Bloqueio automático de transações pelo sistema do BCB"
        ],
        "correta": 2,
        "explicacao": "O não cumprimento da Travel Rule após fevereiro de 2028 representa descumprimento da Rec. 16 do GAFI e do Art. 44 da Res. BCB 520, sujeitando a SPSAV a penalidades regulatórias, possível cancelamento de autorização e consequências internacionais na relação com outras PSAVs que exijam conformidade."
      },
      {
        "pergunta": "A expressão 'Sociedade Prestadora de Serviços de Ativos Virtuais' no nome empresarial é:",
        "opcoes": [
          "Opcional — a empresa pode usar qualquer nome comercial",
          "Obrigatória e privativa das SPSAVs, por determinação do Art. 15 da Res. BCB 520",
          "Obrigatória apenas para corretoras de ativos virtuais",
          "Recomendada, mas não exigida pela regulação"
        ],
        "correta": 1,
        "explicacao": "O Art. 15, §1º da Res. BCB 520 é categórico: 'a expressão Sociedade Prestadora de Serviços de Ativos Virtuais é privativa de sociedades prestadoras de serviços de ativos virtuais'. Não apenas é obrigatória, como também é exclusiva — nenhuma outra empresa pode usar essa expressão."
      },
      {
        "pergunta": "A DeCripto (IN RFB 2.291/2025) implementa qual padrão internacional?",
        "opcoes": [
          "Travel Rule do GAFI (Rec. 16)",
          "CARF — Crypto-Asset Reporting Framework da OCDE",
          "FATF Standards for Virtual Assets (2019)",
          "Basel III — normas prudenciais para criptoativos"
        ],
        "correta": 1,
        "explicacao": "A IN RFB 2.291/2025 implementa o CARF (Crypto-Asset Reporting Framework) da OCDE — padrão de troca automática de informações fiscais sobre criptoativos entre países. Não confundir com o Travel Rule (padrão GAFI, implementado pela Res. BCB 520) ou o Comitê de Basileia (padrões bancários prudenciais)."
      },
      {
        "pergunta": "A Res. BCB 521/2025 altera qual(is) norma(s) do BCB?",
        "opcoes": [
          "Apenas a Res. BCB 277 (mercado de câmbio)",
          "As Res. BCB 277, 278 e 279 (câmbio, capitais estrangeiros e capitais brasileiros no exterior)",
          "As Res. BCB 519 e 520",
          "A Circular BCB 3.978/2020 (PLD/FT)"
        ],
        "correta": 1,
        "explicacao": "A Res. BCB 521/2025 altera as três normas do mercado de câmbio e capitais internacionais: Res. BCB 277 (mercado de câmbio — insere o Título VIII-A sobre AV e o Anexo II-A do ACAM212), Res. BCB 278 (capitais estrangeiros — inclui crédito externo e IED em AV) e Res. BCB 279 (capitais brasileiros no exterior — inclui operações com AV)."
      },
      {
        "pergunta": "Um fundo de venture capital quer investir em uma SPSAV. Qual estrutura é permitida?",
        "opcoes": [
          "Participação direta de controle do fundo na SPSAV",
          "Participação direta do fundo como controlador através de acordo de acionistas",
          "Participação qualificada (≥15% capital votante) sem controle; para controle, o fundo deve constituir holding específica",
          "Nenhuma forma de participação de fundos é permitida em SPSAVs"
        ],
        "correta": 2,
        "explicacao": "O Art. 7º, §7º da Res. BCB 519 proíbe fundos de investimento como controladores. Mas fundos podem ter participação qualificada (≥15% do capital votante, sem controle). Para exercer controle, o fundo precisaria constituir uma holding financeira com objeto social exclusivo de participação em IFs autorizadas pelo BCB — que então controlaria a SPSAV (Art. 8º, IV da Res. BCB 519)."
      },
      {
        "pergunta": "Qual é a penalidade para uma SPSAV que omite informações na DeCripto (pessoa jurídica não-Simples)?",
        "opcoes": [
          "R$100 por informação omitida",
          "R$1.500 por mês de atraso",
          "3% do valor da operação (mínimo R$100) por informação omitida",
          "Cancelamento automático da autorização do BCB"
        ],
        "correta": 2,
        "explicacao": "A IN RFB 2.291/2025 prevê duas penalidades distintas: (a) ATRASO: R$1.500/mês para PJ não-Simples; (b) OMISSÃO/INCORREÇÃO: 3% do valor da operação para PJ (mínimo R$100). Para PF: 1,5% do valor. A multa por omissão é potencialmente muito mais severa para empresas com grande volume de operações."
      }
    ],
    "links": [
      {
        "label": "BCB — Normativos",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/ativosvirtuais"
      },
      {
        "label": "Planalto — Legislação federal",
        "url": "https://www.planalto.gov.br"
      },
      {
        "label": "RFB — Receita Federal",
        "url": "https://www.gov.br/receitafederal/pt-br"
      }
    ]
  }
];
