//  1 project fake về chức năng bình luận của trang web
//  sử dụng các kiến thức đã được học: promise, filter, map, template string, nội suy, DOM ....

/**  ý tưởng:
 * 1: lấy ra mảng comment bằng cách sử dụng promise
 * 2: sau khi lấy được mảng comment thì sẽ dùng map để lặp wa và trả về use_id có trong mảng đó
 * 3: từ user_id, sẽ dùng filter để lọc ra những id của mảng user trùng với user_id của mảng comment
 * 4: dùng DOM để hiển thị kết quả ra trình duyệt
 */

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];

const comments = [
  {
    id: 1,
    user_id: 1,
    desc: "comment của Nguyễn Văn A",
  },
  {
    id: 1,
    user_id: 2,
    desc: "comment của Nguyễn Văn B",
  },
];

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 2000);
  });
}

function getUsersByIds(userIds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = users.filter((user) => userIds.includes(user.id));
      resolve(result);
    }, 2000);
  });
}

getComments().then((comment) => {
  const userIds = comment.map((comment) => {
    return comment.user_id;
  });
  return getUsersByIds(userIds)
    .then((users) => {
      return {
        users,
        comment,
      };
    })
    .then((data) => {
      const list = document.querySelector("ul");

      let html = "";
      data.comment.forEach((comment) => {
        const user = users.find((user) => {
          return comment.user_id === user.id;
        });
        html += `<li>
            ${user.name}: ${comment.desc}
        </li>
        `;
      });

      list.innerHTML = html;
    });
});
