        let box1 = document.querySelectorAll(".box1")
        let box2 = document.querySelectorAll(".box2")
        let imageArray2 = ['indumati.jpg','bheem.jpg','chutki.jpg','dholu.jpg','jaggu.webp','kaliya.png']
        let imageArray1 = ['bheem.jpg','chutki.jpg','dholu.jpg','indumati.jpg','jaggu.webp','kaliya.png']

        // console.log(imageArray2.length)
        var i
        var random1
        var randomvalue2
        var randomArray1 = []
        var randomArray2 = []
        for(i=0;i<6;i++)
        {
            getrandomvalues2();
          getrandomvalues();
          
        }
        // getrandomvalues()
        function getrandomvalues()
        {   
            random1 = imageArray1[Math.floor(Math.random()*imageArray1.length)]
        
            if(!randomArray1.includes(random1))
            {
                let image1 = document.createElement("img")
                image1.src = "images/"+random1
                box1[i].append(image1)
                randomArray1.push(random1)
            }


            else {
                getrandomvalues();
            }
            
        }

        function getrandomvalues2()
        {
            
            randomvalue2 = imageArray2[Math.floor(Math.random()*imageArray2.length)]
            if(!randomArray2.includes(randomvalue2))
            {
                console.log("hii")
                let image2 =  document.createElement("img")
                image2.src = "images/"+randomvalue2
                box2[i].append(image2)
                randomArray2.push(randomvalue2)
            }
            else{
                getrandomvalues2();
            }
        }