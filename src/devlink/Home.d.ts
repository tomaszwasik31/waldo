import * as React from "react";
import * as Types from "./types";

declare function Home(props: {
  as?: React.ElementType;
  btnNewGame?: Types.Devlink.RuntimeProps;
  btnScoreBoard?: Types.Devlink.RuntimeProps;
  btnChooseMap?: Types.Devlink.RuntimeProps;
  homeScoreboardRecords?: React.ReactNode;
  homeScoreRecords?: Types.Devlink.Slot;
}): React.JSX.Element;
