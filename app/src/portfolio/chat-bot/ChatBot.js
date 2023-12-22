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
                        addonAfter={<Button onClick={handleSendMessage} disabled={loading}>Send</Button>}
                    />
                }
            >
                <div className="chat-history">
                <Spin spinning={loading}>
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
                    />
                </Spin>
                </div>
            </Modal>
        </div>
    );
};

export default ChatBot;