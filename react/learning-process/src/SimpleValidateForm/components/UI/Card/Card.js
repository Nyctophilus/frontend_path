import classes from "./Card.module.css";

const Card = ({ children, className }) => {
  return (
    <div className={`${classes.Card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
