export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export class TaskManager<T extends Task> {
    private tasks: T[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: T): void {
        this.tasks.push(task);
    }

    getTasks(): T[] {
        return this.tasks;
    }

    markTaskAsCompleted(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }
}
