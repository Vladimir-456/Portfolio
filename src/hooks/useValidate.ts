import { useState } from "react";

type FormData = {
    name: string;
    email: string;
    message: string;
}
type Errors = {
    [key in keyof FormData]?: string
}
function useValidate(initFormData : FormData) {
    const [formData, setFormData] = useState<FormData>(initFormData);
    const [errors, setErrors] = useState<Errors>(initFormData);

    const validate = (formData: FormData) => {
      const errors: Errors = {};

      if (!formData.name.trim()) {
        errors.name = 'Вы не указали имя пользователя';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email не может быть пустым';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        errors.email = 'Неверный email адрес';
      }
      if (!formData.message.trim()) {
        errors.message = 'Сообщение не может быть пустым';
      }
      return errors;
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })};

    const handleSubmit = (onValid: (data: FormData) => void) => (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onValid(formData);
  };

    return { formData, errors, handleChange, handleSubmit };

}

export default useValidate