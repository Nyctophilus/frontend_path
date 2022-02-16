//  any function that has callback ,it taken out of the main thread 'stack' without even consinder the setout time
// it will wait until main thread done tasks then callback excu

// settimeOut taken out of the stack to the webAPI
// when settimeOut done push to 'EVENT LOOP'task queue not randomly to ur stack again

// EVENT LOOP has one single job is to look at the stack and webapi
// if stack is empty, EVENTLOOP will push first task in the queue to stack
// .
// .
// .
// .
// .

// even of the setTimeOut is 0 ... the EventLoop will wait till the stack is empty 'finish the main()' then push the setTimeOut back

// all events go the WEBAPI stack/queue

// Avoid folding the EventLoop Queue Example: .onscroll(animateSomeThing), it wont block the main stack with fold the evetQueue with unuseful things
// .
// .
// .
// .
// .

// _______________________________________________________________
// What the heck is the event loop
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// heap where the memory allocation happens
// call stack where stack frames .. where functions calls happens -- (declare>Push in , return>Pop out)  HEAP

// Js runtime can do only one thing at a time 'single Threaded!'
// BUT browsers give us other things addtion to js.runitem

// concurrency in js through the webAPIs ... in these pieces of browser
