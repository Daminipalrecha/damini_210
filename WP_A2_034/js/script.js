// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        var temp = document.getElementById("name").value;
                 
                 // Call server to get the name
              $ajaxUtils
              .sendGetRequest("data/name.json", 
              function (res) {
              
              var ans = "" ;
              var msg = "" ;
              if ( temp === res.student1) {
                msg = res.ques1+"<br>" ;

                if(document.getElementById("t").checked){
                ans = "true"; }
                  else{ ans = "false";  } 

                if (ans == res.answer1) {
                 msg+="Nice, right answer.<br>" ;
                }
                else{
                  msg+="Right answer is True.<br>" ;
                }
              }
                
              else if (temp === res.student2) {
              msg = res.ques2+"<br>" ;

              if(document.getElementById("f").checked){
                ans = "false";  }
                  else{ ans = "true"; }  

              if (ans == res.answer2) {
                  msg+="Nice, right answer.<br>" ;
               }
               else{
                  msg+="Right answer is False.<br>" ;
                }
              }

            else {
                msg = "no such student";
              }

              document.getElementById("content").innerHTML = msg ;

            });
    });
  
  });