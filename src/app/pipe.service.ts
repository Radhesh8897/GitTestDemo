import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'userfilter'
})
export class pipefilter implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.login.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }

}