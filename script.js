//Course Constructor
class Course {
    constructor(title,instructor,image) {
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }

}


//UI Constructor
class UI {
    addCourseToList(course) {
        const list = document.querySelector("#course-list");
    
        let html = `
        <tr>
            <td><img src="${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete ">Delete</a></td>
        </tr>`;
    
        list.innerHTML+=html;
    }
    clearControls() {
        const title = document.getElementById('title').value="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
    }

    deleteCourse(element) {
        if (element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
        }
    }

    showAlert(message,alertClass) { 
        let html = `
                <div class="alert alert-${alertClass}">${message}</div>
        `;
    
        const row = document.querySelector(".row");
        row.insertAdjacentHTML("beforebegin",html);
    
        setTimeout(()=>{
            document.querySelector(".alert").remove();
        },3000);
    }
}

document.querySelector("#new-course").addEventListener("submit",function(e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const instructor = document.querySelector("#instructor").value;
    const image = document.querySelector("#image").value;


    //create course object
    const course = new Course(title,instructor,image);

    //create UI
    const ui = new UI();

    if (title == "" || instructor == "" ||image == "") {
        ui.showAlert("please complate the form.","warning");
    }
    else {
        
    // add course to list
    ui.addCourseToList(course);
    ui.showAlert("the course has been added.","success");
    //clear controls
    ui.clearControls();
    }
});

document.querySelector("#course-list").addEventListener("click", function(e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert("the course has been deleted.","danger");
    e.preventDefault();
})