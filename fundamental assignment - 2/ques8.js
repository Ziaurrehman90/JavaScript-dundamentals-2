const eventStartDate="2023-12-03";
function calculateRemainingDays(eventStartDate){
    const current_date=new Date();
    const event_date=new Date(eventStartDate);
    const time_diff=event_date-current_date;
    const daysRemaining = Math.ceil(time_diff / (1000 * 60 * 60 * 24));

    return daysRemaining;

}
// // const cur_date=new Date();
// // console.log(cur_date)
console.log(calculateRemainingDays(eventStartDate));
