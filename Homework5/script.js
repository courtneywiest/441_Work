var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];

var blankImagePath = "images/dogpoker.jpeg";

var actualImages = new Array();



function printBlanks()
{

  createRandomImageArray();

  for(var i = 0; i <imageTags.length; i++)
  {
    document.getElementById(imageTags[i]).src=blankImagePath;
  }
}


function createRandomImageArray()
{
var actualImagePath = ["./images/1-sleepytongue.jpeg", "./images/2-sandysherm.jpeg", "./images/3-crossedpaws.jpeg", "./images/4-goofysherm.jpeg", "./images/5-toay.jpeg", "./images/6-snowy.jpeg", "./images/7-birthday.jpeg", "./images/8-sneakay.jpg", "./images/p-lipies.jpeg", "./images/10-couchboi/jpeg"];

var count = [0,0,0,0,0,0,0,0,0,0];

while(actualImages.length < 10)
{
  var randomNumber = Math.floor(Math.random() * actualImagePath.length)

  if(count[randomNumber] < 3)
  {
    actualImages.push(actualImagePath[randomNumber]);

    count[randomNumber] = count[randomNumber] + 1;
  }
}

}

function flipImage(number)
{
  document.getElementById(imageTags[number]).src=actualImages[number];
}
