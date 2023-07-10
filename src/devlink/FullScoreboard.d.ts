import * as React from "react";
import * as Types from "./types";

declare function FullScoreboard(props: {
  as?: React.ElementType;
  btnCloseScoreboard?: Types.Devlink.RuntimeProps;
  fullScoreboard?: React.ReactNode;
}): React.JSX.Element;
