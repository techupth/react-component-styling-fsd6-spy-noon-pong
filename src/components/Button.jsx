// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <>
        <button
          css={css`
            padding: 0px 16px;
            font-size: 24px;
            height: 50px;
            width: 172px;
            border-radius: 5px;
            cursor: pointer;
            background-color: #074ee8;
          `}
        >
          primary button
        </button>
      </>
    );
  } else if (props.type === "secondary") {
    return (
      <>
        <button
          css={css`
            padding: 0px 16px;
            font-size: 24px;
            height: 50px;
            width: 172px;
            border-radius: 5px;
            cursor: pointer;
            background-color: #07a4e8;
          `}
        >
          secondary button
        </button>
      </>
    );
  }
}

export default Button;
