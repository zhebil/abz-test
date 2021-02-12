import * as yup from "yup";

const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;
export const schema = yup.object().shape({
  name: yup.string().min(2).max(60).required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
  email: yup.string().required().email(),
  positions: yup.number().required(),
  image: yup
    .mixed()
    .required("A file is required")
    .test("required", "A file is required", (value) => {
      console.log(value);
      return value && value[0];
    })
    .test("fileFormat", "Image is invalid.", (value) => {
      console.log(value);
      return value && ["image/jpeg"].includes(value[0]?.type);
    })
    .test(
      "fileSize",
      "The photo may not be greater than 5 Mbytes.",
      (value) => {
        console.log(value);
        return value && value[0]?.size < 5e6;
      }
    ),
});
