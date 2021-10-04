import React from 'react'

const History = () => {
    const clearHistory = () => {
        let history = []
        localStorage.setItem("stories", JSON.stringify(history))
        window.location.reload()
    }
    const storedQueries = JSON.parse(localStorage.getItem('stories'))

    return (
        <div>
            <h1>Search History</h1>
            <ul>
                {storedQueries.map((query, index) => (
                    <li key={index}> {query}</li>

                ))}
            </ul>
            <button onClick={clearHistory}>Clear History</button>

        </div>
    )
}

export default History