import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  /* -HL useMemo

  same as useCallback but for other data not functions
  
  allows u to store any kind of data .. just as useCallback does for func
  

  too useful when its too expensive to recalucate data
  */
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

/* -HL memo
  only if props changes , component would re-excuted and re-evaluated
  
 -HL reference values in props would be different every compasion, so memo wouldn't prevent it 
 solution to use useCallback hook on the func/object to prevent re-evaluating

  useful in big apps , u would cut entire branch from component-tree from re-excution
*/

export default React.memo(DemoList);
