import { defineStore } from 'pinia'

export const usePokeballStore = defineStore('pokeball', () => {
  function addPokemon(_pokemon: Pokemon) {
    // add pokemon to pokeball
  }

  return {
    addPokemon,
  }
})
