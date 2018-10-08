import { observable, action } from "mobx";
export class documentStore {
    constructor() {

    }
    
    @observable number=0;
    @action setNumber(){
        this.number+=1;
    }

}
export default new documentStore();