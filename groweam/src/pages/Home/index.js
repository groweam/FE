import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Meeting from '../Meeting';

const ContentWrapper = styled.div`
    /* position: absolute;  */
`;

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { name, accessToken } = useSelector((status) => ({
        name: status.myInfo.name,
        accessToken: status.login.accessToken
    }))
    
    const goToMeeing = useCallback(() => {
        navigate('../Meeting');
    }, [navigate]);

    return (
        <div>
            Home
            <button onClick={goToMeeing}></button>
        </div>
    );
}

export default Home;