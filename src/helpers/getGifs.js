export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=ACntdmfiAIuBoXSKLmarxqxvO7gUinMu`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // con .map vamos a recorrer cada argumento de data y vamos a
  // crear un nuevo array con los elementos que indiquemos
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      // La interrogación es para que en el caso de que no traiga
      // images no las utilice
      url: img.images?.downsized_medium.url,
    };
  });
  // No devuelve los gifs, devuelve una promesa que resuelve la colección de las imágenes
  return gifs;
  //setImages(gifs);
};
