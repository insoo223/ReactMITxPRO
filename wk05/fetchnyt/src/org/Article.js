import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        height: 600
    },
    media: {
        height: 300
    },
});

const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            {article && (
                <Card className={classes.card} id={article._id}>
                    <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={article.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {article.headline.main}</a>
                    </CardContent>
                </Card >
            )}
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

export default Article;
