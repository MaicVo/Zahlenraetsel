import {Customer} from '../customer';

export const CUSTOMER1 = new Customer("Firstname A", "Lastname A", "Steet A", "Zip A", " City A", true, "", new Date(2025, 4, 4));
export const CUSTOMER2 = new Customer("Firstname B", "Lastname B", "Steet B", "Zip B", " City B", false, "homer.jpg", new Date(2025, 4, 9));
export const CUSTOMER3 = new Customer("Firstname C", "Lastname C", "Steet C", "Zip C", " City C", false, "marge.jpg", new Date(2025, 3, 4));
export const CUSTOMER4 = new Customer("Firstname D", "Lastname D", "Steet D", "Zip D", " City D", false, "homer.jpg", new Date(2025, 4, 2));
export const CUSTOMER5 = new Customer("Firstname E", "Lastname E", "Steet E", "Zip E", " City E", true, "marge.jpg", new Date(2025, 2, 9));


export let CUSTOMER: Customer[] = [CUSTOMER1,CUSTOMER2,CUSTOMER3,CUSTOMER4,CUSTOMER5];

