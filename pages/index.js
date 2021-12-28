import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, loading } = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!session && (
        <>
          Not signed in <button onClick={signIn}>Sign in</button>
          </>
      )}
      
      {session ? (
        <Section>
        <Sidebar />
        </Section>) : (
          <p>This is an admin only page!!</p>
      )}
    </>
  );
}

const Section = styled.section``;
