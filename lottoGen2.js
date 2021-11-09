//----------------------------------------------

// 배열에 45까지 넣기
const arr = []
for(let i = 1; i<= 45; i++){
    arr.push(i)
}
// 배열 출력
console.log(arr)

for (let i = 0; i < 6; i++){
//    const idx = 9
    const idx = parseInt(Math.random() * arr.length)
    console.log(arr.splice(idx,1))
//    console.log(arr)
}

//
