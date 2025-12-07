let val = "Shubham";
let char = "h";
let count = 0;

for (let i = 0; i < val.length; i++) {
  if (val[i] === char) {
    count++;
  }
}

console.log("Total number of '" + char + "': " + count);
