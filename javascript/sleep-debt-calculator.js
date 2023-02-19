const getSleepHours = day => {
    if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
      return 7;
    } else if (day === 'saturday' || day === 'sunday') {
      return 8;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') +  getSleepHours('tuesday') +  getSleepHours('wednesday') +  getSleepHours('thursday') +  getSleepHours('friday') +  getSleepHours('saturday') +  getSleepHours('sunday')
  }
  
  const getIdealSleepHours = () => idealHours = 8 * 7;
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log("You're getting the perfect amount of sleep");
    } else if (actualSleepHours <= idealSleepHours){
      console.log("You should get more rest");
      console.log(`You're behind by ${idealSleepHours - actualSleepHours} hours!`)
    } else {
      console.log("You got more sleep than you needed!");
    }
  }
  
  calculateSleepDebt();