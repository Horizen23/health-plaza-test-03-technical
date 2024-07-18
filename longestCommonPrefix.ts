function longestCommonPrefix(strs: string[]): string {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
}

// Example usage:
const example1 = ["fower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];

console.log("Output:",longestCommonPrefix(example1)); // Output: "fl"
console.log("Output:",longestCommonPrefix(example2)); // Output: ""
