import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Pagination from '@/components/rick-and-morty/pagination.vue';

describe('Pagination.vue', () => {
  it('renders correctly with given currentPage and totalPages', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
      },
    });

    const pageText = wrapper.find('span');
    expect(pageText.text()).toBe('Page 2');
  });

  it('emits fetchMoreCharacters event with correct value on previous click', async () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
      },
    });

    const previousButton = wrapper.find('button:first-child');
    await previousButton.trigger('click');

    expect(wrapper.emitted('fetchMoreCharacters')).toHaveLength(1);
    expect(wrapper.emitted('fetchMoreCharacters')![0]).toEqual([1]);
  });

  it('emits fetchMoreCharacters event with correct value on next click', async () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
      },
    });

    const nextButton = wrapper.find('button:last-child');
    await nextButton.trigger('click');

    expect(wrapper.emitted('fetchMoreCharacters')).toHaveLength(1);
    expect(wrapper.emitted('fetchMoreCharacters')![0]).toEqual([3]);
  });

  it('disables previous button when currentPage is 1', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
      },
    });

    const previousButton = wrapper.find('button:first-child');
    expect(previousButton.attributes('disabled')).toBeDefined();
  });

  it('disables next button when currentPage is equal to totalPages', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 5,
        totalPages: 5,
      },
    });

    const nextButton = wrapper.find('button:last-child');
    expect(nextButton.attributes('disabled')).toBeDefined();
  });

  it('matches snapshot', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
