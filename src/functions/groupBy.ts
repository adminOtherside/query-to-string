export default function goupBy(value: string, data: any) {
  let resultados = [];
  let iguais = [];
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      iguais.push(data[i]);
    } else if (data[i][value] === data[i - 1][value]) {
      iguais.push(data[i]);
    } else {
      resultados.push(iguais);
      iguais = [];
      iguais.push(data[i]);
    }
  }
  return resultados;
}
