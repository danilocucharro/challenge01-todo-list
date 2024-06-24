import styled from "styled-components";

export const TaskListContainer = styled.main`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 736px;
  height: 200px;
`;

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

export const TaskInfoProgress = styled.span`
  color: ${props => props.theme['gray-200']};
  background: ${props => props.theme['gray-400']};

  padding: 2px 10px 2px 10px;
  border-radius: 999px;
`;

export const TaskListContent = styled.section`

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 64px 24px 64px 24px;
    color: ${props => props.theme['gray-300']};
  }

  span {
    margin-top: 1rem;
    font-weight: bold;
  }
`;