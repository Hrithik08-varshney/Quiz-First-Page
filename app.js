const btn=document.querySelector('.btn');
let arr=[];
let sr=0;
btn.addEventListener("click",function(){
    sr++;
    const val=document.querySelector('#input').value;
    let details={
        serial:sr,
        yname:val,
        score:0
    }
    arr.push(details);
    localStorage.setItem(details.yname,JSON.stringify(arr));
    document.querySelector('#input').value=" ";
})
/* console.log(arr); */
    /* console.log(val); */
    /* localStorage.clear(); */