
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var y_name = prompt("Quale è il tuo cognome? ");

var names = ["Banchi","Neri", "Rossi", "Verdi","Gialli"];

names.push(y_name);

names.sort();

console.log(names);

console.log("Il tuo nome si trova in posizione " + (names.indexOf(y_name) + 1));
