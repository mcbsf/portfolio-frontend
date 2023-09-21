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
        setChatHistory([{ sender: 'Bot', message: "Hello, my name is MarioBot! How can I help you? I can answer any question about this website content with LLM technicques, so I can eventually make some hallucination" }]);
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
                open={visible}
                onOk={closeChat}
                onCancel={closeChat}
                zIndex={999}
                bodyStyle={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                className="chat-modal" 
                footer={null}
            >
                <List
                    dataSource={chatHistory}
                    renderItem={(item) => (
                        <List.Item>
                            <div
                                className={`chatMessage ${item.sender === 'Bot' ? 'botMessage' : 'userMessage'}`} 
                            >
                                <div className='chat-content'>{item.message}</div>
                            </div>
                        </List.Item>
                    )}
                    className="chat-history" 
                />
                <Input
                    className='new-message'
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