import * as React from "react";
import * as Types from "./types";

declare function Home(props: {
  as?: React.ElementType;
  btnNewGame?: Types.Devlink.RuntimeProps;
  btnScoreBoard?: Types.Devlink.RuntimeProps;
  btnChooseMap?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
