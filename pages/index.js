import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <Section>
        <Sidebar />
    </Section>
  )
}

const Section = styled.section``;