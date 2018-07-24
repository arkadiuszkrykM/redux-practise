import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'
import styles from './RankingWidget.css';

const RankingWidget = props => {
    const getValue = (value, obj) => {
        switch(value){
            case 0:
                props.handleSelectVote(obj[0])
                break;
            case 25:
                props.handleSelectVote(obj[25])
                break;
            case 50:
                props.handleSelectVote(obj[50])
                break;
            case 75:
                props.handleSelectVote(obj[75])
                break;
            case 100:
                props.handleSelectVote(obj[100])
                break;
        }
    }

    const { handleClick, votes } = props;
    const obj = {
        0: `${votes[0]}`,
        25: `${votes[1]}`,
        50: `${votes[2]}`,
        75: `${votes[3]}`,
        100: `${votes[4]}`
    }
    const marks = Object.assign({}, props.votes);
    return (
        <React.Fragment>
        Popularity ranking
            <div className="slider" onClick={handleClick}>
                <Slider  marks={obj} step={null} defaultValue={marks[0]} onChange={(value) => getValue(value, obj)} />
            </div>
        </React.Fragment>
    );
}

export default RankingWidget;
