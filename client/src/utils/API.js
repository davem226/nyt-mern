import axios from "axios";

export default {
    // Make REST API request (in this case to New York Times)
    query: (data) => {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json
        ?api-key=22cc4f39215d4a448781a1e0192e887b
        ?p=${data.topic}
        ?begin_date=${data.startYear}0101
        ?end_date=${data.endYear}1231
        ?sort=newest
        ?page=0`;

       return axios.get(url);
    },
    // Save articles in db
    save: (article) => {
        return axios.post("/api/articles", article)
    },
  // Gets all books
  getArticles: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
