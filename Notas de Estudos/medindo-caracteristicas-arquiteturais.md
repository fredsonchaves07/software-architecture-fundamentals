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
