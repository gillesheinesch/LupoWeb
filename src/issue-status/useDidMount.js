/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import { useEffect, useState } from "react";

const useDidMount = () => {
  const [hasMounted, setHasMounted] = useState();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return [hasMounted];
};

export default useDidMount;