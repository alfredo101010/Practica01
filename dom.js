let titulo =
document.getElementsByTagName_("p");
titulo.style.color = "red";

let parrafos =
document.getElementsByTagName("p");
Array.from(parrafos).forEach((el, idx)=>{;
el.innerText= "Texto " + (id + 1);
});

let parrafos2 =
document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo parrafo</strong>";

let parrafo =
document.querySelector("parrafo");
parrafo.className = "nuevo-parrafo";

let parrafo = document.createElement("p");
parrafo.innerText = "Nuevo parrafo";

document.body.appendChild(parrafo_nuevo);

console.log(parrafo_nuevo);


//insertar elementos antes y después
let h1 = document.createElement("h1");




let parrafo = document.querySelector("p");
let padre_parrafo = parrafo.parentElement;
console.log(padre_parrafo); // body

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
    let item = document.createElement("li");
    item.innerText = Elemento ;
    lista.appendChild(item);
}

padre_parrafo.appendChild(lista);
