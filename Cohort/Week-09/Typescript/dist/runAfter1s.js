"use strict";
function runAfter1s(fn) {
    setTimeout(() => {
        fn();
    }, 1000);
}
runAfter1s(() => {
    console.log("123");
    return;
});
