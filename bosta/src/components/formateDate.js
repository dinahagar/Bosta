export const formatDate = (number) => {
    let dayName = new Date(number).toLocaleString('en', {weekday:'long'});
    let dayDate =  new Date(number).getDate();
    let dayNumber = new Date(number).getDate() < 10 ? '0' + dayDate : dayDate;
    let monthDate = new Date(number).getMonth()+1;
    let monthNumber = new Date(number).getMonth()+1 < 10 ? '0' + monthDate : monthDate;
    let yearNumber = new Date(number).getFullYear();
    let minutes = new Date(number).getMinutes();
    let hours = new Date(number).getHours() > 12 ? new Date(number).getHours()-12 : new Date(number).getHours();
  
    let date = dayName + ' ' + dayNumber + '/' + monthNumber + '/' + yearNumber + ' ' + 'at ' + hours + ':' + minutes + `${hours+12 > 12 ? ' pm' : ' am'}`;
    
    return date;
}

export const formatShipmentDate = (data) => {
    let dayDate =  new Date(data).getDate();
    let dayNumber = new Date(data).getDate() < 10 ? '0' + dayDate : dayDate;
    let monthDate = new Date(data).getMonth()+1;
    let monthNumber = new Date(data).getMonth()+1 < 10 ? '0' + monthDate : monthDate;
    let yearNumber = new Date(data).getFullYear();
  
    let date = dayNumber + '/' + monthNumber + '/' + yearNumber;
    
    return date;
}

export const formatShipmentTime = (number) => {
    let minutes = new Date(number).getMinutes();
    let hours = new Date(number).getHours() > 12 ? new Date(number).getHours()-12 : new Date(number).getHours();
  
    let time = hours + ':' + minutes + `${hours+12 > 12 ? ' pm' : ' am'}`;
    
    return time;
}
