
import { Checkbox } from "@material-ui/core";
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from "@material-ui/icons";

import { changeLike, changeFollow } from "../../store/Profile/actions.js"
import { useSelector, useDispatch } from 'react-redux';
// стилизация спана
const span = {
    color: 'red',
    fontSize: 10,
    marginLeft: 10,
}

export const Profile = () => {

    const { like, follow } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setLike = () => {
        dispatch(changeLike)
    }
    const setFollow = () => {
        dispatch(changeFollow)
    }

    return (
        <h1>Profile
            {/* отрисуется в зависимости от подписки и лайка, отличный способ проверить работу стора */}
            {follow && <span style={span}>Follow</span>} {like && <span style={span}>Like</span>}
            <div className="checkboxs">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="secondary" onClick={setLike} />
                <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} color="primary" onClick={setFollow} />
            </div>

        </h1 >
    )
}