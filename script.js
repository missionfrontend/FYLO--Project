const themeToggle =  document.getElementById('theme-toggle');
const themeToggledark = document.getElementById('theme-toggle-dark-icon');
const themeTogglelight =  document.getElementById('theme-toggle-light-icon')


if(localStorage.getItem('color-theme')==='dark' || (!('color-theme' in localStorage)) && window.matchMedia('(prefers-color-scheme:dark)').matches) {
    themeTogglelight.classList.remove('hidden')
 }else{
     themeToggledark.classList.remove('hidden')
 }

themeToggle.addEventListener('click',function(){
    
    themeTogglelight.classList.toggle('hidden')
    themeToggledark.classList.toggle('hidden')

    if(localStorage.getItem(('color-theme')==='dark')){
        document.documentElement.classList.add('light')
        localStorage.setItem('color-theme','light')
    }

    if(localStorage.getItem(('color-theme')==='light')){
        document,documentElement.classList.add('dark')
        localStorage.setItem('color-theme','light')
    }
})

