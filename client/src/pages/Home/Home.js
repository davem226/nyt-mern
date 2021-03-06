import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import PageLink from "../../components/PageLink";
import Container from "../../components/Container";
import SaveBtn from "../../components/SaveBtn";
import { Input, SearchBtn } from "../../components/SearchForm";
import Article from "../../components/Article";

class Home extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: [],
        saved: []
    };

    saveArticle = (article) => {
        const data = {
            title: article.headline.main,
            link: article.web_url,
            synopsis: article.snippet
        };
        API.save(data)
            .then(res => console.log("Article saved"))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getArticles = event => {
        event.preventDefault();
        var articles = [];
        if (this.state.topic && this.state.startYear) {
            API.query({
                topic: this.state.topic,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })
                .then(results => {
                    articles = results.data.response.docs;
                    console.log(articles);
                    this.setState({ articles: articles });
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Wrapper>
                <Heading>
                    <Link to={"/saved/"}>
                        <PageLink page="View Saved Articles" />
                    </Link>
                </Heading>

                <form>
                    <h2>Search</h2>
                    <Input
                        name="topic"
                        value={this.state.topic}
                        onChange={this.handleInputChange}
                        placeholder="Topic"
                    />
                    <Input
                        name="startYear"
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                        placeholder="Year Beginning"
                    />
                    <Input
                        name="endYear"
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                        placeholder="Year Ending"
                    />
                    <SearchBtn onClick={this.getArticles}>
                        Search
                    </SearchBtn>
                </form>

                <Container>
                    <h2>Results</h2>
                    {this.state.articles.map(article => (
                        <Article
                            link={article.web_url}
                            title={article.headline.main}
                            preview={article.snippet}
                        >
                            <SaveBtn click={this.saveArticle(article)} />
                        </Article>
                    ))}
                </Container>
            </Wrapper>
        );
    }
}
export default Home;