import React from 'react';

const Form = () => {
    return (
        <form>
            <label htmlFor="owner">Owner</label>
            <input type="text" name="owner" id="owner" />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
            />
            <input type="button" value="Add New Cat" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;
