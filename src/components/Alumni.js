import React from 'react';
import theme from '../styles/theme';

const Alumni = ({profile}) => {
    return (
        <>
            <style type="text/css">{`
                .alumni-profile-container {
                    width: 25%;
                    height: 50%;
                    border: 1px solid black;
                    border-radius: 20px;
                    padding: 20px;
                    margin: 2.5%;
                }

                @media only screen and (max-width: 600px) {
                    .alumni-profile-container {
                        width: 90%;
                        margin: 5%;
                    }
                }
            `}</style>
            <div className="alumni-profile-container">
                <p
                style={{
                    fontFamily: 'Poppins',
                    textAlign: 'center',
                    color: theme.mainTartiary,
                }}
                >{profile.content}</p>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                }}
                >
                    <img
                    src={profile.imageSource}
                    alt=""
                    width="60"
                    height="60"
                    style={{
                        borderRadius: '50px',
                    }}
                    />
                    <p
                    style={{
                        fontWeight: 'bolder',
                        fontFamily: 'Poppins',
                        marginLeft: '10%',
                        color: theme.mainSecondary,
                    }}
                    >{profile.name}</p>
                </div>
            </div>
        </>
    )
}

export default Alumni;
