import styled from "styled-components";

export const StyledSearchBar = styled.div`
  .searchinput {
    width: 90%;
    height: 43px;
    border-radius: 6px;
  }
  .botonSearch {
    width: 43px;
    height: 43px;
    border-radius: 6px;
    background-color: #64dfdf;
    color: #f2f2f2;
  }
  .contentResult{
    width:100%;
    max-width: 25rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: min-content;
    top: 2.5rem;
  }
  .contentResultItem{
    position: relative;
    border: 1px solid #c4c4c4;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    img{
      width:5vw;
      height:5vw;
      object-fit: cover;
      margin:auto;
    }
    div {
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    background-color: #f0f0f0;
    display: flex;
      a, a:active, a:focus, a:link {
        text-decoration: none;
      }
      &:hover{
        color: #6930C3;
      }
      .name{
        width: 100%;
        color: #000;
      }
    }
  }

`;
