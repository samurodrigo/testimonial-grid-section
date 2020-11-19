//import axios from 'axios';
import db from '@/services/db.json';

// const apiClient = axios.create({
//   baseURL: 'http://localhost:3000',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

export default {
  getTestimonials() {
    //console.log(db);
    return Promise.resolve({
      data: db.testimonials,
    });
    //return db;
  },
};
