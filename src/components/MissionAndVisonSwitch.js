import React from 'react';
import theme from '../styles/theme';

//bootstrap
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const MissionAndVisonSwitch = () => {
    const [currentCard, setCurrentCard] = React.useState("mission");

    const determineCurrentCard = () => {
        if(currentCard === "mission") {
            return (
                <>
                    <Card.Title style={{
                        color: theme.mainTartiary,
                    }}>Our Mission</Card.Title>
                    <Card.Text style={{
                        color: theme.mainTartiary,
                    }}>
                    To create a society of men of consolidated intellect
                    </Card.Text>
                </>
            );
        }

        return (
            <>
                <Card.Title style={{
                        color: theme.mainTartiary,
                    }}>Our Vision</Card.Title>
                <Card.Text style={{
                        color: theme.mainTartiary,
                    }}>
                To have a state defined by good standards of education, influenced by our institution
                </Card.Text>
            </>
        )
    }

    const switchCard = newCard => {
        if(currentCard !== newCard) {
            setCurrentCard(newCard);
        }
    }
    return (
        <>
            <Card>
                <Card.Header style={{
                    backgroundColor: theme.mainTartiary,
                }}>
                    <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link active={currentCard === "mission"} onClick={() => switchCard("mission")} style={{
                            color: currentCard === "mission" ? theme.mainTartiary : theme.mainPrimary,
                        }}>Mission</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={currentCard === "vision"} onClick={() => switchCard("vision")} style={{
                            color: currentCard === "vision" ? theme.mainTartiary : theme.mainPrimary,
                        }}>Vision</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {
                        determineCurrentCard()
                    }
                </Card.Body>
                </Card>
        </>
    )
}

export default MissionAndVisonSwitch;
