class Marker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
  
    print(text) {
      for (let char of text) {
        if (char !== ' ' && this.inkLevel > 0.5) {
          console.log(char);
          this.inkLevel -= 0.5;
        } else {
          console.log(' ');
        }
      }
    }
  }
  
  class RefillableMarker extends Marker {
    refill(inkAmount) {
      this.inkLevel = Math.min(100, this.inkLevel + inkAmount);
    }
  }
  
  let simpleMarker = new Marker('blue', 50);
  simpleMarker.print('| Hello World |');
  
  let refillableMarker = new RefillableMarker('red', 20);
  refillableMarker.print('| This is a refillable marker |');
  refillableMarker.refill(50);
  refillableMarker.print('| Now it can print more|');