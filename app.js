const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    const btn = question.querySelector(".btn");
    const title = question.querySelector("h2");
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
            question.setAttribute("aria-expaned", "false");
            title.classList.remove("highlight-title");
        } else {
            question.setAttribute("aria-expanded", "true");
            title.classList.add("highlight-title");
        }
    });
});
