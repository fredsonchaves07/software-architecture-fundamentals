# “Connascence” uma métrica importante para identificar acoplamento e qualidade de código

Publicado em https://medium.com/@fredsonchaves07/connascence-uma-m%C3%A9trica-importante-para-identificar-acoplamento-e-qualidade-de-c%C3%B3digo-9e64ce38636a

Durante os meus estudos sobre arquitetura de software, conheci uma métrica não muito utilizada mas muito importante principalmente quando queremos avaliar e entender o nível de acoplamento e coesão do código.

A palavra “Connascence” é de origem latina que significa que algo está nascendo e crescendo juntos ao mesmo tempo. Ou seja, um interfere diretamente no outro. No Google Tradutor obtive apenas uma tradução literal em português, acredito que essa palavra não seja muito usual em nosso idioma 😅

A pronuncia (/kəˈneɪsəns/) também é um pouco complicada então para alguns pode ser um trava língua 😅

Connascence foi citado inicialmente no livro What Every Programmer Should Know About Object–Oriented Design de Meilir Pages-Jones em 1996 cujo objetivo era permitir identificar a complexidade das dependências e fornecer uma métrica que avalia o acoplamento do código. Dois componentes são connascence se uma mudança em um exigir que o outro seja modificado para manter a correção.

Todo código está sujeito a alterações. O connascence nos dá uma ideia do impacto de longo prazo além de ajudar a manter o desenvolvimento flexível.

## Tipos de connascences
Meilir Pages-Jones definiu em seu livro dois tipos de connascences sendo elas estáticas e dinâmicas

Connascence estática está relacionada a base de código enquanto que a dinâmica analisa as chamadas em tempo de execução. o tipo estático é mais fácil de alterar pois se baseia em modificações no código. Existem diversas ferramentas, inclusive a própria IDE, que podem ajudar a identificar possíveis melhorias, enquanto que a dinâmica, por se tratar em “runtime”, é mais dificil a análise. Isso talvez seja um desafio, desenvolver frameworks, bibliotecas e ferramentas que ajudam a identificar e corrigir elementos em tempo de execução. Acredito que o campo de pesquisa em arquitetura de software ainda se tem muito a evoluir.

Agora que entendemos um pouco os tipos.. vamos aprofundar e conhecer os connascence estáticos.. Vamos lá? 🚀🚀

### Connascence de nome (CoN)
Vários componentes concordam com o nome. Aqui podemos entender que um nome de um método, classe, função e até mesmo parâmetro afeta toda a estrutura do código. Refatorar um nome de uma classe por exemplo, ao fazer isso o desenvolvedor precisará alterar também outros módulos e arquivos que fazem referência a essa classe. Claro que as IDE’s ajudam nessa questão pois faz essas modificações tudo de forma automática.

O legal de entender esse assunto é que o connascence fornece um vocabulário claro e pode ser muito útil para comunicar desenvolvedores e arquiteto em um processo de refatoração por exemplo.

Vamos ao código.. 🧑‍💻

```java
public class User {

  private int id;

  private String name;

  private String email;
  
  public User(int id, String name, String email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public int getId() {
    return id;
  }
}
```

Alterando qualquer nome seja de atributos e até mesmo a classe fará que o nosso código não funcione, caso a modificação não reflita em outras classes que a chamam

Este tipo de connascence é considerada a mais fraca (Vamos entender as propriedades um pouco mais adiante..). No entanto, é fundamental nomearmos bem as entidades

### Connascence de tipo (CoT)
Vários componentes devem concordar com o tipo de uma entidade. Em linguagens de tipagem estática esse problema geralmente é detectado pelo compilador

Assim como CoN, erros de CoT também podem ser facilmente corrigido pela própria IDE.

Voltando a classe User .. perceba que se alterássemos, por exemplo, o tipo do atributo id de int para UUID já teríamos impactos e com isso seria necessário alterar também o construtor bem como o métodos que o chama.

