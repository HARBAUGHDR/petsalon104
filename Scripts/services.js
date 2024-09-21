$(document).ready(function() {
    // Load services from localStorage when the page loads
    if (localStorage.getItem('services')) {
        const storedServices = JSON.parse(localStorage.getItem('services'));
        storedServices.forEach(service => {
            appendServiceToList(service);
        });
    }

    // Handle form submission
    $('#serviceForm').submit(function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Validate the form
        if (!this.checkValidity()) {
            event.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // Get form values
        const serviceName = $('#serviceName').val();
        const serviceDescription = $('#serviceDescription').val();
        const servicePrice = $('#servicePrice').val();

        // Create a service object
        const newService = {
            name: serviceName,
            description: serviceDescription,
            price: servicePrice
        };

        // Append the new service to the services list
        appendServiceToList(newService);

        // Save to localStorage
        saveServiceToLocalStorage(newService);

        // Clear the form fields and validation
        $('#serviceForm')[0].reset();
        $('#serviceForm').removeClass('was-validated');
    });

    // Function to append service to the DOM
    function appendServiceToList(service) {
        const newServiceItem = `
            <li class="list-group-item">
                <strong>${service.name}</strong> - $${service.price}
                <p>${service.description}</p>
            </li>
        `;
        $('#servicesList').append(newServiceItem);
    }

    // Function to save service to localStorage
    function saveServiceToLocalStorage(service) {
        let services = [];
        if (localStorage.getItem('services')) {
            services = JSON.parse(localStorage.getItem('services'));
        }
        services.push(service);
        localStorage.setItem('services', JSON.stringify(services));
    }
});