// index.js

// Function to save practice data
function savePractice(language, question, answer) {
    if (!question || !answer) {
        alert('Please enter both question and answer.');
        return;
    }

    let practiceData = JSON.parse(localStorage.getItem('practiceData')) || {};

    if (!practiceData[language]) {
        practiceData[language] = [];
    }

    practiceData[language].push({ question, answer });

    localStorage.setItem('practiceData', JSON.stringify(practiceData));

    alert('Practice saved successfully!');
}

// Function to load practice data
function loadPracticeData(language) {
    const practiceData = JSON.parse(localStorage.getItem('practiceData')) || {};
    return practiceData[language] || [];
}

// Function to clear all practice data for a language
function clearPractice(language) {
    let practiceData = JSON.parse(localStorage.getItem('practiceData')) || {};

    if (practiceData[language]) {
        if (confirm(`Are you sure you want to clear all practice data for ${language}?`)) {
            delete practiceData[language];
            localStorage.setItem('practiceData', JSON.stringify(practiceData));
            alert('All practice data cleared!');
        }
    } else {
        alert('No practice data to clear.');
    }
}
