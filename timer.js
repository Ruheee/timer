const times = process.argv.slice(2); // takes args from command line

const timer = (times) => {
  for (const time of times) { // loops over times
    if (time === undefined) { //  time is skipped if it equals to undefined, and continues the loop
      continue;
    }
  
    if (isNaN(time)) { // if time is NaN skip, and continue loop
      continue;
    }
  
    if (time < 0) { // if time < 0, skip and continue loop
      continue;
    }

    setTimeout(() => {  // setTimeout will beep at each given second on the command line
      console.log(`${time} Seconds`);
      process.stdout.write('\x07');
    }, 1000 * time);
  }
};

timer(times);





