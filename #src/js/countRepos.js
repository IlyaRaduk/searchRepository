export default function countRepos() {
    let counts = document.querySelectorAll('.repos__item').length;
    const lastOne = counts % 10;
    const lastTwo = counts % 100;
    let str = '';
    if (lastTwo > 10 && lastTwo < 15) {
        str = ' репозиториев';
    }
    else if (lastOne == 1) {
        str = 'репозиторий';
    }
    else if (lastOne > 1 && lastOne < 5) {
        str = 'репозитория';
    }
    else {
        str = ' репозиториев';
    }
    let title = document.querySelector('.repos__count');
    title.innerHTML = counts + " " + str;
}
