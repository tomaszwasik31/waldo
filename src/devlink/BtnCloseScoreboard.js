import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BtnCloseScoreboard.module.css";

export function BtnCloseScoreboard({
  as: _Component = _Builtin.Link,
  btnCloseScoreBoard = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "close-popup")}
      button={true}
      options={{
        href: "#",
      }}
      {...btnCloseScoreBoard}
    >
      {"x"}
    </_Component>
  );
}
