/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 84px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
