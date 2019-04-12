var lis=[...document.querySelectorAll("li")];
var divs=[...document.querySelectorAll(".nav div")]
onclick()
function onclick()
{
    lis.forEach(item=>{
        item.onclick=()=>{
            for(var i=0;i<lis.length;i++)
            {
                lis[i].classList.remove("show")
              
              
                for(var k=0;k<divs.length;i++)
                  {
                      divs[k].classList.remove("active")
                  }
                //    divs[i].classList.add("active")
                
                
            }
           
            item.classList.add("show")
          
        }
    })
}
