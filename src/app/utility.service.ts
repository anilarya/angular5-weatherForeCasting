import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    constructor() { }

    findInObjectsArrayFromKey( objects, keyName, value, ignoreCase ) {
			if( ignoreCase ) {
				return objects.find( item => {
					return item[ keyName ].toLowerCase() == value.toLowerCase();
				});	
			}
			return objects.find( item =>{
				return item[ keyName ] == value;
			});
		};

	extractKeysFromObjectsList( objects , keyName ) {
		return objects.map( item => {
			return item[ keyName ];
		});
	};


	objectArrayIndexOf( objects, key, value ) {
		return this.extractKeysFromObjectsList( objects, key ).indexOf( value );
	};

	objectArrayFindFromKey( objects, key, value ) {
		let  index = this.extractKeysFromObjectsList( objects, key ).indexOf( value );
		if( index === -1 ) {
			return;
		}
		return objects[ index ];
	};

	filterObjectsFromKeys( objects, keys, keyName ) {
			return objects.filter( item => {
				return keys.indexOf( item[ keyName ]) !== -1;
			});
		};

}
