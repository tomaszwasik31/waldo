import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Game.module.css";

export function Game({
  as: _Component = _Builtin.Block,
  btnCloseGame = {},
  timerValue = "1534",
  mapClick = {},
  imgWaldo = {},
  imgOdlaw = {},
  imgWizard = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "section_game")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "game_bar")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "timer-container")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "timer-txt")}>
                {timerValue}
              </_Builtin.Paragraph>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "timer-txt", "text-color-blue")}
              >
                {" sec"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "characters-container")}
              tag="div"
            >
              <_Builtin.Heading tag="h2">
                {"Find "}
                <_Builtin.Span className={_utils.cx(_styles, "red")}>
                  {":"}
                </_Builtin.Span>
              </_Builtin.Heading>
              <_Builtin.Image
                className={_utils.cx(_styles, "character-img")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a69f956a633fc81165b255/64a6d2eb8dd82d7ceebeb32f_waldo.webp"
                {...imgWaldo}
              />
              <_Builtin.Image
                className={_utils.cx(_styles, "character-img")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a69f956a633fc81165b255/64a6d2ebec5c6f5611cd8158_odlaw.webp"
                {...imgOdlaw}
              />
              <_Builtin.Image
                className={_utils.cx(_styles, "character-img")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a69f956a633fc81165b255/64a6d2ebec5c6f5611cd814e_wizzard.webp"
                {...imgWizard}
              />
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={{
                href: "#",
              }}
              {...btnCloseGame}
            >
              {"Close Game"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "map-container")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "map")}
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/64a69f956a633fc81165b255/64a6d3efe3dbb06c914da5e4_map-1.webp"
          {...mapClick}
        />
      </_Builtin.Block>
    </_Component>
  );
}
