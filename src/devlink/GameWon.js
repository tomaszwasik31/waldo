import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GameWon.module.css";

export function GameWon({
  as: _Component = _Builtin.Block,
  btnSaveRecord = {},
  btnCloseGameWon = {},
  inputName = "name-3",
  gameWon = {},
  currentRecord,
  playerName = "name-3",
  popupContainer = {},
  popupGameWon = {},
  text = "This is the default text value",
  popupContainerGamewon = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "popup-component")}
      tag="div"
      {...popupContainerGamewon}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "popup-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "game-won-form-componets")}
          tag="div"
        >
          <_Builtin.Heading tag="h2">
            {"Congrats!"}
            <br />
            {"Your time:"}
          </_Builtin.Heading>
          <_Builtin.Heading className={_utils.cx(_styles, "txt-time")} tag="h3">
            {currentRecord ?? "123"}
          </_Builtin.Heading>
          <_Builtin.Heading className={_utils.cx(_styles, "txt-time")} tag="h3">
            {"Enter Your Name"}
          </_Builtin.Heading>
          <_Builtin.FormWrapper>
            <_Builtin.FormForm
              name="wf-form-Name"
              data-name="Name"
              method="get"
              id="wf-form-Name"
            >
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="name"
                data-name="name"
                type="text"
                disabled={false}
                required={false}
                id={playerName}
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "game-won-form-btn-container",
                "div-block",
                "div-block-2"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "button",
                  "background-color-blue"
                )}
                button={true}
                options={{
                  href: "#",
                }}
                {...btnSaveRecord}
              >
                {"Save"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "button")}
                button={true}
                options={{
                  href: "#",
                }}
                {...btnCloseGameWon}
              >
                {"Close"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
