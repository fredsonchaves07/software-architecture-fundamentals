# Pensamento baseado em componentes

## Escopo do componente

- Os desenvolvedores acham útil subdividir o conceito de componente com base em uma ampla gama de fatores como a imagem a seguir

![image RPE841](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/8dbeb493-9daa-485c-a6b2-9e5728bb8b11)

- O componente mais simples envolve o código em um nível mais alto de modularidade do que as classes (ou funções, em linguagens não orientadas a objetos).
- Esse wrapper simples costuma ser chamado de biblioteca, que tende a ser executado no mesmo endereço de memória que o código de chamada e se comunica por meio de mecanismos de chamada de função de linguagem. 
- Em arquiteturas de microsserviços, a simplicidade é um dos princípios da arquitetura. Assim, um serviço pode consistir em código suficiente para garantir componentes ou pode ser simples o suficiente para conter apenas um pequeno trecho de código, conforme ilustrado na imagem abaixo

![image AT7Y41](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/cd050364-a31e-4d9b-bd60-00e324d5e1e2)

- Os componentes formam o bloco de construção modular fundamental na arquitetura, tornando-os uma consideração crítica para os arquitetos
- Na verdade, uma das principais decisões que um arquiteto deve tomar diz respeito ao particionamento de nível superior dos componentes da arquitetura.

## Papel do arquiteto

- Normalmente, o arquiteto define, refina, gerencia e governa os componentes de uma arquitetura. 
- Arquitetos de software, em colaboração com outras area do desenvolvimento criam o projeto inicial do software, incorporando as características e os requisitos para o sistema de Software
- Os componentes consistem em classes ou funções (dependendo da plataforma de implementação), cujo design é de responsabilidade de líderes técnicos ou desenvolvedores. 
- Não é que os arquitetos não devam se envolver no projeto de classe (principalmente ao descobrir ou aplicar padrões de projeto), mas devem evitar o microgerenciamento de cada decisão de cima para baixo no sistema
- Um arquiteto deve identificar os componentes como uma das primeiras tarefas em um novo projeto
- Mas antes que um arquiteto possa identificar os componentes, ele deve saber como particionar a arquitetura.

### Particionando a arquitetura

- Um arquiteto pode criar qualquer tipo de particionamento que desejar. Existem vários estilos que os arquitetos podem utilizar, analisando os trade-offs
- Na imagem abaixo temos 2 estilos bastante conhecido no desenvolvimento de software (Monolitico modular e arquitetura em camadas)
- Esses dois estilos representam maneiras diferentes de particionar a arquitetura em nível superior
- Cada variação, cada um dos componentes de nível superior (camadas ou componentes) provavelmente possui outros componentes incorporados
- O particionamento de nível superior é de particular interesse para os arquitetos porque define o estilo de arquitetura fundamental e a maneira de particionar o código
- Organizar a arquitetura com base em recursos técnicos, como o monólito em camadas, representa o particionamento técnico de nível superior
- Na imagem abaixo, 2 tipos de particionamento de nível superior em arquitetura

![image EY4C51](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/fb7c36e3-10b4-4f12-81c7-93efe193c235)

- Na imagem, o arquiteto particionou a funcionalidade do sistema em capacidades técnicas como apresentação, regras de negócios, serviços e persistência de dados
- Essa forma de organização permite que o desenvolvedor encontre o código relacionado a camada na qual a classe ou método representa (Aplicando a separação de responsabilidades)
- O padrão de design Model-View-Controller combina com esse padrão de arquitetura facilitando a compreensão dos desenvolvedores
- Um efeito interessante da predominância da arquitetura em camadas é que está relacionado à forma como as empresas desempenham diferentes papeis no projeto
- A arquitetura em camadas muda a forma de como as organizações são organizadas

#### Particionamento de dominio

- As arquiteturas particionadas por domínio separam os componentes de nível superior por fluxos de trabalho e/ou domínios.
![image 0PD041](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/f245c7ce-a9ce-4879-b350-07a3cab27903)

*Vantagens*
  - Modelado mais de perto como o negócio funciona em vez de um detalhe de implementação
  - Facilidade na construção de times multifuncionai em torno de domínios
  - Mais próximo de uma arquitetura modular monolitica ou microserviços
  - O fluxo de mensagens corresponde ao domínio do problema
  - Fácil de migrar dados e componentes para arquitetura distribuída

