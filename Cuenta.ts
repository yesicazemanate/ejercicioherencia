export default class Cuenta {
    // class Cuenta {

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

    getSaldo(): number {
        return this.saldo
    }
    setSaldo(Saldo: number) {
        this.saldo = Saldo
    }

    getNumRetiro(): number {
        return this.numRetiro
    }
    setNumRetiro(numRetiro: number) {
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
    getComisionMes(): number {
        return this.comisionMes
    }
    setComisionMes(comisionMes: number) {
        this.comisionMes = comisionMes
    }


    consignar(consignacion: number) {
        let saldoTotal = this.saldo + consignacion
        console.log( `el saldo total de la cuenta es : ${saldoTotal} `)
    }
    retirar(retiro: number) {
        if (retiro <= this.saldo) {
            let retiroTotal = this.saldo - retiro
            console.log(`el saldo que se retiro es ${retiro}} el saldo total es ${retiroTotal}`)
        }
    }
    calcularInteresMensual() {
        let interes = this.saldo * this.TasaAnual
        let saldoCuenta = this.saldo + interes
        return `el interes recibido es ${interes} saldo total de la cuenta es ${saldoCuenta}`
    }
    extractoMensual() {


    }
    imprimir() {

    }
}

