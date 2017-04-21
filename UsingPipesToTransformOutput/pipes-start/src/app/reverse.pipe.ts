import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(str: string) {
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }
}