import React from "react"

import withExtraHeaderAdded from "./withExtraHeaderAdded"

function App(props) {
    console.log(props)
    return (
        <div>Hello world!</div>
    )
}

const withExtraHeaderAddedHoc = withExtraHeaderAdded(App)
export default withExtraHeaderAddedHoc