// your app must:
// enter items they need to purchase by entering
// text and hitting "Return" or clicking the "Add item" button

// check and uncheck items on the list by clicking the "Check" button

// permanently remove items from the list
'use strict';

function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const food = $(event.currentTarget).find('input[name="shopping-list-entry"]').first().val();

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
  });
}

function checkUncheck() {
  $('.shopping-item-controls').on('click', '.shopping-item-toggle', event => {
    event.preventDefault();
    $(event.currentTarget).closest('span').toggleClass('shopping-item__checked');
  });
}

$(addItem);
$(checkUncheck);