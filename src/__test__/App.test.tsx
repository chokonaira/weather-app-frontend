import 'jsdom-global/register';
import { mount } from "enzyme";
import App from '../App';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import Api from "../helpers/api";

jest.mock('react-elastic-carousel');
jest.mock('@devexpress/dx-react-chart-material-ui');
jest.mock('@material-ui/core');

new MockAdapter(Api.axiosInstance);
const mockStore = configureMockStore([thunk]);

describe("App Component", () => {

  it("renders without crashing", async() => {
    const store = mockStore({
          fetchWeather: {
            isFetchingWeather: false,
            weather: {
              city: 'Berlin'
          }
        },
      });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>);
    expect(wrapper).toBeTruthy();
  });
});
