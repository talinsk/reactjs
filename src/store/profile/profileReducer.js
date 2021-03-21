const initialState = {
  name: 'Adam Smith',
  email: 'test@test.com'
}

const profileReducer = (state = initialState) => {
    // no actions, just store
    return state;
}

export default profileReducer;