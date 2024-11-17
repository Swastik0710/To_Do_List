const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);

        li.style.animation = "fadeIn 0.5s ease";

        input.value = "";

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.style.animation = "fadeOut 0.5s ease";
            setTimeout(() => li.remove(), 500);
        });
    }
});

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
