import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { FlexboxGrid, Nav } from "rsuite";

function ImprintPage() {
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <FlexboxGrid justify="center" style={{marginTop: '3em'}}>
          <FlexboxGrid.Item colspan={15}>
            <Nav appearance="subtle" justified style={{marginBottom: '2em'}}>
              <Nav.Item active onSelect={ () => history.push('/terms/imprint') }> { t('imprint') } </Nav.Item>
              <Nav.Item onSelect={ () => history.push('/terms/privacy') }> { t('privacy') } </Nav.Item>
            </Nav>

            <div>
                <h1>Enter here imprint</h1>
            </div>
          </FlexboxGrid.Item>
      </FlexboxGrid>
    )
}

export default ImprintPage;