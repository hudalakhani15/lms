let setDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

let calcAge = (dob) => {

    //calculate month difference from current date in time
    const monthDiff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    const ageDt = new Date(monthDiff);

    //extract year from date    
    const year = ageDt.getUTCFullYear();

    //now calculate the age of the user
    const age = Math.abs(year - 1970);

    return age
}


export { setDate, calcAge };