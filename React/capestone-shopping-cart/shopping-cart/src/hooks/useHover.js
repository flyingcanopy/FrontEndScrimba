import { useEffect, useRef, useState } from "react";
function useHover() {
    // Challenge:
    // Keep track of hover state in this hook
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false);
    const enter = ()=>{
        setHovered(true)
    }
    const exit = ()=>{
        setHovered(false)
    }

    useEffect(()=>{
        ref.current.addEventListener("mouseenter",enter)
        ref.current.addEventListener("mouseleave",exit)

        return ()=>{
            if(ref.current) ref.current.removeEventListener("mouseenter", enter)
            if(ref.current) ref.current.removeEventListener("mouseleave", exit)
        }
    },[])

    return [hovered,ref]

}

export default useHover