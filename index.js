// Code your solution here
const findMatching = (driverArray, string) => {
    const match = driverArray.filter(person => person.toLowerCase() === string.toLowerCase());
    return match;
}

const fuzzyMatch = (driverArray, string) => {
    let sw = string[0];
    const match = driverArray.filter(person => person.startsWith(sw));
    return match;
}

const matchName = (driverArray, string) => {
    const match = driverArray.filter(person => person.name === string);
    return match;

}