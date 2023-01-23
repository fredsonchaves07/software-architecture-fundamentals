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

### Forma de identificar a coesão

- A figura abaixo mostra uma estratégia para identificar o tipo de coesão de um determinado módulo

![fig1](https://user-images.githubusercontent.com/43495376/206065815-8cf0e4aa-b1da-4eca-9b19-587fbe58b804.png)


- A coesão é uma métrica menos precisa que o acoplamento. Dependendo dos critérios adotados pelo arquiteto
- Existe um método criado por cientistas da computação que avalia a falta de coesão conhecido como chidamber and kemerer object-oriented metrics (LCOM)

### Métrica LCOM (The Chidamber and Kemerer Lack of Cohesion in Methods)
- Inclui recursos como métricas de código como complexidade ciclomática além de avaliação de acplamento.
- A métrica LCOM garante a coesão estrutural de um módulo. É apresentado na equação de versão 1

![Captura de tela de 2022-12-07 13-54-50](https://user-images.githubusercontent.com/43495376/206241598-42a76590-8724-4368-b89e-d65f2d51ede4.png)

- A variável `P` aumenta em um para qualquer método que não acesse um campo compartilhado específico e `q` diminui em um para métodos que compartilham um determinado campo compartilhado 
- Em 1996 foi introduzida uma nova variação da fórmula (LCOM96B) 

![Captura de tela de 2022-12-07 14-00-43](https://user-images.githubusercontent.com/43495376/206243038-7d29ab04-acb0-43e6-8b89-e8cca7d6f2af.png)

- A métrica LCOM expõe o acoplamento acidental dentro das classes
- Na figura abaixo, os campos aparecem como letra única e os métodos aparecem como blocos
- Na classe `X` a pontuação LCOM é baixa, o que indica uma boa coesão estrutural
- A classe `Y` no entando carece de coesão. Cada um dos pares de campo/método pode ser refatorado para as suas proprias classes
- A classe `Z` mostra uma coesão mista. A última combinação de campo/método pode ser refatorado em sua própria classe

![Captura de tela de 2022-12-07 14-29-57](https://user-images.githubusercontent.com/43495376/206249519-c6eccbf4-1bea-43b4-bd76-05c7b81f8251.png)

- A métrica LCOM é útil para arquitetos que estão analisando base de código para passar de um estilo arquitetônico para outro
- Pode ser útil na busca de classes que incidentalmente estão acoplados
- Muitas métricas de software tem sérias deficiencias e o LCOM não está imune

### Acoplamento

- Existem diversas ferramentas que analisa o acoplamento em base de código baseado em teoria dos grafos
- Em 1979, Edward Yourdon e Larry Constantine definiram, em seu livro, muitos conceitos centrais sobre acoplamento e coesão incluindo métricas de acoplamento aferente e eferente
- Acomplamento aferente mede o número de entradas, conexões a um artefato de código (componente, classe, função e assim por diante)
- Acomplameno eferente mede as conexões de saida para outros artefatos de código.
- Existem ferramentas que permite o arquiteto analisar as características de acoplamento de código para auxiliar na compreensão de uma base de código
- O termo "Aferente" e "Eferente" os autores pegaram emprestados da matemática

### Abstração, instabilidade e distancia da sequência principal

- Várias outras métricas permitem uma avaliação mais profunda
- Métricas criadas por Robert C Martin para um livro C++
- Abstração é a proporção de artefatos abstratos (Classes abstratas, interfaces e assim por diante) para artefatos concretos (Implementação)
- Representa uma medida de abstração x implementação
- Abaixo a fórmula para abstração

![Captura de tela de 2023-01-17 21-09-29](https://user-images.githubusercontent.com/43495376/213039431-6c533937-c6d2-4246-9090-c7ccba03990c.png)

- m(a) representa os elementos abstratos
- m(c) representa os elementos de implementação

- Outra métrica derivada instabilidade é definida como a proporção de acoplamento eferente para a soma do acoplamento eferente e aferente

![Captura de tela de 2023-01-17 21-14-38](https://user-images.githubusercontent.com/43495376/213041666-2f255659-eefc-4872-bc0d-972a9d83b901.png)

- c(e) representa o acoplamento eferente (saida)
- c(a) representa o acoplamento aferente (entrada)

- A métrica de instabilidade determina a volatilidade da base de código
- Uma base de código que exibe altos graus de instabilidade quebra mais facilmente quando alterada devido ao auto acoplamento

### Distância da sequencia principal

- Uma das poucas métricas holisticas 
- Baseada em instabilidade e abstração

![Captura de tela de 2023-01-18 15-11-08](https://user-images.githubusercontent.com/43495376/213260940-67d9a028-4250-49de-b9e4-4fdf7dd21486.png)

- Na equação, A = abstração, I = instabilidade
- Observe que tanto a abstração quanto a instabilidade são frações cujos resultados sempre cairão entre 0 e 1

![image RYHXY1](https://user-images.githubusercontent.com/43495376/213261250-0b390ebe-d10a-4094-9180-5d5573829235.png)

- Define a relação ideal entre abstração e instabilidade
- Classes que aproximam-se dessa linha é o cenário ideal, mais equilibrada é a classe
- Superior a linha é conhecido como zona de inutilidade, o código que é muito abstrato torna-se dificil de usar
- Por outro lado, a linha inferior esquerda "entra na dor". Muita implementação com abstração insuficiente tornando frágil e dificil de manter

![image 9HE0Y1](https://user-images.githubusercontent.com/43495376/213263029-e3681950-268b-4626-9005-3aeabd4e864e.png)

- Existem ferramentas em muitas plataformas para fornecer essas medidas

### Conascencia

- Dois componentes são conascentes se uma mudança em um exigir que outro seja modificados para manter a correção
- Em 1996, Meilir Pages-Jones publicou em seu livro *What Every Programmer Should Know About Object-Oriented Design* dois tipos de conascencia (estática e dinâmica)
- Ele desenvolveu 2 tipos de conascência (estática e dinamica)

#### Conascencia estática

- Refere-se ao nível do código fonte (oposição ao tempo de execução)
- Refinamento do acoplamento aferentes e eferentes

##### *Conascencia de nome (CoN)*

- Vários componentes devem concordar com o nome de uma entidade
- Nomes de métodos representam a maneira mais comum de acoplamento de bases de código

##### *Conascencia de tipo (CoT)*

- Vários componentes devem concordar com o tipo de uma entidade
- Refere-se a facilidade comum em muitas linguagens de tipagem estática de limitar variáveis e parâmetros específicos
- Algumas linguagens de tipagem dinâmica também oferece esse tipo de conascencia como Clojure e Clojure Spec

##### *Conascencia do significado (CoM) ou Conascencia de convenção (CoC)

- Vários componentes devem concordar com o significado de valores específicos.
- Caso comum deste tipo de conascencia em bases de código é números codificados em vez de constantes
- Por exemplo, TRUE = 1 e FALSE = 0;
- Imagine os problemas se algúem inverter os valores

##### *Conascencia de Posição (CoP)

- Varios componentes devem concordar com a ordem dos valores
- Este é um problema com valores de parâmetro para chamadas de métodos e função
- Imagina um método void updateSeat(String name, String seatLocation), seja passado os valores ("14D", "Joao")
- Semâtica não está correta mesmo que os tipos sejam iguais

##### *Conascencia de algoritmo (CoA)

- Vários componentes devem concordar com um algoritmo em particular
- Um caso comum para este tipo de conascencia ocorre quando um desenvolvedor define um algoritmo de hash de segurança que deve ser executado no servidor e no cliente e produzir resultados idênticos para autenticar o usuário
- Representa uma alta forma de acoplamento, se quaisquer um dos algoritmos alterar quaisquer detalhes ocorrerá falhas na aplicação

#### Conascencia dinamica

- Analisa chamadas em tempo de execução

##### *Conascencia de execução (CoE)*

- A ordem de execução dos vários componentes devem ser importantes
- Considere o código abaixo

```java
  email = new Email();
  email.setRecipient("foo@example.com");
  email.setSender("me@me.com");
  email.send();
  email.setSubject("whoops");
```

- Não funcionará corretamente porque certas propriedades devem ser definidas em ordem.

##### *Conascencia de tipo (CoT)*

- O tempo de execução de vários componentes é importante
- Um caso comum para este tipo de conascencia é uma condição de execução causada por 2 threads que estão em execução ao mesmo tempo afetando o resultado da operação

##### *Conascencia de valorees (CoV)*

- Ocorre quando vários valores se relacionam entre si e devem mudar juntos.
- Caso mais comum para este tipo de conascencia envolve transações, especialmente em sistemas tributários. Quando um arquiteto projeta um sistema com banco de dados separados, ainda precisa atualizar um unico valor em todos os banco de dados, todos devem mudar juntos ou não

##### *Conascencia de identidade (CoI)*

- Ocorre quando vários componentes devem fazer referência à mesma entidade.
- O exemplo comum desse tipo de conascência envolve duas composições independentes. Componentes que devem compartilhar e atualizar uma estrutura de dados comum, como uma fila.

- A conascencia dinâmica talvez seja mais dificil de ser determinada por um arquiteto pois falta ferramentas para analisar as chamadas em tempo de execução com as mesmas eficiências com que analisamos o gráfico de chamadas
