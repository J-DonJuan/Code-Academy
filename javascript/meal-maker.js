const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
  
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price){
        return `Today's Special is ${this._meal} for ${this._price} cents.`;
      } else {
        return 'Meal or price was not set correctly, check back later!';
      }
    }
  };
  
  menu.meal = 'String Beans';
  menu.price = 98;
  console.log(menu.todaysSpecial);