// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const hq = 42;
    return Math.abs(blocks - hq);
}
const blockInFeet = 264;
function distanceFromHqInFeet(blocks){
    const distanceInBlocks = Math.abs(blocks-42);
    return distanceInBlocks * blockInFeet
}

function distanceTravelledInFeet(startBlock, endBlock){
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * blockInFeet
}

function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination - start) * blockInFeet;
    let fare = 0;

    if (distance <= 400){
        fare = 0;
    } else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * 0.02;
    } else if (distance >2000 && distance <= 2500){
        fare = 25;
    } else if (distance > 2500){
        fare = 'cannot travel that far';
    }
    return fare;
}