/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const inject = document.getElementById("inject");

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const p1 = document.createElement("p");
const p2 = document.createElement("p2");
const ol = document.createElement("ol");
const li = document.createElement("li");
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr2");

h1.innerHTML = "<center> <i>HTML: Practice Exercise TEKcamp</i> </center>";
h2.innerHTML = `<center> <a href=""> TEKsystems "TEKcamp" </a> </center>`;
p.innerHTML = "I love <i>HTML</i> for the following reasons:";
hr1.innerHTML = "<hr />";
ol.innerHTML = 
    `
    <li> I learned it quickly. </li>
    <li> I can make web pages using code. </li>
    <li> It's fun. </li>
    `;

hr2.innerHTML = "<hr />"
p2.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.`

inject.append(h1, h2, hr1, p, ol, hr2, p2);







/* <center>
<h1><i>HTML Practice Exercise TEKcamp.</i></h1>
<h2><a href="">TEKsystems "TEKcamp"</a></h2>
</center>

<hr />
<p>I love <i>HTML</i> for the following reasons:</p>
<ol>
<li>I learned it quickly.</li>
<li>I can make web pages using code
<li> It’s fun.</li>
</ol>
<hr />
<p>My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>
<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"] */
