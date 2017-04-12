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
              var count=0; //first position is 0
              // var sapn = res.sap ;
              // var names = res.name ; 
              // for (var i=0 ; i<10 ; i++){

              //   if(temp == res.sap[i]){

              //     msg = "Name is :"+ res.name[i] +" and position is : "+count;
              //     // console.log(res.sap[i]);
              //     // console.log(msg);
              //     count=count +1 ;
              //     break ;

              //   }

              // }

              for(var i in res.sap){
                if(temp == i){
                  msg = "Name is :"+ res.sap[i] +" and position is : "+count;
                  // console.log(res.sap[i]);
                  // console.log(msg);
                  count=count +1 ;
                  break ;
                }
              }

               document.getElementById("content").innerHTML = msg ;

            });
    });
  
  });