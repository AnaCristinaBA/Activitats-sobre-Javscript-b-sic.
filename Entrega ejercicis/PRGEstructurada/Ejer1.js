// 1. ondicionals simples amb if/else
// Escriu una funció verificaHora(hora) que prenga com a paràmetre un número entre 0 i 23. 
// Si la hora està entre 6 i 12, mostra "Bon dia"; si és entre 13 i 20, "Bona vesprada"; i 
// en qualsevol altre cas, "Bona nit".

let verificaHora(hora){
    if (hora >= 6 && hora <= 12){
        console.log("Bon día");
    } else if (hora >= 13 && hora <= 20){
        console.log("Bona vesprada");
    } else {console.log("Bona nit")}
}