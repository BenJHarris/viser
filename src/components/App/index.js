import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import { SignInPage } from "../SignIn";
import { HomePage } from "../Home";
import { AccountPage } from "../Account";
import { FlashcardPage } from "../Flashcard";
import {
  SIGN_IN,
  LANDING,
  HOME,
  ACCOUNT,
  FLASHCARDS
} from "../../constants/routes";
import { Provider } from "react-redux";
import { NotFoundPage } from "../NotFound";
import store from "../../store";
import firebaseConfig from "../../firebase";
import { FirebaseAppProvider } from "reactfire";
import { Content } from "./style";
import "firebase/auth";
import "firebase/performance";
import "firebase/firestore";

// fix browser default styles
import GlobalStyles from "../../reset.css";

const App = () => {
  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
        <GlobalStyles />
        <Router>
          <Navigation />
          <Content>
            <Switch>
              <Route exact path={LANDING} component={LandingPage} />
              <Route exact path={SIGN_IN} component={SignInPage} />
              <Route exact path={HOME} component={HomePage} />
              <Route exact path={ACCOUNT} component={AccountPage} />
              <Route exact path={FLASHCARDS} component={FlashcardPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Content>
        </Router>
      </FirebaseAppProvider>
    </Provider>
  );
};

export default App;
