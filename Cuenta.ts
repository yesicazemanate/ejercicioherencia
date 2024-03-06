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

    get NumRetiro(): number { 
        return this.numRetiro
    }
    set NumRetiro(numRetiro: number) { 
        this.numRetiro = numRetiro
    }
    get NumConsignacion(): number {
        return this.numConsignacion
    }
    set NumConsignacion(numConsignacion: number) {
        this.numConsignacion = numConsignacion
    }
    get TasaAnual(): number { 
        return this.tasaAnual
    }
    set TasaAnual(tasaAnual: number) {
        this.tasaAnual = tasaAnual
    }
    get ComisionMes(): number {
        return this.comisionMes
    }
    set ComisionMes(comisionMes: number) {
        this.comisionMes = comisionMes
    }

    
    consignar(){
        
    }
    retirar(){

    }
    calcularInteresMensual(){

    }
    extractoMensual(){

    }
    imprimir(){

    }
}


