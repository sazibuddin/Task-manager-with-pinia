<script setup>
  import {defineProps} from 'vue';
  import { useTaskStore } from "@/stores/TaskStore";

  const taskStore = useTaskStore();

  const props = defineProps(['task']);
</script>

<template>
  <div class="task">
      <h3>{{ props.task.title }}</h3>
    <div class="icons">
        <i

            class="material-icons"
            @click="taskStore.removeTask(task.id)"
        >
          delete
        </i>
        <i
            class="material-icons"
            :class="{active: task.isComplete}"
            @click="taskStore.toggleComplete(task.id)"
        >
          check
        </i>
    </div>
  </div>
</template>