class Blog {
    constructor(titulo, contenido) {
        this._titulo = titulo;
        this._contenido = contenido;
    }

    static blogList = [];

    static agregarBlog(blog) {
        Blog.blogList.push(blog);
    }
}

const guardarBlogBtn = document.getElementById("guardarEntrada");
const cerrarModalBtn = document.getElementById("cerrarModal");

guardarBlogBtn.addEventListener("click", (event) => {
    // event.preventDefault();

    let validTitle = false;
    let validContent = false;
    let title = document.getElementById("titulo");
    let content = document.getElementById("contenido");

    if (title.value === "") {
        title.classList.add("is-invalid");
        validTitle = false;
    } else {
        title.classList.remove("is-invalid");
        validTitle = true;
    }

    if (content.value === "") {
        content.classList.add("is-invalid");
        validContent = false;
    } else {
        content.classList.remove("is-invalid");
        validContent = true;
    }

    if (validTitle && validContent) {
        let blog = new Blog(title.value, content.value);
        Blog.agregarBlog(blog);
        displayBlogs();

        title.value = "";
        content.value = "";

        // Cerrar el modal
        cerrarModalBtn.click();
    }


});

function displayBlogs() {

    blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";

    Blog.blogList.forEach(blog => {
        var card = `
        
            <div class="card mb-3">
                    <img src="./assets/img/logo.png" class="card-img-top img-thumbnail custom-thumbnail"
                        alt="Imagen de la entrada 1">
                    <div class="card-body">
                        <h5 class="card-title">${blog._titulo}</h5>
                        <p class="card-text">${blog._contenido}</p>
                        <!-- <a href="#" class="btn btn-primary">Leer más</a> -->
                    </div>
            </div>
        
            `;
        blogContainer.innerHTML += card;


    });
}