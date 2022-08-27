function displayBarChart(spendingData) {
    let highestAmount;

    for (let i = 0; i < spendingData.length; i++) {
        if (!highestAmount || highestAmount < spendingData[i].amount) {
            highestAmount = spendingData[i].amount;
        }
    }
    
    const days = Array.from(document.querySelectorAll(".spending__day"));
    
    days.forEach(element => {
        let day = element.textContent.toLowerCase();
        let bar = element.previousElementSibling;
        let barContainer = element.parentElement;
        let dailyAmountSpent = bar.firstElementChild;
    
        for (let i = 0; i < spendingData.length; i++) {
            if (spendingData[i].day !== day) {
                continue;
            }
    
            if (spendingData[i].amount === highestAmount) {
                bar.classList.add("spending__bar--highest");
                bar.style.height = "100%";
                dailyAmountSpent.textContent = `$${highestAmount}`;
            } else {
                bar.style.height = `${(spendingData[i].amount/highestAmount) * (barContainer.clientHeight-element.clientHeight-6)}px`
                dailyAmountSpent.textContent = `$${spendingData[i].amount}`;
            }
        }
    });
}

fetch("./js/data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        displayBarChart(data);
    });
    