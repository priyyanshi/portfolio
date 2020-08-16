import React, {Component} from 'react'
import pic from './pics/chat.png'

export default class ChatBot extends Component {
    render() {
        return (
            <div>
                <style> {"\
                    #df-messenger {\
                        --df-messenger-bot-message: white;\
                        --df-messenger-button-titlebar-color: #2a2a2a;\
                        --df-messenger-button-titlebar-font-color: white;\
                        --df-messenger-chat-background-color: #f5eee9;\
                        --df-messenger-font-color: #1a1a1a;\
                        --df-messenger-input-box-color: #2a2a2a;\
                        --df-messenger-input-font-color: white;\
                        --df-messenger-input-placeholder-font-color: white;\
                        --df-messenger-minimized-chat-close-icon-color: #1a1a1a;\
                        --df-messenger-send-icon: white;\
                        --df-messenger-user-message: #e6eff5;\
                    }\
                "}
                </style>
                <df-messenger id="df-messenger"
                    style={{dfMessengerButtonTitlebarColor:"white"}}
                    intent="WELCOME"
                    chat-icon={pic}
                    chat-title="Priyanshi"
                    agent-id="8f53ee1b-70b6-41b5-abab-6f22574883b8"
                    language-code="en"
                ></df-messenger>
            </div>
        )
    }
}