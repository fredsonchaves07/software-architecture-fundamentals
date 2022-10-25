# Estruturas arquiteturais e Views

- As estruturas arquiteturais têm contrapartidas na natureza. Por exemplo, o neurologista, ortopedista, hematologista e dermatologista, todos têm
visões diferentes das várias estruturas de um corpo humano.
- Oftamologistas, cardiologistas, neurologistas concentram em um subsistema específico!
![image PFBLU1](https://user-images.githubusercontent.com/43495376/197058916-bb68d90c-9344-4abe-9ee5-5bb176d4ed66.png)
- Estruturas arquiteturais segue o mesmo raciocínio. Você pode ver prontamente as qualidades que são o foco de cada uma dessas estruturas.

## Tipos de estruturas

- Estruturas arquiteturais podem ser divididas nas seguintes categorias principais, dependendo dos elementos e o raciocinio que eles se relacionam.

### Component-and-connector (C&C)

- Esse tipo de estrutura tem o foco na interação dos elementos de cada execução do sistema
- Conjunto de elementos que identifica o comportamento em tempo de execução (component) e interações (connectors)
- Componentes podem ser serviços, clientes, servidores, serviços, banco de dados e muito outros
- Os conectores são os veículos de comunicação entre os componentes, como retorno de chamada, processo operadores de sincronização, pipes ou outros
- Estruturas de C&C podem ajudar a responder as seguintes perguntas
  - Quais são os principais componentes de execução e como eles interagem em tempo de execução?
  - Quais são os principais armazenamentos de dados compartilhados?
  - Quais partes do sistema são replicadas?
  - Como os dados progridem pelo sistema?
  - Quais partes do sistema podem ser executadas em paralelo?
  - A estrutura do sistema pode mudar durante a execução e, em caso afirmativo, como?
- Essas estruturas são de importância crucial para fazer perguntas sobre as propriedades de tempo de execução do sistema, como desempenho, segurança, disponibilidade e muito mais

![image U00GU1](https://user-images.githubusercontent.com/43495376/197061948-76d2aaa2-e39e-4d25-9931-22b1afa55d7f.png)

## Estruturas de módulos

- Mostram como um sistema é estruturado e como um conjunto de códigos ou unidades de dados devem ser construídos
- Os módulos recebem responsabilidades computacionais específicas e são a base do trabalho tarefas para equipes de programação
- Podem ser representadas as classes, pacotes, camadas, funções ou divisões de funcionalidades
- Possui também relacionamentos entre os módulos 
- Geralmente é representado por UML
- Exemplo de utilização dos módulos

![image 2SDRU1](https://user-images.githubusercontent.com/43495376/197063619-30ef5a62-f7a2-4260-8bea-66c207dc150a.png)

- Exemplo de relação entre os módulos

![image UUJWU1](https://user-images.githubusercontent.com/43495376/197063790-3262dee5-0b1a-462e-a318-447e1e3d7f3f.png)

- Estruturas de módulos podem ajudar a responder as seguintes perguntas
  - Que é a responsabidade funcional primária de cada módulo?
  - Quais outros elementos de software o módulo pode usar?
  - Quais as dependências que o módulo precisa atualmente?
  - Quais módulos se relaciona com outros módulos por generalização ou especialização?
- Estruturas de módulos transmitem essas informações diretamente mas também podem ser usadas para responder as perguntas sobre o impacto no sistema quando as responsabilidades atribuidas a cada mudança de módulo.
- Assim, as estruturas dos módulos são as principais ferramentas para raciocinar sobre a capacidade de modificação de um sistema.

## Estruturas de alocação

- Estabelecem o mapeamento das estruturas de software para estruturas de não software como sua organização, o seu desenvolvimento, ambientes de testes e execução
- Essas estruturas respondem as seguintes perguntas:
  -  Em quais processadores cada elemento de software é executado?
  -  Qual diretório ou arquivo está armazenado cada elemento durante o desenvolvimento, teste e build do sistema?
  -  Qual responsabilidade de cada elemento de software às equipes de desenvolvimento?

## Algumas estruturas de módulos úteis

### Estruturas de decomposição

- As unidades são módulos que estão relacionados entre si pela relação “é-um-submódulo-de”, mostrando como os módulos são decompostos em módulos menores recursivamente até que os módulos sejam pequenos o suficiente para serem facilmente compreendido
- Módulos nesta estrutura representam um ponto comum do inicio do projeto e o arquiteto enumera quais unidades de software tem que fazer e atribui cada item a um módulo para posterior (mais detalhado) projeto e eventual implementação
- Módulos possui produtos (especificação de interface, código e plano de testes) associada com o item
- A estrutura de decomposição determina em grande escala a modificabilidade do sistema
- Quais impactos a mudança gera nos módulos?
- Essa estrutura geralmente é utilizada como base na organização do projeto de desenvolvimento, incluindo a documentação e planos de testes

![image HEVNU1](https://user-images.githubusercontent.com/43495376/197659754-f7004e90-c789-4e27-a612-089d08ba29dc.png)

### Estruturas de uso

- As unidades são também módulos e talvez classes. Elas estão relacionados pela relação de "uso", uma forma especializada de dependência

![image KL6VU1](https://user-images.githubusercontent.com/43495376/197661244-966eabbb-8c1c-4bfc-820f-967312dc052b.png)
