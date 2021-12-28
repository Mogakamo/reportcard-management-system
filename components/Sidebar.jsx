import { GoBriefcase } from 'react-icons/go'
import React, {
    useEffect, useState
} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import {MdDashboard, MdSpaceDashboard} from 'react-icons/md'
import { RiDashboard2Fill } from 'react-icons/ri'
import { FaAddressCard, FaFolderOpen, FaTaxi, FaUserFriends, FaUserGraduate } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";


export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)

    return (
      <Section>
        <div className="top">
          <div className="brand">
            <GoBriefcase />
            <span>Examination</span>
          </div>
          <div className="links">
            <ul>
              <li className={currentLink === 1 ? "active" : "none"}>
                <a href="/dashboard">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className={currentLink === 2 ? "active" : "none"}>
                <a href="">
                  <FaUserFriends />
                  Students
                </a>
              </li>
              <li className={currentLink === 3 ? "active" : "none"}>
                <a href="">
                  <FaFolderOpen />
                  Results
                </a>
              </li>
              <li className={currentLink === 4 ? "active" : "none"}>
                <a href="">
                  <FaUserGraduate />
                  Classes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  color: white;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: yellow;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        font-family: "PT Sans", sans-serif;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: yellow;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: yellow;
          a {
                color: black;
            
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
`;

