import React from 'react'
import { Footer } from '../Footer'
import { MainRouter } from '../router/MainRouter'
import './index.css'

export const Principal = () => {
    return (
        <div>
            <div id="cont-Main">
                <MainRouter />
            </div>
            {/* <Footer /> */}
        </div>
    )
}
