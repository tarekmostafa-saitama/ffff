document.querySelector('#generate').addEventListener('click', () => {
    let name = document.querySelector('#username').value;
    let img = document.querySelector('input[name="img"]:checked').value;
    window.location.href = `./result.html?name=${name}&img=${img}`
})