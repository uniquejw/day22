const arr = [
    [90, 87, 140],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]

const parr = []
// 가장 매출이 좋았던 분기

// 각 분기별로 매출 평균을 만든다

for (let i = 0; i < arr.length; i++){
    const tempArr = arr[i]
    console.log(tempArr)

    let sum = 0

    for(let j = 0; j < tempArr.length; j++){
        sum = sum + tempArr[j]
    }
    console.log(sum)
    const tempAvg = Number((sum/tempArr.length).toFixed(2))
    console.log(`tempAvg = ${tempAvg}`)
    parr.push(tempAvg)


}
console.log(parr)
// 그 중에서 최대 평균을 찾는다
//let max = Math.max.apply(0, parr)
//console.log(max)

let max = 0
let period = 0
// for (let i = 0; i < parr.length; i++){
//
//     if(parr[i] > max) {
//         max = parr[i]
//         period = i + 1
//     }
// }
for (let i = 0; i < parr.length; i++){

    if(parr[i] > max) {
        max = parr[i]
        period = i + 1
    }
}

let best = 0
for(i=0; i<arr.length;i++){
    for(j=0; j<arr[i].length; j++){
        if(arr[i][j] > max){
            max = arr[i][j]
            best = (i*arr[i].length) + (j+1)
        }
    }
}
console.log("max:" + max)
console.log("max period: " + period + "분기 입니다")
console.log(`최고 매출 월은 ${best}월 입니다.`)

