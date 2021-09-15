import { Fragment } from "react";
import Link from 'next/link'

// our-domain.com/news/
export default function Home() {
    // Using anchor tag sends a request to the server. and the state is lost..
    // Link prevents event.defaultAction()
    return (
     <Fragment>
         <Link href="/news/1"> Details 1</Link>
     </Fragment>
    )
  }
  