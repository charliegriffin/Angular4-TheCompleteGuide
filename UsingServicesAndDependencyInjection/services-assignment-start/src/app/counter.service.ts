export class CounterService {
    count = 0;

    countStatusChange() {
        this.count += 1;
        console.log('The total number of account status changes is: ' + this.count);
    }
}