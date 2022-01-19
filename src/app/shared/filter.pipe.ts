import { visitValue } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterString: string,propName:string):any [] { //we are taking the value as array, taking the name as string and the propname is property name like title , name like that and having return type any
    const result:any =[];
    if(!value || filterString==='' || propName ===''){
      return value; //if we are having empty in three condition we are displaying the value
    }
    value.forEach((a:any) => { //if we are having sny value in the 3 conditions
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){ //it filter the value here
        //if we are getting more than one element value then we use include and a is the output value
        result.push(a);//we are pushing the result in a
      }
    });
    return result;
  }

}
  