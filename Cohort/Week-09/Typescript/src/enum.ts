type Keyinput = 'up' | 'down' | 'left' | 'right';

function doSomething(key : Keyinput){

}


enum Direction {
    "Up",
    Down,
    Left, 
    Right
}

enum Direction2 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
} // if you give any one as string then you have to give every member a value or string

enum Direction3 {
    "Up" = 0,
    Down,
    Left,
    Right
} // automatically all rest will be provided number

enum Direction4 {
    Up = "up",
    Down = 0,
    Left ,
    Right  
}
console.log(Direction.Up);

