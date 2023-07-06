import s from './Card.module.scss';

/**
 * @typedef CardProps
 * 
 * @param {CardProps} props
 * @returns {JSX.Element}
 */
const Card = (props) => {
    const classes = [s.wrapper, props.className].join(' ');
  return (
    <div className={classes}>
        {props.children}
    </div>
  );
};

export default Card;

