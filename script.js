document.querySelector('.buy-btn').addEventListener('click', () => {
    console.log('Buy Now button clicked');
});

function searchPhone() {
    const searchInput = document.getElementById('search-input').value;
    alert(Searching for: ${searchInput});
}

function showDetails(model) {
    alert(Details of ${model});
}

document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('More details coming soon!');
    });
});