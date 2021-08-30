import { Fragment } from "react";
import Instagram from "../components/Instagram/Instagram";
import Introduction from "../components/Introduction/Introduction";
import Invite from "../components/Invite/Invite";
import Location from "../components/Location/Location";

const HomePage = () => {
  return(
    <Fragment>
      <Introduction />
      <Invite />
      <Location />
      <Instagram />
    </Fragment>
  )
}

export default HomePage;


