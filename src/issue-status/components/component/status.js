/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import styled from "styled-components";
import useStatus from "./useStatus";

const Status = styled.div`
  color: ${(props) => props.colour};
  background-color: ${(props) => props.backgroundColour};
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: 0.3s;
`;

const StatusCompound = ({ labels }) => {
  const [status] = useStatus(labels);

  return (
    <Status colour={status?.colour} backgroundColour={status?.backgroundColour}>
      {status?.name}
    </Status>
  );
};

export default StatusCompound;