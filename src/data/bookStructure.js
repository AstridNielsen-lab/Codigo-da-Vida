// Conteúdos detalhados dos tópicos
export const topicContent = {
  // Volume 1 - Capítulo 1
  'teorias-programada-vs-estocastica': {
    title: 'Teorias Programada vs Estocástica',
    content: `
      <h3>🧬 Teorias do Envelhecimento: Uma Dicotomia Fundamental</h3>
      
      <p>O envelhecimento humano tem sido explicado através de duas principais escolas de pensamento científico, cada uma oferecendo perspectivas distintas sobre os mecanismos que governam este processo complexo.</p>
      
      <h4>📊 Teorias Programadas</h4>
      <p>As teorias programadas sugerem que o envelhecimento é um processo geneticamente determinado, controlado por um "relógio biológico" interno. Estas teorias incluem:</p>
      
      <ul>
        <li><strong>Teoria do Relógio Genético:</strong> Genes específicos controlam o tempo de vida através de programas de desenvolvimento</li>
        <li><strong>Teoria Endócrina:</strong> Hormônios regulam o processo de envelhecimento através de cascatas de sinalização</li>
        <li><strong>Teoria Imunológica:</strong> O sistema imune é programado para declinar com o tempo</li>
      </ul>
      
      <h4>🎲 Teorias Estocásticas</h4>
      <p>As teorias estocásticas propõem que o envelhecimento resulta do acúmulo aleatório de danos celulares e moleculares ao longo do tempo:</p>
      
      <ul>
        <li><strong>Teoria dos Radicais Livres:</strong> Danos oxidativos acumulativos causam disfunção celular</li>
        <li><strong>Teoria do Erro Catastrófico:</strong> Erros na síntese proteica se acumulam progressivamente</li>
        <li><strong>Teoria do Desgaste:</strong> Uso contínuo causa deterioração gradual dos sistemas biológicos</li>
      </ul>
      
      <h4>🔬 Evidências Científicas Atuais</h4>
      <p>Pesquisas modernas sugerem que ambas as perspectivas contêm elementos de verdade. O envelhecimento parece resultar de uma interação complexa entre:</p>
      
      <ul>
        <li>Fatores genéticos programados (30% da longevidade)</li>
        <li>Fatores ambientais e estocásticos (70% da longevidade)</li>
        <li>Interações epigenéticas entre genes e ambiente</li>
      </ul>
      
      <p><em>Esta compreensão integrada forma a base para as modernas estratégias de intervenção anti-envelhecimento.</em></p>
    `,
    keyPoints: [
      'Teorias programadas enfatizam controle genético',
      'Teorias estocásticas focam em danos acumulativos',
      'Evidências suportam modelo híbrido',
      'Intervenções devem abordar ambos os aspectos'
    ]
  },
  'senescencia-celular': {
    title: 'Senescência Celular',
    content: `
      <h3>🧬 Senescência Celular: O Estado de Parada Permanente</h3>
      
      <p>A senescência celular é um estado de parada irreversível do ciclo celular, caracterizado por mudanças morfológicas, metabólicas e secretórias distintas. Este processo representa uma resposta fundamental ao estresse celular e dano genômico.</p>
      
      <h4>🔬 Características Moleculares</h4>
      <p>Células senescentes apresentam marcadores específicos que as distinguem de células quiescentes:</p>
      
      <ul>
        <li><strong>SA-β-gal:</strong> Atividade aumentada da β-galactosidase associada à senescência</li>
        <li><strong>p16INK4a:</strong> Inibidor de quinase dependente de ciclina altamente expresso</li>
        <li><strong>p21CIP1:</strong> Proteína supressora tumoral que bloqueia progressão do ciclo celular</li>
        <li><strong>γH2AX:</strong> Marca de dano ao DNA e instabilidade genômica</li>
      </ul>
      
      <h4>🚨 SASP: Fenótipo Secretório Associado à Senescência</h4>
      <p>Células senescentes secretam uma mistura complexa de fatores bioativos conhecida como SASP:</p>
      
      <ul>
        <li><strong>Citocinas pró-inflamatórias:</strong> IL-6, IL-8, TNF-α</li>
        <li><strong>Quimiocinas:</strong> Recrutam células imunes</li>
        <li><strong>Fatores de crescimento:</strong> VEGF, FGF</li>
        <li><strong>Metaloproteases:</strong> Degradam matriz extracelular</li>
      </ul>
      
      <h4>⚖️ Paradoxo da Senescência</h4>
      <p>A senescência celular apresenta efeitos duais:</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px;">
          <h5>✅ Efeitos Benéficos</h5>
          <ul>
            <li>Supressão tumoral</li>
            <li>Cicatrização de feridas</li>
            <li>Desenvolvimento embrionário</li>
            <li>Resposta ao estresse</li>
          </ul>
        </div>
        <div style="background: #fdf2f2; padding: 1rem; border-radius: 8px;">
          <h5>❌ Efeitos Deletérios</h5>
          <ul>
            <li>Inflamação crônica</li>
            <li>Disfunção tecidual</li>
            <li>Promoção tumoral</li>
            <li>Envelhecimento acelerado</li>
          </ul>
        </div>
      </div>
      
      <h4>🎯 Implicações Terapêuticas</h4>
      <p>O entendimento da senescência celular abriu novos caminhos para intervenções anti-envelhecimento:</p>
      
      <ul>
        <li><strong>Senolíticos:</strong> Drogas que eliminam seletivamente células senescentes</li>
        <li><strong>Senomórficos:</strong> Compostos que modulam SASP sem eliminar células</li>
        <li><strong>Senoterapêuticos:</strong> Abordagem combinada para otimizar benefícios</li>
      </ul>
    `,
    keyPoints: [
      'Estado irreversível de parada do ciclo celular',
      'SASP promove inflamação crônica',
      'Dual role: supressão tumoral vs envelhecimento',
      'Alvo para terapias senolíticas'
    ]
  },
  'senescencia-replicativa': {
    title: 'Senescência Replicativa',
    content: `
      <h3>📏 Senescência Replicativa: O Limite de Hayflick</h3>
      
      <p>A senescência replicativa, descoberta por Leonard Hayflick em 1961, demonstra que células humanas normais têm uma capacidade limitada de divisão celular, tipicamente 50-70 divisões antes de entrar em senescência permanente.</p>
      
      <h4>🧬 Mecanismo Molecular: Erosão Telomérica</h4>
      <p>O mecanismo principal da senescência replicativa está relacionado ao encurtamento progressivo dos telômeros:</p>
      
      <ul>
        <li><strong>Telômeros:</strong> Estruturas de DNA-proteína nas extremidades cromossômicas</li>
        <li><strong>Sequência repetitiva:</strong> TTAGGG em humanos, protege genes codificantes</li>
        <li><strong>Problema da replicação terminal:</strong> DNA polimerase não consegue replicar completamente as extremidades 5'</li>
        <li><strong>Perda progressiva:</strong> 50-200 pares de bases por divisão celular</li>
      </ul>
      
      <h4>⏰ Telômeros como Relógio Molecular</h4>
      <p>Os telômeros funcionam como um "relógio molecular" que conta as divisões celulares:</p>
      
      <div style="background: #f0f8ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
        <h5>🔢 Comprimentos Telômericós por Idade:</h5>
        <ul>
          <li><strong>Nascimento:</strong> ~10-15 kb</li>
          <li><strong>20 anos:</strong> ~8-12 kb</li>
          <li><strong>40 anos:</strong> ~6-9 kb</li>
          <li><strong>60 anos:</strong> ~4-7 kb</li>
          <li><strong>80 anos:</strong> ~3-5 kb</li>
        </ul>
      </div>
      
      <h4>🛡️ Telomerase: A Solução Natural</h4>
      <p>A telomerase é uma ribonucleoproteína que pode adicionar sequências teloméricas:</p>
      
      <ul>
        <li><strong>Subunidade catalítica:</strong> TERT (Telomerase Reverse Transcriptase)</li>
        <li><strong>Componente RNA:</strong> TERC (Telomerase RNA Component)</li>
        <li><strong>Atividade limitada:</strong> Alta em células-tronco, baixa em células somáticas</li>
        <li><strong>Reativação patológica:</strong> 85-90% dos cânceres têm telomerase ativa</li>
      </ul>
      
      <h4>🎯 Variabilidade Individual</h4>
      <p>O comprimento telomérico e taxa de encurtamento variam significativamente:</p>
      
      <ul>
        <li><strong>Fatores genéticos:</strong> Polimorfismos em genes relacionados aos telômeros</li>
        <li><strong>Fatores ambientais:</strong> Estresse, exercício, dieta, tabagismo</li>
        <li><strong>Estresse oxidativo:</strong> Acelera erosão telomérica</li>
        <li><strong>Inflamação crônica:</strong> Reduz atividade da telomerase</li>
      </ul>
      
      <h4>💊 Implicações Terapêuticas</h4>
      <p>A compreensão da senescência replicativa oferece alvos terapêuticos:</p>
      
      <ul>
        <li><strong>Ativadores de telomerase:</strong> TA-65, astragalosídeos</li>
        <li><strong>Antioxidantes:</strong> Reduzem estresse oxidativo telomérico</li>
        <li><strong>Exercício regular:</strong> Mantém comprimento telomérico</li>
        <li><strong>Manejo do estresse:</strong> Preserva telômeros através de mecanismos neuroendócrinos</li>
      </ul>
      
      <p><em>A senescência replicativa representa um dos mecanismos mais bem caracterizados do envelhecimento celular e um alvo promissor para intervenções anti-envelhecimento.</em></p>
    `,
    keyPoints: [
      'Limite de 50-70 divisões celulares (Limite de Hayflick)',
      'Erosão telomérica é o mecanismo principal',
      'Telomerase pode estender vida replicativa',
      'Variabilidade individual significativa'
    ]
  },
  // Volume 1 - Capítulo 2 - Genética e Epigenética
  'instabilidade-genomica': {
    title: 'Instabilidade Genômica',
    content: `
      <h3>🧬 Instabilidade Genômica: A Fragmentação do Código da Vida</h3>
      
      <p>A instabilidade genômica representa um dos pilares fundamentais do envelhecimento, caracterizada pelo acúmulo progressivo de alterações no DNA que comprometem a integridade e funcionalidade do genoma.</p>
      
      <h4>💥 Tipos de Danos Genômicos</h4>
      <p>O genoma humano está constantemente exposto a múltiplas fontes de dano:</p>
      
      <ul>
        <li><strong>Danos Oxidativos:</strong> Espécies reativas de oxigênio causam lesões em bases nitrogenadas</li>
        <li><strong>Radiação Ionizante:</strong> Quebras de fita dupla e simples no DNA</li>
        <li><strong>Agentes Químicos:</strong> Carcinógenos ambientais e metabólitos endógenos</li>
        <li><strong>Erros Replicativos:</strong> Incorporação incorreta de nucleotídeos durante replicação</li>
        <li><strong>Deaminação Espontânea:</strong> Conversão de citosina em uracila</li>
      </ul>
      
      <h4>🔧 Sistemas de Reparo do DNA</h4>
      <p>Células possuem sofisticados mecanismos de reparo que declinam com a idade:</p>
      
      <ul>
        <li><strong>Reparo por Excisão de Base (BER):</strong> Corrige danos em bases individuais</li>
        <li><strong>Reparo por Excisão de Nucleotídeo (NER):</strong> Remove lesões volumosas</li>
        <li><strong>Reparo de Quebra de Fita Dupla:</strong> Recombinação homóloga e não-homóloga</li>
        <li><strong>Reparo de Incompatibilidade:</strong> Corrige erros de pareamento</li>
      </ul>
      
      <h4>⚠️ Consequências da Instabilidade</h4>
      <p>O acúmulo de danos genômicos resulta em:</p>
      
      <ul>
        <li>Mutações pontuais e aberrações cromossômicas</li>
        <li>Senescência celular prematura</li>
        <li>Apoptose ou transformação neoplásica</li>
        <li>Disfunção mitocondrial</li>
        <li>Alterações na expressão gênica</li>
      </ul>
      
      <h4>🎯 Estratégias de Proteção</h4>
      <p>Abordagens para preservar integridade genômica:</p>
      
      <ul>
        <li><strong>Antioxidantes:</strong> Reduzem danos oxidativos</li>
        <li><strong>Ativadores de reparo:</strong> NAD+, sirtuínas</li>
        <li><strong>Proteção telômeros:</strong> Preservam extremidades cromossômicas</li>
        <li><strong>Modulação epigenética:</strong> Mantém cromatina estável</li>
      </ul>
    `,
    keyPoints: [
      'Múltiplas fontes de dano ao DNA',
      'Sistemas de reparo declinam com idade',
      'Instabilidade leva à senescência',
      'Antioxidantes e NAD+ oferecem proteção'
    ]
  },
  'telomeros-telomerase': {
    title: 'Telômeros e Telomerase',
    content: `
      <h3>📏 Telômeros e Telomerase: Os Guardiões dos Cromossomos</h3>
      
      <p>Os telômeros são estruturas nucleoproteicas especializadas localizadas nas extremidades dos cromossomos lineares, essenciais para a estabilidade genômica e regulação da longevidade celular.</p>
      
      <h4>🧬 Estrutura Telomérica</h4>
      <p>Os telômeros humanos consistem em:</p>
      
      <ul>
        <li><strong>Sequências TTAGGG:</strong> Repetições hexanucleotídicas (2000-8000 repetições)</li>
        <li><strong>Complexo Shelterin:</strong> TRF1, TRF2, TIN2, RAP1, TPP1, POT1</li>
        <li><strong>Estrutura T-loop:</strong> Invasão da fita 3' sobressalente na região dupla-fita</li>
        <li><strong>Heterocromatina:</strong> Estado condensado da cromatina telomérica</li>
      </ul>
      
      <h4>⚙️ Complexo Telomerase</h4>
      <p>A telomerase é uma ribonucleoproteína reversa transcriptase composta por:</p>
      
      <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
        <h5>🔧 Componentes Principais:</h5>
        <ul>
          <li><strong>TERT:</strong> Subunidade catalítica com atividade transcriptase reversa</li>
          <li><strong>TERC (TR):</strong> Componente RNA que fornece template</li>
          <li><strong>Dyskerin:</strong> Proteína de estabilização do complexo</li>
          <li><strong>NOP10, NHP2, GAR1:</strong> Proteínas acessórias</li>
        </ul>
      </div>
      
      <h4>📊 Regulação da Atividade</h4>
      <p>A atividade da telomerase é rigidamente controlada:</p>
      
      <ul>
        <li><strong>Células-tronco:</strong> Alta atividade para autorrenovação</li>
        <li><strong>Células somáticas:</strong> Atividade baixa ou ausente</li>
        <li><strong>Células germinativas:</strong> Atividade elevada</li>
        <li><strong>Células cancerosas:</strong> Reativação patológica (85-90%)</li>
      </ul>
      
      <h4>🎛️ Mecanismos de Regulação</h4>
      <p>Múltiplos níveis controlam a telomerase:</p>
      
      <ul>
        <li><strong>Transcricional:</strong> c-Myc, SP1, NF-κB ativam TERT</li>
        <li><strong>Pós-transcricional:</strong> Splicing alternativo, microRNAs</li>
        <li><strong>Pós-traducional:</strong> Fosforilação, localização nuclear</li>
        <li><strong>Epigenético:</strong> Metilação do promotor TERT</li>
      </ul>
      
      <h4>⚖️ Paradoxo da Telomerase</h4>
      <p>A modulação da telomerase apresenta dilemas:</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px;">
          <h5>✅ Ativação Benéfica</h5>
          <ul>
            <li>Extensão da vida replicativa</li>
            <li>Melhoria da função celular</li>
            <li>Regeneração tecidual</li>
            <li>Proteção contra senescência</li>
          </ul>
        </div>
        <div style="background: #fdf2f2; padding: 1rem; border-radius: 8px;">
          <h5>❌ Riscos da Ativação</h5>
          <ul>
            <li>Potencial oncogênico</li>
            <li>Transformação neoplásica</li>
            <li>Escape de checkpoints</li>
            <li>Proliferação descontrolada</li>
          </ul>
        </div>
      </div>
      
      <h4>💊 Abordagens Terapêuticas</h4>
      <p>Estratégias para modulação telomérica:</p>
      
      <ul>
        <li><strong>Ativadores naturais:</strong> Astragalosídeos, curcumina</li>
        <li><strong>Exercício físico:</strong> Preserva comprimento telomérico</li>
        <li><strong>Manejo do estresse:</strong> Reduz taxa de encurtamento</li>
        <li><strong>Senólise seletiva:</strong> Eliminação de células com telômeros críticos</li>
      </ul>
    `,
    keyPoints: [
      'Estrutura nucleoproteica protetora dos cromossomos',
      'Telomerase adiciona sequências TTAGGG',
      'Regulação rigorosa previne transformação',
      'Alvo promissor mas com riscos oncogênicos'
    ]
  },
  'metilacao-dna': {
    title: 'Metilação do DNA',
    content: `
      <h3>🧬 Metilação do DNA: O Código Epigenético do Envelhecimento</h3>
      
      <p>A metilação do DNA representa a modificação epigenética mais estudada no contexto do envelhecimento, funcionando como um "relógio epigenético" que marca a idade biológica dos tecidos.</p>
      
      <h4>⚛️ Mecanismo Molecular</h4>
      <p>A metilação ocorre principalmente em dinucleotídeos CpG:</p>
      
      <ul>
        <li><strong>Citosina-5-metilase:</strong> Adição de grupo metil à citosina</li>
        <li><strong>S-adenosil metionina:</strong> Doador universal de grupos metil</li>
        <li><strong>Ilhas CpG:</strong> Regiões ricas em dinucleotídeos CpG</li>
        <li><strong>Shores e Shelfs:</strong> Regiões adjacentes às ilhas CpG</li>
      </ul>
      
      <h4>🔧 Enzimas de Metilação</h4>
      <p>Diferentes metiltransferases controlam padrões de metilação:</p>
      
      <ul>
        <li><strong>DNMT1:</strong> Metilação de manutenção durante replicação</li>
        <li><strong>DNMT3A/3B:</strong> Metilação de novo em desenvolvimento</li>
        <li><strong>DNMT3L:</strong> Cofator para DNMT3A/3B</li>
        <li><strong>TET1/2/3:</strong> Enzimas de desmetilação (5-hidroximetilcitosina)</li>
      </ul>
      
      <h4>⏰ Relógios Epigenéticos</h4>
      <p>Algoritmos baseados em metilação predizem idade biológica:</p>
      
      <div style="background: #f0f8ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
        <h5>🕐 Principais Relógios:</h5>
        <ul>
          <li><strong>Relógio de Horvath:</strong> 353 CpGs, múltiplos tecidos</li>
          <li><strong>Relógio de Hannum:</strong> 71 CpGs, sangue específico</li>
          <li><strong>PhenoAge:</strong> Baseado em fenótipo de envelhecimento</li>
          <li><strong>GrimAge:</strong> Preditor de mortalidade</li>
        </ul>
      </div>
      
      <h4>📈 Alterações com o Envelhecimento</h4>
      <p>Padrões de metilação mudam sistematicamente:</p>
      
      <ul>
        <li><strong>Hipometilação global:</strong> Perda geral de metilação genômica</li>
        <li><strong>Hipermetilação focal:</strong> Aumento em promotores específicos</li>
        <li><strong>Deriva estocástica:</strong> Variabilidade inter-individual crescente</li>
        <li><strong>Desregulação tecido-específica:</strong> Padrões únicos por órgão</li>
      </ul>
      
      <h4>🎯 Consequências Funcionais</h4>
      <p>Alterações na metilação afetam:</p>
      
      <ul>
        <li><strong>Expressão gênica:</strong> Silenciamento de genes supressores</li>
        <li><strong>Estabilidade genômica:</strong> Ativação de elementos repetitivos</li>
        <li><strong>Reprogramação celular:</strong> Barreira à pluripotência</li>
        <li><strong>Senescência:</strong> Indução de parada do ciclo celular</li>
      </ul>
      
      <h4>💊 Modulação Terapêutica</h4>
      <p>Estratégias para modular metilação do DNA:</p>
      
      <ul>
        <li><strong>Inibidores de DNMT:</strong> 5-azacitidina, decitabina</li>
        <li><strong>Doadores de metil:</strong> S-adenosil metionina, betaína</li>
        <li><strong>Cofatores enzimáticos:</strong> Folato, vitamina B12</li>
        <li><strong>Reprogramação parcial:</strong> Fatores Yamanaka transitórios</li>
      </ul>
      
      <h4>🔬 Aplicações Clínicas</h4>
      <p>Uso da metilação do DNA na medicina:</p>
      
      <ul>
        <li><strong>Biomarkador de idade:</strong> Determinação de idade biológica</li>
        <li><strong>Prognóstico de saúde:</strong> Predição de riscos de doenças</li>
        <li><strong>Monitoramento de intervenções:</strong> Avaliação de eficácia terapêutica</li>
        <li><strong>Medicina personalizada:</strong> Estratificação de pacientes</li>
      </ul>
      
      <p><em>A metilação do DNA oferece uma janela única para compreender e potencialmente reverter aspectos do envelhecimento biológico.</em></p>
    `,
    keyPoints: [
      'Modificação epigenética fundamental no envelhecimento',
      'Relógios epigenéticos predizem idade biológica',
      'Hipometilação global e hipermetilação focal',
      'Alvo para reversão do envelhecimento'
    ]
  }
};

