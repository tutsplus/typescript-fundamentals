function scopes() {
  let i;

  for(i = 0; i < 5; i++) {
    const PARAMETER = "Parameter " + i;
    console.log(i);
  }

  console.log('Finally: ' + i);
}

scopes();


var a: number;
var b: string;
var c: boolean;
var d: any;

var e: number[] = [1, 2, 3];
var f: [string, number] = ["Key", 1];
var g: object = { key: "value" };

enum Type {
  Car = 0,
  Train = 1,
  Bike = 2,
  Plane = 4,
  Walk = 3
};

Type.Walk



var value: any = "A random value";
var valLength: number = (value as string).length;
