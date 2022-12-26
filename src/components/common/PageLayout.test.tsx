import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

import PageLayout from './PageLayout';
import { element } from './testHelpers';

const textP = /page layout/;

const elementPageLayout = element(
  <PageLayout>
    <p>{textP.source}</p>
  </PageLayout>
);

describe('<PageLayout />', () => {
  let wrapper: ReactWrapper;

  beforeAll(async () => {
    wrapper = mount(elementPageLayout);

    await act(async () => {
      wrapper.update();
    });
  });

  it('should render MenuBar', () => {
    const elementMenuBar = wrapper
      .find({ 'data-test': 'menu-bar-bttn' })
      .first();
    expect(elementMenuBar.exists()).toBeTruthy();
  });

  it('should render Teamway logo', () => {
    const elementTeawayLogo = wrapper.find('svg').first();
    expect(elementTeawayLogo.exists()).toBeTruthy();
  });

  it('should render content', () => {
    expect(JSON.stringify(wrapper.text().match(textP))).toBe(
      JSON.stringify([textP.source])
    );
  });
});
