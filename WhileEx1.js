

console.log("0~9까지의 숫자를 입력하여 정답을 맞추세요")
 // 0~9까지의 숫자 생성
const ran = parseInt(Math.random() * 100) // 랜덤 숫자 생성
// const ran = 65 //숫자 생성
console.log(ran)
let input = require('readline-sync') // 문자열 입력
let count = 0
while(true){
    let answer = input.prompt() // 문자열 입력 받음
    let num = Number(answer) // 숫자로 변환
    // 예를 들면 100까지의 숫자 중 맞출 때 숫자가 아닌 문자를 입력받으면 숫자로 변환되지 않는 이유?
    count += 1 // 카운트 추가
    if(num >= 0 && num < 100 ){
            if(num === ran) {
            console.log("정답입니다.")
            break
        } else {
            console.log("정답이 아닙니다. 다시 입력해주세요.")
            continue
        }
    }else{
        console.log("올바르지 않은 입력값입니다. 다시 입력해주세요")
        continue
    }

}
console.log(`${count}회 만에 정답을 맞추셨습니다.`)
console.log("END")