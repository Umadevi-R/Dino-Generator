console.log('Script.js Loaded')
document.querySelector('#btnLoad').addEventListener('click',()=>{
    if(document.querySelector('#dinoImg')!=null)
    {
        document.querySelector('#dinoImg').remove();
    }
    if(document.querySelector('#dinoName')!=null)
    {
        document.querySelector('#dinoName').remove();
    }
    getDinoName();
    getDinoImg();
});

async function getDinoName(){
    const res=await fetch('/dinoname');
    const data=await res.json();
    let dinoName=data[0].join(' ');
    console.log(dinoName);
    
    var div = document.createElement('div');
    div.id='dinoName'
    div.textContent=dinoName;
    document.querySelector('.generator').appendChild(div);
}

async function getDinoImg(){
    const res=await fetch('/dinoimage');
    const data=await res.json();
    let dinoImg=data.value[Math.floor(Math.random()*data.value.length)];
    let dinoImgUrl=dinoImg.thumbnailUrl;
    let dinoImgAlt=dinoImg.name;
    console.log(dinoImg);
    var img = document.createElement('img');
    img.id='dinoImg'
    img.src = dinoImgUrl;
    img.alt = dinoImgAlt;
    document.querySelector('.generator').appendChild(img);
}