import React from "react";
import "./skeletons.css";
import { Skeleton } from "@mui/material";

const Skeletons = () => {
  const arr = new Array(20).fill(null);

  return (
    <>
      {arr.map((item, index) => (
        <div className="skeleton-main" key={index}>
          <Skeleton
            className="skeleton-1"
            variant="rectangular"
            width={224}
            height={253}
          >
            <Skeleton
              className="skeleton-slider"
              variant="rounded"
              width={60}
              height={8}
            />
          </Skeleton>
          <Skeleton
            className="skeleton-2"
            variant="rounded"
            width={224}
            height={111}
          >
            <div className="skeleton-padding">
              <div className="skeleton-description-1">
                <Skeleton
                  className="skeleton-price"
                  variant="rounded"
                  width={166}
                  height={20}
                />
                <Skeleton
                  className="skeleton-heart"
                  variant="circular"
                  width={25}
                  height={20}
                  sx={{ borderRadius: "35%" }}
                />
              </div>
              <div className="skeleton-description-2">
                <Skeleton
                  className="skeleton-text"
                  variant="rounded"
                  width={204}
                  height={20}
                />
              </div>
              <div className="skeleton-description-3">
                <Skeleton
                  className="skeleton-text"
                  variant="rounded"
                  width={204}
                  height={20}
                />
              </div>
            </div>
          </Skeleton>
        </div>
      ))}
    </>
  );
};

export default Skeletons;
