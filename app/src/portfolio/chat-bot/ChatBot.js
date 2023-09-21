import React, { useState, useRef } from 'react';
import { Modal, Button, Input, List } from 'antd';
import './ChatBot.css';
function ChatBot() {

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const openChat = () => {
        setVisible(true);
    };

    const closeChat = () => {
        setVisible(false);
        setMessage('');
        setChatHistory([{ sender: 'Bot', message: "Olá, tudo bem?" }]);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        const newChatHistory = [...chatHistory, { sender: 'User', message }];
        // Simulate a chatbot response for demonstration purposes
        const botResponse = 'This is a placeholder response.';
        newChatHistory.push({ sender: 'Bot', message: botResponse });
        setChatHistory(newChatHistory);
        setMessage('');
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
                visible={visible}
                onOk={closeChat}
                onCancel={closeChat}
                width={400}
                zIndex={999}
                bodyStyle={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
                <List
                    dataSource={chatHistory}
                    renderItem={(item) => (
                        <List.Item>
                            <div
                                style={{
                                    backgroundColor: item.sender === 'Bot' ? '#E6F7FF' : '#FFF',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {item.message}
                            </div>
                        </List.Item>
                    )}
                />
                <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onPressEnter={handleSendMessage}
                    addonAfter={<Button onClick={handleSendMessage}>Send</Button>}
                />
            </Modal>
        </div>
    );
};

export default ChatBot;