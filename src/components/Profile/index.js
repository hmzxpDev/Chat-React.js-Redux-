// material ui
import { Checkbox } from "@material-ui/core";
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from "@material-ui/icons";
// router
import { Link } from "react-router-dom"
// redux
import { changeLike, changeFollow } from "../../store/Profile/actions.js"
import { useSelector, useDispatch } from 'react-redux';
// стилизация span
import { span } from './style.js'

export const Profile = () => {
    // redux
    const { like, follow } = useSelector((state) => state.Profile);
    const dispatch = useDispatch();

    // функция ставит лайк
    const setLike = () => {
        dispatch(changeLike)
    };

    // функция фоловит
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