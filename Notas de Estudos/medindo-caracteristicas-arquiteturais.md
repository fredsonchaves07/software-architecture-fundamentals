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
