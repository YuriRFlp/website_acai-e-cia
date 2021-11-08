import classes from './Instagram.module.css';

const Instagram = () => {
    return(
        <section className={classes.container}>
            <h1 className={classes.title}>Instagram</h1>

            <div className={classes.feedContainer}>
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div className="elfsight-app-189cfe51-5b04-4fd0-9a4c-1f803c8d6f70"></div>
                <div className={classes.perfilContainer}>
                    <h2 className={classes.instagram}>@lanchoneteacaiecia_</h2>
                </div>
            </div>
        </section>
    )
}

export default Instagram;