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
        articles: []
    };

    getArticles = (topic) => {
        API.query(topic)
            .then(results => this.setState({
                articles: results
            }))
            .catch(err => console.log(err));

    };

    saveArticle = () => {

    };

    // removeArticle = (id) => {
    //     API.remove(id)
    //         .then(results => )
    //         .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
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
                        name="starYear"
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
                    <SearchBtn onClick={this.handleFormSubmit}>
                        Search
                    </SearchBtn>
                </form>

                <Container>
                    {this.state.articles.length ? (
                        <h2>Results</h2>
                    ) : ("")}
                    {this.state.articles.map(article => (
                        <Article
                            link={article.link}
                            title={article.title}
                            abstract={article.abstract}
                        >
                            <SaveBtn onClick={this.saveArticle} />
                        </Article>
                    ))}
                </Container>
            </Wrapper>
        );
    }
}
