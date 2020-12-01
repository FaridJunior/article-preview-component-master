document.addEventListener('DOMContentLoaded',()=>{
  const shareArea =document.querySelector('.share-area')
  const shareBtn = document.querySelector('.share-area > button')
  shareBtn.addEventListener("click",(e)=>{
    shareArea.classList.toggle("opened")
  })
  shareBtn.addEventListener("focusout",(e)=>{
    shareArea.classList.remove("opened")
  })
})