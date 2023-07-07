import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Cursor.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-4","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-4-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":0,"restingState":50},{"continuousParameterGroupId":"a-4-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":0,"restingState":50}],"createdOn":1688655400445}},"actionLists":{"a-4":{"id":"a-4","title":"cursor","continuousParameterGroups":[{"id":"a-4-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-container","selectorGuids":["9866f998-85db-1a69-df09-9523bb96b8c4"]},"xValue":-50,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-container","selectorGuids":["9866f998-85db-1a69-df09-9523bb96b8c4"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-container","selectorGuids":["9866f998-85db-1a69-df09-9523bb96b8c4"]},"xValue":50,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-container","selectorGuids":["9866f998-85db-1a69-df09-9523bb96b8c4"]},"zValue":360,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]},{"id":"a-4-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-container","selectorGuids":["9866f998-85db-1a69-df09-9523bb96b8c4"]},"yValue":-50,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-container","selectorGuids":["9866f998-85db-1a69-df09-9523bb96b8c4"]},"yValue":50,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]}]}],"createdOn":1688655406526}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Cursor({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component className={_utils.cx(_styles, "cursor-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "cursor-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cursor-dot")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
