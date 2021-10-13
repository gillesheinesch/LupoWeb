/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import styled from "styled-components";
import Incident from "./incident";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";
import i18n from "../../i18n.js";

const Container = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const NoFound = styled.div`
  margin: 0 8px;
`;

const IncidentList = ({ loading, incidents }) => {
  const [hasMounted] = useDidMount();

  return (
    <Container>
      <h4 style={{marginBottom: '1em'}}>{i18n.t('statuspage_incidents-title')}</h4>
      {!loading || hasMounted ? (
        incidents?.length > 0 ? (
          incidents?.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))
        ) : (
          <NoFound>{i18n.t('statuspage_incidents-not-found')}</NoFound>
        )
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  );
};

export default IncidentList;