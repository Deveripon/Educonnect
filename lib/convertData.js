export const replaceMongoIdInArray = (array) => {
<<<<<<< HEAD
    const mappedArray = array
        .map((item) => {
            return {
                id: item?._id.toString(),
                ...item,
            };
        })
        .map(({ _id, ...rest }) => rest);

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj?._id.toString() };
    return updatedObj;
};
=======
    const mappedArray = array.map(item => {
      return {
        id: item._id.toString(),
        ...item
      }
    }).map(({_id, ...rest}) => rest);

    return mappedArray;
  }

  export const replaceMongoIdInObject = (obj) => {
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
