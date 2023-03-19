export const filterList = (searchInput, searchList) => {
  let finalList = searchList.filter((e) =>
    e?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return finalList;
};
