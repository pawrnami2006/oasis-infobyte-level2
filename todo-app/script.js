const addBtn = document.getElementById("addBtn");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");

const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

addBtn.addEventListener("click", () => {

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === "" || description === "") {
        alert("Please fill all fields.");
        return;
    }

    const currentDate = new Date();

    const dateTime =
        currentDate.toLocaleDateString() +
        " • " +
        currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    createTask(title, description, dateTime);

    titleInput.value = "";
    descriptionInput.value = "";
});


function createTask(title, description, dateTime) {

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
        <h3>${title}</h3>

        <p>${description}</p>

        <div class="time">
            Added: ${dateTime}
        </div>

        <div class="buttons">

            <button class="complete-btn">
             Complete
            </button>

            <button class="edit-btn">
            Edit
            </button>

            <button class="delete-btn">
             Delete
            </button>

        </div>
    `;
    pendingTasks.appendChild(taskCard);

    const completeBtn =
        taskCard.querySelector(".complete-btn");

    const deleteBtn =
        taskCard.querySelector(".delete-btn");
    
    const editBtn =
        taskCard.querySelector(".edit-btn");


    completeBtn.addEventListener("click", () => {

        completeBtn.remove();

        const completedTime =
            document.createElement("div");

        completedTime.classList.add("time");

        completedTime.innerHTML =
            "Completed: " +
            new Date().toLocaleDateString() +
            " • " +
            new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });

        taskCard.appendChild(completedTime);

        completedTasks.appendChild(taskCard);

    });


    deleteBtn.addEventListener("click", () => {

        taskCard.remove();

    });
    editBtn.addEventListener("click", () => {

    const newTitle = prompt(
        "Edit Task Title:",
        taskCard.querySelector("h3").innerText
    );

    if(newTitle === null) return;

    const newDescription = prompt(
        "Edit Task Description:",
        taskCard.querySelector("p").innerText
    );

    if(newDescription === null) return;

    taskCard.querySelector("h3").innerText = newTitle;

    taskCard.querySelector("p").innerText = newDescription;

});
}