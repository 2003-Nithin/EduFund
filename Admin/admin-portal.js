// Handle Modals
function openModal(action) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modal.style.display = "block";

    switch (action) {
        case 'addUser':
            modalBody.innerHTML = `<h3>Add New User</h3><form><input type="text" placeholder="Name"/><input type="email" placeholder="Email"/><button>Submit</button></form>`;
            break;
        case 'sendNotification':
            modalBody.innerHTML = `<h3>Send Notification</h3><textarea placeholder="Message"></textarea><button>Send</button>`;
            break;
        case 'updateContent':
            modalBody.innerHTML = `<h3>Update Content</h3><textarea placeholder="New content"></textarea><button>Update</button>`;
            break;
        case 'viewDocs':
            modalBody.innerHTML = `<h3>View Documents</h3><p>List of documents...</p>`;
            break;
        default:
            modalBody.innerHTML = `<p>Invalid Action</p>`;
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
