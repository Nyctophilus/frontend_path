import React, {
  useState,
  useCallback,
  useMemo,
} from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

/*
	-HL Virtual DOM 

	it's just js objects {
		type: 'div',
		content: 'this is div content',
	}

	till then we say render , real dom element created with these info
*/

/* -HL React vs ReactDOM

 - React reEvaluate the components when state changes only (props, context)... doesnt know about the dom
 
 - ReactDOM which make the virtual dom diffing, to decide what required changes to send it only to the dom
 

 -HL Re-evaluated !== re-render
 
 - Re-evaluate a component when state changes, like a func call... calling all utilies included , all children
 
 - Re-render will detect the required changes to apply to the real dom
*/

function App() {
  /*
		-HL Scheduled state change

		when state-changing func invoked   'such as setListTitle'

		scheduling keep the order 


		this why we use setState(()=>{ }) form 
		when multiple state changes scheduled, to be sure of taking the previous snippet of the state


		when a func cause 2 state-changes, react consider this 1 scheduled state-change
		
	*/

  const [listTitle, setListTitle] = useState("My List");

  /* -HL useCallback hook

  to store function objects and only rebuild them when some input change
  
  went to same obj / same place in memory so the compasion does work with reference values now!

   */
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>
        Change List Title
      </Button>
    </div>
  );
}

export default App;
