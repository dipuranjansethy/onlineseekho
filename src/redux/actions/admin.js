import axios from 'axios';
import { server } from '../Store';



export const createCourse = formdata => async dispatch => {
    try {
      dispatch({ type: 'createCoursesRequest' });
  
      const { data } = await axios.post(`${server}/createcourse`, formdata, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
  
        withCredentials: true,
      });
  
      dispatch({ type: 'createCoursesSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'createCoursesFailed', payload: error.response.data.message });
    }
  };

export const deleteCourse = (id) => async dispatch => {
    try {
      dispatch({ type: 'deleteCoursesRequest' });
  
      const { data } = await axios.delete(`${server}/course/${id}`, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
  
        withCredentials: true,
      });
  
      dispatch({ type: 'deleteCoursesSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'deleteCoursesFailed', payload: error.response.data.message });
    }
  };

  export const addLecture = (id,formdata) => async dispatch => {
    try {
      dispatch({ type: 'addLectureRequest' });
  
      const { data } = await axios.post(`${server}/course/${id}`, formdata, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
  
        withCredentials: true,
      });
  
      dispatch({ type: 'addLectureSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'addLectureFailed', payload: error.response.data.message });
    }
  };

  export const deleteLecture = (courseId,lectureId) => async dispatch => {
    try {
      dispatch({ type: 'deleteLectureRequest' });
  
      const { data } = await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`, {
  
        withCredentials: true,
      });
  
      dispatch({ type: 'deleteLectureSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'deleteLectureFailed', payload: error.response.data.message });
    }
  };
  export const getAllUsers = () => async dispatch => {
    try {
      dispatch({ type: 'getAllUsersRequest' });
  
      const { data } = await axios.get(`${server}/admin/users`, {
  
        withCredentials: true,
      });
  
      dispatch({ type: 'getAllUsersSuccess', payload: data.users });
    } catch (error) {
      dispatch({ type: 'getAllUsersFailed', payload: error.response.data.message });
    }
  };
  export const updateUserRole = (id) => async dispatch => {
    try {
      dispatch({ type: 'updateUserRoleRequest' });
  
      const { data } = await axios.put(`${server}/admin/user/${id}`,{}, {
        withCredentials: true,
      });
  
      dispatch({ type: 'updateUserRoleSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'updateUserRoleFaile', payload: error.response.data.message });
    }
  };

  export const deleteUser = (id) => async dispatch => {
    try {
      dispatch({ type: 'deleteUserRequest' });
  
      const { data } = await axios.delete(`${server}/admin/user/${id}`, {
  
        withCredentials: true,
      });
  
      dispatch({ type: 'deleteUserSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'deleteUserFailed', payload: error.response.data.message });
    }
  };
  export const getDashboardStats = () => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
      dispatch({ type: 'getAdminStatsRequest' });
  
      const { data } = await axios.get(`${server}/admin/stats`, config);
  
      dispatch({ type: 'getAdminStatsSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'getAdminStatsFail',
        payload: error.response.data.message,
      });
    }
  };