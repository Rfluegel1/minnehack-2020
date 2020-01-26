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

function sortAlpha(foodList) {
    // takes a list of Foods, returns a sorted list
    foodList.sort(function(a, b) {
        if (a.foodname < b.foodname) { return -1 }
        if (a.foodname > b.foodname) { return 1 }
        return 0;
    })
    return foodList.sort()
}

// // testing
// var f = new Food()
//
// console.log(f.getDateOfPurchase())
// console.log(f.getDateOfExpiry())
//
// f.setDateOfPurchase([1999, 9, 1])
// console.log(f.getDateOfPurchase())
// f.setDateOfExpiry([2010, 2, 1])
// console.log(f.getDateOfExpiry())
//
// console.log(f.daysTilExpiry())
//
// function sortAlpha(foodList) {
//     // takes a list of Foods, returns a sorted list
//     foodList.sort(function(a, b) {
//         if (a.foodname < b.foodname) { return -1 }
//         if (a.foodname > b.foodname) { return 1 }
//         return 0;
//     })
//     return foodList
// }
//
// function sortByExpiryDec(foodList) {
//     foodList.sort(function(a, b) {
//         if (a.dateOfExpiry < b.dateOfExpiry) { return -1 }
//         if (a.dateOfExpiry > b.dateOfExpiry) { return 1 }
//         return 0
//     })
//     return foodList
// }
//
// function sortByExpiryAsc(foodList) {
//     return sortByExpiryDec(foodList).reverse()
// }
//
// var a = new Food("Apples")
// var b = new Food("Banana")
// var c = new Food("Carrot")
//
// a.setDateOfExpiry([2000, 1, 1])
// b.setDateOfExpiry([2001, 1, 1])
// c.setDateOfExpiry([2002, 1, 1])
//
// var fridge = [c, a, b]
// console.log(fridge)
// console.log(sortAlpha(fridge))
// console.log(sortByExpiryDec(fridge))
// console.log(sortByExpiryAsc(fridge))
