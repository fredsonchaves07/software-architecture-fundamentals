# Estruturas arquiteturais e Views

- As estruturas arquiteturais têm contrapartidas na natureza. Por exemplo, o neurologista, ortopedista, hematologista e dermatologista, todos têm
visões diferentes das várias estruturas de um corpo humano.
- Oftamologistas, cardiologistas, neurologistas concentram em um subsistema específico!
![image PFBLU1](https://user-images.githubusercontent.com/43495376/197058916-bb68d90c-9344-4abe-9ee5-5bb176d4ed66.png)
- Estruturas arquiteturais segue o mesmo raciocínio. Você pode ver prontamente as qualidades que são o foco de cada uma dessas estruturas.

## Tipos de estruturas

- Estruturas arquiteturais podem ser divididas nas seguintes categorias principais, dependendo dos elementos e o raciocinio que eles se relacionam.

![Captura de tela de 2022-10-31 22-07-42](https://user-images.githubusercontent.com/43495376/199137021-b5a6b9e3-4a57-4a08-8563-2924447838b3.png)

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

- Outro exemplo de utilização de C&C

![Captura de tela de 2022-10-31 22-22-45](https://user-images.githubusercontent.com/43495376/199138306-72145c93-aa50-452b-8f54-f8dc35d02111.png)


### Estruturas de módulos

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

## Utilização de algumas estruturas de módulos

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

### Estruturas de camada

- Os módulos dessa estrutura são conhecidos como camadas. A Camada é uma abstração "Máquina virtual" que provê um conjunto de serviços coesos através de interfaces gerenciáveis

![image MN9SU1](https://user-images.githubusercontent.com/43495376/197892123-c112e8c9-1644-4048-9bbf-0de36e458c54.png)

### Estruturas de classes (Generalização)

- Os módulos dessa estrutura são conhecidos como classes e possui uma relação de "herda de " ou "é uma instância de".
- A estrutura de classes permite razão sobre a reutilização e a adição incremental de funcionalidade
- Geralmente é usada em documentação de um projeto de orientação de objetos

![image 7Q9JU1](https://user-images.githubusercontent.com/43495376/197892497-63aadc9c-a741-4949-ae1a-6e5f1a11c7c0.png)

### Data model

- Descreve a informação estática de uma entidade e seus relacionamentos
- Utilizado em banco de dados

![image 05YHU1](https://user-images.githubusercontent.com/43495376/197892675-c68ee98e-1f85-4190-9345-5a72d5e3ad6c.png)


## Utilização de algumas estruturas C&C

### Estrutura de serviço

- As unidades são serviços que interagem por meio de um mecanismo de coordenação de serviços, como mensagens.

### Estrutura de concorrência

- Este tipo de estrutura permite que o arquiteto determine oportunidades de paralelismo e locais onde a conteção de recursos pode ocorrer.
- As unidades são componentes e os conectores são seus mecanismos de comunicação
- Os componentes são organizados em “tópicos"


## Utilização de algumas estruturas de alocação

### Estrutura de deplyoy

- Define como o sofware está atribuido em algum elemento de hardware, processamento e comunicação
- Os elementos são elementos de software (geralmente um processo de uma estrutura C&C), hardware entidades (processadores) e vias de comunicação.
- Esta estrutura pode ser usada para identificar atributos de qualidade como perfomance, integridade dos dados, securança e disponibilidade

![image DKUFU1](https://user-images.githubusercontent.com/43495376/197894602-e27813a4-8d7c-4911-a15c-0c4de71d3926.png)

### Estrutura de implementação

- Esta estrutura mostra como os elementos de software são mapeados para uma estrutura de arquivo em um sistema de deploy, integração, testes ou ambiente de configuração. 
- Pode ser crítico para o gerenciamento de atividades de desenvolvimento e processos de construção

### Estrutura de atribuição de trabalho

- Esta estrutura atribui responsabilidade para implementação e integração dos módulos para os times que realizarão essas tarefas
- Determina as principais vias de comunicação entre as equipes como videoconferências, wikis, listas de emails, grupos de whatsapp etc.

## Estruturas arquiteturais e suas relações

![image CG0EU1](https://user-images.githubusercontent.com/43495376/197895764-1a42b31b-d8e0-481c-8434-22b18f2ed05d.png)

## Relacionando as estruturas

- Cada estrutura é útil e pode ser usada para cada tipo de contexto diferente
- Elementos de um estrutura estará relacionada a elementos de outras estruturas, e precisamos raciocinar sobre essas relações. Por exemplo, um módulo em uma estrutura de decomposição pode ser manifestado como um, parte de um ou vários componentes em uma estrutura C&C

![image 927CU1](https://user-images.githubusercontent.com/43495376/198083967-d9cf60b2-8221-4d1e-a0c5-88724ec0ffd3.png)

- Essas duas visões são usadas para coisas distintas. Por exemplo, a visualização à direita pode ser usada para análise de desempenho, previsão de gargalos e gerenciamento de tráfego de rede, o que seria extremamente difícil ou impossível de fazer com a vista à esquerda
- Em resumo as 3 estruturas arquiteturais

## Menos é melhor

- Nem todos os sistemas garantem a consideração de muitas estruturas arquitetônicas.
- Em geral, você deve projetar e documentar uma estrutura somente se isso trouxer um retorno positivo sobre o investimento, geralmente em termos de diminuição do desenvolvimento ou manutenção custos

## Quais estruturas escolher?

- Quais delas um arquiteto deve escolher para trabalhar? Quais o arquiteto deve optar por documentar?
- Deve-se levar em consideração o atributo em seguida, escolher aqueles que desempenharão o melhor papel na entrega dos resultados esperados que não impactarão nos atributos de qualidade

## O que seria uma boa arquitetura?

- A arquitetura deve apresentar módulos usando o principio de "data hiding" e separação de responsabilidades. Os módulos de ocultação de informações devem encapsular coisas que podem mudar, isolando assim o software dos efeitos de essas mudanças
- Cada módulo deve ter uma interface bem definida que encapsula ou “esconde” os aspectos mutáveis de outro software que usa suas instalações. Essas interfaces devem permitir seu respectivo desenvolvimento equipes a trabalhar em grande parte independentemente umas das outras
- A arquitetura nunca deve depender de um produto, tecnologia ou serviço
- Os módulos que produzem dados devem ser separados dos módulos que consomem dados 
