import Cuenta from "./Cuenta";

<<<<<<< HEAD
class Ahorros extends Cuenta {

    public estado: boolean;

  
=======
class Ahorros extends Cuenta{
    private estado: boolean;

    constructor(numRetiro: number, numConsignacion: number, saldo: number,tasaAnual:  number, comisionMes: number ) {
        super(numRetiro, numConsignacion, saldo, tasaAnual, comisionMes);
        this.estado = saldo >= 10000;
        

    }

>>>>>>> cuentaAhorros
    //Metodos

    getEstado(): boolean { 
        return this.estado;

    }
<<<<<<< HEAD
    setEstado(state: boolean) { 
        this.estado = state;
    }

    getConsignar(): number {
        return this.consignar;
    }

    setConsignar(consign: number) { 
        this.consignar = consign;
    }

    getRetirar(): number {
        return this.retirar;
    }

    setRetirar(withdraw: number) { 
        this.retirar = withdraw;
    }
    getExtracto(): number {
        return this.Extracto;

    }
    setExtracto(extract: number) {
        this.extracto = extract;
    }








}
=======

    consignar(): void {
        if (this.estado) {
            super.consignar();
        } else {
            console.log("No se puede consignar el  dinero. La cuenta está inactiva.");
        }
    }

    retirar(): void {
        if (this.estado) {
            super.retirar();
        } else {
            console.log("No se puede retirar el  dinero. La cuenta está inactiva.");
        }
    }
    
    extractoMensual(): void{
        const saldo = this.getSaldo();
        const estado = saldo >= 10000 ? "Cuenta activa" : "Cuenta inactiva";
        const retirosTotal = this.getNumRetiro();
        let comisionAdicional = 0;
        if(retirosTotal > 4 ){
            comisionAdicional = (retirosTotal - 4) * 1000;
        }

        const comisionTotal = this.getComisionMes() + comisionAdicional;
    
        const saldoFinal = saldo - comisionTotal;

        // Imprimir el extracto mensual
        // console.log("Extracto mensual:");
        // console.log("Estado de la cuenta:", estado);
        // console.log("Saldo actual:", saldo);
        // console.log("Comisión total por retiros:", comisionTotal);
        // console.log("Saldo final después de deducir comisiones:", saldoFinal);
    }
}
 

>>>>>>> cuentaAhorros
