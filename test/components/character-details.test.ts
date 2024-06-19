import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CharacterDetails from '@/components/rick-and-morty/character-details.vue';
import CharacterImage from '@/components/rick-and-morty/character-image.vue';


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

describe('RickAndMortyCharacterDetails.vue', () => {
  it('renders character details correctly', () => {
    const wrapper = mount(CharacterDetails, {
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
    expect(wrapper.findAll('p').at(2)?.text()).toBe('Status: Alive');
    expect(wrapper.findAll('p').at(3)?.text()).toBe('Type:');
    expect(wrapper.findAll('p').at(4)?.text()).toBe('Gender: Male');
    expect(wrapper.findAll('p').at(5)?.text()).toBe('Origin: Earth');
    expect(wrapper.findAll('p').at(6)?.text()).toBe('Location: Earth');
    expect(wrapper.findAll('p').at(7)?.text()).toContain('Created: November 4, 2017');

    
    const imageComponent = wrapper.findComponent(CharacterImage);
    expect(imageComponent.exists()).toBe(true);
    expect(imageComponent.props().character).toEqual(character);
  });

  it('matches snapshot', () => {
    const wrapper = mount(CharacterDetails, {
      props: {
        character,
      },
      global: {
        components: {
          CharacterImage,
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
