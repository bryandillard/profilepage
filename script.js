$(document).ready(function(){
    $(".display-4").hover(function(){
        $(this).css("color", "white");
    }, function(){
        $(this).css("color", "black");
    });
});

$(document).ready(function(){
 $(".myImg").on({
        mouseover: function () {
            $(this).animate({
                'height': 300,
                'width': 300
            }, 3000, 'linear' );
        },
        mouseout: function(){
            $(this).animate({
                'height': 100,
                'width': 100
            }, 3000);
        }
            })
        });


 


function githubRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            results = JSON.parse(this.responseText);
            results.forEach(result => {
                document.getElementById("repos").appendChild(document.createElement("LI")).innerHTML =  result.name;
            });
            
        }  
    }

        xhttp.open("GET", "https://api.github.com/users/bryandillard/repos", true);
    xhttp.send() 
    }
