  export default class Cuenta {

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

    getSaldo(): number{
        return this.saldo
    }
    setSaldo(Saldo: number){
        this.saldo =  Saldo
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

    
    consignar(consignacion : number ){
        let saldoTotal=this.saldo+ consignacion
        return `el saldo total de la cuenta es : ${saldoTotal} `
    }
 
    retirar(retiro: number){
        if(retiro<= this.saldo){
        let retiroTotal = this.saldo-retiro
        return `el saldo que se retiro es ${retiro}} el saldo total es ${retiroTotal}`
        } else {
            return "No se puede retirar el dinero por saldo insuficiente"  
        }

    }
    calcularInteresMensual(){
        let interes= this.saldo * this.tasaAnual
        let saldoCuenta = this.saldo+interes
return  `el interes recibido es ${interes} saldo total de la cuenta es ${saldoCuenta}`
    }
    extractoMensual(){


    }
    imprimir(){

    }
}


