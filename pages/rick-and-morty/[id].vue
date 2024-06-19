<script setup lang="ts">
const characterStore = useCharacterStore();
const character = ref(null as null | Character);

onMounted(() => {
  character.value = characterStore.character;
});
</script>

<template>
  <article>
    <header
      class="flex align-center justify-center border-b border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
    >
      <h1 class="text-xl">Rick And Morty Characters</h1>
      <nuxt-link to="/rick-and-morty" class="ml-auto">
        Go back to the Rick and morty page
      </nuxt-link>
    </header>
    <main>
      <div class="max-w-3xl mx-auto p-4">
        <RickAndMortyCharacterDetails v-if="character" :character="character" />
      </div>
    </main>
  </article>
</template>
