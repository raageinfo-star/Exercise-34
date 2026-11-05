
function addItem() {

    // Create new list item
    let li = document.createElement("li");

    // Add text
    li.textContent = "New Item";

    // Add item to list
    document.querySelector("#myList").appendChild(li);

    // Clear message
    document.querySelector("#message").textContent = "";

}

function removeItem() {

    // Select list
    let list = document.querySelector("#myList");

    // Check if list has items
    if (list.lastElementChild) {

        // Remove last item
        list.removeChild(list.lastElementChild);

        // Check if list is empty
        if (list.children.length === 0) {

            document.querySelector("#message").textContent =
                "List is empty! No items to remove.";

        }

    } else {

        // Show message if list is already empty
        document.querySelector("#message").textContent =
            "List is already empty!";

    }

}
