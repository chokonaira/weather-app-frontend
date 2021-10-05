import 'jsdom-global/register';
import { mount } from "enzyme";
import App from '../App';

describe("App Component", () => {

  it("renders without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeTruthy();
  });
});
