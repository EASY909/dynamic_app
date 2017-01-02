;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M498.816 345.056c26.336 0 43.936-17.632 43.936-43.904 0-26.56-17.568-43.744-43.936-43.744s-52.832 17.184-52.832 43.744C446.016 327.424 472.48 345.056 498.816 345.056z"  ></path>'+
      ''+
      '<path d="M253.088 257.408c-26.336 0-52.96 17.184-52.96 43.744 0 26.272 26.624 43.904 52.96 43.904 26.24 0 43.808-17.632 43.808-43.904C296.864 274.592 279.328 257.408 253.088 257.408z"  ></path>'+
      ''+
      '<path d="M1024 626.112c0-138.88-128.832-257.216-286.976-269.536 0.224-1.728 0.32-3.52-0.064-5.312-31.712-147.84-190.688-259.296-369.824-259.296C164.704 91.968 0 233.12 0 406.624c0 93.088 47.52 176.96 137.568 243.104l-31.392 94.368c-2.016 6.144-0.192 12.896 4.704 17.152 2.976 2.56 6.72 3.904 10.496 3.904 2.432 0 4.896-0.576 7.168-1.696L246.4 704.48l14.528 2.944c36.288 7.456 67.616 13.92 106.208 13.92 11.36 0 22.88-0.512 34.176-1.472 4.576-0.384 8.448-2.688 11.072-6.016 42.496 106.336 159.616 183.104 297.44 183.104 35.296 0 71.04-8.512 103.104-16.544l90.848 49.664c2.4 1.312 5.056 1.984 7.68 1.984 3.584 0 7.168-1.216 10.048-3.552 5.056-4.096 7.136-10.848 5.248-17.024l-23.2-77.152C981.344 772.864 1024 699.328 1024 626.112zM398.592 687.968c-10.4 0.896-20.96 1.344-31.424 1.344-35.328 0-65.216-6.112-99.776-13.248L247.296 672c-3.456-0.736-7.104-0.256-10.272 1.376l-88.288 44.192 22.944-68.928c2.24-6.752-0.224-14.112-6.016-18.176C76.96 568.64 32 493.312 32 406.624c0-155.84 150.336-282.656 335.136-282.656 163.36 0 308 99.392 337.856 231.584-171.296 2.24-309.888 122.656-309.888 270.56 0 21.504 3.264 42.336 8.768 62.432C402.208 688.128 400.448 687.808 398.592 687.968zM875.456 815.552c-5.344 4.032-7.616 10.976-5.696 17.376l15.136 50.336-62.112-33.984c-2.368-1.312-5.024-1.984-7.68-1.984-1.312 0-2.624 0.16-3.904 0.512-33.312 8.416-67.776 17.088-101.344 17.088-155.904 0-282.72-107.136-282.72-238.816 0-131.68 126.816-238.784 282.72-238.784 152.928 0 282.144 109.344 282.144 238.784C992 691.744 950.624 759.04 875.456 815.552z"  ></path>'+
      ''+
      '<path d="M612.992 511.968c-17.568 0-35.136 17.696-35.136 35.232 0 17.664 17.568 35.104 35.136 35.104 26.4 0 43.84-17.44 43.84-35.104C656.832 529.632 639.392 511.968 612.992 511.968z"  ></path>'+
      ''+
      '<path d="M806.016 511.968c-17.312 0-34.88 17.696-34.88 35.232 0 17.664 17.568 35.104 34.88 35.104 26.304 0 44.064-17.44 44.064-35.104C850.08 529.632 832.352 511.968 806.016 511.968z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dianhua" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M930.495631 421.741407c-20.910603 25.810876-42.19148 12.638118-48.354301 8.49465-20.910603-14.050581-14.706239-114.682292-112.720738-210.417343-123.176942-94.747048-162.382742-62.404882-202.153888-91.398317-15.665341-27.311844-2.163851-45.935773-2.163851-45.935773 26.341905-28.301653 135.377955-20.798617 257.250807 92.24724C967.418369 323.069444 930.495631 421.741407 930.495631 421.741407L930.495631 421.741407zM930.495631 421.741407"  ></path>'+
      ''+
      '<path d="M571.747934 263.274549c0 0 121.872852 9.47904 164.017371 143.760619 0 0 5.882857 40.517115 39.209412 38.884293 0 0 48.029182-5.555931 33.655287-55.552086 0 0-11.110056-71.549772-78.415212-129.710038 0 0-80.04984-69.915143-146.377831-62.077957 0 0-15.57503 2.181913-25.155218 19.275974C549.096135 234.958446 559.545115 259.788545 571.747934 263.274549L571.747934 263.274549zM571.747934 263.274549"  ></path>'+
      ''+
      '<path d="M977.874574 745.856652l-162.388161-110.76099c-84.948308-45.415582-149.200952 13.830222-149.200952 13.830222-35.50305 24.503173-67.632082 6.316349-67.632082 6.316349-17.431824-8.715009-37.031111-30.279463-38.956541-32.235599-1.923624-1.961554-180.388944-182.31618-180.388944-182.31618-33.328362-46.398166 1.961554-101.939414 1.961554-101.939414 19.599287-32.678123 7.837186-75.805225 7.837186-75.805225-26.788041-145.722174-125.458198-232.632036-125.458198-232.632036-54.238964-49.00454-114.362592-7.840799-114.362592-7.840799-130.687203 71.885728-147.676503 175.497702-147.676503 175.497702-3.27287 57.869465 51.621752 177.374364 51.621752 177.374364 27.443699 62.728196 96.710409 158.790172 96.710409 158.790172 86.254204 121.54412 307.127751 313.008802 307.127751 313.008802 133.304415 113.044051 292.09278 161.080458 292.09278 161.080458 86.261429 32.669091 143.11038-9.809578 143.11038-9.809578 55.871787-39.202187 110.105332-123.49845 110.105332-123.49845C1054.97847 788.981948 977.874574 745.856652 977.874574 745.856652L977.874574 745.856652zM865.152029 926.54001c-47.378943 41.492473-155.199407-5.557737-155.199407-5.557737-104.556626-52.275604-209.124089-137.451495-209.124089-137.451495C140.0958 515.388468 76.099638 228.313365 76.099638 228.313365c-19.604706-83.646023 109.778407-145.066516 109.778407-145.066516 21.893186-9.804159 35.941961 7.838992 35.941961 7.838992 8.167724 6.538514 102.589653 155.199407 102.589653 155.199407 21.239335 39.859651-31.039881 107.166613-31.039881 107.166613-25.153412 48.354301-4.898467 83.83387-4.898467 83.83387 11.110056 21.752301 53.259993 68.748325 53.259993 68.748325 16.333643 20.583677 192.114921 189.835472 192.114921 189.835472 78.411599 83.635186 147.356802 26.132383 147.356802 26.132383 55.864562-37.574783 67.30335-32.345778 67.30335-32.345778 21.568067 0.98439 75.47288 35.940155 75.47288 35.940155 105.539209 63.38566 116.315115 91.808329 116.315115 91.808329C949.773411 863.477664 865.152029 926.54001 865.152029 926.54001L865.152029 926.54001zM865.152029 926.54001"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-9yijianfankui" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M963.925781 353.613281 963.925781 353.613281c-19.863281 0-36.40625 3.320313-36.40625 19.863281l0 536.308594c0 19.863281-6.621094 39.726563-26.484375 39.726563l-794.53125 0c-16.542969 0-39.726563-19.863281-39.726563-39.726563l0-794.53125c0-16.542969 23.164063-26.484375 39.726563-26.484375l539.609375 0c19.863281 0 49.648438-16.542969 49.648438-36.40625l0 0c0-19.863281-29.785156-33.105469-49.648438-33.105469L40.273438 19.257813C23.730469 22.558594 0.546875 32.5 0.546875 49.042969l0 926.953125c0 19.863281 23.164063 39.726563 39.726563 39.726563l926.953125 0c19.863281 0 26.484375-19.863281 26.484375-39.726563L993.710938 373.476563C993.710938 356.933594 983.789063 353.613281 963.925781 353.613281zM1013.574219 12.636719c-13.242188-13.242188-33.105469-13.242188-46.347656 0L609.6875 370.175781c-13.242188 13.242188-13.242188 33.105469 0 46.347656 13.242188 13.242188 33.105469 13.242188 46.347656 0L1013.574219 58.984375C1026.816406 45.742188 1026.816406 25.878906 1013.574219 12.636719zM464.023438 386.71875l-198.632813 0c-19.863281 0-33.105469 13.242188-33.105469 33.105469l0 0c0 19.863281 13.242188 33.105469 33.105469 33.105469l198.632813 0c19.863281 0 33.105469-13.242188 33.105469-33.105469l0 0C497.128906 399.960938 483.886719 386.71875 464.023438 386.71875zM232.285156 684.667969 232.285156 684.667969c0 19.863281 13.242188 33.105469 33.105469 33.105469l463.476563 0c19.863281 0 33.105469-13.242188 33.105469-33.105469l0 0c0-19.863281-13.242188-33.105469-33.105469-33.105469l-463.476563 0C245.527344 651.5625 232.285156 664.804688 232.285156 684.667969z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon-home-default" viewBox="0 0 1026 1024">'+
      ''+
      '<path d="M1009.824 520.355l-501.053-468.483-501.053 467.107c-9.802 9.138-10.349 24.507-1.188 34.299 9.151 9.785 24.538 10.338 34.333 1.179l467.871-436.154 467.892 437.482c4.694 4.386 10.653 6.554 16.601 6.554 6.475 0 12.953-2.572 17.731-7.69 9.169-9.785 8.665-25.139-1.136-34.292l0 0zM1009.824 520.355zM856.927 529.978c-13.411 0-24.29 10.873-24.29 24.267l0 372.095-194.331 0 0-258.848-259.104 0 0 258.848-194.323 0 0-372.095c0-13.394-10.868-24.267-24.289-24.267-13.429 0-24.295 10.873-24.295 24.267l0 420.627 291.493 0 0-258.847 161.94 0 0 258.847 291.486 0 0-420.627c0.001-13.394-10.881-24.267-24.286-24.267l0 0zM856.927 529.978zM686.893 182.153l145.744 0 0 129.421c0 13.414 10.881 24.272 24.29 24.272 13.407 0 24.287-10.858 24.287-24.272l0-177.953-194.322 0c-13.414 0-24.295 10.852-24.295 24.267-0.001 13.41 10.881 24.267 24.295 24.267l0 0zM686.893 182.153z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
