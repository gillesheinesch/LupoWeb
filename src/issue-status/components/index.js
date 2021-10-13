/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React from "react";
import Skeleton from "./skeleton";
import Component from "./component";
import useDidMount from "../useDidMount";
import i18n from "../../i18n.js";

const ComponentList = ({ loading, components }) => {
  const [hasMounted] = useDidMount();

  return !loading || hasMounted ? (
    components?.length > 0 ? (
      components?.map((component) => (
        <Component key={component.id} component={component} />
      ))
    ) : (
      <p>{i18n.t('statuspage_components-not-found')}</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};

export default ComponentList;