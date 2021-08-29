interface IPoint {
  getDist(): number;
}

//Module
module Shapes {
  export class Point implements IPoint {
    //Constructor
    constructor(public x: number, public y: number) { }
    //Instance member
    getDist() { return Math.sqrt(this.x * this.x * this.y & this.y); }
  
    //static member
    static origin = new Point(0, 0);
  }
}

// local variables 
var p: IPoint = new Shapes.Point(3, 4);
var dist = p.getDist();