const pointArr = [
    {name:'spider man', action:10, kiss:3, category:'A'},
    {name:'about time', action:2, kiss:10, category:'M'},
    {name:'007', action:3, kiss:2, category:'A'},
    {name:'love', action:4, kiss:8, category:'M'},
]
const target = {name: 'romance', action:2, kiss:6}

pointArr.sort((a,b)=>{
    const distanceA = Math.sqrt(Math.pow(a.action - target.action,2) + Math.pow(a.kiss - target.kiss,2))
    const distanceB = Math.sqrt(Math.pow(b.action - target.action,2) + Math.pow(b.kiss - target.kiss,2))

    return distanceA - distanceB
})
const category = pointArr[0].category // 가장 관련도 높은 카테고리 값을 추출
target.category = category // 추출된 값을 target에 키값과 연동하여 삽입
console.log(target) // 출력