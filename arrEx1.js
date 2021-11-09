

const arr = ['타노스','아이언맨','블랙위도우']

console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3]) // undefined - 값은 없지만 접근은 가능하다.

// arr[3] = "블랙팬서"
const changedLength = arr.push("블랙팬서")
console.log(arr)
// arr.push 뒤에 추가 삽입 가능
// indexOf 중요 - 값이 찾아지지 않으면 -1을 던진다. 나올 수 없는 값을 던지는 것
//
//console.log(arr.indexOf("캡틴")) => 같은 값인지 비교 가능
arr.splice(1,1)

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '블랙위도우'){
        continue
    }
    console.log(i)
    console.log(arr[i])
}
console.log("--------------------")

