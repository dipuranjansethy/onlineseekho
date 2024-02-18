import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer({}, builder => {
  builder
    .addCase('createCoursesRequest', state => {
      state.loading = true;
    })
    .addCase('createCoursesSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('createCoursesFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('getAdminStatsRequest', state => {
      state.loading = true;
    })
    .addCase('getAdminStatsSuccess', (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.viewsCount = action.payload.viewsCount;
      state.subscriptionCount = action.payload.subscriptionCount;
      state.usersCount = action.payload.usersCount;
      state.subscriptionPercentage = action.payload.subscriptionPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.subscriptionProfit = action.payload.subscriptionProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    })
    .addCase('getAdminStatsFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deleteCoursesRequest', state => {
      state.loading = true;
    })
    .addCase('deleteCoursesSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteCoursesFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('addLectureRequest', state => {
      state.loading = true;
    })
    .addCase('addLectureSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addLectureFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deleteLectureRequest', state => {
      state.loading = true;
    })
    .addCase('deleteLectureSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteLectureFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('getAllUsersRequest', state => {
      state.loading = true;
    })
    .addCase('getAllUsersSuccess', (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase('getAllUsersFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deleteUserRequest', state => {
      state.loading = true;
    })
    .addCase('deleteUserSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteUserFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updateUserRoleRequest', state => {
      state.loading = true;
    })
    .addCase('updateUserRoleSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateUserRoleFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearError', state => {
      state.error = null;
    })
    .addCase('clearMessage', state => {
      state.message = null;
    });
});
