import DeliveryMenu from '../../components/DeliveryMenu/DeliveryMenu';
import DeliveryCards from '../../components/DeliveryCards/DeliveryCards';
import { useRouter } from 'next/router';
import classes from '../../styles/DeliveryPage.module.css';

const CardPage = (props) => {
    const route = useRouter();
    const cardId = route.query.cardId;

    return(
        <section className={classes.flexColumnContainer}>
            <h1 className={classes.title}>Monte seu pedido</h1>
            <div className={classes.flexRowContainer}>
                <DeliveryMenu />
                <DeliveryCards 
                    cardData={props.data}
                    pathId={cardId}
                />
            </div> 
        </section>
    )
}

export default CardPage;

export async function getStaticPaths() {
    return{
        fallback: false,
        paths: [
            {
                params: {cardId: "cremes"}
            },
            {
                params: {cardId: "vitaminas"}
            },
            {
                params: {cardId: "sucos"}
            },
            {
                params: {cardId: "barcas"}
            }
        ]
    };
};


export async function getStaticProps({ params }) {
    const response = await fetch(`https://acai-cia-delivery-default-rtdb.firebaseio.com/delivery/card-${params.cardId}.json`);
    const data = await response.json();
    
    return {
        props: {data}
    }
}