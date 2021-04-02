import React from 'react';

class ScoreSearch extends React.Component {
    readScore(event) {

        // Stop (prevent)
        event.preventDefault();

        // Find the id=score
        let element = document.querySelector("#score");

        fetch("/api/movies/score/" + element.value)
        .then((res) => {
            // Parse the string
            return res.json();
        })
        .then((processed) => {

            // Find the id=reportingArea
            let reporting = document.querySelector("#ReportingArea");

            // Does the processed object
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        });
        element.value="";
    }

    render() {
        return (
                <div>
                    <h2>Score</h2>
                    <form onSubmit={this.readScore}>
                    <input id="score" type="text"/>
                    <button>Submit</button>
                    </form>
                </div>
        )
    }
}

export default ScoreSearch;