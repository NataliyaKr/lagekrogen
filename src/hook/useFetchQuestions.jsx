import { useEffect, useState } from "react";

const useFetchQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://legekrogen.webmcdm.dk/questions");
      const data = await response.json();
      console.log(data);
      setQuestions(data);
    } catch (error) {
      setError(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions, isloading, error };
};

export default useFetchQuestions;
