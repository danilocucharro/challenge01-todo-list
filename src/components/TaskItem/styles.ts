import { css, styled } from "styled-components";

interface TaskItemContentProps {
  finished: string
}

export const TaskItemContent = styled.div<TaskItemContentProps>`
  display: flex;
  height: 72px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme['gray-500']};

  div {
    display: flex;
    font-size: 14px;
    justify-content: space-around;

    input[type='checkbox'] {
      appearance: none;
      width: 18px;
      height: 18px;
      margin-right: 12px;
      border: 2px solid ${props => props.theme['blue']};
      border-radius: 50%;
      cursor: pointer;
      transition: 0.2s;
    }

    input[type='checkbox']:hover {
      opacity: 0.5;
    }

    input[type='checkbox']:checked {
      background-color: ${props => props.theme['purple-dark']};
      border: 2px solid ${props => props.theme['purple-dark']};
    }

    label {
      transition: 0.5s;
      ${props => props.finished === "false" ? css`
      color: ${props.theme['gray-100']}`
      : css`
      color: ${props.theme['gray-300']};
      text-decoration: line-through;
      `}
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