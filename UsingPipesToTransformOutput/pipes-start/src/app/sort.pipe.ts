import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    var orderArray = [];
    for (const item of value){
        orderArray.push(item[propName]);
    }
    orderArray.sort();
    var resultsArray = [];
    for (const item of orderArray){
        for (const element of value){
            if (element[propName] === item){
                resultsArray.push(element);
            }
        }
    }
    return resultsArray;
  }

}