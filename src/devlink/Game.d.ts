import * as React from "react";
import * as Types from "./types";

declare function Game(props: {
  as?: React.ElementType;
  btnCloseGame?: Types.Devlink.RuntimeProps;
  timerValue?: React.ReactNode;
  mapClick?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
