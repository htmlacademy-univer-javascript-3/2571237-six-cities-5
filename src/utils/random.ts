import {random} from 'faker';

export function getRandomItem<T>(items: T[]){
  return random.arrayElement(items);
}
