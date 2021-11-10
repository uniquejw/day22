console.log("0~9까지의 숫자를 3자리 입력하여 정답을 맞추세요")
// 각 자리수 별로 일치여부에 따라 볼 스트라이크 판단
// 0~9까지의 숫자 생성 및 각 배열에 넣기
let arr1 = [] // 배열 생성
let count = 0 // 카운트 생성
for(i=0; i < 4; i++){ //4자리 숫자 야구 진행
const ran = parseInt(Math.random() * 10) // 랜덤 숫자 생성
    const index = arr1.indexOf(ran) // arr에 ran 중복이 있는 지 확인한 결과값을 index에 넣음. 중복값이 없으면 -1
    count += 1
    if(index === -1) { // 비교 후 중복값 없을 시 배열에 추가
        arr1[i] = ran
    }else{
        i--
        continue
    }
}
console.log(arr1)
//console.log(`총 ${count}회 진행 후 마무리되었습니다.`)

let input = require('readline-sync') // 문자열 입력 import 와 비슷
let count2 = 0
Loop1 :
    while(true){
        count2 += 1 // 카운트 추가
        let arr2 = []
        let strike = 0
        let ball = 0
            for (let i = 0; i < 4; i++) { //4자리 숫자 입력
                console.log(`${i+1}번째 자리의 값을 입력해주세요`)
                let answer = input.prompt() // 문자열 입력 받음
                let num = Number(answer) // 숫자로 변환
                if(num => 0 && num < 10 ) { //유효한 값인 지 확인
                    const index2 = arr2.indexOf(num) // 입력값 중복 확인 후 값 도출
                    if (index2 === -1 && arr2.length < 4) { // 값 비교
                        arr2[i] = num
                    }else {
                        console.log("중복 숫자는 허용되지 않습니다")
                        i--
                        continue
                    }
                }else{
                    console.log("유효하지 않은 값입니다. 다시 입력해주세요")
                    i--
                    continue
                }
                console.log(arr2)
            }
            if (arr2.length === 4) { // 배열이 총 4자리가 되면 arr1과 arr2 비교한다.
                for (let j = 0; j < 4; j++) {
                    for (let k = 0; k < 4; k++) {
                        if (arr1[j] == arr2[k]) { // arr1과 arr2 중 같은 값일 때 자리수도 같다면 스트라이크 다르다면 볼이다.
                            if (j === k) {
                                strike++
                            } else {
                                ball++
                            }
                            break
                        }
                    }
                }
                if(strike === 4){
                    console.log(`${strike}스트라이크`)
                    break Loop1
                }else{
                    console.log(`${strike}스트라이크, ${ball}볼`)
                    continue
                }
            }
        }
console.log(`${count2}회 만에 정답을 맞추셨습니다.`)
console.log("END")