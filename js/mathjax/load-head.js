/*************************************************************
 *
 *  MathJax/extensions/TeX/load-head.js
 *
 *  Loads <script type="math/tex"> tags in <head> before typesetting starts
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2019 Yuri Sulyma <yuri@lmqm.xyz>.
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(async () => {

MathJax.Extension["load-head"] = {version: "1.0"};

Promise.all(
  Array.from(document.querySelectorAll("head > script[type='math/tex']"))
  .map(script => fetch(script.src).then(res => {
    script.remove();
    if (res.ok) return res.text();
    throw new Error(`${res.status} ${res.statusText}: ${script.src}`);
  }))
).then(results => {
  const div = document.createElement("div");
  div.style.display = "none";
  div.innerText = "\\[" + results.join("\n") + "\\]";
  document.body.prepend(div);
  MathJax.Hub.Queue(
    ["Typeset", MathJax.Hub, div],
    () => document.body.removeChild(div)
  );

  MathJax.Ajax.loadComplete("[Extra]/load-head.js")
});

})();
