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

const characterStore = useCharacterStore();
const character = ref<Character>(props.character);
const onClick = () => {
  characterStore.setCharacter(props.character);
};
</script>

<template>
  <nuxt-link :to="`/rick-and-morty/${character.id}`" @click="onClick">
    <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">
      <header
        class="p-2 flex items-center bg-pink-950 border-b border-b-4 border-pink-600"
      >
        <h2 class="font-bold text-lg capitalize text-pink-700">
          <span v-if="!character">Loading...</span>
          <span v-else class="text-sm">
            {{ character.name }}
          </span>
        </h2>
      </header>
      <div class="p-2">
        <p class="text-sm">
          Name: <span v-if="character">{{ character.name }}</span> <span v-else>...</span>
        </p>
        <p class="text-sm">
          Species: <span v-if="character">{{ character.species }}</span
          ><span v-else>...</span>
        </p>
      </div>
      <div class="h-[23ch]">
        <RickAndMortyCharacterImage
          :character="character"
          v-if="character"
          class="w-full h-full object-cover rounded-b-lg"
        />
      </div>
    </div>
  </nuxt-link>
</template>
