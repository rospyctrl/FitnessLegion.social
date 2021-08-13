import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import React, { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/posts/postSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0.7rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "70vh",
    [theme.breakpoints.down("sm")]: {},
  },
  contentDiv: {
    width: "100%",
    margin: "auto",
  },
}));

const PostList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  const classes = useStyles();
  const page = <div></div>;
  return (
    <div className="container ">
      <Card className={classes.root}>
        <CardContent className={classes.contentDiv}>
          <div>
            <SkeletonLoading loading />
            <SkeletonLoading loading />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostList;
