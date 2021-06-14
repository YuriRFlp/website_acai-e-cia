import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bannerActions } from '../../../store';
import classes from './Banner.module.css';

const Banner = () => {
    const dispatch = useDispatch();
    const content = useSelector( state => state.bannerReducer.content);

    useEffect(() => {
        const timer = setInterval(changeContentHandler, 2000);

        return () => {
            //possivel bug: não esta resetando corretamente o intervalo
            clearInterval(setInterval(timer));
        }
    }, []);

    const changeContentHandler = () => {
        dispatch(bannerActions.changePhrase())
    };

    let phrase;

    if(content){
        phrase = <p className={classes.firstPhrase}>Sabor de verdade é aqui</p>;
    } else {
        phrase = <p className={classes.secondPhrase}>Faça agora seu pedido!</p>;
    };

    return(
        <div className={classes.banner}>
            <img src="taca-main.png" alt="Taça de açaí" className={classes.firstImg}></img>
            {phrase}
            <img src="taca-banner.png" alt="Taça de açaí kids" className={classes.secondImg}></img>
        </div>
    )
}

export default Banner;