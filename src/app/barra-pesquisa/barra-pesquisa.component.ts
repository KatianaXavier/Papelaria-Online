import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";
  produto: IProduto | undefined;

  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    this.produto = this.produtosService.getOneByDescription(this.descricao);
    if (this.produto == undefined){
      this.router.navigate(["não localizado"]);
    }
    else{
      if (this.descricao) {
        this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }});
        return;
      }

      this.router.navigate(["produtos"]);
    }
  }
}
