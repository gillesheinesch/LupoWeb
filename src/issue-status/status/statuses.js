/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import i18n from "../../i18n";

const statuses = {
  operational: {
    message: i18n.t('statuspage_statuses-operational'),
    backgroundColour: "#3da751",
  },
  issues: {
    message: i18n.t('statuspage_statuses-issues'),
    backgroundColour: "#e27b49",
  },
  outage: {
    message: i18n.t('statuspage_statuses-outage'),
    backgroundColour: "#d94430",
  },
};

export default statuses;