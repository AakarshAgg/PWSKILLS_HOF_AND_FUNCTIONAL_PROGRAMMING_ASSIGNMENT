let list = [
    { name: "shampoo", price: 30 },
    { name: "herbal tea", price: 50 },
    { name: "hair oil", price: 60 }
]

let newlist=[]

list.map((value)=>{ 
    let obj={}
obj.name=value.name
obj.price=value.price*80
newlist.push(obj)
})
console.log(list)
console.log(newlist)