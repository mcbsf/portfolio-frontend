
const initialState = {
    chatHistory: [{ sender: 'Bot', message: "Hello, my name is MarioBot! How can I help you? \n\nI can answer any question about Mario overall experiences, based on this website texts, with LLM technicques \n\nPS: I can eventually write some errors" }],
    messageSender: "",
    messageContent: "",
};

const chatReducer = (state = initialState, action) => {
    console.log("Before update:", state);
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                chatHistory: [...state.chatHistory, action.message],
                messageSender: "",
                messageContent: "",
            };
            
        default:
            return state;
    }
    
};

export default chatReducer;