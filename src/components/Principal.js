import React from 'react'
import { Footer } from './Footer/'
import { MainRouter } from './router/MainRouter'

export const Principal = () => {
    return (
        <div>
            <div style={{height: "80%"}}>
                <MainRouter />
            </div>
            <div style={{height: "20%"}}>
                <Footer />
            </div>
        </div>
    )
}
