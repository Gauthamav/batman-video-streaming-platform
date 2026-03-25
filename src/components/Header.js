import { useDispatch, useSelector } from 'react-redux';
import { LOGO_URL } from '../utils/constant';
import { toggleMenu } from '../utils/navbarSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addCache } from '../utils/searchSuggestionSlice';
import { suggestionClose, suggestionOpen } from '../utils/searchRecommendationSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();

  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!searchText) return;
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestion(searchCache[searchText][0]);
      } else {
        getSearchSuggestion(searchText);
      }
    }, 200);

    //  here when we search i after 200sec it call fetch function  before 200sec is there any change in variable it will clear that timer and restart it

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const data = await fetch(`/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(searchText)}`);
    const response = await data?.json();

    const suggestion = response[1];

    setSearchSuggestion(suggestion);

    dispatch(
      addCache({
        [searchText]: [suggestion], // searchtext should be in the array
      }),
    );
  };

  const handleSearch = () => {
    navigate(`/results?search_query=${searchText}`);
  };

  const handleFocus = () => {
    dispatch(suggestionOpen());
  };
  const handleBlur = () => {
    dispatch(suggestionClose());
  };

  return (
    <div className="bg-black fixed gap-[20px] top-0 left-0 w-full z-50 flex h-28 items-center justify-between shadow-xl  ">
      <div className="ml-6 flex lg:gap-5">
        <button className="bg-black cursor-pointer" onClick={toggleMenuHandler}>
          <div className=" w-full">
            <img
              className="max-w-5 object-cover h-8 bg-black"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEUAAAD///+Tk5Pp6em9vb1OTk59fX3x8fGCgoK6urqsrKz8/Pza2tpbW1tXV1fNzc1DQ0NISEg1PRi4AAABKElEQVR4nO3dSW7DMAwFUA9xJme8/2XbLrqWURlhRb13An7YEWlAYIYBAAAAAAAAAAAAAIB/736eWnS+b8x3nMdWzcctAS/RZVa5lANeo2usdC0FXKIrrLYUEh6iC6x2KCQ8RRdY7VRIGF3fDrpPmP8tzX/S5O8W+Tt+B1NbB5P3t0ejX0+PjfkAAAAAAAAAAD7o+Fyjr438yfrcdtnk1e51mnGcX+WAS5vP79f6LiZs+Qn+mEsBp+gKq02FhLfoAqvdCgmj69uBhO3r/neY/yzN3w+Hd/qZJv9cOuT/tgAAAAAAAAAA+KjsO/fS701Mv/sy/f7S/Dto8+8Rzr8LOrq+HXSfMP9bmv+kyd8t8nf8Dqa2DibvIf//PQEAAAAAAAAAAAAAEOgLkyQpOro++/0AAAAASUVORK5CYII="
              alt="navbar"></img>
          </div>
        </button>
        <div className="lg:max-w-28 max-w-20 ">
          <Link to={'/'}>
            <img src={LOGO_URL} className="w-full h-24 bg-black cursor-pointer" alt="Logo"></img>
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <input
          onFocus={handleFocus}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          type="text"
          className="lg:w-[30rem] w-full max-w-full h-10 bg-slate-800 text-yellow-50   pl-4 placeholder-gray-500 placeholder-opacity-75  focus:border outline-none  border-blue-500 rounded-l-full  "
          placeholder="Search"></input>

        <div className="fixed top-[5rem] bg-white   ml-2 w-[28rem] rounded-md">
          <ul className="">
            {searchText &&
              searchSuggestion?.map((suggestion, index) => (
                <Link to={'/results?search_query=' + suggestion} key={index}>
                  <li onClick={handleBlur} className="ml-5 pl-3 mt-2 mb-2 py-2 cursor-pointer hover:bg-gray-200">
                    {suggestion}
                  </li>
                </Link>
              ))}
          </ul>
        </div>

        <button className=" h-8 w-12  pr-1  mb-1  " onClick={handleSearch}>
          <img
            className="object-cover w-11 h-10 rounded-r-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvTfkGOOotO6G-G57dfqQ4FDk5Ejp1OYwHg&s"
            alt="Search icon"></img>
        </button>
      </div>

      <div className="mr-5 flex ">
        <button>
          <img
            className="w-10 h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vK39mvab0UiMEU0L82eB0gaPb3cUFfMi_A&s"
            alt="user-icon"></img>
        </button>
      </div>
    </div>
  );
};
export default Header;
