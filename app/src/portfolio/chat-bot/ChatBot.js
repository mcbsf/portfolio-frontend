import React, { useState } from 'react';
import { Modal, Button, Input, List, Spin } from 'antd';
import './ChatBot.css';

import postRequest from '../../postService';

import { config } from '../../config';

function ChatBot() {
    const default_chat_msg = [{ sender: 'Bot', message: "Hello, my name is MarioBot! How can I help you? \n\nI can answer any question about this website content with LLM technicques \n\nPS: I can eventually write some errors" }]
    const error_msg = { sender: 'Bot', message: "It appears that my servers are facing some issues. Can you refresh the page to try again and, if the error persist, try again after a while?" }

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState(default_chat_msg);


    const openChat = () => {
        setVisible(true);
    };

    const closeChat = () => {
        setVisible(false);
        setMessage('');
        setChatHistory(default_chat_msg);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        setLoading(true);
        console.log(config);
        console.log("post");
        postRequest(
            config.chatbot_url + '/get_answer',
            {
                question: message
            }
        ).then(result => {
            console.log("RESULT NO COMPONENTE");
            console.log(result);
            if (result) {
                if (!result.isError) {
                    const newChatHistory = [...chatHistory, { sender: 'User', message }];
                    // Simulate a chatbot response for demonstration purposes
                    const botResponse = result.body;
                    newChatHistory.push({ sender: 'Bot', message: botResponse });
                    setChatHistory(newChatHistory);
                    setMessage('');
                    setLoading(false)
                } else {
                    setLoading(false)
                    console.log("ERROR")
                }
            } else {
                const newChatHistory = [...chatHistory, error_msg];
                setChatHistory(newChatHistory);
                setMessage('');
                setLoading(false)
            }

            const newChatHistory = [...chatHistory, { sender: 'User', message }];
            // Simulate a chatbot response for demonstration purposes
            const botResponse = result.body;
            newChatHistory.push({ sender: 'Bot', message: botResponse });
            setChatHistory(newChatHistory);
            setMessage('');
            setLoading(false)
        })

    };
    return (
        <div>
            <Button
                type="primary"
                shape="round"
                size="large"
                className='help-btn'
                onClick={openChat}
            >
                Chatbot Help
            </Button>

            <Spin spinning={loading}>
                <Modal
                    title="Chatbot"
                    open={visible}
                    onOk={closeChat}
                    onCancel={closeChat}
                    zIndex={999}
                    bodyStyle={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                    className="chat-modal"
                    footer={
                        <Input
                            className='new-message'
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onPressEnter={handleSendMessage}
                            addonAfter={<Button onClick={handleSendMessage}>Send</Button>}
                        />
                    }
                >
                    <List
                        dataSource={chatHistory}
                        renderItem={(item) => (
                            <div className='line'>
                                <div
                                    className={`chatMessage ${item.sender === 'Bot' ? 'botMessage' : 'userMessage'}`}
                                >
                                    <div className='chat-content'>{item.message}</div>
                                </div>
                            </div>
                        )}
                        className="chat-history"
                    />
                </Modal>
            </Spin>
        </div>
    );
};

export default ChatBot;