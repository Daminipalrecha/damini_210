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
            
              var msg = "No such student !!" ;
              var count=0;
              var sapn = res.sap ;
              var names = res.name ; 
              for (var i=0 ; i<10 ; i++){
                if(temp == sapn[i]){
                  msg = "Name is :"+names[i] +" and position is : "+count;
                  count=count +1 ;
                  break ;

                }

              }
               document.getElementById("content").innerHTML = msg ;

            });
    });
  
  });