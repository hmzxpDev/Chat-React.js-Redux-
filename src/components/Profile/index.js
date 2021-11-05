
import { Checkbox } from "@material-ui/core";
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from "@material-ui/icons";


import { Link } from "react-router-dom"
import { changeLike, changeFollow } from "../../store/Profile/actions.js"
import { useSelector, useDispatch } from 'react-redux';
// import { addNewMessage } from "../../store/Chat/Messages/actions.js";
// стилизация спана
const span = {
    color: 'red',
    fontSize: 10,
    marginLeft: 10,
}

export const Profile = () => {
    const { like, follow } = useSelector((state) => state.Profile);
    const dispatch = useDispatch();

    const setLike = () => {
        dispatch(changeLike)
    };

    const setFollow = () => {
        dispatch(changeFollow)
    };

    return (
        <div><Link to="/">back</Link>
            <h1>Profile
                {follow && <span style={span}>Follow</span>} {like && <span style={span}>Like</span>}
                <div className="checkboxs">
                    <Checkbox checked={like} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="secondary" onClick={setLike} />
                    <Checkbox checked={follow} icon={<BookmarkBorder />} checkedIcon={<Bookmark />} color="primary" onClick={setFollow} />
                </div>
            </h1 >
        </div>
    )
}