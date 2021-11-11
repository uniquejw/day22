function printNames(str1, str2="111", str3="222"){
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

//printNames()
printNames("AAA")
printNames("AAA", "BBB")
printNames("AAA", "BBB","CCC")


function calc(a, b, fn){
    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a + 1, b + 1)
    return result
}
console.log(calc (10, 20, (x,y) => x + y))
console.log(calc (10, 20, (x,y) => x - y))
console.log(calc (10, 20, (x,y) => x * y))

// 정해진 숫자만큼 출력하는 함수 만들기 ---> printNums (start, end) .. (from, to) ... (begin, end)...
// {
//
//
// }
// 로또 번호 생성 함수 만들기
//
// 배열을 주면 max값을 찾아내는 함수 만들기
//
// 배열을 주면 min값을 찾아내는 함수 만들기
//
// 매출/월
//
// 이름 결정하고, 파라미터 정하고, 리턴타입 결정하고 코딩 진행



function startAt(x){
    function incrementBy(y){
        return x + y
    }
    return incrementBy
}

let closure1 = startAt(1)
let closure2 = startAt(2)

console.log(closure1(1))
console.log(closure1(2))
console.log(closure1(10))

console.log("-------------------")
function closer(a){
    let sum = 0
    return function inner() {
        for (i = 0; i < a; i++) {
            sum += i
        }
        console.log(sum)
    }
}
let p =  closer(100)
p()

console.log("-------------------")
function outer(){
    const name = 'kyle';
    console.log(name)
    return function inner(){
        const greeting = 'hello!'
        console.log(greeting,name)
    }
}
const getKyle = outer() //kyle
getKyle() //hello!kyle

