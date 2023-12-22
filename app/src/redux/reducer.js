
const initialState = {
    chatHistory: [],
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