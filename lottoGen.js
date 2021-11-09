// const arr = [] // 변수 안에는 리모콘이 들어 있음. 리모콘이 변하면 안되지만 리모콘이 가리키고 있는 곳에 값들은 변해도 상관없음
               // const로 선언해도 되는 이유
               // temp = [1,2] => arr = temp는 할 수 없음
// arr.push(1)
// arr.push(2)
// console.log(arr)

//----------------------------------------------------
//
// const arr = []
// while(true) {
//
//
// }
//
// console.log("END") // unreachable code

//----------------------------------------------------

// const arr = []
// while(true) {
//
//     // 숫자를 생성 1 - 45 사이의 숫자를 생성
//     let num = parseInt((Math.random() * 45) + 1)
//     console.log(num)
//
//     // 검사
//     const index = arr.indexOf(num)
//     console.log(`NUM: ${num} INDEX: ${index}`)
//
//     if(index >= 0) {
//         continue
//     }
//     const newLength = arr.push(num)
//     if (newLength === 6) {
//         break
//     }
// }
//
// console.log(arr)
// console.log("END") // unreachable code

