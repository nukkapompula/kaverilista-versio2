let lisaa = document.getElementById("lisää")
let jarjesta = document.getElementById("järjestä")
let lista = document.getElementById("nimiLista");

lisaa.addEventListener("click", uusiKaveri);
jarjesta.addEventListener("click", jarjestaNimet);

const kaverit = [];

function uusiKaveri(event){
    event.preventDefault()
    let nimi = document.querySelector('input[type="text"]').value;
    if(nimi.length < 1){
        return;
    }

    pyyhiLista();
    kaverit.push(nimi);
    document.querySelector('input[type="text"]').value = "";
    console.log(`kaveri nimeltä ${nimi} lisätty`)
    ladoLista();
}

function jarjestaNimet(event){
    event.preventDefault()
    pyyhiLista();
    kaverit.sort();
    ladoLista();
    console.log("kaverilista lajiteltu")
    }

function pyyhiLista(){
    for(let apuri=0; apuri<kaverit.length; apuri++){
        let poistettava = document.getElementById("listaEsine");
        lista.removeChild(poistettava);
    }
}

function ladoLista(){
    for(let indeksi=0; indeksi<kaverit.length; indeksi++){
        let uusiElementti = document.createElement("li");
        let uusiElementtiNimi = document.createTextNode(kaverit[indeksi]);
        uusiElementti.id = "listaEsine";
        uusiElementti.appendChild(uusiElementtiNimi);
        document.querySelector("#nimiLista").appendChild(uusiElementti);
    }
}