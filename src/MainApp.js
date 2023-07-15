import React from 'react'
import App from './App'
import {Provider} from 'react-redux';
import Store from './Store/Store';
function MainApp() {
  return (
    <div>
        <Provider store={Store}>
      <App/>
      </Provider>
    </div>
  )
}

export default MainApp
