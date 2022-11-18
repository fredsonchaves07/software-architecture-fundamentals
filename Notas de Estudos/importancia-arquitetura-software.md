# Porque arquitetura de software é importante?

A arquitetura de software possui papel importante no processo de desenvolvimento de software. Alguns dos motivos de utilizar arquitetura de software

- [x] Inibir ou habilitar atributos de qualidade do sistema
- [x] Dedisões baseado em arquiteturas ajuda a analisar as mudanças a medida que o sistema evolui
- [x] Permite a previsão antecipada dos atributos de qualidade
- [x] A documentação de arquitetura melhor a comunicação entre os stakeholders
- [x] Uma arquitetura define um conjunto de constraints (Regras e restrições)
- [x] A arquitetura dita a estrutura de uma organização, ou vice-versa
- [x] Pode prôve as bases do desenvolvimento incremental
- [x] Permite ao arquiteto e gerente de projetos definam melhor os custos e prazos do projeto
- [x] O desenvolvimento baseado em arquitetura concentra a atenção na construção de componentes
- [x] Redução da complexidade do sistema
- [x] Integração entre os times de desenvolvimento

A seguir, 13 maneiras úteis de usar arquitetura em um projeto, ou justificar os recursos dedicados à arquitetura

## Desabilitando ou habiltiando atributos de qualidade do sistema

- A capacidade de um sistema atender aos atributos de qualidade é determinada por sua arquitetura
- Se o sistema requer alta perfomance, será necessário se atentar ao gerenciamento dos recursos compartilhados baseando-se no tempo desses elementos
- Se a modificação é importante, é necessário se atentar as responsabilidade e comportamentos das classes. Evitar acomplamento
- Se o sistema precisar ser seguro, então é necessário gerenciar e proteger a comunicação e controlar quais elementos são permitidos para acessar determinada informação. Necessário definir também um mecanismo de autorização para proteger invasores
- Se a escabilidade seja um fator importante, então será necessário localizar o uso de recursos para facilitar substituição ou adição de capacidade. Evitando limite de recursos
- Se o reuso seja importante para o desenvolvimento de sistema, então deve-se em pensar em componentes reutilizaveis e restringir o acomplamento
- A arquitetura por si só não garante o funcionamento correto dos atributos de qualidade
- Existem outros elementos que vão desde a concepção da arquitetura, codificação, implementação, testes e deploy da aplicação. Esses elementos afeta a qualidade do sistema
- "O que arquitetura dá, a implementação pode tirar"

## Gerenciamento de mudanças

- Capacidade de modificação. É um atributo de qualidade que define a facilidade com que as mudanças podem ser feitas no sistema.
- 80% do custo total de um sistema de software ocorre após a implantação
- A maioria dos programadores e design de software estão trabalhando na manutenção do que desenvolvendo novos software
- Todos os sistemas de software mudam ao longo período
- Novos recursos, correção de bugs, mudanças na legislação, novas restrições. Todas essas mudanças, em muitas das vezes, é repleta de dificuldades
- Toda arquitetura é passivel de mudança em três categorias (local, não local e arquitetural)
  - Mudanças locais pode ser realizada modificando um único elemento - por exemplo, adicionar uma nova regra de negócio
  - Uma mudança não local requer modificações em vários elementos que não altera a estrutura arquitetônica do sistema. Por exemplo, adição de novas regras e campo novo no banco de dados
  - Mudanças arquiteturais sao alterações que afetam o funcionamento do sistema e a interações entre os elementos. Requer provavelmente mudança em todo o sistema. Por exemplo, mudança de um sistema single-thread para multi-thread
- As mudanças locais são mais desejadas
- Uma arquitetura eficaz é que alterações mais comuns são locais, ou seja, mais faceis de serem realizadas
- Mudanças não locais não são desejadas com uma frequência maior
- Mudanças arquiteturais exigem um esforco grande e necessita uma analise profunda para identificar quais impactos podem ocorrer
- Gerenciar mudanças do sistema é uma das atribuições do arquiteto de software.
- Se não der muita atenção em manter a integridade conceitual da arquitetura então certamente acumulara os débitos técnicos

## Qualidade do sistema

- É possível fazer previsões de qualidade sobre um sistema baseando-se apenas em uma avaliação da arquitetura
- A arquitetura em grande parte determina as qualidades do sistema

## Comunicação entre as partes interessadas

- A arquitetura representa uma abstração que pode ser entendida por todas as pessoas interessadas ou responsáveis pelo sistema
- Ajuda no processo de entendimento para as pessoas não técnica
- Cada stakeholder (Cliente, usuário, gerentes de projetos, analistas de QA, Desevolvedores) preocupa-se com diferentes características do sistema:
  - O usuário preocupa-se na perfomance, segurança e disponibilidade da aplicação
  - O cliente (que paga pelo sistema) preocupa-se com que arquitetura seja implementada dentro do prazo e de acordo com o orçamento
  - O gerente preocupa-se com que a arquitetura permita que as equipes trabalhem sem impedimentos atendendo os prazos e custos estimados.
  - O arquiteto preocupa-se com as estratégias para atingir todos esses objetivos

- A arquitetura provê uma linguagem comum em que diferentes situações podem ser entendidas, negociadas e resolvidas
- Sem essa linguagem fica dificil tomar as primeiras decisões em um sistema grande e complexo por exemplo

## Decisões iniciais de arquitetura

