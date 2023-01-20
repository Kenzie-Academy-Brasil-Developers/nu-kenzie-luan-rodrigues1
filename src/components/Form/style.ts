import styled from "styled-components";

export const FormStyle = styled.section`
    .containerForm {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 20px;
        border: 1px solid var(--grey2);
        padding: 30px 0px;
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

    .formAdd > input {
        margin: 10px 0;
    }

    .formAdd > span {
        width: 100%;
        display: flex;
        color: var(--grey3);
    }

    .formAdd > div {
        margin: 15px 0px;
        display: flex;
        justify-content: space-between;
    }

    .inputFomAdd {
        height: 40px;
        background-color: var(--grey1);
        padding-left: 10px;
        border: none;
        border-radius: 6px;
    }

    .boxSelectForm {
        width: 45%;
        margin-bottom: 5px;
    }

    .boxSelectForm > input {
        width: 100%;
        margin-top: 5px;
    }

    .boxSelectForm > select {
        width: 100%;
        margin-top: 5px;
        color: var(--grey3)
    }

    .formAdd > button {
        width: 100%;
        height: 40px;
        background-color: var(--colorPrimary);
        color: var(--white);
        border: none;
        border-radius: 6px;
    }

`