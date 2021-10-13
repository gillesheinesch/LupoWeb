/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import styled from "styled-components";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Cookies from "universal-cookie";
import i18n from "../../../i18n.js";

const cookies = new Cookies();

const Incident = styled.div`
  transition: 0.3s;
  border-left: 16px solid
    ${(props) =>
      props.active ? "rgba(177, 177, 177,0.2)" : "rgba(213, 119, 51, 0.25)"};
  ${cookies.get('lupobot_theme') === 'dark' && `background-color: #292D33;`}
  ${cookies.get('lupobot_theme') === 'light' && `background-color: #f2f2f5;`}
  border-radius: 3px;
  padding: 16px;
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  margin-top: 8px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

const Title = styled.h4`
  margin-right: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 0;
  ${cookies.get('lupobot_theme') === 'dark' && `color: white`}
  color: #1e1e1e;
`;

const Comment = styled.div`
  white-space: break-spaces;
  ${cookies.get('lupobot_theme') === 'dark' && `color: white`}
  color: #1e1e1e;
`;

const Status = styled.div`
  color: ${(props) => (props.active ? "#5787be" : "#2f5888")};
  background-color: ${(props) =>
    props.active ? "rgba(96, 96, 96, 0.1)" : "rgba(73, 144, 226, 0.1)"};
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: 0.3s;
`;

const Created = styled.div`
  font-size: 13px;
  ${cookies.get('lupobot_theme') === 'dark' && `color: white`}
  color: #6e6b6b;
  font-weight: bold;
`;

const IncidentCompound = ({ incident }) => (
  <Incident active={incident.closed_at}>
    <Details>
      <Created>
        {moment(incident.created_at)
          .format("MMMM Do YYYY, h:mm a")
          .toUpperCase()}
      </Created>
      <Status className={incident.closed_at ? null : 'activeIncident'} active={incident.closed_at}>
        {incident.closed_at ? i18n.t('statuspage_incident-closed') : i18n.t('statuspage_incident-active')}
      </Status>
    </Details>
    <Title>{incident.title}</Title>
    <Comment>
    <ReactMarkdown className="incident" children={incident.body} />
    </Comment>
  </Incident>
);

export default IncidentCompound;