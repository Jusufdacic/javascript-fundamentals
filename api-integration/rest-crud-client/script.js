const baseUrl = "https://localhost:7117/api/RWA"

function prikaziSve() {
    fetch(`${baseUrl}/prikaziSve`)
    .then(res=>res.json())
    .then(data=>popuniTabelu(data))
    .catch(err=>prikaziGresku(err.message))
}

function prikaziFilter() {
    const idGrada = document.getElementById("filter").value
    fetch(`${baseUrl}/prikaziFilter?idGRada=${idGrada}`)
    .then(res=>res.json())
    .then(data=>popuniTabelu(data))
    .catch(err=>prikaziGresku(err.message))
}

function popuniTabelu(data) {
    const tijeloTabele = document.getElementById("tijeloTabele");
    tijeloTabele.innerHTML = "";
    data.forEach(red=>{
        tijeloTabele.innerHTML += `
        <tr>
            <td>${red.polaznikId}</td>
            <td>${red.ime}</td>
            <td>${red.prezime}</td>
            <td>${red.spol}</td>
            <td>${red.email}</td>
            <td>${red.adresa}</td>
            <td>${red.gradId}</td>
            <td>${red.tipPolaznikaId}</td>
            <td>${red.ustanovaId}</td>
            <td>
                <button onclick = "obrisi(${red.polaznikId})">Obrisi</button>
                <button onclick = "azuriraj(${red.polaznikId})">Azuriraj</button>
            </td>
        </tr>
        `
    })
}

function dodaj() {
    const ime = document.getElementById("ime").value
    const prezime = document.getElementById("prezime").value
    const spol = document.getElementById("spol").value
    const email = document.getElementById("email").value
    const adresa = document.getElementById("adresa").value
    const gradId = document.getElementById("idGrada").value
    const tipPolaznikaId = document.getElementById("tipPolaznika").value
    const ustanovaId = document.getElementById("idUstanove").value

    const podatak = {ime, prezime, spol, email, adresa, gradId, tipPolaznikaId, ustanovaId}

    fetch(`${baseUrl}/dodaj`, {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(podatak)
    })
    .then(()=>{alert("DODANO"); prikaziSve()})
    .catch(err=>prikaziGresku(err.message))
}

function obrisi(id) {
    fetch(`${baseUrl}/obrisi/${id}`, {method:"DELETE"})
    .then(()=>{alert("OBRISANO"); prikaziSve()})
    .catch(err=>prikaziGresku(err.message))
}

function azuriraj(id) {
    const email = prompt("Unesi mail za promjenu");
    fetch(`${baseUrl}/azuriraj?id=${id}&email=${email}`, {method:"PUT"})
    .then(()=>{alert("AZURIRANO"); prikaziSve()})
    .catch(err=>prikaziGresku(err.message))
}

function napraviDropdown() {
    fetch(`${baseUrl}/prikaziSifarnik`)
    .then(res=>res.json())
    .then(data=>{
        const selekt = document.getElementById("tipPolaznika");
        data.forEach(red=>{
            const opcija = document.createElement("option")
            opcija.value = red.tipPolaznikaId
            opcija.textContent = red.nazivTipaPolaznika
            selekt.appendChild(opcija)
        })
    })
    .catch(err=>prikaziGresku(err.message))
}

function prikaziGresku(poruka) {
    document.getElementById("porukaGreske").textContent = poruka;
}

napraviDropdown();
