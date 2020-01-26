var d = new Date();

var d2 = new Date();
d2.setDate(d2.getDate() + 5);
console.log(d2);

var a = (d2 - d) / (1000*60*60*24)
console.log(a)
