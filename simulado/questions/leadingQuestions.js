// ** Repositório Global de todas as 159 questões **

////////////////////////////////////////////////////////////////////////////
// Início Simulado 1
const leadingQuestions = [
{
    question: "Qual sistema operacional o SAFe representa?",
    type: "single",
    options: [
        { text: "A rede", isCorrect: false },
        { text: "A hierarquia", isCorrect: false },
        { text: "O sistema operacional dual", isCorrect: true }
    ]
},
{
    question: "Qual é o objetivo final do SAFe?",
    type: "single",
    options: [
        { text: "Entrega mais rápida", isCorrect: false },
        { text: "Liderança servidora", isCorrect: false },
        { text: "Entrega de valor", isCorrect: true },
        { text: "Equipes funcionais", isCorrect: false }
    ]
},
{
    question: "Quais são as duas áreas que fazem parte dos Core Values do Scaled Agile Framework? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Alinhamento", isCorrect: true },
        { text: "Colaboração", isCorrect: false },
        { text: "Descentralizar a tomada de decisões", isCorrect: false },
        { text: "Respeito pelas pessoas", isCorrect: true },
        { text: "Pensamento Sistêmico", isCorrect: false }
    ]
},
{
    question: "Quais são os dois valores centrais do SAFe? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Execução do programa", isCorrect: false },
        { text: "Transparência", isCorrect: true },
        { text: "Fluxo", isCorrect: false },
        { text: "Cultura", isCorrect: false },
        { text: "Melhoria implacável", isCorrect: true }
    ]
},
{
    question: "Qual declaração se encaixa com o valor central SAFe de qualidade integrada?",
    type: "single",
    options: [
        { text: "Você não pode escalar código ruim", isCorrect: true },
        { text: "A qualidade depende da escala do projeto e deve ser implementada de cima para baixo", isCorrect: false },
        { text: "A qualidade não faz parte dos valores centrais do SAFe", isCorrect: false },
        { text: "A qualidade só deve ser trabalhada durante a Iteração de Inovação e Planejamento", isCorrect: false }
    ]
},
{
    question: "A principal necessidade do SAFe é dimensionar a ideia de quê?",
    type: "single",
    options: [
        { text: "Entrega de Soluções Técnicas", isCorrect: false },
        { text: "Alinhamento Organizacional e Funcional", isCorrect: false },
        { text: "Gestão de Portfólio Lean", isCorrect: false },
        { text: "Agilidade de Negócios", isCorrect: true }
    ]
},
{
    question: "Quais são as duas principais razões para adotar o Agile em uma organização? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Acelere a entrega do produto", isCorrect: true },
        { text: "Reduza as mudanças", isCorrect: false },
        { text: "Centralize a tomada de decisões", isCorrect: false },
        { text: "Permita mudanças nas prioridades", isCorrect: true },
        { text: "Reduza o custo do projeto", isCorrect: false }
    ]
},
{
    question: "De acordo com o Princípio SAFe n° 10, o que a empresa deve fazer quando os mercados e as demandas dos clientes mudam?",
    type: "single",
    options: [
        { text: "Criar um Agile Release Train para focar no valor", isCorrect: false },
        { text: "Criar uma estrutura de tomada de decisão confiável para capacitar os funcionários e garantir um fluxo rápido de valor", isCorrect: false },
        { text: "Aplicar cadência e sincronização de desenvolvimento para operar de forma eficaz e gerenciar incertezas", isCorrect: false },
        { text: "Reorganizar a rede em torno do novo fluxo de valor", isCorrect: true }
    ]
},
{
    question: "Quando novas abordagens devem ser ancoradas na cultura de uma organização?",
    type: "single",
    options: [
        { text: "A cultura não deve ser alterada porque o SAFe respeita a cultura atual", isCorrect: false },
        { text: "A mudança de cultura precisa acontecer antes que a implementação do SAFe possa começar", isCorrect: false },
        { text: "A mudança de cultura vem por último como resultado da mudança de hábitos de trabalho", isCorrect: true },
        { text: "A mudança de cultura ocorre logo após a criação de um senso de urgência na organização", isCorrect: false }
    ]
},
{
    question: "Qual é uma saída da formulação da estratégia empresarial?",
    type: "single",
    options: [
        { text: "Orçamentos de Portfólio", isCorrect: true },
        { text: "Governança de Portfólio", isCorrect: false },
        { text: "Visão de Portfólio", isCorrect: false },
        { text: "Canvas de Portfólio", isCorrect: false }
    ]
},
{
    question: "Qual é o maior benefício da tomada de decisão descentralizada?",
    type: "single",
    options: [
        { text: "Garantir que as decisões estratégicas não sejam tomadas no vácuo", isCorrect: false },
        { text: "Entregar valor no menor lead time sustentável", isCorrect: true },
        { text: "Criar melhor visualização", isCorrect: false },
        { text: "Eliminar a responsabilidade dos líderes", isCorrect: false }
    ]
},
{
    question: "Quando uma decisão deve ser descentralizada?",
    type: "single",
    options: [
        { text: "Se for de longa duração", isCorrect: false },
        { text: "Se exigir informações locais", isCorrect: true },
        { text: "Se proporcionar grandes economias de escala", isCorrect: false },
        { text: "Se for pouco frequente", isCorrect: false }
    ]
},
{
    question: "Quais são os dois tipos de decisões que devem permanecer centralizadas, mesmo em um ambiente descentralizado de tomada de decisão? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Decisões que são tomadas com frequência", isCorrect: false },
        { text: "Decisões que vêm com um alto custo de atraso", isCorrect: false },
        { text: "Decisões que exigem informações locais", isCorrect: false },
        { text: "Decisões que proporcionam grandes e amplos benefícios econômicos", isCorrect: true },
        { text: "Decisões que provavelmente não mudarão no curto prazo", isCorrect: true }
    ]
},
{
    question: "Como a tomada de decisão descentralizada ajuda?",
    type: "single",
    options: [
        { text: "Limitando o WIP", isCorrect: false },
        { text: "Reduzindo riscos", isCorrect: false },
        { text: "Obtendo melhor valor econômico", isCorrect: true },
        { text: "Reduzindo defeitos", isCorrect: false }
    ]
},
{
    question: "Qual é o bloco de construção básico ao organizar em torno do valor?",
    type: "single",
    options: [
        { text: "Times Ágeis", isCorrect: true },
        { text: "Hierarquias", isCorrect: false },
        { text: "Indivíduos", isCorrect: false },
        { text: "Trens de Liberação Ágil", isCorrect: false }
    ]
},
{
    question: "Quais duas práticas de qualidade se aplicam aos times ágeis? (Escolha dois)",
    type: "multiple",
    options: [
        { text: "Fornecendo pista de arquitetura", isCorrect: false },
        { text: "Revisão e emparelhamento por pares", isCorrect: true },
        { text: "Tomada de decisão descentralizada", isCorrect: false },
        { text: "Testando requisitos não funcionais", isCorrect: false },
        { text: "Estabelecendo fluxo", isCorrect: true }
    ]
},
{
    question: "Quais são as duas maneiras de descrever uma equipe ágil multifuncional? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Eles são otimizados para comunicação e entrega de valor", isCorrect: true },
        { text: "Eles entregam valor a cada seis semanas", isCorrect: false },
        { text: "Eles são compostos por membros, cada um dos quais pode definir, desenvolver, testar e implantar o sistema", isCorrect: false },
        { text: "Eles podem definir, construir e testar um incremento de valor", isCorrect: true },
        { text: "Eles liberam produtos do cliente para produção continuamente", isCorrect: false }
    ]
},
{
    question: "Quem tem autoridade de conteúdo para tomar decisões no nível da história de usuário durante o planejamento do incremento do programa (PI)?",
    type: "single",
    options: [
        { text: "Scrum Masters", isCorrect: false },
        { text: "Agile Team", isCorrect: false },
        { text: "Product Owner", isCorrect: true },
        { text: "Release Train Engineer", isCorrect: false }
    ]
},
{
    question: "O que o Product Owner faz como parte do trabalho de preparação para o planejamento da iteração?",
    type: "single",
    options: [
        { text: "Eles colaboram com sua equipe para detalhar histórias com critérios de aceitação e testes de aceitação", isCorrect: false },
        { text: "Eles revisam e priorizam o backlog", isCorrect: true },
        { text: "Eles elaboram backlogs em histórias de usuários para implementação.", isCorrect: false },
        { text: "Eles constroem, editam e mantêm a lista de pendências da equipe.", isCorrect: false }

            
    ]
},
{
    question: "O que é encontrado em uma placa de programa?",
    type: "single",
    options: [
        { text: "Recursos", isCorrect: true },
        { text: "Histórias de usuários", isCorrect: false },
        { text: "Tarefas", isCorrect: false },
        { text: "Épicos", isCorrect: false }
    ]
},
{
    question: "Quais são os três itens encontrados em um quadro de programas? (Escolha três.)",
    type: "multiple",
    options: [
        { text: "Dependências significativas", isCorrect: true },
        { text: "Marcos", isCorrect: true },
        { text: "Itens de backlog", isCorrect: false },
        { text: "Recursos (features)", isCorrect: true },
        { text: "Histórias de usuários", isCorrect: false }
    ]
},
{
    question: "A placa do programa mostra quais dois itens? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Épicos", isCorrect: false },
        { text: "Capacidade e Carga", isCorrect: false },
        { text: "Características (Features)", isCorrect: true },
        { text: "Dependências significativas", isCorrect: true },
        { text: "Riscos", isCorrect: false }
    ]
},
{
    question: "Quais são os dois problemas que podem ser entendidos a partir do Program Board? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Eventos para PI futuro", isCorrect: false },
        { text: "Muitas dependências levando a um único marco do programa", isCorrect: true },
        { text: "Muito trabalho em processo em uma iteração", isCorrect: false },
        { text: "Muitos recursos são colocados na pista de natação de uma equipe sem strings", isCorrect: false },
        { text: "Uma dependência significativa levando a um recurso", isCorrect: true }
    ]
},
{
    question: "Ao olhar para um Program Board, o que significa quando um recurso é colocado na raia de uma equipe sem cordas?",
    type: "single",
    options: [
        { text: "Que o recurso pode ser concluído independentemente das outras equipes", isCorrect: true },
        { text: "Que todos os riscos foram ROAMed", isCorrect: false },
        { text: "Que a equipe tem pouca confiança de que isso acontecerá", isCorrect: false },
        { text: "Que o recurso deve ser concluído antes de qualquer outro recurso", isCorrect: false }
    ]
},
{
    question: "O que é uma reunião de sincronização do Agile Release Train?",
    type: "single",
    options: [
        { text: "Demonstração da solução", isCorrect: false },
        { text: "Scrum de scrums", isCorrect: true },
        { text: "Retrospectiva da iteração", isCorrect: false },
        { text: "Revisão da iteração", isCorrect: false }
    ]
},
{
    question: "Quais são as duas reuniões do Agile Release Train Sync? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Sincronização do Dono do Produto (PO Sync)", isCorrect: true },
        { text: "Demonstração do Sistema", isCorrect: false },
        { text: "Demonstração da Solução", isCorrect: false },
        { text: "Scrum de Scrums (Coach Sync)", isCorrect: true },
        { text: "Inspecionar e Adaptar", isCorrect: false }
    ]
},
{
    question: "Qual afirmação é verdadeira sobre eventos SAFe?",
    type: "single",
    options: [
        { text: "O stand-up diário é um evento ART que requer o scrum de scrums e envolvimento de sincronização do Proprietário do Programa no sistema de malha fechada", isCorrect: false },
        { text: "O Inspecionar e Adaptar é o único evento ART necessário para criar um sistema de malha fechada", isCorrect: false },
        { text: "Eventos de equipe são executados internamente aos eventos ART e os eventos ART criam um sistema de circuito fechado", isCorrect: true },
        { text: "Os eventos ART são executados dentro dos eventos de equipe e os eventos de equipe criam um sistema de circuito fechado", isCorrect: false }
    ]
},
{
    question: "Quem facilita a reunião do PO Sync?",
    type: "single",
    options: [
        { text: "Release Train Engineer", isCorrect: true },
        { text: "Product Owner", isCorrect: false },
        { text: "Business Owner", isCorrect: false },
        { text: "Scrum Master", isCorrect: false }
    ]
},
{
    question: "Quem atribui valor comercial (BV) aos Objetivos PI da equipe?",
    type: "single",
    options: [
        { text: "Release Train Engineer", isCorrect: false },
        { text: "Product Owner", isCorrect: false },
        { text: "Business Owner", isCorrect: true },
        { text: "Scrum Master", isCorrect: false }
    ]
},
{
    question: "Quem decide a pontuação do Team PI Objective Business Value após a negociação?",
    type: "single",
    options: [
        { text: "Gerente de Produto", isCorrect: false },
        { text: "A Equipe Scrum", isCorrect: false },
        { text: "A Equipe Ágil", isCorrect: false },
        { text: "Proprietário do Negócio", isCorrect: true }
    ]
},
{
    question: "Por que os proprietários de negócios atribuem valor comercial aos objetivos do PI da equipe?",
    type: "single",
    options: [
        { text: "Para determinar o valor mais alto usando o WSJF", isCorrect: false },
        { text: "Para garantir que as equipes não trabalhem em Enablers arquiteturais", isCorrect: false },
        { text: "Para fornecer orientação sobre o valor comercial dos objetivos da equipe", isCorrect: true },
        { text: "Para substituir as decisões tomadas na priorização do WSJF", isCorrect: false }
    ]
},
{
    question: "Que tipo de equipe está organizada para auxiliar outras equipes com recursos especializados e ajudá-las a se tornarem mais proficientes em novas tecnologias?",
    type: "single",
    options: [
        { text: "Equipe alinhada ao fluxo", isCorrect: false },
        { text: "Equipe de plataforma", isCorrect: false },
        { text: "Equipe de subsistema complicada", isCorrect: false },
        { text: "Equipe de habilitação", isCorrect: true }
    ]
},
{
    question: "Por que as equipes têm uma Retrospectiva de Iteração?",
    type: "single",
    options: [
        { text: "Iterar nas histórias", isCorrect: false },
        { text: "Identificar critérios de aceitação", isCorrect: false },
        { text: "Ajustar e identificar maneiras de melhorar", isCorrect: true },
        { text: "Avaliar métricas", isCorrect: false }
    ]
},
{
    question: "O Agile Release Train usa qual tipo de equipe para realizar o trabalho?",
    type: "single",
    options: [
        { text: "Equipes de solução", isCorrect: false },
        { text: "Equipes de processo de revisão em fases", isCorrect: false },
        { text: "Equipes de gerenciamento", isCorrect: false },
        { text: "Equipes multifuncionais", isCorrect: true }
    ]
},
{
    question: "Qual função serve como líder servidor para o Agile Release Train?",
    type: "single",
    options: [
        { text: "Business Owner", isCorrect: false },
        { text: "Release Train Engineer", isCorrect: true },
        { text: "Agile Coach", isCorrect: false },
        { text: "Scrum Master", isCorrect: false }
    ]
},
{
    question: "Qual é o foco da reunião Daily Stand-up?",
    type: "single",
    options: [
        { text: "Objetivos de PI versus resultados", isCorrect: false },
        { text: "Metas de iteração versus o que foi feito", isCorrect: true },
        { text: "Metas do Scrum Master versus metas da Equipe de Desenvolvimento", isCorrect: false },
        { text: "Objetivos do plano versus objetivos do Proprietário do Programa", isCorrect: false }
    ]
},
{
    question: "Você precisa de alguém em sua organização que seja a autoridade no backlog do Programa (ART) e seja a voz interna do Cliente. Qual função no nível do Programa SAFe você deve preencher?",
    type: "single",
    options: [
        { text: "Representante de Suporte ao Cliente", isCorrect: false },
        { text: "Product Owner", isCorrect: false },
        { text: "Release Train Engineer", isCorrect: false },
        { text: "Product Management", isCorrect: true }
    ]
},
{
    question: "O que faz parte do papel do Gerenciamento de Produto?",
    type: "single",
    options: [
        { text: "Priorizar o Backlog do Programa", isCorrect: true },
        { text: "Priorizar os Enablers", isCorrect: false },
        { text: "Facilitar as sessões de refinamento do backlog", isCorrect: false },
        { text: "Atribuir valor de negócios aos Recursos", isCorrect: false }
    ]
},
{
    question: "Quem é responsável pelo Backlog da Solução?",
    type: "single",
    options: [
        { text: "Product Owners", isCorrect: false },
        { text: "Solution Train Engineer", isCorrect: false },
        { text: "Product Management", isCorrect: false },
        { text: "Solution Management", isCorrect: true }
    ]
},
{
    question: "Qual função aceita Capacidades como completas?",
    type: "single",
    options: [
        { text: "Gerenciamento de Soluções", isCorrect: true },
        { text: "Gerenciamento de Produtos", isCorrect: false },
        { text: "Arquiteto/Engenheiro de Soluções", isCorrect: false },
        { text: "Engenheiro de Treinamento de Soluções", isCorrect: false }
    ]
},
{
    question: "Qual função no nível do portfólio assume a responsabilidade de coordenar os Épicos do portfólio por meio do sistema Portfolio Kanban?",
    type: "single",
    options: [
        { text: "Epic Owners", isCorrect: true },
        { text: "Enabler Epic", isCorrect: false },
        { text: "Lean Portfolio Management", isCorrect: false },
        { text: "Enterprise Architect", isCorrect: false }
    ]
},
{
    question: "Quem é responsável pela gestão do Portfólio Kanban?",
    type: "single",
    options: [
        { text: "Release Train Engineer", isCorrect: false },
        { text: "Solution Management", isCorrect: false },
        { text: "Product Management", isCorrect: false },
        { text: "Lean Portfolio Management", isCorrect: true }
    ]
},
{
    question: "A etapa de análise do sistema Portfolio Kanban tem um novo Epic com um business case Lean concluído. O que acontece na próxima etapa para o Epic?",
    type: "single",
    options: [
        { text: "Será movido para o Portfolio Backlog se receber uma decisão 'go' do Lean Portfolio Management", isCorrect: true },
        { text: "Será implementado se tiver a classificação mais alta do trabalho mais curto ponderado primeiro (WSJF)", isCorrect: false },
        { text: "Permanecerá na etapa de análise até que um ou mais Agile Release Trains tenham a capacidade de implementá-lo", isCorrect: false },
        { text: "Será implementado assim que o Business Case Lean for aprovado pelo Epic Owner", isCorrect: false }
    ]
},
{
    question: "Você precisa de alguém em sua equipe que trabalhe em fluxos de valor e programas para ajudar a fornecer a direção técnica estratégica que pode otimizar os resultados do portfólio. Qual nível de portfólio você deve preencher?",
    type: "single",
    options: [
        { text: "Scrum Master", isCorrect: false },
        { text: "Lean Portfolio Management", isCorrect: false },
        { text: "Epic Owners", isCorrect: false },
        { text: "Enterprise Architect", isCorrect: true }
    ]
},
{
    question: "Qual destaque no nível do Portfólio tem o papel de descrever o propósito do Portfólio Scaled Agile Framework?",
    type: "single",
    options: [
        { text: "Portfolio Retrospective", isCorrect: false },
        { text: "Portfolio Value Stream", isCorrect: false },
        { text: "Portfolio Canvas", isCorrect: true },
        { text: "Portfolio Kanban", isCorrect: false }
    ]
},
////////////////////////////////////////////////////////////////////////////
// Início Simulado 2
{
    question: "O que é usado para capturar o estado atual do Portfólio e uma cartilha para o estado futuro?",
    type: "single",
    options: [
        { text: "Portfolio Canvas", isCorrect: true },
        { text: "Portfolio Backlog", isCorrect: false },
        { text: "Portfolio Kanban", isCorrect: false },
        { text: "Portfolio Vision", isCorrect: false }
    ]
},
{
    question: "Como o fluxo do Portfólio Epics é gerenciado?",
    type: "single",
    options: [
        { text: "No Kanban do Programa", isCorrect: false },
        { text: "No Backlog do Portfólio", isCorrect: false },
        { text: "No Backlog do Programa", isCorrect: false },
        { text: "No Kanban do Portfólio", isCorrect: true }
    ]
},
{
    question: "Qual opção é um destaque no nível do Portfólio do Scaled Agile Framework?",
    type: "single",
    options: [
        { text: "Orçamentos Enxutos", isCorrect: true },
        { text: "Incremento do Programa", isCorrect: false },
        { text: "Estrutura Econômica", isCorrect: false },
        { text: "Intenção da Solução", isCorrect: false }
    ]
},
{
    question: "Ao usar o Scaled Agile Framework, qual é o benefício de adicionar sincronização à cadência de várias equipes?",
    type: "single",
    options: [
        { text: "A variabilidade de desenvolvimento em todo o sistema é reduzida a zero", isCorrect: false },
        { text: "Demonstrações em todo o sistema são possíveis, pois todas as demonstrações de equipe acontecem ao mesmo tempo", isCorrect: true },
        { text: "Cada equipe trabalhará mais rápido, pois todos começam ao mesmo tempo", isCorrect: false },
        { text: "O trabalho em andamento geral é reduzido", isCorrect: false }
    ]
},
{
    question: "Você está gerenciando uma equipe que incorporou o SAFe. Demora cerca de 5 dias para que cada uma das solicitações de seus clientes internos de um recurso seja respondida pelo líder de desenvolvimento e, em média, leva mais 10 dias para a equipe fazer a correção ou transferência de desenvolvimento para o teste. Qual é a dica SAFe imediata que você implementaria para garantir que o valor seja entregue mais cedo?",
    type: "single",
    options: [
        { text: "Remova, ou minimize, o tempo de implementação", isCorrect: false },
        { text: "Remova o líder de desenvolvimento e eduque uma equipe auto-organizada", isCorrect: false },
        { text: "Faça com que os desenvolvedores realizem o teste de seu próprio trabalho e removam completamente a equipe de teste", isCorrect: false },
        { text: "Remova, ou minimize, o tempo de espera da solicitação e o tempo de entrega de testes", isCorrect: true }
    ]
},
{
    question: "Você deseja armazenar, versionar e indexar artefatos de software binários. Que tipo de ferramenta você usa?",
    type: "single",
    options: [
        { text: "Repositório de Código", isCorrect: false },
        { text: "Linter", isCorrect: false },
        { text: "Repositório de Gerenciamento de Artefatos", isCorrect: true },
        { text: "Gerador de Código", isCorrect: false }
    ]
},
{
    question: "Qual é uma explicação do pipeline de entrega contínua no nível do Scaled Agile Framework Programme?",
    type: "single",
    options: [
        { text: "Abrange tudo o que é necessário para ir de artefatos de software não testados a artefatos de software testados", isCorrect: false },
        { text: "Engloba tudo o que é necessário para fornecer um fluxo contínuo de valor aos clientes", isCorrect: true },
        { text: "Abrange tudo o que é necessário para implantar artefatos de software em funcionamento de um ambiente de teste para um ambiente de produção", isCorrect: false },
        { text: "Abrange tudo o que é necessário para ir do código-fonte aos artefatos de software em funcionamento", isCorrect: false }
    ]
},
{
    question: "O que o pipeline de entrega contínua permite?",
    type: "single",
    options: [
        { text: "Aprendizado", isCorrect: true },
        { text: "Refatoração contínua", isCorrect: false },
        { text: "Aumento da dívida técnica", isCorrect: false },
        { text: "Entrega de grandes lotes", isCorrect: false }
    ]
},
{
    question: "Por que é importante dissociar a implementação da versão?",
    type: "single",
    options: [
        { text: "Para eliminar a necessidade de responder rapidamente a problemas de produção", isCorrect: false },
        { text: "Para permitir a inspeção da maturidade do Agile com base em diferentes tempos de ciclo", isCorrect: false },
        { text: "Para tornar a implantação de ativos uma decisão de negócios", isCorrect: false },
        { text: "Para permitir a liberação de funcionalidades sob demanda para atender às necessidades de negócios", isCorrect: true }
    ]
},
{
    question: "O que os Serviços Compartilhados representam?",
    type: "single",
    options: [
        { text: "Uma visão futura da solução a ser desenvolvida, refletindo as necessidades dos clientes e stakeholders", isCorrect: false },
        { text: "Uma comunidade de prática é um grupo informal de membros da equipe e outros especialistas.", isCorrect: false },
        { text: "Uma equipe que presta assistência na construção e utilização do pipeline de entrega contínua.", isCorrect: false },
        { text: "As funções, pessoas e serviços especializados necessários para o sucesso de um Agile Release Train ou Solution Train", isCorrect: true }
    ]
},
{
    question: "Você está trabalhando em um projeto de software complexo de vários componentes e gostaria de controlar a variabilidade do processo de desenvolvimento. Que mecanismo SAFe você pode empregar?",
    type: "single",
    options: [
        { text: "Pontos de integração", isCorrect: true },
        { text: "Reuniões stand-up", isCorrect: false },
        { text: "Planejamento inicial detalhado", isCorrect: false },
        { text: "Tomada de decisão descentralizada", isCorrect: false }
    ]
},
{
    question: "Você está tentando coordenar a pista arquitetônica por meio de diferentes camadas, deseja aumentar a velocidade em seu portfólio. O que você poderia fazer para conseguir isso?",
    type: "single",
    options: [
        { text: "Siga as práticas de qualidade incorporadas", isCorrect: false },
        { text: "Implemente facilitadores", isCorrect: true },
        { text: "Implemente épicos", isCorrect: false },
        { text: "Siga as diretrizes do SGQ", isCorrect: false }
    ]
},
{
    question: "Qual é a principal vantagem de usar a avaliação objetiva de sistemas de trabalho como marcos no Scaled Agile Framework?",
    type: "single",
    options: [
        { text: "Decisões centralizadas sobre design e requisitos", isCorrect: false },
        { text: "Maior desempenho do sistema", isCorrect: false },
        { text: "Taxa de erros da solução significativamente menor", isCorrect: false },
        { text: "Mitigação de riscos", isCorrect: true }
    ]
},
{
    question: "Ao trabalhar com o backlog da equipe, qual é a função específica do Product Owner?",
    type: "single",
    options: [
        { text: "Ajudando a superfície de p roblemas com o plano atual.", isCorrect: false },
        { text: "Investindo todo o seu tempo no desenvolvimento de testes de aceitação específicos.", isCorrect: false },
        { text: "Manter todos os recursos planejados para serem entregues por um ART.", isCorrect: false },
        { text: "Proteger a equipe do problema de múltiplas partes interessadas.", isCorrect: true }
    ]
},
{
    question: "Você é um defensor do Scaled Agile Framework em sua organização e está tentando convencer-la de que ela precisa de mudanças. Que tipo de visão você poderia adotar para ajudar a atingir seu objetivo?",
    type: "single",
    options: [
        { text: "Uma visão imediata", isCorrect: false },
        { text: "Uma visão econômica", isCorrect: true },
        { text: "Uma visão pragmática", isCorrect: false },
        { text: "Uma visão de negócios", isCorrect: false }
    ]
},
{
    question: "Qual é um benefício de desbloquear a motivação intrínseca dos trabalhadores do conhecimento?",
    type: "single",
    options: [
        { text: "Centralizar a tomada de decisões", isCorrect: false },
        { text: "Fornecer autonomia com propósito, missão e restrições mínimas", isCorrect: true },
        { text: "Reduzir os limites de trabalho em processo (WIP)", isCorrect: false },
        { text: "Esforçar-se para alcançar um estado de fluxo contínuo", isCorrect: false }
    ]
},
{
    question: "O que mais o princípio SAFe, desbloqueia a motivação intrínseca dos trabalhadores do conhecimento, exige além de propósito e missão?",
    type: "single",
    options: [
        { text: "Inovação", isCorrect: false },
        { text: "Transparência", isCorrect: false },
        { text: "Limitações mínimas possíveis", isCorrect: true },
        { text: "Remuneração baseada em incentivos", isCorrect: false }
    ]
},
{
    question: "O que pode ser usado como modelo para colocar o SAFe em prática dentro de uma organização?",
    type: "single",
    options: [
        { text: "Princípios SAFe", isCorrect: false },
        { text: "SAFe Core Values", isCorrect: false },
        { text: "Roteiro de Implementação SAFe", isCorrect: true },
        { text: "House of Lean", isCorrect: false }
    ]
},
{
    question: "Qual caminho um LACE usaria no ciclo de vida de crescimento Agile?",
    type: "single",
    options: [
        { text: "As 7 Competências Essenciais da Agilidade de Negócios", isCorrect: false },
        { text: "O Roteiro de Implementação do SAFe", isCorrect: true },
        { text: "Roteiros de Maturidade Ágil", isCorrect: false },
        { text: "O Scaled Agile Framework", isCorrect: false }
    ]
},
{
    question: "O que esta declaração define: 'Uma série de atividades que provaram ser eficazes na implementação bem-sucedida do SAFe'?",
    type: "single",
    options: [
        { text: "Princípios SAFe", isCorrect: false },
        { text: "SAFe Core Values", isCorrect: false },
        { text: "Roteiro de Implementação SAFe", isCorrect: true },
        { text: "House of Lean", isCorrect: false }
    ]
},
{
    question: "Quando um roteiro se torna uma fila?",
    type: "single",
    options: [
        { text: "Quando é maior que um Incremento de Programa", isCorrect: false },
        { text: "Quando está totalmente comprometido", isCorrect: true },
        { text: "Quando não inclui compromissos", isCorrect: false },
        { text: "Quando contém Recursos e não Épicos", isCorrect: false }
    ]
},
{
    question: "Qual é a primeira etapa do roteiro de implementação do SAFe?",
    type: "single",
    options: [
        { text: "Alcance o ponto de inflexão", isCorrect: true },
        { text: "Crie o Plano de Implementação", isCorrect: false },
        { text: "Prepare-se para o Lançamento do ART", isCorrect: false },
        { text: "Treine a Execução do ART", isCorrect: false }
    ]
},
{
    question: "Quais são as três primeiras etapas do roteiro de implementação do SAFe?",
    type: "multiple",
    options: [
        { text: "Treinar Agentes de Mudança Lean-Agile", isCorrect: true },
        { text: "Treinar Executivos, Gerentes e Líderes", isCorrect: true },
        { text: "Prepare-se para o lançamento do ART", isCorrect: false },
        { text: "Alcançando o ponto de inflexão", isCorrect: true }
    ]
},
{
    question: "Quais são as três últimas etapas do roteiro de implementação do SAFe?",
    type: "single",
    options: [
        { text: "Treinar agentes de mudança Lean-Agile, estender para o portfólio, acelerar", isCorrect: false },
        { text: "Lançar trens, treinar a execução do Agile Release Train, treinar executivos e gerentes", isCorrect: false },
        { text: "Treinar agentes de mudança Lean-Agile, identificar fluxos de valor e Agile Release Trains, estender para o portfólio", isCorrect: false },
        { text: "Lançar mais Agile Release Trains e Value Streams, estender ao portfólio, acelerar", isCorrect: true }
    ]
},
{
    question: "Uma equipe acaba de adotar o roteiro de implementação do SAFe e está em processo de treinamento de executivos, gerentes e líderes. Qual é o próximo passo deles?",
    type: "single",
    options: [
        { text: "Identificar o fluxo de valor e treinar o Agile Release", isCorrect: true },
        { text: "Criar o Plano de Implementação", isCorrect: false },
        { text: "Preparar para o lançamento do ART", isCorrect: false },
        { text: "Treinar a Execução do ART", isCorrect: false }
    ]
},
{
    question: "Uma empresa acaba de adotar o roteiro de implementação do SAFe e está em processo de treinamento de executivos, gerentes e líderes. Qual é o próximo passo deles?",
    type: "single",
    options: [
        { text: "Treinar os líderes em Portfólio e Gerenciamento de Produto para resolver problemas antes de corrigir sintomas", isCorrect: false },
        { text: "Realizar mapeamento de processos no estado atual", isCorrect: false },
        { text: "Treinar agentes de mudança Lean-Agile para impulsionar o roteiro e construir consenso", isCorrect: false },
        { text: "Identificar fluxos de valor e Agile Release Trains para iniciar o alinhamento de a organização", isCorrect: true }
    ]
},
{
    question: "Qual afirmação é verdadeira sobre um fluxo de valor que usa DevOps com sucesso?",
    type: "single",
    options: [
        { text: "Possui pilha de tecnologia sem código legado", isCorrect: false },
        { text: "Possui medições objetivas com automação", isCorrect: false },
        { text: "Possui processo de aprendizado em loop fechado", isCorrect: true },
        { text: "Possui menor limiar de defeitos aprovados para produção", isCorrect: false }
    ]
},
{
    question: "Qual afirmação é um princípio do Manifesto Ágil?",
    type: "single",
    options: [
        { text: "Meça tudo", isCorrect: false },
        { text: "Simplicidade - a arte de maximizar a quantidade de trabalho não feito - é essencial", isCorrect: true },
        { text: "Visualize e limite o WIP, reduza o tamanho dos lotes e gerencie o comprimento das filas", isCorrect: false },
        { text: "Respeito pelas pessoas e pela cultura", isCorrect: false }
    ]
},
{
    question: "Ao basear as decisões na economia, como são usados o lead time, o custo do produto, o valor e as despesas de desenvolvimento?",
    type: "single",
    options: [
        { text: "Limitar o trabalho em processo (WIP) através do sistema", isCorrect: false },
        { text: "Identificar diferentes parâmetros da estrutura econômica", isCorrect: true },
        { text: "Levar em conta os custos irrecuperáveis", isCorrect: false },
        { text: "Recuperar o dinheiro já gasto", isCorrect: false }
    ]
},
{
    question: "O que é considerado um antipadrão ao atribuir valores de negócios aos objetivos do PI da equipe?",
    type: "single",
    options: [
        { text: "Proprietários de negócios atribuindo o valor do negócio", isCorrect: false },
        { text: "Atribuindo valores de negócios a objetivos não comprometidos", isCorrect: false },
        { text: "Todos os PI Objectives recebem um valor de 10", isCorrect: true },
        { text: "Donos de negócios atribuem valores altos a importantes trabalhos do Enabler", isCorrect: false }
    ]
},
{
    question: "Quais são as três chaves primárias para implementar o fluxo? (Escolha três.)",
    type: "multiple",
    options: [
        { text: "Gerenciar o comprimento das filas", isCorrect: true },
        { text: "Troca frequente de contexto", isCorrect: false },
        { text: "Aumentar a capacidade", isCorrect: false },
        { text: "Resolver os problemas sistêmicos", isCorrect: false },
        { text: "Reduzir os tamanhos dos lotes de trabalho", isCorrect: true },
        { text: "Visualizar e limitar o trabalho em processo (WIP)", isCorrect: true }
    ]
},
{
    question: "O que a equipe deve focar para otimizar o fluxo?",
    type: "single",
    options: [
        { text: "Custo", isCorrect: false },
        { text: "Solicitações", isCorrect: false },
        { text: "Atrasos", isCorrect: true },
        { text: "Resultados", isCorrect: false }
    ]
},
{
    question: "Otimizar o fluxo significa identificar o quê?",
    type: "single",
    options: [
        { text: "Indicadores-chave de desempenho", isCorrect: false },
        { text: "Atrasos", isCorrect: true },
        { text: "Problemas de previsibilidade do trem", isCorrect: false },
        { text: "Atividades que carecem de inovação", isCorrect: false }
    ]
},
{
    question: "Qual é o último passo na abordagem de Kotter para gerenciamento de mudanças?",
    type: "single",
    options: [
        { text: "Ancorar novas abordagens na cultura", isCorrect: true },
        { text: "Sustentar e melhorar", isCorrect: false },
        { text: "Consolidar ganhos e produzir mais vitórias", isCorrect: false },
        { text: "Gerar vitórias de curto prazo", isCorrect: false }
    ]
},
{
    question: "O Product Management tem autoridade de conteúdo sobre o Program Backlog. Sobre o que os Product Owners têm autoridade de conteúdo?",
    type: "single",
    options: [
        { text: "Fluxos de Valor", isCorrect: false },
        { text: "Backlog do Portfólio", isCorrect: false },
        { text: "Visão do Portfólio", isCorrect: false },
        { text: "Backlog da Equipe", isCorrect: true }
    ]
},
{
    question: "Qual é o impacto do Customer Centricity?",
    type: "single",
    options: [
        { text: "Interpretar os ritmos do mercado", isCorrect: false },
        { text: "Entender as necessidades do Cliente", isCorrect: true },
        { text: "Interpretar os ritmos do mercado", isCorrect: false },
        { text: "Desenhar soluções customizadas para o cliente", isCorrect: false }
    ]
},
{
    question: "Como o SAFe descreve o foco no cliente?",
    type: "single",
    options: [
        { text: "Como uma mentalidade focada nos comportamentos do Cliente que produzem as melhores inovações", isCorrect: true },
        { text: "Como um conjunto de práticas empregadas para fazer produtos focados no Cliente", isCorrect: false },
        { text: "Como estratégia para atender às necessidades de um mercado de Clientes em constante mudança", isCorrect: false },
        { text: "Como forma de trabalhar para incluir o Cliente nos processos diários de trabalho e planejamento", isCorrect: false }
    ]
},
{
    question: "Qual é um problema ao se organizar em torno de funções hierárquicas?",
    type: "single",
    options: [
        { text: "Move a decisão para onde está a informação", isCorrect: false },
        { text: "Reduz tensões políticas", isCorrect: false },
        { text: "Cria times de negócios ágeis", isCorrect: false },
        { text: "Não é como o valor flui", isCorrect: true }
    ]
},
{
    question: "O que é um produto mínimo viável?",
    type: "single",
    options: [
        { text: "Um produto mínimo que pode ser construído para dominar o mercado", isCorrect: false },
        { text: "Uma história mínima que uma equipe pode entregar em uma iteração", isCorrect: false },
        { text: "Um protótipo que pode ser usado para explorar as necessidades do usuário", isCorrect: false },
        { text: "Uma versão mínima de um novo produto usada para testar uma hipótese", isCorrect: true }
    ]
},
{
    question: "O que é Agilidade Empresarial?",
    type: "single",
    options: [
        { text: "Aplicar princípios e práticas Lean-Agile à especificação, desenvolvimento, implantação, operação e evolução dos maiores e mais sofisticados sistemas do mundo", isCorrect: false },
        { text: "Como as pessoas com pensamento Lean e as equipes ágeis otimizam seus processos de negócios, evoluem a estratégia com novos compromissos claros e decisivos e adaptam rapidamente a organização conforme necessário para capitalizar novas oportunidades", isCorrect: false },
        { text: "Uma abordagem centrada no cliente para definir, construir e liberar um fluxo contínuo de produtos e serviços valiosos para clientes e usuários", isCorrect: false },
        { text: "A capacidade de competir e prosperar na era digital, respondendo rapidamente às mudanças do mercado e oportunidades emergentes com soluções de negócios inovadoras", isCorrect: true }
    ]
},
{
    question: "Qual afirmação caracteriza com precisão os Temas Estratégicos?",
    type: "single",
    options: [
        { text: "São objetivos de negócios que conectam o portfólio SAFe à estratégia de negócios da Empresa", isCorrect: true },
        { text: "São um resumo de alto nível da Visão de cada programa e são atualizados após cada PI", isCorrect: false },
        { text: "São requisitos que abrangem os Agile Release Trains, mas devem se encaixar em um único Program Increment", isCorrect: false },
        { text: "São grandes iniciativas generadas no Portfólio Kanban que exigem priorização ponderada do trabalho mais curto e um business case leve", isCorrect: false }
    ]
},
{
    question: "Qual é a base da SAFe House of Lean?",
    type: "single",
    options: [
        { text: "Liderança", isCorrect: true },
        { text: "Melhoria implacável", isCorrect: false },
        { text: "Valor", isCorrect: false },
        { text: "Fluxo", isCorrect: false }
    ]
},
{
    question: "A Casa do Lean é uma metáfora clássica que descreve a mentalidade essencial para o pensamento Lean. Qual dos quatro pilares defende uma mentalidade \"Vá Ver\"?",
    type: "single",
    options: [
        { text: "Melhoria implacável", isCorrect: false },
        { text: "Inovação", isCorrect: true },
        { text: "Fluxo", isCorrect: false },
        { text: "Respeito às pessoas e à cultura", isCorrect: false }
    ]
},
{
    question: "A Casa do Lean é uma metáfora clássica que descreve a mentalidade essencial para o pensamento Lean. Qual dos quatro pilares defende uma mentalidade \"Sala do escritório\"?",
    type: "single",
    options: [
        { text: "Melhoria implacável", isCorrect: false },
        { text: "Inovação", isCorrect: true },
        { text: "Fluxo", isCorrect: false },
        { text: "Respeito às pessoas e à cultura", isCorrect: false }
    ]
},
{
    question: "Qual pilar da House of Lean foca no Cliente sendo o consumidor do trabalho?",
    type: "single",
    options: [
        { text: "Inovação", isCorrect: false },
        { text: "Valor", isCorrect: true },
        { text: "Fluxo", isCorrect: false },
        { text: "Respeito às pessoas e à cultura", isCorrect: false }
    ]
},
////////////////////////////////////////////////////////////////////////////
// Início Simulado 3
{
    question: "Qual Pilar da Casa do Lean incentiva o Aprendizado e o Crescimento?",
    type: "single",
    options: [
        { text: "Inovação", isCorrect: false },
        { text: "Fluxo", isCorrect: false },
        { text: "Melhoria Implacável", isCorrect: true },
        { text: "Respeito às Pessoas e à Cultura", isCorrect: false }
    ]
},
{
    question: "Qual é o objetivo da House of Lean?",
    type: "single",
    options: [
        { text: "Liderança Lean-Agile como cultura organizacional", isCorrect: false },
        { text: "Valor com o menor lead time sustentável", isCorrect: true },
        { text: "Alinhando princípios e valores a uma causa fixa", isCorrect: false },
        { text: "Construindo um Grow Lean Mindset em oposição ao Fixed Mindset", isCorrect: false }
    ]
},
{
    question: "Qual é a melhor medida de progresso para o desenvolvimento de sistemas complexos?",
    type: "single",
    options: [
        { text: "Inspecionar e Adaptar", isCorrect: false },
        { text: "Demonstração do Sistema", isCorrect: true },
        { text: "Backlog Priorizado", isCorrect: false },
        { text: "Revisão de Iteração", isCorrect: false }
    ]
},
{
    question: "Qual é a principal razão para a demonstração do sistema?",
    type: "single",
    options: [
        { text: "Para fornecer uma verificação de qualidade opcional", isCorrect: false },
        { text: "Para permitir um feedback mais rápido pela integração entre as equipes", isCorrect: true },
        { text: "Para cumprir o requisito de planejamento do SAFe PI", isCorrect: false },
        { text: "Para dar ao proprietário do produto a oportunidade de fornecer feedback sobre o incremento da equipe", isCorrect: false }
    ]
},
{
    question: "Qual afirmação é verdadeira sobre a Iteração de Inovação e Planejamento (IP)?",
    type: "single",
    options: [
        { text: "É usado anualmente quando a equipe precisa reorientar os processos de trabalho", isCorrect: false },
        { text: "É usado como ponto de sincronização semanal entre os Scrum Masters", isCorrect: false },
        { text: "Sem a Iteração IP, existe o risco de que a 'tirania do urgente' supere todas as atividades de inovação", isCorrect: true },
        { text: "O Scrum Master pode decidir se a Iteração de IP é necessária", isCorrect: false }
    ]
},
{
    question: "Qual é a base das competências essenciais do SAFe?",
    type: "single",
    options: [
        { text: "Liderança Lean-Agile", isCorrect: true },
        { text: "Agilidade Organizacional", isCorrect: false },
        { text: "Cultura de Aprendizagem Contínua", isCorrect: false },
        { text: "Agilidade de Equipe e Técnica", isCorrect: false }
    ]
},
{
    question: "Quantas dimensões tem a competência Agile Product Delivery?",
    type: "single",
    options: [
        { text: "dois", isCorrect: false },
        { text: "três", isCorrect: true },
        { text: "quatro", isCorrect: false },
        { text: "cinco", isCorrect: false }
    ]
},
{
    question: "Quais são as três dimensões da Liderança Lean-Agile? (Escolha três.)",
    type: "multiple",
    options: [
        { text: "Mindset e princípios", isCorrect: true },
        { text: "Inteligência emocional", isCorrect: false },
        { text: "SAFe Core Values", isCorrect: false },
        { text: "Liderar pelo exemplo", isCorrect: true },
        { text: "Apoiar a mudança organizacional", isCorrect: false },
        { text: "Liderar a mudança", isCorrect: true }
    ]
},
{
    question: "O primeiro Princípio Lean-Agile do SAFe inclui \"Entregar cedo e com frequência\" e o que mais?",
    type: "single",
    options: [
        { text: "Descentralizar a tomada de decisões", isCorrect: false },
        { text: "Aplicar cadência", isCorrect: false },
        { text: "Aplicar pensamento sistêmico", isCorrect: false },
        { text: "Entregar valor de forma incremental", isCorrect: true }
    ]
},
{
    question: "O que é um Guardrail no gasto do Orçamento Lean?",
    type: "single",
    options: [
        { text: "Marcos de aprendizado como medidas objetivas", isCorrect: false },
        { text: "Limites de gastos para cada Agile Release Train", isCorrect: true },
        { text: "Orçamento participativo", isCorrect: false },
        { text: "Engajamento contínuo do proprietário do negócio", isCorrect: false }
    ]
},
{
    question: "Qual é um componente de um Guardrail no Lean Portfolio Management?",
    type: "single",
    options: [
        { text: "Alocação de decisões centralizadas versus descentralizadas na Empresa", isCorrect: false },
        { text: "Alocação de capacidade do Fluxo de Valor em comparação com o mapeamento de processos", isCorrect: true }, // ??????
        { text: "Fóruns de orçamento participativo que levam a mudanças no orçamento do Fluxo de Valor", isCorrect: false },
        { text: "Determinar se as necessidades de negócios atendem ao Limite do Portfólio", isCorrect: false }
    ]
},
{
    question: "Como o SAFe recomenda o uso de um segundo sistema operacional para agregar valor?",
    type: "single",
    options: [
        { text: "Alcançando economias de escala", isCorrect: false },
        { text: "Focando em clientes, produtos, inovação e crescimento", isCorrect: true },
        { text: "Criando grandes departamentos e organizações matriciais para apoiar o rápido crescimento", isCorrect: false },
        { text: "Organizar a Empresa em torno do fluxo de valor mantendo as hierarquias", isCorrect: false },
        { text: "Construir uma pequena rede empresarial focada no Cliente em vez das hierarquias existentes", isCorrect: false }
    ]
},
{
    question: "O que pode ser usado para fazer o script da mudança para o SAFe?",
    type: "single",
    options: [
        { text: "O Roteiro de Implementação", isCorrect: true },
        { text: "O Programa Kanban", isCorrect: false },
        { text: "A Carta do Centro de Excelência Lean-Agile (LACE)", isCorrect: false },
        { text: "O Portfólio Canvas", isCorrect: false }
    ]
},
{
    question: "No Programa Kanban algumas etapas têm limites de trabalho em processo (WIP). Por que isso é necessário?",
    type: "single",
    options: [
        { text: "Para habilitar a multitarefa", isCorrect: false },
        { text: "Para garantir que grandes filas não estejam sendo criadas", isCorrect: true },
        { text: "Para ajudar na implementação contínua", isCorrect: false },
        { text: "Para manter as metas de timebox", isCorrect: false }
    ]
},
{
    question: "Qual declaração é um valor do Manifesto Ágil?",
    type: "single",
    options: [
        { text: "Responder às mudanças", isCorrect: true },
        { text: "Respeito pelas pessoas e cultura", isCorrect: false },
        { text: "Construir de forma incremental com ciclos de aprendizagem rápidos e integrados", isCorrect: false },
        { text: "Limitar o trabalho em processo", isCorrect: false }
    ]
},
{
    question: "Qual declaração é um valor do Manifesto Ágil?",
    type: "single",
    options: [
        { text: "Responder a um plano mais que responder a colaboração do cliente", isCorrect: false },
        { text: "Responder a um plano mais que responder a mudanças", isCorrect: false },
        { text: "Responder a mudanças mais que seguir um sistema", isCorrect: false },
        { text: "Responder a mudanças mais que seguir um plano", isCorrect: true }
    ]
},
{
    question: "Qual declaração é um valor do Manifesto Ágil?",
    type: "single",
    options: [
        { text: "Colaboração do cliente mais que negociação de contrato", isCorrect: true },
        { text: "Colaboração do cliente mais que conversação interna contínua", isCorrect: false },
        { text: "Colaboração do cliente em um ritmo constante e indefinido", isCorrect: false },
        { text: "Colaboração do cliente mais que negociação de recursos", isCorrect: false }
    ]
},
{
    question: "Qual declaração é um valor do Manifesto Ágil?",
    type: "single",
    options: [
        { text: "Colaboração do cliente em um ritmo constante e indefinido", isCorrect: false },
        { text: "Indivíduos e interações mais que negociação de contratos", isCorrect: false },
        { text: "Colaboração do cliente mais que seguir um plano", isCorrect: false },
        { text: "Indivíduos e interações mais que processos e ferramentas", isCorrect: true }
    ]
},
{
    question: "Quais são as duas afirmações verdadeiras sobre objetivos não comprometidos? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "O trabalho para entregar os objetivos não comprometidos não é planejado nas iterações durante o PI Planning", isCorrect: false },
        { text: "Objetivos não comprometidos são coisas extras que a equipe pode fazer caso tenha tempo", isCorrect: false },
        { text: "Objetivos não comprometidos não são incluídos no compromisso da equipe", isCorrect: true },
        { text: "Objetivos não comprometidos não recebem um pontuação de valor de negócios planejada", isCorrect: false },
        { text: "Objetivos não comprometidos ajudam a melhorar a previsibilidade", isCorrect: true }
    ]
},
{
    question: "O que a administração deve fazer para uma transformação ágil bem-sucedida?",
    type: "single",
    options: [
        { text: "Envie alguém para representar a gerência e, em seguida, delegue tarefas a esses indivíduos", isCorrect: false },
        { text: "Troque os Scrum Masters na equipe a cada duas semanas", isCorrect: false },
        { text: "Esforce-se para pensar na adoção como uma área que eles podem controlar", isCorrect: false },
        { text: "Comprometa-se com a qualidade e seja o agente de mudança no sistema", isCorrect: true }
    ]
},
{
    question: "Quais das principais competências do Lean Enterprise ajudam a alinhar estratégia e execução?",
    type: "single",
    options: [
        { text: "Business Solutions e Lean Systems Engineering", isCorrect: false },
        { text: "Lean Portfolio Management", isCorrect: true },
        { text: "DevOps e Release on Demand", isCorrect: false },
        { text: "Equipe e Agilidade Técnica", isCorrect: false }
    ]
},
{
    question: "Qual é um exemplo de aplicação de sincronização baseada em cadência no SAFe?",
    type: "single",
    options: [
        { text: "As equipes decidem sua própria duração de iteração", isCorrect: false },
        { text: "As equipes alinham suas iterações ao mesmo cronograma para apoiar a comunicação, coordenação e integração do sistema", isCorrect: true },
        { text: "As equipes permitem tamanhos de lote em vários intervalos", isCorrect: false },
        { text: "As equipes se reúnem duas vezes a cada Incremento de Programa (PI) para planejar e agendar a capacidade", isCorrect: false }
    ]
},
{
    question: "O Design Thinking identifica pelo menos quatro novas maneiras de medir o sucesso. Quais são duas dessas maneiras? (Escolha duas.)",
    type: "multiple",
    options: [
        { text: "Confiabilidade", isCorrect: false },
        { text: "Escalabilidade", isCorrect: false },
        { text: "Comercialização", isCorrect: false },
        { text: "Sustentabilidade", isCorrect: true },
        { text: "Desejabilidade", isCorrect: true }
    ]
},
{
    question: "Qual é uma das ferramentas associadas ao Design Thinking?",
    type: "single",
    options: [
        { text: "Decomposição de Recursos Divergentes", isCorrect: false },
        { text: "Mapas de Empatia", isCorrect: true },
        { text: "Solution Canvas", isCorrect: false },
        { text: "Desenvolvimento Orientado por Comportamento", isCorrect: false }
    ]
},
{
    question: "Qual é um aspecto do pensamento sistêmico?",
    type: "single",
    options: [
        { text: "O domínio impulsiona a motivação intrínseca", isCorrect: false },
        { text: "A otimização de um componente não otimiza o sistema", isCorrect: true },
        { text: "A cadência torna rotina o que é rotina", isCorrect: false },
        { text: "O comprimento da fila impacta o tempo de espera", isCorrect: false }
    ]
},
{
    question: "Se um programa mostra repetidamente ramificações de recursos separadas em vez de uma verdadeira demonstração do sistema, qual prática deve ser revisada para resolver o p roblema?",
    type: "single",
    options: [
        { text: "Teste primeiro", isCorrect: false },
        { text: "Criação de roadmap", isCorrect: false },
        { text: "Integração Contínua", isCorrect: true },
        { text: "Scrum de scrums", isCorrect: false }
    ]
},
{
    question: "Qual afirmação é verdadeira sobre DevOps?",
    type: "single",
    options: [
        { text: "DevOps é uma abordagem para preencher a lacuna entre desenvolvimento e operações", isCorrect: true },
        { text: "A automação de testes de DevOps reduz o custo de manutenção", isCorrect: false },
        { text: "As medições não são uma prioridade para DevOps", isCorrect: false },
        { text: "Os princípios Lean-Agile não são necessários para uma implementação bem-sucedida de DevOps", isCorrect: false }
    ]
},
{
    question: "Qual afirmação é verdadeira ao implementar continuamente usando um modelo DevOps?",
    type: "single",
    options: [
        { text: "Alivia a dependência dos conjuntos de habilidades das equipes ágeis", isCorrect: false },
        { text: "Aumenta o custo de transação", isCorrect: false },
        { text: "Diminui a gravidade e a frequência das falhas de lançamento", isCorrect: true },
        { text: "Garante que as alterações implantadas na produção estejam sempre imediatamente disponíveis para os usuários finais", isCorrect: false }
    ]
},
{
    question: "Qual é um dos principais objetivos do DevOps?",
    type: "single",
    options: [
        { text: "DevOps une desenvolvimento e operações para permitir repetição contínua", isCorrect: false },
        { text: "DevOps permite liberação contínua criando um pipeline de entrega contínua escalável", isCorrect: true },
        { text: "DevOps se concentra em um conjunto de práticas aplicadas a grandes sistemas", isCorrect: false },
        { text: "DevOps se concentra em automatizar o pipeline de entrega para reduzir o custo de transação", isCorrect: false }
    ]
},
{
    question: "Qual é a frequência recomendada para atualizar a distribuição do orçamento Lean?",
    type: "single",
    options: [
        { text: "A cada iteração", isCorrect: false },
        { text: "Anualmente", isCorrect: false },
        { text: "Sob demanda", isCorrect: true }, // ????????
        { text: "Duas vezes por ano", isCorrect: false }
    ]
},
{
    question: "Qual é a estratégia de lançamento do SAFe?",
    type: "single",
    options: [
        { text: "Libere sob demanda", isCorrect: true },
        { text: "Libere continuamente", isCorrect: false },
        { text: "Libere a cada incremento de programa", isCorrect: false },
        { text: "Libere na cadência", isCorrect: false }
    ]
},
{
    question: "Qual é um componente do pipeline de entrega contínua?",
    type: "single",
    options: [
        { text: "Planejamento Contínuo", isCorrect: false },
        { text: "Melhoria Contínua", isCorrect: false },
        { text: "Cadência Contínua", isCorrect: false },
        { text: "Exploração Contínua", isCorrect: true }
    ]
},
{
    question: "Quais são os três componentes do pipeline de entrega contínua? (Escolha três.)",
    type: "multiple",
    options: [
        { text: "Planejamento Contínuo", isCorrect: false },
        { text: "Melhoria Contínua", isCorrect: false },
        { text: "Integração Contínua", isCorrect: true },
        { text: "Cadência Contínua", isCorrect: false },
        { text: "Implantação Contínua", isCorrect: true },
        { text: "Exploração Contínua", isCorrect: true }
    ]
},
{
    question: "Qual é o melhor momento para lançar software no SAFe?",
    type: "single",
    options: [
        { text: "Após cada PI", isCorrect: false },
        { text: "Após cada iteração", isCorrect: false },
        { text: "Assim que o software atender a Solução Definição de Pronto", isCorrect: false },
        { text: "Sempre que o Negócio precisar", isCorrect: true }
    ]
},
{
    question: "Qual é a maneira recomendada de expressar um Recurso?",
    type: "single",
    options: [
        { text: "Frase, hipótese de benefício e critérios de aceitação", isCorrect: true },
        { text: "Caso de negócios enxuto", isCorrect: false },
        { text: "Requisito funcional", isCorrect: false },
        { text: "Declaração de hipótese épica", isCorrect: false }
    ]
},
{
    question: "Durante Inspecionar e Adaptar, as equipes identificaram um grande número de itens de ação destinados a resolver seu maior problema com um trem. Como a equipe deve proceder?",
    type: "single",
    options: [
        { text: "Carregue todos os itens de melhoria no Program Backlog para garantir que o problema seja documentado e resolvido", isCorrect: false },
        { text: "Selecione um item de melhoria usando o WSJF", isCorrect: false },
        { text: "Identifique dois ou três itens de melhoria e carregue-os no Program Backlog", isCorrect: true },
        { text: "Mantenha todos os itens e se houver capacidade extra o Pl, carregue quantos couberem no Program Backlog", isCorrect: false }
    ]
},
{
    question: "O Agile Release Train passa por quatro etapas para entregar soluções que incluem: definição de novas funcionalidades, implementação, testes de aceitação e o que mais?",
    type: "single",
    options: [
        { text: "Concluindo as etapas do phase-gate", isCorrect: false },
        { text: "Implantando", isCorrect: true },
        { text: "Conformidade regulatória", isCorrect: false },
        { text: "Teste de DevOps", isCorrect: false }
    ]
},
{
    question: "Se pequenos lotes passam pelo sistema mais rapidamente com menor variabilidade, quais são as duas afirmações verdadeiras sobre o tamanho do lote? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Boa infraestrutura permite grandes lotes", isCorrect: false },
        { text: "Proximidade (co-location) permite tamanhos de lote pequenos", isCorrect: true },
        { text: "O tamanho dos lotes não pode influenciar nosso comportamento", isCorrect: false },
        { text: "A derrapagem severa do projeto é o resultado mais provável de grandes lotes", isCorrect: true },
        { text: "A baixa utilização aumenta a variabilidade", isCorrect: false }
    ]
},
{
    question: "Qual afirmação é verdadeira sobre o tamanho do lote?",
    type: "single",
    options: [
        { text: "Tamanhos de lote grandes limitam a capacidade de preservar opções", isCorrect: true },
        { text: "Quando as histórias são divididas em tarefas, significa que há tamanhos de lote pequenos", isCorrect: false },
        { text: "Tamanhos de lote grandes garantem tempo para qualidade incorporada", isCorrect: false },
        { text: "Quando há fluxo, significa que há tamanhos de lote pequenos", isCorrect: false }
    ]
},
{
    question: "Weighted Shortest Job First dá preferência a trabalhos com quais duas características? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Maior custo de atraso", isCorrect: true },
        { text: "Menor custo de atraso", isCorrect: false },
        { text: "Data fixa", isCorrect: false },
        { text: "Menor duração", isCorrect: true },
        { text: "Impacto na receita", isCorrect: false }
    ]
},
{
    question: "Durante a revisão final do plano, os riscos do programa são abordados usando o ROAM. O que as letras em ROAM representam?",
    type: "single",
    options: [
        { text: "Resolvido, Possuído, Aceito, Mitigado", isCorrect: true },
        { text: "Relegado, Possuído, Aprovado, Gerenciado", isCorrect: false },
        { text: "Aceito, Reprojetado, Ordenado, Mitigado", isCorrect: false },
        { text: "Gerenciado, Resolvido, Ordenado, Aceito", isCorrect: false }
    ]
},
{
    question: "A implementação do SAFe requer adesão de todos os níveis da organização. Que nível de liderança é mais importante para efetuar a mudança cultural?",
    type: "single",
    options: [
        { text: "Release Train Engineers", isCorrect: false },
        { text: "Gestão de Soluções", isCorrect: false },
        { text: "Product Owners", isCorrect: false },
        { text: "Gestão Executiva", isCorrect: true }
    ]
},
{
    question: "Quais são as duas afirmações que descrevem uma Capacidade? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "É mantido no Portfolio Backlog", isCorrect: false },
        { text: "Deve ser estruturado para caber dentro de um único PI", isCorrect: true },
        { text: "É escrito usando uma frase, hipótese de benefício e critérios de aceitação", isCorrect: true },
        { text: "Permanece completo e se torna um recurso para implementação", isCorrect: false },
        { text: "É desenvolvido e aprovado sem uma dependência da Solução Kanban", isCorrect: false }
    ]
},
{
    question: "A aprendizagem ao longo da vida é um requisito para os Líderes Lean-Agile, e os ajuda a fazer o quê?",
    type: "single",
    options: [
        { text: "Fornecer pessoal, recursos, direção e suporte para a Empresa", isCorrect: false },
        { text: "Atuar como um facilitador eficaz para as equipes", isCorrect: false },
        { text: "Demonstrar os valores que eles desejam que as equipes incorporem", isCorrect: true },
        { text: "Comprometer-se com a qualidade e a produtividade", isCorrect: false }
    ]
},
{
    question: "Com que frequência as demonstrações do sistema devem ocorrer na cadência padrão do SAFe?",
    type: "single",
    options: [
        { text: "A cada 4 semanas", isCorrect: false },
        { text: "Quando solicitado", isCorrect: false },
        { text: "Semanalmente", isCorrect: false },
        { text: "A cada 2 semanas", isCorrect: true }
    ]
},
////////////////////////////////////////////////////////////////////////////
// Início Simulado 4
{
    question: "Com que frequência deve ocorrer uma demonstração do sistema?",
    type: "single",
    options: [
        { text: "Toda versão", isCorrect: false },
        { text: "Toda semana", isCorrect: false },
        { text: "Todo PI", isCorrect: false },
        { text: "Toda Iteração", isCorrect: true }
    ]
},
{
    question: "O que o roteiro do programa faz no Scaled Agile Framework?",
    type: "single",
    options: [
        { text: "Fornece visibilidade dos Épicos do Portfólio que serão implementados no próximo ano", isCorrect: false },
        { text: "Descreve as dependências técnicas entre os Recursos", isCorrect: false },
        { text: "Comunica a entrega dos Recursos em um cronograma de curto prazo", isCorrect: false },
        { text: "Descreve o compromisso do programa para o atual e os próximos dois Incrementos do Programa", isCorrect: true }
    ]
},
{
    question: "Peter Drucker define trabalhadores do conhecimento como indivíduos que sabem mais sobre o trabalho que realizam do que quem?",
    type: "single",
    options: [
        { text: "Seus colegas de trabalho", isCorrect: false },
        { text: "Sua equipe", isCorrect: false },
        { text: "Sua organização", isCorrect: false },
        { text: "Seus chefes", isCorrect: true }
    ]
},
{
    question: "Qual declaração descreve a conexão entre recursos e capacidades em uma grande solução?",
    type: "single",
    options: [
        { text: "Alguns recursos podem não ter recursos pai", isCorrect: false },
        { text: "Não pode haver mais de 5 recursos para cada", isCorrect: false },
        { text: "Alguns recursos podem não ter recursos filhos", isCorrect: false },
        { text: "Cada recurso tem um recurso pai", isCorrect: true }
    ]
},
{
    question: "Qual é um exemplo de aplicação de cadência e sincronização no SAFe?",
    type: "single",
    options: [
        { text: "Criando equipes multifuncionais", isCorrect: false },
        { text: "Usando um sistema Portfolio Kanban", isCorrect: false },
        { text: "Alocando orçamentos para Agile Release Trains", isCorrect: false },
        { text: "Conduzindo uma reunião de PI Planning", isCorrect: true }
    ]
},
{
    question: "Quando um evento de planejamento pré-PI é necessário?",
    type: "single",
    options: [
        { text: "Quando há apenas um dia para executar o PI Planning, então é necessário mais tempo para se preparar para executá-lo efetivamente", isCorrect: false },
        { text: "Quando Product Owners e Scrum Masters precisam coordenar dependências dentro do Agile Release Train", isCorrect: false },
        { text: "Quando vários Agile Release Trains trabalhando na mesma solução precisam de alinhar e coordenar", isCorrect: true },
        { text: "Quando as equipes não conseguem identificar e estimar histórias no PI Planning e precisam de mais tempo para se preparar", isCorrect: false }
    ]
},
{
    question: "Durante o PI Planning, quem é o proprietário das prioridades de recursos?",
    type: "single",
    options: [
        { text: "Proprietário do Negócio", isCorrect: false },
        { text: "Gerenciamento de Produtos", isCorrect: true },
        { text: "Engenheiro de Treinamento de Liberação", isCorrect: false },
        { text: "Arquiteto/Engenheiro de Soluções", isCorrect: false }
    ]
},
{
    question: "Durante o PI Planning, quais são as duas tarefas que fazem parte do papel do Scrum Master no primeiro breakout da equipe? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Revise e priorize o backlog da equipe como parte do trabalho preparatório para a segunda divisão da equipe", isCorrect: false },
        { text: "Facilite a coordenação com outras equipes para dependências", isCorrect: true },
        { text: "Forneça os esclarecimentos necessários para auxiliar a equipe com sua estimativa e sequenciamento de histórias", isCorrect: false },
        { text: "Identifique o maior número possível de riscos e dependências para a revisão da gestão", isCorrect: true },
        { text: "Estar envolvido no refinamento e preparação do backlog do programa", isCorrect: false }
    ]
},
{
    question: "Durante o evento PI Planning, quando os ajustes de planejamento são acordados?",
    type: "single",
    options: [
        { text: "Durante a revisão do rascunho do plano", isCorrect: false },
        { text: "Durante as sessões de discussão", isCorrect: false },
        { text: "Durante a revisão gerencial e resolução de problemas", isCorrect: true },
        { text: "Durante o Scrum de scrums", isCorrect: false }
    ]
},
{
    question: "Por que um voto de confiança é realizado no final do PI Planning?",
    type: "single",
    options: [
        { text: "Para remover os riscos para o PI", isCorrect: false },
        { text: "Para construir um compromisso compartilhado com o plano do Programa", isCorrect: true },
        { text: "Para garantir que os Empresários aceitem o plano", isCorrect: false },
        { text: "Para responsabilizar a equipe se o Agile Release Train não cumprir seu compromisso", isCorrect: false }
    ]
},
{
    question: "Qual afirmação descreve corretamente um aspecto do comprometimento da equipe no final do PI Planning?",
    type: "single",
    options: [
        { text: "Uma equipe se compromete apenas com os Objetivos de PI com o maior valor comercial", isCorrect: false },
        { text: "Uma equipe não se compromete com objetivos não comprometidos", isCorrect: true },
        { text: "Uma equipe se compromete com todos os Recursos que colocam no quadro do programa", isCorrect: false },
        { text: "Uma equipe se compromete com todas as Histórias que colocam em seu Pl plano", isCorrect: false }
    ]
},
{
    question: "No final do PI Planning, depois que as dependências são resolvidas e os riscos são abordados, é feito um voto de confiança. Qual é o método padrão usado para votar?",
    type: "single",
    options: [
        { text: "Um voto por equipe e depois um voto de cada pessoa para o trem", isCorrect: false },
        { text: "Um voto de cada pessoa normalizado para o trem", isCorrect: false },
        { text: "Um voto por equipe normalizado para o trem", isCorrect: false },
        { text: "Um único voto de cada pessoa para o trem", isCorrect: true }
    ]
},
{
    question: "No segundo dia do PI Planning, a gerência apresenta ajustes com base na revisão da gerência do dia anterior e na reunião de solução de problemas. Qual é um tipo possível de ajuste que eles poderiam fazer?",
    type: "single",
    options: [
        { text: "Alterar o plano de uma equipe", isCorrect: false },
        { text: "Criar novas histórias de usuário", isCorrect: false },
        { text: "Ajustar as prioridades de negócios", isCorrect: true },
        { text: "Ajustar o comprimento do PI", isCorrect: false }
    ]
},
{
    question: "No segundo dia do PI Planning, os ajustes são feitos pelo grupo com base na revisão da gestão do dia anterior e na reunião de solução de problemas. Quais são os três tipos possíveis de mudanças? (Escolha três.)",
    type: "multiple",
    options: [
        { text: "Ajuste aos objetivos do PI", isCorrect: true },
        { text: "Prioridades de negócios", isCorrect: true },
        { text: "Histórias de usuários", isCorrect: false },
        { text: "Redefinições de requisitos de planejamento", isCorrect: false },
        { text: "Movimento de pessoas", isCorrect: false },
        { text: "Mudanças no escopo", isCorrect: true }
    ]
},
{
    question: "O que faz parte do papel do Scrum Master?",
    type: "single",
    options: [
        { text: "Para priorizar e identificar o que está pronto para o Planejamento de Iteração", isCorrect: false },
        { text: "Para escalar os impedimentos de ART", isCorrect: false },
        { text: "Para treinar as interações com o Scrum Framework", isCorrect: false },
        { text: "Para facilitar todos os eventos da equipe", isCorrect: true }
    ]
},
{
    question: "Quais são os dois comportamentos que um scrum master SAFe deve representar como Coach? (Escolha dois.)",
    type: "multiple",
    options: [
        { text: "Seja um facilitador", isCorrect: true },
        { text: "Focar em prazos e opções técnicas", isCorrect: false },
        { text: "Conduza a resultados específicos", isCorrect: false },
        { text: "Forneça conhecimento no assunto", isCorrect: false },
        { text: "Ajude a equipe a encontrar seu próprio caminho", isCorrect: true }
    ]
},
{
    question: "O Scrum Master é o que acima de tudo?",
    type: "single",
    options: [
        { text: "Um Líder Servidor", isCorrect: true },
        { text: "Um treinador de equipe", isCorrect: false },
        { text: "Um Agilista SEGURO", isCorrect: false },
        { text: "Um líder empático", isCorrect: false }
    ]
},
{
    question: "O que está fora da responsabilidade do Scrum Master?",
    type: "single",
    options: [
        { text: "Facilitando o evento de Inovação e Planejamento", isCorrect: false },
        { text: "Facilitando os eventos do time", isCorrect: false },
        { text: "Participando do Scrum de scrums", isCorrect: false },
        { text: "Estimando histórias para o time", isCorrect: true }
    ]
},
{
    question: "Quais são as características de um Scrum Master eficaz?",
    type: "single",
    options: [
        { text: "Apoia a autonomia da equipe", isCorrect: true },
        { text: "Articula soluções arquitetônicas", isCorrect: false },
        { text: "É especialista técnico", isCorrect: false },
        { text: "Entende as necessidades do cliente", isCorrect: false }
    ]
},
{
    question: "Qual atividade é responsabilidade de um Scrum Master?",
    type: "single",
    options: [
        { text: "Treinar o(s) Engenheiro(s) do Release Train", isCorrect: false },
        { text: "Ser dono do Daily stand-up", isCorrect: false },
        { text: "Treinar o time Ágil", isCorrect: true },
        { text: "Priorizar o Backlog do time", isCorrect: false }
    ]
},
{
    question: "O que se aplica à abordagem CALM da SAFe?",
    type: "single",
    options: [
        { text: "PI Planning", isCorrect: false },
        { text: "DevOps", isCorrect: true },
        { text: "Economic Framework", isCorrect: false },
        { text: "Continuous Deployment", isCorrect: false }
    ]
},
{
    question: "Qual é uma maneira pela qual os líderes Lean-Agile lideram pelo exemplo?",
    type: "single",
    options: [
        { text: "Aplicando um design empático e focando no Customer Centricity", isCorrect: false },
        { text: "Ao modelar a mentalidade, valores, princípios e práticas Lean-Agile do SAFe", isCorrect: true },
        { text: "Dominando as Sete Competências Centrais da Empresa Lean", isCorrect: false },
        { text: "Usando o roteiro de implementação do SAFe para traçar o caminho para a mudança", isCorrect: false }
    ]
},
{
    question: "Qual é um exemplo de diferenciação de objetivos de negócios?",
    type: "single",
    options: [
        { text: "Visão do Portfólio", isCorrect: false },
        { text: "Intenção da Solução", isCorrect: false },
        { text: "Objetivos da Empresa", isCorrect: false },
        { text: "Temas Estratégicos", isCorrect: true }
    ]
},
{
    question: "Como a confiança pode ser conquistada entre o negócio e o desenvolvimento?",
    type: "single",
    options: [
        { text: "Liberar novo valor para produção todos os dias", isCorrect: false },
        { text: "Entregar previsibilidade", isCorrect: true },
        { text: "Manter Iterações como uma zona segura para a equipe", isCorrect: false },
        { text: "Automatizar o pipeline de entrega", isCorrect: false }
    ]
},
{
    question: "Qual dos seguintes adjetivos você acha que melhor descreve o desenvolvimento Ágil?",
    type: "single",
    options: [
        { text: "Adaptativo (responde bem à mudança)", isCorrect: false },
        { text: "Colaborativo (responde a muitos mãos e mentes)", isCorrect: false },
        { text: "Iterativo (repete o processo)", isCorrect: false },
        { text: "Incremental (adiciona pequenos pedaços de valor)", isCorrect: false },
        { text: "Todas as opções acima", isCorrect: true }
    ]
},
{
    question: "Qual competência central do Lean Enterprise ajuda a impulsionar as práticas de Qualidade integrada?",
    type: "single",
    options: [
        { text: "Agilidade de Equipe e Técnica", isCorrect: true },
        { text: "DevOps e Release on Demand", isCorrect: false },
        { text: "Gestão de Portfólio Lean", isCorrect: false },
        { text: "Soluções de Negócios e Engenharia de Sistemas Lean", isCorrect: false }
    ]
}];