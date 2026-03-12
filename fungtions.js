let currenTab = "All";
const tabactive = ["bg-gray-300","border-1","text-black"];
const tabInactive = ["bg-white","border-1","text-black"];
const allContainer = document.getElementById("sob-conatiner");
const openContainer = document.getElementById("open-container");
const closedContainer = document.getElementById("closed-container");


function switchTab(tab){
    console.log("tab clicked",tab)

   const tabs = ["All", "Open", "Closed",]
   for(const t of tabs){
    let tabName = document.getElementById("tab-"+t);
if(t === tab){
    tabName.classList.remove(...tabInactive);
    tabName.classList.add(...tabactive);
}
else{
    tabName.classList.add(...tabInactive);
    tabName.classList.remove(...tabactive);
}
       
   }
}

const loadData = () =>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
   .then((res) => res.json())
   .then((json) => displayCard(json.data)
   )
};
const displayCard = (cards) =>
{
const allContainer = document.getElementById("card-all");
allContainer.innerHTML="";
for(let card of cards) {  
    console.log(card);
    
    
    const cardDiv= document.createElement("div")
    cardDiv.innerHTML = `  <div class="shadow-xl ">
        <div id="bord" class="flex justify-between items-center w-11/12 mx-auto">
            <button class="btn bg-[#00A96E30] rounded-full"><img src="/assets/Open-Status.png" alt=""></button>
            <button class="btn bg-[#F59E0B30] rounded-full">${card.priority}</button>
        </div>
             <div><h2 class="font-bold text-xl w-11/12 mx-auto ml-[30px] mt-3">Fix navigation menu on mobile devices   </h2>
             <P class="w-11/12 mx-auto ml-[30px]">${card.description}</P>
</div> 
           <div class="ml-[50px] space-x-2 mt-2.5 pb-4">
            <button class=""><img src="/assets/Labels.png" alt=""></button>
            <button class=""><img src="/assets/Labels (1).png" alt=""></button>
           </div>

          <div class="border-t-2"><div class="w-full h-[72px] mt-6 ml-[60px] text-[#64748B] ">
            <p>#1
by john_doe</p>
<p>1/15/2024</p>
          </div></div> 
    </div>`

    allContainer.append(cardDiv)
};

};

loadData()
