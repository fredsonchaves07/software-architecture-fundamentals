# Medindo características arquiteturais

- Arquitetos devem lidar com as diversas características arquiteturais em todos os diferentes aspectos de software
- Aspectos operacionais como desempenho, segurança, elasticidade, escalabilidade entre outros

## Mensurando características arquiteturais

-  Existem vários problemas comuns em torno da definição das características da arquitetura nas organizações
-  Muitas características em arquitetura tem significados vagos
-  A industria tem perspectivas extremamente diferentes sobre termos comuns
-  Mesmo dentro da mesma organização, diferentes departamentos podem discordar na definição de características críticas, como desempenho
-  Muitas características arquitetônicas desejáveis compreendem muitas outras em uma escala menor. Por exemplo, os desenvolvedores podem decompor a agilidade em características como modularidade, implantabilidade e testabilidade

### Medidas operacionais

- Muitas características de arquitetura têm medições diretas óbvias, como desempenho ou escalabilidade. No entanto, mesmo estes oferecem muitas interpretações diferenciadas, dependendo dos objetivos da equipe.
- Por exemplo, talvez uma equipe meça o tempo médio de resposta para determinadas solicitações, um bom exemplo de medida de características de arquitetura operacional
- Se a equipe medem apenas a média, o que aconteceria se 1% das requisições demorasse mais do que as outras?
- As equipes de alto nível não estabelecem apenas números de desemepenhos rígidos mas sim em análises estatísticas
- Por exemplo, digamos que um serviço de streaming de vídeo queira monitorar a escalabilidade. Em vez de definir um número arbitrário como meta, os engenheiros medem a escala ao longo do tempo e constroem modelos estatísticos que disparam em tempo real
- As métricas ficam fora dos modelos de previsão
- Uma falha pode significar duas coisas: o modelo está incorreto (o que as equipes gostam de saber) ou algo está errado (o que as equipes também gostam
saber).
- Os tipos de características que as equipes agora podem medir estão evoluindo rapidamente, em conjunto com ferramentas
- A medida que os dispositivos e recursos evoluem, as equipes encontrarão novas coisas e maneiras de medir

### Medidas estruturais

- Não existem métricas abrangentes para a qualidade do código interno. No entando, algumas métricas e ferramentas permitem que os arquitetos abordem alguns aspectos críticos da estrutura do código
- Um aspecto mensurável óbvio do código é a complexidade definida pela métrica **Cyncomatic Complexity**
- Cyncomatic Complexity (CC) é uma métrica de nível de código projetada para fornecer uma medida de objeto para complexidade do código, no nível de função / método classe ou aplicativo, desenvolvida por Thomas McCabe, Sr. em 1976
- A formula para calcular: CC = E (Possiveis decisoes) - N(Linhas de código) + 2
- No exemplo abaixo, temos um CC = 3

```java
public void decision(int c1, int c2) {
  if (c1 < 100)
    return 0;
  else if (c1 + C2 > 500)
    return 1;
  else
    return -1;
}
```

