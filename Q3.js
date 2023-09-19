let list = [
    { name: "shampoo", price: 30 },
    { name: "herbal tea", price: 50 },
    { name: "hair oil", price: 60 }
]


let newlist=list.map((value)=>({...value,price:value.price*80}))

console.log(list)
console.log(newlist)