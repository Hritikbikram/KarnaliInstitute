import React from 'react'
import { Routes,Route } from 'react-router';
import { Home } from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import CourseDetail from './Pages/CourseDetail';
import Testimonials from './Pages/Testimonials';
import SuccessGallery from './Pages/SuccessGallery';
import Enquiry from './Pages/Enquiry';
import AdminHome from './Admin-Pages/AdminHome';
import RouteLayouts from './Pages/RouteLayouts';
import AdminAbout from './Admin-Pages/AdminAbout';
import AdminCourses from './Admin-Pages/AdminCourses';
import AdminSuccess from './Admin-Pages/AdminSuccess';
import AdminTestimonials from './Admin-Pages/AdminTestimonials';
import AdminContact from './Admin-Pages/AdminContact';
import AdminQueries from './Admin-Pages/AdminQueries';
import AdmissionDetail from './Admin-Pages/AdmissionDetail';
import UpAbout from './Admin-Pages/Admin-Update/UpAbout';
import UpTestomonials from './Admin-Pages/Admin-Update/UpTestomonials';
import UpSuccess from './Admin-Pages/Admin-Update/UpSuccess';
import UpCourseState from './Admin-Pages/Admin-Update/UpCourseState';
import UpCourse from './Admin-Pages/Admin-Update/UpCourse';
import Admission from './Pages/Admission';
import Blog from './Pages/Blog';
import AdminBlog from './Admin-Pages/AdminBlog';
import UpBlogs from './Admin-Pages/Admin-Update/UpBlogs';
import AdmissionInf from './Admin-Pages/Admin-Update/AdmissionInf';
import BlogSingle from './Pages/BlogSingle';
import AdminClassEnt from './Admin-Pages/AdminClassEnt';
import EnquiryDetail from './Admin-Pages/Admin-Details/EnquiryDetail';
import UpCourseDetails from './Admin-Pages/Admin-Update/UpCourseDetails';
import Users from './Admin-Pages/Users';
import UpUsers from './Admin-Pages/Admin-Update/UpUsers';
import AdminLogin from './Admin-Pages/AdminLogin';
import Login from './Admin-Pages/Login';
import UserAuth from './ProtectedRoute/UserAuth';
import Register from './Admin-Pages/Register';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpNum from './Admin-Pages/Admin-Update/UpNum';

const App = () => {
  return (
    <>

           
      
        <Routes>

        {/* <Route path='/admin' element={<AdminLogin />}/>

        <Route path='/admin/home' element={<AdminHome />}/> */}


        <Route>
          <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/number/:id" element={<UpNum />} />
        


        <Route path='/admin/coursestate_update' element={<UpCourseState />}/>

        <Route path='/admin/about' element={<AdminAbout />}/>
        <Route path='/admin/about_update/:id' element={<UpAbout />}/>

        <Route path='/admin/addcourse' element={<AdminClassEnt />} />
        <Route path='/admin/courses_update/:id' element={<UpCourse />}/>


        <Route path='/admin/courses' element={<AdminCourses />}/>
        <Route path='/admin/courses_details/:id' element={<UpCourseDetails />}/>

        
        <Route path='/admin/careers' element={<AdminSuccess />}/>
        <Route path='/admin/careers_update/:id' element={<UpSuccess />}/>
        
        <Route path='/admin/testimonial' element={<AdminTestimonials />}/>
        <Route path='/admin/testimonial_update/:id' element={<UpTestomonials />}/>

        
        <Route path='/admin/contacts' element={<AdminContact />}/>
        
        <Route path='/admin/queries' element={<AdminQueries />}/>
        <Route path='/admin/queries_detail/:id' element={<EnquiryDetail />} />

        
        <Route path='/admin/admission' element={<AdmissionDetail />}/>
        <Route path='/admin/admission_detail/:id' element={<AdmissionInf />}/>
        
        <Route path='/admin/blog' element={<AdminBlog />}/>
        <Route path='/admin/blog_update/:id' element={<UpBlogs />}/>
        
        <Route path='/admin/users' element={<Users />}/>
        <Route path='/admin/users_update' element={<UpUsers />}/>

        </Route>


        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />


          <Route path='/' element={<RouteLayouts />}>
          
          


                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<AboutUs />}/>
                <Route path='/course' element={<Courses />}/>
                <Route path='/testimonial' element={<Testimonials />}/>
                <Route path='/course/details/:id' element={<CourseDetail />}/>
                <Route path='/admission' element={<Admission />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/single_blog/:id' element={<BlogSingle />} />
                <Route path='/gallery' element={<SuccessGallery />}/>
                <Route path='/contact' element={<Contact />} />
                <Route path='/enquiry' element={<Enquiry />}/>


          </Route>


        </Routes>
          
        <ToastContainer />
          
      
    </>
  )
}


export default App;
