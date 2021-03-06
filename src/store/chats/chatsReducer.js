import { ADD_MESSAGE, HIGHLIGHT_CHAT } from './chatsActions';
import { Author } from '../../utils/authors'

const initialState = [
    {
        id: 1,
        name: "Chat 1",
        user: "Ali Connors",
        messageList: [
            { message: `new message 1`, sender: Author.Me },
            { message: `new message 2`, sender: Author.Robot },
            { message: `new message 3`, sender: Author.Me },
            { message: `new message 4`, sender: Author.Robot }
        ],
        isHighlighted: false
    },
    {
        id: 2,
        name: "Chat 2",
        user: "Bryan",
        messageList: [
            { message: `new message 10`, sender: Author.Me },
            { message: `new message 20`, sender: Author.Robot }
        ],
        isHighlighted: false
    },
    {
        id: 3,
        name: "Chat 3",
        user: "Mary",
        messageList: [
            { message: `new message 100`, sender: Author.Me },
            { message: `new message 200`, sender: Author.Robot }
        ],
        isHighlighted: false
    }
];


const chatsReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_MESSAGE: 
            return state.map(ch => ch.id === action.chatId ? {...ch, messageList: [...ch.messageList, action.message] } : ch);
        
        case HIGHLIGHT_CHAT: 
            return state.map(ch => ch.id === action.chatId ? {...ch, isHighlighted: action.highlight } : ch);

        default: 
            return state;
  }
}

export default chatsReducer;