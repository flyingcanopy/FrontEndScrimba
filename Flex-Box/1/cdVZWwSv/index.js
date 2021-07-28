
let container = document.getElementById("container")
function fetchPhotos() {
  let photoUrl = []
  for (let count = 1; count <= 50; count++) {
    photoUrl.push(`https://picsum.photos/id/${count}/100/100`);
  }
  //30 items
  return photoUrl

}

console.log(container)
fetchPhotos().forEach((item)=>{
    container.innerHTML += `<div class=image-fit><img class="image"src=${item}></div>`
    
})
let images=document.getElementsByClassName("image")
let imageObjects = Array.from(images)
console.log(images)
console.log(imageObjects)
imageObjects.forEach((image)=>{
    image.addEventListener("click",(event)=>{
        let selectedPhotoSrc = `${image.src.substr(0, image.src.length - 7)}200/200`
        let selectedPhoto = document.getElementById("special-image")
        selectedPhoto.src = selectedPhotoSrc
        selectedPhoto.style.display = "inline"
    })
})


