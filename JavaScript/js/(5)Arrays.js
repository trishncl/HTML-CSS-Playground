
let names = ["Xiao", " Ganyu", " Hu Tao", " Zhongli"];
let numbers = [5, 10, 15, 20];
let mixed = [true,2.46, "Xiao"];

alert(names);
alert(names.length);

//reading arrays
alert(names[1] + numbers[2]);
//to get the end: (names[names.length-1]);

//updating arrays
names[names.length-1] = " Morax";
names[1] = " Adepti";
names[4] = " Ningguang";
alert(names);