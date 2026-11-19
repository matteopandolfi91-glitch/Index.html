(async()=>{
 const id=Number(document.body.dataset.exercise);
 const frame=document.getElementById('exercise');
 const status=document.getElementById('status');
 try{
  const response=await fetch('https://raw.githubusercontent.com/matteopandolfi91-glitch/archivio-estimo/493152ec704f8b0ed19e8ebd7b71e9e47b4fa964/index.html');
  if(!response.ok) throw new Error('Impossibile caricare il testo dell’esercizio.');
  frame.srcdoc=await response.text();
  frame.addEventListener('load',()=>{
   try{
    const doc=frame.contentDocument;
    const style=doc.createElement('style');
    style.textContent=`header,.bar,#n,footer{display:none!important}main{max-width:none!important;margin:0!important;padding:0!important}#list{margin:0!important}#list article{display:none!important}#list article:nth-child(${id}){display:block!important;min-height:calc(100vh - 1rem);margin:0!important;border:0!important;border-radius:0!important;padding:clamp(1.2rem,5vw,4rem)!important;box-shadow:none!important}body{min-height:100vh}`;
    doc.head.appendChild(style);
    status.remove();
   }catch(error){status.textContent='Non è stato possibile visualizzare l’esercizio.';}
  },{once:true});
 }catch(error){status.textContent='Non è stato possibile caricare l’esercizio. Riprova più tardi.';}
})();
