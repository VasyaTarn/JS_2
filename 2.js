class ExtendedDate extends Date {
    formatDate() {
      const day = this.getDate();
      const month = this.getMonth() + 1; 
      return `${day}.${month}`;
    }
  
    isPast() {
      return this.getTime() < Date.now();
    }
  
    isLeapYear() {
      const year = this.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    nextDate() {
      const nextDay = new ExtendedDate(this); 
      nextDay.setDate(this.getDate() + 1);
      return nextDay;
    }
  }
  
  const today = new ExtendedDate();
  console.log(`Today: ${today.formatDate()}`);
  console.log(`past: ${today.isPast()}`);
  console.log(`leap year: ${today.isLeapYear()}`);
  console.log(`Tomorrow: ${today.nextDate().formatDate()}`);