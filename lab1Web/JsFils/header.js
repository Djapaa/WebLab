let lastScroll = 0
const defaultOffset =0
const header = document.querySelector('.header')

const scrollPosition =()=>window.pageYOffset||document.documentElement.scrollTop
const containHide=()=>header.classList.contains('hide')

window.addEventListener('scroll',()=>{
    if(scrollPosition()>lastScroll && !containHide())
    {
        header.classList.add('hide')
        console.log('down')
    }
    else if(scrollPosition() < lastScroll && containHide())
    {
        console.log('up')
        header.classList.remove('hide')
    }
    
    lastScroll = scrollPosition()

})

