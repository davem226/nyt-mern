import axios from "axios";

export default {
    // REST API request (in this case to New York Times)
    query: (data) => {
        const apikey = "22cc4f39215d4a448781a1e0192e887b";
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`
        +`api-key=${apikey}`
        +`&p=${data.topic}`
        +`&begin_date=${data.startYear}0101`
        +`&end_date=${data.endYear}1231`
        +`&sort=newest`
        +`&page=0`;

        return axios.get(url);
    },
    // Save articles in db
    save: (article) => {
        return axios.post("/api/articles", article)
    },
    // Get all saved articles
    showSaved: () => {
        return axios.get("/api/articles");
    },
    // Delete article
    remove: (id) => {
        return axios.delete("/api/articles/" + id);
    }
};
