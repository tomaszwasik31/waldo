import * as React from "react";
import * as Types from "./types";

declare function GameWon(props: {
  as?: React.ElementType;
  btnSaveRecord?: Types.Devlink.RuntimeProps;
  btnCloseGameWon?: Types.Devlink.RuntimeProps;
  inputName?: Types.Basic.IdTextInput;
  gameWon?: Types.Devlink.RuntimeProps;
  currentRecord?: Types.Devlink.Slot;
  playerName?: Types.Basic.IdTextInput;
}): React.JSX.Element;
