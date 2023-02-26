class School {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(students){
      if (typeof students === 'number'){
        this._numberOfStudents = students;
      } else {
        return "Invalid input: numberOfStudents must be set to a Number.";
      }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      let sub = Math.floor(Math.random() * substituteTeachers.length);
      console.log(`Your randomly chosen sub is ${substituteTeachers[sub]}`);
      }
  }
  
  class Primary extends School{
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents);
      this._pickupPolicy = true;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
    togglePolicy(){
      this._pickupPolicy = !this._pickupPolicy;
    }
  }
  
  class Middle extends School{
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents);
    }
  }
  
  class High extends School{
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents);
      this._sportsTeams = [];
    }
    set sportsTeams(teamsArray){
      this._sportsTeams = teamsArray;
    }
    get sportsTeams(){
      console.log("List of sports teams:")
      this._sportsTeams.forEach(function(team) {
        console.log(team);
      })
    }
  }
  
  // Testing primary child class
  const testPrim = new Primary("Stonehurst", "Primary", 276);
  testPrim.quickFacts();
  console.log(`Primary school name: ${testPrim.name}`);
  console.log(`Original pick up policy: ${testPrim.pickupPolicy}`);
  testPrim.togglePolicy();
  console.log(`Pick up policy after toggle: ${testPrim.pickupPolicy}`);
  
  // Testing middle child class
  const testMid = new Middle("Prospect", "Middle", 368);
  console.log(testMid);
  
  // Testing high child class
  const testHigh = new High("Interboro", "high", 936);
  console.log(testHigh);
  testHigh.sportsTeams = ["Sixers", "Eagles", "Phillies"]
  testHigh.sportsTeams;
  console.log(testHigh._sportsTeams);
  
  // Testing School class
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);