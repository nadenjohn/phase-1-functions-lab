// Code your solution in this file!
function distanceFromHqInBlocks (location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet (location){
     return distanceFromHqInBlocks (location) * 264
}

function distanceTravelledInFeet (start, destination) {
    let feet;
    if (start > destination) { 
        feet = (start - destination) * 264
    }
    else {
        feet = (destination - start) * 264
    }
    return feet;
}

function calculatesFarePrice (start, destination){
    let message;
    if (distanceTravelledInFeet(start, destination) <= 400) {
        message = 0
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000) {
        message = (distanceTravelledInFeet(start, destination) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start, destination) <= 2500){
        message = 25
    }
    else {
        message = "cannot travel that far";
    }
    return message;
}
