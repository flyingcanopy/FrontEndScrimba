import React from "react"
import {withPointlessHOC} from "./withPointlessHOC"
import {withExtraPropAdded} from "./withExtraPropAdded"

function App(props) {
    console.log(props)
    return (
        <div>Hello world!</div>
    )
}

const ExtraPropComponent = withExtraPropAdded(App)
export default ExtraPropComponent