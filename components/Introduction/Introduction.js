import classes from './Introduction.module.css';

const Introduction = () => {
    return(
        <section id="introducao" className={classes.container}>
            <h1 className={classes.title}>O que é <strong>Açaí &amp; Cia</strong>?</h1>
                    
            <div className={classes.flexContainer}>
                <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus orci, interdum ac sapien non, semper elementum lorem. Suspendisse potenti. Ut tincidunt et felis nec venenatis. In dictum massa sapien, non consectetur tortor consequat eget.Nunc id velit vel dui pharetra consequat at quis nisl. Sed convallis molestie aliquet. Etiam sit amet posuere nibh, vel placerat nulla. Quisque eu libero malesuada, gravida sapien sit amet, dapibus mauris.</p> 
                <img src="taca.png" alt="Taça de acaí" className={classes.image}></img>
                <p className={classes.text}>Integer gravida bibendum velit, quis placerat risus dapibus nec. Suspendisse dictum risus orci, et porta lectus volutpat vitae.Nunc id velit vel dui pharetra consequat at quis nisl. Sed convallis molestie aliquet. Etiam sit amet posuere nibh, vel placerat nulla. Quisque eu libero malesuada, gravida sapien sit amet, dapibus mauris. Integer gravida bibendum velit, quis placerat risus dapibus nec. Suspendisse dictum risus orci, et porta lectus volutpat vitae.</p>
            </div>
        </section>
    )
}

export default Introduction;