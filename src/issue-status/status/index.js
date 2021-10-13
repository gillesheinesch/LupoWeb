/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import styled from "styled-components";
import useStatus from "./useStatus";
import useRefetch from "./useRefetch";
import i18n from "../../i18n";

const StatusBar = styled.div`
  background-color: ${(props) =>
    props.backgroundColour ? props.backgroundColour : "#b1b1b1"};
  color: white;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const Status = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

const Reload = styled.button`
  background-color: transparent;
  color: white;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  text-align: right;
  padding: 0;
`;

const Code = styled.code`
  white-space: pre-wrap;
  display: block;
`;

const StatusCompound = ({ loading, error, components, refetch }) => {
  const [status] = useStatus(components);
  const [timeAgo] = useRefetch(refetch, loading);

  return (
    <>
      {error.hasError && (
        <Code>
          <div>{i18n.t('statuspage_error')}</div>
          <div>
            {i18n.t('statuspage_error-description')}
          </div>
          {JSON.stringify(error.errors, null, 3)}
        </Code>
      )}
      <StatusBar backgroundColour={status?.backgroundColour}>
        <Status>{status?.message}</Status>
        <Reload onClick={refetch}>{loading ? i18n.t('statuspage_reloading') : timeAgo}</Reload>
      </StatusBar>
    </>
  );
};

export default StatusCompound;