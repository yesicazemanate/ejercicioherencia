import Cuenta from "./Cuenta";

class Ahorros extends Cuenta {

    public estado: boolean;

  
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
