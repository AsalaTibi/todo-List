import { createSlice } from '@reduxjs/toolkit'

// const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',

  initialState:{
   allUsers:[],
   currentUser:{},
  },

  reducers: {
    // clearTodos:(state)=>{
    //   state.allUsers.splice(0,state.allUsers.length)
    // },
    initiateArr:(state,action)=>{
      state.allUsers = action.payload;
    },
   
    addTodos:(state,action)=>{
        // state.allUsers.splice(0,state.allUsers.length)
        state.allUsers.push(action.payload)
    },
    addUser:(state,action)=>{
        state.currentUser = action.payload
    },
    deleteT:(state,action) =>{
      let itemsCopy = [...state.allUsers];
      itemsCopy.splice(action.payload,1);
      state.allUsers.splice(0,state.allUsers.length)
      itemsCopy.map((item) => {
        state.allUsers.push(item)
      })
    },
    completeTask:(state,action) =>{
 
       objIndex = state.allUsers.findIndex((obj => obj.title === action.payload))
      
       state.allUsers[objIndex].completed = true;
      }
  },
})

// Action creators are generated for each case reducer function
export const {addTodos,addUser,deleteT,completeTask,clearTodos,initiateArr} = addTodoReducer.actions

export const reducer = addTodoReducer.reducer