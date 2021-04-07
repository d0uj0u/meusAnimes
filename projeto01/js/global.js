function mostrarAnimesDisponiveis()
{
  let data = new Date()
  let diaDaSemana = data.getDay() //0Dom, 1Seg, 2Ter, 3Qua, 4Qui, 5Sex, 6Sab

  //Todos os animes
  let animes = new Array()
  animes = [bc = [2, "./imagens/blackClover.jpg"],
  drStone = [4, "./imagens/drStone.jpg"],
  yakusoku = [4, "./imagens/yakusokuNoNeverLand.jpg"],
  jujutsu = [5, "./imagens/jujutsuKaisen.jpg"]]
  animesDisponiveis = []

  for (let i = 0; i < 7; i++)
  {
    //Apresenta todos os animes na sessão TODOS OS ANIMES
    let tela = document.getElementById("animesTodosDiv")
    let imagem = document.createElement("img")
    imagem.src = animes[i][1]
    tela.appendChild(imagem)
    //Apresenta animes disponíveis na sessão ANIMES DE HOJE!
    if(animes[i][0] == diaDaSemana)
    {
      animesDisponiveis.push(animes[i][1])
      let imagem = document.createElement("img")
      imagem.src = animes[i][1]
      let tela = document.getElementById("animesDisponiveisDiv")
      tela.appendChild(imagem)
    }
  }
}

  //Apresenta um aviso em tela caso não tenha anime disponível
  if(animesDisponiveis.length == 0)
  {
    let tela = document.getElementById("animesDisponiveis")
    let texto = document.createElement("p")
    let fundo = document.createElement("div")
    texto.textContent="Sem animes por hoje!"
    tela.appendChild(fundo)
    fundo.appendChild(texto)
    tela.style="height: 80px; background-color: rgba(0,0,0,0.8); border: none;"
    fundo.style="display: flex; align-content: center; justify-content: center; padding-top: 18px;"
    texto.style="font-size: 34px; color: #646464;"
    let placaEspecial = document.getElementsByTagName("p")
    placaEspecial[1].remove()
  }

mostrarAnimesDisponiveis()
