import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Layout from "./components/layout";
import {Provider as ReduxProvider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <Layout>
                <App/>
            </Layout>
        </ReduxProvider>
    </React.StrictMode>
);