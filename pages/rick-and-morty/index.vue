<template>
  <article>
    <header
      class="flex align-center justify-center border-b border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
    >
      <h1 class="text-xl">Rick And Morty Characters</h1>
      <nuxt-link to="/" class="ml-auto"> Go back to the home page </nuxt-link>
    </header>
    <main>
      <RickAndMortyCharacterList />
    </main>
  </article>
</template>
