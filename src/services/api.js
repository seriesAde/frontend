
// const API_KEY = "a51cf5805447a8ca712d1c9201b0274e";
// const BASE_URL = "https://api.themoviedb.org/3"
// export const getPopularMovies = async ()=>{
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
//     const data = await response.json()
//     return data.results
// }
// export const searchMovies = async (query)=>{
//     const response = await fetch(`${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
//       if (!response.ok) {
//     throw new Error("Failed to search movies")
//   }
//     const data = await response.json()
//     return data.results
// }

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDIxZTY2YjQ0YWYyNGFhOWUwN2YxYzcyMDgyNTMwMyIsIm5iZiI6MTc1MDk5MjMwNi43NzUsInN1YiI6IjY4NWUwNWIyNjNlZDVlMzViYjc0NGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aE5L-Ye3pdC-fo-nZ0h3XG7FCKBUzM8ZuFcfDrtRHac"; 

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await response.json();
  return data.results;
};
export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load popular movies");
  }

  const data = await response.json();
  return data.results;
};

// the first part didnt work because of the api key so i had to use access token instead
