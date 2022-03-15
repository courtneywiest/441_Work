var dogSelector = "#dog";
var allDogs = new Array();
class DogInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{

    var dog = new DogInfo("#dog", "./images/brooks.jpeg", "./images/hawaiisunset.jpeg", "./images/mashouse.jpeg", "./images/sherm.jpeg", "./images/southhills.jpeg", "./images/staplessunset.jpeg");
    allDogs.push(dog);


}

$(document).ready(function(){
    initializeArray();
    console.log(allDogs.length);
    console.log(allDogs[0].toString());
    console.log(allDogs[0].theSelector);
    console.log(allDogs[0].theImagePath);

    //(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_p").attr("src","second.jpg");
    $(allDogs[0].theSelector).attr("src", allDogs[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);

        $(allDogs[0].theSelector).fadeOut().fadeIn();

    });

});

function getRandomImage() {
  var randomNumber = Math.random() * allDogs.length;
}



function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
