import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Coin from '../items/coin';
import store from '../../redux/store';

describe('Testing React Components', () => {
  test('Should Render Coin Component', () => {
    const mockCoin = {
      uuid: 111, symbol: '', name: 'BTC', iconUrl: '', marketCap: 100, price: 1000,
    };
    const container = render(
      <BrowserRouter>
        <Provider store={store}>
          <Coin coin={mockCoin} />
        </Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
