import { styled } from "styled-components";

export const TaskItemContent = styled.div`
  display: flex;
  height: 72px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme['gray-500']};
  gap: 12px;

  div {
    color: ${props => props.theme['gray-100']};
    display: flex;
    gap: 12px;

    input[type='checkbox'] {
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid ${props => props.theme['blue']};
      border-radius: 50%;
      cursor: pointer;
      transition: 0.2s;
    }

    input[type='checkbox']:checked {
      background-color: ${props => props.theme['purple-dark']};
      border: 2px solid ${props => props.theme['purple-dark']};
    }

    label {
      font-size: 14px;
    }
  }

  button {
    display: flex;
    height: 20px;
    margin-left: auto;
    border: 0;
    background: transparent;
    color: ${props => props.theme['gray-300']};
    cursor: pointer;
    transition: color 0.1s;

    &:hover{
      color: ${props => props.theme['danger']};
    }
  }

`;