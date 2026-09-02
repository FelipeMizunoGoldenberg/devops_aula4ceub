function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = {
  somar,
  subtrair
};

// SIMULAÇÃO DE VAZAMENTO DE SEGREDO
const AWS_SECRET_KEY = "[SECRET-REMOVIDO]";
