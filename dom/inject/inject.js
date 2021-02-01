/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const inject = document.getElementById("inject");

const h1One = document.createElement("h1");
const h1Two = document.createElement("h1");
const h2 = document.createElement("h2");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const ol = document.createElement("ol");
const li = document.createElement("li");
const hr1 = document.createElement("hr1");
const hr2 = document.createElement("hr1");

h1One.innerHTML = "<center> <i>HTML: Practice Exercise TEKcamp</i> </center>";
h2.innerHTML = `<center> <a href=""> TEKsystems "TEKcamp" </a> </center>`;
p1.innerHTML = "I love <i>HTML</i> for the following reasons:";
hr1.innerHTML = "<hr />";
ol.innerHTML = 
    `
    <li> I learned it quickly. </li>
    <li> I can make web pages using code. </li>
    <li> It's fun. </li>
    `;

hr2.innerHTML = "<hr />";
p2.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.`;
h1Two.innerHTML = "Have a great day!";
p3.innerHTML = `I really look forward to learning how to code!  Have a great day. -[Team "Git'er Done"]`

inject.append(h1One, h2, p1, hr1, ol, hr2, p2, h1Two, p3);