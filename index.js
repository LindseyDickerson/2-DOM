// Get element by ID

/* accessing single elements*/
// let Newt = document.getElementById('listTitle');
// console.log(Newt);

// let NewtItem = document.querySelector('ul li');
// console.log(NewtItem);
// /* gives me the first UL and then first LI */

// /*Extra Code*/
// // centers the title
// Newt.style.textAlign = "center";
// //this changes the color to red
// NewtItem.style.color = 'red';

// Accessing Mulitple items
//node list looks and acts like an array, but is not an array. Can loop throuh like array, can also check length property. Access specific items can use square bracket notation or the item method (comes with the node list)
/* getElementsByClassName,
   getElementsByTagName,
   querySelectorAll */

//let grocery = document.getElementsByClassName('groceryItem');
//console.log(grocery);
// console.log(grocery instanceof Array); *returns "false" */

//console.group(grocery[2]); /*returns Boom Berry Juice */
//console.log(grocery.item(2)); /* another way to return Boom Berry Juice */

//let liTag = document.getElementsByTagName('li');
//console.log(liTag); /* returns all the list items and grocery items with li tags*/
//let selectAll = document.querySelectorAll('ul li');
//console.log(selectAll);

//Dom Tree and Nodes

// console.log(document.body.childNodes);
// console.log(document.body.children);


// Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.
// The childNodes property returns a collection of a node's child nodes, as a NodeList object.
// The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
/* List of properties:
1. first(Element)Child = used to get the first child element of a node. 
2. last(Element)Child = the last child element of a node. 
3. parentElement/ parentNode = access a parent node of an element. 
4. next(Element)Sibling = the element next to the element already accessed.
5. previous(Element)Sibling gets for us the element previous to the element already accessed.
*/

//let listDiv = document.getElementById('list');
//console.log(listDiv.firstElementChild);
/*returned the h1 tag*/

/*console.log(listDiv.firstElementChild.nextElementSibling);*/

/*let groceryDiv = document.getElementById('groceryList');
console.log(groceryDiv.firstElementChild);*/

// let groceryDiv = document.getElementById(groceryList);
// console.log(groceryList.lastElementChild);

/* Adding and removing HTML content
I can change the text on my DOM through these methods. 
innerText: specifies the text content of the specified node
innerHTML: specifies the HTML content of an element
**be careful when using innerHTML to set HTML content, because it removes the HTML content that is inside the element and adds the new one. */

let liTag = document.getElementsByTagName('li');
//console.log(liTag); Returns 5 "listItem" and 3 groceryItem

for(tag of liTag) {
    //console.log(tag);
    tag.style.fontFamily = 'cursive';
} //changes font to that style font

document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron';
/* taking listitem #4 'visit jacob' to 'Buy a new cauldron' */
/* can also use textContent or textHTML*/

document.getElementsByClassName('groceryItem')[0].innerHTML='Moondew Drops';

//addEventListener();
/* event listener attaches to DOMS
listens for an event : key up, click, hover, mouseover, etc.
see w3 schools dom obj event page*/

document.getElementById('clickMe').addEventListener('click', (event) => {
    console.log(event);
})
/*must actually click on button to show anything in the console log*/ //event also abbreviated to e

/*change color of button*/
document.getElementById('clickMe').addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'lightBlue';
})

/* attach event listener with keyword*/

document.getElementById('listInput').addEventListener('keyup', (event) => {
    console.log(event.target.value);
})

//keyup = every time the key is lifted after pressing down
/* h
he
hel
hell
hello
hello_
hello m
hello my
hello my_
hello my n
hello my na
...=hello my name is Lindsey Dickerson*/

// CreateElement() and AppendChild():
//----------------------------------
let newGrocery = document.createElement('li');
//created new list item
let groceryList = document.getElementById('groceryList');

//left side = parent node i want to append to; right side = child i want to append.

groceryList.appendChild(newGrocery);
//added space for it, but content is not there yet
newGrocery.innerText = 'Ginger Root';
//result = new item is now in the list

for(tag of liTag) {
    tag.style.fontFamily = 'cursive';
}
/*styles the added text to match the rest of the page, because it doesn't style it, it happened earlier in the document and doesn't recognize this needs to be styled accordingly*/


/* ************************************************ */
//Let's do that again, but with a different tag.
// I don't currently know that they bottom three items of my list are ingredients that I need to pick up from the store. Let's create an <h3> tag that says 'Grocery List'.
let groceryTitle = document.createElement('h3');
// Even though I have created an element, I didn't specify where I wanted it. We can use the appendChild() method to specify under which parent node we want to add it.
// First I need to grab the element I want to add my <h3>tag to.
let groceryDiv = document.getElementById('groceryDiv');
// Then I can append my newly created <h3>tag to my groceryDiv;
// left side = parent node I want to append to ---- right side = child I want to append
groceryDiv.appendChild(groceryTitle);
// In my browser, it won't look like I have changed anything. Open up the dev/inspect tools and under the ELEMENTS tab, navigate to the groceryDiv. Notice, we now have an empty <h3> tag nested underneath my <ul>.
// Let's add some text content to this.
groceryTitle.innerText = 'Grocery List';
// Great! But it's still underneath my list rather than above it. Let's change that!
groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);
// Syntax 
// node.insertBefore(newnode, existingnode)
// newnode: The node object you want to insert (Required)
// existingnode: The child node you want to insert the new node before. If set to null, the insertBefore method will insert the newnode at the end (Required)





