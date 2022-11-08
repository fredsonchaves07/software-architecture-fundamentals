# Software Architecture: a Roadmap 

### David Garlan
School of Computer Science
Carnegie Mellon University
5000 Forbes Avenue
Pittsburgh, PA 15213
(412) 268-5056
garlan@cs.cmu.edu

## Objetivo:

- O autor alega que nos últimos anos houve considerável progresso no desenvolvimento de novas tecnlogias e com isso uma série de novos desafios surge para a arquitetura de software.
- O artigo tem como objetivo analisar algumas das tendências importantes da arquitetura de software no contexto de pesquisa e prática além de especular sobre as tendências emergentes, desafios e aspirações.

## Introdução:

- Uma boa arquitetura é capaz de atender os requisitos chaves do negócio e atributos de qualidade como desempenho, confiabilidade, portabilidade, escalabilidade e interoperabilidade.
- Nas últimas décadas a arquitetura de software recebeu crescente atenção como um importante subcampo da engenharia de software
- Passou a ser considerada como um fator crítico de sucesso para um sistema, design e desenvolvimento
- Atualmente existe inúmeros livros, artigos, conferencias e workshops voltados ao assunto de arquitetura de software e design
- Ferramentas comerciais, cursos, pesquisas e projetos voltado a arquitetura de software e design também vem crescendo nos últimos anos
- No entando, apesar do avanço como disciplina de engenharia, o campo de arquitetura de software ainda permanece relativamente imaturo.
- Para arquitetura ainda existem problemas e desafios

## Os papeis da arquitetura de software

- Embora existam inúmeras definições de arquitetura de software, entende se que ela descreve a estrutura básica de um sistema.
- Estas estruturas, em um nível acima, está relacionado a decisões, incluindo a interação, relacionamento e responsabilidades das partes.
- Uma descrição arquitetônica inclui informações suficientes para permitir uma análise e avaliação crítica.
- O papel da arquitetura é servir como uma ponte entre os requisitos e implementação

![Captura de tela de 2022-11-03 19-40-04](https://user-images.githubusercontent.com/43495376/199847940-a4436204-d2e0-46e5-a8b5-e1afa5da0ae7.png)

- Ao fornecer uma descrição abstrata de um sistema, a arquitetura expõe certas propriedades, enquanto oculta outras.
- A arquitetura pode desempenhar um importante papel nos aspectos de desenvolvimento de software.
  - **Compreensão**: Facilita a habilidade de entendimento, principalmente em questões de abstração de grandes sistemas. Além disso, uma boa arquitetura expôe as restrições de alto nível o que facilita na escolha de boas decisões arquiteturais
  - **Reuso**: Suporta reutilização em vários níveis. Um projeto arquitetônico suporta tanto a reutilização de grandes componentes como também, a integração desses componentes. 
  - **Desenvolvimento**: Provê uma visão geral do desenvolvimento indicando os principais componentes e depedencias entre elas. Ajuda identificar as interfaces, restrições e serviços que o sistema pode oferecer.
  - **Evolução**: Os desenvolvedores e gerentes de projeto podem identificar os principais impactos de uma mudança em um sistema projetado. Ajuda a estimar com mais precisão os custos de uma modificação. 
  - **Analise**: Ajuda a analisar os atributos de qualidade, restrições, dependencias, etc.
  - **Gerenciamento**: Avaliação crítica de um arquitetura normalmente leva a uma compreensão muito mais clara dos requisitos, estratégias de implementação, e riscos potenciais

## Arquitetura de software no passado

- Na arquitetura, há 10 anos atrás, foi um grande caso ad-hoc
- Baseavam-se em construção de diagramas informais de blocos e linhas
- As escolhas arquiteturais foi feita de maneira equivocada, baseando-se em projetos existentes
- Entretando, apesar de sua informalidade, a arquitetura era fundamental para o projeto de um sistema. As pessoas passaram compreender a importância que o projeto arquitetônico desempeha
- Alguns autores identificaram alguns principios de arquitetura e design e passaram a criar um vocabulário e ferramentas que ajudassem o trabalho do arquiteto
- Na indústria, duas tendências destacaram a importância da arquitetura. A primeira estava relacionada ao reconhecimento de um repertório compartilhado de métodos, técnicas, padrões e idiomas para estruturação de sistemas complexo. Permitia que designers descreve-se sistemas complexos usando abstrações. A segunda tendência foi a preocupação de semelhança em domínios específicos para fornecer estruturas reutilizaveis. Como por exemplo, protocolos de comunicação (que permitem que os fornecedores interoperem por fornecendo serviços em diferentes camadas de abstração), linguagems de programação (que exploram os padrões comuns de processamento de informações de negócios) e interfaces de usuários como ferramentas de desenvolvimento e frameworks.

## Arquitetura de software atualmente

- As empresas confiam nas revisões de projetos arquitetônicos como uma etapa crítica no processo de desenvolvimento
- As soluções tecnológicas voltadas para design e arquitetura de software aumentaram
- Três dos avanços importantes:
 - Desenvolvimento de linguagens e ferramentas
 - Surgimento de padrões arquitetônico
 - Compartilhamento dos conhecimentos de arquitetura de software

### Linguagem de Descrição de arquitetura e ferramentas

- A informalidade dos diagramas em projetos apresentam uma série de problemas como a compreensão dos simbolos
- Poucas ferramentas que ajudam os projetistas
- Vários pesquisadores da indústria e academia desenvolveram notações formais para representar projetos de arquitetura de software
- Conhecido como "Architecture Description Languages" (ADLs)
- Exemplos de ADLs incluem Adage, Aesop, Darwin, Rapide, SADL, Unicorn, Meta-H e Wright
- Cada uma delas tem recursos diferentes que pode ser usado para finalidades distintas
- Controle de aviação, transmissão de mensagens distribuídas, sistemas de interface de usuário, simulações de projetos arquitetônicos são alguns dos recursos que as ADLs provem
- Alguns pesquisadores passaram a olhar também em ferramentas que integram as ADLs existentes
- Tem havido um interesse considerável em usar notações de projeto de objetos de propósito geral para modelagem arquitetônica
- ADLs podem ser mapeados diretamente em uma notação UML

![Captura de tela de 2022-11-08 19-58-49](https://user-images.githubusercontent.com/43495376/200694282-5053beca-ce0e-4835-9a89-6e4da53e7b5b.png)

- O caminho A-D é usado quando se tem ADL como modelo
- O caminho B-E é usado quando a UML é usada como notação de modelagem
- O caminho A-C-E, é aquele em que uma arquitetura é representada pela primeira vez em uma ADL, mas depois transformada em UML antes de produzir uma implementação.
- UML é útil para representar modelos de orientação a objetos mas pode ser ruim por não apresentar conceitos arquitetônicos
