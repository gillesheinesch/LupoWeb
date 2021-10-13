/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import styled from "styled-components";
import Status from "./status";
import useIssues from "./useIssues";
import Components from "./components";
import Incidents from "./incidents";
import "./style.css";
import { Panel } from "rsuite";
import i18n from "../i18n";
import ShardStatus from "./components/ShardStatus";

const Container = styled.div`
  max-width: 1008px;
  padding: 16px;
  margin: 16px auto;
`;

const IssueStatus =  () => {
  // loading, errors, results, refetch
  const [
    componentsLoading,
    componentsError,
    componentsResults,
    componentsRefetch,
  ] = useIssues("component");
  const [
    incidentsLoading,
    incidentsError,
    incidentsResults,
    incidentsRefetch,
  ] = useIssues("incident");

  return (
    <Container>
      <h1>{i18n.t('statuspage_title')}</h1>
      <hr style={{marginBottom: '2em'}} />
      <Panel bordered shaded>
        <Status
          loading={componentsLoading || incidentsLoading}
          error={{
            hasError: componentsError || incidentsError,
            errors: { componentsError, incidentsError },
          }}
          components={componentsResults}
          refetch={() => {
            componentsRefetch();
            incidentsRefetch();
          }}
        />
        <Components
          loading={componentsLoading}
          components={componentsResults}
        />
        </Panel>
      <div>
        <h4 style={{ marginBottom: '1em', marginTop: '1em' }}>{i18n.t('statuspage_shardstatus-title')}</h4>
        <ShardStatus />
      </div>
      <Incidents loading={incidentsLoading} incidents={incidentsResults} />
    </Container>
  );
};

export default IssueStatus;
