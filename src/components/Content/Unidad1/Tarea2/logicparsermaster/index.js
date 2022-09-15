import { LogicTree } from "./tree";

function evaluate(msg, debug = false) {
  let result, table;
  try {
    table = new LogicTree(msg)
      .makeTable()
      .join("\n");
    result = {
      success: true,
      request: msg,
      result: table
    };
  } catch (e) {
    result = {
      success: false,
      request: msg,
      error: debug ? e : "Invalid expression"
    };
  };
  return result;
}

export default evaluate