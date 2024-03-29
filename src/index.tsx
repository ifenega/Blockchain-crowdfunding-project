import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import WalletConnetProvider from './functions/WalletConnectProvider';
// import ThemeSuspense from './components/UI/ThemeSuspense';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <WalletConnetProvider>
    <Provider store={store}>
      <BrowserRouter basename="/">
        {/* <Suspense fallback={<ThemeSuspense />}> */}
        <App />
        {/* </Suspense> */}
      </BrowserRouter>
    </Provider >
  </WalletConnetProvider>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
