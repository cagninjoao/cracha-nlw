/* Função 
function showMeSomething(){
  alert('amigo esto aqui')
} 
showMeSomething()
*/
/* Objeto */
const socialMediaLinks = {
  github: 'cagninjoao',
  youtube: 'UC2SBFj14DnhBSMxQbRWaGFw',
  facebook: 'joao.cagnin',
  twitter: 'jootave1',
  instagram: 'jootave1'
}
//for - elemento de repetição - deve ser acompanhado de argumentos
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    // 0 é equivalente ao primeiro filho de li; TemplateString abre com `` e utiliza ${} para as variáveis
    li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}`
  }
}

//changeSocialMediaLinks()

function getGitHubUserInfo() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json()) //para transformar o arquivo receptado em json
    .then(data => {
      userName.textContent = data.name
      //userBio.textContent = data.bio
      userProfileLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubUserInfo()
