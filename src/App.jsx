import { useState } from "react";

const MusicalInstrument = () => {
  const [instrument, setInstrument] = useState("");
  const onChangeHandler = (event) => {
    setInstrument(event.target.value);
  };
  return (
    <div>
      <label>Select a musical instrument: </label>
      <select onChange={onChangeHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {instrument}</p>
    </div>
  );
};

const SelectLanguage = () => {
  const [language, setLanguage] = useState("");
  const onChangeHandler = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <label>Select a Language: </label>
      <select onChange={onChangeHandler}>
        <option value="England">English</option>
        <option value="France">French</option>
        <option value="Spain">Spanish</option>
      </select>
      {language && <p>Origin : {language}</p>}
    </div>
  );
};

const SelectCarBrand = () => {
  const [carBrand, setCarBrand] = useState("");
  const onChangeHandler = (event) => {
    setCarBrand(event.target.value);
  };
  return (
    <div>
      <label>Select a Car Brand: </label>
      <select onChange={onChangeHandler}>
        <option value="Audi - German luxury automobile manufaturer">
          Audi
        </option>
        <option value="BMW - Bavarian Motor Works, a German multinational company">
          BMW
        </option>
        <option value="Tesla - American electric vehicle and clean enery company">
          Tesla
        </option>
      </select>
      <p>Details: {carBrand}</p>
    </div>
  );
};

const SelectContinent = () => {
  const [continent, setContinent] = useState("");
  const onChangeHandler = (event) => {
    setContinent(event.target.value);
  };
  return (
    <div>
      <label>Select a Continent: </label>
      <select onChange={onChangeHandler}>
        <option value="Africa - The second largest and second most populous continent">
          Africa
        </option>
        <option value="Asia - The largest continent by land area and population">
          Asia
        </option>
        <option value="Europe - the third most popular country">Europe</option>
      </select>
      <p>Details: {continent}</p>
    </div>
  );
};

const MovieGenre = () => {
  const [movieGenre, setMovieGenre] = useState('')
  const onChangeHandler = (event) => {
    setMovieGenre(event.target.value)
  }
  return (
    <div>
      <label>Select a Movie Genre: </label>
      <select onChange={onChangeHandler}>
        <option value='Action - Films with exciting and fast-paced sequence'>Action</option>
        <option value='Comedy - Films intended to make people laugh'>Comedy</option>
        <option value='Drama - Films with serious themes and emotion'>Drama</option>
      </select>
      <p>Description: {movieGenre}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <MusicalInstrument />
      <br />
      <SelectLanguage />
      <br />
      <SelectCarBrand />
      <br />
      <SelectContinent />
      <br/>
      <MovieGenre/>
    </main>
  );
}
