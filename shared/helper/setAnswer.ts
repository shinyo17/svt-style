import { Dispatch, SetStateAction } from "react";
import { AnswerStateMap } from "../type/AnswerStateMap";

export const setAnswer = (
  item: string,
  key: string,
  value: string,
  setStateMap: Dispatch<SetStateAction<AnswerStateMap>>
) => {
  setStateMap((prev) => ({ ...prev, [item]: { ...prev[item], [key]: value } }));
};
