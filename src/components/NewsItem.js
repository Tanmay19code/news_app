import React, { useState, useEffect } from "react";
import lightBookmarkImg from "../images/light-bookmark.svg";
import darkBookmarkImg from "../images/dark-bookmark.svg";
import lightBookmarkImgFilled from "../images/light-bookmark-fill.svg";
import darkBookmarkImgFilled from "../images/dark-bookmark-fill.svg";

import { useDispatch } from "react-redux";
import {
  getAllItems,
  createItem,
  deleteItem,
} from "../redux/actions/activityActions";
import store from "../redux/store";

const NewsItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    styleObj,
  } = props;

  let globalState = store.getState();
  let state;
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkedImg, setBookmarkedImg] = useState(
    props.darkMode ? lightBookmarkImgFilled : darkBookmarkImgFilled
  );
  const [unBookmarkedImg, setUnBookmarkedImg] = useState(
    props.darkMode ? lightBookmarkImg : darkBookmarkImg
  );
  const [items, setItems] = useState(null);
  const [effectVar, setEffectVar] = useState(false);

  useEffect(() => {
    setEffectVar(true);
    // setGlobalEffectVar(false);
    dispatch(getAllItems())
      .then((result) => {
        state = JSON.parse(localStorage.getItem("state"));
        // setItems()
        setEffectVar(false);
        setItems(globalState.item.fetchedItems.items[0].link);
        // console.log(globalState.item.fetchedItems.items[0]);

        // dispatch(setLoadingFalse());
      })
      .catch((error) => {
        setEffectVar(false);
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    if (items?.length) {
      for (let index = 0; index < items?.length; index++) {
        const element = items[index];
        if (element.url == newsUrl) {
          setIsBookmarked(true);
          break;
        }
      }
    }
  }, [effectVar, props.globalEffectVar]);

  const dispatch = useDispatch(null);

  const handleCreateItem = (news) => {
    dispatch(createItem(news))
      .then((result) => {})
      .catch((error) => {});
  };

  const handleDeleteItem = (linkId) => {
    dispatch(deleteItem(linkId))
      .then((result) => {})
      .catch((error) => {});
  };

  const handleBookMark = () => {
    if (isBookmarked) {
      handleDeleteItem(newsUrl);
    } else {
      let obj = {
        urlLink: newsUrl,
        imgLink: imageUrl,
        title: title,
        description: description,
        badge: source,
        author: author,
        date: date,
      };
      handleCreateItem(obj);
    }
  };

  // console.log(styleObj);
  return (
    <div className="my-3">
      <div
        className="card"
        style={{ backgroundColor: `${styleObj.cardHolder}` }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="ImageNotFound" />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: `${styleObj.cardTextHolder}` }}
          >
            {title.slice(0, 30) + "..."}
          </h5>
          <p
            className="card-text"
            style={{ color: `${styleObj.cardTextDesc}` }}
          >
            {description}
          </p>
          <p className="card-text">
            <small style={{ color: `${styleObj.authorTextColor}` }}>
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
          <img
            onClick={() => {
              handleBookMark();
            }}
            className="bookmark-img"
            src={isBookmarked ? bookmarkedImg : unBookmarkedImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
