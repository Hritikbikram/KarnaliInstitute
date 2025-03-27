import { baseurls } from "./BaseUrl";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const CourseApi= createApi({
  reducerPath: 'CourseApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseurls }),
  tagTypes: ["Course","Abouts"],
  endpoints: (builder) => ({

    //Courses Name (CURD OPERATION)
    getCourseByName: builder.query({
      query: (name) => `coursestates`,
      providesTags: ["Course Num"],

    }),

    //Create coursenumbers State
    createCourse: builder.mutation({
      query: (query) => ({
        url: "coursestates",
        method: "POST",
        
        body: query,

      }),
      invalidatesTags: ["Course Num"],
    }),

    //single number data
    getnumbyId:builder.query({
      query:(id)=>({
        url:`singclas/${id}`,
        method:'GET',             
      }),
      providesTags: ["Course Num"],
    }),

    updatesinnum: builder.mutation({
      query: (query) => ({
        url: `singclas/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["Course Num"],
    }),

    deleteTotalNum:builder.mutation({
      query:(query)=>({
        url:"totalnum/delete",
        method:"POST",
        body:query,
      }),
      providesTags:["Course Num"]
    }),


    

    //Enquiry
    //Fetch
    getEnquiryDetail: builder.query({
      query: (name) => `queries`,
      providesTags: ["queries"],

    }),


    
    //fetchbyid
    getqueriesbyId:builder.query({
      query:(id)=>({
        url:`queries/${id}`,
        method:'GET',             
      }),
      providesTags: ["queries"],
    }),


    //Createqueries
    createqueries: builder.mutation({
      query: (query) => ({
        url: "queries",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["queries"],
    }),

    

    deleteEnquiry:builder.mutation({
      query:(query)=>({
        url:"enquirydata/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["queries"]
    }),






        //Contact
    //Fetch
    getContactDetail: builder.query({
      query: (name) => `contact`,
      providesTags: ["contacts"],

    }),


    

    //CreateContact
    createContact: builder.mutation({
      query: (query) => ({
        url: "contact",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["contacts"],
    }),

    deleteContacts:builder.mutation({
      query:(query)=>({
        url:"contactdata/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["contacts"]
    }),





    




    //CourseDetails
    //Fetch
    getCourseDetail: builder.query({
      query: (name) => `coursedetail`,
      providesTags: ["Coursedetails"],

    }),

    //Create
    createCourseDetails: builder.mutation({
      query: (query) => ({
        url: "coursedetail",
        method: "POST",       
        body: query,

      }),
      invalidatesTags: ["Coursedetails"],
    }),

        //fetchbyid
        getCourseDetailsbyId:builder.query({
          query:(id)=>({
            url:`coursedetail/${id}`,
            method:'GET'        
          }),
          providesTags: ["Coursedetails"],
        }),

        //fetchfrontbyid
        getCourseDetailsFrontbyId:builder.query({
          query:(id)=>({
            url:`coursedetail/${id}`,
            method:'GET'        
          }),
          providesTags: ["Coursedetails"],
        }),

        
    //UpdateCourseDetail
    updateCourseDetails: builder.mutation({
      query: (query) => ({
        url: `coursedetail/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["Coursedetails"],
    }),

    //DeleteCourseDetails
    deleteCourseDetails:builder.mutation({
      
      query:(query)=>({
        url:"coursedetails/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["Coursedetails"]

    }),
    

    







    //AboutPage
    
    //Fetch
    getAbout: builder.query({
      query: (name) => `about`,
      providesTags: ["Abouts"],

    }),

    //fetchbyid
    getAboutbyId:builder.query({
      query:(id)=>({
        url:`about/${id}`,
        method:'GET'        
      }),
      providesTags: ["Abouts"],
    }),


    //CreateAbout
    createAbout: builder.mutation({
      query: (query) => ({
        url: "about",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["Abouts"],
    }),

    //UpdateAbout
        updateAbout: builder.mutation({
          query: (query) => ({
            url: `about/update/${query.id}`,
            method: "PUT",
            body: query.formData,
          }),
          invalidatesTags: ["Abouts"],
        }),

    
    deleteaboutdata:builder.mutation({
          
          query:(query)=>({
            url:"aboutdata/delete",
            method:'POST',
            body: query,
    
          }),
          providesTags:["Abouts"]

        }),

    



    //SuccessStories

     //Fetch
     getSuccess: builder.query({
      query: (name) => `success`,
      providesTags: ["successes"],

    }),

    //fetchbyid
    getSuccessbyId:builder.query({
      query:(id)=>({
        url:`success/${id}`,
        method:'GET'        
      }),
      providesTags: ["successes"],
    }),

    //CreateSuccess
    createSuccess: builder.mutation({
      query: (query) => ({
        url: "success",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["successes"],
    }),

        //UpdateSuccess
        updateSuccess: builder.mutation({
          query: (query) => ({
            url: `success/update/${query.id}`,
            method: "PUT",
            body: query.formData,
          }),
          invalidatesTags: ["successes"],
        }),

        
    deletesuccessdata:builder.mutation({
          
      query:(query)=>({
        url:"successdata/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["successes"]

    }),
    




     //Testimonials

     //Fetch
     getTestimonial: builder.query({
      query: (name) => `testimonial`,
      providesTags: ["testimonials"],

    }),

    //fetchbyid

    getTestimonialbyId:builder.query({
      query:(id)=>({
        url:`testimonial/${id}`,
        method:'GET'        
      }),
      providesTags: ["testimonials"],
    }),



    //CreateTestimonnial
    createTestimonial: builder.mutation({
      query: (query) => ({
        url: "testimonial",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["testimonials"],
    }),

        //UpdateTestimonials
        updateTestimo: builder.mutation({
          query: (query) => ({
            url: `testimonial/update/${query.id}`,
            method: "PUT",
            body: query.formData,
          }),
          invalidatesTags: ["testimonials"],
        }),

        deletetestimonialdata:builder.mutation({
          
          query:(query)=>({
            url:"testimonialdata/delete",
            method:'POST',
            body: query,
    
          }),
          providesTags:["testimonials"]
    
        }),







        

     //Admission

     //Fetch
     getAdmission: builder.query({
      query: (name) => `admission`,
      providesTags: ["admissions"],

    }),

    //fetchbyid

    getAdmissionbyId:builder.query({
      query:(id)=>({
        url:`admission/${id}`,
        method:'GET'        
      }),
      providesTags: ["admissions"],
    }),



    //CreateAdmission
    createAdmission: builder.mutation({
      query: (query) => ({
        url: "admission",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["admissions"],
    }),

    

    deleteAdmissionDetails:builder.mutation({
      query:(query)=>({
        url:"admissiondata/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["admissions"]
    }),




    //Blogs


     //Fetch
     getBlog: builder.query({
      query: (name) => `blog`,
      providesTags: ["blogs"],

    }),

    //fetchbyid

    getBlogbyId:builder.query({
      query:(id)=>({
        url:`blog/${id}`,
        method:'GET'        
      }),
      providesTags: ["blogs"],
    }),



    //CreateClass
    createBlogs: builder.mutation({
      query: (query) => ({
        url: "blog",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["blogs"],
    }),

    updateBlogInfo: builder.mutation({
      query: (query) => ({
        url: `blog/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["blogs"],
    }),

    deleteBlogdata:builder.mutation({
      query:(query)=>({
        url:"blogdata/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["blogs"]
    }),






    //Classes
     //Fetch
     getClass: builder.query({
      query: (name) => `classcourse`,
      providesTags: ["classes"],

    }),

    //fetchbyid

    getClsssbyId:builder.query({
      query:(id)=>({
        url:`classcourse/${id}`,
        method:'GET'        
      }),
      providesTags: ["classes"],
    }),


    getClassCorbyId:builder.query({
      query:(id)=>({
        url:`classcoursedet/${id}`,
        method:'GET'        
      }),
      providesTags: ["classes"],
    }),



    //CreateClass
    createClasses: builder.mutation({
      query: (query) => ({
        url: "classcourse",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["classes"],
    }),

    
    updateClassInfo: builder.mutation({
      query: (query) => ({
        url: `classcourse/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["classes"],
    }),


    

    deleteClass:builder.mutation({
      query:(query)=>({
        url:"classcourse/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["classes"]
    }),


    
    
    // UserApis

    //Fetch
    getUsers: builder.query({
      query: (name) => `userdetail`,
      providesTags: ["users"],

    }),

    //fetchbyid

    getUsersbyId:builder.query({
      query:(id)=>({
        url:`userdetail/${id}`,
        method:'GET'        
      }),
      providesTags: ["users"],
    }),




    deleteUser:builder.mutation({
      query:(query)=>({
        url:"users/delete",
        method:'POST',
        body: query,

      }),
      providesTags:["users"]
    }),


    


    



  }),
})



export const {useGetCourseByNameQuery, useCreateCourseMutation, useGetnumbyIdQuery, useUpdatesinnumMutation ,useCreateAboutMutation,useGetAboutQuery, useUpdateAboutMutation,useGetAboutbyIdQuery, useGetCourseDetailQuery, useGetCourseDetailsbyIdQuery,useCreateCourseDetailsMutation, useUpdateCourseDetailsMutation, useGetSuccessQuery,useGetSuccessbyIdQuery,useCreateSuccessMutation,useUpdateSuccessMutation, useGetTestimonialQuery, useGetTestimonialbyIdQuery, useCreateTestimonialMutation,useUpdateTestimoMutation, useGetEnquiryDetailQuery, useGetqueriesbyIdQuery, useCreatequeriesMutation,useGetContactDetailQuery, useCreateContactMutation, useGetAdmissionQuery, useGetAdmissionbyIdQuery, useCreateAdmissionMutation, useGetBlogQuery, useGetBlogbyIdQuery, useCreateBlogsMutation, useUpdateBlogInfoMutation, useGetClassQuery, useGetClsssbyIdQuery, useCreateClassesMutation, useUpdateClassInfoMutation, useDeleteaboutdataMutation, useGetUsersQuery,useGetUsersbyIdQuery, useGetCourseDetailsFrontbyIdQuery, useGetClassCorbyIdQuery,useDeleteUserMutation, useDeleteTotalNumMutation, useDeleteClassMutation, useDeleteCourseDetailsMutation,useDeletesuccessdataMutation,useDeletetestimonialdataMutation,useDeleteBlogdataMutation, useDeleteAdmissionDetailsMutation,useDeleteEnquiryMutation,useDeleteContactsMutation}=CourseApi;


// , useGetUserQuery,useGetUserbyIdQuery, useCreateUserMutation