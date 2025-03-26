import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.css']
})
export class PostoComponent {
  combustiveis = [
    { nome: 'Gasolina', precoPorLitro: 5.50 },
    { nome: 'Etanol', precoPorLitro: 4.00 }
  ];

  combustivelSelecionado: any;
  valorEmReais: number | null = null;
  quantidadeEmLitros: number | null = null;
  recibo: any = null;
  historico: any[] = []; // Declare e inicialize a propriedade 'historico'

  calcularCompra() {
    if (this.combustivelSelecionado && (this.valorEmReais || this.quantidadeEmLitros)) {
      const precoPorLitro = this.combustivelSelecionado.precoPorLitro;

      if (this.valorEmReais) {
        this.quantidadeEmLitros = this.valorEmReais / precoPorLitro;
      } else if (this.quantidadeEmLitros) {
        this.valorEmReais = this.quantidadeEmLitros * precoPorLitro;
      }

      this.recibo = {
        combustivel: this.combustivelSelecionado.nome,
        quantidadeLitros: this.quantidadeEmLitros,
        valorTotal: this.valorEmReais
      };

      // Adicionar ao histórico
      this.historico.push({
        data: new Date().toLocaleString(),
        combustivel: this.combustivelSelecionado.nome,
        litros: this.quantidadeEmLitros,
        valor: this.valorEmReais
      });
    }
  }

  limparFormulario() {
    this.combustivelSelecionado = null;
    this.valorEmReais = null;
    this.quantidadeEmLitros = null;
    this.recibo = null;
  }
}