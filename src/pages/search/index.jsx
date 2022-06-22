/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 18 2022
 *  File : index.jsx
 *******************************************/
import React from "react";
import { useRouter } from "next/router";
import { Body } from "components/search";
import { GenMetaInformation } from 'components/commons';

const Index = (props) => {
  const router = useRouter();
  const [state, setState] = React.useState({
    searchKey: "",
  });

  React.useEffect(()=>{
    const { searchKey } = router.query;
    console.log(searchKey);
  }, [router.query])

  const onHandleTextChange = (e) => {
    setState({
      ...state,
      searchKey: e.target.value,
    });
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    setState({
      ...state,
      searchKey: "",
    });

    router.push(
      {
        pathname: "/search",
        query: { searchKey: state.searchKey },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <>
      <GenMetaInformation pageName={"search"} />
      <Body onSubmit={onSubmitSearch} handleTextChange={onHandleTextChange} />
    </>
  );
};

export default Index;
