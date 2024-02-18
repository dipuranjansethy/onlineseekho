import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
  builder => {
    builder
      .addCase('loginRequest', state => {
        state.loading = true;
      })
      .addCase('loginSuccess', (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.isAdmin=action.payload.user.role==="admin"?true:false;
      })
      .addCase('loginFail', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase('registerRequest', state => {
        state.loading = true;
      })
      .addCase('registerSuccess', (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase('registerFail', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase('logoutRequest', state => {
        state.loading = true;
      })
      .addCase('logoutSuccess', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase('logoutFail', (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      })
      .addCase('loadUserRequest', state => {
        state.loading = true;
      })
      .addCase('loadUserSuccess', (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase('loadUserFail', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
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


export const subscriptionReducer = createReducer(
  {},
  builder => {
    builder
      .addCase('buySubscriptionRequest', state => {
        state.loading = true;
      })
      .addCase('buySubscriptionSuccess', (state, action) => {
        state.loading = false;
        state.subscription=action.payload;
      })
      .addCase('buySubscriptionFail', (state, action) => {
        state.loading = false;
        state.error=action.payload;        
      })
      .addCase('cancelSubscriptionRequest', state => {
        state.loading = true;
      })
      .addCase('cancelSubscriptionSuccess', (state, action) => {
        state.loading = false;
        state.message=action.payload;
      })
      .addCase('cancelSubscriptionFail', (state, action) => {
        state.loading = false;
        state.error=action.payload;        
      })
      .addCase('clearError', state => {
        state.error = null;
      })
      .addCase('clearMessage', state => {
        state.message = null;
      });
      
  }
);


