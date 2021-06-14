import { Fragment } from "react";
import Instagram from "../components/Instagram/Instagram";
import Introduction from "../components/Introduction/Introduction";
import Location from "../components/Location/Location";

const HomePage = () => {
  return(
    <Fragment>
      <Introduction />
      <Location />
      <Instagram />
    </Fragment>
  )
}

export default HomePage;


