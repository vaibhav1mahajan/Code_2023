"use strict";
function doSomething(key) {
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {})); // if you give any one as string then you have to give every member a value or string
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 0] = "Up";
    Direction3[Direction3["Down"] = 1] = "Down";
    Direction3[Direction3["Left"] = 2] = "Left";
    Direction3[Direction3["Right"] = 3] = "Right";
})(Direction3 || (Direction3 = {})); // automatically all rest will be provided number
var Direction4;
(function (Direction4) {
    Direction4["Up"] = "up";
    Direction4[Direction4["Down"] = 0] = "Down";
    Direction4[Direction4["Left"] = 1] = "Left";
    Direction4[Direction4["Right"] = 2] = "Right";
})(Direction4 || (Direction4 = {}));
console.log(Direction.Up);
