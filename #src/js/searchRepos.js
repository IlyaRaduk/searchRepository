import countRepos from "./countRepos.js";
import validation from "./validation.js";

export default function searchRepos() {

    const form = document.querySelector('.form');
    const reposContainer = document.querySelector('.repos__colomns')

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validation()) return;
        reposContainer.innerHTML = '';
        document.querySelector('.preloader').classList.add('preloader-activ');
        let response = await fetch(`https://api.github.com/search/repositories?q=${form.name.value}&per_page=10`);
        let data = await response.json();
        document.querySelector('.preloader').classList.remove('preloader-activ');
        if (data.total_count === 0) {
            let alert = document.createElement('div');
            alert.classList.add('alert');
            alert.innerHTML = ' Ничего не найдено';
            reposContainer.prepend(alert);
            return;
        }
        let repos = data.items.reverse();
        for (let repo of repos) {
            let newRepo = document.createElement('div');
            newRepo.classList.add('repos__item');
            newRepo.innerHTML = `
                <div class="repos__title">
                    Repository:<a target="_blank" href="${repo.html_url}"> ${repo.name}</a>
                </div>
                <div class="repos__text">
                    <p class="repos__profile">Profile: <span>${repo.owner.login}</span></p>
                    <p class="repos__description">Description: <span> ${repo.description}</span></p>
                </div>`;
            reposContainer.prepend(newRepo);
        }
        countRepos();
    })
}