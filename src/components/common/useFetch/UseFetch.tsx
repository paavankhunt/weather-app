import { useState, useEffect } from 'react';

export const UseFetch = (url: string) => {
  const [data, setData] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error();
          }

          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          // console.log(data);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 0);
  }, [url]);

  return { data, isPending, error };
};
