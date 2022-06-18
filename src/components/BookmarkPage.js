import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import BookmarkItem from "./BookmarkItem";

import notFoundImg from "../images/taskNotFoundImg3.png";

import { getAllItems } from "../redux/actions/activityActions";

import { useDispatch } from "react-redux";
import store from "../redux/store";

const BookmarkPage = (props) => {
  let globalState = store.getState();

  let state;
  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState(null);

  const [effectVar, setEffectVar] = useState(false);

  const dispatch = useDispatch(null);

  useEffect(() => {
    setEffectVar(false);
    // setGlobalEffectVar(false);
    dispatch(getAllItems())
      .then((result) => {
        state = JSON.parse(localStorage.getItem("state"));
        // setItems()

        setItems(globalState.item.fetchedItems.items[0].link);
        console.log(globalState.item.fetchedItems.items[0]);

        // dispatch(setLoadingFalse());
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [effectVar, props.globalEffectVar]);

  return (
    <>
      {/* <div className="container my-3"> */}
      <h1
        className="text-center "
        style={{
          marginBottom: "30px",
          marginTop: "90px",
        }}
      ></h1>
      {/* {loading && <Spinner />} */}
      <div className="container">
        <div className="row">
          {/* <div className="bookmarks-holder"> */}
          {items && items.length > 0 ? (
            <>
              {items.map((element) => {
                return (
                  <div className="col-md-4">
                    <BookmarkItem
                      darkMode={props.darkMode}
                      styleObj={props.styleObj}
                      title={element?.title ? element.title : ""}
                      description={
                        element?.description
                          ? element.description.slice(0, 80) + "..."
                          : ""
                      }
                      imageUrl={
                        element?.img
                          ? element.img
                          : "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"
                      }
                      newsUrl={element.url}
                      author={element?.author ? element.author : "anonymous"}
                      date={element?.date}
                      source={element?.badge}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <img
                className="taskNotFoundImg"
                src={notFoundImg}
                alt="not found"
              />
            </>
          )}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

BookmarkPage.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default BookmarkPage;
