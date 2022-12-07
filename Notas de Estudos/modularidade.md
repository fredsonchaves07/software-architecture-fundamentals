# Modularidade


> 95% das palavras (sobre arquiteutra) são gastas exaltando os benefícios de “modularidade” e pouco ou nada é dito sobre como alcançá-la.
> — Glenford J. Myers 

- O que seria modularidade? Porque é importante entender esse conceito? Porque é um termo tão comentado nos assuntos relacionado a arquitetura de software?
- A modularidade está relacionado com a organização e interação dos componentes de software
- Se um arquiteto projeta um sistema sem pensar em como as peças se encaixam, eles acabam criando um sistema que apresenta inumeras dificuldades

## Definição

- Segundo o dicionário, o módulo é um conjunto de partes padronizadas ou independentes que podem ser utilizadas para construir uma unidade mais complexa
- Usamos a modularidade para descrever um agrupamento lógico de código relacionado
- Por exemplo, pode ser um grupo de classes ou funções
- Grande parte das linguagens de programação oferece mecanismos para modularidade (pacote em java, namespace em .NET)
- Pacote como `com.mycompany.customer` em java deve conter classes e objetos relacionado a cliente
- Os desenvolvedores podem definir o comportamento em funções, métodos, classes ou pacotes. Aplicando regras de visibilidade ou escopo
- Os módulos servem para dividir um agrupamento lógico de software evitando a duplicidade e facilitando a manutenabilidade

## Medindo a modularidade

- Dado a importância da modularização em arquitetura de software, é necessário utilizar algumas ferramentas que facilita o entendimento da modularização de componentes
- Pesquisadores criaram uma variedade de métricas independentes de linguagem para ajudar os arquitetos a entender a modularidade
- Apresentam 3 conceitos chave: *coesão*, *acoplamento*, *conascência*

### Coesão

- Parte de um módulo devem está contidas em um mesmo módulo
- Qual a relação entre as partes entre si
- Módulo coeso é aquele em que todas as partes devem ser empacotadas juntos. (Partes que fazem sentindo)
- Evitando o acomplamento por meio de chamadas entre os módulos para obter resultados úteis

>A tentativa de dividir um módulo coeso só resultaria em maior acoplamento e diminuição da legibilidade. —Larry Constantine

- Algumas categorias de coesão listadas da melhor para pior:

#### Coesão funcional

- Um módulo apresenta Coesão Funcional quando suas funções internas contribuem para a execução de uma e apenas uma tarefa relacionada ao problema

#### Coesão sequencial

- Dois módulos interagem, onde um emite dados que se tornam a entrada para o outro
- Um módulo com Coesão Sequencial caracteriza-se por ser de fácil manutenção porém de baixa reutilização, pois contém atividades que são utilizadas juntas

#### Coesão comunicacional

- Dois módulos formam uma cadeia de comunicação onde cada um opera em informações
- Exemplo: adicione um registro ao banco de dados e envie um email com essas informações
- Módulos com Coesão Comunicacional e Sequencial são semelhantes, pois ambos contém atividades organizadas em torno dos dados do problema original.
- A principal diferença entre eles é que um módulo sequencialmente coeso opera como uma linha de montagem onde suas atividades são executadas em uma ordem específica. Já em um módulo com coesão comunicacional a ordem de execução não é importante

#### Coesão procedural

- Os módulos executam o código em uma ordem específica
- O controle flui de uma atividade para outra

#### Coesão temporal

- Os módulos são relacionados com base em uma dependência de tempo
- Exemplo: um módulo que finaliza ou salva uma determinada tarefa (Não relacionado a atividade)

#### Coesão lógica

- Estão relacionados logicamente mas não funcionalmente
- Um exemplo desse tipo de coesão é o pacote java `StringUtils`. Possui funcionalidades que operam em String porém não necessariamente se relaciona com as Strings
- Possuem funções internas que contribuem para as atividades da mesma categoria geral

#### Coesão coincidental

- Representa a forma mais negativa de coesão
- Os elementos não estão relacionados 

#### Forma de identificar a coesão

- A figura abaixo mostra uma estratégia para identificar o tipo de coesão de um determinado módulo

![fig1](https://user-images.githubusercontent.com/43495376/206065815-8cf0e4aa-b1da-4eca-9b19-587fbe58b804.png)
