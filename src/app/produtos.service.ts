import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtoBusca: IProduto | undefined;
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId);
  }

  getOneByDescription(produtoDesc: string) {
    return this.produtos.find(produto => produto.descricao.toLowerCase().includes(produtoDesc.toLowerCase()));
  }
}
