let pop = "Shubham Khare";
console.log(pop.slice(6)); // m Khare

let top = "Shubham Khare";
console.log(top.slice(6,-3)); // m Kh

let top1 = "Shubham Khare";
console.log(top1.slice(-3));

let top2 = "Shubham Khare";
console.log(top2.substring(7,3));

let str="Playwright"
console.log(str.substring(2))//aywright
console.log(str.substring(4,10))

let data ="2025 welcome to 2026 TEST @%^&"
let newData=data.replaceAll(/[^a-zA-Z ]/g,"")
console.log(newData)

let data1 ="2025 welcome to 2026 TEST @%^&"
let newData1=data1.replaceAll(/[^0-9 ]/g,"")
console.log(newData1)