<script setup lang="ts">

const props = defineProps<{ searchTerm: string }>();
const emit = defineEmits(['update:searchTerm']);

const updateSearch = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:searchTerm', target.value);
};
</script>

<template>
  <div class="relative">
    <input
      :value="searchTerm"
      @input="updateSearch"
      type="text"
      placeholder="Search characters..."
      class="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:bg-white text-black border border-gray-300"
    />
  </div>
</template>