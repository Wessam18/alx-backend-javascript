export default function cleanSet(set, startString) {
    const cleanedValues = [];
    for (const value of set) {
        if (value.indexOf(startString) === 0) {
            cleanedValues.push(value.substring(startString.length));
        }
    }
    return cleanedValues.join("-");
}
