import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import PageLink from "../../components/PageLink";
import Container from "../../components/Container";
import RemoveBtn from "../../components/RemoveBtn";
import Article from "../../components/Article";

class Saved extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        API.showSaved()
            .then(results => this.setState({
                articles: results
            }))
            .catch(err => console.log(err));
    };

    removeArticle = (id) => {
        API.remove(id)
            .then(results => this.setState({
                articles: this.state.articles.remove(id)
            }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Heading>
                    <Link to={"/"}>
                        <PageLink page="Home" />
                    </Link>
                </Heading>

                <Container>
                    {this.state.articles.length ? (
                        <h2>You have no saved articles</h2>
                    ) :
                        (
                            <h2>Saved Articles</h2>
                        )}
                    {this.state.article.map(article => (
                        <Article
                            link={article.link}
                            title={article.title}
                            preview={article.preview}
                        >
                            <RemoveBtn onClick={this.removeArticle(article.id)} />
                        </Article>
                    ))}
                </Container>
            </Wrapper>
        );
    }
}
export default Saved;