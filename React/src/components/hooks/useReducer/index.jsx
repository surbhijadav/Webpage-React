import { useReducer } from "react";

// Move reducer OUTSIDE the component to avoid duplicate `state`
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export const ReducerComp = () => {
  const intialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold">{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};
