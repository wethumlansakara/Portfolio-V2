import python from "devicon/icons/python/python-original.svg";
import java from "devicon/icons/java/java-original.svg";
import cplusplus from "devicon/icons/cplusplus/cplusplus-original.svg";
import javascript from "devicon/icons/javascript/javascript-original.svg";
import scikitlearn from "devicon/icons/scikitlearn/scikitlearn-original.svg";
import pandas from "devicon/icons/pandas/pandas-original.svg";
import numpy from "devicon/icons/numpy/numpy-original.svg";
import opencv from "devicon/icons/opencv/opencv-original.svg";
import html5 from "devicon/icons/html5/html5-original.svg";
import css3 from "devicon/icons/css3/css3-original.svg";
import react from "devicon/icons/react/react-original.svg";
import fastapi from "devicon/icons/fastapi/fastapi-original.svg";
import flask from "devicon/icons/flask/flask-original.svg";
import mysql from "devicon/icons/mysql/mysql-original.svg";
import postgresql from "devicon/icons/postgresql/postgresql-original.svg";
import mongodb from "devicon/icons/mongodb/mongodb-original.svg";
import firebase from "devicon/icons/firebase/firebase-original.svg";
import git from "devicon/icons/git/git-original.svg";
import github from "devicon/icons/github/github-original.svg";
import vscode from "devicon/icons/vscode/vscode-original.svg";
import jupyter from "devicon/icons/jupyter/jupyter-original.svg";

import { siNeon, siOpenrouter } from "simple-icons";

// "img": devicon's original (full, official multi-colour) artwork, served as a static asset.
// "brand": devicon has no entry for this one, so we fall back to Simple Icons — still the
// authoritative official mark, with the hex value read from the package, not chosen by hand.
export const skillIcons = {
  Python: { type: "img", src: python },
  Java: { type: "img", src: java },
  "C/C++": { type: "img", src: cplusplus },
  JavaScript: { type: "img", src: javascript },

  "Scikit-learn": { type: "img", src: scikitlearn },
  Pandas: { type: "img", src: pandas },
  NumPy: { type: "img", src: numpy },
  OpenCV: { type: "img", src: opencv },
  OpenRouter: { type: "brand", icon: siOpenrouter },

  HTML: { type: "img", src: html5 },
  CSS: { type: "img", src: css3 },
  React: { type: "img", src: react },
  FastAPI: { type: "img", src: fastapi },
  Flask: { type: "img", src: flask },

  MySQL: { type: "img", src: mysql },
  PostgreSQL: { type: "img", src: postgresql },
  MongoDB: { type: "img", src: mongodb },
  Firebase: { type: "img", src: firebase },
  Neon: { type: "brand", icon: siNeon },

  Git: { type: "img", src: git },
  GitHub: { type: "img", src: github },
  "VS Code": { type: "img", src: vscode },
  "Jupyter Notebook": { type: "img", src: jupyter },
};
