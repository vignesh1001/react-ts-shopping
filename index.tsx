import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Index from "./pages/index";
import { makeStore } from "./store";
import { Provider } from "react-redux";

import "./style.css";
import "./mobile-menu.scss";
import "./styles.scss";
import "./theme.scss";
import "./variable.scss";
import "./public/css/header.scss";
import "./public/css/category.scss";
import "./public/css/headermenu.scss";
import "./public/css/home.scss";
import "./public/css/slider.scss";
import "./public/css/footer.scss";
import "./public/css/footermenu.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface AppProps {}
interface AppState {
  name: string;
}
const s = makeStore();
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <div>
        <Provider store={s}>
          {/*<LeftFilter filterData={{}} />*/}
          {/*<GlobalSearch />*/}
          <Index />
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
