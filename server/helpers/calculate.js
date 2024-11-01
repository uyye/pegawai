function calculateDays(startDate, endDate) {
    let start = new Date(startDate)
    let end = new Date(endDate)

    let timeDifference = end - start
    let dayDifference = timeDifference / (1000 * 60 * 60 * 24)
    return Math.ceil(dayDifference)
}

module.exports = calculateDays