import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Home.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688650263585},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688650502786},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688650502786}},"actionLists":{"a":{"id":"a","title":"waldo-start-animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-waldo0img","selectorGuids":["32adafaf-7f65-9980-e93e-307276ff9de6"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-waldo0img","selectorGuids":["32adafaf-7f65-9980-e93e-307276ff9de6"]},"yValue":80,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688649483337},"a-2":{"id":"a-2","title":"waldo-hover-in","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17"},"yValue":80,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688649649682},"a-3":{"id":"a-3","title":"waldo-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"fa3e47aa-e0ef-30cf-44ed-d702dc309d17"},"yValue":80,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688649649682}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Home({
  as: _Component = _Builtin.Block,
  btnNewGame = {},
  btnScoreBoard = {},
  btnChooseMap = {},
  homeScoreboardRecords = "1.First player : 123 sec",
  homeScoreRecords,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section_home")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home_components", "z-index-2")}
              tag="div"
            >
              <_Builtin.Heading tag="h1">
                {"WHERE'S"}
                <br />
                <_Builtin.Span className={_utils.cx(_styles, "red")}>
                  {"WALDO ?"}
                </_Builtin.Span>
              </_Builtin.Heading>
              <_Builtin.Heading tag="h2">{"Top Score"}</_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "top-scoreboard-container")}
                tag="div"
              >
                <_Builtin.Block className={_utils.cx(_styles, "txt")} tag="div">
                  {homeScoreRecords ?? "No data"}
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "button")}
                  button={true}
                  options={{
                    href: "#",
                  }}
                  {...btnScoreBoard}
                >
                  {"Full Scoreboard"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "home_btn-container")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "button")}
                  button={true}
                  options={{
                    href: "#",
                  }}
                  {...btnNewGame}
                >
                  {"Start Game"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "home-waldo0img")}
        data-w-id="fa3e47aa-e0ef-30cf-44ed-d702dc309d17"
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64a69f956a633fc81165b255/64a6be47d08ead7ba466811f_waldo-home.webp"
      />
    </_Component>
  );
}
