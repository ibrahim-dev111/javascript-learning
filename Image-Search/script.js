const acesskey = "C_C3FF_nHr_ENjsqfwU8OVu_oBdR5DJuopUPycM5MjA"

const formEL = document.getElementById("form")
const inputEL= document.getElementById("search-input")
const searchButton =document.getElementById("button")
const imagesresult = document.getElementById("images")
const imgContainer = document.getElementById("image-container")
const showMorebtn =  document.getElementById("show-more")

let inputdata = ''
let page = 1

async function searchImages(){
    inputdata=inputEL.value
    const ur1 = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acesskey}`
    const response = await fetch(ur1)
    const data = await response.json()

    const results = data.results

    if(page === 1){
        imgContainer.innerHTML=''
    }

    results.map((result)=>{
        const imagewrapper = document.createElement('div')
        imagewrapper.classList.add('images')

        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt=result.alt_description
        
        const imagelink = document.createElement('a')
        imagelink.href=result.links.html
        imagelink.target="_blank"
        imagelink.textContent = result.alt_description

        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imagelink)
        imgContainer.appendChild(imagewrapper)
    })
    page++

    if (page>1){
        showMorebtn.style.display='block'
    }
}

formEL.addEventListener('submit',(event)=>{
    event.preventDefault()
    page=1
    searchImages()

})

showMorebtn.addEventListener("click",()=>{
    searchImages()
})