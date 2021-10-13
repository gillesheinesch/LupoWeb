/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import { useState, useEffect } from "react";
import statuses from "./statuses";

const useStatus = (labels) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(
      Object.values(statuses).find((status) =>
        labels.find((label) => label.name === status.name.toLowerCase())
      )
    );
  }, [labels]);

  if (!status) setStatus(statuses.unknown);

  return [status];
};

export default useStatus;