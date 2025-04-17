import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCheck',
  standalone: false
})
export class DateCheckPipe implements PipeTransform {

  transform(date: Date | undefined, lastWeek = 7): boolean {
    if(!date)
      return false;
    const dateDifferenz = Date.now() - date.getTime();

    const timeDifferenz = lastWeek * 1000 * 60 * 60 * 24;
    return  timeDifferenz < dateDifferenz;
  }

}