*Desvantagens*
  - Pode haver duplicação de códigos de customização
  - Não pode ser eficiente para um problema simples ou CRUD

#### Particionamento técnico

- Separam componentes de nível superior com base em recursos técnicos em vez de fluxos de trabalhos
- Isso pode se manifestar como camadas inspiradas na separação Model-View-Controller ou algum outro particionamento técnico ad hoc

![image ENZA51](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/924a8640-c51e-4488-92bc-ec13b6cd6031)

*Vantagens*
  - Separa claramente o código de personalização
  - Alinha-se melhor ao padrão de arquitetura em camadas
  - Fácil entendimento do código para desenvolvedores menos experientes
  - Pode ser fácil a execução e build do sistema

*Desvantagens*
  - Alto grau de acoplamento com tecnologia
  - Acoplamento geralmente mais alto no nível de dados. Em um sistema como este, o aplicativo e arquitetos de dados provavelmente colaborariam para criar um único banco de dados
  - Dificil migração para um sistema distribuido

## Papel do Desenvolvedor

- Os desenvolvedores geralmente pegam componentes, projetados em conjunto com a função de arquiteto, e os subdividem ainda mais em classes, funções ou subcomponentes
- Os desenvolvedores nunca devem considerar os componentes projetados por arquitetos como a última palavra

## Fluxos de identificação de componentes

- A identificação de componentes funciona melhor como um processo iterativo, produzindo e refinando por meio de feedbacks

![image AK5541](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/56caf02e-b1f6-4644-841e-b26ac6da8c83)

### Identificação inicial dos componentes

- Antes de começar o projeto de codificação, o arquiteto deve, de alguma forma, determinar com quais componentes de nível superior começar. 
- O arquiteto tem a liberdade de criar quaisquer componentes que desejar e, em seguida, mapear a funcionalidade do domínio para ver onde o comportamento deve está
- Esta etapa é mais díficil. A probabilidade de obter um bom projeto a partir desse conjunto inicial de componentes é extremamente pequena. Por isso, os arquitetos devem repetir o processo para melhora-lo

### Atribuindo os requisitos aos componentes

- Após realizar a identificação inicial dos componentes, os arquitetos deve alinhar os requisitos ou histórias de usuários aos componentes
- Isso pode haver a criação de novos componentes, a consolidação dos existentes ou separação
- Esse mapeamento não precisa ser exato. É um trabalho de refinamento constante junto com os lideres do time e desenvolvedores

### Analise de funções e responsabilidades

- Ao atribuir histórias e requisitos ao componente, o arquiteto também análisa as funções e responsabilidades elucidadas durante os requisitos para garantir que a granularidade corresponda.
- Pensar nas funções e comportamentos que o aplicativo deve suportar permite que o arquiteto alinhe a granularidade do componente e do domínio

### Analise das características arquiteturais

- Ao atribuir requisitos aos componentes, o arquiteto também deve observar as características da arquitetura descobertas anteriormente para pensar em como eles podem afetar a divisão e a granularidade dos componentes
- Por exemplo, enquanto duas partes de um sistema podem lidar com a entrada do usuário, a parte que lida com centenas de usuários simultâneos precisará de características de arquitetura diferentes de outra parte que precisa suportar apenas alguns. Assim, enquanto uma visão puramente funcional do design de componentes pode render um único componente para lidar com a interação do usuário, a análise das características da arquitetura levará a uma subdivisão

### Restruturação dos componentes

- O feedback é crítico no design de software. Assim, os arquitetos devem interagir continuamente em seu projeto de componentes com os desenvolvedores. 
- Projetar software oferece todos os tipos de dificuldades inesperadas – ninguém pode prever todos os problemas desconhecidos que geralmente ocorrem durante os projetos de software. 
- Portanto, uma abordagem iterativa para o design do componente é fundamental. Em primeiro lugar, é virtualmente impossível contabilizar todas as diferentes descobertas e casos extremos que surgirão e que encorajarão o redesenho. Em segundo lugar, à medida que a arquitetura e os desenvolvedores se aprofundam na criação do aplicativo, eles obtêm uma compreensão mais sutil de onde o comportamento e as funções devem estar.
