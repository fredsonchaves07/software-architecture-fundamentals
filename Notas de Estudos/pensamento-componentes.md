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

