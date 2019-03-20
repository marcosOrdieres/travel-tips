export default class User {
    static instance = this.instance == null ? new User() : this.instance;
    static userId;
    static tipType;
    static counterForAd;

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

    getCounterForAd() {
      return this.counterForAd;
    }

    setCounterForAd(value) {
      if(!this.getCounterForAd()){
        this.counterForAd = value;
      } else{
        this.counterForAd = this.getCounterForAd() + value;
      }
    }


    getUserObject() {
      const user = {
        userId: parseInt(this.userId),
        tipType: this.tipType,
        counterForAd: parseInt(this.counterForAd)
      };

      return user;
    }

    reset(){
      this.userId = undefined;
      this.tipType = undefined;
      this.counterForAd = undefined;
    }
}
