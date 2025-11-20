import React, { useState } from 'react';
import { Modal, Button, Input, List, Spin } from 'antd';
import './ChatBot.css';

import postRequest from '../../postService';

import { config } from '../../config';


import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../redux/actions'; 

function ChatBot() {
    const error_msg = { sender: 'Bot', message: "It appears that my servers are facing some issues. Can you refresh the page to try again and, if the error persist, try again after a while?" }

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const chatHistory = useSelector((state) => state.task.chatHistory);
    const dispatch = useDispatch();

    const openChat = () => {
        setVisible(true);
    };
    const closeChat = () => {
        setVisible(false);
        setMessage('');
    };

    const handleSendMessage = () => {
        

        dispatch(sendMessage({ sender: 'User', message }));
        if (message.trim() === '') return;
        setLoading(true);
        postRequest(
            config.chatbot_url + '/get_answer',
            {
                question: message
            }
        ).then(result => {
            console.log("RESULT NO COMPONENTE");
            console.log(result);
            try {
                
                if (!result.isError) {
                    const botResponse = result.body;
                    dispatch(sendMessage({ sender: 'Bot', message: botResponse }));
                    setMessage('');
                    setLoading(false)
                } else {
                    throw result;
                }
            } catch (error) {
                dispatch(sendMessage(error_msg));
                setMessage('');
                setLoading(false)
            }

        })

    };
    return (
        <div className="chatbot-container">
            <Button
                type="primary"
                shape="round"
                size="large"
                className="chatbot-trigger-btn"
                onClick={openChat}
            >
                Chatbot Help
            </Button>

            <Modal
                title="Ask Mario Anything"
                open={visible}
                onCancel={closeChat}
                zIndex={999}
                width="clamp(300px, 90vw, 600px)"
                className="chat-modal"
                footer={null}
                bodyStyle={{ padding: '1rem' }}
            >
                <div className="chat-history">
                    <Spin spinning={loading}>
                        <List
                            dataSource={chatHistory}
                            renderItem={(item) => (
                                <div className="chat-message-wrapper">
                                    <div
                                        className={`chat-message ${item.sender === 'Bot' ? 'bot-message' : 'user-message'}`}
                                    >
                                        <p className="chat-content">{item.message}</p>
                                    </div>
                                </div>
                            )}
                        />
                    </Spin>
                </div>

                {/* Message input footer */}
                <div className="chat-input-footer">
                    <Input
                        className="chat-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onPressEnter={handleSendMessage}
                        maxLength={500}
                    />
                    <Button
                        className="chat-send-btn"
                        onClick={handleSendMessage}
                        disabled={loading || !message.trim()}
                        type="primary"
                    >
                        Send
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default ChatBot;