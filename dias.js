let nombreMeses = ["Enero","Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let hoy = new Date();
let diaActual = hoy.getDate();
let mesActual = hoy.getMonth();
let yearActual = hoy.getFullYear();

let dates = document.getElementById("dias");
let month = document.getElementById("mes");
let year = document.getElementById("year");

let mesAnterior = document.getElementById("mes_anterior");
let mesSiguiente = document.getElementById("mes_siguiente");

mesAnterior.addEventListener('click', ()=>monthBefore());
mesSiguiente.addEventListener('click', ()=>nextMonth());

month.textContent = nombreMeses[mesActual];
year.textContent = yearActual.toString();

escribirMes(mesActual);

function escribirMes(month){
    for(let i = diaUno(); i > 0; i--){
        dates.innerHTML += `<div class="dia_item ultimos_dias">
        ${diasTotales(mesActual-1)-(i-1)}
        </div>`;
    }

    for (let i = 1; i<=diasTotales(month); i++){
        if(i=== diaActual && mesActual == 9){
            dates.innerHTML += `<div class="dia_item hoy">${i}</div>`;
        }else{
            dates.innerHTML += `<div class="dia_item">${i}</div>`;

        }
        
    }
    
}

function diasTotales(month){
    if(month === -1 ) month == 11;
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        return 31;
    }else if (month == 3 || month == 5 || month == 8 || month == 10){
        return 30;
    }else{
        return Bisiesto() ? 29:28;
    }
}

function Bisiesto(){

    return ((yearActual % 100 !== 0 && yearActual % 4 === 0)|| (yearActual % 400 === 0))

}

function diaUno(){
    let inicio = new Date(yearActual, mesActual, 1);
    return ((inicio.getDay()-1) === -1) ? 6 : inicio.getDay()-1;

}

function monthBefore(){
    if(mesActual !== 0){
        mesActual --;
    }else{
        mesActual == 11;
        yearActual --
    }
    nuevaFecha();
}

function nextMonth(){
    if(mesActual !== 11){
        mesActual ++
    }else{
        mesActual = 0
        yearActual ++
    }
    nuevaFecha(); 
}

function nuevaFecha(){
    hoy.setFullYear(yearActual, mesActual, diaActual)
    month.textContent = nombreMeses[mesActual];
    year.textContent = yearActual.toString();
    dates.textContent= '';
    escribirMes(mesActual);
}