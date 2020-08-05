const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img'),          
          bigImageWrap = document.createElement('div')

    imgPopup.classList.add('popup')   
    
    imgPopup.style.justifyContent = 'center'
    imgPopup.style.alignItems = 'center'
    imgPopup.style.display = 'none'

   bigImageWrap.style.flex = '0 0 33.33%'
   bigImageWrap.style.overflow = 'hidden'
   bigImageWrap.style.position = 'relative'
   bigImageWrap.style.width = '70%'
   bigImageWrap.style.minHeight = '80%'
   
   bigImage.style.width = '100%'
   bigImage.style.height = '100%'
   bigImage.style.objectFit = 'cover'
   bigImage.style.position = 'absolute'
   bigImage.style.top = '0'
   bigImage.style.left = '0'

    workSection.appendChild(imgPopup)
    imgPopup.appendChild(bigImageWrap)
    bigImageWrap.appendChild(bigImage)
    
    workSection.addEventListener('click', (e) => {
        e.preventDefault()
        let target = e.target

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex'
            const path = target.parentNode.getAttribute('href')
            bigImage.setAttribute('src', path)
            document.body.style.overflow = "hidden"
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none'
            document.body.style.overflow = ""
        }
    })
}

export default images