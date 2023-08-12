import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';


const ContentWrapper = styled.div`
    /* position: absolute;  */
`;

const DashBoard = () => {

    const { name, accessToken } = useSelector((status) => ({
        name: status.myInfo.name,
        accessToken: status.login.accessToken
    }))

    return (
        <div>
            dashboard
        </div>
    );
}

export default DashBoard;