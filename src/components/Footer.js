import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { Button, ButtonToolbar, FlexboxGrid, IconButton } from "rsuite";

function Footer() {
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <div style={{ marginTop: '10em' }}>
            <hr />
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                        <FlexboxGrid justify="center">
                            <ButtonToolbar>
                                <Button onClick={() => history.push('/invite')} appearance="subtle">{ t('footer_add-discord') }</Button>
                                <Button onClick={() => history.push('/support')} appearance="subtle">{ t('footer_support-server') }</Button>
                            </ButtonToolbar>
                        </FlexboxGrid>

                        <FlexboxGrid justify="center" style={{ marginTop: '1em', marginBottom: '1em' }}>
                            <ButtonToolbar>
                                <IconButton onClick={() => history.push('/support')} icon={ <i class="fab fa-discord"></i> } appearance="subtle" circle />
                                <IconButton onClick={() => history.push('/go/twitter')} icon={ <i class="fab fa-twitter"></i> } appearance="subtle" circle />
                                <IconButton onClick={() => history.push('/go/github')} icon={ <i class="fab fa-github"></i> } appearance="subtle" circle />
                                <IconButton onClick={() => history.push('/go/crowdin')} icon={ <i class="fas fa-globe"></i> } appearance="subtle" circle />
                            </ButtonToolbar>
                        </FlexboxGrid>

                        <FlexboxGrid justify="center">
                            <ButtonToolbar>
                                <Button onClick={() => history.push('/terms/imprint')} appearance="link">{ t('imprint') }</Button>
                                <Button onClick={() => history.push('/terms/privacy')} appearance="link">{ t('privacy') }</Button>
                            </ButtonToolbar>
                        </FlexboxGrid>

                        <FlexboxGrid justify="center">
                            <Button appearance="link" disabled>&copy; LupoBot {new Date().getFullYear()}. All rights reserved.</Button>
                        </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}

export default Footer;