// ***Wrapping up***
// You learned how to traverse the DOM in three directions—downwards, upwards, and sideways—in this lesson. Here’s a quick bullet point to summarize the methods you learned:

// Traversing downwards
// element.querySelector
// element.querySelectorAll
// element.children
// Traversing upwards
// element.parentElement
// element.closest
// Traversing sideways
// element.nextElementSibling
// element.previousElementSibling
// Combine parentElement, children, and index

// .
// .
// .
// .
// .
// .
// .

// Node.cloneNode()
// The cloneNode() method of the Node interface returns a duplicate of the node
// Warning: cloneNode() may lead to duplicate element IDs in a document!

// If the original node has an id attribute, and the clone will be placed in the same document, then you should modify the clone's ID to be unique.

// Also, name attributes may need to be modified, depending on whether duplicate names are expected.

// Return value
// The new Node cloned. The cloned node has no parent and is not part of the document, until it is added to another node that is part of the document, using Node.appendChild() or a similar method.

// .
// .
// .
// .
// .
// .

//                  What is event Bubbling and capturing in JavaScript?

// "TRUE" Event bubbling is the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example). With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

// "FALSE" With capturing, the event is first captured by the outermost element and propagated to the inner elements.

// -HL my newer Understanding
// 1st phase is capturing phase, transverse through elements till it finds the event target.
// 2nd phase is bubbling phase, transverse back through elements till it reaches the top.

// addEventListener(event, callback, useCapture)
// useCapture default is false which using bubbling mode

// to stop propagation -while bubbling- of an event, use the event.stopPropagation() method.

//Deprecated: event.cancelBubble = true;

// USE: event.stopPropagation();
event.stopPropagation();

/*
	Custom Event
*/

// create
const myEvent = new Event("Seen");
// listen
document
  .getElementById("btn")
  .addEventListener("Seen", function (e) {
    console.log("Seen");
  });
// fire
document.getElementById("btn").dispatchEvent(myEvent);

//  run eventlistener once only
Element.addEventListener(event, callback, { once: true });
