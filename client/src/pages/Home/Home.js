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
        API.save(article)
            .then(res => this.setState({
                saved: this.state.saved.push(article)
            }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear) {
            API.query({
                topic: this.state.topic,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })
            .then(results => this.setState({
                articles: results.response.docs
            }))
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
                            link={article.web_url}
                            title={article.headline.main}
                            preview={article.snippet}
                        >
                            {/* Only show saved button if not in this.state.saved */}
                            <SaveBtn onClick={this.saveArticle(article.id)} />
                        </Article>
                    ))}
                </Container>
            </Wrapper>
        );
    }
}
export default Home;