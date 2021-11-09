

console.log("0~9까지의 숫자를 입력하여 정답을 맞추세요")
 // 0~9까지의 숫자 생성
const ran = parseInt(Math.random() * 10)
console.log(ran)
let input = require('readline-sync')
let count = 0
while(true){
    let answer = input.prompt()
    let num = Number(answer)
    count += 1
    if(num === ran){
        console.log("정답입니다.")
        break
    }else{
        console.log("정답이 아닙니다. 다시 입력해주세요.")
        continue
    }

    console.log(`${count}회 만에 정답을 맞추셨습니다.`)
}
console.log("END")