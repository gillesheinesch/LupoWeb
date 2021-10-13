import React, { Component } from 'react';
import { Button, Col, Loader, Panel, Row } from 'rsuite';
import { sendRequest } from '../Util';
import i18n from "../i18n.js";
import { withRouter } from "react-router";

class PluginCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            json: {},
            isLoaded: false
        }
        
        this.renderCard = (plugin) => {
            return (
                <Col lg={6} md={12} sm={24} xs={24}>
                    <Panel className="bounce" shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: '5em' }}>
                        <img src="https://via.placeholder.com/240x240" alt="Plugin" height="240" />
                        <Panel header={this.state.json[plugin].translatedNames.en_US}>
                            <p style={{color: 'grey'}}><small>{ i18n.t('plugincards_author', { author: this.state.json[plugin].author }) }</small></p>
                            <p><small>{this.state.json[plugin].translatedDescriptions.en_US}</small></p>
                            <Button block style={{ marginTop: '1em' }} appearance="primary" onClick={() => this.props.history.push('/pluginstore/' + plugin)}>
                                { i18n.t('plugincards_button-show-more') }
                            </Button>
                        </Panel>
                    </Panel>  
                </Col>
            )
        }

        this.requestData = () => {
            sendRequest('/plugins').then(res => {
                Object.keys(res.data).forEach(plugin => {
                    if (this.props.plugin != null && !plugin.startsWith(this.props.plugin.toLowerCase())) {
                        delete res.data[plugin];
                    }
                });
                this.setState({ json: res.data });
                this.setState({ isLoaded: true })
            });
        }
    }

    componentDidMount() {
        this.requestData();
    }

    componentDidUpdate() {
        this.requestData();
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <Row>
                    {Object.keys(this.state.json).map(this.renderCard)}
                </Row>                
            )
        } else {
            return (
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <Loader center size="lg" />
                    </Col>
                </Row>
            )
        }
    }
}

export default withRouter(PluginCards);