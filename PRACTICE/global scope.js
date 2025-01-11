let callCount = 0;
function performAction() {
    callCount++;
    console.log(`This function has been called ${callCount} time(s).`);
}
performAction(); // Call 1
performAction(); // Call 2
performAction(); // Call 3

