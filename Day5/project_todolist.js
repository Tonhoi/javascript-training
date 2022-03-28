//  1 project todo list nhỏ tổng hợp tất cả các kiến thức đã được học: closure, function, method map, IIFE, arrow function, keyword this

const app = (() => {
  const demo = document.querySelector(".demo");
  const ul = document.querySelector("ul");
  const button = document.querySelector(".create-course");
  const input = document.querySelector("input");
  const courses = [];
  let isUpdate = true;

  return {
    createCourse(data) {
      courses.push(data);
    },

    updateCourse(data, id) {
      courses[id] = data;
    },
    deleteCourse(id) {
      courses.splice(id, 1);
    },
    render() {
      const html = courses.map((course, index) => {
        return `
            <div class="flex gap-[10px] mt-[10px]" data-index= ${index}>
                <li>${course}</li>
                <button class="update-course border bg-[#c1121f] w-[90px] rounded-[20px] text-white">Chỉnh xửa</button>
                <button class="delete-course border bg-[#3a86ff] w-[90px] rounded-[20px] text-white">Xóa</button>
            </div>
        `;
      });

      ul.innerHTML = html.join("");
    },

    handleEvent() {
      button.onclick = (e) => {
        this.handleAddCourse(e);
      };

      ul.onclick = (e) => {
        this.handleDeleteCourse(e);
        this.handleUpdateCourse(e);
      };
    },

    handleUpdateCourse(e) {
      isUpdate = false;

      const buttonUpdate = e.target.closest(".update-course");
      if (buttonUpdate) {
        const parent = buttonUpdate.parentElement;
        const dataIndex = parent.dataset.index;

        input.value = courses[dataIndex];
        button.textContent = "update Course";

        button.onclick = (e) => {
          if (isUpdate === false) {
            isUpdate = true;
            const parent = buttonUpdate.parentElement;
            const dataIndex = parent.dataset.index;
            button.textContent = "add Course";
            const newValue = input.value;
            this.updateCourse(newValue, dataIndex);
            input.value = "";
            this.render();
          } else {
            this.handleAddCourse();
          }
        };
      }
    },

    handleAddCourse() {
      const getData = input.value;
      this.createCourse(getData);
      input.focus();
      input.value = "";
      this.render();
    },

    handleDeleteCourse(e) {
      const buttonDelete = e.target.closest(".delete-course");
      if (buttonDelete) {
        const parent = buttonDelete.parentElement;
        const dataIndex = parent.dataset.index;
        this.deleteCourse(dataIndex);
        this.render();
      }
    },
    start() {
      this.render();
      this.handleEvent();
    },
  };
})();

app.start();
