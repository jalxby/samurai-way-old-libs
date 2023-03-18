import React, {createContext} from "react";
import {Store} from "redux";
import store, {StoreType} from "./redux/redux-store";
import {ActionType} from "./redux/Types";

export const StoreContext = createContext<Store<StoreType, ActionType>>(store)

