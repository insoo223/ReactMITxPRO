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
                loading ? ( "Loading...") : 
                    (<div className={classes.root} >
                        {articles.map((item) => (
                            <Article article={item} />
                        ))}
                    </div>)}
        </>
    );
}

Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};

