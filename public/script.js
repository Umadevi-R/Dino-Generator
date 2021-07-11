console.log('Script.js Loaded')
document.querySelector('#btnLoad').addEventListener('click',()=>{
    getDinoName();
    getDinoImg();
});

async function getDinoName(){
    const res=await fetch('/dinoname');
    const data=await res.json();
    let dinoName=data[0].join(' ');
    console.log(dinoName);
    document.querySelector('#dinoName').textContent=dinoName;
}

async function getDinoImg(){
    const res=await fetch('/dinoimage');
    const data=await res.json();
    let dinoImg=data.value[Math.floor(Math.random()*data.value.length)];
    let dinoImgUrl=dinoImg.thumbnailUrl;
    let dinoImgAlt=dinoImg.name;
    console.log(dinoImg);
    if(document.querySelector('#dinoImg')!=null)
    {
        document.querySelector('#dinoImg').remove();
    }
    var img = document.createElement('img');
    img.id='dinoImg'
    img.src = dinoImgUrl;
    img.alt = dinoImgAlt;
    document.querySelector('body').appendChild(img);
}