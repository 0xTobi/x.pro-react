import React from "react";
import CallbackButton from "./CallbackButton";

export default function Summary(props) {
  // React props are read only, and cannot be altered from the child component.
  // props.name = `Name: ${props.name}`;
  return (
    <React.Fragment>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.name.length}</td>
      <td>
        <CallbackButton callback={props.reverseCallback} />
        <CallbackButton
          theme="info"
          text="Promote"
          callback={() => props.promoteCallback(props.name)}
          disabled="true"
        />
      </td>
    </React.Fragment>
  );
}

// A component must always retun a value, if there's nothing to return, simply return null.
