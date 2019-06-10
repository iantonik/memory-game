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
        clickedIds: []
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
            console.log('loooooozeeeer!');
            this.resetState();
            this.shuffleImages();
            return;
        }
        this.shuffleImages();

        this.state.clickedIds.push(props.id);

        this.setState({
            score: this.state.clickedIds.length
        }, () => {
            if(this.state.score >= this.state.topScore){
                this.setState({
                    topScore: this.state.score
                }, () => {
                        if (this.state.score === images.length) {
                            console.log('You win!');
                            this.resetState();
                        }
                });
            }
        });  

    }

    render() {
        return (
            <Wrapper>
                <Title>Clicky Game</Title>
                <Main>
                    <Score
                        score={this.state.score}
                        topScore={this.state.topScore}
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
