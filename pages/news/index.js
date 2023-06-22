import { Fragment } from "react";
import Link from "next/link";

function News() {
  return (
    <Fragment>
      <h1>news</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default News;
