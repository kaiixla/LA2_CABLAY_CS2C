//student 1 informations
let s1Name = "Juan Gamoso Dela Cruz";
let s1bdate = "January 1, 2001";
let s1bplace = "Upper Bonifacio, Baguio City, Benguet, Philippines 2600";
let s1add = "San Nicolas, Candon City, Ilocos Sur";
let s1cyear = "Bachelor of Science in Computer Science";
let s1djob = "Software Engineer";

//using changing case uppercase the name, birthplace & adress and lowercase the name & course
let s1ucName = s1Name.toUpperCase();//the name will turn into uppercase
let s1ucbplace = s1bplace.toUpperCase();//the address will turn into uppercase
let s1ucadd = s1add.toUpperCase();
let s1lcName = s1Name.toLowerCase();
let s1lcyear = s1cyear.toLowerCase();

//concatinating all the information of student 1 to form a sentence
//making it as a variable to form the first sentence
let s1info1 = s1ucName.concat(" was born").concat(" ").concat(s1bdate).concat(" at ").concat(s1ucbplace).concat(", and currently living at ").concat(s1ucadd);
//making it as second variable to form the second sentence
let s1info2 = ". ".concat(s1lcName).concat(" is taking up ").concat(s1lcyear).concat(" and dreams to be ").concat(s1djob).concat(" after graduation.");

//student 2 informations
let s2Name = "Kyla Gaboy Cablay";
let s2bdate = "April 17, 2005";
let s2bplace = "Allangigan 2nd, Candon City, Ilocos Sur, 2710";
let s2add = "Allangigan 2nd, Candon City, Ilocos Sur, 2710";
let s2cyear = "Bachelor of Science in Computer Science";
let s2djob = "Software Engineer";

//using changing case uppercase the name, birthplace & adress and lowercase the name & course
//doing it individually to make it organize
let s2ucName = s2Name.toUpperCase();
let s2ucbplace = s2bplace.toUpperCase();
let s2ucadd = s2add.toUpperCase();
let s2lcName = s2Name.toLowerCase();
let s2lcyear = s2cyear.toLowerCase();

//concatinating all the information of student 2 to form a sentence
//making it as a variable to form the first sentence
let s2info1 = s2ucName.concat(" was born").concat(" ").concat(s2bdate).concat(" at ").concat(s2ucbplace).concat(", and currently living at ").concat(s2ucadd);
//making it as second variable to form the second sentence
let s2info2 = ". ".concat(s2lcName).concat(" is taking up ").concat(s2lcyear).concat(" and dreams to be ").concat(s2djob).concat(" after graduation.");

console.log(s1info1 + s1info2);
console.log(" ");
console.log(s2info1 + s2info2);