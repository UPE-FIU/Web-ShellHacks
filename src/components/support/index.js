import React, { Component } from 'react'
import {supportFAQData} from '../../data/support'
import Card from '../common/cards'
class Support extends Component {

    render() {
        return (
            <div>
                <h1 className="page-title">Support</h1>
                <div>
                    <h3>We are sorry to hear that you having issues. Here's a couple of solutions to common problems</h3>
                    <div>
                        {supportFAQData.map(data =>{
                            const { title, description } = data;
                            return (<Card description = {description} title={title} />)
                        })}
                    </div>
                    <h3>If these solutions did not fix your issue, you can reach us throught the
                         <a href='https://discord.gg/upefiu'>UPE discord</a> or email us at <a href='mailto: upe@fiu.edu'> upe@fiu.edu</a></h3>
                </div>
            </div>
        )
    }
}

export default Support;