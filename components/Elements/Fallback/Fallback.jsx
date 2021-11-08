import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import classes from './Fallback.module.css';
import { Fragment } from "react";

const Fallback = () => {
    return (
      <Fragment>
        <div className={classes.background}></div>
        <Loader
          type="Oval"
          color="#fff"
          height={65}
          width={65}
          className={classes.fallbackContainer}
        />
      </Fragment>
      );
}

export default Fallback;