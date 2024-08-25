import {createStore, combineReducers, compose,applyMiddleware  } from "redux";
import {thunk} from "redux-thunk";

import fullScreenCircuralProgress from "./state/fullScreenCircularProgress";
import snackbars from "./state/snackbars";
import drawer from "./state/drawer";

const reducer =combineReducers({
    fullScreenCircuralProgress,
    snackbars,
    drawer

})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
export const store=createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)