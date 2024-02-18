import axios from 'axios';
import { server } from '../Store';


export const getAllCourses= (category="", keyword="") => async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });
      const {data}=await axios.get(`${server}/courses?keyword=${keyword}&category=${category}`)
      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFailed',
        payload: error.response.data.message,
      });
    }
  }; 
  export const getCourseLectures = (id) => async dispatch => {
    try {
      dispatch({ type: 'getCourseRequest' });
      console.log(id);
  
      const { data } = await axios.get(`${server}/course/${id}`, {
        withCredentials: true,
      });
      console.log(data.lectures)
  
      dispatch({ type: 'getCoursesSuccess', payload:data.lectures});
    } catch (error) {
      dispatch({
        type: 'getCourseFail',
        payload: error.response.data.message,
      });
    }
  };