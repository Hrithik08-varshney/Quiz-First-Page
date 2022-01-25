/* export  const val=document.querySelector('#input').value; */
const btn=document.querySelector('.btn');
/* let arr=[]; */
btn.addEventListener("click",function(){
    let key=Object.keys(localStorage); 
    key.sort();
    console.log(key);     //taking all keys as an array
    if(key.length==0){
        sr=0;
    } else{                     
    sr=parseInt(key[key.length-1]); 
    console.log(sr);  //assingning last element of array to sr
    }             
    sr++;
    const val=document.querySelector('#input').value;
    let details={
        serial:sr,
        yname:val,
        score:0
    }
    /* arr.push(details); */
    /* localStorage.setItem(details.yname,JSON.stringify(details)); */
    localStorage.setItem(sr,JSON.stringify(details));
    document.querySelector('#input').value=" ";
})
/* console.log(arr); */
    /* console.log(val); */
    /* localStorage.clear(); */
