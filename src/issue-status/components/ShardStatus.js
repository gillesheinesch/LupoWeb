/*
Source: https://github.com/tadhglewis/issue-status (14/10/2021)
Copyright: 2020 Tadhg Lewis
License: MIT (https://github.com/tadhglewis/issue-status/blob/master/LICENSE)
*/

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonToolbar, Loader, Popover, Whisper } from "rsuite";
import { sendRequest } from "../../Util.js";

function ShardStatus() {

    const { t } = useTranslation();
    const [shards, setShards] = useState({});


    const renderShard = (shard) => {
        const speaker = (
            <Popover title={ t('statuspage_shardstatus-info-title', { shard: shard }) } style={{ width: 200 }}>
                <p>{ t('statuspage_shardstatus-info-guilds', { guilds: shards[shard].guilds }) }</p>
              <p>{ t('statuspage_shardstatus-info-ping', { ping: shards[shard].ping }) }</p>
              <p>{ t('statuspage_shardstatus-info-status', { status: shards[shard].status }) }</p>
            </Popover>
        )

        let color = "green";
        if (shards[shard].status !== 'CONNECTED') {
            color = "red";
        }

        return (
            <Whisper speaker={speaker} trigger="hover" placement="auto">
                <Button color={color} appearance="primary" size="lg">{shard}</Button> 
            </Whisper>
        )
    }


    useEffect(() => {
        sendRequest('/shards').then(res => {
            setShards(res.data);
        }).catch(error => {
            setShards(null);
        });
      }, []);

    return (
        <div>
            { shards == null 
            ? <Loader size="md" />
            : <ButtonToolbar>
                 {Object.keys(shards).map(renderShard)}
              </ButtonToolbar>
            }
        </div>
    )
}

export default ShardStatus;