import { css, styled } from "styled-components";

interface TaskItemContentProps {
  finished: boolean
}

export const TaskItemContent = styled.div<TaskItemContentProps>`
  display: flex;
  height: 72px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme['gray-500']};
  gap: 12px;

  div {
    display: flex;
    font-size: 14px;
    gap: 12px;

    input[type='checkbox'] {
      appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      border: 2px solid ${props => props.theme['blue']};
      border-radius: 50%;
      cursor: pointer;
      transition: 0.2s;
      gap: 12px;
    }

    input[type='checkbox']:checked {
      background-color: ${props => props.theme['purple-dark']};
      border: 2px solid ${props => props.theme['purple-dark']};
    }

    label {
      transition: color 0.5s;
      ${props => props.finished === false ? css`
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