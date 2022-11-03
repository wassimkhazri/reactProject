import axios from 'axios';

const AUTHOR_API_BASE_URL = "http://localhost:9000/api/authors";

class AuthorService {

    getAuthors(){
        return axios.get(AUTHOR_API_BASE_URL);
    }

    createAuthor(author){
        return axios.post(AUTHOR_API_BASE_URL, author);
    }

    getAuthorById(authorId){
        return axios.get(AUTHOR_API_BASE_URL + '/' + authorId);
      //  return axios.get("http://localhost:9000/api/authors/120");
    }

    updateAuthor(author, authorId){
        return axios.put(AUTHOR_API_BASE_URL + '/' + authorId, author);
    }

    deleteAuthor(authorId){
        return axios.delete(AUTHOR_API_BASE_URL + '/' + authorId);
    }
    
}

export default new AuthorService()