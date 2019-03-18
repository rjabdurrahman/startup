import React, { Component } from 'react'

class CardArea extends Component {
  render() {
    return (
      <div className="w3-container w3-light-gray flex" style={{ justifyContent: 'space-around' }}>
        <div>
          <img src="img/icon-4.svg" alt="Norway" style={{ height: '200px', width: '200px' }} />
          <div className="mont-font fet" style={{ marginTop: '-40px', marginBottom: '30px' }}>Connect Experienened</div>
        </div>
        <div>
          <img src="img/icon-5.svg" alt="Norway" style={{ height: '200px', width: '200px' }} />
          <div className="mont-font fet" style={{ marginTop: '-40px', marginBottom: '30px', textAlign: 'center' }}>Discuss Problem</div>
        </div>
        <div>
          <img src="img/icon-6.svg" alt="Norway" style={{ height: '80px', width: '80px', marginTop: '60px' }} />
          <div className="mont-font fet" style={{ paddingTop: '20px', marginLeft: '-25px' }}>Ace Your Term</div>
        </div>
      </div>
    )
  }
}

export default CardArea
