const button = document.getElementById("click");
const Input = document.getElementById("msg");
const res= document.getElementById("res");
async function getData(messge) {
    const p = await fetch(
        `https://api.paxsenix.biz.id/ai/gemini?text=${messge}`
    );
    return await p.json()

    
}
button.addEventListener("click",async () => {
    const value = Input.value;
    const result = await getData(value);
    res.innerHTML =`${result.message}`
   

})