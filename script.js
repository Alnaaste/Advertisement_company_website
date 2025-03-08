function showServiceDetails(title, description) {
    document.getElementById('service-list').classList.add('d-none');
    document.getElementById('service-details').classList.remove('d-none');
    document.getElementById('service-title').innerText = title;
    document.getElementById('service-description').innerText = description;
}

function backToServices() {
    document.getElementById('service-list').classList.remove('d-none');
    document.getElementById('service-details').classList.add('d-none');
}
