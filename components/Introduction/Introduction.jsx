import classes from './Introduction.module.css';

const Introduction = () => {
    return(
        <section id="introducao" className={classes.container}>
            <div className={classes.imgContainer}>
                <img src="img-introduction.png" alt="Produtos" className={classes.img}></img>
                <h1 className={classes.title}>O que é <strong>Açaí &amp; Cia</strong>?</h1>
            </div>
                    
            <p className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec lacus orci, interdum ac sapien non, semper elementum lorem. 
                Suspendisse potenti. Ut tincidunt et felis nec venenatis. 
                In dictum massa sapien, non consectetur tortor consequat eget.
                Nunc id velit vel dui pharetra consequat at quis nisl. Sed convallis 
                molestie aliquet. Etiam sit amet posuere nibh, vel placerat nulla. 
                Quisque eu libero malesuada, gravida sapien sit amet, dapibus mauris.
                Nunc id velit vel dui pharetra consequat at quis nisl. Sed convallis 
                molestie aliquet. Etiam sit amet posuere nibh, vel placerat nulla.
                In dictum massa sapien, non consectetur tortor consequat eget.
            </p>
        </section>
    )
}

export default Introduction;