![image UPW621](https://user-images.githubusercontent.com/43495376/232796732-e1df2273-ea1c-456c-83f5-f89a276e4923.png)

- O número 2 que aparece na fórmula de complexidade ciclomática representa uma simplificação para uma única função/método.
- Arquitetos e desenvolvedores concordam universalmente que códigos ruins prejudica um ou mais características desejaveis da aplicação
- Qual é um bom valor para a complexidade ciclomática? Depende!  Depende da complexidade do domínio do problema
- Por exemplo, se você tiver um problema algoritmicamente complexo, a solução produzirá funções complexas.
- Alguns dos principais aspectos do CC para os arquitetos monitorarem: são funções complexas por causa do domínio do problema ou por causa da codificação ruim? 
- Em outras palavras, um método grande poderia ser dividido em partes lógicas menores, distribuindo o trabalho (e a complexidade) em partes mais bem sucedidas?
- Em geral, os limites da indústria para CC sugerem que um valor abaixo de 10 é aceitável,

### Medidas de processo

- Algumas características da arquitetura se cruzam com os processos de desenvolvimento de software
- Por exemplo, a agilidade geralmente aparece como uma característica desejável. No entanto, é uma característica de arquitetura composta que os arquitetos podem decompor em recursos como testabilidade e implantabilidade
- A capacidade de teste é mensurável por meio de ferramentas de cobertura de código para praticamente todas as plataformas
- Como todas as verificações de software, ela não pode substituir o pensamento e a intenção. Por exemplo, uma base de código pode ter 100% de cobertura de código, mas asserções ruins que na verdade não fornecem confiança na exatidão do código
- No entanto, a testabilidade é claramente uma característica objetivamente mensurável
- Da mesma forma, as equipes podem medir a capacidade de implantação por meio de uma variedade de métricas: 
- porcentagem de implantações bem-sucedidas a falhas, quanto tempo as implantações demoram, problemas/bugs levantados pelas implantações e uma série de outros
- Cada equipe tem a responsabilidade de chegar a um bom conjunto de medições que capturem o uso dados completos para sua organização, tanto em qualidade quanto em quantidade

## Funções de governança e adequações

- Como garantir que os desenvolvedores sigam a priorização das características arquiteturais definidos pelo arquiteto?
- A modularidade é um grande exemplo de um aspecto da arquitetura que é importante mas não urgente
- Os arquitetos ainda precisam de um mecanismo para governança

### Características arquiteturais governantes

- Governança é uma importante responsabildiade do papel do arquiteto
- Existem soluções cada vez mais sofisticadas para aliviar problema dos arquitetos 
- O impulso para a automação em projetos de software gerada pela Extreme Programming criou integração contínua, que levou a uma maior automação nas operações, que agora chamamos de DevOps, continuando até a governança arquitetônica

### Funções de condicionamento

- As funções de condicionamento conhecidas também como **Fitness Function** podem ajudar avaliar problemas complexos
- Avaliação de custo total, cálculo de melhor rota são alguns dos exemplos que podem usar funções de condicionamento
- Qualquer mecanismo que forneça uma avaliação de integridade objetiva de alguma característica ou combinação delas
- Uma nova perspectiva sobre muitas ferramentas existentes

![image ZMJ831](https://user-images.githubusercontent.com/43495376/234148061-df9ec5fd-7548-4169-89e5-82247ea1a8c1.png)

- Muitas ferramentas diferentes podem ser usadas para implementar funções de aptidão, dependendo do características da arquitetura
- Por exemplo, em “Acoplamento”, os arquitetos podem utilizar métricas como "connascence" que avaliam a modularidade
- Aqui estão alguns exemplos de funções de adequação que testam vários aspectos da modularidade.

#### Dependencias ciclicas

- A modularidade é uma característica de arquitetura implícita com a qual a maioria dos arquitetos se preocupa
- Porque a modularidade mal mantida prejudica a estrutura de uma base de código; portanto, os arquitetos devem dar alta prioridade à manutenção de uma boa modularidade
- Ao codificar em qualquer ambiente popular de desenvolvimento Java ou .NET, assim que um desenvolvedor faz referência a uma classe ainda não importada, a IDE apresenta uma caixa de diálogo que pergunta aos desenvolvedores se eles gostariam de importar automaticamente a referência
- No entanto, importar classes ou componentes arbitrariamente entre si significa um desastre para a modularidade
- A imagem abaixo mostra um anti-pattern prejudicial que os arquitetos desejam evitar

![image SVYN31](https://user-images.githubusercontent.com/43495376/234383110-456b0830-c4d4-429d-8278-74f24686ddd0.png)

- Ter uma rede de componentes como essa prejudica a modularidade porque um desenvolvedor não pode reutilizar um componente único sem também trazer os outros junto
- E, claro, se os outros componentes forem acoplados a outros componentes, a arquitetura tenderá cada vez mais para o antipadrão Big Ball of Mud
- Como os arquitetos podem gerenciar este comportamento? As revisões de código ajudam muito mas acontecem muito tarde no ciclo desenvolvimento para serem eficazes
- A solução para este problema é escrever uma função de aptidão para cuidar dos ciclos como mostrado abaixo

```java
public class CycleTest {
  private JDepend jdepend;
  
  @BeforeEach
  void init() {
    jdepend = new JDepend();
    jdepend.addDirectory("/path/to/project/persistence/classes");
    jdepend.addDirectory("/path/to/project/web/classes");
    jdepend.addDirectory("/path/to/project/thirdpartyjars");
  }
  
  @Test
  void testAllPackages() {
    Collection packages = jdepend.analyze();
    assertEquals("Cycles exist", false, jdepend.containsCycles());
  }
}
```
- No código, um arquiteto usa a ferramenta de métricas JDepend para verificar as dependências entre pacotes
- Uma função que pode ser inserida no ciclo de desenvolvimento

#### Distância da função principal 

- Conforme o exemplo abaixo, os arquitetos podem utilizar uma fitness function para avaliar a distância da sequência principal

```java
  @Test
  void AllPackages() {
    double ideal = 0.0;
    double tolerance = 0.5; // project-dependent
    Collection packages = jdepend.analyze();
    Iterator iter = packages.iterator();
    while (iter.hasNext()) {
      JavaPackage p = (JavaPackage)iter.next();
      assertEquals("Distance exceeded: " + p.getName(),
      ideal, p.distance(), tolerance);
    }
  }
```
- No código, o arquiteto usa JDepend para estabelecer um limite para valores aceitáveis, falhando no teste se uma classe estiver fora do intervalo
- Os arquitetos devem garantir que os desenvolvedores entendam o propósito de a função de aptidão antes de impô-la a eles.
- Nos ultimos anos, houve aumento no número de ferramentas fe fitness function que auxiliam os arquitetos
- Uma dessas ferramentas é o ArchUnit, um framework de teste baseado em JUnit que fornece uma variedade de recursos que permitem que o arquiteto escreva teste de unidade que abordam a modularidade

![image 7PW331](https://user-images.githubusercontent.com/43495376/234682280-458ece04-da96-4046-9995-e63d17fd7b37.png)

- Como o arquiteto pode garantir que os desenvolvedores respeitarão as camadas de um aplicativo monolitico do exemplo acima?
- Alguns desenvolvedores podem não entender a importância dos padrões, enquanto outros podem adotar uma atitude “melhor pedir perdão do que permissão” por causa de alguma preocupação local primordial, como desempenho. 
- O ArchUnit permite que os arquitetos resolvam esse problema por meio de uma fitness function

```java
layeredArchitecture()
    .layer("Controller").definedBy("..controller..")
    .layer("Service").definedBy("..service..")
    .layer("Persistence").definedBy("..persistence..")
    .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
    .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller")
    .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service")
```

- Outro exemplo de fitness funciton é o Chaos Monkey da Netflix e o Simian Army
- Em particular, o Conformity, Security a Janitor Monkeu exemplificam esse recurso
- O Conformity Monkey permite que os arquitetos da Netflix definam as regras de governança impostas no "Monkey" em produção
- Por exemplo, se os arquitetos decidiram que cada serviço deve responder de forma útil a todos os verbos RESTful, eles constroem essa regra no Conformity Monkey
-  Da mesma forma, o Security Monkey verifica cada serviço em busca de defeitos de segurança conhecidos, como portas que não deveriam estar ativas e erros de configuração.
-  Por fim, o Janitor Monkey procura instâncias que nenhum outro serviço utiliza evitando assim altos custos da nuvem
-  Quando a Netflix decidiu mover suas operações para a nuvem da Amazon, os arquitetos se preocuparam com o fato de não terem mais controle sobre as operações – o que acontece se aparecer um defeito operacional?
-  Para resolver esse problema, eles criaram a disciplina de Chaos Engineering com o Chaos Monkey e, eventualmente, o Simian Army.
-  O Chaos Monkey simulou o caos geral dentro do ambiente de produção para identificar o quão suportaria o sistema
-  A latência era um problema com algumas instâncias da AWS, portanto, o Chaos Monkey simulava alta latência (o que era um problema tão grande que eles acabaram criando um Monkey especializado para isso, o Latency Monkey).
-  Ferramentas como o Chaos Kong, que simula uma falha completa de um data center da Amazon, ajudou a Netflix a evitar tais interrupções quando elas ocorreram de verdade.
-  A engenharia do caos oferece uma nova perspectiva interessante sobre a arquitetura: não é uma questão de se algo vai quebrar, mas quando?
-  Antecipar essas quebras e fazer testes para evitá-las torna os sistemas muito mais robustos.
