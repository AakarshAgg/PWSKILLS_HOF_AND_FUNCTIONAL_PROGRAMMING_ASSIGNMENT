function revstr(name){
    setTimeout(()=>{
        // console.log( name.split("").reverse().join(""))
        let newstr=""
        for(let i=name.length-1;i>=0;i--){
            newstr=newstr+name[i]
        }
        console.log(newstr)
    },2000)
 
}

let input ="Aakarsh"
revstr(input)