import axios from 'axios';

export default {
  user: {
    signup: user =>
      axios
        .post('http://localhost:3001/api/signup', { user })
        .then(res => res.data.user)
  }
};
