import { Task, TaskManager } from "./task.js";

const task1: Task = { id: 1, title: "Навчитись TypeScript", description: "Процесс Навчання", completed: false };
const task2: Task = { id: 2, title: "Білд таск менеджера", description: "Створення таск менеджера з GUI", completed: false };

const taskManager = new TaskManager<Task>();
taskManager.addTask(task1);
taskManager.addTask(task2);

console.log("Статус до виконання:");
console.log(taskManager.getTasks());

taskManager.markTaskAsCompleted(1);

console.log("Статус після виконання:");
console.log(taskManager.getTasks());
