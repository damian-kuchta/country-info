import classes from "./FlagBox.module.css";

const FlagBox = (props) => {
  return (
    <div className={classes['flag-box']}>
      <img className={classes['flag-box__img']} src={props.flagImg} alt='Country flag' />
    </div>
  );
};

export default FlagBox;