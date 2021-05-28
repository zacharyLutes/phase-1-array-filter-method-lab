// Code your solution here
const findMatching = (driverArray, string) => {
    const match = driverArray.filter(person => person.toLowerCase() === string.toLowerCase());
    return match;
}

const fuzzyMatch = (driverArray, string) => {
    
    const match = driverArray.filter(person => person.startsWith(string.charAt(0)));
    return match;
}

const matchName = (driverArray, string) => {
    const match = driverArray.filter(person => person.name === string);
    return match;

}