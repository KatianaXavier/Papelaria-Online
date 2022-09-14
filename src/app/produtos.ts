export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Caderno Raposa", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "./assets/caderno.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Caderno Lua", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "./assets/caderno-1.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Caneta Pastel", preco: 5.00, descricaoPreco: "À vista no PIX", imagem: "./assets/caneta-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Caneta Bichinho", preco: 5.00, descricaoPreco: "À vista no PIX", imagem: "./assets/caneta.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Lápis", preco: 1.00, descricaoPreco: "À vista no PIX", imagem: "./assets/lapis-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Lápis Fofo", preco: 1.00, descricaoPreco: "À vista no PIX", imagem: "./assets/lapis.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Marca-texto", preco: 5.00, descricaoPreco: "À vista no PIX", imagem: "./assets/marca-texto-1.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Marca-texto Pastel ", preco: 5.00, descricaoPreco: "À vista no PIX", imagem: "./assets/marca-texto.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Borracha", preco: 2.00, descricaoPreco: "À vista no PIX", imagem: "./assets/borracha-1.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Borracha Pastel", preco: 2.00, descricaoPreco: "À vista no PIX", imagem: "./assets/borracha.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Apontador", preco: 3.00, descricaoPreco: "À vista no PIX", imagem: "./assets/apontador-1.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Apontador Fofo", preco: 3.00, descricaoPreco: "À vista no PIX", imagem: "./assets/apontador.jpg", quantidadeEstoque: 10 },
    { id: 13, descricao: "Corretivo em Fita", preco: 4.00, descricaoPreco: "À vista no PIX", imagem: "./assets/corretivo.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Bloco de Notas", preco: 5.00, descricaoPreco: "À vista no PIX", imagem: "./assets/bloco-de-notas.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Clips de Papel", preco: 1.00, descricaoPreco: "À vista no PIX", imagem: "./assets/clips.jpg", quantidadeEstoque: 10 },
]