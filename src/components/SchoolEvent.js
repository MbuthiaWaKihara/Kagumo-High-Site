import React from 'react';
import theme from '../styles/theme';

const SchoolEvent = ({event}) => {
    return (
        <>
            <style type="text/css">{`
            .event-wrapper {
                width: 100%;
                height: 20%;
                display: flex;
                flex-direction: row;
                margin-bottom: 2%;
            }

            .date-container {
                border-radius: 5px;
                background-color: ${theme.mainSecondary};
                text-align: center;
                width: 10%;
            }

            @media only screen and (max-width: 600px) {
                .date-container {
                    width: 25%;
                }
            }
            `}</style>

            <div
            className="event-wrapper"
            >
                <div 
                className="date-container"
                >
                    <p
                    style={{
                        color: theme.mainPrimary,
                        fontWeight: 'bolder',
                        fontSize: '1.6em',
                    }}
                    >{event.day}</p>
                    <p
                    style={{
                        color: theme.mainPrimary,
                        fontWeight: 'bolder',
                        fontSize: '.6em',
                    }}
                    >{event.monthAndYear}</p>
                </div>
                <h5
                style={{
                    color: theme.mainTartiary,
                    marginLeft: '5%',
                    position: 'relative',
                    top: '10%',
                }}
                >{event.title}</h5>
            </div>
        </>
    )
}

export default SchoolEvent;
