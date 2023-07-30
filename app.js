const d=document
const w=window
speechReader=()=>{
    const speechSelect=d.getElementById("speech-select")
    const speechTextarea=d.getElementById("speech-text")
    const speechBtn=d.getElementById("speech-btn")
    speechMessage=new SpeechSynthesisUtterance()

    let voices=[ ]
    d.addEventListener("DOMContentLoaded",e=>{
w.speechSynthesis.addEventListener("voiceschanged",()=>{
voices=w.speechSynthesis.getVoices()

voices.forEach((voice)=>{
    const option=d.createElement("option")
option.value=voice.name
option.textContent=`${voice.name}***${voice.lang}`
speechSelect.appendChild(option)

})




})
    })

    d.addEventListener("change",(e)=>{


if(e.target===speechSelect){

    speechMessage.voice=voices.find(
(voice)=>voice.name===e.target.value

    )
}




    })




    d.addEventListener("click",(e)=>{
if(e.target===speechBtn){

    speechMessage.text=speechTextarea.value
    w.speechSynthesis.speak(speechMessage)
}
    })
}

speechReader()