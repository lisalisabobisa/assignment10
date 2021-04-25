//STEP 1
// function alphabet(st) {
//     return st.split('').sort().join('');
// }
// console.log(alphabet("webmaster"));

//STEP 2
// function convert(str) {
//     let splitStr = str.split(' ');
//     let newarr = [];
//     for (let i = 0; i < splitStr.length; i++) {
//         newarr.push(splitStr[i].charAt(0).toUpperCase()+splitStr[i].slice(1));
//     }
//     return newarr.join(' ');
// }
// console.log(convert("the quick brown fox"));


//STEP 3
// function vowel(str) {
//   let vowels = 'aeiouAEIOU';
//   let vcount = 0;
//   for (let i = 0; i < str.length ; i++) {
//     if (vowels.indexOf(str[i]) !== -1) {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel("The quick brown fox"));

//STEP 4
// function characters(l) {
// let text = "";
// let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for(let i=0; i < l; i++ ) {  
//         text += charList.charAt(Math.floor(Math.random() * charList.length));
//     }
//     return text;
// }
// console.log(characters(13));

//STEP 5
// function LongName(countryName) {
//   return countryName.reduce(function(lname, country) {
//     return lname.length > country.length ? lname : country;
//   }, "");
// }
// console.log(LongName(["Australia", "Germany", "United States of America"]));

