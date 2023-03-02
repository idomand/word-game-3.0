import data from "../German-words-data.json";

export const firstWord = data[4];

type UpdateWordAction = {
  type: "update-word";
  payload: {
    indexOfWord: number;
  };
};

type UpdateScoreAction = {
  type: "update-score";
  payload: {
    score: number;
  };
};

export type GameReducerActions = UpdateScoreAction | UpdateWordAction;

export default function GameReducer(
  state: GlobalState,
  action: GameReducerActions
) {
  if (action.type === "update-score") {
    const { score } = action.payload;
    return { ...state, score };
  } else if (action.type === "update-word") {
    const { indexOfWord } = action.payload;

    return { ...state, indexOfWord };
  }

  return state;
}
