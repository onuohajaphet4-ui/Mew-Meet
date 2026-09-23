export const getSavedCats = () => {
  return JSON.parse(localStorage.getItem("savedCats")) || [];
};

export const isCatSaved = (catId) => {
  const savedCats = getSavedCats();

  return savedCats.some((cat) => cat.id === catId);
};

export const toggleSavedCat = (cat) => {
  const savedCats = getSavedCats();

  const alreadySaved = savedCats.some(
    (savedCat) => savedCat.id === cat.id
  );

  let updatedCats;

  if (alreadySaved) {
    updatedCats = savedCats.filter(
      (savedCat) => savedCat.id !== cat.id
    );
  } else {
    updatedCats = [...savedCats, cat];
  }

  localStorage.setItem(
    "savedCats",
    JSON.stringify(updatedCats)
  );

  window.dispatchEvent(new Event("savedCatsUpdated"));

  return !alreadySaved;
};