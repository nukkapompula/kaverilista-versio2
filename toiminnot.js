let lomake = document.forms["kysely"];
let lista = document.getElementById("nimiLista");

lomake.addEventListener("submit", uusiKaveri);

const kaverit = [];
let indeksi = 0;

function uusiKaveri(event){
    event.preventDefault()
    let nimi = document.querySelector('input[type="text"]').value;
    if(nimi.length < 1){
        window.alert("Täytä tekstikenttä kaverisi nimellä.");
        return;
    }

    if (indeksi > 9) {
        for(let apuri=0; apuri<10; apuri++){
            let poistettava = document.getElementById("listaEsine");
            lista.removeChild(poistettava);
        }
        indeksi = 0;
        kaverit.length = 0;
    }

    kaverit.push(nimi);
    document.querySelector('input[type="text"]').value = "";
    indeksi += 1;
    console.log(`kaveri nro ${kaverit.length} lisätty, nimi: ${nimi}`)

    if (indeksi > 9) {
        console.log("NYT ON 10 TÄYNNÄ!!");
        for(let valitsin=0; valitsin<kaverit.length; valitsin++){
            let uusiElementti = document.createElement("li");
            let uusiElementtiNimi = document.createTextNode(kaverit[valitsin]);
            uusiElementti.id = "listaEsine";
            uusiElementti.appendChild(uusiElementtiNimi);
            document.querySelector("#nimiLista").appendChild(uusiElementti);
        }
    } else {
        console.log("puuttuu immeisiä");
    }
}
