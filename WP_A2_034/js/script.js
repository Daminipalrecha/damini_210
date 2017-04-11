// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
                 
              if ( temp === res.student1) {
                 // Call server to get the name
              $ajaxUtils
              .sendGetRequest("data/name.json", 
              function (res) {
              var temp = document.getElementById("name").value;
              var ans = "" ;
              var msg = "" ;
              msg = res.ques1+"<br>" ;
              ans = document.querySelector("input[name=btn]:checked").value;
              if (res.ans == res.answer1) {
                 msg+="Nice, right answer.<br>" ;
               }
               else{
                  msg+="Right answer is True.<br>" ;
                }
              });
            }
                
              else if (temp === res.student2) {
                 // Call server to get the name
              $ajaxUtils
              .sendGetRequest("data/name.json", 
              function (res) {
              var temp = document.getElementById("name").value;
              var ans = "" ;
              var msg = "" ;
              msg = res.ques2+"<br>" ;
              ans = document.querySelector("input[name=btn]:checked").value;
              if (res.ans == res.answer2) {
                  msg+="Nice, right answer.<br>" ;
               }
               else{
                  msg+="Right answer is False.<br>" ;
                }
              
              });
          }
            else {
                msg = "no such student";
              }

              document.getElementById("content").innerHtml = msg ;
            });
    });
  