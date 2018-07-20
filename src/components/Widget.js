import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'
import styles from './Widget.css';

const Widget = props => {
    const { handleClick } = props;
    // const style = { width: 400, margin: 50 };
// const marks = {
//   '-10': '-10°C',
//   0: <strong>0°C</strong>,
//   26: '26°C',
//   37: '37°C',
//   50: '50°C',
//   100: {
//     style: {
//       color: 'red',
//     },
//     label: <strong>100°C</strong>,
//   },
// };
    const obj = {
        0: `${props.votes[0]}`,
        25: `${props.votes[1]}`,
        50: `${props.votes[2]}`,
        75: `${props.votes[3]}`,
        100: `${props.votes[4]}`
    }
    const list = props.votes.map(vote => <li data-id={`${vote}`}>{vote}</li> )
    const marks = Object.assign({}, props.votes);
    console.log(obj);
    return (
        <React.Fragment>
        Pupluarity ranking
            <div className="slider" onClick={handleClick}>
                <Slider  marks={obj} step={null} defaultValue={marks[0]} />
            </div>
            {/* <div style={style}>
      <p>Slider with marks, `step=null`</p>
      <Slider min={-10} marks={marks} step={null} defaultValue={20} />
    </div> */}
        </React.Fragment>
    );
}

export default Widget;
