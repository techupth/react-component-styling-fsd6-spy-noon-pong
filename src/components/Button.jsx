/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export function PrimaryButtonButton() {
  return(<button
    css={css`
      width: 171px;
      height: 50px;
      radius: 4px;
      background-color: #074ee8;
      border: 10px;
      padding: 0px, 16px, 0px, 16px;
      margin: 20px;
      font-color: white;
    `}
  >Button
  </button>)
  }
    
  export function SecondaryButton() {
    return (
      <button
        css={css`
          width: 171px;
          height: 50px;
          radius: 4px;
          background-color: #07a4e8;
          border: 0px;
          padding: 0px, 16px, 0px, 16px;
          font-color: white;
        `}
      >
        Button
      </button>
    );
  }

 