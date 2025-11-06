import React from "react";
import { Cards } from "../Cards";
import * as classes from "./CardsList.module.css";

export const CardsList = () => {
  return (
    <div className={classes.cardsList}>
      <Cards
        className={classes.card}
        image="image-14-4.png"
        postImage="post-image-5.png"
        postTextClassName={classes.postText}
        postTitleClassName={classes.postTitle}
      />
      <Cards
        className={classes.card}
        image="image-14-2.png"
        postImage="post-image-3.png"
        postTextClassName={classes.postText}
        postTitleClassName={classes.postTitle}
        publishDateClassName={classes.textPrimary}
      />
      <Cards
        className={classes.card}
        image="image-14-3.png"
        postImage="post-image-4.png"
        postTextClassName={classes.postText}
        postTitleClassName={classes.postTitle}
        publishDateClassName={classes.textPrimary}
      />
      <Cards
        className={classes.card}
        image="image.png"
        postImage="post-image-2.png"
        postTextClassName={classes.postText}
        postTitleClassName={classes.postTitle}
        publishDateClassName={classes.textPrimary}
      />
    </div>
  );
};

export default CardsList;