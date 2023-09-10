let url="http://google.com"

let regExp=/^(http:\/\/|https:\/\/)[a-zA-Z0-J.!#$%&'*+/=?^_{|}~-]+(\.[a-zA-Z]+)$/

let result=regExp.test(url)

if(result){
    console.log(`input string ${url} mathches the given condition`)
}
else{
    console.log(`input string ${url} doesn't matches the given condition`)
}