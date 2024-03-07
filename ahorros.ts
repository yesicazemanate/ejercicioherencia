import Cuenta from "./Cuenta";

class Ahorros extends Cuenta {
    private estado: boolean;

    constructor(numRetiro: number, numConsignacion: number, saldo: number, tasaAnual: number, comisionMes: number) {
        super(numRetiro, numConsignacion, saldo, tasaAnual, comisionMes);
        this.estado = saldo >= 10000;


    }


    //Metodos

    getEstado(): boolean {
        return this.estado;

    }


    consignar(consignacion: number) {
        if (this.estado) {
            super.consignar(consignacion);
        } else {
            console.log("No se puede consignar el  dinero. La cuenta está inactiva.");
        }
    }

    retirar(retiro: number) {
        if (this.estado) {
            super.retirar(retiro);
        } else {
            console.log("No se puede retirar el  dinero. La cuenta está inactiva.");
        }
    }

    extractoMensual() {
        const saldo = this.getSaldo();
        const estado = saldo >= 10000 ? "Cuenta activa" : "Cuenta inactiva";
        const retirosTotal = this.getNumRetiro();
        let comisionAdicional = 0;
        if (retirosTotal > 4) {
            comisionAdicional = (retirosTotal - 4) * 1000;
        }

        const comisionTotal = this.getComisionMes() + comisionAdicional;

        const saldoFinal = saldo - comisionTotal;


    }

    newImpresion() {
        return `Saldo actual: ${this.saldo}
    Comisión mensual : ${this.comisionMes}
    Número de transacciones realizadas:  ${this.numConsignacion + this.numRetiro} `

    }
}