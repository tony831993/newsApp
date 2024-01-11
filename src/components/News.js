import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        let newAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2085d705144e43b18b174c06e7714e57&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(newAPI);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        this.setState({ loading: true });
        const page = this.state.page - 1;
        let newAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2085d705144e43b18b174c06e7714e57&page=${page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newAPI);
        let parsedData = await data.json();
        this.setState({
            page: page,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        this.setState({ loading: true });
        const page = this.state.page + 1;
        if (page > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2085d705144e43b18b174c06e7714e57&page=${page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <>
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((item) => {
                        return <div className="col-md-3" key={item.url}>
                            <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newUrl={item.url} author={item.author} publishedAt={item.publishedAt}
                                source={item.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </>
        )
    }
}

export default News