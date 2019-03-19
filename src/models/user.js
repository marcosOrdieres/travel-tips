export default class User {
    static instance = this.instance == null ? new User() : this.instance;
    static userId;
    static tipType;

    getUserId() {
      return this.userId;
    }

    setUserId(value) {
      this.userId = value;
    }

    getTipType() {
      return this.tipType;
    }

    setTipType(value) {
      this.tipType = value;
    }


    getUserObject() {
      const user = {
        userId: parseInt(this.userId),
        tipType: this.tipType
      };

      return user;
    }

    reset(){
      this.userId = undefined;
      this.tipType = undefined;
    }
}
