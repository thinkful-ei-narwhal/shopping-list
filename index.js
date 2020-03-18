// your app must:
// enter items they need to purchase by entering
// text and hitting "Return" or clicking the "Add item" button

// check and uncheck items on the list by clicking the "Check" button

// permanently remove items from the list
'use strict';

function AddItem() {
  $('.container').on('submit', '#js-shopping-list-form', event => {
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

$(AddItem);