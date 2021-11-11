function calcTotal(hourValue, minValue){

// 시침의 각도를 구하는 함수 --> 입력 시 12 출력 각도
    function calcHour(hour){
        const result = (360 / 12) * (hour % 12)
        return result
    }
// ↑함수의 선언 문

// 분침의 각도를 구하는 함수 => 화살표 함수
// const calcMin = min => 10 // return 값
    const calcMin = min => (360 / 60) * min

// ↑함수의 선언 식

    console.log(calcHour(12))
    console.log(calcMin(38))
// 분침에 따라서 시침의 이동 각도를 구하는 함수
    function getExtra(min){
        return ((360 / 12) / 60) * min
    }
    const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180 ? 360 - result : result
}

console.log(`시계 침을 변으로 하는 내각 : ${calcTotal(12,38)}`)

// 12 38