```java
public class User {

  private UUID id;

  private String name;

  private String email;
  
  public User(UUID id, String name, String email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public UUID getId() {
    return id;
  }
}
```
Como estamos usando um código em Java, o compilador já informaria os erros

### Connascence de significado (CoS)
Este tipo de connascence era muito comum em linguagens estruturadas. Ocorre quando atribuimos algum código que possui significado lógico. Este tipo de connascence tem uma propriedade forte (vamos aprofundar um pouco nessas propriedades) e é recomendado a refatoração

Considere o código abaixo. Criamos um método que retorna um valor (significado) de acordo com o tipo de usuário.

```java
class User {

  public int getUserRole() {
    if (isAdmin()){
      return 1;
    } else if (isManager() {
      return 2;
    }
    return 0;
  }
}
```
Fica um pouco difícil de entender o que seria esses números e que tipo de lógica é representada. Existem algumas boas práticas de resolver esse tipo de connascence

### Connascence de posição (CoP)
Ocorre quando várias entidades devem concordar com a ordem dos valores. Isso geralmente ocorre em parâmetros de métodos e construtores

No código abaixo temos um exemplo de CoP. Veja que no método updateSeat é informado 2 parâmetros de mesmo tipo

```java
public void updateSeat(String name, String seatLocation) {
  this.name = name;
  this.seatLocation = seatLocation;
}
```

Como name e seatLocation são do mesmo tipo, um usuário pode passar os seguintes valores (“14D, “Joao”), ou seja, ocorrerá um erro de semântica.

Nessa situação também é recomendado a refatoração. Acredito que esse tipo de connascence pode ser resolvido usando a ideia dos Object-Calisthenics

### Connascence de algoritmo (CoA)
Vários componentes devem concordar com um algoritmo em particular. Um caso comum para este tipo de connascence ocorre quando um desenvolvedor define um algoritmo de hash de segurança que deve ser tanto no servidor como no cliente e produzir resultados idênticos para autenticar o usuário

Outro exemplo comum de CoA é quando string unicode são gravadas no disco. Imagine um software hipotético que grava uma string de dados em um arquivo de cache no disco (Usamos um algoritmo em Python)

```python
def write_data_to_cache(data_string):
    with open('/path/to/cache', 'wb') as cache_file:
        cache_file.write(data_string.encode('utf8'))
```
Uma função correspondente é usada para recuperar os dados

```python
def read_data_from_cache():
    with open('/path/to/cache', 'rb') as cache_file:
        return cache_file.read().decode('utf8')
```

Ambas as funções devem concordar com a codificação utf8 . Caso a função write_data_to_cache sofra algumo modificação de encode, a função correspondente read_data_from_cache também deverá ser alterada.

Agora que entendemos um pouco sobre os tipos estáticos.. Vamos nos aprofundar conhecer os connascence dinâmicos

### Connascence de execução (CoE)
A ordem de execução dos vários componentes devem ser importantes. Caso as propriedades não sejam definidas em ordem, pode ser que gere algum tipo de erro

No código abaixo temos um exemplo muito comum de CoE. Veja que o método send está sendo chamado primeiro do que o setSubject

```java
  email = new Email();
  email.setRecipient("foo@example.com");
  email.setSender("me@me.com");
  // possível erro ao chamar método send
  email.send();
  email.setSubject("whoops");
```

Este tipo de connascence é difícil de ser identificado por ferramentas mas nos dar uma visão clara de que este código deve ser refatorado.

### Connascence de tempo (CoT)
Ocorre quando o tempo da execução de vários componentes é importante. Um caso comum de CoT é uma condição de execução causada por 2 threads que estão em execução ao mesmo tempo afetando o resultado da operação. Assim como CoE, esse tipo de connascence também é díficil de identificar por meio de ferramentas e IDE. São problemas que podem ocorrer em tempo de execução

