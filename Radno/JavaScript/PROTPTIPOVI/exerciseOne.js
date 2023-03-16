// class Car {
//   constructor(brand, model, motion) {
//     this.brand = brand;
//     this.model = model;
//     this.motion = motion;
//   }
//   checkMotion() {
//     if (this.motion > 0) {
//       return "Car is mooving";
//     } else {
//       return "Car is not mooving";
//     }
//   }
//   accelerateCar(speedUp) {
//     return `New speed is: ${(this.motion += speedUp)}`;
//   }
//   break(speedDown) {
//     if (this.motion - speedDown >= 0) {
//       return `Speed decrease:${(this.motion -= speedDown)}`;
//     } else {
//       return "Wrong break";
//     }
//   }
//   status() {
//     return `${this.brand} ${this.model} is running ${
//       this.motion
//     } km/h ${this.checkMotion()}`;
//   }
//   stopTheCar() {
//     this.motion = 0;
//     return "This car is stopped.";
//   }
// }
// var car1 = new Car("Opel", "Astra", 20);
// console.log(car1);
// console.log(car1.checkMotion());
// console.log(car1.accelerateCar(10));
// console.log(car1.break(30));
// console.log(car1.stopTheCar);

class Tv {
  constructor(brand) {
    this.brand = brand;
    this.chanel = 1;
    this.volume = 50;
  }
  changeVolume(newVolume) {
    if (newVolume > 100 || newVolume < 0) {
      return `Volume is: ${this.volume}`;
    } else {
      this.volume = newVolume;
      return `Volume is: ${this.volume}`;
    }
  }
  setTheChanel(newChanel) {
    if (newChanel > 1) {
      this.chanel = newChanel;
      return `New chanel is: ${this.chanel}`;
    } else if (newChanel < 1) {
      return `New chanel is: ${this.chanel}`;
    } else {
      return `${this.chanel}`;
    }
  }
  resetTv() {
   this.chanel=1;
   this.volume=50;
   return `${this.brand} is now on deault chanel ${this.chanel} and his default volume ${this.volume}`;
  }
  status() {
    return `${this.brand} is at chanel ${this.chanel} and volume ${this.volume}`;
  }
}
var newTv = new Tv("Panasonic");
console.log(newTv.setTheChanel(20));
console.log(newTv.changeVolume(35));
console.log(newTv.status());
console.log(newTv.resetTv());
