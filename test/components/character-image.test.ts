import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CharacterImage from '@/components/rick-and-morty/character-image.vue';


const character = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('RickAndMortyCharacterImage.vue', () => {
    it('renders correctly with given character image', () => {
        const wrapper = mount(CharacterImage, {
            props: {
                character,
            },
        });

        const img = wrapper.find('img');
        expect(img.exists()).toBe(true);
        expect(img.attributes('src')).toBe(character.image);
    });

    it('matches snapshot', () => {
        const wrapper = mount(CharacterImage, {
            props: {
                character,
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });
});
