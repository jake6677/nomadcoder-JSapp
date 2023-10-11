const fontFamily = document.querySelector("#font-family")
const saveBtn = document.getElementById("save")
const textInput = document.querySelector('#text');
const fileInput = document.querySelector("#file");
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraseBtn = document.querySelector("#eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.querySelector('#color');
const linewidth = document.querySelector("#line-width");
const fontSize = document.querySelector("#font-size");
const fontStroke = document.querySelector("#font-stroke")
const drawShape = document.querySelector("#draw-shape")
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = linewidth.value;
ctx.lineCap = "round";
ctx.fillStyle = "black";
let isPainting = false;
let isFilling = false;
let isErasing = false;
let isFontStroking = false;
let isDrawShapping = false;
let font_Family = 'serif';
let font_size = 50;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;



function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX,event.offsetY)
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX,event.offsetY);
}

function startPainting(evnet){
    isPainting = true;
}

function cancelPainting(evnet){
    isPainting = false;
    if(isDrawShapping) {
        ctx.fill();
    }
    ctx.beginPath();
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorChoose(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeChange(event){
    if (isFilling) {
        isFilling = false;
        modeBtn.innerHTML = "Line-Fill"
    } else {
        isFilling = true;
        modeBtn.innerHTML = "Line-Draw"
    }
}

function onCanvasClick(event){
    if (isFilling) {
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}

function onDestroy(event){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onEraserClick(event){
    isFilling = false;
    modeBtn.innerHTML = "Line-Fill"
    ctx.strokeStyle = "white";

}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoubleClick(event) {
    const text = textInput.value;
    if (text === "") {
        return
    }
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = `${font_size}px ${font_Family}`
    if (isFontStroking) {
        ctx.strokeText(text, event.offsetX, event.offsetY);
    } else{
        ctx.fillText(text, event.offsetX, event.offsetY);
    }
    ctx.restore();
    
}

function onSaveClick(event){
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = url;
    a.download = "myDrawing.png"
    a.click();
}

function onFontChange(event){
    font_Family = event.target.value
}

function onFontSizeChange(event){
    console.log(event.target.value);
    font_size = event.target.value;
}
function onFontStrokeChange(event){
    isFontStroking = event.target.checked
}
function onDrawShapeChange(event){
    isDrawShapping = event.target.checked
}

ctx.save();
ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
ctx.restore(); //화면을 흰색으로 먼저 채우는 코드

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //캔버스 밖으로나갈때 발생하는 이벤트
//마우스를 누르고 때는것 : 클릭, 마우스를 누르는것 : mousedown, 마우스에서 떼는것 : mouseup
canvas.addEventListener("click", onCanvasClick);

linewidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(element => {
    element.addEventListener("click", onColorChoose)    
});
modeBtn.addEventListener("click", onModeChange);
destroyBtn.addEventListener("click", onDestroy);
eraseBtn.addEventListener("click",onEraserClick);
fileInput.addEventListener("change",onFileChange);
saveBtn.addEventListener("click", onSaveClick);
fontFamily.addEventListener("change", onFontChange);
fontSize.addEventListener("change", onFontSizeChange);
fontStroke.addEventListener("change", onFontStrokeChange)
drawShape.addEventListener("change", onDrawShapeChange)