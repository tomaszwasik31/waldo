import React from "react";
import * as _Builtin from "./_Builtin";
import { BtnCloseScoreboard } from "./BtnCloseScoreboard";
import * as _utils from "./utils";
import _styles from "./FullScoreboard.module.css";

export function FullScoreboard({
  as: _Component = _Builtin.Block,
  btnCloseScoreboard = {},
  fullScoreboard = "No data",
  popupContainerScoreboard = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "popup-component")}
      tag="div"
      {...popupContainerScoreboard}
    >
      <BtnCloseScoreboard btnCloseScoreBoard={btnCloseScoreboard} />
      <_Builtin.Block
        className={_utils.cx(_styles, "popup-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "full-scoreboard")}
          tag="div"
        >
          <_Builtin.Heading tag="h3">{"All scores"}</_Builtin.Heading>
          <_Builtin.Block className={_utils.cx(_styles, "txt")} tag="div">
            {fullScoreboard}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
