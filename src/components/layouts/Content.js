import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContentWrapper = styled.div`
    width: 100%;
    padding-top: 2.5%;
    margin-bottom: 20px;
`;

const Title1 = styled.h3`
    color: ${theme.mainSecondary};
    font-weight: 'bolder';
`;

const ContentText = styled.p`
    color: ${theme.mainTartiary};
    width: '70%';
`;

const Title2 = styled.h1`
    color: ${theme.mainTartiary};
    font-weight: 'bolder';
`;

const TitleWrapper = styled.div`
    margin-bottom: 50px;
`;

const TitleIndicator = styled.div`
    width: 70%;
    height: 5px;
    border-radius: 50px;
    background-color: ${theme.mainSecondary};
`;


const Content = ({title1, content1, title2, content2, content3}) => {
    return (
        <>
            <ContentWrapper>
                <Container>
                <Row>
                    <Col lg={4} sm={12}>
                        <TitleWrapper>
                            <Title1>{title1}</Title1>
                        </TitleWrapper>
                        <ContentText>{content1}</ContentText>
                    </Col>
                    <Col lg={8} sm={12}>
                        <TitleWrapper>
                            <Title2>{title2}</Title2>
                            <TitleIndicator/>
                        </TitleWrapper>
                        <ContentText>{content2}</ContentText>
                        <ContentText>{content3}</ContentText>
                    </Col>  
                </Row>
                </Container>
            </ContentWrapper>
        </>
    )
}

export default Content;
