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
          topics: ['Teorias programada vs estocástica', 'Senescência celular', 'Senescência replicativa']
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
