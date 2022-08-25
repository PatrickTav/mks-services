import styled from "styled-components";

declare module 'styled-components'{
  export interface DefaultTheme{
    colors:{
      primary:string,
      secondary:string,
      button:string    
    },
    fontFamily:{
      montserrat:string
    }
  }
}