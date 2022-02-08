function storyFunction(choice) {
    var option1 = document.getElementById("choice1").innerHTML;
    var option2 = document.getElementById("choice2").innerHTML;



    ////first choice////
    if (choice == 1 && option1 == "Open the letter on the desk") {
            document.getElementById("beginning").innerHTML = "The letter reads...  You are in great danger. You must go to the mountains and seek help from the wizard... From on the mountains, you can see the valley in which you live. Back west is the forest.";
            document.getElementById("choice1").innerHTML = "Go west towards the Forest";
            document.getElementById("choice2").innerHTML = "Search this area";
          }

    else if (choice == 2 && option2 == "Go back to main room in your house")
    { document.getElementById("beginning").innerHTML = "You go back to the main room in your house, and fall asleep on the couch";
      document.getElementById("choice2").innerHTML = "end";
      ////////is this right???////
    }

    else if (choice == 1 && option1 == "Search this area")
    {
      document.getElementById("beginning").innerHTML = "You search around the area and find nothing. Then suddenly in the distance you hear a faint whisper. You come across the old wizard wearing blue garmets. He is scruffy and worn and looks to be over a hundred years old.  Please, asks the wizards, will you help me find my missing crystal?";
      document.getElementById("choice1").innerHTML = "Um, sure";
      document.getElementById("choice2").innerHTML = "No thanks";
    }

    else if (choice == 2 && option2 == "Go west towards the Forest")
    { document.getElementById("beginning").innerHTML = "Your are in a forest full of lush trees. There is a path that splits and you get lost. the end.";

    }

    else if (choice == 1 && option1 == "Um, sure")
    {   document.getElementById("beginning").innerHTML = "You search around the area and find a strange glowing crystal lying on the ground.";
        document.getElementById("choice1").innerHTML = "Inspect the crystal";
        document.getElementById("choice2").innerHTML = "Leave the crystal";
    }

    else if (choice == 2 && option2 == "No thanks")
    { document.getElementById("beginning").innerHTML = "You go back home and don't help the wizard. the end.";

    }


    else if (choice == 1 && option1 == "Inspect the crystal") {
      document.getElementById("beginning").innerHTML = "You pick up the crystal with your bare hands. The crystal begins to glow ferociously. You begin to shake as electricity surges through your body. You have died from electric shock. The end.";
    }

    else if (choice == 2 && option2 == "Leave the crystal") {
      document.getElementById("beginning").innerHTML = "Your senses tell you playing with this mysterious object might not be a good idea.  You decide to kick some dirt over the crystal and move on.";
      document.getElementById("choice1").innerHTML = "Go back home";
      document.getElementById("choice2").innterHTML = "Explore the forest more";
    }

    else if (choice == 1 && answer1 == "Go back home") {
      document.getElementById("beginning").innerHTML = "You go back home and live happily ever after.";
    }

    else if (choice == 2 && answer2 == "Explore the forest more") {
      document.getElementById("beginning").innerHTML = "You get lost in the forest and die. the end."
    }
