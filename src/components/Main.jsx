import './Main.css'
import React from 'react'
import Table from './Table'

export default function Main() {

    return (
        <React.Fragment>
            <main className="content">
                <div className="p-3 mt-3">
                    <Table />
                </div>
            </main>
        </React.Fragment>
    )
}