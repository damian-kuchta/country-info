import classes from "./InfoBox.module.css";

const InfoBox = (props) => {
  return (
    <div className={classes['info-box']}>
      <p className={classes['info-box__label']}>{props.title}:</p>
      <p className={classes['info-box__data']}>
        {props.value}
      </p>
    </div>
  );
};

export default InfoBox;