### Connascence de valores (CoV)
Ocorre quando vários valores se relacionam entre si e devem mudar juntos. Caso mais comum para este tipo de connascence envolve transações, especialmente em sistemas tributários. Quando um arquiteto projeta um sistema com banco de dados separados, ainda precisa atualizar um único valor em todos os banco de dados, todos devem mudar juntos ou não.

Além disso, CoV também está presente em muitos sistemas de microserviços e serviços de mensageria.

### Connascence de identidade (CoI)
Este tipo de connascence ocorre quando vários componentes devem fazer referência a mesma entidade.

Um caso mais comum de CoI ocorre quando um objeto(A) cria uma instância(I), o outro objeto (B) obtém a instacia(I) por meio da interface pública do objeto A.

Na imagem abaixo temos um Publisher que cria uma fila e expoẽ como propriedade pública. O Publisher envia as mensagens para a fila. O assinante acessa a fila por meio da propriedade pública do Editor e extrai as mensagens da fila


Uma possível correção de CoI seria explicitar a referência compartilhada. Em nosso exemplo, podemos transferir a responsabilidade de criar e gerenciar a fila para um broker ou para um contêiner de Injeção de Dependência. Essa abordagem converte de dinâmica para estática.


## Propriedades de connascence
Connascence é como qualquer outro tipo de métrica de qualidade, também está sujeita a imperfeições. No entanto, ela adota uma abordagem mais holística que podem ser definidos nas seguintes propriedades (força, grau e localidade)

### Força
Define qual força e o impacto da refatoração. Connascence mais fortes são mais difíceis de descobrir e alterar. Diferentes níveis de acoplamento são mais fáceis de resolver e/ou evitados conforme a figura abaixo


Arquitetos e desenvolvedores podem melhorar as características de acoplamento de sua base de código refatorando para melhores tipos de connascence.

### Grau
Está relacionado ao tamanho do impacto. Graus menores de connascence é o ideal. Ter muitos connascence dinâmicos não é terrível se você tiver apenas alguns módulos, porém as bases de código tendem a crescer, tornando-se um grande problema

Page-Jones define 3 diretrizes para melhorar os connascence em um sistema de modularidade

1. Minimize o connascence geral dividindo o sistema em elementos encapsulados
2. Minimize qualquer connascence restante que cruze os limites do encapsulamento
3. Maximize o connascence dentro dos limites de encapsulamento

### Localidade
Mede o quão próximo os módulos estão um dos outros. O código que está próximo (no mesmo módulo, classe ou função) normalmente deve ter mais e mais formas de connascence do que o código que está distante (em módulos separados ou mesmo bases de código).

Na imagem abaixo podemos ter uma ideia dos connascences fortes (mesmo módulo) e fracos (módulos distantes). Esse seria o cenário aceitável

## Caminhos da refatoração
Essa imagem é muito boa para representar quais direções podemos tomar quando estamos aplicando um processo de refatoração em uma base de código, aqui usamos as 3 propriedades de connascence. O cenário ideal seria na área de otimização onde temos força, grau e localidade aceitáveis


Bom pessoal essa são algumas das características dos connascence. Infelizmente eu vejo que esse assunto não é muito discutido em cursos e até mesmo faculdade mas acredito que é uma excelente métrica que pode ajudar no processo de arquitetura e desenvolvimento de software.

Espero que tenham curtido 😀

### Até logo 🖖

## Para saber mais!!
What Every Programmer Should Know About Object-Oriented Design
If you're a programmer using C++, Smalltalk, or Eiffel, or if you're about to migrate to object orientation for the…
www.amazon.com.br

Fundamentals of Software Architecture: An Engineering Approach (English Edition)
Salary surveys worldwide regularly place software architect in the top 10 best jobs, yet no real guide exists to help…
www.amazon.com.br

connascence.io
Connascence is a software quality metric & a taxonomy for different types of coupling. This site is a handy reference…
connascence.io

software-architecture-fundamentals/modularidade.md at main ·…
95% das palavras (sobre arquiteutra) são gastas exaltando os benefícios de "modularidade" e pouco ou nada é dito sobre…
github.com

