import { observable } from "mobx";

export default class AppStore {
    @observable time="";
    @observable todos =[];
}