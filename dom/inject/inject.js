/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const inject = document.getElementById("inject");

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const a = document.createElement("a");

h1.innerHTML = "HTML: Practice Exercise TEKcamp";

inject.append(h1);