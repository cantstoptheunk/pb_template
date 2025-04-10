import PocketBase from 'pocketbase';

const pocketBaseUrl = import.meta.env.VITE_POCKETBASE_URL;

// Initialize the PocketBase client
const pb = new PocketBase(pocketBaseUrl); // Replace with your PocketBase instance URL

export default pb


// // Example: Authenticate (optional)
// async function authenticate() {
//     try {
//         const authData = await pb.auth.login('your-email@example.com', 'your-password');
//         console.log('Authenticated!', authData);
//     } catch (error) {
//         console.error('Authentication failed', error);
//     }
// }

// // Example: Fetch all records from a collection
// async function fetchRecords(collectionName: string) {
//     try {
//         const records = await pb.collection(collectionName).getList(1, 10); // Get the first 10 records
//         console.log(records);
//     } catch (error) {
//         console.error('Error fetching records', error);
//     }
// }

// // Export the PocketBase instance and functions to use elsewhere
// export { pb, authenticate, fetchRecords };
