
function initializeArray()
{
var randomnumber=Math.floor(Math.random()*$("#container").children().length);
$(function() {
    //hide all the images (if not already done)
    $("#container > img").hide();

    //set timeout for image to appear (set at 500ms)
    setTimeout(function (){
       //fade in the random index of the image collection
       $("#container > img:eq(" + randomnumber + ")").fadeIn("slow");
    });
});
}

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
