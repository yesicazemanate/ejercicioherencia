import Cuenta from "./Cuenta";

<<<<<<< HEAD
export default class Ahorros extends Cuenta {
=======
class Ahorros extends Cuenta {
>>>>>>> d2f7ca150a84ecda24f00bf0366aad8ef340a981
    private estado: boolean;

    constructor(numRetiro: number, numConsignacion: number, saldo: number, tasaAnual: number, comisionMes: number) {
        super(numRetiro, numConsignacion, saldo, tasaAnual, comisionMes);
        this.estado = saldo >= 10000;


    }


    //Metodos

    getEstado(): boolean {
        return this.estado;

    }


<<<<<<< HEAD
    consignar(){
=======
    consignar(consignacion: number) {
>>>>>>> d2f7ca150a84ecda24f00bf0366aad8ef340a981
        if (this.estado) {
            super.consignar(consignacion);
        } else {
            console.log("No se puede consignar el  dinero. La cuenta está inactiva.");
        }
    }

<<<<<<< HEAD
    retirar(){
=======
    retirar(retiro: number) {
>>>>>>> d2f7ca150a84ecda24f00bf0366aad8ef340a981
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

<<<<<<< HEAD
    newImpresion() {
        return `Saldo actual: ${this.saldo}
    Comisión mensual : ${this.comisionMes}
    Número de transacciones realizadas:  ${this.numConsignacion + this.numRetiro} `

    }
}
=======
<<<<<<< HEAD
=======
// imprimir(){
//     console.log("Saldo actual: " + this.saldo);
//     console.log("Comisión mensual: " + this.comisionMensual);
//     console.log("Número de transacciones realizadas: " + this.numTransacciones);

// }
>>>>>>> d2f7ca150a84ecda24f00bf0366aad8ef340a981
>>>>>>> 09e1cbabe9d5ecf2f4395313c1cc2c4d9e57712c
