import { observable, computed } from "mobx";

export default class AppStore {
    @observable time="";
    @observable todos =[];
}