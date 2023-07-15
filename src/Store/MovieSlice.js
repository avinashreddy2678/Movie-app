import {createSlice } from '@reduxjs/toolkit';

const initialState=[];
const MovieSlice= createSlice({
    name:'movie',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)    ;  
        },
        remove: (state,action)=>{
                return state.filter(item=>item.id!== action.payload.id)
        }
    }
});
export const{add,remove} = MovieSlice.actions;
export default MovieSlice.reducer;
