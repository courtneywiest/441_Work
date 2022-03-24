$(document).ready(function(){
        $.getJSON("./data/jsondata.json", function(data){
            console.log(data.name); // Prints: Harry
            console.log(data.age); // Prints: 14
        });
        });
    
