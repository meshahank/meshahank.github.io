const chesNoInput = document.getElementById("ches-no-input");
const searchBtn = document.getElementById("search-btn");
const conName = document.getElementById("con-name");
const chesNoText = document.getElementById("ches-no-text");

const resultPage = document.getElementById("result-page");
const totalScoreText = document.getElementById("total-score");

// calling stage program names
const stageProgram1Name = document.getElementById("stage-program-1-name");
const stageProgram2Name = document.getElementById("stage-program-2-name");
const stageProgram3Name = document.getElementById("stage-program-3-name");

// calling stage program ranks
const stageProgram1Rank = document.getElementById("stage-program-1-rank");
const stageProgram2Rank = document.getElementById("stage-program-2-rank");
const stageProgram3Rank = document.getElementById("stage-program-3-rank");

// calling stage program scores
const stageProgram1Score = document.getElementById("stage-program-1-score");
const stageProgram2Score = document.getElementById("stage-program-2-score");
const stageProgram3Score = document.getElementById("stage-program-3-score");

// calling non-stage program names
const noneStageProgram1Name = document.getElementById("nonstage-program-1-name");
const noneStageProgram2Name = document.getElementById("nonstage-program-2-name");
const noneStageProgram3Name = document.getElementById("nonstage-program-3-name");

// calling non-stage program ranks
const noneStageProgram1Rank = document.getElementById("nonstage-program-1-rank");
const noneStageProgram2Rank = document.getElementById("nonstage-program-2-rank");
const noneStageProgram3Rank = document.getElementById("nonstage-program-3-rank");

// calling non-stage program scores
const noneStageProgram1Score = document.getElementById("nonstage-program-1-score");
const noneStageProgram2Score = document.getElementById("nonstage-program-2-score");
const noneStageProgram3Score = document.getElementById("nonstage-program-3-score");

class Contestant {
    constructor(chesNo, name, program1, result1, score1, program2, result2, score2, program3, result3, score3) {
        this.chesNo = chesNo;
        this.name = name;
        this.program1 = program1;
        this.result1 = result1;
        this.score1 = score1;
        this.program2 = program2;
        this.result2 = result2;
        this.score2 = score2;
        this.program3 = program3;
        this.result3 = result3;
        this.score3 = score3;
        this.totalScore = score1 + score2 + score3;
    }
}

let students = [
    new Contestant(12, "M.shahan.k", "News writing", "1st", 10, "News writing", "1st", 7, "none", "none", 0),
    new Contestant(13, "M.shammas.ck", "News writing", "1st", 10, "News writing", "1st", 7, "none", "none", 0),
    // Add more students as needed
];

searchBtn.addEventListener('click', showResult);

function showResult() {
    let searchedChesNo = parseInt(chesNoInput.value);
    let student = students.find(student => student.chesNo === searchedChesNo);

    if (student) {
        openResultPage();

        // Show ches no
        chesNoText.innerHTML = student.chesNo;

        // Show score
        totalScoreText.innerHTML = student.totalScore;

        // Show name
        conName.innerHTML = student.name;

        // Show program names
        stageProgram1Name.innerHTML = student.program1;
        stageProgram2Name.innerHTML = student.program2;
        stageProgram3Name.innerHTML = student.program3;

        // Show results
        stageProgram1Rank.innerHTML = student.result1;
        stageProgram2Rank.innerHTML = student.result2;
        stageProgram3Rank.innerHTML = student.result3;

        // Show scores
        stageProgram1Score.innerHTML = student.score1;
        stageProgram2Score.innerHTML = student.score2;
        stageProgram3Score.innerHTML = student.score3;

    } else {
        alert("Student not found");
    }
}

function openResultPage() {
    resultPage.style.display = "block";
}
