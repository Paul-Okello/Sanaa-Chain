// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// type User = {

// }

// type UserState = {
//   entities: User[];
// };

// const initialState: UserState = {
//   entities: [],
// };

// type DraftUser = RequireOnly<User, "email">;

// const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<User>) => {
//       state.entities.push(action.payload);
//     },
//   },
// });

// export const usersReducer = usersSlice.reducer;
// export const { addUser } = usersSlice.actions;

// export default usersSlice;
