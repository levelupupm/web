!function (){
    document.querySelector("h1").addEventListener('mousedown', empezarDrag);
    document.querySelector("#calendar-day").addEventListener('mousedown', empezarDrag);
    function empezarDrag(event) {
        let x = event.clientX;
        let y = event.clientY;
        let transform  = event.target.style.transform.replace("translate(","").replace(")","").replaceAll("px","");
        if(transform !== '') {
            transform = transform.split(",");
            transform[0] = parseInt(transform[0]);
            transform[1] = parseInt(transform[1]);
            x -= transform[0];
            y -= transform[1];
        }
        event.target.addEventListener('mousemove',moviendo);
        function moviendo(event){
            event.target.style.transform = "translate("+(event.clientX - x)+"px,"+(event.clientY - y)+"px)";
        }
        event.target.addEventListener('mouseup',stop);
        function stop(){
            event.target.removeEventListener('mousemove',moviendo);
            event.target.removeEventListener('mouseup',stop);
        }
    }
}();