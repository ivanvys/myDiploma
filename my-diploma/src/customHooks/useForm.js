import { useCallback, useState } from "react";

export const useForm = (something) => {
  const [form, setForm] = useState(something);

  const handleFormChange = useCallback((event) => {
    const { value, name } = event.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  const handleFormReset = useCallback(() => {
    setForm(form);
  }, []);

  return {
    form,
    handleFormChange,
    handleFormReset,
  };
};
