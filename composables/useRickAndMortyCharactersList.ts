
export default function useRickAndMortyAPI() {
  const characters = ref<Character[]>([])
  const loading = ref(false)
  const currentPage = ref(1)
  const totalPages = ref(0)
  const error = ref<string | null>(null)

  const fetchCharacters = async (page = 1) => {
    loading.value = true
    try {
      const response = await $fetch<ApiResponse>(`https://rickandmortyapi.com/api/character?page=${page}`)
      characters.value = response.results
      totalPages.value = response.info.pages
      currentPage.value = page
      error.value = null
    } catch (err: any) {
      if( err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An error occurred';
      }
      
    } finally {
      loading.value = false
    }
  }

  return { characters, loading, currentPage, totalPages, fetchCharacters, error }
}