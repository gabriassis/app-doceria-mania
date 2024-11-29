import bolo1 from '../assets/img/bolo1.png'
import bolo2 from '../assets/img/bolo2.png'
import bolo3 from '../assets/img/bolo3.png'
import bolo4 from '../assets/img/bolo4.png'
import torta1 from '../assets/img/torta1.png'
import torta2 from '../assets/img/torta2.png'
import torta3 from '../assets/img/torta3.png'
import torta4 from '../assets/img/torta4.png'
import doces1 from '../assets/img/doces1.png'
import doces2 from '../assets/img/doces2.png'
import doces3 from '../assets/img/doces3.png'
export const cardapioData = [
  {
    id: 1,
    nome: "BRIGADEIRO",
    descricao: "Massa de chocolate, recheada com duas camadas de brigadeiro e coberta por brigadeiro e granulado belga Callebaut",
    preco: 12.50,
    imagem: bolo1,
    categoria: "Bolo",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
      { tamanho: "Médio", "peso": 1.5, "preco": 65, "fatias": 35 },
      { tamanho: "Grande ", "peso": 2.2, "preco": 90, "fatias": 50 },
      { tamanho: "Bolo ", "peso": 3.3, "preco": 200, "fatias": 100 }
    ]
  },
  {
    id: 2,
    nome: "BEM CASADA",
    descricao: "Massa branca, recheada com duas camadas e coberta por doce de leite argentino.",
    preco: 12.50,
    imagem: bolo2,
    categoria: "Bolo",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
      { tamanho: "Médio", "peso": 1.5, "preco": 65, "fatias": 35 },
      { tamanho: "Grande ", "peso": 2.2, "preco": 90, "fatias": 50 },
      { tamanho: "Bolo ", "peso": 3.3, "preco": 200, "fatias": 100 }
    ]
  },
  {
    id: 3,
    nome: "BOLINHA",
    descricao: "Massa de chocolate, recheada com brigadeiro e brigadeiro branco, coberta por brigadeiro e mini bolinhas crocantes de cerea belga Callebaut",
    preco: 12.50,
    imagem: bolo3,
    categoria: "Bolo",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
      { tamanho: "Médio", "peso": 1.5, "preco": 65, "fatias": 35 },
      { tamanho: "Grande ", "peso": 2.2, "preco": 90, "fatias": 50 },
      { tamanho: "Bolo ", "peso": 3.3, "preco": 200, "fatias": 100 }
    ]
  },
  
  {
    id: 4,
    nome: "DOÇURA",
    descricao: "Massa de chocolate, recheada combrigadeiro e brigadeiro branco com morangos, coberta por brigadeiro e morangost",
    preco: 12.50,
    imagem: bolo4,
    categoria: "Bolo",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
      { tamanho: "Médio", "peso": 1.5, "preco": 65, "fatias": 35 },
      { tamanho: "Grande ", "peso": 2.2, "preco": 90, "fatias": 50 },
      { tamanho: "Bolo ", "peso": 3.3, "preco": 200, "fatias": 100 }
    ]
  },
  {
    id: 5,
    nome: "TORTA DE LIMÃO",
    // descricao: "Massa de chocolate, recheada combrigadeiro e brigadeiro branco com morangos, coberta por brigadeiro e morangost",
    preco: 12.50,
    imagem: torta1,
    categoria: "Torta",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  },
  {
    id: 5,
    nome: "CHEESECAKE DE GOIABADA OU FRUTAS VERMELHAS",
    //descricao: "Massa de chocolate, recheada combrigadeiro e brigadeiro branco com morangos, coberta por brigadeiro e morangost",
    preco: 12.50,
    imagem: torta2,
    categoria: "Torta",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  },
  {
    id: 5,
    nome: "TORTA DE BRIGADEIRO",
    //descricao: "Massa de chocolate, recheada combrigadeiro e brigadeiro branco com morangos, coberta por brigadeiro e morangost",
    preco: 12.50,
    imagem: torta4,
    categoria: "Torta",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  },
  {
    id: 6,
    nome: "DUETO DE DOCE DE LEITE E CHOCOLATE",
    //descricao: "Massa de chocolate, recheada combrigadeiro e brigadeiro branco com morangos, coberta por brigadeiro e morangost",
    preco: 12.50,
    imagem: torta3,
    categoria: "Torta",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  },
  {
    id: 7,
    nome: "BRIGADE IRO DE NUT E L LA E AVE LÃS",
    descricao: "CX C/ 20 UNIDADES DO MESMO SABOR: R$72 DOCES FINOS SUGERIMOS 3 UN. POR CRIANÇA E 6 UN. POR ADULTO",
    preco: 12.50,
    imagem: doces1,
    categoria: "DocesFinos",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  },
  {
    id: 8,
    nome: "BRIGADEIRO MEIO AMARGO OU AO LEITE C/GRANULADO CALLEBAUT",
    descricao: "CX C/ 20 UNIDADES DO MESMO SABOR: R$72 DOCES FINOS SUGERIMOS 3 UN. POR CRIANÇA E 6 UN. POR ADULTO",
    preco: 12.50,
    imagem: doces3,
    categoria: "DocesFinos",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  },
  {
    id: 8,
    nome: "MORANGUINHO E SPECIAL C/ GRANULADOCAL L EBAUT",
    descricao: "CX C/ 20 UNIDADES DO MESMO SABOR: R$72 DOCES FINOS SUGERIMOS 3 UN. POR CRIANÇA E 6 UN. POR ADULTO",
    preco: 12.50,
    imagem: doces2,
    categoria: "DocesFinos",
    tamanhos: [
      { tamanho: "Baby", "peso": 1, "preco": 50, "fatias": 15 },
    ]
  }
];
