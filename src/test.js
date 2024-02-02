const InputHandler = require('./inputHandler');
const QuestSystem = require('./questSystem');

const inputHandler = new InputHandler();
const questSystem = new QuestSystem();

console.log('Quests:', questSystem.getQuests());

document.addEventListener('keydown', () => {
  console.log('Key Pressed:', inputHandler.keyPressed);
});

document.addEventListener('click', () => {
  console.log('Mouse Clicked:', inputHandler.mouseClicked);
});
