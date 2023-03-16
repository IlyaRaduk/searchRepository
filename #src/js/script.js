import countRepos from "./countRepos.js";
import searchRepos from "./searchRepos.js";

document.addEventListener('DOMContentLoaded', () => {
    countRepos();
    searchRepos();
})

const inputs = document.querySelectorAll('.form__input')
for (let input of inputs) {
    input.addEventListener('input', (e) => {
        if (e.target.closest('.error')) e.target.closest('.error').classList.remove('error');
    })
}
