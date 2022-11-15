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
