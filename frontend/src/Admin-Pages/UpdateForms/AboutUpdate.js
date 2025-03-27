import React from 'react';
import { useFormik } from "formik";
import { Input, Textarea, Button } from "@material-tailwind/react";

import {  baseurls } from "../AdminApi/BaseUrl";
import { useUpdateAboutMutation } from "../AdminApi/CourseNameApi";

const AboutUpdate = ({ data }) => {

  console.log(data)
  const [updateAbout] = useUpdateAboutMutation();
  const formik = useFormik({
    initialValues: {
      abttitle: data.about.abttitle,
      abtdescription: data.about.abtdescription,
      aboutImage: data.about.abtimage,
    },

    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("abouttitle", values?.abttitle);
        formData.append("aboutImage", values.aboutImage);
        formData.append("abtdescription", values.abtdescription);

        const submittedData = {
          formData,
          id: data.about._id,
        };

        const result = await updateAbout(submittedData).unwrap();
        console.log(result);
        formik.resetForm();
      } catch (e) {
        // toast.error(`${e}`);
      }
    },
  });


  return (
    <div>
      <form
        className="mt-8 mb-2  max-w-screen-lg sm:w-96"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <div className="mb-4 flex gap-6">
            <div>
              <h1 className="text-xl font-bold pb-5 pt-[5%] ">About Title </h1>

              <Input
                type="text"
                size="lg"
                name="abttitle"
                onChange={formik.handleChange}
                value={formik.values.abttitle}
              />
            </div>

            <div>
              <h1 className="text-xl font-bold pb-5 pt-[5%] ">Select Image</h1>
              {formik.values.imagePreview == null ? (
                <img
                  className="w-[60%] h-[150px]  mb-6  object-cover"
                  src={`${baseurls}${data.about.abtimage}`}
                />
              ) : (
                <img
                  className="w-[60%] h-[150px]  mb-6  object-cover"
                  src={`${formik.values.imagePreview}`}
                />
              )}
              <Input
                type="file"
                label="About Image"
                name="aboutImage"
                accept="image/*"
                onChange={(e) => {
                  const logo = e.target.files[0];
                  formik.setFieldValue("aboutImage", logo);
                  const res = ["image/png", "image/jpg", "image/jpeg"].includes(
                    logo.type
                  );
                  if (res) {
                    const reader = new FileReader();
                    reader.readAsDataURL(logo);
                    reader.addEventListener("load", () => {
                      formik.setFieldValue("imagePreview", reader.result);
                    });
                  } else {
                    formik.setFieldValue("imagePreview", data.abtimage);
                  }
                }}
              />{" "}
              {formik.errors.aboutImage && formik.touched.aboutImage && (
                <h2 className="pt-2">{formik.errors.aboutImage}</h2>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold pb-5 ">Add Company Description</h1>

            <Textarea
              label="Description"
              className="w-full  bg-white"
              name="abtdescription"
              onChange={formik.handleChange}
              value={formik.values.abtdescription}
            ></Textarea>
          </div>

          <Button type="submit" className="mt-5">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AboutUpdate