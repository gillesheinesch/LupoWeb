/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import { useState, useEffect } from "react";
import statuses from "./statuses";

const useStatus = (components) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    let statusSet = false;

    if (getComponentLabelPercent(components, "operational") < 100) {
      setStatus(statuses.issues);
      statusSet = true;
    }

    if (getComponentLabelPercent(components, "major outage") > 0) {
      setStatus(statuses.outage);
      statusSet = true;
    }

    if (!statusSet) setStatus(statuses.operational);
  }, [components]);

  return [status];
};

const getComponentLabelPercent = (components, label) =>
  (components.filter((component) =>
    component.labels.find((componentLabel) => componentLabel.name === label)
  ).length *
    100) /
  components.length;

  export default useStatus;