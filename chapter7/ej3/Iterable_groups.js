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

    [Symbol.iterator]() {
        return new miembroIterator(this);
    }
}  
class miembroIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    next() {
      if (this.position >= this.group.miembro.length) {
        return {done: true};
      } else {
        let result = {value: this.group.miembro[this.position],
                      done: false};
        this.position++;
        return result;
      }
    }
  }


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
  