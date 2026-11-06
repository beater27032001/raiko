export const TAGLINE =
  'O relâmpago escolheu um herdeiro. Ele não queria ser escolhido.'

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
