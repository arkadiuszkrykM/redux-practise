import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'
import styles from './RankingWidget.css';

const ReleaseDatesWidget = props => {
    const getValue = (value, obj) => {
        switch(value){
            case 0:
                props.handleSelectDate(obj[0])
                break;
            case 25:
                props.handleSelectDate(obj[25])
                break;
            case 50:
                props.handleSelectDate(obj[50])
                break;
            case 75:
                props.handleSelectDate(obj[75])
                break;
            case 100:
                props.handleSelectDate(obj[100])
                break;
        }
    }

    const { dates } = props;
    const obj = {
        0: `${dates[0]}`,
        25: `${dates[1]}`,
        50: `${dates[2]}`,
        75: `${dates[3]}`,
        100: `${dates[4]}`
    }
    return (
        <React.Fragment>
        Release dates:
            <div className="slider">
                <Slider  marks={obj} step={null} defaultValue={dates[0]} onChange={(value) => getValue(value, obj)} />
            </div>
        </React.Fragment>
    )
}

export default ReleaseDatesWidget;
