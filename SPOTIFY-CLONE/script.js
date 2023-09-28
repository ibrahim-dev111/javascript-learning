let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar')
let playgif = document.getElementById("gif")
let mastername = document.getElementById("mastername")
let songindex=0

let songitems = Array.from(document.getElementsByClassName('songitem'))
let songname = document.querySelectorAll('.songname')

let songs = [
    { currentsong:"salam-e-ishq",songpath : '1.mp3', coverpath :'1.jpg' },
    { currentsong:"let me love you",songpath : '2.mp3', coverpath :'2.jpg' },
    { currentsong:"labbo pa",songpath : '3.mp3', coverpath :'3.jpg' },
    { currentsong:"jaane na",songpath : '4.mp3', coverpath :'4.jpg' },
    { currentsong:"bhul na jana",songpath : '5.mp3', coverpath :'5.jpg' },
    { currentsong:"kabhi khushi kabhi ghum",songpath : '6.mp3', coverpath :'6.jpg' },
    { currentsong:"jaado",songpath : '7.mp3', coverpath :'7.jpg' },
    { currentsong:"sanam re",songpath : '8.mp3', coverpath :'8.jpg' },
    { currentsong:"rapp",songpath : '9.mp3', coverpath :'9.jpg' },
    { currentsong:"free style",songpath : '10.mp3', coverpath :'10.jpg' }
];

songitems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].currentsong
    
});



//event for play/pause song
masterplay.addEventListener('click',()=>{
    if (audioelement.paused || audioelement.currentTime<=0)
{
   audioelement.play()
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
   playgif.style.opacity ='1'
}
else {
    audioelement.pause()
   masterplay.classList.add('fa-play-circle');
   masterplay.classList.remove('fa-pause-circle');
   playgif.style.opacity ='0'

   Array.from(document.getElementsByClassName('miniplayer')).forEach((element)=>{
    element.classList.remove('fa-pasue-circle');
   element.classList.add('fa-play-circle');
  
   
})

}
})

// controlling progress bar

audioelement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    myprogressbar.value = progress

})

myprogressbar.addEventListener("change",()=>{
        audioelement.currentTime = myprogressbar.value*audioelement.duration/100
})

function masterplayall(){
    Array.from(document.getElementsByClassName('miniplayer')).forEach((element)=>{
         element.classList.remove('fa-pasue-circle');
        element.classList.add('fa-play-circle');
        
       
        
    })
}


Array.from(document.getElementsByClassName('miniplayer')).forEach((mini)=>{
    mini.addEventListener("click",(e)=>{
        if(e.target.classList.contains('fa-play-circle')){
        console.log(e.target);
        masterplayall()
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
         songindex = parseInt(e.target.id)
        audioelement.duration=0
        audioelement.src =`${songindex+1}.mp3`
        audioelement.play()
        mastername.innerText = songs[songindex].currentsong
        playgif.style.opacity='1'
        masterplay.classList.remove('fa-play-circle')
         masterplay.classList.add('fa-pause-circle')
        }
        else{
            if(e.target.classList.contains('fa-pause-circle')){
                audioelement.pause()
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                masterplay.classList.add('fa-play-circle')
                playgif.style.opacity='0'
            }
        }
        
    })
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songindex>=9){
        songindex =0
    }
    else{
        songindex-=1
    }
    //  songindexindex = parseInt(e.target.id)
    audioelement.duration=0
    audioelement.src =`${songindex}.mp3`
    mastername.innerText = songs[songindex].currentsong
    audioelement.play()
    playgif.style.opacity='1'
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})


document.getElementById("next").addEventListener("click",()=>{
    if(songindex>=9){
        songindex =0
    }
    else{
        songindex+=1
    }
    // songindex = parseInt(e.target.id)
    audioelement.duration=0
    audioelement.src =`${songindex}.mp3`
    mastername.innerText = songs[songindex].currentsong
    audioelement.play()
    playgif.style.opacity='1'
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})