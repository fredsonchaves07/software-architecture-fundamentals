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

### Linhas de produtos e padrões

- Deve-se pensar em uma arquitetura reutilizavel que pode ser usada em cada desenvolvimento de padrão
- O autor comenta que existe 2 abordagem em relação a o desenvolvimento de um produto. Abordagem de linha de produtos e de produtos único
- A abordagem de linha de produtos requer diferentes métodos de desenvolvimento
- Em um produto único, a arquitetura deve ser avaliada apenas com respeito aos requisitos desse produto
- Produtos individuais podem ser construidos com uma arquitetura diferente
- Em uma abordagem de linha de produto deve-se considerar os requisitos para familia de sistemas e o produto único. Ou seja, regras e constraints também devem ser induzidas em um produto único. 

![Captura de tela de 2022-11-09 22-50-28](https://user-images.githubusercontent.com/43495376/200980790-1ff5225e-9b5e-40b0-abc1-34ec9c2b96f0.png)

- Abordagem de linhas de produto ainda não é muito difundida
- Ainda estão sendo analisados os beneficios de uma abordagem de linha produtos
- Assim como as linhas de produtos, a integração entre diversos fornecedores exigem estruturas de arquitetura que permitem que o desenvolvedor configure serviços que utilizem as interfaces
- Um exemplo citado pelo autor é o High Level Architecture (HLA) para simulação distribuida que permite a integração de simulações produzido por diversos fornecedores.
- Provê uma interface padrão que diversos fornecedores podem implementar
- Além disso, os recursos exige um conjunto de regras e restrições na qual os fornecedores que usam a interface devem observar
- Outro exemplo, é a arquitetura Java que provê interfaces que incluem transações, persistência e segurança

### Compartilhamento de conhecimento de arquitetura

- Um dos primeiros impedimentos para o surgimento da arquitetura e design de softwares foi a falta de uma base de conhecimento sobre o assunto
- Segundo autor, houve uma melhora tendo em vista que existe livros, cursos e artigos que falam do assunto
- Um assunto comum entre os livros e cursos é o uso de padrões e estilos arquiteturais
- Padrões e estilos arquiteturais definem regras e restrições de como é usado o vocabulário
- Por exemplo, um estilo pipe-and-filter pode especificar vocabulário em que os componentes de processamento são dados transformadores (filter) e as interações são os "tubos", fluxo de informação (pipe)
- Outros estilos comuns incluem arquitetura cliente e servidor, orientado a eventos, baseado em objetos.
- Cada estilo possui uma finalidade para um determinado contexto
- A documentação desses estilos é importante para que surjam outros padrões

## Arquitetura de software no futuro

- Embora arquitetura de software vem sendo discutida nos últimos anos, ainda não é uma disciplina que é ensinada e praticada na indústria de software
- Uma das justificativas para isso é que a base tecnológica para o projeto de arquitetura ainda é imaturo
- No entanto, o desenvolvimento de software vem mudando muito rápido. Essas mudanças promentem ter impacto na forma como arquitetura é praticada

### Construção x integração de sistemas

- Devido a mudanças nas estratégias time-to-market, é mais viável integrar e/ou utilizar soluções existentes
- As empresas optam em integrar ou adquirir o sistema do que simplesmente desenvolver
- Para algumas empresas, a aquisição e/ou fusão é a principal via de crescimento
- Há uma série de consequências pra arquitetura que podem ser descritas as seguir:
  - Com a popularização do desenvolvimento "baseado em componentes", aumentará a necessidade de padrões. Escolher componentes que integram com arquiteturas como COM, JavaBeans ou CORBA, os problemas de incompatibilidade podem ser reduzidos
  - Exigirá padrões de arquitetura de alto nível. Engenharia baseada em componentes, uma mudança que enfatizará o papel de integrações específicas
  - Subcontratados precisará garantir a compatibilidade com linha de produtos
  - Esta têndencia está levando a padronização de notações entre os fornecedore

### Computação centrada em rede

- Existe uma tendência para redes de computadores
- Cada vez mais, o computador e uma variedade de outras interfaces (dispositivos portáteis, laptops, telefones) são usados principalmente como meio que fornece acesso a dados remotos e computação
- Promove a mobilidade do usuário por meio de acesso as informações e serviços em qualquer lugar
- Esta tendência apresenta consequências tanto para engenharia de software como também para arquitetura de software:
  - Não há controle pois os sites e sistemas são independentes e usam a internet como meio centralizador
  - Para cada tipo de sistema, novos desafios para arquitetura de software passam a surgir como otimização dos recursos em rede, arquiteturas distribuidas, problemas de segurança etc.

### Computação pervasiva

- Os dispositivos estarão conectados no meio humano sem que seja perceptível
- Aumentará o número de dispositivos móveis
- Questões como perfomance e otimização de reserva de energia do dispositivo, arquiteturas mais flexiveis enquanto garante processamento ininterrupto, mais mobilidade para o usuário são alguns dos desafios para a arquitetura de software

## Conclusão

- Assuntos relacionados a arquitetura de software tende a crescer
- Novos padrões arquiteturais são necessário para o melhor desenvolvimento de software
- A Arquitetura possui papel importante no desenvolvimento de software pois garante compreensão, reuso, desenvolvimento, evolução, analise e gerenciamento
- Novos desafios para arquitetura de software surgem a partir que novos elementos e tecnologia.
- Mesmo que existam cursos e livros sobre arquitetura de software, ainda não é vista como uma disciplina da engenharia de software
- O artigo tenta mostrar um visão geral e o contexto da arquitetura de software no passado, atualmente e futuro.
