// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2);
};
// const myArray = [1, 2, 3, 4, 5];
// const firstTwoDrivers = returnFirstTwoDrivers(myArray);
// console.log(firstTwoDrivers);
const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(intger) {
    return (fare) => {
        return fare * intger;
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, fn) {
    return fn(arr);
}
// console.log(selectDifferentDrivers(myArray, returnLastTwoDrivers));