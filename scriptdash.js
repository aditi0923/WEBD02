document.getElementById('applianceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('applianceName').value;
    const type = document.getElementById('applianceType').value;
    const applianceItems = document.getElementById('applianceItems');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${name} (${type})`;

    // Append the new item to the list
    applianceItems.appendChild(listItem);

    // Clear the input fields
    document.getElementById('applianceName').value = '';
    document.getElementById('applianceType').value = '';
});
