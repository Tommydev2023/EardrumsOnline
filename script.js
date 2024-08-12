    // Attach click event to product images
    document.querySelectorAll('.card-img-top').forEach(function (image) {
        image.addEventListener('click', function () {
          // Get product details
          var title = this.nextElementSibling.querySelector('.card-title').textContent;
          var imageSrc = this.src;
          var price = this.nextElementSibling.querySelector('.card-text').textContent;
  
          // Set modal content
          document.getElementById('productModalLabel').textContent = title;
          document.getElementById('modalImage').src = imageSrc;
          document.getElementById('modalPrice').textContent = price;
  
          // Show the modal
          var modal = new bootstrap.Modal(document.getElementById('productModal'));
          modal.show();
        });
      });