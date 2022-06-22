/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Jun 08 2022
 *  File : index.js
 *******************************************/
import { useRouter } from "next/router";
import React from "react";

const Index = (props) => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/landing/in/digitalMarketing");
  }, []);
  return null;
};

export default Index;
