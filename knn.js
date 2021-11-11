const readlineSync = require("readline-sync")

const movies = [
    {action : 12, kiss: 2, category : 'A'}, // 암살
    {action : 2, kiss: 14, category : 'M'}, // About Time
    {action : 7, kiss: 2, category : 'A'}, // Toy story
    {action : 2, kiss: 10, category : 'M'}, // notting hill
    {action : 6, kiss: 15, category : 'M'} // titanic
]


// const target = {action : 8, kiss: 3  } // The Lord of the Rings


const actionCut = parseInt(readlineSync.question("Action COUNT"))
const kissCut = parseInt(readlineSync.question("Kiss COUNT"))
const target = {action : actionCut, kiss: kissCut }
// movies.sort((a, b)=>1)

movies.sort((a, b)=>{
    const disA = Math.sqrt(Math.pow(a.action - target.action, 2)) + (Math.pow(a.kiss - target.kiss, 2))
    const disB = Math.sqrt(Math.pow(b.action - target.action, 2)) + (Math.pow(b.kiss - target.kiss, 2))
    return disA - disB > 0 ? 1 : -1
} )
console.log(movies)

const knum = 3

const result = {actionCount : 0 , kissCount : 0}

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    if(movie.category === 'A'){
        result.actionCount += 1
    }else if(movie.category === 'M'){
        result.kissCount += 1
    }
}

console.log(result)

const str = result.actionCount > result.kissCount ? '액션' : '멜로'

console.log(`이 영화는 ${str} 영화인 것 같습니다.`)

