// importing react, react native components and redux
import React from 'react';

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from './data/reducer';
import initial from './data/initial';

const store = createStore(
  reducer,
  initial,
);

// import the Main App component
import Main from "./Main";

// pass our store through to Main using props
const App = () => (
  <Provider store={ store }>
    <Main />
  </Provider>
)

export default App;

// https://github.com/rt2zz/redux-persist TRY GET ME WORKING
