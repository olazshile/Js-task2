
//program to calculate interest

let data = [ {principal: 2500, time: 1.8},
             {principal: 1000, time: 5},
             {principal: 3000, time: 1},
             {principal: 2000, time: 3},
           ];            


function interestCalculator(entry) {
    let interestData = [];

    for (item of entry) { 
            let interest = '';
            let rate = 0;
            let principal = item.principal; 
            let time = item.time;
            let itemData = {};
            
        if (principal >= 2500 && time >= 3) { 
                rate = 4;
            interest = (principal * rate * time) / 100;  
        itemData = {principal: principal, rate: rate,
                    time: time, interest: interest };
            interestData.push(itemData);

        }else if (principal >= 2500 && (time > 1  && time < 3)) {
                rate = 3;
            interest = (principal * rate * time) / 100;  
        itemData = {principal: principal, rate: rate,
                    time: time, interest: interest };
            interestData.push(itemData);

        }else if (principal < 2500 || time <= 1) {
                rate = 2;
            interest = (principal * rate * time) / 100;  
        itemData = {principal: principal, rate: rate,
                    time: time, interest: interest };
            interestData.push(itemData);
        }else {
                rate = 1;
            interest = (principal * rate * time) / 100;  
        itemData = {principal: principal, rate: rate,
                    time: time, interest: interest };
            interestData.push(itemData);
        }
        
    }
    console.log(interestData);
    return interestData;
    
}

interestCalculator(data);
