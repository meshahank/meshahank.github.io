const chesNoInput = document.getElementById("ches-no-input");
const searchBtn = document.getElementById("search-btn");
const conName = document.getElementById("con-name");
const chesNoText = document.getElementById("ches-no-text");

const resultPage = document.getElementById("result-page");
const totalScoreText = document.getElementById("total-score");

const backBtn = document.getElementById("back-btn");

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

let students = new Map();

students.set(1, {
    name: "Shahan",
    chesNo: 1,
    team: "Lyra",
    stagePrograms: [
        { name: "Math", rank: "A", score: 30 },
        { name: "Science", rank: "B", score: 30 },
        { name: "English", rank: "C", score: 30 }
    ],
    nonStagePrograms: [
        { name: "History", rank: "A", score: 30 },
        { name: "Geography", rank: "B", score: 30 },
        { name: "Physics", rank: "C", score: 30 }
    ]
});

students.set(2, {
    name: "Shameem",
    chesNo: 2,
    team: "Orion",
    stagePrograms: [
        { name: "History", rank: "A", score: 30 },
        { name: "Geography", rank: "B", score: 30 },
        { name: "Physics", rank: "C", score: 25 }
    ],
    nonStagePrograms: [
        { name: "Math", rank: "A", score: 30 },
        { name: "Science", rank: "B", score: 30 },
        { name: "English", rank: "C", score: 30 }
    ]
});

students.set(3, {
    name: "Murshid",
    chesNo: 3,
    team: "Vega",
    stagePrograms: [
        { name: "History", rank: "A", score: 30 },
        { name: "Geography", rank: "B", score: 30 },
        { name: "Physics", rank: "C", score: 29 }
    ],
    nonStagePrograms: [
        { name: "Math", rank: "A", score: 30 },
        { name: "Science", rank: "B", score: 30 },
        { name: "English", rank: "C", score: 30 }
    ]
});

students.set(4, {
    name: "Rabeeh CT",
    chesNo: 4,
    team: "Atlas",
    stagePrograms: [
        { name: "History", rank: "A", score: 30 },
        { name: "Geography", rank: "B", score: 30 },
        { name: "Physics", rank: "C", score: 29 }
    ],
    nonStagePrograms: [
        { name: "Math", rank: "A", score: 30 },
        { name: "Science", rank: "B", score: 30 },
        { name: "English", rank: "C", score: 30 }
    ]
});

searchBtn.addEventListener('click', showResult);


function showResult() {
    let chesNo = parseInt(chesNoInput.value);
    let student = students.get(chesNo);

    if (students.has(chesNo)) {
        let student = students.get(chesNo);
        
        // Calculate the total score
        let totalScore = student.stagePrograms.reduce((sum, program) => sum + program.score, 0) +
        student.nonStagePrograms.reduce((sum, program) => sum + program.score, 0);
        
        // show ches no
        chesNoText.innerHTML = student.chesNo;
        
        // show score
        totalScoreText.innerHTML = totalScore;
        
        // show name
        conName.innerHTML = student.name;
        
        // show stage program details
        stageProgram1Name.innerHTML = student.stagePrograms[0].name;
        stageProgram1Rank.innerHTML = student.stagePrograms[0].rank;
        stageProgram1Score.innerHTML = student.stagePrograms[0].score;
        
        stageProgram2Name.innerHTML = student.stagePrograms[1].name;
        stageProgram2Rank.innerHTML = student.stagePrograms[1].rank;
        stageProgram2Score.innerHTML = student.stagePrograms[1].score;
        
        stageProgram3Name.innerHTML = student.stagePrograms[2].name;
        stageProgram3Rank.innerHTML = student.stagePrograms[2].rank;
        stageProgram3Score.innerHTML = student.stagePrograms[2].score;
        
        // show non-stage program details
        noneStageProgram1Name.innerHTML = student.nonStagePrograms[0].name;
        noneStageProgram1Rank.innerHTML = student.nonStagePrograms[0].rank;
        noneStageProgram1Score.innerHTML = student.nonStagePrograms[0].score;
        
        noneStageProgram2Name.innerHTML = student.nonStagePrograms[1].name;
        noneStageProgram2Rank.innerHTML = student.nonStagePrograms[1].rank;
        noneStageProgram2Score.innerHTML = student.nonStagePrograms[1].score;
        
        noneStageProgram3Name.innerHTML = student.nonStagePrograms[2].name;
        noneStageProgram3Rank.innerHTML = student.nonStagePrograms[2].rank;
        noneStageProgram3Score.innerHTML = student.nonStagePrograms[2].score;
        
        chesNoInput.value = "";
        
        // show team name
        let teamName = student.team;
        const root = document.documentElement;
        switch(teamName){
            case "Lyra":
                root.style.setProperty('--team-color', '#ffff70');
                break;
            case "Orion":
                root.style.setProperty('--team-color', '#88ff70');
                break;
            case "Vega":
                root.style.setProperty('--team-color', '#ff2b2b');
                break;
            case "Atlas":
                root.style.setProperty('--team-color', '#16a9ff');
                break;
        };


        openResultPage();
    } else {
        alert("Student not found");
    };
        
}
    
function openResultPage() {
    resultPage.style.display = "block";
}
    
function closeResultPage() {
    resultPage.style.display = "none";
}
