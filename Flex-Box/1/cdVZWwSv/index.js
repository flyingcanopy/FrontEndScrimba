
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




