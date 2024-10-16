import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderedtable',
  standalone: true
})
export class OrderedtablePipe implements PipeTransform {

  transform(value: string[], order: string): string[] {
    if (order === 'asc') {
        return value.sort((a, b) => {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
    }
    if (order === 'desc') {
      return value.sort((a, b) => {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      });
    }

    return value;

  }

}
