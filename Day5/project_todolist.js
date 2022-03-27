//  1 project todo list nhỏ tổng hợp tất cả các kiến thức đã được học: closure, function, method map, IIFE, arrow function, keyword this

const app = (() => {
  const demo = document.querySelector(".demo");
  const ul = document.querySelector("ul");
  const button = document.querySelector(".create-course");
  const input = document.querySelector("input");
  const courses = [];

  return {
    createCourse(data) {
      courses.push(data);
    },
    deleteCourse(id) {
      courses.splice(id, 1);
    },
    render() {
      const html = courses.map((course, index) => {
        return `
            <div class="flex gap-[10px] mt-[10px]" data-index= ${index}>
                <li>${course}</li>
                <button class="delete-course border bg-[#3a86ff] w-[90px] rounded-[20px]" >Xóa</button>
            </div>
        `;
      });

      ul.innerHTML = html.join("");
    },

    handleEvent() {
      button.onclick = () => {
        const getData = input.value;

        this.createCourse(getData);
        this.render();
        input.focus();
        input.value = "";
      };

      ul.onclick = (e) => {
        const text = e.target.closest(".delete-course");
        if (text) {
          const parent = text.parentElement;
          const dataIndex = parent.dataset.index;
          this.deleteCourse(dataIndex);
          this.render();
        }
      };
    },

    start() {
      this.render();
      this.handleEvent();
    },
  };
})();

app.start();
