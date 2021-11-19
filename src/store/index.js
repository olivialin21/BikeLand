import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";

import {
  // SET_PAGE_TITLE,
  // SET_PAGE_BANNER,
  // SET_PAGE_CONTENT
} from "../utils/constants"

export const StoreContext = createContext();
// let likeItems = localStorage.getItem("likeItems")
//   ? JSON.parse(localStorage.getItem("likeItems"))
//   : [];

const initialState = {
  page: {
    title: "",
    banner: "",
    datas: [],
  },
  navBar: {
    activeItem: "/",
  },
};

function reducer(state, action) {
  switch (action.type){
    // case SET_PAGE_TITLE:
    //   return {
    //     ...state,
    //     page: {
    //       ...state.page,
    //       title: action.payload,
    //     },
    //   };
    // case SET_PAGE_BANNER:
    //   return {
    //     ...state,
    //     page: {
    //       ...state.page,
    //       banner: action.payload,
    //     },
    //   };
    // case SET_PAGE_CONTENT:
    //   return {
    //     ...state,
    //     page: {
    //       ...state.page,
    //       ...action.payload,
    //     },
    //   };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  // const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}