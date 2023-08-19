export class City {
    cityName: string;

    constructor(obj?: any) {
        this.cityName = obj ? obj.cityName : '';
    }

    public toJSON() {
        return {
            cityName: this.cityName
        }
    }
}