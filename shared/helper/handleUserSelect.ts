import { Dispatch, SetStateAction } from "react";
import { AnswerStateMap } from "../type/AnswerStateMap";
import { AnswerState } from "../type/AnswerState";

const handleUserSelect = (
  memberIndex: number,
  item: string,
  selection: AnswerState,
  setSvtAnswerStateMaps: Dispatch<SetStateAction<AnswerStateMap[]>>
) => {
  // 선택된 사용자의 상태를 업데이트
  setSvtAnswerStateMaps((prev) =>
    prev.map((memberState, index) =>
      index === memberIndex
        ? { ...memberState, [item]: selection }
        : memberState
    )
  );
};
