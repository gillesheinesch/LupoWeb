import React, { Fragment, useState } from "react";
import PluginCards from "../components/PluginCards.js";
import { useTranslation } from "react-i18next";
import TopNavbar from "../components/TopNavbar.js";
import { FlexboxGrid, InputGroup, Input } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';

function PluginStorePage() {

    const [search, setSearch] = useState("");
    const { t } = useTranslation();

    const handleSearchChange = (value) => {
        setSearch(value);
    }

    return (
        <Fragment>
          <TopNavbar />
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={15}>
                <h1 style={{marginTop: '1em'}}>Plugins</h1>
                <hr />
                <h3 style={{marginTop: '1em'}}>{ t('pluginstorepage_search') }</h3>
                <InputGroup size="lg" style={{ width: 300, marginTop: '1em' }}>
                    <InputGroup.Addon><SearchIcon /></InputGroup.Addon>
                    <Input placeholder={ t('pluginstorepage_search-placeholder') } onChange={handleSearchChange} />
                </InputGroup>
                <PluginCards plugin={search} />
            </FlexboxGrid.Item>
        </FlexboxGrid>
        </Fragment>
    )
}

export default PluginStorePage;