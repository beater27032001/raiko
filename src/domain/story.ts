export const TAGLINE =
  'O relâmpago escolheu um herdeiro. Ele não queria ser escolhido.'

export const SYNOPSIS = [
  'Em Kumoyama, uma vila presa entre montanhas, ninguém olha para cima durante as tempestades. Dizem que o céu procura alguém.',
  'Kaito Arashi, 16 anos, entrega arroz de bicicleta e tem medo de altura. Numa noite de tempestade, a última entrega é no santuário do alto da montanha, onde uma espada antiga está presa à pedra há trezentos anos.',
  'O raio cai. Kaito sobrevive e passa a ouvir a eletricidade nas coisas. A guardiã do santuário quer a espada de volta, o ferreiro que a forjou ainda está vivo, e a tempestade que começou naquela noite não parece disposta a acabar.',
]

export interface WorldEntry {
  title: string
  japanese: string
  text: string
  art: 'village' | 'legend' | 'clan'
}

export const WORLD: WorldEntry[] = [
  {
    title: 'A vila de Kumoyama',
    japanese: '雲山村',
    text: 'Telhados de cerâmica, arrozais em degraus e um santuário no topo da montanha, a trezentos degraus da vila. As tempestades chegam sem aviso, e os moradores fecham as janelas e não olham para o céu.',
    art: 'village',
  },
  {
    title: 'A lenda da espada',
    japanese: '雷光の伝説',
    text: 'Há trezentos anos, o ferreiro Raizō forjou uma lâmina no meio de uma tempestade. O raio entrou no aço e nunca mais saiu. Desde então, a espada espera alguém que aguente segurá-la.',
    art: 'legend',
  },
  {
    title: 'A linhagem Kurogane',
    japanese: '黒鉄家',
    text: 'Uma família de guardiões que vigia o santuário geração após geração. Eles não escolhem quem empunha a espada: escolhem quem precisa ser impedido. Mio é a última.',
    art: 'clan',
  },
]

export interface Character {
  name: string
  japanese: string
  kanji: string
  role: string
  text: string
  quote: string
  look: 'lines' | 'dark' | 'tone'
}

export const CAST: Character[] = [
  {
    name: 'Kaito Arashi',
    japanese: '嵐カイト',
    kanji: '嵐',
    role: 'PROTAGONISTA · 16 ANOS',
    text: 'Entregador de arroz que tem medo de altura. Depois do raio, consegue ouvir a eletricidade nas coisas.',
    quote: 'Eu só queria terminar as entregas.',
    look: 'lines',
  },
  {
    name: 'Mio Kurogane',
    japanese: '黒鉄ミオ',
    kanji: '鉄',
    role: 'GUARDIÃ · 19 ANOS',
    text: 'Última da linhagem que vigia a espada Raikō. Não confia em ninguém que a espada aceite.',
    quote: 'A lâmina não escolhe heróis. Escolhe para-raios.',
    look: 'dark',
  },
  {
    name: 'Raizō',
    japanese: '雷蔵',
    kanji: '雷',
    role: 'FERREIRO · IDADE DESCONHECIDA',
    text: 'Forjou a espada há trezentos anos. Ninguém sabe como ainda está vivo, nem ele.',
    quote: 'Toda tempestade termina. Algumas voltam.',
    look: 'tone',
  },
]

export const RELEASE: [string, string][] = [
  ['Formato', 'Série, 12 episódios'],
  ['Estúdio', 'Kumo Animation'],
  ['Mangá', '3 volumes publicados'],
  ['Classificação', '14 anos'],
]
