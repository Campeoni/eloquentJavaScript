class Group {
    constructor(){
        this.miembro = [];
    }

    has (value) {
        if (this.miembro.includes(value)) {
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
            this.miembro.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {            
            this.miembro.splice(this.miembro.indexOf(value));     
        }
        else {
            return
        }
    }

    static from(valor) {
        let nuevomiembro = new Group;
        for (let i = 0; i < valor.length; i++)
        {
            nuevomiembro.miembro.push(valor[i]);
        }
        return nuevomiembro;
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
  