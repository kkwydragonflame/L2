import { PlayingCard } from './playingCard.js'

let card = new PlayingCard('♠', 'A')

console.log(card)

let count = 0
for(let i = 1; i <= 3; ++i ) {
  count = count + i
  console.log(count)
}

let value = 'foo'
{
  let value = 'bar'
  console.log(value)
}
console.log(value)