let currentlocation = localStorage.getItem("currentlocation");
let wantedlocation = localStorage.getItem("wantedlocation");
console.log(currentlocation);
console.log(wantedlocation);
const setup = () => {
    loadFloorChange();
    initNodes();
    lines();
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
        {id:'C', x:'320px', y:'1355px', floor:'0'},
        {id:'7', x:'450px', y:'1360px', floor:'0'},
        {id:'6', x:'450px', y:'1084px', floor:'0'},
        {id:'8', x:'990px', y:'1084px', floor:'0'},
        {id:'T600', x:'1100px', y:'1084px', floor:'0'},
        {id:'T601', x:'1100px', y:'1084px', floor:'1'},
        {id:'17', x:'1250px', y:'1084px', floor:'1'},
        {id:'61.09', x:'1400px', y:'1130px', floor:'1'}

    ]
    nodes.forEach(node => {
        let div = document.createElement("div");
        div.style.backgroundColor = "red"
        if(node.floor == 1) {
            div.style.backgroundColor = "lime"
        }
        div.style.position = "absolute"
        div.style.width = "10px"
        div.style.height = "10px"
        div.style.left = node.x
        div.style.top = node.y
        document.getElementsByTagName('body')[0].appendChild(div)
    });
}

const lines = () =>{
    var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    newLine.setAttribute('id','line1');
    newLine.setAttribute('x1', node[0].x);
    newLine.setAttribute('y1', node[0].y);
    newLine.setAttribute('x2',node[1].x);
    newLine.setAttribute('y2',node[1].y);
    newLine.setAttribute("stroke", "red")
    $("svg").append(newLine);
}

window.addEventListener("load",setup);