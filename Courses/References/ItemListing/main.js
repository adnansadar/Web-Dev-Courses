var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);


function addItem(e) {
    e.preventDefault();
    console.log(e);
    // getting the value entered in the text box
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');//creating a li element
    li.className = 'list-group-item'; //giving it a classname same as other list items
    li.appendChild(document.createTextNode(newItem));//adding that item in the list
    // Creating delete button element
    var DeleteBtn = document.createElement('button');
    // Adding class to del button
    DeleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append Text Node
    DeleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(DeleteBtn);
    itemList.appendChild(li); //append the list item to the actual itemlist
}

function removeItem(e) {
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you sure?"))
        {
            var li = e.target.parentElement;//target's(button) parent element of button is li
            itemList.removeChild(li); // li is a child of ul(childlist)
        }
    }
}


function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get all items in the itemlist(returned in HTMLCollection form)
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item)
    {
         var itemName = item.firstChild.textContent;
         if(itemName.toLowerCase().indexOf(text)!= -1)//if != -1 then it matches
         {
            item.style.display = 'block'; //display the item if text at that index keeps on matching
         }
         else
         {
            item.style.display = 'none';
         }
    });

}

