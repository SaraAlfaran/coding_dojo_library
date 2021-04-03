import React from 'react';
import style from "../css/BookPageStyle.module.css";


export default props => {
    const {onSubmitProp, handleChange} = props;

    return (
      <div>
        <div className={style.form_signin}>
          <form onSubmit={onSubmitProp}>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Name of the book</label>
              <input type="text" className={style.form_control} id="exampleInputName" name="name" onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <label for="exampleInputAuthor" class="form-label">Author</label>
              <input type="text" className={style.form_control} id="exampleInputAuthor" name="author" onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <label for="exampleInputDescription" class="form-label">Description</label>
              <input type="text" className={style.form_control} id="exampleInputDescription" name="description" onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <label for="exampleInputImageUrl" class="form-label">image Url</label>
              <input type="int" className={style.form_control} id="exampleInputImageUrl" name="imgUrl" onChange={handleChange}/>
            </div>
            <div>
              <label for="catagory">Choose a Catagory:</label>
                <select name="catagory" id="catagory" onChange={handleChange}>
                <option value="catagory">Choose a catagory...</option>
                  <option value="Action and Adventure">Action and Adventure</option>
                  <option value="Classics">Classics</option>
                  <option value="Comic Book">Comic Book</option>
                  <option value="Detective and Mystery">Detective and Mystery</option>
                  <option value="Manga">Manga</option>
                  <option value="Historical">Historical</option>
                  <option value="Music">Music</option>
                  <option value="Learning">Learning</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Create a Book</button>
          </form>
        </div>
      </div>
    )
}
