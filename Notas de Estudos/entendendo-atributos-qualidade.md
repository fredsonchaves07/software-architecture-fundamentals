# Entendendo os atributos de qualidade

> Qualidade nunca é um acidente, é sempre um resultado de grande intenção, esforço sincero, direção inteligente e execução hábil - William A.Froster

- Muitos fatores determinar as qualidades determinadas pela arquitetura de um sistema
- Essas qualidades vão além da funcionalidade do sistema, embora isto esteja intimamente relacionado
- A funcionalidade muitas vezes ocupa o primeiro lugar no esquema de desenvolvimento
- Um atributo de qualidade (QA) é uma propriedade mensurável ou testável de um sistema que é usada para indicar o quanto o sistema satisfaz as necessidades de seus stackholders, além da função básica do sistema
  - Como expressar as qualidades que queremos que nossa arquitetura exiba?
  - Como alcançar essas qualidades por meios arquitetônicos?
  - Como determinar as decisões de design que podemos tomar com relação a essas qualidades?

## Funcionalidade

- É a capacidade do sistema de fazer o trabalho para qual foi projetado. Ela não determina a arquitetura. Ou seja, dado um conjunto de funcionalidades necessárias, não há fim para as arquitetura que você pode criar para satisfazer essa funcionalidade
- Se a funcionalidade fosse a única coisa que importasse, você não precisaria dividir o sistema em partes
- Dividimos nossos sitema em módulos, camadas, serviços, classes, banco de dados e assim por diante para torna-los compreensiveis e para oferecer suporte a uma variedade de outros propósitos
- Esses "outros propósitos" são os atribuos de qualidade
- Embora a funcionalidade seja independente de qualquer estrutura específica, ela é obtida atribuindo responsabilidades a elementos arquitetônicos. Esse processo resulta em uma estrutura arquitetônicas mais básica - a decomposição de módulos

