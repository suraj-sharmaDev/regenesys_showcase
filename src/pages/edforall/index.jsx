import React from "react";
import { Banner } from "components/edforall";
import { Loader, GenMetaInformation } from "components/commons";
import {RequestCallBackPopup} from 'components/commons/brochurePopup';

import { contactService } from "services/api";

const EdforlAll = () => {
  const [show, setShow] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleContactSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await contactService.contactUs({
        ...data,
        type: "consultancy",
      });
      if (result?.httpStatusCode == 200) {
        setLoading(false);
        alert("We will get back to you!");
      } else {
        setLoading(false);
        alert("Could not post your request");
      }
    } catch (error) {
      setLoading(false);
      alert("Could not post your request");
    }
  };

  return (
    <div>
      <GenMetaInformation pageName={"edforall"} />
      <Loader isLoading={isLoading} />
      <Banner
        handleShow={handleShow}
        handleContactSubmit={handleContactSubmit}
      />
      <RequestCallBackPopup show={show} setShow={setShow} />
    </div>
  );
};

export default EdforlAll;
