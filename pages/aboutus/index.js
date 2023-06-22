import Link from "next/link";
import { Fragment } from "react";

function AboutUs() {
  return (
    <Fragment>
      <Link href="/aboutus/1">Yash</Link>
      <br />
      <Link href="/aboutus/2">Vaibhav</Link>
      <br />
      <Link href="/aboutus/3">Suresh</Link>
      <br />
    </Fragment>
  );
}

export default AboutUs;
