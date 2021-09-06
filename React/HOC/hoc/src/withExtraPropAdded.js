import React from "react"

export function withExtraPropAdded(component) {
    const Component = component
    return function(props) {
        return (
            <Component anotherProp="Blah blah blah" {...props} />
        )
    }
}