WeakMap use Cases:
WeakMap is great for attaching information to objects, without actually modifying the object itself.


** You wouldnt want to use a Map for this, since putting an object in a Map keeps it around forever.****

You need some kind of strategy for clearing things out so you dont leak memory. With a WeakMap, objects can simply fall out of the map if they become unused, so there is risk of leaking memory.

ref:https://www.reddit.com/r/javascript/comments/bgjqv7/what_are_the_use_cases_for_weakset_and_weakmap_in/
#############################################################################################################################################################################################################

