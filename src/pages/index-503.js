import React from 'react'
import Link from 'gatsby-link'

import myImg from '../assets/ruff.png'

class IndexPage extends React.Component {



    render() {
        return (
            <div>
                <div className="maintenance-message">
                    <div className="message"><h1>Under Construction...Be Back Up Shortly!</h1></div>
                    <div><img src={myImg} className="img-ruff" alt="" /></div>
                </div>
            </div>
        )
    }
}

export default IndexPage



