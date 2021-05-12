import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Article from './Article.js';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

export default function Articles({ loading, articles }) {
    const classes = useStyles();

    return (
        <>
            {
                loading ? (
                    "Loading..."
                ) : (
                    <ol>
                        {articles.map((item) => (
                            <div className='list-group-item'>
                                <li key={item._id}>
                                    <a href={item.web_url}>{item.headline.main}</a>
                                </li>
                            </div>
                        ))}
                    </ol>
                )
            }
        </>
    );
}

Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};
