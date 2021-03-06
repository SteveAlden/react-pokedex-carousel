import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FilledDiv } from './Elements';
const Stats = (props) => {
  const getStatName = (name) => {
    switch (name) {
      case 'speed':
        return 'Speed    ';
      case 'attack':
        return 'Attack   ';
      case 'defense':
        return 'Defence  ';
      case 'special-attack':
        return 'S.Attack ';
      case 'special-defense':
        return 'S.Defence';
      case 'hp':
        return 'Hp';
      default:
        return null;
    }
  };

  const getDiv = (s) => {
    let baseStat = s?.baseStat;
    return (
      <>
        <Row>
          <Col align='left' className='col-sm-1 col-md-2'>
            <h5>{getStatName(s?.statName)}</h5>
          </Col>
          <Col className='col-sm-11 col-md-10' align='left'>
            <div
              class='progress'
              style={{ height: '20px', backgroundColor: 'rgb(25, 25, 25)' }}
            >
              {s?.baseStat}
              <div
                class='progress-bar'
                style={{
                  borderRadius: '12px',
                  width: baseStat + '%',
                  backgroundImage:
                    'linear-gradient(to right, rgb(25, 25, 25) 0%, rgba(239,9,105,1) 100%',
                }}
              ></div>
            </div>
          </Col>
        </Row>
        <br />
      </>
    );
  };
  let stat;
  if (props?.stats) {
    stat = props?.stats;
  }
  return (
    <FilledDiv>
      <h3 style={{ marginBottom: '20px' }}>Base Stats</h3>
      {stat?.map((s) => getDiv(s))}
    </FilledDiv>
  );
};

export default Stats;
