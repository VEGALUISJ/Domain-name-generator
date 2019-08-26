/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

//code from here

let a = ["the", "our"];
let b = ["great", "big"];
let c = ["jogger.com", "raccon.com"];

var text = "";

for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    for (var g = 0; g < c.length; g++) {
      text += a[i] + b[j] + c[g] + "<br>";
    }
  }
}
document.getElementById("demo").innerHTML = text;

//window.onload = function() {
//console.log();
//};
