let list = [
    { name: "xyz",author:"bunty", year: 2010 },
    { name: "abc",author:"goldy", year: 2011 },
    {name:"pqrs",author:"ram",year:2012}
]

let newarr=list.filter((value)=>value.year>2010)
let result=newarr.map((value)=>(
    {
    ...value,
    author:value.author.toUpperCase()
    } 
))

console.log(list)

console.log(result)