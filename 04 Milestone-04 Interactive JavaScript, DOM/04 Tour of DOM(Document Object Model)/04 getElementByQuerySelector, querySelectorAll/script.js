// query selector all
const spanElements = document.querySelectorAll('#old-dhaka p span');
for(const span of spanElements){
    console.log(span.innerText);
}