// // 고정 값으로 계산

// // 1 feet => 3.5
// // 300 * 200
// const perFeet = 3.5
//
// const width = 300
// const height = 200
//
// // 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
//
// const totalLength = (width*2) + (height*2)
//
//
// // 길이(cm) => feet로 바꿔줘야 함. => 업자가 특정 단위 이하로 안 파는 상황이라 올림 적용
// const cm_to_feet = Math.ceil(totalLength / 30.48)
// // console.log(cm_to_feet)
// // 가격 계산
//
// const totalPay = cm_to_feet * perFeet
// console.log(`총 ${totalPay} 달러입니다.`)


// //------------입력 가능한 상태로 지정
// const readLine = require('readline-sync')
// // 1 feet => 3.5
// // 300 * 200
// console.log("1피트당 샷시의 가격은 얼마인가요?")
// // const perFeet = readLine.prompt() // 위험한 코드 = 문자를 받게 될 수도 있기 때문
// const perFeet = parseFloat(readLine.prompt()) // 무엇을 받든 숫자로 변환해줌 상대적으로 나은 상태
//
// console.log("창문의 가로 길이는 얼마인가요? cm 단위로 적어주세요")
// const width = parseInt(readLine.prompt())
//
// console.log("창문의 세로 길이는 얼마인가요? cm 단위로 적어주세요")
// const height = parseInt(readLine.prompt())
//
// // 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
//
// const totalLength = (width*2) + (height*2)
//
//
// // 길이(cm) => feet로 바꿔줘야 함. => 업자가 특정 단위 이하로 안 파는 상황이라 올림 적용
// const cm_to_feet = Math.ceil(totalLength / 30.48)
// // console.log(cm_to_feet)
// // 가격 계산
//
// const totalPay = cm_to_feet * perFeet
// console.log(`총 ${totalPay} 달러입니다.`)


//------------ 아래에서 위로 다시 올라와서 진행하고 싶을 때는 어떻게 할까? 예전에는 go-to문이 사용
// 그래서 제어문 중에 흐름을 아래에서 위로 올리는 것이 반복문보다 더 먼저 나왔다.
// 중급은 사용자가 잘 쓸 수 있을까에 대한 고민을 하는 것 => 고급은 사용자들이 이런 문제가 있을 거라는 생각을 하고 개발
// 예외에 대해 적용을 해야 한다. - 근데 예외 없었지 않나?
//
const readLine = require('readline-sync')
// 1 feet => 3.5
// 300 * 200
try {
    console.log("1피트당 샷시의 가격은 얼마인가요?")
// const perFeet = readLine.prompt() // 위험한 코드 = 문자를 받게 될 수도 있기 때문
    const perFeet = parseFloat(readLine.prompt())
    // 왜 예외가 발생하지 않을까? readLine.prompt()가 역할을 했나? 애초에 ()(함수) 안에 실행될 때 에러 발생을 고민했다는 결론.
}catch(e){
    console.log("잘못입력했어요")
}
console.log("창문의 가로 길이는 얼마인가요? cm 단위로 적어주세요")
const width = parseInt(readLine.prompt())

console.log("창문의 세로 길이는 얼마인가요? cm 단위로 적어주세요")
const height = parseInt(readLine.prompt())

// 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이

const totalLength = (width*2) + (height*2)


// 길이(cm) => feet로 바꿔줘야 함. => 업자가 특정 단위 이하로 안 파는 상황이라 올림 적용
const cm_to_feet = Math.ceil(totalLength / 30.48)
// console.log(cm_to_feet)
// 가격 계산

const totalPay = cm_to_feet * perFeet
console.log(`총 ${totalPay} 달러입니다.`)


/*  10명의 시험 성적 전체 평균을 구하고 싶다.
    최저점수와 최고점수를 구하고 싶다.
    외부 데이터를 사용하는 방법만 알면 10명이 아니라 수만개도 가능
    배워야 할 것 -> 배열, 배열 반복, 멈추는 것, 건너뛰는 것
*/
