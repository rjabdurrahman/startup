import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="w3-container main-bg-color robo-font" style={{ height: '65px', padding: '12px 60px' }}>
                    <section style={{ float: 'right' }}>
                        <img src="img/logo32.png" height={30} />&nbsp;&nbsp;
            <img src="img/logo.png" height={40} />
                    </section>
                </div>
            </footer>
        )
    }
}

export default Footer
