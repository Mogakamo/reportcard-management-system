import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';

export default function teacher_dashboard() {
    return (
        <Section>
            <Sidebar />
            <NavBar />
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
`;