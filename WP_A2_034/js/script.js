// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var temp =
              document.getElementById("name").value;
                 
              if ( temp === res.student1) {
                var temp1 = res.ques1 ;
              }
                
              }
              else if (temp === res.student2) {
                var temp1= res.ques2 ;
              }

              else {
                var temp1 = "no such student";
              }

              document.querySelector("#content")
                .innerHTML = temp1 ;
            });
      });
  
  }
);