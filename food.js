// food class
// TODO:

class Food {
    constructor(name) {
        this.foodname = name
        // defaults to current day in UTC, sets to CST
        this.dateOfPurchase = new Date()
        this.dateOfPurchase.setTime(this.dateOfPurchase.getTime() - 21600000)

        // TODO: incorporate default dictionary
        // right now defaulting to 7 days
        this.dateOfExpiry = new Date()
        this.dateOfExpiry.setTime(this.dateOfExpiry.getTime() - 21600000)
        this.dateOfExpiry.setDate(this.dateOfExpiry.getDate() + 7)
    }
    getDateOfExpiry() {
        // we can return as Date object or string
        // console.log(this.dateOfExpiry)
        return this.dateOfExpiry
    }
    setDateOfExpiry(date) {
        // accepts input [year, month, day]
        // TODO: error checking
        this.dateOfExpiry = new Date(date[0], date[1], date[2])
    }
    getDateOfPurchase() {
        // we can return as Date object or string
        // console.log(this.dateOfPurchase)
        return this.dateOfPurchase
    }
    setDateOfPurchase(date) {
        // [year, month, day]
        // TODO: error checking
        this.dateOfPurchase = new Date(date[0], date[1], date[2])
    }

    daysTilExpiry() {
        // returns days until expiration, -1 if expired
        var daysTil = (this.dateOfExpiry - this.dateOfPurchase)/(1000*60*60*24)
        if (daysTil < 0) {
            return -1
        } else {
            return daysTil
        }
    }
}

// testing
// var f = new Food()
//
// console.log(f.getDateOfPurchase())
// console.log(f.getDateOfExpiry())
//
// // f.setDateOfPurchase([1999, 9, 1])
// // console.log(f.getDateOfPurchase())
// // f.setDateOfExpiry([2010, 2, 1])
// // console.log(f.getDateOfExpiry())
//
// console.log(f.daysTilExpiry())
