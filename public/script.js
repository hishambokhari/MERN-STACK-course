document.getElementById("myForm").onsubmit =(e)=>{
  e.preventDefault();
    const url = "/sent";

    var data = new URLSearchParams();
     console.log(e.target)
     for(const pair of new FormData(e.target)){
        // console.log(pair)
       data.append(pair[0],pair[1])
     }

    fetch(url,{
        method:"post",
        body:data,
       
    }).then(res=>res.json())
    .then(res2 => {
         console.log(res2)
         location.reload()
    }); 
 }

 function deleteme(item){
      fetch("/remove/"+item.innerText,{
           method:"delete"
      }).then(res=>res.json())
    .then(res2 => {
         console.log(res2)
         location.reload()
    }); 
 }