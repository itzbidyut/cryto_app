import React from "react";
import moment from "moment";
const demoImage = `https://www.bing.com/th?id=OVFT.hiy0y5HkegaWBVZYX1PKmS&pid=News`;
export default function NewsItem(props) {
  return (
    // <div className="col-md-4 col-12">
    <a rel="noreferrer" target="_blank" href={props.item.url}>
      <div className="itemBox">
        <div>
          <img
            src={props.item?.image?.thumbnail?.contentUrl || demoImage}
            alt="coinimage"
          />
        </div>
        <div>
          <p className="title">{props.item.name.slice(0, 100)}...</p>
          <p className="des">{props.item?.description.slice(0, 200)}...</p>
          <p className="time">
            {moment(props.item.datePublished).startOf("ss").fromNow()}
          </p>
          <div className=" providerBox">
            <img
              className="provider"
              src={
                props.item?.provider[0]?.image?.thumbnail?.contentUrl ||
                demoImage
              }
              alt="icon"
            />
            <p className="providerNmae">{props.item?.provider[0]?.name}</p>
          </div>
        </div>
      </div>
    </a>
    // </div>
  );
}
