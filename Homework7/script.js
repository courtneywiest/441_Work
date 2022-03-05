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

/*get Ttl()  {
       return this.title;
     }
     set Ttl(title) {
       this.title = title;
     }
     get Img() {
       return this.image;
     }
     set Img(image) {
       this.image = image;
     }
     get Des()  {
       return this.description;
     }
     set Des(description) {
       this.description = description;
     }
     get Ath()  {
       return this.author;
     }
     set Ath(author) {
       this.author = author;
     }
     get Yr()  {
       return this.year;
     }
     set Yr(year)  {
       this.year = year;
     }

*/
     toString()
     {
       return "Title: " + this.title + "<br> " + this.image + "<br> Description: " + this.description + "<br> Author: " + this.author + "<br> Year: " + this.year;
      /* let str;
       str = `Title: ${this.title}, <br> ${this.image},  <br> Description: ${this.description}, <br> Author: ${this.author} <br> Year:${this.year};`
       return str;*/
     }

     get theTitle()
     {
       return this.title;
     }
 }


   function initializeArray()
   {
     var myViewFinder1 = new ViewFinder( this.title = "1111", this.image = "1111", this.description = "1111", this.author = "1111", this.year = "1111");

     var myViewFinder2 = new ViewFinder(this.title = "2222", this.image = "2222", this.description = "2222 ", this.author = "2222", this.year = "2222");

     var myViewFinder3 = new ViewFinder(this.title = "3333", this.image = "3333", this.description = "3333", this.author = "3333", this.year = "3333");

     var myViewFinder4 = new ViewFinder(this.title = "4444", this.image = "4444", this.description = "4444", this.author = "4444", this.year = "4444");

     var myViewFinder5 = new ViewFinder(this.title = "5555", this.image = "5555", this.description = "5555", this.author = "5555", this.year = "5555");

     var myViewFinder6 = new ViewFinder(this.title = "6666", this.image = "6666", this.description = "6666", this.author = "6666", this.year = "6666");

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
