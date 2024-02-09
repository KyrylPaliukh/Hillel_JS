class TaskManager {
  constructor() {
    this.tasks = new Map();
  }

  addTask(id, description) {
    if (this.tasks.has(id)) {
      console.error(`Task with ID ${id} already exists.`);
      return;
    }
    this.tasks.set(id, description);
    console.log(`Task with ID ${id} added successfully.`);
  }

  removeTask(id) {
    if (!this.tasks.has(id)) {
      console.error(`Task with ID ${id} does not exist.`);
      return;
    }
    this.tasks.delete(id);
    console.log(`Task with ID ${id} removed successfully.`);
  }

  findTask(id) {
    if (!this.tasks.has(id)) {
      console.error(`Task with ID ${id} not found.`);
      return;
    }
    return this.tasks.get(id);
  }

  displayTasks() {
    console.log('All tasks:');
    for (const [id, description] of this.tasks) {
      console.log(`ID: ${id}, Description: ${description}`);
    }
  }

  updateTaskDescription(id, newDescription) {
    if (!this.tasks.has(id)) {
      console.error(`Task with ID ${id} does not exist.`);
      return;
    }
    this.tasks.set(id, newDescription);
    console.log(`Description for task with ID ${id} updated successfully.`);
  }
}
const taskManager = new TaskManager();
taskManager.addTask(1, 'learning JavaScript');
taskManager.addTask(2, 'Home work');
taskManager.displayTasks();
taskManager.updateTaskDescription(1, 'Complete project');
taskManager.removeTask(2);
taskManager.displayTasks();
