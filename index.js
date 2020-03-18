'use strict';

$(function () {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const food = $(event.currentTarget).find('input[name="shopping-list-entry"]').first().val();

    if (food !== '')  {
      const string = $(`<li>
      <span class="shopping-item">${food}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
      
      $('.shopping-list').append(string);
    }
  });



  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    event.preventDefault();
    $(event.currentTarget).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });



  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    event.preventDefault();
    $(event.currentTarget).parents('li').remove();
  });
});