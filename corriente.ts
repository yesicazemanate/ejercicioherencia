class CuentaCorriente extends Cuenta {
    sobreGiro: number= 0;

    constructor (sobreGiro: number){
      super(numRetiro,numConsignacion,ExtractoMensual)
        this.sobreGiro = sobreGiro;
    }
}