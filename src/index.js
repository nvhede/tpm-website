import React from "react";
import { render } from "react-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// Base Style
import style from "./indexCss";

// Shared Components
import { watchWindowResize } from "./reducers/viewportReducer";

//Loading component here

//Store
import store, { history } from "./store";

watchWindowResize(store.dispatch);

const Application = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App style={style} />
      </ConnectedRouter>
    </Provider>
  );
};

render(<Application />, document.getElementById("root"));
registerServiceWorker();
