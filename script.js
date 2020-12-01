document.addEventListener('DOMContentLoaded',()=>{
  const shareArea =document.querySelector('.share-area')
  const shareBtn = document.querySelector('.share-area > button')
  shareBtn.addEventListener("focus",(e)=>{
    shareArea.classList.add("opened")
  })
  shareBtn.addEventListener("focusout",(e)=>{
    shareArea.classList.remove("opened")
  })
})