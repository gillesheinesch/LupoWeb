import React, { Fragment } from "react";
import PluginDetails from "../components/PluginDetails.js";
import TopNavbar from "../components/TopNavbar.js";
import { FlexboxGrid } from "rsuite";
import { useParams } from "react-router";

function PluginStorePage() {

    const { plugin } = useParams();

    return (
        <Fragment>
          <TopNavbar />
          <FlexboxGrid justify="center" style={{marginTop: '5em'}}>
            <FlexboxGrid.Item colspan={15}>
                <PluginDetails plugin={plugin} />
            </FlexboxGrid.Item>
        </FlexboxGrid>
        </Fragment>
    )
}

export default PluginStorePage;