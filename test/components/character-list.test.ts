import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CharacterList from '@/components/rick-and-morty/character-list.vue';
import characterInfo from '~/components/rick-and-morty/character-info.vue';
const mockCharacters: Character[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth (C-137)', url: '' },
      location: { name: 'Citadel of Ricks', url: '' },
      image: 'rick.png',
      episode: ['S01E01'],
      url: '',
      created: '2017-11-04T18:48:46.250Z'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth (C-137)', url: '' },
      location: { name: 'Citadel of Ricks', url: '' },
      image: 'morty.png',
      episode: ['S01E01'],
      url: '',
      created: '2017-11-04T18:50:21.651Z'
    }
];
vi.mock('@/composables/useRickAndMortyCharactersList', () => ({
    default: () => ({
      characters: ref(mockCharacters),
      loading: ref(false),
      currentPage: ref(1),
      totalPages: ref(2),
      error: ref(null),
      fetchCharacters: vi.fn(),
    }),
  }));
  
  describe('CharacterList.vue', () => {
    it('renders correctly and displays characters', () => {
      const wrapper = mount(CharacterList, {
        global: {
          components: {
            characterInfo,
          },
        },
      });
  
      // Test initial render
      expect(wrapper.find('button').exists()).toBe(true);
  
      // Test list rendering
      expect(wrapper.findAllComponents(characterInfo)).toHaveLength(2);
      expect(wrapper.findAllComponents(characterInfo)[0].props().character.name).toBe('Rick Sanchez');
      expect(wrapper.findAllComponents(characterInfo)[1].props().character.name).toBe('Morty Smith');
    });
  
    it('toggles view correctly', async () => {
      const wrapper = mount(CharacterList, {
        global: {
          components: {
            characterInfo,
          },
        },
      });
  
      const listViewButton = wrapper.find('button').element;
      const gridViewButton = wrapper.find('button + button').element;
  
      // Initial view should be grid
      expect(wrapper.vm.currentView).toBe('grid');
      expect(gridViewButton.classList.contains('bg-green-700')).toBe(true);
  
      // Toggle to list view
      await wrapper.find('button').trigger('click');
      expect(wrapper.vm.currentView).toBe('list');
      expect(listViewButton.classList.contains('bg-green-700')).toBe(true);
    });
  });