
import Cuenta  from "./Cuenta";
class CuentaCorriente extends Cuenta {
    private sobreGiro: number= 0;

    constructor (sobreGiro: number, numRetiro: number, numConsignacion: number, saldo: number,tasaAnual:  number, comisionMes: number) {
      super(numRetiro,numConsignacion, saldo,tasaAnual,comisionMes)
        this.sobreGiro = sobreGiro;
    }

    retirar(retiro:number) : number {
      super.retirar(retiro)
      if(this.numRetiro > this.saldo ){
        return this.sobreGiro = retiro - this.saldo
      }else{
        return this.sobreGiro
      }
      
    }

    consignar(consignacion: number): number {
        super.consignar(consignacion)
        if(this.sobreGiro > 0){
         return this.sobreGiro = this.numConsignacion - this.sobreGiro
        }else{
          return this.numConsignacion
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
