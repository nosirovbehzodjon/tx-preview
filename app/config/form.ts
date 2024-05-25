import { ObjectSchema, object, string } from "yup";

const errors: IFormInputsType = {
  name: "Имя – обязательное поле",
  district: "Район – обязательное поле",
  location: "Местоположение – обязательное поле.",
  phone: "Телефон – обязательное поле",
  region: "Область – обязательное поле",
};

export const schema: ObjectSchema<IFormInputsType> = object({
  name: string().required(errors["name"]),
  phone: string().required(errors["phone"]),
  region: string().required(errors["region"]),
  district: string().required(errors["district"]),
  location: string().required(errors["location"]),
});

export const initialValue: IFormInputsType = {
  name: "",
  district: "",
  location: "",
  phone: "",
  region: "",
};
