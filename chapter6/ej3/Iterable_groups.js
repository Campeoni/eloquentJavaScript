class Group {
    constructor(){
        this.grupo = [];
    }

    has (value) {
        if (this.grupo.includes(value)) {
            return true;
        }
        else {
            return false;
        }
    }
    
    add(value){
        if (this.has(value)) {
            return
        }
        else {
            this.grupo.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {            
            this.grupo.splice(this.grupo.indexOf(value));     
        }
        else {
            return
        }
    }

    static from(valor) {
        let nuevoGrupo = new Group;
        for (let i = 0; i < valor.length; i++)
        {
            nuevoGrupo.grupo.push(valor[i]);
        }
        return nuevoGrupo;
    }
}  

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
  