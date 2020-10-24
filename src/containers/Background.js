import styled from "styled-components";


export default styled.div`
    max-width: 1200px;
    min-height: 100vh;
    margin: auto;
    background-size: 100% 100%;
    background-image: url(${props => props.theme.backgroundImage});
    
`;