<script setup lang="ts">
import { useTaskStore } from './stores/TaskStore.js'
import taskDetails from "@/components/taskDetails.vue";
import {ref} from "vue";
import TaskForm from "@/components/TaskForm.vue";
const { tasks, completedTask, completedCount, totalCount } = useTaskStore();

const filter = ref('all');

</script>

<template>
  <!-- heading -->
  <header>
    <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
    <h1>Pinia Tasks manager</h1>
  </header>

  <main>
<!--    Create task-->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'" :class="{ 'active' : filter === 'all' }">All tasks</button>
      <button @click="filter = 'completed'" :class="{ 'active' : filter === 'completed' }">Completed tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do.</p>
      <div v-for="task in tasks" :key="task.id">
          <task-details :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'completed'">
      <p> You complete {{ completedCount }} tasks.</p>
      <div v-for="task in completedTask" :key="task.id">
        <task-details :task="task" />
      </div>
    </div>
  </main>

</template>
