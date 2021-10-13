/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import Status from "./status";
import "../../style.css";

const cookies = new Cookies();

const Component = styled.div`
  padding: 8px 16px;
  border-radius: 3px;
  ${cookies.get('lupobot_theme') === 'dark' && `background-color: #292D33;`}
  ${cookies.get('lupobot_theme') === 'light' && `background-color: #f7f7fa;`}
  justify-content: space-between;
  align-items: center;
  display: flex;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ComponentCompound = ({ component }) => {

  return (
    <Component>
      {component.title} <Status labels={component.labels} />
    </Component>
  );
};

export default ComponentCompound;
