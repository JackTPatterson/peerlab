var firebaseConfig = {
    apiKey: "AIzaSyD-yYudK3HqbynrrXniBmKfNDNRWys-hdM",
    authDomain: "peerlab-f8dc7.firebaseapp.com",
    projectId: "peerlab-f8dc7",
    storageBucket: "peerlab-f8dc7.appspot.com",
    messagingSenderId: "164499542099",
    appId: "1:164499542099:web:d26f0a24e0e2ba952876a6",
    measurementId: "G-F1XTBLXFVP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


function addData() {
    sendStaffEmail();
    
    db.collection("users").add({
            name: $('#name-inp').val(),
            email: $('#email-inp').val(),
            message: $('#message-inp').val()

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}



// $('document').ready(function () {
//     db.collection('users').get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
            
//             $('#table-stuff').append(
//                 `
//         <tr>
//             <td class="px-6 py-4 whitespace-nowrap">
//                 <div class="text-sm font-medium text-gray-900">${doc.data().name}</div>
//             </td>
//             <td class="px-6 py-4 whitespace-nowrap">
//                 <div class="text-sm text-gray-900">${doc.data().email}</div>
//             </td>
//             <td class="px-6 py-4 whitespace-nowrap">
//                 <div class="text-sm text-gray-900">${doc.data().message}</div>
//             </td>
//             <td class="">
//                 <button onclick='${deleteData(doc.id)}'
//                     class="transition  px-4 border-red-500 p-2 rounded-lg text-black hover:text-white hover:bg-red-500">Delete</button>
//             </td>
//         </tr>
//             `

//             )
//         })
//     })

// })

// function deleteData(doc){   
//     db.collection("users").doc(doc).delete()
    
// }