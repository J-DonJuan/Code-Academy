class Media {
    constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    getAverageRating(){
      let totalRating = 0;
      this._ratings.forEach(function(index) {
        totalRating += index;
      })
      return totalRating / this._ratings.length;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rating){
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(title, artist, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  
    getSongList(){
      this._songs.forEach(
        function(song){
          console.log(song);
        }
      )
    }
  }
  
  
  // // Testing CD child class
  // const eminemCD = new CD("Marshall Mathers LP", "Eminem", ["song 1", "song 2", "song 3"]);
  // console.log(eminemCD);
  // eminemCD.getSongList()
  
  
  
  // // Testing book child class
  // const extremeOwnership = new Book("Extreme Ownership", "Jocko", 279);
  // console.log(extremeOwnership.pages);
  // console.log(extremeOwnership.title);
  // console.log(extremeOwnership.author);
  // extremeOwnership.addRating(5);
  // extremeOwnership.addRating(5);
  // console.log(extremeOwnership.getAverageRating());
  
  
  
  // const sampleMedia = new Media('1984');
  // console.log(sampleMedia._title);
  
  // //Testing ratings, addRating & getAverage Rating
  // sampleMedia.addRating(5);
  // sampleMedia.addRating(3);
  // sampleMedia.addRating(4);
  // console.log(sampleMedia.ratings);
  // console.log(`Avg Rating: ${sampleMedia.getAverageRating()}`);
  
  // //Testing isCheckedOut & toggleCheckOutStatus
  // console.log(`Checkout Status Initially: ${sampleMedia.isCheckedOut}`)
  // sampleMedia.toggleCheckOutStatus();
  // console.log(`Checkout Status Now: ${sampleMedia.isCheckedOut}`)