const form = document.querySelector('.form');

export default function validation() {
    let result = true;
    if (!form.name.value || form.name.value.length<3) {
        document.querySelector('.form__name').classList.add('error');
        result = false;
    }
    return result;
}