<script setup>
  import {defineProps} from 'vue';
  const props = defineProps(['task']);
</script>

<template>
  <div class="task">
      <h3>{{ props.task.title }}</h3>
    <div class="icons">
        <i class="material-icons">delete</i>
        <i class="material-icons">visibility</i>
        <i class="material-icons">check</i>
    </div>
  </div>
</template>