
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

      get Ttl()  {
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


      toString()
      {
        let str;
        str = `Title: ${this.title}, ${this.image},  Description: ${this.description}, Author: ${this.author} Year:${this.year};`
        return str;
      }


  }


    function initializeArray()
    {
      var myViewFinder = new ViewFinder(" piggies ");

      var myViewFinder1 = new ViewFinder(" tigies ");

      myViewFinderArray.push(myViewFinder);

      myViewFinderArray.push(myViewFinder1);
    }


      function accessInformation()
      {
        var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

        document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
      }
