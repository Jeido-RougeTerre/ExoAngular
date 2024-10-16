import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanemoji',
  standalone: true
})
export class BooleanemojiPipe implements PipeTransform {

  transform(value: boolean, ): string {
    return value? "👍":"👎";
  }

}
