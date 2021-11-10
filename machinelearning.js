const pointArr = [
    {name:'spider man', action:10, kiss:3, category:'A'},
    {name:'about time', action:2, kiss:10, category:'M'},
    {name:'007', action:3, kiss:2, category:'A'},
    {name:'love', action:2, kiss:8, category:'M'},
]
const target = {action:6, kiss:3}

pointArr.sort((a,b)=>{
    const distanceA = Math.sqrt(Math.pow(a.action - target.action,2) + Math.pow(a.kiss - target.kiss,2))
    const distanceB = Math.sqrt(Math.pow(b.action - target.action,2) + Math.pow(b.kiss - target.kiss,2))

    return distanceA - distanceB
})

console.log(pointArr.category)