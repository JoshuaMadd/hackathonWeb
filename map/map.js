let currentlocation = localStorage.getItem("currentlocation");
let wantedlocation = localStorage.getItem("wantedlocation");
console.log(currentlocation);
console.log(wantedlocation);
const setup = () => {
    loadFloorChange();
    initNodes();
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
}

const initNodes = () =>{
    let nodes = [
        {id:'C', x:'260px', y:'1355px', floor:'0'},
        {id:'7', x:'450px', y:'1360px', floor:'0'},
        {id:'6', x:'450px', y:'1084px', floor:'0'},
        {id:'8', x:'421px', y:'1084px', floor:'0'},
        {id:'17', x:'893px', y:'1084px', floor:'1'},
        {id:'61.09', x:'1080px', y:'1130px', floor:'1'}

    ]
    let node = nodes[0];
    let div = document.createElement("div");
    div.style.backgroundColor = "red"
    div.style.position = "absolute"
    div.style.width = "10px"
    div.style.height = "10px"
    div.style.left = "315px"
    div.style.top = "1355px"
    document.getElementsByTagName('body')[0].appendChild(div)
}






window.addEventListener("load",setup);