<script setup lang="ts">

const props = defineProps<{ currentPage: number, totalPages: number }>();
const emit = defineEmits(['fetchMoreCharacters']);

const fetchPrevious = () => {
  if (props.currentPage > 1) {
    emit('fetchMoreCharacters', props.currentPage - 1);
  }
};

const fetchNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('fetchMoreCharacters', props.currentPage + 1);
  }
};
</script>

<template>
  <div v-if="totalPages > 1" class="flex items-center justify-between p-4 max-w-md mx-auto mt-auto space-x-4">
    <button
      class="px-4 py-2 rounded-lg bg-blue-500 text-white w-24 text-center"
      :disabled="currentPage === 1"
      @click="fetchPrevious"
    >
      Previous
    </button>
    <span class="text-lg">Page {{ currentPage }}</span>
    <button
      class="px-4 py-2 rounded-lg bg-blue-500 text-white w-24 text-center"
      :disabled="currentPage === totalPages"
      @click="fetchNext"
    >
      Next
    </button>
  </div>
</template>
