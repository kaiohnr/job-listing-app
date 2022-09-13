import React, { createContext, useReducer } from 'react';

const initialState = {
  keywords: [],
};

const AppReducer = (state, action) => {
  if (action.type === 'ADD_KEYWORD') {
    if (!state.keywords.includes(action.payload)) {
      return {
        keywords: [action.payload, ...state.keywords],
      };
    } else {
      return {
        keywords: [...state.keywords],
      };
    }
  }

  if (action.type === 'CLEAR_ALL') {
    return { keywords: [] };
  }

  if (action.type === 'DELETE_KEYWORD') {
    const newKeywords = state.keywords.filter(
      (keyword) => keyword !== action.payload
    );
    return {
      keywords: newKeywords,
    };
  }
};

const JobContext = createContext();

const JobProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addKeyword = (keyword) => {
    dispatch({ type: 'ADD_KEYWORD', payload: keyword });
  };

  const deleteKeyword = (keyword) => {
    dispatch({ type: 'DELETE_KEYWORD', payload: keyword });
  };

  const clearAllKeywords = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <JobContext.Provider
      value={{
        keywords: state.keywords,
        addKeyword,
        deleteKeyword,
        clearAllKeywords,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export { JobContext, JobProvider };
