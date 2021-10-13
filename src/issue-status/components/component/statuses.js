/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import i18n from "../../../i18n.js";

const statuses = {
  operational: {
    name: i18n.t('statuspage_status-operational'),
    colour: "#46b75d",
    backgroundColour: "rgba(61, 167, 81, 0.1)",
  },
  performanceIssues: {
    name: i18n.t('statuspage_status-performanceissues'),
    colour: "#4173ac",
    backgroundColour: "rgba(73, 144, 226, 0.1)",
  },
  partialOutage: {
    name: i18n.t('statuspage_status-partialoutage'),
    colour: "#aa8448",
    backgroundColour: "rgba(192, 138, 45, 0.1)",
  },
  majorOutage: {
    name: i18n.t('statuspage_status-majoroutage'),
    colour: "#b4554b",
    backgroundColour: "rgba(217, 68, 48, 0.1)",
  },
  maintenance: {
    name: i18n.t('statuspage_status-maintenance'),
    colour: "#a3a3a3",
    backgroundColour: "rgba(96, 96, 96, 1)",
  },
  unknown: {
    name: i18n.t('statuspage_status-unknown'),
    colour: "#b9b7b7",
    backgroundColour: "rgba(177, 177, 177, 0.1)",
  },
};

export default statuses;