var images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var backside = "./images/cardback.pdf"
var actualImages = new Array();


function printBlanks()
{
  RandomImageArray();

    for(var i = 0; i < images.length; i++)
      {

      document.getElementById(images[i]).src= backside;
      }
}

 function RandomImageArray()
 {
   var actualImagePath = ["./images/1-sleepytongue.jpeg", "./images/2-sandysherm.jpeg", "./images/3-crossedpaws.jpeg", "./images/4-goofysherm.jpeg", "./images/5-toy.jpeg", "./images/6-snowy.jpeg", "./images/7-birthday.jpeg", "./images/8-sneakay.jpg", "./images/9-lipies.jpeg", "./images/10-couchboi.jpeg"];

   var count = [0,0];

   while(actualImages.length < 10)
   

 }