export const bookStructure = {
  volumes: [
    {
      id: 'volume1',
      title: 'Volume I – Fundamentos Biológicos do Envelhecimento',
      description: 'Explore os mecanismos moleculares que governam o processo de envelhecimento humano.',
      chapters: [
        {
          id: 'ch1-1',
          title: 'Introdução ao Envelhecimento',
          description: 'Teorias clássicas e conceitos fundamentais da senescência celular.',
          topics: [
            {
              title: 'Teorias programada vs estocástica',
              id: 'teorias-programada-vs-estocastica',
              description: 'Comparação entre teorias determinísticas e aleatórias do envelhecimento'
            },
            {
              title: 'Senescência celular',
              id: 'senescencia-celular',
              description: 'Estado de parada irreversível do ciclo celular e suas consequências'
            },
            {
              title: 'Senescência replicativa',
              id: 'senescencia-replicativa',
              description: 'Limite de Hayflick e o papel dos telômeros no envelhecimento'
            }
          ]
        },
        {
          id: 'ch1-2',
          title: 'Genética e Epigenética do Envelhecimento',
          description: 'Mutações, instabilidade genômica e modificações epigenéticas.',
          topics: ['Instabilidade genômica', 'Telômeros e telomerase', 'Metilação do DNA', 'Modificações histônicas']
        },
        {
          id: 'ch1-3',
          title: 'Proteostase e Agregação Proteica',
          description: 'Sistemas de controle de qualidade proteica e doenças relacionadas.',
          topics: ['Chaperonas moleculares', 'Sistema proteassoma', 'Autofagia', 'Alzheimer e Parkinson']
        },
        {
          id: 'ch1-4',
          title: 'Disfunção Mitocondrial',
          description: 'Alterações energéticas e estresse oxidativo no envelhecimento.',
          topics: ['Ciclo de Krebs', 'Fosforilação oxidativa', 'ROS e dano mitocondrial', 'Biogênese mitocondrial']
        },
        {
          id: 'ch1-5',
          title: 'Imunossenescência e Inflamação Crônica',
          description: 'Declínio imunológico e estado inflamatório persistente.',
          topics: ['Alterações imunológicas', 'Inflammaging', 'Senescência imune', 'Citocinas pró-inflamatórias']
        },
        {
          id: 'ch1-6',
          title: 'Exaustão de Células-Tronco',
          description: 'Declínio regenerativo e nichos celulares no envelhecimento.',
          topics: ['Células-tronco adultas', 'Nichos celulares', 'Capacidade regenerativa', 'Diferenciação celular']
        }
      ]
    },
    {
      id: 'volume2',
      title: 'Volume II – Estratégias para Corrigir Falhas e Retardar o Envelhecimento',
      description: 'Intervenções científicas e terapêuticas para prolongar a longevidade saudável.',
      chapters: [
        {
          id: 'ch2-1',
          title: 'Intervenções Genéticas',
          description: 'CRISPR-Cas9 e edição genética para longevidade.',
          topics: ['CRISPR-Cas9', 'Ativação telomerase', 'Riscos oncogênicos', 'Terapia gênica']
        },
        {
          id: 'ch2-2',
          title: 'Intervenções Epigenéticas',
          description: 'Reprogramação celular e modulação epigenética.',
          topics: ['Fatores Yamanaka', 'Reprogramação parcial', 'Dieta e epigenética', 'Hormese']
        },
        {
          id: 'ch2-3',
          title: 'Melhoria Mitocondrial',
          description: 'Estratégias para otimizar a função mitocondrial.',
          topics: ['Mitofagia', 'Transplante mitocondrial', 'NAD+ e NMN', 'Bioenergética celular']
        },
        {
          id: 'ch2-4',
          title: 'Modulação Proteostática',
          description: 'Ativação de sistemas de limpeza celular.',
          topics: ['Indução de chaperonas', 'Ativadores de autofagia', 'Rapamicina', 'Spermidina']
        },
        {
          id: 'ch2-5',
          title: 'Dietas e Restrição Calórica',
          description: 'Intervenções nutricionais para longevidade.',
          topics: ['Sirtuínas', 'Restrição calórica', 'Jejum intermitente', 'Mimetismo de RC']
        },
        {
          id: 'ch2-6',
          title: 'Exercício Físico e Metabolismo',
          description: 'Atividade física como modulador do envelhecimento.',
          topics: ['Ativação de AMPK', 'PGC-1α', 'Exercício aeróbico', 'Treinamento de força']
        },
        {
          id: 'ch2-7',
          title: 'Farmacologia Anti-Envelhecimento',
          description: 'Compostos farmacológicos com potencial geroprotector.',
          topics: ['Rapamicina', 'Metformina', 'Senolíticos', 'Nutracêuticos']
        },
        {
          id: 'ch2-8',
          title: 'Terapias Celulares e de Células-Tronco',
          description: 'Medicina regenerativa e terapias celulares.',
          topics: ['Células-tronco mesenquimais', 'iPSCs', 'Fatores de crescimento', 'Exossomos']
        },
        {
          id: 'ch2-9',
          title: 'Neuroplasticidade e Envelhecimento Cerebral',
          description: 'Preservação e melhoria da função cognitiva.',
          topics: ['BDNF', 'Neurogênese', 'Nootrópicos', 'Estimulação cognitiva']
        }
      ]
    },
    {
      id: 'volume3',
      title: 'Volume III – Aspectos Filosóficos, Bioéticos e Jurídicos',
      description: 'Implicações éticas, legais e filosóficas do prolongamento da vida humana.',
      chapters: [
        {
          id: 'ch3-1',
          title: 'O Direito à Longevidade e Dignidade Humana',
          description: 'Aspectos jurídicos do acesso à longevidade saudável.',
          topics: ['Direitos fundamentais', 'Dignidade da pessoa humana', 'Equidade no acesso', 'Regulamentação']
        },
        {
          id: 'ch3-2',
          title: 'Bioética das Terapias Anti-Aging',
          description: 'Dilemas éticos nas intervenções anti-envelhecimento.',
          topics: ['Princípios bioéticos', 'Consentimento informado', 'Experimentação humana', 'Equidade social']
        },
        {
          id: 'ch3-3',
          title: 'Impacto Econômico e Social',
          description: 'Consequências socioeconômicas do prolongamento da vida.',
          topics: ['Demografia populacional', 'Previdência social', 'Mercado de trabalho', 'Recursos de saúde']
        },
        {
          id: 'ch3-4',
          title: 'Imortalidade Parcial: Limites Morais e Existenciais',
          description: 'Reflexões filosóficas sobre os limites da longevidade.',
          topics: ['Sentido da vida', 'Finitude e transcendência', 'Identidade pessoal', 'Valores existenciais']
        }
      ]
    },
    {
      id: 'volume4',
      title: 'Volume IV – Protocolos Práticos',
      description: 'Guias práticos e protocolos baseados em evidências científicas.',
      chapters: [
        {
          id: 'ch4-1',
          title: 'Protocolos Alimentares e Nutricionais',
          description: 'Estratégias nutricionais para longevidade saudável.',
          topics: ['Dieta mediterrânea', 'Jejum intermitente', 'Suplementação', 'Micronutrientes']
        },
        {
          id: 'ch4-2',
          title: 'Protocolos de Exercício Físico',
          description: 'Programas de atividade física otimizados para longevidade.',
          topics: ['Exercício aeróbico', 'Treinamento de força', 'Flexibilidade', 'Recuperação']
        },
        {
          id: 'ch4-3',
          title: 'Protocolos de Sono e Regeneração',
          description: 'Otimização do sono para recuperação e longevidade.',
          topics: ['Higiene do sono', 'Ritmos circadianos', 'Recuperação neural', 'Melatonina']
        },
        {
          id: 'ch4-4',
          title: 'Uso Responsável de Suplementos e Fármacos',
          description: 'Guias para uso seguro e eficaz de intervenções farmacológicas.',
          topics: ['Dosagem e timing', 'Interações medicamentosas', 'Monitoramento', 'Efeitos adversos']
        },
        {
          id: 'ch4-5',
          title: 'Práticas de Redução de Estresse',
          description: 'Técnicas para gerenciamento do estresse e bem-estar mental.',
          topics: ['Meditação', 'Mindfulness', 'Práticas espirituais', 'Suporte social']
        }
      ]
    }
  ],
  openingQuote: "Se a morte é a única certeza, o envelhecimento é a única sentença. Mas, como todo julgamento, ele pode ser reavaliado à luz de novas evidências."
};
