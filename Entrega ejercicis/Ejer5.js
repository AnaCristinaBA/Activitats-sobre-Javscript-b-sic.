// 5. JSON bàsic
// Defineix un objecte JSON amb informació bàsica sobre un llibre (títol, autor i any). Mostra el títol 
// del llibre utilitzant l'objecte JSON i després afegeix una nova propietat editorial.

let InfoLlibre = {
    "titol":"El Quijote",
    "autor":"Miguel de Cervantes",
    "any":1605
};

console.log(InfoLlibre.titol);

InfoLlibre.editorial = "Planeta";