import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);
  // Si la categoría cambia, queremos que se vuelva a ejecutar este efecto
  // }, [category]);
  return state;
};
