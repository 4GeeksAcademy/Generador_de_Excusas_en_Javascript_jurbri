function generarExcusa() {
  // Arreglos de palabras para la excusa
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Generar un índice aleatorio para cada array
  const whoRandom = Math.floor(Math.random() * who.length);
  const actionRandom = Math.floor(Math.random() * action.length);
  const whatRandom = Math.floor(Math.random() * what.length);
  const whenRandom = Math.floor(Math.random() * when.length);

  // Concatenar las palabras para formar la excusa
  const excusa = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}.`;

  return excusa;
}

// Función para mostrar la excusa en el HTML
function mostrarExcusa() {
  // Obtener el elemento con el ID "excuse"
  let excuseElement = document.getElementById("excuse");

  // Generar una excusa aleatoria
  let excuse = generarExcusa();

  // Establecer la excusa como el contenido HTML del elemento
  excuseElement.innerHTML = excuse;
}

window.onload = mostrarExcusa();
