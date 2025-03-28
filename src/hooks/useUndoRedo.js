import { useState } from "react";

export default function useUndoRedo(initialState) {
  const [history, setHistory] = useState([initialState]);
  const [index, setIndex] = useState(0);

  const setNewState = (newState) => {
    const newHistory = [...history.slice(0, index + 1), newState];
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (index > 0) setIndex(index - 1);
  };

  const redo = () => {
    if (index < history.length - 1) setIndex(index + 1);
  };

  return [history[index], setNewState, undo, redo];
}
