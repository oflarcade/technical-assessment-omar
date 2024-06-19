<script setup lang="ts">
const {
  characters,
  currentPage,
  error,
  fetchCharacters,
  loading,
  totalPages,
} = useRickAndMortyCharactersList();

const fetchInitialData = async () => {
  try {
    await fetchCharacters();
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};
fetchInitialData();

const currentView = ref<"list" | "grid">("grid");
const searchTerm = ref("");

async function fetchMoreCharacters(page: number) {
  await fetchCharacters(page);
}

const toggleView = (view: "list" | "grid") => {
  currentView.value = view;
};

const filteredCharacters = computed(() => {
  if (searchTerm.value.trim() === "") {
    return characters.value;
  }
  return characters.value.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex justify-between items-center p-4">
      <div class="flex">
        <button
          class="px-4 py-2 rounded-lg bg-gray-500 text-white text-center"
          @click="toggleView('list')"
          :class="{ 'bg-green-700': currentView === 'list' }"
        >
          List View
        </button>
        <button
          class="px-4 py-2 rounded-lg bg-gray-500 text-white text-center ml-4"
          @click="toggleView('grid')"
          :class="{ 'bg-green-700': currentView === 'grid' }"
        >
          Grid View
        </button>
      </div>

      <RickAndMortySearchBar
        :searchTerm="searchTerm"
        @update:searchTerm="searchTerm = $event"
      />
    </div>

    <div class="flex-grow">
      <div v-if="filteredCharacters.length">
        <ul v-if="currentView === 'list'" class="grid gap-4 md:gap-8 md:grid-cols-1">
          <li v-for="character in filteredCharacters" :key="character.id">
            <RickAndMortyCharacterInfo :character="character" />
          </li>
        </ul>

        <ul
          v-else-if="currentView === 'grid'"
          class="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <li v-for="character in filteredCharacters" :key="character.id">
            <RickAndMortyCharacterInfo :character="character" />
          </li>
        </ul>
      </div>

      <div v-else-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else>No characters found.</div>
    </div>

    <RickAndMortyPagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @fetchMoreCharacters="fetchMoreCharacters"
    />
  </div>
</template>
