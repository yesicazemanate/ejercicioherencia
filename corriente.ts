
import Cuenta  from "./Cuenta";
export default class CuentaCorriente extends Cuenta {
    private sobreGiro: number= 0;

    constructor (sobreGiro: number, numRetiro: number, numConsignacion: number, saldo: number,tasaAnual:  number, comisionMes: number) {
      super(numRetiro,numConsignacion, saldo,tasaAnual,comisionMes)
        this.sobreGiro = sobreGiro;
    }

    retirar(retiro:number)  {
      super.retirar(retiro)
      if(retiro > this.saldo ){
        return this.sobreGiro = retiro - this.saldo
      }else{
        return `Retiro es menor que saldo${this.saldo}`
      }
      
    }

    consignar(consignacion: number){
        super.consignar(consignacion)
        if(this.sobreGiro > 0){
         return this.sobreGiro = consignacion - this.sobreGiro
        }else{
          return `No hay sobregiro valor:${this.sobreGiro}`
        }
    }
   imprimirCuentaCorriente(){
    console.log(`Saldo cuenta${this.saldo}, Comision mensual ${this.comisionMes} Transacciones realizadas ${this.numConsignacion+ this.numRetiro} Valor de Sobregiro${this.sobreGiro}`)
   }
   extractoMensual(){
    super.extractoMensual()
       return ("Se invoco")
   }

   getsobreGiro():number  {
    return this.sobreGiro 
   }
   setsobreGiro(sobreGiro:number){
    this.sobreGiro = sobreGiro
   }

} 



