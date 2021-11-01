# 💻 Exercise Girls in Tech 💻

<img align="right" alt="GIF" src="https://github.com/gabiazevedo/Exercise_Girls_in_Tech/blob/main/giphy-pencil.gif" width="400px" />

### ✏️ Sobre o exercício ✏️

O exercício deve ser feito usando o **data.json**. Nele há três arrays de objetos principais: 

- Products
- Categories
- Establishments

Eles são todos relacionados, `products` são uma lista de produtos, todo o produto é vendido em vários estabelecimentos e pode pertencer a mais de uma categoria.

As `categories` são a lista de todas as categorias; estabelecimentos vendem produtos dentro dessas categorias. Já `establishments` são a lista de estabelecimentos, estes, vendem diversos produtos dentro de suas categorias.

Use os atributos com o final Id, para vincular dados, por exemplo, se um `product` tem o campo `id: 2`, e um `establishment` tem `productId: 2`, significa que aquele estabelecimento vende o produto de id 2.

Linguagem escolhida para resolução do exercício: **JavaScript**.

O objetivo do exercício é: dado o JSON de entrada, gerar um JSON de saída que deve seguir o seguinte formato:

```json
{
  "establishment A": {
    "category A": {
      "product A": {
        "price": "1.00"
      }
    }
  },
  "establishment B": {
    "category A": {
      "product B": {
        "price": "5.99"
      }
    },
    "category B": {
      "product B": {
        "price": "5.99"
      }
    }
  }
}
```
