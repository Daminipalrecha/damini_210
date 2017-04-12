// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        var temp = document.getElementById("name").value;
                 
                 // Call server to get the name
              $ajaxUtils
              .sendGetRequest("name.json", 
              function (res) {
            
              var msg = "" ;
              var count=0;
              for (var i in res.sap){
                if(temp == i){
                  msg = "Name is :"+res.sap[i] +" and position is : "+count;
                  count=count +1 ;

                }

                else {
                msg = "no such student";
                
                }

              }
               document.getElementById("content").innerHTML = msg ;

            });
    });
  
  });