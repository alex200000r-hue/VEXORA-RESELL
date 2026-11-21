const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function makeDemoCode(kind){
  const length = kind === "paysafe" ? 16 : 20;
  let value = "";
  for(let i=0;i<length;i++){
    if(kind === "paysafe" && i>0 && i%4===0) value += "-";
    value += alphabet[Math.floor(Math.random()*alphabet.length)];
  }
  return "DEMO-" + value;
}
document.querySelectorAll("button[data-kind]").forEach(button=>{
  button.addEventListener("click",()=>{
    const output = button.parentElement.querySelector("output");
    output.textContent = makeDemoCode(button.dataset.kind) + " · DEMO ONLY";
    button.textContent = "Generează alt cod ↗";
  });
});
