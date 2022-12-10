const elForm = document.querySelector("#form");
const elForm2 = document.querySelector("#modal-form");
const elPosts = document.querySelector("#posts");
const modalImg = document.querySelector("#modal-img");
const elSearch = document.querySelector("#search");
const elCategory = document.querySelector("#category-search");
const elFilter = document.querySelector(".filter");

function renderPosts(array = elPosts, parentNode = elPosts) {
  parentNode.textContent = null;

  array.forEach(function (element) {
    const newDiv = document.createElement("div");

    const resultDate = element.body;

    newDiv.className = "card col-12 col-md-6 p-3 ";
    newDiv.style.height = "auto";

    const categories = element.category;
    const ul = document.createElement("ul");

    newDiv.innerHTML = `
                  
					<div class="card-body">
						<h5 class="card-title">${element.name}</h5>
						<p class="card-text">
							${element.email}
						</p>
						<span>${resultDate} </span>
					</div>
					<div className="row">
						<button style="width:"30%" class="btn btn-danger d-inline-block" data-id=${element.id} >Delete</button>

					</div>
                    `;
    newDiv.appendChild(ul);
    parentNode.appendChild(newDiv);
  });
}

function renderCategories(posts) {
  const categories = [];

  const ul = document.createElement("ul");
  ul.className = "d-flex justify-content-around bg-warning";
  elFilter.appendChild(ul);

  posts.forEach((post) => {
    posts.forEach((category) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
  });
}

function addPost(form) {
  const elTitle = form.name.value;
  const elSubtitle = form.email.value;
  const elImage = form.image.value;
  const elDate = form.date.value;

  const categories = [];
  form.category.forEach((element) => {
    if (element.checked) {
      categories.push(element.value);
    }
  });

  const newPost = {
    id: posts.length,
    title: elTitle,
    subtitle: elSubtitle,
    image: elImage,
    date: elDate,
    category: categories,
  };

  elPosts.push(newPost);

  renderPosts();
}

// Add post
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addPost(e.target);
});

// post delete
elPosts.addEventListener("click", (e) => {
  const element = e.target;

  if (element.matches(".btn-danger")) {
    const id = element.dataset.id;

    const filteredArray = posts.filter((element) => {
      if (element.id !== Number(id)) {
        return element;
      }
    });
    posts = filteredArray;

    renderPosts(posts);
  }

  if (element.matches(".btn-info")) {
    const id = element.dataset.id;

    const title = elForm2.modalTitle;
    const subTitle = elForm2.modalSubtitle;
    const date = elForm2.modalDate;
    const img = elForm2.modalImage;

    posts.forEach((element) => {
      if (element.id === Number(id)) {
        title.value = posts[id].name;
        subTitle.value = posts[id].email;
        date.value = posts[id].date;
        img.value = posts[id].image;
        modalImg.src = posts[id].image;

        editBtn.addEventListener("click", () => {
          posts[id].name = title.value;
          posts[id].email = subTitle.value;
          posts[id].image = img.value;
          posts[id].date = date.value;

          renderPosts();
        });
      }
    });

    renderPosts(posts);
  }
});

elSearch.addEventListener("input", () => {
  const value = elSearch.value;

  filteredArray = posts.filter((element) => {
    if (
      element.name.toLowerCase().match(value.toLowerCase()) ||
      element.email.toLowerCase().match(value.toLowerCase())
    ) {
      return element;
    }
  });
  renderPosts(filteredArray);
});

// post filter
elCategory.addEventListener("change", () => {
  const inputCategory = elCategory.value;

  if (inputCategory === "") {
    renderPosts(posts);
  } else {
    const filteredArray = [];
    posts.forEach((post) => {
      if (post.postId == inputCategory) {
        filteredArray.push(post);
      }
    });
    renderPosts(filteredArray);
  }
});

renderCategories(posts);
renderPosts(posts);
