class Ahorros extends Cuenta {

    public estado: boolean;

    constructor(estado: boolean) {
        if (estado < 10000) {
            console.log("Cuenta de ahorros inactiva")
        } else {
            console.log("Cuenta de ahorros activa")

        }
        super();
        this.estado = estado;

    }

    //Metodos

    getEstado(): boolean { 
        return this.estado;

    }
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