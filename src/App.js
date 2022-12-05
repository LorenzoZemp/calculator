import { useReducer } from "react";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  CHOOSE_OPERATION: "choose-operation",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          current: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.current === "0") return state;
      if (payload.digit === "." && state.current.includes(".")) return state;
      return {
        ...state,
        current: `${state.current || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      if (state.current == null && state.previous == null) return state;

      if (state.current == null) {
        return {
          ...state,
          operation: payload.operand,
        };
      }

      if (state.previous == null) {
        return {
          ...state,
          operation: payload.operand,
          previous: state.current,
          current: null,
        };
      }

      return {
        ...state,
        previous: evaluate(state),
        operation: payload.operand,
        current: null,
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.current == null ||
        state.previous == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previous: null,
        operation: null,
        current: evaluate(state),
      };
    default:
      break;
  }
}

function evaluate({ current, previous, operation }) {
  const previousFloat = parseFloat(previous);
  const currentFloat = parseFloat(current);
  if (isNaN(previousFloat) || isNaN(currentFloat)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = previousFloat + currentFloat;
      break;
    case "-":
      computation = previousFloat - currentFloat;
      break;
    case "x":
      computation = previousFloat * currentFloat;
      break;
    case "/":
      computation = previousFloat / currentFloat;
      break;
    default:
      break;
  }
  return computation.toString();
}

function App() {
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="App">
      <div className="grid place-items-center h-screen">
        <div className="p-2 w-max" id="calculator-container">
          <div className="border border-gray-300 mb-2 px-2">
            <h2 className="text-right w-full h-4" id="prev-selection">
              {previous} {operation}
            </h2>
            <h2 className="text-right w-full h-4 mb-4" id="current-selection">
              {current}
            </h2>
          </div>
          <div className="grid gap-2 grid-cols-4 grid-rows-5" id="keys">
            {/* AC / X */}
            <button
              className="border border-gray-300 hover:border-black col-span-2 font-semibold h-24 w-50"
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            >
              AC
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  payload: { operand: "/" },
                })
              }
            >
              /
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  payload: { operand: "x" },
                })
              }
            >
              x
            </button>
            {/* 7 8 9 - */}
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } })
              }
            >
              7
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "8" } })
              }
            >
              8
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "9" } })
              }
            >
              9
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  payload: { operand: "-" },
                })
              }
            >
              -
            </button>
            {/* 4 5 6 + */}
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "4" } })
              }
            >
              4
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "5" } })
              }
            >
              5
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "6" } })
              }
            >
              6
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  payload: { operand: "+" },
                })
              }
            >
              +
            </button>
            {/* 1 2 3 = */}
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } })
              }
            >
              1
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } })
              }
            >
              2
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "3" } })
              }
            >
              3
            </button>
            <button
              className="border border-gray-300 hover:border-black row-span-2 font-semibold w-24"
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            >
              =
            </button>
            {/* 0 . */}
            <button
              className="border border-gray-300 hover:border-black col-span-2 h-24 w-50"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } })
              }
            >
              0
            </button>
            <button
              className="border border-gray-300 hover:border-black h-24 w-24"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "." } })
              }
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
