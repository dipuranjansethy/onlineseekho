import axios from 'axios';
import { server } from '../Store';

export const  updateprofile= (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfilerequest' });
    const {data}=await axios.put(`${server}/updateprofile`,{name,email},{
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
    dispatch({ type: 'updateProfileSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFailed',
      payload: error.response.data.message,
    });
  }
};
export const  changePassword= (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: 'changePasswordrequest' });
    const {data}=await axios.put(`${server}/changepassword`,{oldPassword,newPassword},{
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
    dispatch({ type:  'changePasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type:  'changePasswordFailed',
      payload: error.response.data.message,
    });
  }
};
export const updateProfilePicture= (formdata) => async dispatch => {
  try {
  
    dispatch({ type: 'updateProfilePictureRequest' });
    const {data}=await axios.put(`${server}/updateprofilepicture`,formdata,{
        headers: {
            'Content-type': 'multipart/form-data',
          },
        withCredentials: true,
      })
    dispatch({ type:  'updateProfilePictureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type:  'updateProfilePictureFailed',
      payload: error.response.data.message,
    });
  }
};

export const  forgetPassword= email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordrequest' });
    const config={
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
    const {data}=await axios.post(`${server}/forgetpassword`,{email},config)
    dispatch({ type:  'forgetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type:  'forgetPasswordFailed',
      payload: error.response.data.message,
    });
  }
};

export const  resetPassword= (token, password) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });
    const {data}=await axios.put(`${server}/resetpassword/${token}`,{password},{
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
    dispatch({ type:  'resetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type:  'resetPasswordFailed',
      payload: error.response.data.message,
    });
  }
};
export const addToPlaylist= (id) => async dispatch => {
  try {
    dispatch({ type: 'addToPlaylistRequest' });
    const {data}=await axios.post(`${server}/addtoplaylist`,{id},{
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    })
    dispatch({ type: 'addToPlaylistSuccess', payload: data.message});
  } catch (error) {
    dispatch({
      type: 'addToPlaylistFailed',
      payload: error.response.data.message,
    });
  }
};


export const removeFromPlaylist= (id) => async dispatch => {
  try {
    dispatch({ type: 'removeFromPlaylistRequest' });
    const {data}=await axios.delete(`${server}/removefromplaylist?id=${id}`,{
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    })
    dispatch({ type: 'removeFromPlaylistSuccess', payload: data.message});
  } catch (error) {
    dispatch({
      type: 'removeFromPlaylistFailed',
      payload: error.response.data.message,
    });
  }
};