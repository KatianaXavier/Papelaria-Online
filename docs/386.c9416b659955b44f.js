"use strict";(self.webpackChunkpapelaria_online=self.webpackChunkpapelaria_online||[]).push([[386],{386:(M,u,i)=>{i.r(u),i.d(u,{ProdutosModule:()=>v});var p=i(6895),a=i(9541),o=i(1571),l=i(495),f=i(8881);let g=(()=>{class n{constructor(t){this.snackBar=t}notificar(t){this.snackBar.open(t,"Legal!",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(f.ux))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=i(5087),c=i(433);let h=(()=>{class n{constructor(t,r,s,d,x){this.produtosService=t,this.route=r,this.notificacaoService=s,this.carrinhoService=d,this.routeBusca=x,this.quantidade=1}ngOnInit(){const r=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(r),null==this.produto&&this.routeBusca.navigate([r+" n\xe3o localizado"])}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho");const t={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l.z),o.Y36(a.gz),o.Y36(g),o.Y36(m.e),o.Y36(a.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__availability"],[3,"click"]],template:function(t,r){1&t&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h2",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque dispon\xedvel:"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return r.quantidade=d}),o.qZA(),o._uU(14," unidade(s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return r.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&t&&(o.xp6(2),o.Q6J("src",null==r.produto?null:r.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==r.produto?null:r.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==r.produto?null:r.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",r.quantidade),o.xp6(3),o.hij(" ",null==r.produto?null:r.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On,p.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{color:var(--dark-purplepurple);color:#82667f;font-size:36px;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif}.product__price[_ngcontent-%COMP%]{color:var(--pink);font-size:28px;font-weight:400,bold;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--pink);border-radius:8px;padding:15px;flex:1;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif;color:var(--gray)}.product__avaiability[_ngcontent-%COMP%]{font-size:12px;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--dark-purple);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif}button[_ngcontent-%COMP%]:hover{filter:brightness(1.2)}"]}),n})();function _(n,e){if(1&n&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11,"Comprar"),o.qZA()()()),2&n){const t=e.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",t.id,""),o.xp6(1),o.Q6J("src",t.imagem,o.LSH),o.xp6(2),o.hij(" ",t.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,t.preco,"BRL")," "),o.xp6(3),o.hij(" ",t.descricaoPreco," ")}}i(6684);const C=[{path:"",component:(()=>{class n{constructor(t,r){this.produtoService=t,this.route=r}ngOnInit(){const t=this.produtoService.getAll();this.route.queryParamMap.subscribe(r=>{const s=r.get("descricao")?.toLowerCase();this.produtos=s?t.filter(d=>d.descricao.toLowerCase().includes(s)):t})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l.z),o.Y36(a.gz))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item_name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(t,r){1&t&&(o.TgZ(0,"section",0),o.YNc(1,_,12,8,"div",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",r.produtos))},dependencies:[p.sg,a.yS,p.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--pink);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__link[_ngcontent-%COMP%]:link, .product-list__link[_ngcontent-%COMP%]:visited{color:var(--dark-purple)}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--dark-purple);font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif}.product-item__price[_ngcontent-%COMP%]{color:var(--pink);font-size:32px;font-weight:700;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--dark-purple);border:none;color:#fff;font-size:20px;font-family:Bahnschrift SemiBold,Arial Narrow,Arial,sans-serif;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),n})()},{path:":id",component:h}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.Bz.forChild(C),a.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[p.ez,P,c.u5]}),n})()}}]);