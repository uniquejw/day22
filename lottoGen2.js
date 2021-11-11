//----------------------------------------------

// 배열에 45까지 넣기
const arr = []
for(let i = 1; i<= 45; i++){
    arr.push(i)
}

console.log(arr)
// 배열 출력
console.log(arr)
const arr2 = []
for (let i = 0; i < 6; i++){
//    const idx = 9
    const idx = parseInt(Math.random() * arr.length)
    arr2.push(arr[idx]) // 값 출력, 빼지 않고 별도의 배열 만들어서 넣고 출력
    console.log(arr.splice(idx,1))

//    console.log(arr)
}
console.log(arr2)


//
