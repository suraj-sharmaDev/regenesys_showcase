/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 04 2022
 *  File : index.jsx
 *******************************************/
import {Banner, AboutDescription, InfoGraphics, VisionBanner, MarkoBanner} from 'components/about';
import { GenMetaInformation } from 'components/commons';

const AboutPage = props => {
    return (
        <div>
            <GenMetaInformation pageName={"about"} />
            <Banner />
            <AboutDescription />
            <VisionBanner />
            <InfoGraphics />
            <MarkoBanner />
        </div>
    )
}

export default AboutPage;