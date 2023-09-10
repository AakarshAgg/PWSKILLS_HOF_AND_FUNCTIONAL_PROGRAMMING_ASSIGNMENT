var delay=3

setInterval(delayfunc,1000)

function delayfunc(){
    if(delay>0){
        console.log(`The next number will be generate in ${delay} seconds`)
        delay--
    }else{
        let result= Math.floor(Math.random()*100)+1
        console.log(result)
        delay=3;
    }
}