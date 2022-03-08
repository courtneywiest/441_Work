var myViewFinderArray = new Array();


 class ViewFinder
 {

     constructor(title, image, description, author, year)
     {
       this.title = title;
       this.image = image;
       this.description = description;
       this.author = author;
       this.year = year;
     }


     toString()
     {
       return "<b>Title:  </b>" + this.title + "<br><br> <b>Author:   </b>" + this.author + "<br><br><b> Year:   </b>" + this.year + "<br><br> " + this.image + "<br><br> <b>Description: </b><br><br>" + this.description ;

     }

     get theTitle()
     {
       return this.title;
     }
 }




   function initializeArray()
   {



     var myViewFinder1 = new ViewFinder( this.title = "Invisible Homeless", this.image = '/images/ghost.jpeg', this.description = "This life size glass sleeping figure was made as part of an Arts Council funded residency at the Glass Hub in UK. The artwork was made to highlight the growing number of hidden and invisible homeless people there now are. Shrouded in a blanket made of glass, the ghost-like figure, which has no gender, is a vulnerable and fragile form.", this.author = "Luke Jerram", this.year = "2015");



     var myViewFinder2 = new ViewFinder(this.title = "Stop Telling Women To Smile", this.image = "Img2", this.description = "These simple posters, created by New York City artist Tatyana Fazlalizadeh, carry a big message about a type of gender injustice women face regularly: street harassment. The series, called Stop Telling Women To Smile in reference to a common catcall, started in the fall of 2012 and is ongoing by the artist. The publicly displayed posters feature the portraits of women, along with a quote relaying their experiences with street harassment. Fazlalizadeh hopes the captions speak directly to offenders by placing the posters outside in public spaces where harassment happens. ", this.author = "Tatyana Fazlalizadeh", this.year = "2012");

     var myViewFinder3 = new ViewFinder(this.title = "Untitled refugee life jacket installation", this.image = "./images/inflatable.jpeg", this.description = "This art installation by noted Chinese artist Ai Weiwei showcased 14,000 used life jackets previously worn by refugees traveling from Turkey to the Greek island of Lesbos. The artist, hoping to highlight the severity of the ongoing refugee crisis, tied the striking orange vests to pillars of the Konzerthaus Berlin to command the attention of the general public.", this.author = "Ai Weiwei", this.year = "2016");

     var myViewFinder4 = new ViewFinder(this.title = "All Hands On Deck", this.image = "./images/handsUp.jpeg", this.description = "Davis took photos of activists involved in Ferguson protests, representing those 'holding up' the current racial justice movement. Their hands were photographed in a 'hands up, don't shoot' gesture, a symbol that became iconic after the death of Michael Brown. The posters were pasted on boarded buildings around Ferguson during the protests following the acquittal of Darren Wilson in the death of Brown.", this.author = "Damon Davis", this.year = "2016");

     var myViewFinder5 = new ViewFinder(this.title = "Inflatable Refugee", this.image = "./images/inflatable.jpeg", this.description = "The title of this work says it all. This art project is a 20-foot inflatable refugee, hoping to focus the general public's attention on the refugee crisis. Dubbed a nomadic art project, the inflatable refugee has set out around the world to spread awareness in places like Venice, Melbourne and Copenhagen. The work, created by Belgian visual artist collective Schellekens & Peleman, is made from the same material used to make the inflatable boats many refugees use to cross the Mediterranean Sea.", this.author = "Schellekens & Peleman artist collective", this.year = "2016");

     var myViewFinder6 = new ViewFinder(this.title = "Untitled wall around Donald Trump's Walk of Fame star", this.image = "./images/wall.jpeg", this.description = "This wall, conceptualized and constructed by the artist known as Plastic Jesus, was placed around the Hollywood Walk of Fame Star of Donald Trump on July 20, 2016 -- the same day Trump was officially nominated as the Republican Party's presidential nominee.Complete with barbed wired and tiny 'Keep Out' signs, the work played of Trump's controversial statements about building a wall on the southern border of the U.S. as part of a plan for immigration reform. The artist, known for progressive messages on social inequality, used the work to oppose Trump's comments.", this.author = "Plastic Jesus", this.year = "2016");

     myViewFinderArray.push(myViewFinder1);

     myViewFinderArray.push(myViewFinder2);

     myViewFinderArray.push(myViewFinder3);

     myViewFinderArray.push(myViewFinder4);

     myViewFinderArray.push(myViewFinder5);

     myViewFinderArray.push(myViewFinder6);
   }




     function accessInformation()
     {
       var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

       document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
     }
