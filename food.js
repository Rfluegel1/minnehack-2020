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
        var today = new Date()
        var daysTil = (this.ExpiryDate - today)/(1000*60*60*24)
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
