import axios from 'axios';

const KEY = 'AIzaSyATK-LgoxUI149diUkFFFA-_-sL-hkyEHA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
