import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    height: 100vh;
    position: relative;
    padding: 60px 30px;

    @media (min-width: 700px) {
        height: 100%;
    }
`;
export const Content = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 80px;
        padding: 16px 20px;
    }

    span {
        font-size: 35px;
        opacity: 0.7;
        font-family: "Courier New", Courier, monospace;
        font-weight: 300;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 50px;
        }
        span {
            font-size: 20px;
        }
    }
`;
