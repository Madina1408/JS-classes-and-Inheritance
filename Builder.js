class Builder {
  curValue;
   get(){
    return this.curValue;
   }
}

class IntBuilder extends Builder{
  constructor(startNumber){
   super();
   this.curValue=startNumber;
   if (startNumber===undefined){
    this.curValue=0
   }
  }
  plus(...numbers){
    for (let value of numbers){
      this.curValue+=value;
    }
    return this;
  }

  minus(...numbers){
    for (let value of numbers){
      this.curValue-=value;
    }
    return this;
  }

  multiply(number){
    this.curValue*=number;
    return this;
  }

  divide(number){
    this.curValue/=number;
    return this;
  }

  mod(number){
    this.curValue%=number;
    return this;
  }

  static random(min, max){
    return Math.floor(Math.random() *(max - min + 1) + min)
  }
}
// console.log(IntBuilder.random(4, 9))

// let intBuilder = new IntBuilder(); // 10;
// intBuilder
//   .plus(2, 3, 2)                     // 17;
//   .minus(1, 2)                       // 14;
//   .multiply(2)                       // 28;
//   .divide(4)                         // 7;
//   .mod(3)                            // 1;
//   .get();                            // -> 1;

//   console.log(intBuilder.get())
//   console.log(IntBuilder.random())

function StringBuilder (startString){
  this.curValue=startString;
  if (startString===undefined){
    this.curValue='';
  }
}

StringBuilder.prototype=Object.create(Builder.prototype);

StringBuilder.prototype.plus = function (...strings){
  for (let value of strings){
    this.curValue+=value;
  }
  return this;
}
StringBuilder.prototype.minus = function (number){
  this.curValue=this.curValue.slice(0, this.curValue.length-number);
  return this;
}
StringBuilder.prototype.multiply = function (number){
  this.curValue=this.curValue.repeat(number);
  return this;
}
StringBuilder.prototype.divide = function (number){
  this.curValue=this.curValue.slice(0, Math.floor(this.curValue.length/number));
  return this;
}
StringBuilder.prototype.remove = function (string){
  this.curValue=this.curValue.split('');
  this.stringArray = string.split('');

  for (){
    
  }

  return this;
}
StringBuilder.prototype.sub = function (from, number){
  this.curValue=this.curValue.substr(from, number)
  return this;
}

let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e';

  console.log(strBuilder.get());