import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: ${props => props.theme.position};
  width: 90%;
  margin: auto;
`;