// globals.ts
let globalVariable: number = 0; // Assuming an initial value of 0 for a number

const setGlobalVariable = (newValue: number): void => {
  globalVariable = newValue;
};

const getGlobalVariable = (): number => {
  return globalVariable;
};

export { setGlobalVariable, getGlobalVariable };
