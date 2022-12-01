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

- Cada parte do módulo está relacionada com outro e o módulo contém cada coisa essencial para funcionar
- Um módulo funcionalmente coeso possui mais de um elemento necessários e suficientes para implementar um conceito

### Coesão sequencial

- Dóis módulos interagem, onde um emite dados que se tornam a entrada para o outro
