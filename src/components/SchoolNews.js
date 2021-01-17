import React from 'react';
import theme from '../styles/theme';

const SchoolNews = ({news}) => {
    return (
        <>
            <style type="text/css">{`
            `}</style>
            <div>
                <h3
                style={{
                    color: theme.mainTartiary,
                    fontWeight: 'bolder',
                }}
                >{news.title}</h3>
                <div>
                    <p
                    style={{
                        color: 'gray',
                        fontSize: '.6em',
                    }}
                    >{news.date}</p>
                </div>
            </div>
        </>
    )
}

export default SchoolNews;
