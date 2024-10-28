let names = [];
let scores = [];

function displayResults() {
    let total = scores.reduce((a, b) => a + b, 0);
    let average = total / scores.length;
    let highScore = Math.max(...scores);
    let highScorer = names[scores.indexOf(highScore)];

    document.getElementById("results").innerHTML = `
                <h2>Results</h2>
                <p>Average: ${average.toFixed(2)}</p>
                <p>High Score: ${highScorer} (${highScore})</p>`;
}

function displayScores() {
    let tbody = document.getElementById("scores_table").getElementsByTagName('tbody')[0];
    tbody.innerHTML = names.map((name, i) => `<tr><td>${name}</td><td>${scores[i]}</td></tr>`).join('');
}

function addScore() {
    let name = document.getElementById("name").value;
    let score = parseInt(document.getElementById("score").value);

    if (name && score >= 0 && score <= 100) {
        names.push(name);
        scores.push(score);
        document.getElementById("name").value = "";
        document.getElementById("score").value = "";
        document.getElementById("name").focus();
    } else {
        alert("You must enter a name and a valid score.");
    }
}

document.getElementById("add_button").onclick = addScore;
document.getElementById("display_results_button").onclick = displayResults;
document.getElementById("display_scores_button").onclick = displayScores;
document.getElementById("name").focus();