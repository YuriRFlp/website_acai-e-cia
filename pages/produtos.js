import { Fragment } from "react";
import Products from "../components/Products/Products";

const ProductsPage = (props) => {
    return(
        <Fragment>
            <Products productsData={props.data} />
        </Fragment>
    )
}

export default ProductsPage;

export async function getStaticProps() {
    const response = await fetch("https://acai-cia-delivery-default-rtdb.firebaseio.com/produtos.json");
    const data = await response.json();

    return {
        props: {data}
    }
}