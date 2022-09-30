
        let residentalschoolimage = document.getElementById("residental-school-image")
        let text = document.getElementById("Text1")
        let text1 = document.getElementById("Text2")
        let text2 = document.getElementById("Text3")
        residentalschoolimage.addEventListener("click", () => {
            function getridofclass() {
               
                residentalschoolimage.style.opacity = "100"
            }
           
            residentalschoolimage.classList.add("fadein")
            setTimeout(getridofclass, 1000)
           
        })

        text.addEventListener("click", function(){
            text.innerText = "Not their language"
        })
        text1.addEventListener("click", function(){
            text1.innerText = "Not their name"
        })
        text2.addEventListener("click", function(){
            text2.innerText = "Not their culture"
        })
        
      

