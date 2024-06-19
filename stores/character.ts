import { defineStore } from 'pinia';

export const useCharacterStore = defineStore('character', {
    state: () => ({
      character: null as Character | null,
    }),
    actions: {
      setCharacter(character: Character) {
        this.character = character
      },
      clearCharacter() {
        this.character = null
      },
    },
  })

