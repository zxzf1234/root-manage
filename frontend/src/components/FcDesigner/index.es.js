/*!
 * form-create 可视化表单设计器
 * @form-create/designer v3.1.5
 * (c) 2021-2024 xaboy
 * Github https://github.com/xaboy/form-create-designer
 * Released under the MIT License.
 */
(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode('._fc-designer{cursor:default;height:100%;min-height:500px;overflow:hidden;position:relative}._fc-designer>.el-main{bottom:0;left:0;padding:0;position:absolute;right:0;top:0}._fc-m .form-create ._fc-l-item{background:#2e73ff;height:10px;overflow:hidden;transition:all .3s ease;width:100%}._fc-l,._fc-m,._fc-r{border-top:1px solid #ececec;box-sizing:border-box}._fc-l-group{padding:0 12px}._fc-l-title{font-size:14px;font-weight:600;margin:18px 0 5px}._fc-l-item{background:#fff;color:#000;cursor:pointer;display:inline-block;height:70px;line-height:1;min-width:70px;text-align:center;transition:all .2s ease;width:33.33%}._fc-l-item i{display:inline-block;font-size:21px}._fc-l-item ._fc-l-name{font-size:12px}._fc-l-item ._fc-l-icon{padding:10px 5px 12px}._fc-l-item:hover{background:#2e73ff;color:#fff}._fc-m-tools{align-items:center;border:1px solid #ececec;border-top:0;display:flex;height:40px;justify-content:flex-end}._fc-m-tools button.el-button{align-items:center;display:flex;padding:5px 14px}._fc-m-tools .fc-icon{font-size:14px;margin-right:2px}._fc-r .el-tabs__nav-wrap:after{background-color:#ececec;height:1px}._fc-r ._fc-r-tabs{border-bottom:1px solid #ececec;display:flex;padding:0}._fc-r ._fc-r-tab{box-sizing:border-box;color:#303133;display:inline-block;flex:1;font-size:14px;font-weight:600;height:40px;line-height:40px;list-style:none;position:relative;text-align:center}._fc-r ._fc-r-tab.active{border-bottom:2px solid #409eff;color:#409eff}.drag-box{min-height:60px;width:100%}._fc-m-drag{box-sizing:border-box;overflow:auto;padding:2px}._fc-m-drag,.draggable-drag{background:#fff;height:100%;position:relative}._fc-m-drag>form,._fc-m-drag>form>.el-row{height:100%}.el-form--inline [data-draggable]{display:inline-flex;vertical-align:middle}.drag-tool{word-wrap:break-word;box-sizing:border-box;display:flex;min-height:20px;outline:1px dashed #2e73ff;overflow:hidden;padding:2px;position:relative;word-break:break-all}.drag-tool .drag-tool{margin:5px}.drag-tool+.drag-tool{margin-top:5px}.drag-tool.active{outline:2px solid #2e73ff}.drag-tool.active>div>.drag-btn{display:flex}.drag-tool .drag-btn{display:none}.drag-r{bottom:2px;right:2px}.drag-l,.drag-r{position:absolute;z-index:2}.drag-l{left:0;top:0}.drag-btn{background-color:#2e73ff;color:#fff;cursor:pointer;float:left;height:18px;justify-content:center;line-height:20px;padding-bottom:1px;text-align:center;width:18px}.drag-btn+.drag-btn{margin-left:2px}.drag-btn-danger{background-color:#ff2e2e}.drag-btn i{font-size:13px}.drag-mask{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}.CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}.CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{background:#fff;overflow:hidden;position:relative}.CodeMirror-scroll{height:100%;margin-bottom:-50px;margin-right:-50px;outline:none;overflow:scroll!important;padding-bottom:50px;position:relative;z-index:0}.CodeMirror-sizer{border-right:50px solid transparent;position:relative}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{display:none;outline:none;position:absolute;z-index:5}.CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}.CodeMirror-scrollbar-filler{bottom:0;right:0}.CodeMirror-gutter-filler{bottom:0;left:0}.CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}.CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-50px;vertical-align:top;white-space:normal}.CodeMirror-gutter-wrapper{background:none!important;border:none!important;position:absolute;z-index:4}.CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}.CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{word-wrap:normal;-webkit-tap-highlight-color:transparent;background:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;z-index:2}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}.CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.CodeMirror-cursor{pointer-events:none;position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}._fc_struct{width:100%}._fc_struct .CodeMirror{height:450px}._fc_struct .CodeMirror-line{font-size:13px!important;line-height:16px!important}.CodeMirror-lint-tooltip{z-index:1!important}._fc_struct .el-dialog__body{padding:0 20px}._fc_err{color:red;float:left;text-align:left;width:65%}._fc_fetch .el-form-item__label{display:inline-block;float:left;padding-right:5px;text-align:right}._fc_fetch{background-color:#bfdaf7;padding:10px}._fc-validate .form-create .el-form-item{margin-bottom:22px!important}._fc-validate .append-msg{cursor:pointer}._fc-validate .el-input-group__append{padding:0 10px}._fc-required{align-items:center;display:flex}._fc-required .el-input{margin-left:15px}._fc-required .el-switch{height:28px}._fc_table_opt[data-v-0d635ce0],._fc_table_opt[data-v-f5d121da]{width:100%}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,d09GRgABAAAAABa8AAsAAAAAJQQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAGA9hU5KY21hcAAAAYgAAAE2AAADaEcfEkJnbHlmAAACwAAAEPIAABsQkdIMXGhlYWQAABO0AAAALwAAADYmk54paGhlYQAAE+QAAAAgAAAAJAfgBARobXR4AAAUBAAAABIAAACIiGIAAGxvY2EAABQYAAAARgAAAEZ5NHJIbWF4cAAAFGAAAAAdAAAAIAE2ALZuYW1lAAAUgAAAAUAAAAJnEKM8sHBvc3QAABXAAAAA+QAAAWbrmcBBeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGFhZpzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnhe8Lmdu+N/AwMB8hwFIMjCiKGICAH8ZDVB4nOXTR04DQRSE4X/IOefMniUnQBwIBMILWyZnkVkhjmNYcY+SzCGgxsUKjkBL30j9pA7qVwN0Au22Zh1QfFBQjndXi1a9nb5WvYMXz8cYcaVN29pVRTVd67n59ln5+gJtaUd7qqqum2YjtV+j8PoJpphhjnU22HRtgUWWWGaFVbp8n2566PWZ/QwwyBDDPnHUp48x7rWTXj3t9bPeYZ623LLo+nPS/xsD5ad4/Zmtlv0IvzDaDr812gm/OtoNvz/aC3cCVaK1TzXcHVSLMjeqhzuG9sO9QwfhLqLDKDOko3Bn0XGUt9ZJuNvoNNx3dBZOADoPZwFdhFOBLqPMrq7CSUHX4cygm3B60G04R+gunCh0H84WeginDD2G84aewslDz+EM0myE00jzLcp/6rMSFN+kJ4M/AAB4nHU5DZAU1Zn93pv+mZ7p7umZ/pnZ2fnfmWHZndlhemZaliwEEBZYFEEBo8huDkPiXuTk/Fkq3Gk0xxlSKKAclkbu8KTU8y6pilVRVAhRq6g7c1bInScpEkmRi4nlRanEu3Bc7Oa+1z2zsws60/O9733ve/1ef+/77WFYBj7kTvzfzDpmM/MV5s+ZexkGFfJcChVkpBmmpUNHMxYgvdPXjHqrqTZaC1Dd0FWNK+TypXa/VRpAeRkDNY2tXH0hBnoV81a91aAjHJ3vM3GXYZ1xfOFAZuCCKMvihQshWQ5d8HElpigijAxk3CiFJ+VIRD6ZqBRisUIlgT5qYwcOiJSPTjwgw+eAIsvKDKwzij8eTG9BsiajnYqm7PSweXQhnBXlzhroo8xAIkHv70Znr/QdWZfh+psEfA54wCeAKDHDXLoUQGSAUZgEw8SajRYIIoMMgEYKsapGMZDfQMZAc4zI7YRFzxmZT6BL/tTI4IE3jSwQs8aqAbdpZIDpR/SecEb/C/eMMXPgnsQX9vRNc3mOrSI4Bo4nnCf4lh1rldauzRiuoWwjAXSvkXGqOYvs583wJx9GUywQFTNMYhQNsOhX7jt4QWfhOXExZKjuZDiuQYsOhuOwPILnOk8eIiJThE59IWp4K3oqARphptGCNpWeI19FIwifHbquVrtuyL0a2kp53edjG6xXqmuqcL1iXR9TY+jU3BXrV8wFsNz45+V3GIOt/hUbVsyt98tz4y/QR/ae+2X8LZBllqnCut6CaURViy7FLkT1NNZknK/iRgsVgFgqW/U0guPEL7g/XrFjdHTHCjTPa53/SY+tHftcNvs5v0Hn9tdardr++RP2VRN49/Id+3Ys98BdacqzbtVIJjOyat2Ye7x4+9duL80f3z5uM4zo7WkH/iNjMoPMCLOYWcmsZW5gJpl7mAeoZHxx5GabhmWCEfGqN9CyVdhlrorKRXp4PtMIonqiw5fVC3qhWWjmzEK5wBdss8zbcFND13iOh9bHBlCTWo3dajbKYDm6VadoieLoHxWTGArq75s3r885WqjXCz/5CSVF8Bqvcd9KD2B0RDUTintGjSciqOSegd/o4vRipI7l1XVqfmwonXk/ogsSL4UklieiFsluyNREmfC8JNdsSZY5VlJt/Ecjcr8Sx/U+dxddCa8u1AeNiPM9byV0LwyRwd4XEpH1UTMRWaeaczb8Ifnss8nXa7XXp9avn+J4MD1ZChAS4EU9pYivr2NxQJV4fg/PxgSJ8CDugCfzbfgjZoAZY77E/LXnoUq+xwHJlajqgyTBSdV1DWTTkacvX+g2G9QoKCsMgtQa5SrVV1/8RbDRNpqnLHlOVzkeOiUzP4RKDbtFTU3XFAy0IVRFnJZBacTLiMSPhZVI6Fg4poWcUxQme9VQkgoe1/rm1d1RSelF63hN49/nUEAOBzD7fmaoknP3zButR0K6qSdZNsBLaloUd5lmYlmiEsAYFhcCtpBQ+F0cx2IZfSlihrXQObrAOSkaDyvz+s7SRc7la+534TZx8Q4RBB2EBQL1wva+eacu5mu1/Imwkjwh6rrofswipBwX95rLzZ4eKyDyQZ5g1hKIkgNBq7wQpCJmp+WsMBmQtQ3SpjYH8uh4rUZpplZTLSft8EBdOD8DJxTQg6EE1Y8ZRHXOllqtEs4DNBXnrGKaCs4r5uSjoqqKACKhaewpirj/ReF2VVPxh61Sd7bzQGeqqbjvw7BqKN9UdVU1FZSmra66J+lUNNzxI5Pec8WYimels6yTzam5or0QDlVBREGcXrAKcPLgXTLYJpaZzZrOQTOTMfGkcxBPugdPC6ZCBPJbglEhxPNbBRIxBLL+NP4wQzmBH0+amZZz8K2LMKQFA+55ghDmH+CNiEC2XvR0+pJLHiCY0Zh+kPTVIP58GQwY1A0Ujto5NXiuXLc9fYWRPO1rdMTOV1GD+j6ky7js+0LfM2Jm8qaN9WazvvGmtzvI5M3XjlWq1crYtS92kJtHp5Ytm3p4ahlafveoPW7b49vG7dZm3J1n3XjTv1HEmjXPQ9Ysn3poavnyqdEVU1db3kx7/M8220w7Tj0IzzTIXM8wRTAWnsuDqS1CAEC+i/BCZNUhVmRwGpkGp1DAw3OVjQyCBx0Czla5NIRLeThb+qwZOBFo6k3bMPFrUePxxyPVVEwluR2RMCcU48+tDvUnUnIoglc+F+9jhXB0R4qLauCvohgMKxBmi8qDQY4NnrqZ7WFvPsXzCLGPh/p4ohwnt8TFa64RZamaOLI9UjESGZJ6XO9RWC30eIrkDH1I2/50fEAlgWGMUICL/Kv89WBYZPt+EAq9VhRkwrEPR18MCYSM4xp9dM57/i/jDzz7KTAWs4BZBPH6smBgzjaoAqtaqgle32pSz0+h1UQAVPjx0D2HhzODgxnnZLpSSXtJynBIkkLOe9Ybu15trYEfykw+9dTk5K5d+INK2jlJufFwumLJonOSsuJhUd7hbkJHBnf/fn36m79fn3GP2ugF+1m7fWaT+CWmh4GHQHbbVEHmrQbYAFg0GAQcQYulPjbXpP6R+lrfoZbQoWukuHwNr8v8FCexYXyPIPAxdCIsOfvkuCyH8eGwzGFmwv1OGHro+gle1vl9JID38TrPohNy+Jln6MgPPdBDt8O3/dBvGB3k2M80mGXMevD7YLegOyA7maYeVQTSA33Ksb48wcugtkRzKg2AnBcFMu1o0HH3ECxnEwr8ZX3C92fkSE816ZxPVpJwYdk5H00mo6+iL9DG/dl9HDfCBoPsHyg491kA/zotlXTHSVZ74GaYwJ2sZNT5v2gSTziHk1HMRZPOIfTvLFvDAXYTFyDrgmySzkxzwh6B89AkJ+wV2F5W8EDHR9+AT3u+LAdZ0YLP8GdooWddSEblUotFLciKeJAJeBgyq5M1UinDOU4hXuoc934FOc4HA4rzrtcijFYFFS3ovhhUQvwltDIY0UT3pWBEFPA73blGynKOp2AuGxR12XlXYUXeTMJUFI0E3ZeDSOCjqIGWB5EaEd1XoB+M0LO+dJH8PdEg3mxkJpjboALZyfyV5w0LpfL0F7yH3TK9/CeDdMNzjSUIwaAQgFmG3QQm8JSmBe6xRb+gvP5U4OI5Os2bTah+UyW2r0DMKxD0bkEj1aFiX48RIYuCfDH/jXU3fmHL+iWVuIrjSwZW9Rd7NZFlRSTk/zZwZwpxvBjJjhBVi/UayWgthiR97sjYhmuuHd2eybP8fCVmZLJzHknOTabKva1UKQXXPvgB4bDfXOcTOcL16FkzGeM2b920Ye1UMiVHljXXzp3HBh5c0s8SntXDPaI5V1lpxZaKimY0okCFIMMF1drtaE5p9dACKdwTv3Xp6rU33xQ1td6YiUa03t5yKnlvjK6QGoGm3NvrE1OP+g0znXdva8fLuZ+uX6QAFNr3MjEvFTC4gkVqib6+hHOYQrzFeQJvPbQzmojulKJRCVlSFKsRgj+c5phI9A07T6Dvuqc8hhqwRsNSdGZ8VJkSeKYR2AVUllBXQlUJiS6kz90g2Q2cJt1TmeZzvG/Nvm1jZunOTU1rfOcu2tSqO5dOzopyNO49kchopCdj1GAnPdEo/nGHnTbVmmXN4vai5DHFNCKQgnwlGv6Y7v/jcJSZzlcn8Q9AklEmTSUYU3NqcXYcMOkudV+IsRn4STzlbMPPC5IkOBsE6aykSHD9NhyRpEgYP+ycwaWhsOAcoQx4k5YOg8Sco+FYLIxXdPFuPncDfh6sTGWSULkNedFIgx00YlZdg2QYct/cNFaYxnifC7A38W3ZrPNYNnsbvVSs+O3v2k17VMXPNxqXmEZPWO78HCsRltu69OV2Ttm6PBqWroyGJpg62KpGHbiXfoMfK2kzgiAezHWjoNv/8lFW44ggvMVH2TfBTcZEjD+knF4YtHOV1sww+P2TJ3kM7Kb4Mx6zkMeJIhYwbsfu3fg1wCQmBVFnPkQdBvEmjcgxu0wDNM11/VBDN9sqEU9aaoPWHcVZY41ZY+j82NjEhLZ69fj4iYO9c0rJg8kSLkRDB0XxYAhdfCxZLPU8liyVI+JjIlx4UWu4WHIPDwNEZ4u9jtNbLEEA6S06R2G7vCguLvdcSWzXpjTPjTB5yD6WQWV6C3jUu5n7mX8Ayesdc6ChjhY+0xbSqaYgOzO6BRQcFOt16FinSKJa7J9eo2XPwIvTU4H+GTgPuc3MPUwvr89gshrWG7IOx7VXkuHMSrRCnKLHt5c426boye+FHiS+h3kPC00Bg3MMfY8OuWsoZQaOKns7U0Kfgp2qSXSp16GvybU4HdtCx+L4+BRd/hFvqX7OnzEF+3I20RniPto/MmNvB2khq8njdFSXdvrNxCzi6TeSlHdoGsTf8MdJJ3ecxP/p2WoCzm8A8p6utU7bY4dSpLKiUiNXIN/Hj+bzzu35fLuNRtoIHu7p67P6+n7dUyg0CoUP/B4+3mo5v7STkoKkVusYJVl97vnZbTe//Sf8rmfLm5ivMn/JPEQrxJlVOGfY3dLbM3I252eO1nQF3i7WPbPXO6lk5wa5ZpfWKs3K3OBmV2RzbFdfvReS6BfoOUXXFfdGRSdGUmDRFE2e3N2sgL7t/lTR3fdNxTCUP6FMZlhACwwZzfFm/FQ23PdQXFdonxju2wJ7gc4F4H6dJmMLaG8B3t+l46ohb6GTt8jGnZR2FQUH4M4HYEA1DBUG3Kv5sEmZ/DXf8fAtYc19fXoGctoILPHxNBXELUzH4gxYtM0sZa4Dyd/G3EPfgbST8U5SXpjpSquI9d7UjqBcu7X0XBNB5GZnGJvvCTzJLkTdTqPVZWpexkVqWyA+um9He9QNZqFg4i1mAeed30DoRhUAW509eJvzCN7uqlZIVSQrFJGfpQAwlcjPdVDVfduC4isEfeUZi5oTHVfwS3EaxeI+LJjOKW+RWiJnazTGaj7cutX5F3Roq5JQ2pcUbmOHVF1SwkGl3TCza+0SSHERzSWmi+lugR2TEX2RuBDX01iXEZqZQcQKXXF1iuyZ+cCuIZosNGiy8LVbGsRyf+WnEYcfpdt9VFJj5FOqa2fvUMNPM2izePFO9KwqvkdnvCeq7lmaDSWiNI5f+oTcRVioh4pME/a/Bp6AvuvLK16h2DlzqBvbx9R5PR+7rF+2/WPOoMtH8NE1irk7Ll/36g2FOPpRPL/BTQhsmqohgH1BNsUJAgdg3yCnha4OadzgcJeI996qqrdWnP+I5/NxPFBxPqIDaIpCd3cX/7YdhI89c9h/Z+6Q+wnNWILwZCq4ALUMGRO533kanbedp/F+56vbcGkbYLf4/J+QJ0kA5AEZTdGoL0L0rwTVdy46pKScyRY6ptFxOB03gy6SIP4LqN7XsoElAXYtFF5YB8S5w+tDZPmdrLM/J+RJNojuCrBswN0jBu7myPPPE44jZ2Rdl8+Q9r5/QZ4iWdCreZ+lU17FOSvKtiMpGBhmtn9xsz1/vr35i7/sICs1aUesV5uSYzG5jZDsLA4PcSfk2I42Twfp5u73Qx4TB12pejUzfTuvcZ1EuQra7KXK/hsj/+0RT/Wabg8zq1cutRsjCxtXLVl1YNWSqxoLRxr20pVj/aP9/aPXU9CfrVQ+X6ngH2ZTVu2OzXfUGqlcLtXwUCuV/buBVRtXDgys3LhqYO3QkiG4mPb/B0fIz8kmr14tl6i7ohEBMjxQYs77fwnOSvFerhqet4IDBLR9tk36vxOgDXL6ECdfupHn2fsCocB9LC9sdGXuSZZ9kpcu3ShQcniafCiAvtXFA4c+lSUAN3Q3+uT/BzxDuncAAHicY2BkYGAA4qmuv3vi+W2+MnCzMIDAw51rxRD0/yUsjMwxQC4HAxNIFABBdgrdAHicY2BkYGBu+N/AEMOSxMDw/z8LIwNQBAUoAQB7ogTseJxjYWBgYKE1TiKsBgAzHgDrAAAAAAAAAKgA0gEUAU4BmAJSAwYDcgO8BCYEpgUABUoF2AZABwoHTAeqB+4IMAiECOYJxAoWCtALcgvSDEIMWgyeDOgNNA2IAAB4nGNgZGBgUGJYxcDFAAJMQMwFZv8H8xkAHWAB7QAAAHichZE9bsJAEIWfwZAElChKpDRpVikoEsn8lEipUKCnoAez5ke211ovSNQ5TY6QE+QI6Whzikh52EMDRbza2W/evpkdyQDusIeH8rvnLtnDJbOSK7jAo3CV+pOwT34WrqGJnnCd+qtwAy94E26yY8YOnn/FrIV3YQ+3+BCu4AafwlXqX8I++Vu4hgf8CNep/wo3MPGuhZtoeeHA6qnTczXbqVVo0sik7niO9WITT+2pPNE2X5lUdYPOURrpVNtjm3y76DkXqciaRA15q+PYqMyatQ5dsHQu67fbkehBaBIMYKExhWOcQ2GGHeMKIQxSREV0Z/mY7gU2iFlp/3VP6LbIqR9yhS4CdM5cI7rSwnk6TY4tX+tRdXQrbsuahDSUWs1JYrLiDzzcramE1AMsi6oMfbS5ohN/UMyQ/AHYk29XeJxtT8lSwzAMzStNnJay72uhnPVRjq1OPTiRx3Fa+HvsgSO6SE96y6iaVb+1rP6vDWY4whw1Gii0WGCJY6xwglOc4RwXuMQVrnGDW9zhHg94xBOe8YJXrPGGd2zwUbU0Tt1WYq9oK95yXP11ksDDkrS1ZHbOW0XjwSWzm1PSnaJuSkmGhtwQprTIFDafnXw1FLV1UueWWNEw9R1HRVPwom2m6dHobN7QGLThhox4iXVB2Ut7jmlOUQ4tWbd3tkhH9mxyQop6GLdlw9YlKRdfGHW+MNdkc2CeXZ9jbdYUZCR8K3J9kOKbX2kpRN47PtTUy56r6ge3iFdEAAAA) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-group:before{content:"\\eb77"}.icon-add-child:before{content:"\\e789"}.icon-switch:before{content:"\\e77c"}.icon-tab:before{content:"\\e77b"}.icon-button:before{content:"\\e77e"}.icon-input:before{content:"\\e77f"}.icon-checkbox:before{content:"\\e780"}.icon-radio:before{content:"\\e781"}.icon-rate:before{content:"\\e782"}.icon-number:before{content:"\\e783"}.icon-upload:before{content:"\\e784"}.icon-cascader:before{content:"\\e785"}.icon-space:before{content:"\\e786"}.icon-color:before{content:"\\e787"}.icon-span:before{content:"\\e788"}.icon-alert:before{content:"\\e78a"}.icon-row:before{content:"\\e78b"}.icon-divider:before{content:"\\e78d"}.icon-select:before{content:"\\e78e"}.icon-transfer:before{content:"\\e78f"}.icon-editor:before{content:"\\e790"}.icon-slider:before{content:"\\e791"}.icon-tree:before{content:"\\e792"}.icon-date:before{content:"\\e793"}.icon-time:before{content:"\\e794"}.icon-delete:before{content:"\\e770"}.icon-copy:before{content:"\\e771"}.icon-import:before{content:"\\e773"}.icon-add:before{content:"\\e774"}.icon-preview:before{content:"\\e776"}.icon-move:before{content:"\\e777"}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as yn, openBlock as nt, createElementBlock as $t, createElementVNode as it, markRaw as ad, computed as oo, unref as ld, isRef as $v, ref as qi, resolveComponent as tt, TransitionGroup as jv, h as ta, nextTick as Or, toRefs as Ul, getCurrentInstance as Vv, reactive as rl, provide as Tf, toRef as ki, watch as il, createBlock as Un, normalizeStyle as Yv, withCtx as Ve, createVNode as $e, Fragment as sd, renderList as ud, toDisplayString as Gt, normalizeClass as Xo, renderSlot as fd, createTextVNode as Wn, createCommentVNode as vn, withDirectives as $o, vShow as jo, inject as Qv, withModifiers as kv, pushScopeId as dd, popScopeId as cd, mergeProps as Gv } from "vue";
import vd from "@form-create/element-ui";
function wf({ t: u }) {
  return [
    {
      type: "radio",
      field: "labelPosition",
      value: "left",
      title: u("form.labelPosition"),
      options: [
        { value: "right", label: "right" },
        { value: "left", label: "left" },
        { value: "top", label: "top" }
      ]
    },
    {
      type: "radio",
      field: "size",
      value: "small",
      title: u("form.size"),
      options: [
        { value: "large", label: "large" },
        { value: "default", label: "default" },
        { value: "small", label: "small" }
      ]
    },
    {
      type: "input",
      field: "labelWidth",
      value: "125px",
      title: u("form.labelWidth")
    },
    {
      type: "switch",
      field: "hideRequiredAsterisk",
      value: !1,
      title: u("form.hideRequiredAsterisk")
    },
    {
      type: "switch",
      field: "showMessage",
      value: !0,
      title: u("form.showMessage")
    },
    {
      type: "switch",
      field: "inlineMessage",
      value: !1,
      title: u("form.inlineMessage")
    },
    {
      type: "switch",
      field: "formCreateSubmitBtn",
      value: !0,
      title: u("form.submitBtn")
    },
    {
      type: "switch",
      field: "formCreateResetBtn",
      value: !1,
      title: u("form.resetBtn")
    },
    {
      type: "switch",
      field: "inline",
      value: !1,
      title: u("form.inline")
    }
  ];
}
const qn = (u, A) => {
  const l = u.__vccOpts || u;
  for (const [o, t] of A)
    l[o] = t;
  return l;
}, Kv = yn({
  name: "IconRefresh"
}), Xv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, Jv = /* @__PURE__ */ it("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), Zv = [
  Jv
];
function qv(u, A, l, o, t, s) {
  return nt(), $t("svg", Xv, Zv);
}
const _v = /* @__PURE__ */ qn(Kv, [["render", qv]]);
function Gi({ t: u }) {
  return [
    {
      type: "input",
      field: "field",
      value: "",
      title: u("form.field")
    },
    {
      type: "input",
      field: "title",
      value: "",
      title: u("form.title")
    },
    {
      type: "input",
      field: "info",
      value: "",
      title: u("form.info")
    },
    {
      type: "Struct",
      field: "_control",
      value: [],
      title: u("form.control"),
      props: {
        defaultValue: [],
        validate(A) {
          return Array.isArray(A) ? A.length ? !A.some(({ rule: l }) => !Array.isArray(l)) : !0 : !1;
        }
      }
    },
    {
      type: "col",
      props: {
        span: 24
      },
      children: [
        {
          type: "el-button",
          props: {
            type: "primary",
            size: "small"
          },
          inject: !0,
          on: {
            click({ $f: A }) {
              const l = A.activeRule;
              l && (l.__fc__.updateKey(), l.value = void 0, l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [{ type: "i", class: "fc-icon icon-delete" }, u("form.clear")]
        },
        {
          type: "el-button",
          props: {
            type: "success",
            size: "small",
            icon: ad(_v)
          },
          inject: !0,
          on: {
            click({ $f: A }) {
              const l = A.activeRule;
              l && (l.__fc__.updateKey(!0), l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [u("form.refresh")]
        }
      ]
    }
  ];
}
function Df() {
  return [
    {
      type: "validate",
      field: "validate",
      value: []
    }
  ];
}
function Ki(u, A, l) {
  u[A] = l;
}
const xt = {
  type(u, A) {
    return Object.prototype.toString.call(u) === "[object " + A + "]";
  },
  Undef(u) {
    return u == null;
  },
  Element(u) {
    return typeof u == "object" && u !== null && u.nodeType === 1 && !xt.Object(u);
  },
  trueArray(u) {
    return Array.isArray(u) && u.length > 0;
  },
  Function(u) {
    const A = this.getType(u);
    return A === "Function" || A === "AsyncFunction";
  },
  getType(u) {
    const A = Object.prototype.toString.call(u);
    return /^\[object (.*)\]$/.exec(A)[1];
  },
  empty(u) {
    return u == null || Array.isArray(u) && Array.isArray(u) && !u.length ? !0 : typeof u == "string" && !u;
  }
};
["Date", "Object", "String", "Boolean", "Array", "Number"].forEach((u) => {
  xt[u] = function(A) {
    return xt.type(A, u);
  };
});
function pd(u, A) {
  return {}.hasOwnProperty.call(u, A);
}
function hd(u, A = {}, l) {
  let o = !1;
  for (let t in A)
    if (Object.prototype.hasOwnProperty.call(A, t)) {
      let s = A[t];
      if ((o = Array.isArray(s)) || xt.Object(s)) {
        let f = u[t] === void 0;
        if (o)
          o = !1, f && Ki(u, t, []);
        else if (s._clone && l !== void 0)
          if (l)
            s = s.getRule(), f && Ki(u, t, {});
          else {
            Ki(u, t, s._clone());
            continue;
          }
        else
          f && Ki(u, t, {});
        u[t] = hd(u[t], s, l);
      } else
        Ki(u, t, s), xt.Undef(s) || (xt.Undef(s.__json) || (u[t].__json = s.__json), xt.Undef(s.__origin) || (u[t].__origin = s.__origin));
    }
  return l !== void 0 && Array.isArray(u) ? u.filter((t) => !t || !t.__ctrl) : u;
}
function pr(u) {
  return hd({}, { value: u }).value;
}
function ep(u) {
  const A = u.replace(/(-[a-z])/g, function(l) {
    return l.replace("-", "").toLocaleUpperCase();
  });
  return zl(A);
}
function zl(u) {
  return u.replace(u[0], u[0].toLowerCase());
}
let tp = 0;
function bt() {
  return "F" + Math.random().toString(36).substr(3, 3) + Number(`${Date.now()}${++tp}`).toString(36);
}
function np(u, A, l) {
  return `[form-create ${u}]: ${A}` + (l ? `

rule: ` + JSON.stringify(l.getRule ? l.getRule() : l) : "");
}
function rp(u, A) {
  console.error(np("err", u, A));
}
const Mf = "[[FORM-CREATE-PREFIX-", Rf = "-FORM-CREATE-SUFFIX]]", Pf = "$FN:", If = "$FNX:", Vo = "function";
function Lf(u) {
  return new Function("return " + u)();
}
function ip(u, A) {
  if (u && xt.String(u) && u.length > 4) {
    let l = u.trim(), o = !1;
    try {
      if (l.indexOf(Rf) > 0 && l.indexOf(Mf) === 0)
        l = l.replace(Rf, "").replace(Mf, ""), o = !0;
      else if (l.indexOf(Pf) === 0)
        l = l.replace(Pf, ""), o = !0;
      else {
        if (l.indexOf(If) === 0)
          return l = Lf("function($inject){" + l.replace(If, "") + "}"), l.__json = u, l.__inject = !0, l;
        !A && l.indexOf(Vo) === 0 && l !== Vo && (o = !0);
      }
      if (!o)
        return u;
      const t = Lf(l.indexOf(Vo) === -1 && l.indexOf("(") !== 0 ? Vo + " " + l : l);
      return t.__json = u, t;
    } catch (t) {
      rp(`\u89E3\u6790\u5931\u8D25:${l}

err: ${t}`);
      return;
    }
  }
  return u;
}
const op = {
  name: "zh-cn",
  form: {
    field: "\u5B57\u6BB5 ID",
    title: "\u5B57\u6BB5\u540D\u79F0",
    info: "\u63D0\u793A\u4FE1\u606F",
    control: "\u8054\u52A8\u6570\u636E",
    clear: "\u6E05\u7A7A\u503C",
    refresh: "\u5237\u65B0",
    labelPosition: "\u6807\u7B7E\u4F4D\u7F6E",
    size: "\u8868\u5355\u5C3A\u5BF8",
    labelWidth: "\u6807\u7B7E\u5BBD\u5EA6",
    hideRequiredAsterisk: "\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7",
    showMessage: "\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F",
    inlineMessage: "\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F",
    submitBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u63D0\u4EA4\u6309\u94AE",
    resetBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u91CD\u7F6E\u6309\u94AE",
    submit: "\u63D0\u4EA4",
    reset: "\u91CD\u7F6E",
    inline: "\u884C\u5185\u8868\u5355\u6A21\u5F0F"
  },
  validate: {
    type: "\u5B57\u6BB5\u7C7B\u578B",
    typePlaceholder: "\u8BF7\u9009\u62E9",
    trigger: "\u89E6\u53D1\u65B9\u5F0F",
    mode: "\u9A8C\u8BC1\u65B9\u5F0F",
    modes: {
      required: "\u5FC5\u586B",
      pattern: "\u6B63\u5219\u8868\u8FBE\u5F0F",
      min: "\u6700\u5C0F\u503C",
      max: "\u6700\u5927\u503C",
      len: "\u957F\u5EA6"
    },
    message: "\u9519\u8BEF\u4FE1\u606F",
    auto: "\u81EA\u52A8\u83B7\u53D6",
    autoRequired: "\u8BF7\u8F93\u5165{title}",
    autoMode: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684{title}",
    requiredPlaceholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u8BED"
  },
  tableOptions: {
    handle: "\u64CD\u4F5C",
    add: "\u6DFB\u52A0"
  },
  struct: {
    title: "\u7F16\u8F91\u6570\u636E",
    submit: "\u786E \u5B9A",
    cancel: "\u53D6 \u6D88",
    error: "\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u6709\u8BEF"
  },
  fetch: {
    action: "\u63A5\u53E3",
    actionRequired: "\u8BF7\u6570\u636E\u63A5\u53E3",
    method: "\u8BF7\u6C42\u65B9\u5F0F",
    dataType: "\u63D0\u4EA4\u65B9\u5F0F",
    data: "\u9644\u5E26\u6570\u636E",
    headers: "header\u4FE1\u606F",
    parse: "\u89E3\u6790\u51FD\u6570",
    parseInfo: "\u89E3\u6790\u63A5\u53E3\u6570\u636E\uFF0C\u8FD4\u56DE\u7EC4\u4EF6\u6240\u9700\u7684\u6570\u636E\u7ED3\u6784",
    parseValidate: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u89E3\u6790\u51FD\u6570"
  },
  designer: {
    preview: "\u9884 \u89C8",
    clear: "\u6E05 \u7A7A",
    clearConfirm: "\u6E05\u7A7A",
    clearCancel: "\u53D6\u6D88",
    clearConfirmTitle: "\u6E05\u7A7A\u540E\u5C06\u4E0D\u80FD\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u6E05\u7A7A\u5417\uFF1F",
    config: {
      component: "\u7EC4\u4EF6\u914D\u7F6E",
      form: "\u8868\u5355\u914D\u7F6E",
      rule: "\u57FA\u7840\u914D\u7F6E",
      props: "\u5C5E\u6027\u914D\u7F6E",
      validate: "\u9A8C\u8BC1\u914D\u7F6E"
    }
  },
  menu: {
    main: "\u8868\u5355\u7EC4\u4EF6",
    aide: "\u8F85\u52A9\u7EC4\u4EF6",
    layout: "\u5E03\u5C40\u7EC4\u4EF6"
  },
  props: {
    required: "\u662F\u5426\u5FC5\u586B",
    options: "\u9009\u9879\u6570\u636E",
    option: "\u9009\u9879",
    optionsType: {
      json: "JSON\u6570\u636E",
      fetch: "\u63A5\u53E3\u6570\u636E",
      struct: "\u9759\u6001\u6570\u636E"
    }
  },
  components: {
    group: {
      name: "\u5B50\u8868\u5355",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        syncDisabled: "\u662F\u5426\u4E0E\u5B50\u8868\u5355\u5F3A\u5236\u540C\u6B65 disabled \u72B6\u6001",
        expand: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879",
        button: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE",
        sortBtn: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE",
        min: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879",
        max: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879",
        mode: "\u7EC4\u4EF6\u7C7B\u578B",
        modeOpts: {
          subform: "\u5BF9\u8C61",
          group: "\u6570\u7EC4"
        }
      }
    },
    radio: {
      name: "\u5355\u9009\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        type: "\u6309\u94AE\u5F62\u5F0F",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    checkbox: {
      name: "\u591A\u9009\u6846",
      props: {
        type: "\u6309\u94AE\u7C7B\u578B",
        disabled: "\u662F\u5426\u7981\u7528",
        min: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        max: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    input: {
      name: "\u8F93\u5165\u6846",
      props: {
        type: "\u7C7B\u578B",
        maxlength: "\u6700\u5927\u8F93\u5165\u957F\u5EA6",
        minlength: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
        showWordLimit: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        clearable: "\u662F\u5426\u53EF\u6E05\u7A7A",
        showPassword: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807",
        disabled: "\u7981\u7528",
        prefixIcon: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807",
        suffixIcon: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807",
        rowInfo: '\u53EA\u5BF9 type="textarea" \u6709\u6548',
        rows: "\u8F93\u5165\u6846\u884C\u6570",
        autocomplete: "\u81EA\u52A8\u8865\u5168",
        readonly: "\u662F\u5426\u53EA\u8BFB",
        resize: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
        autofocus: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"
      }
    },
    inputNumber: {
      name: "\u8BA1\u6570\u5668",
      props: {
        min: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C",
        max: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C",
        step: "\u8BA1\u6570\u5668\u6B65\u957F",
        stepStrictly: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570",
        disabled: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668",
        controls: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
        controlsPosition: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
        placeholder: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder"
      }
    },
    select: {
      name: "\u9009\u62E9\u5668",
      props: {
        multiple: "\u662F\u5426\u591A\u9009",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879",
        collapseTags: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A",
        multipleLimit: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236",
        autocomplete: "autocomplete \u5C5E\u6027",
        placeholder: "\u5360\u4F4D\u7B26",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        allowCreate: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE",
        noMatchText: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57",
        noDataText: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57",
        reserveKeyword: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD",
        defaultFirstOption: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879",
        popperAppendToBody: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        automaticDropdown: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355"
      }
    },
    switch: {
      name: "\u5F00\u5173",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        width: "\u5BBD\u5EA6\uFF08px\uFF09",
        activeText: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        inactiveText: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        activeValue: "switch \u6253\u5F00\u65F6\u7684\u503C",
        inactiveValue: "switch \u5173\u95ED\u65F6\u7684\u503C",
        activeColor: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272",
        inactiveColor: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
      }
    },
    slider: {
      name: "\u6ED1\u5757",
      props: {
        min: "\u6700\u5C0F\u503C",
        max: "\u6700\u5927\u503C",
        disabled: "\u662F\u5426\u7981\u7528",
        step: "\u6B65\u957F",
        showInput: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548",
        showInputControls: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
        showStops: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9",
        range: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9",
        vertical: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F",
        height: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
      }
    },
    timePicker: {
      name: "\u65F6\u95F4\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        isRange: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9",
        arrowControl: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    datePicker: {
      name: "\u65E5\u671F\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        type: "\u663E\u793A\u7C7B\u578B",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        format: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        rangeSeparator: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26",
        unlinkPanels: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    rate: {
      name: "\u8BC4\u5206",
      props: {
        max: "\u6700\u5927\u5206\u503C",
        disabled: "\u662F\u5426\u4E3A\u53EA\u8BFB",
        allowHalf: "\u662F\u5426\u5141\u8BB8\u534A\u9009",
        voidColor: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        disabledVoidColor: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        voidIconClass: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        disabledVoidIconClass: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        showScore: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F",
        textColor: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272",
        scoreTemplate: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    },
    colorPicker: {
      name: "\u989C\u8272\u9009\u62E9\u5668",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        showAlpha: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9",
        colorFormat: "\u989C\u8272\u7684\u683C\u5F0F"
      }
    },
    row: {
      name: "\u6805\u683C\u5E03\u5C40",
      props: {
        gutter: "\u6805\u683C\u95F4\u9694",
        type: "flex\u5E03\u5C40\u6A21\u5F0F",
        justify: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
        align: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F"
      }
    },
    col: {
      name: "\u683C\u5B50",
      props: {
        span: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570",
        offset: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570",
        push: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570",
        pull: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570"
      }
    },
    tab: {
      name: "\u6807\u7B7E\u9875",
      props: {
        type: "\u98CE\u683C\u7C7B\u578B",
        closable: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED",
        tabPosition: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
        stretch: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00"
      }
    },
    "tab-pane": {
      name: "\u6807\u7B7E\u9875",
      props: {
        label: "\u9009\u9879\u5361\u6807\u9898",
        disabled: "\u662F\u5426\u7981\u7528",
        name: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D",
        lazy: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
      }
    },
    "el-divider": {
      name: "\u5206\u5272\u7EBF",
      props: {
        direction: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
        formCreateChild: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848",
        contentPosition: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E"
      }
    },
    cascader: {
      name: "\u7EA7\u8054\u9009\u62E9\u5668",
      props: {
        props: "\u914D\u7F6E\u9009\u9879",
        size: "\u5C3A\u5BF8",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879",
        showAllLevels: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        collapseTags: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag",
        separator: "\u9009\u9879\u5206\u9694\u7B26"
      }
    },
    upload: {
      name: "\u4E0A\u4F20",
      props: {
        uploadType: "\u4E0A\u4F20\u7C7B\u578B",
        action: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)",
        headers: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
        multiple: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6",
        data: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
        name: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D",
        withCredentials: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F",
        accept: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09",
        autoUpload: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
        disabled: "\u662F\u5426\u7981\u7528",
        limit: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570"
      }
    },
    "el-transfer": {
      name: "\u7A7F\u68AD\u6846",
      props: {
        data: "Transfer \u7684\u6570\u636E\u6E90",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        filterPlaceholder: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26",
        targetOrder: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
        titles: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
        buttonTexts: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
        format: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
        props: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
        leftDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
        rightDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4"
      }
    },
    tree: {
      name: "\u6811\u5F62\u63A7\u4EF6",
      props: {
        emptyText: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C",
        props: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        renderAfterExpand: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9",
        defaultExpandAll: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9",
        expandOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        checkOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002",
        autoExpandParent: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9",
        checkStrictly: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false",
        accordion: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00",
        indent: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20",
        iconClass: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807",
        nodeKey: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    },
    "el-alert": {
      name: "\u63D0\u793A",
      description: "description",
      props: {
        title: "\u6807\u9898",
        type: "\u4E3B\u9898",
        description: "\u8F85\u52A9\u6027\u6587\u5B57",
        closable: "\u662F\u5426\u53EF\u5173\u95ED",
        center: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D",
        closeText: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C",
        showIcon: "\u662F\u5426\u663E\u793A\u56FE\u6807",
        effect: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898"
      }
    },
    span: {
      name: "\u6587\u5B57",
      props: {
        formCreateTitle: "\u6807\u9898",
        formCreateChild: "\u5185\u5BB9"
      }
    },
    div: {
      name: "\u95F4\u8DDD",
      props: {
        height: "\u9AD8\u5EA6"
      }
    },
    "el-button": {
      name: "\u6309\u94AE",
      props: {
        formCreateChild: "\u5185\u5BB9",
        size: "\u5C3A\u5BF8",
        type: "\u7C7B\u578B",
        plain: "\u662F\u5426\u6734\u7D20\u6309\u94AE",
        round: "\u662F\u5426\u5706\u89D2\u6309\u94AE",
        circle: "\u662F\u5426\u5706\u5F62\u6309\u94AE",
        loading: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001",
        disabled: "\u662F\u5426\u7981\u7528\u72B6\u6001",
        icon: "\u56FE\u6807\u7C7B\u540D"
      }
    },
    "fc-editor": {
      name: "\u5BCC\u6587\u672C\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528"
      }
    }
  }
};
function Kt() {
  return {
    type: "Required",
    field: "formCreate$required",
    title: "\u662F\u5426\u5FC5\u586B"
  };
}
function ap(u, A) {
  return window.console.log("formCreate" + Fr(A).replace(".", ">")), {
    type: "TableColumnOptions",
    title: "\u5B57\u6BB5",
    field: "formCreate" + Fr(A).replace(".", ">"),
    props: { defaultValue: [] }
  };
}
function pi(u, A, l) {
  const o = [
    { label: u("props.optionsType.json"), value: 0 },
    { label: u("props.optionsType.fetch"), value: 1 }
  ], t = [
    {
      value: 0,
      rule: [
        {
          type: "Struct",
          field: "formCreate" + Fr(A).replace(".", ">"),
          props: { defaultValue: [] }
        }
      ]
    },
    {
      value: 1,
      rule: [
        {
          type: "Fetch",
          field: "formCreateEffect>fetch",
          props: {
            to: A
          }
        }
      ]
    }
  ];
  return l !== !1 && (o.splice(0, 0, { label: u("props.optionsType.struct"), value: 2 }), t.push({
    value: 2,
    rule: [
      {
        type: "TableOptions",
        field: "formCreate" + Fr(A).replace(".", ">"),
        props: { defaultValue: [] }
      }
    ]
  })), {
    type: "radio",
    title: u("props.options"),
    field: "_optionType",
    value: l !== !1 ? 2 : 0,
    options: o,
    props: {
      type: "button"
    },
    control: t
  };
}
function Fr(u) {
  return u.replace(u[0], u[0].toLocaleUpperCase());
}
const _i = function(u) {
  const A = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(u));
  return A && Nf[A[1].toLowerCase()] ? Nf[A[1].toLowerCase()](u) : u;
}, Nf = {
  object: function(u) {
    var A = [];
    for (var l in u)
      !pd(u, l) || A.push(
        _i(l) + ": " + (u[l] != null ? _i(u[l]) : "null")
      );
    return `{
 ` + A.join(`,
 `) + `
}`;
  },
  function: function(u) {
    u = "" + u;
    var A = /^ *([\w]+) *\(/.exec(u);
    return A && A[1] !== "function" ? "function " + u : u;
  },
  array: function(u) {
    for (var A = 0, l = []; A < u.length; A++)
      l[A] = u[A] != null ? _i(u[A]) : "null";
    return "[" + l.join(", ") + "]";
  },
  string: function(u) {
    for (var A = u.split(""), l = 0; l < A.length; l++) {
      var o = A[l];
      o >= " " ? o === "\\" ? A[l] = "\\\\" : o === '"' && (A[l] = '\\"') : A[l] = o === `
` ? "\\n" : o === "\r" ? "\\r" : o === "	" ? "\\t" : o === "\b" ? "\\b" : o === "\f" ? "\\f" : (o = o.charCodeAt(), "\\u00" + (o > 15 ? 1 : 0) + o % 16);
    }
    return '"' + A.join("") + '"';
  }
}, gd = function(u) {
  if (u && typeof u == "object") {
    for (let A in u)
      if (Object.prototype.hasOwnProperty.call(u, A)) {
        let l = u[A];
        (Array.isArray(l) || xt.Object(l)) && gd(l), xt.String(l) && (u[A] = ip(l));
      }
  }
  return u;
};
function lp(u, A, l) {
  A = (A || "").split(".");
  let o = 0, t = A.length;
  for (; u != null && o < t; )
    u = u[A[o++]];
  return o && o === t && u !== void 0 ? u : l;
}
const sp = (u) => (A, l) => up(A, l, ld(u)), up = (u, A, l) => lp(l, u, "").replace(
  /\{(\w+)\}/g,
  (o, t) => {
    var s;
    return `${(s = A == null ? void 0 : A[t]) != null ? s : `{${t}}`}`;
  }
), fp = (u) => {
  const A = oo(() => ld(u).name), l = oo(() => Fr(ep(A.value || ""))), o = $v(u) ? u : qi(u);
  return {
    lang: A,
    name: l,
    locale: o,
    t: sp(u)
  };
}, Wl = (u) => fp(oo(() => u.value || op)), Je = (u, A, l) => l.map((o) => (o.field === "formCreate$required" ? o.title = u("props.required") || o.title : o.field && o.field !== "_optionType" && (o.title = u("components." + A + "." + o.field) || o.title), o)), dp = "\u5355\u9009\u6846", ol = "radio", $l = {
  icon: "icon-radio",
  label: dp,
  name: ol,
  rule({ t: u }) {
    const A = u("props.option");
    return {
      type: ol,
      field: bt(),
      title: u("components.radio.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: A + l,
        value: l
      }))
    };
  },
  props(u, { t: A }) {
    return Je(A, ol + ".props", [
      Kt(),
      pi(A, "options"),
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u5F62\u5F0F",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "input", field: "textColor", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272" },
      {
        type: "input",
        field: "fill",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    ]);
  }
}, cp = "\u591A\u9009\u6846", al = "checkbox", jl = {
  icon: "icon-checkbox",
  label: cp,
  name: al,
  rule({ t: u }) {
    const A = u("props.option");
    return {
      type: al,
      field: bt(),
      title: u("components.checkbox.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: A + l,
        value: l
      }))
    };
  },
  props(u, { t: A }) {
    return Je(A, al + ".props", [
      Kt(),
      pi(A, "options"),
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u7C7B\u578B",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "inputNumber",
        field: "min",
        title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        props: { min: 0 }
      },
      { type: "inputNumber", field: "max", title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF", props: { min: 0 } },
      {
        type: "input",
        field: "textColor",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272"
      },
      { type: "input", field: "fill", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272" }
    ]);
  }
}, vp = "\u8F93\u5165\u6846", ll = "input", Vl = {
  icon: "icon-input",
  label: vp,
  name: ll,
  rule({ t: u }) {
    return {
      type: ll,
      field: bt(),
      title: u("components.input.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, ll + ".props", [Kt(), {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "text", value: "text" }, {
        label: "textarea",
        value: "textarea"
      }, { label: "number", value: "number" }, { label: "password", value: "password" }]
    }, { type: "inputNumber", field: "maxlength", title: "\u6700\u5927\u8F93\u5165\u957F\u5EA6", props: { min: 0 } }, {
      type: "inputNumber",
      field: "minlength",
      title: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
      props: { min: 0 }
    }, { type: "switch", field: "showWordLimit", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1" }, {
      type: "input",
      field: "placeholder",
      title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C"
    }, { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u6E05\u7A7A" }, {
      type: "switch",
      field: "showPassword",
      title: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807"
    }, { type: "switch", field: "disabled", title: "\u7981\u7528" }, {
      type: "input",
      field: "prefixIcon",
      title: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807"
    }, { type: "input", field: "suffixIcon", title: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807" }, {
      type: "inputNumber",
      field: "rows",
      info: A("components.input.props.rowsInfo"),
      title: "\u8F93\u5165\u6846\u884C\u6570",
      props: { min: 0 }
    }, {
      type: "select",
      field: "autocomplete",
      title: "\u81EA\u52A8\u8865\u5168",
      options: [{ label: "on", value: "on" }, { label: "off", value: "off" }]
    }, { type: "switch", field: "readonly", title: "\u662F\u5426\u53EA\u8BFB" }, {
      type: "select",
      field: "resize",
      title: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
      options: [{ label: "none", value: "none" }, { label: "both", value: "both" }, {
        label: "horizontal",
        value: "horizontal"
      }, { label: "vertical", value: "vertical" }]
    }, { type: "switch", field: "autofocus", title: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9" }]);
  }
}, pp = "\u8BA1\u6570\u5668", sl = "inputNumber", Yl = {
  icon: "icon-number",
  label: pp,
  name: sl,
  rule({ t: u }) {
    return {
      type: sl,
      field: bt(),
      title: u("components.inputNumber.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, sl + ".props", [Kt(), {
      type: "inputNumber",
      field: "min",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C"
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C"
    }, { type: "inputNumber", field: "step", title: "\u8BA1\u6570\u5668\u6B65\u957F", props: { min: 0 } }, {
      type: "switch",
      field: "stepStrictly",
      title: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668" }, {
      type: "switch",
      field: "controls",
      title: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
      value: !0
    }, {
      type: "select",
      field: "controlsPosition",
      title: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
      options: [{ label: "default", value: "" }, { label: "right", value: "right" }]
    }, { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder" }]);
  }
}, hp = "\u9009\u62E9\u5668", ul = "select", Ql = {
  icon: "icon-select",
  label: hp,
  name: ul,
  rule({ t: u }) {
    const A = u("props.option");
    return {
      type: ul,
      field: bt(),
      title: u("components.select.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: A + l,
        value: l
      }))
    };
  },
  watch: {
    multiple({ rule: u }) {
      u.key = bt();
    }
  },
  props(u, { t: A }) {
    return Je(A, ul + ".props", [
      Kt(),
      pi(A, "options"),
      { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "collapseTags",
        title: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A"
      },
      { type: "inputNumber", field: "multipleLimit", title: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236", props: { min: 0 } },
      {
        type: "input",
        field: "autocomplete",
        title: "autocomplete \u5C5E\u6027"
      },
      { type: "input", field: "placeholder", title: "\u5360\u4F4D\u7B26" },
      {
        type: "switch",
        field: "filterable",
        title: "\u662F\u5426\u53EF\u641C\u7D22"
      },
      { type: "switch", field: "allowCreate", title: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE" },
      {
        type: "input",
        field: "noMatchText",
        title: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57"
      },
      {
        type: "switch",
        field: "remote",
        title: "\u5176\u4E2D\u7684\u9009\u9879\u662F\u5426\u4ECE\u670D\u52A1\u5668\u8FDC\u7A0B\u52A0\u8F7D"
      },
      {
        type: "Struct",
        field: "remoteMethod",
        title: "\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5"
      },
      { type: "input", field: "noDataText", title: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57" },
      {
        type: "switch",
        field: "reserveKeyword",
        title: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD"
      },
      { type: "switch", field: "defaultFirstOption", title: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879" },
      {
        type: "switch",
        field: "popperAppendToBody",
        title: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        value: !0
      },
      { type: "switch", field: "automaticDropdown", title: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355" }
    ]);
  }
}, gp = "\u5F00\u5173", fl = "switch", kl = {
  icon: "icon-switch",
  label: gp,
  name: fl,
  rule({ t: u }) {
    return {
      type: fl,
      field: bt(),
      title: u("components.switch.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, fl + ".props", [Kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "width",
      title: "\u5BBD\u5EA6\uFF08px\uFF09",
      props: { min: 0 }
    }, { type: "input", field: "activeText", title: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0" }, {
      type: "input",
      field: "inactiveText",
      title: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"
    }, { type: "input", field: "activeValue", title: "switch \u6253\u5F00\u65F6\u7684\u503C" }, {
      type: "input",
      field: "inactiveValue",
      title: "switch \u5173\u95ED\u65F6\u7684\u503C"
    }, { type: "input", field: "activeColor", title: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272" }, {
      type: "input",
      field: "inactiveColor",
      title: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
    }]);
  }
}, mp = "\u6ED1\u5757", dl = "slider", Gl = {
  icon: "icon-slider",
  label: mp,
  name: dl,
  rule({ t: u }) {
    return {
      type: dl,
      field: bt(),
      title: u("components.slider.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, dl + ".props", [Kt(), {
      type: "inputNumber",
      field: "min",
      title: "\u6700\u5C0F\u503C",
      props: { min: 0 }
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u6700\u5927\u503C",
      props: { min: 0 }
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" }, {
      type: "inputNumber",
      field: "step",
      title: "\u6B65\u957F",
      props: { min: 0 }
    }, { type: "switch", field: "showInput", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548" }, {
      type: "switch",
      field: "showInputControls",
      title: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
      value: !0
    }, { type: "switch", field: "showStops", title: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9" }, {
      type: "switch",
      field: "range",
      title: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "vertical", title: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F" }, {
      type: "input",
      field: "height",
      title: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
    }]);
  }
}, yp = "\u65F6\u95F4\u9009\u62E9\u5668", cl = "timePicker", Kl = {
  icon: "icon-time",
  label: yp,
  name: cl,
  rule({ t: u }) {
    return {
      type: cl,
      field: bt(),
      title: u("components.timePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, cl + ".props", [Kt(), {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "switch",
      field: "isRange",
      title: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "arrowControl", title: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9" }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }]
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, Ap = "\u65E5\u671F\u9009\u62E9\u5668", vl = "datePicker", Xl = {
  icon: "icon-date",
  label: Ap,
  name: vl,
  rule({ t: u }) {
    return {
      type: vl,
      field: bt(),
      title: u("components.datePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, vl + ".props", [Kt(), {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, {
      type: "select",
      field: "type",
      title: "\u663E\u793A\u7C7B\u578B",
      options: [{ label: "year", value: "year" }, { label: "month", value: "month" }, {
        label: "date",
        value: "date"
      }, { label: "dates", value: "dates" }, { label: "week", value: "week" }, {
        label: "datetime",
        value: "datetime"
      }, { label: "datetimerange", value: "datetimerange" }, {
        label: "daterange",
        value: "daterange"
      }, { label: "monthrange", value: "monthrange" }]
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "format",
      title: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"
    }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }, { label: "left", value: "left" }]
    }, { type: "input", field: "rangeSeparator", title: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26" }, {
      type: "switch",
      field: "unlinkPanels",
      title: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8"
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, xp = "\u8BC4\u5206", pl = "rate", Jl = {
  icon: "icon-rate",
  label: xp,
  name: pl,
  rule({ t: u }) {
    return {
      type: pl,
      field: bt(),
      title: u("components.rate.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, pl + ".props", [
      Kt(),
      { type: "inputNumber", field: "max", title: "\u6700\u5927\u5206\u503C", props: { min: 0 } },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u4E3A\u53EA\u8BFB"
      },
      { type: "switch", field: "allowHalf", title: "\u662F\u5426\u5141\u8BB8\u534A\u9009" },
      {
        type: "input",
        field: "voidColor",
        title: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272"
      },
      { type: "input", field: "disabledVoidColor", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272" },
      {
        type: "input",
        field: "voidIconClass",
        title: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D"
      },
      { type: "input", field: "disabledVoidIconClass", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D" },
      {
        type: "switch",
        field: "showScore",
        title: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F"
      },
      { type: "input", field: "textColor", title: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272" },
      {
        type: "input",
        field: "scoreTemplate",
        title: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    ]);
  }
}, Sp = "\u989C\u8272\u9009\u62E9\u5668", hl = "colorPicker", Zl = {
  icon: "icon-color",
  label: Sp,
  name: hl,
  rule({ t: u }) {
    return {
      type: hl,
      field: bt(),
      title: u("components.colorPicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, hl + ".props", [Kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "switch",
      field: "showAlpha",
      title: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9"
    }, {
      type: "select",
      field: "colorFormat",
      title: "\u989C\u8272\u7684\u683C\u5F0F",
      options: [{ label: "hsl", value: "hsl" }, { label: "hsv", value: "hsv" }, {
        label: "hex",
        value: "hex"
      }, { label: "rgb", value: "rgb" }]
    }]);
  }
}, bp = "\u6805\u683C\u5E03\u5C40", Of = "row", ql = {
  icon: "icon-row",
  label: bp,
  name: Of,
  mask: !1,
  rule() {
    return {
      type: "FcRow",
      props: {},
      fullWidth: !0,
      children: []
    };
  },
  children: "col",
  childrenLen: 2,
  props(u, { t: A }) {
    return Je(A, Of + ".props", [{
      type: "inputNumber",
      field: "gutter",
      title: "\u6805\u683C\u95F4\u9694",
      props: { min: 0 }
    }, {
      type: "switch",
      field: "type",
      title: "flex\u5E03\u5C40\u6A21\u5F0F",
      props: { activeValue: "flex", inactiveValue: "default" }
    }, {
      type: "select",
      field: "justify",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "start", value: "start" }, { label: "end", value: "end" }, {
        label: "center",
        value: "center"
      }, { label: "space-around", value: "space-around" }, { label: "space-between", value: "space-between" }]
    }, {
      type: "select",
      field: "align",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "top", value: "top" }, { label: "middle", value: "middle" }, {
        label: "bottom",
        value: "bottom"
      }]
    }]);
  }
}, gl = "col", Ff = {
  name: gl,
  label: "\u683C\u5B50",
  drag: !0,
  dragBtn: !1,
  inside: !0,
  mask: !1,
  rule() {
    return {
      type: gl,
      props: { span: 12 },
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, gl + ".props", [
      { type: "slider", field: "span", title: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570", value: 12, props: { min: 0, max: 24 } },
      { type: "slider", field: "offset", title: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "push", title: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "pull", title: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } }
    ]);
  }
}, Ep = "\u6807\u7B7E\u9875", Bf = "tab-pane", Hf = {
  label: Ep,
  name: Bf,
  inside: !0,
  drag: !0,
  dragBtn: !1,
  mask: !1,
  rule({ t: u }) {
    return {
      type: "el-tab-pane",
      props: { label: u("components.el-transfer.name") },
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, Bf + ".props", [{ type: "input", field: "label", title: "\u9009\u9879\u5361\u6807\u9898" }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, { type: "input", field: "name", title: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D" }, {
      type: "switch",
      field: "lazy",
      title: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
    }]);
  }
}, Cp = "\u5206\u5272\u7EBF", ml = "el-divider", _l = {
  icon: "icon-divider",
  label: Cp,
  name: ml,
  rule() {
    return {
      type: ml,
      props: {},
      wrap: { show: !1 },
      native: !1,
      children: [""]
    };
  },
  props(u, { t: A }) {
    return Je(A, ml + ".props", [{
      type: "select",
      field: "direction",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
      options: [{ label: "horizontal", value: "horizontal" }, { label: "vertical", value: "vertical" }]
    }, {
      type: "input",
      field: "formCreateChild",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848"
    }, {
      type: "select",
      field: "contentPosition",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E",
      options: [{ label: "left", value: "left" }, { label: "right", value: "right" }, {
        label: "center",
        value: "center"
      }]
    }]);
  }
}, Tp = "\u7EA7\u8054\u9009\u62E9\u5668", Yo = "cascader", es = {
  icon: "icon-cascader",
  label: Tp,
  name: Yo,
  rule({ t: u }) {
    const A = u("props.option");
    return {
      type: Yo,
      field: bt(),
      title: u("components.cascader.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        options: [1, 2].map((l) => ({
          label: A + l,
          value: l,
          children: []
        }))
      }
    };
  },
  props(u, { t: A }) {
    return Je(A, Yo + ".props", [
      Kt(),
      pi(A, "props.options", !1),
      {
        type: "Object",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879",
        props: {
          rule: Je(A, Yo + ".propsOpt", [{
            type: "select",
            field: "expandTrigger",
            title: "\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F",
            options: [{ label: "click", value: "click" }, { label: "hover", value: "hover" }]
          }, { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" }, {
            type: "switch",
            field: "checkStrictly",
            title: "\u662F\u5426\u4E25\u683C\u7684\u9075\u5B88\u7236\u5B50\u8282\u70B9\u4E0D\u4E92\u76F8\u5173\u8054"
          }, {
            type: "switch",
            field: "emitPath",
            title: "\u5728\u9009\u4E2D\u8282\u70B9\u6539\u53D8\u65F6\uFF0C\u662F\u5426\u8FD4\u56DE\u7531\u8BE5\u8282\u70B9\u6240\u5728\u7684\u5404\u7EA7\u83DC\u5355\u7684\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u82E5\u8BBE\u7F6E false\uFF0C\u5219\u53EA\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C",
            value: !0
          }, { type: "input", field: "value", title: "\u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "value" }, {
            type: "input",
            field: "label",
            title: "\u6307\u5B9A\u9009\u9879\u6807\u7B7E\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "label"
          }, { type: "input", field: "children", title: "\u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "children" }, {
            type: "input",
            field: "disabled",
            title: "\u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "disabled"
          }, { type: "input", field: "leaf", title: "\u6307\u5B9A\u9009\u9879\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C" }])
        }
      },
      {
        type: "select",
        field: "size",
        title: "\u5C3A\u5BF8",
        options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
          label: "small",
          value: "small"
        }]
      },
      { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "showAllLevels",
        title: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        value: !0
      },
      { type: "switch", field: "collapseTags", title: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag" },
      {
        type: "input",
        field: "separator",
        title: "\u9009\u9879\u5206\u9694\u7B26"
      }
    ]);
  }
}, wp = "\u4E0A\u4F20", yl = "upload", ts = {
  icon: "icon-upload",
  label: wp,
  name: yl,
  rule({ t: u }) {
    return {
      type: yl,
      field: bt(),
      title: u("components.upload.name"),
      info: "",
      $required: !1,
      props: {
        action: "",
        onSuccess(A, l) {
          l.url = A.data.url;
        }
      }
    };
  },
  props(u, { t: A }) {
    return Je(A, yl + ".props", [Kt(), {
      type: "select",
      field: "list-type",
      title: "\u4E0A\u4F20\u7C7B\u578B",
      value: "text",
      options: [{ label: "\u6587\u5B57", value: "text" }, {
        label: "\u56FE\u7247",
        value: "picture"
      }, {
        label: "\u5361\u7247",
        value: "picture-card"
      }]
    }, { type: "input", field: "action", title: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)" }, {
      type: "Struct",
      field: "headers",
      title: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
      props: { defaultValue: {} }
    }, { type: "switch", field: "multiple", title: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6" }, {
      type: "Struct",
      field: "data",
      title: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
      props: { defaultValue: {} }
    }, { type: "input", field: "name", title: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D" }, {
      type: "switch",
      field: "withCredentials",
      title: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F"
    }, { type: "input", field: "accept", title: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09" }, {
      type: "switch",
      field: "autoUpload",
      title: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
      value: !0
    }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "limit",
      title: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570",
      props: { min: 0 }
    }]);
  }
}, Dp = "\u7A7F\u68AD\u6846", Al = "el-transfer", Mp = () => {
  const u = [];
  for (let A = 1; A <= 15; A++)
    u.push({
      key: A,
      label: `\u5907\u9009\u9879 ${A}`,
      disabled: A % 4 === 0
    });
  return u;
}, ns = {
  icon: "icon-transfer",
  label: Dp,
  name: Al,
  rule({ t: u }) {
    return {
      type: Al,
      field: bt(),
      title: u("components.el-transfer.name"),
      info: "",
      $required: !1,
      props: {
        data: Mp()
      }
    };
  },
  props(u, { t: A }) {
    return Je(A, Al + ".props", [{
      type: "Struct",
      field: "data",
      title: "Transfer \u7684\u6570\u636E\u6E90",
      props: { defaultValue: [] }
    }, { type: "switch", field: "filterable", title: "\u662F\u5426\u53EF\u641C\u7D22" }, {
      type: "input",
      field: "filterPlaceholder",
      title: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26"
    }, {
      type: "select",
      field: "targetOrder",
      title: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
      info: "\u82E5\u4E3A original\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A push\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A unshift\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D",
      options: [{ label: "original", value: "original" }, {
        label: "push",
        value: "push"
      }, { label: "unshift", value: "unshift" }]
    }, {
      type: "Struct",
      field: "titles",
      title: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "buttonTexts",
      title: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "format",
      title: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "props",
      title: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "leftDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "rightDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }]);
  }
}, Rp = "\u6811\u5F62\u63A7\u4EF6", xl = "tree", rs = {
  icon: "icon-tree",
  label: Rp,
  name: xl,
  rule({ t: u }) {
    const A = u("props.option");
    return {
      type: xl,
      field: bt(),
      title: u("components.tree.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        props: {
          label: "label"
        },
        showCheckbox: !0,
        nodeKey: "id",
        data: [1, 2].map((l) => ({
          label: A + l,
          id: l,
          children: []
        }))
      }
    };
  },
  props(u, { t: A }) {
    return Je(A, xl + ".props", [
      Kt(),
      pi(A, "props.data", !1),
      { type: "input", field: "emptyText", title: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C" },
      {
        type: "Struct",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        props: { defaultValue: {} }
      },
      { type: "switch", field: "renderAfterExpand", title: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "defaultExpandAll",
        title: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9"
      },
      {
        type: "switch",
        field: "expandOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        value: !0
      },
      {
        type: "switch",
        field: "checkOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002"
      },
      { type: "switch", field: "autoExpandParent", title: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "checkStrictly",
        title: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false"
      },
      { type: "switch", field: "accordion", title: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00" },
      {
        type: "inputNumber",
        field: "indent",
        title: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20"
      },
      { type: "input", field: "iconClass", title: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807" },
      {
        type: "input",
        field: "nodeKey",
        title: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    ]);
  }
}, Pp = "\u63D0\u793A", Sl = "el-alert", is = {
  icon: "icon-alert",
  label: Pp,
  name: Sl,
  rule({ t: u }) {
    return {
      type: Sl,
      props: {
        title: u("components.el-alert.name"),
        description: u("components.el-alert.description"),
        type: "success",
        effect: "dark"
      },
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, Sl + ".props", [{ type: "input", field: "title", title: "\u6807\u9898" }, {
      type: "select",
      field: "type",
      title: "\u4E3B\u9898",
      options: [{ label: "success", value: "success" }, { label: "warning", value: "warning" }, {
        label: "info",
        value: "info"
      }, { label: "error", value: "error" }]
    }, { type: "input", field: "description", title: "\u8F85\u52A9\u6027\u6587\u5B57" }, {
      type: "switch",
      field: "closable",
      title: "\u662F\u5426\u53EF\u5173\u95ED",
      value: !0
    }, { type: "switch", field: "center", title: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D", value: !0 }, {
      type: "input",
      field: "closeText",
      title: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C"
    }, { type: "switch", field: "showIcon", title: "\u662F\u5426\u663E\u793A\u56FE\u6807" }, {
      type: "select",
      field: "effect",
      title: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898",
      options: [{ label: "light", value: "light" }, { label: "dark", value: "dark" }]
    }]);
  }
}, Ip = "\u6587\u5B57", bl = "span", os = {
  icon: "icon-span",
  label: Ip,
  name: bl,
  rule({ t: u }) {
    return {
      type: bl,
      title: u("components.span.name"),
      native: !1,
      children: [u("components.span.name")]
    };
  },
  props(u, { t: A }) {
    return Je(A, bl + ".props", [
      {
        type: "input",
        field: "formCreateTitle",
        title: "title"
      },
      {
        type: "input",
        field: "formCreateChild",
        title: "\u5185\u5BB9",
        props: {
          type: "textarea"
        }
      }
    ]);
  }
}, Lp = "\u95F4\u8DDD", El = "div", as = {
  icon: "icon-space",
  label: Lp,
  name: El,
  rule() {
    return {
      type: El,
      wrap: {
        show: !1
      },
      native: !1,
      style: {
        width: "100%",
        height: "20px"
      },
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: A }) {
    return [
      {
        type: "object",
        field: "formCreateStyle",
        native: !0,
        props: {
          rule: Je(A, El + ".props", [
            {
              type: "input",
              field: "height",
              title: "height"
            }
          ])
        }
      }
    ];
  }
}, Np = "\u6807\u7B7E\u9875", Uf = "tab", ls = {
  icon: "icon-tab",
  label: Np,
  name: Uf,
  children: "tab-pane",
  mask: !1,
  rule() {
    return {
      type: "el-tabs",
      style: "width:100%;",
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, Uf + ".props", [{
      type: "select",
      field: "type",
      title: "\u98CE\u683C\u7C7B\u578B",
      options: [{
        label: "card",
        value: "card"
      }, { label: "border-card", value: "border-card" }]
    }, { type: "switch", field: "closable", title: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED" }, {
      type: "select",
      field: "tabPosition",
      title: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
      options: [{ label: "top", value: "top" }, { label: "right", value: "right" }, {
        label: "left",
        value: "left"
      }]
    }, { type: "switch", field: "stretch", title: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00" }]);
  }
}, Op = "\u6309\u94AE", Cl = "el-button", ss = {
  icon: "icon-button",
  label: Op,
  name: Cl,
  mask: !1,
  rule({ t: u }) {
    return {
      type: Cl,
      props: {},
      children: [u("components.el-button.name")]
    };
  },
  props(u, { t: A }) {
    return Je(A, Cl + ".props", [{
      type: "input",
      field: "formCreateChild",
      title: "\u5185\u5BB9"
    }, {
      type: "select",
      field: "size",
      title: "\u5C3A\u5BF8",
      options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
        label: "small",
        value: "small"
      }]
    }, {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "primary", value: "primary" }, {
        label: "success",
        value: "success"
      }, { label: "warning", value: "warning" }, { label: "danger", value: "danger" }, {
        label: "info",
        value: "info"
      }]
    }, { type: "switch", field: "plain", title: "\u662F\u5426\u6734\u7D20\u6309\u94AE" }, {
      type: "switch",
      field: "round",
      title: "\u662F\u5426\u5706\u89D2\u6309\u94AE"
    }, { type: "switch", field: "circle", title: "\u662F\u5426\u5706\u5F62\u6309\u94AE" }, {
      type: "switch",
      field: "loading",
      title: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u72B6\u6001" }, {
      type: "input",
      field: "icon",
      title: "\u56FE\u6807\u7C7B\u540D"
    }]);
  }
}, Fp = "\u5BCC\u6587\u672C\u6846", Tl = "fc-editor", us = {
  icon: "icon-editor",
  label: Fp,
  name: Tl,
  rule({ t: u }) {
    return {
      type: Tl,
      field: bt(),
      title: u("components.fc-editor.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: A }) {
    return Je(A, Tl + ".props", [Kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }]);
  }
}, Bp = "\u5B50\u8868\u5355", zf = "group", fs = {
  icon: "icon-group",
  label: Bp,
  name: zf,
  inside: !1,
  drag: !0,
  dragBtn: !0,
  mask: !1,
  loadRule(u) {
    u.children = u.props.rule || [], u.props || (u.props = {}), u.props.mode = ["fcSubForm", "object", "subForm"].indexOf(u.type) > -1 ? "subForm" : "group", u.type = "FcRow", delete u.props.rule;
  },
  parseRule(u) {
    u.props.rule = u.children, u.type = u.props.mode === "subForm" ? "subForm" : "group", delete u.children, delete u.props.mode;
  },
  rule({ t: u }) {
    return {
      type: "FcRow",
      field: bt(),
      title: u("components.group.name"),
      info: "",
      $required: !1,
      props: {},
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, zf + ".props", [
      Kt(),
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "syncDisabled", title: "\u662F\u5426\u4E0E\u5B50\u8868\u5355\u5F3A\u5236\u540C\u6B65 disabled \u72B6\u6001", value: !0 },
      {
        type: "select",
        field: "mode",
        title: "\u7EC4\u4EF6\u7C7B\u578B",
        options: [{
          label: A("components.group.props.modeOpts.group"),
          value: "group"
        }, { label: A("components.group.props.modeOpts.subform"), value: "subForm" }],
        value: "group"
      },
      { type: "switch", field: "button", title: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE", value: !0 },
      { type: "switch", field: "sortBtn", title: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE", value: !0 },
      { type: "inputNumber", field: "expand", title: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879" },
      { type: "inputNumber", field: "min", title: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879" },
      { type: "inputNumber", field: "max", title: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879" }
    ]);
  }
}, Hp = "\u8868\u5355", Wf = "form", ds = {
  icon: "icon-form",
  label: Hp,
  name: Wf,
  mask: !1,
  inside: !0,
  drag: !0,
  dragBtn: !1,
  rule() {
    return {
      type: "el-form",
      style: {
        width: "100%"
      },
      class: "el-form--inline",
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, Wf + ".props", [
      {
        type: "input",
        field: "labelWidth",
        title: "\u6807\u7B7E\u957F\u5EA6"
      },
      {
        type: "switch",
        field: "inline",
        title: "\u884C\u5185\u8868\u5355\u6A21\u5F0F",
        value: !0
      },
      {
        type: "input",
        field: "model",
        title: "\u8868\u5355\u6570\u636E\u5BF9\u8C61"
      }
    ]);
  }
}, Up = "\u5185\u5BB9\u5757", $f = "ContentWrap", cs = {
  icon: "icon-form",
  label: Up,
  name: $f,
  mask: !1,
  inside: !0,
  drag: !0,
  dragBtn: !1,
  rule() {
    return {
      type: "el-card",
      style: {
        width: "100%"
      },
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, $f + ".props", []);
  }
}, zp = "\u5217\u8868", jf = "table", vs = {
  icon: "icon-form",
  label: zp,
  name: jf,
  mask: !1,
  rule() {
    return {
      type: "el-table",
      style: {
        width: "100%"
      },
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: A }) {
    return Je(A, jf + ".props", [ap(A, "options")]);
  }
}, Wp = "\u5217\u8868\u5B57\u6BB5", Vf = "tableColumn", Yf = {
  icon: "icon-form",
  label: Wp,
  name: Vf,
  mask: !1,
  rule() {
    return {
      type: "el-table-column"
    };
  },
  props(u, { t: A }) {
    return Je(A, Vf + ".props", []);
  }
}, Hn = {
  [$l.name]: $l,
  [jl.name]: jl,
  [Vl.name]: Vl,
  [Yl.name]: Yl,
  [Ql.name]: Ql,
  [kl.name]: kl,
  [Gl.name]: Gl,
  [Kl.name]: Kl,
  [Xl.name]: Xl,
  [Jl.name]: Jl,
  [Zl.name]: Zl,
  [ql.name]: ql,
  [Ff.name]: Ff,
  [ls.name]: ls,
  [Hf.name]: Hf,
  [_l.name]: _l,
  [es.name]: es,
  [ts.name]: ts,
  [ns.name]: ns,
  [rs.name]: rs,
  [is.name]: is,
  [os.name]: os,
  [as.name]: as,
  [ss.name]: ss,
  [us.name]: us,
  [fs.name]: fs,
  [ds.name]: ds,
  [cs.name]: cs,
  [vs.name]: vs,
  [Yf.name]: Yf
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Qf(u, A) {
  var l = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(u);
    A && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(u, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function jn(u) {
  for (var A = 1; A < arguments.length; A++) {
    var l = arguments[A] != null ? arguments[A] : {};
    A % 2 ? Qf(Object(l), !0).forEach(function(o) {
      $p(u, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(l)) : Qf(Object(l)).forEach(function(o) {
      Object.defineProperty(u, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return u;
}
function Jo(u) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jo = function(A) {
    return typeof A;
  } : Jo = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, Jo(u);
}
function $p(u, A, l) {
  return A in u ? Object.defineProperty(u, A, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[A] = l, u;
}
function Zn() {
  return Zn = Object.assign || function(u) {
    for (var A = 1; A < arguments.length; A++) {
      var l = arguments[A];
      for (var o in l)
        Object.prototype.hasOwnProperty.call(l, o) && (u[o] = l[o]);
    }
    return u;
  }, Zn.apply(this, arguments);
}
function jp(u, A) {
  if (u == null)
    return {};
  var l = {}, o = Object.keys(u), t, s;
  for (s = 0; s < o.length; s++)
    t = o[s], !(A.indexOf(t) >= 0) && (l[t] = u[t]);
  return l;
}
function Vp(u, A) {
  if (u == null)
    return {};
  var l = jp(u, A), o, t;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(u);
    for (t = 0; t < s.length; t++)
      o = s[t], !(A.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, o) || (l[o] = u[o]));
  }
  return l;
}
var Yp = "1.14.0";
function Jn(u) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(u);
}
var _n = Jn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ao = Jn(/Edge/i), kf = Jn(/firefox/i), eo = Jn(/safari/i) && !Jn(/chrome/i) && !Jn(/android/i), md = Jn(/iP(ad|od|hone)/i), Qp = Jn(/chrome/i) && Jn(/android/i), yd = {
  capture: !1,
  passive: !1
};
function Xe(u, A, l) {
  u.addEventListener(A, l, !_n && yd);
}
function Qe(u, A, l) {
  u.removeEventListener(A, l, !_n && yd);
}
function na(u, A) {
  if (!!A) {
    if (A[0] === ">" && (A = A.substring(1)), u)
      try {
        if (u.matches)
          return u.matches(A);
        if (u.msMatchesSelector)
          return u.msMatchesSelector(A);
        if (u.webkitMatchesSelector)
          return u.webkitMatchesSelector(A);
      } catch {
        return !1;
      }
    return !1;
  }
}
function kp(u) {
  return u.host && u !== document && u.host.nodeType ? u.host : u.parentNode;
}
function zn(u, A, l, o) {
  if (u) {
    l = l || document;
    do {
      if (A != null && (A[0] === ">" ? u.parentNode === l && na(u, A) : na(u, A)) || o && u === l)
        return u;
      if (u === l)
        break;
    } while (u = kp(u));
  }
  return null;
}
var Gf = /\s+/g;
function dn(u, A, l) {
  if (u && A)
    if (u.classList)
      u.classList[l ? "add" : "remove"](A);
    else {
      var o = (" " + u.className + " ").replace(Gf, " ").replace(" " + A + " ", " ");
      u.className = (o + (l ? " " + A : "")).replace(Gf, " ");
    }
}
function Le(u, A, l) {
  var o = u && u.style;
  if (o) {
    if (l === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? l = document.defaultView.getComputedStyle(u, "") : u.currentStyle && (l = u.currentStyle), A === void 0 ? l : l[A];
    !(A in o) && A.indexOf("webkit") === -1 && (A = "-webkit-" + A), o[A] = l + (typeof l == "string" ? "" : "px");
  }
}
function ci(u, A) {
  var l = "";
  if (typeof u == "string")
    l = u;
  else
    do {
      var o = Le(u, "transform");
      o && o !== "none" && (l = o + " " + l);
    } while (!A && (u = u.parentNode));
  var t = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return t && new t(l);
}
function Ad(u, A, l) {
  if (u) {
    var o = u.getElementsByTagName(A), t = 0, s = o.length;
    if (l)
      for (; t < s; t++)
        l(o[t], t);
    return o;
  }
  return [];
}
function $n() {
  var u = document.scrollingElement;
  return u || document.documentElement;
}
function Lt(u, A, l, o, t) {
  if (!(!u.getBoundingClientRect && u !== window)) {
    var s, f, d, c, m, T, x;
    if (u !== window && u.parentNode && u !== $n() ? (s = u.getBoundingClientRect(), f = s.top, d = s.left, c = s.bottom, m = s.right, T = s.height, x = s.width) : (f = 0, d = 0, c = window.innerHeight, m = window.innerWidth, T = window.innerHeight, x = window.innerWidth), (A || l) && u !== window && (t = t || u.parentNode, !_n))
      do
        if (t && t.getBoundingClientRect && (Le(t, "transform") !== "none" || l && Le(t, "position") !== "static")) {
          var w = t.getBoundingClientRect();
          f -= w.top + parseInt(Le(t, "border-top-width")), d -= w.left + parseInt(Le(t, "border-left-width")), c = f + s.height, m = d + s.width;
          break;
        }
      while (t = t.parentNode);
    if (o && u !== window) {
      var E = ci(t || u), g = E && E.a, S = E && E.d;
      E && (f /= S, d /= g, x /= g, T /= S, c = f + T, m = d + x);
    }
    return {
      top: f,
      left: d,
      bottom: c,
      right: m,
      width: x,
      height: T
    };
  }
}
function Kf(u, A, l) {
  for (var o = mr(u, !0), t = Lt(u)[A]; o; ) {
    var s = Lt(o)[l], f = void 0;
    if (l === "top" || l === "left" ? f = t >= s : f = t <= s, !f)
      return o;
    if (o === $n())
      break;
    o = mr(o, !1);
  }
  return !1;
}
function vi(u, A, l, o) {
  for (var t = 0, s = 0, f = u.children; s < f.length; ) {
    if (f[s].style.display !== "none" && f[s] !== Ne.ghost && (o || f[s] !== Ne.dragged) && zn(f[s], l.draggable, u, !1)) {
      if (t === A)
        return f[s];
      t++;
    }
    s++;
  }
  return null;
}
function xs(u, A) {
  for (var l = u.lastElementChild; l && (l === Ne.ghost || Le(l, "display") === "none" || A && !na(l, A)); )
    l = l.previousElementSibling;
  return l || null;
}
function mn(u, A) {
  var l = 0;
  if (!u || !u.parentNode)
    return -1;
  for (; u = u.previousElementSibling; )
    u.nodeName.toUpperCase() !== "TEMPLATE" && u !== Ne.clone && (!A || na(u, A)) && l++;
  return l;
}
function Xf(u) {
  var A = 0, l = 0, o = $n();
  if (u)
    do {
      var t = ci(u), s = t.a, f = t.d;
      A += u.scrollLeft * s, l += u.scrollTop * f;
    } while (u !== o && (u = u.parentNode));
  return [A, l];
}
function Gp(u, A) {
  for (var l in u)
    if (!!u.hasOwnProperty(l)) {
      for (var o in A)
        if (A.hasOwnProperty(o) && A[o] === u[l][o])
          return Number(l);
    }
  return -1;
}
function mr(u, A) {
  if (!u || !u.getBoundingClientRect)
    return $n();
  var l = u, o = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var t = Le(l);
      if (l.clientWidth < l.scrollWidth && (t.overflowX == "auto" || t.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (t.overflowY == "auto" || t.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body)
          return $n();
        if (o || A)
          return l;
        o = !0;
      }
    }
  while (l = l.parentNode);
  return $n();
}
function Kp(u, A) {
  if (u && A)
    for (var l in A)
      A.hasOwnProperty(l) && (u[l] = A[l]);
  return u;
}
function wl(u, A) {
  return Math.round(u.top) === Math.round(A.top) && Math.round(u.left) === Math.round(A.left) && Math.round(u.height) === Math.round(A.height) && Math.round(u.width) === Math.round(A.width);
}
var to;
function xd(u, A) {
  return function() {
    if (!to) {
      var l = arguments, o = this;
      l.length === 1 ? u.call(o, l[0]) : u.apply(o, l), to = setTimeout(function() {
        to = void 0;
      }, A);
    }
  };
}
function Xp() {
  clearTimeout(to), to = void 0;
}
function Sd(u, A, l) {
  u.scrollLeft += A, u.scrollTop += l;
}
function bd(u) {
  var A = window.Polymer, l = window.jQuery || window.Zepto;
  return A && A.dom ? A.dom(u).cloneNode(!0) : l ? l(u).clone(!0)[0] : u.cloneNode(!0);
}
var pn = "Sortable" + new Date().getTime();
function Jp() {
  var u = [], A;
  return {
    captureAnimationState: function() {
      if (u = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(t) {
          if (!(Le(t, "display") === "none" || t === Ne.ghost)) {
            u.push({
              target: t,
              rect: Lt(t)
            });
            var s = jn({}, u[u.length - 1].rect);
            if (t.thisAnimationDuration) {
              var f = ci(t, !0);
              f && (s.top -= f.f, s.left -= f.e);
            }
            t.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(o) {
      u.push(o);
    },
    removeAnimationState: function(o) {
      u.splice(Gp(u, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var t = this;
      if (!this.options.animation) {
        clearTimeout(A), typeof o == "function" && o();
        return;
      }
      var s = !1, f = 0;
      u.forEach(function(d) {
        var c = 0, m = d.target, T = m.fromRect, x = Lt(m), w = m.prevFromRect, E = m.prevToRect, g = d.rect, S = ci(m, !0);
        S && (x.top -= S.f, x.left -= S.e), m.toRect = x, m.thisAnimationDuration && wl(w, x) && !wl(T, x) && (g.top - x.top) / (g.left - x.left) === (T.top - x.top) / (T.left - x.left) && (c = qp(g, w, E, t.options)), wl(x, T) || (m.prevFromRect = T, m.prevToRect = x, c || (c = t.options.animation), t.animate(m, g, x, c)), c && (s = !0, f = Math.max(f, c), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, c), m.thisAnimationDuration = c);
      }), clearTimeout(A), s ? A = setTimeout(function() {
        typeof o == "function" && o();
      }, f) : typeof o == "function" && o(), u = [];
    },
    animate: function(o, t, s, f) {
      if (f) {
        Le(o, "transition", ""), Le(o, "transform", "");
        var d = ci(this.el), c = d && d.a, m = d && d.d, T = (t.left - s.left) / (c || 1), x = (t.top - s.top) / (m || 1);
        o.animatingX = !!T, o.animatingY = !!x, Le(o, "transform", "translate3d(" + T + "px," + x + "px,0)"), this.forRepaintDummy = Zp(o), Le(o, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Le(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Le(o, "transition", ""), Le(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, f);
      }
    }
  };
}
function Zp(u) {
  return u.offsetWidth;
}
function qp(u, A, l, o) {
  return Math.sqrt(Math.pow(A.top - u.top, 2) + Math.pow(A.left - u.left, 2)) / Math.sqrt(Math.pow(A.top - l.top, 2) + Math.pow(A.left - l.left, 2)) * o.animation;
}
var si = [], Dl = {
  initializeByDefault: !0
}, lo = {
  mount: function(A) {
    for (var l in Dl)
      Dl.hasOwnProperty(l) && !(l in A) && (A[l] = Dl[l]);
    si.forEach(function(o) {
      if (o.pluginName === A.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(A.pluginName, " more than once");
    }), si.push(A);
  },
  pluginEvent: function(A, l, o) {
    var t = this;
    this.eventCanceled = !1, o.cancel = function() {
      t.eventCanceled = !0;
    };
    var s = A + "Global";
    si.forEach(function(f) {
      !l[f.pluginName] || (l[f.pluginName][s] && l[f.pluginName][s](jn({
        sortable: l
      }, o)), l.options[f.pluginName] && l[f.pluginName][A] && l[f.pluginName][A](jn({
        sortable: l
      }, o)));
    });
  },
  initializePlugins: function(A, l, o, t) {
    si.forEach(function(d) {
      var c = d.pluginName;
      if (!(!A.options[c] && !d.initializeByDefault)) {
        var m = new d(A, l, A.options);
        m.sortable = A, m.options = A.options, A[c] = m, Zn(o, m.defaults);
      }
    });
    for (var s in A.options)
      if (!!A.options.hasOwnProperty(s)) {
        var f = this.modifyOption(A, s, A.options[s]);
        typeof f < "u" && (A.options[s] = f);
      }
  },
  getEventProperties: function(A, l) {
    var o = {};
    return si.forEach(function(t) {
      typeof t.eventProperties == "function" && Zn(o, t.eventProperties.call(l[t.pluginName], A));
    }), o;
  },
  modifyOption: function(A, l, o) {
    var t;
    return si.forEach(function(s) {
      !A[s.pluginName] || s.optionListeners && typeof s.optionListeners[l] == "function" && (t = s.optionListeners[l].call(A[s.pluginName], o));
    }), t;
  }
};
function _p(u) {
  var A = u.sortable, l = u.rootEl, o = u.name, t = u.targetEl, s = u.cloneEl, f = u.toEl, d = u.fromEl, c = u.oldIndex, m = u.newIndex, T = u.oldDraggableIndex, x = u.newDraggableIndex, w = u.originalEvent, E = u.putSortable, g = u.extraEventProperties;
  if (A = A || l && l[pn], !!A) {
    var S, v = A.options, M = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !_n && !ao ? S = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(o, !0, !0)), S.to = f || l, S.from = d || l, S.item = t || l, S.clone = s, S.oldIndex = c, S.newIndex = m, S.oldDraggableIndex = T, S.newDraggableIndex = x, S.originalEvent = w, S.pullMode = E ? E.lastPutMode : void 0;
    var y = jn(jn({}, g), lo.getEventProperties(o, A));
    for (var h in y)
      S[h] = y[h];
    l && l.dispatchEvent(S), v[M] && v[M].call(A, S);
  }
}
var eh = ["evt"], sn = function(A, l) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = o.evt, s = Vp(o, eh);
  lo.pluginEvent.bind(Ne)(A, l, jn({
    dragEl: Ae,
    parentEl: vt,
    ghostEl: He,
    rootEl: at,
    nextEl: Nr,
    lastDownEl: Zo,
    cloneEl: pt,
    cloneHidden: gr,
    dragStarted: Xi,
    putSortable: Wt,
    activeSortable: Ne.active,
    originalEvent: t,
    oldIndex: di,
    oldDraggableIndex: no,
    newIndex: cn,
    newDraggableIndex: hr,
    hideGhostForTarget: wd,
    unhideGhostForTarget: Dd,
    cloneNowHidden: function() {
      gr = !0;
    },
    cloneNowShown: function() {
      gr = !1;
    },
    dispatchSortableEvent: function(d) {
      on({
        sortable: l,
        name: d,
        originalEvent: t
      });
    }
  }, s));
};
function on(u) {
  _p(jn({
    putSortable: Wt,
    cloneEl: pt,
    targetEl: Ae,
    rootEl: at,
    oldIndex: di,
    oldDraggableIndex: no,
    newIndex: cn,
    newDraggableIndex: hr
  }, u));
}
var Ae, vt, He, at, Nr, Zo, pt, gr, di, cn, no, hr, Qo, Wt, fi = !1, ra = !1, ia = [], Ir, Pn, Ml, Rl, Jf, Zf, Xi, ui, ro, io = !1, ko = !1, qo, kt, Pl = [], ps = !1, oa = [], la = typeof document < "u", Go = md, qf = ao || _n ? "cssFloat" : "float", th = la && !Qp && !md && "draggable" in document.createElement("div"), Ed = function() {
  if (!!la) {
    if (_n)
      return !1;
    var u = document.createElement("x");
    return u.style.cssText = "pointer-events:auto", u.style.pointerEvents === "auto";
  }
}(), Cd = function(A, l) {
  var o = Le(A), t = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), s = vi(A, 0, l), f = vi(A, 1, l), d = s && Le(s), c = f && Le(f), m = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Lt(s).width, T = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Lt(f).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && d.float && d.float !== "none") {
    var x = d.float === "left" ? "left" : "right";
    return f && (c.clear === "both" || c.clear === x) ? "vertical" : "horizontal";
  }
  return s && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || m >= t && o[qf] === "none" || f && o[qf] === "none" && m + T > t) ? "vertical" : "horizontal";
}, nh = function(A, l, o) {
  var t = o ? A.left : A.top, s = o ? A.right : A.bottom, f = o ? A.width : A.height, d = o ? l.left : l.top, c = o ? l.right : l.bottom, m = o ? l.width : l.height;
  return t === d || s === c || t + f / 2 === d + m / 2;
}, rh = function(A, l) {
  var o;
  return ia.some(function(t) {
    var s = t[pn].options.emptyInsertThreshold;
    if (!(!s || xs(t))) {
      var f = Lt(t), d = A >= f.left - s && A <= f.right + s, c = l >= f.top - s && l <= f.bottom + s;
      if (d && c)
        return o = t;
    }
  }), o;
}, Td = function(A) {
  function l(s, f) {
    return function(d, c, m, T) {
      var x = d.options.group.name && c.options.group.name && d.options.group.name === c.options.group.name;
      if (s == null && (f || x))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (f && s === "clone")
        return s;
      if (typeof s == "function")
        return l(s(d, c, m, T), f)(d, c, m, T);
      var w = (f ? d : c).options.group.name;
      return s === !0 || typeof s == "string" && s === w || s.join && s.indexOf(w) > -1;
    };
  }
  var o = {}, t = A.group;
  (!t || Jo(t) != "object") && (t = {
    name: t
  }), o.name = t.name, o.checkPull = l(t.pull, !0), o.checkPut = l(t.put), o.revertClone = t.revertClone, A.group = o;
}, wd = function() {
  !Ed && He && Le(He, "display", "none");
}, Dd = function() {
  !Ed && He && Le(He, "display", "");
};
la && document.addEventListener("click", function(u) {
  if (ra)
    return u.preventDefault(), u.stopPropagation && u.stopPropagation(), u.stopImmediatePropagation && u.stopImmediatePropagation(), ra = !1, !1;
}, !0);
var Lr = function(A) {
  if (Ae) {
    A = A.touches ? A.touches[0] : A;
    var l = rh(A.clientX, A.clientY);
    if (l) {
      var o = {};
      for (var t in A)
        A.hasOwnProperty(t) && (o[t] = A[t]);
      o.target = o.rootEl = l, o.preventDefault = void 0, o.stopPropagation = void 0, l[pn]._onDragOver(o);
    }
  }
}, ih = function(A) {
  Ae && Ae.parentNode[pn]._isOutsideThisEl(A.target);
};
function Ne(u, A) {
  if (!(u && u.nodeType && u.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(u));
  this.el = u, this.options = A = Zn({}, A), u[pn] = this;
  var l = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(u.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return Cd(u, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, d) {
      f.setData("Text", d.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Ne.supportPointer !== !1 && "PointerEvent" in window && !eo,
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, u, l);
  for (var o in l)
    !(o in A) && (A[o] = l[o]);
  Td(A);
  for (var t in this)
    t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  this.nativeDraggable = A.forceFallback ? !1 : th, this.nativeDraggable && (this.options.touchStartThreshold = 1), A.supportPointer ? Xe(u, "pointerdown", this._onTapStart) : (Xe(u, "mousedown", this._onTapStart), Xe(u, "touchstart", this._onTapStart)), this.nativeDraggable && (Xe(u, "dragover", this), Xe(u, "dragenter", this)), ia.push(this.el), A.store && A.store.get && this.sort(A.store.get(this) || []), Zn(this, Jp());
}
Ne.prototype = {
  constructor: Ne,
  _isOutsideThisEl: function(A) {
    !this.el.contains(A) && A !== this.el && (ui = null);
  },
  _getDirection: function(A, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, A, l, Ae) : this.options.direction;
  },
  _onTapStart: function(A) {
    if (!!A.cancelable) {
      var l = this, o = this.el, t = this.options, s = t.preventOnFilter, f = A.type, d = A.touches && A.touches[0] || A.pointerType && A.pointerType === "touch" && A, c = (d || A).target, m = A.target.shadowRoot && (A.path && A.path[0] || A.composedPath && A.composedPath()[0]) || c, T = t.filter;
      if (ch(o), !Ae && !(/mousedown|pointerdown/.test(f) && A.button !== 0 || t.disabled) && !m.isContentEditable && !(!this.nativeDraggable && eo && c && c.tagName.toUpperCase() === "SELECT") && (c = zn(c, t.draggable, o, !1), !(c && c.animated) && Zo !== c)) {
        if (di = mn(c), no = mn(c, t.draggable), typeof T == "function") {
          if (T.call(this, A, c, this)) {
            on({
              sortable: l,
              rootEl: m,
              name: "filter",
              targetEl: c,
              toEl: o,
              fromEl: o
            }), sn("filter", l, {
              evt: A
            }), s && A.cancelable && A.preventDefault();
            return;
          }
        } else if (T && (T = T.split(",").some(function(x) {
          if (x = zn(m, x.trim(), o, !1), x)
            return on({
              sortable: l,
              rootEl: x,
              name: "filter",
              targetEl: c,
              fromEl: o,
              toEl: o
            }), sn("filter", l, {
              evt: A
            }), !0;
        }), T)) {
          s && A.cancelable && A.preventDefault();
          return;
        }
        t.handle && !zn(m, t.handle, o, !1) || this._prepareDragStart(A, d, c);
      }
    }
  },
  _prepareDragStart: function(A, l, o) {
    var t = this, s = t.el, f = t.options, d = s.ownerDocument, c;
    if (o && !Ae && o.parentNode === s) {
      var m = Lt(o);
      if (at = s, Ae = o, vt = Ae.parentNode, Nr = Ae.nextSibling, Zo = o, Qo = f.group, Ne.dragged = Ae, Ir = {
        target: Ae,
        clientX: (l || A).clientX,
        clientY: (l || A).clientY
      }, Jf = Ir.clientX - m.left, Zf = Ir.clientY - m.top, this._lastX = (l || A).clientX, this._lastY = (l || A).clientY, Ae.style["will-change"] = "all", c = function() {
        if (sn("delayEnded", t, {
          evt: A
        }), Ne.eventCanceled) {
          t._onDrop();
          return;
        }
        t._disableDelayedDragEvents(), !kf && t.nativeDraggable && (Ae.draggable = !0), t._triggerDragStart(A, l), on({
          sortable: t,
          name: "choose",
          originalEvent: A
        }), dn(Ae, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(T) {
        Ad(Ae, T.trim(), Il);
      }), Xe(d, "dragover", Lr), Xe(d, "mousemove", Lr), Xe(d, "touchmove", Lr), Xe(d, "mouseup", t._onDrop), Xe(d, "touchend", t._onDrop), Xe(d, "touchcancel", t._onDrop), kf && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ae.draggable = !0), sn("delayStart", this, {
        evt: A
      }), f.delay && (!f.delayOnTouchOnly || l) && (!this.nativeDraggable || !(ao || _n))) {
        if (Ne.eventCanceled) {
          this._onDrop();
          return;
        }
        Xe(d, "mouseup", t._disableDelayedDrag), Xe(d, "touchend", t._disableDelayedDrag), Xe(d, "touchcancel", t._disableDelayedDrag), Xe(d, "mousemove", t._delayedDragTouchMoveHandler), Xe(d, "touchmove", t._delayedDragTouchMoveHandler), f.supportPointer && Xe(d, "pointermove", t._delayedDragTouchMoveHandler), t._dragStartTimer = setTimeout(c, f.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(A) {
    var l = A.touches ? A.touches[0] : A;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Ae && Il(Ae), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var A = this.el.ownerDocument;
    Qe(A, "mouseup", this._disableDelayedDrag), Qe(A, "touchend", this._disableDelayedDrag), Qe(A, "touchcancel", this._disableDelayedDrag), Qe(A, "mousemove", this._delayedDragTouchMoveHandler), Qe(A, "touchmove", this._delayedDragTouchMoveHandler), Qe(A, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(A, l) {
    l = l || A.pointerType == "touch" && A, !this.nativeDraggable || l ? this.options.supportPointer ? Xe(document, "pointermove", this._onTouchMove) : l ? Xe(document, "touchmove", this._onTouchMove) : Xe(document, "mousemove", this._onTouchMove) : (Xe(Ae, "dragend", this), Xe(at, "dragstart", this._onDragStart));
    try {
      document.selection ? _o(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(A, l) {
    if (fi = !1, at && Ae) {
      sn("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && Xe(document, "dragover", ih);
      var o = this.options;
      !A && dn(Ae, o.dragClass, !1), dn(Ae, o.ghostClass, !0), Ne.active = this, A && this._appendGhost(), on({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pn) {
      this._lastX = Pn.clientX, this._lastY = Pn.clientY, wd();
      for (var A = document.elementFromPoint(Pn.clientX, Pn.clientY), l = A; A && A.shadowRoot && (A = A.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), A !== l); )
        l = A;
      if (Ae.parentNode[pn]._isOutsideThisEl(A), l)
        do {
          if (l[pn]) {
            var o = void 0;
            if (o = l[pn]._onDragOver({
              clientX: Pn.clientX,
              clientY: Pn.clientY,
              target: A,
              rootEl: l
            }), o && !this.options.dragoverBubble)
              break;
          }
          A = l;
        } while (l = l.parentNode);
      Dd();
    }
  },
  _onTouchMove: function(A) {
    if (Ir) {
      var l = this.options, o = l.fallbackTolerance, t = l.fallbackOffset, s = A.touches ? A.touches[0] : A, f = He && ci(He, !0), d = He && f && f.a, c = He && f && f.d, m = Go && kt && Xf(kt), T = (s.clientX - Ir.clientX + t.x) / (d || 1) + (m ? m[0] - Pl[0] : 0) / (d || 1), x = (s.clientY - Ir.clientY + t.y) / (c || 1) + (m ? m[1] - Pl[1] : 0) / (c || 1);
      if (!Ne.active && !fi) {
        if (o && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < o)
          return;
        this._onDragStart(A, !0);
      }
      if (He) {
        f ? (f.e += T - (Ml || 0), f.f += x - (Rl || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: T,
          f: x
        };
        var w = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Le(He, "webkitTransform", w), Le(He, "mozTransform", w), Le(He, "msTransform", w), Le(He, "transform", w), Ml = T, Rl = x, Pn = s;
      }
      A.cancelable && A.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!He) {
      var A = this.options.fallbackOnBody ? document.body : at, l = Lt(Ae, !0, Go, !0, A), o = this.options;
      if (Go) {
        for (kt = A; Le(kt, "position") === "static" && Le(kt, "transform") === "none" && kt !== document; )
          kt = kt.parentNode;
        kt !== document.body && kt !== document.documentElement ? (kt === document && (kt = $n()), l.top += kt.scrollTop, l.left += kt.scrollLeft) : kt = $n(), Pl = Xf(kt);
      }
      He = Ae.cloneNode(!0), dn(He, o.ghostClass, !1), dn(He, o.fallbackClass, !0), dn(He, o.dragClass, !0), Le(He, "transition", ""), Le(He, "transform", ""), Le(He, "box-sizing", "border-box"), Le(He, "margin", 0), Le(He, "top", l.top), Le(He, "left", l.left), Le(He, "width", l.width), Le(He, "height", l.height), Le(He, "opacity", "0.8"), Le(He, "position", Go ? "absolute" : "fixed"), Le(He, "zIndex", "100000"), Le(He, "pointerEvents", "none"), Ne.ghost = He, A.appendChild(He), Le(He, "transform-origin", Jf / parseInt(He.style.width) * 100 + "% " + Zf / parseInt(He.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(A, l) {
    var o = this, t = A.dataTransfer, s = o.options;
    if (sn("dragStart", this, {
      evt: A
    }), Ne.eventCanceled) {
      this._onDrop();
      return;
    }
    sn("setupClone", this), Ne.eventCanceled || (pt = bd(Ae), pt.draggable = !1, pt.style["will-change"] = "", this._hideClone(), dn(pt, this.options.chosenClass, !1), Ne.clone = pt), o.cloneId = _o(function() {
      sn("clone", o), !Ne.eventCanceled && (o.options.removeCloneOnHide || at.insertBefore(pt, Ae), o._hideClone(), on({
        sortable: o,
        name: "clone"
      }));
    }), !l && dn(Ae, s.dragClass, !0), l ? (ra = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (Qe(document, "mouseup", o._onDrop), Qe(document, "touchend", o._onDrop), Qe(document, "touchcancel", o._onDrop), t && (t.effectAllowed = "move", s.setData && s.setData.call(o, t, Ae)), Xe(document, "drop", o), Le(Ae, "transform", "translateZ(0)")), fi = !0, o._dragStartId = _o(o._dragStarted.bind(o, l, A)), Xe(document, "selectstart", o), Xi = !0, eo && Le(document.body, "user-select", "none");
  },
  _onDragOver: function(A) {
    var l = this.el, o = A.target, t, s, f, d = this.options, c = d.group, m = Ne.active, T = Qo === c, x = d.sort, w = Wt || m, E, g = this, S = !1;
    if (ps)
      return;
    function v(K, q) {
      sn(K, g, jn({
        evt: A,
        isOwner: T,
        axis: E ? "vertical" : "horizontal",
        revert: f,
        dragRect: t,
        targetRect: s,
        canSort: x,
        fromSortable: w,
        target: o,
        completed: y,
        onMove: function(_, le) {
          return Ko(at, l, Ae, t, _, Lt(_), A, le);
        },
        changed: h
      }, q));
    }
    function M() {
      v("dragOverAnimationCapture"), g.captureAnimationState(), g !== w && w.captureAnimationState();
    }
    function y(K) {
      return v("dragOverCompleted", {
        insertion: K
      }), K && (T ? m._hideClone() : m._showClone(g), g !== w && (dn(Ae, Wt ? Wt.options.ghostClass : m.options.ghostClass, !1), dn(Ae, d.ghostClass, !0)), Wt !== g && g !== Ne.active ? Wt = g : g === Ne.active && Wt && (Wt = null), w === g && (g._ignoreWhileAnimating = o), g.animateAll(function() {
        v("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== w && (w.animateAll(), w._ignoreWhileAnimating = null)), (o === Ae && !Ae.animated || o === l && !o.animated) && (ui = null), !d.dragoverBubble && !A.rootEl && o !== document && (Ae.parentNode[pn]._isOutsideThisEl(A.target), !K && Lr(A)), !d.dragoverBubble && A.stopPropagation && A.stopPropagation(), S = !0;
    }
    function h() {
      cn = mn(Ae), hr = mn(Ae, d.draggable), on({
        sortable: g,
        name: "change",
        toEl: l,
        newIndex: cn,
        newDraggableIndex: hr,
        originalEvent: A
      });
    }
    if (A.preventDefault !== void 0 && A.cancelable && A.preventDefault(), o = zn(o, d.draggable, l, !0), v("dragOver"), Ne.eventCanceled)
      return S;
    if (Ae.contains(A.target) || o.animated && o.animatingX && o.animatingY || g._ignoreWhileAnimating === o)
      return y(!1);
    if (ra = !1, m && !d.disabled && (T ? x || (f = vt !== at) : Wt === this || (this.lastPutMode = Qo.checkPull(this, m, Ae, A)) && c.checkPut(this, m, Ae, A))) {
      if (E = this._getDirection(A, o) === "vertical", t = Lt(Ae), v("dragOverValid"), Ne.eventCanceled)
        return S;
      if (f)
        return vt = at, M(), this._hideClone(), v("revert"), Ne.eventCanceled || (Nr ? at.insertBefore(Ae, Nr) : at.appendChild(Ae)), y(!0);
      var b = xs(l, d.draggable);
      if (!b || sh(A, E, this) && !b.animated) {
        if (b === Ae)
          return y(!1);
        if (b && l === A.target && (o = b), o && (s = Lt(o)), Ko(at, l, Ae, t, o, s, A, !!o) !== !1)
          return M(), l.appendChild(Ae), vt = l, h(), y(!0);
      } else if (b && lh(A, E, this)) {
        var C = vi(l, 0, d, !0);
        if (C === Ae)
          return y(!1);
        if (o = C, s = Lt(o), Ko(at, l, Ae, t, o, s, A, !1) !== !1)
          return M(), l.insertBefore(Ae, C), vt = l, h(), y(!0);
      } else if (o.parentNode === l) {
        s = Lt(o);
        var R = 0, O, B = Ae.parentNode !== l, F = !nh(Ae.animated && Ae.toRect || t, o.animated && o.toRect || s, E), z = E ? "top" : "left", I = Kf(o, "top", "top") || Kf(Ae, "top", "top"), U = I ? I.scrollTop : void 0;
        ui !== o && (O = s[z], io = !1, ko = !F && d.invertSwap || B), R = uh(A, o, s, E, F ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, ko, ui === o);
        var H;
        if (R !== 0) {
          var j = mn(Ae);
          do
            j -= R, H = vt.children[j];
          while (H && (Le(H, "display") === "none" || H === He));
        }
        if (R === 0 || H === o)
          return y(!1);
        ui = o, ro = R;
        var P = o.nextElementSibling, V = !1;
        V = R === 1;
        var Q = Ko(at, l, Ae, t, o, s, A, V);
        if (Q !== !1)
          return (Q === 1 || Q === -1) && (V = Q === 1), ps = !0, setTimeout(ah, 30), M(), V && !P ? l.appendChild(Ae) : o.parentNode.insertBefore(Ae, V ? P : o), I && Sd(I, 0, U - I.scrollTop), vt = Ae.parentNode, O !== void 0 && !ko && (qo = Math.abs(O - Lt(o)[z])), h(), y(!0);
      }
      if (l.contains(Ae))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Qe(document, "mousemove", this._onTouchMove), Qe(document, "touchmove", this._onTouchMove), Qe(document, "pointermove", this._onTouchMove), Qe(document, "dragover", Lr), Qe(document, "mousemove", Lr), Qe(document, "touchmove", Lr);
  },
  _offUpEvents: function() {
    var A = this.el.ownerDocument;
    Qe(A, "mouseup", this._onDrop), Qe(A, "touchend", this._onDrop), Qe(A, "pointerup", this._onDrop), Qe(A, "touchcancel", this._onDrop), Qe(document, "selectstart", this);
  },
  _onDrop: function(A) {
    var l = this.el, o = this.options;
    if (cn = mn(Ae), hr = mn(Ae, o.draggable), sn("drop", this, {
      evt: A
    }), vt = Ae && Ae.parentNode, cn = mn(Ae), hr = mn(Ae, o.draggable), Ne.eventCanceled) {
      this._nulling();
      return;
    }
    fi = !1, ko = !1, io = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), hs(this.cloneId), hs(this._dragStartId), this.nativeDraggable && (Qe(document, "drop", this), Qe(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), eo && Le(document.body, "user-select", ""), Le(Ae, "transform", ""), A && (Xi && (A.cancelable && A.preventDefault(), !o.dropBubble && A.stopPropagation()), He && He.parentNode && He.parentNode.removeChild(He), (at === vt || Wt && Wt.lastPutMode !== "clone") && pt && pt.parentNode && pt.parentNode.removeChild(pt), Ae && (this.nativeDraggable && Qe(Ae, "dragend", this), Il(Ae), Ae.style["will-change"] = "", Xi && !fi && dn(Ae, Wt ? Wt.options.ghostClass : this.options.ghostClass, !1), dn(Ae, this.options.chosenClass, !1), on({
      sortable: this,
      name: "unchoose",
      toEl: vt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: A
    }), at !== vt ? (cn >= 0 && (on({
      rootEl: vt,
      name: "add",
      toEl: vt,
      fromEl: at,
      originalEvent: A
    }), on({
      sortable: this,
      name: "remove",
      toEl: vt,
      originalEvent: A
    }), on({
      rootEl: vt,
      name: "sort",
      toEl: vt,
      fromEl: at,
      originalEvent: A
    }), on({
      sortable: this,
      name: "sort",
      toEl: vt,
      originalEvent: A
    })), Wt && Wt.save()) : cn !== di && cn >= 0 && (on({
      sortable: this,
      name: "update",
      toEl: vt,
      originalEvent: A
    }), on({
      sortable: this,
      name: "sort",
      toEl: vt,
      originalEvent: A
    })), Ne.active && ((cn == null || cn === -1) && (cn = di, hr = no), on({
      sortable: this,
      name: "end",
      toEl: vt,
      originalEvent: A
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), at = Ae = vt = He = Nr = pt = Zo = gr = Ir = Pn = Xi = cn = hr = di = no = ui = ro = Wt = Qo = Ne.dragged = Ne.ghost = Ne.clone = Ne.active = null, oa.forEach(function(A) {
      A.checked = !0;
    }), oa.length = Ml = Rl = 0;
  },
  handleEvent: function(A) {
    switch (A.type) {
      case "drop":
      case "dragend":
        this._onDrop(A);
        break;
      case "dragenter":
      case "dragover":
        Ae && (this._onDragOver(A), oh(A));
        break;
      case "selectstart":
        A.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var A = [], l, o = this.el.children, t = 0, s = o.length, f = this.options; t < s; t++)
      l = o[t], zn(l, f.draggable, this.el, !1) && A.push(l.getAttribute(f.dataIdAttr) || dh(l));
    return A;
  },
  sort: function(A, l) {
    var o = {}, t = this.el;
    this.toArray().forEach(function(s, f) {
      var d = t.children[f];
      zn(d, this.options.draggable, t, !1) && (o[s] = d);
    }, this), l && this.captureAnimationState(), A.forEach(function(s) {
      o[s] && (t.removeChild(o[s]), t.appendChild(o[s]));
    }), l && this.animateAll();
  },
  save: function() {
    var A = this.options.store;
    A && A.set && A.set(this);
  },
  closest: function(A, l) {
    return zn(A, l || this.options.draggable, this.el, !1);
  },
  option: function(A, l) {
    var o = this.options;
    if (l === void 0)
      return o[A];
    var t = lo.modifyOption(this, A, l);
    typeof t < "u" ? o[A] = t : o[A] = l, A === "group" && Td(o);
  },
  destroy: function() {
    sn("destroy", this);
    var A = this.el;
    A[pn] = null, Qe(A, "mousedown", this._onTapStart), Qe(A, "touchstart", this._onTapStart), Qe(A, "pointerdown", this._onTapStart), this.nativeDraggable && (Qe(A, "dragover", this), Qe(A, "dragenter", this)), Array.prototype.forEach.call(A.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ia.splice(ia.indexOf(this.el), 1), this.el = A = null;
  },
  _hideClone: function() {
    if (!gr) {
      if (sn("hideClone", this), Ne.eventCanceled)
        return;
      Le(pt, "display", "none"), this.options.removeCloneOnHide && pt.parentNode && pt.parentNode.removeChild(pt), gr = !0;
    }
  },
  _showClone: function(A) {
    if (A.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (gr) {
      if (sn("showClone", this), Ne.eventCanceled)
        return;
      Ae.parentNode == at && !this.options.group.revertClone ? at.insertBefore(pt, Ae) : Nr ? at.insertBefore(pt, Nr) : at.appendChild(pt), this.options.group.revertClone && this.animate(Ae, pt), Le(pt, "display", ""), gr = !1;
    }
  }
};
function oh(u) {
  u.dataTransfer && (u.dataTransfer.dropEffect = "move"), u.cancelable && u.preventDefault();
}
function Ko(u, A, l, o, t, s, f, d) {
  var c, m = u[pn], T = m.options.onMove, x;
  return window.CustomEvent && !_n && !ao ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = A, c.from = u, c.dragged = l, c.draggedRect = o, c.related = t || A, c.relatedRect = s || Lt(A), c.willInsertAfter = d, c.originalEvent = f, u.dispatchEvent(c), T && (x = T.call(m, c, f)), x;
}
function Il(u) {
  u.draggable = !1;
}
function ah() {
  ps = !1;
}
function lh(u, A, l) {
  var o = Lt(vi(l.el, 0, l.options, !0)), t = 10;
  return A ? u.clientX < o.left - t || u.clientY < o.top && u.clientX < o.right : u.clientY < o.top - t || u.clientY < o.bottom && u.clientX < o.left;
}
function sh(u, A, l) {
  var o = Lt(xs(l.el, l.options.draggable)), t = 10;
  return A ? u.clientX > o.right + t || u.clientX <= o.right && u.clientY > o.bottom && u.clientX >= o.left : u.clientX > o.right && u.clientY > o.top || u.clientX <= o.right && u.clientY > o.bottom + t;
}
function uh(u, A, l, o, t, s, f, d) {
  var c = o ? u.clientY : u.clientX, m = o ? l.height : l.width, T = o ? l.top : l.left, x = o ? l.bottom : l.right, w = !1;
  if (!f) {
    if (d && qo < m * t) {
      if (!io && (ro === 1 ? c > T + m * s / 2 : c < x - m * s / 2) && (io = !0), io)
        w = !0;
      else if (ro === 1 ? c < T + qo : c > x - qo)
        return -ro;
    } else if (c > T + m * (1 - t) / 2 && c < x - m * (1 - t) / 2)
      return fh(A);
  }
  return w = w || f, w && (c < T + m * s / 2 || c > x - m * s / 2) ? c > T + m / 2 ? 1 : -1 : 0;
}
function fh(u) {
  return mn(Ae) < mn(u) ? 1 : -1;
}
function dh(u) {
  for (var A = u.tagName + u.className + u.src + u.href + u.textContent, l = A.length, o = 0; l--; )
    o += A.charCodeAt(l);
  return o.toString(36);
}
function ch(u) {
  oa.length = 0;
  for (var A = u.getElementsByTagName("input"), l = A.length; l--; ) {
    var o = A[l];
    o.checked && oa.push(o);
  }
}
function _o(u) {
  return setTimeout(u, 0);
}
function hs(u) {
  return clearTimeout(u);
}
la && Xe(document, "touchmove", function(u) {
  (Ne.active || fi) && u.cancelable && u.preventDefault();
});
Ne.utils = {
  on: Xe,
  off: Qe,
  css: Le,
  find: Ad,
  is: function(A, l) {
    return !!zn(A, l, A, !1);
  },
  extend: Kp,
  throttle: xd,
  closest: zn,
  toggleClass: dn,
  clone: bd,
  index: mn,
  nextTick: _o,
  cancelNextTick: hs,
  detectDirection: Cd,
  getChild: vi
};
Ne.get = function(u) {
  return u[pn];
};
Ne.mount = function() {
  for (var u = arguments.length, A = new Array(u), l = 0; l < u; l++)
    A[l] = arguments[l];
  A[0].constructor === Array && (A = A[0]), A.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Ne.utils = jn(jn({}, Ne.utils), o.utils)), lo.mount(o);
  });
};
Ne.create = function(u, A) {
  return new Ne(u, A);
};
Ne.version = Yp;
var At = [], Ji, gs, ms = !1, Ll, Nl, aa, Zi;
function vh() {
  function u() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var A in this)
      A.charAt(0) === "_" && typeof this[A] == "function" && (this[A] = this[A].bind(this));
  }
  return u.prototype = {
    dragStarted: function(l) {
      var o = l.originalEvent;
      this.sortable.nativeDraggable ? Xe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Xe(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? Xe(document, "touchmove", this._handleFallbackAutoScroll) : Xe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var o = l.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Qe(document, "dragover", this._handleAutoScroll) : (Qe(document, "pointermove", this._handleFallbackAutoScroll), Qe(document, "touchmove", this._handleFallbackAutoScroll), Qe(document, "mousemove", this._handleFallbackAutoScroll)), _f(), ea(), Xp();
    },
    nulling: function() {
      aa = gs = Ji = ms = Zi = Ll = Nl = null, At.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, o) {
      var t = this, s = (l.touches ? l.touches[0] : l).clientX, f = (l.touches ? l.touches[0] : l).clientY, d = document.elementFromPoint(s, f);
      if (aa = l, o || this.options.forceAutoScrollFallback || ao || _n || eo) {
        Ol(l, this.options, d, o);
        var c = mr(d, !0);
        ms && (!Zi || s !== Ll || f !== Nl) && (Zi && _f(), Zi = setInterval(function() {
          var m = mr(document.elementFromPoint(s, f), !0);
          m !== c && (c = m, ea()), Ol(l, t.options, m, o);
        }, 10), Ll = s, Nl = f);
      } else {
        if (!this.options.bubbleScroll || mr(d, !0) === $n()) {
          ea();
          return;
        }
        Ol(l, this.options, mr(d, !1), !1);
      }
    }
  }, Zn(u, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ea() {
  At.forEach(function(u) {
    clearInterval(u.pid);
  }), At = [];
}
function _f() {
  clearInterval(Zi);
}
var Ol = xd(function(u, A, l, o) {
  if (!!A.scroll) {
    var t = (u.touches ? u.touches[0] : u).clientX, s = (u.touches ? u.touches[0] : u).clientY, f = A.scrollSensitivity, d = A.scrollSpeed, c = $n(), m = !1, T;
    gs !== l && (gs = l, ea(), Ji = A.scroll, T = A.scrollFn, Ji === !0 && (Ji = mr(l, !0)));
    var x = 0, w = Ji;
    do {
      var E = w, g = Lt(E), S = g.top, v = g.bottom, M = g.left, y = g.right, h = g.width, b = g.height, C = void 0, R = void 0, O = E.scrollWidth, B = E.scrollHeight, F = Le(E), z = E.scrollLeft, I = E.scrollTop;
      E === c ? (C = h < O && (F.overflowX === "auto" || F.overflowX === "scroll" || F.overflowX === "visible"), R = b < B && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflowY === "visible")) : (C = h < O && (F.overflowX === "auto" || F.overflowX === "scroll"), R = b < B && (F.overflowY === "auto" || F.overflowY === "scroll"));
      var U = C && (Math.abs(y - t) <= f && z + h < O) - (Math.abs(M - t) <= f && !!z), H = R && (Math.abs(v - s) <= f && I + b < B) - (Math.abs(S - s) <= f && !!I);
      if (!At[x])
        for (var j = 0; j <= x; j++)
          At[j] || (At[j] = {});
      (At[x].vx != U || At[x].vy != H || At[x].el !== E) && (At[x].el = E, At[x].vx = U, At[x].vy = H, clearInterval(At[x].pid), (U != 0 || H != 0) && (m = !0, At[x].pid = setInterval(function() {
        o && this.layer === 0 && Ne.active._onTouchMove(aa);
        var P = At[this.layer].vy ? At[this.layer].vy * d : 0, V = At[this.layer].vx ? At[this.layer].vx * d : 0;
        typeof T == "function" && T.call(Ne.dragged.parentNode[pn], V, P, u, aa, At[this.layer].el) !== "continue" || Sd(At[this.layer].el, V, P);
      }.bind({
        layer: x
      }), 24))), x++;
    } while (A.bubbleScroll && w !== c && (w = mr(w, !1)));
    ms = m;
  }
}, 30), Md = function(A) {
  var l = A.originalEvent, o = A.putSortable, t = A.dragEl, s = A.activeSortable, f = A.dispatchSortableEvent, d = A.hideGhostForTarget, c = A.unhideGhostForTarget;
  if (!!l) {
    var m = o || s;
    d();
    var T = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, x = document.elementFromPoint(T.clientX, T.clientY);
    c(), m && !m.el.contains(x) && (f("spill"), this.onSpill({
      dragEl: t,
      putSortable: o
    }));
  }
};
function Ss() {
}
Ss.prototype = {
  startIndex: null,
  dragStart: function(A) {
    var l = A.oldDraggableIndex;
    this.startIndex = l;
  },
  onSpill: function(A) {
    var l = A.dragEl, o = A.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var t = vi(this.sortable.el, this.startIndex, this.options);
    t ? this.sortable.el.insertBefore(l, t) : this.sortable.el.appendChild(l), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Md
};
Zn(Ss, {
  pluginName: "revertOnSpill"
});
function bs() {
}
bs.prototype = {
  onSpill: function(A) {
    var l = A.dragEl, o = A.putSortable, t = o || this.sortable;
    t.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), t.animateAll();
  },
  drop: Md
};
Zn(bs, {
  pluginName: "removeOnSpill"
});
Ne.mount(new vh());
Ne.mount(bs, Ss);
function Fl(u) {
  u.parentElement !== null && u.parentElement.removeChild(u);
}
function ed(u, A, l) {
  const o = l === 0 ? u.children[0] : u.children[l - 1].nextSibling;
  u.insertBefore(A, o);
}
function ph() {
  return typeof window < "u" ? window.console : global.console;
}
const hh = ph();
function gh(u) {
  const A = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return A[o] || (A[o] = u(o));
  };
}
const mh = /-(\w)/g, yh = gh((u) => u.replace(mh, (A, l) => l.toUpperCase())), Rd = ["Start", "Add", "Remove", "Update", "End"], Pd = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Id = ["Move"], Ah = [Id, Rd, Pd].flatMap((u) => u).map((u) => `on${u}`), ys = {
  manage: Id,
  manageAndEmit: Rd,
  emit: Pd
};
function xh(u) {
  return Ah.indexOf(u) !== -1;
}
const Sh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function bh(u) {
  return Sh.includes(u);
}
function Eh(u) {
  return ["transition-group", "TransitionGroup"].includes(u);
}
function Ld(u) {
  return ["id", "class", "role", "style"].includes(u) || u.startsWith("data-") || u.startsWith("aria-") || u.startsWith("on");
}
function Nd(u) {
  return u.reduce((A, [l, o]) => (A[l] = o, A), {});
}
function Ch({ $attrs: u, componentData: A = {} }) {
  return {
    ...Nd(
      Object.entries(u).filter(([o, t]) => Ld(o))
    ),
    ...A
  };
}
function Th({ $attrs: u, callBackBuilder: A }) {
  const l = Nd(Od(u));
  Object.entries(A).forEach(([t, s]) => {
    ys[t].forEach((f) => {
      l[`on${f}`] = s(f);
    });
  });
  const o = `[data-draggable]${l.draggable || ""}`;
  return {
    ...l,
    draggable: o
  };
}
function Od(u) {
  return Object.entries(u).filter(([A, l]) => !Ld(A)).map(([A, l]) => [yh(A), l]).filter(([A, l]) => !xh(A));
}
const td = ({ el: u }) => u, wh = (u, A) => u.__draggable_context = A, nd = (u) => u.__draggable_context;
class Dh {
  constructor({
    nodes: { header: A, default: l, footer: o },
    root: t,
    realList: s
  }) {
    this.defaultNodes = l, this.children = [...A, ...l, ...o], this.externalComponent = t.externalComponent, this.rootTransition = t.transition, this.tag = t.tag, this.realList = s;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(A, l) {
    const { tag: o, children: t, _isRootComponent: s } = this;
    return A(o, l, s ? { default: () => t } : t);
  }
  updated() {
    const { defaultNodes: A, realList: l } = this;
    A.forEach((o, t) => {
      wh(td(o), {
        element: l[t],
        index: t
      });
    });
  }
  getUnderlyingVm(A) {
    return nd(A);
  }
  getVmIndexFromDomIndex(A, l) {
    const { defaultNodes: o } = this, { length: t } = o, s = l.children, f = s.item(A);
    if (f === null)
      return t;
    const d = nd(f);
    if (d)
      return d.index;
    if (t === 0)
      return 0;
    const c = td(o[0]), m = [...s].findIndex(
      (T) => T === c
    );
    return A < m ? 0 : t;
  }
}
function Mh(u, A) {
  const l = u[A];
  return l ? l() : [];
}
function Rh({ $slots: u, realList: A, getKey: l }) {
  const o = A || [], [t, s] = ["header", "footer"].map(
    (c) => Mh(u, c)
  ), { item: f } = u;
  if (!f)
    throw new Error("draggable element must have an item slot");
  const d = o.flatMap(
    (c, m) => f({ element: c, index: m }).map((T) => (T.key = l(c), T.props = { ...T.props || {}, "data-draggable": !0 }, T))
  );
  if (d.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: t,
    footer: s,
    default: d
  };
}
function Ph(u) {
  const A = Eh(u), l = !bh(u) && !A;
  return {
    transition: A,
    externalComponent: l,
    tag: l ? tt(u) : A ? jv : u
  };
}
function Ih({ $slots: u, tag: A, realList: l, getKey: o }) {
  const t = Rh({ $slots: u, realList: l, getKey: o }), s = Ph(A);
  return new Dh({ nodes: t, root: s, realList: l });
}
function Fd(u, A) {
  Or(() => this.$emit(u.toLowerCase(), A));
}
function Bd(u) {
  return (A, l) => {
    if (this.realList !== null)
      return this[`onDrag${u}`](A, l);
  };
}
function Lh(u) {
  const A = Bd.call(this, u);
  return (l, o) => {
    A.call(this, l, o), Fd.call(this, u, l);
  };
}
let Bl = null;
const Nh = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (u) => u
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, Oh = [
  "update:modelValue",
  "change",
  ...[...ys.manageAndEmit, ...ys.emit].map((u) => u.toLowerCase())
], Es = yn({
  name: "draggable",
  inheritAttrs: !1,
  props: Nh,
  emits: Oh,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: u, $attrs: A, tag: l, componentData: o, realList: t, getKey: s } = this, f = Ih({
        $slots: u,
        tag: l,
        realList: t,
        getKey: s
      });
      this.componentStructure = f;
      const d = Ch({ $attrs: A, componentData: o });
      return f.render(ta, d);
    } catch (u) {
      return this.error = !0, ta("pre", { style: { color: "red" } }, u.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && hh.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: u, $el: A, componentStructure: l } = this;
    l.updated();
    const o = Th({
      $attrs: u,
      callBackBuilder: {
        manageAndEmit: (s) => Lh.call(this, s),
        emit: (s) => Fd.bind(this, s),
        manage: (s) => Bd.call(this, s)
      }
    }), t = A.nodeType === 1 ? A : A.parentElement;
    this._sortable = new Ne(t, o), this.targetDomElement = t, t.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: u } = this;
      return u || this.modelValue;
    },
    getKey() {
      const { itemKey: u } = this;
      return typeof u == "function" ? u : (A) => A[u];
    }
  },
  watch: {
    $attrs: {
      handler(u) {
        const { _sortable: A } = this;
        !A || Od(u).forEach(([l, o]) => {
          A.option(l, o);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(u) {
      return this.componentStructure.getUnderlyingVm(u) || null;
    },
    getUnderlyingPotencialDraggableComponent(u) {
      return u.__draggable_component__;
    },
    emitChanges(u) {
      Or(() => this.$emit("change", u));
    },
    alterList(u) {
      if (this.list) {
        u(this.list);
        return;
      }
      const A = [...this.modelValue];
      u(A), this.$emit("update:modelValue", A);
    },
    spliceList() {
      const u = (A) => A.splice(...arguments);
      this.alterList(u);
    },
    updatePosition(u, A) {
      const l = (o) => o.splice(A, 0, o.splice(u, 1)[0]);
      this.alterList(l);
    },
    getRelatedContextFromMoveEvent({ to: u, related: A }) {
      const l = this.getUnderlyingPotencialDraggableComponent(u);
      if (!l)
        return { component: l };
      const o = l.realList, t = { list: o, component: l };
      return u !== A && o ? { ...l.getUnderlyingVm(A) || {}, ...t } : t;
    },
    getVmIndexFromDomIndex(u) {
      return this.componentStructure.getVmIndexFromDomIndex(
        u,
        this.targetDomElement
      );
    },
    onDragStart(u) {
      this.context = this.getUnderlyingVm(u.item), u.item._underlying_vm_ = this.clone(this.context.element), Bl = u.item;
    },
    onDragAdd(u) {
      const A = u.item._underlying_vm_;
      if (A === void 0)
        return;
      Fl(u.item);
      const l = this.getVmIndexFromDomIndex(u.newIndex);
      this.spliceList(l, 0, A);
      const o = { element: A, newIndex: l };
      this.emitChanges({ added: o });
    },
    onDragRemove(u) {
      if (ed(this.$el, u.item, u.oldIndex), u.pullMode === "clone") {
        Fl(u.clone);
        return;
      }
      const { index: A, element: l } = this.context;
      this.spliceList(A, 1);
      const o = { element: l, oldIndex: A };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(u) {
      Fl(u.item), ed(u.from, u.item, u.oldIndex);
      const A = this.context.index, l = this.getVmIndexFromDomIndex(u.newIndex);
      this.updatePosition(A, l);
      const o = { element: this.context.element, oldIndex: A, newIndex: l };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(u, A) {
      if (!u.element)
        return 0;
      const l = [...A.to.children].filter(
        (f) => f.style.display !== "none"
      ), o = l.indexOf(A.related), t = u.component.getVmIndexFromDomIndex(
        o
      );
      return l.indexOf(Bl) !== -1 || !A.willInsertAfter ? t : t + 1;
    },
    onDragMove(u, A) {
      const { move: l, realList: o } = this;
      if (!l || !o)
        return !0;
      const t = this.getRelatedContextFromMoveEvent(u), s = this.computeFutureIndex(t, u), f = {
        ...this.context,
        futureIndex: s
      }, d = {
        ...u,
        relatedContext: t,
        draggedContext: f
      };
      return l(d, A);
    },
    onDragEnd() {
      Bl = null;
    }
  }
});
function Fh({ t: u }) {
  return [
    {
      name: "main",
      title: u("menu.main"),
      list: [
        Vl,
        Yl,
        $l,
        jl,
        Ql,
        kl,
        Kl,
        Xl,
        Gl,
        Jl,
        Zl,
        es,
        ts,
        ns,
        rs,
        us,
        fs,
        vs
      ]
    },
    {
      name: "aide",
      title: u("menu.aide"),
      list: [
        is,
        ss,
        os,
        _l,
        cs
      ]
    },
    {
      name: "layout",
      title: u("menu.layout"),
      list: [
        ql,
        ls,
        as,
        ds
      ]
    }
  ];
}
const Cs = vd, St = vd.factory();
let Hd = null, rd = qi(null);
function As(...u) {
  return Hd(...u);
}
const Ud = (u) => {
  rd.value = u;
  const A = Wl(rd);
  return Hd = A.t, A;
};
Ud();
const Bh = yn({
  name: "FcDesigner",
  components: {
    draggable: Es,
    DragForm: St.$form(),
    ViewForm: Cs.$form()
  },
  props: ["menu", "height", "config", "mask", "locale"],
  setup(u) {
    const { menu: A, height: l, mask: o, locale: t } = Ul(u), s = Vv(), f = rl({ active: null });
    Tf("fcx", f), Tf("designer", s), window.console.log(Hn);
    const d = ki(u, "config", {}), c = ki(d.value, "baseRule", null), m = ki(d.value, "componentRule", {}), T = ki(d.value, "validateRule", null), x = ki(d.value, "formRule", null), w = oo(() => {
      const h = l.value;
      return h ? xt.Number(h) ? `${h}px` : h : "100%";
    });
    let E = As;
    t.value && (E = Wl(t).t);
    const g = (...h) => E(...h), S = (h, b, ...C) => {
      if (b) {
        if (xt.Function(b))
          return b(...C);
        if (b.rule) {
          let R = b.rule(...C);
          return b.append && (R = [...R, ...h(...C)]), R;
        }
      }
      return h(...C);
    }, v = rl({
      cacheProps: {},
      moveRule: null,
      addRule: null,
      added: null,
      activeTab: "form",
      activeRule: null,
      children: qi([]),
      menuList: A.value || Fh({ t: g }),
      showBaseRule: !1,
      visible: {
        preview: !1
      },
      t: g,
      preview: {
        state: !1,
        rule: [],
        option: {}
      },
      dragForm: qi({
        rule: [],
        api: {}
      }),
      form: {
        rule: S(wf, x.value, { t: g }),
        api: {},
        option: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1
        },
        value: {
          form: {
            inline: !1,
            hideRequiredAsterisk: !1,
            labelPosition: "right",
            size: "small",
            labelWidth: "125px",
            formCreateSubmitBtn: !0,
            formCreateResetBtn: !1
          },
          submitBtn: !1
        }
      },
      baseForm: {
        rule: S(Gi, c.value, { t: g }),
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (h) => {
            h.activeRule = v.activeRule, h.setValue(h.options.formData || {});
          }
        }
      },
      validateForm: {
        rule: S(Df, T.value, { t: g }),
        api: {},
        value: [],
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (h) => {
            h.activeRule = v.activeRule, h.setValue(h.options.formData || {});
          }
        }
      },
      propsForm: {
        rule: [],
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (h) => {
            h.activeRule = v.activeRule, h.setValue(h.options.formData || {});
          }
        }
      }
    });
    il(() => v.preview.state, function(h) {
      h || Or(() => {
        v.preview.rule = v.preview.option = null;
      });
    });
    let M = null;
    il(() => t.value, (h) => {
      E = h ? Wl(t).t : As;
      const b = v.form.api.formData && v.form.api.formData(), C = v.baseForm.api.formData && v.baseForm.api.formData(), R = v.validateForm.api.formData && v.validateForm.api.formData();
      v.validateForm.rule = S(Df, T.value, { t: g }), v.baseForm.rule = S(Gi, c.value, { t: g }), v.form.rule = S(wf, x.value, { t: g }), v.cacheProps = {};
      const O = v.activeRule;
      let B = null;
      O && (B = v.propsForm.api.formData && v.propsForm.api.formData(), v.propsForm.rule = v.cacheProps[O._id] = S(O.config.config.props, m.value && m.value[O.config.config.name], O, {
        t: g,
        api: v.dragForm.api
      })), Or(() => {
        b && v.form.api.setValue(b), C && v.baseForm.api.setValue(C), R && v.validateForm.api.setValue(R), B && v.propsForm.api.setValue(B);
      });
    });
    const y = {
      unWatchActiveRule() {
        M && M(), M = null;
      },
      watchActiveRule() {
        y.unWatchActiveRule(), M = il(() => v.activeRule, function(h) {
          h && y.updateRuleFormData();
        }, { deep: !0, flush: "post" });
      },
      makeChildren(h) {
        return rl({ children: h }).children;
      },
      addMenu(h) {
        if (!h.name || !h.list)
          return;
        let b = !0;
        v.menuList.forEach((C, R) => {
          C.name === h.name && (v.menuList[R] = h, b = !1);
        }), b && v.menuList.push(h);
      },
      removeMenu(h) {
        [...v.menuList].forEach((b, C) => {
          b.name === h && v.menuList.splice(C, 1);
        });
      },
      setMenuItem(h, b) {
        v.menuList.forEach((C) => {
          C.name === h && (C.list = b);
        });
      },
      appendMenuItem(h, b) {
        v.menuList.forEach((C) => {
          C.name === h && C.list.push(...Array.isArray(b) ? b : [b]);
        });
      },
      removeMenuItem(h) {
        v.menuList.forEach((b) => {
          let C;
          xt.String(h) ? [...b.list].forEach((R, O) => {
            R.name === h && b.list.splice(O, 1);
          }) : (C = b.list.indexOf(h)) > -1 && b.list.splice(C, 1);
        });
      },
      addComponent(h) {
        Array.isArray(h) ? h.forEach((b) => {
          Hn[b.name] = b;
        }) : Hn[h.name] = h;
      },
      getParent(h) {
        let b = h.__fc__.parent.rule;
        const C = b.config;
        return C && C.config.inside && (h = b, b = b.__fc__.parent.rule), { root: b, parent: h };
      },
      makeDrag(h, b, C, R) {
        return {
          type: "DragBox",
          wrap: {
            show: !1
          },
          col: {
            show: !1
          },
          inject: !0,
          props: {
            rule: {
              props: {
                tag: "el-col",
                group: h === !0 ? "default" : h,
                ghostClass: "ghost",
                animation: 150,
                handle: "._fc-drag-btn",
                emptyInsertThreshold: 0,
                direction: "vertical",
                itemKey: "type"
              }
            },
            tag: b
          },
          children: C,
          on: R
        };
      },
      clearDragRule() {
        y.setRule([]);
      },
      makeDragRule(h) {
        return y.makeChildren([y.makeDrag(!0, "draggable", h, {
          add: (b, C) => y.dragAdd(h, C),
          end: (b, C) => y.dragEnd(h, C),
          start: (b, C) => y.dragStart(h, C),
          unchoose: (b, C) => y.dragUnchoose(h, C)
        })]);
      },
      previewFc() {
        v.preview.state = !0, v.preview.rule = y.getRule(), v.preview.option = y.getOption();
      },
      getRule() {
        return y.parseRule(pr(v.dragForm.api.rule[0].children));
      },
      getJson() {
        return St.toJson(y.getRule());
      },
      getOption() {
        const h = pr(v.form.value);
        return h.submitBtn = h._submitBtn, h.resetBtn = h._resetBtn, typeof h.submitBtn == "object" ? h.submitBtn.show = h.form.formCreateSubmitBtn : h.submitBtn = {
          show: h.form.formCreateSubmitBtn,
          innerText: g("form.submit")
        }, typeof h.resetBtn == "object" ? h.resetBtn.show = h.form.formCreateResetBtn : h.resetBtn = {
          show: h.form.formCreateResetBtn,
          innerText: g("form.reset")
        }, delete h.form.formCreateSubmitBtn, delete h.form.formCreateResetBtn, delete h._submitBtn, delete h._resetBtn, h;
      },
      getOptions() {
        y.getOption();
      },
      setRule(h) {
        h || (h = []), v.children = qi(y.loadRule(xt.String(h) ? St.parseJson(h) : pr(h))), y.clearActiveRule(), v.dragForm.rule = y.makeDragRule(y.makeChildren(v.children));
      },
      setBaseRuleConfig(h, b) {
        c.value = { rule: h, append: b }, v.baseForm.rule = S(Gi, c.value, { t: g });
      },
      setComponentRuleConfig(h, b, C) {
        m.value[h] = { rule: b, append: C }, v.cacheProps = {};
        const R = v.activeRule;
        if (R) {
          const O = v.propsForm.api.formData && v.propsForm.api.formData();
          v.propsForm.rule = v.cacheProps[R._id] = S(R.config.config.props, m.value && m.value[R.config.config.name], R, {
            t: g,
            api: v.dragForm.api
          }), Or(() => {
            O && v.propsForm.api.setValue(O);
          });
        }
      },
      setValidateRuleConfig(h, b) {
        T.value = { rule: h, append: b }, v.validateForm.rule = S(Gi, T.value, { t: g });
      },
      setFormRuleConfig(h, b) {
        x.value = { rule: h, append: b }, v.form.rule = S(Gi, x.value, { t: g });
      },
      clearActiveRule() {
        v.activeRule = null, v.activeTab = "form";
      },
      setOption(h) {
        let b = { ...h };
        b.form.formCreateSubmitBtn = typeof b.submitBtn == "object" ? b.submitBtn.show === void 0 ? !0 : !!b.submitBtn.show : !!b.submitBtn, b.form.formCreateResetBtn = typeof b.resetBtn == "object" ? !!b.resetBtn.show : !!b.resetBtn, b._resetBtn = b.resetBtn, b.resetBtn = !1, b._submitBtn = b.submitBtn, b.submitBtn = !1, v.form.value = b;
      },
      setOptions(h) {
        y.setOption(h);
      },
      loadRule(h) {
        const b = [];
        return h.forEach((C) => {
          if (xt.String(C))
            return b.push(C);
          const R = Hn[C._fc_drag_tag] || Hn[C.type];
          R && R.loadRule && R.loadRule(C);
          const O = C.children;
          if (C.children = [], C.control && (C._control = C.control, delete C.control), R) {
            if (C = y.makeRule(R, C), O) {
              let B = C.children[0].children;
              R.drag && (B = B[0].children), B.push(...y.loadRule(O));
            }
          } else
            O && (C.children = y.loadRule(O));
          b.push(C);
        }), b;
      },
      parseRule(h) {
        return [...h].reduce((b, C) => xt.String(C) ? (b.push(C), b) : C.type === "DragBox" ? (b.push(...y.parseRule(C.children)), b) : C.type === "DragTool" && (C = C.children[0], C.type === "DragBox") ? (b.push(...y.parseRule(C.children)), b) : (C && (C = { ...C }, C.children.length && (C.children = y.parseRule(C.children)), delete C._id, delete C.key, delete C.component, C.config && (C.config.config && C.config.config.parseRule && C.config.config.parseRule(C), delete C.config.config), C.effect && (delete C.effect._fc, delete C.effect._fc_tool), C._control && (C.control = C._control, delete C._control), Object.keys(C).filter((R) => Array.isArray(C[R]) && C[R].length === 0 || xt.Object(C[R]) && Object.keys(C[R]).length === 0).forEach((R) => {
          delete C[R];
        }), b.push(C)), b), []);
      },
      baseChange(h, b, C, R) {
        var O, B, F;
        v.activeRule && R[v.activeRule._id] === v.activeRule && (y.unWatchActiveRule(), v.activeRule[h] = b, y.watchActiveRule(), (F = (B = (O = v.activeRule.config.config) == null ? void 0 : O.watch) == null ? void 0 : B["$" + h]) == null || F.call(B, {
          field: h,
          value: b,
          api: R,
          rule: v.activeRule
        }));
      },
      propRemoveField(h, b, C) {
        var R, O, B;
        if (v.activeRule && C[v.activeRule._id] === v.activeRule) {
          y.unWatchActiveRule();
          const F = h;
          if (v.dragForm.api.sync(v.activeRule), h.indexOf("formCreate") === 0) {
            if (h = h.replace("formCreate", ""), !h)
              return;
            h = zl(h), h.indexOf("effect") === 0 && h.indexOf(">") > -1 ? delete v.activeRule.effect[h.split(">")[1]] : h.indexOf("props") === 0 && h.indexOf(">") > -1 ? delete v.activeRule.props[h.split(">")[1]] : h.indexOf("attrs") === 0 && h.indexOf(">") > -1 ? delete v.activeRule.attrs[h.split(">")[1]] : h === "child" ? delete v.activeRule.children[0] : h && (v.activeRule[h] = void 0);
          } else
            delete v.activeRule.props[h];
          y.watchActiveRule(), (B = (O = (R = v.activeRule.config.config) == null ? void 0 : R.watch) == null ? void 0 : O[F]) == null || B.call(O, {
            field: F,
            value: void 0,
            api: C,
            rule: v.activeRule
          });
        }
      },
      propChange(h, b, C, R) {
        var O, B, F;
        if (window.console.log("this is prop change begin---------"), v.activeRule && R[v.activeRule._id] === v.activeRule) {
          y.unWatchActiveRule();
          const z = h;
          if (h.indexOf("formCreate") === 0) {
            if (h = h.replace("formCreate", ""), !h)
              return;
            h = zl(h), h.indexOf("effect") === 0 && h.indexOf(">") > -1 ? v.activeRule.effect[h.split(">")[1]] = b : h.indexOf("props") === 0 && h.indexOf(">") > -1 ? v.activeRule.props[h.split(">")[1]] = b : h.indexOf("attrs") === 0 && h.indexOf(">") > -1 ? v.activeRule.attrs[h.split(">")[1]] = b : h === "child" ? v.activeRule.children[0] = b : v.activeRule[h] = b;
          } else
            v.activeRule.props[h] = b;
          y.watchActiveRule(), (F = (B = (O = v.activeRule.config.config) == null ? void 0 : O.watch) == null ? void 0 : B[z]) == null || F.call(B, {
            field: z,
            value: b,
            api: R,
            rule: v.activeRule
          });
        }
      },
      validateChange(h) {
        !v.activeRule || v.validateForm.api[v.activeRule._id] !== v.activeRule || (v.activeRule.validate = h.validate || [], v.dragForm.api.refreshValidate(), v.dragForm.api.nextTick(() => {
          v.dragForm.api.clearValidateState(v.activeRule.__fc__.id);
        }));
      },
      toolActive(h) {
        y.unWatchActiveRule(), v.activeRule && (delete v.propsForm.api[v.activeRule._id], delete v.baseForm.api[v.activeRule._id], delete v.validateForm.api[v.activeRule._id], delete v.dragForm.api.activeRule), v.activeRule = h, v.dragForm.api.activeRule = h, Or(() => {
          v.activeTab = "props", Or(() => {
            v.propsForm.api[v.activeRule._id] = v.activeRule, v.baseForm.api[v.activeRule._id] = v.activeRule, v.validateForm.api[v.activeRule._id] = v.activeRule;
          });
        }), v.cacheProps[h._id] || (v.cacheProps[h._id] = S(h.config.config.props, m.value && m.value[h.config.config.name], h, {
          t: g,
          api: v.dragForm.api
        })), v.propsForm.rule = v.cacheProps[h._id], y.updateRuleFormData(), y.watchActiveRule();
      },
      updateRuleFormData() {
        const h = v.activeRule, b = { ...h.props, formCreateChild: pr(h.children[0]) };
        Object.keys(h).forEach((C) => {
          ["effect", "config", "payload", "id", "type"].indexOf(C) < 0 && (b["formCreate" + Fr(C)] = pr(h[C]));
        }), ["props", "effect", "attrs"].forEach((C) => {
          h[C] && Object.keys(h[C]).forEach((R) => {
            b["formCreate" + Fr(C) + ">" + R] = pr(h[C][R]);
          });
        }), v.propsForm.value = b, v.showBaseRule = pd(h, "field") && h.input !== !1 && (!d.value || d.value.showBaseForm !== !1), v.showBaseRule && (v.baseForm.value = {
          field: h.field,
          title: h.title || "",
          info: h.info,
          _control: h._control
        }, v.validateForm.value = { validate: h.validate ? [...h.validate] : [] }, v.dragForm.api.refreshValidate(), v.dragForm.api.nextTick(() => {
          v.dragForm.api.clearValidateState(h.__fc__.id);
        }));
      },
      dragStart(h) {
        v.moveRule = h, v.added = !1;
      },
      dragUnchoose(h, b) {
        v.addRule = {
          children: h,
          oldIndex: b.oldIndex
        };
      },
      dragAdd(h, b) {
        const C = b.newIndex, R = b.item._underlying_vm_;
        if (!R || R.__fc__) {
          if (v.addRule) {
            const O = v.addRule.children.splice(v.addRule.oldIndex, 1);
            h.splice(C, 0, O[0]);
          }
        } else {
          window.console.log(Hn);
          const O = y.makeRule(Hn[R.name]);
          h.splice(C, 0, O);
        }
        v.added = !0;
      },
      dragEnd(h, { newIndex: b, oldIndex: C }) {
        if (!v.added && !(v.moveRule === h && b === C)) {
          const R = v.moveRule.splice(C, 1);
          h.splice(b, 0, R[0]);
        }
        v.moveRule = null, v.addRule = null, v.added = !1;
      },
      makeRule(h, b) {
        window.console.log(h);
        const C = b || h.rule({ t: g });
        C.config = { config: h }, h.component && (C.component = ad(h.component)), C.effect || (C.effect = {}), C.effect._fc = !0, C._fc_drag_tag = h.name;
        let R;
        if (h.drag && C.children.push(R = y.makeDrag(h.drag, C.type, y.makeChildren([]), {
          end: (B, F) => y.dragEnd(B.self.children, F),
          add: (B, F) => y.dragAdd(B.self.children, F),
          start: (B, F) => y.dragStart(B.self.children, F),
          unchoose: (B, F) => y.dragUnchoose(B.self.children, F)
        })), h.children && !b)
          for (let B = 0; B < (h.childrenLen || 1); B++) {
            const F = y.makeRule(Hn[h.children]);
            (R || C).children.push(F);
          }
        const O = o.value !== void 0 ? o.value !== !1 : h.mask !== !1;
        return h.inside ? (C.children = y.makeChildren([{
          type: "DragTool",
          props: {
            dragBtn: h.dragBtn !== !1,
            children: h.children,
            mask: O,
            fullWidth: C.fullWidth,
            type: C.type
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: B }) => {
              const F = y.getParent(B).parent;
              F.__fc__.rm(), s.emit("delete", F), y.clearActiveRule();
            },
            create: ({ self: B }) => {
              const F = y.getParent(B);
              s.emit("create", F.parent), F.root.children.splice(F.root.children.indexOf(F.parent) + 1, 0, y.makeRule(F.parent.config.config));
            },
            addChild: ({ self: B }) => {
              const F = y.getParent(B), z = F.parent.config.config, I = Hn[z.children];
              !I || (z.drag ? F.parent.children[0] : F.parent).children[0].children.push(y.makeRule(I));
            },
            copy: ({ self: B }) => {
              const F = y.getParent(B);
              s.emit("copy", F.parent), F.root.children.splice(F.root.children.indexOf(F.parent) + 1, 0, St.copyRule(F.parent));
            },
            active: ({ self: B }) => {
              const F = y.getParent(B);
              s.emit("active", F.parent), y.toolActive(F.parent);
            }
          },
          children: C.children
        }]), C) : {
          type: "DragTool",
          props: {
            dragBtn: h.dragBtn !== !1,
            children: h.children,
            mask: O,
            fullWidth: C.fullWidth,
            type: C.type
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: B }) => {
              s.emit("delete", B.children[0]), B.__fc__.rm(), y.clearActiveRule();
            },
            create: ({ self: B }) => {
              s.emit("create", B.children[0]);
              const F = y.getParent(B);
              F.root.children.splice(F.root.children.indexOf(F.parent) + 1, 0, y.makeRule(B.children[0].config.config));
            },
            addChild: ({ self: B }) => {
              const F = B.children[0].config.config, z = Hn[F.children];
              !z || (F.drag ? B.children[0] : B).children[0].children.push(y.makeRule(z));
            },
            copy: ({ self: B }) => {
              s.emit("copy", B.children[0]);
              const F = y.getParent(B);
              F.root.children.splice(F.root.children.indexOf(F.parent) + 1, 0, St.copyRule(F.parent));
            },
            active: ({ self: B }) => {
              s.emit("active", B.children[0]), y.toolActive(B.children[0]);
            }
          },
          children: y.makeChildren([C])
        };
      }
    };
    return v.dragForm.rule = y.makeDragRule(y.makeChildren(v.children)), {
      ...Ul(v),
      ...y,
      dragHeight: w,
      t: g
    };
  },
  created() {
    document.body.ondrop = (u) => {
      u.preventDefault(), u.stopPropagation();
    };
  }
}), Hh = { class: "_fc-l-title" }, Uh = { class: "_fc-l-item" }, zh = { class: "_fc-l-icon" }, Wh = { class: "_fc-l-name" }, $h = /* @__PURE__ */ it("i", { class: "fc-icon icon-preview" }, null, -1), jh = /* @__PURE__ */ it("i", { class: "fc-icon icon-delete" }, null, -1), Vh = { class: "_fc-m-drag" };
function Yh(u, A, l, o, t, s) {
  const f = tt("draggable"), d = tt("el-aside"), c = tt("el-button"), m = tt("el-popconfirm"), T = tt("el-header"), x = tt("DragForm"), w = tt("ElMain"), E = tt("ElContainer"), g = tt("ElDivider"), S = tt("ElAside"), v = tt("ViewForm"), M = tt("ElDialog");
  return nt(), Un(E, {
    class: "_fc-designer",
    style: Yv("height:" + u.dragHeight)
  }, {
    default: Ve(() => [
      $e(w, null, {
        default: Ve(() => [
          $e(E, { style: { height: "100%" } }, {
            default: Ve(() => [
              $e(d, {
                class: "_fc-l",
                width: "266px"
              }, {
                default: Ve(() => [
                  (nt(!0), $t(sd, null, ud(u.menuList, (y, h) => (nt(), $t("div", {
                    key: h,
                    class: "_fc-l-group"
                  }, [
                    it("h4", Hh, Gt(y.title), 1),
                    $e(f, {
                      group: { name: "default", pull: "clone", put: !1 },
                      sort: !1,
                      itemKey: "name",
                      list: y.list
                    }, {
                      item: Ve(({ element: b }) => [
                        it("div", Uh, [
                          it("div", zh, [
                            it("i", {
                              class: Xo(["fc-icon", b.icon || "icon-input"])
                            }, null, 2)
                          ]),
                          it("span", Wh, Gt(u.t("components." + b.name + ".name") || b.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["list"])
                  ]))), 128))
                ]),
                _: 1
              }),
              $e(E, { class: "_fc-m" }, {
                default: Ve(() => [
                  $e(T, {
                    class: "_fc-m-tools",
                    height: "45"
                  }, {
                    default: Ve(() => [
                      fd(u.$slots, "handle"),
                      $e(c, {
                        type: "primary",
                        plain: "",
                        round: "",
                        size: "small",
                        onClick: u.previewFc
                      }, {
                        default: Ve(() => [
                          $h,
                          Wn(" " + Gt(u.t("designer.preview")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      $e(m, {
                        title: u.t("designer.clearConfirmTitle"),
                        width: "200px",
                        "confirm-button-text": u.t("designer.clearConfirm"),
                        "cancel-button-text": u.t("designer.clearCancel"),
                        onConfirm: u.clearDragRule
                      }, {
                        reference: Ve(() => [
                          $e(c, {
                            type: "danger",
                            plain: "",
                            round: "",
                            size: "small"
                          }, {
                            default: Ve(() => [
                              jh,
                              Wn(Gt(u.t("designer.clear")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title", "confirm-button-text", "cancel-button-text", "onConfirm"])
                    ]),
                    _: 3
                  }),
                  $e(w, { style: { background: "#F5F5F5", padding: "20px" } }, {
                    default: Ve(() => [
                      it("div", Vh, [
                        $e(x, {
                          rule: u.dragForm.rule,
                          option: u.form.value,
                          api: u.dragForm.api,
                          "onUpdate:api": A[0] || (A[0] = (y) => u.dragForm.api = y),
                          style: { border: "1px solid red" }
                        }, null, 8, ["rule", "option", "api"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }),
              !u.config || u.config.showConfig !== !1 ? (nt(), Un(S, {
                key: 0,
                class: "_fc-r",
                width: "320px"
              }, {
                default: Ve(() => [
                  $e(E, { style: { height: "100%" } }, {
                    default: Ve(() => [
                      $e(T, {
                        height: "40px",
                        class: "_fc-r-tabs"
                      }, {
                        default: Ve(() => [
                          !!u.activeRule || u.config && u.config.showFormConfig === !1 ? (nt(), $t("div", {
                            key: 0,
                            class: Xo(["_fc-r-tab", { active: u.activeTab === "props" }]),
                            onClick: A[1] || (A[1] = (y) => u.activeTab = "props")
                          }, Gt(u.t("designer.config.component")), 3)) : vn("", !0),
                          !u.config || u.config.showFormConfig !== !1 ? (nt(), $t("div", {
                            key: 1,
                            class: Xo(["_fc-r-tab", { active: u.activeTab === "form" && !!u.activeRule }]),
                            onClick: A[2] || (A[2] = (y) => u.activeTab = "form")
                          }, Gt(u.t("designer.config.form")), 3)) : vn("", !0)
                        ]),
                        _: 1
                      }),
                      !u.config || u.config.showFormConfig !== !1 ? $o((nt(), Un(w, { key: 0 }, {
                        default: Ve(() => [
                          $e(x, {
                            rule: u.form.rule,
                            option: u.form.option,
                            modelValue: u.form.value.form,
                            "onUpdate:modelValue": A[3] || (A[3] = (y) => u.form.value.form = y),
                            api: u.form.api,
                            "onUpdate:api": A[4] || (A[4] = (y) => u.form.api = y)
                          }, null, 8, ["rule", "option", "modelValue", "api"])
                        ]),
                        _: 1
                      }, 512)), [
                        [jo, u.activeTab === "form"]
                      ]) : vn("", !0),
                      $o((nt(), Un(w, {
                        style: { padding: "0 20px" },
                        key: u.activeRule ? u.activeRule._id : ""
                      }, {
                        default: Ve(() => [
                          it("div", null, [
                            u.showBaseRule ? (nt(), Un(g, { key: 0 }, {
                              default: Ve(() => [
                                Wn(Gt(u.t("designer.config.rule")), 1)
                              ]),
                              _: 1
                            })) : vn("", !0),
                            $o($e(x, {
                              api: u.baseForm.api,
                              "onUpdate:api": A[5] || (A[5] = (y) => u.baseForm.api = y),
                              rule: u.baseForm.rule,
                              option: u.baseForm.options,
                              modelValue: u.baseForm.value,
                              onChange: u.baseChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange"]), [
                              [jo, u.showBaseRule]
                            ]),
                            $e(g, null, {
                              default: Ve(() => [
                                Wn(Gt(u.t("designer.config.props")), 1)
                              ]),
                              _: 1
                            }),
                            $e(x, {
                              api: u.propsForm.api,
                              "onUpdate:api": A[6] || (A[6] = (y) => u.propsForm.api = y),
                              rule: u.propsForm.rule,
                              option: u.propsForm.options,
                              modelValue: u.propsForm.value,
                              style: { border: "1px solid red" },
                              onChange: u.propChange,
                              onRemoveField: u.propRemoveField
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange", "onRemoveField"]),
                            u.showBaseRule ? (nt(), Un(g, { key: 1 }, {
                              default: Ve(() => [
                                Wn(Gt(u.t("designer.config.validate")), 1)
                              ]),
                              _: 1
                            })) : vn("", !0),
                            $o($e(x, {
                              api: u.validateForm.api,
                              "onUpdate:api": A[7] || (A[7] = (y) => u.validateForm.api = y),
                              rule: u.validateForm.rule,
                              option: u.validateForm.options,
                              modelValue: u.validateForm.value,
                              "onUpdate:modelValue": u.validateChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onUpdate:modelValue"]), [
                              [jo, u.showBaseRule]
                            ])
                          ])
                        ]),
                        _: 1
                      })), [
                        [jo, u.activeTab === "props"]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : vn("", !0),
              $e(M, {
                modelValue: u.preview.state,
                "onUpdate:modelValue": A[8] || (A[8] = (y) => u.preview.state = y),
                width: "800px",
                "append-to-body": ""
              }, {
                default: Ve(() => [
                  u.preview.state ? (nt(), Un(v, {
                    key: 0,
                    rule: u.preview.rule,
                    option: u.preview.option
                  }, null, 8, ["rule", "option"])) : vn("", !0)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["style"]);
}
const yr = /* @__PURE__ */ qn(Bh, [["render", Yh]]);
let Qh = 1;
const kh = yn({
  name: "DragTool",
  props: ["dragBtn", "children", "unique", "mask", "fullWidth", "type"],
  setup(u) {
    const { unique: A } = Ul(u), l = oo(() => A.value || Qh++), o = Qv("fcx");
    return {
      id: l,
      state: o
    };
  },
  mounted() {
    const u = this.$el;
    u.parentNode, this.fullWidth && (u.parentNode.style.width = "100%", u.style.width = "100%"), this.type == "el-form" && (u.parentNode.parentNode.style.width = "100%");
  },
  methods: {
    active() {
      this.state.active !== this.id && (this.state.active = this.id, this.$emit("active"));
    }
  },
  beforeDestroy() {
    this.state = {};
  }
}), Gh = {
  key: 0,
  class: "drag-mask"
}, Kh = { class: "drag-l" }, Xh = {
  key: 0,
  class: "drag-btn _fc-drag-btn",
  style: { cursor: "move" }
}, Jh = /* @__PURE__ */ it("i", { class: "fc-icon icon-move" }, null, -1), Zh = [
  Jh
], qh = { class: "drag-r" }, _h = /* @__PURE__ */ it("i", { class: "fc-icon icon-add" }, null, -1), eg = [
  _h
], tg = /* @__PURE__ */ it("i", { class: "fc-icon icon-copy" }, null, -1), ng = [
  tg
], rg = /* @__PURE__ */ it("i", { class: "fc-icon icon-add-child" }, null, -1), ig = [
  rg
], og = /* @__PURE__ */ it("i", { class: "fc-icon icon-delete" }, null, -1), ag = [
  og
];
function lg(u, A, l, o, t, s) {
  return nt(), $t("div", {
    class: Xo(["drag-tool", { active: u.state.active === u.id }]),
    onClick: A[4] || (A[4] = kv((...f) => u.active && u.active(...f), ["stop"]))
  }, [
    u.mask ? (nt(), $t("div", Gh)) : vn("", !0),
    it("div", Kh, [
      u.state.active === u.id && u.dragBtn !== !1 ? (nt(), $t("div", Xh, Zh)) : vn("", !0)
    ]),
    it("div", qh, [
      it("div", {
        class: "drag-btn",
        onClick: A[0] || (A[0] = (f) => u.$emit("create"))
      }, eg),
      it("div", {
        class: "drag-btn",
        onClick: A[1] || (A[1] = (f) => u.$emit("copy"))
      }, ng),
      u.children ? (nt(), $t("div", {
        key: 0,
        class: "drag-btn",
        onClick: A[2] || (A[2] = (f) => u.$emit("addChild"))
      }, ig)) : vn("", !0),
      it("div", {
        class: "drag-btn drag-btn-danger",
        onClick: A[3] || (A[3] = (f) => u.$emit("delete"))
      }, ag)
    ]),
    fd(u.$slots, "default")
  ], 2);
}
const sg = /* @__PURE__ */ qn(kh, [["render", lg]]);
var ug = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hl = { exports: {} }, id;
function zd() {
  return id || (id = 1, function(u, A) {
    (function(l, o) {
      u.exports = o();
    })(ug, function() {
      var l = navigator.userAgent, o = navigator.platform, t = /gecko\/\d/i.test(l), s = /MSIE \d/.test(l), f = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(l), d = /Edge\/(\d+)/.exec(l), c = s || f || d, m = c && (s ? document.documentMode || 6 : +(d || f)[1]), T = !d && /WebKit\//.test(l), x = T && /Qt\/\d+\.\d+/.test(l), w = !d && /Chrome\/(\d+)/.exec(l), E = w && +w[1], g = /Opera\//.test(l), S = /Apple Computer/.test(navigator.vendor), v = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(l), M = /PhantomJS/.test(l), y = S && (/Mobile\/\w+/.test(l) || navigator.maxTouchPoints > 2), h = /Android/.test(l), b = y || h || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(l), C = y || /Mac/.test(o), R = /\bCrOS\b/.test(l), O = /win/i.test(o), B = g && l.match(/Version\/(\d*\.\d*)/);
      B && (B = Number(B[1])), B && B >= 15 && (g = !1, T = !0);
      var F = C && (x || g && (B == null || B < 12.11)), z = t || c && m >= 9;
      function I(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var U = function(e, n) {
        var i = e.className, r = I(n).exec(i);
        if (r) {
          var a = i.slice(r.index + r[0].length);
          e.className = i.slice(0, r.index) + (a ? r[1] + a : "");
        }
      };
      function H(e) {
        for (var n = e.childNodes.length; n > 0; --n)
          e.removeChild(e.firstChild);
        return e;
      }
      function j(e, n) {
        return H(e).appendChild(n);
      }
      function P(e, n, i, r) {
        var a = document.createElement(e);
        if (i && (a.className = i), r && (a.style.cssText = r), typeof n == "string")
          a.appendChild(document.createTextNode(n));
        else if (n)
          for (var p = 0; p < n.length; ++p)
            a.appendChild(n[p]);
        return a;
      }
      function V(e, n, i, r) {
        var a = P(e, n, i, r);
        return a.setAttribute("role", "presentation"), a;
      }
      var Q;
      document.createRange ? Q = function(e, n, i, r) {
        var a = document.createRange();
        return a.setEnd(r || e, i), a.setStart(e, n), a;
      } : Q = function(e, n, i) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", n), r;
      };
      function K(e, n) {
        if (n.nodeType == 3 && (n = n.parentNode), e.contains)
          return e.contains(n);
        do
          if (n.nodeType == 11 && (n = n.host), n == e)
            return !0;
        while (n = n.parentNode);
      }
      function q(e) {
        var n = e.ownerDocument || e, i;
        try {
          i = e.activeElement;
        } catch {
          i = n.body || null;
        }
        for (; i && i.shadowRoot && i.shadowRoot.activeElement; )
          i = i.shadowRoot.activeElement;
        return i;
      }
      function X(e, n) {
        var i = e.className;
        I(n).test(i) || (e.className += (i ? " " : "") + n);
      }
      function _(e, n) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          i[r] && !I(i[r]).test(n) && (n += " " + i[r]);
        return n;
      }
      var le = function(e) {
        e.select();
      };
      y ? le = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : c && (le = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function Se(e) {
        return e.display.wrapper.ownerDocument;
      }
      function ve(e) {
        return ce(e.display.wrapper);
      }
      function ce(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function ae(e) {
        return Se(e).defaultView;
      }
      function re(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, n);
        };
      }
      function se(e, n, i) {
        n || (n = {});
        for (var r in e)
          e.hasOwnProperty(r) && (i !== !1 || !n.hasOwnProperty(r)) && (n[r] = e[r]);
        return n;
      }
      function pe(e, n, i, r, a) {
        n == null && (n = e.search(/[^\s\u00a0]/), n == -1 && (n = e.length));
        for (var p = r || 0, D = a || 0; ; ) {
          var L = e.indexOf("	", p);
          if (L < 0 || L >= n)
            return D + (n - p);
          D += L - p, D += i - D % i, p = L + 1;
        }
      }
      var Pe = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = re(this.onTimeout, this);
      };
      Pe.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
      }, Pe.prototype.set = function(e, n) {
        this.f = n;
        var i = +new Date() + e;
        (!this.id || i < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = i);
      };
      function Ee(e, n) {
        for (var i = 0; i < e.length; ++i)
          if (e[i] == n)
            return i;
        return -1;
      }
      var je = 50, Ft = { toString: function() {
        return "CodeMirror.Pass";
      } }, Nt = { scroll: !1 }, lt = { origin: "*mouse" }, Et = { origin: "+move" };
      function Bt(e, n, i) {
        for (var r = 0, a = 0; ; ) {
          var p = e.indexOf("	", r);
          p == -1 && (p = e.length);
          var D = p - r;
          if (p == e.length || a + D >= n)
            return r + Math.min(D, n - a);
          if (a += p - r, a += i - a % i, r = p + 1, a >= n)
            return r;
        }
      }
      var dt = [""];
      function Xt(e) {
        for (; dt.length <= e; )
          dt.push(Ue(dt) + " ");
        return dt[e];
      }
      function Ue(e) {
        return e[e.length - 1];
      }
      function Ht(e, n) {
        for (var i = [], r = 0; r < e.length; r++)
          i[r] = n(e[r], r);
        return i;
      }
      function Ar(e, n, i) {
        for (var r = 0, a = i(n); r < e.length && i(e[r]) <= a; )
          r++;
        e.splice(r, 0, n);
      }
      function An() {
      }
      function hn(e, n) {
        var i;
        return Object.create ? i = Object.create(e) : (An.prototype = e, i = new An()), n && se(n, i), i;
      }
      var In = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function xn(e) {
        return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || In.test(e));
      }
      function jt(e, n) {
        return n ? n.source.indexOf("\\w") > -1 && xn(e) ? !0 : n.test(e) : xn(e);
      }
      function Sn(e) {
        for (var n in e)
          if (e.hasOwnProperty(n) && e[n])
            return !1;
        return !0;
      }
      var Ct = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function Ze(e) {
        return e.charCodeAt(0) >= 768 && Ct.test(e);
      }
      function Jt(e, n, i) {
        for (; (i < 0 ? n > 0 : n < e.length) && Ze(e.charAt(n)); )
          n += i;
        return n;
      }
      function We(e, n, i) {
        for (var r = n > i ? -1 : 1; ; ) {
          if (n == i)
            return n;
          var a = (n + i) / 2, p = r < 0 ? Math.ceil(a) : Math.floor(a);
          if (p == n)
            return e(p) ? n : i;
          e(p) ? i = p : n = p + r;
        }
      }
      function Ce(e, n, i, r) {
        if (!e)
          return r(n, i, "ltr", 0);
        for (var a = !1, p = 0; p < e.length; ++p) {
          var D = e[p];
          (D.from < i && D.to > n || n == i && D.to == n) && (r(Math.max(D.from, n), Math.min(D.to, i), D.level == 1 ? "rtl" : "ltr", p), a = !0);
        }
        a || r(n, i, "ltr");
      }
      var me = null;
      function Oe(e, n, i) {
        var r;
        me = null;
        for (var a = 0; a < e.length; ++a) {
          var p = e[a];
          if (p.from < n && p.to > n)
            return a;
          p.to == n && (p.from != p.to && i == "before" ? r = a : me = a), p.from == n && (p.from != p.to && i != "before" ? r = a : me = a);
        }
        return r != null ? r : me;
      }
      var be = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", n = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function i(W) {
          return W <= 247 ? e.charAt(W) : 1424 <= W && W <= 1524 ? "R" : 1536 <= W && W <= 1785 ? n.charAt(W - 1536) : 1774 <= W && W <= 2220 ? "r" : 8192 <= W && W <= 8203 ? "w" : W == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, a = /[stwN]/, p = /[LRr]/, D = /[Lb1n]/, L = /[1n]/;
        function N(W, Y, G) {
          this.level = W, this.from = Y, this.to = G;
        }
        return function(W, Y) {
          var G = Y == "ltr" ? "L" : "R";
          if (W.length == 0 || Y == "ltr" && !r.test(W))
            return !1;
          for (var Z = W.length, J = [], te = 0; te < Z; ++te)
            J.push(i(W.charCodeAt(te)));
          for (var ie = 0, de = G; ie < Z; ++ie) {
            var he = J[ie];
            he == "m" ? J[ie] = de : de = he;
          }
          for (var xe = 0, ge = G; xe < Z; ++xe) {
            var Te = J[xe];
            Te == "1" && ge == "r" ? J[xe] = "n" : p.test(Te) && (ge = Te, Te == "r" && (J[xe] = "R"));
          }
          for (var Re = 1, Me = J[0]; Re < Z - 1; ++Re) {
            var Be = J[Re];
            Be == "+" && Me == "1" && J[Re + 1] == "1" ? J[Re] = "1" : Be == "," && Me == J[Re + 1] && (Me == "1" || Me == "n") && (J[Re] = Me), Me = Be;
          }
          for (var et = 0; et < Z; ++et) {
            var Rt = J[et];
            if (Rt == ",")
              J[et] = "N";
            else if (Rt == "%") {
              var ot = void 0;
              for (ot = et + 1; ot < Z && J[ot] == "%"; ++ot)
                ;
              for (var ln = et && J[et - 1] == "!" || ot < Z && J[ot] == "1" ? "1" : "N", tn = et; tn < ot; ++tn)
                J[tn] = ln;
              et = ot - 1;
            }
          }
          for (var ht = 0, nn = G; ht < Z; ++ht) {
            var Ot = J[ht];
            nn == "L" && Ot == "1" ? J[ht] = "L" : p.test(Ot) && (nn = Ot);
          }
          for (var yt = 0; yt < Z; ++yt)
            if (a.test(J[yt])) {
              var gt = void 0;
              for (gt = yt + 1; gt < Z && a.test(J[gt]); ++gt)
                ;
              for (var ft = (yt ? J[yt - 1] : G) == "L", rn = (gt < Z ? J[gt] : G) == "L", ai = ft == rn ? ft ? "L" : "R" : G, vr = yt; vr < gt; ++vr)
                J[vr] = ai;
              yt = gt - 1;
            }
          for (var zt = [], Bn, Pt = 0; Pt < Z; )
            if (D.test(J[Pt])) {
              var tl = Pt;
              for (++Pt; Pt < Z && D.test(J[Pt]); ++Pt)
                ;
              zt.push(new N(0, tl, Pt));
            } else {
              var Xn = Pt, Rr = zt.length, Pr = Y == "rtl" ? 1 : 0;
              for (++Pt; Pt < Z && J[Pt] != "L"; ++Pt)
                ;
              for (var Qt = Xn; Qt < Pt; )
                if (L.test(J[Qt])) {
                  Xn < Qt && (zt.splice(Rr, 0, new N(1, Xn, Qt)), Rr += Pr);
                  var li = Qt;
                  for (++Qt; Qt < Pt && L.test(J[Qt]); ++Qt)
                    ;
                  zt.splice(Rr, 0, new N(2, li, Qt)), Rr += Pr, Xn = Qt;
                } else
                  ++Qt;
              Xn < Pt && zt.splice(Rr, 0, new N(1, Xn, Pt));
            }
          return Y == "ltr" && (zt[0].level == 1 && (Bn = W.match(/^\s+/)) && (zt[0].from = Bn[0].length, zt.unshift(new N(0, 0, Bn[0].length))), Ue(zt).level == 1 && (Bn = W.match(/\s+$/)) && (Ue(zt).to -= Bn[0].length, zt.push(new N(0, Z - Bn[0].length, Z)))), Y == "rtl" ? zt.reverse() : zt;
        };
      }();
      function oe(e, n) {
        var i = e.order;
        return i == null && (i = e.order = be(e.text, n)), i;
      }
      var De = [], ue = function(e, n, i) {
        if (e.addEventListener)
          e.addEventListener(n, i, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + n, i);
        else {
          var r = e._handlers || (e._handlers = {});
          r[n] = (r[n] || De).concat(i);
        }
      };
      function Ie(e, n) {
        return e._handlers && e._handlers[n] || De;
      }
      function ze(e, n, i) {
        if (e.removeEventListener)
          e.removeEventListener(n, i, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + n, i);
        else {
          var r = e._handlers, a = r && r[n];
          if (a) {
            var p = Ee(a, i);
            p > -1 && (r[n] = a.slice(0, p).concat(a.slice(p + 1)));
          }
        }
      }
      function Ye(e, n) {
        var i = Ie(e, n);
        if (!!i.length)
          for (var r = Array.prototype.slice.call(arguments, 2), a = 0; a < i.length; ++a)
            i[a].apply(null, r);
      }
      function Ke(e, n, i) {
        return typeof n == "string" && (n = { type: n, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), Ye(e, i || n.type, e, n), Zt(n) || n.codemirrorIgnore;
      }
      function st(e) {
        var n = e._handlers && e._handlers.cursorActivity;
        if (!!n)
          for (var i = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < n.length; ++r)
            Ee(i, n[r]) == -1 && i.push(n[r]);
      }
      function _e(e, n) {
        return Ie(e, n).length > 0;
      }
      function Vt(e) {
        e.prototype.on = function(n, i) {
          ue(this, n, i);
        }, e.prototype.off = function(n, i) {
          ze(this, n, i);
        };
      }
      function mt(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function er(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Zt(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function tr(e) {
        mt(e), er(e);
      }
      function hi(e) {
        return e.target || e.srcElement;
      }
      function bn(e) {
        var n = e.which;
        return n == null && (e.button & 1 ? n = 1 : e.button & 2 ? n = 3 : e.button & 4 && (n = 2)), C && e.ctrlKey && n == 1 && (n = 3), n;
      }
      var sa = function() {
        if (c && m < 9)
          return !1;
        var e = P("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Br;
      function so(e) {
        if (Br == null) {
          var n = P("span", "\u200B");
          j(e, P("span", [n, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Br = n.offsetWidth <= 1 && n.offsetHeight > 2 && !(c && m < 8));
        }
        var i = Br ? P("span", "\u200B") : P("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""), i;
      }
      var gi;
      function nr(e) {
        if (gi != null)
          return gi;
        var n = j(e, document.createTextNode("A\u062EA")), i = Q(n, 0, 1).getBoundingClientRect(), r = Q(n, 1, 2).getBoundingClientRect();
        return H(e), !i || i.left == i.right ? !1 : gi = r.right - i.right < 3;
      }
      var gn = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var n = 0, i = [], r = e.length; n <= r; ) {
          var a = e.indexOf(`
`, n);
          a == -1 && (a = e.length);
          var p = e.slice(n, e.charAt(a - 1) == "\r" ? a - 1 : a), D = p.indexOf("\r");
          D != -1 ? (i.push(p.slice(0, D)), n += D + 1) : (i.push(p), n = a + 1);
        }
        return i;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, rr = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return !1;
        }
      } : function(e) {
        var n;
        try {
          n = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !n || n.parentElement() != e ? !1 : n.compareEndPoints("StartToEnd", n) != 0;
      }, uo = function() {
        var e = P("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), En = null;
      function ua(e) {
        if (En != null)
          return En;
        var n = j(e, P("span", "x")), i = n.getBoundingClientRect(), r = Q(n, 0, 1).getBoundingClientRect();
        return En = Math.abs(i.left - r.left) > 1;
      }
      var Hr = {}, Cn = {};
      function Tn(e, n) {
        arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), Hr[e] = n;
      }
      function xr(e, n) {
        Cn[e] = n;
      }
      function Ur(e) {
        if (typeof e == "string" && Cn.hasOwnProperty(e))
          e = Cn[e];
        else if (e && typeof e.name == "string" && Cn.hasOwnProperty(e.name)) {
          var n = Cn[e.name];
          typeof n == "string" && (n = { name: n }), e = hn(n, e), e.name = n.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Ur("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Ur("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function zr(e, n) {
        n = Ur(n);
        var i = Hr[n.name];
        if (!i)
          return zr(e, "text/plain");
        var r = i(e, n);
        if (ir.hasOwnProperty(n.name)) {
          var a = ir[n.name];
          for (var p in a)
            !a.hasOwnProperty(p) || (r.hasOwnProperty(p) && (r["_" + p] = r[p]), r[p] = a[p]);
        }
        if (r.name = n.name, n.helperType && (r.helperType = n.helperType), n.modeProps)
          for (var D in n.modeProps)
            r[D] = n.modeProps[D];
        return r;
      }
      var ir = {};
      function Wr(e, n) {
        var i = ir.hasOwnProperty(e) ? ir[e] : ir[e] = {};
        se(n, i);
      }
      function Ln(e, n) {
        if (n === !0)
          return n;
        if (e.copyState)
          return e.copyState(n);
        var i = {};
        for (var r in n) {
          var a = n[r];
          a instanceof Array && (a = a.concat([])), i[r] = a;
        }
        return i;
      }
      function mi(e, n) {
        for (var i; e.innerMode && (i = e.innerMode(n), !(!i || i.mode == e)); )
          n = i.state, e = i.mode;
        return i || { mode: e, state: n };
      }
      function $r(e, n, i) {
        return e.startState ? e.startState(n, i) : !0;
      }
      var ut = function(e, n, i) {
        this.pos = this.start = 0, this.string = e, this.tabSize = n || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = i;
      };
      ut.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, ut.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, ut.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, ut.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, ut.prototype.eat = function(e) {
        var n = this.string.charAt(this.pos), i;
        if (typeof e == "string" ? i = n == e : i = n && (e.test ? e.test(n) : e(n)), i)
          return ++this.pos, n;
      }, ut.prototype.eatWhile = function(e) {
        for (var n = this.pos; this.eat(e); )
          ;
        return this.pos > n;
      }, ut.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, ut.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, ut.prototype.skipTo = function(e) {
        var n = this.string.indexOf(e, this.pos);
        if (n > -1)
          return this.pos = n, !0;
      }, ut.prototype.backUp = function(e) {
        this.pos -= e;
      }, ut.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = pe(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? pe(this.string, this.lineStart, this.tabSize) : 0);
      }, ut.prototype.indentation = function() {
        return pe(this.string, null, this.tabSize) - (this.lineStart ? pe(this.string, this.lineStart, this.tabSize) : 0);
      }, ut.prototype.match = function(e, n, i) {
        if (typeof e == "string") {
          var r = function(D) {
            return i ? D.toLowerCase() : D;
          }, a = this.string.substr(this.pos, e.length);
          if (r(a) == r(e))
            return n !== !1 && (this.pos += e.length), !0;
        } else {
          var p = this.string.slice(this.pos).match(e);
          return p && p.index > 0 ? null : (p && n !== !1 && (this.pos += p[0].length), p);
        }
      }, ut.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, ut.prototype.hideFirstChars = function(e, n) {
        this.lineStart += e;
        try {
          return n();
        } finally {
          this.lineStart -= e;
        }
      }, ut.prototype.lookAhead = function(e) {
        var n = this.lineOracle;
        return n && n.lookAhead(e);
      }, ut.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function we(e, n) {
        if (n -= e.first, n < 0 || n >= e.size)
          throw new Error("There is no line " + (n + e.first) + " in the document.");
        for (var i = e; !i.lines; )
          for (var r = 0; ; ++r) {
            var a = i.children[r], p = a.chunkSize();
            if (n < p) {
              i = a;
              break;
            }
            n -= p;
          }
        return i.lines[n];
      }
      function Vn(e, n, i) {
        var r = [], a = n.line;
        return e.iter(n.line, i.line + 1, function(p) {
          var D = p.text;
          a == i.line && (D = D.slice(0, i.ch)), a == n.line && (D = D.slice(n.ch)), r.push(D), ++a;
        }), r;
      }
      function yi(e, n, i) {
        var r = [];
        return e.iter(n, i, function(a) {
          r.push(a.text);
        }), r;
      }
      function un(e, n) {
        var i = n - e.height;
        if (i)
          for (var r = e; r; r = r.parent)
            r.height += i;
      }
      function $(e) {
        if (e.parent == null)
          return null;
        for (var n = e.parent, i = Ee(n.lines, e), r = n.parent; r; n = r, r = r.parent)
          for (var a = 0; r.children[a] != n; ++a)
            i += r.children[a].chunkSize();
        return i + n.first;
      }
      function k(e, n) {
        var i = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var a = e.children[r], p = a.height;
              if (n < p) {
                e = a;
                continue e;
              }
              n -= p, i += a.chunkSize();
            }
            return i;
          } while (!e.lines);
        for (var D = 0; D < e.lines.length; ++D) {
          var L = e.lines[D], N = L.height;
          if (n < N)
            break;
          n -= N;
        }
        return i + D;
      }
      function ne(e, n) {
        return n >= e.first && n < e.first + e.size;
      }
      function fe(e, n) {
        return String(e.lineNumberFormatter(n + e.firstLineNumber));
      }
      function ee(e, n, i) {
        if (i === void 0 && (i = null), !(this instanceof ee))
          return new ee(e, n, i);
        this.line = e, this.ch = n, this.sticky = i;
      }
      function ye(e, n) {
        return e.line - n.line || e.ch - n.ch;
      }
      function ke(e, n) {
        return e.sticky == n.sticky && ye(e, n) == 0;
      }
      function Tt(e) {
        return ee(e.line, e.ch);
      }
      function qt(e, n) {
        return ye(e, n) < 0 ? n : e;
      }
      function jr(e, n) {
        return ye(e, n) < 0 ? e : n;
      }
      function Ts(e, n) {
        return Math.max(e.first, Math.min(n, e.first + e.size - 1));
      }
      function Fe(e, n) {
        if (n.line < e.first)
          return ee(e.first, 0);
        var i = e.first + e.size - 1;
        return n.line > i ? ee(i, we(e, i).text.length) : jd(n, we(e, n.line).text.length);
      }
      function jd(e, n) {
        var i = e.ch;
        return i == null || i > n ? ee(e.line, n) : i < 0 ? ee(e.line, 0) : e;
      }
      function ws(e, n) {
        for (var i = [], r = 0; r < n.length; r++)
          i[r] = Fe(e, n[r]);
        return i;
      }
      var fo = function(e, n) {
        this.state = e, this.lookAhead = n;
      }, Nn = function(e, n, i, r) {
        this.state = n, this.doc = e, this.line = i, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      Nn.prototype.lookAhead = function(e) {
        var n = this.doc.getLine(this.line + e);
        return n != null && e > this.maxLookAhead && (this.maxLookAhead = e), n;
      }, Nn.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var n = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: n && n.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, Nn.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, Nn.fromSaved = function(e, n, i) {
        return n instanceof fo ? new Nn(e, Ln(e.mode, n.state), i, n.lookAhead) : new Nn(e, Ln(e.mode, n), i);
      }, Nn.prototype.save = function(e) {
        var n = e !== !1 ? Ln(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new fo(n, this.maxLookAhead) : n;
      };
      function Ds(e, n, i, r) {
        var a = [e.state.modeGen], p = {};
        Ns(
          e,
          n.text,
          e.doc.mode,
          i,
          function(W, Y) {
            return a.push(W, Y);
          },
          p,
          r
        );
        for (var D = i.state, L = function(W) {
          i.baseTokens = a;
          var Y = e.state.overlays[W], G = 1, Z = 0;
          i.state = !0, Ns(e, n.text, Y.mode, i, function(J, te) {
            for (var ie = G; Z < J; ) {
              var de = a[G];
              de > J && a.splice(G, 1, J, a[G + 1], de), G += 2, Z = Math.min(J, de);
            }
            if (!!te)
              if (Y.opaque)
                a.splice(ie, G - ie, J, "overlay " + te), G = ie + 2;
              else
                for (; ie < G; ie += 2) {
                  var he = a[ie + 1];
                  a[ie + 1] = (he ? he + " " : "") + "overlay " + te;
                }
          }, p), i.state = D, i.baseTokens = null, i.baseTokenPos = 1;
        }, N = 0; N < e.state.overlays.length; ++N)
          L(N);
        return { styles: a, classes: p.bgClass || p.textClass ? p : null };
      }
      function Ms(e, n, i) {
        if (!n.styles || n.styles[0] != e.state.modeGen) {
          var r = Ai(e, $(n)), a = n.text.length > e.options.maxHighlightLength && Ln(e.doc.mode, r.state), p = Ds(e, n, r);
          a && (r.state = a), n.stateAfter = r.save(!a), n.styles = p.styles, p.classes ? n.styleClasses = p.classes : n.styleClasses && (n.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return n.styles;
      }
      function Ai(e, n, i) {
        var r = e.doc, a = e.display;
        if (!r.mode.startState)
          return new Nn(r, !0, n);
        var p = Vd(e, n, i), D = p > r.first && we(r, p - 1).stateAfter, L = D ? Nn.fromSaved(r, D, p) : new Nn(r, $r(r.mode), p);
        return r.iter(p, n, function(N) {
          fa(e, N.text, L);
          var W = L.line;
          N.stateAfter = W == n - 1 || W % 5 == 0 || W >= a.viewFrom && W < a.viewTo ? L.save() : null, L.nextLine();
        }), i && (r.modeFrontier = L.line), L;
      }
      function fa(e, n, i, r) {
        var a = e.doc.mode, p = new ut(n, e.options.tabSize, i);
        for (p.start = p.pos = r || 0, n == "" && Rs(a, i.state); !p.eol(); )
          da(a, p, i.state), p.start = p.pos;
      }
      function Rs(e, n) {
        if (e.blankLine)
          return e.blankLine(n);
        if (!!e.innerMode) {
          var i = mi(e, n);
          if (i.mode.blankLine)
            return i.mode.blankLine(i.state);
        }
      }
      function da(e, n, i, r) {
        for (var a = 0; a < 10; a++) {
          r && (r[0] = mi(e, i).mode);
          var p = e.token(n, i);
          if (n.pos > n.start)
            return p;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var Ps = function(e, n, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = n || null, this.state = i;
      };
      function Is(e, n, i, r) {
        var a = e.doc, p = a.mode, D;
        n = Fe(a, n);
        var L = we(a, n.line), N = Ai(e, n.line, i), W = new ut(L.text, e.options.tabSize, N), Y;
        for (r && (Y = []); (r || W.pos < n.ch) && !W.eol(); )
          W.start = W.pos, D = da(p, W, N.state), r && Y.push(new Ps(W, D, Ln(a.mode, N.state)));
        return r ? Y : new Ps(W, D, N.state);
      }
      function Ls(e, n) {
        if (e)
          for (; ; ) {
            var i = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!i)
              break;
            e = e.slice(0, i.index) + e.slice(i.index + i[0].length);
            var r = i[1] ? "bgClass" : "textClass";
            n[r] == null ? n[r] = i[2] : new RegExp("(?:^|\\s)" + i[2] + "(?:$|\\s)").test(n[r]) || (n[r] += " " + i[2]);
          }
        return e;
      }
      function Ns(e, n, i, r, a, p, D) {
        var L = i.flattenSpans;
        L == null && (L = e.options.flattenSpans);
        var N = 0, W = null, Y = new ut(n, e.options.tabSize, r), G, Z = e.options.addModeClass && [null];
        for (n == "" && Ls(Rs(i, r.state), p); !Y.eol(); ) {
          if (Y.pos > e.options.maxHighlightLength ? (L = !1, D && fa(e, n, r, Y.pos), Y.pos = n.length, G = null) : G = Ls(da(i, Y, r.state, Z), p), Z) {
            var J = Z[0].name;
            J && (G = "m-" + (G ? J + " " + G : J));
          }
          if (!L || W != G) {
            for (; N < Y.start; )
              N = Math.min(Y.start, N + 5e3), a(N, W);
            W = G;
          }
          Y.start = Y.pos;
        }
        for (; N < Y.pos; ) {
          var te = Math.min(Y.pos, N + 5e3);
          a(te, W), N = te;
        }
      }
      function Vd(e, n, i) {
        for (var r, a, p = e.doc, D = i ? -1 : n - (e.doc.mode.innerMode ? 1e3 : 100), L = n; L > D; --L) {
          if (L <= p.first)
            return p.first;
          var N = we(p, L - 1), W = N.stateAfter;
          if (W && (!i || L + (W instanceof fo ? W.lookAhead : 0) <= p.modeFrontier))
            return L;
          var Y = pe(N.text, null, e.options.tabSize);
          (a == null || r > Y) && (a = L - 1, r = Y);
        }
        return a;
      }
      function Yd(e, n) {
        if (e.modeFrontier = Math.min(e.modeFrontier, n), !(e.highlightFrontier < n - 10)) {
          for (var i = e.first, r = n - 1; r > i; r--) {
            var a = we(e, r).stateAfter;
            if (a && (!(a instanceof fo) || r + a.lookAhead < n)) {
              i = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, i);
        }
      }
      var Os = !1, Yn = !1;
      function Qd() {
        Os = !0;
      }
      function kd() {
        Yn = !0;
      }
      function co(e, n, i) {
        this.marker = e, this.from = n, this.to = i;
      }
      function xi(e, n) {
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.marker == n)
              return r;
          }
      }
      function Gd(e, n) {
        for (var i, r = 0; r < e.length; ++r)
          e[r] != n && (i || (i = [])).push(e[r]);
        return i;
      }
      function Kd(e, n, i) {
        var r = i && window.WeakSet && (i.markedSpans || (i.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(n) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([n]) : [n], r && r.add(e.markedSpans)), n.marker.attachLine(e);
      }
      function Xd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var p = e[a], D = p.marker, L = p.from == null || (D.inclusiveLeft ? p.from <= n : p.from < n);
            if (L || p.from == n && D.type == "bookmark" && (!i || !p.marker.insertLeft)) {
              var N = p.to == null || (D.inclusiveRight ? p.to >= n : p.to > n);
              (r || (r = [])).push(new co(D, p.from, N ? null : p.to));
            }
          }
        return r;
      }
      function Jd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var p = e[a], D = p.marker, L = p.to == null || (D.inclusiveRight ? p.to >= n : p.to > n);
            if (L || p.from == n && D.type == "bookmark" && (!i || p.marker.insertLeft)) {
              var N = p.from == null || (D.inclusiveLeft ? p.from <= n : p.from < n);
              (r || (r = [])).push(new co(
                D,
                N ? null : p.from - n,
                p.to == null ? null : p.to - n
              ));
            }
          }
        return r;
      }
      function ca(e, n) {
        if (n.full)
          return null;
        var i = ne(e, n.from.line) && we(e, n.from.line).markedSpans, r = ne(e, n.to.line) && we(e, n.to.line).markedSpans;
        if (!i && !r)
          return null;
        var a = n.from.ch, p = n.to.ch, D = ye(n.from, n.to) == 0, L = Xd(i, a, D), N = Jd(r, p, D), W = n.text.length == 1, Y = Ue(n.text).length + (W ? a : 0);
        if (L)
          for (var G = 0; G < L.length; ++G) {
            var Z = L[G];
            if (Z.to == null) {
              var J = xi(N, Z.marker);
              J ? W && (Z.to = J.to == null ? null : J.to + Y) : Z.to = a;
            }
          }
        if (N)
          for (var te = 0; te < N.length; ++te) {
            var ie = N[te];
            if (ie.to != null && (ie.to += Y), ie.from == null) {
              var de = xi(L, ie.marker);
              de || (ie.from = Y, W && (L || (L = [])).push(ie));
            } else
              ie.from += Y, W && (L || (L = [])).push(ie);
          }
        L && (L = Fs(L)), N && N != L && (N = Fs(N));
        var he = [L];
        if (!W) {
          var xe = n.text.length - 2, ge;
          if (xe > 0 && L)
            for (var Te = 0; Te < L.length; ++Te)
              L[Te].to == null && (ge || (ge = [])).push(new co(L[Te].marker, null, null));
          for (var Re = 0; Re < xe; ++Re)
            he.push(ge);
          he.push(N);
        }
        return he;
      }
      function Fs(e) {
        for (var n = 0; n < e.length; ++n) {
          var i = e[n];
          i.from != null && i.from == i.to && i.marker.clearWhenEmpty !== !1 && e.splice(n--, 1);
        }
        return e.length ? e : null;
      }
      function Zd(e, n, i) {
        var r = null;
        if (e.iter(n.line, i.line + 1, function(J) {
          if (J.markedSpans)
            for (var te = 0; te < J.markedSpans.length; ++te) {
              var ie = J.markedSpans[te].marker;
              ie.readOnly && (!r || Ee(r, ie) == -1) && (r || (r = [])).push(ie);
            }
        }), !r)
          return null;
        for (var a = [{ from: n, to: i }], p = 0; p < r.length; ++p)
          for (var D = r[p], L = D.find(0), N = 0; N < a.length; ++N) {
            var W = a[N];
            if (!(ye(W.to, L.from) < 0 || ye(W.from, L.to) > 0)) {
              var Y = [N, 1], G = ye(W.from, L.from), Z = ye(W.to, L.to);
              (G < 0 || !D.inclusiveLeft && !G) && Y.push({ from: W.from, to: L.from }), (Z > 0 || !D.inclusiveRight && !Z) && Y.push({ from: L.to, to: W.to }), a.splice.apply(a, Y), N += Y.length - 3;
            }
          }
        return a;
      }
      function Bs(e) {
        var n = e.markedSpans;
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Hs(e, n) {
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.attachLine(e);
          e.markedSpans = n;
        }
      }
      function vo(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function po(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function va(e, n) {
        var i = e.lines.length - n.lines.length;
        if (i != 0)
          return i;
        var r = e.find(), a = n.find(), p = ye(r.from, a.from) || vo(e) - vo(n);
        if (p)
          return -p;
        var D = ye(r.to, a.to) || po(e) - po(n);
        return D || n.id - e.id;
      }
      function Us(e, n) {
        var i = Yn && e.markedSpans, r;
        if (i)
          for (var a = void 0, p = 0; p < i.length; ++p)
            a = i[p], a.marker.collapsed && (n ? a.from : a.to) == null && (!r || va(r, a.marker) < 0) && (r = a.marker);
        return r;
      }
      function zs(e) {
        return Us(e, !0);
      }
      function ho(e) {
        return Us(e, !1);
      }
      function qd(e, n) {
        var i = Yn && e.markedSpans, r;
        if (i)
          for (var a = 0; a < i.length; ++a) {
            var p = i[a];
            p.marker.collapsed && (p.from == null || p.from < n) && (p.to == null || p.to > n) && (!r || va(r, p.marker) < 0) && (r = p.marker);
          }
        return r;
      }
      function Ws(e, n, i, r, a) {
        var p = we(e, n), D = Yn && p.markedSpans;
        if (D)
          for (var L = 0; L < D.length; ++L) {
            var N = D[L];
            if (!!N.marker.collapsed) {
              var W = N.marker.find(0), Y = ye(W.from, i) || vo(N.marker) - vo(a), G = ye(W.to, r) || po(N.marker) - po(a);
              if (!(Y >= 0 && G <= 0 || Y <= 0 && G >= 0) && (Y <= 0 && (N.marker.inclusiveRight && a.inclusiveLeft ? ye(W.to, i) >= 0 : ye(W.to, i) > 0) || Y >= 0 && (N.marker.inclusiveRight && a.inclusiveLeft ? ye(W.from, r) <= 0 : ye(W.from, r) < 0)))
                return !0;
            }
          }
      }
      function wn(e) {
        for (var n; n = zs(e); )
          e = n.find(-1, !0).line;
        return e;
      }
      function _d(e) {
        for (var n; n = ho(e); )
          e = n.find(1, !0).line;
        return e;
      }
      function ec(e) {
        for (var n, i; n = ho(e); )
          e = n.find(1, !0).line, (i || (i = [])).push(e);
        return i;
      }
      function pa(e, n) {
        var i = we(e, n), r = wn(i);
        return i == r ? n : $(r);
      }
      function $s(e, n) {
        if (n > e.lastLine())
          return n;
        var i = we(e, n), r;
        if (!or(e, i))
          return n;
        for (; r = ho(i); )
          i = r.find(1, !0).line;
        return $(i) + 1;
      }
      function or(e, n) {
        var i = Yn && n.markedSpans;
        if (i) {
          for (var r = void 0, a = 0; a < i.length; ++a)
            if (r = i[a], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && ha(e, n, r))
                return !0;
            }
        }
      }
      function ha(e, n, i) {
        if (i.to == null) {
          var r = i.marker.find(1, !0);
          return ha(e, r.line, xi(r.line.markedSpans, i.marker));
        }
        if (i.marker.inclusiveRight && i.to == n.text.length)
          return !0;
        for (var a = void 0, p = 0; p < n.markedSpans.length; ++p)
          if (a = n.markedSpans[p], a.marker.collapsed && !a.marker.widgetNode && a.from == i.to && (a.to == null || a.to != i.from) && (a.marker.inclusiveLeft || i.marker.inclusiveRight) && ha(e, n, a))
            return !0;
      }
      function Qn(e) {
        e = wn(e);
        for (var n = 0, i = e.parent, r = 0; r < i.lines.length; ++r) {
          var a = i.lines[r];
          if (a == e)
            break;
          n += a.height;
        }
        for (var p = i.parent; p; i = p, p = i.parent)
          for (var D = 0; D < p.children.length; ++D) {
            var L = p.children[D];
            if (L == i)
              break;
            n += L.height;
          }
        return n;
      }
      function go(e) {
        if (e.height == 0)
          return 0;
        for (var n = e.text.length, i, r = e; i = zs(r); ) {
          var a = i.find(0, !0);
          r = a.from.line, n += a.from.ch - a.to.ch;
        }
        for (r = e; i = ho(r); ) {
          var p = i.find(0, !0);
          n -= r.text.length - p.from.ch, r = p.to.line, n += r.text.length - p.to.ch;
        }
        return n;
      }
      function ga(e) {
        var n = e.display, i = e.doc;
        n.maxLine = we(i, i.first), n.maxLineLength = go(n.maxLine), n.maxLineChanged = !0, i.iter(function(r) {
          var a = go(r);
          a > n.maxLineLength && (n.maxLineLength = a, n.maxLine = r);
        });
      }
      var Vr = function(e, n, i) {
        this.text = e, Hs(this, n), this.height = i ? i(this) : 1;
      };
      Vr.prototype.lineNo = function() {
        return $(this);
      }, Vt(Vr);
      function tc(e, n, i, r) {
        e.text = n, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Bs(e), Hs(e, i);
        var a = r ? r(e) : 1;
        a != e.height && un(e, a);
      }
      function nc(e) {
        e.parent = null, Bs(e);
      }
      var rc = {}, ic = {};
      function js(e, n) {
        if (!e || /^\s*$/.test(e))
          return null;
        var i = n.addModeClass ? ic : rc;
        return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function Vs(e, n) {
        var i = V("span", null, null, T ? "padding-right: .1px" : null), r = {
          pre: V("pre", [i], "CodeMirror-line"),
          content: i,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        n.measure = {};
        for (var a = 0; a <= (n.rest ? n.rest.length : 0); a++) {
          var p = a ? n.rest[a - 1] : n.line, D = void 0;
          r.pos = 0, r.addToken = ac, nr(e.display.measure) && (D = oe(p, e.doc.direction)) && (r.addToken = sc(r.addToken, D)), r.map = [];
          var L = n != e.display.externalMeasured && $(p);
          uc(p, r, Ms(e, p, L)), p.styleClasses && (p.styleClasses.bgClass && (r.bgClass = _(p.styleClasses.bgClass, r.bgClass || "")), p.styleClasses.textClass && (r.textClass = _(p.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(so(e.display.measure))), a == 0 ? (n.measure.map = r.map, n.measure.cache = {}) : ((n.measure.maps || (n.measure.maps = [])).push(r.map), (n.measure.caches || (n.measure.caches = [])).push({}));
        }
        if (T) {
          var N = r.content.lastChild;
          (/\bcm-tab\b/.test(N.className) || N.querySelector && N.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return Ye(e, "renderLine", e, n.line, r.pre), r.pre.className && (r.textClass = _(r.pre.className, r.textClass || "")), r;
      }
      function oc(e) {
        var n = P("span", "\u2022", "cm-invalidchar");
        return n.title = "\\u" + e.charCodeAt(0).toString(16), n.setAttribute("aria-label", n.title), n;
      }
      function ac(e, n, i, r, a, p, D) {
        if (!!n) {
          var L = e.splitSpaces ? lc(n, e.trailingSpace) : n, N = e.cm.state.specialChars, W = !1, Y;
          if (!N.test(n))
            e.col += n.length, Y = document.createTextNode(L), e.map.push(e.pos, e.pos + n.length, Y), c && m < 9 && (W = !0), e.pos += n.length;
          else {
            Y = document.createDocumentFragment();
            for (var G = 0; ; ) {
              N.lastIndex = G;
              var Z = N.exec(n), J = Z ? Z.index - G : n.length - G;
              if (J) {
                var te = document.createTextNode(L.slice(G, G + J));
                c && m < 9 ? Y.appendChild(P("span", [te])) : Y.appendChild(te), e.map.push(e.pos, e.pos + J, te), e.col += J, e.pos += J;
              }
              if (!Z)
                break;
              G += J + 1;
              var ie = void 0;
              if (Z[0] == "	") {
                var de = e.cm.options.tabSize, he = de - e.col % de;
                ie = Y.appendChild(P("span", Xt(he), "cm-tab")), ie.setAttribute("role", "presentation"), ie.setAttribute("cm-text", "	"), e.col += he;
              } else
                Z[0] == "\r" || Z[0] == `
` ? (ie = Y.appendChild(P("span", Z[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), ie.setAttribute("cm-text", Z[0]), e.col += 1) : (ie = e.cm.options.specialCharPlaceholder(Z[0]), ie.setAttribute("cm-text", Z[0]), c && m < 9 ? Y.appendChild(P("span", [ie])) : Y.appendChild(ie), e.col += 1);
              e.map.push(e.pos, e.pos + 1, ie), e.pos++;
            }
          }
          if (e.trailingSpace = L.charCodeAt(n.length - 1) == 32, i || r || a || W || p || D) {
            var xe = i || "";
            r && (xe += r), a && (xe += a);
            var ge = P("span", [Y], xe, p);
            if (D)
              for (var Te in D)
                D.hasOwnProperty(Te) && Te != "style" && Te != "class" && ge.setAttribute(Te, D[Te]);
            return e.content.appendChild(ge);
          }
          e.content.appendChild(Y);
        }
      }
      function lc(e, n) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var i = n, r = "", a = 0; a < e.length; a++) {
          var p = e.charAt(a);
          p == " " && i && (a == e.length - 1 || e.charCodeAt(a + 1) == 32) && (p = "\xA0"), r += p, i = p == " ";
        }
        return r;
      }
      function sc(e, n) {
        return function(i, r, a, p, D, L, N) {
          a = a ? a + " cm-force-border" : "cm-force-border";
          for (var W = i.pos, Y = W + r.length; ; ) {
            for (var G = void 0, Z = 0; Z < n.length && (G = n[Z], !(G.to > W && G.from <= W)); Z++)
              ;
            if (G.to >= Y)
              return e(i, r, a, p, D, L, N);
            e(i, r.slice(0, G.to - W), a, p, null, L, N), p = null, r = r.slice(G.to - W), W = G.to;
          }
        };
      }
      function Ys(e, n, i, r) {
        var a = !r && i.widgetNode;
        a && e.map.push(e.pos, e.pos + n, a), !r && e.cm.display.input.needsContentAttribute && (a || (a = e.content.appendChild(document.createElement("span"))), a.setAttribute("cm-marker", i.id)), a && (e.cm.display.input.setUneditable(a), e.content.appendChild(a)), e.pos += n, e.trailingSpace = !1;
      }
      function uc(e, n, i) {
        var r = e.markedSpans, a = e.text, p = 0;
        if (!r) {
          for (var D = 1; D < i.length; D += 2)
            n.addToken(n, a.slice(p, p = i[D]), js(i[D + 1], n.cm.options));
          return;
        }
        for (var L = a.length, N = 0, W = 1, Y = "", G, Z, J = 0, te, ie, de, he, xe; ; ) {
          if (J == N) {
            te = ie = de = Z = "", xe = null, he = null, J = 1 / 0;
            for (var ge = [], Te = void 0, Re = 0; Re < r.length; ++Re) {
              var Me = r[Re], Be = Me.marker;
              if (Be.type == "bookmark" && Me.from == N && Be.widgetNode)
                ge.push(Be);
              else if (Me.from <= N && (Me.to == null || Me.to > N || Be.collapsed && Me.to == N && Me.from == N)) {
                if (Me.to != null && Me.to != N && J > Me.to && (J = Me.to, ie = ""), Be.className && (te += " " + Be.className), Be.css && (Z = (Z ? Z + ";" : "") + Be.css), Be.startStyle && Me.from == N && (de += " " + Be.startStyle), Be.endStyle && Me.to == J && (Te || (Te = [])).push(Be.endStyle, Me.to), Be.title && ((xe || (xe = {})).title = Be.title), Be.attributes)
                  for (var et in Be.attributes)
                    (xe || (xe = {}))[et] = Be.attributes[et];
                Be.collapsed && (!he || va(he.marker, Be) < 0) && (he = Me);
              } else
                Me.from > N && J > Me.from && (J = Me.from);
            }
            if (Te)
              for (var Rt = 0; Rt < Te.length; Rt += 2)
                Te[Rt + 1] == J && (ie += " " + Te[Rt]);
            if (!he || he.from == N)
              for (var ot = 0; ot < ge.length; ++ot)
                Ys(n, 0, ge[ot]);
            if (he && (he.from || 0) == N) {
              if (Ys(
                n,
                (he.to == null ? L + 1 : he.to) - N,
                he.marker,
                he.from == null
              ), he.to == null)
                return;
              he.to == N && (he = !1);
            }
          }
          if (N >= L)
            break;
          for (var ln = Math.min(L, J); ; ) {
            if (Y) {
              var tn = N + Y.length;
              if (!he) {
                var ht = tn > ln ? Y.slice(0, ln - N) : Y;
                n.addToken(
                  n,
                  ht,
                  G ? G + te : te,
                  de,
                  N + ht.length == J ? ie : "",
                  Z,
                  xe
                );
              }
              if (tn >= ln) {
                Y = Y.slice(ln - N), N = ln;
                break;
              }
              N = tn, de = "";
            }
            Y = a.slice(p, p = i[W++]), G = js(i[W++], n.cm.options);
          }
        }
      }
      function Qs(e, n, i) {
        this.line = n, this.rest = ec(n), this.size = this.rest ? $(Ue(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = or(e, n);
      }
      function mo(e, n, i) {
        for (var r = [], a, p = n; p < i; p = a) {
          var D = new Qs(e.doc, we(e.doc, p), p);
          a = p + D.size, r.push(D);
        }
        return r;
      }
      var Yr = null;
      function fc(e) {
        Yr ? Yr.ops.push(e) : e.ownsGroup = Yr = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function dc(e) {
        var n = e.delayedCallbacks, i = 0;
        do {
          for (; i < n.length; i++)
            n[i].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var a = e.ops[r];
            if (a.cursorActivityHandlers)
              for (; a.cursorActivityCalled < a.cursorActivityHandlers.length; )
                a.cursorActivityHandlers[a.cursorActivityCalled++].call(null, a.cm);
          }
        } while (i < n.length);
      }
      function cc(e, n) {
        var i = e.ownsGroup;
        if (!!i)
          try {
            dc(i);
          } finally {
            Yr = null, n(i);
          }
      }
      var Si = null;
      function wt(e, n) {
        var i = Ie(e, n);
        if (!!i.length) {
          var r = Array.prototype.slice.call(arguments, 2), a;
          Yr ? a = Yr.delayedCallbacks : Si ? a = Si : (a = Si = [], setTimeout(vc, 0));
          for (var p = function(L) {
            a.push(function() {
              return i[L].apply(null, r);
            });
          }, D = 0; D < i.length; ++D)
            p(D);
        }
      }
      function vc() {
        var e = Si;
        Si = null;
        for (var n = 0; n < e.length; ++n)
          e[n]();
      }
      function ks(e, n, i, r) {
        for (var a = 0; a < n.changes.length; a++) {
          var p = n.changes[a];
          p == "text" ? hc(e, n) : p == "gutter" ? Ks(e, n, i, r) : p == "class" ? ma(e, n) : p == "widget" && gc(e, n, r);
        }
        n.changes = null;
      }
      function bi(e) {
        return e.node == e.text && (e.node = P("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), c && m < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function pc(e, n) {
        var i = n.bgClass ? n.bgClass + " " + (n.line.bgClass || "") : n.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), n.background)
          i ? n.background.className = i : (n.background.parentNode.removeChild(n.background), n.background = null);
        else if (i) {
          var r = bi(n);
          n.background = r.insertBefore(P("div", null, i), r.firstChild), e.display.input.setUneditable(n.background);
        }
      }
      function Gs(e, n) {
        var i = e.display.externalMeasured;
        return i && i.line == n.line ? (e.display.externalMeasured = null, n.measure = i.measure, i.built) : Vs(e, n);
      }
      function hc(e, n) {
        var i = n.text.className, r = Gs(e, n);
        n.text == n.node && (n.node = r.pre), n.text.parentNode.replaceChild(r.pre, n.text), n.text = r.pre, r.bgClass != n.bgClass || r.textClass != n.textClass ? (n.bgClass = r.bgClass, n.textClass = r.textClass, ma(e, n)) : i && (n.text.className = i);
      }
      function ma(e, n) {
        pc(e, n), n.line.wrapClass ? bi(n).className = n.line.wrapClass : n.node != n.text && (n.node.className = "");
        var i = n.textClass ? n.textClass + " " + (n.line.textClass || "") : n.line.textClass;
        n.text.className = i || "";
      }
      function Ks(e, n, i, r) {
        if (n.gutter && (n.node.removeChild(n.gutter), n.gutter = null), n.gutterBackground && (n.node.removeChild(n.gutterBackground), n.gutterBackground = null), n.line.gutterClass) {
          var a = bi(n);
          n.gutterBackground = P(
            "div",
            null,
            "CodeMirror-gutter-background " + n.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(n.gutterBackground), a.insertBefore(n.gutterBackground, n.text);
        }
        var p = n.line.gutterMarkers;
        if (e.options.lineNumbers || p) {
          var D = bi(n), L = n.gutter = P("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (L.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(L), D.insertBefore(L, n.text), n.line.gutterClass && (L.className += " " + n.line.gutterClass), e.options.lineNumbers && (!p || !p["CodeMirror-linenumbers"]) && (n.lineNumber = L.appendChild(
            P(
              "div",
              fe(e.options, i),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), p)
            for (var N = 0; N < e.display.gutterSpecs.length; ++N) {
              var W = e.display.gutterSpecs[N].className, Y = p.hasOwnProperty(W) && p[W];
              Y && L.appendChild(P(
                "div",
                [Y],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[W] + "px; width: " + r.gutterWidth[W] + "px"
              ));
            }
        }
      }
      function gc(e, n, i) {
        n.alignable && (n.alignable = null);
        for (var r = I("CodeMirror-linewidget"), a = n.node.firstChild, p = void 0; a; a = p)
          p = a.nextSibling, r.test(a.className) && n.node.removeChild(a);
        Xs(e, n, i);
      }
      function mc(e, n, i, r) {
        var a = Gs(e, n);
        return n.text = n.node = a.pre, a.bgClass && (n.bgClass = a.bgClass), a.textClass && (n.textClass = a.textClass), ma(e, n), Ks(e, n, i, r), Xs(e, n, r), n.node;
      }
      function Xs(e, n, i) {
        if (Js(e, n.line, n, i, !0), n.rest)
          for (var r = 0; r < n.rest.length; r++)
            Js(e, n.rest[r], n, i, !1);
      }
      function Js(e, n, i, r, a) {
        if (!!n.widgets)
          for (var p = bi(i), D = 0, L = n.widgets; D < L.length; ++D) {
            var N = L[D], W = P("div", [N.node], "CodeMirror-linewidget" + (N.className ? " " + N.className : ""));
            N.handleMouseEvents || W.setAttribute("cm-ignore-events", "true"), yc(N, W, i, r), e.display.input.setUneditable(W), a && N.above ? p.insertBefore(W, i.gutter || i.text) : p.appendChild(W), wt(N, "redraw");
          }
      }
      function yc(e, n, i, r) {
        if (e.noHScroll) {
          (i.alignable || (i.alignable = [])).push(n);
          var a = r.wrapperWidth;
          n.style.left = r.fixedPos + "px", e.coverGutter || (a -= r.gutterTotalWidth, n.style.paddingLeft = r.gutterTotalWidth + "px"), n.style.width = a + "px";
        }
        e.coverGutter && (n.style.zIndex = 5, n.style.position = "relative", e.noHScroll || (n.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function Ei(e) {
        if (e.height != null)
          return e.height;
        var n = e.doc.cm;
        if (!n)
          return 0;
        if (!K(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + n.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + n.display.wrapper.clientWidth + "px;"), j(n.display.measure, P("div", [e.node], null, i));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function kn(e, n) {
        for (var i = hi(n); i != e.wrapper; i = i.parentNode)
          if (!i || i.nodeType == 1 && i.getAttribute("cm-ignore-events") == "true" || i.parentNode == e.sizer && i != e.mover)
            return !0;
      }
      function yo(e) {
        return e.lineSpace.offsetTop;
      }
      function ya(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function Zs(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var n = j(e.measure, P("pre", "x", "CodeMirror-line-like")), i = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle, r = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function On(e) {
        return je - e.display.nativeBarWidth;
      }
      function Sr(e) {
        return e.display.scroller.clientWidth - On(e) - e.display.barWidth;
      }
      function Aa(e) {
        return e.display.scroller.clientHeight - On(e) - e.display.barHeight;
      }
      function Ac(e, n, i) {
        var r = e.options.lineWrapping, a = r && Sr(e);
        if (!n.measure.heights || r && n.measure.width != a) {
          var p = n.measure.heights = [];
          if (r) {
            n.measure.width = a;
            for (var D = n.text.firstChild.getClientRects(), L = 0; L < D.length - 1; L++) {
              var N = D[L], W = D[L + 1];
              Math.abs(N.bottom - W.bottom) > 2 && p.push((N.bottom + W.top) / 2 - i.top);
            }
          }
          p.push(i.bottom - i.top);
        }
      }
      function qs(e, n, i) {
        if (e.line == n)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == n)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var a = 0; a < e.rest.length; a++)
            if ($(e.rest[a]) > i)
              return { map: e.measure.maps[a], cache: e.measure.caches[a], before: !0 };
        }
      }
      function xc(e, n) {
        n = wn(n);
        var i = $(n), r = e.display.externalMeasured = new Qs(e.doc, n, i);
        r.lineN = i;
        var a = r.built = Vs(e, r);
        return r.text = a.pre, j(e.display.lineMeasure, a.pre), r;
      }
      function _s(e, n, i, r) {
        return Fn(e, Qr(e, n), i, r);
      }
      function xa(e, n) {
        if (n >= e.display.viewFrom && n < e.display.viewTo)
          return e.display.view[Cr(e, n)];
        var i = e.display.externalMeasured;
        if (i && n >= i.lineN && n < i.lineN + i.size)
          return i;
      }
      function Qr(e, n) {
        var i = $(n), r = xa(e, i);
        r && !r.text ? r = null : r && r.changes && (ks(e, r, i, Ta(e)), e.curOp.forceUpdate = !0), r || (r = xc(e, n));
        var a = qs(r, n, i);
        return {
          line: n,
          view: r,
          rect: null,
          map: a.map,
          cache: a.cache,
          before: a.before,
          hasHeights: !1
        };
      }
      function Fn(e, n, i, r, a) {
        n.before && (i = -1);
        var p = i + (r || ""), D;
        return n.cache.hasOwnProperty(p) ? D = n.cache[p] : (n.rect || (n.rect = n.view.text.getBoundingClientRect()), n.hasHeights || (Ac(e, n.view, n.rect), n.hasHeights = !0), D = bc(e, n, i, r), D.bogus || (n.cache[p] = D)), {
          left: D.left,
          right: D.right,
          top: a ? D.rtop : D.top,
          bottom: a ? D.rbottom : D.bottom
        };
      }
      var eu = { left: 0, right: 0, top: 0, bottom: 0 };
      function tu(e, n, i) {
        for (var r, a, p, D, L, N, W = 0; W < e.length; W += 3)
          if (L = e[W], N = e[W + 1], n < L ? (a = 0, p = 1, D = "left") : n < N ? (a = n - L, p = a + 1) : (W == e.length - 3 || n == N && e[W + 3] > n) && (p = N - L, a = p - 1, n >= N && (D = "right")), a != null) {
            if (r = e[W + 2], L == N && i == (r.insertLeft ? "left" : "right") && (D = i), i == "left" && a == 0)
              for (; W && e[W - 2] == e[W - 3] && e[W - 1].insertLeft; )
                r = e[(W -= 3) + 2], D = "left";
            if (i == "right" && a == N - L)
              for (; W < e.length - 3 && e[W + 3] == e[W + 4] && !e[W + 5].insertLeft; )
                r = e[(W += 3) + 2], D = "right";
            break;
          }
        return { node: r, start: a, end: p, collapse: D, coverStart: L, coverEnd: N };
      }
      function Sc(e, n) {
        var i = eu;
        if (n == "left")
          for (var r = 0; r < e.length && (i = e[r]).left == i.right; r++)
            ;
        else
          for (var a = e.length - 1; a >= 0 && (i = e[a]).left == i.right; a--)
            ;
        return i;
      }
      function bc(e, n, i, r) {
        var a = tu(n.map, i, r), p = a.node, D = a.start, L = a.end, N = a.collapse, W;
        if (p.nodeType == 3) {
          for (var Y = 0; Y < 4; Y++) {
            for (; D && Ze(n.line.text.charAt(a.coverStart + D)); )
              --D;
            for (; a.coverStart + L < a.coverEnd && Ze(n.line.text.charAt(a.coverStart + L)); )
              ++L;
            if (c && m < 9 && D == 0 && L == a.coverEnd - a.coverStart ? W = p.parentNode.getBoundingClientRect() : W = Sc(Q(p, D, L).getClientRects(), r), W.left || W.right || D == 0)
              break;
            L = D, D = D - 1, N = "right";
          }
          c && m < 11 && (W = Ec(e.display.measure, W));
        } else {
          D > 0 && (N = r = "right");
          var G;
          e.options.lineWrapping && (G = p.getClientRects()).length > 1 ? W = G[r == "right" ? G.length - 1 : 0] : W = p.getBoundingClientRect();
        }
        if (c && m < 9 && !D && (!W || !W.left && !W.right)) {
          var Z = p.parentNode.getClientRects()[0];
          Z ? W = { left: Z.left, right: Z.left + Gr(e.display), top: Z.top, bottom: Z.bottom } : W = eu;
        }
        for (var J = W.top - n.rect.top, te = W.bottom - n.rect.top, ie = (J + te) / 2, de = n.view.measure.heights, he = 0; he < de.length - 1 && !(ie < de[he]); he++)
          ;
        var xe = he ? de[he - 1] : 0, ge = de[he], Te = {
          left: (N == "right" ? W.right : W.left) - n.rect.left,
          right: (N == "left" ? W.left : W.right) - n.rect.left,
          top: xe,
          bottom: ge
        };
        return !W.left && !W.right && (Te.bogus = !0), e.options.singleCursorHeightPerLine || (Te.rtop = J, Te.rbottom = te), Te;
      }
      function Ec(e, n) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !ua(e))
          return n;
        var i = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: n.left * i,
          right: n.right * i,
          top: n.top * r,
          bottom: n.bottom * r
        };
      }
      function nu(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var n = 0; n < e.rest.length; n++)
            e.measure.caches[n] = {};
      }
      function ru(e) {
        e.display.externalMeasure = null, H(e.display.lineMeasure);
        for (var n = 0; n < e.display.view.length; n++)
          nu(e.display.view[n]);
      }
      function Ci(e) {
        ru(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function iu(e) {
        return w && h ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function ou(e) {
        return w && h ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function Sa(e) {
        var n = wn(e), i = n.widgets, r = 0;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].above && (r += Ei(i[a]));
        return r;
      }
      function Ao(e, n, i, r, a) {
        if (!a) {
          var p = Sa(n);
          i.top += p, i.bottom += p;
        }
        if (r == "line")
          return i;
        r || (r = "local");
        var D = Qn(n);
        if (r == "local" ? D += yo(e.display) : D -= e.display.viewOffset, r == "page" || r == "window") {
          var L = e.display.lineSpace.getBoundingClientRect();
          D += L.top + (r == "window" ? 0 : ou(Se(e)));
          var N = L.left + (r == "window" ? 0 : iu(Se(e)));
          i.left += N, i.right += N;
        }
        return i.top += D, i.bottom += D, i;
      }
      function au(e, n, i) {
        if (i == "div")
          return n;
        var r = n.left, a = n.top;
        if (i == "page")
          r -= iu(Se(e)), a -= ou(Se(e));
        else if (i == "local" || !i) {
          var p = e.display.sizer.getBoundingClientRect();
          r += p.left, a += p.top;
        }
        var D = e.display.lineSpace.getBoundingClientRect();
        return { left: r - D.left, top: a - D.top };
      }
      function xo(e, n, i, r, a) {
        return r || (r = we(e.doc, n.line)), Ao(e, r, _s(e, r, n.ch, a), i);
      }
      function Dn(e, n, i, r, a, p) {
        r = r || we(e.doc, n.line), a || (a = Qr(e, r));
        function D(te, ie) {
          var de = Fn(e, a, te, ie ? "right" : "left", p);
          return ie ? de.left = de.right : de.right = de.left, Ao(e, r, de, i);
        }
        var L = oe(r, e.doc.direction), N = n.ch, W = n.sticky;
        if (N >= r.text.length ? (N = r.text.length, W = "before") : N <= 0 && (N = 0, W = "after"), !L)
          return D(W == "before" ? N - 1 : N, W == "before");
        function Y(te, ie, de) {
          var he = L[ie], xe = he.level == 1;
          return D(de ? te - 1 : te, xe != de);
        }
        var G = Oe(L, N, W), Z = me, J = Y(N, G, W == "before");
        return Z != null && (J.other = Y(N, Z, W != "before")), J;
      }
      function lu(e, n) {
        var i = 0;
        n = Fe(e.doc, n), e.options.lineWrapping || (i = Gr(e.display) * n.ch);
        var r = we(e.doc, n.line), a = Qn(r) + yo(e.display);
        return { left: i, right: i, top: a, bottom: a + r.height };
      }
      function ba(e, n, i, r, a) {
        var p = ee(e, n, i);
        return p.xRel = a, r && (p.outside = r), p;
      }
      function Ea(e, n, i) {
        var r = e.doc;
        if (i += e.display.viewOffset, i < 0)
          return ba(r.first, 0, null, -1, -1);
        var a = k(r, i), p = r.first + r.size - 1;
        if (a > p)
          return ba(r.first + r.size - 1, we(r, p).text.length, null, 1, 1);
        n < 0 && (n = 0);
        for (var D = we(r, a); ; ) {
          var L = Cc(e, D, a, n, i), N = qd(D, L.ch + (L.xRel > 0 || L.outside > 0 ? 1 : 0));
          if (!N)
            return L;
          var W = N.find(1);
          if (W.line == a)
            return W;
          D = we(r, a = W.line);
        }
      }
      function su(e, n, i, r) {
        r -= Sa(n);
        var a = n.text.length, p = We(function(D) {
          return Fn(e, i, D - 1).bottom <= r;
        }, a, 0);
        return a = We(function(D) {
          return Fn(e, i, D).top > r;
        }, p, a), { begin: p, end: a };
      }
      function uu(e, n, i, r) {
        i || (i = Qr(e, n));
        var a = Ao(e, n, Fn(e, i, r), "line").top;
        return su(e, n, i, a);
      }
      function Ca(e, n, i, r) {
        return e.bottom <= i ? !1 : e.top > i ? !0 : (r ? e.left : e.right) > n;
      }
      function Cc(e, n, i, r, a) {
        a -= Qn(n);
        var p = Qr(e, n), D = Sa(n), L = 0, N = n.text.length, W = !0, Y = oe(n, e.doc.direction);
        if (Y) {
          var G = (e.options.lineWrapping ? wc : Tc)(e, n, i, p, Y, r, a);
          W = G.level != 1, L = W ? G.from : G.to - 1, N = W ? G.to : G.from - 1;
        }
        var Z = null, J = null, te = We(function(Re) {
          var Me = Fn(e, p, Re);
          return Me.top += D, Me.bottom += D, Ca(Me, r, a, !1) ? (Me.top <= a && Me.left <= r && (Z = Re, J = Me), !0) : !1;
        }, L, N), ie, de, he = !1;
        if (J) {
          var xe = r - J.left < J.right - r, ge = xe == W;
          te = Z + (ge ? 0 : 1), de = ge ? "after" : "before", ie = xe ? J.left : J.right;
        } else {
          !W && (te == N || te == L) && te++, de = te == 0 ? "after" : te == n.text.length ? "before" : Fn(e, p, te - (W ? 1 : 0)).bottom + D <= a == W ? "after" : "before";
          var Te = Dn(e, ee(i, te, de), "line", n, p);
          ie = Te.left, he = a < Te.top ? -1 : a >= Te.bottom ? 1 : 0;
        }
        return te = Jt(n.text, te, 1), ba(i, te, de, he, r - ie);
      }
      function Tc(e, n, i, r, a, p, D) {
        var L = We(function(G) {
          var Z = a[G], J = Z.level != 1;
          return Ca(Dn(
            e,
            ee(i, J ? Z.to : Z.from, J ? "before" : "after"),
            "line",
            n,
            r
          ), p, D, !0);
        }, 0, a.length - 1), N = a[L];
        if (L > 0) {
          var W = N.level != 1, Y = Dn(
            e,
            ee(i, W ? N.from : N.to, W ? "after" : "before"),
            "line",
            n,
            r
          );
          Ca(Y, p, D, !0) && Y.top > D && (N = a[L - 1]);
        }
        return N;
      }
      function wc(e, n, i, r, a, p, D) {
        var L = su(e, n, r, D), N = L.begin, W = L.end;
        /\s/.test(n.text.charAt(W - 1)) && W--;
        for (var Y = null, G = null, Z = 0; Z < a.length; Z++) {
          var J = a[Z];
          if (!(J.from >= W || J.to <= N)) {
            var te = J.level != 1, ie = Fn(e, r, te ? Math.min(W, J.to) - 1 : Math.max(N, J.from)).right, de = ie < p ? p - ie + 1e9 : ie - p;
            (!Y || G > de) && (Y = J, G = de);
          }
        }
        return Y || (Y = a[a.length - 1]), Y.from < N && (Y = { from: N, to: Y.to, level: Y.level }), Y.to > W && (Y = { from: Y.from, to: W, level: Y.level }), Y;
      }
      var br;
      function kr(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (br == null) {
          br = P("pre", null, "CodeMirror-line-like");
          for (var n = 0; n < 49; ++n)
            br.appendChild(document.createTextNode("x")), br.appendChild(P("br"));
          br.appendChild(document.createTextNode("x"));
        }
        j(e.measure, br);
        var i = br.offsetHeight / 50;
        return i > 3 && (e.cachedTextHeight = i), H(e.measure), i || 1;
      }
      function Gr(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var n = P("span", "xxxxxxxxxx"), i = P("pre", [n], "CodeMirror-line-like");
        j(e.measure, i);
        var r = n.getBoundingClientRect(), a = (r.right - r.left) / 10;
        return a > 2 && (e.cachedCharWidth = a), a || 10;
      }
      function Ta(e) {
        for (var n = e.display, i = {}, r = {}, a = n.gutters.clientLeft, p = n.gutters.firstChild, D = 0; p; p = p.nextSibling, ++D) {
          var L = e.display.gutterSpecs[D].className;
          i[L] = p.offsetLeft + p.clientLeft + a, r[L] = p.clientWidth;
        }
        return {
          fixedPos: wa(n),
          gutterTotalWidth: n.gutters.offsetWidth,
          gutterLeft: i,
          gutterWidth: r,
          wrapperWidth: n.wrapper.clientWidth
        };
      }
      function wa(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function fu(e) {
        var n = kr(e.display), i = e.options.lineWrapping, r = i && Math.max(5, e.display.scroller.clientWidth / Gr(e.display) - 3);
        return function(a) {
          if (or(e.doc, a))
            return 0;
          var p = 0;
          if (a.widgets)
            for (var D = 0; D < a.widgets.length; D++)
              a.widgets[D].height && (p += a.widgets[D].height);
          return i ? p + (Math.ceil(a.text.length / r) || 1) * n : p + n;
        };
      }
      function Da(e) {
        var n = e.doc, i = fu(e);
        n.iter(function(r) {
          var a = i(r);
          a != r.height && un(r, a);
        });
      }
      function Er(e, n, i, r) {
        var a = e.display;
        if (!i && hi(n).getAttribute("cm-not-content") == "true")
          return null;
        var p, D, L = a.lineSpace.getBoundingClientRect();
        try {
          p = n.clientX - L.left, D = n.clientY - L.top;
        } catch {
          return null;
        }
        var N = Ea(e, p, D), W;
        if (r && N.xRel > 0 && (W = we(e.doc, N.line).text).length == N.ch) {
          var Y = pe(W, W.length, e.options.tabSize) - W.length;
          N = ee(N.line, Math.max(0, Math.round((p - Zs(e.display).left) / Gr(e.display)) - Y));
        }
        return N;
      }
      function Cr(e, n) {
        if (n >= e.display.viewTo || (n -= e.display.viewFrom, n < 0))
          return null;
        for (var i = e.display.view, r = 0; r < i.length; r++)
          if (n -= i[r].size, n < 0)
            return r;
      }
      function _t(e, n, i, r) {
        n == null && (n = e.doc.first), i == null && (i = e.doc.first + e.doc.size), r || (r = 0);
        var a = e.display;
        if (r && i < a.viewTo && (a.updateLineNumbers == null || a.updateLineNumbers > n) && (a.updateLineNumbers = n), e.curOp.viewChanged = !0, n >= a.viewTo)
          Yn && pa(e.doc, n) < a.viewTo && lr(e);
        else if (i <= a.viewFrom)
          Yn && $s(e.doc, i + r) > a.viewFrom ? lr(e) : (a.viewFrom += r, a.viewTo += r);
        else if (n <= a.viewFrom && i >= a.viewTo)
          lr(e);
        else if (n <= a.viewFrom) {
          var p = So(e, i, i + r, 1);
          p ? (a.view = a.view.slice(p.index), a.viewFrom = p.lineN, a.viewTo += r) : lr(e);
        } else if (i >= a.viewTo) {
          var D = So(e, n, n, -1);
          D ? (a.view = a.view.slice(0, D.index), a.viewTo = D.lineN) : lr(e);
        } else {
          var L = So(e, n, n, -1), N = So(e, i, i + r, 1);
          L && N ? (a.view = a.view.slice(0, L.index).concat(mo(e, L.lineN, N.lineN)).concat(a.view.slice(N.index)), a.viewTo += r) : lr(e);
        }
        var W = a.externalMeasured;
        W && (i < W.lineN ? W.lineN += r : n < W.lineN + W.size && (a.externalMeasured = null));
      }
      function ar(e, n, i) {
        e.curOp.viewChanged = !0;
        var r = e.display, a = e.display.externalMeasured;
        if (a && n >= a.lineN && n < a.lineN + a.size && (r.externalMeasured = null), !(n < r.viewFrom || n >= r.viewTo)) {
          var p = r.view[Cr(e, n)];
          if (p.node != null) {
            var D = p.changes || (p.changes = []);
            Ee(D, i) == -1 && D.push(i);
          }
        }
      }
      function lr(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function So(e, n, i, r) {
        var a = Cr(e, n), p, D = e.display.view;
        if (!Yn || i == e.doc.first + e.doc.size)
          return { index: a, lineN: i };
        for (var L = e.display.viewFrom, N = 0; N < a; N++)
          L += D[N].size;
        if (L != n) {
          if (r > 0) {
            if (a == D.length - 1)
              return null;
            p = L + D[a].size - n, a++;
          } else
            p = L - n;
          n += p, i += p;
        }
        for (; pa(e.doc, i) != i; ) {
          if (a == (r < 0 ? 0 : D.length - 1))
            return null;
          i += r * D[a - (r < 0 ? 1 : 0)].size, a += r;
        }
        return { index: a, lineN: i };
      }
      function Dc(e, n, i) {
        var r = e.display, a = r.view;
        a.length == 0 || n >= r.viewTo || i <= r.viewFrom ? (r.view = mo(e, n, i), r.viewFrom = n) : (r.viewFrom > n ? r.view = mo(e, n, r.viewFrom).concat(r.view) : r.viewFrom < n && (r.view = r.view.slice(Cr(e, n))), r.viewFrom = n, r.viewTo < i ? r.view = r.view.concat(mo(e, r.viewTo, i)) : r.viewTo > i && (r.view = r.view.slice(0, Cr(e, i)))), r.viewTo = i;
      }
      function du(e) {
        for (var n = e.display.view, i = 0, r = 0; r < n.length; r++) {
          var a = n[r];
          !a.hidden && (!a.node || a.changes) && ++i;
        }
        return i;
      }
      function Ti(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function cu(e, n) {
        n === void 0 && (n = !0);
        var i = e.doc, r = {}, a = r.cursors = document.createDocumentFragment(), p = r.selection = document.createDocumentFragment(), D = e.options.$customCursor;
        D && (n = !0);
        for (var L = 0; L < i.sel.ranges.length; L++)
          if (!(!n && L == i.sel.primIndex)) {
            var N = i.sel.ranges[L];
            if (!(N.from().line >= e.display.viewTo || N.to().line < e.display.viewFrom)) {
              var W = N.empty();
              if (D) {
                var Y = D(e, N);
                Y && Ma(e, Y, a);
              } else
                (W || e.options.showCursorWhenSelecting) && Ma(e, N.head, a);
              W || Mc(e, N, p);
            }
          }
        return r;
      }
      function Ma(e, n, i) {
        var r = Dn(e, n, "div", null, null, !e.options.singleCursorHeightPerLine), a = i.appendChild(P("div", "\xA0", "CodeMirror-cursor"));
        if (a.style.left = r.left + "px", a.style.top = r.top + "px", a.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var p = xo(e, n, "div", null, null), D = p.right - p.left;
          a.style.width = (D > 0 ? D : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var L = i.appendChild(P("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
          L.style.display = "", L.style.left = r.other.left + "px", L.style.top = r.other.top + "px", L.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function bo(e, n) {
        return e.top - n.top || e.left - n.left;
      }
      function Mc(e, n, i) {
        var r = e.display, a = e.doc, p = document.createDocumentFragment(), D = Zs(e.display), L = D.left, N = Math.max(r.sizerWidth, Sr(e) - r.sizer.offsetLeft) - D.right, W = a.direction == "ltr";
        function Y(ge, Te, Re, Me) {
          Te < 0 && (Te = 0), Te = Math.round(Te), Me = Math.round(Me), p.appendChild(P("div", null, "CodeMirror-selected", "position: absolute; left: " + ge + `px;
                             top: ` + Te + "px; width: " + (Re == null ? N - ge : Re) + `px;
                             height: ` + (Me - Te) + "px"));
        }
        function G(ge, Te, Re) {
          var Me = we(a, ge), Be = Me.text.length, et, Rt;
          function ot(ht, nn) {
            return xo(e, ee(ge, ht), "div", Me, nn);
          }
          function ln(ht, nn, Ot) {
            var yt = uu(e, Me, null, ht), gt = nn == "ltr" == (Ot == "after") ? "left" : "right", ft = Ot == "after" ? yt.begin : yt.end - (/\s/.test(Me.text.charAt(yt.end - 1)) ? 2 : 1);
            return ot(ft, gt)[gt];
          }
          var tn = oe(Me, a.direction);
          return Ce(tn, Te || 0, Re == null ? Be : Re, function(ht, nn, Ot, yt) {
            var gt = Ot == "ltr", ft = ot(ht, gt ? "left" : "right"), rn = ot(nn - 1, gt ? "right" : "left"), ai = Te == null && ht == 0, vr = Re == null && nn == Be, zt = yt == 0, Bn = !tn || yt == tn.length - 1;
            if (rn.top - ft.top <= 3) {
              var Pt = (W ? ai : vr) && zt, tl = (W ? vr : ai) && Bn, Xn = Pt ? L : (gt ? ft : rn).left, Rr = tl ? N : (gt ? rn : ft).right;
              Y(Xn, ft.top, Rr - Xn, ft.bottom);
            } else {
              var Pr, Qt, li, nl;
              gt ? (Pr = W && ai && zt ? L : ft.left, Qt = W ? N : ln(ht, Ot, "before"), li = W ? L : ln(nn, Ot, "after"), nl = W && vr && Bn ? N : rn.right) : (Pr = W ? ln(ht, Ot, "before") : L, Qt = !W && ai && zt ? N : ft.right, li = !W && vr && Bn ? L : rn.left, nl = W ? ln(nn, Ot, "after") : N), Y(Pr, ft.top, Qt - Pr, ft.bottom), ft.bottom < rn.top && Y(L, ft.bottom, null, rn.top), Y(li, rn.top, nl - li, rn.bottom);
            }
            (!et || bo(ft, et) < 0) && (et = ft), bo(rn, et) < 0 && (et = rn), (!Rt || bo(ft, Rt) < 0) && (Rt = ft), bo(rn, Rt) < 0 && (Rt = rn);
          }), { start: et, end: Rt };
        }
        var Z = n.from(), J = n.to();
        if (Z.line == J.line)
          G(Z.line, Z.ch, J.ch);
        else {
          var te = we(a, Z.line), ie = we(a, J.line), de = wn(te) == wn(ie), he = G(Z.line, Z.ch, de ? te.text.length + 1 : null).end, xe = G(J.line, de ? 0 : null, J.ch).start;
          de && (he.top < xe.top - 2 ? (Y(he.right, he.top, null, he.bottom), Y(L, xe.top, xe.left, xe.bottom)) : Y(he.right, he.top, xe.left - he.right, he.bottom)), he.bottom < xe.top && Y(L, he.bottom, null, xe.top);
        }
        i.appendChild(p);
      }
      function Ra(e) {
        if (!!e.state.focused) {
          var n = e.display;
          clearInterval(n.blinker);
          var i = !0;
          n.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? n.blinker = setInterval(function() {
            e.hasFocus() || Kr(e), n.cursorDiv.style.visibility = (i = !i) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (n.cursorDiv.style.visibility = "hidden");
        }
      }
      function vu(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Ia(e));
      }
      function Pa(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Kr(e));
        }, 100);
      }
      function Ia(e, n) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (Ye(e, "focus", e, n), e.state.focused = !0, X(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), T && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), Ra(e));
      }
      function Kr(e, n) {
        e.state.delayingBlurEvent || (e.state.focused && (Ye(e, "blur", e, n), e.state.focused = !1, U(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function Eo(e) {
        for (var n = e.display, i = n.lineDiv.offsetTop, r = Math.max(0, n.scroller.getBoundingClientRect().top), a = n.lineDiv.getBoundingClientRect().top, p = 0, D = 0; D < n.view.length; D++) {
          var L = n.view[D], N = e.options.lineWrapping, W = void 0, Y = 0;
          if (!L.hidden) {
            if (a += L.line.height, c && m < 8) {
              var G = L.node.offsetTop + L.node.offsetHeight;
              W = G - i, i = G;
            } else {
              var Z = L.node.getBoundingClientRect();
              W = Z.bottom - Z.top, !N && L.text.firstChild && (Y = L.text.firstChild.getBoundingClientRect().right - Z.left - 1);
            }
            var J = L.line.height - W;
            if ((J > 5e-3 || J < -5e-3) && (a < r && (p -= J), un(L.line, W), pu(L.line), L.rest))
              for (var te = 0; te < L.rest.length; te++)
                pu(L.rest[te]);
            if (Y > e.display.sizerWidth) {
              var ie = Math.ceil(Y / Gr(e.display));
              ie > e.display.maxLineLength && (e.display.maxLineLength = ie, e.display.maxLine = L.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(p) > 2 && (n.scroller.scrollTop += p);
      }
      function pu(e) {
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n) {
            var i = e.widgets[n], r = i.node.parentNode;
            r && (i.height = r.offsetHeight);
          }
      }
      function Co(e, n, i) {
        var r = i && i.top != null ? Math.max(0, i.top) : e.scroller.scrollTop;
        r = Math.floor(r - yo(e));
        var a = i && i.bottom != null ? i.bottom : r + e.wrapper.clientHeight, p = k(n, r), D = k(n, a);
        if (i && i.ensure) {
          var L = i.ensure.from.line, N = i.ensure.to.line;
          L < p ? (p = L, D = k(n, Qn(we(n, L)) + e.wrapper.clientHeight)) : Math.min(N, n.lastLine()) >= D && (p = k(n, Qn(we(n, N)) - e.wrapper.clientHeight), D = N);
        }
        return { from: p, to: Math.max(D, p + 1) };
      }
      function Rc(e, n) {
        if (!Ke(e, "scrollCursorIntoView")) {
          var i = e.display, r = i.sizer.getBoundingClientRect(), a = null, p = i.wrapper.ownerDocument;
          if (n.top + r.top < 0 ? a = !0 : n.bottom + r.top > (p.defaultView.innerHeight || p.documentElement.clientHeight) && (a = !1), a != null && !M) {
            var D = P("div", "\u200B", null, `position: absolute;
                         top: ` + (n.top - i.viewOffset - yo(e.display)) + `px;
                         height: ` + (n.bottom - n.top + On(e) + i.barHeight) + `px;
                         left: ` + n.left + "px; width: " + Math.max(2, n.right - n.left) + "px;");
            e.display.lineSpace.appendChild(D), D.scrollIntoView(a), e.display.lineSpace.removeChild(D);
          }
        }
      }
      function Pc(e, n, i, r) {
        r == null && (r = 0);
        var a;
        !e.options.lineWrapping && n == i && (i = n.sticky == "before" ? ee(n.line, n.ch + 1, "before") : n, n = n.ch ? ee(n.line, n.sticky == "before" ? n.ch - 1 : n.ch, "after") : n);
        for (var p = 0; p < 5; p++) {
          var D = !1, L = Dn(e, n), N = !i || i == n ? L : Dn(e, i);
          a = {
            left: Math.min(L.left, N.left),
            top: Math.min(L.top, N.top) - r,
            right: Math.max(L.left, N.left),
            bottom: Math.max(L.bottom, N.bottom) + r
          };
          var W = La(e, a), Y = e.doc.scrollTop, G = e.doc.scrollLeft;
          if (W.scrollTop != null && (Di(e, W.scrollTop), Math.abs(e.doc.scrollTop - Y) > 1 && (D = !0)), W.scrollLeft != null && (Tr(e, W.scrollLeft), Math.abs(e.doc.scrollLeft - G) > 1 && (D = !0)), !D)
            break;
        }
        return a;
      }
      function Ic(e, n) {
        var i = La(e, n);
        i.scrollTop != null && Di(e, i.scrollTop), i.scrollLeft != null && Tr(e, i.scrollLeft);
      }
      function La(e, n) {
        var i = e.display, r = kr(e.display);
        n.top < 0 && (n.top = 0);
        var a = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : i.scroller.scrollTop, p = Aa(e), D = {};
        n.bottom - n.top > p && (n.bottom = n.top + p);
        var L = e.doc.height + ya(i), N = n.top < r, W = n.bottom > L - r;
        if (n.top < a)
          D.scrollTop = N ? 0 : n.top;
        else if (n.bottom > a + p) {
          var Y = Math.min(n.top, (W ? L : n.bottom) - p);
          Y != a && (D.scrollTop = Y);
        }
        var G = e.options.fixedGutter ? 0 : i.gutters.offsetWidth, Z = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : i.scroller.scrollLeft - G, J = Sr(e) - i.gutters.offsetWidth, te = n.right - n.left > J;
        return te && (n.right = n.left + J), n.left < 10 ? D.scrollLeft = 0 : n.left < Z ? D.scrollLeft = Math.max(0, n.left + G - (te ? 0 : 10)) : n.right > J + Z - 3 && (D.scrollLeft = n.right + (te ? 0 : 10) - J), D;
      }
      function Na(e, n) {
        n != null && (To(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + n);
      }
      function Xr(e) {
        To(e);
        var n = e.getCursor();
        e.curOp.scrollToPos = { from: n, to: n, margin: e.options.cursorScrollMargin };
      }
      function wi(e, n, i) {
        (n != null || i != null) && To(e), n != null && (e.curOp.scrollLeft = n), i != null && (e.curOp.scrollTop = i);
      }
      function Lc(e, n) {
        To(e), e.curOp.scrollToPos = n;
      }
      function To(e) {
        var n = e.curOp.scrollToPos;
        if (n) {
          e.curOp.scrollToPos = null;
          var i = lu(e, n.from), r = lu(e, n.to);
          hu(e, i, r, n.margin);
        }
      }
      function hu(e, n, i, r) {
        var a = La(e, {
          left: Math.min(n.left, i.left),
          top: Math.min(n.top, i.top) - r,
          right: Math.max(n.right, i.right),
          bottom: Math.max(n.bottom, i.bottom) + r
        });
        wi(e, a.scrollLeft, a.scrollTop);
      }
      function Di(e, n) {
        Math.abs(e.doc.scrollTop - n) < 2 || (t || Fa(e, { top: n }), gu(e, n, !0), t && Fa(e), Pi(e, 100));
      }
      function gu(e, n, i) {
        n = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, n)), !(e.display.scroller.scrollTop == n && !i) && (e.doc.scrollTop = n, e.display.scrollbars.setScrollTop(n), e.display.scroller.scrollTop != n && (e.display.scroller.scrollTop = n));
      }
      function Tr(e, n, i, r) {
        n = Math.max(0, Math.min(n, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((i ? n == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - n) < 2) && !r) && (e.doc.scrollLeft = n, Su(e), e.display.scroller.scrollLeft != n && (e.display.scroller.scrollLeft = n), e.display.scrollbars.setScrollLeft(n));
      }
      function Mi(e) {
        var n = e.display, i = n.gutters.offsetWidth, r = Math.round(e.doc.height + ya(e.display));
        return {
          clientHeight: n.scroller.clientHeight,
          viewHeight: n.wrapper.clientHeight,
          scrollWidth: n.scroller.scrollWidth,
          clientWidth: n.scroller.clientWidth,
          viewWidth: n.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? i : 0,
          docHeight: r,
          scrollHeight: r + On(e) + n.barHeight,
          nativeBarWidth: n.nativeBarWidth,
          gutterWidth: i
        };
      }
      var wr = function(e, n, i) {
        this.cm = i;
        var r = this.vert = P("div", [P("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), a = this.horiz = P("div", [P("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = a.tabIndex = -1, e(r), e(a), ue(r, "scroll", function() {
          r.clientHeight && n(r.scrollTop, "vertical");
        }), ue(a, "scroll", function() {
          a.clientWidth && n(a.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, c && m < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      wr.prototype.update = function(e) {
        var n = e.scrollWidth > e.clientWidth + 1, i = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (i) {
          this.vert.style.display = "block", this.vert.style.bottom = n ? r + "px" : "0";
          var a = e.viewHeight - (n ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + a) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (n) {
          this.horiz.style.display = "block", this.horiz.style.right = i ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var p = e.viewWidth - e.barLeft - (i ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + p) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: i ? r : 0, bottom: n ? r : 0 };
      }, wr.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, wr.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, wr.prototype.zeroWidthHack = function() {
        var e = C && !v ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new Pe(), this.disableVert = new Pe();
      }, wr.prototype.enableZeroWidthBar = function(e, n, i) {
        e.style.visibility = "";
        function r() {
          var a = e.getBoundingClientRect(), p = i == "vert" ? document.elementFromPoint(a.right - 1, (a.top + a.bottom) / 2) : document.elementFromPoint((a.right + a.left) / 2, a.bottom - 1);
          p != e ? e.style.visibility = "hidden" : n.set(1e3, r);
        }
        n.set(1e3, r);
      }, wr.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Ri = function() {
      };
      Ri.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Ri.prototype.setScrollLeft = function() {
      }, Ri.prototype.setScrollTop = function() {
      }, Ri.prototype.clear = function() {
      };
      function Jr(e, n) {
        n || (n = Mi(e));
        var i = e.display.barWidth, r = e.display.barHeight;
        mu(e, n);
        for (var a = 0; a < 4 && i != e.display.barWidth || r != e.display.barHeight; a++)
          i != e.display.barWidth && e.options.lineWrapping && Eo(e), mu(e, Mi(e)), i = e.display.barWidth, r = e.display.barHeight;
      }
      function mu(e, n) {
        var i = e.display, r = i.scrollbars.update(n);
        i.sizer.style.paddingRight = (i.barWidth = r.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = r.bottom) + "px", i.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = r.bottom + "px", i.scrollbarFiller.style.width = r.right + "px") : i.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = r.bottom + "px", i.gutterFiller.style.width = n.gutterWidth + "px") : i.gutterFiller.style.display = "";
      }
      var yu = { native: wr, null: Ri };
      function Au(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && U(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new yu[e.options.scrollbarStyle](function(n) {
          e.display.wrapper.insertBefore(n, e.display.scrollbarFiller), ue(n, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), n.setAttribute("cm-not-content", "true");
        }, function(n, i) {
          i == "horizontal" ? Tr(e, n) : Di(e, n);
        }, e), e.display.scrollbars.addClass && X(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var Nc = 0;
      function Dr(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Nc,
          markArrays: null
        }, fc(e.curOp);
      }
      function Mr(e) {
        var n = e.curOp;
        n && cc(n, function(i) {
          for (var r = 0; r < i.ops.length; r++)
            i.ops[r].cm.curOp = null;
          Oc(i);
        });
      }
      function Oc(e) {
        for (var n = e.ops, i = 0; i < n.length; i++)
          Fc(n[i]);
        for (var r = 0; r < n.length; r++)
          Bc(n[r]);
        for (var a = 0; a < n.length; a++)
          Hc(n[a]);
        for (var p = 0; p < n.length; p++)
          Uc(n[p]);
        for (var D = 0; D < n.length; D++)
          zc(n[D]);
      }
      function Fc(e) {
        var n = e.cm, i = n.display;
        $c(n), e.updateMaxLine && ga(n), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && n.options.lineWrapping, e.update = e.mustUpdate && new wo(n, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function Bc(e) {
        e.updatedDisplay = e.mustUpdate && Oa(e.cm, e.update);
      }
      function Hc(e) {
        var n = e.cm, i = n.display;
        e.updatedDisplay && Eo(n), e.barMeasure = Mi(n), i.maxLineChanged && !n.options.lineWrapping && (e.adjustWidthTo = _s(n, i.maxLine, i.maxLine.text.length).left + 3, n.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(i.scroller.clientWidth, i.sizer.offsetLeft + e.adjustWidthTo + On(n) + n.display.barWidth), e.maxScrollLeft = Math.max(0, i.sizer.offsetLeft + e.adjustWidthTo - Sr(n))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = i.input.prepareSelection());
      }
      function Uc(e) {
        var n = e.cm;
        e.adjustWidthTo != null && (n.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < n.doc.scrollLeft && Tr(n, Math.min(n.display.scroller.scrollLeft, e.maxScrollLeft), !0), n.display.maxLineChanged = !1);
        var i = e.focus && e.focus == q(ve(n));
        e.preparedSelection && n.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != n.doc.height) && Jr(n, e.barMeasure), e.updatedDisplay && Ha(n, e.barMeasure), e.selectionChanged && Ra(n), n.state.focused && e.updateInput && n.display.input.reset(e.typing), i && vu(e.cm);
      }
      function zc(e) {
        var n = e.cm, i = n.display, r = n.doc;
        if (e.updatedDisplay && xu(n, e.update), i.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (i.wheelStartX = i.wheelStartY = null), e.scrollTop != null && gu(n, e.scrollTop, e.forceScroll), e.scrollLeft != null && Tr(n, e.scrollLeft, !0, !0), e.scrollToPos) {
          var a = Pc(
            n,
            Fe(r, e.scrollToPos.from),
            Fe(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          Rc(n, a);
        }
        var p = e.maybeHiddenMarkers, D = e.maybeUnhiddenMarkers;
        if (p)
          for (var L = 0; L < p.length; ++L)
            p[L].lines.length || Ye(p[L], "hide");
        if (D)
          for (var N = 0; N < D.length; ++N)
            D[N].lines.length && Ye(D[N], "unhide");
        i.wrapper.offsetHeight && (r.scrollTop = n.display.scroller.scrollTop), e.changeObjs && Ye(n, "changes", n, e.changeObjs), e.update && e.update.finish();
      }
      function an(e, n) {
        if (e.curOp)
          return n();
        Dr(e);
        try {
          return n();
        } finally {
          Mr(e);
        }
      }
      function Dt(e, n) {
        return function() {
          if (e.curOp)
            return n.apply(e, arguments);
          Dr(e);
          try {
            return n.apply(e, arguments);
          } finally {
            Mr(e);
          }
        };
      }
      function Yt(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          Dr(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Mr(this);
          }
        };
      }
      function Mt(e) {
        return function() {
          var n = this.cm;
          if (!n || n.curOp)
            return e.apply(this, arguments);
          Dr(n);
          try {
            return e.apply(this, arguments);
          } finally {
            Mr(n);
          }
        };
      }
      function Pi(e, n) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(n, re(Wc, e));
      }
      function Wc(e) {
        var n = e.doc;
        if (!(n.highlightFrontier >= e.display.viewTo)) {
          var i = +new Date() + e.options.workTime, r = Ai(e, n.highlightFrontier), a = [];
          n.iter(r.line, Math.min(n.first + n.size, e.display.viewTo + 500), function(p) {
            if (r.line >= e.display.viewFrom) {
              var D = p.styles, L = p.text.length > e.options.maxHighlightLength ? Ln(n.mode, r.state) : null, N = Ds(e, p, r, !0);
              L && (r.state = L), p.styles = N.styles;
              var W = p.styleClasses, Y = N.classes;
              Y ? p.styleClasses = Y : W && (p.styleClasses = null);
              for (var G = !D || D.length != p.styles.length || W != Y && (!W || !Y || W.bgClass != Y.bgClass || W.textClass != Y.textClass), Z = 0; !G && Z < D.length; ++Z)
                G = D[Z] != p.styles[Z];
              G && a.push(r.line), p.stateAfter = r.save(), r.nextLine();
            } else
              p.text.length <= e.options.maxHighlightLength && fa(e, p.text, r), p.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+new Date() > i)
              return Pi(e, e.options.workDelay), !0;
          }), n.highlightFrontier = r.line, n.modeFrontier = Math.max(n.modeFrontier, r.line), a.length && an(e, function() {
            for (var p = 0; p < a.length; p++)
              ar(e, a[p], "text");
          });
        }
      }
      var wo = function(e, n, i) {
        var r = e.display;
        this.viewport = n, this.visible = Co(r, e.doc, n), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Sr(e), this.force = i, this.dims = Ta(e), this.events = [];
      };
      wo.prototype.signal = function(e, n) {
        _e(e, n) && this.events.push(arguments);
      }, wo.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          Ye.apply(null, this.events[e]);
      };
      function $c(e) {
        var n = e.display;
        !n.scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = On(e) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = On(e) + "px", n.scrollbarsClipped = !0);
      }
      function jc(e) {
        if (e.hasFocus())
          return null;
        var n = q(ve(e));
        if (!n || !K(e.display.lineDiv, n))
          return null;
        var i = { activeElt: n };
        if (window.getSelection) {
          var r = ae(e).getSelection();
          r.anchorNode && r.extend && K(e.display.lineDiv, r.anchorNode) && (i.anchorNode = r.anchorNode, i.anchorOffset = r.anchorOffset, i.focusNode = r.focusNode, i.focusOffset = r.focusOffset);
        }
        return i;
      }
      function Vc(e) {
        if (!(!e || !e.activeElt || e.activeElt == q(ce(e.activeElt))) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && K(document.body, e.anchorNode) && K(document.body, e.focusNode))) {
          var n = e.activeElt.ownerDocument, i = n.defaultView.getSelection(), r = n.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), i.removeAllRanges(), i.addRange(r), i.extend(e.focusNode, e.focusOffset);
        }
      }
      function Oa(e, n) {
        var i = e.display, r = e.doc;
        if (n.editorIsHidden)
          return lr(e), !1;
        if (!n.force && n.visible.from >= i.viewFrom && n.visible.to <= i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && du(e) == 0)
          return !1;
        bu(e) && (lr(e), n.dims = Ta(e));
        var a = r.first + r.size, p = Math.max(n.visible.from - e.options.viewportMargin, r.first), D = Math.min(a, n.visible.to + e.options.viewportMargin);
        i.viewFrom < p && p - i.viewFrom < 20 && (p = Math.max(r.first, i.viewFrom)), i.viewTo > D && i.viewTo - D < 20 && (D = Math.min(a, i.viewTo)), Yn && (p = pa(e.doc, p), D = $s(e.doc, D));
        var L = p != i.viewFrom || D != i.viewTo || i.lastWrapHeight != n.wrapperHeight || i.lastWrapWidth != n.wrapperWidth;
        Dc(e, p, D), i.viewOffset = Qn(we(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
        var N = du(e);
        if (!L && N == 0 && !n.force && i.renderedView == i.view && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo))
          return !1;
        var W = jc(e);
        return N > 4 && (i.lineDiv.style.display = "none"), Yc(e, i.updateLineNumbers, n.dims), N > 4 && (i.lineDiv.style.display = ""), i.renderedView = i.view, Vc(W), H(i.cursorDiv), H(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, L && (i.lastWrapHeight = n.wrapperHeight, i.lastWrapWidth = n.wrapperWidth, Pi(e, 400)), i.updateLineNumbers = null, !0;
      }
      function xu(e, n) {
        for (var i = n.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || n.oldDisplayWidth == Sr(e)) {
            if (i && i.top != null && (i = { top: Math.min(e.doc.height + ya(e.display) - Aa(e), i.top) }), n.visible = Co(e.display, e.doc, i), n.visible.from >= e.display.viewFrom && n.visible.to <= e.display.viewTo)
              break;
          } else
            r && (n.visible = Co(e.display, e.doc, i));
          if (!Oa(e, n))
            break;
          Eo(e);
          var a = Mi(e);
          Ti(e), Jr(e, a), Ha(e, a), n.force = !1;
        }
        n.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (n.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Fa(e, n) {
        var i = new wo(e, n);
        if (Oa(e, i)) {
          Eo(e), xu(e, i);
          var r = Mi(e);
          Ti(e), Jr(e, r), Ha(e, r), i.finish();
        }
      }
      function Yc(e, n, i) {
        var r = e.display, a = e.options.lineNumbers, p = r.lineDiv, D = p.firstChild;
        function L(te) {
          var ie = te.nextSibling;
          return T && C && e.display.currentWheelTarget == te ? te.style.display = "none" : te.parentNode.removeChild(te), ie;
        }
        for (var N = r.view, W = r.viewFrom, Y = 0; Y < N.length; Y++) {
          var G = N[Y];
          if (!G.hidden)
            if (!G.node || G.node.parentNode != p) {
              var Z = mc(e, G, W, i);
              p.insertBefore(Z, D);
            } else {
              for (; D != G.node; )
                D = L(D);
              var J = a && n != null && n <= W && G.lineNumber;
              G.changes && (Ee(G.changes, "gutter") > -1 && (J = !1), ks(e, G, W, i)), J && (H(G.lineNumber), G.lineNumber.appendChild(document.createTextNode(fe(e.options, W)))), D = G.node.nextSibling;
            }
          W += G.size;
        }
        for (; D; )
          D = L(D);
      }
      function Ba(e) {
        var n = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = n + "px", wt(e, "gutterChanged", e);
      }
      function Ha(e, n) {
        e.display.sizer.style.minHeight = n.docHeight + "px", e.display.heightForcer.style.top = n.docHeight + "px", e.display.gutters.style.height = n.docHeight + e.display.barHeight + On(e) + "px";
      }
      function Su(e) {
        var n = e.display, i = n.view;
        if (!(!n.alignWidgets && (!n.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = wa(n) - n.scroller.scrollLeft + e.doc.scrollLeft, a = n.gutters.offsetWidth, p = r + "px", D = 0; D < i.length; D++)
            if (!i[D].hidden) {
              e.options.fixedGutter && (i[D].gutter && (i[D].gutter.style.left = p), i[D].gutterBackground && (i[D].gutterBackground.style.left = p));
              var L = i[D].alignable;
              if (L)
                for (var N = 0; N < L.length; N++)
                  L[N].style.left = p;
            }
          e.options.fixedGutter && (n.gutters.style.left = r + a + "px");
        }
      }
      function bu(e) {
        if (!e.options.lineNumbers)
          return !1;
        var n = e.doc, i = fe(e.options, n.first + n.size - 1), r = e.display;
        if (i.length != r.lineNumChars) {
          var a = r.measure.appendChild(P(
            "div",
            [P("div", i)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), p = a.firstChild.offsetWidth, D = a.offsetWidth - p;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(p, r.lineGutter.offsetWidth - D) + 1, r.lineNumWidth = r.lineNumInnerWidth + D, r.lineNumChars = r.lineNumInnerWidth ? i.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ba(e.display), !0;
        }
        return !1;
      }
      function Ua(e, n) {
        for (var i = [], r = !1, a = 0; a < e.length; a++) {
          var p = e[a], D = null;
          if (typeof p != "string" && (D = p.style, p = p.className), p == "CodeMirror-linenumbers")
            if (n)
              r = !0;
            else
              continue;
          i.push({ className: p, style: D });
        }
        return n && !r && i.push({ className: "CodeMirror-linenumbers", style: null }), i;
      }
      function Eu(e) {
        var n = e.gutters, i = e.gutterSpecs;
        H(n), e.lineGutter = null;
        for (var r = 0; r < i.length; ++r) {
          var a = i[r], p = a.className, D = a.style, L = n.appendChild(P("div", null, "CodeMirror-gutter " + p));
          D && (L.style.cssText = D), p == "CodeMirror-linenumbers" && (e.lineGutter = L, L.style.width = (e.lineNumWidth || 1) + "px");
        }
        n.style.display = i.length ? "" : "none", Ba(e);
      }
      function Ii(e) {
        Eu(e.display), _t(e), Su(e);
      }
      function Qc(e, n, i, r) {
        var a = this;
        this.input = i, a.scrollbarFiller = P("div", null, "CodeMirror-scrollbar-filler"), a.scrollbarFiller.setAttribute("cm-not-content", "true"), a.gutterFiller = P("div", null, "CodeMirror-gutter-filler"), a.gutterFiller.setAttribute("cm-not-content", "true"), a.lineDiv = V("div", null, "CodeMirror-code"), a.selectionDiv = P("div", null, null, "position: relative; z-index: 1"), a.cursorDiv = P("div", null, "CodeMirror-cursors"), a.measure = P("div", null, "CodeMirror-measure"), a.lineMeasure = P("div", null, "CodeMirror-measure"), a.lineSpace = V(
          "div",
          [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var p = V("div", [a.lineSpace], "CodeMirror-lines");
        a.mover = P("div", [p], null, "position: relative"), a.sizer = P("div", [a.mover], "CodeMirror-sizer"), a.sizerWidth = null, a.heightForcer = P("div", null, null, "position: absolute; height: " + je + "px; width: 1px;"), a.gutters = P("div", null, "CodeMirror-gutters"), a.lineGutter = null, a.scroller = P("div", [a.sizer, a.heightForcer, a.gutters], "CodeMirror-scroll"), a.scroller.setAttribute("tabIndex", "-1"), a.wrapper = P("div", [a.scrollbarFiller, a.gutterFiller, a.scroller], "CodeMirror"), w && E >= 105 && (a.wrapper.style.clipPath = "inset(0px)"), a.wrapper.setAttribute("translate", "no"), c && m < 8 && (a.gutters.style.zIndex = -1, a.scroller.style.paddingRight = 0), !T && !(t && b) && (a.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(a.wrapper) : e(a.wrapper)), a.viewFrom = a.viewTo = n.first, a.reportedViewFrom = a.reportedViewTo = n.first, a.view = [], a.renderedView = null, a.externalMeasured = null, a.viewOffset = 0, a.lastWrapHeight = a.lastWrapWidth = 0, a.updateLineNumbers = null, a.nativeBarWidth = a.barHeight = a.barWidth = 0, a.scrollbarsClipped = !1, a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null, a.alignWidgets = !1, a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null, a.maxLine = null, a.maxLineLength = 0, a.maxLineChanged = !1, a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null, a.shift = !1, a.selForContextMenu = null, a.activeTouch = null, a.gutterSpecs = Ua(r.gutters, r.lineNumbers), Eu(a), i.init(a);
      }
      var Do = 0, Gn = null;
      c ? Gn = -0.53 : t ? Gn = 15 : w ? Gn = -0.7 : S && (Gn = -1 / 3);
      function Cu(e) {
        var n = e.wheelDeltaX, i = e.wheelDeltaY;
        return n == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (n = e.detail), i == null && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : i == null && (i = e.wheelDelta), { x: n, y: i };
      }
      function kc(e) {
        var n = Cu(e);
        return n.x *= Gn, n.y *= Gn, n;
      }
      function Tu(e, n) {
        w && E == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var i = Cu(n), r = i.x, a = i.y, p = Gn;
        n.deltaMode === 0 && (r = n.deltaX, a = n.deltaY, p = 1);
        var D = e.display, L = D.scroller, N = L.scrollWidth > L.clientWidth, W = L.scrollHeight > L.clientHeight;
        if (!!(r && N || a && W)) {
          if (a && C && T) {
            e:
              for (var Y = n.target, G = D.view; Y != L; Y = Y.parentNode)
                for (var Z = 0; Z < G.length; Z++)
                  if (G[Z].node == Y) {
                    e.display.currentWheelTarget = Y;
                    break e;
                  }
          }
          if (r && !t && !g && p != null) {
            a && W && Di(e, Math.max(0, L.scrollTop + a * p)), Tr(e, Math.max(0, L.scrollLeft + r * p)), (!a || a && W) && mt(n), D.wheelStartX = null;
            return;
          }
          if (a && p != null) {
            var J = a * p, te = e.doc.scrollTop, ie = te + D.wrapper.clientHeight;
            J < 0 ? te = Math.max(0, te + J - 50) : ie = Math.min(e.doc.height, ie + J + 50), Fa(e, { top: te, bottom: ie });
          }
          Do < 20 && n.deltaMode !== 0 && (D.wheelStartX == null ? (D.wheelStartX = L.scrollLeft, D.wheelStartY = L.scrollTop, D.wheelDX = r, D.wheelDY = a, setTimeout(function() {
            if (D.wheelStartX != null) {
              var de = L.scrollLeft - D.wheelStartX, he = L.scrollTop - D.wheelStartY, xe = he && D.wheelDY && he / D.wheelDY || de && D.wheelDX && de / D.wheelDX;
              D.wheelStartX = D.wheelStartY = null, xe && (Gn = (Gn * Do + xe) / (Do + 1), ++Do);
            }
          }, 200)) : (D.wheelDX += r, D.wheelDY += a));
        }
      }
      var fn = function(e, n) {
        this.ranges = e, this.primIndex = n;
      };
      fn.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, fn.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var n = 0; n < this.ranges.length; n++) {
          var i = this.ranges[n], r = e.ranges[n];
          if (!ke(i.anchor, r.anchor) || !ke(i.head, r.head))
            return !1;
        }
        return !0;
      }, fn.prototype.deepCopy = function() {
        for (var e = [], n = 0; n < this.ranges.length; n++)
          e[n] = new Ge(Tt(this.ranges[n].anchor), Tt(this.ranges[n].head));
        return new fn(e, this.primIndex);
      }, fn.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, fn.prototype.contains = function(e, n) {
        n || (n = e);
        for (var i = 0; i < this.ranges.length; i++) {
          var r = this.ranges[i];
          if (ye(n, r.from()) >= 0 && ye(e, r.to()) <= 0)
            return i;
        }
        return -1;
      };
      var Ge = function(e, n) {
        this.anchor = e, this.head = n;
      };
      Ge.prototype.from = function() {
        return jr(this.anchor, this.head);
      }, Ge.prototype.to = function() {
        return qt(this.anchor, this.head);
      }, Ge.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function Mn(e, n, i) {
        var r = e && e.options.selectionsMayTouch, a = n[i];
        n.sort(function(Z, J) {
          return ye(Z.from(), J.from());
        }), i = Ee(n, a);
        for (var p = 1; p < n.length; p++) {
          var D = n[p], L = n[p - 1], N = ye(L.to(), D.from());
          if (r && !D.empty() ? N > 0 : N >= 0) {
            var W = jr(L.from(), D.from()), Y = qt(L.to(), D.to()), G = L.empty() ? D.from() == D.head : L.from() == L.head;
            p <= i && --i, n.splice(--p, 2, new Ge(G ? Y : W, G ? W : Y));
          }
        }
        return new fn(n, i);
      }
      function sr(e, n) {
        return new fn([new Ge(e, n || e)], 0);
      }
      function ur(e) {
        return e.text ? ee(
          e.from.line + e.text.length - 1,
          Ue(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function wu(e, n) {
        if (ye(e, n.from) < 0)
          return e;
        if (ye(e, n.to) <= 0)
          return ur(n);
        var i = e.line + n.text.length - (n.to.line - n.from.line) - 1, r = e.ch;
        return e.line == n.to.line && (r += ur(n).ch - n.to.ch), ee(i, r);
      }
      function za(e, n) {
        for (var i = [], r = 0; r < e.sel.ranges.length; r++) {
          var a = e.sel.ranges[r];
          i.push(new Ge(
            wu(a.anchor, n),
            wu(a.head, n)
          ));
        }
        return Mn(e.cm, i, e.sel.primIndex);
      }
      function Du(e, n, i) {
        return e.line == n.line ? ee(i.line, e.ch - n.ch + i.ch) : ee(i.line + (e.line - n.line), e.ch);
      }
      function Gc(e, n, i) {
        for (var r = [], a = ee(e.first, 0), p = a, D = 0; D < n.length; D++) {
          var L = n[D], N = Du(L.from, a, p), W = Du(ur(L), a, p);
          if (a = L.to, p = W, i == "around") {
            var Y = e.sel.ranges[D], G = ye(Y.head, Y.anchor) < 0;
            r[D] = new Ge(G ? W : N, G ? N : W);
          } else
            r[D] = new Ge(N, N);
        }
        return new fn(r, e.sel.primIndex);
      }
      function Wa(e) {
        e.doc.mode = zr(e.options, e.doc.modeOption), Li(e);
      }
      function Li(e) {
        e.doc.iter(function(n) {
          n.stateAfter && (n.stateAfter = null), n.styles && (n.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Pi(e, 100), e.state.modeGen++, e.curOp && _t(e);
      }
      function Mu(e, n) {
        return n.from.ch == 0 && n.to.ch == 0 && Ue(n.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function $a(e, n, i, r) {
        function a(xe) {
          return i ? i[xe] : null;
        }
        function p(xe, ge, Te) {
          tc(xe, ge, Te, r), wt(xe, "change", xe, n);
        }
        function D(xe, ge) {
          for (var Te = [], Re = xe; Re < ge; ++Re)
            Te.push(new Vr(W[Re], a(Re), r));
          return Te;
        }
        var L = n.from, N = n.to, W = n.text, Y = we(e, L.line), G = we(e, N.line), Z = Ue(W), J = a(W.length - 1), te = N.line - L.line;
        if (n.full)
          e.insert(0, D(0, W.length)), e.remove(W.length, e.size - W.length);
        else if (Mu(e, n)) {
          var ie = D(0, W.length - 1);
          p(G, G.text, J), te && e.remove(L.line, te), ie.length && e.insert(L.line, ie);
        } else if (Y == G)
          if (W.length == 1)
            p(Y, Y.text.slice(0, L.ch) + Z + Y.text.slice(N.ch), J);
          else {
            var de = D(1, W.length - 1);
            de.push(new Vr(Z + Y.text.slice(N.ch), J, r)), p(Y, Y.text.slice(0, L.ch) + W[0], a(0)), e.insert(L.line + 1, de);
          }
        else if (W.length == 1)
          p(Y, Y.text.slice(0, L.ch) + W[0] + G.text.slice(N.ch), a(0)), e.remove(L.line + 1, te);
        else {
          p(Y, Y.text.slice(0, L.ch) + W[0], a(0)), p(G, Z + G.text.slice(N.ch), J);
          var he = D(1, W.length - 1);
          te > 1 && e.remove(L.line + 1, te - 1), e.insert(L.line + 1, he);
        }
        wt(e, "change", e, n);
      }
      function fr(e, n, i) {
        function r(a, p, D) {
          if (a.linked)
            for (var L = 0; L < a.linked.length; ++L) {
              var N = a.linked[L];
              if (N.doc != p) {
                var W = D && N.sharedHist;
                i && !W || (n(N.doc, W), r(N.doc, a, W));
              }
            }
        }
        r(e, null, !0);
      }
      function Ru(e, n) {
        if (n.cm)
          throw new Error("This document is already in use.");
        e.doc = n, n.cm = e, Da(e), Wa(e), Pu(e), e.options.direction = n.direction, e.options.lineWrapping || ga(e), e.options.mode = n.modeOption, _t(e);
      }
      function Pu(e) {
        (e.doc.direction == "rtl" ? X : U)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Kc(e) {
        an(e, function() {
          Pu(e), _t(e);
        });
      }
      function Mo(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function ja(e, n) {
        var i = { from: Tt(n.from), to: ur(n), text: Vn(e, n.from, n.to) };
        return Nu(e, i, n.from.line, n.to.line + 1), fr(e, function(r) {
          return Nu(r, i, n.from.line, n.to.line + 1);
        }, !0), i;
      }
      function Iu(e) {
        for (; e.length; ) {
          var n = Ue(e);
          if (n.ranges)
            e.pop();
          else
            break;
        }
      }
      function Xc(e, n) {
        if (n)
          return Iu(e.done), Ue(e.done);
        if (e.done.length && !Ue(e.done).ranges)
          return Ue(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), Ue(e.done);
      }
      function Lu(e, n, i, r) {
        var a = e.history;
        a.undone.length = 0;
        var p = +new Date(), D, L;
        if ((a.lastOp == r || a.lastOrigin == n.origin && n.origin && (n.origin.charAt(0) == "+" && a.lastModTime > p - (e.cm ? e.cm.options.historyEventDelay : 500) || n.origin.charAt(0) == "*")) && (D = Xc(a, a.lastOp == r)))
          L = Ue(D.changes), ye(n.from, n.to) == 0 && ye(n.from, L.to) == 0 ? L.to = ur(n) : D.changes.push(ja(e, n));
        else {
          var N = Ue(a.done);
          for ((!N || !N.ranges) && Ro(e.sel, a.done), D = {
            changes: [ja(e, n)],
            generation: a.generation
          }, a.done.push(D); a.done.length > a.undoDepth; )
            a.done.shift(), a.done[0].ranges || a.done.shift();
        }
        a.done.push(i), a.generation = ++a.maxGeneration, a.lastModTime = a.lastSelTime = p, a.lastOp = a.lastSelOp = r, a.lastOrigin = a.lastSelOrigin = n.origin, L || Ye(e, "historyAdded");
      }
      function Jc(e, n, i, r) {
        var a = n.charAt(0);
        return a == "*" || a == "+" && i.ranges.length == r.ranges.length && i.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function Zc(e, n, i, r) {
        var a = e.history, p = r && r.origin;
        i == a.lastSelOp || p && a.lastSelOrigin == p && (a.lastModTime == a.lastSelTime && a.lastOrigin == p || Jc(e, p, Ue(a.done), n)) ? a.done[a.done.length - 1] = n : Ro(n, a.done), a.lastSelTime = +new Date(), a.lastSelOrigin = p, a.lastSelOp = i, r && r.clearRedo !== !1 && Iu(a.undone);
      }
      function Ro(e, n) {
        var i = Ue(n);
        i && i.ranges && i.equals(e) || n.push(e);
      }
      function Nu(e, n, i, r) {
        var a = n["spans_" + e.id], p = 0;
        e.iter(Math.max(e.first, i), Math.min(e.first + e.size, r), function(D) {
          D.markedSpans && ((a || (a = n["spans_" + e.id] = {}))[p] = D.markedSpans), ++p;
        });
      }
      function qc(e) {
        if (!e)
          return null;
        for (var n, i = 0; i < e.length; ++i)
          e[i].marker.explicitlyCleared ? n || (n = e.slice(0, i)) : n && n.push(e[i]);
        return n ? n.length ? n : null : e;
      }
      function _c(e, n) {
        var i = n["spans_" + e.id];
        if (!i)
          return null;
        for (var r = [], a = 0; a < n.text.length; ++a)
          r.push(qc(i[a]));
        return r;
      }
      function Ou(e, n) {
        var i = _c(e, n), r = ca(e, n);
        if (!i)
          return r;
        if (!r)
          return i;
        for (var a = 0; a < i.length; ++a) {
          var p = i[a], D = r[a];
          if (p && D) {
            e:
              for (var L = 0; L < D.length; ++L) {
                for (var N = D[L], W = 0; W < p.length; ++W)
                  if (p[W].marker == N.marker)
                    continue e;
                p.push(N);
              }
          } else
            D && (i[a] = D);
        }
        return i;
      }
      function Zr(e, n, i) {
        for (var r = [], a = 0; a < e.length; ++a) {
          var p = e[a];
          if (p.ranges) {
            r.push(i ? fn.prototype.deepCopy.call(p) : p);
            continue;
          }
          var D = p.changes, L = [];
          r.push({ changes: L });
          for (var N = 0; N < D.length; ++N) {
            var W = D[N], Y = void 0;
            if (L.push({ from: W.from, to: W.to, text: W.text }), n)
              for (var G in W)
                (Y = G.match(/^spans_(\d+)$/)) && Ee(n, Number(Y[1])) > -1 && (Ue(L)[G] = W[G], delete W[G]);
          }
        }
        return r;
      }
      function Va(e, n, i, r) {
        if (r) {
          var a = e.anchor;
          if (i) {
            var p = ye(n, a) < 0;
            p != ye(i, a) < 0 ? (a = n, n = i) : p != ye(n, i) < 0 && (n = i);
          }
          return new Ge(a, n);
        } else
          return new Ge(i || n, n);
      }
      function Po(e, n, i, r, a) {
        a == null && (a = e.cm && (e.cm.display.shift || e.extend)), Ut(e, new fn([Va(e.sel.primary(), n, i, a)], 0), r);
      }
      function Fu(e, n, i) {
        for (var r = [], a = e.cm && (e.cm.display.shift || e.extend), p = 0; p < e.sel.ranges.length; p++)
          r[p] = Va(e.sel.ranges[p], n[p], null, a);
        var D = Mn(e.cm, r, e.sel.primIndex);
        Ut(e, D, i);
      }
      function Ya(e, n, i, r) {
        var a = e.sel.ranges.slice(0);
        a[n] = i, Ut(e, Mn(e.cm, a, e.sel.primIndex), r);
      }
      function Bu(e, n, i, r) {
        Ut(e, sr(n, i), r);
      }
      function ev(e, n, i) {
        var r = {
          ranges: n.ranges,
          update: function(a) {
            this.ranges = [];
            for (var p = 0; p < a.length; p++)
              this.ranges[p] = new Ge(
                Fe(e, a[p].anchor),
                Fe(e, a[p].head)
              );
          },
          origin: i && i.origin
        };
        return Ye(e, "beforeSelectionChange", e, r), e.cm && Ye(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != n.ranges ? Mn(e.cm, r.ranges, r.ranges.length - 1) : n;
      }
      function Hu(e, n, i) {
        var r = e.history.done, a = Ue(r);
        a && a.ranges ? (r[r.length - 1] = n, Io(e, n, i)) : Ut(e, n, i);
      }
      function Ut(e, n, i) {
        Io(e, n, i), Zc(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i);
      }
      function Io(e, n, i) {
        (_e(e, "beforeSelectionChange") || e.cm && _e(e.cm, "beforeSelectionChange")) && (n = ev(e, n, i));
        var r = i && i.bias || (ye(n.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Uu(e, Wu(e, n, r, !0)), !(i && i.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Xr(e.cm);
      }
      function Uu(e, n) {
        n.equals(e.sel) || (e.sel = n, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, st(e.cm)), wt(e, "cursorActivity", e));
      }
      function zu(e) {
        Uu(e, Wu(e, e.sel, null, !1));
      }
      function Wu(e, n, i, r) {
        for (var a, p = 0; p < n.ranges.length; p++) {
          var D = n.ranges[p], L = n.ranges.length == e.sel.ranges.length && e.sel.ranges[p], N = Lo(e, D.anchor, L && L.anchor, i, r), W = D.head == D.anchor ? N : Lo(e, D.head, L && L.head, i, r);
          (a || N != D.anchor || W != D.head) && (a || (a = n.ranges.slice(0, p)), a[p] = new Ge(N, W));
        }
        return a ? Mn(e.cm, a, n.primIndex) : n;
      }
      function qr(e, n, i, r, a) {
        var p = we(e, n.line);
        if (p.markedSpans)
          for (var D = 0; D < p.markedSpans.length; ++D) {
            var L = p.markedSpans[D], N = L.marker, W = "selectLeft" in N ? !N.selectLeft : N.inclusiveLeft, Y = "selectRight" in N ? !N.selectRight : N.inclusiveRight;
            if ((L.from == null || (W ? L.from <= n.ch : L.from < n.ch)) && (L.to == null || (Y ? L.to >= n.ch : L.to > n.ch))) {
              if (a && (Ye(N, "beforeCursorEnter"), N.explicitlyCleared))
                if (p.markedSpans) {
                  --D;
                  continue;
                } else
                  break;
              if (!N.atomic)
                continue;
              if (i) {
                var G = N.find(r < 0 ? 1 : -1), Z = void 0;
                if ((r < 0 ? Y : W) && (G = $u(e, G, -r, G && G.line == n.line ? p : null)), G && G.line == n.line && (Z = ye(G, i)) && (r < 0 ? Z < 0 : Z > 0))
                  return qr(e, G, n, r, a);
              }
              var J = N.find(r < 0 ? -1 : 1);
              return (r < 0 ? W : Y) && (J = $u(e, J, r, J.line == n.line ? p : null)), J ? qr(e, J, n, r, a) : null;
            }
          }
        return n;
      }
      function Lo(e, n, i, r, a) {
        var p = r || 1, D = qr(e, n, i, p, a) || !a && qr(e, n, i, p, !0) || qr(e, n, i, -p, a) || !a && qr(e, n, i, -p, !0);
        return D || (e.cantEdit = !0, ee(e.first, 0));
      }
      function $u(e, n, i, r) {
        return i < 0 && n.ch == 0 ? n.line > e.first ? Fe(e, ee(n.line - 1)) : null : i > 0 && n.ch == (r || we(e, n.line)).text.length ? n.line < e.first + e.size - 1 ? ee(n.line + 1, 0) : null : new ee(n.line, n.ch + i);
      }
      function ju(e) {
        e.setSelection(ee(e.firstLine(), 0), ee(e.lastLine()), Nt);
      }
      function Vu(e, n, i) {
        var r = {
          canceled: !1,
          from: n.from,
          to: n.to,
          text: n.text,
          origin: n.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return i && (r.update = function(a, p, D, L) {
          a && (r.from = Fe(e, a)), p && (r.to = Fe(e, p)), D && (r.text = D), L !== void 0 && (r.origin = L);
        }), Ye(e, "beforeChange", e, r), e.cm && Ye(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function _r(e, n, i) {
        if (e.cm) {
          if (!e.cm.curOp)
            return Dt(e.cm, _r)(e, n, i);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((_e(e, "beforeChange") || e.cm && _e(e.cm, "beforeChange")) && (n = Vu(e, n, !0), !n))) {
          var r = Os && !i && Zd(e, n.from, n.to);
          if (r)
            for (var a = r.length - 1; a >= 0; --a)
              Yu(e, { from: r[a].from, to: r[a].to, text: a ? [""] : n.text, origin: n.origin });
          else
            Yu(e, n);
        }
      }
      function Yu(e, n) {
        if (!(n.text.length == 1 && n.text[0] == "" && ye(n.from, n.to) == 0)) {
          var i = za(e, n);
          Lu(e, n, i, e.cm ? e.cm.curOp.id : NaN), Ni(e, n, i, ca(e, n));
          var r = [];
          fr(e, function(a, p) {
            !p && Ee(r, a.history) == -1 && (Ku(a.history, n), r.push(a.history)), Ni(a, n, null, ca(a, n));
          });
        }
      }
      function No(e, n, i) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !i)) {
          for (var a = e.history, p, D = e.sel, L = n == "undo" ? a.done : a.undone, N = n == "undo" ? a.undone : a.done, W = 0; W < L.length && (p = L[W], !(i ? p.ranges && !p.equals(e.sel) : !p.ranges)); W++)
            ;
          if (W != L.length) {
            for (a.lastOrigin = a.lastSelOrigin = null; ; )
              if (p = L.pop(), p.ranges) {
                if (Ro(p, N), i && !p.equals(e.sel)) {
                  Ut(e, p, { clearRedo: !1 });
                  return;
                }
                D = p;
              } else if (r) {
                L.push(p);
                return;
              } else
                break;
            var Y = [];
            Ro(D, N), N.push({ changes: Y, generation: a.generation }), a.generation = p.generation || ++a.maxGeneration;
            for (var G = _e(e, "beforeChange") || e.cm && _e(e.cm, "beforeChange"), Z = function(ie) {
              var de = p.changes[ie];
              if (de.origin = n, G && !Vu(e, de, !1))
                return L.length = 0, {};
              Y.push(ja(e, de));
              var he = ie ? za(e, de) : Ue(L);
              Ni(e, de, he, Ou(e, de)), !ie && e.cm && e.cm.scrollIntoView({ from: de.from, to: ur(de) });
              var xe = [];
              fr(e, function(ge, Te) {
                !Te && Ee(xe, ge.history) == -1 && (Ku(ge.history, de), xe.push(ge.history)), Ni(ge, de, null, Ou(ge, de));
              });
            }, J = p.changes.length - 1; J >= 0; --J) {
              var te = Z(J);
              if (te)
                return te.v;
            }
          }
        }
      }
      function Qu(e, n) {
        if (n != 0 && (e.first += n, e.sel = new fn(Ht(e.sel.ranges, function(a) {
          return new Ge(
            ee(a.anchor.line + n, a.anchor.ch),
            ee(a.head.line + n, a.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          _t(e.cm, e.first, e.first - n, n);
          for (var i = e.cm.display, r = i.viewFrom; r < i.viewTo; r++)
            ar(e.cm, r, "gutter");
        }
      }
      function Ni(e, n, i, r) {
        if (e.cm && !e.cm.curOp)
          return Dt(e.cm, Ni)(e, n, i, r);
        if (n.to.line < e.first) {
          Qu(e, n.text.length - 1 - (n.to.line - n.from.line));
          return;
        }
        if (!(n.from.line > e.lastLine())) {
          if (n.from.line < e.first) {
            var a = n.text.length - 1 - (e.first - n.from.line);
            Qu(e, a), n = {
              from: ee(e.first, 0),
              to: ee(n.to.line + a, n.to.ch),
              text: [Ue(n.text)],
              origin: n.origin
            };
          }
          var p = e.lastLine();
          n.to.line > p && (n = {
            from: n.from,
            to: ee(p, we(e, p).text.length),
            text: [n.text[0]],
            origin: n.origin
          }), n.removed = Vn(e, n.from, n.to), i || (i = za(e, n)), e.cm ? tv(e.cm, n, r) : $a(e, n, r), Io(e, i, Nt), e.cantEdit && Lo(e, ee(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function tv(e, n, i) {
        var r = e.doc, a = e.display, p = n.from, D = n.to, L = !1, N = p.line;
        e.options.lineWrapping || (N = $(wn(we(r, p.line))), r.iter(N, D.line + 1, function(J) {
          if (J == a.maxLine)
            return L = !0, !0;
        })), r.sel.contains(n.from, n.to) > -1 && st(e), $a(r, n, i, fu(e)), e.options.lineWrapping || (r.iter(N, p.line + n.text.length, function(J) {
          var te = go(J);
          te > a.maxLineLength && (a.maxLine = J, a.maxLineLength = te, a.maxLineChanged = !0, L = !1);
        }), L && (e.curOp.updateMaxLine = !0)), Yd(r, p.line), Pi(e, 400);
        var W = n.text.length - (D.line - p.line) - 1;
        n.full ? _t(e) : p.line == D.line && n.text.length == 1 && !Mu(e.doc, n) ? ar(e, p.line, "text") : _t(e, p.line, D.line + 1, W);
        var Y = _e(e, "changes"), G = _e(e, "change");
        if (G || Y) {
          var Z = {
            from: p,
            to: D,
            text: n.text,
            removed: n.removed,
            origin: n.origin
          };
          G && wt(e, "change", e, Z), Y && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(Z);
        }
        e.display.selForContextMenu = null;
      }
      function ei(e, n, i, r, a) {
        var p;
        r || (r = i), ye(r, i) < 0 && (p = [r, i], i = p[0], r = p[1]), typeof n == "string" && (n = e.splitLines(n)), _r(e, { from: i, to: r, text: n, origin: a });
      }
      function ku(e, n, i, r) {
        i < e.line ? e.line += r : n < e.line && (e.line = n, e.ch = 0);
      }
      function Gu(e, n, i, r) {
        for (var a = 0; a < e.length; ++a) {
          var p = e[a], D = !0;
          if (p.ranges) {
            p.copied || (p = e[a] = p.deepCopy(), p.copied = !0);
            for (var L = 0; L < p.ranges.length; L++)
              ku(p.ranges[L].anchor, n, i, r), ku(p.ranges[L].head, n, i, r);
            continue;
          }
          for (var N = 0; N < p.changes.length; ++N) {
            var W = p.changes[N];
            if (i < W.from.line)
              W.from = ee(W.from.line + r, W.from.ch), W.to = ee(W.to.line + r, W.to.ch);
            else if (n <= W.to.line) {
              D = !1;
              break;
            }
          }
          D || (e.splice(0, a + 1), a = 0);
        }
      }
      function Ku(e, n) {
        var i = n.from.line, r = n.to.line, a = n.text.length - (r - i) - 1;
        Gu(e.done, i, r, a), Gu(e.undone, i, r, a);
      }
      function Oi(e, n, i, r) {
        var a = n, p = n;
        return typeof n == "number" ? p = we(e, Ts(e, n)) : a = $(n), a == null ? null : (r(p, a) && e.cm && ar(e.cm, a, i), p);
      }
      function Fi(e) {
        this.lines = e, this.parent = null;
        for (var n = 0, i = 0; i < e.length; ++i)
          e[i].parent = this, n += e[i].height;
        this.height = n;
      }
      Fi.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        removeInner: function(e, n) {
          for (var i = e, r = e + n; i < r; ++i) {
            var a = this.lines[i];
            this.height -= a.height, nc(a), wt(a, "delete");
          }
          this.lines.splice(e, n);
        },
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        insertInner: function(e, n, i) {
          this.height += i, this.lines = this.lines.slice(0, e).concat(n).concat(this.lines.slice(e));
          for (var r = 0; r < n.length; ++r)
            n[r].parent = this;
        },
        iterN: function(e, n, i) {
          for (var r = e + n; e < r; ++e)
            if (i(this.lines[e]))
              return !0;
        }
      };
      function Bi(e) {
        this.children = e;
        for (var n = 0, i = 0, r = 0; r < e.length; ++r) {
          var a = e[r];
          n += a.chunkSize(), i += a.height, a.parent = this;
        }
        this.size = n, this.height = i, this.parent = null;
      }
      Bi.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, n) {
          this.size -= n;
          for (var i = 0; i < this.children.length; ++i) {
            var r = this.children[i], a = r.chunkSize();
            if (e < a) {
              var p = Math.min(n, a - e), D = r.height;
              if (r.removeInner(e, p), this.height -= D - r.height, a == p && (this.children.splice(i--, 1), r.parent = null), (n -= p) == 0)
                break;
              e = 0;
            } else
              e -= a;
          }
          if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof Fi))) {
            var L = [];
            this.collapse(L), this.children = [new Fi(L)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var n = 0; n < this.children.length; ++n)
            this.children[n].collapse(e);
        },
        insertInner: function(e, n, i) {
          this.size += n.length, this.height += i;
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], p = a.chunkSize();
            if (e <= p) {
              if (a.insertInner(e, n, i), a.lines && a.lines.length > 50) {
                for (var D = a.lines.length % 25 + 25, L = D; L < a.lines.length; ) {
                  var N = new Fi(a.lines.slice(L, L += 25));
                  a.height -= N.height, this.children.splice(++r, 0, N), N.parent = this;
                }
                a.lines = a.lines.slice(0, D), this.maybeSpill();
              }
              break;
            }
            e -= p;
          }
        },
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var n = e.children.splice(e.children.length - 5, 5), i = new Bi(n);
              if (e.parent) {
                e.size -= i.size, e.height -= i.height;
                var a = Ee(e.parent.children, e);
                e.parent.children.splice(a + 1, 0, i);
              } else {
                var r = new Bi(e.children);
                r.parent = e, e.children = [r, i], e = r;
              }
              i.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, n, i) {
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], p = a.chunkSize();
            if (e < p) {
              var D = Math.min(n, p - e);
              if (a.iterN(e, D, i))
                return !0;
              if ((n -= D) == 0)
                break;
              e = 0;
            } else
              e -= p;
          }
        }
      };
      var Hi = function(e, n, i) {
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && (this[r] = i[r]);
        this.doc = e, this.node = n;
      };
      Hi.prototype.clear = function() {
        var e = this.doc.cm, n = this.line.widgets, i = this.line, r = $(i);
        if (!(r == null || !n)) {
          for (var a = 0; a < n.length; ++a)
            n[a] == this && n.splice(a--, 1);
          n.length || (i.widgets = null);
          var p = Ei(this);
          un(i, Math.max(0, i.height - p)), e && (an(e, function() {
            Xu(e, i, -p), ar(e, r, "widget");
          }), wt(e, "lineWidgetCleared", e, this, r));
        }
      }, Hi.prototype.changed = function() {
        var e = this, n = this.height, i = this.doc.cm, r = this.line;
        this.height = null;
        var a = Ei(this) - n;
        !a || (or(this.doc, r) || un(r, r.height + a), i && an(i, function() {
          i.curOp.forceUpdate = !0, Xu(i, r, a), wt(i, "lineWidgetChanged", i, e, $(r));
        }));
      }, Vt(Hi);
      function Xu(e, n, i) {
        Qn(n) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Na(e, i);
      }
      function nv(e, n, i, r) {
        var a = new Hi(e, i, r), p = e.cm;
        return p && a.noHScroll && (p.display.alignWidgets = !0), Oi(e, n, "widget", function(D) {
          var L = D.widgets || (D.widgets = []);
          if (a.insertAt == null ? L.push(a) : L.splice(Math.min(L.length, Math.max(0, a.insertAt)), 0, a), a.line = D, p && !or(e, D)) {
            var N = Qn(D) < e.scrollTop;
            un(D, D.height + Ei(a)), N && Na(p, a.height), p.curOp.forceUpdate = !0;
          }
          return !0;
        }), p && wt(p, "lineWidgetAdded", p, a, typeof n == "number" ? n : $(n)), a;
      }
      var Ju = 0, dr = function(e, n) {
        this.lines = [], this.type = n, this.doc = e, this.id = ++Ju;
      };
      dr.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, n = e && !e.curOp;
          if (n && Dr(e), _e(this, "clear")) {
            var i = this.find();
            i && wt(this, "clear", i.from, i.to);
          }
          for (var r = null, a = null, p = 0; p < this.lines.length; ++p) {
            var D = this.lines[p], L = xi(D.markedSpans, this);
            e && !this.collapsed ? ar(e, $(D), "text") : e && (L.to != null && (a = $(D)), L.from != null && (r = $(D))), D.markedSpans = Gd(D.markedSpans, L), L.from == null && this.collapsed && !or(this.doc, D) && e && un(D, kr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var N = 0; N < this.lines.length; ++N) {
              var W = wn(this.lines[N]), Y = go(W);
              Y > e.display.maxLineLength && (e.display.maxLine = W, e.display.maxLineLength = Y, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && _t(e, r, a + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && zu(e.doc)), e && wt(e, "markerCleared", e, this, r, a), n && Mr(e), this.parent && this.parent.clear();
        }
      }, dr.prototype.find = function(e, n) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var i, r, a = 0; a < this.lines.length; ++a) {
          var p = this.lines[a], D = xi(p.markedSpans, this);
          if (D.from != null && (i = ee(n ? p : $(p), D.from), e == -1))
            return i;
          if (D.to != null && (r = ee(n ? p : $(p), D.to), e == 1))
            return r;
        }
        return i && { from: i, to: r };
      }, dr.prototype.changed = function() {
        var e = this, n = this.find(-1, !0), i = this, r = this.doc.cm;
        !n || !r || an(r, function() {
          var a = n.line, p = $(n.line), D = xa(r, p);
          if (D && (nu(D), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !or(i.doc, a) && i.height != null) {
            var L = i.height;
            i.height = null;
            var N = Ei(i) - L;
            N && un(a, a.height + N);
          }
          wt(r, "markerChanged", r, e);
        });
      }, dr.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (!n.maybeHiddenMarkers || Ee(n.maybeHiddenMarkers, this) == -1) && (n.maybeUnhiddenMarkers || (n.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, dr.prototype.detachLine = function(e) {
        if (this.lines.splice(Ee(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (n.maybeHiddenMarkers || (n.maybeHiddenMarkers = [])).push(this);
        }
      }, Vt(dr);
      function ti(e, n, i, r, a) {
        if (r && r.shared)
          return rv(e, n, i, r, a);
        if (e.cm && !e.cm.curOp)
          return Dt(e.cm, ti)(e, n, i, r, a);
        var p = new dr(e, a), D = ye(n, i);
        if (r && se(r, p, !1), D > 0 || D == 0 && p.clearWhenEmpty !== !1)
          return p;
        if (p.replacedWith && (p.collapsed = !0, p.widgetNode = V("span", [p.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || p.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (p.widgetNode.insertLeft = !0)), p.collapsed) {
          if (Ws(e, n.line, n, i, p) || n.line != i.line && Ws(e, i.line, n, i, p))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          kd();
        }
        p.addToHistory && Lu(e, { from: n, to: i, origin: "markText" }, e.sel, NaN);
        var L = n.line, N = e.cm, W;
        if (e.iter(L, i.line + 1, function(G) {
          N && p.collapsed && !N.options.lineWrapping && wn(G) == N.display.maxLine && (W = !0), p.collapsed && L != n.line && un(G, 0), Kd(G, new co(
            p,
            L == n.line ? n.ch : null,
            L == i.line ? i.ch : null
          ), e.cm && e.cm.curOp), ++L;
        }), p.collapsed && e.iter(n.line, i.line + 1, function(G) {
          or(e, G) && un(G, 0);
        }), p.clearOnEnter && ue(p, "beforeCursorEnter", function() {
          return p.clear();
        }), p.readOnly && (Qd(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), p.collapsed && (p.id = ++Ju, p.atomic = !0), N) {
          if (W && (N.curOp.updateMaxLine = !0), p.collapsed)
            _t(N, n.line, i.line + 1);
          else if (p.className || p.startStyle || p.endStyle || p.css || p.attributes || p.title)
            for (var Y = n.line; Y <= i.line; Y++)
              ar(N, Y, "text");
          p.atomic && zu(N.doc), wt(N, "markerAdded", N, p);
        }
        return p;
      }
      var Ui = function(e, n) {
        this.markers = e, this.primary = n;
        for (var i = 0; i < e.length; ++i)
          e[i].parent = this;
      };
      Ui.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          wt(this, "clear");
        }
      }, Ui.prototype.find = function(e, n) {
        return this.primary.find(e, n);
      }, Vt(Ui);
      function rv(e, n, i, r, a) {
        r = se(r), r.shared = !1;
        var p = [ti(e, n, i, r, a)], D = p[0], L = r.widgetNode;
        return fr(e, function(N) {
          L && (r.widgetNode = L.cloneNode(!0)), p.push(ti(N, Fe(N, n), Fe(N, i), r, a));
          for (var W = 0; W < N.linked.length; ++W)
            if (N.linked[W].isParent)
              return;
          D = Ue(p);
        }), new Ui(p, D);
      }
      function Zu(e) {
        return e.findMarks(ee(e.first, 0), e.clipPos(ee(e.lastLine())), function(n) {
          return n.parent;
        });
      }
      function iv(e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i], a = r.find(), p = e.clipPos(a.from), D = e.clipPos(a.to);
          if (ye(p, D)) {
            var L = ti(e, p, D, r.primary, r.primary.type);
            r.markers.push(L), L.parent = r;
          }
        }
      }
      function ov(e) {
        for (var n = function(r) {
          var a = e[r], p = [a.primary.doc];
          fr(a.primary.doc, function(N) {
            return p.push(N);
          });
          for (var D = 0; D < a.markers.length; D++) {
            var L = a.markers[D];
            Ee(p, L.doc) == -1 && (L.parent = null, a.markers.splice(D--, 1));
          }
        }, i = 0; i < e.length; i++)
          n(i);
      }
      var av = 0, en = function(e, n, i, r, a) {
        if (!(this instanceof en))
          return new en(e, n, i, r, a);
        i == null && (i = 0), Bi.call(this, [new Fi([new Vr("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var p = ee(i, 0);
        this.sel = sr(p), this.history = new Mo(null), this.id = ++av, this.modeOption = n, this.lineSep = r, this.direction = a == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), $a(this, { from: p, to: p, text: e }), Ut(this, sr(p), Nt);
      };
      en.prototype = hn(Bi.prototype, {
        constructor: en,
        iter: function(e, n, i) {
          i ? this.iterN(e - this.first, n - e, i) : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function(e, n) {
          for (var i = 0, r = 0; r < n.length; ++r)
            i += n[r].height;
          this.insertInner(e - this.first, n, i);
        },
        remove: function(e, n) {
          this.removeInner(e - this.first, n);
        },
        getValue: function(e) {
          var n = yi(this, this.first, this.first + this.size);
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        setValue: Mt(function(e) {
          var n = ee(this.first, 0), i = this.first + this.size - 1;
          _r(this, {
            from: n,
            to: ee(i, we(this, i).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && wi(this.cm, 0, 0), Ut(this, sr(n), Nt);
        }),
        replaceRange: function(e, n, i, r) {
          n = Fe(this, n), i = i ? Fe(this, i) : n, ei(this, e, n, i, r);
        },
        getRange: function(e, n, i) {
          var r = Vn(this, Fe(this, e), Fe(this, n));
          return i === !1 ? r : i === "" ? r.join("") : r.join(i || this.lineSeparator());
        },
        getLine: function(e) {
          var n = this.getLineHandle(e);
          return n && n.text;
        },
        getLineHandle: function(e) {
          if (ne(this, e))
            return we(this, e);
        },
        getLineNumber: function(e) {
          return $(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = we(this, e)), wn(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return Fe(this, e);
        },
        getCursor: function(e) {
          var n = this.sel.primary(), i;
          return e == null || e == "head" ? i = n.head : e == "anchor" ? i = n.anchor : e == "end" || e == "to" || e === !1 ? i = n.to() : i = n.from(), i;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: Mt(function(e, n, i) {
          Bu(this, Fe(this, typeof e == "number" ? ee(e, n || 0) : e), null, i);
        }),
        setSelection: Mt(function(e, n, i) {
          Bu(this, Fe(this, e), Fe(this, n || e), i);
        }),
        extendSelection: Mt(function(e, n, i) {
          Po(this, Fe(this, e), n && Fe(this, n), i);
        }),
        extendSelections: Mt(function(e, n) {
          Fu(this, ws(this, e), n);
        }),
        extendSelectionsBy: Mt(function(e, n) {
          var i = Ht(this.sel.ranges, e);
          Fu(this, ws(this, i), n);
        }),
        setSelections: Mt(function(e, n, i) {
          if (!!e.length) {
            for (var r = [], a = 0; a < e.length; a++)
              r[a] = new Ge(
                Fe(this, e[a].anchor),
                Fe(this, e[a].head || e[a].anchor)
              );
            n == null && (n = Math.min(e.length - 1, this.sel.primIndex)), Ut(this, Mn(this.cm, r, n), i);
          }
        }),
        addSelection: Mt(function(e, n, i) {
          var r = this.sel.ranges.slice(0);
          r.push(new Ge(Fe(this, e), Fe(this, n || e))), Ut(this, Mn(this.cm, r, r.length - 1), i);
        }),
        getSelection: function(e) {
          for (var n = this.sel.ranges, i, r = 0; r < n.length; r++) {
            var a = Vn(this, n[r].from(), n[r].to());
            i = i ? i.concat(a) : a;
          }
          return e === !1 ? i : i.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var n = [], i = this.sel.ranges, r = 0; r < i.length; r++) {
            var a = Vn(this, i[r].from(), i[r].to());
            e !== !1 && (a = a.join(e || this.lineSeparator())), n[r] = a;
          }
          return n;
        },
        replaceSelection: function(e, n, i) {
          for (var r = [], a = 0; a < this.sel.ranges.length; a++)
            r[a] = e;
          this.replaceSelections(r, n, i || "+input");
        },
        replaceSelections: Mt(function(e, n, i) {
          for (var r = [], a = this.sel, p = 0; p < a.ranges.length; p++) {
            var D = a.ranges[p];
            r[p] = { from: D.from(), to: D.to(), text: this.splitLines(e[p]), origin: i };
          }
          for (var L = n && n != "end" && Gc(this, r, n), N = r.length - 1; N >= 0; N--)
            _r(this, r[N]);
          L ? Hu(this, L) : this.cm && Xr(this.cm);
        }),
        undo: Mt(function() {
          No(this, "undo");
        }),
        redo: Mt(function() {
          No(this, "redo");
        }),
        undoSelection: Mt(function() {
          No(this, "undo", !0);
        }),
        redoSelection: Mt(function() {
          No(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, n = 0, i = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++n;
          for (var a = 0; a < e.undone.length; a++)
            e.undone[a].ranges || ++i;
          return { undo: n, redo: i };
        },
        clearHistory: function() {
          var e = this;
          this.history = new Mo(this.history), fr(this, function(n) {
            return n.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: Zr(this.history.done),
            undone: Zr(this.history.undone)
          };
        },
        setHistory: function(e) {
          var n = this.history = new Mo(this.history);
          n.done = Zr(e.done.slice(0), null, !0), n.undone = Zr(e.undone.slice(0), null, !0);
        },
        setGutterMarker: Mt(function(e, n, i) {
          return Oi(this, e, "gutter", function(r) {
            var a = r.gutterMarkers || (r.gutterMarkers = {});
            return a[n] = i, !i && Sn(a) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Mt(function(e) {
          var n = this;
          this.iter(function(i) {
            i.gutterMarkers && i.gutterMarkers[e] && Oi(n, i, "gutter", function() {
              return i.gutterMarkers[e] = null, Sn(i.gutterMarkers) && (i.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var n;
          if (typeof e == "number") {
            if (!ne(this, e) || (n = e, e = we(this, e), !e))
              return null;
          } else if (n = $(e), n == null)
            return null;
          return {
            line: n,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: Mt(function(e, n, i) {
          return Oi(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[a])
              r[a] = i;
            else {
              if (I(i).test(r[a]))
                return !1;
              r[a] += " " + i;
            }
            return !0;
          });
        }),
        removeLineClass: Mt(function(e, n, i) {
          return Oi(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass", p = r[a];
            if (p)
              if (i == null)
                r[a] = null;
              else {
                var D = p.match(I(i));
                if (!D)
                  return !1;
                var L = D.index + D[0].length;
                r[a] = p.slice(0, D.index) + (!D.index || L == p.length ? "" : " ") + p.slice(L) || null;
              }
            else
              return !1;
            return !0;
          });
        }),
        addLineWidget: Mt(function(e, n, i) {
          return nv(this, e, n, i);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, n, i) {
          return ti(this, Fe(this, e), Fe(this, n), i, i && i.type || "range");
        },
        setBookmark: function(e, n) {
          var i = {
            replacedWith: n && (n.nodeType == null ? n.widget : n),
            insertLeft: n && n.insertLeft,
            clearWhenEmpty: !1,
            shared: n && n.shared,
            handleMouseEvents: n && n.handleMouseEvents
          };
          return e = Fe(this, e), ti(this, e, e, i, "bookmark");
        },
        findMarksAt: function(e) {
          e = Fe(this, e);
          var n = [], i = we(this, e.line).markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var a = i[r];
              (a.from == null || a.from <= e.ch) && (a.to == null || a.to >= e.ch) && n.push(a.marker.parent || a.marker);
            }
          return n;
        },
        findMarks: function(e, n, i) {
          e = Fe(this, e), n = Fe(this, n);
          var r = [], a = e.line;
          return this.iter(e.line, n.line + 1, function(p) {
            var D = p.markedSpans;
            if (D)
              for (var L = 0; L < D.length; L++) {
                var N = D[L];
                !(N.to != null && a == e.line && e.ch >= N.to || N.from == null && a != e.line || N.from != null && a == n.line && N.from >= n.ch) && (!i || i(N.marker)) && r.push(N.marker.parent || N.marker);
              }
            ++a;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(n) {
            var i = n.markedSpans;
            if (i)
              for (var r = 0; r < i.length; ++r)
                i[r].from != null && e.push(i[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var n, i = this.first, r = this.lineSeparator().length;
          return this.iter(function(a) {
            var p = a.text.length + r;
            if (p > e)
              return n = e, !0;
            e -= p, ++i;
          }), Fe(this, ee(i, n));
        },
        indexFromPos: function(e) {
          e = Fe(this, e);
          var n = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var i = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            n += r.text.length + i;
          }), n;
        },
        copy: function(e) {
          var n = new en(
            yi(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return n.scrollTop = this.scrollTop, n.scrollLeft = this.scrollLeft, n.sel = this.sel, n.extend = !1, e && (n.history.undoDepth = this.history.undoDepth, n.setHistory(this.getHistory())), n;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var n = this.first, i = this.first + this.size;
          e.from != null && e.from > n && (n = e.from), e.to != null && e.to < i && (i = e.to);
          var r = new en(yi(this, n, i), e.mode || this.modeOption, n, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], iv(r, Zu(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof rt && (e = e.doc), this.linked)
            for (var n = 0; n < this.linked.length; ++n) {
              var i = this.linked[n];
              if (i.doc == e) {
                this.linked.splice(n, 1), e.unlinkDoc(this), ov(Zu(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            fr(e, function(a) {
              return r.push(a.id);
            }, !0), e.history = new Mo(null), e.history.done = Zr(this.history.done, r), e.history.undone = Zr(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          fr(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : gn(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: Mt(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(n) {
            return n.order = null;
          }), this.cm && Kc(this.cm));
        })
      }), en.prototype.eachLine = en.prototype.iter;
      var qu = 0;
      function lv(e) {
        var n = this;
        if (_u(n), !(Ke(n, e) || kn(n.display, e))) {
          mt(e), c && (qu = +new Date());
          var i = Er(n, e, !0), r = e.dataTransfer.files;
          if (!(!i || n.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var a = r.length, p = Array(a), D = 0, L = function() {
                ++D == a && Dt(n, function() {
                  i = Fe(n.doc, i);
                  var J = {
                    from: i,
                    to: i,
                    text: n.doc.splitLines(
                      p.filter(function(te) {
                        return te != null;
                      }).join(n.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  _r(n.doc, J), Hu(n.doc, sr(Fe(n.doc, i), Fe(n.doc, ur(J))));
                })();
              }, N = function(J, te) {
                if (n.options.allowDropFileTypes && Ee(n.options.allowDropFileTypes, J.type) == -1) {
                  L();
                  return;
                }
                var ie = new FileReader();
                ie.onerror = function() {
                  return L();
                }, ie.onload = function() {
                  var de = ie.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(de)) {
                    L();
                    return;
                  }
                  p[te] = de, L();
                }, ie.readAsText(J);
              }, W = 0; W < r.length; W++)
                N(r[W], W);
            else {
              if (n.state.draggingText && n.doc.sel.contains(i) > -1) {
                n.state.draggingText(e), setTimeout(function() {
                  return n.display.input.focus();
                }, 20);
                return;
              }
              try {
                var Y = e.dataTransfer.getData("Text");
                if (Y) {
                  var G;
                  if (n.state.draggingText && !n.state.draggingText.copy && (G = n.listSelections()), Io(n.doc, sr(i, i)), G)
                    for (var Z = 0; Z < G.length; ++Z)
                      ei(n.doc, "", G[Z].anchor, G[Z].head, "drag");
                  n.replaceSelection(Y, "around", "paste"), n.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function sv(e, n) {
        if (c && (!e.state.draggingText || +new Date() - qu < 100)) {
          tr(n);
          return;
        }
        if (!(Ke(e, n) || kn(e.display, n)) && (n.dataTransfer.setData("Text", e.getSelection()), n.dataTransfer.effectAllowed = "copyMove", n.dataTransfer.setDragImage && !S)) {
          var i = P("img", null, null, "position: fixed; left: 0; top: 0;");
          i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", g && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), n.dataTransfer.setDragImage(i, 0, 0), g && i.parentNode.removeChild(i);
        }
      }
      function uv(e, n) {
        var i = Er(e, n);
        if (!!i) {
          var r = document.createDocumentFragment();
          Ma(e, i, r), e.display.dragCursor || (e.display.dragCursor = P("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), j(e.display.dragCursor, r);
        }
      }
      function _u(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function ef(e) {
        if (!!document.getElementsByClassName) {
          for (var n = document.getElementsByClassName("CodeMirror"), i = [], r = 0; r < n.length; r++) {
            var a = n[r].CodeMirror;
            a && i.push(a);
          }
          i.length && i[0].operation(function() {
            for (var p = 0; p < i.length; p++)
              e(i[p]);
          });
        }
      }
      var tf = !1;
      function fv() {
        tf || (dv(), tf = !0);
      }
      function dv() {
        var e;
        ue(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, ef(cv);
          }, 100));
        }), ue(window, "blur", function() {
          return ef(Kr);
        });
      }
      function cv(e) {
        var n = e.display;
        n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.scrollbarsClipped = !1, e.setSize();
      }
      for (var cr = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, zi = 0; zi < 10; zi++)
        cr[zi + 48] = cr[zi + 96] = String(zi);
      for (var Oo = 65; Oo <= 90; Oo++)
        cr[Oo] = String.fromCharCode(Oo);
      for (var Wi = 1; Wi <= 12; Wi++)
        cr[Wi + 111] = cr[Wi + 63235] = "F" + Wi;
      var Kn = {};
      Kn.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, Kn.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, Kn.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, Kn.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, Kn.default = C ? Kn.macDefault : Kn.pcDefault;
      function vv(e) {
        var n = e.split(/-(?!$)/);
        e = n[n.length - 1];
        for (var i, r, a, p, D = 0; D < n.length - 1; D++) {
          var L = n[D];
          if (/^(cmd|meta|m)$/i.test(L))
            p = !0;
          else if (/^a(lt)?$/i.test(L))
            i = !0;
          else if (/^(c|ctrl|control)$/i.test(L))
            r = !0;
          else if (/^s(hift)?$/i.test(L))
            a = !0;
          else
            throw new Error("Unrecognized modifier name: " + L);
        }
        return i && (e = "Alt-" + e), r && (e = "Ctrl-" + e), p && (e = "Cmd-" + e), a && (e = "Shift-" + e), e;
      }
      function pv(e) {
        var n = {};
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (/^(name|fallthrough|(de|at)tach)$/.test(i))
              continue;
            if (r == "...") {
              delete e[i];
              continue;
            }
            for (var a = Ht(i.split(" "), vv), p = 0; p < a.length; p++) {
              var D = void 0, L = void 0;
              p == a.length - 1 ? (L = a.join(" "), D = r) : (L = a.slice(0, p + 1).join(" "), D = "...");
              var N = n[L];
              if (!N)
                n[L] = D;
              else if (N != D)
                throw new Error("Inconsistent bindings for " + L);
            }
            delete e[i];
          }
        for (var W in n)
          e[W] = n[W];
        return e;
      }
      function ni(e, n, i, r) {
        n = Fo(n);
        var a = n.call ? n.call(e, r) : n[e];
        if (a === !1)
          return "nothing";
        if (a === "...")
          return "multi";
        if (a != null && i(a))
          return "handled";
        if (n.fallthrough) {
          if (Object.prototype.toString.call(n.fallthrough) != "[object Array]")
            return ni(e, n.fallthrough, i, r);
          for (var p = 0; p < n.fallthrough.length; p++) {
            var D = ni(e, n.fallthrough[p], i, r);
            if (D)
              return D;
          }
        }
      }
      function nf(e) {
        var n = typeof e == "string" ? e : cr[e.keyCode];
        return n == "Ctrl" || n == "Alt" || n == "Shift" || n == "Mod";
      }
      function rf(e, n, i) {
        var r = e;
        return n.altKey && r != "Alt" && (e = "Alt-" + e), (F ? n.metaKey : n.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (F ? n.ctrlKey : n.metaKey) && r != "Mod" && (e = "Cmd-" + e), !i && n.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function of(e, n) {
        if (g && e.keyCode == 34 && e.char)
          return !1;
        var i = cr[e.keyCode];
        return i == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (i = e.code), rf(i, e, n));
      }
      function Fo(e) {
        return typeof e == "string" ? Kn[e] : e;
      }
      function ri(e, n) {
        for (var i = e.doc.sel.ranges, r = [], a = 0; a < i.length; a++) {
          for (var p = n(i[a]); r.length && ye(p.from, Ue(r).to) <= 0; ) {
            var D = r.pop();
            if (ye(D.from, p.from) < 0) {
              p.from = D.from;
              break;
            }
          }
          r.push(p);
        }
        an(e, function() {
          for (var L = r.length - 1; L >= 0; L--)
            ei(e.doc, "", r[L].from, r[L].to, "+delete");
          Xr(e);
        });
      }
      function Qa(e, n, i) {
        var r = Jt(e.text, n + i, i);
        return r < 0 || r > e.text.length ? null : r;
      }
      function ka(e, n, i) {
        var r = Qa(e, n.ch, i);
        return r == null ? null : new ee(n.line, r, i < 0 ? "after" : "before");
      }
      function Ga(e, n, i, r, a) {
        if (e) {
          n.doc.direction == "rtl" && (a = -a);
          var p = oe(i, n.doc.direction);
          if (p) {
            var D = a < 0 ? Ue(p) : p[0], L = a < 0 == (D.level == 1), N = L ? "after" : "before", W;
            if (D.level > 0 || n.doc.direction == "rtl") {
              var Y = Qr(n, i);
              W = a < 0 ? i.text.length - 1 : 0;
              var G = Fn(n, Y, W).top;
              W = We(function(Z) {
                return Fn(n, Y, Z).top == G;
              }, a < 0 == (D.level == 1) ? D.from : D.to - 1, W), N == "before" && (W = Qa(i, W, 1));
            } else
              W = a < 0 ? D.to : D.from;
            return new ee(r, W, N);
          }
        }
        return new ee(r, a < 0 ? i.text.length : 0, a < 0 ? "before" : "after");
      }
      function hv(e, n, i, r) {
        var a = oe(n, e.doc.direction);
        if (!a)
          return ka(n, i, r);
        i.ch >= n.text.length ? (i.ch = n.text.length, i.sticky = "before") : i.ch <= 0 && (i.ch = 0, i.sticky = "after");
        var p = Oe(a, i.ch, i.sticky), D = a[p];
        if (e.doc.direction == "ltr" && D.level % 2 == 0 && (r > 0 ? D.to > i.ch : D.from < i.ch))
          return ka(n, i, r);
        var L = function(he, xe) {
          return Qa(n, he instanceof ee ? he.ch : he, xe);
        }, N, W = function(he) {
          return e.options.lineWrapping ? (N = N || Qr(e, n), uu(e, n, N, he)) : { begin: 0, end: n.text.length };
        }, Y = W(i.sticky == "before" ? L(i, -1) : i.ch);
        if (e.doc.direction == "rtl" || D.level == 1) {
          var G = D.level == 1 == r < 0, Z = L(i, G ? 1 : -1);
          if (Z != null && (G ? Z <= D.to && Z <= Y.end : Z >= D.from && Z >= Y.begin)) {
            var J = G ? "before" : "after";
            return new ee(i.line, Z, J);
          }
        }
        var te = function(he, xe, ge) {
          for (var Te = function(et, Rt) {
            return Rt ? new ee(i.line, L(et, 1), "before") : new ee(i.line, et, "after");
          }; he >= 0 && he < a.length; he += xe) {
            var Re = a[he], Me = xe > 0 == (Re.level != 1), Be = Me ? ge.begin : L(ge.end, -1);
            if (Re.from <= Be && Be < Re.to || (Be = Me ? Re.from : L(Re.to, -1), ge.begin <= Be && Be < ge.end))
              return Te(Be, Me);
          }
        }, ie = te(p + r, r, Y);
        if (ie)
          return ie;
        var de = r > 0 ? Y.end : L(Y.begin, -1);
        return de != null && !(r > 0 && de == n.text.length) && (ie = te(r > 0 ? 0 : a.length - 1, r, W(de)), ie) ? ie : null;
      }
      var $i = {
        selectAll: ju,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Nt);
        },
        killLine: function(e) {
          return ri(e, function(n) {
            if (n.empty()) {
              var i = we(e.doc, n.head.line).text.length;
              return n.head.ch == i && n.head.line < e.lastLine() ? { from: n.head, to: ee(n.head.line + 1, 0) } : { from: n.head, to: ee(n.head.line, i) };
            } else
              return { from: n.from(), to: n.to() };
          });
        },
        deleteLine: function(e) {
          return ri(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: Fe(e.doc, ee(n.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return ri(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: n.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return ri(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return { from: r, to: n.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return ri(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
            return { from: n.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(ee(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(ee(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return af(e, n.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return lf(e, n.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return gv(e, n.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
          }, Et);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: i }, "div");
          }, Et);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? lf(e, n.head) : r;
          }, Et);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var n = [], i = e.listSelections(), r = e.options.tabSize, a = 0; a < i.length; a++) {
            var p = i[a].from(), D = pe(e.getLine(p.line), p.ch, r);
            n.push(Xt(r - D % r));
          }
          e.replaceSelections(n);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        transposeChars: function(e) {
          return an(e, function() {
            for (var n = e.listSelections(), i = [], r = 0; r < n.length; r++)
              if (!!n[r].empty()) {
                var a = n[r].head, p = we(e.doc, a.line).text;
                if (p) {
                  if (a.ch == p.length && (a = new ee(a.line, a.ch - 1)), a.ch > 0)
                    a = new ee(a.line, a.ch + 1), e.replaceRange(
                      p.charAt(a.ch - 1) + p.charAt(a.ch - 2),
                      ee(a.line, a.ch - 2),
                      a,
                      "+transpose"
                    );
                  else if (a.line > e.doc.first) {
                    var D = we(e.doc, a.line - 1).text;
                    D && (a = new ee(a.line, 1), e.replaceRange(
                      p.charAt(0) + e.doc.lineSeparator() + D.charAt(D.length - 1),
                      ee(a.line - 1, D.length - 1),
                      a,
                      "+transpose"
                    ));
                  }
                }
                i.push(new Ge(a, a));
              }
            e.setSelections(i);
          });
        },
        newlineAndIndent: function(e) {
          return an(e, function() {
            for (var n = e.listSelections(), i = n.length - 1; i >= 0; i--)
              e.replaceRange(e.doc.lineSeparator(), n[i].anchor, n[i].head, "+input");
            n = e.listSelections();
            for (var r = 0; r < n.length; r++)
              e.indentLine(n[r].from().line, null, !0);
            Xr(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function af(e, n) {
        var i = we(e.doc, n), r = wn(i);
        return r != i && (n = $(r)), Ga(!0, e, r, n, 1);
      }
      function gv(e, n) {
        var i = we(e.doc, n), r = _d(i);
        return r != i && (n = $(r)), Ga(!0, e, i, n, -1);
      }
      function lf(e, n) {
        var i = af(e, n.line), r = we(e.doc, i.line), a = oe(r, e.doc.direction);
        if (!a || a[0].level == 0) {
          var p = Math.max(i.ch, r.text.search(/\S/)), D = n.line == i.line && n.ch <= p && n.ch;
          return ee(i.line, D ? 0 : p, i.sticky);
        }
        return i;
      }
      function Bo(e, n, i) {
        if (typeof n == "string" && (n = $i[n], !n))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, a = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), a = n(e) != Ft;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return a;
      }
      function mv(e, n, i) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var a = ni(n, e.state.keyMaps[r], i, e);
          if (a)
            return a;
        }
        return e.options.extraKeys && ni(n, e.options.extraKeys, i, e) || ni(n, e.options.keyMap, i, e);
      }
      var yv = new Pe();
      function ji(e, n, i, r) {
        var a = e.state.keySeq;
        if (a) {
          if (nf(n))
            return "handled";
          if (/\'$/.test(n) ? e.state.keySeq = null : yv.set(50, function() {
            e.state.keySeq == a && (e.state.keySeq = null, e.display.input.reset());
          }), sf(e, a + " " + n, i, r))
            return !0;
        }
        return sf(e, n, i, r);
      }
      function sf(e, n, i, r) {
        var a = mv(e, n, r);
        return a == "multi" && (e.state.keySeq = n), a == "handled" && wt(e, "keyHandled", e, n, i), (a == "handled" || a == "multi") && (mt(i), Ra(e)), !!a;
      }
      function uf(e, n) {
        var i = of(n, !0);
        return i ? n.shiftKey && !e.state.keySeq ? ji(e, "Shift-" + i, n, function(r) {
          return Bo(e, r, !0);
        }) || ji(e, i, n, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return Bo(e, r);
        }) : ji(e, i, n, function(r) {
          return Bo(e, r);
        }) : !1;
      }
      function Av(e, n, i) {
        return ji(e, "'" + i + "'", n, function(r) {
          return Bo(e, r, !0);
        });
      }
      var Ka = null;
      function ff(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && (n.curOp.focus = q(ve(n)), !Ke(n, e))) {
          c && m < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var i = e.keyCode;
          n.display.shift = i == 16 || e.shiftKey;
          var r = uf(n, e);
          g && (Ka = r ? i : null, !r && i == 88 && !uo && (C ? e.metaKey : e.ctrlKey) && n.replaceSelection("", null, "cut")), t && !C && !r && i == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), i == 18 && !/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className) && xv(n);
        }
      }
      function xv(e) {
        var n = e.display.lineDiv;
        X(n, "CodeMirror-crosshair");
        function i(r) {
          (r.keyCode == 18 || !r.altKey) && (U(n, "CodeMirror-crosshair"), ze(document, "keyup", i), ze(document, "mouseover", i));
        }
        ue(document, "keyup", i), ue(document, "mouseover", i);
      }
      function df(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Ke(this, e);
      }
      function cf(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && !(kn(n.display, e) || Ke(n, e) || e.ctrlKey && !e.altKey || C && e.metaKey)) {
          var i = e.keyCode, r = e.charCode;
          if (g && i == Ka) {
            Ka = null, mt(e);
            return;
          }
          if (!(g && (!e.which || e.which < 10) && uf(n, e))) {
            var a = String.fromCharCode(r == null ? i : r);
            a != "\b" && (Av(n, e, a) || n.display.input.onKeyPress(e));
          }
        }
      }
      var Sv = 400, Xa = function(e, n, i) {
        this.time = e, this.pos = n, this.button = i;
      };
      Xa.prototype.compare = function(e, n, i) {
        return this.time + Sv > e && ye(n, this.pos) == 0 && i == this.button;
      };
      var Vi, Yi;
      function bv(e, n) {
        var i = +new Date();
        return Yi && Yi.compare(i, e, n) ? (Vi = Yi = null, "triple") : Vi && Vi.compare(i, e, n) ? (Yi = new Xa(i, e, n), Vi = null, "double") : (Vi = new Xa(i, e, n), Yi = null, "single");
      }
      function vf(e) {
        var n = this, i = n.display;
        if (!(Ke(n, e) || i.activeTouch && i.input.supportsTouch())) {
          if (i.input.ensurePolled(), i.shift = e.shiftKey, kn(i, e)) {
            T || (i.scroller.draggable = !1, setTimeout(function() {
              return i.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!Ja(n, e)) {
            var r = Er(n, e), a = bn(e), p = r ? bv(r, a) : "single";
            ae(n).focus(), a == 1 && n.state.selectingText && n.state.selectingText(e), !(r && Ev(n, a, r, p, e)) && (a == 1 ? r ? Tv(n, r, p, e) : hi(e) == i.scroller && mt(e) : a == 2 ? (r && Po(n.doc, r), setTimeout(function() {
              return i.input.focus();
            }, 20)) : a == 3 && (z ? n.display.input.onContextMenu(e) : Pa(n)));
          }
        }
      }
      function Ev(e, n, i, r, a) {
        var p = "Click";
        return r == "double" ? p = "Double" + p : r == "triple" && (p = "Triple" + p), p = (n == 1 ? "Left" : n == 2 ? "Middle" : "Right") + p, ji(e, rf(p, a), a, function(D) {
          if (typeof D == "string" && (D = $i[D]), !D)
            return !1;
          var L = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), L = D(e, i) != Ft;
          } finally {
            e.state.suppressEdits = !1;
          }
          return L;
        });
      }
      function Cv(e, n, i) {
        var r = e.getOption("configureMouse"), a = r ? r(e, n, i) : {};
        if (a.unit == null) {
          var p = R ? i.shiftKey && i.metaKey : i.altKey;
          a.unit = p ? "rectangle" : n == "single" ? "char" : n == "double" ? "word" : "line";
        }
        return (a.extend == null || e.doc.extend) && (a.extend = e.doc.extend || i.shiftKey), a.addNew == null && (a.addNew = C ? i.metaKey : i.ctrlKey), a.moveOnDrag == null && (a.moveOnDrag = !(C ? i.altKey : i.ctrlKey)), a;
      }
      function Tv(e, n, i, r) {
        c ? setTimeout(re(vu, e), 0) : e.curOp.focus = q(ve(e));
        var a = Cv(e, i, r), p = e.doc.sel, D;
        e.options.dragDrop && sa && !e.isReadOnly() && i == "single" && (D = p.contains(n)) > -1 && (ye((D = p.ranges[D]).from(), n) < 0 || n.xRel > 0) && (ye(D.to(), n) > 0 || n.xRel < 0) ? wv(e, r, n, a) : Dv(e, r, n, a);
      }
      function wv(e, n, i, r) {
        var a = e.display, p = !1, D = Dt(e, function(W) {
          T && (a.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Pa(e)), ze(a.wrapper.ownerDocument, "mouseup", D), ze(a.wrapper.ownerDocument, "mousemove", L), ze(a.scroller, "dragstart", N), ze(a.scroller, "drop", D), p || (mt(W), r.addNew || Po(e.doc, i, null, null, r.extend), T && !S || c && m == 9 ? setTimeout(function() {
            a.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), a.input.focus();
          }, 20) : a.input.focus());
        }), L = function(W) {
          p = p || Math.abs(n.clientX - W.clientX) + Math.abs(n.clientY - W.clientY) >= 10;
        }, N = function() {
          return p = !0;
        };
        T && (a.scroller.draggable = !0), e.state.draggingText = D, D.copy = !r.moveOnDrag, ue(a.wrapper.ownerDocument, "mouseup", D), ue(a.wrapper.ownerDocument, "mousemove", L), ue(a.scroller, "dragstart", N), ue(a.scroller, "drop", D), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return a.input.focus();
        }, 20), a.scroller.dragDrop && a.scroller.dragDrop();
      }
      function pf(e, n, i) {
        if (i == "char")
          return new Ge(n, n);
        if (i == "word")
          return e.findWordAt(n);
        if (i == "line")
          return new Ge(ee(n.line, 0), Fe(e.doc, ee(n.line + 1, 0)));
        var r = i(e, n);
        return new Ge(r.from, r.to);
      }
      function Dv(e, n, i, r) {
        c && Pa(e);
        var a = e.display, p = e.doc;
        mt(n);
        var D, L, N = p.sel, W = N.ranges;
        if (r.addNew && !r.extend ? (L = p.sel.contains(i), L > -1 ? D = W[L] : D = new Ge(i, i)) : (D = p.sel.primary(), L = p.sel.primIndex), r.unit == "rectangle")
          r.addNew || (D = new Ge(i, i)), i = Er(e, n, !0, !0), L = -1;
        else {
          var Y = pf(e, i, r.unit);
          r.extend ? D = Va(D, Y.anchor, Y.head, r.extend) : D = Y;
        }
        r.addNew ? L == -1 ? (L = W.length, Ut(
          p,
          Mn(e, W.concat([D]), L),
          { scroll: !1, origin: "*mouse" }
        )) : W.length > 1 && W[L].empty() && r.unit == "char" && !r.extend ? (Ut(
          p,
          Mn(e, W.slice(0, L).concat(W.slice(L + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), N = p.sel) : Ya(p, L, D, lt) : (L = 0, Ut(p, new fn([D], 0), lt), N = p.sel);
        var G = i;
        function Z(ge) {
          if (ye(G, ge) != 0)
            if (G = ge, r.unit == "rectangle") {
              for (var Te = [], Re = e.options.tabSize, Me = pe(we(p, i.line).text, i.ch, Re), Be = pe(we(p, ge.line).text, ge.ch, Re), et = Math.min(Me, Be), Rt = Math.max(Me, Be), ot = Math.min(i.line, ge.line), ln = Math.min(e.lastLine(), Math.max(i.line, ge.line)); ot <= ln; ot++) {
                var tn = we(p, ot).text, ht = Bt(tn, et, Re);
                et == Rt ? Te.push(new Ge(ee(ot, ht), ee(ot, ht))) : tn.length > ht && Te.push(new Ge(ee(ot, ht), ee(ot, Bt(tn, Rt, Re))));
              }
              Te.length || Te.push(new Ge(i, i)), Ut(
                p,
                Mn(e, N.ranges.slice(0, L).concat(Te), L),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(ge);
            } else {
              var nn = D, Ot = pf(e, ge, r.unit), yt = nn.anchor, gt;
              ye(Ot.anchor, yt) > 0 ? (gt = Ot.head, yt = jr(nn.from(), Ot.anchor)) : (gt = Ot.anchor, yt = qt(nn.to(), Ot.head));
              var ft = N.ranges.slice(0);
              ft[L] = Mv(e, new Ge(Fe(p, yt), gt)), Ut(p, Mn(e, ft, L), lt);
            }
        }
        var J = a.wrapper.getBoundingClientRect(), te = 0;
        function ie(ge) {
          var Te = ++te, Re = Er(e, ge, !0, r.unit == "rectangle");
          if (!!Re)
            if (ye(Re, G) != 0) {
              e.curOp.focus = q(ve(e)), Z(Re);
              var Me = Co(a, p);
              (Re.line >= Me.to || Re.line < Me.from) && setTimeout(Dt(e, function() {
                te == Te && ie(ge);
              }), 150);
            } else {
              var Be = ge.clientY < J.top ? -20 : ge.clientY > J.bottom ? 20 : 0;
              Be && setTimeout(Dt(e, function() {
                te == Te && (a.scroller.scrollTop += Be, ie(ge));
              }), 50);
            }
        }
        function de(ge) {
          e.state.selectingText = !1, te = 1 / 0, ge && (mt(ge), a.input.focus()), ze(a.wrapper.ownerDocument, "mousemove", he), ze(a.wrapper.ownerDocument, "mouseup", xe), p.history.lastSelOrigin = null;
        }
        var he = Dt(e, function(ge) {
          ge.buttons === 0 || !bn(ge) ? de(ge) : ie(ge);
        }), xe = Dt(e, de);
        e.state.selectingText = xe, ue(a.wrapper.ownerDocument, "mousemove", he), ue(a.wrapper.ownerDocument, "mouseup", xe);
      }
      function Mv(e, n) {
        var i = n.anchor, r = n.head, a = we(e.doc, i.line);
        if (ye(i, r) == 0 && i.sticky == r.sticky)
          return n;
        var p = oe(a);
        if (!p)
          return n;
        var D = Oe(p, i.ch, i.sticky), L = p[D];
        if (L.from != i.ch && L.to != i.ch)
          return n;
        var N = D + (L.from == i.ch == (L.level != 1) ? 0 : 1);
        if (N == 0 || N == p.length)
          return n;
        var W;
        if (r.line != i.line)
          W = (r.line - i.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var Y = Oe(p, r.ch, r.sticky), G = Y - D || (r.ch - i.ch) * (L.level == 1 ? -1 : 1);
          Y == N - 1 || Y == N ? W = G < 0 : W = G > 0;
        }
        var Z = p[N + (W ? -1 : 0)], J = W == (Z.level == 1), te = J ? Z.from : Z.to, ie = J ? "after" : "before";
        return i.ch == te && i.sticky == ie ? n : new Ge(new ee(i.line, te, ie), r);
      }
      function hf(e, n, i, r) {
        var a, p;
        if (n.touches)
          a = n.touches[0].clientX, p = n.touches[0].clientY;
        else
          try {
            a = n.clientX, p = n.clientY;
          } catch {
            return !1;
          }
        if (a >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && mt(n);
        var D = e.display, L = D.lineDiv.getBoundingClientRect();
        if (p > L.bottom || !_e(e, i))
          return Zt(n);
        p -= L.top - D.viewOffset;
        for (var N = 0; N < e.display.gutterSpecs.length; ++N) {
          var W = D.gutters.childNodes[N];
          if (W && W.getBoundingClientRect().right >= a) {
            var Y = k(e.doc, p), G = e.display.gutterSpecs[N];
            return Ye(e, i, e, Y, G.className, n), Zt(n);
          }
        }
      }
      function Ja(e, n) {
        return hf(e, n, "gutterClick", !0);
      }
      function gf(e, n) {
        kn(e.display, n) || Rv(e, n) || Ke(e, n, "contextmenu") || z || e.display.input.onContextMenu(n);
      }
      function Rv(e, n) {
        return _e(e, "gutterContextMenu") ? hf(e, n, "gutterContextMenu", !1) : !1;
      }
      function mf(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Ci(e);
      }
      var ii = { toString: function() {
        return "CodeMirror.Init";
      } }, yf = {}, Ho = {};
      function Pv(e) {
        var n = e.optionHandlers;
        function i(r, a, p, D) {
          e.defaults[r] = a, p && (n[r] = D ? function(L, N, W) {
            W != ii && p(L, N, W);
          } : p);
        }
        e.defineOption = i, e.Init = ii, i("value", "", function(r, a) {
          return r.setValue(a);
        }, !0), i("mode", null, function(r, a) {
          r.doc.modeOption = a, Wa(r);
        }, !0), i("indentUnit", 2, Wa, !0), i("indentWithTabs", !1), i("smartIndent", !0), i("tabSize", 4, function(r) {
          Li(r), Ci(r), _t(r);
        }, !0), i("lineSeparator", null, function(r, a) {
          if (r.doc.lineSep = a, !!a) {
            var p = [], D = r.doc.first;
            r.doc.iter(function(N) {
              for (var W = 0; ; ) {
                var Y = N.text.indexOf(a, W);
                if (Y == -1)
                  break;
                W = Y + a.length, p.push(ee(D, Y));
              }
              D++;
            });
            for (var L = p.length - 1; L >= 0; L--)
              ei(r.doc, a, p[L], ee(p[L].line, p[L].ch + a.length));
          }
        }), i("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, a, p) {
          r.state.specialChars = new RegExp(a.source + (a.test("	") ? "" : "|	"), "g"), p != ii && r.refresh();
        }), i("specialCharPlaceholder", oc, function(r) {
          return r.refresh();
        }, !0), i("electricChars", !0), i("inputStyle", b ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), i("spellcheck", !1, function(r, a) {
          return r.getInputField().spellcheck = a;
        }, !0), i("autocorrect", !1, function(r, a) {
          return r.getInputField().autocorrect = a;
        }, !0), i("autocapitalize", !1, function(r, a) {
          return r.getInputField().autocapitalize = a;
        }, !0), i("rtlMoveVisually", !O), i("wholeLineUpdateBefore", !0), i("theme", "default", function(r) {
          mf(r), Ii(r);
        }, !0), i("keyMap", "default", function(r, a, p) {
          var D = Fo(a), L = p != ii && Fo(p);
          L && L.detach && L.detach(r, D), D.attach && D.attach(r, L || null);
        }), i("extraKeys", null), i("configureMouse", null), i("lineWrapping", !1, Lv, !0), i("gutters", [], function(r, a) {
          r.display.gutterSpecs = Ua(a, r.options.lineNumbers), Ii(r);
        }, !0), i("fixedGutter", !0, function(r, a) {
          r.display.gutters.style.left = a ? wa(r.display) + "px" : "0", r.refresh();
        }, !0), i("coverGutterNextToScrollbar", !1, function(r) {
          return Jr(r);
        }, !0), i("scrollbarStyle", "native", function(r) {
          Au(r), Jr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), i("lineNumbers", !1, function(r, a) {
          r.display.gutterSpecs = Ua(r.options.gutters, a), Ii(r);
        }, !0), i("firstLineNumber", 1, Ii, !0), i("lineNumberFormatter", function(r) {
          return r;
        }, Ii, !0), i("showCursorWhenSelecting", !1, Ti, !0), i("resetSelectionOnContextMenu", !0), i("lineWiseCopyCut", !0), i("pasteLinesPerSelection", !0), i("selectionsMayTouch", !1), i("readOnly", !1, function(r, a) {
          a == "nocursor" && (Kr(r), r.display.input.blur()), r.display.input.readOnlyChanged(a);
        }), i("screenReaderLabel", null, function(r, a) {
          a = a === "" ? null : a, r.display.input.screenReaderLabelChanged(a);
        }), i("disableInput", !1, function(r, a) {
          a || r.display.input.reset();
        }, !0), i("dragDrop", !0, Iv), i("allowDropFileTypes", null), i("cursorBlinkRate", 530), i("cursorScrollMargin", 0), i("cursorHeight", 1, Ti, !0), i("singleCursorHeightPerLine", !0, Ti, !0), i("workTime", 100), i("workDelay", 100), i("flattenSpans", !0, Li, !0), i("addModeClass", !1, Li, !0), i("pollInterval", 100), i("undoDepth", 200, function(r, a) {
          return r.doc.history.undoDepth = a;
        }), i("historyEventDelay", 1250), i("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), i("maxHighlightLength", 1e4, Li, !0), i("moveInputWithCursor", !0, function(r, a) {
          a || r.display.input.resetPosition();
        }), i("tabindex", null, function(r, a) {
          return r.display.input.getField().tabIndex = a || "";
        }), i("autofocus", null), i("direction", "ltr", function(r, a) {
          return r.doc.setDirection(a);
        }, !0), i("phrases", null);
      }
      function Iv(e, n, i) {
        var r = i && i != ii;
        if (!n != !r) {
          var a = e.display.dragFunctions, p = n ? ue : ze;
          p(e.display.scroller, "dragstart", a.start), p(e.display.scroller, "dragenter", a.enter), p(e.display.scroller, "dragover", a.over), p(e.display.scroller, "dragleave", a.leave), p(e.display.scroller, "drop", a.drop);
        }
      }
      function Lv(e) {
        e.options.lineWrapping ? (X(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (U(e.display.wrapper, "CodeMirror-wrap"), ga(e)), Da(e), _t(e), Ci(e), setTimeout(function() {
          return Jr(e);
        }, 100);
      }
      function rt(e, n) {
        var i = this;
        if (!(this instanceof rt))
          return new rt(e, n);
        this.options = n = n ? se(n) : {}, se(yf, n, !1);
        var r = n.value;
        typeof r == "string" ? r = new en(r, n.mode, null, n.lineSeparator, n.direction) : n.mode && (r.modeOption = n.mode), this.doc = r;
        var a = new rt.inputStyles[n.inputStyle](this), p = this.display = new Qc(e, r, a, n);
        p.wrapper.CodeMirror = this, mf(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Au(this), this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new Pe(),
          keySeq: null,
          specialChars: null
        }, n.autofocus && !b && p.input.focus(), c && m < 11 && setTimeout(function() {
          return i.display.input.reset(!0);
        }, 20), Nv(this), fv(), Dr(this), this.curOp.forceUpdate = !0, Ru(this, r), n.autofocus && !b || this.hasFocus() ? setTimeout(function() {
          i.hasFocus() && !i.state.focused && Ia(i);
        }, 20) : Kr(this);
        for (var D in Ho)
          Ho.hasOwnProperty(D) && Ho[D](this, n[D], ii);
        bu(this), n.finishInit && n.finishInit(this);
        for (var L = 0; L < Za.length; ++L)
          Za[L](this);
        Mr(this), T && n.lineWrapping && getComputedStyle(p.lineDiv).textRendering == "optimizelegibility" && (p.lineDiv.style.textRendering = "auto");
      }
      rt.defaults = yf, rt.optionHandlers = Ho;
      function Nv(e) {
        var n = e.display;
        ue(n.scroller, "mousedown", Dt(e, vf)), c && m < 11 ? ue(n.scroller, "dblclick", Dt(e, function(N) {
          if (!Ke(e, N)) {
            var W = Er(e, N);
            if (!(!W || Ja(e, N) || kn(e.display, N))) {
              mt(N);
              var Y = e.findWordAt(W);
              Po(e.doc, Y.anchor, Y.head);
            }
          }
        })) : ue(n.scroller, "dblclick", function(N) {
          return Ke(e, N) || mt(N);
        }), ue(n.scroller, "contextmenu", function(N) {
          return gf(e, N);
        }), ue(n.input.getField(), "contextmenu", function(N) {
          n.scroller.contains(N.target) || gf(e, N);
        });
        var i, r = { end: 0 };
        function a() {
          n.activeTouch && (i = setTimeout(function() {
            return n.activeTouch = null;
          }, 1e3), r = n.activeTouch, r.end = +new Date());
        }
        function p(N) {
          if (N.touches.length != 1)
            return !1;
          var W = N.touches[0];
          return W.radiusX <= 1 && W.radiusY <= 1;
        }
        function D(N, W) {
          if (W.left == null)
            return !0;
          var Y = W.left - N.left, G = W.top - N.top;
          return Y * Y + G * G > 20 * 20;
        }
        ue(n.scroller, "touchstart", function(N) {
          if (!Ke(e, N) && !p(N) && !Ja(e, N)) {
            n.input.ensurePolled(), clearTimeout(i);
            var W = +new Date();
            n.activeTouch = {
              start: W,
              moved: !1,
              prev: W - r.end <= 300 ? r : null
            }, N.touches.length == 1 && (n.activeTouch.left = N.touches[0].pageX, n.activeTouch.top = N.touches[0].pageY);
          }
        }), ue(n.scroller, "touchmove", function() {
          n.activeTouch && (n.activeTouch.moved = !0);
        }), ue(n.scroller, "touchend", function(N) {
          var W = n.activeTouch;
          if (W && !kn(n, N) && W.left != null && !W.moved && new Date() - W.start < 300) {
            var Y = e.coordsChar(n.activeTouch, "page"), G;
            !W.prev || D(W, W.prev) ? G = new Ge(Y, Y) : !W.prev.prev || D(W, W.prev.prev) ? G = e.findWordAt(Y) : G = new Ge(ee(Y.line, 0), Fe(e.doc, ee(Y.line + 1, 0))), e.setSelection(G.anchor, G.head), e.focus(), mt(N);
          }
          a();
        }), ue(n.scroller, "touchcancel", a), ue(n.scroller, "scroll", function() {
          n.scroller.clientHeight && (Di(e, n.scroller.scrollTop), Tr(e, n.scroller.scrollLeft, !0), Ye(e, "scroll", e));
        }), ue(n.scroller, "mousewheel", function(N) {
          return Tu(e, N);
        }), ue(n.scroller, "DOMMouseScroll", function(N) {
          return Tu(e, N);
        }), ue(n.wrapper, "scroll", function() {
          return n.wrapper.scrollTop = n.wrapper.scrollLeft = 0;
        }), n.dragFunctions = {
          enter: function(N) {
            Ke(e, N) || tr(N);
          },
          over: function(N) {
            Ke(e, N) || (uv(e, N), tr(N));
          },
          start: function(N) {
            return sv(e, N);
          },
          drop: Dt(e, lv),
          leave: function(N) {
            Ke(e, N) || _u(e);
          }
        };
        var L = n.input.getField();
        ue(L, "keyup", function(N) {
          return df.call(e, N);
        }), ue(L, "keydown", Dt(e, ff)), ue(L, "keypress", Dt(e, cf)), ue(L, "focus", function(N) {
          return Ia(e, N);
        }), ue(L, "blur", function(N) {
          return Kr(e, N);
        });
      }
      var Za = [];
      rt.defineInitHook = function(e) {
        return Za.push(e);
      };
      function Qi(e, n, i, r) {
        var a = e.doc, p;
        i == null && (i = "add"), i == "smart" && (a.mode.indent ? p = Ai(e, n).state : i = "prev");
        var D = e.options.tabSize, L = we(a, n), N = pe(L.text, null, D);
        L.stateAfter && (L.stateAfter = null);
        var W = L.text.match(/^\s*/)[0], Y;
        if (!r && !/\S/.test(L.text))
          Y = 0, i = "not";
        else if (i == "smart" && (Y = a.mode.indent(p, L.text.slice(W.length), L.text), Y == Ft || Y > 150)) {
          if (!r)
            return;
          i = "prev";
        }
        i == "prev" ? n > a.first ? Y = pe(we(a, n - 1).text, null, D) : Y = 0 : i == "add" ? Y = N + e.options.indentUnit : i == "subtract" ? Y = N - e.options.indentUnit : typeof i == "number" && (Y = N + i), Y = Math.max(0, Y);
        var G = "", Z = 0;
        if (e.options.indentWithTabs)
          for (var J = Math.floor(Y / D); J; --J)
            Z += D, G += "	";
        if (Z < Y && (G += Xt(Y - Z)), G != W)
          return ei(a, G, ee(n, 0), ee(n, W.length), "+input"), L.stateAfter = null, !0;
        for (var te = 0; te < a.sel.ranges.length; te++) {
          var ie = a.sel.ranges[te];
          if (ie.head.line == n && ie.head.ch < W.length) {
            var de = ee(n, W.length);
            Ya(a, te, new Ge(de, de));
            break;
          }
        }
      }
      var Rn = null;
      function Uo(e) {
        Rn = e;
      }
      function qa(e, n, i, r, a) {
        var p = e.doc;
        e.display.shift = !1, r || (r = p.sel);
        var D = +new Date() - 200, L = a == "paste" || e.state.pasteIncoming > D, N = gn(n), W = null;
        if (L && r.ranges.length > 1)
          if (Rn && Rn.text.join(`
`) == n) {
            if (r.ranges.length % Rn.text.length == 0) {
              W = [];
              for (var Y = 0; Y < Rn.text.length; Y++)
                W.push(p.splitLines(Rn.text[Y]));
            }
          } else
            N.length == r.ranges.length && e.options.pasteLinesPerSelection && (W = Ht(N, function(he) {
              return [he];
            }));
        for (var G = e.curOp.updateInput, Z = r.ranges.length - 1; Z >= 0; Z--) {
          var J = r.ranges[Z], te = J.from(), ie = J.to();
          J.empty() && (i && i > 0 ? te = ee(te.line, te.ch - i) : e.state.overwrite && !L ? ie = ee(ie.line, Math.min(we(p, ie.line).text.length, ie.ch + Ue(N).length)) : L && Rn && Rn.lineWise && Rn.text.join(`
`) == N.join(`
`) && (te = ie = ee(te.line, 0)));
          var de = {
            from: te,
            to: ie,
            text: W ? W[Z % W.length] : N,
            origin: a || (L ? "paste" : e.state.cutIncoming > D ? "cut" : "+input")
          };
          _r(e.doc, de), wt(e, "inputRead", e, de);
        }
        n && !L && xf(e, n), Xr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = G), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function Af(e, n) {
        var i = e.clipboardData && e.clipboardData.getData("Text");
        if (i)
          return e.preventDefault(), !n.isReadOnly() && !n.options.disableInput && n.hasFocus() && an(n, function() {
            return qa(n, i, 0, null, "paste");
          }), !0;
      }
      function xf(e, n) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var i = e.doc.sel, r = i.ranges.length - 1; r >= 0; r--) {
            var a = i.ranges[r];
            if (!(a.head.ch > 100 || r && i.ranges[r - 1].head.line == a.head.line)) {
              var p = e.getModeAt(a.head), D = !1;
              if (p.electricChars) {
                for (var L = 0; L < p.electricChars.length; L++)
                  if (n.indexOf(p.electricChars.charAt(L)) > -1) {
                    D = Qi(e, a.head.line, "smart");
                    break;
                  }
              } else
                p.electricInput && p.electricInput.test(we(e.doc, a.head.line).text.slice(0, a.head.ch)) && (D = Qi(e, a.head.line, "smart"));
              D && wt(e, "electricInput", e, a.head.line);
            }
          }
      }
      function Sf(e) {
        for (var n = [], i = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var a = e.doc.sel.ranges[r].head.line, p = { anchor: ee(a, 0), head: ee(a + 1, 0) };
          i.push(p), n.push(e.getRange(p.anchor, p.head));
        }
        return { text: n, ranges: i };
      }
      function _a(e, n, i, r) {
        e.setAttribute("autocorrect", i ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!n);
      }
      function bf() {
        var e = P("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), n = P("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return T ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), y && (e.style.border = "1px solid black"), n;
      }
      function Ov(e) {
        var n = e.optionHandlers, i = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            ae(this).focus(), this.display.input.focus();
          },
          setOption: function(r, a) {
            var p = this.options, D = p[r];
            p[r] == a && r != "mode" || (p[r] = a, n.hasOwnProperty(r) && Dt(this, n[r])(this, a, D), Ye(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, a) {
            this.state.keyMaps[a ? "push" : "unshift"](Fo(r));
          },
          removeKeyMap: function(r) {
            for (var a = this.state.keyMaps, p = 0; p < a.length; ++p)
              if (a[p] == r || a[p].name == r)
                return a.splice(p, 1), !0;
          },
          addOverlay: Yt(function(r, a) {
            var p = r.token ? r : e.getMode(this.options, r);
            if (p.startState)
              throw new Error("Overlays may not be stateful.");
            Ar(
              this.state.overlays,
              {
                mode: p,
                modeSpec: r,
                opaque: a && a.opaque,
                priority: a && a.priority || 0
              },
              function(D) {
                return D.priority;
              }
            ), this.state.modeGen++, _t(this);
          }),
          removeOverlay: Yt(function(r) {
            for (var a = this.state.overlays, p = 0; p < a.length; ++p) {
              var D = a[p].modeSpec;
              if (D == r || typeof r == "string" && D.name == r) {
                a.splice(p, 1), this.state.modeGen++, _t(this);
                return;
              }
            }
          }),
          indentLine: Yt(function(r, a, p) {
            typeof a != "string" && typeof a != "number" && (a == null ? a = this.options.smartIndent ? "smart" : "prev" : a = a ? "add" : "subtract"), ne(this.doc, r) && Qi(this, r, a, p);
          }),
          indentSelection: Yt(function(r) {
            for (var a = this.doc.sel.ranges, p = -1, D = 0; D < a.length; D++) {
              var L = a[D];
              if (L.empty())
                L.head.line > p && (Qi(this, L.head.line, r, !0), p = L.head.line, D == this.doc.sel.primIndex && Xr(this));
              else {
                var N = L.from(), W = L.to(), Y = Math.max(p, N.line);
                p = Math.min(this.lastLine(), W.line - (W.ch ? 0 : 1)) + 1;
                for (var G = Y; G < p; ++G)
                  Qi(this, G, r);
                var Z = this.doc.sel.ranges;
                N.ch == 0 && a.length == Z.length && Z[D].from().ch > 0 && Ya(this.doc, D, new Ge(N, Z[D].to()), Nt);
              }
            }
          }),
          getTokenAt: function(r, a) {
            return Is(this, r, a);
          },
          getLineTokens: function(r, a) {
            return Is(this, ee(r), a, !0);
          },
          getTokenTypeAt: function(r) {
            r = Fe(this.doc, r);
            var a = Ms(this, we(this.doc, r.line)), p = 0, D = (a.length - 1) / 2, L = r.ch, N;
            if (L == 0)
              N = a[2];
            else
              for (; ; ) {
                var W = p + D >> 1;
                if ((W ? a[W * 2 - 1] : 0) >= L)
                  D = W;
                else if (a[W * 2 + 1] < L)
                  p = W + 1;
                else {
                  N = a[W * 2 + 2];
                  break;
                }
              }
            var Y = N ? N.indexOf("overlay ") : -1;
            return Y < 0 ? N : Y == 0 ? null : N.slice(0, Y - 1);
          },
          getModeAt: function(r) {
            var a = this.doc.mode;
            return a.innerMode ? e.innerMode(a, this.getTokenAt(r).state).mode : a;
          },
          getHelper: function(r, a) {
            return this.getHelpers(r, a)[0];
          },
          getHelpers: function(r, a) {
            var p = [];
            if (!i.hasOwnProperty(a))
              return p;
            var D = i[a], L = this.getModeAt(r);
            if (typeof L[a] == "string")
              D[L[a]] && p.push(D[L[a]]);
            else if (L[a])
              for (var N = 0; N < L[a].length; N++) {
                var W = D[L[a][N]];
                W && p.push(W);
              }
            else
              L.helperType && D[L.helperType] ? p.push(D[L.helperType]) : D[L.name] && p.push(D[L.name]);
            for (var Y = 0; Y < D._global.length; Y++) {
              var G = D._global[Y];
              G.pred(L, this) && Ee(p, G.val) == -1 && p.push(G.val);
            }
            return p;
          },
          getStateAfter: function(r, a) {
            var p = this.doc;
            return r = Ts(p, r == null ? p.first + p.size - 1 : r), Ai(this, r + 1, a).state;
          },
          cursorCoords: function(r, a) {
            var p, D = this.doc.sel.primary();
            return r == null ? p = D.head : typeof r == "object" ? p = Fe(this.doc, r) : p = r ? D.from() : D.to(), Dn(this, p, a || "page");
          },
          charCoords: function(r, a) {
            return xo(this, Fe(this.doc, r), a || "page");
          },
          coordsChar: function(r, a) {
            return r = au(this, r, a || "page"), Ea(this, r.left, r.top);
          },
          lineAtHeight: function(r, a) {
            return r = au(this, { top: r, left: 0 }, a || "page").top, k(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, a, p) {
            var D = !1, L;
            if (typeof r == "number") {
              var N = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > N && (r = N, D = !0), L = we(this.doc, r);
            } else
              L = r;
            return Ao(this, L, { top: 0, left: 0 }, a || "page", p || D).top + (D ? this.doc.height - Qn(L) : 0);
          },
          defaultTextHeight: function() {
            return kr(this.display);
          },
          defaultCharWidth: function() {
            return Gr(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, a, p, D, L) {
            var N = this.display;
            r = Dn(this, Fe(this.doc, r));
            var W = r.bottom, Y = r.left;
            if (a.style.position = "absolute", a.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(a), N.sizer.appendChild(a), D == "over")
              W = r.top;
            else if (D == "above" || D == "near") {
              var G = Math.max(N.wrapper.clientHeight, this.doc.height), Z = Math.max(N.sizer.clientWidth, N.lineSpace.clientWidth);
              (D == "above" || r.bottom + a.offsetHeight > G) && r.top > a.offsetHeight ? W = r.top - a.offsetHeight : r.bottom + a.offsetHeight <= G && (W = r.bottom), Y + a.offsetWidth > Z && (Y = Z - a.offsetWidth);
            }
            a.style.top = W + "px", a.style.left = a.style.right = "", L == "right" ? (Y = N.sizer.clientWidth - a.offsetWidth, a.style.right = "0px") : (L == "left" ? Y = 0 : L == "middle" && (Y = (N.sizer.clientWidth - a.offsetWidth) / 2), a.style.left = Y + "px"), p && Ic(this, { left: Y, top: W, right: Y + a.offsetWidth, bottom: W + a.offsetHeight });
          },
          triggerOnKeyDown: Yt(ff),
          triggerOnKeyPress: Yt(cf),
          triggerOnKeyUp: df,
          triggerOnMouseDown: Yt(vf),
          execCommand: function(r) {
            if ($i.hasOwnProperty(r))
              return $i[r].call(null, this);
          },
          triggerElectric: Yt(function(r) {
            xf(this, r);
          }),
          findPosH: function(r, a, p, D) {
            var L = 1;
            a < 0 && (L = -1, a = -a);
            for (var N = Fe(this.doc, r), W = 0; W < a && (N = el(this.doc, N, L, p, D), !N.hitSide); ++W)
              ;
            return N;
          },
          moveH: Yt(function(r, a) {
            var p = this;
            this.extendSelectionsBy(function(D) {
              return p.display.shift || p.doc.extend || D.empty() ? el(p.doc, D.head, r, a, p.options.rtlMoveVisually) : r < 0 ? D.from() : D.to();
            }, Et);
          }),
          deleteH: Yt(function(r, a) {
            var p = this.doc.sel, D = this.doc;
            p.somethingSelected() ? D.replaceSelection("", null, "+delete") : ri(this, function(L) {
              var N = el(D, L.head, r, a, !1);
              return r < 0 ? { from: N, to: L.head } : { from: L.head, to: N };
            });
          }),
          findPosV: function(r, a, p, D) {
            var L = 1, N = D;
            a < 0 && (L = -1, a = -a);
            for (var W = Fe(this.doc, r), Y = 0; Y < a; ++Y) {
              var G = Dn(this, W, "div");
              if (N == null ? N = G.left : G.left = N, W = Ef(this, G, L, p), W.hitSide)
                break;
            }
            return W;
          },
          moveV: Yt(function(r, a) {
            var p = this, D = this.doc, L = [], N = !this.display.shift && !D.extend && D.sel.somethingSelected();
            if (D.extendSelectionsBy(function(Y) {
              if (N)
                return r < 0 ? Y.from() : Y.to();
              var G = Dn(p, Y.head, "div");
              Y.goalColumn != null && (G.left = Y.goalColumn), L.push(G.left);
              var Z = Ef(p, G, r, a);
              return a == "page" && Y == D.sel.primary() && Na(p, xo(p, Z, "div").top - G.top), Z;
            }, Et), L.length)
              for (var W = 0; W < D.sel.ranges.length; W++)
                D.sel.ranges[W].goalColumn = L[W];
          }),
          findWordAt: function(r) {
            var a = this.doc, p = we(a, r.line).text, D = r.ch, L = r.ch;
            if (p) {
              var N = this.getHelper(r, "wordChars");
              (r.sticky == "before" || L == p.length) && D ? --D : ++L;
              for (var W = p.charAt(D), Y = jt(W, N) ? function(G) {
                return jt(G, N);
              } : /\s/.test(W) ? function(G) {
                return /\s/.test(G);
              } : function(G) {
                return !/\s/.test(G) && !jt(G);
              }; D > 0 && Y(p.charAt(D - 1)); )
                --D;
              for (; L < p.length && Y(p.charAt(L)); )
                ++L;
            }
            return new Ge(ee(r.line, D), ee(r.line, L));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? X(this.display.cursorDiv, "CodeMirror-overwrite") : U(this.display.cursorDiv, "CodeMirror-overwrite"), Ye(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == q(ve(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: Yt(function(r, a) {
            wi(this, r, a);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - On(this) - this.display.barHeight,
              width: r.scrollWidth - On(this) - this.display.barWidth,
              clientHeight: Aa(this),
              clientWidth: Sr(this)
            };
          },
          scrollIntoView: Yt(function(r, a) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, a == null && (a = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: ee(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = a || 0, r.from.line != null ? Lc(this, r) : hu(this, r.from, r.to, r.margin);
          }),
          setSize: Yt(function(r, a) {
            var p = this, D = function(N) {
              return typeof N == "number" || /^\d+$/.test(String(N)) ? N + "px" : N;
            };
            r != null && (this.display.wrapper.style.width = D(r)), a != null && (this.display.wrapper.style.height = D(a)), this.options.lineWrapping && ru(this);
            var L = this.display.viewFrom;
            this.doc.iter(L, this.display.viewTo, function(N) {
              if (N.widgets) {
                for (var W = 0; W < N.widgets.length; W++)
                  if (N.widgets[W].noHScroll) {
                    ar(p, L, "widget");
                    break;
                  }
              }
              ++L;
            }), this.curOp.forceUpdate = !0, Ye(this, "refresh", this);
          }),
          operation: function(r) {
            return an(this, r);
          },
          startOperation: function() {
            return Dr(this);
          },
          endOperation: function() {
            return Mr(this);
          },
          refresh: Yt(function() {
            var r = this.display.cachedTextHeight;
            _t(this), this.curOp.forceUpdate = !0, Ci(this), wi(this, this.doc.scrollLeft, this.doc.scrollTop), Ba(this.display), (r == null || Math.abs(r - kr(this.display)) > 0.5 || this.options.lineWrapping) && Da(this), Ye(this, "refresh", this);
          }),
          swapDoc: Yt(function(r) {
            var a = this.doc;
            return a.cm = null, this.state.selectingText && this.state.selectingText(), Ru(this, r), Ci(this), this.display.input.reset(), wi(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, wt(this, "swapDoc", this, a), a;
          }),
          phrase: function(r) {
            var a = this.options.phrases;
            return a && Object.prototype.hasOwnProperty.call(a, r) ? a[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, Vt(e), e.registerHelper = function(r, a, p) {
          i.hasOwnProperty(r) || (i[r] = e[r] = { _global: [] }), i[r][a] = p;
        }, e.registerGlobalHelper = function(r, a, p, D) {
          e.registerHelper(r, a, D), i[r]._global.push({ pred: p, val: D });
        };
      }
      function el(e, n, i, r, a) {
        var p = n, D = i, L = we(e, n.line), N = a && e.direction == "rtl" ? -i : i;
        function W() {
          var xe = n.line + N;
          return xe < e.first || xe >= e.first + e.size ? !1 : (n = new ee(xe, n.ch, n.sticky), L = we(e, xe));
        }
        function Y(xe) {
          var ge;
          if (r == "codepoint") {
            var Te = L.text.charCodeAt(n.ch + (i > 0 ? 0 : -1));
            if (isNaN(Te))
              ge = null;
            else {
              var Re = i > 0 ? Te >= 55296 && Te < 56320 : Te >= 56320 && Te < 57343;
              ge = new ee(n.line, Math.max(0, Math.min(L.text.length, n.ch + i * (Re ? 2 : 1))), -i);
            }
          } else
            a ? ge = hv(e.cm, L, n, i) : ge = ka(L, n, i);
          if (ge == null)
            if (!xe && W())
              n = Ga(a, e.cm, L, n.line, N);
            else
              return !1;
          else
            n = ge;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          Y();
        else if (r == "column")
          Y(!0);
        else if (r == "word" || r == "group")
          for (var G = null, Z = r == "group", J = e.cm && e.cm.getHelper(n, "wordChars"), te = !0; !(i < 0 && !Y(!te)); te = !1) {
            var ie = L.text.charAt(n.ch) || `
`, de = jt(ie, J) ? "w" : Z && ie == `
` ? "n" : !Z || /\s/.test(ie) ? null : "p";
            if (Z && !te && !de && (de = "s"), G && G != de) {
              i < 0 && (i = 1, Y(), n.sticky = "after");
              break;
            }
            if (de && (G = de), i > 0 && !Y(!te))
              break;
          }
        var he = Lo(e, n, p, D, !0);
        return ke(p, he) && (he.hitSide = !0), he;
      }
      function Ef(e, n, i, r) {
        var a = e.doc, p = n.left, D;
        if (r == "page") {
          var L = Math.min(e.display.wrapper.clientHeight, ae(e).innerHeight || a(e).documentElement.clientHeight), N = Math.max(L - 0.5 * kr(e.display), 3);
          D = (i > 0 ? n.bottom : n.top) + i * N;
        } else
          r == "line" && (D = i > 0 ? n.bottom + 3 : n.top - 3);
        for (var W; W = Ea(e, p, D), !!W.outside; ) {
          if (i < 0 ? D <= 0 : D >= a.height) {
            W.hitSide = !0;
            break;
          }
          D += i * 5;
        }
        return W;
      }
      var qe = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Pe(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      qe.prototype.init = function(e) {
        var n = this, i = this, r = i.cm, a = i.div = e.lineDiv;
        a.contentEditable = !0, _a(a, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function p(L) {
          for (var N = L.target; N; N = N.parentNode) {
            if (N == a)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(N.className))
              break;
          }
          return !1;
        }
        ue(a, "paste", function(L) {
          !p(L) || Ke(r, L) || Af(L, r) || m <= 11 && setTimeout(Dt(r, function() {
            return n.updateFromDOM();
          }), 20);
        }), ue(a, "compositionstart", function(L) {
          n.composing = { data: L.data, done: !1 };
        }), ue(a, "compositionupdate", function(L) {
          n.composing || (n.composing = { data: L.data, done: !1 });
        }), ue(a, "compositionend", function(L) {
          n.composing && (L.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0);
        }), ue(a, "touchstart", function() {
          return i.forceCompositionEnd();
        }), ue(a, "input", function() {
          n.composing || n.readFromDOMSoon();
        });
        function D(L) {
          if (!(!p(L) || Ke(r, L))) {
            if (r.somethingSelected())
              Uo({ lineWise: !1, text: r.getSelections() }), L.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var N = Sf(r);
              Uo({ lineWise: !0, text: N.text }), L.type == "cut" && r.operation(function() {
                r.setSelections(N.ranges, 0, Nt), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (L.clipboardData) {
              L.clipboardData.clearData();
              var W = Rn.text.join(`
`);
              if (L.clipboardData.setData("Text", W), L.clipboardData.getData("Text") == W) {
                L.preventDefault();
                return;
              }
            }
            var Y = bf(), G = Y.firstChild;
            _a(G), r.display.lineSpace.insertBefore(Y, r.display.lineSpace.firstChild), G.value = Rn.text.join(`
`);
            var Z = q(ce(a));
            le(G), setTimeout(function() {
              r.display.lineSpace.removeChild(Y), Z.focus(), Z == a && i.showPrimarySelection();
            }, 50);
          }
        }
        ue(a, "copy", D), ue(a, "cut", D);
      }, qe.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, qe.prototype.prepareSelection = function() {
        var e = cu(this.cm, !1);
        return e.focus = q(ce(this.div)) == this.div, e;
      }, qe.prototype.showSelection = function(e, n) {
        !e || !this.cm.display.view.length || ((e.focus || n) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, qe.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, qe.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), n = this.cm, i = n.doc.sel.primary(), r = i.from(), a = i.to();
        if (n.display.viewTo == n.display.viewFrom || r.line >= n.display.viewTo || a.line < n.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var p = zo(n, e.anchorNode, e.anchorOffset), D = zo(n, e.focusNode, e.focusOffset);
        if (!(p && !p.bad && D && !D.bad && ye(jr(p, D), r) == 0 && ye(qt(p, D), a) == 0)) {
          var L = n.display.view, N = r.line >= n.display.viewFrom && Cf(n, r) || { node: L[0].measure.map[2], offset: 0 }, W = a.line < n.display.viewTo && Cf(n, a);
          if (!W) {
            var Y = L[L.length - 1].measure, G = Y.maps ? Y.maps[Y.maps.length - 1] : Y.map;
            W = { node: G[G.length - 1], offset: G[G.length - 2] - G[G.length - 3] };
          }
          if (!N || !W) {
            e.removeAllRanges();
            return;
          }
          var Z = e.rangeCount && e.getRangeAt(0), J;
          try {
            J = Q(N.node, N.offset, W.offset, W.node);
          } catch {
          }
          J && (!t && n.state.focused ? (e.collapse(N.node, N.offset), J.collapsed || (e.removeAllRanges(), e.addRange(J))) : (e.removeAllRanges(), e.addRange(J)), Z && e.anchorNode == null ? e.addRange(Z) : t && this.startGracePeriod()), this.rememberSelection();
        }
      }, qe.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, qe.prototype.showMultipleSelections = function(e) {
        j(this.cm.display.cursorDiv, e.cursors), j(this.cm.display.selectionDiv, e.selection);
      }, qe.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, qe.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var n = e.getRangeAt(0).commonAncestorContainer;
        return K(this.div, n);
      }, qe.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || q(ce(this.div)) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, qe.prototype.blur = function() {
        this.div.blur();
      }, qe.prototype.getField = function() {
        return this.div;
      }, qe.prototype.supportsTouch = function() {
        return !0;
      }, qe.prototype.receivedFocus = function() {
        var e = this, n = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : an(this.cm, function() {
          return n.cm.curOp.selectionChanged = !0;
        });
        function i() {
          n.cm.state.focused && (n.pollSelection(), n.polling.set(n.cm.options.pollInterval, i));
        }
        this.polling.set(this.cm.options.pollInterval, i);
      }, qe.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, qe.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), n = this.cm;
          if (h && w && this.cm.display.gutterSpecs.length && Fv(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var i = zo(n, e.anchorNode, e.anchorOffset), r = zo(n, e.focusNode, e.focusOffset);
            i && r && an(n, function() {
              Ut(n.doc, sr(i, r), Nt), (i.bad || r.bad) && (n.curOp.selectionChanged = !0);
            });
          }
        }
      }, qe.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, n = e.display, i = e.doc.sel.primary(), r = i.from(), a = i.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = ee(r.line - 1, we(e.doc, r.line - 1).length)), a.ch == we(e.doc, a.line).text.length && a.line < e.lastLine() && (a = ee(a.line + 1, 0)), r.line < n.viewFrom || a.line > n.viewTo - 1)
          return !1;
        var p, D, L;
        r.line == n.viewFrom || (p = Cr(e, r.line)) == 0 ? (D = $(n.view[0].line), L = n.view[0].node) : (D = $(n.view[p].line), L = n.view[p - 1].node.nextSibling);
        var N = Cr(e, a.line), W, Y;
        if (N == n.view.length - 1 ? (W = n.viewTo - 1, Y = n.lineDiv.lastChild) : (W = $(n.view[N + 1].line) - 1, Y = n.view[N + 1].node.previousSibling), !L)
          return !1;
        for (var G = e.doc.splitLines(Bv(e, L, Y, D, W)), Z = Vn(e.doc, ee(D, 0), ee(W, we(e.doc, W).text.length)); G.length > 1 && Z.length > 1; )
          if (Ue(G) == Ue(Z))
            G.pop(), Z.pop(), W--;
          else if (G[0] == Z[0])
            G.shift(), Z.shift(), D++;
          else
            break;
        for (var J = 0, te = 0, ie = G[0], de = Z[0], he = Math.min(ie.length, de.length); J < he && ie.charCodeAt(J) == de.charCodeAt(J); )
          ++J;
        for (var xe = Ue(G), ge = Ue(Z), Te = Math.min(
          xe.length - (G.length == 1 ? J : 0),
          ge.length - (Z.length == 1 ? J : 0)
        ); te < Te && xe.charCodeAt(xe.length - te - 1) == ge.charCodeAt(ge.length - te - 1); )
          ++te;
        if (G.length == 1 && Z.length == 1 && D == r.line)
          for (; J && J > r.ch && xe.charCodeAt(xe.length - te - 1) == ge.charCodeAt(ge.length - te - 1); )
            J--, te++;
        G[G.length - 1] = xe.slice(0, xe.length - te).replace(/^\u200b+/, ""), G[0] = G[0].slice(J).replace(/\u200b+$/, "");
        var Re = ee(D, J), Me = ee(W, Z.length ? Ue(Z).length - te : 0);
        if (G.length > 1 || G[0] || ye(Re, Me))
          return ei(e.doc, G, Re, Me, "+input"), !0;
      }, qe.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, qe.prototype.reset = function() {
        this.forceCompositionEnd();
      }, qe.prototype.forceCompositionEnd = function() {
        !this.composing || (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, qe.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, qe.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && an(this.cm, function() {
          return _t(e.cm);
        });
      }, qe.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, qe.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Dt(this.cm, qa)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, qe.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, qe.prototype.onContextMenu = function() {
      }, qe.prototype.resetPosition = function() {
      }, qe.prototype.needsContentAttribute = !0;
      function Cf(e, n) {
        var i = xa(e, n.line);
        if (!i || i.hidden)
          return null;
        var r = we(e.doc, n.line), a = qs(i, r, n.line), p = oe(r, e.doc.direction), D = "left";
        if (p) {
          var L = Oe(p, n.ch);
          D = L % 2 ? "right" : "left";
        }
        var N = tu(a.map, n.ch, D);
        return N.offset = N.collapse == "right" ? N.end : N.start, N;
      }
      function Fv(e) {
        for (var n = e; n; n = n.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(n.className))
            return !0;
        return !1;
      }
      function oi(e, n) {
        return n && (e.bad = !0), e;
      }
      function Bv(e, n, i, r, a) {
        var p = "", D = !1, L = e.doc.lineSeparator(), N = !1;
        function W(J) {
          return function(te) {
            return te.id == J;
          };
        }
        function Y() {
          D && (p += L, N && (p += L), D = N = !1);
        }
        function G(J) {
          J && (Y(), p += J);
        }
        function Z(J) {
          if (J.nodeType == 1) {
            var te = J.getAttribute("cm-text");
            if (te) {
              G(te);
              return;
            }
            var ie = J.getAttribute("cm-marker"), de;
            if (ie) {
              var he = e.findMarks(ee(r, 0), ee(a + 1, 0), W(+ie));
              he.length && (de = he[0].find(0)) && G(Vn(e.doc, de.from, de.to).join(L));
              return;
            }
            if (J.getAttribute("contenteditable") == "false")
              return;
            var xe = /^(pre|div|p|li|table|br)$/i.test(J.nodeName);
            if (!/^br$/i.test(J.nodeName) && J.textContent.length == 0)
              return;
            xe && Y();
            for (var ge = 0; ge < J.childNodes.length; ge++)
              Z(J.childNodes[ge]);
            /^(pre|p)$/i.test(J.nodeName) && (N = !0), xe && (D = !0);
          } else
            J.nodeType == 3 && G(J.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; Z(n), n != i; )
          n = n.nextSibling, N = !1;
        return p;
      }
      function zo(e, n, i) {
        var r;
        if (n == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[i], !r)
            return oi(e.clipPos(ee(e.display.viewTo - 1)), !0);
          n = null, i = 0;
        } else
          for (r = n; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var a = 0; a < e.display.view.length; a++) {
          var p = e.display.view[a];
          if (p.node == r)
            return Hv(p, n, i);
        }
      }
      function Hv(e, n, i) {
        var r = e.text.firstChild, a = !1;
        if (!n || !K(r, n))
          return oi(ee($(e.line), 0), !0);
        if (n == r && (a = !0, n = r.childNodes[i], i = 0, !n)) {
          var p = e.rest ? Ue(e.rest) : e.line;
          return oi(ee($(p), p.text.length), a);
        }
        var D = n.nodeType == 3 ? n : null, L = n;
        for (!D && n.childNodes.length == 1 && n.firstChild.nodeType == 3 && (D = n.firstChild, i && (i = D.nodeValue.length)); L.parentNode != r; )
          L = L.parentNode;
        var N = e.measure, W = N.maps;
        function Y(de, he, xe) {
          for (var ge = -1; ge < (W ? W.length : 0); ge++)
            for (var Te = ge < 0 ? N.map : W[ge], Re = 0; Re < Te.length; Re += 3) {
              var Me = Te[Re + 2];
              if (Me == de || Me == he) {
                var Be = $(ge < 0 ? e.line : e.rest[ge]), et = Te[Re] + xe;
                return (xe < 0 || Me != de) && (et = Te[Re + (xe ? 1 : 0)]), ee(Be, et);
              }
            }
        }
        var G = Y(D, L, i);
        if (G)
          return oi(G, a);
        for (var Z = L.nextSibling, J = D ? D.nodeValue.length - i : 0; Z; Z = Z.nextSibling) {
          if (G = Y(Z, Z.firstChild, 0), G)
            return oi(ee(G.line, G.ch - J), a);
          J += Z.textContent.length;
        }
        for (var te = L.previousSibling, ie = i; te; te = te.previousSibling) {
          if (G = Y(te, te.firstChild, -1), G)
            return oi(ee(G.line, G.ch + ie), a);
          ie += te.textContent.length;
        }
      }
      var ct = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Pe(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      ct.prototype.init = function(e) {
        var n = this, i = this, r = this.cm;
        this.createField(e);
        var a = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), y && (a.style.width = "0px"), ue(a, "input", function() {
          c && m >= 9 && n.hasSelection && (n.hasSelection = null), i.poll();
        }), ue(a, "paste", function(D) {
          Ke(r, D) || Af(D, r) || (r.state.pasteIncoming = +new Date(), i.fastPoll());
        });
        function p(D) {
          if (!Ke(r, D)) {
            if (r.somethingSelected())
              Uo({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var L = Sf(r);
              Uo({ lineWise: !0, text: L.text }), D.type == "cut" ? r.setSelections(L.ranges, null, Nt) : (i.prevInput = "", a.value = L.text.join(`
`), le(a));
            } else
              return;
            D.type == "cut" && (r.state.cutIncoming = +new Date());
          }
        }
        ue(a, "cut", p), ue(a, "copy", p), ue(e.scroller, "paste", function(D) {
          if (!(kn(e, D) || Ke(r, D))) {
            if (!a.dispatchEvent) {
              r.state.pasteIncoming = +new Date(), i.focus();
              return;
            }
            var L = new Event("paste");
            L.clipboardData = D.clipboardData, a.dispatchEvent(L);
          }
        }), ue(e.lineSpace, "selectstart", function(D) {
          kn(e, D) || mt(D);
        }), ue(a, "compositionstart", function() {
          var D = r.getCursor("from");
          i.composing && i.composing.range.clear(), i.composing = {
            start: D,
            range: r.markText(D, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), ue(a, "compositionend", function() {
          i.composing && (i.poll(), i.composing.range.clear(), i.composing = null);
        });
      }, ct.prototype.createField = function(e) {
        this.wrapper = bf(), this.textarea = this.wrapper.firstChild;
        var n = this.cm.options;
        _a(this.textarea, n.spellcheck, n.autocorrect, n.autocapitalize);
      }, ct.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, ct.prototype.prepareSelection = function() {
        var e = this.cm, n = e.display, i = e.doc, r = cu(e);
        if (e.options.moveInputWithCursor) {
          var a = Dn(e, i.sel.primary().head, "div"), p = n.wrapper.getBoundingClientRect(), D = n.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            n.wrapper.clientHeight - 10,
            a.top + D.top - p.top
          )), r.teLeft = Math.max(0, Math.min(
            n.wrapper.clientWidth - 10,
            a.left + D.left - p.left
          ));
        }
        return r;
      }, ct.prototype.showSelection = function(e) {
        var n = this.cm, i = n.display;
        j(i.cursorDiv, e.cursors), j(i.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, ct.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var n = this.cm;
          if (this.resetting = !0, n.somethingSelected()) {
            this.prevInput = "";
            var i = n.getSelection();
            this.textarea.value = i, n.state.focused && le(this.textarea), c && m >= 9 && (this.hasSelection = i);
          } else
            e || (this.prevInput = this.textarea.value = "", c && m >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }, ct.prototype.getField = function() {
        return this.textarea;
      }, ct.prototype.supportsTouch = function() {
        return !1;
      }, ct.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!b || q(ce(this.textarea)) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, ct.prototype.blur = function() {
        this.textarea.blur();
      }, ct.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, ct.prototype.receivedFocus = function() {
        this.slowPoll();
      }, ct.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, ct.prototype.fastPoll = function() {
        var e = !1, n = this;
        n.pollingFast = !0;
        function i() {
          var r = n.poll();
          !r && !e ? (e = !0, n.polling.set(60, i)) : (n.pollingFast = !1, n.slowPoll());
        }
        n.polling.set(20, i);
      }, ct.prototype.poll = function() {
        var e = this, n = this.cm, i = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !n.state.focused || rr(i) && !r && !this.composing || n.isReadOnly() || n.options.disableInput || n.state.keySeq)
          return !1;
        var a = i.value;
        if (a == r && !n.somethingSelected())
          return !1;
        if (c && m >= 9 && this.hasSelection === a || C && /[\uf700-\uf7ff]/.test(a))
          return n.display.input.reset(), !1;
        if (n.doc.sel == n.display.selForContextMenu) {
          var p = a.charCodeAt(0);
          if (p == 8203 && !r && (r = "\u200B"), p == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var D = 0, L = Math.min(r.length, a.length); D < L && r.charCodeAt(D) == a.charCodeAt(D); )
          ++D;
        return an(n, function() {
          qa(
            n,
            a.slice(D),
            r.length - D,
            null,
            e.composing ? "*compose" : null
          ), a.length > 1e3 || a.indexOf(`
`) > -1 ? i.value = e.prevInput = "" : e.prevInput = a, e.composing && (e.composing.range.clear(), e.composing.range = n.markText(
            e.composing.start,
            n.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, ct.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, ct.prototype.onKeyPress = function() {
        c && m >= 9 && (this.hasSelection = null), this.fastPoll();
      }, ct.prototype.onContextMenu = function(e) {
        var n = this, i = n.cm, r = i.display, a = n.textarea;
        n.contextMenuPending && n.contextMenuPending();
        var p = Er(i, e), D = r.scroller.scrollTop;
        if (!p || g)
          return;
        var L = i.options.resetSelectionOnContextMenu;
        L && i.doc.sel.contains(p) == -1 && Dt(i, Ut)(i.doc, sr(p), Nt);
        var N = a.style.cssText, W = n.wrapper.style.cssText, Y = n.wrapper.offsetParent.getBoundingClientRect();
        n.wrapper.style.cssText = "position: static", a.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - Y.top - 5) + "px; left: " + (e.clientX - Y.left - 5) + `px;
      z-index: 1000; background: ` + (c ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var G;
        T && (G = a.ownerDocument.defaultView.scrollY), r.input.focus(), T && a.ownerDocument.defaultView.scrollTo(null, G), r.input.reset(), i.somethingSelected() || (a.value = n.prevInput = " "), n.contextMenuPending = J, r.selForContextMenu = i.doc.sel, clearTimeout(r.detectingSelectAll);
        function Z() {
          if (a.selectionStart != null) {
            var ie = i.somethingSelected(), de = "\u200B" + (ie ? a.value : "");
            a.value = "\u21DA", a.value = de, n.prevInput = ie ? "" : "\u200B", a.selectionStart = 1, a.selectionEnd = de.length, r.selForContextMenu = i.doc.sel;
          }
        }
        function J() {
          if (n.contextMenuPending == J && (n.contextMenuPending = !1, n.wrapper.style.cssText = W, a.style.cssText = N, c && m < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = D), a.selectionStart != null)) {
            (!c || c && m < 9) && Z();
            var ie = 0, de = function() {
              r.selForContextMenu == i.doc.sel && a.selectionStart == 0 && a.selectionEnd > 0 && n.prevInput == "\u200B" ? Dt(i, ju)(i) : ie++ < 10 ? r.detectingSelectAll = setTimeout(de, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(de, 200);
          }
        }
        if (c && m >= 9 && Z(), z) {
          tr(e);
          var te = function() {
            ze(window, "mouseup", te), setTimeout(J, 20);
          };
          ue(window, "mouseup", te);
        } else
          setTimeout(J, 50);
      }, ct.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, ct.prototype.setUneditable = function() {
      }, ct.prototype.needsContentAttribute = !1;
      function Uv(e, n) {
        if (n = n ? se(n) : {}, n.value = e.value, !n.tabindex && e.tabIndex && (n.tabindex = e.tabIndex), !n.placeholder && e.placeholder && (n.placeholder = e.placeholder), n.autofocus == null) {
          var i = q(ce(e));
          n.autofocus = i == e || e.getAttribute("autofocus") != null && i == document.body;
        }
        function r() {
          e.value = L.getValue();
        }
        var a;
        if (e.form && (ue(e.form, "submit", r), !n.leaveSubmitMethodAlone)) {
          var p = e.form;
          a = p.submit;
          try {
            var D = p.submit = function() {
              r(), p.submit = a, p.submit(), p.submit = D;
            };
          } catch {
          }
        }
        n.finishInit = function(N) {
          N.save = r, N.getTextArea = function() {
            return e;
          }, N.toTextArea = function() {
            N.toTextArea = isNaN, r(), e.parentNode.removeChild(N.getWrapperElement()), e.style.display = "", e.form && (ze(e.form, "submit", r), !n.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = a));
          };
        }, e.style.display = "none";
        var L = rt(
          function(N) {
            return e.parentNode.insertBefore(N, e.nextSibling);
          },
          n
        );
        return L;
      }
      function zv(e) {
        e.off = ze, e.on = ue, e.wheelEventPixels = kc, e.Doc = en, e.splitLines = gn, e.countColumn = pe, e.findColumn = Bt, e.isWordChar = xn, e.Pass = Ft, e.signal = Ye, e.Line = Vr, e.changeEnd = ur, e.scrollbarModel = yu, e.Pos = ee, e.cmpPos = ye, e.modes = Hr, e.mimeModes = Cn, e.resolveMode = Ur, e.getMode = zr, e.modeExtensions = ir, e.extendMode = Wr, e.copyState = Ln, e.startState = $r, e.innerMode = mi, e.commands = $i, e.keyMap = Kn, e.keyName = of, e.isModifierKey = nf, e.lookupKey = ni, e.normalizeKeyMap = pv, e.StringStream = ut, e.SharedTextMarker = Ui, e.TextMarker = dr, e.LineWidget = Hi, e.e_preventDefault = mt, e.e_stopPropagation = er, e.e_stop = tr, e.addClass = X, e.contains = K, e.rmClass = U, e.keyNames = cr;
      }
      Pv(rt), Ov(rt);
      var Wv = "iter insert remove copy getEditor constructor".split(" ");
      for (var Wo in en.prototype)
        en.prototype.hasOwnProperty(Wo) && Ee(Wv, Wo) < 0 && (rt.prototype[Wo] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(en.prototype[Wo]));
      return Vt(en), rt.inputStyles = { textarea: ct, contenteditable: qe }, rt.defineMode = function(e) {
        !rt.defaults.mode && e != "null" && (rt.defaults.mode = e), Tn.apply(this, arguments);
      }, rt.defineMIME = xr, rt.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), rt.defineMIME("text/plain", "null"), rt.defineExtension = function(e, n) {
        rt.prototype[e] = n;
      }, rt.defineDocExtension = function(e, n) {
        en.prototype[e] = n;
      }, rt.fromTextArea = Uv, zv(rt), rt.version = "5.65.16", rt;
    });
  }(Hl)), Hl.exports;
}
var fg = zd();
(function(u, A) {
  (function(l) {
    l(zd());
  })(function(l) {
    l.defineMode("javascript", function(o, t) {
      var s = o.indentUnit, f = t.statementIndent, d = t.jsonld, c = t.json || d, m = t.trackScope !== !1, T = t.typescript, x = t.wordCharacters || /[\w$\xa1-\uffff]/, w = function() {
        function $(Tt) {
          return { type: Tt, style: "keyword" };
        }
        var k = $("keyword a"), ne = $("keyword b"), fe = $("keyword c"), ee = $("keyword d"), ye = $("operator"), ke = { type: "atom", style: "atom" };
        return {
          if: $("if"),
          while: k,
          with: k,
          else: ne,
          do: ne,
          try: ne,
          finally: ne,
          return: ee,
          break: ee,
          continue: ee,
          new: $("new"),
          delete: fe,
          void: fe,
          throw: fe,
          debugger: $("debugger"),
          var: $("var"),
          const: $("var"),
          let: $("var"),
          function: $("function"),
          catch: $("catch"),
          for: $("for"),
          switch: $("switch"),
          case: $("case"),
          default: $("default"),
          in: ye,
          typeof: ye,
          instanceof: ye,
          true: ke,
          false: ke,
          null: ke,
          undefined: ke,
          NaN: ke,
          Infinity: ke,
          this: $("this"),
          class: $("class"),
          super: $("atom"),
          yield: fe,
          export: $("export"),
          import: $("import"),
          extends: fe,
          await: fe
        };
      }(), E = /[+\-*&%=<>!?|~^@]/, g = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function S($) {
        for (var k = !1, ne, fe = !1; (ne = $.next()) != null; ) {
          if (!k) {
            if (ne == "/" && !fe)
              return;
            ne == "[" ? fe = !0 : fe && ne == "]" && (fe = !1);
          }
          k = !k && ne == "\\";
        }
      }
      var v, M;
      function y($, k, ne) {
        return v = $, M = ne, k;
      }
      function h($, k) {
        var ne = $.next();
        if (ne == '"' || ne == "'")
          return k.tokenize = b(ne), k.tokenize($, k);
        if (ne == "." && $.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return y("number", "number");
        if (ne == "." && $.match(".."))
          return y("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(ne))
          return y(ne);
        if (ne == "=" && $.eat(">"))
          return y("=>", "operator");
        if (ne == "0" && $.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return y("number", "number");
        if (/\d/.test(ne))
          return $.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), y("number", "number");
        if (ne == "/")
          return $.eat("*") ? (k.tokenize = C, C($, k)) : $.eat("/") ? ($.skipToEnd(), y("comment", "comment")) : un($, k, 1) ? (S($), $.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), y("regexp", "string-2")) : ($.eat("="), y("operator", "operator", $.current()));
        if (ne == "`")
          return k.tokenize = R, R($, k);
        if (ne == "#" && $.peek() == "!")
          return $.skipToEnd(), y("meta", "meta");
        if (ne == "#" && $.eatWhile(x))
          return y("variable", "property");
        if (ne == "<" && $.match("!--") || ne == "-" && $.match("->") && !/\S/.test($.string.slice(0, $.start)))
          return $.skipToEnd(), y("comment", "comment");
        if (E.test(ne))
          return (ne != ">" || !k.lexical || k.lexical.type != ">") && ($.eat("=") ? (ne == "!" || ne == "=") && $.eat("=") : /[<>*+\-|&?]/.test(ne) && ($.eat(ne), ne == ">" && $.eat(ne))), ne == "?" && $.eat(".") ? y(".") : y("operator", "operator", $.current());
        if (x.test(ne)) {
          $.eatWhile(x);
          var fe = $.current();
          if (k.lastType != ".") {
            if (w.propertyIsEnumerable(fe)) {
              var ee = w[fe];
              return y(ee.type, ee.style, fe);
            }
            if (fe == "async" && $.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return y("async", "keyword", fe);
          }
          return y("variable", "variable", fe);
        }
      }
      function b($) {
        return function(k, ne) {
          var fe = !1, ee;
          if (d && k.peek() == "@" && k.match(g))
            return ne.tokenize = h, y("jsonld-keyword", "meta");
          for (; (ee = k.next()) != null && !(ee == $ && !fe); )
            fe = !fe && ee == "\\";
          return fe || (ne.tokenize = h), y("string", "string");
        };
      }
      function C($, k) {
        for (var ne = !1, fe; fe = $.next(); ) {
          if (fe == "/" && ne) {
            k.tokenize = h;
            break;
          }
          ne = fe == "*";
        }
        return y("comment", "comment");
      }
      function R($, k) {
        for (var ne = !1, fe; (fe = $.next()) != null; ) {
          if (!ne && (fe == "`" || fe == "$" && $.eat("{"))) {
            k.tokenize = h;
            break;
          }
          ne = !ne && fe == "\\";
        }
        return y("quasi", "string-2", $.current());
      }
      var O = "([{}])";
      function B($, k) {
        k.fatArrowAt && (k.fatArrowAt = null);
        var ne = $.string.indexOf("=>", $.start);
        if (!(ne < 0)) {
          if (T) {
            var fe = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec($.string.slice($.start, ne));
            fe && (ne = fe.index);
          }
          for (var ee = 0, ye = !1, ke = ne - 1; ke >= 0; --ke) {
            var Tt = $.string.charAt(ke), qt = O.indexOf(Tt);
            if (qt >= 0 && qt < 3) {
              if (!ee) {
                ++ke;
                break;
              }
              if (--ee == 0) {
                Tt == "(" && (ye = !0);
                break;
              }
            } else if (qt >= 3 && qt < 6)
              ++ee;
            else if (x.test(Tt))
              ye = !0;
            else if (/["'\/`]/.test(Tt))
              for (; ; --ke) {
                if (ke == 0)
                  return;
                var jr = $.string.charAt(ke - 1);
                if (jr == Tt && $.string.charAt(ke - 2) != "\\") {
                  ke--;
                  break;
                }
              }
            else if (ye && !ee) {
              ++ke;
              break;
            }
          }
          ye && !ee && (k.fatArrowAt = ke);
        }
      }
      var F = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0
      };
      function z($, k, ne, fe, ee, ye) {
        this.indented = $, this.column = k, this.type = ne, this.prev = ee, this.info = ye, fe != null && (this.align = fe);
      }
      function I($, k) {
        if (!m)
          return !1;
        for (var ne = $.localVars; ne; ne = ne.next)
          if (ne.name == k)
            return !0;
        for (var fe = $.context; fe; fe = fe.prev)
          for (var ne = fe.vars; ne; ne = ne.next)
            if (ne.name == k)
              return !0;
      }
      function U($, k, ne, fe, ee) {
        var ye = $.cc;
        for (H.state = $, H.stream = ee, H.marked = null, H.cc = ye, H.style = k, $.lexical.hasOwnProperty("align") || ($.lexical.align = !0); ; ) {
          var ke = ye.length ? ye.pop() : c ? Ee : pe;
          if (ke(ne, fe)) {
            for (; ye.length && ye[ye.length - 1].lex; )
              ye.pop()();
            return H.marked ? H.marked : ne == "variable" && I($, fe) ? "variable-2" : k;
          }
        }
      }
      var H = { state: null, column: null, marked: null, cc: null };
      function j() {
        for (var $ = arguments.length - 1; $ >= 0; $--)
          H.cc.push(arguments[$]);
      }
      function P() {
        return j.apply(null, arguments), !0;
      }
      function V($, k) {
        for (var ne = k; ne; ne = ne.next)
          if (ne.name == $)
            return !0;
        return !1;
      }
      function Q($) {
        var k = H.state;
        if (H.marked = "def", !!m) {
          if (k.context) {
            if (k.lexical.info == "var" && k.context && k.context.block) {
              var ne = K($, k.context);
              if (ne != null) {
                k.context = ne;
                return;
              }
            } else if (!V($, k.localVars)) {
              k.localVars = new _($, k.localVars);
              return;
            }
          }
          t.globalVars && !V($, k.globalVars) && (k.globalVars = new _($, k.globalVars));
        }
      }
      function K($, k) {
        if (k)
          if (k.block) {
            var ne = K($, k.prev);
            return ne ? ne == k.prev ? k : new X(ne, k.vars, !0) : null;
          } else
            return V($, k.vars) ? k : new X(k.prev, new _($, k.vars), !1);
        else
          return null;
      }
      function q($) {
        return $ == "public" || $ == "private" || $ == "protected" || $ == "abstract" || $ == "readonly";
      }
      function X($, k, ne) {
        this.prev = $, this.vars = k, this.block = ne;
      }
      function _($, k) {
        this.name = $, this.next = k;
      }
      var le = new _("this", new _("arguments", null));
      function Se() {
        H.state.context = new X(H.state.context, H.state.localVars, !1), H.state.localVars = le;
      }
      function ve() {
        H.state.context = new X(H.state.context, H.state.localVars, !0), H.state.localVars = null;
      }
      Se.lex = ve.lex = !0;
      function ce() {
        H.state.localVars = H.state.context.vars, H.state.context = H.state.context.prev;
      }
      ce.lex = !0;
      function ae($, k) {
        var ne = function() {
          var fe = H.state, ee = fe.indented;
          if (fe.lexical.type == "stat")
            ee = fe.lexical.indented;
          else
            for (var ye = fe.lexical; ye && ye.type == ")" && ye.align; ye = ye.prev)
              ee = ye.indented;
          fe.lexical = new z(ee, H.stream.column(), $, null, fe.lexical, k);
        };
        return ne.lex = !0, ne;
      }
      function re() {
        var $ = H.state;
        $.lexical.prev && ($.lexical.type == ")" && ($.indented = $.lexical.indented), $.lexical = $.lexical.prev);
      }
      re.lex = !0;
      function se($) {
        function k(ne) {
          return ne == $ ? P() : $ == ";" || ne == "}" || ne == ")" || ne == "]" ? j() : P(k);
        }
        return k;
      }
      function pe($, k) {
        return $ == "var" ? P(ae("vardef", k), er, se(";"), re) : $ == "keyword a" ? P(ae("form"), Ft, pe, re) : $ == "keyword b" ? P(ae("form"), pe, re) : $ == "keyword d" ? H.stream.match(/^\s*$/, !1) ? P() : P(ae("stat"), lt, se(";"), re) : $ == "debugger" ? P(se(";")) : $ == "{" ? P(ae("}"), ve, We, re, ce) : $ == ";" ? P() : $ == "if" ? (H.state.lexical.info == "else" && H.state.cc[H.state.cc.length - 1] == re && H.state.cc.pop()(), P(ae("form"), Ft, pe, re, Br)) : $ == "function" ? P(gn) : $ == "for" ? P(ae("form"), ve, so, pe, ce, re) : $ == "class" || T && k == "interface" ? (H.marked = "keyword", P(ae("form", $ == "class" ? $ : k), Hr, re)) : $ == "variable" ? T && k == "declare" ? (H.marked = "keyword", P(pe)) : T && (k == "module" || k == "enum" || k == "type") && H.stream.match(/^\s*\w/, !1) ? (H.marked = "keyword", k == "enum" ? P(we) : k == "type" ? P(uo, se("operator"), oe, se(";")) : P(ae("form"), Zt, se("{"), ae("}"), We, re, re)) : T && k == "namespace" ? (H.marked = "keyword", P(ae("form"), Ee, pe, re)) : T && k == "abstract" ? (H.marked = "keyword", P(pe)) : P(ae("stat"), In) : $ == "switch" ? P(
          ae("form"),
          Ft,
          se("{"),
          ae("}", "switch"),
          ve,
          We,
          re,
          re,
          ce
        ) : $ == "case" ? P(Ee, se(":")) : $ == "default" ? P(se(":")) : $ == "catch" ? P(ae("form"), Se, Pe, pe, re, ce) : $ == "export" ? P(ae("stat"), Ur, re) : $ == "import" ? P(ae("stat"), ir, re) : $ == "async" ? P(pe) : k == "@" ? P(Ee, pe) : j(ae("stat"), Ee, se(";"), re);
      }
      function Pe($) {
        if ($ == "(")
          return P(En, se(")"));
      }
      function Ee($, k) {
        return Nt($, k, !1);
      }
      function je($, k) {
        return Nt($, k, !0);
      }
      function Ft($) {
        return $ != "(" ? j() : P(ae(")"), lt, se(")"), re);
      }
      function Nt($, k, ne) {
        if (H.state.fatArrowAt == H.stream.start) {
          var fe = ne ? Ht : Ue;
          if ($ == "(")
            return P(Se, ae(")"), Ze(En, ")"), re, se("=>"), fe, ce);
          if ($ == "variable")
            return j(Se, Zt, se("=>"), fe, ce);
        }
        var ee = ne ? Bt : Et;
        return F.hasOwnProperty($) ? P(ee) : $ == "function" ? P(gn, ee) : $ == "class" || T && k == "interface" ? (H.marked = "keyword", P(ae("form"), ua, re)) : $ == "keyword c" || $ == "async" ? P(ne ? je : Ee) : $ == "(" ? P(ae(")"), lt, se(")"), re, ee) : $ == "operator" || $ == "spread" ? P(ne ? je : Ee) : $ == "[" ? P(ae("]"), ut, re, ee) : $ == "{" ? Jt(jt, "}", null, ee) : $ == "quasi" ? j(dt, ee) : $ == "new" ? P(Ar(ne)) : P();
      }
      function lt($) {
        return $.match(/[;\}\)\],]/) ? j() : j(Ee);
      }
      function Et($, k) {
        return $ == "," ? P(lt) : Bt($, k, !1);
      }
      function Bt($, k, ne) {
        var fe = ne == !1 ? Et : Bt, ee = ne == !1 ? Ee : je;
        if ($ == "=>")
          return P(Se, ne ? Ht : Ue, ce);
        if ($ == "operator")
          return /\+\+|--/.test(k) || T && k == "!" ? P(fe) : T && k == "<" && H.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? P(ae(">"), Ze(oe, ">"), re, fe) : k == "?" ? P(Ee, se(":"), ee) : P(ee);
        if ($ == "quasi")
          return j(dt, fe);
        if ($ != ";") {
          if ($ == "(")
            return Jt(je, ")", "call", fe);
          if ($ == ".")
            return P(xn, fe);
          if ($ == "[")
            return P(ae("]"), lt, se("]"), re, fe);
          if (T && k == "as")
            return H.marked = "keyword", P(oe, fe);
          if ($ == "regexp")
            return H.state.lastType = H.marked = "operator", H.stream.backUp(H.stream.pos - H.stream.start - 1), P(ee);
        }
      }
      function dt($, k) {
        return $ != "quasi" ? j() : k.slice(k.length - 2) != "${" ? P(dt) : P(lt, Xt);
      }
      function Xt($) {
        if ($ == "}")
          return H.marked = "string-2", H.state.tokenize = R, P(dt);
      }
      function Ue($) {
        return B(H.stream, H.state), j($ == "{" ? pe : Ee);
      }
      function Ht($) {
        return B(H.stream, H.state), j($ == "{" ? pe : je);
      }
      function Ar($) {
        return function(k) {
          return k == "." ? P($ ? hn : An) : k == "variable" && T ? P(_e, $ ? Bt : Et) : j($ ? je : Ee);
        };
      }
      function An($, k) {
        if (k == "target")
          return H.marked = "keyword", P(Et);
      }
      function hn($, k) {
        if (k == "target")
          return H.marked = "keyword", P(Bt);
      }
      function In($) {
        return $ == ":" ? P(re, pe) : j(Et, se(";"), re);
      }
      function xn($) {
        if ($ == "variable")
          return H.marked = "property", P();
      }
      function jt($, k) {
        if ($ == "async")
          return H.marked = "property", P(jt);
        if ($ == "variable" || H.style == "keyword") {
          if (H.marked = "property", k == "get" || k == "set")
            return P(Sn);
          var ne;
          return T && H.state.fatArrowAt == H.stream.start && (ne = H.stream.match(/^\s*:\s*/, !1)) && (H.state.fatArrowAt = H.stream.pos + ne[0].length), P(Ct);
        } else {
          if ($ == "number" || $ == "string")
            return H.marked = d ? "property" : H.style + " property", P(Ct);
          if ($ == "jsonld-keyword")
            return P(Ct);
          if (T && q(k))
            return H.marked = "keyword", P(jt);
          if ($ == "[")
            return P(Ee, Ce, se("]"), Ct);
          if ($ == "spread")
            return P(je, Ct);
          if (k == "*")
            return H.marked = "keyword", P(jt);
          if ($ == ":")
            return j(Ct);
        }
      }
      function Sn($) {
        return $ != "variable" ? j(Ct) : (H.marked = "property", P(gn));
      }
      function Ct($) {
        if ($ == ":")
          return P(je);
        if ($ == "(")
          return j(gn);
      }
      function Ze($, k, ne) {
        function fe(ee, ye) {
          if (ne ? ne.indexOf(ee) > -1 : ee == ",") {
            var ke = H.state.lexical;
            return ke.info == "call" && (ke.pos = (ke.pos || 0) + 1), P(function(Tt, qt) {
              return Tt == k || qt == k ? j() : j($);
            }, fe);
          }
          return ee == k || ye == k ? P() : ne && ne.indexOf(";") > -1 ? j($) : P(se(k));
        }
        return function(ee, ye) {
          return ee == k || ye == k ? P() : j($, fe);
        };
      }
      function Jt($, k, ne) {
        for (var fe = 3; fe < arguments.length; fe++)
          H.cc.push(arguments[fe]);
        return P(ae(k, ne), Ze($, k), re);
      }
      function We($) {
        return $ == "}" ? P() : j(pe, We);
      }
      function Ce($, k) {
        if (T) {
          if ($ == ":")
            return P(oe);
          if (k == "?")
            return P(Ce);
        }
      }
      function me($, k) {
        if (T && ($ == ":" || k == "in"))
          return P(oe);
      }
      function Oe($) {
        if (T && $ == ":")
          return H.stream.match(/^\s*\w+\s+is\b/, !1) ? P(Ee, be, oe) : P(oe);
      }
      function be($, k) {
        if (k == "is")
          return H.marked = "keyword", P();
      }
      function oe($, k) {
        if (k == "keyof" || k == "typeof" || k == "infer" || k == "readonly")
          return H.marked = "keyword", P(k == "typeof" ? je : oe);
        if ($ == "variable" || k == "void")
          return H.marked = "type", P(st);
        if (k == "|" || k == "&")
          return P(oe);
        if ($ == "string" || $ == "number" || $ == "atom")
          return P(st);
        if ($ == "[")
          return P(ae("]"), Ze(oe, "]", ","), re, st);
        if ($ == "{")
          return P(ae("}"), ue, re, st);
        if ($ == "(")
          return P(Ze(Ke, ")"), De, st);
        if ($ == "<")
          return P(Ze(oe, ">"), oe);
        if ($ == "quasi")
          return j(ze, st);
      }
      function De($) {
        if ($ == "=>")
          return P(oe);
      }
      function ue($) {
        return $.match(/[\}\)\]]/) ? P() : $ == "," || $ == ";" ? P(ue) : j(Ie, ue);
      }
      function Ie($, k) {
        if ($ == "variable" || H.style == "keyword")
          return H.marked = "property", P(Ie);
        if (k == "?" || $ == "number" || $ == "string")
          return P(Ie);
        if ($ == ":")
          return P(oe);
        if ($ == "[")
          return P(se("variable"), me, se("]"), Ie);
        if ($ == "(")
          return j(rr, Ie);
        if (!$.match(/[;\}\)\],]/))
          return P();
      }
      function ze($, k) {
        return $ != "quasi" ? j() : k.slice(k.length - 2) != "${" ? P(ze) : P(oe, Ye);
      }
      function Ye($) {
        if ($ == "}")
          return H.marked = "string-2", H.state.tokenize = R, P(ze);
      }
      function Ke($, k) {
        return $ == "variable" && H.stream.match(/^\s*[?:]/, !1) || k == "?" ? P(Ke) : $ == ":" ? P(oe) : $ == "spread" ? P(Ke) : j(oe);
      }
      function st($, k) {
        if (k == "<")
          return P(ae(">"), Ze(oe, ">"), re, st);
        if (k == "|" || $ == "." || k == "&")
          return P(oe);
        if ($ == "[")
          return P(oe, se("]"), st);
        if (k == "extends" || k == "implements")
          return H.marked = "keyword", P(oe);
        if (k == "?")
          return P(oe, se(":"), oe);
      }
      function _e($, k) {
        if (k == "<")
          return P(ae(">"), Ze(oe, ">"), re, st);
      }
      function Vt() {
        return j(oe, mt);
      }
      function mt($, k) {
        if (k == "=")
          return P(oe);
      }
      function er($, k) {
        return k == "enum" ? (H.marked = "keyword", P(we)) : j(Zt, Ce, bn, sa);
      }
      function Zt($, k) {
        if (T && q(k))
          return H.marked = "keyword", P(Zt);
        if ($ == "variable")
          return Q(k), P();
        if ($ == "spread")
          return P(Zt);
        if ($ == "[")
          return Jt(hi, "]");
        if ($ == "{")
          return Jt(tr, "}");
      }
      function tr($, k) {
        return $ == "variable" && !H.stream.match(/^\s*:/, !1) ? (Q(k), P(bn)) : ($ == "variable" && (H.marked = "property"), $ == "spread" ? P(Zt) : $ == "}" ? j() : $ == "[" ? P(Ee, se("]"), se(":"), tr) : P(se(":"), Zt, bn));
      }
      function hi() {
        return j(Zt, bn);
      }
      function bn($, k) {
        if (k == "=")
          return P(je);
      }
      function sa($) {
        if ($ == ",")
          return P(er);
      }
      function Br($, k) {
        if ($ == "keyword b" && k == "else")
          return P(ae("form", "else"), pe, re);
      }
      function so($, k) {
        if (k == "await")
          return P(so);
        if ($ == "(")
          return P(ae(")"), gi, re);
      }
      function gi($) {
        return $ == "var" ? P(er, nr) : $ == "variable" ? P(nr) : j(nr);
      }
      function nr($, k) {
        return $ == ")" ? P() : $ == ";" ? P(nr) : k == "in" || k == "of" ? (H.marked = "keyword", P(Ee, nr)) : j(Ee, nr);
      }
      function gn($, k) {
        if (k == "*")
          return H.marked = "keyword", P(gn);
        if ($ == "variable")
          return Q(k), P(gn);
        if ($ == "(")
          return P(Se, ae(")"), Ze(En, ")"), re, Oe, pe, ce);
        if (T && k == "<")
          return P(ae(">"), Ze(Vt, ">"), re, gn);
      }
      function rr($, k) {
        if (k == "*")
          return H.marked = "keyword", P(rr);
        if ($ == "variable")
          return Q(k), P(rr);
        if ($ == "(")
          return P(Se, ae(")"), Ze(En, ")"), re, Oe, ce);
        if (T && k == "<")
          return P(ae(">"), Ze(Vt, ">"), re, rr);
      }
      function uo($, k) {
        if ($ == "keyword" || $ == "variable")
          return H.marked = "type", P(uo);
        if (k == "<")
          return P(ae(">"), Ze(Vt, ">"), re);
      }
      function En($, k) {
        return k == "@" && P(Ee, En), $ == "spread" ? P(En) : T && q(k) ? (H.marked = "keyword", P(En)) : T && $ == "this" ? P(Ce, bn) : j(Zt, Ce, bn);
      }
      function ua($, k) {
        return $ == "variable" ? Hr($, k) : Cn($, k);
      }
      function Hr($, k) {
        if ($ == "variable")
          return Q(k), P(Cn);
      }
      function Cn($, k) {
        if (k == "<")
          return P(ae(">"), Ze(Vt, ">"), re, Cn);
        if (k == "extends" || k == "implements" || T && $ == ",")
          return k == "implements" && (H.marked = "keyword"), P(T ? oe : Ee, Cn);
        if ($ == "{")
          return P(ae("}"), Tn, re);
      }
      function Tn($, k) {
        if ($ == "async" || $ == "variable" && (k == "static" || k == "get" || k == "set" || T && q(k)) && H.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
          return H.marked = "keyword", P(Tn);
        if ($ == "variable" || H.style == "keyword")
          return H.marked = "property", P(xr, Tn);
        if ($ == "number" || $ == "string")
          return P(xr, Tn);
        if ($ == "[")
          return P(Ee, Ce, se("]"), xr, Tn);
        if (k == "*")
          return H.marked = "keyword", P(Tn);
        if (T && $ == "(")
          return j(rr, Tn);
        if ($ == ";" || $ == ",")
          return P(Tn);
        if ($ == "}")
          return P();
        if (k == "@")
          return P(Ee, Tn);
      }
      function xr($, k) {
        if (k == "!" || k == "?")
          return P(xr);
        if ($ == ":")
          return P(oe, bn);
        if (k == "=")
          return P(je);
        var ne = H.state.lexical.prev, fe = ne && ne.info == "interface";
        return j(fe ? rr : gn);
      }
      function Ur($, k) {
        return k == "*" ? (H.marked = "keyword", P($r, se(";"))) : k == "default" ? (H.marked = "keyword", P(Ee, se(";"))) : $ == "{" ? P(Ze(zr, "}"), $r, se(";")) : j(pe);
      }
      function zr($, k) {
        if (k == "as")
          return H.marked = "keyword", P(se("variable"));
        if ($ == "variable")
          return j(je, zr);
      }
      function ir($) {
        return $ == "string" ? P() : $ == "(" ? j(Ee) : $ == "." ? j(Et) : j(Wr, Ln, $r);
      }
      function Wr($, k) {
        return $ == "{" ? Jt(Wr, "}") : ($ == "variable" && Q(k), k == "*" && (H.marked = "keyword"), P(mi));
      }
      function Ln($) {
        if ($ == ",")
          return P(Wr, Ln);
      }
      function mi($, k) {
        if (k == "as")
          return H.marked = "keyword", P(Wr);
      }
      function $r($, k) {
        if (k == "from")
          return H.marked = "keyword", P(Ee);
      }
      function ut($) {
        return $ == "]" ? P() : j(Ze(je, "]"));
      }
      function we() {
        return j(ae("form"), Zt, se("{"), ae("}"), Ze(Vn, "}"), re, re);
      }
      function Vn() {
        return j(Zt, bn);
      }
      function yi($, k) {
        return $.lastType == "operator" || $.lastType == "," || E.test(k.charAt(0)) || /[,.]/.test(k.charAt(0));
      }
      function un($, k, ne) {
        return k.tokenize == h && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(k.lastType) || k.lastType == "quasi" && /\{\s*$/.test($.string.slice(0, $.pos - (ne || 0)));
      }
      return {
        startState: function($) {
          var k = {
            tokenize: h,
            lastType: "sof",
            cc: [],
            lexical: new z(($ || 0) - s, 0, "block", !1),
            localVars: t.localVars,
            context: t.localVars && new X(null, null, !1),
            indented: $ || 0
          };
          return t.globalVars && typeof t.globalVars == "object" && (k.globalVars = t.globalVars), k;
        },
        token: function($, k) {
          if ($.sol() && (k.lexical.hasOwnProperty("align") || (k.lexical.align = !1), k.indented = $.indentation(), B($, k)), k.tokenize != C && $.eatSpace())
            return null;
          var ne = k.tokenize($, k);
          return v == "comment" ? ne : (k.lastType = v == "operator" && (M == "++" || M == "--") ? "incdec" : v, U(k, ne, v, M, $));
        },
        indent: function($, k) {
          if ($.tokenize == C || $.tokenize == R)
            return l.Pass;
          if ($.tokenize != h)
            return 0;
          var ne = k && k.charAt(0), fe = $.lexical, ee;
          if (!/^\s*else\b/.test(k))
            for (var ye = $.cc.length - 1; ye >= 0; --ye) {
              var ke = $.cc[ye];
              if (ke == re)
                fe = fe.prev;
              else if (ke != Br && ke != ce)
                break;
            }
          for (; (fe.type == "stat" || fe.type == "form") && (ne == "}" || (ee = $.cc[$.cc.length - 1]) && (ee == Et || ee == Bt) && !/^[,\.=+\-*:?[\(]/.test(k)); )
            fe = fe.prev;
          f && fe.type == ")" && fe.prev.type == "stat" && (fe = fe.prev);
          var Tt = fe.type, qt = ne == Tt;
          return Tt == "vardef" ? fe.indented + ($.lastType == "operator" || $.lastType == "," ? fe.info.length + 1 : 0) : Tt == "form" && ne == "{" ? fe.indented : Tt == "form" ? fe.indented + s : Tt == "stat" ? fe.indented + (yi($, k) ? f || s : 0) : fe.info == "switch" && !qt && t.doubleIndentSwitch != !1 ? fe.indented + (/^(?:case|default)\b/.test(k) ? s : 2 * s) : fe.align ? fe.column + (qt ? 0 : 1) : fe.indented + (qt ? 0 : s);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: c ? null : "/*",
        blockCommentEnd: c ? null : "*/",
        blockCommentContinue: c ? null : " * ",
        lineComment: c ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: c ? "json" : "javascript",
        jsonldMode: d,
        jsonMode: c,
        expressionAllowed: un,
        skipExpression: function($) {
          U($, "atom", "atom", "true", new l.StringStream("", 2, null));
        }
      };
    }), l.registerHelper("wordChars", "javascript", /[\w$]/), l.defineMIME("text/javascript", "javascript"), l.defineMIME("text/ecmascript", "javascript"), l.defineMIME("application/javascript", "javascript"), l.defineMIME("application/x-javascript", "javascript"), l.defineMIME("application/ecmascript", "javascript"), l.defineMIME("application/json", { name: "javascript", json: !0 }), l.defineMIME("application/x-json", { name: "javascript", json: !0 }), l.defineMIME("application/manifest+json", { name: "javascript", json: !0 }), l.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), l.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), l.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
  });
})();
const dg = yn({
  name: "Struct",
  props: {
    modelValue: [Object, Array, Function],
    title: String,
    defaultValue: {
      require: !1
    },
    validate: Function
  },
  inject: ["designer"],
  data() {
    return {
      editor: null,
      visible: !1,
      err: !1,
      oldVal: null,
      t: this.designer.setupState.t
    };
  },
  watch: {
    modelValue() {
      this.load();
    },
    visible(u) {
      u ? this.load() : this.err = !1;
    }
  },
  methods: {
    load() {
      const u = _i(gd(this.modelValue ? pr(this.modelValue) : this.defaultValue));
      this.oldVal = u, this.$nextTick(() => {
        this.editor = fg(this.$refs.editor, {
          lineNumbers: !0,
          mode: "javascript",
          gutters: ["CodeMirror-lint-markers"],
          lint: !0,
          line: !0,
          tabSize: 2,
          lineWrapping: !0,
          value: u || ""
        });
      });
    },
    onOk() {
      const u = this.editor.getValue();
      let A;
      try {
        A = new Function("return " + u)();
      } catch (l) {
        this.err = ` (${l})`;
        return;
      }
      if (this.validate && this.validate(A) === !1) {
        this.err = !0;
        return;
      }
      this.visible = !1, _i(A) !== this.oldVal && this.$emit("update:modelValue", A);
    }
  }
}), cg = { class: "_fc_struct" }, vg = {
  key: 0,
  ref: "editor"
}, pg = { class: "dialog-footer" }, hg = {
  key: 0,
  class: "_fc_err"
};
function gg(u, A, l, o, t, s) {
  const f = tt("ElButton"), d = tt("ElDialog");
  return nt(), $t("div", cg, [
    $e(f, {
      onClick: A[0] || (A[0] = (c) => u.visible = !0),
      style: { width: "100%" }
    }, {
      default: Ve(() => [
        Wn(Gt(u.title || u.t("struct.title")), 1)
      ]),
      _: 1
    }),
    $e(d, {
      title: u.title || u.t("struct.title"),
      modelValue: u.visible,
      "onUpdate:modelValue": A[2] || (A[2] = (c) => u.visible = c),
      "close-on-click-modal": !1,
      "append-to-body": ""
    }, {
      footer: Ve(() => [
        it("span", pg, [
          u.err ? (nt(), $t("span", hg, Gt(u.t("struct.error")) + Gt(u.err !== !0 ? u.err : ""), 1)) : vn("", !0),
          $e(f, {
            onClick: A[1] || (A[1] = (c) => u.visible = !1),
            size: "small"
          }, {
            default: Ve(() => [
              Wn(Gt(u.t("struct.cancel")), 1)
            ]),
            _: 1
          }),
          $e(f, {
            type: "primary",
            onClick: u.onOk,
            size: "small"
          }, {
            default: Ve(() => [
              Wn(Gt(u.t("struct.submit")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: Ve(() => [
        u.visible ? (nt(), $t("div", vg, null, 512)) : vn("", !0)
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ]);
}
const mg = /* @__PURE__ */ qn(dg, [["render", gg]]);
function yg(u, A) {
  var l = null;
  return function(...o) {
    l !== null && clearTimeout(l), l = setTimeout(() => u.call(this, ...o), A);
  };
}
const Ag = yn({
  name: "Fetch",
  props: {
    modelValue: [Object, String],
    to: String
  },
  components: {
    DragForm: St.$form()
  },
  inject: ["designer"],
  computed: {
    formValue() {
      const u = this.modelValue;
      return u ? xt.String(u) ? {
        action: u
      } : u : {};
    }
  },
  data() {
    const u = this.designer.setupState.t;
    return {
      api: {},
      fetch: {},
      t: u,
      option: {
        form: {
          labelPosition: "right",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1
      },
      rule: [
        {
          type: "input",
          field: "action",
          title: u("fetch.action") + ": ",
          validate: [{ required: !0, message: u("fetch.actionRequired") }]
        },
        {
          type: "select",
          field: "method",
          title: u("fetch.method") + ": ",
          value: "GET",
          options: [
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" }
          ],
          control: [
            {
              value: "POST",
              rule: [
                {
                  type: "select",
                  field: "dataType",
                  title: u("fetch.dataType") + ": ",
                  value: "FormData",
                  options: [
                    { label: "FormData", value: "FormData" },
                    { label: "JSON", value: "JSON" }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "Struct",
          field: "data",
          title: u("fetch.data") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "headers",
          title: u("fetch.headers") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "parse",
          title: u("fetch.parse") + ": ",
          info: u("fetch.parseInfo"),
          value: null,
          props: {
            defaultValue: function(l) {
              return l;
            }
          }
        }
      ]
    };
  },
  methods: {
    parseFn(u) {
      return new Function("return " + u)();
    },
    _input() {
      this.api.submit((u) => {
        u.to = this.to || "options", this.$emit("update:modelValue", u);
      });
    },
    input: yg(function() {
      this._input();
    }, 1e3)
  },
  mounted() {
    this._input();
  }
}), xg = { class: "_fc_fetch" };
function Sg(u, A, l, o, t, s) {
  const f = tt("DragForm");
  return nt(), $t("div", xg, [
    $e(f, {
      api: u.api,
      "onUpdate:api": A[0] || (A[0] = (d) => u.api = d),
      modelValue: u.formValue,
      rule: u.rule,
      option: u.option,
      onChange: u.input
    }, null, 8, ["api", "modelValue", "rule", "option", "onChange"])
  ]);
}
const bg = /* @__PURE__ */ qn(Ag, [["render", Sg]]);
const Eg = yn({
  name: "Validate",
  inject: ["designer"],
  props: {
    modelValue: Array
  },
  components: {
    DragForm: St.$form()
  },
  watch: {
    modelValue(u) {
      this.formValue = this.parseValue(u);
    }
  },
  data() {
    const u = this.designer.setupState.t;
    return {
      formValue: {},
      t: u,
      option: {
        form: {
          labelPosition: "top",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1,
        appendValue: !0,
        formData: this.parseValue(this.modelValue)
      },
      rule: [
        {
          type: "select",
          field: "type",
          value: "",
          title: u("validate.type"),
          options: [
            { value: "", label: u("validate.typePlaceholder") },
            { value: "string", label: "String" },
            { value: "array", label: "Array" },
            { value: "number", label: "Number" },
            { value: "integer", label: "Integer" },
            { value: "float", label: "Float" },
            { value: "object", label: "Object" },
            { value: "date", label: "Date" },
            { value: "url", label: "url" },
            { value: "hex", label: "hex" },
            { value: "email", label: "email" }
          ],
          control: [
            {
              handle: (A) => !!A,
              rule: [
                {
                  type: "group",
                  field: "validate",
                  props: {
                    expand: 1,
                    sortBtn: !1,
                    rule: [
                      {
                        type: "select",
                        title: u("validate.trigger"),
                        field: "trigger",
                        value: "change",
                        options: [
                          { label: "change", value: "change" },
                          { label: "submit", value: "submit" },
                          { label: "blur", value: "blur" }
                        ]
                      },
                      {
                        type: "hidden",
                        field: "validator",
                        value: void 0
                      },
                      {
                        type: "select",
                        title: u("validate.mode"),
                        field: "mode",
                        options: [
                          { value: "required", label: u("validate.modes.required") },
                          { value: "pattern", label: u("validate.modes.pattern") },
                          { value: "min", label: u("validate.modes.min") },
                          { value: "max", label: u("validate.modes.max") },
                          { value: "len", label: u("validate.modes.len") }
                        ],
                        value: "required",
                        control: [
                          {
                            value: "required",
                            rule: [
                              {
                                type: "hidden",
                                field: "required",
                                value: !0
                              }
                            ]
                          },
                          {
                            value: "pattern",
                            rule: [
                              {
                                type: "input",
                                field: "pattern",
                                title: u("validate.modes.pattern")
                              }
                            ]
                          },
                          {
                            value: "min",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "min",
                                title: u("validate.modes.min")
                              }
                            ]
                          },
                          {
                            value: "max",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "max",
                                title: u("validate.modes.max")
                              }
                            ]
                          },
                          {
                            value: "len",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "len",
                                title: u("validate.modes.len")
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: "input",
                        title: u("validate.message"),
                        field: "message",
                        value: "",
                        children: [
                          {
                            type: "span",
                            slot: "append",
                            inject: !0,
                            class: "append-msg",
                            on: {
                              click: (A) => {
                                const l = this.designer.setupState.activeRule.title;
                                this.designer.setupState.activeRule && A.api.setValue("message", u(A.api.form.mode !== "required" ? "validate.autoMode" : "validate.autoRequired", { title: l }));
                              }
                            },
                            children: [u("validate.auto")]
                          }
                        ]
                      }
                    ]
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onInput: function(u) {
      let A = [];
      const { validate: l, type: o } = pr(u);
      o && (!l || !l.length) || (o && (l.forEach((t) => {
        t.type = o;
      }), A = [...l]), this.$emit("update:modelValue", A));
    },
    parseValue(u) {
      let A = {
        validate: u ? [...u] : [],
        type: u.length ? u[0].type || "string" : void 0
      };
      return A.validate.forEach((l) => {
        l.mode || Object.keys(l).forEach((o) => {
          ["message", "type", "trigger", "mode"].indexOf(o) < 0 && (l.mode = o);
        });
      }), A;
    }
  }
});
function Cg(u, A, l, o, t, s) {
  const f = tt("DragForm");
  return nt(), Un(f, {
    class: "_fc-validate",
    rule: u.rule,
    option: u.option,
    modelValue: u.formValue,
    "onUpdate:modelValue": u.onInput
  }, null, 8, ["rule", "option", "modelValue", "onUpdate:modelValue"]);
}
const Tg = /* @__PURE__ */ qn(Eg, [["render", Cg]]), wg = yn({
  name: "DragBox",
  props: ["rule", "tag", "formCreateInject"],
  render(u) {
    const A = { ...u.$props.rule.props, ...u.$attrs };
    let l = A.tag + "-drag drag-box";
    Object.keys(u.$slots).length || (l += " " + A.tag + "-holder"), A.class = l, A.modelValue = [...this.$props.formCreateInject.children];
    const o = {};
    return u.$slots.default && u.$slots.default().forEach((s) => {
      s.key && (o[s.key] = s);
    }), ta(Es, A, {
      item: ({ element: t }) => {
        var s;
        return (s = t == null ? void 0 : t.__fc__) != null && s.key ? ta("div", {}, o[t.__fc__.key + "fc"]) : void 0;
      }
    });
  }
});
const Dg = yn({
  name: "Required",
  props: {
    modelValue: {}
  },
  inject: ["designer"],
  watch: {
    required() {
      this.update();
    },
    requiredMsg() {
      this.update();
    },
    modelValue(u) {
      const A = xt.String(u);
      this.required = u === void 0 ? !1 : A ? !0 : !!u, this.requiredMsg = A ? u : "";
    }
  },
  data() {
    const u = xt.String(this.modelValue);
    return {
      t: this.designer.setupState.t,
      required: this.modelValue === void 0 ? !1 : u ? !0 : !!this.modelValue,
      requiredMsg: u ? this.modelValue : ""
    };
  },
  methods: {
    update() {
      let u;
      this.required === !1 ? u = !1 : u = this.requiredMsg || !0, this.$emit("update:modelValue", u);
    }
  }
}), Mg = { class: "_fc-required" };
function Rg(u, A, l, o, t, s) {
  const f = tt("ElSwitch"), d = tt("ElInput");
  return nt(), $t("div", Mg, [
    $e(f, {
      modelValue: u.required,
      "onUpdate:modelValue": A[0] || (A[0] = (c) => u.required = c)
    }, null, 8, ["modelValue"]),
    u.required ? (nt(), Un(d, {
      key: 0,
      modelValue: u.requiredMsg,
      "onUpdate:modelValue": A[1] || (A[1] = (c) => u.requiredMsg = c),
      placeholder: u.t("validate.requiredPlaceholder")
    }, null, 8, ["modelValue", "placeholder"])) : vn("", !0)
  ]);
}
const Pg = /* @__PURE__ */ qn(Dg, [["render", Rg]]);
const Ig = yn({
  name: "TableOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      column: [{ label: "label", key: "label" }, { label: "value", key: "value" }],
      t: this.designer.setupState.t
    };
  },
  created() {
    Array.isArray(this.modelValue) || this.$emit("input", []);
  },
  methods: {
    onInput(u) {
      u.label !== void 0 && u.value !== void 0 && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.modelValue);
    },
    add() {
      this.modelValue.push(this.column.reduce((u, A) => (u[A.key] = "", u), {}));
    },
    del(u) {
      this.modelValue.splice(u, 1), this.input(this.modelValue);
    }
  }
}), Lg = (u) => (dd("data-v-0d635ce0"), u = u(), cd(), u), Ng = { class: "_fc_table_opt" }, Og = ["onClick"], Fg = /* @__PURE__ */ Lg(() => /* @__PURE__ */ it("i", { class: "fc-icon icon-add" }, null, -1));
function Bg(u, A, l, o, t, s) {
  const f = tt("el-input"), d = tt("el-table-column"), c = tt("el-table"), m = tt("el-button");
  return nt(), $t("div", Ng, [
    $e(c, {
      data: u.modelValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: Ve(() => [
        (nt(!0), $t(sd, null, ud(u.column, (T, x) => (nt(), Un(d, {
          key: T.label + x,
          label: T.label
        }, {
          default: Ve((w) => [
            $e(f, {
              size: "small",
              modelValue: w.row[T.key] || "",
              "onUpdate:modelValue": (E) => (w.row[T.key] = E, u.onInput(w.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1032, ["label"]))), 128)),
        $e(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: u.t("tableOptions.handle")
        }, {
          default: Ve((T) => [
            it("i", {
              class: "fc-icon icon-delete",
              onClick: (x) => u.del(T.$index)
            }, null, 8, Og)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    $e(m, {
      link: "",
      type: "primary",
      onClick: u.add
    }, {
      default: Ve(() => [
        Fg,
        Wn(" " + Gt(u.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Hg = /* @__PURE__ */ qn(Ig, [["render", Bg], ["__scopeId", "data-v-0d635ce0"]]);
const Ug = yn({
  name: "TableColumnOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      t: this.designer.setupState.t
    };
  },
  created() {
    window.console.log(this.modelValue), Array.isArray(this.modelValue) || this.$emit("input", []);
  },
  methods: {
    onInput(u) {
      u.label !== void 0 && u.value !== void 0 && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.modelValue);
    },
    add() {
      this.modelValue.push({ label: "", value: "", slot: !1 });
    },
    del(u) {
      this.modelValue.splice(u, 1), this.input(this.modelValue);
    }
  }
}), zg = (u) => (dd("data-v-f5d121da"), u = u(), cd(), u), Wg = { class: "_fc_table_opt" }, $g = ["onClick"], jg = /* @__PURE__ */ zg(() => /* @__PURE__ */ it("i", { class: "fc-icon icon-add" }, null, -1));
function Vg(u, A, l, o, t, s) {
  const f = tt("el-input"), d = tt("el-table-column"), c = tt("el-checkbox"), m = tt("el-table"), T = tt("el-button");
  return nt(), $t("div", Wg, [
    $e(m, {
      data: u.modelValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: Ve(() => [
        $e(d, { label: "label" }, {
          default: Ve((x) => [
            $e(f, {
              size: "small",
              modelValue: x.row.label || "",
              "onUpdate:modelValue": (w) => (x.row.label = w, u.onInput(x.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        $e(d, { label: "value" }, {
          default: Ve((x) => [
            $e(f, {
              size: "small",
              modelValue: x.row.value || "",
              "onUpdate:modelValue": (w) => (x.row.value = w, u.onInput(x.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        $e(d, { label: "slot" }, {
          default: Ve((x) => [
            $e(c, {
              size: "small",
              modelValue: x.row.slot || "",
              "onUpdate:modelValue": (w) => (x.row.slot = w, u.onInput(x.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        $e(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: u.t("tableOptions.handle")
        }, {
          default: Ve((x) => [
            it("i", {
              class: "fc-icon icon-delete",
              onClick: (w) => u.del(x.$index)
            }, null, 8, $g)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    $e(T, {
      link: "",
      type: "primary",
      onClick: u.add
    }, {
      default: Ve(() => [
        jg,
        Wn(" " + Gt(u.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Yg = /* @__PURE__ */ qn(Ug, [["render", Vg], ["__scopeId", "data-v-f5d121da"]]);
/*!
 * @form-create/component-wangeditor v3.1.20
 * (c) 2018-2023 xaboy
 * Github https://github.com/xaboy/form-create with wangeditor
 * Released under the MIT License.
 */
function od(u, A) {
  var l = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(u);
    A && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(u, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function Qg(u) {
  for (var A = 1; A < arguments.length; A++) {
    var l = arguments[A] != null ? arguments[A] : {};
    A % 2 ? od(Object(l), !0).forEach(function(o) {
      kg(u, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(l)) : od(Object(l)).forEach(function(o) {
      Object.defineProperty(u, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return u;
}
function It(u) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? It = function(A) {
    return typeof A;
  } : It = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, It(u);
}
function kg(u, A, l) {
  return A in u ? Object.defineProperty(u, A, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[A] = l, u;
}
function Gg(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Wd = { exports: {} };
(function(u, A) {
  (function(o, t) {
    u.exports = t();
  })(window, function() {
    return function(l) {
      var o = {};
      function t(s) {
        if (o[s])
          return o[s].exports;
        var f = o[s] = { i: s, l: !1, exports: {} };
        return l[s].call(f.exports, f, f.exports, t), f.l = !0, f.exports;
      }
      return t.m = l, t.c = o, t.d = function(s, f, d) {
        t.o(s, f) || Object.defineProperty(s, f, { enumerable: !0, get: d });
      }, t.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, t.t = function(s, f) {
        if (f & 1 && (s = t(s)), f & 8 || f & 4 && It(s) === "object" && s && s.__esModule)
          return s;
        var d = /* @__PURE__ */ Object.create(null);
        if (t.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: s }), f & 2 && typeof s != "string")
          for (var c in s)
            t.d(d, c, function(m) {
              return s[m];
            }.bind(null, c));
        return d;
      }, t.n = function(s) {
        var f = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return t.d(f, "a", f), f;
      }, t.o = function(s, f) {
        return Object.prototype.hasOwnProperty.call(s, f);
      }, t.p = "", t(t.s = 141);
    }([function(l, o) {
      function t(s) {
        return s && s.__esModule ? s : { default: s };
      }
      l.exports = t;
    }, function(l, o, t) {
      l.exports = t(142);
    }, function(l, o, t) {
      t.r(o), t.d(o, "__extends", function() {
        return f;
      }), t.d(o, "__assign", function() {
        return d;
      }), t.d(o, "__rest", function() {
        return c;
      }), t.d(o, "__decorate", function() {
        return m;
      }), t.d(o, "__param", function() {
        return T;
      }), t.d(o, "__metadata", function() {
        return x;
      }), t.d(o, "__awaiter", function() {
        return w;
      }), t.d(o, "__generator", function() {
        return E;
      }), t.d(o, "__createBinding", function() {
        return g;
      }), t.d(o, "__exportStar", function() {
        return S;
      }), t.d(o, "__values", function() {
        return v;
      }), t.d(o, "__read", function() {
        return M;
      }), t.d(o, "__spread", function() {
        return y;
      }), t.d(o, "__spreadArrays", function() {
        return h;
      }), t.d(o, "__spreadArray", function() {
        return b;
      }), t.d(o, "__await", function() {
        return C;
      }), t.d(o, "__asyncGenerator", function() {
        return R;
      }), t.d(o, "__asyncDelegator", function() {
        return O;
      }), t.d(o, "__asyncValues", function() {
        return B;
      }), t.d(o, "__makeTemplateObject", function() {
        return F;
      }), t.d(o, "__importStar", function() {
        return I;
      }), t.d(o, "__importDefault", function() {
        return U;
      }), t.d(o, "__classPrivateFieldGet", function() {
        return H;
      }), t.d(o, "__classPrivateFieldSet", function() {
        return j;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
      var s = function(V, Q) {
        return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(K, q) {
          K.__proto__ = q;
        } || function(K, q) {
          for (var X in q)
            Object.prototype.hasOwnProperty.call(q, X) && (K[X] = q[X]);
        }, s(V, Q);
      };
      function f(P, V) {
        if (typeof V != "function" && V !== null)
          throw new TypeError("Class extends value " + String(V) + " is not a constructor or null");
        s(P, V);
        function Q() {
          this.constructor = P;
        }
        P.prototype = V === null ? Object.create(V) : (Q.prototype = V.prototype, new Q());
      }
      var d = function() {
        return d = Object.assign || function(Q) {
          for (var K, q = 1, X = arguments.length; q < X; q++) {
            K = arguments[q];
            for (var _ in K)
              Object.prototype.hasOwnProperty.call(K, _) && (Q[_] = K[_]);
          }
          return Q;
        }, d.apply(this, arguments);
      };
      function c(P, V) {
        var Q = {};
        for (var K in P)
          Object.prototype.hasOwnProperty.call(P, K) && V.indexOf(K) < 0 && (Q[K] = P[K]);
        if (P != null && typeof Object.getOwnPropertySymbols == "function")
          for (var q = 0, K = Object.getOwnPropertySymbols(P); q < K.length; q++)
            V.indexOf(K[q]) < 0 && Object.prototype.propertyIsEnumerable.call(P, K[q]) && (Q[K[q]] = P[K[q]]);
        return Q;
      }
      function m(P, V, Q, K) {
        var q = arguments.length, X = q < 3 ? V : K === null ? K = Object.getOwnPropertyDescriptor(V, Q) : K, _;
        if ((typeof Reflect > "u" ? "undefined" : It(Reflect)) === "object" && typeof Reflect.decorate == "function")
          X = Reflect.decorate(P, V, Q, K);
        else
          for (var le = P.length - 1; le >= 0; le--)
            (_ = P[le]) && (X = (q < 3 ? _(X) : q > 3 ? _(V, Q, X) : _(V, Q)) || X);
        return q > 3 && X && Object.defineProperty(V, Q, X), X;
      }
      function T(P, V) {
        return function(Q, K) {
          V(Q, K, P);
        };
      }
      function x(P, V) {
        if ((typeof Reflect > "u" ? "undefined" : It(Reflect)) === "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(P, V);
      }
      function w(P, V, Q, K) {
        function q(X) {
          return X instanceof Q ? X : new Q(function(_) {
            _(X);
          });
        }
        return new (Q || (Q = Promise))(function(X, _) {
          function le(ce) {
            try {
              ve(K.next(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function Se(ce) {
            try {
              ve(K.throw(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function ve(ce) {
            ce.done ? X(ce.value) : q(ce.value).then(le, Se);
          }
          ve((K = K.apply(P, V || [])).next());
        });
      }
      function E(P, V) {
        var Q = { label: 0, sent: function() {
          if (X[0] & 1)
            throw X[1];
          return X[1];
        }, trys: [], ops: [] }, K, q, X, _;
        return _ = { next: le(0), throw: le(1), return: le(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
          return this;
        }), _;
        function le(ve) {
          return function(ce) {
            return Se([ve, ce]);
          };
        }
        function Se(ve) {
          if (K)
            throw new TypeError("Generator is already executing.");
          for (; Q; )
            try {
              if (K = 1, q && (X = ve[0] & 2 ? q.return : ve[0] ? q.throw || ((X = q.return) && X.call(q), 0) : q.next) && !(X = X.call(q, ve[1])).done)
                return X;
              switch (q = 0, X && (ve = [ve[0] & 2, X.value]), ve[0]) {
                case 0:
                case 1:
                  X = ve;
                  break;
                case 4:
                  return Q.label++, { value: ve[1], done: !1 };
                case 5:
                  Q.label++, q = ve[1], ve = [0];
                  continue;
                case 7:
                  ve = Q.ops.pop(), Q.trys.pop();
                  continue;
                default:
                  if (X = Q.trys, !(X = X.length > 0 && X[X.length - 1]) && (ve[0] === 6 || ve[0] === 2)) {
                    Q = 0;
                    continue;
                  }
                  if (ve[0] === 3 && (!X || ve[1] > X[0] && ve[1] < X[3])) {
                    Q.label = ve[1];
                    break;
                  }
                  if (ve[0] === 6 && Q.label < X[1]) {
                    Q.label = X[1], X = ve;
                    break;
                  }
                  if (X && Q.label < X[2]) {
                    Q.label = X[2], Q.ops.push(ve);
                    break;
                  }
                  X[2] && Q.ops.pop(), Q.trys.pop();
                  continue;
              }
              ve = V.call(P, Q);
            } catch (ce) {
              ve = [6, ce], q = 0;
            } finally {
              K = X = 0;
            }
          if (ve[0] & 5)
            throw ve[1];
          return { value: ve[0] ? ve[1] : void 0, done: !0 };
        }
      }
      var g = Object.create ? function(P, V, Q, K) {
        K === void 0 && (K = Q), Object.defineProperty(P, K, { enumerable: !0, get: function() {
          return V[Q];
        } });
      } : function(P, V, Q, K) {
        K === void 0 && (K = Q), P[K] = V[Q];
      };
      function S(P, V) {
        for (var Q in P)
          Q !== "default" && !Object.prototype.hasOwnProperty.call(V, Q) && g(V, P, Q);
      }
      function v(P) {
        var V = typeof Symbol == "function" && Symbol.iterator, Q = V && P[V], K = 0;
        if (Q)
          return Q.call(P);
        if (P && typeof P.length == "number")
          return { next: function() {
            return P && K >= P.length && (P = void 0), { value: P && P[K++], done: !P };
          } };
        throw new TypeError(V ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function M(P, V) {
        var Q = typeof Symbol == "function" && P[Symbol.iterator];
        if (!Q)
          return P;
        var K = Q.call(P), q, X = [], _;
        try {
          for (; (V === void 0 || V-- > 0) && !(q = K.next()).done; )
            X.push(q.value);
        } catch (le) {
          _ = { error: le };
        } finally {
          try {
            q && !q.done && (Q = K.return) && Q.call(K);
          } finally {
            if (_)
              throw _.error;
          }
        }
        return X;
      }
      function y() {
        for (var P = [], V = 0; V < arguments.length; V++)
          P = P.concat(M(arguments[V]));
        return P;
      }
      function h() {
        for (var P = 0, V = 0, Q = arguments.length; V < Q; V++)
          P += arguments[V].length;
        for (var K = Array(P), q = 0, V = 0; V < Q; V++)
          for (var X = arguments[V], _ = 0, le = X.length; _ < le; _++, q++)
            K[q] = X[_];
        return K;
      }
      function b(P, V) {
        for (var Q = 0, K = V.length, q = P.length; Q < K; Q++, q++)
          P[q] = V[Q];
        return P;
      }
      function C(P) {
        return this instanceof C ? (this.v = P, this) : new C(P);
      }
      function R(P, V, Q) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var K = Q.apply(P, V || []), q, X = [];
        return q = {}, _("next"), _("throw"), _("return"), q[Symbol.asyncIterator] = function() {
          return this;
        }, q;
        function _(re) {
          K[re] && (q[re] = function(se) {
            return new Promise(function(pe, Pe) {
              X.push([re, se, pe, Pe]) > 1 || le(re, se);
            });
          });
        }
        function le(re, se) {
          try {
            Se(K[re](se));
          } catch (pe) {
            ae(X[0][3], pe);
          }
        }
        function Se(re) {
          re.value instanceof C ? Promise.resolve(re.value.v).then(ve, ce) : ae(X[0][2], re);
        }
        function ve(re) {
          le("next", re);
        }
        function ce(re) {
          le("throw", re);
        }
        function ae(re, se) {
          re(se), X.shift(), X.length && le(X[0][0], X[0][1]);
        }
      }
      function O(P) {
        var V, Q;
        return V = {}, K("next"), K("throw", function(q) {
          throw q;
        }), K("return"), V[Symbol.iterator] = function() {
          return this;
        }, V;
        function K(q, X) {
          V[q] = P[q] ? function(_) {
            return (Q = !Q) ? { value: C(P[q](_)), done: q === "return" } : X ? X(_) : _;
          } : X;
        }
      }
      function B(P) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var V = P[Symbol.asyncIterator], Q;
        return V ? V.call(P) : (P = typeof v == "function" ? v(P) : P[Symbol.iterator](), Q = {}, K("next"), K("throw"), K("return"), Q[Symbol.asyncIterator] = function() {
          return this;
        }, Q);
        function K(X) {
          Q[X] = P[X] && function(_) {
            return new Promise(function(le, Se) {
              _ = P[X](_), q(le, Se, _.done, _.value);
            });
          };
        }
        function q(X, _, le, Se) {
          Promise.resolve(Se).then(function(ve) {
            X({ value: ve, done: le });
          }, _);
        }
      }
      function F(P, V) {
        return Object.defineProperty ? Object.defineProperty(P, "raw", { value: V }) : P.raw = V, P;
      }
      var z = Object.create ? function(P, V) {
        Object.defineProperty(P, "default", { enumerable: !0, value: V });
      } : function(P, V) {
        P.default = V;
      };
      function I(P) {
        if (P && P.__esModule)
          return P;
        var V = {};
        if (P != null)
          for (var Q in P)
            Q !== "default" && Object.prototype.hasOwnProperty.call(P, Q) && g(V, P, Q);
        return z(V, P), V;
      }
      function U(P) {
        return P && P.__esModule ? P : { default: P };
      }
      function H(P, V) {
        if (!V.has(P))
          throw new TypeError("attempted to get private field on non-instance");
        return V.get(P);
      }
      function j(P, V, Q) {
        if (!V.has(P))
          throw new TypeError("attempted to set private field on non-instance");
        return V.set(P, Q), Q;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(89)), c = s(t(4)), m = s(t(26)), T = s(t(17)), x = s(t(120)), w = s(t(27)), E = s(t(91)), g = s(t(70)), S = s(t(44)), v = s(t(57));
      (0, f.default)(o, "__esModule", { value: !0 }), o.DomElement = void 0;
      var M = t(2), y = t(6), h = [];
      function b(z) {
        var I = document.createElement("div");
        I.innerHTML = z;
        var U = I.children;
        return y.toArray(U);
      }
      function C(z) {
        return z ? z instanceof HTMLCollection || z instanceof NodeList : !1;
      }
      function R(z) {
        var I = document.querySelectorAll(z);
        return y.toArray(I);
      }
      function O(z) {
        var I = [], U = [];
        return (0, d.default)(z) ? I = z : I = z.split(";"), (0, c.default)(I).call(I, function(H) {
          var j, P = (0, m.default)(j = H.split(":")).call(j, function(V) {
            return (0, T.default)(V).call(V);
          });
          P.length === 2 && U.push(P[0] + ":" + P[1]);
        }), U;
      }
      var B = function() {
        function z(I) {
          if (this.elems = [], this.length = this.elems.length, this.dataSource = new x.default(), !!I) {
            if (I instanceof z)
              return I;
            var U = [], H = I instanceof Node ? I.nodeType : -1;
            if (this.selector = I, H === 1 || H === 9)
              U = [I];
            else if (C(I))
              U = y.toArray(I);
            else if (I instanceof Array)
              U = I;
            else if (typeof I == "string") {
              var j, P = (0, T.default)(j = I.replace(`/
/mg`, "")).call(j);
              (0, w.default)(P).call(P, "<") === 0 ? U = b(P) : U = R(P);
            }
            var V = U.length;
            if (!V)
              return this;
            for (var Q = 0; Q < V; Q++)
              this.elems.push(U[Q]);
            this.length = V;
          }
        }
        return (0, f.default)(z.prototype, "id", {
          get: function() {
            return this.elems[0].id;
          },
          enumerable: !1,
          configurable: !0
        }), z.prototype.forEach = function(I) {
          for (var U = 0; U < this.length; U++) {
            var H = this.elems[U], j = I.call(H, H, U);
            if (j === !1)
              break;
          }
          return this;
        }, z.prototype.clone = function(I) {
          var U;
          I === void 0 && (I = !1);
          var H = [];
          return (0, c.default)(U = this.elems).call(U, function(j) {
            H.push(j.cloneNode(!!I));
          }), F(H);
        }, z.prototype.get = function(I) {
          I === void 0 && (I = 0);
          var U = this.length;
          return I >= U && (I = I % U), F(this.elems[I]);
        }, z.prototype.first = function() {
          return this.get(0);
        }, z.prototype.last = function() {
          var I = this.length;
          return this.get(I - 1);
        }, z.prototype.on = function(I, U, H) {
          var j;
          return I ? (typeof U == "function" && (H = U, U = ""), (0, c.default)(j = this).call(j, function(P) {
            if (!U) {
              P.addEventListener(I, H);
              return;
            }
            var V = function(K) {
              var q = K.target;
              q.matches(U) && H.call(q, K);
            };
            P.addEventListener(I, V), h.push({ elem: P, selector: U, fn: H, agentFn: V });
          })) : this;
        }, z.prototype.off = function(I, U, H) {
          var j;
          return I ? (typeof U == "function" && (H = U, U = ""), (0, c.default)(j = this).call(j, function(P) {
            if (U) {
              for (var V = -1, Q = 0; Q < h.length; Q++) {
                var K = h[Q];
                if (K.selector === U && K.fn === H && K.elem === P) {
                  V = Q;
                  break;
                }
              }
              if (V !== -1) {
                var q = (0, E.default)(h).call(h, V, 1)[0].agentFn;
                P.removeEventListener(I, q);
              }
            } else
              P.removeEventListener(I, H);
          })) : this;
        }, z.prototype.attr = function(I, U) {
          var H;
          return U == null ? this.elems[0].getAttribute(I) || "" : (0, c.default)(H = this).call(H, function(j) {
            j.setAttribute(I, U);
          });
        }, z.prototype.removeAttr = function(I) {
          var U;
          (0, c.default)(U = this).call(U, function(H) {
            H.removeAttribute(I);
          });
        }, z.prototype.addClass = function(I) {
          var U;
          return I ? (0, c.default)(U = this).call(U, function(H) {
            if (H.className) {
              var j = H.className.split(/\s/);
              j = (0, g.default)(j).call(j, function(P) {
                return !!(0, T.default)(P).call(P);
              }), (0, w.default)(j).call(j, I) < 0 && j.push(I), H.className = j.join(" ");
            } else
              H.className = I;
          }) : this;
        }, z.prototype.removeClass = function(I) {
          var U;
          return I ? (0, c.default)(U = this).call(U, function(H) {
            if (!!H.className) {
              var j = H.className.split(/\s/);
              j = (0, g.default)(j).call(j, function(P) {
                return P = (0, T.default)(P).call(P), !(!P || P === I);
              }), H.className = j.join(" ");
            }
          }) : this;
        }, z.prototype.hasClass = function(I) {
          if (!I)
            return !1;
          var U = this.elems[0];
          if (!U.className)
            return !1;
          var H = U.className.split(/\s/);
          return (0, S.default)(H).call(H, I);
        }, z.prototype.css = function(I, U) {
          var H, j;
          return U == "" ? j = "" : j = I + ":" + U + ";", (0, c.default)(H = this).call(H, function(P) {
            var V, Q = (0, T.default)(V = P.getAttribute("style") || "").call(V);
            if (Q) {
              var K = O(Q);
              K = (0, m.default)(K).call(K, function(q) {
                return (0, w.default)(q).call(q, I) === 0 ? j : q;
              }), j != "" && (0, w.default)(K).call(K, j) < 0 && K.push(j), j == "" && (K = O(K)), P.setAttribute("style", K.join("; "));
            } else
              P.setAttribute("style", j);
          });
        }, z.prototype.getBoundingClientRect = function() {
          var I = this.elems[0];
          return I.getBoundingClientRect();
        }, z.prototype.show = function() {
          return this.css("display", "block");
        }, z.prototype.hide = function() {
          return this.css("display", "none");
        }, z.prototype.children = function() {
          var I = this.elems[0];
          return I ? F(I.children) : null;
        }, z.prototype.childNodes = function() {
          var I = this.elems[0];
          return I ? F(I.childNodes) : null;
        }, z.prototype.replaceChildAll = function(I) {
          for (var U = this.getNode(), H = this.elems[0]; H.hasChildNodes(); )
            U.firstChild && H.removeChild(U.firstChild);
          this.append(I);
        }, z.prototype.append = function(I) {
          var U;
          return (0, c.default)(U = this).call(U, function(H) {
            (0, c.default)(I).call(I, function(j) {
              H.appendChild(j);
            });
          });
        }, z.prototype.remove = function() {
          var I;
          return (0, c.default)(I = this).call(I, function(U) {
            if (U.remove)
              U.remove();
            else {
              var H = U.parentElement;
              H && H.removeChild(U);
            }
          });
        }, z.prototype.isContain = function(I) {
          var U = this.elems[0], H = I.elems[0];
          return U.contains(H);
        }, z.prototype.getNodeName = function() {
          var I = this.elems[0];
          return I.nodeName;
        }, z.prototype.getNode = function(I) {
          I === void 0 && (I = 0);
          var U;
          return U = this.elems[I], U;
        }, z.prototype.find = function(I) {
          var U = this.elems[0];
          return F(U.querySelectorAll(I));
        }, z.prototype.text = function(I) {
          if (I) {
            var H;
            return (0, c.default)(H = this).call(H, function(j) {
              j.innerHTML = I;
            });
          } else {
            var U = this.elems[0];
            return U.innerHTML.replace(/<[^>]+>/g, function() {
              return "";
            });
          }
        }, z.prototype.html = function(I) {
          var U = this.elems[0];
          return I ? (U.innerHTML = I, this) : U.innerHTML;
        }, z.prototype.val = function() {
          var I, U = this.elems[0];
          return (0, T.default)(I = U.value).call(I);
        }, z.prototype.focus = function() {
          var I;
          return (0, c.default)(I = this).call(I, function(U) {
            U.focus();
          });
        }, z.prototype.prev = function() {
          var I = this.elems[0];
          return F(I.previousElementSibling);
        }, z.prototype.next = function() {
          var I = this.elems[0];
          return F(I.nextElementSibling);
        }, z.prototype.getNextSibling = function() {
          var I = this.elems[0];
          return F(I.nextSibling);
        }, z.prototype.parent = function() {
          var I = this.elems[0];
          return F(I.parentElement);
        }, z.prototype.parentUntil = function(I, U) {
          var H = U || this.elems[0];
          if (H.nodeName === "BODY")
            return null;
          var j = H.parentElement;
          return j === null ? null : j.matches(I) ? F(j) : this.parentUntil(I, j);
        }, z.prototype.parentUntilEditor = function(I, U, H) {
          var j = H || this.elems[0];
          if (F(j).equal(U.$textContainerElem) || F(j).equal(U.$toolbarElem))
            return null;
          var P = j.parentElement;
          return P === null ? null : P.matches(I) ? F(P) : this.parentUntilEditor(I, U, P);
        }, z.prototype.equal = function(I) {
          return I instanceof z ? this.elems[0] === I.elems[0] : I instanceof HTMLElement ? this.elems[0] === I : !1;
        }, z.prototype.insertBefore = function(I) {
          var U, H = F(I), j = H.elems[0];
          return j ? (0, c.default)(U = this).call(U, function(P) {
            var V = j.parentNode;
            V == null || V.insertBefore(P, j);
          }) : this;
        }, z.prototype.insertAfter = function(I) {
          var U, H = F(I), j = H.elems[0], P = j && j.nextSibling;
          return j ? (0, c.default)(U = this).call(U, function(V) {
            var Q = j.parentNode;
            P ? Q.insertBefore(V, P) : Q.appendChild(V);
          }) : this;
        }, z.prototype.data = function(I, U) {
          if (U != null)
            this.dataSource.set(I, U);
          else
            return this.dataSource.get(I);
        }, z.prototype.getNodeTop = function(I) {
          if (this.length < 1)
            return this;
          var U = this.parent();
          return I.$textElem.equal(this) || I.$textElem.equal(U) ? this : (U.prior = this, U.getNodeTop(I));
        }, z.prototype.getOffsetData = function() {
          var I = this.elems[0];
          return { top: I.offsetTop, left: I.offsetLeft, width: I.offsetWidth, height: I.offsetHeight, parent: I.offsetParent };
        }, z.prototype.scrollTop = function(I) {
          var U = this.elems[0];
          U.scrollTo({ top: I });
        }, z;
      }();
      o.DomElement = B;
      function F() {
        for (var z = [], I = 0; I < arguments.length; I++)
          z[I] = arguments[I];
        return new ((0, v.default)(B).apply(B, M.__spreadArrays([void 0], z)))();
      }
      o.default = F;
    }, function(l, o, t) {
      l.exports = t(180);
    }, function(l, o, t) {
      var s = t(8), f = t(71).f, d = t(100), c = t(9), m = t(39), T = t(19), x = t(16), w = function(g) {
        var S = function(M, y, h) {
          if (this instanceof g) {
            switch (arguments.length) {
              case 0:
                return new g();
              case 1:
                return new g(M);
              case 2:
                return new g(M, y);
            }
            return new g(M, y, h);
          }
          return g.apply(this, arguments);
        };
        return S.prototype = g.prototype, S;
      };
      l.exports = function(E, g) {
        var S = E.target, v = E.global, M = E.stat, y = E.proto, h = v ? s : M ? s[S] : (s[S] || {}).prototype, b = v ? c : c[S] || (c[S] = {}), C = b.prototype, R, O, B, F, z, I, U, H, j;
        for (F in g)
          R = d(v ? F : S + (M ? "." : "#") + F, E.forced), O = !R && h && x(h, F), I = b[F], O && (E.noTargetGet ? (j = f(h, F), U = j && j.value) : U = h[F]), z = O && U ? U : g[F], !(O && It(I) === It(z)) && (E.bind && O ? H = m(z, s) : E.wrap && O ? H = w(z) : y && typeof z == "function" ? H = m(Function.call, z) : H = z, (E.sham || z && z.sham || I && I.sham) && T(H, "sham", !0), b[F] = H, y && (B = S + "Prototype", x(c, B) || T(c, B, {}), c[B][F] = z, E.real && C && !C[F] && T(C, F, z)));
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(92)), d = s(t(1)), c = s(t(256)), m = s(t(45)), T = s(t(46)), x = s(t(89)), w = s(t(26));
      (0, d.default)(o, "__esModule", { value: !0 }), o.hexToRgb = o.getRandomCode = o.toArray = o.deepClone = o.isFunction = o.debounce = o.throttle = o.arrForEach = o.forEach = o.replaceSpecialSymbol = o.replaceHtmlSymbol = o.getRandom = o.UA = void 0;
      var E = t(2), g = function() {
        function I() {
          this._ua = navigator.userAgent;
          var U = this._ua.match(/(Edge?)\/(\d+)/);
          this.isOldEdge = !!(U && U[1] == "Edge" && (0, c.default)(U[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
        }
        return I.prototype.isIE = function() {
          return "ActiveXObject" in window;
        }, I.prototype.isWebkit = function() {
          return /webkit/i.test(this._ua);
        }, I;
      }();
      o.UA = new g();
      function S(I) {
        var U;
        return I === void 0 && (I = ""), I + (0, m.default)(U = Math.random().toString()).call(U, 2);
      }
      o.getRandom = S;
      function v(I) {
        return I.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
      }
      o.replaceHtmlSymbol = v;
      function M(I) {
        return I.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
      }
      o.replaceSpecialSymbol = M;
      function y(I, U) {
        for (var H in I)
          if (Object.prototype.hasOwnProperty.call(I, H)) {
            var j = U(H, I[H]);
            if (j === !1)
              break;
          }
      }
      o.forEach = y;
      function h(I, U) {
        var H, j, P, V = I.length || 0;
        for (H = 0; H < V && (j = I[H], P = U.call(I, j, H), P !== !1); H++)
          ;
      }
      o.arrForEach = h;
      function b(I, U) {
        U === void 0 && (U = 200);
        var H = !1;
        return function() {
          for (var j = this, P = [], V = 0; V < arguments.length; V++)
            P[V] = arguments[V];
          H || (H = !0, (0, T.default)(function() {
            H = !1, I.call.apply(I, E.__spreadArrays([j], P));
          }, U));
        };
      }
      o.throttle = b;
      function C(I, U) {
        U === void 0 && (U = 200);
        var H = 0;
        return function() {
          for (var j = this, P = [], V = 0; V < arguments.length; V++)
            P[V] = arguments[V];
          H && window.clearTimeout(H), H = (0, T.default)(function() {
            H = 0, I.call.apply(I, E.__spreadArrays([j], P));
          }, U);
        };
      }
      o.debounce = C;
      function R(I) {
        return typeof I == "function";
      }
      o.isFunction = R;
      function O(I) {
        if ((0, f.default)(I) !== "object" || typeof I == "function" || I === null)
          return I;
        var U;
        (0, x.default)(I) && (U = []), (0, x.default)(I) || (U = {});
        for (var H in I)
          Object.prototype.hasOwnProperty.call(I, H) && (U[H] = O(I[H]));
        return U;
      }
      o.deepClone = O;
      function B(I) {
        return (0, m.default)(Array.prototype).call(I);
      }
      o.toArray = B;
      function F() {
        var I;
        return (0, m.default)(I = Math.random().toString(36)).call(I, -5);
      }
      o.getRandomCode = F;
      function z(I) {
        var U = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(I);
        if (U == null)
          return null;
        var H = (0, w.default)(U).call(U, function(Q) {
          return (0, c.default)(Q, 16);
        }), j = H[1], P = H[2], V = H[3];
        return "rgb(" + j + ", " + P + ", " + V + ")";
      }
      o.hexToRgb = z;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.EMPTY_P_REGEX = o.EMPTY_P_LAST_REGEX = o.EMPTY_P = o.urlRegex = o.EMPTY_FN = void 0;
      function d() {
      }
      o.EMPTY_FN = d, o.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/, o.EMPTY_P = '<p data-we-empty-p=""><br></p>', o.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, o.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
    }, function(l, o, t) {
      (function(s) {
        var f = function(c) {
          return c && c.Math == Math && c;
        };
        l.exports = f((typeof globalThis > "u" ? "undefined" : It(globalThis)) == "object" && globalThis) || f((typeof window > "u" ? "undefined" : It(window)) == "object" && window) || f((typeof self > "u" ? "undefined" : It(self)) == "object" && self) || f(It(s) == "object" && s) || Function("return this")();
      }).call(this, t(145));
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(8), f = t(74), d = t(16), c = t(64), m = t(76), T = t(105), x = f("wks"), w = s.Symbol, E = T ? w : w && w.withoutSetter || c;
      l.exports = function(g) {
        return d(x, g) || (m && d(w, g) ? x[g] = w[g] : x[g] = E("Symbol." + g)), x[g];
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(l, o, t) {
      var s = t(9), f = t(16), d = t(93), c = t(18).f;
      l.exports = function(m) {
        var T = s.Symbol || (s.Symbol = {});
        f(T, m) || c(T, m, { value: d.f(m) });
      };
    }, function(l, o) {
      l.exports = function(t) {
        return It(t) === "object" ? t !== null : typeof t == "function";
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, function(l, o, t) {
      var s = t(9);
      l.exports = function(f) {
        return s[f + "Prototype"];
      };
    }, function(l, o) {
      var t = {}.hasOwnProperty;
      l.exports = function(s, f) {
        return t.call(s, f);
      };
    }, function(l, o, t) {
      l.exports = t(192);
    }, function(l, o, t) {
      var s = t(14), f = t(99), d = t(25), c = t(60), m = Object.defineProperty;
      o.f = s ? m : function(x, w, E) {
        if (d(x), w = c(w, !0), d(E), f)
          try {
            return m(x, w, E);
          } catch {
          }
        if ("get" in E || "set" in E)
          throw TypeError("Accessors not supported");
        return "value" in E && (x[w] = E.value), x;
      };
    }, function(l, o, t) {
      var s = t(14), f = t(18), d = t(48);
      l.exports = s ? function(c, m, T) {
        return f.f(c, m, d(1, T));
      } : function(c, m, T) {
        return c[m] = T, c;
      };
    }, function(l, o, t) {
      var s = function() {
        var h;
        return function() {
          return typeof h > "u" && (h = Boolean(window && document && document.all && !window.atob)), h;
        };
      }(), f = function() {
        var h = {};
        return function(C) {
          if (typeof h[C] > "u") {
            var R = document.querySelector(C);
            if (window.HTMLIFrameElement && R instanceof window.HTMLIFrameElement)
              try {
                R = R.contentDocument.head;
              } catch {
                R = null;
              }
            h[C] = R;
          }
          return h[C];
        };
      }(), d = [];
      function c(y) {
        for (var h = -1, b = 0; b < d.length; b++)
          if (d[b].identifier === y) {
            h = b;
            break;
          }
        return h;
      }
      function m(y, h) {
        for (var b = {}, C = [], R = 0; R < y.length; R++) {
          var O = y[R], B = h.base ? O[0] + h.base : O[0], F = b[B] || 0, z = "".concat(B, " ").concat(F);
          b[B] = F + 1;
          var I = c(z), U = { css: O[1], media: O[2], sourceMap: O[3] };
          I !== -1 ? (d[I].references++, d[I].updater(U)) : d.push({ identifier: z, updater: M(U, h), references: 1 }), C.push(z);
        }
        return C;
      }
      function T(y) {
        var h = document.createElement("style"), b = y.attributes || {};
        if (typeof b.nonce > "u") {
          var C = t.nc;
          C && (b.nonce = C);
        }
        if (Object.keys(b).forEach(function(O) {
          h.setAttribute(O, b[O]);
        }), typeof y.insert == "function")
          y.insert(h);
        else {
          var R = f(y.insert || "head");
          if (!R)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          R.appendChild(h);
        }
        return h;
      }
      function x(y) {
        if (y.parentNode === null)
          return !1;
        y.parentNode.removeChild(y);
      }
      var w = function() {
        var h = [];
        return function(C, R) {
          return h[C] = R, h.filter(Boolean).join(`
`);
        };
      }();
      function E(y, h, b, C) {
        var R = b ? "" : C.media ? "@media ".concat(C.media, " {").concat(C.css, "}") : C.css;
        if (y.styleSheet)
          y.styleSheet.cssText = w(h, R);
        else {
          var O = document.createTextNode(R), B = y.childNodes;
          B[h] && y.removeChild(B[h]), B.length ? y.insertBefore(O, B[h]) : y.appendChild(O);
        }
      }
      function g(y, h, b) {
        var C = b.css, R = b.media, O = b.sourceMap;
        if (R ? y.setAttribute("media", R) : y.removeAttribute("media"), O && typeof btoa < "u" && (C += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), y.styleSheet)
          y.styleSheet.cssText = C;
        else {
          for (; y.firstChild; )
            y.removeChild(y.firstChild);
          y.appendChild(document.createTextNode(C));
        }
      }
      var S = null, v = 0;
      function M(y, h) {
        var b, C, R;
        if (h.singleton) {
          var O = v++;
          b = S || (S = T(h)), C = E.bind(null, b, O, !1), R = E.bind(null, b, O, !0);
        } else
          b = T(h), C = g.bind(null, b, h), R = function() {
            x(b);
          };
        return C(y), function(F) {
          if (F) {
            if (F.css === y.css && F.media === y.media && F.sourceMap === y.sourceMap)
              return;
            C(y = F);
          } else
            R();
        };
      }
      l.exports = function(y, h) {
        h = h || {}, !h.singleton && typeof h.singleton != "boolean" && (h.singleton = s()), y = y || [];
        var b = m(y, h);
        return function(R) {
          if (R = R || [], Object.prototype.toString.call(R) === "[object Array]") {
            for (var O = 0; O < b.length; O++) {
              var B = b[O], F = c(B);
              d[F].references--;
            }
            for (var z = m(R, h), I = 0; I < b.length; I++) {
              var U = b[I], H = c(U);
              d[H].references === 0 && (d[H].updater(), d.splice(H, 1));
            }
            b = z;
          }
        };
      };
    }, function(l, o, t) {
      l.exports = function(d) {
        var c = [];
        return c.toString = function() {
          return this.map(function(T) {
            var x = s(T, d);
            return T[2] ? "@media ".concat(T[2], " {").concat(x, "}") : x;
          }).join("");
        }, c.i = function(m, T, x) {
          typeof m == "string" && (m = [[null, m, ""]]);
          var w = {};
          if (x)
            for (var E = 0; E < this.length; E++) {
              var g = this[E][0];
              g != null && (w[g] = !0);
            }
          for (var S = 0; S < m.length; S++) {
            var v = [].concat(m[S]);
            x && w[v[0]] || (T && (v[2] ? v[2] = "".concat(T, " and ").concat(v[2]) : v[2] = T), c.push(v));
          }
        }, c;
      };
      function s(d, c) {
        var m = d[1] || "", T = d[3];
        if (!T)
          return m;
        if (c && typeof btoa == "function") {
          var x = f(T), w = T.sources.map(function(E) {
            return "/*# sourceURL=".concat(T.sourceRoot || "").concat(E, " */");
          });
          return [m].concat(w).concat([x]).join(`
`);
        }
        return [m].join(`
`);
      }
      function f(d) {
        var c = btoa(unescape(encodeURIComponent(JSON.stringify(d)))), m = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);
        return "/*# ".concat(m, " */");
      }
    }, function(l, o, t) {
      var s = t(14), f = t(11), d = t(16), c = Object.defineProperty, m = {}, T = function(w) {
        throw w;
      };
      l.exports = function(x, w) {
        if (d(m, x))
          return m[x];
        w || (w = {});
        var E = [][x], g = d(w, "ACCESSORS") ? w.ACCESSORS : !1, S = d(w, 0) ? w[0] : T, v = d(w, 1) ? w[1] : void 0;
        return m[x] = !!E && !f(function() {
          if (g && !s)
            return !0;
          var M = { length: -1 };
          g ? c(M, 1, { enumerable: !0, get: T }) : M[1] = 1, E.call(M, S, v);
        });
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(95)), m = function(T) {
        d.__extends(x, T);
        function x(w, E) {
          return T.call(this, w, E) || this;
        }
        return x;
      }(c.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), x = m.__importDefault(t(95)), w = m.__importDefault(t(133)), E = function(g) {
        m.__extends(S, g);
        function S(v, M, y) {
          var h = g.call(this, v, M) || this;
          y.title = M.i18next.t("menus.dropListMenu." + y.title);
          var b = M.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
          if (b !== "" && y.type === "list") {
            var C;
            (0, d.default)(C = y.list).call(C, function(O) {
              var B = O.$elem, F = T.default(B.children());
              if (F.length > 0) {
                var z = F == null ? void 0 : F.getNodeName();
                z && z === "I" && B.addClass(b);
              }
            });
          }
          var R = new w.default(h, y);
          return h.dropList = R, v.on("click", function() {
            var O;
            M.selection.getRange() != null && (v.css("z-index", M.zIndex.get("menu")), (0, d.default)(O = M.txt.eventHooks.dropListMenuHoverEvents).call(O, function(B) {
              return B();
            }), R.show());
          }).on("mouseleave", function() {
            v.css("z-index", "auto"), R.hideTimeoutId = (0, c.default)(function() {
              R.hide();
            });
          }), h;
        }
        return S;
      }(x.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(f) {
        if (!s(f))
          throw TypeError(String(f) + " is not an object");
        return f;
      };
    }, function(l, o, t) {
      l.exports = t(188);
    }, function(l, o, t) {
      l.exports = t(201);
    }, function(l, o, t) {
      var s = t(72), f = t(49);
      l.exports = function(d) {
        return s(f(d));
      };
    }, function(l, o, t) {
      var s = t(49);
      l.exports = function(f) {
        return Object(s(f));
      };
    }, function(l, o, t) {
      var s = t(39), f = t(72), d = t(29), c = t(34), m = t(88), T = [].push, x = function(E) {
        var g = E == 1, S = E == 2, v = E == 3, M = E == 4, y = E == 6, h = E == 5 || y;
        return function(b, C, R, O) {
          for (var B = d(b), F = f(B), z = s(C, R, 3), I = c(F.length), U = 0, H = O || m, j = g ? H(b, I) : S ? H(b, 0) : void 0, P, V; I > U; U++)
            if ((h || U in F) && (P = F[U], V = z(P, U, B), E)) {
              if (g)
                j[U] = V;
              else if (V)
                switch (E) {
                  case 3:
                    return !0;
                  case 5:
                    return P;
                  case 6:
                    return U;
                  case 2:
                    T.call(j, P);
                }
              else if (M)
                return !1;
            }
          return y ? -1 : v || M ? M : j;
        };
      };
      l.exports = {
        forEach: x(0),
        map: x(1),
        filter: x(2),
        some: x(3),
        every: x(4),
        find: x(5),
        findIndex: x(6)
      };
    }, function(l, o, t) {
      l.exports = t(283);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(31)), m = s(t(131));
      (0, f.default)(o, "__esModule", { value: !0 });
      var T = t(2), x = T.__importDefault(t(3)), w = t(7), E = function() {
        function g(S, v) {
          this.menu = S, this.conf = v, this.$container = x.default('<div class="w-e-panel-container"></div>');
          var M = S.editor;
          M.txt.eventHooks.clickEvents.push(g.hideCurAllPanels), M.txt.eventHooks.toolbarClickEvents.push(g.hideCurAllPanels), M.txt.eventHooks.dropListMenuHoverEvents.push(g.hideCurAllPanels);
        }
        return g.prototype.create = function() {
          var S = this, v = this.menu;
          if (!g.createdMenus.has(v)) {
            var M = this.conf, y = this.$container, h = M.width || 300, b = v.editor.$toolbarElem.getBoundingClientRect(), C = v.$elem.getBoundingClientRect(), R = b.height + b.top - C.top, O = (b.width - h) / 2 + b.left - C.left, B = 300;
            Math.abs(O) > B && (C.left < document.documentElement.clientWidth / 2 ? O = -C.width / 2 : O = -h + C.width / 2), y.css("width", h + "px").css("margin-top", R + "px").css("margin-left", O + "px").css("z-index", v.editor.zIndex.get("panel"));
            var F = x.default('<i class="w-e-icon-close w-e-panel-close"></i>');
            y.append(F), F.on("click", function() {
              S.remove();
            });
            var z = x.default('<ul class="w-e-panel-tab-title"></ul>'), I = x.default('<div class="w-e-panel-tab-content"></div>');
            y.append(z).append(I);
            var U = M.height;
            U && I.css("height", U + "px").css("overflow-y", "auto");
            var H = M.tabs || [], j = [], P = [];
            (0, d.default)(H).call(H, function(Q, K) {
              if (!!Q) {
                var q = Q.title || "", X = Q.tpl || "", _ = x.default('<li class="w-e-item">' + q + "</li>");
                z.append(_);
                var le = x.default(X);
                I.append(le), j.push(_), P.push(le), K === 0 ? (_.data("active", !0), _.addClass("w-e-active")) : le.hide(), _.on("click", function() {
                  _.data("active") || ((0, d.default)(j).call(j, function(Se) {
                    Se.data("active", !1), Se.removeClass("w-e-active");
                  }), (0, d.default)(P).call(P, function(Se) {
                    Se.hide();
                  }), _.data("active", !0), _.addClass("w-e-active"), le.show());
                });
              }
            }), y.on("click", function(Q) {
              Q.stopPropagation();
            }), v.$elem.append(y), (0, d.default)(H).call(H, function(Q, K) {
              if (!!Q) {
                var q = Q.events || [];
                (0, d.default)(q).call(q, function(X) {
                  var _, le = X.selector, Se = X.type, ve = X.fn || w.EMPTY_FN, ce = P[K], ae = (_ = X.bindEnter) !== null && _ !== void 0 ? _ : !1, re = function(pe) {
                    return T.__awaiter(S, void 0, void 0, function() {
                      var Pe;
                      return T.__generator(this, function(Ee) {
                        switch (Ee.label) {
                          case 0:
                            return pe.stopPropagation(), [
                              4,
                              ve(pe)
                            ];
                          case 1:
                            return Pe = Ee.sent(), Pe && this.remove(), [2];
                        }
                      });
                    });
                  };
                  (0, c.default)(ce).call(ce, le).on(Se, re), ae && Se === "click" && ce.on("keyup", function(se) {
                    se.keyCode == 13 && re(se);
                  });
                });
              }
            });
            var V = (0, c.default)(y).call(y, "input[type=text],textarea");
            V.length && V.get(0).focus(), g.hideCurAllPanels(), v.setPanel(this), g.createdMenus.add(v);
          }
        }, g.prototype.remove = function() {
          var S = this.menu, v = this.$container;
          v && v.remove(), g.createdMenus.delete(S);
        }, g.hideCurAllPanels = function() {
          var S;
          g.createdMenus.size !== 0 && (0, d.default)(S = g.createdMenus).call(S, function(v) {
            var M = v.panel;
            M && M.remove();
          });
        }, g.createdMenus = new m.default(), g;
      }();
      o.default = E;
    }, function(l, o) {
      var t = {}.toString;
      l.exports = function(s) {
        return t.call(s).slice(8, -1);
      };
    }, function(l, o, t) {
      var s = t(62), f = Math.min;
      l.exports = function(d) {
        return d > 0 ? f(s(d), 9007199254740991) : 0;
      };
    }, function(l, o, t) {
      var s = t(9), f = t(8), d = function(m) {
        return typeof m == "function" ? m : void 0;
      };
      l.exports = function(c, m) {
        return arguments.length < 2 ? d(s[c]) || d(f[c]) : s[c] && s[c][m] || f[c] && f[c][m];
      };
    }, function(l, o, t) {
      var s = t(81), f = t(18).f, d = t(19), c = t(16), m = t(170), T = t(10), x = T("toStringTag");
      l.exports = function(w, E, g, S) {
        if (w) {
          var v = g ? w : w.prototype;
          c(v, x) || f(v, x, { configurable: !0, value: E }), S && !s && d(v, "toString", m);
        }
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(95)), m = function(T) {
        d.__extends(x, T);
        function x(w, E) {
          return T.call(this, w, E) || this;
        }
        return x.prototype.setPanel = function(w) {
          this.panel = w;
        }, x;
      }(c.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(57));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), x = function() {
        function w(E, g, S) {
          this.editor = E, this.$targetElem = g, this.conf = S, this._show = !1, this._isInsertTextContainer = !1;
          var v = T.default("<div></div>");
          v.addClass("w-e-tooltip"), this.$container = v;
        }
        return w.prototype.getPositionData = function() {
          var E = this.$container, g = 0, S = 0, v = 20, M = document.documentElement.scrollTop, y = this.$targetElem.getBoundingClientRect(), h = this.editor.$textElem.getBoundingClientRect(), b = this.$targetElem.getOffsetData(), C = T.default(b.parent), R = this.editor.$textElem.elems[0].scrollTop;
          if (this._isInsertTextContainer = C.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
            var O = C.getBoundingClientRect().height, B = b.top, F = b.left, z = b.height, I = B - R;
            I > v + 5 ? (g = I - v - 15, E.addClass("w-e-tooltip-up")) : I + z + v < O ? (g = I + z + 10, E.addClass("w-e-tooltip-down")) : (g = (I > 0 ? I : 0) + v + 10, E.addClass("w-e-tooltip-down")), F < 0 ? S = 0 : S = F;
          } else
            y.top < v || y.top - h.top < v ? (g = y.bottom + M + 5, E.addClass("w-e-tooltip-down")) : (g = y.top + M - v - 15, E.addClass("w-e-tooltip-up")), y.left < 0 ? S = 0 : S = y.left;
          return { top: g, left: S };
        }, w.prototype.appendMenus = function() {
          var E = this, g = this.conf, S = this.editor, v = this.$targetElem, M = this.$container;
          (0, d.default)(g).call(g, function(y, h) {
            var b = y.$elem, C = T.default("<div></div>");
            C.addClass("w-e-tooltip-item-wrapper "), C.append(b), M.append(C), b.on("click", function(R) {
              R.preventDefault();
              var O = y.onClick(S, v);
              O && E.remove();
            });
          });
        }, w.prototype.create = function() {
          var E, g, S = this.editor, v = this.$container;
          this.appendMenus();
          var M = this.getPositionData(), y = M.top, h = M.left;
          v.css("top", y + "px"), v.css("left", h + "px"), v.css("z-index", S.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(v) : T.default("body").append(v), this._show = !0, S.beforeDestroy((0, c.default)(E = this.remove).call(E, this)), S.txt.eventHooks.onBlurEvents.push((0, c.default)(g = this.remove).call(g, this));
        }, w.prototype.remove = function() {
          this.$container.remove(), this._show = !1;
        }, (0, f.default)(w.prototype, "isShow", {
          get: function() {
            return this._show;
          },
          enumerable: !1,
          configurable: !0
        }), w;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(40);
      l.exports = function(f, d, c) {
        if (s(f), d === void 0)
          return f;
        switch (c) {
          case 0:
            return function() {
              return f.call(d);
            };
          case 1:
            return function(m) {
              return f.call(d, m);
            };
          case 2:
            return function(m, T) {
              return f.call(d, m, T);
            };
          case 3:
            return function(m, T, x) {
              return f.call(d, m, T, x);
            };
        }
        return function() {
          return f.apply(d, arguments);
        };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    }, function(l, o, t) {
      var s = t(165), f = t(8), d = t(13), c = t(19), m = t(16), T = t(63), x = t(51), w = f.WeakMap, E, g, S, v = function(B) {
        return S(B) ? g(B) : E(B, {});
      }, M = function(B) {
        return function(F) {
          var z;
          if (!d(F) || (z = g(F)).type !== B)
            throw TypeError("Incompatible receiver, " + B + " required");
          return z;
        };
      };
      if (s) {
        var y = new w(), h = y.get, b = y.has, C = y.set;
        E = function(B, F) {
          return C.call(y, B, F), F;
        }, g = function(B) {
          return h.call(y, B) || {};
        }, S = function(B) {
          return b.call(y, B);
        };
      } else {
        var R = T("state");
        x[R] = !0, E = function(B, F) {
          return c(B, R, F), F;
        }, g = function(B) {
          return m(B, R) ? B[R] : {};
        }, S = function(B) {
          return m(B, R);
        };
      }
      l.exports = { set: E, get: g, has: S, enforce: v, getterFor: M };
    }, function(l, o) {
      l.exports = !0;
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      l.exports = t(213);
    }, function(l, o, t) {
      l.exports = t(261);
    }, function(l, o, t) {
      l.exports = t(265);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createElementFragment = o.createDocumentFragment = o.createElement = o.insertBefore = o.getEndPoint = o.getStartPoint = o.updateRange = o.filterSelectionNodes = void 0;
      var c = t(2), m = t(137), T = c.__importDefault(t(3));
      function x(h) {
        var b = [];
        return (0, d.default)(h).call(h, function(C) {
          var R = C.getNodeName();
          if (R !== m.ListType.OrderedList && R !== m.ListType.UnorderedList)
            b.push(C);
          else if (C.prior)
            b.push(C.prior);
          else {
            var O = C.children();
            O == null || (0, d.default)(O).call(O, function(B) {
              b.push(T.default(B));
            });
          }
        }), b;
      }
      o.filterSelectionNodes = x;
      function w(h, b, C) {
        var R = h.selection, O = document.createRange();
        b.length > 1 ? (O.setStart(b.elems[0], 0), O.setEnd(b.elems[b.length - 1], b.elems[b.length - 1].childNodes.length)) : O.selectNodeContents(b.elems[0]), C && O.collapse(!1), R.saveRange(O), R.restoreSelection();
      }
      o.updateRange = w;
      function E(h) {
        var b;
        return h.prior ? h.prior : T.default((b = h.children()) === null || b === void 0 ? void 0 : b.elems[0]);
      }
      o.getStartPoint = E;
      function g(h) {
        var b;
        return h.prior ? h.prior : T.default((b = h.children()) === null || b === void 0 ? void 0 : b.last().elems[0]);
      }
      o.getEndPoint = g;
      function S(h, b, C) {
        C === void 0 && (C = null), h.parent().elems[0].insertBefore(b, C);
      }
      o.insertBefore = S;
      function v(h) {
        return document.createElement(h);
      }
      o.createElement = v;
      function M() {
        return document.createDocumentFragment();
      }
      o.createDocumentFragment = M;
      function y(h, b, C) {
        return C === void 0 && (C = "li"), (0, d.default)(h).call(h, function(R) {
          var O = v(C);
          O.innerHTML = R.html(), b.appendChild(O), R.remove();
        }), b;
      }
      o.createElementFragment = y;
    }, function(l, o) {
      l.exports = function(t, s) {
        return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: s };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on " + t);
        return t;
      };
    }, function(l, o, t) {
      var s = t(164).charAt, f = t(41), d = t(75), c = "String Iterator", m = f.set, T = f.getterFor(c);
      d(String, "String", function(x) {
        m(this, { type: c, string: String(x), index: 0 });
      }, function() {
        var w = T(this), E = w.string, g = w.index, S;
        return g >= E.length ? { value: void 0, done: !0 } : (S = s(E, g), w.index += S.length, { value: S, done: !1 });
      });
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(106), f = t(80);
      l.exports = Object.keys || function(c) {
        return s(c, f);
      };
    }, function(l, o, t) {
      var s = t(19);
      l.exports = function(f, d, c, m) {
        m && m.enumerable ? f[d] = c : s(f, d, c);
      };
    }, function(l, o, t) {
      t(173);
      var s = t(174), f = t(8), d = t(65), c = t(19), m = t(43), T = t(10), x = T("toStringTag");
      for (var w in s) {
        var E = f[w], g = E && E.prototype;
        g && d(g) !== x && c(g, x, w), m[w] = m.Array;
      }
    }, function(l, o, t) {
      var s = t(33);
      l.exports = Array.isArray || function(d) {
        return s(d) == "Array";
      };
    }, function(l, o, t) {
      var s = t(11), f = t(10), d = t(86), c = f("species");
      l.exports = function(m) {
        return d >= 51 || !s(function() {
          var T = [], x = T.constructor = {};
          return x[c] = function() {
            return { foo: 1 };
          }, T[m](Boolean).foo !== 1;
        });
      };
    }, function(l, o, t) {
      l.exports = t(222);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.ListHandle = void 0;
      var d = t(2), c = d.__importDefault(t(373)), m = function() {
        function T(x) {
          this.options = x, this.selectionRangeElem = new c.default();
        }
        return T;
      }();
      o.ListHandle = m;
    }, function(l, o, t) {
      var s = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, d = f && !s.call({ 1: 2 }, 1);
      o.f = d ? function(m) {
        var T = f(this, m);
        return !!T && T.enumerable;
      } : s;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(f, d) {
        if (!s(f))
          return f;
        var c, m;
        if (d && typeof (c = f.toString) == "function" && !s(m = c.call(f)) || typeof (c = f.valueOf) == "function" && !s(m = c.call(f)) || !d && typeof (c = f.toString) == "function" && !s(m = c.call(f)))
          return m;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(l, o) {
    }, function(l, o) {
      var t = Math.ceil, s = Math.floor;
      l.exports = function(f) {
        return isNaN(f = +f) ? 0 : (f > 0 ? s : t)(f);
      };
    }, function(l, o, t) {
      var s = t(74), f = t(64), d = s("keys");
      l.exports = function(c) {
        return d[c] || (d[c] = f(c));
      };
    }, function(l, o) {
      var t = 0, s = Math.random();
      l.exports = function(f) {
        return "Symbol(" + String(f === void 0 ? "" : f) + ")_" + (++t + s).toString(36);
      };
    }, function(l, o, t) {
      var s = t(81), f = t(33), d = t(10), c = d("toStringTag"), m = f(function() {
        return arguments;
      }()) == "Arguments", T = function(w, E) {
        try {
          return w[E];
        } catch {
        }
      };
      l.exports = s ? f : function(x) {
        var w, E, g;
        return x === void 0 ? "Undefined" : x === null ? "Null" : typeof (E = T(w = Object(x), c)) == "string" ? E : m ? f(w) : (g = f(w)) == "Object" && typeof w.callee == "function" ? "Arguments" : g;
      };
    }, function(l, o, t) {
      var s = t(25), f = t(111), d = t(34), c = t(39), m = t(112), T = t(113), x = function(g, S) {
        this.stopped = g, this.result = S;
      }, w = l.exports = function(E, g, S, v, M) {
        var y = c(g, S, v ? 2 : 1), h, b, C, R, O, B, F;
        if (M)
          h = E;
        else {
          if (b = m(E), typeof b != "function")
            throw TypeError("Target is not iterable");
          if (f(b)) {
            for (C = 0, R = d(E.length); R > C; C++)
              if (O = v ? y(s(F = E[C])[0], F[1]) : y(E[C]), O && O instanceof x)
                return O;
            return new x(!1);
          }
          h = b.call(E);
        }
        for (B = h.next; !(F = B.call(h)).done; )
          if (O = T(h, y, F.value, v), It(O) == "object" && O && O instanceof x)
            return O;
        return new x(!1);
      };
      w.stop = function(E) {
        return new x(!0, E);
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = function(f, d) {
        var c = [][f];
        return !!c && s(function() {
          c.call(null, d || function() {
            throw 1;
          }, 1);
        });
      };
    }, function(l, o) {
      l.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
    }, function(l, o, t) {
      var s = t(60), f = t(18), d = t(48);
      l.exports = function(c, m, T) {
        var x = s(m);
        x in c ? f.f(c, x, d(0, T)) : c[x] = T;
      };
    }, function(l, o, t) {
      l.exports = t(209);
    }, function(l, o, t) {
      var s = t(14), f = t(59), d = t(48), c = t(28), m = t(60), T = t(16), x = t(99), w = Object.getOwnPropertyDescriptor;
      o.f = s ? w : function(g, S) {
        if (g = c(g), S = m(S, !0), x)
          try {
            return w(g, S);
          } catch {
          }
        if (T(g, S))
          return d(!f.f.call(g, S), g[S]);
      };
    }, function(l, o, t) {
      var s = t(11), f = t(33), d = "".split;
      l.exports = s(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(c) {
        return f(c) == "String" ? d.call(c, "") : Object(c);
      } : Object;
    }, function(l, o, t) {
      var s = t(8), f = t(13), d = s.document, c = f(d) && f(d.createElement);
      l.exports = function(m) {
        return c ? d.createElement(m) : {};
      };
    }, function(l, o, t) {
      var s = t(42), f = t(102);
      (l.exports = function(d, c) {
        return f[d] || (f[d] = c !== void 0 ? c : {});
      })("versions", []).push({ version: "3.6.4", mode: s ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    }, function(l, o, t) {
      var s = t(5), f = t(167), d = t(104), c = t(171), m = t(36), T = t(19), x = t(53), w = t(10), E = t(42), g = t(43), S = t(103), v = S.IteratorPrototype, M = S.BUGGY_SAFARI_ITERATORS, y = w("iterator"), h = "keys", b = "values", C = "entries", R = function() {
        return this;
      };
      l.exports = function(O, B, F, z, I, U, H) {
        f(F, B, z);
        var j = function(ce) {
          if (ce === I && q)
            return q;
          if (!M && ce in Q)
            return Q[ce];
          switch (ce) {
            case h:
              return function() {
                return new F(this, ce);
              };
            case b:
              return function() {
                return new F(this, ce);
              };
            case C:
              return function() {
                return new F(this, ce);
              };
          }
          return function() {
            return new F(this);
          };
        }, P = B + " Iterator", V = !1, Q = O.prototype, K = Q[y] || Q["@@iterator"] || I && Q[I], q = !M && K || j(I), X = B == "Array" && Q.entries || K, _, le, Se;
        if (X && (_ = d(X.call(new O())), v !== Object.prototype && _.next && (!E && d(_) !== v && (c ? c(_, v) : typeof _[y] != "function" && T(_, y, R)), m(_, P, !0, !0), E && (g[P] = R))), I == b && K && K.name !== b && (V = !0, q = function() {
          return K.call(this);
        }), (!E || H) && Q[y] !== q && T(Q, y, q), g[B] = q, I)
          if (le = { values: j(b), keys: U ? q : j(h), entries: j(C) }, H)
            for (Se in le)
              (M || V || !(Se in Q)) && x(Q, Se, le[Se]);
          else
            s({ target: B, proto: !0, forced: M || V }, le);
        return le;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !!Object.getOwnPropertySymbols && !s(function() {
        return !String(Symbol());
      });
    }, function(l, o, t) {
      var s = t(25), f = t(169), d = t(80), c = t(51), m = t(107), T = t(73), x = t(63), w = ">", E = "<", g = "prototype", S = "script", v = x("IE_PROTO"), M = function() {
      }, y = function(B) {
        return E + S + w + B + E + "/" + S + w;
      }, h = function(B) {
        B.write(y("")), B.close();
        var F = B.parentWindow.Object;
        return B = null, F;
      }, b = function() {
        var B = T("iframe"), F = "java" + S + ":", z;
        return B.style.display = "none", m.appendChild(B), B.src = String(F), z = B.contentWindow.document, z.open(), z.write(y("document.F=Object")), z.close(), z.F;
      }, C, R = function() {
        try {
          C = document.domain && new ActiveXObject("htmlfile");
        } catch {
        }
        R = C ? h(C) : b();
        for (var B = d.length; B--; )
          delete R[g][d[B]];
        return R();
      };
      c[v] = !0, l.exports = Object.create || function(B, F) {
        var z;
        return B !== null ? (M[g] = s(B), z = new M(), M[g] = null, z[v] = B) : z = R(), F === void 0 ? z : f(z, F);
      };
    }, function(l, o, t) {
      var s = t(28), f = t(34), d = t(79), c = function(T) {
        return function(x, w, E) {
          var g = s(x), S = f(g.length), v = d(E, S), M;
          if (T && w != w) {
            for (; S > v; )
              if (M = g[v++], M != M)
                return !0;
          } else
            for (; S > v; v++)
              if ((T || v in g) && g[v] === w)
                return T || v || 0;
          return !T && -1;
        };
      };
      l.exports = {
        includes: c(!0),
        indexOf: c(!1)
      };
    }, function(l, o, t) {
      var s = t(62), f = Math.max, d = Math.min;
      l.exports = function(c, m) {
        var T = s(c);
        return T < 0 ? f(T + m, 0) : d(T, m);
      };
    }, function(l, o) {
      l.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, function(l, o, t) {
      var s = t(10), f = s("toStringTag"), d = {};
      d[f] = "z", l.exports = String(d) === "[object z]";
    }, function(l, o) {
      l.exports = function() {
      };
    }, function(l, o) {
      l.exports = function(t, s, f) {
        if (!(t instanceof s))
          throw TypeError("Incorrect " + (f ? f + " " : "") + "invocation");
        return t;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("navigator", "userAgent") || "";
    }, function(l, o, t) {
      var s = t(40), f = function(c) {
        var m, T;
        this.promise = new c(function(x, w) {
          if (m !== void 0 || T !== void 0)
            throw TypeError("Bad Promise constructor");
          m = x, T = w;
        }), this.resolve = s(m), this.reject = s(T);
      };
      l.exports.f = function(d) {
        return new f(d);
      };
    }, function(l, o, t) {
      var s = t(8), f = t(84), d = s.process, c = d && d.versions, m = c && c.v8, T, x;
      m ? (T = m.split("."), x = T[0] + T[1]) : f && (T = f.match(/Edge\/(\d+)/), (!T || T[1] >= 74) && (T = f.match(/Chrome\/(\d+)/), T && (x = T[1]))), l.exports = x && +x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(6), x = c.__importDefault(t(267)), w = c.__importDefault(t(280)), E = c.__importDefault(t(281)), g = c.__importDefault(t(282)), S = c.__importDefault(t(301)), v = c.__importStar(t(416)), M = c.__importDefault(t(417)), y = c.__importDefault(t(418)), h = c.__importDefault(t(419)), b = c.__importStar(t(420)), C = c.__importDefault(t(423)), R = c.__importDefault(t(424)), O = c.__importDefault(t(425)), B = c.__importDefault(t(427)), F = c.__importDefault(t(437)), z = c.__importDefault(t(440)), I = c.__importStar(t(441)), U = c.__importDefault(t(23)), H = c.__importDefault(t(133)), j = c.__importDefault(t(24)), P = c.__importDefault(t(32)), V = c.__importDefault(t(37)), Q = c.__importDefault(t(38)), K = 1, q = function() {
        function X(_, le) {
          this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + K++, this.toolbarSelector = _, this.textSelector = le, v.selectorValidator(this), this.config = T.deepClone(x.default), this.$toolbarElem = m.default("<div></div>"), this.$textContainerElem = m.default("<div></div>"), this.$textElem = m.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new w.default(this), this.cmd = new E.default(this), this.txt = new g.default(this), this.menus = new S.default(this), this.zIndex = new R.default(), this.change = new O.default(this), this.history = new B.default(this), this.onSelectionChange = new z.default(this);
          var Se = F.default(this), ve = Se.disable, ce = Se.enable;
          this.disable = ve, this.enable = ce, this.isEnable = !0;
        }
        return X.prototype.initSelection = function(_) {
          M.default(this, _);
        }, X.prototype.create = function() {
          this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), h.default(this), v.default(this), this.txt.init(), this.menus.init(), b.default(this), this.initSelection(!0), y.default(this), this.change.observe(), this.history.observe(), I.default(this);
        }, X.prototype.beforeDestroy = function(_) {
          return this.beforeDestroyHooks.push(_), this;
        }, X.prototype.destroy = function() {
          var _, le = this;
          (0, d.default)(_ = this.beforeDestroyHooks).call(_, function(Se) {
            return Se.call(le);
          }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
        }, X.prototype.fullScreen = function() {
          b.setFullScreen(this);
        }, X.prototype.unFullScreen = function() {
          b.setUnFullScreen(this);
        }, X.prototype.scrollToHead = function(_) {
          C.default(this, _);
        }, X.registerMenu = function(_, le) {
          !le || typeof le != "function" || (X.globalCustomMenuConstructorList[_] = le);
        }, X.prototype.registerPlugin = function(_, le) {
          I.registerPlugin(_, le, this.pluginsFunctionList);
        }, X.registerPlugin = function(_, le) {
          I.registerPlugin(_, le, X.globalPluginsFunctionList);
        }, X.$ = m.default, X.BtnMenu = U.default, X.DropList = H.default, X.DropListMenu = j.default, X.Panel = P.default, X.PanelMenu = V.default, X.Tooltip = Q.default, X.globalCustomMenuConstructorList = {}, X.globalPluginsFunctionList = {}, X;
      }();
      o.default = q;
    }, function(l, o, t) {
      var s = t(13), f = t(55), d = t(10), c = d("species");
      l.exports = function(m, T) {
        var x;
        return f(m) && (x = m.constructor, typeof x == "function" && (x === Array || f(x.prototype)) ? x = void 0 : s(x) && (x = x[c], x === null && (x = void 0))), new (x === void 0 ? Array : x)(T === 0 ? 0 : T);
      };
    }, function(l, o, t) {
      l.exports = t(185);
    }, function(l, o, t) {
      var s = t(49), f = t(68), d = "[" + f + "]", c = RegExp("^" + d + d + "*"), m = RegExp(d + d + "*$"), T = function(w) {
        return function(E) {
          var g = String(s(E));
          return w & 1 && (g = g.replace(c, "")), w & 2 && (g = g.replace(m, "")), g;
        };
      };
      l.exports = {
        start: T(1),
        end: T(2),
        trim: T(3)
      };
    }, function(l, o, t) {
      l.exports = t(205);
    }, function(l, o, t) {
      var s = t(227), f = t(230);
      function d(c) {
        return typeof f == "function" && typeof s == "symbol" ? l.exports = d = function(T) {
          return typeof T;
        } : l.exports = d = function(T) {
          return T && typeof f == "function" && T.constructor === f && T !== f.prototype ? "symbol" : typeof T;
        }, d(c);
      }
      l.exports = d;
    }, function(l, o, t) {
      var s = t(10);
      o.f = s;
    }, function(l, o, t) {
      l.exports = t(306);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(32)), T = function() {
        function x(w, E) {
          var g = this;
          this.$elem = w, this.editor = E, this._active = !1, w.on("click", function(S) {
            var v;
            m.default.hideCurAllPanels(), (0, d.default)(v = E.txt.eventHooks.menuClickEvents).call(v, function(M) {
              return M();
            }), S.stopPropagation(), E.selection.getRange() != null && g.clickHandler(S);
          });
        }
        return x.prototype.clickHandler = function(w) {
        }, x.prototype.active = function() {
          this._active = !0, this.$elem.addClass("w-e-active");
        }, x.prototype.unActive = function() {
          this._active = !1, this.$elem.removeClass("w-e-active");
        }, (0, f.default)(x.prototype, "isActive", {
          get: function() {
            return this._active;
          },
          enumerable: !1,
          configurable: !0
        }), x;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(57)), c = s(t(4)), m = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var T = t(2), x = t(6), w = T.__importDefault(t(135)), E = T.__importDefault(t(136)), g = function() {
        function S(v) {
          this.editor = v;
        }
        return S.prototype.insertImg = function(v, M, y) {
          var h = this.editor, b = h.config, C = "validate.", R = function(I, U) {
            return U === void 0 && (U = C), h.i18next.t(U + I);
          }, O = M ? 'alt="' + M + '" ' : "", B = y ? 'data-href="' + encodeURIComponent(y) + '" ' : "";
          h.cmd.do("insertHTML", '<img src="' + v + '" ' + O + B + 'style="max-width:100%;" contenteditable="false"/>'), b.linkImgCallback(v, M, y);
          var F = document.createElement("img");
          F.onload = function() {
            F = null;
          }, F.onerror = function() {
            b.customAlert(R("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + R("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + R("\u56FE\u7247\u94FE\u63A5") + ' "' + v + '"\uFF0C' + R("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), F = null;
          }, F.onabort = function() {
            return F = null;
          }, F.src = v;
        }, S.prototype.uploadImg = function(v) {
          var M = this;
          if (!!v.length) {
            var y = this.editor, h = y.config, b = "validate.", C = function(re) {
              return y.i18next.t(b + re);
            }, R = h.uploadImgServer, O = h.uploadImgShowBase64, B = h.uploadImgMaxSize, F = B / 1024 / 1024, z = h.uploadImgMaxLength, I = h.uploadFileName, U = h.uploadImgParams, H = h.uploadImgParamsWithUrl, j = h.uploadImgHeaders, P = h.uploadImgHooks, V = h.uploadImgTimeout, Q = h.withCredentials, K = h.customUploadImg;
            if (!(!K && !R && !O)) {
              var q = [], X = [];
              if (x.arrForEach(v, function(ae) {
                if (!!ae) {
                  var re = ae.name || ae.type.replace("/", "."), se = ae.size;
                  if (!(!re || !se)) {
                    var pe = y.config.uploadImgAccept.join("|"), Pe = ".(" + pe + ")$", Ee = new RegExp(Pe, "i");
                    if (Ee.test(re) === !1) {
                      X.push("\u3010" + re + "\u3011" + C("\u4E0D\u662F\u56FE\u7247"));
                      return;
                    }
                    if (B < se) {
                      X.push("\u3010" + re + "\u3011" + C("\u5927\u4E8E") + " " + F + "M");
                      return;
                    }
                    q.push(ae);
                  }
                }
              }), X.length) {
                h.customAlert(C("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + X.join(`
`), "warning");
                return;
              }
              if (q.length === 0) {
                h.customAlert(C("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (q.length > z) {
                h.customAlert(C("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + z + C("\u5F20\u56FE\u7247"), "warning");
                return;
              }
              if (K && typeof K == "function") {
                var _;
                K(q, (0, d.default)(_ = this.insertImg).call(_, this));
                return;
              }
              var le = new FormData();
              if ((0, c.default)(q).call(q, function(ae, re) {
                var se = I || ae.name;
                q.length > 1 && (se = se + (re + 1)), le.append(se, ae);
              }), R) {
                var Se = R.split("#");
                R = Se[0];
                var ve = Se[1] || "";
                (0, c.default)(x).call(x, U, function(ae, re) {
                  H && ((0, m.default)(R).call(R, "?") > 0 ? R += "&" : R += "?", R = R + ae + "=" + re), le.append(ae, re);
                }), ve && (R += "#" + ve);
                var ce = w.default(R, { timeout: V, formData: le, headers: j, withCredentials: !!Q, beforeSend: function(re) {
                  if (P.before)
                    return P.before(re, y, q);
                }, onTimeout: function(re) {
                  h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), P.timeout && P.timeout(re, y);
                }, onProgress: function(re, se) {
                  var pe = new E.default(y);
                  se.lengthComputable && (re = se.loaded / se.total, pe.show(re));
                }, onError: function(re) {
                  h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", C("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + C("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + re.status), P.error && P.error(re, y);
                }, onFail: function(re, se) {
                  h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", C("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + C("\u8FD4\u56DE\u7ED3\u679C") + ": ") + se), P.fail && P.fail(re, y, se);
                }, onSuccess: function(re, se) {
                  if (P.customInsert) {
                    var pe;
                    P.customInsert((0, d.default)(pe = M.insertImg).call(pe, M), se, y);
                    return;
                  }
                  if (se.errno != "0") {
                    h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", C("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + C("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + se.errno), P.fail && P.fail(re, y, se);
                    return;
                  }
                  var Pe = se.data;
                  (0, c.default)(Pe).call(Pe, function(Ee) {
                    typeof Ee == "string" ? M.insertImg(Ee) : M.insertImg(Ee.url, Ee.alt, Ee.href);
                  }), P.success && P.success(re, y, se);
                } });
                typeof ce == "string" && h.customAlert(ce, "error");
                return;
              }
              O && x.arrForEach(v, function(ae) {
                var re = M, se = new FileReader();
                se.readAsDataURL(ae), se.onload = function() {
                  if (!!this.result) {
                    var pe = this.result.toString();
                    re.insertImg(pe, pe);
                  }
                };
              });
            }
          }
        }, S;
      }();
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(410)), c = s(t(4)), m = s(t(45));
      (0, f.default)(o, "__esModule", { value: !0 }), o.dealTextNode = o.isAllTodo = o.isTodo = o.getCursorNextNode = void 0;
      function T(S) {
        return S.length ? S.attr("class") === "w-e-todo" : !1;
      }
      o.isTodo = T;
      function x(S) {
        var v = S.selection.getSelectionRangeTopNodes();
        if (v.length !== 0)
          return (0, d.default)(v).call(v, function(M) {
            return T(M);
          });
      }
      o.isAllTodo = x;
      function w(S, v, M) {
        var y;
        if (!!S.hasChildNodes()) {
          var h = S.cloneNode(), b = !1;
          v.nodeValue === "" && (b = !0);
          var C = [];
          return (0, c.default)(y = S.childNodes).call(y, function(R) {
            if (!E(R, v) && b && (h.appendChild(R.cloneNode(!0)), R.nodeName !== "BR" && C.push(R)), E(R, v)) {
              if (R.nodeType === 1) {
                var O = w(R, v, M);
                O && O.textContent !== "" && (h == null || h.appendChild(O));
              }
              if (R.nodeType === 3 && v.isEqualNode(R)) {
                var B = g(R, M);
                h.textContent = B;
              }
              b = !0;
            }
          }), (0, c.default)(C).call(C, function(R) {
            var O = R;
            O.remove();
          }), h;
        }
      }
      o.getCursorNextNode = w;
      function E(S, v) {
        return S.nodeType === 3 ? S.nodeValue === v.nodeValue : S.contains(v);
      }
      function g(S, v, M) {
        M === void 0 && (M = !0);
        var y = S.nodeValue, h = y == null ? void 0 : (0, m.default)(y).call(y, 0, v);
        if (y = y == null ? void 0 : (0, m.default)(y).call(y, v), !M) {
          var b = y;
          y = h, h = b;
        }
        return S.nodeValue = h, y;
      }
      o.dealTextNode = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(430), c = function() {
        function m(T) {
          this.maxSize = T, this.isRe = !1, this.data = new d.CeilStack(T), this.revokeData = new d.CeilStack(T);
        }
        return (0, f.default)(m.prototype, "size", {
          get: function() {
            return [this.data.size, this.revokeData.size];
          },
          enumerable: !1,
          configurable: !0
        }), m.prototype.resetMaxSize = function(T) {
          this.data.resetMax(T), this.revokeData.resetMax(T);
        }, m.prototype.save = function(T) {
          return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(T), this;
        }, m.prototype.revoke = function(T) {
          !this.isRe && (this.isRe = !0);
          var x = this.data.outstack();
          return x ? (this.revokeData.instack(x), T(x), !0) : !1;
        }, m.prototype.restore = function(T) {
          !this.isRe && (this.isRe = !0);
          var x = this.revokeData.outstack();
          return x ? (this.data.instack(x), T(x), !0) : !1;
        }, m;
      }();
      o.default = c;
    }, function(l, o, t) {
      var s = t(14), f = t(11), d = t(73);
      l.exports = !s && !f(function() {
        return Object.defineProperty(d("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(l, o, t) {
      var s = t(11), f = /#|\.prototype\./, d = function(E, g) {
        var S = m[c(E)];
        return S == x ? !0 : S == T ? !1 : typeof g == "function" ? s(g) : !!g;
      }, c = d.normalize = function(w) {
        return String(w).replace(f, ".").toLowerCase();
      }, m = d.data = {}, T = d.NATIVE = "N", x = d.POLYFILL = "P";
      l.exports = d;
    }, function(l, o, t) {
      var s = t(102), f = Function.toString;
      typeof s.inspectSource != "function" && (s.inspectSource = function(d) {
        return f.call(d);
      }), l.exports = s.inspectSource;
    }, function(l, o, t) {
      var s = t(8), f = t(166), d = "__core-js_shared__", c = s[d] || f(d, {});
      l.exports = c;
    }, function(l, o, t) {
      var s = t(104), f = t(19), d = t(16), c = t(10), m = t(42), T = c("iterator"), x = !1, w = function() {
        return this;
      }, E, g, S;
      [].keys && (S = [].keys(), "next" in S ? (g = s(s(S)), g !== Object.prototype && (E = g)) : x = !0), E == null && (E = {}), !m && !d(E, T) && f(E, T, w), l.exports = { IteratorPrototype: E, BUGGY_SAFARI_ITERATORS: x };
    }, function(l, o, t) {
      var s = t(16), f = t(29), d = t(63), c = t(168), m = d("IE_PROTO"), T = Object.prototype;
      l.exports = c ? Object.getPrototypeOf : function(x) {
        return x = f(x), s(x, m) ? x[m] : typeof x.constructor == "function" && x instanceof x.constructor ? x.constructor.prototype : x instanceof Object ? T : null;
      };
    }, function(l, o, t) {
      var s = t(76);
      l.exports = s && !Symbol.sham && It(Symbol.iterator) == "symbol";
    }, function(l, o, t) {
      var s = t(16), f = t(28), d = t(78).indexOf, c = t(51);
      l.exports = function(m, T) {
        var x = f(m), w = 0, E = [], g;
        for (g in x)
          !s(c, g) && s(x, g) && E.push(g);
        for (; T.length > w; )
          s(x, g = T[w++]) && (~d(E, g) || E.push(g));
        return E;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("document", "documentElement");
    }, function(l, o, t) {
      var s = t(8);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(53);
      l.exports = function(f, d, c) {
        for (var m in d)
          c && c.unsafe && f[m] ? f[m] = d[m] : s(f, m, d[m], c);
        return f;
      };
    }, function(l, o, t) {
      var s = t(35), f = t(18), d = t(10), c = t(14), m = d("species");
      l.exports = function(T) {
        var x = s(T), w = f.f;
        c && x && !x[m] && w(x, m, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, function(l, o, t) {
      var s = t(10), f = t(43), d = s("iterator"), c = Array.prototype;
      l.exports = function(m) {
        return m !== void 0 && (f.Array === m || c[d] === m);
      };
    }, function(l, o, t) {
      var s = t(65), f = t(43), d = t(10), c = d("iterator");
      l.exports = function(m) {
        if (m != null)
          return m[c] || m["@@iterator"] || f[s(m)];
      };
    }, function(l, o, t) {
      var s = t(25);
      l.exports = function(f, d, c, m) {
        try {
          return m ? d(s(c)[0], c[1]) : d(c);
        } catch (x) {
          var T = f.return;
          throw T !== void 0 && s(T.call(f)), x;
        }
      };
    }, function(l, o, t) {
      var s = t(10), f = s("iterator"), d = !1;
      try {
        var c = 0, m = { next: function() {
          return { done: !!c++ };
        }, return: function() {
          d = !0;
        } };
        m[f] = function() {
          return this;
        }, Array.from(m, function() {
          throw 2;
        });
      } catch {
      }
      l.exports = function(T, x) {
        if (!x && !d)
          return !1;
        var w = !1;
        try {
          var E = {};
          E[f] = function() {
            return { next: function() {
              return { done: w = !0 };
            } };
          }, T(E);
        } catch {
        }
        return w;
      };
    }, function(l, o, t) {
      var s = t(25), f = t(40), d = t(10), c = d("species");
      l.exports = function(m, T) {
        var x = s(m).constructor, w;
        return x === void 0 || (w = s(x)[c]) == null ? T : f(w);
      };
    }, function(l, o, t) {
      var s = t(8), f = t(11), d = t(33), c = t(39), m = t(107), T = t(73), x = t(117), w = s.location, E = s.setImmediate, g = s.clearImmediate, S = s.process, v = s.MessageChannel, M = s.Dispatch, y = 0, h = {}, b = "onreadystatechange", C, R, O, B = function(H) {
        if (h.hasOwnProperty(H)) {
          var j = h[H];
          delete h[H], j();
        }
      }, F = function(H) {
        return function() {
          B(H);
        };
      }, z = function(H) {
        B(H.data);
      }, I = function(H) {
        s.postMessage(H + "", w.protocol + "//" + w.host);
      };
      (!E || !g) && (E = function(H) {
        for (var j = [], P = 1; arguments.length > P; )
          j.push(arguments[P++]);
        return h[++y] = function() {
          (typeof H == "function" ? H : Function(H)).apply(void 0, j);
        }, C(y), y;
      }, g = function(H) {
        delete h[H];
      }, d(S) == "process" ? C = function(H) {
        S.nextTick(F(H));
      } : M && M.now ? C = function(H) {
        M.now(F(H));
      } : v && !x ? (R = new v(), O = R.port2, R.port1.onmessage = z, C = c(O.postMessage, O, 1)) : s.addEventListener && typeof postMessage == "function" && !s.importScripts && !f(I) && w.protocol !== "file:" ? (C = I, s.addEventListener("message", z, !1)) : b in T("script") ? C = function(H) {
        m.appendChild(T("script"))[b] = function() {
          m.removeChild(this), B(H);
        };
      } : C = function(H) {
        setTimeout(F(H), 0);
      }), l.exports = { set: E, clear: g };
    }, function(l, o, t) {
      var s = t(84);
      l.exports = /(iphone|ipod|ipad).*applewebkit/i.test(s);
    }, function(l, o, t) {
      var s = t(25), f = t(13), d = t(85);
      l.exports = function(c, m) {
        if (s(c), f(m) && m.constructor === c)
          return m;
        var T = d.f(c), x = T.resolve;
        return x(m), T.promise;
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return { error: !1, value: t() };
        } catch (s) {
          return { error: !0, value: s };
        }
      };
    }, function(l, o, t) {
      l.exports = t(197);
    }, function(l, o, t) {
      var s = t(5), f = t(8), d = t(122), c = t(11), m = t(19), T = t(66), x = t(83), w = t(13), E = t(36), g = t(18).f, S = t(30).forEach, v = t(14), M = t(41), y = M.set, h = M.getterFor;
      l.exports = function(b, C, R) {
        var O = b.indexOf("Map") !== -1, B = b.indexOf("Weak") !== -1, F = O ? "set" : "add", z = f[b], I = z && z.prototype, U = {}, H;
        if (!v || typeof z != "function" || !(B || I.forEach && !c(function() {
          new z().entries().next();
        })))
          H = R.getConstructor(C, b, O, F), d.REQUIRED = !0;
        else {
          H = C(function(P, V) {
            y(x(P, H, b), { type: b, collection: new z() }), V != null && T(V, P[F], P, O);
          });
          var j = h(b);
          S(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(P) {
            var V = P == "add" || P == "set";
            P in I && !(B && P == "clear") && m(H.prototype, P, function(Q, K) {
              var q = j(this).collection;
              if (!V && B && !w(Q))
                return P == "get" ? void 0 : !1;
              var X = q[P](Q === 0 ? 0 : Q, K);
              return V ? this : X;
            });
          }), B || g(H.prototype, "size", { configurable: !0, get: function() {
            return j(this).collection.size;
          } });
        }
        return E(H, b, !1, !0), U[b] = H, s({ global: !0, forced: !0 }, U), B || R.setStrong(H, b, O), H;
      };
    }, function(l, o, t) {
      var s = t(51), f = t(13), d = t(16), c = t(18).f, m = t(64), T = t(200), x = m("meta"), w = 0, E = Object.isExtensible || function() {
        return !0;
      }, g = function(b) {
        c(b, x, { value: {
          objectID: "O" + ++w,
          weakData: {}
        } });
      }, S = function(b, C) {
        if (!f(b))
          return It(b) == "symbol" ? b : (typeof b == "string" ? "S" : "P") + b;
        if (!d(b, x)) {
          if (!E(b))
            return "F";
          if (!C)
            return "E";
          g(b);
        }
        return b[x].objectID;
      }, v = function(b, C) {
        if (!d(b, x)) {
          if (!E(b))
            return !0;
          if (!C)
            return !1;
          g(b);
        }
        return b[x].weakData;
      }, M = function(b) {
        return T && y.REQUIRED && E(b) && !d(b, x) && g(b), b;
      }, y = l.exports = { REQUIRED: !1, fastKey: S, getWeakData: v, onFreeze: M };
      s[x] = !0;
    }, function(l, o, t) {
      var s = t(18).f, f = t(77), d = t(109), c = t(39), m = t(83), T = t(66), x = t(75), w = t(110), E = t(14), g = t(122).fastKey, S = t(41), v = S.set, M = S.getterFor;
      l.exports = { getConstructor: function(h, b, C, R) {
        var O = h(function(I, U) {
          m(I, O, b), v(I, { type: b, index: f(null), first: void 0, last: void 0, size: 0 }), E || (I.size = 0), U != null && T(U, I[R], I, C);
        }), B = M(b), F = function(U, H, j) {
          var P = B(U), V = z(U, H), Q, K;
          return V ? V.value = j : (P.last = V = { index: K = g(H, !0), key: H, value: j, previous: Q = P.last, next: void 0, removed: !1 }, P.first || (P.first = V), Q && (Q.next = V), E ? P.size++ : U.size++, K !== "F" && (P.index[K] = V)), U;
        }, z = function(U, H) {
          var j = B(U), P = g(H), V;
          if (P !== "F")
            return j.index[P];
          for (V = j.first; V; V = V.next)
            if (V.key == H)
              return V;
        };
        return d(O.prototype, {
          clear: function() {
            for (var U = this, H = B(U), j = H.index, P = H.first; P; )
              P.removed = !0, P.previous && (P.previous = P.previous.next = void 0), delete j[P.index], P = P.next;
            H.first = H.last = void 0, E ? H.size = 0 : U.size = 0;
          },
          delete: function(U) {
            var H = this, j = B(H), P = z(H, U);
            if (P) {
              var V = P.next, Q = P.previous;
              delete j.index[P.index], P.removed = !0, Q && (Q.next = V), V && (V.previous = Q), j.first == P && (j.first = V), j.last == P && (j.last = Q), E ? j.size-- : H.size--;
            }
            return !!P;
          },
          forEach: function(U) {
            for (var H = B(this), j = c(U, arguments.length > 1 ? arguments[1] : void 0, 3), P; P = P ? P.next : H.first; )
              for (j(P.value, P.key, this); P && P.removed; )
                P = P.previous;
          },
          has: function(U) {
            return !!z(this, U);
          }
        }), d(O.prototype, C ? {
          get: function(U) {
            var H = z(this, U);
            return H && H.value;
          },
          set: function(U, H) {
            return F(this, U === 0 ? 0 : U, H);
          }
        } : {
          add: function(U) {
            return F(this, U = U === 0 ? 0 : U, U);
          }
        }), E && s(O.prototype, "size", { get: function() {
          return B(this).size;
        } }), O;
      }, setStrong: function(h, b, C) {
        var R = b + " Iterator", O = M(b), B = M(R);
        x(h, b, function(F, z) {
          v(this, { type: R, target: F, state: O(F), kind: z, last: void 0 });
        }, function() {
          for (var F = B(this), z = F.kind, I = F.last; I && I.removed; )
            I = I.previous;
          return !F.target || !(F.last = I = I ? I.next : F.state.first) ? (F.target = void 0, { value: void 0, done: !0 }) : z == "keys" ? { value: I.key, done: !1 } : z == "values" ? { value: I.value, done: !1 } : { value: [I.key, I.value], done: !1 };
        }, C ? "entries" : "values", !C, !0), w(b);
      } };
    }, function(l, o, t) {
      var s = t(12);
      s("iterator");
    }, function(l, o, t) {
      var s = t(106), f = t(80), d = f.concat("length", "prototype");
      o.f = Object.getOwnPropertyNames || function(m) {
        return s(m, d);
      };
    }, function(l, o) {
      o.f = Object.getOwnPropertySymbols;
    }, function(l, o, t) {
      l.exports = t(268);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.default = { zIndex: 1e4 };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.default = { focus: !0, height: 300, placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587", zIndexFullScreen: 10002, showFullScreen: !0 };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 }), o.getPasteImgs = o.getPasteHtml = o.getPasteText = void 0;
      var c = t(2), m = t(6), T = c.__importDefault(t(292));
      function x(g) {
        var S = g.clipboardData, v = "";
        return S == null ? v = window.clipboardData && window.clipboardData.getData("text") : v = S.getData("text/plain"), m.replaceHtmlSymbol(v);
      }
      o.getPasteText = x;
      function w(g, S, v) {
        S === void 0 && (S = !0), v === void 0 && (v = !1);
        var M = g.clipboardData, y = "";
        if (M && (y = M.getData("text/html")), !y) {
          var h = x(g);
          if (!h)
            return "";
          y = "<p>" + h + "</p>";
        }
        return y = y.replace(/<(\d)/gm, function(b, C) {
          return "&lt;" + C;
        }), y = y.replace(/<(\/?meta.*?)>/gim, ""), y = T.default(y, S, v), y;
      }
      o.getPasteHtml = w;
      function E(g) {
        var S, v = [], M = x(g);
        if (M)
          return v;
        var y = (S = g.clipboardData) === null || S === void 0 ? void 0 : S.items;
        return y && (0, d.default)(m).call(m, y, function(h, b) {
          var C = b.type;
          /image/i.test(C) && v.push(b.getAsFile());
        }), v;
      }
      o.getPasteImgs = E;
    }, function(l, o, t) {
      l.exports = t(294);
    }, function(l, o, t) {
      l.exports = t(310);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), x = t(7), w = function() {
        function E(g, S) {
          var v = this;
          this.hideTimeoutId = 0, this.menu = g, this.conf = S;
          var M = T.default('<div class="w-e-droplist"></div>'), y = T.default("<p>" + S.title + "</p>");
          y.addClass("w-e-dp-title"), M.append(y);
          var h = S.list || [], b = S.type || "list", C = S.clickHandler || x.EMPTY_FN, R = T.default('<ul class="' + (b === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
          (0, d.default)(h).call(h, function(O) {
            var B = O.$elem, F = O.value, z = T.default('<li class="w-e-item"></li>');
            B && (z.append(B), R.append(z), z.on("click", function(I) {
              C(F), I.stopPropagation(), v.hideTimeoutId = (0, c.default)(function() {
                v.hide();
              });
            }));
          }), M.append(R), M.on("mouseleave", function() {
            v.hideTimeoutId = (0, c.default)(function() {
              v.hide();
            });
          }), this.$container = M, this.rendered = !1, this._show = !1;
        }
        return E.prototype.show = function() {
          this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
          var g = this.menu, S = g.$elem, v = this.$container;
          if (!this._show) {
            if (this.rendered)
              v.show();
            else {
              var M = S.getBoundingClientRect().height || 0, y = this.conf.width || 100;
              v.css("margin-top", M + "px").css("width", y + "px"), S.append(v), this.rendered = !0;
            }
            this._show = !0;
          }
        }, E.prototype.hide = function() {
          var g = this.$container;
          !this._show || (g.hide(), this._show = !1);
        }, (0, f.default)(E.prototype, "isShow", { get: function() {
          return this._show;
        }, enumerable: !1, configurable: !0 }), E;
      }();
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c) {
        var m = c.selection.getSelectionContainerElem();
        return m != null && m.length ? m.getNodeName() === "A" : !1;
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(92)), d = s(t(1)), c = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var m = t(6);
      function T(x, w) {
        var E = new XMLHttpRequest();
        if (E.open("POST", x), E.timeout = w.timeout || 10 * 1e3, E.ontimeout = function() {
          console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), w.onTimeout && w.onTimeout(E);
        }, E.upload && (E.upload.onprogress = function(S) {
          var v = S.loaded / S.total;
          w.onProgress && w.onProgress(v, S);
        }), w.headers && (0, c.default)(m).call(m, w.headers, function(S, v) {
          E.setRequestHeader(S, v);
        }), E.withCredentials = !!w.withCredentials, w.beforeSend) {
          var g = w.beforeSend(E);
          if (g && (0, f.default)(g) === "object" && g.prevent)
            return g.msg;
        }
        return E.onreadystatechange = function() {
          if (E.readyState === 4) {
            var S = E.status;
            if (!(S < 200) && !(S >= 300 && S < 400)) {
              if (S >= 400) {
                console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + S), w.onError && w.onError(E);
                return;
              }
              var v = E.responseText, M;
              if ((0, f.default)(v) !== "object")
                try {
                  M = JSON.parse(v);
                } catch {
                  console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", v), w.onFail && w.onFail(E, v);
                  return;
                }
              else
                M = v;
              w.onSuccess(E, M);
            }
          }
        }, E.send(w.formData || null), E;
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(342)), c = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), x = function() {
        function w(E) {
          this.editor = E, this.$textContainer = E.$textContainerElem, this.$bar = T.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }
        return w.prototype.show = function(E) {
          var g = this;
          if (!this.isShow) {
            this.isShow = !0;
            var S = this.$bar, v = this.$textContainer;
            v.append(S), (0, d.default)() - this.time > 100 && E <= 1 && (S.css("width", E * 100 + "%"), this.time = (0, d.default)());
            var M = this.timeoutId;
            M && clearTimeout(M), this.timeoutId = (0, c.default)(function() {
              g.hide();
            }, 500);
          }
        }, w.prototype.hide = function() {
          var E = this.$bar;
          E.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }, w;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.ListType = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(24)), T = t(47), x = d.__importStar(t(371)), w;
      (function(g) {
        g.OrderedList = "OL", g.UnorderedList = "UL";
      })(w = o.ListType || (o.ListType = {}));
      var E = function(g) {
        d.__extends(S, g);
        function S(v) {
          var M = this, y = c.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), h = { width: 130, title: "\u5E8F\u5217", type: "list", list: [{ $elem: c.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`), value: w.UnorderedList }, { $elem: c.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`), value: w.OrderedList }], clickHandler: function(C) {
            M.command(C);
          } };
          return M = g.call(this, y, v, h) || this, M;
        }
        return S.prototype.command = function(v) {
          var M = this.editor, y = M.selection.getSelectionContainerElem();
          y !== void 0 && (this.handleSelectionRangeNodes(v), this.tryChangeActive());
        }, S.prototype.validator = function(v, M, y) {
          return !(!v.length || !M.length || y.equal(v) || y.equal(M));
        }, S.prototype.handleSelectionRangeNodes = function(v) {
          var M = this.editor, y = M.selection, h = v.toLowerCase(), b = y.getSelectionContainerElem(), C = y.getSelectionStartElem().getNodeTop(M), R = y.getSelectionEndElem().getNodeTop(M);
          if (!!this.validator(C, R, M.$textElem)) {
            var O = y.getRange(), B = O == null ? void 0 : O.collapsed;
            M.$textElem.equal(b) || (b = b.getNodeTop(M));
            var F = { editor: M, listType: v, listTarget: h, $selectionElem: b, $startElem: C, $endElem: R }, z;
            this.isOrderElem(b) ? z = x.ClassType.Wrap : this.isOrderElem(C) && this.isOrderElem(R) ? z = x.ClassType.Join : this.isOrderElem(C) ? z = x.ClassType.StartJoin : this.isOrderElem(R) ? z = x.ClassType.EndJoin : z = x.ClassType.Other;
            var I = new x.default(x.createListHandle(z, F, O));
            T.updateRange(M, I.getSelectionRangeElem(), !!B);
          }
        }, S.prototype.isOrderElem = function(v) {
          var M = v.getNodeName();
          return M === w.OrderedList || M === w.UnorderedList;
        }, S.prototype.tryChangeActive = function() {
        }, S;
      }(m.default);
      o.default = E;
    }, function(l, o, t) {
      l.exports = t(395);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c) {
        var m = c.selection.getSelectionContainerElem();
        return m != null && m.length ? !!(m.getNodeName() == "CODE" || m.getNodeName() == "PRE" || m.parent().getNodeName() == "CODE" || m.parent().getNodeName() == "PRE" || /hljs/.test(m.parent().attr("class"))) : !1;
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31));
      (0, f.default)(o, "__esModule", { value: !0 }), o.todo = void 0;
      var c = t(2), m = c.__importDefault(t(3)), T = function() {
        function w(E) {
          var g;
          this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = m.default(this.template), this.$child = (g = E == null ? void 0 : E.childNodes()) === null || g === void 0 ? void 0 : g.clone(!0);
        }
        return w.prototype.init = function() {
          var E = this.$child, g = this.getInputContainer();
          E && E.insertAfter(g);
        }, w.prototype.getInput = function() {
          var E = this.$todo, g = (0, d.default)(E).call(E, "input");
          return g;
        }, w.prototype.getInputContainer = function() {
          var E = this.getInput().parent();
          return E;
        }, w.prototype.getTodo = function() {
          return this.$todo;
        }, w;
      }();
      o.todo = T;
      function x(w) {
        var E = new T(w);
        return E.init(), E;
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2);
      t(146), t(148), t(152), t(154), t(156), t(158), t(160);
      var c = d.__importDefault(t(87));
      d.__exportStar(t(442), o);
      try {
      } catch {
        throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
      }
      o.default = c.default;
    }, function(l, o, t) {
      var s = t(143);
      l.exports = s;
    }, function(l, o, t) {
      t(144);
      var s = t(9), f = s.Object, d = l.exports = function(m, T, x) {
        return f.defineProperty(m, T, x);
      };
      f.defineProperty.sham && (d.sham = !0);
    }, function(l, o, t) {
      var s = t(5), f = t(14), d = t(18);
      s({ target: "Object", stat: !0, forced: !f, sham: !f }, { defineProperty: d.f });
    }, function(l, o) {
      var t;
      t = function() {
        return this;
      }();
      try {
        t = t || new Function("return this")();
      } catch {
        (typeof window > "u" ? "undefined" : It(window)) === "object" && (t = window);
      }
      l.exports = t;
    }, function(l, o, t) {
      var s = t(20), f = t(147);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), f = t(149);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21), f = t(150), d = t(151);
      o = s(!1);
      var c = f(d);
      o.push([l.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + c + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      l.exports = function(s, f) {
        return f || (f = {}), s = s && s.__esModule ? s.default : s, typeof s != "string" ? s : (/^['"].*['"]$/.test(s) && (s = s.slice(1, -1)), f.hash && (s += f.hash), /["'() \t\n]/.test(s) || f.needQuotes ? '"'.concat(s.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : s);
      };
    }, function(l, o, t) {
      t.r(o), o.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }, function(l, o, t) {
      var s = t(20), f = t(153);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), f = t(155);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), f = t(157);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), f = t(159);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), f = s(t(161));
      Element.prototype.matches || (Element.prototype.matches = function(d) {
        var c = this.ownerDocument.querySelectorAll(d), m = c.length;
        for (m; m >= 0 && c.item(m) !== this; m--)
          ;
        return m > -1;
      }), f.default || (window.Promise = f.default);
    }, function(l, o, t) {
      l.exports = t(162);
    }, function(l, o, t) {
      var s = t(163);
      l.exports = s;
    }, function(l, o, t) {
      t(61), t(50), t(54), t(175), t(178), t(179);
      var s = t(9);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(62), f = t(49), d = function(m) {
        return function(T, x) {
          var w = String(f(T)), E = s(x), g = w.length, S, v;
          return E < 0 || E >= g ? m ? "" : void 0 : (S = w.charCodeAt(E), S < 55296 || S > 56319 || E + 1 === g || (v = w.charCodeAt(E + 1)) < 56320 || v > 57343 ? m ? w.charAt(E) : S : m ? w.slice(E, E + 2) : (S - 55296 << 10) + (v - 56320) + 65536);
        };
      };
      l.exports = {
        codeAt: d(!1),
        charAt: d(!0)
      };
    }, function(l, o, t) {
      var s = t(8), f = t(101), d = s.WeakMap;
      l.exports = typeof d == "function" && /native code/.test(f(d));
    }, function(l, o, t) {
      var s = t(8), f = t(19);
      l.exports = function(d, c) {
        try {
          f(s, d, c);
        } catch {
          s[d] = c;
        }
        return c;
      };
    }, function(l, o, t) {
      var s = t(103).IteratorPrototype, f = t(77), d = t(48), c = t(36), m = t(43), T = function() {
        return this;
      };
      l.exports = function(x, w, E) {
        var g = w + " Iterator";
        return x.prototype = f(s, { next: d(1, E) }), c(x, g, !1, !0), m[g] = T, x;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        function f() {
        }
        return f.prototype.constructor = null, Object.getPrototypeOf(new f()) !== f.prototype;
      });
    }, function(l, o, t) {
      var s = t(14), f = t(18), d = t(25), c = t(52);
      l.exports = s ? Object.defineProperties : function(T, x) {
        d(T);
        for (var w = c(x), E = w.length, g = 0, S; E > g; )
          f.f(T, S = w[g++], x[S]);
        return T;
      };
    }, function(l, o, t) {
      var s = t(81), f = t(65);
      l.exports = s ? {}.toString : function() {
        return "[object " + f(this) + "]";
      };
    }, function(l, o, t) {
      var s = t(25), f = t(172);
      l.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var d = !1, c = {}, m;
        try {
          m = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, m.call(c, []), d = c instanceof Array;
        } catch {
        }
        return function(x, w) {
          return s(x), f(w), d ? m.call(x, w) : x.__proto__ = w, x;
        };
      }() : void 0);
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(f) {
        if (!s(f) && f !== null)
          throw TypeError("Can't set " + String(f) + " as a prototype");
        return f;
      };
    }, function(l, o, t) {
      var s = t(28), f = t(82), d = t(43), c = t(41), m = t(75), T = "Array Iterator", x = c.set, w = c.getterFor(T);
      l.exports = m(Array, "Array", function(E, g) {
        x(this, {
          type: T,
          target: s(E),
          index: 0,
          kind: g
        });
      }, function() {
        var E = w(this), g = E.target, S = E.kind, v = E.index++;
        return !g || v >= g.length ? (E.target = void 0, { value: void 0, done: !0 }) : S == "keys" ? { value: v, done: !1 } : S == "values" ? { value: g[v], done: !1 } : { value: [v, g[v]], done: !1 };
      }, "values"), d.Arguments = d.Array, f("keys"), f("values"), f("entries");
    }, function(l, o) {
      l.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, function(l, o, t) {
      var s = t(5), f = t(42), d = t(8), c = t(35), m = t(108), T = t(53), x = t(109), w = t(36), E = t(110), g = t(13), S = t(40), v = t(83), M = t(33), y = t(101), h = t(66), b = t(114), C = t(115), R = t(116).set, O = t(176), B = t(118), F = t(177), z = t(85), I = t(119), U = t(41), H = t(100), j = t(10), P = t(86), V = j("species"), Q = "Promise", K = U.get, q = U.set, X = U.getterFor(Q), _ = m, le = d.TypeError, Se = d.document, ve = d.process, ce = c("fetch"), ae = z.f, re = ae, se = M(ve) == "process", pe = !!(Se && Se.createEvent && d.dispatchEvent), Pe = "unhandledrejection", Ee = "rejectionhandled", je = 0, Ft = 1, Nt = 2, lt = 1, Et = 2, Bt, dt, Xt, Ue, Ht = H(Q, function() {
        var We = y(_) !== String(_);
        if (!We && (P === 66 || !se && typeof PromiseRejectionEvent != "function") || f && !_.prototype.finally)
          return !0;
        if (P >= 51 && /native code/.test(_))
          return !1;
        var Ce = _.resolve(1), me = function(oe) {
          oe(function() {
          }, function() {
          });
        }, Oe = Ce.constructor = {};
        return Oe[V] = me, !(Ce.then(function() {
        }) instanceof me);
      }), Ar = Ht || !b(function(We) {
        _.all(We).catch(function() {
        });
      }), An = function(Ce) {
        var me;
        return g(Ce) && typeof (me = Ce.then) == "function" ? me : !1;
      }, hn = function(Ce, me, Oe) {
        if (!me.notified) {
          me.notified = !0;
          var be = me.reactions;
          O(function() {
            for (var oe = me.value, De = me.state == Ft, ue = 0; be.length > ue; ) {
              var Ie = be[ue++], ze = De ? Ie.ok : Ie.fail, Ye = Ie.resolve, Ke = Ie.reject, st = Ie.domain, _e, Vt, mt;
              try {
                ze ? (De || (me.rejection === Et && Sn(Ce, me), me.rejection = lt), ze === !0 ? _e = oe : (st && st.enter(), _e = ze(oe), st && (st.exit(), mt = !0)), _e === Ie.promise ? Ke(le("Promise-chain cycle")) : (Vt = An(_e)) ? Vt.call(_e, Ye, Ke) : Ye(_e)) : Ke(oe);
              } catch (er) {
                st && !mt && st.exit(), Ke(er);
              }
            }
            me.reactions = [], me.notified = !1, Oe && !me.rejection && xn(Ce, me);
          });
        }
      }, In = function(Ce, me, Oe) {
        var be, oe;
        pe ? (be = Se.createEvent("Event"), be.promise = me, be.reason = Oe, be.initEvent(Ce, !1, !0), d.dispatchEvent(be)) : be = { promise: me, reason: Oe }, (oe = d["on" + Ce]) ? oe(be) : Ce === Pe && F("Unhandled promise rejection", Oe);
      }, xn = function(Ce, me) {
        R.call(d, function() {
          var Oe = me.value, be = jt(me), oe;
          if (be && (oe = I(function() {
            se ? ve.emit("unhandledRejection", Oe, Ce) : In(Pe, Ce, Oe);
          }), me.rejection = se || jt(me) ? Et : lt, oe.error))
            throw oe.value;
        });
      }, jt = function(Ce) {
        return Ce.rejection !== lt && !Ce.parent;
      }, Sn = function(Ce, me) {
        R.call(d, function() {
          se ? ve.emit("rejectionHandled", Ce) : In(Ee, Ce, me.value);
        });
      }, Ct = function(Ce, me, Oe, be) {
        return function(oe) {
          Ce(me, Oe, oe, be);
        };
      }, Ze = function(Ce, me, Oe, be) {
        me.done || (me.done = !0, be && (me = be), me.value = Oe, me.state = Nt, hn(Ce, me, !0));
      }, Jt = function We(Ce, me, Oe, be) {
        if (!me.done) {
          me.done = !0, be && (me = be);
          try {
            if (Ce === Oe)
              throw le("Promise can't be resolved itself");
            var oe = An(Oe);
            oe ? O(function() {
              var De = { done: !1 };
              try {
                oe.call(Oe, Ct(We, Ce, De, me), Ct(Ze, Ce, De, me));
              } catch (ue) {
                Ze(Ce, De, ue, me);
              }
            }) : (me.value = Oe, me.state = Ft, hn(Ce, me, !1));
          } catch (De) {
            Ze(Ce, { done: !1 }, De, me);
          }
        }
      };
      Ht && (_ = function(Ce) {
        v(this, _, Q), S(Ce), Bt.call(this);
        var me = K(this);
        try {
          Ce(Ct(Jt, this, me), Ct(Ze, this, me));
        } catch (Oe) {
          Ze(this, me, Oe);
        }
      }, Bt = function(Ce) {
        q(this, { type: Q, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: je, value: void 0 });
      }, Bt.prototype = x(_.prototype, {
        then: function(Ce, me) {
          var Oe = X(this), be = ae(C(this, _));
          return be.ok = typeof Ce == "function" ? Ce : !0, be.fail = typeof me == "function" && me, be.domain = se ? ve.domain : void 0, Oe.parent = !0, Oe.reactions.push(be), Oe.state != je && hn(this, Oe, !1), be.promise;
        },
        catch: function(Ce) {
          return this.then(void 0, Ce);
        }
      }), dt = function() {
        var Ce = new Bt(), me = K(Ce);
        this.promise = Ce, this.resolve = Ct(Jt, Ce, me), this.reject = Ct(Ze, Ce, me);
      }, z.f = ae = function(Ce) {
        return Ce === _ || Ce === Xt ? new dt(Ce) : re(Ce);
      }, !f && typeof m == "function" && (Ue = m.prototype.then, T(m.prototype, "then", function(Ce, me) {
        var Oe = this;
        return new _(function(be, oe) {
          Ue.call(Oe, be, oe);
        }).then(Ce, me);
      }, { unsafe: !0 }), typeof ce == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
        fetch: function(Ce) {
          return B(_, ce.apply(d, arguments));
        }
      }))), s({ global: !0, wrap: !0, forced: Ht }, { Promise: _ }), w(_, Q, !1, !0), E(Q), Xt = c(Q), s({ target: Q, stat: !0, forced: Ht }, {
        reject: function(Ce) {
          var me = ae(this);
          return me.reject.call(void 0, Ce), me.promise;
        }
      }), s({ target: Q, stat: !0, forced: f || Ht }, {
        resolve: function(Ce) {
          return B(f && this === Xt ? _ : this, Ce);
        }
      }), s({ target: Q, stat: !0, forced: Ar }, {
        all: function(Ce) {
          var me = this, Oe = ae(me), be = Oe.resolve, oe = Oe.reject, De = I(function() {
            var ue = S(me.resolve), Ie = [], ze = 0, Ye = 1;
            h(Ce, function(Ke) {
              var st = ze++, _e = !1;
              Ie.push(void 0), Ye++, ue.call(me, Ke).then(function(Vt) {
                _e || (_e = !0, Ie[st] = Vt, --Ye || be(Ie));
              }, oe);
            }), --Ye || be(Ie);
          });
          return De.error && oe(De.value), Oe.promise;
        },
        race: function(Ce) {
          var me = this, Oe = ae(me), be = Oe.reject, oe = I(function() {
            var De = S(me.resolve);
            h(Ce, function(ue) {
              De.call(me, ue).then(Oe.resolve, be);
            });
          });
          return oe.error && be(oe.value), Oe.promise;
        }
      });
    }, function(l, o, t) {
      var s = t(8), f = t(71).f, d = t(33), c = t(116).set, m = t(117), T = s.MutationObserver || s.WebKitMutationObserver, x = s.process, w = s.Promise, E = d(x) == "process", g = f(s, "queueMicrotask"), S = g && g.value, v, M, y, h, b, C, R, O;
      S || (v = function() {
        var F, z;
        for (E && (F = x.domain) && F.exit(); M; ) {
          z = M.fn, M = M.next;
          try {
            z();
          } catch (I) {
            throw M ? h() : y = void 0, I;
          }
        }
        y = void 0, F && F.enter();
      }, E ? h = function() {
        x.nextTick(v);
      } : T && !m ? (b = !0, C = document.createTextNode(""), new T(v).observe(C, { characterData: !0 }), h = function() {
        C.data = b = !b;
      }) : w && w.resolve ? (R = w.resolve(void 0), O = R.then, h = function() {
        O.call(R, v);
      }) : h = function() {
        c.call(s, v);
      }), l.exports = S || function(B) {
        var F = { fn: B, next: void 0 };
        y && (y.next = F), M || (M = F, h()), y = F;
      };
    }, function(l, o, t) {
      var s = t(8);
      l.exports = function(f, d) {
        var c = s.console;
        c && c.error && (arguments.length === 1 ? c.error(f) : c.error(f, d));
      };
    }, function(l, o, t) {
      var s = t(5), f = t(40), d = t(85), c = t(119), m = t(66);
      s({ target: "Promise", stat: !0 }, { allSettled: function(x) {
        var w = this, E = d.f(w), g = E.resolve, S = E.reject, v = c(function() {
          var M = f(w.resolve), y = [], h = 0, b = 1;
          m(x, function(C) {
            var R = h++, O = !1;
            y.push(void 0), b++, M.call(w, C).then(function(B) {
              O || (O = !0, y[R] = { status: "fulfilled", value: B }, --b || g(y));
            }, function(B) {
              O || (O = !0, y[R] = { status: "rejected", reason: B }, --b || g(y));
            });
          }), --b || g(y);
        });
        return v.error && S(v.value), E.promise;
      } });
    }, function(l, o, t) {
      var s = t(5), f = t(42), d = t(108), c = t(11), m = t(35), T = t(115), x = t(118), w = t(53), E = !!d && c(function() {
        d.prototype.finally.call({ then: function() {
        } }, function() {
        });
      });
      s({ target: "Promise", proto: !0, real: !0, forced: E }, { finally: function(S) {
        var v = T(this, m("Promise")), M = typeof S == "function";
        return this.then(M ? function(y) {
          return x(v, S()).then(function() {
            return y;
          });
        } : S, M ? function(y) {
          return x(v, S()).then(function() {
            throw y;
          });
        } : S);
      } }), !f && typeof d == "function" && !d.prototype.finally && w(d.prototype, "finally", m("Promise").prototype.finally);
    }, function(l, o, t) {
      t(54);
      var s = t(181), f = t(65), d = Array.prototype, c = { DOMTokenList: !0, NodeList: !0 };
      l.exports = function(m) {
        var T = m.forEach;
        return m === d || m instanceof Array && T === d.forEach || c.hasOwnProperty(f(m)) ? s : T;
      };
    }, function(l, o, t) {
      var s = t(182);
      l.exports = s;
    }, function(l, o, t) {
      t(183);
      var s = t(15);
      l.exports = s("Array").forEach;
    }, function(l, o, t) {
      var s = t(5), f = t(184);
      s({ target: "Array", proto: !0, forced: [].forEach != f }, { forEach: f });
    }, function(l, o, t) {
      var s = t(30).forEach, f = t(67), d = t(22), c = f("forEach"), m = d("forEach");
      l.exports = !c || !m ? function(x) {
        return s(this, x, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }, function(l, o, t) {
      var s = t(186);
      l.exports = s;
    }, function(l, o, t) {
      t(187);
      var s = t(9);
      l.exports = s.Array.isArray;
    }, function(l, o, t) {
      var s = t(5), f = t(55);
      s({ target: "Array", stat: !0 }, { isArray: f });
    }, function(l, o, t) {
      var s = t(189);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(190), f = Array.prototype;
      l.exports = function(d) {
        var c = d.map;
        return d === f || d instanceof Array && c === f.map ? s : c;
      };
    }, function(l, o, t) {
      t(191);
      var s = t(15);
      l.exports = s("Array").map;
    }, function(l, o, t) {
      var s = t(5), f = t(30).map, d = t(56), c = t(22), m = d("map"), T = c("map");
      s({ target: "Array", proto: !0, forced: !m || !T }, { map: function(w) {
        return f(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(193);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(194), f = String.prototype;
      l.exports = function(d) {
        var c = d.trim;
        return typeof d == "string" || d === f || d instanceof String && c === f.trim ? s : c;
      };
    }, function(l, o, t) {
      t(195);
      var s = t(15);
      l.exports = s("String").trim;
    }, function(l, o, t) {
      var s = t(5), f = t(90).trim, d = t(196);
      s({ target: "String", proto: !0, forced: d("trim") }, { trim: function() {
        return f(this);
      } });
    }, function(l, o, t) {
      var s = t(11), f = t(68), d = "\u200B\x85\u180E";
      l.exports = function(c) {
        return s(function() {
          return !!f[c]() || d[c]() != d || f[c].name !== c;
        });
      };
    }, function(l, o, t) {
      var s = t(198);
      l.exports = s;
    }, function(l, o, t) {
      t(199), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Map;
    }, function(l, o, t) {
      var s = t(121), f = t(123);
      l.exports = s("Map", function(d) {
        return function() {
          return d(this, arguments.length ? arguments[0] : void 0);
        };
      }, f);
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, function(l, o, t) {
      var s = t(202);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(203), f = Array.prototype;
      l.exports = function(d) {
        var c = d.indexOf;
        return d === f || d instanceof Array && c === f.indexOf ? s : c;
      };
    }, function(l, o, t) {
      t(204);
      var s = t(15);
      l.exports = s("Array").indexOf;
    }, function(l, o, t) {
      var s = t(5), f = t(78).indexOf, d = t(67), c = t(22), m = [].indexOf, T = !!m && 1 / [1].indexOf(1, -0) < 0, x = d("indexOf"), w = c("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: T || !x || !w }, { indexOf: function(g) {
        return T ? m.apply(this, arguments) || 0 : f(this, g, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(206);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(207), f = Array.prototype;
      l.exports = function(d) {
        var c = d.splice;
        return d === f || d instanceof Array && c === f.splice ? s : c;
      };
    }, function(l, o, t) {
      t(208);
      var s = t(15);
      l.exports = s("Array").splice;
    }, function(l, o, t) {
      var s = t(5), f = t(79), d = t(62), c = t(34), m = t(29), T = t(88), x = t(69), w = t(56), E = t(22), g = w("splice"), S = E("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), v = Math.max, M = Math.min, y = 9007199254740991, h = "Maximum allowed length exceeded";
      s({ target: "Array", proto: !0, forced: !g || !S }, { splice: function(C, R) {
        var O = m(this), B = c(O.length), F = f(C, B), z = arguments.length, I, U, H, j, P, V;
        if (z === 0 ? I = U = 0 : z === 1 ? (I = 0, U = B - F) : (I = z - 2, U = M(v(d(R), 0), B - F)), B + I - U > y)
          throw TypeError(h);
        for (H = T(O, U), j = 0; j < U; j++)
          P = F + j, P in O && x(H, j, O[P]);
        if (H.length = U, I < U) {
          for (j = F; j < B - U; j++)
            P = j + U, V = j + I, P in O ? O[V] = O[P] : delete O[V];
          for (j = B; j > B - U + I; j--)
            delete O[j - 1];
        } else if (I > U)
          for (j = B - U; j > F; j--)
            P = j + U - 1, V = j + I - 1, P in O ? O[V] = O[P] : delete O[V];
        for (j = 0; j < I; j++)
          O[j + F] = arguments[j + 2];
        return O.length = B - U + I, H;
      } });
    }, function(l, o, t) {
      var s = t(210);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(211), f = Array.prototype;
      l.exports = function(d) {
        var c = d.filter;
        return d === f || d instanceof Array && c === f.filter ? s : c;
      };
    }, function(l, o, t) {
      t(212);
      var s = t(15);
      l.exports = s("Array").filter;
    }, function(l, o, t) {
      var s = t(5), f = t(30).filter, d = t(56), c = t(22), m = d("filter"), T = c("filter");
      s({ target: "Array", proto: !0, forced: !m || !T }, { filter: function(w) {
        return f(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(214);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(215), f = t(217), d = Array.prototype, c = String.prototype;
      l.exports = function(m) {
        var T = m.includes;
        return m === d || m instanceof Array && T === d.includes ? s : typeof m == "string" || m === c || m instanceof String && T === c.includes ? f : T;
      };
    }, function(l, o, t) {
      t(216);
      var s = t(15);
      l.exports = s("Array").includes;
    }, function(l, o, t) {
      var s = t(5), f = t(78).includes, d = t(82), c = t(22), m = c("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: !m }, { includes: function(x) {
        return f(this, x, arguments.length > 1 ? arguments[1] : void 0);
      } }), d("includes");
    }, function(l, o, t) {
      t(218);
      var s = t(15);
      l.exports = s("String").includes;
    }, function(l, o, t) {
      var s = t(5), f = t(219), d = t(49), c = t(221);
      s({ target: "String", proto: !0, forced: !c("includes") }, { includes: function(T) {
        return !!~String(d(this)).indexOf(f(T), arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(220);
      l.exports = function(f) {
        if (s(f))
          throw TypeError("The method doesn't accept regular expressions");
        return f;
      };
    }, function(l, o, t) {
      var s = t(13), f = t(33), d = t(10), c = d("match");
      l.exports = function(m) {
        var T;
        return s(m) && ((T = m[c]) !== void 0 ? !!T : f(m) == "RegExp");
      };
    }, function(l, o, t) {
      var s = t(10), f = s("match");
      l.exports = function(d) {
        var c = /./;
        try {
          "/./"[d](c);
        } catch {
          try {
            return c[f] = !1, "/./"[d](c);
          } catch {
          }
        }
        return !1;
      };
    }, function(l, o, t) {
      var s = t(223);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(224), f = Function.prototype;
      l.exports = function(d) {
        var c = d.bind;
        return d === f || d instanceof Function && c === f.bind ? s : c;
      };
    }, function(l, o, t) {
      t(225);
      var s = t(15);
      l.exports = s("Function").bind;
    }, function(l, o, t) {
      var s = t(5), f = t(226);
      s({ target: "Function", proto: !0 }, { bind: f });
    }, function(l, o, t) {
      var s = t(40), f = t(13), d = [].slice, c = {}, m = function(x, w, E) {
        if (!(w in c)) {
          for (var g = [], S = 0; S < w; S++)
            g[S] = "a[" + S + "]";
          c[w] = Function("C,a", "return new C(" + g.join(",") + ")");
        }
        return c[w](x, E);
      };
      l.exports = Function.bind || function(x) {
        var w = s(this), E = d.call(arguments, 1), g = function() {
          var v = E.concat(d.call(arguments));
          return this instanceof g ? m(w, v.length, v) : w.apply(x, v);
        };
        return f(w.prototype) && (g.prototype = w.prototype), g;
      };
    }, function(l, o, t) {
      l.exports = t(228);
    }, function(l, o, t) {
      var s = t(229);
      l.exports = s;
    }, function(l, o, t) {
      t(124), t(50), t(54);
      var s = t(93);
      l.exports = s.f("iterator");
    }, function(l, o, t) {
      l.exports = t(231);
    }, function(l, o, t) {
      var s = t(232);
      t(251), t(252), t(253), t(254), t(255), l.exports = s;
    }, function(l, o, t) {
      t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(124), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
      var s = t(9);
      l.exports = s.Symbol;
    }, function(l, o, t) {
      var s = t(5), f = t(11), d = t(55), c = t(13), m = t(29), T = t(34), x = t(69), w = t(88), E = t(56), g = t(10), S = t(86), v = g("isConcatSpreadable"), M = 9007199254740991, y = "Maximum allowed index exceeded", h = S >= 51 || !f(function() {
        var O = [];
        return O[v] = !1, O.concat()[0] !== O;
      }), b = E("concat"), C = function(B) {
        if (!c(B))
          return !1;
        var F = B[v];
        return F !== void 0 ? !!F : d(B);
      }, R = !h || !b;
      s({ target: "Array", proto: !0, forced: R }, { concat: function(B) {
        var F = m(this), z = w(F, 0), I = 0, U, H, j, P, V;
        for (U = -1, j = arguments.length; U < j; U++)
          if (V = U === -1 ? F : arguments[U], C(V)) {
            if (P = T(V.length), I + P > M)
              throw TypeError(y);
            for (H = 0; H < P; H++, I++)
              H in V && x(z, I, V[H]);
          } else {
            if (I >= M)
              throw TypeError(y);
            x(z, I++, V);
          }
        return z.length = I, z;
      } });
    }, function(l, o, t) {
      var s = t(5), f = t(8), d = t(35), c = t(42), m = t(14), T = t(76), x = t(105), w = t(11), E = t(16), g = t(55), S = t(13), v = t(25), M = t(29), y = t(28), h = t(60), b = t(48), C = t(77), R = t(52), O = t(125), B = t(235), F = t(126), z = t(71), I = t(18), U = t(59), H = t(19), j = t(53), P = t(74), V = t(63), Q = t(51), K = t(64), q = t(10), X = t(93), _ = t(12), le = t(36), Se = t(41), ve = t(30).forEach, ce = V("hidden"), ae = "Symbol", re = "prototype", se = q("toPrimitive"), pe = Se.set, Pe = Se.getterFor(ae), Ee = Object[re], je = f.Symbol, Ft = d("JSON", "stringify"), Nt = z.f, lt = I.f, Et = B.f, Bt = U.f, dt = P("symbols"), Xt = P("op-symbols"), Ue = P("string-to-symbol-registry"), Ht = P("symbol-to-string-registry"), Ar = P("wks"), An = f.QObject, hn = !An || !An[re] || !An[re].findChild, In = m && w(function() {
        return C(lt({}, "a", { get: function() {
          return lt(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(be, oe, De) {
        var ue = Nt(Ee, oe);
        ue && delete Ee[oe], lt(be, oe, De), ue && be !== Ee && lt(Ee, oe, ue);
      } : lt, xn = function(oe, De) {
        var ue = dt[oe] = C(je[re]);
        return pe(ue, { type: ae, tag: oe, description: De }), m || (ue.description = De), ue;
      }, jt = x ? function(be) {
        return It(be) == "symbol";
      } : function(be) {
        return Object(be) instanceof je;
      }, Sn = function(oe, De, ue) {
        oe === Ee && Sn(Xt, De, ue), v(oe);
        var Ie = h(De, !0);
        return v(ue), E(dt, Ie) ? (ue.enumerable ? (E(oe, ce) && oe[ce][Ie] && (oe[ce][Ie] = !1), ue = C(ue, { enumerable: b(0, !1) })) : (E(oe, ce) || lt(oe, ce, b(1, {})), oe[ce][Ie] = !0), In(oe, Ie, ue)) : lt(oe, Ie, ue);
      }, Ct = function(oe, De) {
        v(oe);
        var ue = y(De), Ie = R(ue).concat(me(ue));
        return ve(Ie, function(ze) {
          (!m || Jt.call(ue, ze)) && Sn(oe, ze, ue[ze]);
        }), oe;
      }, Ze = function(oe, De) {
        return De === void 0 ? C(oe) : Ct(C(oe), De);
      }, Jt = function(oe) {
        var De = h(oe, !0), ue = Bt.call(this, De);
        return this === Ee && E(dt, De) && !E(Xt, De) ? !1 : ue || !E(this, De) || !E(dt, De) || E(this, ce) && this[ce][De] ? ue : !0;
      }, We = function(oe, De) {
        var ue = y(oe), Ie = h(De, !0);
        if (!(ue === Ee && E(dt, Ie) && !E(Xt, Ie))) {
          var ze = Nt(ue, Ie);
          return ze && E(dt, Ie) && !(E(ue, ce) && ue[ce][Ie]) && (ze.enumerable = !0), ze;
        }
      }, Ce = function(oe) {
        var De = Et(y(oe)), ue = [];
        return ve(De, function(Ie) {
          !E(dt, Ie) && !E(Q, Ie) && ue.push(Ie);
        }), ue;
      }, me = function(oe) {
        var De = oe === Ee, ue = Et(De ? Xt : y(oe)), Ie = [];
        return ve(ue, function(ze) {
          E(dt, ze) && (!De || E(Ee, ze)) && Ie.push(dt[ze]);
        }), Ie;
      };
      if (T || (je = function() {
        if (this instanceof je)
          throw TypeError("Symbol is not a constructor");
        var oe = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), De = K(oe), ue = function Ie(ze) {
          this === Ee && Ie.call(Xt, ze), E(this, ce) && E(this[ce], De) && (this[ce][De] = !1), In(this, De, b(1, ze));
        };
        return m && hn && In(Ee, De, { configurable: !0, set: ue }), xn(De, oe);
      }, j(je[re], "toString", function() {
        return Pe(this).tag;
      }), j(je, "withoutSetter", function(be) {
        return xn(K(be), be);
      }), U.f = Jt, I.f = Sn, z.f = We, O.f = B.f = Ce, F.f = me, X.f = function(be) {
        return xn(q(be), be);
      }, m && (lt(je[re], "description", { configurable: !0, get: function() {
        return Pe(this).description;
      } }), c || j(Ee, "propertyIsEnumerable", Jt, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !T, sham: !T }, { Symbol: je }), ve(R(Ar), function(be) {
        _(be);
      }), s({ target: ae, stat: !0, forced: !T }, {
        for: function(oe) {
          var De = String(oe);
          if (E(Ue, De))
            return Ue[De];
          var ue = je(De);
          return Ue[De] = ue, Ht[ue] = De, ue;
        },
        keyFor: function(oe) {
          if (!jt(oe))
            throw TypeError(oe + " is not a symbol");
          if (E(Ht, oe))
            return Ht[oe];
        },
        useSetter: function() {
          hn = !0;
        },
        useSimple: function() {
          hn = !1;
        }
      }), s({ target: "Object", stat: !0, forced: !T, sham: !m }, {
        create: Ze,
        defineProperty: Sn,
        defineProperties: Ct,
        getOwnPropertyDescriptor: We
      }), s({ target: "Object", stat: !0, forced: !T }, {
        getOwnPropertyNames: Ce,
        getOwnPropertySymbols: me
      }), s({ target: "Object", stat: !0, forced: w(function() {
        F.f(1);
      }) }, { getOwnPropertySymbols: function(oe) {
        return F.f(M(oe));
      } }), Ft) {
        var Oe = !T || w(function() {
          var be = je();
          return Ft([be]) != "[null]" || Ft({ a: be }) != "{}" || Ft(Object(be)) != "{}";
        });
        s({ target: "JSON", stat: !0, forced: Oe }, {
          stringify: function(oe, De, ue) {
            for (var Ie = [oe], ze = 1, Ye; arguments.length > ze; )
              Ie.push(arguments[ze++]);
            if (Ye = De, !(!S(De) && oe === void 0 || jt(oe)))
              return g(De) || (De = function(st, _e) {
                if (typeof Ye == "function" && (_e = Ye.call(this, st, _e)), !jt(_e))
                  return _e;
              }), Ie[1] = De, Ft.apply(null, Ie);
          }
        });
      }
      je[re][se] || H(je[re], se, je[re].valueOf), le(je, ae), Q[ce] = !0;
    }, function(l, o, t) {
      var s = t(28), f = t(125).f, d = {}.toString, c = (typeof window > "u" ? "undefined" : It(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], m = function(x) {
        try {
          return f(x);
        } catch {
          return c.slice();
        }
      };
      l.exports.f = function(x) {
        return c && d.call(x) == "[object Window]" ? m(x) : f(s(x));
      };
    }, function(l, o, t) {
      var s = t(12);
      s("asyncIterator");
    }, function(l, o) {
    }, function(l, o, t) {
      var s = t(12);
      s("hasInstance");
    }, function(l, o, t) {
      var s = t(12);
      s("isConcatSpreadable");
    }, function(l, o, t) {
      var s = t(12);
      s("match");
    }, function(l, o, t) {
      var s = t(12);
      s("matchAll");
    }, function(l, o, t) {
      var s = t(12);
      s("replace");
    }, function(l, o, t) {
      var s = t(12);
      s("search");
    }, function(l, o, t) {
      var s = t(12);
      s("species");
    }, function(l, o, t) {
      var s = t(12);
      s("split");
    }, function(l, o, t) {
      var s = t(12);
      s("toPrimitive");
    }, function(l, o, t) {
      var s = t(12);
      s("toStringTag");
    }, function(l, o, t) {
      var s = t(12);
      s("unscopables");
    }, function(l, o, t) {
      var s = t(36);
      s(Math, "Math", !0);
    }, function(l, o, t) {
      var s = t(8), f = t(36);
      f(s.JSON, "JSON", !0);
    }, function(l, o, t) {
      var s = t(12);
      s("asyncDispose");
    }, function(l, o, t) {
      var s = t(12);
      s("dispose");
    }, function(l, o, t) {
      var s = t(12);
      s("observable");
    }, function(l, o, t) {
      var s = t(12);
      s("patternMatch");
    }, function(l, o, t) {
      var s = t(12);
      s("replaceAll");
    }, function(l, o, t) {
      l.exports = t(257);
    }, function(l, o, t) {
      var s = t(258);
      l.exports = s;
    }, function(l, o, t) {
      t(259);
      var s = t(9);
      l.exports = s.parseInt;
    }, function(l, o, t) {
      var s = t(5), f = t(260);
      s({ global: !0, forced: parseInt != f }, { parseInt: f });
    }, function(l, o, t) {
      var s = t(8), f = t(90).trim, d = t(68), c = s.parseInt, m = /^[+-]?0[Xx]/, T = c(d + "08") !== 8 || c(d + "0x16") !== 22;
      l.exports = T ? function(w, E) {
        var g = f(String(w));
        return c(g, E >>> 0 || (m.test(g) ? 16 : 10));
      } : c;
    }, function(l, o, t) {
      var s = t(262);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(263), f = Array.prototype;
      l.exports = function(d) {
        var c = d.slice;
        return d === f || d instanceof Array && c === f.slice ? s : c;
      };
    }, function(l, o, t) {
      t(264);
      var s = t(15);
      l.exports = s("Array").slice;
    }, function(l, o, t) {
      var s = t(5), f = t(13), d = t(55), c = t(79), m = t(34), T = t(28), x = t(69), w = t(10), E = t(56), g = t(22), S = E("slice"), v = g("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), M = w("species"), y = [].slice, h = Math.max;
      s({ target: "Array", proto: !0, forced: !S || !v }, { slice: function(C, R) {
        var O = T(this), B = m(O.length), F = c(C, B), z = c(R === void 0 ? B : R, B), I, U, H;
        if (d(O) && (I = O.constructor, typeof I == "function" && (I === Array || d(I.prototype)) ? I = void 0 : f(I) && (I = I[M], I === null && (I = void 0)), I === Array || I === void 0))
          return y.call(O, F, z);
        for (U = new (I === void 0 ? Array : I)(h(z - F, 0)), H = 0; F < z; F++, H++)
          F in O && x(U, H, O[F]);
        return U.length = H, U;
      } });
    }, function(l, o, t) {
      t(266);
      var s = t(9);
      l.exports = s.setTimeout;
    }, function(l, o, t) {
      var s = t(5), f = t(8), d = t(84), c = [].slice, m = /MSIE .\./.test(d), T = function(w) {
        return function(E, g) {
          var S = arguments.length > 2, v = S ? c.call(arguments, 2) : void 0;
          return w(S ? function() {
            (typeof E == "function" ? E : Function(E)).apply(this, v);
          } : E, g);
        };
      };
      s({ global: !0, bind: !0, forced: m }, {
        setTimeout: T(f.setTimeout),
        setInterval: T(f.setInterval)
      });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(127));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(272)), T = c.__importDefault(t(273)), x = c.__importDefault(t(128)), w = c.__importDefault(t(274)), E = c.__importDefault(t(275)), g = c.__importDefault(t(276)), S = c.__importDefault(t(129)), v = c.__importDefault(t(277)), M = c.__importDefault(t(278)), y = c.__importDefault(t(279)), h = (0, d.default)(
        {},
        m.default,
        T.default,
        x.default,
        E.default,
        w.default,
        g.default,
        S.default,
        v.default,
        M.default,
        y.default,
        { linkCheck: function(C, R) {
          return !0;
        } }
      );
      o.default = h;
    }, function(l, o, t) {
      var s = t(269);
      l.exports = s;
    }, function(l, o, t) {
      t(270);
      var s = t(9);
      l.exports = s.Object.assign;
    }, function(l, o, t) {
      var s = t(5), f = t(271);
      s({ target: "Object", stat: !0, forced: Object.assign !== f }, { assign: f });
    }, function(l, o, t) {
      var s = t(14), f = t(11), d = t(52), c = t(126), m = t(59), T = t(29), x = t(72), w = Object.assign, E = Object.defineProperty;
      l.exports = !w || f(function() {
        if (s && w({ b: 1 }, w(E({}, "a", { enumerable: !0, get: function() {
          E(this, "b", { value: 3, enumerable: !1 });
        } }), { b: 2 })).b !== 1)
          return !0;
        var g = {}, S = {}, v = Symbol(), M = "abcdefghijklmnopqrst";
        return g[v] = 7, M.split("").forEach(function(y) {
          S[y] = y;
        }), w({}, g)[v] != 7 || d(w({}, S)).join("") != M;
      }) ? function(S, v) {
        for (var M = T(S), y = arguments.length, h = 1, b = c.f, C = m.f; y > h; )
          for (var R = x(arguments[h++]), O = b ? d(R).concat(b(R)) : d(R), B = O.length, F = 0, z; B > F; )
            z = O[F++], (!s || C.call(R, z)) && (M[z] = R[z]);
        return M;
      } : w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.default = {
        menus: [
          "head",
          "bold",
          "fontSize",
          "fontName",
          "italic",
          "underline",
          "strikeThrough",
          "indent",
          "lineHeight",
          "foreColor",
          "backColor",
          "link",
          "list",
          "todo",
          "justify",
          "quote",
          "emoticon",
          "image",
          "video",
          "table",
          "code",
          "splitLine",
          "undo",
          "redo"
        ],
        fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
        fontSizes: { "x-small": { name: "10px", value: "1" }, small: { name: "13px", value: "2" }, normal: { name: "16px", value: "3" }, large: { name: "18px", value: "4" }, "x-large": { name: "24px", value: "5" }, "xx-large": { name: "32px", value: "6" }, "xxx-large": { name: "48px", value: "7" } },
        colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
        languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
        languageTab: "\u3000\u3000\u3000\u3000",
        emotions: [{
          title: "\u8868\u60C5",
          type: "emoji",
          content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
        }, {
          title: "\u624B\u52BF",
          type: "emoji",
          content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
        }],
        lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
        undoLimit: 20,
        indentation: "2em",
        showMenuTooltips: !0,
        menuTooltipPosition: "up"
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      function c(m, T, x) {
        window.alert(m), x && console.error("wangEditor: " + x);
      }
      o.default = { onchangeTimeout: 200, onchange: null, onfocus: d.EMPTY_FN, onblur: d.EMPTY_FN, onCatalogChange: null, customAlert: c };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.default = {
        pasteFilterStyle: !0,
        pasteIgnoreImg: !1,
        pasteTextHandle: function(c) {
          return c;
        }
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.default = { styleWithCSS: !1 };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      o.default = {
        linkImgCheck: function(m, T, x) {
          return !0;
        },
        showLinkImg: !0,
        showLinkImgAlt: !0,
        showLinkImgHref: !0,
        linkImgCallback: d.EMPTY_FN,
        uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
        uploadImgServer: "",
        uploadImgShowBase64: !1,
        uploadImgMaxSize: 5 * 1024 * 1024,
        uploadImgMaxLength: 100,
        uploadFileName: "",
        uploadImgParams: {},
        uploadImgParamsWithUrl: !1,
        uploadImgHeaders: {},
        uploadImgHooks: {},
        uploadImgTimeout: 10 * 1e3,
        withCredentials: !1,
        customUploadImg: null,
        uploadImgFromMedia: null
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.default = { lang: "zh-CN", languages: { "zh-CN": { wangEditor: { \u91CD\u7F6E: "\u91CD\u7F6E", \u63D2\u5165: "\u63D2\u5165", \u9ED8\u8BA4: "\u9ED8\u8BA4", \u521B\u5EFA: "\u521B\u5EFA", \u4FEE\u6539: "\u4FEE\u6539", \u5982: "\u5982", \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587", menus: { title: { \u6807\u9898: "\u6807\u9898", \u52A0\u7C97: "\u52A0\u7C97", \u5B57\u53F7: "\u5B57\u53F7", \u5B57\u4F53: "\u5B57\u4F53", \u659C\u4F53: "\u659C\u4F53", \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF", \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF", \u7F29\u8FDB: "\u7F29\u8FDB", \u884C\u9AD8: "\u884C\u9AD8", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u80CC\u666F\u8272: "\u80CC\u666F\u8272", \u94FE\u63A5: "\u94FE\u63A5", \u5E8F\u5217: "\u5E8F\u5217", \u5BF9\u9F50: "\u5BF9\u9F50", \u5F15\u7528: "\u5F15\u7528", \u8868\u60C5: "\u8868\u60C5", \u56FE\u7247: "\u56FE\u7247", \u89C6\u9891: "\u89C6\u9891", \u8868\u683C: "\u8868\u683C", \u4EE3\u7801: "\u4EE3\u7801", \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF", \u6062\u590D: "\u6062\u590D", \u64A4\u9500: "\u64A4\u9500", \u5168\u5C4F: "\u5168\u5C4F", \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F", \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898", \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7", \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53", \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB", \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F", \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8", \u5E8F\u5217: "\u5E8F\u5217", head: { \u6B63\u6587: "\u6B63\u6587" }, indent: { \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB", \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB" }, justify: { \u9760\u5DE6: "\u9760\u5DE6", \u5C45\u4E2D: "\u5C45\u4E2D", \u9760\u53F3: "\u9760\u53F3", \u4E24\u7AEF: "\u4E24\u7AEF" }, list: { \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868", \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868" } }, panelMenus: { emoticon: { \u9ED8\u8BA4: "\u9ED8\u8BA4", \u65B0\u6D6A: "\u65B0\u6D6A", emoji: "emoji", \u624B\u52BF: "\u624B\u52BF" }, image: { \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247", \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247", \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E", \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5" }, link: { \u94FE\u63A5: "\u94FE\u63A5", \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57", \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5", \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5" }, video: { \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891" }, table: { \u884C: "\u884C", \u5217: "\u5217", \u7684: "\u7684", \u8868\u683C: "\u8868\u683C", \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C", \u5220\u9664\u884C: "\u5220\u9664\u884C", \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217", \u5220\u9664\u5217: "\u5220\u9664\u5217", \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934", \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934", \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C", \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C" }, code: { \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801", \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801", \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801" } } }, validate: { \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247", \u5927\u4E8E: "\u5927\u4E8E", \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5", \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247", \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF", \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5", \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7", \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF" } } }, en: { wangEditor: { \u91CD\u7F6E: "reset", \u63D2\u5165: "insert", \u9ED8\u8BA4: "default", \u521B\u5EFA: "create", \u4FEE\u6539: "edit", \u5982: "like", \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text", menus: { title: { \u6807\u9898: "head", \u52A0\u7C97: "bold", \u5B57\u53F7: "font size", \u5B57\u4F53: "font family", \u659C\u4F53: "italic", \u4E0B\u5212\u7EBF: "underline", \u5220\u9664\u7EBF: "strikethrough", \u7F29\u8FDB: "indent", \u884C\u9AD8: "line heihgt", \u6587\u5B57\u989C\u8272: "font color", \u80CC\u666F\u8272: "background", \u94FE\u63A5: "link", \u5E8F\u5217: "numbered list", \u5BF9\u9F50: "align", \u5F15\u7528: "quote", \u8868\u60C5: "emoticons", \u56FE\u7247: "image", \u89C6\u9891: "media", \u8868\u683C: "table", \u4EE3\u7801: "code", \u5206\u5272\u7EBF: "split line", \u6062\u590D: "undo", \u64A4\u9500: "redo", \u5168\u5C4F: "fullscreen", \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen", \u5F85\u529E\u4E8B\u9879: "todo" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "title", \u80CC\u666F\u989C\u8272: "background", \u6587\u5B57\u989C\u8272: "font color", \u8BBE\u7F6E\u5B57\u53F7: "font size", \u8BBE\u7F6E\u5B57\u4F53: "font family", \u8BBE\u7F6E\u7F29\u8FDB: "indent", \u5BF9\u9F50\u65B9\u5F0F: "align", \u8BBE\u7F6E\u884C\u9AD8: "line heihgt", \u5E8F\u5217: "list", head: { \u6B63\u6587: "text" }, indent: { \u589E\u52A0\u7F29\u8FDB: "indent", \u51CF\u5C11\u7F29\u8FDB: "outdent" }, justify: { \u9760\u5DE6: "left", \u5C45\u4E2D: "center", \u9760\u53F3: "right", \u4E24\u7AEF: "justify" }, list: { \u65E0\u5E8F\u5217\u8868: "unordered", \u6709\u5E8F\u5217\u8868: "ordered" } }, panelMenus: { emoticon: { \u8868\u60C5: "emoji", \u624B\u52BF: "gesture" }, image: { \u4E0A\u4F20\u56FE\u7247: "upload image", \u7F51\u7EDC\u56FE\u7247: "network image", \u56FE\u7247\u5730\u5740: "image link", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt", \u8DF3\u8F6C\u94FE\u63A5: "hyperlink" }, link: { \u94FE\u63A5: "link", \u94FE\u63A5\u6587\u5B57: "link text", \u53D6\u6D88\u94FE\u63A5: "unlink", \u67E5\u770B\u94FE\u63A5: "view links" }, video: { \u63D2\u5165\u89C6\u9891: "insert video", \u4E0A\u4F20\u89C6\u9891: "upload local video" }, table: { \u884C: "rows", \u5217: "columns", \u7684: " ", \u8868\u683C: "table", \u6DFB\u52A0\u884C: "insert row", \u5220\u9664\u884C: "delete row", \u6DFB\u52A0\u5217: "insert column", \u5220\u9664\u5217: "delete column", \u8BBE\u7F6E\u8868\u5934: "set header", \u53D6\u6D88\u8868\u5934: "cancel header", \u63D2\u5165\u8868\u683C: "insert table", \u5220\u9664\u8868\u683C: "delete table" }, code: { \u5220\u9664\u4EE3\u7801: "delete code", \u4FEE\u6539\u4EE3\u7801: "edit code", \u63D2\u5165\u4EE3\u7801: "insert code" } } }, validate: { \u5F20\u56FE\u7247: "images", \u5927\u4E8E: "greater than", \u56FE\u7247\u94FE\u63A5: "image link", \u4E0D\u662F\u56FE\u7247: "is not image", \u8FD4\u56DE\u7ED3\u679C: "return results", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error", \u89C6\u9891\u94FE\u63A5: "video link", \u4E0D\u662F\u89C6\u9891: "is not video", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed", \u4E2A\u89C6\u9891: "videos", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error" } } } } };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function c() {
        return !!(d.UA.isIE() || d.UA.isOldEdge);
      }
      o.default = { compatibleMode: c, historyMaxSize: 30 };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      o.default = {
        onlineVideoCheck: function(m) {
          return !0;
        },
        onlineVideoCallback: d.EMPTY_FN,
        showLinkVideo: !0,
        uploadVideoAccept: ["mp4"],
        uploadVideoServer: "",
        uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
        uploadVideoName: "",
        uploadVideoParams: {},
        uploadVideoParamsWithUrl: !1,
        uploadVideoHeaders: {},
        uploadVideoHooks: {},
        uploadVideoTimeout: 1e3 * 60 * 60 * 2,
        withVideoCredentials: !1,
        customUploadVideo: null,
        customInsertVideo: null
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(6), x = t(7), w = function() {
        function E(g) {
          this._currentRange = null, this.editor = g;
        }
        return E.prototype.getRange = function() {
          return this._currentRange;
        }, E.prototype.saveRange = function(g) {
          if (g) {
            this._currentRange = g;
            return;
          }
          var S = window.getSelection();
          if (S.rangeCount !== 0) {
            var v = S.getRangeAt(0), M = this.getSelectionContainerElem(v);
            if (!!(M != null && M.length) && !(M.attr("contenteditable") === "false" || M.parentUntil("[contenteditable=false]"))) {
              var y = this.editor, h = y.$textElem;
              if (h.isContain(M)) {
                if (h.elems[0] === M.elems[0]) {
                  var b;
                  if ((0, d.default)(b = h.html()).call(b) === x.EMPTY_P) {
                    var C = h.children(), R = C == null ? void 0 : C.last();
                    y.selection.createRangeByElem(R, !0, !0), y.selection.restoreSelection();
                  }
                }
                this._currentRange = v;
              }
            }
          }
        }, E.prototype.collapseRange = function(g) {
          g === void 0 && (g = !1);
          var S = this._currentRange;
          S && S.collapse(g);
        }, E.prototype.getSelectionText = function() {
          var g = this._currentRange;
          return g ? g.toString() : "";
        }, E.prototype.getSelectionContainerElem = function(g) {
          var S;
          S = g || this._currentRange;
          var v;
          if (S)
            return v = S.commonAncestorContainer, m.default(v.nodeType === 1 ? v : v.parentNode);
        }, E.prototype.getSelectionStartElem = function(g) {
          var S;
          S = g || this._currentRange;
          var v;
          if (S)
            return v = S.startContainer, m.default(v.nodeType === 1 ? v : v.parentNode);
        }, E.prototype.getSelectionEndElem = function(g) {
          var S;
          S = g || this._currentRange;
          var v;
          if (S)
            return v = S.endContainer, m.default(v.nodeType === 1 ? v : v.parentNode);
        }, E.prototype.isSelectionEmpty = function() {
          var g = this._currentRange;
          return !!(g && g.startContainer && g.startContainer === g.endContainer && g.startOffset === g.endOffset);
        }, E.prototype.restoreSelection = function() {
          var g = window.getSelection(), S = this._currentRange;
          g && S && (g.removeAllRanges(), g.addRange(S));
        }, E.prototype.createEmptyRange = function() {
          var g = this.editor, S = this.getRange(), v;
          if (!!S && !!this.isSelectionEmpty())
            try {
              T.UA.isWebkit() ? (g.cmd.do("insertHTML", "&#8203;"), S.setEnd(S.endContainer, S.endOffset + 1), this.saveRange(S)) : (v = m.default("<strong>&#8203;</strong>"), g.cmd.do("insertElem", v), this.createRangeByElem(v, !0));
            } catch {
            }
        }, E.prototype.createRangeByElems = function(g, S) {
          var v = window.getSelection ? window.getSelection() : document.getSelection();
          v == null || v.removeAllRanges();
          var M = document.createRange();
          M.setStart(g, 0), M.setEnd(S, S.childNodes.length || 1), this.saveRange(M), this.restoreSelection();
        }, E.prototype.createRangeByElem = function(g, S, v) {
          if (!!g.length) {
            var M = g.elems[0], y = document.createRange();
            v ? y.selectNodeContents(M) : y.selectNode(M), S != null && (y.collapse(S), S || (this.saveRange(y), this.editor.selection.moveCursor(M))), this.saveRange(y);
          }
        }, E.prototype.getSelectionRangeTopNodes = function() {
          var g, S, v, M = (g = this.getSelectionStartElem()) === null || g === void 0 ? void 0 : g.getNodeTop(this.editor), y = (S = this.getSelectionEndElem()) === null || S === void 0 ? void 0 : S.getNodeTop(this.editor);
          return v = this.recordSelectionNodes(m.default(M), m.default(y)), v;
        }, E.prototype.moveCursor = function(g, S) {
          var v, M = this.getRange(), y = g.nodeType === 3 ? (v = g.nodeValue) === null || v === void 0 ? void 0 : v.length : g.childNodes.length;
          (T.UA.isFirefox || T.UA.isIE()) && y !== 0 && (g.nodeType === 3 || g.childNodes[y - 1].nodeName === "BR") && (y = y - 1);
          var h = S != null ? S : y;
          !M || g && (M.setStart(g, h), M.setEnd(g, h), this.restoreSelection());
        }, E.prototype.getCursorPos = function() {
          var g = window.getSelection();
          return g == null ? void 0 : g.anchorOffset;
        }, E.prototype.clearWindowSelectionRange = function() {
          var g = window.getSelection();
          g && g.removeAllRanges();
        }, E.prototype.recordSelectionNodes = function(g, S) {
          var v = [], M = !0;
          try {
            for (var y = g, h = this.editor.$textElem; M; ) {
              var b = y == null ? void 0 : y.getNodeTop(this.editor);
              b.getNodeName() === "BODY" && (M = !1), b.length > 0 && (v.push(m.default(y)), (S == null ? void 0 : S.equal(b)) || h.equal(b) ? M = !1 : y = b.getNextSibling());
            }
          } catch {
            M = !1;
          }
          return v;
        }, E.prototype.setRangeToElem = function(g) {
          var S = this.getRange();
          S == null || S.setStart(g, 0), S == null || S.setEnd(g, 0);
        }, E;
      }();
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = function() {
        function T(x) {
          this.editor = x;
        }
        return T.prototype.do = function(x, w) {
          var E = this.editor;
          E.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
          var g = E.selection;
          if (!!g.getRange()) {
            switch (g.restoreSelection(), x) {
              case "insertHTML":
                this.insertHTML(w);
                break;
              case "insertElem":
                this.insertElem(w);
                break;
              default:
                this.execCommand(x, w);
                break;
            }
            E.menus.changeActive(), g.saveRange(), g.restoreSelection();
          }
        }, T.prototype.insertHTML = function(x) {
          var w = this.editor, E = w.selection.getRange();
          if (E != null) {
            if (this.queryCommandSupported("insertHTML"))
              this.execCommand("insertHTML", x);
            else if (E.insertNode) {
              if (E.deleteContents(), c.default(x).elems.length > 0)
                E.insertNode(c.default(x).elems[0]);
              else {
                var g = document.createElement("p");
                g.appendChild(document.createTextNode(x)), E.insertNode(g);
              }
              w.selection.collapseRange();
            }
          }
        }, T.prototype.insertElem = function(x) {
          var w = this.editor, E = w.selection.getRange();
          E != null && E.insertNode && (E.deleteContents(), E.insertNode(x.elems[0]));
        }, T.prototype.execCommand = function(x, w) {
          document.execCommand(x, !1, w);
        }, T.prototype.queryCommandValue = function(x) {
          return document.queryCommandValue(x);
        }, T.prototype.queryCommandState = function(x) {
          return document.queryCommandState(x);
        }, T.prototype.queryCommandSupported = function(x) {
          return document.queryCommandSupported(x);
        }, T;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31)), c = s(t(4)), m = s(t(17)), T = s(t(27)), x = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var w = t(2), E = w.__importDefault(t(3)), g = w.__importDefault(t(287)), S = t(6), v = w.__importDefault(t(299)), M = w.__importDefault(t(300)), y = t(7), h = function() {
        function b(C) {
          this.editor = C, this.eventHooks = { onBlurEvents: [], changeEvents: [], dropEvents: [], clickEvents: [], keydownEvents: [], keyupEvents: [], tabUpEvents: [], tabDownEvents: [], enterUpEvents: [], enterDownEvents: [], deleteUpEvents: [], deleteDownEvents: [], pasteEvents: [], linkClickEvents: [], codeClickEvents: [], textScrollEvents: [], toolbarClickEvents: [], imgClickEvents: [], imgDragBarMouseDownEvents: [], tableClickEvents: [], menuClickEvents: [], dropListMenuHoverEvents: [], splitLineEvents: [], videoClickEvents: [] };
        }
        return b.prototype.init = function() {
          this._saveRange(), this._bindEventHooks(), g.default(this);
        }, b.prototype.togglePlaceholder = function() {
          var C, R = this.html(), O = (0, d.default)(C = this.editor.$textContainerElem).call(C, ".placeholder");
          O.hide(), !this.editor.isComposing && (!R || R === " ") && O.show();
        }, b.prototype.clear = function() {
          this.html(y.EMPTY_P);
        }, b.prototype.html = function(C) {
          var R = this.editor, O = R.$textElem;
          if (C == null) {
            var B = O.html();
            B = B.replace(/\u200b/gm, ""), B = B.replace(/<p><\/p>/gim, ""), B = B.replace(y.EMPTY_P_LAST_REGEX, ""), B = B.replace(y.EMPTY_P_REGEX, "<p>");
            var F = B.match(/<(img|br|hr|input)[^>]*>/gi);
            return F !== null && (0, c.default)(F).call(F, function(z) {
              z.match(/\/>/) || (B = B.replace(z, z.substring(0, z.length - 1) + "/>"));
            }), B;
          }
          C = (0, m.default)(C).call(C), C === "" && (C = y.EMPTY_P), (0, T.default)(C).call(C, "<") !== 0 && (C = "<p>" + C + "</p>"), O.html(C), R.initSelection();
        }, b.prototype.setJSON = function(C) {
          var R = M.default(C).children(), O = this.editor, B = O.$textElem;
          !R || B.replaceChildAll(R);
        }, b.prototype.getJSON = function() {
          var C = this.editor, R = C.$textElem;
          return v.default(R);
        }, b.prototype.text = function(C) {
          var R = this.editor, O = R.$textElem;
          if (C == null) {
            var B = O.text();
            return B = B.replace(/\u200b/gm, ""), B;
          }
          O.text("<p>" + C + "</p>"), R.initSelection();
        }, b.prototype.append = function(C) {
          var R = this.editor;
          (0, T.default)(C).call(C, "<") !== 0 && (C = "<p>" + C + "</p>"), this.html(this.html() + C), R.initSelection();
        }, b.prototype._saveRange = function() {
          var C = this.editor, R = C.$textElem, O = E.default(document);
          function B() {
            C.selection.saveRange(), C.menus.changeActive();
          }
          R.on("keyup", B);
          function F() {
            B(), R.off("click", F);
          }
          R.on("click", F);
          function z() {
            B(), O.off("mouseup", z);
          }
          function I() {
            O.on("mouseup", z), R.off("mouseleave", I);
          }
          R.on("mousedown", function() {
            R.on("mouseleave", I);
          }), R.on("mouseup", function(U) {
            R.off("mouseleave", I), (0, x.default)(function() {
              var H = C.selection, j = H.getRange();
              j !== null && B();
            }, 0);
          });
        }, b.prototype._bindEventHooks = function() {
          var C = this.editor, R = C.$textElem, O = this.eventHooks;
          R.on("click", function(F) {
            var z = O.clickEvents;
            (0, c.default)(z).call(z, function(I) {
              return I(F);
            });
          }), R.on("keyup", function(F) {
            if (F.keyCode === 13) {
              var z = O.enterUpEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on("keyup", function(F) {
            var z = O.keyupEvents;
            (0, c.default)(z).call(z, function(I) {
              return I(F);
            });
          }), R.on("keydown", function(F) {
            var z = O.keydownEvents;
            (0, c.default)(z).call(z, function(I) {
              return I(F);
            });
          }), R.on("keyup", function(F) {
            if (!(F.keyCode !== 8 && F.keyCode !== 46)) {
              var z = O.deleteUpEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on("keydown", function(F) {
            if (!(F.keyCode !== 8 && F.keyCode !== 46)) {
              var z = O.deleteDownEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on("paste", function(F) {
            if (!S.UA.isIE()) {
              F.preventDefault();
              var z = O.pasteEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on("keydown", function(F) {
            (C.isFocus || C.isCompatibleMode) && (F.ctrlKey || F.metaKey) && F.keyCode === 90 && (F.preventDefault(), F.shiftKey ? C.history.restore() : C.history.revoke());
          }), R.on("keyup", function(F) {
            if (F.keyCode === 9) {
              F.preventDefault();
              var z = O.tabUpEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on("keydown", function(F) {
            if (F.keyCode === 9) {
              F.preventDefault();
              var z = O.tabDownEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on(
            "scroll",
            S.throttle(function(F) {
              var z = O.textScrollEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }, 100)
          );
          function B(F) {
            F.preventDefault();
          }
          E.default(document).on("dragleave", B).on("drop", B).on("dragenter", B).on("dragover", B), C.beforeDestroy(function() {
            E.default(document).off("dragleave", B).off("drop", B).off("dragenter", B).off("dragover", B);
          }), R.on("drop", function(F) {
            F.preventDefault();
            var z = O.dropEvents;
            (0, c.default)(z).call(z, function(I) {
              return I(F);
            });
          }), R.on("click", function(F) {
            var z = null, I = F.target, U = E.default(I);
            if (U.getNodeName() === "A")
              z = U;
            else {
              var H = U.parentUntil("a");
              H != null && (z = H);
            }
            if (!!z) {
              var j = O.linkClickEvents;
              (0, c.default)(j).call(j, function(P) {
                return P(z);
              });
            }
          }), R.on("click", function(F) {
            var z = null, I = F.target, U = E.default(I);
            if (U.getNodeName() === "IMG" && !U.elems[0].getAttribute("data-emoji") && (F.stopPropagation(), z = U), !!z) {
              var H = O.imgClickEvents;
              (0, c.default)(H).call(H, function(j) {
                return j(z);
              });
            }
          }), R.on("click", function(F) {
            var z = null, I = F.target, U = E.default(I);
            if (U.getNodeName() === "PRE")
              z = U;
            else {
              var H = U.parentUntil("pre");
              H !== null && (z = H);
            }
            if (!!z) {
              var j = O.codeClickEvents;
              (0, c.default)(j).call(j, function(P) {
                return P(z);
              });
            }
          }), R.on("click", function(F) {
            var z = null, I = F.target, U = E.default(I);
            if (U.getNodeName() === "HR" && (z = U), !!z) {
              C.selection.createRangeByElem(z), C.selection.restoreSelection();
              var H = O.splitLineEvents;
              (0, c.default)(H).call(H, function(j) {
                return j(z);
              });
            }
          }), C.$toolbarElem.on("click", function(F) {
            var z = O.toolbarClickEvents;
            (0, c.default)(z).call(z, function(I) {
              return I(F);
            });
          }), C.$textContainerElem.on("mousedown", function(F) {
            var z = F.target, I = E.default(z);
            if (I.hasClass("w-e-img-drag-rb")) {
              var U = O.imgDragBarMouseDownEvents;
              (0, c.default)(U).call(U, function(H) {
                return H();
              });
            }
          }), R.on("click", function(F) {
            var z = null, I = F.target;
            if (z = E.default(I).parentUntilEditor("TABLE", C, I), !!z) {
              var U = O.tableClickEvents;
              (0, c.default)(U).call(U, function(H) {
                return H(z, F);
              });
            }
          }), R.on("keydown", function(F) {
            if (F.keyCode === 13) {
              var z = O.enterDownEvents;
              (0, c.default)(z).call(z, function(I) {
                return I(F);
              });
            }
          }), R.on("click", function(F) {
            var z = null, I = F.target, U = E.default(I);
            if (U.getNodeName() === "VIDEO" && (F.stopPropagation(), z = U), !!z) {
              var H = O.videoClickEvents;
              (0, c.default)(H).call(H, function(j) {
                return j(z);
              });
            }
          });
        }, b;
      }();
      o.default = h;
    }, function(l, o, t) {
      var s = t(284);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(285), f = Array.prototype;
      l.exports = function(d) {
        var c = d.find;
        return d === f || d instanceof Array && c === f.find ? s : c;
      };
    }, function(l, o, t) {
      t(286);
      var s = t(15);
      l.exports = s("Array").find;
    }, function(l, o, t) {
      var s = t(5), f = t(30).find, d = t(82), c = t(22), m = "find", T = !0, x = c(m);
      m in [] && Array(1)[m](function() {
        T = !1;
      }), s({ target: "Array", proto: !0, forced: T || !x }, { find: function(E) {
        return f(this, E, arguments.length > 1 ? arguments[1] : void 0);
      } }), d(m);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(288)), m = d.__importStar(t(289)), T = d.__importDefault(t(290)), x = d.__importDefault(t(291)), w = d.__importDefault(t(298));
      function E(g) {
        var S = g.editor, v = g.eventHooks;
        c.default(S, v.enterUpEvents, v.enterDownEvents), m.default(S, v.deleteUpEvents, v.deleteDownEvents), m.cutToKeepP(S, v.keyupEvents), T.default(S, v.tabDownEvents), x.default(S, v.pasteEvents), w.default(S, v.imgClickEvents);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(7), T = c.__importDefault(t(3));
      function x(w, E, g) {
        function S(y) {
          var h, b = T.default(m.EMPTY_P);
          if (b.insertBefore(y), (0, d.default)(h = y.html()).call(h, "<img") >= 0) {
            b.remove();
            return;
          }
          w.selection.createRangeByElem(b, !0, !0), w.selection.restoreSelection(), y.remove();
        }
        function v() {
          var y = w.$textElem, h = w.selection.getSelectionContainerElem(), b = h.parent();
          if (b.html() === "<code><br></code>") {
            S(b);
            return;
          }
          if (h.getNodeName() === "FONT" && h.text() === "" && h.attr("face") === "monospace") {
            S(b);
            return;
          }
          if (!!b.equal(y)) {
            var C = h.getNodeName();
            C === "P" && h.attr("data-we-empty-p") === null || h.text() || S(h);
          }
        }
        E.push(v);
        function M(y) {
          var h;
          w.selection.saveRange((h = getSelection()) === null || h === void 0 ? void 0 : h.getRangeAt(0));
          var b = w.selection.getSelectionContainerElem();
          b.id === w.textElemId && (y.preventDefault(), w.cmd.do("insertHTML", "<p><br></p>"));
        }
        g.push(M);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17)), c = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 }), o.cutToKeepP = void 0;
      var m = t(2), T = t(7), x = m.__importDefault(t(3));
      function w(g, S, v) {
        function M() {
          var h = g.$textElem, b = g.$textElem.html(), C = g.$textElem.text(), R = (0, d.default)(b).call(b), O = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', T.EMPTY_P];
          /^\s*$/.test(C) && (!R || (0, c.default)(O).call(O, R)) && (h.html(T.EMPTY_P), g.selection.createRangeByElem(h, !1, !0), g.selection.restoreSelection(), g.selection.moveCursor(h.getNode(), 0));
        }
        S.push(M);
        function y(h) {
          var b, C = g.$textElem, R = (0, d.default)(b = C.html().toLowerCase()).call(b);
          if (R === T.EMPTY_P) {
            h.preventDefault();
            return;
          }
        }
        v.push(y);
      }
      function E(g, S) {
        function v(M) {
          var y;
          if (M.keyCode === 88) {
            var h = g.$textElem, b = (0, d.default)(y = h.html().toLowerCase()).call(y);
            if (!b || b === "<br>") {
              var C = x.default(T.EMPTY_P);
              h.html(" "), h.append(C), g.selection.createRangeByElem(C, !1, !0), g.selection.restoreSelection(), g.selection.moveCursor(C.getNode(), 0);
            }
          }
        }
        S.push(v);
      }
      o.cutToKeepP = E, o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c, m) {
        function T() {
          if (!!c.cmd.queryCommandSupported("insertHTML")) {
            var x = c.selection.getSelectionContainerElem();
            if (!!x) {
              var w = x.parent(), E = x.getNodeName(), g = w.getNodeName();
              E == "CODE" || g === "CODE" || g === "PRE" || /hljs/.test(g) ? c.cmd.do("insertHTML", c.config.languageTab) : c.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
          }
        }
        m.push(T);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(130), m = t(6), T = t(7);
      function x(v) {
        var M, y = (0, d.default)(M = v.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(M), h = document.createElement("div");
        return h.innerHTML = y, h.innerHTML.replace(/<p><\/p>/gim, "");
      }
      function w(v) {
        var M = v.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
        return M;
      }
      function E(v) {
        var M;
        if (v === "")
          return !1;
        var y = document.createElement("div");
        return y.innerHTML = v, ((M = y.firstChild) === null || M === void 0 ? void 0 : M.nodeName) === "P";
      }
      function g(v) {
        if (!(v != null && v.length))
          return !1;
        var M = v.elems[0];
        return M.nodeName === "P" && M.innerHTML === "<br>";
      }
      function S(v, M) {
        function y(h) {
          var b = v.config, C = b.pasteFilterStyle, R = b.pasteIgnoreImg, O = b.pasteTextHandle, B = c.getPasteHtml(h, C, R), F = c.getPasteText(h);
          F = F.replace(/\n/gm, "<br>");
          var z = v.selection.getSelectionContainerElem();
          if (!!z) {
            var I = z == null ? void 0 : z.getNodeName(), U = z == null ? void 0 : z.getNodeTop(v), H = "";
            if (U.elems[0] && (H = U == null ? void 0 : U.getNodeName()), I === "CODE" || H === "PRE") {
              O && m.isFunction(O) && (F = "" + (O(F) || "")), v.cmd.do("insertHTML", w(F));
              return;
            }
            if (T.urlRegex.test(F) && C) {
              O && m.isFunction(O) && (F = "" + (O(F) || ""));
              var j = T.urlRegex.exec(F)[0], P = F.replace(T.urlRegex, "");
              return v.cmd.do("insertHTML", '<a href="' + j + '" target="_blank">' + j + "</a>" + P);
            }
            if (!!B)
              try {
                O && m.isFunction(O) && (B = "" + (O(B) || ""));
                var V = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(B);
                if (V && C)
                  v.cmd.do("insertHTML", "" + x(F));
                else {
                  var Q = x(B);
                  if (E(Q)) {
                    var K = v.$textElem;
                    if (v.cmd.do("insertHTML", Q), K.equal(z)) {
                      v.selection.createEmptyRange();
                      return;
                    }
                    g(U) && U.remove();
                  } else {
                    var q = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;
                    q.test(Q) || v.cmd.do("insertHTML", Q);
                  }
                }
              } catch {
                O && m.isFunction(O) && (F = "" + (O(F) || "")), v.cmd.do("insertHTML", "" + x(F));
              }
          }
        }
        M.push(y);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17)), c = s(t(4)), m = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 });
      var T = t(2), x = t(293), w = T.__importDefault(t(297));
      function E(y) {
        var h = /<span>.*?<\/span>/gi, b = /<span>(.*?)<\/span>/;
        return y.replace(h, function(C) {
          var R = C.match(b);
          return R == null ? "" : R[1];
        });
      }
      function g(y, h) {
        var b;
        return y = (0, d.default)(b = y.toLowerCase()).call(b), !!(x.IGNORE_TAGS.has(y) || h && y === "img");
      }
      function S(y, h) {
        var b = "";
        b = "<" + y;
        var C = [];
        (0, c.default)(h).call(h, function(O) {
          C.push(O.name + '="' + O.value + '"');
        }), C.length > 0 && (b = b + " " + C.join(" "));
        var R = x.EMPTY_TAGS.has(y);
        return b = b + (R ? "/" : "") + ">", b;
      }
      function v(y) {
        return "</" + y + ">";
      }
      function M(y, h, b) {
        h === void 0 && (h = !0), b === void 0 && (b = !1);
        var C = [], R = "";
        function O(I) {
          I = (0, d.default)(I).call(I), I && (x.EMPTY_TAGS.has(I) || (R = I));
        }
        function B() {
          R = "";
        }
        var F = new w.default();
        F.parse(y, { startElement: function(U, H) {
          if (O(U), !g(U, b)) {
            var j = x.NECESSARY_ATTRS.get(U) || [], P = [];
            (0, c.default)(H).call(H, function(Q) {
              var K = Q.name;
              if (K === "style") {
                h || P.push(Q);
                return;
              }
              (0, m.default)(j).call(j, K) !== !1 && P.push(Q);
            });
            var V = S(U, P);
            C.push(V);
          }
        }, characters: function(U) {
          !U || g(R, b) || C.push(U);
        }, endElement: function(U) {
          if (!g(U, b)) {
            var H = v(U);
            C.push(H), B();
          }
        }, comment: function(U) {
          O(U);
        } });
        var z = C.join("");
        return z = E(z), z;
      }
      o.default = M;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(131)), c = s(t(120));
      (0, f.default)(o, "__esModule", { value: !0 }), o.TOP_LEVEL_TAGS = o.EMPTY_TAGS = o.NECESSARY_ATTRS = o.IGNORE_TAGS = void 0, o.IGNORE_TAGS = new d.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), o.NECESSARY_ATTRS = new c.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), o.EMPTY_TAGS = new d.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), o.TOP_LEVEL_TAGS = new d.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
    }, function(l, o, t) {
      var s = t(295);
      l.exports = s;
    }, function(l, o, t) {
      t(296), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Set;
    }, function(l, o, t) {
      var s = t(121), f = t(123);
      l.exports = s("Set", function(d) {
        return function() {
          return d(this, arguments.length ? arguments[0] : void 0);
        };
      }, f);
    }, function(l, o) {
      function t() {
      }
      t.prototype = {
        handler: null,
        startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
        endTagRe: /^<\/([^>\s]+)[^>]*>/m,
        attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
        parse: function(f, d) {
          d && (this.contentHandler = d);
          for (var c, m, T, x = !1, w = this; f.length > 0; )
            f.substring(0, 4) == "<!--" ? (T = f.indexOf("-->"), T != -1 ? (this.contentHandler.comment(f.substring(4, T)), f = f.substring(T + 3), x = !1) : x = !0) : f.substring(0, 2) == "</" ? this.endTagRe.test(f) ? (c = RegExp.lastMatch, m = RegExp.rightContext, c.replace(this.endTagRe, function() {
              return w.parseEndTag.apply(w, arguments);
            }), f = m, x = !1) : x = !0 : f.charAt(0) == "<" && (this.startTagRe.test(f) ? (c = RegExp.lastMatch, m = RegExp.rightContext, c.replace(this.startTagRe, function() {
              return w.parseStartTag.apply(w, arguments);
            }), f = m, x = !1) : x = !0), x && (T = f.indexOf("<"), T == -1 ? (this.contentHandler.characters(f), f = "") : (this.contentHandler.characters(f.substring(0, T)), f = f.substring(T))), x = !0;
        },
        parseStartTag: function(f, d, c) {
          var m = this.parseAttributes(d, c);
          this.contentHandler.startElement(d, m);
        },
        parseEndTag: function(f, d) {
          this.contentHandler.endElement(d);
        },
        parseAttributes: function(f, d) {
          var c = this, m = [];
          return d.replace(this.attrRe, function(T, x, w, E, g, S, v, M) {
            m.push(c.parseAttribute(f, T, x, w, E, g, S, v, M));
          }), m;
        },
        parseAttribute: function(f, d, c) {
          var m = "";
          arguments[7] ? m = arguments[8] : arguments[5] ? m = arguments[6] : arguments[3] && (m = arguments[4]);
          var T = !m && !arguments[3];
          return { name: c, value: T ? null : m };
        }
      }, l.exports = t;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c, m) {
        function T(x) {
          c.selection.createRangeByElem(x), c.selection.restoreSelection();
        }
        m.push(T);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), T = c.__importDefault(t(3));
      function x(w) {
        var E = [], g = w.childNodes() || [];
        return (0, d.default)(g).call(g, function(S) {
          var v, M = S.nodeType;
          if (M === 3 && (v = S.textContent || "", v = m.replaceHtmlSymbol(v)), M === 1) {
            v = {}, v = v, v.tag = S.nodeName.toLowerCase();
            for (var y = [], h = S.attributes, b = h.length || 0, C = 0; C < b; C++) {
              var R = h[C];
              y.push({ name: R.name, value: R.value });
            }
            v.attrs = y, v.children = x(T.default(S));
          }
          v && E.push(v);
        }), E;
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(92)), d = s(t(1)), c = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3));
      function x(w, E) {
        E === void 0 && (E = document.createElement("div"));
        var g = E;
        return (0, c.default)(w).call(w, function(S) {
          var v;
          if (typeof S == "string" && (v = document.createTextNode(S)), (0, f.default)(S) === "object") {
            var M;
            v = document.createElement(S.tag), (0, c.default)(M = S.attrs).call(M, function(y) {
              T.default(v).attr(y.name, y.value);
            }), S.children && S.children.length > 0 && x(S.children, v.getRootNode());
          }
          v && g.appendChild(v);
        }), T.default(g);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(89)), c = s(t(70)), m = s(t(44)), T = s(t(302)), x = s(t(4)), w = s(t(94)), E = s(t(132)), g = s(t(46)), S = s(t(57));
      (0, f.default)(o, "__esModule", { value: !0 });
      var v = t(2), M = v.__importDefault(t(87)), y = v.__importDefault(t(314)), h = v.__importDefault(t(3)), b = function() {
        function C(R) {
          this.editor = R, this.menuList = [], this.constructorList = y.default;
        }
        return C.prototype.extend = function(R, O) {
          !O || typeof O != "function" || (this.constructorList[R] = O);
        }, C.prototype.init = function() {
          var R, O, B = this, F = this.editor.config, z = F.excludeMenus;
          (0, d.default)(z) === !1 && (z = []), F.menus = (0, c.default)(R = F.menus).call(R, function(K) {
            return (0, m.default)(z).call(z, K) === !1;
          });
          var I = (0, T.default)(M.default.globalCustomMenuConstructorList);
          I = (0, c.default)(I).call(I, function(K) {
            return (0, m.default)(z).call(z, K);
          }), (0, x.default)(I).call(I, function(K) {
            delete M.default.globalCustomMenuConstructorList[K];
          }), (0, x.default)(O = F.menus).call(O, function(K) {
            var q = B.constructorList[K];
            B._initMenuList(K, q);
          });
          for (var U = 0, H = (0, w.default)(M.default.globalCustomMenuConstructorList); U < H.length; U++) {
            var j = H[U], P = j[0], V = j[1], Q = V;
            this._initMenuList(P, Q);
          }
          this._addToToolbar(), F.showMenuTooltips && this._bindMenuTooltips();
        }, C.prototype._initMenuList = function(R, O) {
          var B;
          if (!(O == null || typeof O != "function"))
            if ((0, E.default)(B = this.menuList).call(B, function(z) {
              return z.key === R;
            }))
              console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + R);
            else {
              var F = new O(this.editor);
              F.key = R, this.menuList.push(F);
            }
        }, C.prototype._bindMenuTooltips = function() {
          var R = this.editor, O = R.$toolbarElem, B = R.config, F = B.menuTooltipPosition, z = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + F + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
          z.css("visibility", "hidden"), O.append(z), z.css("z-index", R.zIndex.get("tooltip"));
          var I = 0;
          function U() {
            I && clearTimeout(I);
          }
          function H() {
            U(), z.css("visibility", "hidden");
          }
          O.on("mouseover", function(j) {
            var P = j.target, V = h.default(P), Q, K;
            if (V.isContain(O)) {
              H();
              return;
            }
            if (V.parentUntil(".w-e-droplist") != null)
              H();
            else if (V.attr("data-title"))
              Q = V.attr("data-title"), K = V;
            else {
              var q = V.parentUntil(".w-e-menu");
              q != null && (Q = q.attr("data-title"), K = q);
            }
            if (Q && K) {
              U();
              var X = K.getOffsetData();
              z.text(R.i18next.t("menus.title." + Q));
              var _ = z.getOffsetData(), le = X.left + X.width / 2 - _.width / 2;
              z.css("left", le + "px"), F === "up" ? z.css("top", X.top - _.height - 8 + "px") : F === "down" && z.css("top", X.top + X.height + 8 + "px"), I = (0, g.default)(function() {
                z.css("visibility", "visible");
              }, 200);
            } else
              H();
          }).on("mouseleave", function() {
            H();
          });
        }, C.prototype._addToToolbar = function() {
          var R, O = this.editor, B = O.$toolbarElem;
          (0, x.default)(R = this.menuList).call(R, function(F) {
            var z = F.$elem;
            z && B.append(z);
          });
        }, C.prototype.menuFind = function(R) {
          for (var O = this.menuList, B = 0, F = O.length; B < F; B++)
            if (O[B].key === R)
              return O[B];
          return O[0];
        }, C.prototype.changeActive = function() {
          var R;
          (0, x.default)(R = this.menuList).call(R, function(O) {
            var B;
            (0, g.default)((0, S.default)(B = O.tryChangeActive).call(B, O), 100);
          });
        }, C;
      }();
      o.default = b;
    }, function(l, o, t) {
      l.exports = t(303);
    }, function(l, o, t) {
      var s = t(304);
      l.exports = s;
    }, function(l, o, t) {
      t(305);
      var s = t(9);
      l.exports = s.Object.keys;
    }, function(l, o, t) {
      var s = t(5), f = t(29), d = t(52), c = t(11), m = c(function() {
        d(1);
      });
      s({ target: "Object", stat: !0, forced: m }, { keys: function(x) {
        return d(f(x));
      } });
    }, function(l, o, t) {
      var s = t(307);
      l.exports = s;
    }, function(l, o, t) {
      t(308);
      var s = t(9);
      l.exports = s.Object.entries;
    }, function(l, o, t) {
      var s = t(5), f = t(309).entries;
      s({ target: "Object", stat: !0 }, { entries: function(c) {
        return f(c);
      } });
    }, function(l, o, t) {
      var s = t(14), f = t(52), d = t(28), c = t(59).f, m = function(x) {
        return function(w) {
          for (var E = d(w), g = f(E), S = g.length, v = 0, M = [], y; S > v; )
            y = g[v++], (!s || c.call(E, y)) && M.push(x ? [y, E[y]] : E[y]);
          return M;
        };
      };
      l.exports = {
        entries: m(!0),
        values: m(!1)
      };
    }, function(l, o, t) {
      var s = t(311);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(312), f = Array.prototype;
      l.exports = function(d) {
        var c = d.some;
        return d === f || d instanceof Array && c === f.some ? s : c;
      };
    }, function(l, o, t) {
      t(313);
      var s = t(15);
      l.exports = s("Array").some;
    }, function(l, o, t) {
      var s = t(5), f = t(30).some, d = t(67), c = t(22), m = d("some"), T = c("some");
      s({ target: "Array", proto: !0, forced: !m || !T }, { some: function(w) {
        return f(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(315)), m = d.__importDefault(t(316)), T = d.__importDefault(t(321)), x = d.__importDefault(t(326)), w = d.__importDefault(t(327)), E = d.__importDefault(t(328)), g = d.__importDefault(t(329)), S = d.__importDefault(t(331)), v = d.__importDefault(t(333)), M = d.__importDefault(t(334)), y = d.__importDefault(t(337)), h = d.__importDefault(t(338)), b = d.__importDefault(t(339)), C = d.__importDefault(t(350)), R = d.__importDefault(t(365)), O = d.__importDefault(t(369)), B = d.__importDefault(t(137)), F = d.__importDefault(t(378)), z = d.__importDefault(t(380)), I = d.__importDefault(t(381)), U = d.__importDefault(t(382)), H = d.__importDefault(t(401)), j = d.__importDefault(t(406)), P = d.__importDefault(t(409));
      o.default = { bold: c.default, head: m.default, italic: x.default, link: T.default, underline: w.default, strikeThrough: E.default, fontName: g.default, fontSize: S.default, justify: v.default, quote: M.default, backColor: y.default, foreColor: h.default, video: b.default, image: C.default, indent: R.default, emoticon: O.default, list: B.default, lineHeight: F.default, undo: z.default, redo: I.default, table: U.default, code: H.default, splitLine: j.default, todo: P.default };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), T = function(x) {
        d.__extends(w, x);
        function w(E) {
          var g = this, S = m.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
          return g = x.call(this, S, E) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var E = this.editor, g = E.selection.isSelectionEmpty();
          g && E.selection.createEmptyRange(), E.cmd.do("bold"), g && (E.selection.collapseRange(), E.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var E = this.editor;
          E.cmd.queryCommandState("bold") ? this.active() : this.unActive();
        }, w;
      }(c.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(27)), c = s(t(31)), m = s(t(4)), T = s(t(317)), x = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 });
      var w = t(2), E = w.__importDefault(t(24)), g = w.__importDefault(t(3)), S = t(6), v = t(7), M = function(y) {
        w.__extends(h, y);
        function h(b) {
          var C = this, R = g.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), O = { width: 100, title: "\u8BBE\u7F6E\u6807\u9898", type: "list", list: [{ $elem: g.default("<h1>H1</h1>"), value: "<h1>" }, { $elem: g.default("<h2>H2</h2>"), value: "<h2>" }, { $elem: g.default("<h3>H3</h3>"), value: "<h3>" }, { $elem: g.default("<h4>H4</h4>"), value: "<h4>" }, { $elem: g.default("<h5>H5</h5>"), value: "<h5>" }, { $elem: g.default("<p>" + b.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"), value: "<p>" }], clickHandler: function(z) {
            C.command(z);
          } };
          C = y.call(this, R, b, O) || this;
          var B = b.config.onCatalogChange;
          return B && (C.oldCatalogs = [], C.addListenerCatalog(), C.getCatalogs()), C;
        }
        return h.prototype.command = function(b) {
          var C = this.editor, R = C.selection.getSelectionContainerElem();
          if (R && C.$textElem.equal(R))
            this.setMultilineHead(b);
          else {
            var O;
            if ((0, d.default)(O = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(O, g.default(R).getNodeName()) > -1)
              return;
            C.cmd.do("formatBlock", b);
          }
          b !== "<p>" && this.addUidForSelectionElem();
        }, h.prototype.addUidForSelectionElem = function() {
          var b = this.editor, C = b.selection.getSelectionContainerElem(), R = S.getRandomCode();
          g.default(C).attr("id", R);
        }, h.prototype.addListenerCatalog = function() {
          var b = this, C = this.editor;
          C.txt.eventHooks.changeEvents.push(function() {
            b.getCatalogs();
          });
        }, h.prototype.getCatalogs = function() {
          var b = this.editor, C = this.editor.$textElem, R = b.config.onCatalogChange, O = (0, c.default)(C).call(C, "h1,h2,h3,h4,h5"), B = [];
          (0, m.default)(O).call(O, function(F, z) {
            var I = g.default(F), U = I.attr("id"), H = I.getNodeName(), j = I.text();
            U || (U = S.getRandomCode(), I.attr("id", U)), j && B.push({ tag: H, id: U, text: j });
          }), (0, T.default)(this.oldCatalogs) !== (0, T.default)(B) && (this.oldCatalogs = B, R && R(B));
        }, h.prototype.setMultilineHead = function(b) {
          var C = this, R, O, B = this.editor, F = B.selection, z = (R = F.getSelectionContainerElem()) === null || R === void 0 ? void 0 : R.elems[0], I = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], U = g.default(F.getSelectionStartElem()), H = g.default(F.getSelectionEndElem());
          H.elems[0].outerHTML === g.default(v.EMPTY_P).elems[0].outerHTML && !H.elems[0].nextSibling && (H = H.prev());
          var j = [];
          j.push(U.getNodeTop(B));
          var P = [], V = (O = F.getRange()) === null || O === void 0 ? void 0 : O.commonAncestorContainer.childNodes;
          V == null || (0, m.default)(V).call(V, function(q, X) {
            q === j[0].getNode() && P.push(X), q === H.getNodeTop(B).getNode() && P.push(X);
          });
          for (var Q = 0; j[Q].getNode() !== H.getNodeTop(B).getNode(); ) {
            if (!j[Q].elems[0])
              return;
            var K = g.default(j[Q].next().getNode());
            j.push(K), Q++;
          }
          j == null || (0, m.default)(j).call(j, function(q, X) {
            if (!C.hasTag(q, I)) {
              var _ = g.default(b), le = q.parent().getNode();
              _.html("" + q.html()), le.insertBefore(_.getNode(), q.getNode()), q.remove();
            }
          }), F.createRangeByElems(z.children[P[0]], z.children[P[1]]);
        }, h.prototype.hasTag = function(b, C) {
          var R = this, O;
          if (!b)
            return !1;
          if ((0, x.default)(C).call(C, b == null ? void 0 : b.getNodeName()))
            return !0;
          var B = !1;
          return (O = b.children()) === null || O === void 0 || (0, m.default)(O).call(O, function(F) {
            B = R.hasTag(g.default(F), C);
          }), B;
        }, h.prototype.tryChangeActive = function() {
          var b = this.editor, C = /^h/i, R = b.cmd.queryCommandValue("formatBlock");
          C.test(R) ? this.active() : this.unActive();
        }, h;
      }(E.default);
      o.default = M;
    }, function(l, o, t) {
      l.exports = t(318);
    }, function(l, o, t) {
      var s = t(319);
      l.exports = s;
    }, function(l, o, t) {
      t(320);
      var s = t(9);
      s.JSON || (s.JSON = { stringify: JSON.stringify }), l.exports = function(d, c, m) {
        return s.JSON.stringify.apply(null, arguments);
      };
    }, function(l, o, t) {
      var s = t(5), f = t(35), d = t(11), c = f("JSON", "stringify"), m = /[\uD800-\uDFFF]/g, T = /^[\uD800-\uDBFF]$/, x = /^[\uDC00-\uDFFF]$/, w = function(S, v, M) {
        var y = M.charAt(v - 1), h = M.charAt(v + 1);
        return T.test(S) && !x.test(h) || x.test(S) && !T.test(y) ? "\\u" + S.charCodeAt(0).toString(16) : S;
      }, E = d(function() {
        return c("\uDF06\uD834") !== '"\\udf06\\ud834"' || c("\uDEAD") !== '"\\udead"';
      });
      c && s({ target: "JSON", stat: !0, forced: E }, {
        stringify: function(S, v, M) {
          var y = c.apply(null, arguments);
          return typeof y == "string" ? y.replace(m, w) : y;
        }
      });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(37)), T = c.__importDefault(t(3)), x = c.__importDefault(t(322)), w = c.__importDefault(t(134)), E = c.__importDefault(t(32)), g = c.__importDefault(t(324)), S = t(7), v = function(M) {
        c.__extends(y, M);
        function y(h) {
          var b = this, C = T.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
          return b = M.call(this, C, h) || this, g.default(h), b;
        }
        return y.prototype.clickHandler = function() {
          var h = this.editor, b, C = h.selection.getSelectionContainerElem(), R = h.$textElem, O = R.html(), B = (0, d.default)(O).call(O);
          if (B === S.EMPTY_P) {
            var F = R.children();
            h.selection.createRangeByElem(F, !0, !0), C = h.selection.getSelectionContainerElem();
          }
          if (!(C && h.$textElem.equal(C)))
            if (this.isActive) {
              if (b = h.selection.getSelectionContainerElem(), !b)
                return;
              this.createPanel(b.text(), b.attr("href"));
            } else
              h.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(h.selection.getSelectionText(), "");
        }, y.prototype.createPanel = function(h, b) {
          var C = x.default(this.editor, h, b), R = new E.default(this, C);
          R.create();
        }, y.prototype.tryChangeActive = function() {
          var h = this.editor;
          w.default(h) ? this.active() : this.unActive();
        }, y;
      }(m.default);
      o.default = v;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), T = c.__importDefault(t(3)), x = c.__importDefault(t(134)), w = t(323);
      function E(g, S, v) {
        var M = m.getRandom("input-link"), y = m.getRandom("input-text"), h = m.getRandom("btn-ok"), b = m.getRandom("btn-del"), C = x.default(g) ? "inline-block" : "none", R;
        function O() {
          if (!!x.default(g)) {
            var U = g.selection.getSelectionContainerElem();
            !U || (g.selection.createRangeByElem(U), g.selection.restoreSelection(), R = U);
          }
        }
        function B(U, H) {
          var j = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
          U = U.replace(j, ""), x.default(g) && O(), g.cmd.do("insertHTML", '<a href="' + H + '" target="_blank">' + U + "</a>");
        }
        function F() {
          if (!!x.default(g)) {
            O();
            var U = R.text();
            g.cmd.do("insertHTML", "<span>" + U + "</span>");
          }
        }
        function z(U, H) {
          var j = g.config.linkCheck(U, H);
          if (j !== void 0) {
            if (j === !0)
              return !0;
            g.config.customAlert(j, "warning");
          }
          return !1;
        }
        var I = {
          width: 300,
          height: 0,
          tabs: [{
            title: g.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
            tpl: `<div>
                        <input
                            id="` + y + `"
                            type="text"
                            class="block"
                            value="` + S + `"
                            placeholder="` + g.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + M + `"
                            type="text"
                            class="block"
                            value="` + v + `"
                            placeholder="` + g.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + h + `" class="right">
                                ` + g.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + b + '" class="gray right" style="display:' + C + `">
                                ` + g.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + h, type: "click", fn: function() {
                var H, j, P, V;
                g.selection.restoreSelection();
                var Q = g.selection.getSelectionRangeTopNodes()[0].getNode(), K = window.getSelection(), q = T.default("#" + M), X = T.default("#" + y), _ = (0, d.default)(H = q.val()).call(H), le = (0, d.default)(j = X.val()).call(j), Se = "";
                K && !(K != null && K.isCollapsed) && (Se = (P = w.insertHtml(K, Q)) === null || P === void 0 ? void 0 : (0, d.default)(P).call(P));
                var ve = Se == null ? void 0 : Se.replace(/<.*?>/g, ""), ce = (V = ve == null ? void 0 : ve.length) !== null && V !== void 0 ? V : 0;
                if (ce <= le.length) {
                  var ae = le.substring(0, ce), re = le.substring(ce);
                  ve === ae && (le = Se + re);
                }
                if (!!_ && (le || (le = _), !!z(le, _)))
                  return B(le, _), !0;
              }, bindEnter: !0 },
              { selector: "#" + b, type: "click", fn: function() {
                return F(), !0;
              } }
            ]
          }]
        };
        return I;
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 }), o.insertHtml = o.createPartHtml = o.makeHtmlString = o.getTopNode = void 0;
      function c(g, S) {
        var v = g, M = g;
        do {
          if (v.textContent === S)
            break;
          M = v, v.parentNode && (v = v == null ? void 0 : v.parentNode);
        } while ((v == null ? void 0 : v.nodeName) !== "P");
        return M;
      }
      o.getTopNode = c;
      function m(g, S) {
        var v = g.nodeName, M = "";
        if (g.nodeType === 3 || /^(h|H)[1-6]$/.test(v))
          return S;
        if (g.nodeType === 1) {
          var y = g.getAttribute("style"), h = g.getAttribute("face"), b = g.getAttribute("color");
          y && (M = M + (' style="' + y + '"')), h && (M = M + (' face="' + h + '"')), b && (M = M + (' color="' + b + '"'));
        }
        return v = v.toLowerCase(), "<" + v + M + ">" + S + "</" + v + ">";
      }
      o.makeHtmlString = m;
      function T(g, S, v, M) {
        var y, h = (y = S.textContent) === null || y === void 0 ? void 0 : y.substring(v, M), b = S, C = "";
        do
          C = m(b, h != null ? h : ""), h = C, b = b == null ? void 0 : b.parentElement;
        while (b && b.textContent !== g);
        return C;
      }
      o.createPartHtml = T;
      function x(g, S) {
        var v, M, y, h, b, C = g.anchorNode, R = g.focusNode, O = g.anchorOffset, B = g.focusOffset, F = (v = S.textContent) !== null && v !== void 0 ? v : "", z = w(S), I = "", U = "", H = "", j = "", P = C, V = R, Q = C;
        if (C != null && C.isEqualNode(R != null ? R : null)) {
          var K = T(F, C, O, B);
          return K = E(z, K), K;
        }
        for (C && (U = T(F, C, O != null ? O : 0)), R && (j = T(F, R, 0, B)), C && (P = c(C, F)), R && (V = c(R, F)), Q = (M = P == null ? void 0 : P.nextSibling) !== null && M !== void 0 ? M : C; !(Q != null && Q.isEqualNode(V != null ? V : null)); ) {
          var q = Q == null ? void 0 : Q.nodeName;
          if (q === "#text")
            H = H + (Q == null ? void 0 : Q.textContent);
          else {
            var X = (h = (y = Q == null ? void 0 : Q.firstChild) === null || y === void 0 ? void 0 : y.parentElement) === null || h === void 0 ? void 0 : h.innerHTML;
            Q && (H = H + m(Q, X != null ? X : ""));
          }
          var _ = (b = Q == null ? void 0 : Q.nextSibling) !== null && b !== void 0 ? b : Q;
          if (_ === Q)
            break;
          Q = _;
        }
        return I = "" + U + H + j, I = E(z, I), I;
      }
      o.insertHtml = x;
      function w(g) {
        for (var S, v = (S = g.textContent) !== null && S !== void 0 ? S : "", M = []; (g == null ? void 0 : g.textContent) === v; )
          g.nodeName !== "P" && g.nodeName !== "TABLE" && M.push(g), g = g.childNodes[0];
        return M;
      }
      function E(g, S) {
        return (0, d.default)(g).call(g, function(v) {
          S = m(v, S);
        }), S;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(325));
      function m(T) {
        c.default(T);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function T(w) {
        var E;
        function g(v) {
          var M = [{ $elem: c.default("<span>" + w.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(h, b) {
            var C = b.attr("href");
            return window.open(C, "_target"), !0;
          } }, { $elem: c.default("<span>" + w.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"), onClick: function(h, b) {
            var C, R;
            h.selection.createRangeByElem(b), h.selection.restoreSelection();
            var O = b.childNodes();
            if ((O == null ? void 0 : O.getNodeName()) === "IMG") {
              var B = (R = (C = h.selection.getSelectionContainerElem()) === null || C === void 0 ? void 0 : C.children()) === null || R === void 0 ? void 0 : R.elems[0].children[0];
              h.cmd.do("insertHTML", `<img 
                                src=` + (B == null ? void 0 : B.getAttribute("src")) + ` 
                                style=` + (B == null ? void 0 : B.getAttribute("style")) + ">");
            } else {
              var F = b.text();
              h.cmd.do("insertHTML", "<span>" + F + "</span>");
            }
            return !0;
          } }];
          E = new m.default(w, v, M), E.create();
        }
        function S() {
          E && (E.remove(), E = null);
        }
        return { showLinkTooltip: g, hideLinkTooltip: S };
      }
      function x(w) {
        var E = T(w), g = E.showLinkTooltip, S = E.hideLinkTooltip;
        w.txt.eventHooks.linkClickEvents.push(g), w.txt.eventHooks.clickEvents.push(S), w.txt.eventHooks.keyupEvents.push(S), w.txt.eventHooks.toolbarClickEvents.push(S), w.txt.eventHooks.menuClickEvents.push(S), w.txt.eventHooks.textScrollEvents.push(S);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), T = function(x) {
        d.__extends(w, x);
        function w(E) {
          var g = this, S = m.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
          return g = x.call(this, S, E) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var E = this.editor, g = E.selection.isSelectionEmpty();
          g && E.selection.createEmptyRange(), E.cmd.do("italic"), g && (E.selection.collapseRange(), E.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var E = this.editor;
          E.cmd.queryCommandState("italic") ? this.active() : this.unActive();
        }, w;
      }(c.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), T = function(x) {
        d.__extends(w, x);
        function w(E) {
          var g = this, S = m.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
          return g = x.call(this, S, E) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var E = this.editor, g = E.selection.isSelectionEmpty();
          g && E.selection.createEmptyRange(), E.cmd.do("underline"), g && (E.selection.collapseRange(), E.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var E = this.editor;
          E.cmd.queryCommandState("underline") ? this.active() : this.unActive();
        }, w;
      }(c.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), T = function(x) {
        d.__extends(w, x);
        function w(E) {
          var g = this, S = m.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
          return g = x.call(this, S, E) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var E = this.editor, g = E.selection.isSelectionEmpty();
          g && E.selection.createEmptyRange(), E.cmd.do("strikeThrough"), g && (E.selection.collapseRange(), E.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var E = this.editor;
          E.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
        }, w;
      }(c.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(24)), m = d.__importDefault(t(3)), T = d.__importDefault(t(330)), x = function(w) {
        d.__extends(E, w);
        function E(g) {
          var S = this, v = m.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), M = new T.default(g.config.fontNames), y = { width: 100, title: "\u8BBE\u7F6E\u5B57\u4F53", type: "list", list: M.getItemList(), clickHandler: function(b) {
            S.command(b);
          } };
          return S = w.call(this, v, g, y) || this, S;
        }
        return E.prototype.command = function(g) {
          var S, v = this.editor, M = v.selection.isSelectionEmpty(), y = (S = v.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.elems[0];
          if (y != null) {
            var h = (y == null ? void 0 : y.nodeName.toLowerCase()) !== "p", b = (y == null ? void 0 : y.getAttribute("face")) === g;
            if (M) {
              if (h && !b) {
                var C = v.selection.getSelectionRangeTopNodes();
                v.selection.createRangeByElem(C[0]), v.selection.moveCursor(C[0].elems[0]);
              }
              v.selection.setRangeToElem(y), v.selection.createEmptyRange();
            }
            v.cmd.do("fontName", g), M && (v.selection.collapseRange(), v.selection.restoreSelection());
          }
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(c.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = function() {
        function x(w) {
          var E = this;
          this.itemList = [], (0, d.default)(w).call(w, function(g) {
            var S = typeof g == "string" ? g : g.value, v = typeof g == "string" ? g : g.name;
            E.itemList.push({ $elem: m.default(`<p style="font-family:'` + S + `'">` + v + "</p>"), value: v });
          });
        }
        return x.prototype.getItemList = function() {
          return this.itemList;
        }, x;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(24)), m = d.__importDefault(t(3)), T = d.__importDefault(t(332)), x = function(w) {
        d.__extends(E, w);
        function E(g) {
          var S = this, v = m.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), M = new T.default(g.config.fontSizes), y = { width: 160, title: "\u8BBE\u7F6E\u5B57\u53F7", type: "list", list: M.getItemList(), clickHandler: function(b) {
            S.command(b);
          } };
          return S = w.call(this, v, g, y) || this, S;
        }
        return E.prototype.command = function(g) {
          var S, v = this.editor, M = v.selection.isSelectionEmpty(), y = (S = v.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.elems[0];
          y != null && (v.cmd.do("fontSize", g), M && (v.selection.collapseRange(), v.selection.restoreSelection()));
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(c.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = function() {
        function T(x) {
          this.itemList = [];
          for (var w in x) {
            var E = x[w];
            this.itemList.push({ $elem: c.default('<p style="font-size:' + w + '">' + E.name + "</p>"), value: E.value });
          }
        }
        return T.prototype.getItemList = function() {
          return this.itemList;
        }, T;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(24)), x = m.__importDefault(t(3)), w = ["LI"], E = ["UL", "BLOCKQUOTE"], g = function(S) {
        m.__extends(v, S);
        function v(M) {
          var y = this, h = x.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), b = { width: 100, title: "\u5BF9\u9F50\u65B9\u5F0F", type: "list", list: [{ $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`), value: "left" }, { $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`), value: "center" }, { $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`), value: "right" }, { $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`), value: "justify" }], clickHandler: function(R) {
            y.command(R);
          } };
          return y = S.call(this, h, M, b) || this, y;
        }
        return v.prototype.command = function(M) {
          var y = this.editor, h = y.selection, b = h.getSelectionContainerElem();
          h.saveRange();
          var C = y.selection.getSelectionRangeTopNodes();
          if (b != null && b.length)
            if (this.isSpecialNode(b, C[0]) || this.isSpecialTopNode(C[0])) {
              var R = this.getSpecialNodeUntilTop(b, C[0]);
              if (R == null)
                return;
              x.default(R).css("text-align", M);
            } else
              (0, d.default)(C).call(C, function(O) {
                O.css("text-align", M);
              });
          h.restoreSelection();
        }, v.prototype.getSpecialNodeUntilTop = function(M, y) {
          for (var h = M.elems[0], b = y.elems[0]; h != null; ) {
            if ((0, c.default)(w).call(w, h == null ? void 0 : h.nodeName) !== -1 || h.parentNode === b)
              return h;
            h = h.parentNode;
          }
          return h;
        }, v.prototype.isSpecialNode = function(M, y) {
          var h = this.getSpecialNodeUntilTop(M, y);
          return h == null ? !1 : (0, c.default)(w).call(w, h.nodeName) !== -1;
        }, v.prototype.isSpecialTopNode = function(M) {
          var y;
          return M == null ? !1 : (0, c.default)(E).call(E, (y = M.elems[0]) === null || y === void 0 ? void 0 : y.nodeName) !== -1;
        }, v.prototype.tryChangeActive = function() {
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = c.__importDefault(t(23)), x = c.__importDefault(t(335)), w = c.__importDefault(t(336)), E = t(7), g = function(S) {
        c.__extends(v, S);
        function v(M) {
          var y = this, h = m.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
          return y = S.call(this, h, M) || this, x.default(M), y;
        }
        return v.prototype.clickHandler = function() {
          var M, y, h = this.editor, b = h.selection.isSelectionEmpty(), C = h.selection.getSelectionRangeTopNodes(), R = C[C.length - 1], O = this.getTopNodeName();
          if (O === "BLOCKQUOTE") {
            var B = m.default(R.childNodes()), F = B.length, z = R;
            (0, d.default)(B).call(B, function(j) {
              var P = m.default(j);
              P.insertAfter(z), z = P;
            }), R.remove(), h.selection.moveCursor(B.elems[F - 1]), this.tryChangeActive();
          } else {
            var I = w.default(C);
            if (h.$textElem.equal(R)) {
              var U = (M = h.selection.getSelectionContainerElem()) === null || M === void 0 ? void 0 : M.elems[0];
              h.selection.createRangeByElems(U.children[0], U.children[0]), C = h.selection.getSelectionRangeTopNodes(), I = w.default(C), R.append(I);
            } else
              I.insertAfter(R);
            this.delSelectNode(C);
            var H = (y = I.childNodes()) === null || y === void 0 ? void 0 : y.last().getNode();
            if (H == null)
              return;
            H.textContent ? h.selection.moveCursor(H) : h.selection.moveCursor(H, 0), this.tryChangeActive(), m.default(E.EMPTY_P).insertAfter(I);
            return;
          }
          b && (h.selection.collapseRange(), h.selection.restoreSelection());
        }, v.prototype.tryChangeActive = function() {
          var M, y = this.editor, h = (M = y.selection.getSelectionRangeTopNodes()[0]) === null || M === void 0 ? void 0 : M.getNodeName();
          h === "BLOCKQUOTE" ? this.active() : this.unActive();
        }, v.prototype.getTopNodeName = function() {
          var M = this.editor, y = M.selection.getSelectionRangeTopNodes()[0], h = y == null ? void 0 : y.getNodeName();
          return h;
        }, v.prototype.delSelectNode = function(M) {
          (0, d.default)(M).call(M, function(y) {
            y.remove();
          });
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(7), m = d.__importDefault(t(3));
      function T(x) {
        function w(E) {
          var g, S = x.selection.getSelectionContainerElem(), v = x.selection.getSelectionRangeTopNodes()[0];
          if ((v == null ? void 0 : v.getNodeName()) === "BLOCKQUOTE") {
            if (S.getNodeName() === "BLOCKQUOTE") {
              var M = (g = S.childNodes()) === null || g === void 0 ? void 0 : g.getNode();
              x.selection.moveCursor(M);
            }
            if (S.text() === "") {
              E.preventDefault(), S.remove();
              var y = m.default(c.EMPTY_P);
              y.insertAfter(v), x.selection.moveCursor(y.getNode(), 0);
            }
            v.text() === "" && v.remove();
          }
        }
        x.txt.eventHooks.enterDownEvents.push(w);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      function T(x) {
        var w = m.default("<blockquote></blockquote>");
        return (0, d.default)(x).call(x, function(E) {
          w.append(E.clone(!0));
        }), w;
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(24)), T = c.__importDefault(t(3)), x = t(6), w = function(E) {
        c.__extends(g, E);
        function g(S) {
          var v, M = this, y = T.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), h = {
            width: 120,
            title: "\u80CC\u666F\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(v = S.config.colors).call(v, function(b) {
              return { $elem: T.default('<i style="color:' + b + ';" class="w-e-icon-paint-brush"></i>'), value: b };
            }),
            clickHandler: function(C) {
              M.command(C);
            }
          };
          return M = E.call(this, y, S, h) || this, M;
        }
        return g.prototype.command = function(S) {
          var v, M = this.editor, y = M.selection.isSelectionEmpty(), h = (v = M.selection.getSelectionContainerElem()) === null || v === void 0 ? void 0 : v.elems[0];
          if (h != null) {
            var b = (h == null ? void 0 : h.nodeName.toLowerCase()) !== "p", C = h == null ? void 0 : h.style.backgroundColor, R = x.hexToRgb(S) === C;
            if (y) {
              if (b && !R) {
                var O = M.selection.getSelectionRangeTopNodes();
                M.selection.createRangeByElem(O[0]), M.selection.moveCursor(O[0].elems[0]);
              }
              M.selection.createEmptyRange();
            }
            M.cmd.do("backColor", S), y && (M.selection.collapseRange(), M.selection.restoreSelection());
          }
        }, g.prototype.tryChangeActive = function() {
        }, g;
      }(m.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(24)), T = c.__importDefault(t(3)), x = function(w) {
        c.__extends(E, w);
        function E(g) {
          var S, v = this, M = T.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), y = {
            width: 120,
            title: "\u6587\u5B57\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(S = g.config.colors).call(S, function(h) {
              return { $elem: T.default('<i style="color:' + h + ';" class="w-e-icon-pencil2"></i>'), value: h };
            }),
            clickHandler: function(b) {
              v.command(b);
            }
          };
          return v = w.call(this, M, g, y) || this, v;
        }
        return E.prototype.command = function(g) {
          var S, v = this.editor, M = v.selection.isSelectionEmpty(), y = (S = v.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.elems[0];
          if (y != null) {
            var h = v.selection.getSelectionText();
            if (y.nodeName === "A" && y.textContent === h) {
              var b = T.default("<span>&#8203;</span>").getNode();
              y.appendChild(b);
            }
            v.cmd.do("foreColor", g), M && (v.selection.collapseRange(), v.selection.restoreSelection());
          }
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(m.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(32)), T = d.__importDefault(t(37)), x = d.__importDefault(t(340)), w = d.__importDefault(t(346)), E = function(g) {
        d.__extends(S, g);
        function S(v) {
          var M = this, y = c.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
          return M = g.call(this, y, v) || this, w.default(v), M;
        }
        return S.prototype.clickHandler = function() {
          this.createPanel("");
        }, S.prototype.createPanel = function(v) {
          var M = x.default(this.editor, v), y = new m.default(this, M);
          y.create();
        }, S.prototype.tryChangeActive = function() {
        }, S;
      }(T.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), T = c.__importDefault(t(3)), x = c.__importDefault(t(341)), w = t(7);
      function E(g, S) {
        var v = g.config, M = new x.default(g), y = m.getRandom("input-iframe"), h = m.getRandom("btn-ok"), b = m.getRandom("input-upload"), C = m.getRandom("btn-local-ok");
        function R(z) {
          g.cmd.do("insertHTML", z + w.EMPTY_P), g.config.onlineVideoCallback(z);
        }
        function O(z) {
          var I = g.config.onlineVideoCheck(z);
          return I === !0 ? !0 : (typeof I == "string" && g.config.customAlert(I, "error"), !1);
        }
        var B = [{
          title: g.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
          tpl: `<div class="w-e-up-video-container">
                    <div id="` + C + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + b + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
          events: [
            { selector: "#" + C, type: "click", fn: function() {
              var I = T.default("#" + b), U = I.elems[0];
              if (U)
                U.click();
              else
                return !0;
            } },
            { selector: "#" + b, type: "change", fn: function() {
              var I = T.default("#" + b), U = I.elems[0];
              if (!U)
                return !0;
              var H = U.files;
              return H.length && M.uploadVideo(H), !0;
            } }
          ]
        }, {
          title: g.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
          tpl: `<div>
                    <input 
                        id="` + y + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + g.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + h + `" class="right">
                            ` + g.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
          events: [
            { selector: "#" + h, type: "click", fn: function() {
              var I, U = T.default("#" + y), H = (0, d.default)(I = U.val()).call(I);
              if (!!H && !!O(H))
                return R(H), !0;
            }, bindEnter: !0 }
          ]
        }], F = {
          width: 300,
          height: 0,
          tabs: []
        };
        return window.FileReader && (v.uploadVideoServer || v.customUploadVideo) && F.tabs.push(B[0]), v.showLinkVideo && F.tabs.push(B[1]), F;
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(132)), c = s(t(57)), m = s(t(4)), T = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var x = t(2), w = t(6), E = x.__importDefault(t(135)), g = x.__importDefault(t(136)), S = t(7), v = t(6), M = function() {
        function y(h) {
          this.editor = h;
        }
        return y.prototype.uploadVideo = function(h) {
          var b = this;
          if (!!h.length) {
            var C = this.editor, R = C.config, O = "validate.", B = function(pe) {
              return C.i18next.t(O + pe);
            }, F = R.uploadVideoServer, z = R.uploadVideoMaxSize, I = z / 1024, U = R.uploadVideoName, H = R.uploadVideoParams, j = R.uploadVideoParamsWithUrl, P = R.uploadVideoHeaders, V = R.uploadVideoHooks, Q = R.uploadVideoTimeout, K = R.withVideoCredentials, q = R.customUploadVideo, X = R.uploadVideoAccept, _ = [], le = [];
            if (w.arrForEach(h, function(se) {
              var pe = se.name, Pe = se.size / 1024 / 1024;
              if (!(!pe || !Pe)) {
                if (!(X instanceof Array)) {
                  le.push("\u3010" + X + "\u3011" + B("uploadVideoAccept \u4E0D\u662FArray"));
                  return;
                }
                if (!(0, d.default)(X).call(X, function(Ee) {
                  return Ee === pe.split(".")[pe.split(".").length - 1];
                })) {
                  le.push("\u3010" + pe + "\u3011" + B("\u4E0D\u662F\u89C6\u9891"));
                  return;
                }
                if (I < Pe) {
                  le.push("\u3010" + pe + "\u3011" + B("\u5927\u4E8E") + " " + I + "M");
                  return;
                }
                _.push(se);
              }
            }), le.length) {
              R.customAlert(B("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + le.join(`
`), "warning");
              return;
            }
            if (_.length === 0) {
              R.customAlert(B("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (q && typeof q == "function") {
              var Se;
              q(_, (0, c.default)(Se = this.insertVideo).call(Se, this));
              return;
            }
            var ve = new FormData();
            if ((0, m.default)(_).call(_, function(se, pe) {
              var Pe = U || se.name;
              _.length > 1 && (Pe = Pe + (pe + 1)), ve.append(Pe, se);
            }), F) {
              var ce = F.split("#");
              F = ce[0];
              var ae = ce[1] || "";
              (0, m.default)(w).call(w, H, function(se, pe) {
                j && ((0, T.default)(F).call(F, "?") > 0 ? F += "&" : F += "?", F = F + se + "=" + pe), ve.append(se, pe);
              }), ae && (F += "#" + ae);
              var re = E.default(F, { timeout: Q, formData: ve, headers: P, withCredentials: !!K, beforeSend: function(pe) {
                if (V.before)
                  return V.before(pe, C, _);
              }, onTimeout: function(pe) {
                R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), V.timeout && V.timeout(pe, C);
              }, onProgress: function(pe, Pe) {
                var Ee = new g.default(C);
                Pe.lengthComputable && (pe = Pe.loaded / Pe.total, Ee.show(pe));
              }, onError: function(pe) {
                R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", B("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + B("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + pe.status), V.error && V.error(pe, C);
              }, onFail: function(pe, Pe) {
                R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", B("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + B("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Pe), V.fail && V.fail(pe, C, Pe);
              }, onSuccess: function(pe, Pe) {
                if (V.customInsert) {
                  var Ee;
                  V.customInsert((0, c.default)(Ee = b.insertVideo).call(Ee, b), Pe, C);
                  return;
                }
                if (Pe.errno != "0") {
                  R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", B("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + B("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Pe.errno), V.fail && V.fail(pe, C, Pe);
                  return;
                }
                var je = Pe.data;
                b.insertVideo(je.url), V.success && V.success(pe, C, Pe);
              } });
              typeof re == "string" && R.customAlert(re, "error");
            }
          }
        }, y.prototype.insertVideo = function(h) {
          var b = this.editor, C = b.config, R = "validate.", O = function(z, I) {
            return I === void 0 && (I = R), b.i18next.t(I + z);
          };
          if (!C.customInsertVideo)
            v.UA.isFirefox ? b.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + h + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : b.cmd.do("insertHTML", '<video src="' + h + '" controls="controls" style="max-width:100%"></video>' + S.EMPTY_P);
          else {
            C.customInsertVideo(h);
            return;
          }
          var B = document.createElement("video");
          B.onload = function() {
            B = null;
          }, B.onerror = function() {
            C.customAlert(O("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + O("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + O("\u89C6\u9891\u94FE\u63A5") + ' "' + h + '"\uFF0C' + O("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), B = null;
          }, B.onabort = function() {
            return B = null;
          }, B.src = h;
        }, y;
      }();
      o.default = M;
    }, function(l, o, t) {
      l.exports = t(343);
    }, function(l, o, t) {
      var s = t(344);
      l.exports = s;
    }, function(l, o, t) {
      t(345);
      var s = t(9);
      l.exports = s.Date.now;
    }, function(l, o, t) {
      var s = t(5);
      s({ target: "Date", stat: !0 }, { now: function() {
        return new Date().getTime();
      } });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(347)), m = d.__importDefault(t(349));
      function T(x) {
        c.default(x), m.default(x);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38)), T = d.__importDefault(t(348));
      function x(E) {
        var g, S = function(h, b) {
          return b === void 0 && (b = ""), E.i18next.t(b + h);
        };
        function v(y) {
          var h = [{ $elem: c.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(C, R) {
            return R.remove(), !0;
          } }, { $elem: c.default("<span>100%</span>"), onClick: function(C, R) {
            return R.attr("width", "100%"), R.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>50%</span>"), onClick: function(C, R) {
            return R.attr("width", "50%"), R.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>30%</span>"), onClick: function(C, R) {
            return R.attr("width", "30%"), R.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>" + S("\u91CD\u7F6E") + "</span>"), onClick: function(C, R) {
            return R.removeAttr("width"), R.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>" + S("menus.justify.\u9760\u5DE6") + "</span>"), onClick: function(C, R) {
            return T.default(R, "left"), !0;
          } }, { $elem: c.default("<span>" + S("menus.justify.\u5C45\u4E2D") + "</span>"), onClick: function(C, R) {
            return T.default(R, "center"), !0;
          } }, { $elem: c.default("<span>" + S("menus.justify.\u9760\u53F3") + "</span>"), onClick: function(C, R) {
            return T.default(R, "right"), !0;
          } }];
          g = new m.default(E, y, h), g.create();
        }
        function M() {
          g && (g.remove(), g = null);
        }
        return { showVideoTooltip: v, hideVideoTooltip: M };
      }
      o.createShowHideFn = x;
      function w(E) {
        var g = x(E), S = g.showVideoTooltip, v = g.hideVideoTooltip;
        E.txt.eventHooks.videoClickEvents.push(S), E.txt.eventHooks.clickEvents.push(v), E.txt.eventHooks.keyupEvents.push(v), E.txt.eventHooks.toolbarClickEvents.push(v), E.txt.eventHooks.menuClickEvents.push(v), E.txt.eventHooks.textScrollEvents.push(v), E.txt.eventHooks.changeEvents.push(v);
      }
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      function T(w, E) {
        var g = ["P"], S = x(w, g);
        S && m.default(S).css("text-align", E);
      }
      o.default = T;
      function x(w, E) {
        for (var g, S = w.elems[0]; S != null; ) {
          if ((0, d.default)(E).call(E, S == null ? void 0 : S.nodeName))
            return S;
          if (((g = S == null ? void 0 : S.parentNode) === null || g === void 0 ? void 0 : g.nodeName) === "BODY")
            return null;
          S = S.parentNode;
        }
        return S;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function c(m) {
        if (!!d.UA.isFirefox) {
          var T = m.txt, x = m.selection, w = T.eventHooks.keydownEvents;
          w.push(function(E) {
            var g = x.getSelectionContainerElem();
            if (g) {
              var S = g.getNodeTop(m), v = S.length && S.prev().length ? S.prev() : null;
              v && v.attr("data-we-video-p") && x.getCursorPos() === 0 && E.keyCode === 8 && v.remove();
            }
          });
        }
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(7), T = c.__importDefault(t(3)), x = c.__importDefault(t(32)), w = c.__importDefault(t(37)), E = c.__importDefault(t(351)), g = c.__importDefault(t(364)), S = function(v) {
        c.__extends(M, v);
        function M(y) {
          var h = this, b = T.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), C = g.default(y);
          if (C.onlyUploadConf) {
            var R;
            b = C.onlyUploadConf.$elem, (0, d.default)(R = C.onlyUploadConf.events).call(R, function(O) {
              var B = O.type, F = O.fn || m.EMPTY_FN;
              b.on(B, function(z) {
                z.stopPropagation(), F(z);
              });
            });
          }
          return h = v.call(this, b, y) || this, h.imgPanelConfig = C, E.default(y), h;
        }
        return M.prototype.clickHandler = function() {
          this.imgPanelConfig.onlyUploadConf || this.createPanel();
        }, M.prototype.createPanel = function() {
          var y = this.imgPanelConfig, h = new x.default(this, y);
          this.setPanel(h), h.create();
        }, M.prototype.tryChangeActive = function() {
        }, M;
      }(w.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(352)), m = d.__importDefault(t(353)), T = d.__importDefault(t(354)), x = d.__importDefault(t(362)), w = d.__importDefault(t(363));
      function E(g) {
        c.default(g), m.default(g), T.default(g), x.default(g), w.default(g);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(130), m = d.__importDefault(t(96));
      function T(g, S) {
        var v = g.config, M = v.pasteFilterStyle, y = v.pasteIgnoreImg, h = c.getPasteHtml(S, M, y);
        if (h)
          return !0;
        var b = c.getPasteText(S);
        return !!b;
      }
      function x(g, S) {
        for (var v, M = ((v = S.clipboardData) === null || v === void 0 ? void 0 : v.types) || [], y = 0; y < M.length; y++) {
          var h = M[y];
          if (h === "Files")
            return !0;
        }
        return !1;
      }
      function w(g, S) {
        if (!(!x(S, g) && T(S, g))) {
          var v = c.getPasteImgs(g);
          if (!!v.length) {
            var M = new m.default(S);
            M.uploadImg(v);
          }
        }
      }
      function E(g) {
        g.txt.eventHooks.pasteEvents.unshift(function(S) {
          w(S, g);
        });
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(96));
      function m(T) {
        function x(w) {
          var E = w.dataTransfer && w.dataTransfer.files;
          if (!(!E || !E.length)) {
            var g = new c.default(T);
            g.uploadImg(E);
          }
        }
        T.txt.eventHooks.dropEvents.push(x);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31)), c = s(t(355));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var m = t(2), T = m.__importDefault(t(3));
      t(360);
      var x = t(6);
      function w(M, y, h, b, C) {
        M.attr("style", "width:" + y + "px; height:" + h + "px; left:" + b + "px; top:" + C + "px;");
      }
      function E(M, y) {
        var h = T.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
        return h.hide(), y.append(h), h;
      }
      function g(M, y, h) {
        var b = M.getBoundingClientRect(), C = h.getBoundingClientRect(), R = C.width.toFixed(2), O = C.height.toFixed(2);
        (0, d.default)(y).call(y, ".w-e-img-drag-show-size").text(R + "px * " + O + "px"), w(y, (0, c.default)(R), (0, c.default)(O), C.left - b.left, C.top - b.top), y.show();
      }
      function S(M) {
        var y = M.$textContainerElem, h, b = E(M, y);
        function C(B, F) {
          B.on("click", function(z) {
            z.stopPropagation();
          }), B.on("mousedown", ".w-e-img-drag-rb", function(z) {
            if (z.preventDefault(), !h)
              return;
            var I = z.clientX, U = z.clientY, H = F.getBoundingClientRect(), j = h.getBoundingClientRect(), P = j.width, V = j.height, Q = j.left - H.left, K = j.top - H.top, q = P / V, X = P, _ = V, le = T.default(document);
            function Se() {
              le.off("mousemove", ve), le.off("mouseup", ce);
            }
            function ve(ae) {
              ae.stopPropagation(), ae.preventDefault(), X = P + (ae.clientX - I), _ = V + (ae.clientY - U), X / _ != q && (_ = X / q), X = (0, c.default)(X.toFixed(2)), _ = (0, c.default)(_.toFixed(2)), (0, d.default)(B).call(B, ".w-e-img-drag-show-size").text(X.toFixed(2).replace(".00", "") + "px * " + _.toFixed(2).replace(".00", "") + "px"), w(B, X, _, Q, K);
            }
            le.on("mousemove", ve);
            function ce() {
              h.attr("width", X + ""), h.attr("height", _ + "");
              var ae = h.getBoundingClientRect();
              w(B, X, _, ae.left - H.left, ae.top - H.top), Se();
            }
            le.on("mouseup", ce), le.on("mouseleave", Se);
          });
        }
        function R(B) {
          if (x.UA.isIE())
            return !1;
          B && (h = B, g(y, b, h));
        }
        function O() {
          (0, d.default)(y).call(y, ".w-e-img-drag-mask").hide();
        }
        return C(b, y), T.default(document).on("click", O), M.beforeDestroy(function() {
          T.default(document).off("click", O);
        }), { showDrag: R, hideDrag: O };
      }
      o.createShowHideFn = S;
      function v(M) {
        var y = S(M), h = y.showDrag, b = y.hideDrag;
        M.txt.eventHooks.imgClickEvents.push(h), M.txt.eventHooks.textScrollEvents.push(b), M.txt.eventHooks.keyupEvents.push(b), M.txt.eventHooks.toolbarClickEvents.push(b), M.txt.eventHooks.menuClickEvents.push(b), M.txt.eventHooks.changeEvents.push(b);
      }
      o.default = v;
    }, function(l, o, t) {
      l.exports = t(356);
    }, function(l, o, t) {
      var s = t(357);
      l.exports = s;
    }, function(l, o, t) {
      t(358);
      var s = t(9);
      l.exports = s.parseFloat;
    }, function(l, o, t) {
      var s = t(5), f = t(359);
      s({ global: !0, forced: parseFloat != f }, { parseFloat: f });
    }, function(l, o, t) {
      var s = t(8), f = t(90).trim, d = t(68), c = s.parseFloat, m = 1 / c(d + "-0") !== -1 / 0;
      l.exports = m ? function(x) {
        var w = f(String(x)), E = c(w);
        return E === 0 && w.charAt(0) == "-" ? -0 : E;
      } : c;
    }, function(l, o, t) {
      var s = t(20), f = t(361);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function T(w) {
        var E, g = function(y, h) {
          return h === void 0 && (h = ""), w.i18next.t(h + y);
        };
        function S(M) {
          var y = [{ $elem: c.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(b, C) {
            return b.selection.createRangeByElem(C), b.selection.restoreSelection(), b.cmd.do("delete"), !0;
          } }, { $elem: c.default("<span>30%</span>"), onClick: function(b, C) {
            return C.attr("width", "30%"), C.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>50%</span>"), onClick: function(b, C) {
            return C.attr("width", "50%"), C.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>100%</span>"), onClick: function(b, C) {
            return C.attr("width", "100%"), C.removeAttr("height"), !0;
          } }];
          y.push({ $elem: c.default("<span>" + g("\u91CD\u7F6E") + "</span>"), onClick: function(b, C) {
            return C.removeAttr("width"), C.removeAttr("height"), !0;
          } }), M.attr("data-href") && y.push({ $elem: c.default("<span>" + g("\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(b, C) {
            var R = C.attr("data-href");
            return R && (R = decodeURIComponent(R), window.open(R, "_target")), !0;
          } }), E = new m.default(w, M, y), E.create();
        }
        function v() {
          E && (E.remove(), E = null);
        }
        return { showImgTooltip: S, hideImgTooltip: v };
      }
      o.createShowHideFn = T;
      function x(w) {
        var E = T(w), g = E.showImgTooltip, S = E.hideImgTooltip;
        w.txt.eventHooks.imgClickEvents.push(g), w.txt.eventHooks.clickEvents.push(S), w.txt.eventHooks.keyupEvents.push(S), w.txt.eventHooks.toolbarClickEvents.push(S), w.txt.eventHooks.menuClickEvents.push(S), w.txt.eventHooks.textScrollEvents.push(S), w.txt.eventHooks.imgDragBarMouseDownEvents.push(S), w.txt.eventHooks.changeEvents.push(S);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c) {
        var m = c.txt, T = c.selection, x = m.eventHooks.keydownEvents;
        x.push(function(w) {
          var E = T.getSelectionContainerElem(), g = T.getRange();
          if (!(!g || !E || w.keyCode !== 8 || !T.isSelectionEmpty())) {
            var S = g.startContainer, v = g.startOffset, M = null;
            if (v === 0)
              for (; S !== E.elems[0] && E.elems[0].contains(S) && S.parentNode && !M; ) {
                if (S.previousSibling) {
                  M = S.previousSibling;
                  break;
                }
                S = S.parentNode;
              }
            else
              S.nodeType !== 3 && (M = S.childNodes[v - 1]);
            if (!!M) {
              for (var y = M; y.childNodes.length; )
                y = y.childNodes[y.childNodes.length - 1];
              y instanceof HTMLElement && y.tagName === "IMG" && (y.remove(), w.preventDefault());
            }
          }
        });
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26)), c = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), x = t(6), w = m.__importDefault(t(96));
      function E(g) {
        var S, v = g.config, M = new w.default(g), y = x.getRandom("up-trigger-id"), h = x.getRandom("up-file-id"), b = x.getRandom("input-link-url"), C = x.getRandom("input-link-url-alt"), R = x.getRandom("input-link-url-href"), O = x.getRandom("btn-link"), B = "menus.panelMenus.image.", F = function(q, X) {
          return X === void 0 && (X = B), g.i18next.t(X + q);
        };
        function z(K, q, X) {
          var _ = v.linkImgCheck(K);
          return _ === !0 ? !0 : (typeof _ == "string" && v.customAlert(_, "error"), !1);
        }
        var I = v.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', U = (0, d.default)(S = v.uploadImgAccept).call(S, function(K) {
          return "image/" + K;
        }).join(","), H = function(q, X, _) {
          return '<div class="' + q + '" data-title="' + _ + `">
            <div id="` + y + `" class="w-e-up-btn">
                <i class="` + X + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + h + '" type="file" ' + I + ' accept="' + U + `"/>
            </div>
        </div>`;
        }, j = [
          { selector: "#" + y, type: "click", fn: function() {
            var q = v.uploadImgFromMedia;
            if (q && typeof q == "function")
              return q(), !0;
            var X = T.default("#" + h), _ = X.elems[0];
            if (_)
              _.click();
            else
              return !0;
          } },
          { selector: "#" + h, type: "change", fn: function() {
            var q = T.default("#" + h), X = q.elems[0];
            if (!X)
              return !0;
            var _ = X.files;
            return _ != null && _.length && M.uploadImg(_), X && (X.value = ""), !0;
          } }
        ], P = [`<input
            id="` + b + `"
            type="text"
            class="block"
            placeholder="` + F("\u56FE\u7247\u5730\u5740") + '"/>'];
        v.showLinkImgAlt && P.push(`
        <input
            id="` + C + `"
            type="text"
            class="block"
            placeholder="` + F("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), v.showLinkImgHref && P.push(`
        <input
            id="` + R + `"
            type="text"
            class="block"
            placeholder="` + F("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
        var V = [
          {
            title: F("\u4E0A\u4F20\u56FE\u7247"),
            tpl: H("w-e-up-img-container", "w-e-icon-upload2", ""),
            events: j
          },
          { title: F("\u7F51\u7EDC\u56FE\u7247"), tpl: `<div>
                    ` + P.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + O + '" class="right">' + F("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + O, type: "click", fn: function() {
            var q, X = T.default("#" + b), _ = (0, c.default)(q = X.val()).call(q);
            if (!!_) {
              var le;
              if (v.showLinkImgAlt) {
                var Se;
                le = (0, c.default)(Se = T.default("#" + C).val()).call(Se);
              }
              var ve;
              if (v.showLinkImgHref) {
                var ce;
                ve = (0, c.default)(ce = T.default("#" + R).val()).call(ce);
              }
              if (!!z(_))
                return M.insertImg(_, le, ve), !0;
            }
          }, bindEnter: !0 }] }
        ], Q = { width: 300, height: 0, tabs: [], onlyUploadConf: { $elem: T.default(H("w-e-menu", "w-e-icon-image", "\u56FE\u7247")), events: j } };
        return window.FileReader && (v.uploadImgShowBase64 || v.uploadImgServer || v.customUploadImg || v.uploadImgFromMedia) && Q.tabs.push(V[0]), v.showLinkImg && (Q.tabs.push(V[1]), Q.onlyUploadConf = void 0), Q;
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = c.__importDefault(t(24)), x = c.__importDefault(t(366)), w = function(E) {
        c.__extends(g, E);
        function g(S) {
          var v = this, M = m.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), y = { width: 130, title: "\u8BBE\u7F6E\u7F29\u8FDB", type: "list", list: [{ $elem: m.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + S.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`), value: "increase" }, { $elem: m.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + S.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`), value: "decrease" }], clickHandler: function(b) {
            v.command(b);
          } };
          return v = E.call(this, M, S, y) || this, v;
        }
        return g.prototype.command = function(S) {
          var v = this.editor, M = v.selection.getSelectionContainerElem();
          if (M && v.$textElem.equal(M)) {
            var y = v.selection.getSelectionRangeTopNodes();
            y.length > 0 && (0, d.default)(y).call(y, function(h) {
              x.default(m.default(h), S, v);
            });
          } else
            M && M.length > 0 && (0, d.default)(M).call(M, function(h) {
              x.default(m.default(h), S, v);
            });
          v.selection.restoreSelection(), this.tryChangeActive();
        }, g.prototype.tryChangeActive = function() {
          var S = this.editor, v = S.selection.getSelectionStartElem(), M = m.default(v).getNodeTop(S);
          M.length <= 0 || (M.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
        }, g;
      }(T.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45)), c = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(367)), x = m.__importDefault(t(368)), w = /^(\d+)(\w+)$/, E = /^(\d+)%$/;
      function g(v) {
        var M = v.config.indentation;
        if (typeof M == "string") {
          if (w.test(M)) {
            var y, h = (0, d.default)(y = (0, c.default)(M).call(M).match(w)).call(y, 1, 3), b = h[0], C = h[1];
            return { value: Number(b), unit: C };
          } else if (E.test(M))
            return { value: Number((0, c.default)(M).call(M).match(E)[1]), unit: "%" };
        } else if (M.value !== void 0 && M.unit)
          return M;
        return { value: 2, unit: "em" };
      }
      function S(v, M, y) {
        var h = v.getNodeTop(y), b = /^(P|H[0-9]*)$/;
        b.test(h.getNodeName()) && (M === "increase" ? T.default(h, g(y)) : M === "decrease" && x.default(h, g(y)));
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45));
      (0, f.default)(o, "__esModule", { value: !0 });
      function c(m, T) {
        var x = m.elems[0];
        if (x.style.paddingLeft === "")
          m.css("padding-left", T.value + T.unit);
        else {
          var w = x.style.paddingLeft, E = (0, d.default)(w).call(w, 0, w.length - T.unit.length), g = Number(E) + T.value;
          m.css("padding-left", "" + g + T.unit);
        }
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45));
      (0, f.default)(o, "__esModule", { value: !0 });
      function c(m, T) {
        var x = m.elems[0];
        if (x.style.paddingLeft !== "") {
          var w = x.style.paddingLeft, E = (0, d.default)(w).call(w, 0, w.length - T.unit.length), g = Number(E) - T.value;
          g > 0 ? m.css("padding-left", "" + g + T.unit) : m.css("padding-left", "");
        }
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(37)), T = d.__importDefault(t(32)), x = d.__importDefault(t(370)), w = function(E) {
        d.__extends(g, E);
        function g(S) {
          var v = this, M = c.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
          return v = E.call(this, M, S) || this, v;
        }
        return g.prototype.createPanel = function() {
          var S = x.default(this.editor), v = new T.default(this, S);
          v.create();
        }, g.prototype.clickHandler = function() {
          this.createPanel();
        }, g.prototype.tryChangeActive = function() {
        }, g;
      }(m.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26)), c = s(t(70)), m = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var T = t(2), x = T.__importDefault(t(3));
      function w(E) {
        var g = E.config.emotions;
        function S(y) {
          var h = [];
          if (y.type == "image") {
            var b;
            h = (0, d.default)(b = y.content).call(b, function(R) {
              return typeof R == "string" ? "" : '<span  title="' + R.alt + `">
                    <img class="eleImg" data-emoji="` + R.alt + '" style src="' + R.src + '" alt="[' + R.alt + `]">
                </span>`;
            }), h = (0, c.default)(h).call(h, function(R) {
              return R !== "";
            });
          } else {
            var C;
            h = (0, d.default)(C = y.content).call(C, function(R) {
              return '<span class="eleImg" title="' + R + '">' + R + "</span>";
            });
          }
          return h.join("").replace(/&nbsp;/g, "");
        }
        var v = (0, d.default)(g).call(g, function(y) {
          return {
            title: E.i18next.t("menus.panelMenus.emoticon." + y.title),
            tpl: "<div>" + S(y) + "</div>",
            events: [{ selector: ".eleImg", type: "click", fn: function(b) {
              var C = x.default(b.target), R = C.getNodeName(), O;
              if (R === "IMG") {
                var B;
                O = (0, m.default)(B = C.parent().html()).call(B);
              } else
                O = "<span>" + C.html() + "</span>";
              return E.cmd.do("insertHTML", O), !0;
            } }]
          };
        }), M = { width: 300, height: 230, tabs: v };
        return M;
      }
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createListHandle = o.ClassType = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(372)), T = d.__importDefault(t(374)), x = d.__importDefault(t(375)), w = d.__importDefault(t(376)), E = d.__importDefault(t(377)), g;
      (function(y) {
        y.Wrap = "WrapListHandle", y.Join = "JoinListHandle", y.StartJoin = "StartJoinListHandle", y.EndJoin = "EndJoinListHandle", y.Other = "OtherListHandle";
      })(g = o.ClassType || (o.ClassType = {}));
      var S = { WrapListHandle: m.default, JoinListHandle: T.default, StartJoinListHandle: x.default, EndJoinListHandle: w.default, OtherListHandle: E.default };
      function v(y, h, b) {
        if (y === g.Other && b === void 0)
          throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
        return y !== g.Other ? new S[y](h) : new S[y](h, b);
      }
      o.createListHandle = v;
      var M = function() {
        function y(h) {
          this.handle = h, this.handle.exec();
        }
        return y.prototype.getSelectionRangeElem = function() {
          return c.default(this.handle.selectionRangeElem.get());
        }, y;
      }();
      o.default = M;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(58), x = t(47), w = function(E) {
        c.__extends(g, E);
        function g(S) {
          return E.call(this, S) || this;
        }
        return g.prototype.exec = function() {
          var S = this.options, v = S.listType, M = S.listTarget, y = S.$selectionElem, h = S.$startElem, b = S.$endElem, C, R = [], O = y == null ? void 0 : y.getNodeName(), B = h.prior, F = b.prior;
          if (!h.prior && !b.prior || !(B != null && B.prev().length) && !(F != null && F.next().length)) {
            var z;
            (0, d.default)(z = y == null ? void 0 : y.children()).call(z, function(Q) {
              R.push(m.default(Q));
            }), O === v ? C = x.createElementFragment(
              R,
              x.createDocumentFragment(),
              "p"
            ) : (C = x.createElement(M), (0, d.default)(R).call(R, function(Q) {
              C.appendChild(Q.elems[0]);
            })), this.selectionRangeElem.set(C), x.insertBefore(y, C, y.elems[0]), y.remove();
          } else {
            for (var I = B; I.length; )
              R.push(I), F != null && F.equal(I) ? I = m.default(void 0) : I = I.next();
            var U = B.prev(), H = F.next();
            if (O === v ? C = x.createElementFragment(
              R,
              x.createDocumentFragment(),
              "p"
            ) : (C = x.createElement(M), (0, d.default)(R).call(R, function(Q) {
              C.append(Q.elems[0]);
            })), U.length && H.length) {
              for (var j = []; H.length; )
                j.push(H), H = H.next();
              var P = x.createElement(O);
              (0, d.default)(j).call(j, function(Q) {
                P.append(Q.elems[0]);
              }), m.default(P).insertAfter(y), this.selectionRangeElem.set(C);
              var V = y.next();
              V.length ? x.insertBefore(y, C, V.elems[0]) : y.parent().elems[0].append(C);
            } else if (!U.length)
              this.selectionRangeElem.set(C), x.insertBefore(y, C, y.elems[0]);
            else {
              this.selectionRangeElem.set(C);
              var V = y.next();
              V.length ? x.insertBefore(y, C, V.elems[0]) : y.parent().elems[0].append(C);
            }
          }
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = function() {
        function m() {
          this._element = null;
        }
        return m.prototype.set = function(T) {
          if (T instanceof DocumentFragment) {
            var x, w = [];
            (0, d.default)(x = T.childNodes).call(x, function(E) {
              w.push(E);
            }), T = w;
          }
          this._element = T;
        }, m.prototype.get = function() {
          return this._element;
        }, m.prototype.clear = function() {
          this._element = null;
        }, m;
      }();
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(58), x = t(47), w = function(E) {
        c.__extends(g, E);
        function g(S) {
          return E.call(this, S) || this;
        }
        return g.prototype.exec = function() {
          var S, v, M, y, h, b, C, R = this.options, O = R.editor, B = R.listType, F = R.listTarget, z = R.$startElem, I = R.$endElem, U, H = O.selection.getSelectionRangeTopNodes(), j = z == null ? void 0 : z.getNodeName(), P = I == null ? void 0 : I.getNodeName();
          if (j === P)
            if (H.length > 2)
              if (H.shift(), H.pop(), U = x.createElementFragment(
                x.filterSelectionNodes(H),
                x.createDocumentFragment()
              ), j === B)
                (S = I.children()) === null || S === void 0 || (0, d.default)(S).call(S, function(ae) {
                  U.append(ae);
                }), I.remove(), this.selectionRangeElem.set(U), z.elems[0].append(U);
              else {
                for (var V = document.createDocumentFragment(), Q = document.createDocumentFragment(), K = x.getStartPoint(z); K.length; ) {
                  var q = K.elems[0];
                  K = K.next(), V.append(q);
                }
                for (var X = x.getEndPoint(I), _ = []; X.length; )
                  _.unshift(X.elems[0]), X = X.prev();
                (0, d.default)(_).call(_, function(ae) {
                  Q.append(ae);
                });
                var le = x.createElement(F);
                le.append(V), le.append(U), le.append(Q), U = le, this.selectionRangeElem.set(U), m.default(le).insertAfter(z), !(!((v = z.children()) === null || v === void 0) && v.length) && z.remove(), !(!((M = I.children()) === null || M === void 0) && M.length) && I.remove();
              }
            else {
              H.length = 0;
              for (var K = x.getStartPoint(z); K.length; )
                H.push(K), K = K.next();
              for (var X = x.getEndPoint(I), _ = []; X.length; )
                _.unshift(X), X = X.prev();
              H.push.apply(H, _), j === B ? (U = x.createElementFragment(H, x.createDocumentFragment(), "p"), this.selectionRangeElem.set(U), x.insertBefore(z, U, I.elems[0])) : (U = x.createElement(F), (0, d.default)(H).call(H, function(pe) {
                U.append(pe.elems[0]);
              }), this.selectionRangeElem.set(U), m.default(U).insertAfter(z)), !(!((y = z.children()) === null || y === void 0) && y.length) && I.remove(), !(!((h = I.children()) === null || h === void 0) && h.length) && I.remove();
            }
          else {
            for (var Se = [], X = x.getEndPoint(I); X.length; )
              Se.unshift(X), X = X.prev();
            for (var ve = [], K = x.getStartPoint(z); K.length; )
              ve.push(K), K = K.next();
            if (U = x.createDocumentFragment(), H.shift(), H.pop(), (0, d.default)(ve).call(ve, function(se) {
              return U.append(se.elems[0]);
            }), U = x.createElementFragment(
              x.filterSelectionNodes(H),
              U
            ), (0, d.default)(Se).call(Se, function(se) {
              return U.append(se.elems[0]);
            }), this.selectionRangeElem.set(U), j === B)
              z.elems[0].append(U), !(!((b = I.children()) === null || b === void 0) && b.length) && I.remove();
            else if (!((C = I.children()) === null || C === void 0) && C.length) {
              var ce = I.children();
              x.insertBefore(ce, U, ce.elems[0]);
            } else
              I.elems[0].append(U);
          }
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(58), x = t(47), w = function(E) {
        c.__extends(g, E);
        function g(S) {
          return E.call(this, S) || this;
        }
        return g.prototype.exec = function() {
          var S, v = this.options, M = v.editor, y = v.listType, h = v.listTarget, b = v.$startElem, C, R = M.selection.getSelectionRangeTopNodes(), O = b == null ? void 0 : b.getNodeName();
          R.shift();
          for (var B = [], F = x.getStartPoint(b); F.length; )
            B.push(F), F = F.next();
          O === y ? (C = x.createDocumentFragment(), (0, d.default)(B).call(B, function(z) {
            return C.append(z.elems[0]);
          }), C = x.createElementFragment(
            x.filterSelectionNodes(R),
            C
          ), this.selectionRangeElem.set(C), b.elems[0].append(C)) : (C = x.createElement(h), (0, d.default)(B).call(B, function(z) {
            return C.append(z.elems[0]);
          }), C = x.createElementFragment(
            x.filterSelectionNodes(R),
            C
          ), this.selectionRangeElem.set(C), m.default(C).insertAfter(b), !(!((S = b.children()) === null || S === void 0) && S.length) && b.remove());
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(58), x = t(47), w = function(E) {
        c.__extends(g, E);
        function g(S) {
          return E.call(this, S) || this;
        }
        return g.prototype.exec = function() {
          var S, v, M = this.options, y = M.editor, h = M.listType, b = M.listTarget, C = M.$endElem, R, O = y.selection.getSelectionRangeTopNodes(), B = C == null ? void 0 : C.getNodeName();
          O.pop();
          for (var F = [], z = x.getEndPoint(C); z.length; )
            F.unshift(z), z = z.prev();
          if (B === h)
            if (R = x.createElementFragment(
              x.filterSelectionNodes(O),
              x.createDocumentFragment()
            ), (0, d.default)(F).call(F, function(H) {
              return R.append(H.elems[0]);
            }), this.selectionRangeElem.set(R), !((S = C.children()) === null || S === void 0) && S.length) {
              var I = C.children();
              x.insertBefore(I, R, I.elems[0]);
            } else
              C.elems[0].append(R);
          else {
            var U = x.filterSelectionNodes(O);
            U.push.apply(U, F), R = x.createElementFragment(
              U,
              x.createElement(b)
            ), this.selectionRangeElem.set(R), m.default(R).insertBefore(C), !(!((v = C.children()) === null || v === void 0) && v.length) && C.remove();
          }
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(58), m = t(47), T = function(x) {
        d.__extends(w, x);
        function w(E, g) {
          var S = x.call(this, E) || this;
          return S.range = g, S;
        }
        return w.prototype.exec = function() {
          var E = this.options, g = E.editor, S = E.listTarget, v = g.selection.getSelectionRangeTopNodes(), M = m.createElementFragment(
            m.filterSelectionNodes(v),
            m.createElement(S)
          );
          this.selectionRangeElem.set(M), this.range.insertNode(M);
        }, w;
      }(c.ListHandle);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(24)), x = m.__importDefault(t(3)), w = m.__importDefault(t(379)), E = t(6), g = function(S) {
        m.__extends(v, S);
        function v(M) {
          var y = this, h = x.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), b = new w.default(M, M.config.lineHeights), C = { width: 100, title: "\u8BBE\u7F6E\u884C\u9AD8", type: "list", list: b.getItemList(), clickHandler: function(O) {
            M.selection.saveRange(), y.command(O);
          } };
          return y = S.call(this, h, M, C) || this, y;
        }
        return v.prototype.command = function(M) {
          var y = this, h, b = window.getSelection ? window.getSelection() : document.getSelection(), C = ["P"], R = this.editor, O = "";
          R.selection.restoreSelection();
          var B = x.default(R.selection.getSelectionContainerElem());
          if (!!(B != null && B.length)) {
            var F = x.default(R.selection.getSelectionContainerElem()), z = x.default(R.selection.getSelectionStartElem()).elems[0], I = "", U = [], H = "";
            if (B && R.$textElem.equal(B)) {
              var j = E.UA.isIE(), P = [], V = [], Q = [], K = x.default(R.selection.getSelectionStartElem()), q = x.default(R.selection.getSelectionEndElem()), X = (h = R.selection.getRange()) === null || h === void 0 ? void 0 : h.commonAncestorContainer.childNodes;
              V.push(this.getDom(K.elems[0])), X == null || (0, d.default)(X).call(X, function(ce, ae) {
                ce === y.getDom(K.elems[0]) && P.push(ae), ce === y.getDom(q.elems[0]) && P.push(ae);
              });
              var _ = 0, le = void 0;
              for (Q.push(this.getDom(K.elems[0])); V[_] !== this.getDom(q.elems[0]); )
                le = x.default(V[_].nextElementSibling).elems[0], (0, c.default)(C).call(C, x.default(le).getNodeName()) !== -1 && Q.push(le), V.push(le), _++;
              if (x.default(V[0]).getNodeName() !== "P") {
                _ = 0;
                for (var Se = 0; Se < V.length; Se++)
                  if (x.default(V[Se]).getNodeName() === "P") {
                    _ = Se;
                    break;
                  }
                if (_ === 0)
                  return;
                for (var ve = 0; ve !== _; )
                  V.shift(), ve++;
              }
              this.setRange(V[0], V[V.length - 1]), (0, d.default)(V).call(V, function(ce) {
                I = ce.getAttribute("style"), U = I ? I.split(";") : [], H = y.styleProcessing(U), x.default(ce).getNodeName() === "P" && M && (H += M ? "line-height:" + M + ";" : ""), j ? x.default(ce).css("line-height", M) : O += "<" + x.default(ce).getNodeName().toLowerCase() + ' style="' + H + '">' + ce.innerHTML + "</" + x.default(ce).getNodeName().toLowerCase() + ">";
              }), O && this.action(O, R), z = F.elems[0], this.setRange(z.children[P[0]], z.children[P[1]]);
              return;
            }
            if (z = this.getDom(z), (0, c.default)(C).call(C, x.default(z).getNodeName()) !== -1) {
              if (I = z.getAttribute("style"), U = I ? I.split(";") : [], b == null || b.selectAllChildren(z), R.selection.saveRange(), !M) {
                I && (H = this.styleProcessing(U), H === "" ? O = "<" + x.default(z).getNodeName().toLowerCase() + ">" + z.innerHTML + "</" + x.default(z).getNodeName().toLowerCase() + ">" : O = "<" + x.default(z).getNodeName().toLowerCase() + ' style="' + H + '">' + z.innerHTML + "</" + x.default(z).getNodeName().toLowerCase() + ">", this.action(O, R));
                return;
              }
              I ? H = this.styleProcessing(U) + ("line-height:" + M + ";") : H = "line-height:" + M + ";", O = "<" + x.default(z).getNodeName().toLowerCase() + ' style="' + H + '">' + z.innerHTML + "</" + x.default(z).getNodeName().toLowerCase() + ">", x.default(z).getNodeName() === "BLOCKQUOTE" || E.UA.isIE() ? x.default(z).css("line-height", M) : this.action(O, R);
            }
          }
        }, v.prototype.getDom = function(M) {
          var y = x.default(M).elems[0];
          if (!y.parentNode)
            return y;
          function h(b, C) {
            var R = x.default(b.parentNode);
            return C.$textElem.equal(R) ? b : h(R.elems[0], C);
          }
          return y = h(y, this.editor), y;
        }, v.prototype.action = function(M, y) {
          y.cmd.do("insertHTML", M);
        }, v.prototype.styleProcessing = function(M) {
          var y = "";
          return (0, d.default)(M).call(M, function(h) {
            h !== "" && (0, c.default)(h).call(h, "line-height") === -1 && (y = y + h + ";");
          }), y;
        }, v.prototype.setRange = function(M, y) {
          var h = this.editor, b = window.getSelection ? window.getSelection() : document.getSelection();
          b == null || b.removeAllRanges();
          var C = document.createRange(), R = M, O = y;
          C.setStart(R, 0), C.setEnd(O, 1), b == null || b.addRange(C), h.selection.saveRange(), b == null || b.removeAllRanges(), h.selection.restoreSelection();
        }, v.prototype.tryChangeActive = function() {
          var M = this.editor, y = M.selection.getSelectionContainerElem();
          if (!(y && M.$textElem.equal(y))) {
            var h = x.default(M.selection.getSelectionStartElem());
            if (h.length !== 0) {
              h = this.getDom(h.elems[0]);
              var b = h.getAttribute("style") ? h.getAttribute("style") : "";
              b && (0, c.default)(b).call(b, "line-height") !== -1 ? this.active() : this.unActive();
            }
          }
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = function() {
        function x(w, E) {
          var g = this;
          this.itemList = [{ $elem: m.default("<span>" + w.i18next.t("\u9ED8\u8BA4") + "</span>"), value: "" }], (0, d.default)(E).call(E, function(S) {
            g.itemList.push({ $elem: m.default("<span>" + S + "</span>"), value: S });
          });
        }
        return x.prototype.getItemList = function() {
          return this.itemList;
        }, x;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(23)), T = function(x) {
        d.__extends(w, x);
        function w(E) {
          var g = this, S = c.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
          return g = x.call(this, S, E) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var E = this.editor;
          E.history.revoke();
          var g = E.$textElem.children();
          if (!!(g != null && g.length)) {
            var S = g.last();
            E.selection.createRangeByElem(S, !1, !0), E.selection.restoreSelection();
          }
        }, w.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
        }, w;
      }(m.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(23)), T = function(x) {
        d.__extends(w, x);
        function w(E) {
          var g = this, S = c.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
          return g = x.call(this, S, E) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var E = this.editor;
          E.history.restore();
          var g = E.$textElem.children();
          if (!!(g != null && g.length)) {
            var S = g.last();
            E.selection.createRangeByElem(S, !1, !0), E.selection.restoreSelection();
          }
        }, w.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
        }, w;
      }(m.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(37)), m = d.__importDefault(t(3)), T = d.__importDefault(t(383)), x = d.__importDefault(t(32)), w = d.__importDefault(t(392)), E = function(g) {
        d.__extends(S, g);
        function S(v) {
          var M = this, y = m.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
          return M = g.call(this, y, v) || this, w.default(v), M;
        }
        return S.prototype.clickHandler = function() {
          this.createPanel();
        }, S.prototype.createPanel = function() {
          var v = T.default(this.editor), M = new x.default(this, v);
          M.create();
        }, S.prototype.tryChangeActive = function() {
        }, S;
      }(c.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(384));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), T = c.__importDefault(t(3));
      t(389);
      var x = c.__importDefault(t(391));
      function w(g) {
        return g > 0 && (0, d.default)(g);
      }
      function E(g) {
        var S = new x.default(g), v = m.getRandom("w-col-id"), M = m.getRandom("w-row-id"), y = m.getRandom("btn-link"), h = "menus.panelMenus.table.", b = function(B) {
          return g.i18next.t(B);
        }, C = [{ title: b(h + "\u63D2\u5165\u8868\u683C"), tpl: `<div>
                    <div class="w-e-table">
                        <span>` + b("\u521B\u5EFA") + `</span>
                        <input id="` + M + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + b(h + "\u884C") + `</span>
                        <input id="` + v + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (b(h + "\u5217") + b(h + "\u7684") + b(h + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + y + '" class="right">' + b("\u63D2\u5165") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + y, type: "click", fn: function() {
          var B = Number(T.default("#" + v).val()), F = Number(T.default("#" + M).val());
          return w(F) && w(B) ? (S.createAction(F, B), !0) : (g.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
        }, bindEnter: !0 }] }], R = { width: 330, height: 0, tabs: [] };
        return R.tabs.push(C[0]), R;
      }
      o.default = E;
    }, function(l, o, t) {
      l.exports = t(385);
    }, function(l, o, t) {
      var s = t(386);
      l.exports = s;
    }, function(l, o, t) {
      t(387);
      var s = t(9);
      l.exports = s.Number.isInteger;
    }, function(l, o, t) {
      var s = t(5), f = t(388);
      s({ target: "Number", stat: !0 }, { isInteger: f });
    }, function(l, o, t) {
      var s = t(13), f = Math.floor;
      l.exports = function(c) {
        return !s(c) && isFinite(c) && f(c) === c;
      };
    }, function(l, o, t) {
      var s = t(20), f = t(390);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(7), m = d.__importDefault(t(3)), T = function() {
        function x(w) {
          this.editor = w;
        }
        return x.prototype.createAction = function(w, E) {
          var g = this.editor, S = m.default(g.selection.getSelectionContainerElem()), v = m.default(S.elems[0]).parentUntilEditor("UL", g), M = m.default(S.elems[0]).parentUntilEditor("OL", g);
          if (!(v || M)) {
            var y = this.createTableHtml(w, E);
            g.cmd.do("insertHTML", y);
          }
        }, x.prototype.createTableHtml = function(w, E) {
          for (var g = "", S = "", v = 0; v < w; v++) {
            S = "";
            for (var M = 0; M < E; M++)
              v === 0 ? S = S + "<th></th>" : S = S + "<td></td>";
            g = g + "<tr>" + S + "</tr>";
          }
          var y = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + g + ("</tbody></table>" + c.EMPTY_P);
          return y;
        }, x;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(393)), m = t(400);
      function T(x) {
        c.default(x), m.bindEventKeyboardEvent(x), m.bindClickEvent(x);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38)), T = d.__importDefault(t(394)), x = d.__importDefault(t(399)), w = t(7);
      function E(M) {
        var y;
        function h(C) {
          var R = new x.default(M), O = "menus.panelMenus.table.", B = function(I, U) {
            return U === void 0 && (U = O), M.i18next.t(U + I);
          }, F = [{
            $elem: c.default("<span>" + B("\u5220\u9664\u8868\u683C") + "</span>"),
            onClick: function(I, U) {
              return I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", w.EMPTY_P), !0;
            }
          }, { $elem: c.default("<span>" + B("\u6DFB\u52A0\u884C") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var j = c.default(I.selection.getSelectionStartElem()), P = R.getRowNode(j.elems[0]);
            if (!P)
              return !0;
            var V = Number(R.getCurrentRowIndex(U.elems[0], P)), Q = R.getTableHtml(U.elems[0]), K = R.getTableHtml(T.default.ProcessingRow(c.default(Q), V).elems[0]);
            return K = v(U, K), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", K), !0;
          } }, { $elem: c.default("<span>" + B("\u5220\u9664\u884C") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var j = c.default(I.selection.getSelectionStartElem()), P = R.getRowNode(j.elems[0]);
            if (!P)
              return !0;
            var V = Number(R.getCurrentRowIndex(U.elems[0], P)), Q = R.getTableHtml(U.elems[0]), K = T.default.DeleteRow(c.default(Q), V).elems[0].children[0].children.length, q = "";
            return I.selection.createRangeByElem(U), I.selection.restoreSelection(), K === 0 ? q = w.EMPTY_P : q = R.getTableHtml(T.default.DeleteRow(c.default(Q), V).elems[0]), q = v(U, q), I.cmd.do("insertHTML", q), !0;
          } }, { $elem: c.default("<span>" + B("\u6DFB\u52A0\u5217") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var j = c.default(I.selection.getSelectionStartElem()), P = R.getCurrentColIndex(j.elems[0]), V = R.getTableHtml(U.elems[0]), Q = R.getTableHtml(T.default.ProcessingCol(c.default(V), P).elems[0]);
            return Q = v(U, Q), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", Q), !0;
          } }, { $elem: c.default("<span>" + B("\u5220\u9664\u5217") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var j = c.default(I.selection.getSelectionStartElem()), P = R.getCurrentColIndex(j.elems[0]), V = R.getTableHtml(U.elems[0]), Q = T.default.DeleteCol(c.default(V), P), K = Q.elems[0].children[0].children[0].children.length, q = "";
            return I.selection.createRangeByElem(U), I.selection.restoreSelection(), K === 0 ? q = w.EMPTY_P : q = R.getTableHtml(Q.elems[0]), q = v(U, q), I.cmd.do("insertHTML", q), !0;
          } }, { $elem: c.default("<span>" + B("\u8BBE\u7F6E\u8868\u5934") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var j = c.default(I.selection.getSelectionStartElem()), P = R.getRowNode(j.elems[0]);
            if (!P)
              return !0;
            var V = Number(R.getCurrentRowIndex(U.elems[0], P));
            V !== 0 && (V = 0);
            var Q = R.getTableHtml(U.elems[0]), K = R.getTableHtml(T.default.setTheHeader(c.default(Q), V, "th").elems[0]);
            return K = v(U, K), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", K), !0;
          } }, { $elem: c.default("<span>" + B("\u53D6\u6D88\u8868\u5934") + "</span>"), onClick: function(I, U) {
            var H = c.default(I.selection.getSelectionStartElem()), j = R.getRowNode(H.elems[0]);
            if (!j)
              return !0;
            var P = Number(R.getCurrentRowIndex(U.elems[0], j));
            P !== 0 && (P = 0);
            var V = R.getTableHtml(U.elems[0]), Q = R.getTableHtml(T.default.setTheHeader(c.default(V), P, "td").elems[0]);
            return Q = v(U, Q), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", Q), !0;
          } }];
          y = new m.default(M, C, F), y.create();
        }
        function b() {
          y && (y.remove(), y = null);
        }
        return { showTableTooltip: h, hideTableTooltip: b };
      }
      function g(M) {
        var y = M.selection.getSelectionStartElem(), h = M.selection.getSelectionEndElem();
        return (y == null ? void 0 : y.elems[0]) !== (h == null ? void 0 : h.elems[0]);
      }
      function S(M) {
        var y = E(M), h = y.showTableTooltip, b = y.hideTableTooltip;
        M.txt.eventHooks.tableClickEvents.push(h), M.txt.eventHooks.clickEvents.push(b), M.txt.eventHooks.keyupEvents.push(b), M.txt.eventHooks.toolbarClickEvents.push(b), M.txt.eventHooks.menuClickEvents.push(b), M.txt.eventHooks.textScrollEvents.push(b);
      }
      o.default = S;
      function v(M, y) {
        var h = M.elems[0].nextSibling;
        return (!h || h.innerHTML === "<br>") && (y += "" + w.EMPTY_P), y;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45)), c = s(t(91)), m = s(t(4)), T = s(t(138));
      (0, f.default)(o, "__esModule", { value: !0 });
      var x = t(2), w = x.__importDefault(t(3));
      function E(b, C) {
        for (var R = h(b), O = (0, d.default)(Array.prototype).apply(R.children), B = O[0].children.length, F = document.createElement("tr"), z = 0; z < B; z++) {
          var I = document.createElement("td");
          F.appendChild(I);
        }
        return (0, c.default)(O).call(O, C + 1, 0, F), y(R, O), w.default(R.parentNode);
      }
      function g(b, C) {
        for (var R = h(b), O = (0, d.default)(Array.prototype).apply(R.children), B = function(I) {
          var U, H = [];
          for ((0, m.default)(U = (0, T.default)(O[I].children)).call(U, function(V) {
            H.push(V);
          }); O[I].children.length !== 0; )
            O[I].removeChild(O[I].children[0]);
          var j = w.default(H[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
          (0, c.default)(H).call(H, C + 1, 0, j);
          for (var P = 0; P < H.length; P++)
            O[I].appendChild(H[P]);
        }, F = 0; F < O.length; F++)
          B(F);
        return y(R, O), w.default(R.parentNode);
      }
      function S(b, C) {
        var R = h(b), O = (0, d.default)(Array.prototype).apply(R.children);
        return (0, c.default)(O).call(O, C, 1), y(R, O), w.default(R.parentNode);
      }
      function v(b, C) {
        for (var R = h(b), O = (0, d.default)(Array.prototype).apply(R.children), B = function(I) {
          var U, H = [];
          for ((0, m.default)(U = (0, T.default)(O[I].children)).call(U, function(P) {
            H.push(P);
          }); O[I].children.length !== 0; )
            O[I].removeChild(O[I].children[0]);
          (0, c.default)(H).call(H, C, 1);
          for (var j = 0; j < H.length; j++)
            O[I].appendChild(H[j]);
        }, F = 0; F < O.length; F++)
          B(F);
        return y(R, O), w.default(R.parentNode);
      }
      function M(b, C, R) {
        for (var O = h(b), B = (0, d.default)(Array.prototype).apply(O.children), F = B[C].children, z = document.createElement("tr"), I = function(j) {
          var P, V = document.createElement(R), Q = F[j];
          (0, m.default)(P = (0, T.default)(Q.childNodes)).call(P, function(K) {
            V.appendChild(K);
          }), z.appendChild(V);
        }, U = 0; U < F.length; U++)
          I(U);
        return (0, c.default)(B).call(B, C, 1, z), y(O, B), w.default(O.parentNode);
      }
      function y(b, C) {
        for (; b.children.length !== 0; )
          b.removeChild(b.children[0]);
        for (var R = 0; R < C.length; R++)
          b.appendChild(C[R]);
      }
      function h(b) {
        var C = b.elems[0].children[0];
        return C.nodeName === "COLGROUP" && (C = b.elems[0].children[b.elems[0].children.length - 1]), C;
      }
      o.default = { ProcessingRow: E, ProcessingCol: g, DeleteRow: S, DeleteCol: v, setTheHeader: M };
    }, function(l, o, t) {
      var s = t(396);
      l.exports = s;
    }, function(l, o, t) {
      t(50), t(397);
      var s = t(9);
      l.exports = s.Array.from;
    }, function(l, o, t) {
      var s = t(5), f = t(398), d = t(114), c = !d(function(m) {
        Array.from(m);
      });
      s({ target: "Array", stat: !0, forced: c }, { from: f });
    }, function(l, o, t) {
      var s = t(39), f = t(29), d = t(113), c = t(111), m = t(34), T = t(69), x = t(112);
      l.exports = function(E) {
        var g = f(E), S = typeof this == "function" ? this : Array, v = arguments.length, M = v > 1 ? arguments[1] : void 0, y = M !== void 0, h = x(g), b = 0, C, R, O, B, F, z;
        if (y && (M = s(M, v > 2 ? arguments[2] : void 0, 2)), h != null && !(S == Array && c(h)))
          for (B = h.call(g), F = B.next, R = new S(); !(O = F.call(B)).done; b++)
            z = y ? d(B, M, [O.value, b], !0) : O.value, T(R, b, z);
        else
          for (C = m(g.length), R = new S(C); C > b; b++)
            z = y ? M(g[b], b) : g[b], T(R, b, z);
        return R.length = b, R;
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(138));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), x = function() {
        function w(E) {
          this.editor = E;
        }
        return w.prototype.getRowNode = function(E) {
          var g, S = T.default(E).elems[0];
          return S.parentNode && (S = (g = T.default(S).parentUntil("TR", S)) === null || g === void 0 ? void 0 : g.elems[0]), S;
        }, w.prototype.getCurrentRowIndex = function(E, g) {
          var S, v = 0, M = E.children[0];
          return M.nodeName === "COLGROUP" && (M = E.children[E.children.length - 1]), (0, d.default)(S = (0, c.default)(M.children)).call(S, function(y, h) {
            y === g && (v = h);
          }), v;
        }, w.prototype.getCurrentColIndex = function(E) {
          var g, S, v = 0, M = T.default(E).getNodeName() === "TD" || T.default(E).getNodeName() === "TH" ? E : (S = T.default(E).parentUntil("TD", E)) === null || S === void 0 ? void 0 : S.elems[0], y = T.default(M).parent();
          return (0, d.default)(g = (0, c.default)(y.elems[0].children)).call(g, function(h, b) {
            h === M && (v = b);
          }), v;
        }, w.prototype.getTableHtml = function(E) {
          var g = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + T.default(E).html() + "</table>";
          return g;
        }, w;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.bindEventKeyboardEvent = o.bindClickEvent = void 0;
      var d = t(2), c = d.__importDefault(t(3));
      function m(w) {
        if (!w.length)
          return !1;
        var E = w.elems[0];
        return E.nodeName === "P" && E.innerHTML === "<br>";
      }
      function T(w) {
        function E(g, S) {
          if (S.detail >= 3) {
            var v = window.getSelection();
            if (v) {
              var M = v.focusNode, y = v.anchorNode, h = c.default(y == null ? void 0 : y.parentElement);
              if (!g.isContain(c.default(M))) {
                var b = h.elems[0].tagName === "TD" ? h : h.parentUntilEditor("td", w);
                if (b) {
                  var C = w.selection.getRange();
                  C == null || C.setEnd(b.elems[0], b.elems[0].childNodes.length), w.selection.restoreSelection();
                }
              }
            }
          }
        }
        w.txt.eventHooks.tableClickEvents.push(E);
      }
      o.bindClickEvent = T;
      function x(w) {
        var E = w.txt, g = w.selection, S = E.eventHooks.keydownEvents;
        S.push(function(v) {
          w.selection.saveRange();
          var M = g.getSelectionContainerElem();
          if (M) {
            var y = M.getNodeTop(w), h = y.length && y.prev().length ? y.prev() : null;
            if (h && h.getNodeName() === "TABLE" && g.isSelectionEmpty() && g.getCursorPos() === 0 && v.keyCode === 8) {
              var b = y.next(), C = !!b.length;
              C && m(y) && (y.remove(), w.selection.setRangeToElem(b.elems[0])), v.preventDefault();
            }
          }
        });
      }
      o.bindEventKeyboardEvent = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 }), o.formatCodeHtml = void 0;
      var c = t(2), m = c.__importDefault(t(37)), T = c.__importDefault(t(3)), x = t(6), w = c.__importDefault(t(402)), E = c.__importDefault(t(139)), g = c.__importDefault(t(32)), S = c.__importDefault(t(403));
      function v(y, h) {
        if (!h)
          return h;
        return h = C(h), h = b(h), h = x.replaceSpecialSymbol(h), h;
        function b(R) {
          var O = R.match(/<pre[\s|\S]+?\/pre>/g);
          return O === null || (0, d.default)(O).call(O, function(B) {
            R = R.replace(B, B.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
          }), R;
        }
        function C(R) {
          var O, B = R.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
          if (!B || !B.length)
            return R;
          for (var F = (0, d.default)(O = x.deepClone(B)).call(O, function(I) {
            return I = I.replace(/<span\sclass="hljs[^>]+>/, ""), I.replace(/<\/span>/, "");
          }), z = 0; z < B.length; z++)
            R = R.replace(B[z], F[z]);
          return C(R);
        }
      }
      o.formatCodeHtml = v;
      var M = function(y) {
        c.__extends(h, y);
        function h(b) {
          var C = this, R = T.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
          return C = y.call(this, R, b) || this, S.default(b), C;
        }
        return h.prototype.insertLineCode = function(b) {
          var C = this.editor, R = T.default("<code>" + b + "</code>");
          C.cmd.do("insertElem", R), C.selection.createRangeByElem(R, !1), C.selection.restoreSelection();
        }, h.prototype.clickHandler = function() {
          var b = this.editor, C = b.selection.getSelectionText();
          this.isActive || (b.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(C));
        }, h.prototype.createPanel = function(b, C) {
          var R = w.default(this.editor, b, C), O = new g.default(this, R);
          O.create();
        }, h.prototype.tryChangeActive = function() {
          var b = this.editor;
          E.default(b) ? this.active() : this.unActive();
        }, h;
      }(m.default);
      o.default = M;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), T = c.__importDefault(t(3)), x = c.__importDefault(t(139)), w = t(7);
      function E(g, S, v) {
        var M, y = m.getRandom("input-iframe"), h = m.getRandom("select"), b = m.getRandom("btn-ok");
        function C(F) {
          var z, I = x.default(g);
          I && R();
          var U = (z = g.selection.getSelectionStartElem()) === null || z === void 0 ? void 0 : z.elems[0].innerHTML;
          U && g.cmd.do("insertHTML", w.EMPTY_P), g.cmd.do("insertHTML", F);
          var H = g.selection.getSelectionStartElem(), j = H == null ? void 0 : H.getNodeTop(g);
          (j == null ? void 0 : j.getNextSibling().elems.length) === 0 && T.default(w.EMPTY_P).insertAfter(j);
        }
        function R() {
          if (!!x.default(g)) {
            var F = g.selection.getSelectionStartElem(), z = F == null ? void 0 : F.getNodeTop(g);
            !z || (g.selection.createRangeByElem(z), g.selection.restoreSelection());
          }
        }
        var O = function(z) {
          return g.i18next.t(z);
        }, B = {
          width: 500,
          height: 0,
          tabs: [{
            title: O("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
            tpl: `<div>
                        <select name="" id="` + h + `">
                            ` + (0, d.default)(M = g.config.languageType).call(M, function(F) {
              return "<option " + (v == F ? "selected" : "") + ' value ="' + F + '">' + F + "</option>";
            }) + `
                        </select>
                        <textarea id="` + y + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + S.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + b + '" class="right">' + (x.default(g) ? O("\u4FEE\u6539") : O("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + b, type: "click", fn: function() {
                var z, I, U = document.getElementById(y), H = T.default("#" + h), j = H.val(), P = U.value;
                if (g.highlight ? z = g.highlight.highlightAuto(P).value : z = "<xmp>" + P + "</xmp>", !!P)
                  return x.default(g) ? !1 : (I = '<pre><code class="' + j + '">' + z + "</code></pre>", C(I), !0);
              } }
            ]
          }]
        };
        return B;
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(404)), m = d.__importDefault(t(405));
      function T(x) {
        c.default(x), m.default(x);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function T(w) {
        var E;
        function g(v) {
          var M = "menus.panelMenus.code.", y = function(C, R) {
            return R === void 0 && (R = M), w.i18next.t(R + C);
          }, h = [{ $elem: c.default("<span>" + y("\u5220\u9664\u4EE3\u7801") + "</span>"), onClick: function(C, R) {
            return R.remove(), !0;
          } }];
          E = new m.default(w, v, h), E.create();
        }
        function S() {
          E && (E.remove(), E = null);
        }
        return { showCodeTooltip: g, hideCodeTooltip: S };
      }
      o.createShowHideFn = T;
      function x(w) {
        var E = T(w), g = E.showCodeTooltip, S = E.hideCodeTooltip;
        w.txt.eventHooks.codeClickEvents.push(g), w.txt.eventHooks.clickEvents.push(S), w.txt.eventHooks.toolbarClickEvents.push(S), w.txt.eventHooks.menuClickEvents.push(S), w.txt.eventHooks.textScrollEvents.push(S);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(7), m = d.__importDefault(t(3));
      function T(x) {
        var w = x.$textElem, E = x.selection, g = x.txt, S = g.eventHooks.keydownEvents;
        S.push(function(v) {
          var M;
          if (v.keyCode === 40) {
            var y = E.getSelectionContainerElem(), h = (M = w.children()) === null || M === void 0 ? void 0 : M.last();
            if ((y == null ? void 0 : y.elems[0].tagName) === "XMP" && (h == null ? void 0 : h.elems[0].tagName) === "PRE") {
              var b = m.default(c.EMPTY_P);
              w.append(b);
            }
          }
        }), S.push(function(v) {
          x.selection.saveRange();
          var M = E.getSelectionContainerElem();
          if (M) {
            var y = M.getNodeTop(x), h = y == null ? void 0 : y.prev(), b = y == null ? void 0 : y.getNextSibling();
            if (h.length && (h == null ? void 0 : h.getNodeName()) === "PRE" && b.length === 0 && E.getCursorPos() === 0 && v.keyCode === 8) {
              var C = m.default(c.EMPTY_P);
              w.append(C);
            }
          }
        });
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), T = d.__importDefault(t(407)), x = t(6), w = t(7), E = function(g) {
        d.__extends(S, g);
        function S(v) {
          var M = this, y = m.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
          return M = g.call(this, y, v) || this, T.default(v), M;
        }
        return S.prototype.clickHandler = function() {
          var v = this.editor, M = v.selection.getRange(), y = v.selection.getSelectionContainerElem();
          if (!!(y != null && y.length)) {
            var h = m.default(y.elems[0]), b = h.parentUntil("TABLE", y.elems[0]), C = h.children();
            h.getNodeName() !== "CODE" && (b && m.default(b.elems[0]).getNodeName() === "TABLE" || C && C.length !== 0 && m.default(C.elems[0]).getNodeName() === "IMG" && !(M != null && M.collapsed) || this.createSplitLine());
          }
        }, S.prototype.createSplitLine = function() {
          var v = "<hr/>" + w.EMPTY_P;
          x.UA.isFirefox && (v = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", v);
        }, S.prototype.tryChangeActive = function() {
        }, S;
      }(c.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(408));
      function m(T) {
        c.default(T);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function T(w) {
        var E;
        function g(v) {
          var M = [{ $elem: c.default("<span>" + w.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"), onClick: function(h, b) {
            return h.selection.createRangeByElem(b), h.selection.restoreSelection(), h.cmd.do("delete"), !0;
          } }];
          E = new m.default(w, v, M), E.create();
        }
        function S() {
          E && (E.remove(), E = null);
        }
        return { showSplitLineTooltip: g, hideSplitLineTooltip: S };
      }
      function x(w) {
        var E = T(w), g = E.showSplitLineTooltip, S = E.hideSplitLineTooltip;
        w.txt.eventHooks.splitLineEvents.push(g), w.txt.eventHooks.clickEvents.push(S), w.txt.eventHooks.keyupEvents.push(S), w.txt.eventHooks.toolbarClickEvents.push(S), w.txt.eventHooks.menuClickEvents.push(S), w.txt.eventHooks.textScrollEvents.push(S);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = c.__importDefault(t(23)), x = t(97), w = c.__importDefault(t(415)), E = c.__importDefault(t(140)), g = function(S) {
        c.__extends(v, S);
        function v(M) {
          var y = this, h = m.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
          return y = S.call(this, h, M) || this, w.default(M), y;
        }
        return v.prototype.clickHandler = function() {
          var M = this.editor;
          x.isAllTodo(M) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
        }, v.prototype.tryChangeActive = function() {
          x.isAllTodo(this.editor) ? this.active() : this.unActive();
        }, v.prototype.setTodo = function() {
          var M = this.editor, y = M.selection.getSelectionRangeTopNodes();
          (0, d.default)(y).call(y, function(h) {
            var b, C = h == null ? void 0 : h.getNodeName();
            if (C === "P") {
              var R = E.default(h), O = R.getTodo(), B = (b = O.children()) === null || b === void 0 ? void 0 : b.getNode();
              O.insertAfter(h), M.selection.moveCursor(B), h.remove();
            }
          }), this.tryChangeActive();
        }, v.prototype.cancelTodo = function() {
          var M = this.editor, y = M.selection.getSelectionRangeTopNodes();
          (0, d.default)(y).call(y, function(h) {
            var b, C, R, O = (C = (b = h.childNodes()) === null || b === void 0 ? void 0 : b.childNodes()) === null || C === void 0 ? void 0 : C.clone(!0), B = m.default("<p></p>");
            B.append(O), B.insertAfter(h), (R = B.childNodes()) === null || R === void 0 || R.get(0).remove(), M.selection.moveCursor(B.getNode()), h.remove();
          });
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      l.exports = t(411);
    }, function(l, o, t) {
      var s = t(412);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(413), f = Array.prototype;
      l.exports = function(d) {
        var c = d.every;
        return d === f || d instanceof Array && c === f.every ? s : c;
      };
    }, function(l, o, t) {
      t(414);
      var s = t(15);
      l.exports = s("Array").every;
    }, function(l, o, t) {
      var s = t(5), f = t(30).every, d = t(67), c = t(22), m = d("every"), T = c("every");
      s({ target: "Array", proto: !0, forced: !m || !T }, { every: function(w) {
        return f(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), T = t(97), x = c.__importDefault(t(140)), w = t(97), E = t(7);
      function g(S) {
        function v(b) {
          var C, R;
          if (T.isAllTodo(S)) {
            b.preventDefault();
            var O = S.selection, B = O.getSelectionRangeTopNodes()[0], F = (C = B.childNodes()) === null || C === void 0 ? void 0 : C.get(0), z = (R = window.getSelection()) === null || R === void 0 ? void 0 : R.anchorNode, I = O.getRange();
            if (!(I != null && I.collapsed)) {
              var U = I == null ? void 0 : I.commonAncestorContainer.childNodes, H = I == null ? void 0 : I.startContainer, j = I == null ? void 0 : I.endContainer, P = I == null ? void 0 : I.startOffset, V = I == null ? void 0 : I.endOffset, Q = 0, K = 0, q = [];
              U == null || (0, d.default)(U).call(U, function(pe, Pe) {
                pe.contains(H) && (Q = Pe), pe.contains(j) && (K = Pe);
              }), K - Q > 1 && (U == null || (0, d.default)(U).call(U, function(pe, Pe) {
                Pe <= Q || Pe >= K || q.push(pe);
              }), (0, d.default)(q).call(q, function(pe) {
                pe.remove();
              })), w.dealTextNode(H, P), w.dealTextNode(j, V, !1), S.selection.moveCursor(j, 0);
            }
            if (B.text() === "") {
              var X = m.default(E.EMPTY_P);
              X.insertAfter(B), O.moveCursor(X.getNode()), B.remove();
              return;
            }
            var _ = O.getCursorPos(), le = T.getCursorNextNode(F == null ? void 0 : F.getNode(), z, _), Se = x.default(m.default(le)), ve = Se.getInputContainer(), ce = ve.parent().getNode(), ae = Se.getTodo(), re = ve.getNode().nextSibling;
            if ((F == null ? void 0 : F.text()) === "" && (F == null || F.append(m.default("<br>"))), ae.insertAfter(B), !re || (re == null ? void 0 : re.textContent) === "") {
              if ((re == null ? void 0 : re.nodeName) !== "BR") {
                var se = m.default("<br>");
                se.insertAfter(ve);
              }
              O.moveCursor(ce, 1);
            } else
              O.moveCursor(ce);
          }
        }
        function M(b) {
          var C, R;
          if (T.isAllTodo(S)) {
            var O = S.selection, B = O.getSelectionRangeTopNodes()[0], F = (C = B.childNodes()) === null || C === void 0 ? void 0 : C.getNode(), z = m.default("<p></p>"), I = z.getNode(), U = (R = window.getSelection()) === null || R === void 0 ? void 0 : R.anchorNode, H = O.getCursorPos(), j = U.previousSibling;
            if (B.text() === "") {
              b.preventDefault();
              var P = m.default(E.EMPTY_P);
              P.insertAfter(B), B.remove(), O.moveCursor(P.getNode(), 0);
              return;
            }
            if ((j == null ? void 0 : j.nodeName) === "SPAN" && j.childNodes[0].nodeName === "INPUT" && H === 0) {
              var V;
              b.preventDefault(), F == null || (0, d.default)(V = F.childNodes).call(V, function(Q, K) {
                K !== 0 && I.appendChild(Q.cloneNode(!0));
              }), z.insertAfter(B), B.remove();
            }
          }
        }
        function y() {
          var b = S.selection, C = b.getSelectionRangeTopNodes()[0];
          C && w.isTodo(C) && C.text() === "" && (m.default(E.EMPTY_P).insertAfter(C), C.remove());
        }
        function h(b) {
          b && b.target instanceof HTMLInputElement && b.target.type === "checkbox" && (b.target.checked ? b.target.setAttribute("checked", "true") : b.target.removeAttribute("checked"));
        }
        S.txt.eventHooks.enterDownEvents.push(v), S.txt.eventHooks.deleteUpEvents.push(y), S.txt.eventHooks.deleteDownEvents.push(M), S.txt.eventHooks.clickEvents.push(h);
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.selectorValidator = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = t(6), T = t(7), x = d.__importDefault(t(129)), w = { border: "1px solid #c9d8db", toolbarBgColor: "#FFF", toolbarBottomBorder: "1px solid #EEE" };
      function E(S) {
        var v = S.toolbarSelector, M = c.default(v), y = S.textSelector, h = S.config, b = h.height, C = S.i18next, R = c.default("<div></div>"), O = c.default("<div></div>"), B, F, z = null;
        y == null ? (F = M.children(), M.append(R).append(O), R.css("background-color", w.toolbarBgColor).css("border", w.border).css("border-bottom", w.toolbarBottomBorder), O.css("border", w.border).css("border-top", "none").css("height", b + "px")) : (M.append(R), z = c.default(y).children(), c.default(y).append(O), F = O.children()), B = c.default("<div></div>"), B.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
        var I, U = S.config.placeholder;
        U !== x.default.placeholder ? I = c.default("<div>" + U + "</div>") : I = c.default("<div>" + C.t(U) + "</div>"), I.addClass("placeholder"), F && F.length ? (B.append(F), I.hide()) : B.append(c.default(T.EMPTY_P)), z && z.length && (B.append(z), I.hide()), O.append(B), O.append(I), R.addClass("w-e-toolbar").css("z-index", S.zIndex.get("toolbar")), O.addClass("w-e-text-container"), O.css("z-index", S.zIndex.get()), B.addClass("w-e-text");
        var H = m.getRandom("toolbar-elem");
        R.attr("id", H);
        var j = m.getRandom("text-elem");
        B.attr("id", j);
        var P = O.getBoundingClientRect().height, V = B.getBoundingClientRect().height;
        P !== V && B.css("min-height", P + "px"), S.$toolbarElem = R, S.$textContainerElem = O, S.$textElem = B, S.toolbarElemId = H, S.textElemId = j;
      }
      o.default = E;
      function g(S) {
        var v = "data-we-id", M = /^wangEditor-\d+$/, y = S.textSelector, h = S.toolbarSelector, b = { bar: c.default("<div></div>"), text: c.default("<div></div>") };
        if (h == null)
          throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
        if (b.bar = c.default(h), !b.bar.elems.length)
          throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + h);
        if (M.test(b.bar.attr(v)))
          throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        if (y) {
          if (b.text = c.default(y), !b.text.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + y);
          if (M.test(b.text.attr(v)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        }
        b.bar.attr(v, S.id), b.text.attr(v, S.id), S.beforeDestroy(function() {
          b.bar.removeAttr(v), b.text.removeAttr(v);
        });
      }
      o.selectorValidator = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = t(7);
      function T(x, w) {
        var E = x.$textElem, g = E.children();
        if (!g || !g.length) {
          E.append(c.default(m.EMPTY_P)), T(x);
          return;
        }
        var S = g.last();
        if (w) {
          var v = S.html().toLowerCase(), M = S.getNodeName();
          if (v !== "<br>" && v !== "<br/>" || M !== "P") {
            E.append(c.default(m.EMPTY_P)), T(x);
            return;
          }
        }
        x.selection.createRangeByElem(S, !1, !0), x.config.focus ? x.selection.restoreSelection() : x.selection.clearWindowSelectionRange();
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      function T(v) {
        x(v), w(v), E(v);
      }
      function x(v) {
        v.txt.eventHooks.changeEvents.push(function() {
          var M = v.config.onchange;
          if (M) {
            var y = v.txt.html() || "";
            v.isFocus = !0, M(y);
          }
          v.txt.togglePlaceholder();
        });
      }
      function w(v) {
        v.isFocus = !1;
        function M(y) {
          var h = y.target, b = m.default(h), C = v.$textElem, R = v.$toolbarElem, O = C.isContain(b), B = R.isContain(b), F = R.elems[0] == y.target;
          if (O)
            v.isFocus || S(v), v.isFocus = !0;
          else {
            if (B && !F || !v.isFocus)
              return;
            g(v), v.isFocus = !1;
          }
        }
        document.activeElement === v.$textElem.elems[0] && v.config.focus && (S(v), v.isFocus = !0), m.default(document).on("click", M), v.beforeDestroy(function() {
          m.default(document).off("click", M);
        });
      }
      function E(v) {
        v.$textElem.on("compositionstart", function() {
          v.isComposing = !0, v.txt.togglePlaceholder();
        }).on("compositionend", function() {
          v.isComposing = !1, v.txt.togglePlaceholder();
        });
      }
      function g(v) {
        var M, y = v.config, h = y.onblur, b = v.txt.html() || "";
        (0, d.default)(M = v.txt.eventHooks.onBlurEvents).call(M, function(C) {
          return C();
        }), h(b);
      }
      function S(v) {
        var M = v.config, y = M.onfocus, h = v.txt.html() || "";
        y(h);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c) {
        var m = c.config, T = m.lang, x = m.languages;
        if (c.i18next != null) {
          try {
            c.i18next.init({ ns: "wangEditor", lng: T, defaultNS: "wangEditor", resources: x });
          } catch (w) {
            throw new Error("i18next:" + w);
          }
          return;
        }
        c.i18next = { t: function(E) {
          var g = E.split(".");
          return g[g.length - 1];
        } };
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31));
      (0, f.default)(o, "__esModule", { value: !0 }), o.setUnFullScreen = o.setFullScreen = void 0;
      var c = t(2), m = c.__importDefault(t(3));
      t(421);
      var T = "w-e-icon-fullscreen", x = "w-e-icon-fullscreen_exit", w = "w-e-full-screen-editor";
      o.setFullScreen = function(g) {
        var S = m.default(g.toolbarSelector), v = g.$textContainerElem, M = g.$toolbarElem, y = (0, d.default)(M).call(M, "i." + T), h = g.config;
        y.removeClass(T), y.addClass(x), S.addClass(w), S.css("z-index", h.zIndexFullScreen);
        var b = M.getBoundingClientRect();
        v.css("height", "calc(100% - " + b.height + "px)");
      }, o.setUnFullScreen = function(g) {
        var S = m.default(g.toolbarSelector), v = g.$textContainerElem, M = g.$toolbarElem, y = (0, d.default)(M).call(M, "i." + x), h = g.config;
        y.removeClass(x), y.addClass(T), S.removeClass(w), S.css("z-index", "auto"), v.css("height", h.height + "px");
      };
      var E = function(S) {
        if (!S.textSelector && !!S.config.showFullScreen) {
          var v = S.$toolbarElem, M = m.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + T + `"></i>
        </div>`);
          M.on("click", function(y) {
            var h, b = (0, d.default)(h = m.default(y.currentTarget)).call(h, "i");
            b.hasClass(T) ? (M.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), o.setFullScreen(S)) : (M.attr("data-title", "\u5168\u5C4F"), o.setUnFullScreen(S));
          }), v.append(M);
        }
      };
      o.default = E;
    }, function(l, o, t) {
      var s = t(20), f = t(422);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = function(T, x) {
        var w, E = T.isEnable ? T.$textElem : (0, d.default)(w = T.$textContainerElem).call(w, ".w-e-content-mantle"), g = (0, d.default)(E).call(E, "[id='" + x + "']"), S = g.getOffsetData().top;
        E.scrollTop(S);
      };
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(128)), m = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 }, T = function() {
        function x() {
          this.tier = m, this.baseZIndex = c.default.zIndex;
        }
        return x.prototype.get = function(w) {
          return w && this.tier[w] ? this.baseZIndex + this.tier[w] : this.baseZIndex;
        }, x.prototype.init = function(w) {
          this.baseZIndex == c.default.zIndex && (this.baseZIndex = w.config.zIndex);
        }, x;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(70)), c = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(426)), x = t(6), w = t(7);
      function E(S, v) {
        return (0, d.default)(S).call(S, function(M) {
          var y = M.type, h = M.target, b = M.attributeName;
          return y != "attributes" || y == "attributes" && (b == "contenteditable" || h != v);
        });
      }
      var g = function(S) {
        m.__extends(v, S);
        function v(M) {
          var y = S.call(this, function(h, b) {
            var C;
            if (h = E(h, b.target), (C = y.data).push.apply(C, h), M.isCompatibleMode)
              y.asyncSave();
            else if (!M.isComposing)
              return y.asyncSave();
          }) || this;
          return y.editor = M, y.data = [], y.asyncSave = w.EMPTY_FN, y;
        }
        return v.prototype.save = function() {
          this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
        }, v.prototype.emit = function() {
          var M;
          (0, c.default)(M = this.editor.txt.eventHooks.changeEvents).call(M, function(y) {
            return y();
          });
        }, v.prototype.observe = function() {
          var M = this;
          S.prototype.observe.call(this, this.editor.$textElem.elems[0]);
          var y = this.editor.config.onchangeTimeout;
          this.asyncSave = x.debounce(function() {
            M.save();
          }, y), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
            M.asyncSave();
          });
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function c(m, T) {
          var x = this;
          this.options = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, characterData: !0, characterDataOldValue: !0 }, this.callback = function(w) {
            m(w, x);
          }, this.observer = new MutationObserver(this.callback), T && (this.options = T);
        }
        return (0, f.default)(c.prototype, "target", { get: function() {
          return this.node;
        }, enumerable: !1, configurable: !0 }), c.prototype.observe = function(m) {
          this.node instanceof Node || (this.node = m, this.connect());
        }, c.prototype.connect = function() {
          if (this.node)
            return this.observer.observe(this.node, this.options), this;
          throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
        }, c.prototype.disconnect = function() {
          var m = this.observer.takeRecords();
          m.length && this.callback(m), this.observer.disconnect();
        }, c;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(428)), m = d.__importDefault(t(435)), T = d.__importDefault(t(436)), x = function() {
        function w(E) {
          this.editor = E, this.content = new c.default(E), this.scroll = new m.default(E), this.range = new T.default(E);
        }
        return (0, f.default)(w.prototype, "size", {
          get: function() {
            return this.scroll.size;
          },
          enumerable: !1,
          configurable: !0
        }), w.prototype.observe = function() {
          this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
        }, w.prototype.save = function(E) {
          E.length && (this.content.save(E), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
        }, w.prototype.revoke = function() {
          this.editor.change.disconnect();
          var E = this.content.revoke();
          E && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), E && this.editor.change.emit();
        }, w.prototype.restore = function() {
          this.editor.change.disconnect();
          var E = this.content.restore();
          E && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), E && this.editor.change.emit();
        }, w;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(429)), m = d.__importDefault(t(433)), T = function() {
        function x(w) {
          this.editor = w;
        }
        return x.prototype.observe = function() {
          this.editor.isCompatibleMode ? this.cache = new m.default(this.editor) : this.cache = new c.default(this.editor), this.cache.observe();
        }, x.prototype.save = function(w) {
          this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(w);
        }, x.prototype.revoke = function() {
          var w;
          return (w = this.cache) === null || w === void 0 ? void 0 : w.revoke();
        }, x.prototype.restore = function() {
          var w;
          return (w = this.cache) === null || w === void 0 ? void 0 : w.restore();
        }, x;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(98)), m = d.__importDefault(t(431)), T = t(432), x = function(w) {
        d.__extends(E, w);
        function E(g) {
          var S = w.call(this, g.config.historyMaxSize) || this;
          return S.editor = g, S;
        }
        return E.prototype.observe = function() {
          this.resetMaxSize(this.editor.config.historyMaxSize);
        }, E.prototype.compile = function(g) {
          return this.save(m.default(g)), this;
        }, E.prototype.revoke = function() {
          return w.prototype.revoke.call(this, function(g) {
            T.revoke(g);
          });
        }, E.prototype.restore = function() {
          return w.prototype.restore.call(this, function(g) {
            T.restore(g);
          });
        }, E;
      }(c.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.CeilStack = void 0;
      var d = function() {
        function c(m) {
          m === void 0 && (m = 0), this.data = [], this.max = 0, this.reset = !1, m = Math.abs(m), m && (this.max = m);
        }
        return c.prototype.resetMax = function(m) {
          m = Math.abs(m), !this.reset && !isNaN(m) && (this.max = m, this.reset = !0);
        }, (0, f.default)(c.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), c.prototype.instack = function(m) {
          return this.data.unshift(m), this.max && this.size > this.max && (this.data.length = this.max), this;
        }, c.prototype.outstack = function() {
          return this.data.shift();
        }, c.prototype.clear = function() {
          return this.data.length = 0, this;
        }, c;
      }();
      o.CeilStack = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 }), o.compliePosition = o.complieNodes = o.compileValue = o.compileType = void 0;
      var m = t(6);
      function T(M) {
        switch (M) {
          case "childList":
            return "node";
          case "attributes":
            return "attr";
          default:
            return "text";
        }
      }
      o.compileType = T;
      function x(M) {
        switch (M.type) {
          case "attributes":
            return M.target.getAttribute(M.attributeName) || "";
          case "characterData":
            return M.target.textContent;
          default:
            return "";
        }
      }
      o.compileValue = x;
      function w(M) {
        var y = {};
        return M.addedNodes.length && (y.add = m.toArray(M.addedNodes)), M.removedNodes.length && (y.remove = m.toArray(M.removedNodes)), y;
      }
      o.complieNodes = w;
      function E(M) {
        var y;
        return M.previousSibling ? y = { type: "before", target: M.previousSibling } : M.nextSibling ? y = { type: "after", target: M.nextSibling } : y = { type: "parent", target: M.target }, y;
      }
      o.compliePosition = E;
      var g = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
      function S(M) {
        var y = [], h = !1, b = [];
        return (0, d.default)(M).call(M, function(C, R) {
          var O = { type: T(C.type), target: C.target, attr: C.attributeName || "", value: x(C) || "", oldValue: C.oldValue || "", nodes: w(C), position: E(C) };
          if (y.push(O), !!m.UA.isFirefox) {
            if (h && C.addedNodes.length && C.addedNodes[0].nodeType == 1) {
              var B = C.addedNodes[0], F = { type: "node", target: B, attr: "", value: "", oldValue: "", nodes: { add: [h] }, position: { type: "parent", target: B } };
              (0, c.default)(g).call(g, B.nodeName) != -1 ? (F.nodes.add = m.toArray(B.childNodes), y.push(F)) : h.nodeType == 3 ? (v(B, b) && (F.nodes.add = m.toArray(B.childNodes)), y.push(F)) : (0, c.default)(g).call(g, C.target.nodeName) == -1 && v(B, b) && (F.nodes.add = m.toArray(B.childNodes), y.push(F));
            }
            O.type == "node" && C.removedNodes.length == 1 ? (h = C.removedNodes[0], b.push(h)) : (h = !1, b.length = 0);
          }
        }), y;
      }
      o.default = S;
      function v(M, y) {
        for (var h = 0, b = y.length - 1; b > 0 && M.contains(y[b]); b--)
          h++;
        return h;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(94));
      (0, f.default)(o, "__esModule", { value: !0 }), o.restore = o.revoke = void 0;
      function m(b, C) {
        var R = b.position.target;
        switch (b.position.type) {
          case "before":
            R.nextSibling ? (R = R.nextSibling, (0, d.default)(C).call(C, function(O) {
              b.target.insertBefore(O, R);
            })) : (0, d.default)(C).call(C, function(O) {
              b.target.appendChild(O);
            });
            break;
          case "after":
            (0, d.default)(C).call(C, function(O) {
              b.target.insertBefore(O, R);
            });
            break;
          default:
            (0, d.default)(C).call(C, function(O) {
              R.appendChild(O);
            });
            break;
        }
      }
      function T(b) {
        for (var C = 0, R = (0, c.default)(b.nodes); C < R.length; C++) {
          var O = R[C], B = O[0], F = O[1];
          switch (B) {
            case "add":
              (0, d.default)(F).call(F, function(z) {
                b.target.removeChild(z);
              });
              break;
            default: {
              m(b, F);
              break;
            }
          }
        }
      }
      function x(b) {
        var C = b.target;
        b.oldValue == null ? C.removeAttribute(b.attr) : C.setAttribute(b.attr, b.oldValue);
      }
      function w(b) {
        b.target.textContent = b.oldValue;
      }
      var E = { node: T, text: w, attr: x };
      function g(b) {
        for (var C = b.length - 1; C > -1; C--) {
          var R = b[C];
          E[R.type](R);
        }
      }
      o.revoke = g;
      function S(b) {
        for (var C = 0, R = (0, c.default)(b.nodes); C < R.length; C++) {
          var O = R[C], B = O[0], F = O[1];
          switch (B) {
            case "add": {
              m(b, F);
              break;
            }
            default: {
              (0, d.default)(F).call(F, function(z) {
                z.parentNode.removeChild(z);
              });
              break;
            }
          }
        }
      }
      function v(b) {
        b.target.textContent = b.value;
      }
      function M(b) {
        b.target.setAttribute(b.attr, b.value);
      }
      var y = { node: S, text: v, attr: M };
      function h(b) {
        for (var C = 0, R = b; C < R.length; C++) {
          var O = R[C];
          y[O.type](O);
        }
      }
      o.restore = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(434), c = function() {
        function m(T) {
          this.editor = T, this.data = new d.TailChain();
        }
        return m.prototype.observe = function() {
          this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
        }, m.prototype.save = function() {
          return this.data.insertLast(this.editor.$textElem.html()), this;
        }, m.prototype.revoke = function() {
          var T = this.data.prev();
          return T ? (this.editor.$textElem.html(T), !0) : !1;
        }, m.prototype.restore = function() {
          var T = this.data.next();
          return T ? (this.editor.$textElem.html(T), !0) : !1;
        }, m;
      }();
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(91));
      (0, f.default)(o, "__esModule", { value: !0 }), o.TailChain = void 0;
      var c = function() {
        function m() {
          this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
        }
        return m.prototype.resetMax = function(T) {
          T = Math.abs(T), T && (this.max = T);
        }, (0, f.default)(m.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), m.prototype.insertLast = function(T) {
          if (this.isRe) {
            var x;
            (0, d.default)(x = this.data).call(x, this.point + 1), this.isRe = !1;
          }
          for (this.data.push(T); this.max && this.size > this.max; )
            this.data.shift();
          return this.point = this.size - 1, this;
        }, m.prototype.current = function() {
          return this.data[this.point];
        }, m.prototype.prev = function() {
          if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
            this.point = 0;
            return;
          }
          return this.current();
        }, m.prototype.next = function() {
          if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
            this.point = this.size - 1;
            return;
          }
          return this.current();
        }, m;
      }();
      o.TailChain = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(98)), m = function(T) {
        d.__extends(x, T);
        function x(w) {
          var E = T.call(this, w.config.historyMaxSize) || this;
          return E.editor = w, E.last = 0, E.target = w.$textElem.elems[0], E;
        }
        return x.prototype.observe = function() {
          var w = this;
          this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
            w.last = w.target.scrollTop;
          }), this.resetMaxSize(this.editor.config.historyMaxSize);
        }, x.prototype.save = function() {
          return T.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
        }, x.prototype.revoke = function() {
          var w = this;
          return T.prototype.revoke.call(this, function(E) {
            w.target.scrollTop = E[0];
          });
        }, x.prototype.restore = function() {
          var w = this;
          return T.prototype.restore.call(this, function(E) {
            w.target.scrollTop = E[1];
          });
        }, x;
      }(c.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(98)), m = d.__importDefault(t(3)), T = t(6);
      function x(E) {
        return { start: [E.startContainer, E.startOffset], end: [E.endContainer, E.endOffset], root: E.commonAncestorContainer, collapsed: E.collapsed };
      }
      var w = function(E) {
        d.__extends(g, E);
        function g(S) {
          var v = E.call(this, S.config.historyMaxSize) || this;
          return v.editor = S, v.lastRange = x(document.createRange()), v.root = S.$textElem.elems[0], v.updateLastRange = T.debounce(function() {
            v.lastRange = x(v.rangeHandle);
          }, S.config.onchangeTimeout), v;
        }
        return (0, f.default)(g.prototype, "rangeHandle", {
          get: function() {
            var v = document.getSelection();
            return v && v.rangeCount ? v.getRangeAt(0) : document.createRange();
          },
          enumerable: !1,
          configurable: !0
        }), g.prototype.observe = function() {
          var S = this;
          this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
          function v() {
            var y = S.rangeHandle;
            (S.root === y.commonAncestorContainer || S.root.contains(y.commonAncestorContainer)) && (S.editor.isComposing || S.updateLastRange());
          }
          function M(y) {
            (y.key == "Backspace" || y.key == "Delete") && S.updateLastRange();
          }
          m.default(document).on("selectionchange", v), this.editor.beforeDestroy(function() {
            m.default(document).off("selectionchange", v);
          }), S.editor.$textElem.on("keydown", M);
        }, g.prototype.save = function() {
          var S = x(this.rangeHandle);
          return E.prototype.save.call(this, [this.lastRange, S]), this.lastRange = S, this;
        }, g.prototype.set = function(S) {
          try {
            if (S) {
              var v = this.rangeHandle;
              return v.setStart.apply(v, S.start), v.setEnd.apply(v, S.end), this.editor.menus.changeActive(), !0;
            }
          } catch {
            return !1;
          }
          return !1;
        }, g.prototype.revoke = function() {
          var S = this;
          return E.prototype.revoke.call(this, function(v) {
            S.set(v[0]);
          });
        }, g.prototype.restore = function() {
          var S = this;
          return E.prototype.restore.call(this, function(v) {
            S.set(v[1]);
          });
        }, g;
      }(c.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      t(438);
      function T(x) {
        var w = !1, E, g;
        x.txt.eventHooks.changeEvents.push(function() {
          w && (0, d.default)(E).call(E, ".w-e-content-preview").html(x.$textElem.html());
        });
        function S() {
          if (!w) {
            x.$textElem.hide();
            var M = x.zIndex.get("textContainer"), y = x.txt.html();
            E = m.default('<div class="w-e-content-mantle" style="z-index:' + M + `">
                <div class="w-e-content-preview w-e-text">` + y + `</div>
            </div>`), x.$textContainerElem.append(E);
            var h = x.zIndex.get("menu");
            g = m.default('<div class="w-e-menue-mantle" style="z-index:' + h + '"></div>'), x.$toolbarElem.append(g), w = !0, x.isEnable = !1;
          }
        }
        function v() {
          !w || (E.remove(), g.remove(), x.$textElem.show(), w = !1, x.isEnable = !0);
        }
        return { disable: S, enable: v };
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(20), f = t(439);
      f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[l.i, f, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(f, d), l.exports = f.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function c(m) {
          var T = this;
          this.editor = m;
          var x = function() {
            var E = document.activeElement;
            E === m.$textElem.elems[0] && T.emit();
          };
          window.document.addEventListener("selectionchange", x), this.editor.beforeDestroy(function() {
            window.document.removeEventListener("selectionchange", x);
          });
        }
        return c.prototype.emit = function() {
          var m, T = this.editor.config.onSelectionChange;
          if (T) {
            var x = this.editor.selection;
            x.saveRange(), x.isSelectionEmpty() || T({
              text: x.getSelectionText(),
              html: (m = x.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0].innerHTML,
              selection: x
            });
          }
        }, c;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(127)), c = s(t(94)), m = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 }), o.registerPlugin = void 0;
      var T = t(2), x = T.__importDefault(t(87)), w = t(6);
      function E(S, v, M) {
        if (!S)
          throw new TypeError("name is not define");
        if (!v)
          throw new TypeError("options is not define");
        if (!v.intention)
          throw new TypeError("options.intention is not define");
        if (v.intention && typeof v.intention != "function")
          throw new TypeError("options.intention is not function");
        M[S] && console.warn("plugin " + S + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), M[S] = v;
      }
      o.registerPlugin = E;
      function g(S) {
        var v = (0, d.default)({}, w.deepClone(x.default.globalPluginsFunctionList), w.deepClone(S.pluginsFunctionList)), M = (0, c.default)(v);
        (0, m.default)(M).call(M, function(y) {
          var h = y[0], b = y[1];
          console.info("plugin " + h + " initializing");
          var C = b.intention, R = b.config;
          C(S, R), console.info("plugin " + h + " initialization complete");
        });
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
    }]).default;
  });
})(Wd);
var Kg = /* @__PURE__ */ Gg(Wd.exports), Xg = "fcEditor", Jg = 1, Zg = Object.assign || function(u) {
  for (var A, l = 1; l < arguments.length; l++)
    for (var o in A = arguments[l], A)
      Object.prototype.hasOwnProperty.call(A, o) && (u[o] = A[o]);
  return u;
}, qg = yn({
  name: Xg,
  props: {
    modelValue: String,
    init: Function,
    disabled: Boolean,
    config: Object
  },
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  data: function() {
    return {
      editor: {},
      uni: Jg++
    };
  },
  watch: {
    disabled: function() {
      this.enable();
    },
    modelValue: function(A) {
      A !== this.editor.txt.html() && this.editor.txt.html(A);
    }
  },
  methods: {
    enable: function() {
      this.disabled ? this.editor.disable() : this.editor.enable();
    },
    result: function() {
      this.$emit("update:modelValue", this.editor.txt.html());
    }
  },
  mounted: function() {
    var A = this;
    this.$nextTick(function() {
      A.editor = new Kg("#editor".concat(A.uni)), A.editor.config.zIndex = 2, A.editor.config.force = !1, A.config && Zg(A.editor.config, A.config), A.init && A.init(A.editor), A.editor.create(), A.enable(), A.editor.txt.html(A.modelValue);
    });
  },
  render: function() {
    var A = Qg({}, this.$attrs);
    return delete A.id, $e("div", Gv(A, {
      onInput: this.result,
      id: "editor".concat(this.uni),
      style: "line-height: normal;"
    }), null);
  },
  beforeDestroy: function() {
    this.editor && this.editor.destroy(), this.editor = null;
  }
});
const $d = (u, A) => {
  St.component(u, A), Cs.component(u, A);
};
St.component("draggable", Es);
St.component("DragTool", sg);
St.component("DragBox", wg);
St.component("Validate", Tg);
St.component("Struct", mg);
St.component("Fetch", bg);
St.component("Required", Pg);
St.component("TableOptions", Hg);
St.component("TableColumnOptions", Yg);
$d("FcEditor", qg);
St.register("_fc", {
  load(u, A) {
    A._id = bt();
  }
});
St.register("_fc_tool", {
  load(u, A) {
    A.props.unique = bt();
  }
});
const _g = function(u) {
  u.component("FcDesigner", yr);
};
yr.install = _g;
yr.makeOptionsRule = pi;
yr.formCreate = Cs;
yr.designerForm = St;
yr.component = $d;
yr.useLocale = Ud;
yr.t = As;
export {
  yr as default,
  St as designerForm,
  Cs as formCreate,
  _g as install
};
