import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import classes from './Fallback.module.css';

const Fallback = () => {
    return (
        <Loader
          type="Oval"
          color="#571e3e"
          height={100}
          width={100}
          className={classes.fallbackContainer}
        />
      );
}

export default Fallback;