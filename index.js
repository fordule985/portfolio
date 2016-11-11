// Welcome! require() some modules from npm (like you were using browserify)
// and then hit Run Code to run your code on the right side.
// Modules get downloaded from browserify-cdn and bundled in your browser.
var yo = require('yo-yo')
var csjs = require('csjs-inject')
var minixhr = require('minixhr')

var links = ['https://fonts.googleapis.com/css?family=Bungee+Inline',
            'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
            ]
var font = yo`<link href=$links[0] rel="stylesheet" type='text/css'>`
var fontAwesome = yo`<link href=${links[1]} rel='stylesheet' type='text/css'>`
document.head.appendChild(font)
document.head.appendChild(fontAwesome)

//loading data

minixhr('https://api.github.com/users/fordule985', startPage)

function startPage (data) {
  var data = JSON.parse(data)
  document.body.appendChild(template(data))
  activateScrollEffect(COLORS)
}

var BLUE        = 'hsla(198,48%,27%,1)'
var PINK        = 'hsla(346,84%,61%,1)'
var YELLOW      = 'hsla(32,95%,65%,1)'
var GREEN       = 'hsla(154,90%,38%,1)'
var GREY        = 'hsla(20,95%,94%,1)'
var COLORS      = [BLUE, PINK, YELLOW, GREEN]

var css = csjs`
  body {
    text-align: center;
    color: black;
    background-color: GREY;
    font-family: 'Bungee Inline', cursive;
  }
  h1 {
    margin-top: 1em;
    color: ${GREEN};
    font-size: 4em;
    text-align: center;
  }
	h3{
    margin-top: 3em;
    font-size: 2em;
    margin-bottom: 8em;
    color: ${GREEN};
  }
	img{
    margin-top: 2em;
    border: 5px dotted ${YELLOW};
    border-radius: 30%;
    width: 18em;
  }
@-webkit-keyframes bounce {
      0% {
        bottom: 50px;
      }
      70% {
        bottom: 100px;
        color:	YELLOW;
      }
      100% {
        bottom: 50px;
      }
    }
.arrow {
      position: relative;
      font-size: 3em;
      animation: bounce 2s infinite
    }
`
function template (data){
return yo`
 <div>
  <img src="${data.avatar_url}">
  <h1>${data.name}</h1>
  <h3>${data.bio}</h3>
  <div>
        <i class="${css.arrow} fa fa-chevron-down" aria-hidden="true"></i>
        </div>
  ${portfolioComponent()}
  ${textboxComponent ()}
  ${footerComponent ()}
  </div>
`
}
document.body.appendChild(template ())

//portfolio component

function portfolioComponent () {
	var css = csjs`
  	.portfolio {
      margin: 2em 0 2em 0;
      width: 100%;
    }
    .portfolioItem {
      width: 100%;
      padding-bottom: 200px;
      display:flex;
      flex-direction: column;
      transition: 2s;
    }
    .portfolioTitle {
      margin: 2em 2em 2em 1.5em;
      padding: 0.5em;
      font-size: 3em;
      color: ${PINK};
      background-color: ${YELLOW};
      border-radius: 4px;
      border: 4px solid ${YELLOW};
      transition: 2s;
    }
    .portfolioBody {
      margin: 0 40% 0 0em;
      color: GREY;
      text-align: justify;
      font-size: 1.2em;
      transition: 2s;
    }
  	.portfolioItem_isHover {
      width                : 100%;
      padding-bottom       : 200px;
      display              : flex;
      flex-direction       : column;
      align-items          : flex-start;
      cursor               : pointer;
      transition           : 2s;
    }
  .portfolioTitle_isHover {
      margin                : 2em 2em 2em 1.5em;
      padding               : 0.5em;
      font-size             : 3em;
      background-color: 		hsla(154,90%,38%,1);
      border-radius         : 4px;
      border                : 4px solid;
      transition            : 2s;
    }
  .portfolioBody_isHover {
      margin               : 0 35% 0 4em;
      text-align           : justify;
      font-size            : 1.2em;
      transition           : 2s;
    }

  `
  function template () {
    return yo`
    <div onmouseover=${hoverPortfolio}>
      <div class="${css.portfolio}">
        <div class="${css.portfolioItem}">
          <div class="${css.portfolioTitle}">
            Portfolio: Moj kviz
          </div>
          <div class="${css.portfolioBody}">
            Moj kviz je kviz aplikacija gde korisnici odgovaraju
            na pitanja Likertove skale i porede svoje odgovore sa
            drugima. Cuva sve odgovore u bazi podataka i omogucava
            administratoru pregledanje svih odgovora.
           </div>
        </div>
      </div>
    </div>
    `
  }

  var element = template()
  return element

  //hover
    function hoverPortfolio () {
    var element = this
    var newElement = yo`
    <div onmouseout=${unhoverPortfolio} onclick=${openNewTab}>
        <div class="${css.portfolio}">
          <div class="${css.portfolioItem_isHover}">
            <div class="${css.portfolioTitle_isHover}">
              Portfolio: Moj kviz
            </div>
            <div class="${css.portfolioBody_isHover}">
            Moj kviz je kviz aplikacija gde korisnici odgovaraju
            na pitanja Likertove skale i porede svoje odgovore sa
            drugima. Cuva sve odgovore u bazi podataka i omogucava
            administratoru pregledanje svih odgovora.
             </div>
          </div>
        </div>
      </div>
    `
    // 'this' is a reference to the dom node,
    // that hoverPortfolio was attached to as an eventListener
    yo.update(element, newElement)
  }
    var element = template()
	  return element

    function unhoverPortfolio() {
      var element = this
      var newElement = template()
      yo.update(element, template())
    }
 		function openNewTab() {
    var url = "https://fordule985.github.io/quiz/"
    var win = window.open(url, '_blank')
    win.focus()
    //ajde radi
  }

  var element = template()
  return element
}

//textbox

function textboxComponent () {
  var css = csjs`
  .textbox {
    margin: 5em 25% 3em 25%;
    margin-top: 8em;
    font-size: 2em;
    line-height: 1.5em;
    text-align: justify;

  }
  `

  function template () {
    return yo`
      <div>
        <div class="${css.textbox}">
         Prvi rad u JavaScriptu. Ne napredovato znaci nazadovati.
        </div>
      </div>
    `
  }

  var element = template()
	return element
}

//footer

function footerComponent () {
	var css = csjs`
  	.container {
      display: flex;
      justify-content: center;
    }
    .icon {
      padding: 1em;
      font-size: 35px;
      color: ${GREY};
    }
    .icon:hover {
      opacity: 0.4;
    }
    `

  function template () {
    return yo`
    <div class="${css.container}">
      <a href="https://github.com/fordule985">
        <i class="${css.icon} fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="mailto:kojic.dusan985@gmail.com ">
        <i class="${css.icon} fa fa-envelope-o" aria-hidden="true"></i>
      </a>
      <a href="https://www.facebook.com/dusan.kojic.56">
       <i class="${css.icon} fa fa-facebook" aria-hidden="true"></i>
      </a>
    </div>
    `
  }

  var element = template()
  return element
}

//helpers

function activateScrollEffect (COLORS) {
  var docHeight = document.body.offsetHeight
  var colorAreaHeight = docHeight/COLORS.length
  window.addEventListener("scroll", function(event) {
    var position = document.body.scrollTop
    var i = Math.floor(position/colorAreaHeight)
    var color    = COLORS[i]
    document.body.style.backgroundColor = color
    document.body.style.transition = "background-color 3s"
  })
}
    activateScrollEffect(COLORS)(template())
