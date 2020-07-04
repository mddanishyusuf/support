import React, { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import {AiOutlineCode} from 'react-icons/ai'

import HeadMeta from '../components/head'
import ProfileBox from '../components/profileBox';
import BuyCoffee from '../components/buyCoffee';
import Messages from '../components/messages';

export default function Home() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('/api/messages', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setMessages(JSON.parse(result));
            })
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <div className="main-container">
            <HeadMeta />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileBox />
                    </div>
                    <div className="content-conatiner col-md-8">
                        <BuyCoffee messages={messages} />
                        <Messages messages={messages} />
                    </div>
                </div>
            </div>
        </div>
    )
}
