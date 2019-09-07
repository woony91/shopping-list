//Allow users to add, check, uncheck, and remove items from a shopping list
//Create arguments to wrap inside one main function to run code
/* --------------------------------------------- */

//check and uncheck items on the list by clicking the "check" button 
function itemCheckClicked(){
    $('.shopping-item-toggle').click(function() {
        event.stopPropagation();
        $(this).closest('li').children('span').toggleClass('shopping-item__checked shopping-item');
    });
}

//Permanently remove items from the list
function itemDelete() {
    $('.shopping-item-delete').click(function(){
        $(this).closest('li').remove();
        event.stopPropagation();
    })
}

//Enter items they need to purchase by entering text and hitting "return" or clicking the "add item" button
//Pressing on button needs to push text and create a new li inside the ul class shopping-list
function addToList(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const addedItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');

        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${addedItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        );
    });
}

function handleShoppingListActions() {
    itemDelete();
    itemCheckClicked();
    addToList();
}

$(handleShoppingListActions)
