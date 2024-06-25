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
  border-bottom: 1px solid ${props=> props.theme['gray-400']};

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

  padding: 2px 10px 2px 10px;
  border-radius: 999px;
`;

export const TaskListContent = styled.section`

`;

export const TaskItem = styled.div`
  display: flex;
  height: 72px;
  background: brown;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme['gray-500']};
  
  form {
    color: ${props => props.theme['gray-100']};
    align-items: center;
    justify-content: center;

    input {
      width: 18px;
      height: 18px;
      appearance: none;
      border: 2px solid ${props => props.theme['blue']};
      border-radius: 50%;
      cursor: pointer;
      background-color: transparent;
    }

    input:checked {
      background-color: ${props => props.theme['purple']};
      appearance: text-field;
    }
  }
`