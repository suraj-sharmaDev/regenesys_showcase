/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Apr 05 2022
 *  File : index.jsx
 *******************************************/
import {RegisterBody} from 'components/register';
import { GenMetaInformation } from 'components/commons';

const RegisterPage = props => {
    return (
        <>
            <GenMetaInformation pageName={"register"} />
            <RegisterBody />
        </>
    )
}

export default RegisterBody;