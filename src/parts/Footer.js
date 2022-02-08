import React from "react";
import IconText from "parts/IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 300, marginRight: 120 }}>
            <IconText />
            <p className="brand-tagline">
              Brings your inspiration to movie. We give you experience to get
              info about movies.
            </p>
          </div>
          {/* For Source*/}
          <div className="col-auto navigate-foot">
            <h6 className="mt-2">Source</h6>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  TIX ID
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  IMDb
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  TMDb
                </Button>
              </li>
            </ul>
          </div>

          {/* Cinema */}
          <div className="col-auto navigate-foot">
            <h6 className="mt-2">Cinema</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  XXI
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  CGV
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  Cinepolis
                </Button>
              </li>
            </ul>
          </div>

          {/* Connect Us */}
          <div className="col-auto navigate-foot">
            <h6 className="mt-2">Featured</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Now playing
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Upcoming
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Top Movies
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Top Tv Series
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Info</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Search Movie
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Ratings
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Reviews
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Movie by Cities
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2022 • All rights reserved • Cinemainfo
          </div>
        </div>
      </div>
    </footer>
  );
}
