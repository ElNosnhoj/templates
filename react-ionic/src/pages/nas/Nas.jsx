import React from 'react';
import styled from 'styled-components'
import { IonPage } from '@ionic/react';

const Container = styled(IonPage)`
    border: 0;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;

    iframe {
        border: 0;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
`

export const Nas = () => {
    return (
        <Container> 
            <iframe src="https://nas.johnson-le.com/nas?path=/"/>
        </Container>
    )
}

export default Nas
