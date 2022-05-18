// program-1: Conversion from kilometer to meter

function kilometerToMeter(kilometer) {
    // 1 kilometer in 1000 meters
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter();
console.log("Meter ", result);

// program-1 END

//program-2: budget calculator

function budgetCalculator(watch, mobile, laptop) {
    var totalWatch = watch * 50;    //1 watch costs 50 tk.
    var totalMobile = mobile * 100;  //1 mobile costs 100 tk.
    var totalLaptop = laptop * 500;  //1 laptop costs 500 tk.
    return totalWatch + totalMobile + totalLaptop;
}
var totalCost = budgetCalculator();
console.log("TotalBudget ", totalCost);

//program-2 END

//program-3: Hotel Costs Calculator

function hotelCost(days) {
    var totalCost = 0;

    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondRemainingDays = remaining * 80;
        totalCost = firstTenDays + secondRemainingDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var SecondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var lastDays = remainingDays * 50;
        totalCost = firstTenDays + SecondTenDays + lastDays;
    }
    return totalCost;
}
var totalAmount = hotelCost();
console.log("TotalHotelCost ", totalAmount);

//program-3 END

//program-4: Mega Friend

function megaFriend(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        var currentItem = arr[i];
        if (currentItem.length > result.length) {
            result = arr[i];
        }
    }
    return result;
}
var longestNameIs = megaFriend(['Tanjid', 'Abdullah', 'Ayat', 'RaeidBabul', 'NadimKhan']);
console.log("LongestNameIs: ", longestNameIs);

//program-4 END