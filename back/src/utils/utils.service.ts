import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import populateFields from 'src/db/services/populateFields';
import DBService, { Types } from 'src/db/services/db.service';

@Injectable()
export class UtilsService {
  constructor(private readonly db: DBService) {}

  public checkSimple(item) {
    return item != undefined && item != null;
  }

  public check(field: string, element: object) {
    return (
      field in element &&
      element[field] !== undefined &&
      element[field] !== null
    );
  }

  public async populateAllEntirely(items, type: Types) {
    let result_items = items;

    for (let i = 0; i < result_items.length; i++) {
      result_items[i] = await this.populateEntirely(result_items[i], type);
    }

    return result_items;
  }

  public async populateEntirely(item, type: Types) {
    let result_item = item;

    for (const field of populateFields[type]) {
      if (this.check(field, result_item)) {
        result_item = await result_item.populate(field);
      }
    }

    return result_item;
  }

  public findCommonElement(array1, array2) {
    
      // Loop for array1
      for(let i = 0; i < array1.length; i++) {
          
          // Loop for array2
          for(let j = 0; j < array2.length; j++) {
              
              // Compare the element of each and
              // every element from both of the
              // arrays
              if(array1[i] === array2[j]) {
              
                  // Return if common element found
                  return true;
              }
          }
      }
      
      // Return if no common element exist
      return false;
  }

}
