import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SearchBar from '~/components/rick-and-morty/search-bar.vue';

describe('SearchBar.vue', () => {
  it('renders correctly with the given searchTerm', () => {
    const wrapper = mount(SearchBar, {
      props: {
        searchTerm: 'test',
      },
    });

    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).value).toBe('test');
  });

  it('emits update:searchTerm event with the correct value on input', async () => {
    const wrapper = mount(SearchBar, {
      props: {
        searchTerm: '',
      },
    });

    const input = wrapper.find('input');
    await input.setValue('Rick');

    expect(wrapper.emitted('update:searchTerm')).toHaveLength(1);
    expect(wrapper.emitted('update:searchTerm')![0]).toEqual(['Rick']);
  });

  it('matches snapshot', () => {
    const wrapper = mount(SearchBar, {
      props: {
        searchTerm: 'test',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
