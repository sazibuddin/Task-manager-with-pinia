import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',  {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: "Wake up at 5 am",
                isComplete: true
            },
            {
                id: 2,
                title: "Go for a walk",
                isComplete: false
            }
        ]
    }),
    getters: {
        completedTask() {
            return this.tasks.filter(task => task.isComplete === true);
        },
        completedCount() {
            return this.tasks.reduce((p, c) => {
                return c.isComplete ? p + 1 : p;
            }, 0)
        },
        totalCount: (state) => {
            return state?.tasks.length
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(id) {
            this.tasks =  this.tasks.filter(task => task.id !== id);
        },
        toggleComplete(id) {
            const task = this.tasks.find(task => task.id === id);
            task.isComplete = !task.isComplete;
        }
    }
})