
import Cuenta  from "./Cuenta";
export default class CuentaCorriente extends Cuenta {
    private sobreGiro: number= 0;

    constructor (sobreGiro: number, numRetiro: number, numConsignacion: number, saldo: number,tasaAnual:  number, comisionMes: number) {
      super(numRetiro,numConsignacion, saldo,tasaAnual,comisionMes)
        this.sobreGiro = sobreGiro;
    }
}

