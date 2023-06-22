<script setup>

import {ref} from "vue";
import { useTaskStore } from '../stores/TaskStore.js'

const taskStore = useTaskStore();

const newTask = ref('');
  const handleSubmit = () => {
    if(newTask.value.length > 0) {
      taskStore.addTask({
        id: Math.floor(Math.random() * 10000),
        title: newTask.value,
        isComplete: false
      })
      newTask.value = '';
    }
  }



</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
        type="text"
        placeholder="Type task to add.."
        v-model="newTask"
    >
    <button>Add</button>
  </form>
</template>