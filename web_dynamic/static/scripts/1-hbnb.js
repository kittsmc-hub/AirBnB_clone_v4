$(function () {
  const amenities = [];
  $('input[type="checkbox"]').change(function () {
    const id = $(this).attr('data-id');
    const name = $(this).attr('data-name');
    if (this.checked) {
      amenities.push({ name: name, id: id });
    } else {
      const index = amenities.findIndex(function (d) {
        return d.id === id;
      });
      if (index !== -1) {
        amenities.splice(index, 1);
      }
    }
    const amenityNames = amenities
      .map(function (d) {
        return d.name.replace(':', '');
      })
      .join(', ');
    $('.amenities h4').text(amenityNames);
  });
});
