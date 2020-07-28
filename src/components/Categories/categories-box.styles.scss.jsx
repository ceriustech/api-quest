//categories-box styles


body {
  color: #2c3e50;
  background: #ecf0f1;
  padding: 0 1em 1em;
}

.platform-content-h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}

/* h2 {
  margin: 0 0 .5em;
  font-weight: normal;
} */

.platform-ad-input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.platform-ad-row {
  display: -webkit-box;
}
.platform-ad-row .col {
  -webkit-box-flex: 1;
          flex: 1;
}
.platform-ad-row .col:last-child {
  margin-left: 1em;
}

/* Accordion styles */
.tabs {
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.platform-label {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 1em;
  font-weight: bold;
  cursor: pointer;
  /* Icon */
}

.platform-label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  -webkit-transition: all .35s;
  transition: all .35s;
}
.platform-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  -webkit-transition: all .35s;
  transition: all .35s;
}

.platform-content-p {
  margin: 0; 
}

.platform-content-h1 {
  text-align: left; 
}

input:checked + .platform-label::after {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
input:checked ~ .platform-content {
  max-height: 100vh;
  padding: 1em;
}

.label-1 {
  background-color: #EA5252;
}

.label-2 {
  background-color: #8B4A9D;
}

.label-3 {
  background-color: #C53029;
}

.label-4 {
  background-color: #FEA116;
}

.label-5 {
  background-color: #306203;
}
