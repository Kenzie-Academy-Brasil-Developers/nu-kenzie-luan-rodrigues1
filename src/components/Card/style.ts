import styled from "styled-components";

export const CardStyle = styled.li`
    width: 100%;
    .boxCard {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 15px;
        padding: 10px 0 10px 10px;
        border-left: 3px solid var(--ColorSecondary);
        border-radius: 4px;
        margin-bottom: 15px;
        background-color: var(--grey1);
    }

    .boxExpenseCard {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 15px;
        padding: 10px 0 10px 10px;
        border-left: 3px solid var(--grey2);
        border-radius: 4px;
        margin-bottom: 15px;
        background-color: var(--grey1);
    }

    span {
        color: var(--grey3);
    }

    p {
        color: var(--grey3);
    }

    button {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--grey1);
        border-radius: 4px;
    }

    button:hover {
        border: 1px solid var(--grey3);
    }

    @media (min-width: 900px) {
        
    }

`