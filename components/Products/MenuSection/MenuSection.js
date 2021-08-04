import ProductCard from './ProductCard/ProductCard';
import classes from './MenuSection.module.css';

const MenuSection = (props) => {
    return(
        <section className={classes.section}>
            <h2 className={classes.subtitle}>{props.title}</h2>

            <div className={classes.cardsContainer}>
                {props.product.map( product => {
                    return(
                        <ProductCard 
                            key={product.title}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default MenuSection;