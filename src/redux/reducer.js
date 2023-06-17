import { DELETEUSER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = {
  users: [],
};

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // Handle các actions gửi lên
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    case DELETEUSER_SUCCESS:
      const deluser = state.users.filter(item=>item.id!=action.payload.payload)
      return {...state,users:deluser}
    default:
      return state;
  }
};
export default rootReducer;