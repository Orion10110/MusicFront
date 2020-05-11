const getFormData = (file, id) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('id', id);
    return formData;
};

export { getFormData };
