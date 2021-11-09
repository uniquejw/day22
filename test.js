
// const readLine = require('readline-sync');
//
// // const answer = readLine.question("ODD EVEN")
// console.log("ODD EVEN")
// const answer = readLine.prompt()
// console.log(answer)


/*  큰원 작은원, 해당 도형의 넓이를 구하여라
    반지름이 20, 10
    해당 도형의 넓이 -> 큰 원의 넓이 - 작은 원의 넓이
    변수로 잡는 것 : 주어진 데이터, (계산/연산 => 원 A의 넓이, 원 B의 넓이, 넓이의 차이), 사용자의 입력
    원의 넓이 r제곱 * 원주율

*/

const readLine = require('readline-sync')

console.log(Math.PI)

const num = Math.pow(2,4)

console.log(num)

const r1 = 20
const r2 = 10

const big_circle = Math.pow(r1,2) * Math.PI
const small_circle = Math.pow(r2,2) * Math.PI
let gap = big_circle - small_circle
gap = gap.toFixed(2)
console.log(gap)

// 음수가 나오는 경우 - if, 삼항연산자
//
// if(gap < 0) {
//    gap = gap * -1
// }

gap = gap < 0 ? gap * -1 : gap

// console.log("이 도형의 넓이는 " + gap)
console.log(`이 도형의 넓이는 ${gap} 입니다`)