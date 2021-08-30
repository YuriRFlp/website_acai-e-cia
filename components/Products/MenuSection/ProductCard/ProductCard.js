import classes from './ProductCard.module.css';

const ProductCard = (props) => {
    return(
        <div className={classes.card}>
            <img className={classes.img} src={props.image} alt={props.title}></img>
            <div className={classes.cardDescription}>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>Preço: {props.price}</p>
            </div>
            <p className={classes.cardTitle}>{props.title}</p>
        </div>
    )
}

export default ProductCard;