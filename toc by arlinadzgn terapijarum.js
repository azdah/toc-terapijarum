/ **
 * BLOGGER TOC DENGAN EFEK ACCORDION (SORT BY LABEL)
 * ------------------------------------------------- -
 * oleh Taufik Nurrohman
 * URL: http://gplus.to/tovic
 * Dimodifikasi oleh Arlina Fitriyani
 * URL: http://gplus.to/arlina
 * ------------------------------------------------- -
 * /

/ *
var toc_config = {
  url: 'https://terapijarum.blogspot.com',
  containerId: 'table-of-content',
  showNew: 15,
  newText: '<strong style = "font-weight: normal; font-style: normal; warna: #fff; font-size: 11px; background: # 5c5a78; padding: 1px 6px 3px 6px; line-height: normal; float : kanan; border-radius: 3px; "> baru </ strong> ',
  sortAlphabetically: {
    thePanel: true,
    theList: true
  },
  maxResults: 9999,
  activePanel: 1,
  slideSpeed: {
    bawah: 400,
    up: 400
  },
  slideEasing: {
    bawah: null,
    up: null
  },
  slideCallback: {
    down: function () {},
    up: function () {}
  },
  clickCallback: function () {},
  jsonCallback: '_toc',
  delayLoading: 0
};
* /
! function (e, o) {var t = o.getElementById (toc_config.containerId), c = o.getElementsByTagName ("head") [0], n = []; e [toc_config.jsonCallback] = fungsi (e) {untuk (var o, c, i = e.feed.entry, a = e.feed.category, l = "", s = 0, d = a.length; d> s; ++ s) n.push (a [s] .term); untuk (var r = 0, f = i.length; f> r; ++ r) (toc_config.showNew || toc_config.showNew> 0) && r <toc_config.showN 1 && ( i [r] .title. $ t + = "% new%"); i = toc_config.sortAlphabetically.theList? i.sort (fungsi (e, o) {return e.title. $ t.localeCompare (o.title. $ t)}): i, toc_config.sortAlphabetically.thePanel && n.sort (); untuk (var g = 0, h = n.length; h> g; ++ g) {l + = '<h3 class = "toc- tajuk "> '+ n [g] +" </ h3> ", l + =' <div class =" toc-content "> <ol> '; untuk (var _ = 0, p = i.length; p> _; ++ _) {o = i [_]. title. $ t; for (var w = 0, u = i [_]. link.length; u> w;++ w) if ("alternate" == i [_]. link [w] .rel) {c = i [_]. tautan [w] .href; break} untuk (var v = 0, m = i [_]. category.length; m> v; ++ v) n [g] == i [_]. kategori [v] .term && (l + = '<li> <a href = "' + c + '" > '+ o.replace (/ \% new \% $ /, "") + "</a>" + (o.match (/ \% new \% /)? "" + toc_config.newText: "" ) + "</ li>")} l + = "</ ol> </ div>"} t.innerHTML = l, "undefined"! = ketikkan jQuery && ($ ("#" + toc_config.containerId + ".toc- konten "). hide (), $ (" # "+ toc_config.containerId +" .toc-header "). klik (function () {$ (this) .hasClass (" active ") || (toc_config.clickCallback (ini ), $ ("#" + toc_config.containerId + ".toc-header"). removeClass ("active"). next (). slideUp (toc_config.slideSpeed.up, toc_config.slideEasing.up, toc_config.slideCallback.up), $ (this) .addClass ("active"). next (). slideDown (toc_config.slideSpeed.down, toc_config.slideEasing.down, toc_config.slideCallback.down))}). eq (toc_config.activePanel-1) .addClass ("aktif"). next (). slideDown (toc_config.slideSpeed.down, toc_config.slideEasing.down, toc_config.slideCallback.down))}; var i = o.createElement (" script "); i.src = toc_config.url.replace (/ \ / $ /," ") +" / feeds / posts / summary? alt = json-in-script & hasil-max = "+ toc_config.maxResults +" & callback = "+ toc_config.jsonCallback," onload "== toc_config.delayLoading? e.onload = function () {c.appendChild (i)}: e.setTimeout (function () {c.appendChild (i)}, toc_config.delayLoading )} (jendela, dokumen);slideEasing.down, toc_config.slideCallback.down))}). eq (toc_config.activePanel-1) .addClass ("active"). next (). slideDown (toc_config.slideSpeed.down, toc_config.slideEasing.down, toc_config. slideCallback.down))}; var i = o.createElement ("script"); i.src = toc_config.url.replace (/ \ / $ /, "") + "/ feeds / posts / summary? alt = json -in-script & max-results = "+ toc_config.maxResults +" & callback = "+ toc_config.jsonCallback," onload "== toc_config.delayLoading? e.onload = function () {c.appendChild (i)}: e.setTimeout ( function () {c.appendChild (i)}, toc_config.delayLoading)} (jendela, dokumen);slideEasing.down, toc_config.slideCallback.down))}). eq (toc_config.activePanel-1) .addClass ("active"). next (). slideDown (toc_config.slideSpeed.down, toc_config.slideEasing.down, toc_config. slideCallback.down))}; var i = o.createElement ("script"); i.src = toc_config.url.replace (/ \ / $ /, "") + "/ feeds / posts / summary? alt = json -in-script & max-results = "+ toc_config.maxResults +" & callback = "+ toc_config.jsonCallback," onload "== toc_config.delayLoading? e.onload = function () {c.appendChild (i)}: e.setTimeout ( function () {c.appendChild (i)}, toc_config.delayLoading)} (jendela, dokumen);script "); i.src = toc_config.url.replace (/ \ / $ /," ") +" / feeds / posts / summary? alt = json-in-script & hasil-max = "+ toc_config.maxResults +" & callback = "+ toc_config.jsonCallback," onload "== toc_config.delayLoading? e.onload = function () {c.appendChild (i)}: e.setTimeout (function () {c.appendChild (i)}, toc_config.delayLoading )} (jendela, dokumen);script "); i.src = toc_config.url.replace (/ \ / $ /," ") +" / feeds / posts / summary? alt = json-in-script & hasil-max = "+ toc_config.maxResults +" & callback = "+ toc_config.jsonCallback," onload "== toc_config.delayLoading? e.onload = function () {c.appendChild (i)}: e.setTimeout (function () {c.appendChild (i)}, toc_config.delayLoading )} (jendela, dokumen);