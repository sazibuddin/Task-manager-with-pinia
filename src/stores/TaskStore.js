import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',  {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: "buy some milk",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam.',
                isComplete: false
            },
            {
                id: 2,
                title: "play Gloomhaven",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam.',
                isComplete: true
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
        }
    }
})