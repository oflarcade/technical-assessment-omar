import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import IndexPage from '@/pages/index.vue';
import CharacterList from '@/components/rick-and-morty/character-list.vue';


vi.mock('@/components/rick-and-morty/character-list.vue', () => {
  return {
    default: {
      name: 'RickAndMortyCharacterList',
      template: '<div></div>',
    },
  };
});

describe('Rick and morty IndexPage.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(IndexPage, {
      global: {
        components: {
          CharacterList,
        },
      },
    });

    
    const header = wrapper.find('header');
    expect(header.exists()).toBe(true);
    expect(header.find('h1').text()).toBe('Rick And Morty Characters');


    const link = header.find('a');
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe('Go back to the home page');
    expect(link.attributes('href')).toBe('/');


    const characterList = wrapper.findComponent(CharacterList);
    expect(characterList.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = mount(IndexPage, {
      global: {
        components: {
            CharacterList,
        },
      },
    });

    // Match snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
