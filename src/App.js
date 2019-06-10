import React from "react";
import Title from "./components/Title";
import images from "./images.json";
import Score from "./components/Score"
import Wrapper from "./components/Wrapper"
import ImageCard from "./components/ImageCard";
import Main from "./components/Main"




class App extends React.Component {
    state = {
        images,
        score: 0,
        topScore: 0,
        clickedIds: [],
        choiceStatus: ""
    };

    resetState = () => {
        this.setState({
            score: 0,
            clickedIds: []
        });
    }

    shuffleImages = () => {
        return this.state.images.sort(() => Math.random() - 0.5);
    };

    handleChoice = (e, props) => {

        if (this.state.clickedIds.indexOf(props.id) > -1) {
            this.setState({
                choiceStatus: 'Incorrect Guess!'
            });
            this.resetState();
            this.shuffleImages();
            return;
        }
        this.shuffleImages();

        this.state.clickedIds.push(props.id);

        this.setState({
            score: this.state.clickedIds.length,
            choiceStatus: "You guessed correctly!"
        }, () => {
            if(this.state.score >= this.state.topScore){
                this.setState({
                    topScore: this.state.score
                }, () => {
                        if (this.state.score === images.length) {
                            this.setState({
                                choiceStatus: 'You win!'
                            });
                            this.resetState();
                        }
                });
            }
        });  

    }

    render() {
        return (
            <Wrapper>
                <Title>Memory Game</Title>
                <Main>
                    <Score
                        score={this.state.score}
                        topScore={this.state.topScore}
                        choiceStatus={this.state.choiceStatus}
                    />
                    <div className="row">
                    {this.state.images.map(image => (
                        <ImageCard
                            handleChoice = {this.handleChoice}
                            image={image.image}
                            id={image.id}
                            name={image.name}
                        />
                    ))}
                    </div>

                </Main>

            </Wrapper>

        )
    }
}

export default App;
