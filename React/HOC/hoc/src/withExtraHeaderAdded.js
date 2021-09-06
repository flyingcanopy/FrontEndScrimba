import React from "react"


function withExtraHeaderAdded(component){
    const Component = component
    return function(){
        return (<div>
        <Component/>
        <h1>Added header</h1>
        </div>)

    }
}
export default withExtraHeaderAdded