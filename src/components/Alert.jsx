// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as Icon from 'react-feather';s

export function Alert(props) {
    if (props.type === "error") {
      return (
        <>
          <alert
            css={css`
            margin: 16px;
            padding: 16px;
            font-size: 20px;
            height: 50px;
            width: 200px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #f9c8c8;
            `}
          >
           <Icon.Frown  color="red"/> This is error alert box
          </alert>
        </>
      );
    } else if (props.type === "warning") {
      return (
        <>
          <alert
            css={css`
            margin: 16px;
            padding: 16px;
            font-size: 20px;
            height: 50px;
            width: 200px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #f9d9c8;
            `}
          >
            <Icon.AlertTriangle color="brown"/> This is warning alert box
          </alert>
        </>
      );
    } else if (props.type === "info") {
      return (
        <>
          <alert
            css={css`
            margin: 16px;
            padding:16px;
            font-size: 20px;
            height: 50px;
            width: 200px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #f9ebc8;
            `}
          >
           <Icon.AlertCircle color="orange" /> This is info alert box
          </alert>
        </>
      );
    } else if (props.type === "success") {
      return (
        <>
          <alert
            css={css`
            margin: 16px;
            padding: 16px;
            font-size: 20px;
            height: 50px;
            width: 200px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #cef7cd;
            `}
          >
           <Icon.CheckCircle color="green"/> This is success alert box
          </alert>
        </>
      );
    }
  }


