
import Cuenta  from "./Cuenta";
class CuentaCorriente extends Cuenta {
    private sobreGiro: number= 0;

    constructor (sobreGiro: number, numRetiro: number, numConsignacion: number, saldo: number,tasaAnual:  number, comisionMes: number) {
      super(numRetiro,numConsignacion, saldo,tasaAnual,comisionMes)
        this.sobreGiro = sobreGiro;
    }
    retirar(): void {
      super.retirar()
      if(this.numRetiro > this.saldo ){
        this.sobreGiro = cantidad - this.saldo
      }
    }
    consignar(): void {
        super.consignar()
        if(this.sobreGiro > 0){
          this.sobreGiro = this.numConsignacion - this.sobreGiro
        }
    }
   imprimirCuentaCorriente(){
    console.log(`Saldo cuenta${this.saldo}, Comision mensual ${this.comisionMes} Transacciones realizadas ${this.numConsignacion+ this.numRetiro} Valor de Sobregiro${this.sobreGiro}`)
   }
   getsobreGiro():number  {
    return this.sobreGiro 
   }
   setsobreGiro(sobreGiro:number){
    this.sobreGiro = sobreGiro
   }
}
