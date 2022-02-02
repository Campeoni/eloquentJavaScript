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
 
  let group = Group.from([10, 20]);
  
  console.log(group);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.add(30);
  console.log(group.has(30));  
  // → true
  group.delete(10); 
  console.log(group.has(10));
  // → false
  let group2 = Group.from(["a","b","c"]);
  console.log(group2);
  