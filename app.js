const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    const btn = question.querySelector(".btn");
    const title = question.querySelector("h2");
    const answer = question.querySelector(".answer");
    question.addEventListener("click", () => {
        questions.forEach((item) => {
            const itemTitle = item.querySelector("h2");
            if (item !== question) {
                item.classList.remove("show-answer");
                itemTitle.classList.remove("highlight-title");
            }
        });
        question.classList.toggle("show-answer");
        btn.classList.toggle("rotate-btn");
        if (!question.classList.contains("show-answer")) {
            btn.setAttribute("aria-expaned", "false");
            answer.setAttribute("aria-hidden", "true");
            title.classList.remove("highlight-title");
        } else {
            btn.setAttribute("aria-expanded", "true");
            answer.setAttribute("aria-hidden", "false");
            title.classList.add("highlight-title");
        }
    });
});
