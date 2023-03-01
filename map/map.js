let currentlocation = localStorage.getItem("currentlocation");
let wantedlocation = localStorage.getItem("wantedlocation");
console.log(currentlocation);
console.log(wantedlocation);
const setup = () => {
    loadFloorChange();
    initNodes();
    updateNodes();
}

const loadFloorChange = () =>{
    let opts = document.getElementsByClassName("opt");
    opts[0].addEventListener("click", changeFloor);
    opts[1].addEventListener("click", changeFloor);
    opts[2].addEventListener("click", changeFloor);
}

const changeFloor = (event) =>{
    
    let button = event.target;
    let oldButton = document.getElementsByClassName("selected")[0];
    oldButton.classList.remove("selected")
    button.classList.add("selected")

    let mapId = button.innerText - 1;
    let oldMap = document.querySelector('img[style*="display: block;"]');
    oldMap.style.display = "none";
    let selector = 'img[src*="floorplan/'+ mapId +'.png"]';
    let newMap = document.querySelector(selector);
    newMap.style.display = "block";

    updateNodes()
}

const initNodes = () =>{
    let nodes = [
        {id:'C', x:'320px', y:'1355px', floor:'0',
         instructie:'U staat nu aan de ingang van Hantal 5'},
        {id:'7', x:'450px', y:'1355px', floor:'0',
         instructie:'Betreed het gebouw en neem de eerste afslag links'},
        {id:'6', x:'450px', y:'1084px', floor:'0',
        instructie:'Sla rechtsaf en loop rechtdoor'},
        {id:'8', x:'990px', y:'1084px', floor:'0',
        instructie:'Blijf lopen tot je aan de trappen staat'},
        {id:'T600', x:'1100px', y:'1084px', floor:'0',
        instructie:'Loop de trappen op tot op de eerste verdieping'},
        {id:'T601', x:'1100px', y:'1084px', floor:'1',
        instructie:'Blijd op de eerste verdieping en loop rechtdoor tot naast de trap naar de tweede verdieping'},
        {id:'17', x:'1250px', y:'1084px', floor:'1',
        instructie:'Ga schuin rechtsaf waar je lokaal 61.09 op je rechterkant zal kunnen vinden'},
        {id:'61.09', x:'1400px', y:'1130px', floor:'1',
        instructie:'U hebt lokaal 61.09 bereikt!'}

    ]

    let lastnode = null;
    nodes.forEach(node => {
        let div = document.createElement("div");
        div.classList.add('nodeFloor'+node.floor)
        div.style.left = node.x
        div.style.top = node.y
        //div.style.outline = "5px solid black"
        document.getElementsByTagName('body')[0].appendChild(div)        
    });
}

const updateNodes = () =>{
    let currentFloor = document.getElementsByClassName("selected")[0].innerText - 1;
    let currentFloorNode = "nodeFloor" + currentFloor
    let currentFloorLine = "svgFloor" + currentFloor
    let allNodes = document.querySelectorAll('.nodeFloor0, .nodeFloor1, .nodeFloor2');
    allNodes.forEach(node => {
        if(node.classList.contains(currentFloorNode)){
            node.style.display = "block"
        } else {
          node.style.display = "none"  
        }  
    });
    let allLines = document.querySelectorAll('.svgFloor0, .svgFloor1, .svgFloor2');
    allLines.forEach(line => {
        if(line.classList.contains(currentFloorLine)){
            line.style.display = "block"
        } else {
          line.style.display = "none"  
        }  
    });
    
}






window.addEventListener("load",setup);