const myName = "Bhanu";
const greeting = 'Good Morning';
console.log(greeting + ' ' + myName);


// methods
let html;
html = "<h1> hello </h1>" + "<p> world </p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dfgd'));
console.log(html.includes('ell'));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split('>'));
console.log(html.replace('this', 'it'));

// templates
let fruit1 = 'orange\'';
let fruit2 = 'apple';
let myHtml = `Hello ${myName}
<h1> This is Superb </h1>
<p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;