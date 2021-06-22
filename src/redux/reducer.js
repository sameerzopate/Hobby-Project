import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const initialState1 = [];

const addTodoReducer = createSlice({
  name: "titles",
  initialState,
  reducers: {
    addTitles: (state, action) => {
        state.push(action.payload);
        return state;
      },
    removeTitles: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTitles: (state, action) => {
      return state.map((Title) => {
        if (Title.id === action.payload.id) {
          return {
            ...Title,
            item: action.payload.item,
          };
        }
        return Title;
      });
    },
    completeTitles: (state, action) => {
      return state.map((Title) => {
        if (Title.id === action.payload) {
          return {
            ...Title,
            completed: true,
          };
        }
        return Title;
      });
    },
  }
})

const addTodoReducer1 = createSlice({
  name: "descriptions",
  initialState1,
  reducers: {
    addDescriptions: (state, action) => {
        state.push(action.payload);
        return state;
      },
    removeDescriptions: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateDescriptions: (state, action) => {
      return state.map((Description) => {
        if (Description.id === action.payload.id) {
          return {
            ...Description,
            item: action.payload.item,
          };
        }
        return Description;
      });
    },
    completeDescriptions: (state, action) => {
      return state.map((Description) => {
        if (Description.id === action.payload) {
          return {
            ...Description,
            completed: true,
          };
        }
        return Description;
      });
    },
  }
})

export const {
    addTitles,
    removeTitles,
    updateTitles,
    completeTitles,
  } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

export const {
    addDescriptions,
    removeDescriptions,
    updateDescriptions,
    completeDescriptions,
  } = addTodoReducer1.actions;
export const reducer1 = addTodoReducer1.reducer;