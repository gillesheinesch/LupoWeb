import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { FlexboxGrid, Nav } from "rsuite";
import TopNavbar from "../components/TopNavbar";

function ImprintPage() {
    const { t } = useTranslation();
    const history = useHistory();

    return (
      <Fragment>
        <TopNavbar />
        <FlexboxGrid justify="center" style={{marginTop: '3em'}}>
          <FlexboxGrid.Item colspan={15}>
            <Nav appearance="subtle" justified style={{marginBottom: '2em'}}>
              <Nav.Item active onSelect={ () => history.push('/terms/imprint') }> { t('imprint') } </Nav.Item>
              <Nav.Item onSelect={ () => history.push('/terms/privacy') }> { t('privacy') } </Nav.Item>
            </Nav>

            <div>
            <h1>Site Notice</h1>

<h2>Information pursuant to § 5 TMG</h2>
<p>MISSING NAME<br />
MISSING ADDRESS</p>

<h2>Contact</h2>
<p>Phone: MISSING PHONENUMBER<br />
    E-mail: MISSING EMAIL</p>

<h3>Liability for Contents</h3>
<p>As service providers, we are liable for own contents of these websites according to Sec. 7,
    paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act
    (TMG), service providers are not obligated to permanently monitor submitted or stored
    information or to search for evidences that indicate illegal activities.</p>
<p>Legal obligations to removing information or to blocking the use of information remain
    unchallenged. In this case, liability is only possible at the time of knowledge about a
    specific violation of law. Illegal contents will be removed immediately at the time we get
    knowledge of them.</p>
<h3>Liability for Links</h3>
<p>Our offer includes links to external third party websites. We have no influence on the contents
    of those websites, therefore we cannot guarantee for those contents. Providers or
    administrators of linked websites are always responsible for their own contents.</p>
<p>The linked websites had been checked for possible violations of law at the time of the
    establishment of the link. Illegal contents were not detected at the time of the linking. A
    permanent monitoring of the contents of linked websites cannot be imposed without reasonable
    indications that there has been a violation of law. Illegal links will be removed immediately
    at the time we get knowledge of them.</p>
<h3>Copyright</h3>
<p>Contents and compilations published on these websites by the providers are subject to German
    copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the
    scope of the copyright law require a written permission of the author or originator. Downloads
    and copies of these websites are permitted for private use only.<br /> The commercial use of
    our contents without permission of the originator is prohibited.</p>
<p>Copyright laws of third parties are respected as long as the contents on these websites do not
    originate from the provider. Contributions of third parties on this site are indicated as such.
    However, if you notice any violations of copyright law, please inform us. Such contents will be
    removed immediately.</p>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Fragment>
    )
}

export default ImprintPage;