import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUTS":
      return { ...state, [action.name]: action.value };
    case "RESET":
      return action.initialForm;
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUTS", name, value });
  }, []);

  const reset = useCallback(() => dispatch({ type: "RESET", initialForm }), [
    initialForm,
  ]);
  return [form, onChange, reset];
}

export default useInputs;
