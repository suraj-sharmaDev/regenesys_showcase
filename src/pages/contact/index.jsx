/******************************************
 *  Author : Suraj Sharma
 *  Created On : Thu Apr 07 2022
 *  File : index.jsx
 *******************************************/
import React from "react";
import {
  Banner,
  ContactDetails,
  ContactForm,
  LocationMap,
} from "components/contact";
import { Loader, GenMetaInformation } from "components/commons";
import { contactService } from "services/api";

const ContactPage = (props) => {
  const [isLoading, setLoading] = React.useState(false);
  const mapDivRef = React.useRef(null);

  const scrollTo = () => {
    mapDivRef?.current && mapDivRef.current.scrollIntoView();
  };

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await contactService.contactUs({...data, type: 'contact-us'});
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
      <GenMetaInformation pageName={"contact"} />
      <Loader isLoading={isLoading} />
      {/* <Banner /> */}
      <ContactDetails scrollTo={scrollTo} />
      <ContactForm handleSubmit={handleSubmit} />
      <LocationMap propRef={mapDivRef} />
    </div>
  );
};

export default ContactPage;
