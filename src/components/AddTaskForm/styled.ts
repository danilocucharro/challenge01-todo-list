import styled from "styled-components";

export const TaskFormContainer = styled.div`
  height: 54px;
  max-width: 736px;
  margin: 0 auto;
  margin-top: -1.75rem;
`;

export const TaskFormContent = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  input {
    flex: 1;
    border: 1px solid ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-300']};
    height: 54px;
    border-radius: 8px;
    background: ${props => props.theme['gray-500']};
    padding: 1rem;
  }

  button {
    display: flex;
    width: 90px;
    border: 0;
    background: ${props => props.theme['blue-dark']};
    color: ${props => props.theme['gray-100']};
    font-weight: bold;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 2px;
    line-height: 0;

    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme['blue']};
    }
  }
`;