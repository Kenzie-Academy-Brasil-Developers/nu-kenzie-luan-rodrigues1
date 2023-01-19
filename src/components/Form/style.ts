import styled from "styled-components";

export const FormStyle = styled.section`
    .containerForm {
        width: 90%;
        margin: 0 auto;
        border: 1px solid var(--grey2);
        padding: 25px 0px;
    }

    .formAdd {
        width: 92%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .formAdd > label {
        width: 100%;
        display: flex;
    }

    .formAdd > div {
        margin: 15px 0px;
        display: flex;
        justify-content: space-between;
    }

    .labelFormAdd {
        color: var(--grey4);
    }

    .inputFomAdd {
        height: 40px;
        background-color: var(--grey1);
        border: none
    }
`