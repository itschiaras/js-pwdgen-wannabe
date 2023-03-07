const nomeUtente = prompt('Inserisci il tuo nome');
const cognomeUtente = prompt('Inserisci il tuo cognome');
const favcolor = prompt('Inserisci il tuo colore preferito');
const number = 21;

document.getElementById('password').innerHTML = `
<h1> La tua password sarà: ${nomeUtente}${cognomeUtente}${favcolor}${number} </h1>
`;