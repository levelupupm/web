!function () {

    let fecha = new Date();
    fecha.setHours(0);
    fecha.setMinutes(0);
    fecha.setSeconds(0);
    fecha.setMilliseconds(0);
    let fechaInicio = new Date(fecha.getTime());
    fecha.setHours(23);
    fecha.setMinutes(59);
    fecha.setSeconds(59);
    fecha.setMilliseconds(999);
    let fechaFin = new Date(fecha.getTime());


    const req = new XMLHttpRequest();
    req.open('GET','https://www.googleapis.com/calendar/v3/calendars/levelup.upm@gmail.com/events?timeMax='+fechaFin.toISOString()+'&timeMin='+fechaInicio.toISOString()+'&key=AIzaSyAzNooYgoY7IjmBTrtXqO2et_U2pRopTn8');
    req.onreadystatechange = function (event) {
        if (req.readyState === 4) {
            if(req.status === 200) {
                let response = JSON.parse(event.target.responseText);
                console.log(response);
                response.items.forEach(elemento => {
                    let fIni = new Date(elemento.start.dateTime);
                    let fFin = new Date(elemento.end.dateTime);
                    let el = document.createElement('div');
                    el.classList.add("evento");
                    el.innerHTML = "<div class='container-horas'><p>"+fIni.getHours()+":"+fIni.getMinutes()+"</p><p class='center'>-</p><p>"+fFin.getHours()+":"+fFin.getMinutes()+"</p></div><div class='nombre-evento'>"+elemento.summary+"</div>"
                    document.querySelector("#calendar-day").appendChild(el);
                });
            }
        }
    }
    req.send(null);
}();