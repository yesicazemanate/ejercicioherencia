class Cuenta {

    private numRetiro: number = 0;
    private numConsignacion: number = 0;
    private saldo: number
    private tasaAnual: number
    private comisionMes: number = 0;

    constructor(numRetiro: number, numConsignacion: number, saldo: number, tasaAnual: number, comisionMes: number) {

        this.numRetiro = numRetiro
        this.numConsignacion = numConsignacion
        this.saldo = saldo
        this.tasaAnual = tasaAnual
        this.comisionMes = comisionMes

    }
}

