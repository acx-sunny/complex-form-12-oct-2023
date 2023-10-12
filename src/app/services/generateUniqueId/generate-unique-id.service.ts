import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerateUniqueIdService {
  generateUniqueID(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const uniqueID = `${year}${month}${day}-${hours}${minutes}${seconds}`;
    return uniqueID;
  }
}
