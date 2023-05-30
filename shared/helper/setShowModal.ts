import { Dispatch, SetStateAction } from "react";
import { AnswerStateMap } from "../type/AnswerStateMap";

export const setShowModal = (
  item: string,
  setStateMap: Dispatch<SetStateAction<AnswerStateMap>>
) => {
  setStateMap((prev: any) => ({
    ...prev,
    [item]: { ...prev[item], showModal: !prev[item].showModal },
  }));
};
