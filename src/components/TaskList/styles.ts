import styled, { css } from "styled-components";

export const TaskListContainer = styled.main`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 736px;
  height: 200px;
`;

interface TaskInfoContentProps {
  variant: "blue" | "purple";
}

export const TaskListInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 24px 0;

  div {
    display: flex;
    gap: 8px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
  }
`;

export const TaskInfoContent = styled.div<TaskInfoContentProps>`
  ${props => props.variant === "blue" ? css`
    color: ${props.theme["blue"]}  
  `: css`
    color: ${props.theme["purple"]}
  `};
`;

export const TaskInfoCounter = styled.span`
  color: ${props => props.theme['gray-200']};
  background: ${props => props.theme['gray-400']};

  font-size: 12px;
  padding: 2px 8px 2px 8px;
  border-radius: 999px;
`;

export const TaskListContentEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding: 4rem 1.5rem 4rem 1.5rem;
  color: ${props => props.theme['gray-300']};
  border-top: 1px solid ${props=> props.theme['gray-400']};

  span {
    font-weight: bold;
  }
`;

export const TaskListItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TaskItem = styled.div`
  display: flex;
  height: 72px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme['gray-500']};
  gap: 12px;

  form {
    color: ${props => props.theme['gray-100']};
    display: flex;
    gap: 12px;

    input[type='checkbox'] {
      appareance: none;
      width: 18px;
      height: 18px;
      border: 2px solid ${props => props.theme['blue']};
      border-radius: 50%;
      cursor: pointer;
    }

    input[type='checkbox']:checked {
      background-color: ${props => props.theme['purple-dark']};
    }

    label {
      font-size: 14px;
    }
  }

  button {
    display: flex;
    height: 20px;
    border: 0;
    background: transparent;
    color: ${props => props.theme['gray-300']};
    cursor: pointer;
  }
`