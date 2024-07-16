import styled, { css } from "styled-components";

export const TaskFormContainer = styled.div`
  max-width: 736px;
  margin: 0 auto;
  margin-top: -1.75rem;
`;

export const TaskFormContent = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  input {
    flex: 1;
    border: 1px solid ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-300']};
    height: 54px;
    border-radius: 8px;
    background: ${props => props.theme['gray-500']};
    padding: 16px;
  }

  button {
    display: flex;
    border: 0;
    padding: 16px;
    background: ${props => props.theme['blue-dark']};
    color: ${props => props.theme['gray-100']};
    font-weight: bold;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 8px;

    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const TaskListContainer = styled.main`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 736px;
  height: auto;
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
    color: ${props.theme["blue"]};
  `: css`
    color: ${props.theme["purple"]};
  `}
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
`;