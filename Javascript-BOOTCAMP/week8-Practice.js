/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function infoCard(
  userName = "unknown",
  age = "unknown",
  hourRate = 0,
  display = true,
  ...skills
) {
  document.write(`<div>`);

  document.write(`<h1>Hola, ${userName}</h1>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: ${hourRate}</p>`);

  if (display === true) {
    if (skills.length > 0) {
      document.write(
        `<p>Skills: ${skills.join(" | ")}</p>`
      );
    } else {
      document.write(
        `<p>Skills: No Skills Aquired yet!</p>`
      );
    }
  } else {
    document.write(`<p>Skills is Hidden</p>`);
  }

  document.write(`</div>`);
}

infoCard(
  "Muhammed",
  26,
  10,
  true,
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Sass",
  "BootStrap"
);
