import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './router/index'
import { Provider } from "react-redux";
import store from "./store";

import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd'

//scss
import './assets/style/index.scss';
import './assets/style/home.scss'

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
