import axios from 'axios';
const URL_API = 'https://workshopreact-a7f54.firebaseio.com/books.json/';
class BookStoreService {
  async getBooks() {
   return await axios.get(URL_API);
  }
}
export default new BookStoreService();
