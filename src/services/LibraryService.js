import axios from 'axios';

const LIBRARY_API_BASE_URL = "http://localhost:9000/api/libraries";
class LibraryService {
    getLibraries(){
        return axios.get(LIBRARY_API_BASE_URL);
    }

    createLibrary(library){
        return axios.post(LIBRARY_API_BASE_URL, library);
    }

    getLibraryById(libraryId){
        return axios.get(LIBRARY_API_BASE_URL + '/' + libraryId);
  
    }

    updateLibrary(library, libraryId){
        return axios.put(LIBRARY_API_BASE_URL + '/' + libraryId, library);
    }

    deleteLibrary(libraryId){
        return axios.delete(LIBRARY_API_BASE_URL + '/' + libraryId);
    }
}
export default new LibraryService()