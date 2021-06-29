let win = document.getElementById('win')
let startmenu = document.getElementsByClassName('startmenu')[0];
let edge = document.getElementById('mEdge');
let edgePreview = document.getElementsByClassName('edgePreview')[0]
win.addEventListener('click', () => {
    console.log('clicked');
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px";
    } else {
        startmenu.style.bottom = "50px"
    }
})
edge.addEventListener('click', ()=>{

    document.onclick= function (e){
        if(e.target.id !== 'mEdge')
        {
            edgePreview.style.display = "none"
        }
        else{
            edgePreview.style.display = "block"
            startmenu.style.bottom = "-655px";

        }
    }
})