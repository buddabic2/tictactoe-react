import React from 'react';

function Board() {
  return (
      <div className="wrapper">
        <div className="row">
          <button className="buttonOne"></button>
          <button className="buttonTwo"></button>
          <button className="buttonThree"></button>
        </div>
        <div className="row">
          <button className="buttonFour"></button>
          <button className="buttonFive"></button>
          <button className="buttonSix"></button>
        </div>
        <div className="row">
          <button className="buttonSeven"></button>
          <button className="buttonEight"></button>
          <button className="buttonNine"></button>
        </div>
      </div>
  );
}

export default Board;
