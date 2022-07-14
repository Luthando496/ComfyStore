import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'

import { Auth0Provider } from '@auth0/auth0-react'
import store from './Store/store'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))
