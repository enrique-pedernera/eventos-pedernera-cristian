const dias = ['lunes', 'martes', 'miercoles','jueves','viernes','sabado','domingo'];
let select = document.createElement("select");
for (let index = 0; index < dias.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${dias[index]}</option>`;
}

select.addEventListener('change', function (e) {
    const h3 = document.createElement('h3');
    h3.innerHTML = dias[e.target.value];
    document.body.appendChild(h3);
})
document.body.appendChild(select);