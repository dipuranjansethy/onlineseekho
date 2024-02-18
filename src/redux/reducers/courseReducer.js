import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
    {courses:[],lectures:[]},
    builder => {
      builder
        .addCase('allCoursesRequest', state => {
          state.loading = true;
        })
        .addCase('allCoursesSuccess', (state, action) => {
          state.loading = false;
          state.courses=action.payload;
          state.message = action.payload;
        })
        .addCase('allCoursesFailed', (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase('getCoursesRequest', state => {
          state.loading = true;
        })
        .addCase('getCoursesSuccess', (state, action) => {
          state.loading = false;
          state.lectures = action.payload;
        }) 
        .addCase('getCoursesFailed', (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase('addToPlaylistRequest', state => {
          state.loading = true;
        }) 
        .addCase('addToPlaylistSuccess', (state, action) => {
          state.loading = false;
          state.lectures = action.payload;
        }) 
        .addCase('addToPlaylistFailed', (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase('clearError', state => {
          state.error = null;
        })
        .addCase('clearMessage', state => {
          state.message = null;
        });
         
        
    }
  );
  