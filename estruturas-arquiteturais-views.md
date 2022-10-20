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
