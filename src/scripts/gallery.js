export default () => {
  // Closure
  function Gallery(gallery) {
    // console.log(gallery);
    if (!gallery) {
      throw new Error("No Gallery found");
    }
    // Select our items
    const images = Array.from(gallery.querySelectorAll("img"));
    // console.log(images);
  }

  const gallery1 = Gallery(document.querySelector(".gallery1"));
  const gallery2 = Gallery(document.querySelector(".gallery2"));
};
