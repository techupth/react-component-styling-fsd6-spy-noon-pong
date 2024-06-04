// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.type === "error") {
    return (
      <>
        <alert
          css={css`
            padding: 0px 16px;
            font-size: 20px;
            height: 76px;
            width: 650px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #f9c8c8;
          `}
        >
          This is error alert box
        </alert>
      </>
    );
  } else if (props.type === "warning") {
    return (
      <>
        <alert
          css={css`
            padding: 0px 16px;
            font-size: 20px;
            height: 76px;
            width: 650px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #f9d9c8;
          `}
        >
          This is warning alert box
        </alert>
      </>
    );
  } else if (props.type === "info") {
    return (
      <>
        <alert
          css={css`
            padding: 0px 16px;
            font-size: 20px;
            height: 76px;
            width: 650px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #f9ebc8;
          `}
        >
          This is info alert box
        </alert>
      </>
    );
  } else if (props.type === "success") {
    return (
      <>
        <alert
          css={css`
            padding: 0px 16px;
            font-size: 20px;
            height: 76px;
            width: 650px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #cef7cd;
          `}
        >
          This is success alert box
        </alert>
      </>
    );
  }
}

export default Alert;
