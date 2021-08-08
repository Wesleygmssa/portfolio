import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
    background: #293647;
    position: relative;

    .menuActive {
        transition: 2s;
        opacity: 0.8;
        padding-bottom: 5px;
        border-bottom: 2px solid var(--primary-color);
    }

    div {
        a {
            font-weight: bold;
            color: var(--primary-color);
            font-size: 14px;
            text-decoration: none;
            transition: all 0.5s;
        }

        a:hover {
            opacity: 0.6;
        }

        a + a {
            margin-left: 24px;
        }
    }
`;

export const Bell = styled.div`
    padding: 5px;
    position: absolute;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.6;

    svg {
        color: #fff;
        font-size: 22px;
    }

    &:hover {
        padding: 5px;
        opacity: 1;
    }
`;

// export const Link = styled.a<ContainerProps>``
