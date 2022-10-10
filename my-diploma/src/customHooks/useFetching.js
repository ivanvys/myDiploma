import { useState, useCallback } from "react";

export const useFetching = (api, formValue, resetForm) => {
  const [info, setInfo] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      try {
        setLoad(true);
        event.preventDefault();
        const request = await api(formValue);
        setInfo(request);
      } catch (serverError) {
        setLoad(false);
        setError(serverError);
      } finally {
        setLoad(false);
        resetForm();
      }
    },
    [formValue]
  );

  return [handleSubmit, info, load, error];
};
