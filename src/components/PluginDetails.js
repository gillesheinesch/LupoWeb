import React, { Component } from 'react';
import { Panel, Row, Col, Button, Table, Loader } from 'rsuite';
import { sendRequest } from '../Util';
import "../style.css";
import i18n from "../i18n.js";
import { Column, HeaderCell, Cell } from 'rsuite-table';
import { withRouter } from "react-router";

class PluginDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pluginJson: {},
            serverJson: {},
            commandData: [],
            isPluginLoaded: false,
            isServerLoaded: false,
            isCommandLoaded: false,
            isCommandDataLoaded: false
        }
    } 

    componentDidMount() {
        sendRequest('/plugins/' + this.props.plugin).then(res => {
            this.setState({ pluginJson: res.data, isPluginLoaded: true });
            sendRequest('/commands').then(res => {
                for (const command of this.state.pluginJson.commands) {
                    let object = { name: command, aliases: res.data[command].aliases, permissions: res.data[command].permissions };
                    this.state.commandData.push(object);
                }
                this.setState({ serverJson: res.data, isCommandLoaded: true });
            });
        });
        
        if (this.props.server != null) {
            sendRequest('/servers/' + this.props.server).then(res => {
                this.setState({ serverJson: res.data, isServerLoaded: true });
            });
        }  else {
            this.setState({ isServerLoaded: true })
        }
    }

    render() {
        if (this.state.isPluginLoaded && this.state.isServerLoaded && this.state.isCommandLoaded) {
            return (
                <Panel bordered shaded>
                    <Row className="show-grid">
                       <Col xs={24} sm={24} md={6} lg={5}>
                         <img src="https://via.placeholder.com/200x200" alt="Plugin" height="200" />
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={15}>
                            <h3>{this.state.pluginJson.translatedNames.en_US}</h3>
                            <p style={{fontSize: '15px', color: 'grey'}}>{ i18n.t('plugincards_author', { author: this.state.pluginJson.author }) }</p>
                            <p style={{fontSize: '15px', marginTop: '1em'}}>{this.state.pluginJson.translatedDescriptions.en_US}</p>

                            { this.props.server != null
                             ? <Button style={{ marginTop: '4em' }} block appearance="primary" color="green">
                                 { i18n.t('plugindetails_button-install', { server: this.state.serverJson.name }) }
                                </Button>
                             : <Button style={{ marginTop: '4em' }} block appearance="primary" onClick={() => this.props.history.push('/dashboard')}>
                                 { i18n.t('plugindetails_button-dashboard', { server: this.state.serverJson.name }) }
                                </Button>
                            }
                        </Col>
                    </Row>

                    <h3 style={{ marginTop: '2em', marginBottom: '0.5em' }}>{ i18n.t('plugindetails_commands') }</h3>
                    <Table data={this.state.commandData} autoHeight bordered>
                        <Column flexGrow={1} align="center" fixed>
                            <HeaderCell>{ i18n.t('plugindetails_command-name') }</HeaderCell>
                            <Cell dataKey="name" />
                        </Column>

                        <Column flexGrow={4} fixed>
                            <HeaderCell>{ i18n.t('plugindetails_command-alias') }</HeaderCell>
                            <Cell dataKey="aliases" />
                        </Column>

                        <Column flexGrow={4} fixed>
                            <HeaderCell>{ i18n.t('plugindetails_command-permission') }</HeaderCell>
                            <Cell dataKey="permissions" />
                        </Column>
                    </Table>
                </Panel>
            )
        } else {
            return (
                <Loader center size="lg" />
            )
        }
    }
}

export default withRouter(PluginDetails);