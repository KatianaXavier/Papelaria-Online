import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notificar(mensagem: string) {
    this.snackBar.open(mensagem, "Legal!", {
    duration: 2000,
    verticalPosition: "top",
    horizontalPosition: "center"
  });
}
}