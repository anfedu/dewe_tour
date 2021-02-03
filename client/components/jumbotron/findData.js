export function findData(input, arr) {
  try {
    return arr.filter((user) => {
      const regex = new RegExp(input, "gi");
      if (!isNaN(parseInt(input)) || null) {
        var i = user.id.toString();
        console.log(i.match(input));
      } else {
        if (user.name.match(regex) != null && input.length > 1) {
          return user;
        }
      }
    });
  } catch (e) {
    return false;
  }
}
