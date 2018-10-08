import { observable, computed, action } from "mobx";
export class ViewStore {
    constructor() {

    }

    //菜单的左右展开
    @observable collapsed= false;
    //设置菜单的左右展开
    @action setCollapsed(){
        this.collapsed= !this.collapsed
    };
}
export default new ViewStore();