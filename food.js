// food class
// TODO:
class Food {
    constructor(name) {
        this.foodname = name
        // defaults to current day in UTC, sets to CST
        this.PurchaseDate = new Date()
        this.PurchaseDate.setTime(this.PurchaseDate.getTime() - 21600000)

        // TODO: incorporate default dictionary
        // right now defaulting to 7 days
        this.ExpiryDate = new Date()
        this.ExpiryDate.setTime(this.ExpiryDate.getTime() - 21600000)
        this.ExpiryDate.setDate(this.ExpiryDate.getDate() + 7)
    }
    getExpiryDate() {
        // we can return as Date object or string
        // console.log(this.ExpiryDate)
        return this.ExpiryDate
    }
    setExpiryDate(date) {
        // accepts input [year, month, day]
        // TODO: error checking
        this.ExpiryDate = new Date(date[0], date[1] - 1, date[2])
    }
    getPurchaseDate() {
        // we can return as Date object or string
        // console.log(this.PurchaseDate)
        return this.PurchaseDate
    }
    setPurchaseDate(date) {
        // [year, month, day]
        // TODO: error checking
        this.PurchaseDate = new Date(date[0], date[1] - 1, date[2])
    }
    daysTilExpiry() {
        // returns days until expiration, -1 if expired
        var daysTil = (this.ExpiryDate - this.PurchaseDate)/(1000*60*60*24)
        if (daysTil < 0) {
            return -1
        } else {
            return daysTil
        }
    }
    printPurchaseDate() {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday"]
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        var dateString = ""
        dateString += days[this.PurchaseDate.getDay()] + ", "
        dateString += months[this.PurchaseDate.getMonth()] + " "
        dateString += this.PurchaseDate.getDate()
        return dateString
    }
    printExpiryDate() {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday"]
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        var dateString = ""
        dateString += days[this.ExpiryDate.getDay()] + ", "
        dateString += months[this.ExpiryDate.getMonth()] + " "
        dateString += this.ExpiryDate.getDate()
        return dateString
    }
}

// // testing
// var f = new Food()
//
// console.log(f.getPurchaseDate())
// console.log(f.getExpiryDate())
//
// console.log(f.printPurchaseDate())
// console.log(f.printExpiryDate())

//
// f.setPurchaseDate([1999, 9, 1])
// console.log(f.getPurchaseDate())
// f.setExpiryDate([2010, 2, 1])
// console.log(f.getExpiryDate())
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
//         if (a.ExpiryDate < b.ExpiryDate) { return -1 }
//         if (a.ExpiryDate > b.ExpiryDate) { return 1 }
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
// a.setExpiryDate([2000, 1, 1])
// b.setExpiryDate([2001, 1, 1])
// c.setExpiryDate([2002, 1, 1])
//
// var fridge = [c, a, b]
// console.log(fridge)
// console.log(sortAlpha(fridge))
// console.log(sortByExpiryDec(fridge))
// console.log(sortByExpiryAsc(fridge))
