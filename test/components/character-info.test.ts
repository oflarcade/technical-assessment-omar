import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CharacterInfo from '@/components/rick-and-morty/character-info.vue';
import CharacterImage from '@/components/rick-and-morty/character-image.vue';
import { useCharacterStore } from '@/stores/character.js';

vi.mock('@/stores/characterStore', () => {
  return {
    useCharacterStore: vi.fn(() => ({
      setCharacter: vi.fn(),
    })),
  };
});

const character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: '',
  },
  location: {
    name: 'Earth',
    url: '',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: '',
  created: '2017-11-04T18:48:46.250Z',
};

describe('RickAndMortyCharacterInfo.vue', () => {
  it('renders character details correctly', () => {
    const wrapper = mount(CharacterInfo, {
      props: {
        character,
      },
      global: {
        components: {
          CharacterImage,
        },
      },
    });


    expect(wrapper.find('h2').text()).toBe('Rick Sanchez');
    expect(wrapper.findAll('p').at(0)?.text()).toBe('Name: Rick Sanchez');
    expect(wrapper.findAll('p').at(1)?.text()).toBe('Species: Human');


    const imageComponent = wrapper.findComponent(CharacterImage);
    expect(imageComponent.exists()).toBe(true);
    expect(imageComponent.props().character).toEqual(character);
  });

  it('calls onClick method and sets character in store', async () => {
    const wrapper = mount(CharacterInfo, {
      props: {
        character,
      },
      global: {
        components: {
          CharacterImage,
        },
      },
    });

    const characterStore = useCharacterStore();


    await wrapper.find('a').trigger('click');

    expect(characterStore.setCharacter).toHaveBeenCalledWith(character);
  });

  it('matches snapshot', () => {
    const wrapper = mount(CharacterInfo, {
      props: {
        character,
      },
      global: {
        components: {
          CharacterImage,
        },
      },
    });

    // Match snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
