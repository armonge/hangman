import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import * as _ from 'lodash';

export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    const phrases = [
      '3dhubs',
      'marvin',
      'print',
      'filament',
      'order',
      'layer'
    ];

    return { phrase: _.sample(phrases) };
  }
}
