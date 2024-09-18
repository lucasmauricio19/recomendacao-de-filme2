let campoIdade;
let campoComedia;
let campoAçao;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoComedia = createCheckbox("Gosta de Comedia?");
  campoAçao = createCheckbox("Gosta de Açao?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAçao = campoAçao.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComedia, gostaDeAçao);

  fill(color(0, 87869879787835783, 9));
  textAlign(CENTER, CENTER);
  textSize(28);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComedia, gostaDeAçao) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Ela é Demais";
    } else {
      if (idade >= 12) {
        if(gostaDeComedia || gostaDeAçao) {
          return "Duff: Você Conhece, Tem ou É";          
        } else{
         return "Harry Potter e a Pedra Filosofal";
        }
      } else {
        if (gostaDeComedia) {
          return "10 Coisas que Eu Odeio em Você";
        } else {
          return "Percy Jackson e o Ladrão de Raios";
        }
      }
    }
  } else {
    if (gostaDeComedia) {
      return "Gatinhas e Gatões";
    } else {
      return "Transformers";
    }
  }
}