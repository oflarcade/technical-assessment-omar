<script setup lang="ts">
const props = defineProps<{
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  };
}>();
</script>

<template>
  <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">
    <header class="p-2 flex items-center bg-pink-950 border-b border-b-4 border-pink-600">
      <h2 class="font-bold text-lg capitalize text-pink-700">
        {{ character.name }}
      </h2>
    </header>
    <div class="p-4">
      <p class="text-sm">Name: {{ character.name }}</p>
      <p class="text-sm">Species: {{ character.species }}</p>
      <p class="text-sm">Status: {{ character.status }}</p>
      <p class="text-sm">Type: {{ character.type }}</p>
      <p class="text-sm">Gender: {{ character.gender }}</p>
      <p class="text-sm">Origin: {{ character.origin.name }}</p>
      <p class="text-sm">Location: {{ character.location.name }}</p>
      <p class="text-sm">
        Created:
        {{
          new Date(character.created).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </p>
    </div>
    <div class="h-[400px]">
      <RickAndMortyCharacterImage
        :character="character"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
