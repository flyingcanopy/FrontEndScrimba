import React, { useEffect, useState } from "react";

const context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    console.log("in use effect ")
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
    .then(response => response.json())
    .then(data => {
       console.log(data)
       setPhotos(data)
    })
  },[])
  console.log("render"+photos)
  return <context.Provider value={{photos}}>{props.children}</context.Provider>;
}

export { ContextProvider, context };
