const fs = require('fs');

class QuestSystem {
  constructor() {
    this.quests = [];
    this.loadQuests();
  }

  loadQuests() {
    try {
      const data = fs.readFileSync('quests.json', 'utf8');
      this.quests = JSON.parse(data);
    } catch (error) {
      console.error('Error loading quests:', error.message);
    }
  }

  getQuests() {
    return this.quests;
  }
}

module.exports = QuestSystem;
