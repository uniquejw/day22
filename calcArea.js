
function getArea(radius) {
    const area = Math.pow(radius, 2) * Math.PI
    return area
}

function getTotal(r1, r2){

    return Math.abs(getArea(r1) - getArea(r2)) // 절대값 처리

}

console.log(getTotal(10,20))