function openModal(action) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modal.style.display = "block";

    switch (action) {
        case 'addStudent':
            modalBody.innerHTML = `<h3>Add New Student</h3><form><input type="text" placeholder="Name"/><input type="number" placeholder="CGPA"/><button>Submit</button></form>`;
            break;
        case 'verifyCertificates':
            modalBody.innerHTML = `<h3>Verify Certificates</h3><p>Verification in progress...</p>`;
            break;
        default:
            modalBody.innerHTML = `<p>Invalid Action</p>`;
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