- Decisões que impactam na vida útil e desenvolvimento do sistema
- Mesmo antes de um quadro ser pintado, o artista decide qual material utilizar (tinta a óleo, giz de cera, tipo de quadro)
- Uma vez a imagem iniciada, outras decisões são imediatamente tomadas
- Um projeto de arquitetura pode ser visto como um conjunto de decisões
- Alterar uma decisão inicial pode causar um efeito cascata
- Quais as primeiras decisões a serem consideradas na arquitetura?
  - O sistema será executado em um processador ou será distribuído em vários processadores? 
  - O software será em camadas? Se sim, quantas camadas haverá? O que irá cada um faz?
  - Os componentes se comunicarão de forma síncrona ou assíncrona? Irão eles interagir transferindo controle ou dados, ou ambos?
  - As informações que trafegam pelo sistema serão criptografadas?
  - Qual sistema operacional usaremos?
  - Qual protocolo de comunicação vamos escolher?
- Decisões como essas começam a dar corpo a algumas das estruturas da a arquitetura e suas interações.

## Restrições na implementação

- Se você deseja que sua implementação esteja em conformidade com uma arquitetura então ela deve estar em conformidade com as decisões de design prescritas pela arquitetura
- Deve possuir um conjunto de elementos que interagem entre si na forma prescrita pela arquitetura
- Cada elemento deve cumprir também a sua responsabilidade
- Se um sistema tiver como atributo de qualidade o desempenho por exemplo, o arquiteto deverá analisar os elementos envolvidos que afetam diretamente ou não o desempenho
- O arquiteto deve está envolvido nas implementações das funcionalidades para que atendem as restrições de implementação e não afetem o atributo de qualidade
- O arquiteto não precisa ser especialistas em todos os aspectos de design de algoritmos ou complexidade de uma linguagem de programação. Deve ter uma noção minima para que seja possível projetar algo que não seja dificil de construir
- Arquitetos, no entanto, são as pessoas responsáveis por estabelecer, analisar e fazer cumprir asdecisões arquitetônicas e trade-offs

## Influências na estrutura organizacional

- Como a arquitetura inclui a mais ampla decomposição do sistema, é normalmente usado como base para divisão das equipes de desenvolvimento
- A arquitetura dita como vai ser as equipes de planejamento, desenvolvimento. Define canais de comunicação, controle de configuração, estruturas de arquivos banco de dados, sistemas de versionamento, plano de integração e testes e muitos outros elementos
- Influencia na estrutura organizacional da empresa para que os resultados sejam atingidos

## Desenvolvimento incremental

- A arquitetura provê desenvolvimento incremental
- O desenvolvimento incremental é util quando queremos realizar algum tipo de validação (MVP) e evitar futuros riscos de projeto
- A arquitetura pode servir como base para melhorias incrementais
- Como primeiro incremento, podemos definir a parte esquelética do sistema ou até mesmo configuração da infraestrutura, definindo como os elementos inicializam, se comunicam, compartilham dados, acessam recursos, relatam erros, registram as atividades etc. Ou seja, tais recursos podem está presente enquanto grande parte da funcionalidade do sistema ainda não esteja implementada.
- Construir a infraestrutura e construir a funcionalidade do aplicativo pode ir de mãos dadas.
- ***Projete e construa uma pequena infraestrutura para dar suporte a uma pequena funcionalidade. Repita até terminar***

## Custos e prazos estimados

- As estimativas de custo e cronograma são uma ferramenta importante para o gerente de projeto
- Ajudam o gerente de projeto a adquirir recursos necessários, bem como monitorar o andamento do projeto
- O arquiteto ajuda o gerente a criar estimativas de custos e cronograma no inicio do ciclo de vida do projeto
- Cada equipe ou individuo responsavel por um item de trabalho será capaz de fazer estimativas mais precisas
- Mas as melhores estimativas de custo e cronograma surgem de um consenso entre as estimativas de cima para baixo (criadas pelo arquiteto e pelo
gerente de projeto) e de baixo para cima (criadas pelos desenvolvedores)
- A discursão e negociação desses 2 tipos de estimativas criam uma visão de estimativa muito mais precisa
- ***Quanto mais conhecimento inicial você tiver sobre o escopo, mais preciso será o custo e estimativas de conograma***

## Modelo transferível e reutilizável

- Decisões arquitetônicas podem ser reutilizaveis em vários sistemas
- Uma linha ou familia de produtos é um conjunto de sistemas que são constuidos usando componentes compartilhados
- A arquitetura foi projetada com as necessidades de toda a familia
- A arquitetura define o que é fixo para todos os membros da linha de produto e o que é variável
- As linhas de produto representam uma abordagem poderosa para o desenvolvimento de vários sistemas. Traz beneficios como mercado, curso, produtividade e qualidade do produto.

## Arquitetura permite incorporação de elementos desenvolvidos de forma independente

- Desenvolvimento baseado em arquitetura muita das vezes se concentra em compor ou reunir elementos que provavelmente foram desenvolvidos separadamente ou até mesmo independente uns dos outros
- A composição é possível pois a arquitetura define os elementos que podem ser incorporados
- Além disso, a arquitetura restringe possíveis substituições ou adições de acordo com as interações
- Componentes comerciais de prateleira, software de código aberto, disponível publicamente aplicativos e serviços em rede são exemplos de aplicativos desenvolvidos independentemente elementos
- A complexidade e onipresença de integrar muitos de forma independente elementos desenvolvidos em seu sistema gerou toda uma indústria de software ferramentas, como Apache Ant, Apache Maven, MSBuild e Jenkins.
- Essa forma de itegração gerou os seguintes benefícios
  - Redução de tempo (Mais fácil usar uma solução pronta do que construir sua própria)
  - Maior confiabilidade (O software amplamente utilizado deve ter seus bugs corrigidos)
  - Menor custo (Softwares open sources que podem ser usados para amortizar o custo de desenvolvimento)
  - Flexibilidade
