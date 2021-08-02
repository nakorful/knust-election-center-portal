import React from "react";
// React Router DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// React Redux
import { Provider } from "react-redux";
import configureStore from './app/data/redux/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
// Application properties
import { CONSTANTS } from "./app/utils/constants";
import Home from "./app/presentation/main/home";
import LoginPage from './app/presentation/main/login';
import ElectionPage from "./app/presentation/main/election-page";
import ThankYouPage from "./app/presentation/main/thank-you-page";
// Font styles
// import './assets/fonts/font.css';


const {store, persistor} = configureStore();


const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <Switch>
                    <Route path={CONSTANTS.basePaths.home} exact component={Home} />
                    <Route path={CONSTANTS.basePaths.login} component={LoginPage} />
                    <Route path={CONSTANTS.basePaths.electionPage} component={ElectionPage} />
                    <Route path={CONSTANTS.basePaths.thankYouPage} component={ThankYouPage} />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>
);


export default App;
