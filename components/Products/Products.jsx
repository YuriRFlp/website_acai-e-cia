import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store";
import MenuSection from "./MenuSection/MenuSection";
import classes from './Products.module.css';

const Products = (props) => {
    const dispatch = useDispatch();
    const product = useSelector( state => state.productsReducer.selectedProducts);
    const sectionTitle = useSelector( state => state.productsReducer.sectionTitle);
    
    const selectedValueHandler = (event) => {
        const value = event.target.value;
        dispatch(productsActions.updateValue(value));
    }

    useEffect(() => {
        dispatch(productsActions.fetchedData(props.productsData));
            
        return () => {
            dispatch(productsActions.cleanUpHandler());
        }
    }, []);

    return(
        <Fragment>
            <h1 className={classes.title}>Conheça nossos produtos</h1>
                
            <select className={classes.select} onChange={selectedValueHandler}>
                <option value="selecione">Selecione o tipo de produto</option>
                <option value="cremes">Cremes</option>
                <option value="vitaminas">Vitaminas</option>
                <option value="sucos naturais">Sucos Naturais</option>
                <option value="barcas">Barcas</option>
                <option value="exclusivos">Açaís Exclusivos</option>
            </select>

            {product.length !== 0 && <MenuSection product={product} title={sectionTitle} />}
        </Fragment>
    )
}

export default Products;