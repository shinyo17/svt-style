import { atom } from "recoil";
import { User } from "../interfaces/User";
import { AnswerStateMap } from "../type/AnswerStateMap";
import { EIGHT_ITEMS } from "../data/constants";

export const answerStateMapsState = atom<AnswerStateMap[]>({
  key: "answerStateMaps",
  default: Array(6).fill(
    EIGHT_ITEMS.reduce((obj: AnswerStateMap, item: string) => {
      obj[item] = { showModal: false, memberImg: "", memberName: "" };
      return obj;
    }, {})
  ), // 초기값
});

export const userProfilesState = atom<User[]>({
  key: "userProfiles",
  default: Array(6).fill({
    img: "",
    username: "",
  }),
});

export const selectedUserState = atom<number>({
  key: "selectedUser",
  default: -1,
});

export const selectedItemState = atom<string>({
  key: "selectedItem",
  default: "",
});
