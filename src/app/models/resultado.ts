export class Resultado {
    total: number;
    nivel: string;
    user_id: string;
    elaboracion: Date;

    constructor(total: number, nivel: string, user_id: string) {
        this.total = total;
        this.nivel = nivel;
        this.user_id = user_id;
        this.elaboracion = new Date();
    }
}
