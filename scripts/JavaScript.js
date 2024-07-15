// JavaScript.js

function saveQA() {
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (!question || !answer) {
        alert('Please enter both a question and an answer.');
        return;
    }

    let qaData = JSON.parse(localStorage.getItem('qaData')) || [];
    qaData.push({ question, answer });
    localStorage.setItem('qaData', JSON.stringify(qaData));

    questionInput.value = '';
    answerInput.value = '';

    displayQA();
}

function displayQA() {
    const qaList = document.getElementById('qa-list');
    qaList.innerHTML = '';

    const qaData = JSON.parse(localStorage.getItem('qaData')) || [];

    qaData.forEach((qa, index) => {
        const tr = document.createElement('tr');

        const questionTd = document.createElement('td');
        questionTd.textContent = qa.question;
        tr.appendChild(questionTd);

        const answerTd = document.createElement('td');
        answerTd.textContent = qa.answer;
        tr.appendChild(answerTd);

        const actionsTd = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editQA(index);
        actionsTd.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteQA(index);
        actionsTd.appendChild(deleteButton);

        tr.appendChild(actionsTd);

        qaList.appendChild(tr);
    });
}

function editQA(index) {
    const qaData = JSON.parse(localStorage.getItem('qaData')) || [];
    const qa = qaData[index];

    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');

    questionInput.value = qa.question;
    answerInput.value = qa.answer;

    deleteQA(index);
}

function deleteQA(index) {
    let qaData = JSON.parse(localStorage.getItem('qaData')) || [];
    qaData.splice(index, 1);
    localStorage.setItem('qaData', JSON.stringify(qaData));

    displayQA();
}

window.onload = displayQA;
