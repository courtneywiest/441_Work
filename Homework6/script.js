var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankImagePath = "images/dogpoker.jpeg";
var firstNumber = -1;
var secondNumber = -1;

var player = {"firstname":"", "lastname":""};


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

  if(count[randomNumber] < 2)
  {
    actualImages.push(actualImagePath[randomNumber]);

    count[randomNumber] = count[randomNumber] + 1;
  }
}

}

function flipImage(number)
{

if(firstNumber >= 0)
{
  secondNumber = number;
  document.getElementById(imageTags[number]).src = actualImages[secondNumber];
}


else if(firstNumber < 0)
{
  firstNumber = number;
  document.getElementById(imageTags[firstNumber]).src=actualImages[firstNumber];

}

if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
{
  setTimeout(imagesDisappear, 1000);
}

else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
    firstNumber = -1;
    secondNumber = -1;
  }

}



function imagesDisappear()
{
  console.log(firstNumber);
  document.getElementById(imageTags[firstNumber]).src = blankImagePath;
  document.getElementById(imageTags[secondNumber]).src = blankImagePath;
  firstNumber = -1;
  secondNumber = -1;
}


function addToPlayer()
{
  var firstName = document.getElementById("txtFirstName").value;

  player.firstname = firstName;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "index.html";
}


function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);
  console.log(player.firstname);
}
