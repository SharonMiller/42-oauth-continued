import './style/main.scss'
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import { Provider } from 'react-redux'
import storeCreate from './lib/store-create'
import io from './lib/io'

import userSubscribers from './subscribe/user.js'
import messageSubscribers from './subscribe/message.js'
let subscribers = Object.assign(userSubscribers, messageSubscribers)
io(store, subscribers)
let AppContainer = () => (
  <Provider store={storeCreate()}>
    <App />
  </Provider>
)

ReactDom.render(<AppContainer />, document.getElementById('root'))
