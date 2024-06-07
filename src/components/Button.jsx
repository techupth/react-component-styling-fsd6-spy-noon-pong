// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
            margin: 20px;
            height: 50px;
            width: 172px;
            color: white;
            background-color: #074EE8;
            border-radius: 4px;
    `}
      >
        Primary
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
            margin: 20px;
            height: 50px;
            width: 172px;
            color: white;
            background-color: #07A4E8;
            border-radius: 4px;
    `}
      >
        Secondary
      </button>
    );
  }
}
