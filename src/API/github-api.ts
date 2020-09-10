import axios from 'axios';

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';

function getRepos(username: string) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}

export { getRepos };
