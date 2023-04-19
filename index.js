const randFc=(n)=>Math.floor((Math.random()*n))
let nr1
let nr2
let timeleft
let timer
let result//true vagy false
let bar

const start=()=>{
    bar=240
    result=false
    if(timer) clearTimeout(timer)
    document.querySelector('.ok').style.visibility="hidden"
    document.querySelector('.bad').style.visibility="hidden"
    document.querySelector('input').disabled=false
    document.querySelector('input').value=''
    
    nr1=randFc(100)
    nr2=randFc(100)
    document.getElementById('nr1').innerHTML=nr1
    document.getElementById('nr2').innerHTML=nr2
    countDown()
}

function countDown(){
    timeleft=5
    timer=setInterval(()=>{
        
        timeleft--
        bar-=40
        document.querySelector('.time').style.width=bar+"px "
        if(timeleft>=0 && result){
            clearInterval(timer)
            document.querySelector('.ok').style.visibility="visible"
            document.querySelector('input').disabled=true
        }
        if(timeleft<0){
            document.querySelector('input').disabled=true
            document.querySelector('.bad').style.visibility="visible"
            clearInterval(timer)
        }
        
    },1000)

}

const check=(domObj)=>{
    console.log(domObj.value)
    if(domObj.value==nr1+nr2){
        result=true
    }
}