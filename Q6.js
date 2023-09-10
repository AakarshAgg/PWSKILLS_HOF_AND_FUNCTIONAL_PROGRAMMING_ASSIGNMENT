let pattern=/$(https:\/\/)w+\.linkedin\.com\/in\/([a-zA-Z0-9_\-]{4,29}[a-zA-Z0-9])$/

function testURL(url){
  if(  pattern.test(url)){
    return console.log(`${url} is a valid URL`)
  }else{
    return console.log(`${url} is a invalid valid URL`)
  }
}

const url1 = "https://www.linkedin.com/in/jo12";
const url2 = "https://www.linkedin.com/in/mary-smithmary-smith11111111111";
const url3 = "https://www.linkedin.com/in/jane_doe_456";
const url4 = "https://www.linkedin.com/in/invalidProfile@123";
const url5 = "https://www.linkedin.com/company/companyname";


testURL(url1)
testURL(url2)
testURL(url3)
testURL(url4)
testURL(url5)