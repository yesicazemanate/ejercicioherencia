class Cuenta {

    protected numRetiro: number = 0;
    protected numConsignacion: number = 0;
    protected saldo: number
    protected tasaAnual: number
    protected comisionMes: number = 0;

    constructor(numRetiro: number, numConsignacion: number, saldo: number, tasaAnual: number, comisionMes: number) {

        this.numRetiro = numRetiro
        this.numConsignacion = numConsignacion
        this.saldo = saldo
        this.tasaAnual = tasaAnual
        this.comisionMes = comisionMes

    }

    getNumRetiro(): number { 
        return this.numRetiro
    }
    setNumRetiro(numRetiro: number) { 
        this.numRetiro = numRetiro
    }
    getNumConsignacion(): number {
        return this.numConsignacion
    }
    setNumConsignacion(numConsignacion: number) {
        this.numConsignacion = numConsignacion
    }
    getTasaAnual(): number { 
        return this.tasaAnual
    }
    setTasaAnual(tasaAnual: number) {
        this.tasaAnual = tasaAnual
    }
    getComisionMes(): number {
        return this.comisionMes
    }
    setComisionMes(comisionMes: number) {
        this.comisionMes = comisionMes
    }
}

