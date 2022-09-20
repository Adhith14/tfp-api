async function api(){

    const api = await fetch("https://api.github.com/users/Adhith14")
    data = await api.json()

    console.log(data)

    const item2 = document.querySelector('.item2')
    item2.textContent = data.public_repos

    const item1 = document.querySelector('.item1')
    item1.textContent = data.followers

    const item3 = document.querySelector('.item3')
    item3.textContent = data.html_url

    const item4 = document.querySelector('.item4')
    item4.textContent = data.avatar_url

    const item5 = document.querySelector('.item5')
    item5.textContent = data.following


}
api()