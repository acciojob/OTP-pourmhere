let codes = document.querySelectorAll(".code")
// change, input
codes.forEach((code,index)=>{
    
    code.addEventListener("input",()=>{
        if(code.value.length == 1){
             if(index < codes.length-1){
                   codes[index+1].focus()
                   code.classList.add("focused")
             }
        }
    })
    // keyup, keydown(press)
    code.addEventListener("keydown",(e)=>{
           console.log(e.key)
        if(e.key == "Backspace"){
              if(index > 0 && code.value.length == 0){
                codes[index-1].focus()
              }
        }
    })

})