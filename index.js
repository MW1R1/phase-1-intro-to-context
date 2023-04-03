// Your code here
const createEmployeeRecord = (array1) => {
    let obj = {
        firstName : array1[0],
        familyName : array1[1],
        title : array1[2],
        payPerHour : array1[3],
        timeInEvents : [],
        timeOutEvents :[]
    }
    return obj
}

const createEmployeeRecords = (array1) => {
    let arr1 = []
    for (let i of array1){
        arr1.push(createEmployeeRecord(i))
    }
    return arr1
}
function createTimeInEvent(time){
    if (typeof time !== "string") {
        throw new Error("");
    }
    let newtime = time.split(' ')
    let obj = {type:"TimeIn", hour:parseInt(newtime[1]), date:newtime[0]}
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(time) {
    if (typeof time !== "string") {
        throw new Error("Input must be a string");
    }
    let ti = time.split(' ')
    let newobj = {type:"TimeOut", hour:parseInt(ti[1]), date:ti[0]}
    this.timeOutEvents.push(newobj)
    return this  
}


function hoursWorkedOnDate(date){
    let timeinobj = this.timeInEvents.find(dateobj=> dateobj.date === date).hour
    let timeoutobj = this.timeOutEvents.find(dateobj=> dateobj.date === date).hour
    return (timeoutobj - timeinobj)/100
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function allWagesFor() {
    let allWages = this.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate.call(this, event.date)
    }, 0)
    return allWages
}

function findEmployeeByFirstName(collection, firstNameString){
   return collection.find(record => record.firstName === firstNameString)

}

function calculatePayroll(collection){
    return collection.reduce(function(memo,rec){
        return memo + allWagesFor.call(rec)
    },0)
}
