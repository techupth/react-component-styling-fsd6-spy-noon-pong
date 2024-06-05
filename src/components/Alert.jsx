/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function AlertError(props) {
    if (props.type === "error"){
        return( 
            <button css={css`
            width: 650px;
            height: 76px;
            radius: 10px;
            background-color:#F9C8C8;
            border: 10px;
            padding: 0px, 16px, 0px, 16px;
            margin: 20px;
            color:  #444444;

          `}> <img src="./img/frown.png" alt=""  />
            <span>  This is error alert box</span></button>
    
        )
    }
    
}
export function AlertWarning(props) {
    if (props.type === "warning"){
        return( 
            <button css={css`
            width: 650px;
            height: 76px;
            radius: 10px;
            background-color:#F9C8C8;
            border: 10px;
            padding: 0px, 16px, 0px, 16px;
            margin: 20px;
            color:  #444444;
          `}> <img src="./img/tri.png" alt="" />
            <span>  This is warning alert box</span></button>
    
        )
    }
}
export function AlertInfo(props) {
    if(props.type === "info"){
        return( 
            <button css={css`
            width: 650px;
            height: 76px;
            radius: 10px;
            background-color: #F9EBC8;
            border: 10px;
            padding: 0px, 16px, 0px, 16px;
            margin: 20px;
            color:  #444444;
          `}><img src="./img/cir.png" alt="" />
          <span>  This is warning alert box</span></button>
    
        )
    }
    
}
export function AlertSuccess(props) {
    if(props.type === "success"){
        return( 
            <button css={css`
            width: 650px;
            height: 76px;
            radius: 10px;
            background-color: #CEF7CD;
            border: 10px;
            padding: 0px, 16px, 0px, 16px;
            margin: 20px;
            color:  #444444;
          `}> <img src="./img/check.png" alt="" />
            <span>  This is success alert box</span></button>
    
        )
    } 
}


