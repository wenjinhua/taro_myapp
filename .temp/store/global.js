import { observable } from 'mobx';
const globalStore = observable({
  taroEnv: "h5"
});
export default globalStore;