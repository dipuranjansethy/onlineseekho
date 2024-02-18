import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Home/layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Home/layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgotpassword from './components/Auth/Forgotpassword';
import Reset from './components/Auth/Reset';
import Contact from './components/Contact/Contact.js/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Home/layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/DashBoard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Home/layout/Loader/Loader';


const App = () => {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );
  const currUser=localStorage.getItem("userData");
  const nowUser=JSON.parse(currUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearmessage' });
    }
  }, [dispatch, error, message]);
  
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  
  const userData=JSON.parse(localStorage.getItem("userData"));
  // console.log(userData);

  return (
    <Router>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />

            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage user={user}/>
                </ProtectedRoute>
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<Request />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user}/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Forgotpassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Reset/>
                </ProtectedRoute>
              }
            />

            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user}/>
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="/paymentfail" element={<PaymentFail />} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={userData?.role==="admin"?<Dashboard/>:<Navigate to="/profile"/>}
            />
            <Route
              path="/admin/createcourse"
              element={userData?.role==="admin"?<CreateCourse/>:<Navigate to="/profile"/>}

            
            />
            <Route
              path="/admin/courses"
              element={userData?.role==="admin"?<AdminCourses />:<Navigate to="/profile"/>}

            />
            <Route
              path="/admin/users"
              element={userData?.role==="admin"?<Users />:<Navigate to="/profile"/>}

            />
          </Routes>

          <Footer />
          <Toaster />
        </>
      )}
    </Router>
  );
}

export default App;

// Admin admincourses
