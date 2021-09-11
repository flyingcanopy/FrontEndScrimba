import React, { useEffect, useState } from "react";
/*
1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
    a. Have this function also console.log something so we know it's running correctly
    b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
2. Make it so clicking the heart icon on any given image runs this method
*/
/*
Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

1. Add the `cartItems` state to context. (Array)
2. Add function to add an image to the cart. (Takes the full image object as parameter)
3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)


    # Challenge

    Change the plus icon to a full shopping cart icon when an image is already in the cart. This should display whether the image is being hovered or not (like the favorite icon).

    Icon to use when item already in cart:
    <i className="ri-shopping-cart-fill cart"></i>

    Hints: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        
    https://stackoverflow.com/a/8217584
*/
const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems,setCartItems] = useState([])
  const toggleFavorite = (id)=>{
      console.log("in toggleFav" +id)
      setPhotos((prevPhotos)=>{
            return  prevPhotos.map((photo)=>{
                if(photo.id===id){
                    console.log(photo.isFavorite)
                    console.log(!photo.isFavorite)
                    return {
                        ...photo,
                        isFavorite:!photo.isFavorite
                    }
                }

                return photo
            })
      })

  }
  const isPresentCart = (id) => {
      console.log("ispresent")
      return cartItems.some((img)=> img.id===id)

  }
  const removeImage = (id)=>{
    setCartItems(cartItems.filter((image)=>{
        return id !== image.id
    }))
  }
  const addFavImage = (img)=>{
      if(!isPresentCart(img.id))
        setCartItems([...cartItems,img])
      else{
        removeImage(img.id)
      }

      console.log(cartItems)
  }
  
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
  return <Context.Provider value={{photos,toggleFavorite,cartItems,addFavImage,isPresentCart,removeImage}}>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
