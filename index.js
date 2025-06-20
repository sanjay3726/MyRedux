/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import productStore from './component/Redux/productStore';

const AppRedux = () => (
    <Provider store = {productStore} >
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);