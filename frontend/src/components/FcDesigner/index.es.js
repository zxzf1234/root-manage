/*!
 * form-create 可视化表单设计器
 * @form-create/designer v3.1.5
 * (c) 2021-2024 xaboy
 * Github https://github.com/xaboy/form-create-designer
 * Released under the MIT License.
 */
(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode('._fc-designer{cursor:default;height:100%;min-height:500px;overflow:hidden;position:relative}._fc-designer>.el-main{bottom:0;left:0;padding:0;position:absolute;right:0;top:0}._fc-m .form-create ._fc-l-item{background:#2e73ff;height:10px;overflow:hidden;transition:all .3s ease;width:100%}._fc-l,._fc-m,._fc-r{border-top:1px solid #ececec;box-sizing:border-box}._fc-l-group{padding:0 12px}._fc-l-title{font-size:14px;font-weight:600;margin:18px 0 5px}._fc-l-item{background:#fff;color:#000;cursor:pointer;display:inline-block;height:70px;line-height:1;min-width:70px;text-align:center;transition:all .2s ease;width:33.33%}._fc-l-item i{display:inline-block;font-size:21px}._fc-l-item ._fc-l-name{font-size:12px}._fc-l-item ._fc-l-icon{padding:10px 5px 12px}._fc-l-item:hover{background:#2e73ff;color:#fff}._fc-m-tools{align-items:center;border:1px solid #ececec;border-top:0;display:flex;height:40px;justify-content:flex-end}._fc-m-tools button.el-button{align-items:center;display:flex;padding:5px 14px}._fc-m-tools .fc-icon{font-size:14px;margin-right:2px}._fc-r .el-tabs__nav-wrap:after{background-color:#ececec;height:1px}._fc-r ._fc-r-tabs{border-bottom:1px solid #ececec;display:flex;padding:0}._fc-r ._fc-r-tab{box-sizing:border-box;color:#303133;display:inline-block;flex:1;font-size:14px;font-weight:600;height:40px;line-height:40px;list-style:none;position:relative;text-align:center}._fc-r ._fc-r-tab.active{border-bottom:2px solid #409eff;color:#409eff}.drag-box{min-height:60px;width:100%}._fc-m-drag{box-sizing:border-box;overflow:auto;padding:2px}._fc-m-drag,.draggable-drag{background:#fff;height:100%;position:relative}._fc-m-drag>form,._fc-m-drag>form>.el-row{height:100%}.el-form--inline [data-draggable]{display:inline-flex;vertical-align:middle}.drag-tool{word-wrap:break-word;box-sizing:border-box;display:flex;min-height:20px;outline:1px dashed #2e73ff;overflow:hidden;padding:2px;position:relative;word-break:break-all}.drag-tool .drag-tool{margin:5px}.drag-tool+.drag-tool{margin-top:5px}.drag-tool.active{outline:2px solid #2e73ff}.drag-tool.active>div>.drag-btn{display:flex}.drag-tool .drag-btn{display:none}.drag-r{bottom:2px;right:2px}.drag-l,.drag-r{position:absolute;z-index:2}.drag-l{left:0;top:0}.drag-btn{background-color:#2e73ff;color:#fff;cursor:pointer;float:left;height:18px;justify-content:center;line-height:20px;padding-bottom:1px;text-align:center;width:18px}.drag-btn+.drag-btn{margin-left:2px}.drag-btn-danger{background-color:#ff2e2e}.drag-btn i{font-size:13px}.drag-mask{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}.CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}.CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{background:#fff;overflow:hidden;position:relative}.CodeMirror-scroll{height:100%;margin-bottom:-50px;margin-right:-50px;outline:none;overflow:scroll!important;padding-bottom:50px;position:relative;z-index:0}.CodeMirror-sizer{border-right:50px solid transparent;position:relative}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{display:none;outline:none;position:absolute;z-index:5}.CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}.CodeMirror-scrollbar-filler{bottom:0;right:0}.CodeMirror-gutter-filler{bottom:0;left:0}.CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}.CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-50px;vertical-align:top;white-space:normal}.CodeMirror-gutter-wrapper{background:none!important;border:none!important;position:absolute;z-index:4}.CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}.CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{word-wrap:normal;-webkit-tap-highlight-color:transparent;background:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;z-index:2}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}.CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.CodeMirror-cursor{pointer-events:none;position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}._fc_struct{width:100%}._fc_struct .CodeMirror{height:450px}._fc_struct .CodeMirror-line{font-size:13px!important;line-height:16px!important}.CodeMirror-lint-tooltip{z-index:1!important}._fc_struct .el-dialog__body{padding:0 20px}._fc_err{color:red;float:left;text-align:left;width:65%}._fc_fetch .el-form-item__label{display:inline-block;float:left;padding-right:5px;text-align:right}._fc_fetch{background-color:#bfdaf7;padding:10px}._fc-validate .form-create .el-form-item{margin-bottom:22px!important}._fc-validate .append-msg{cursor:pointer}._fc-validate .el-input-group__append{padding:0 10px}._fc-emit .form-create .el-form-item{margin-bottom:22px!important}._fc-emit .append-msg{cursor:pointer}._fc-emit .el-input-group__append{padding:0 10px}._fc-required{align-items:center;display:flex}._fc-required .el-input{margin-left:15px}._fc-required .el-switch{height:28px}._fc_table_opt[data-v-0d635ce0],._fc_table_opt[data-v-5bd433d0],._fc_table_opt[data-v-c4468f72]{width:100%}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,d09GRgABAAAAABa8AAsAAAAAJQQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAGA9hU5KY21hcAAAAYgAAAE2AAADaEcfEkJnbHlmAAACwAAAEPIAABsQkdIMXGhlYWQAABO0AAAALwAAADYmk54paGhlYQAAE+QAAAAgAAAAJAfgBARobXR4AAAUBAAAABIAAACIiGIAAGxvY2EAABQYAAAARgAAAEZ5NHJIbWF4cAAAFGAAAAAdAAAAIAE2ALZuYW1lAAAUgAAAAUAAAAJnEKM8sHBvc3QAABXAAAAA+QAAAWbrmcBBeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGFhZpzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnhe8Lmdu+N/AwMB8hwFIMjCiKGICAH8ZDVB4nOXTR04DQRSE4X/IOefMniUnQBwIBMILWyZnkVkhjmNYcY+SzCGgxsUKjkBL30j9pA7qVwN0Au22Zh1QfFBQjndXi1a9nb5WvYMXz8cYcaVN29pVRTVd67n59ln5+gJtaUd7qqqum2YjtV+j8PoJpphhjnU22HRtgUWWWGaFVbp8n2566PWZ/QwwyBDDPnHUp48x7rWTXj3t9bPeYZ623LLo+nPS/xsD5ad4/Zmtlv0IvzDaDr812gm/OtoNvz/aC3cCVaK1TzXcHVSLMjeqhzuG9sO9QwfhLqLDKDOko3Bn0XGUt9ZJuNvoNNx3dBZOADoPZwFdhFOBLqPMrq7CSUHX4cygm3B60G04R+gunCh0H84WeginDD2G84aewslDz+EM0myE00jzLcp/6rMSFN+kJ4M/AAB4nHU5DZAU1Zn93pv+mZ7p7umZ/pnZ2fnfmWHZndlhemZaliwEEBZYFEEBo8huDkPiXuTk/Fkq3Gk0xxlSKKAclkbu8KTU8y6pilVRVAhRq6g7c1bInScpEkmRi4nlRanEu3Bc7Oa+1z2zsws60/O9733ve/1ef+/77WFYBj7kTvzfzDpmM/MV5s+ZexkGFfJcChVkpBmmpUNHMxYgvdPXjHqrqTZaC1Dd0FWNK+TypXa/VRpAeRkDNY2tXH0hBnoV81a91aAjHJ3vM3GXYZ1xfOFAZuCCKMvihQshWQ5d8HElpigijAxk3CiFJ+VIRD6ZqBRisUIlgT5qYwcOiJSPTjwgw+eAIsvKDKwzij8eTG9BsiajnYqm7PSweXQhnBXlzhroo8xAIkHv70Znr/QdWZfh+psEfA54wCeAKDHDXLoUQGSAUZgEw8SajRYIIoMMgEYKsapGMZDfQMZAc4zI7YRFzxmZT6BL/tTI4IE3jSwQs8aqAbdpZIDpR/SecEb/C/eMMXPgnsQX9vRNc3mOrSI4Bo4nnCf4lh1rldauzRiuoWwjAXSvkXGqOYvs583wJx9GUywQFTNMYhQNsOhX7jt4QWfhOXExZKjuZDiuQYsOhuOwPILnOk8eIiJThE59IWp4K3oqARphptGCNpWeI19FIwifHbquVrtuyL0a2kp53edjG6xXqmuqcL1iXR9TY+jU3BXrV8wFsNz45+V3GIOt/hUbVsyt98tz4y/QR/ae+2X8LZBllqnCut6CaURViy7FLkT1NNZknK/iRgsVgFgqW/U0guPEL7g/XrFjdHTHCjTPa53/SY+tHftcNvs5v0Hn9tdardr++RP2VRN49/Id+3Ys98BdacqzbtVIJjOyat2Ye7x4+9duL80f3z5uM4zo7WkH/iNjMoPMCLOYWcmsZW5gJpl7mAeoZHxx5GabhmWCEfGqN9CyVdhlrorKRXp4PtMIonqiw5fVC3qhWWjmzEK5wBdss8zbcFND13iOh9bHBlCTWo3dajbKYDm6VadoieLoHxWTGArq75s3r885WqjXCz/5CSVF8Bqvcd9KD2B0RDUTintGjSciqOSegd/o4vRipI7l1XVqfmwonXk/ogsSL4UklieiFsluyNREmfC8JNdsSZY5VlJt/Ecjcr8Sx/U+dxddCa8u1AeNiPM9byV0LwyRwd4XEpH1UTMRWaeaczb8Ifnss8nXa7XXp9avn+J4MD1ZChAS4EU9pYivr2NxQJV4fg/PxgSJ8CDugCfzbfgjZoAZY77E/LXnoUq+xwHJlajqgyTBSdV1DWTTkacvX+g2G9QoKCsMgtQa5SrVV1/8RbDRNpqnLHlOVzkeOiUzP4RKDbtFTU3XFAy0IVRFnJZBacTLiMSPhZVI6Fg4poWcUxQme9VQkgoe1/rm1d1RSelF63hN49/nUEAOBzD7fmaoknP3zButR0K6qSdZNsBLaloUd5lmYlmiEsAYFhcCtpBQ+F0cx2IZfSlihrXQObrAOSkaDyvz+s7SRc7la+534TZx8Q4RBB2EBQL1wva+eacu5mu1/Imwkjwh6rrofswipBwX95rLzZ4eKyDyQZ5g1hKIkgNBq7wQpCJmp+WsMBmQtQ3SpjYH8uh4rUZpplZTLSft8EBdOD8DJxTQg6EE1Y8ZRHXOllqtEs4DNBXnrGKaCs4r5uSjoqqKACKhaewpirj/ReF2VVPxh61Sd7bzQGeqqbjvw7BqKN9UdVU1FZSmra66J+lUNNzxI5Pec8WYimels6yTzam5or0QDlVBREGcXrAKcPLgXTLYJpaZzZrOQTOTMfGkcxBPugdPC6ZCBPJbglEhxPNbBRIxBLL+NP4wQzmBH0+amZZz8K2LMKQFA+55ghDmH+CNiEC2XvR0+pJLHiCY0Zh+kPTVIP58GQwY1A0Ujto5NXiuXLc9fYWRPO1rdMTOV1GD+j6ky7js+0LfM2Jm8qaN9WazvvGmtzvI5M3XjlWq1crYtS92kJtHp5Ytm3p4ahlafveoPW7b49vG7dZm3J1n3XjTv1HEmjXPQ9Ysn3poavnyqdEVU1db3kx7/M8220w7Tj0IzzTIXM8wRTAWnsuDqS1CAEC+i/BCZNUhVmRwGpkGp1DAw3OVjQyCBx0Czla5NIRLeThb+qwZOBFo6k3bMPFrUePxxyPVVEwluR2RMCcU48+tDvUnUnIoglc+F+9jhXB0R4qLauCvohgMKxBmi8qDQY4NnrqZ7WFvPsXzCLGPh/p4ohwnt8TFa64RZamaOLI9UjESGZJ6XO9RWC30eIrkDH1I2/50fEAlgWGMUICL/Kv89WBYZPt+EAq9VhRkwrEPR18MCYSM4xp9dM57/i/jDzz7KTAWs4BZBPH6smBgzjaoAqtaqgle32pSz0+h1UQAVPjx0D2HhzODgxnnZLpSSXtJynBIkkLOe9Ybu15trYEfykw+9dTk5K5d+INK2jlJufFwumLJonOSsuJhUd7hbkJHBnf/fn36m79fn3GP2ugF+1m7fWaT+CWmh4GHQHbbVEHmrQbYAFg0GAQcQYulPjbXpP6R+lrfoZbQoWukuHwNr8v8FCexYXyPIPAxdCIsOfvkuCyH8eGwzGFmwv1OGHro+gle1vl9JID38TrPohNy+Jln6MgPPdBDt8O3/dBvGB3k2M80mGXMevD7YLegOyA7maYeVQTSA33Ksb48wcugtkRzKg2AnBcFMu1o0HH3ECxnEwr8ZX3C92fkSE816ZxPVpJwYdk5H00mo6+iL9DG/dl9HDfCBoPsHyg491kA/zotlXTHSVZ74GaYwJ2sZNT5v2gSTziHk1HMRZPOIfTvLFvDAXYTFyDrgmySzkxzwh6B89AkJ+wV2F5W8EDHR9+AT3u+LAdZ0YLP8GdooWddSEblUotFLciKeJAJeBgyq5M1UinDOU4hXuoc934FOc4HA4rzrtcijFYFFS3ovhhUQvwltDIY0UT3pWBEFPA73blGynKOp2AuGxR12XlXYUXeTMJUFI0E3ZeDSOCjqIGWB5EaEd1XoB+M0LO+dJH8PdEg3mxkJpjboALZyfyV5w0LpfL0F7yH3TK9/CeDdMNzjSUIwaAQgFmG3QQm8JSmBe6xRb+gvP5U4OI5Os2bTah+UyW2r0DMKxD0bkEj1aFiX48RIYuCfDH/jXU3fmHL+iWVuIrjSwZW9Rd7NZFlRSTk/zZwZwpxvBjJjhBVi/UayWgthiR97sjYhmuuHd2eybP8fCVmZLJzHknOTabKva1UKQXXPvgB4bDfXOcTOcL16FkzGeM2b920Ye1UMiVHljXXzp3HBh5c0s8SntXDPaI5V1lpxZaKimY0okCFIMMF1drtaE5p9dACKdwTv3Xp6rU33xQ1td6YiUa03t5yKnlvjK6QGoGm3NvrE1OP+g0znXdva8fLuZ+uX6QAFNr3MjEvFTC4gkVqib6+hHOYQrzFeQJvPbQzmojulKJRCVlSFKsRgj+c5phI9A07T6Dvuqc8hhqwRsNSdGZ8VJkSeKYR2AVUllBXQlUJiS6kz90g2Q2cJt1TmeZzvG/Nvm1jZunOTU1rfOcu2tSqO5dOzopyNO49kchopCdj1GAnPdEo/nGHnTbVmmXN4vai5DHFNCKQgnwlGv6Y7v/jcJSZzlcn8Q9AklEmTSUYU3NqcXYcMOkudV+IsRn4STzlbMPPC5IkOBsE6aykSHD9NhyRpEgYP+ycwaWhsOAcoQx4k5YOg8Sco+FYLIxXdPFuPncDfh6sTGWSULkNedFIgx00YlZdg2QYct/cNFaYxnifC7A38W3ZrPNYNnsbvVSs+O3v2k17VMXPNxqXmEZPWO78HCsRltu69OV2Ttm6PBqWroyGJpg62KpGHbiXfoMfK2kzgiAezHWjoNv/8lFW44ggvMVH2TfBTcZEjD+knF4YtHOV1sww+P2TJ3kM7Kb4Mx6zkMeJIhYwbsfu3fg1wCQmBVFnPkQdBvEmjcgxu0wDNM11/VBDN9sqEU9aaoPWHcVZY41ZY+j82NjEhLZ69fj4iYO9c0rJg8kSLkRDB0XxYAhdfCxZLPU8liyVI+JjIlx4UWu4WHIPDwNEZ4u9jtNbLEEA6S06R2G7vCguLvdcSWzXpjTPjTB5yD6WQWV6C3jUu5n7mX8Ayesdc6ChjhY+0xbSqaYgOzO6BRQcFOt16FinSKJa7J9eo2XPwIvTU4H+GTgPuc3MPUwvr89gshrWG7IOx7VXkuHMSrRCnKLHt5c426boye+FHiS+h3kPC00Bg3MMfY8OuWsoZQaOKns7U0Kfgp2qSXSp16GvybU4HdtCx+L4+BRd/hFvqX7OnzEF+3I20RniPto/MmNvB2khq8njdFSXdvrNxCzi6TeSlHdoGsTf8MdJJ3ecxP/p2WoCzm8A8p6utU7bY4dSpLKiUiNXIN/Hj+bzzu35fLuNRtoIHu7p67P6+n7dUyg0CoUP/B4+3mo5v7STkoKkVusYJVl97vnZbTe//Sf8rmfLm5ivMn/JPEQrxJlVOGfY3dLbM3I252eO1nQF3i7WPbPXO6lk5wa5ZpfWKs3K3OBmV2RzbFdfvReS6BfoOUXXFfdGRSdGUmDRFE2e3N2sgL7t/lTR3fdNxTCUP6FMZlhACwwZzfFm/FQ23PdQXFdonxju2wJ7gc4F4H6dJmMLaG8B3t+l46ohb6GTt8jGnZR2FQUH4M4HYEA1DBUG3Kv5sEmZ/DXf8fAtYc19fXoGctoILPHxNBXELUzH4gxYtM0sZa4Dyd/G3EPfgbST8U5SXpjpSquI9d7UjqBcu7X0XBNB5GZnGJvvCTzJLkTdTqPVZWpexkVqWyA+um9He9QNZqFg4i1mAeed30DoRhUAW509eJvzCN7uqlZIVSQrFJGfpQAwlcjPdVDVfduC4isEfeUZi5oTHVfwS3EaxeI+LJjOKW+RWiJnazTGaj7cutX5F3Roq5JQ2pcUbmOHVF1SwkGl3TCza+0SSHERzSWmi+lugR2TEX2RuBDX01iXEZqZQcQKXXF1iuyZ+cCuIZosNGiy8LVbGsRyf+WnEYcfpdt9VFJj5FOqa2fvUMNPM2izePFO9KwqvkdnvCeq7lmaDSWiNI5f+oTcRVioh4pME/a/Bp6AvuvLK16h2DlzqBvbx9R5PR+7rF+2/WPOoMtH8NE1irk7Ll/36g2FOPpRPL/BTQhsmqohgH1BNsUJAgdg3yCnha4OadzgcJeI996qqrdWnP+I5/NxPFBxPqIDaIpCd3cX/7YdhI89c9h/Z+6Q+wnNWILwZCq4ALUMGRO533kanbedp/F+56vbcGkbYLf4/J+QJ0kA5AEZTdGoL0L0rwTVdy46pKScyRY6ptFxOB03gy6SIP4LqN7XsoElAXYtFF5YB8S5w+tDZPmdrLM/J+RJNojuCrBswN0jBu7myPPPE44jZ2Rdl8+Q9r5/QZ4iWdCreZ+lU17FOSvKtiMpGBhmtn9xsz1/vr35i7/sICs1aUesV5uSYzG5jZDsLA4PcSfk2I42Twfp5u73Qx4TB12pejUzfTuvcZ1EuQra7KXK/hsj/+0RT/Wabg8zq1cutRsjCxtXLVl1YNWSqxoLRxr20pVj/aP9/aPXU9CfrVQ+X6ngH2ZTVu2OzXfUGqlcLtXwUCuV/buBVRtXDgys3LhqYO3QkiG4mPb/B0fIz8kmr14tl6i7ohEBMjxQYs77fwnOSvFerhqet4IDBLR9tk36vxOgDXL6ECdfupHn2fsCocB9LC9sdGXuSZZ9kpcu3ShQcniafCiAvtXFA4c+lSUAN3Q3+uT/BzxDuncAAHicY2BkYGAA4qmuv3vi+W2+MnCzMIDAw51rxRD0/yUsjMwxQC4HAxNIFABBdgrdAHicY2BkYGBu+N/AEMOSxMDw/z8LIwNQBAUoAQB7ogTseJxjYWBgYKE1TiKsBgAzHgDrAAAAAAAAAKgA0gEUAU4BmAJSAwYDcgO8BCYEpgUABUoF2AZABwoHTAeqB+4IMAiECOYJxAoWCtALcgvSDEIMWgyeDOgNNA2IAAB4nGNgZGBgUGJYxcDFAAJMQMwFZv8H8xkAHWAB7QAAAHichZE9bsJAEIWfwZAElChKpDRpVikoEsn8lEipUKCnoAez5ke211ovSNQ5TY6QE+QI6Whzikh52EMDRbza2W/evpkdyQDusIeH8rvnLtnDJbOSK7jAo3CV+pOwT34WrqGJnnCd+qtwAy94E26yY8YOnn/FrIV3YQ+3+BCu4AafwlXqX8I++Vu4hgf8CNep/wo3MPGuhZtoeeHA6qnTczXbqVVo0sik7niO9WITT+2pPNE2X5lUdYPOURrpVNtjm3y76DkXqciaRA15q+PYqMyatQ5dsHQu67fbkehBaBIMYKExhWOcQ2GGHeMKIQxSREV0Z/mY7gU2iFlp/3VP6LbIqR9yhS4CdM5cI7rSwnk6TY4tX+tRdXQrbsuahDSUWs1JYrLiDzzcramE1AMsi6oMfbS5ohN/UMyQ/AHYk29XeJxtT8lSwzAMzStNnJay72uhnPVRjq1OPTiRx3Fa+HvsgSO6SE96y6iaVb+1rP6vDWY4whw1Gii0WGCJY6xwglOc4RwXuMQVrnGDW9zhHg94xBOe8YJXrPGGd2zwUbU0Tt1WYq9oK95yXP11ksDDkrS1ZHbOW0XjwSWzm1PSnaJuSkmGhtwQprTIFDafnXw1FLV1UueWWNEw9R1HRVPwom2m6dHobN7QGLThhox4iXVB2Ut7jmlOUQ4tWbd3tkhH9mxyQop6GLdlw9YlKRdfGHW+MNdkc2CeXZ9jbdYUZCR8K3J9kOKbX2kpRN47PtTUy56r6ge3iFdEAAAA) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-group:before{content:"\\eb77"}.icon-add-child:before{content:"\\e789"}.icon-switch:before{content:"\\e77c"}.icon-tab:before{content:"\\e77b"}.icon-button:before{content:"\\e77e"}.icon-input:before{content:"\\e77f"}.icon-checkbox:before{content:"\\e780"}.icon-radio:before{content:"\\e781"}.icon-rate:before{content:"\\e782"}.icon-number:before{content:"\\e783"}.icon-upload:before{content:"\\e784"}.icon-cascader:before{content:"\\e785"}.icon-space:before{content:"\\e786"}.icon-color:before{content:"\\e787"}.icon-span:before{content:"\\e788"}.icon-alert:before{content:"\\e78a"}.icon-row:before{content:"\\e78b"}.icon-divider:before{content:"\\e78d"}.icon-select:before{content:"\\e78e"}.icon-transfer:before{content:"\\e78f"}.icon-editor:before{content:"\\e790"}.icon-slider:before{content:"\\e791"}.icon-tree:before{content:"\\e792"}.icon-date:before{content:"\\e793"}.icon-time:before{content:"\\e794"}.icon-delete:before{content:"\\e770"}.icon-copy:before{content:"\\e771"}.icon-import:before{content:"\\e773"}.icon-add:before{content:"\\e774"}.icon-preview:before{content:"\\e776"}.icon-move:before{content:"\\e777"}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as fn, openBlock as et, createElementBlock as Bt, createElementVNode as rt, markRaw as fd, computed as ao, unref as dd, isRef as Vv, ref as _i, resolveComponent as Qe, TransitionGroup as Yv, h as ea, nextTick as Fr, toRefs as Ul, getCurrentInstance as kv, reactive as rl, provide as Df, toRef as li, watch as il, createBlock as An, normalizeStyle as Qv, withCtx as ze, createVNode as Le, Fragment as cd, renderList as vd, toDisplayString as Ot, normalizeClass as Ko, renderSlot as pd, createTextVNode as xn, createCommentVNode as un, withDirectives as Gi, vShow as Ki, inject as Gv, withModifiers as Kv, pushScopeId as xs, popScopeId as bs, mergeProps as Xv } from "vue";
import hd from "@form-create/element-ui";
function Mf({ t: u }) {
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
const Nn = (u, y) => {
  const l = u.__vccOpts || u;
  for (const [o, t] of y)
    l[o] = t;
  return l;
}, Jv = fn({
  name: "IconRefresh"
}), Zv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, qv = /* @__PURE__ */ rt("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), _v = [
  qv
];
function ep(u, y, l, o, t, s) {
  return et(), Bt("svg", Zv, _v);
}
const tp = /* @__PURE__ */ Nn(Jv, [["render", ep]]);
function si({ t: u }) {
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
        validate(y) {
          return Array.isArray(y) ? y.length ? !y.some(({ rule: l }) => !Array.isArray(l)) : !0 : !1;
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
            click({ $f: y }) {
              const l = y.activeRule;
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
            icon: fd(tp)
          },
          inject: !0,
          on: {
            click({ $f: y }) {
              const l = y.activeRule;
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
function Rf() {
  return [
    {
      type: "validate",
      field: "validate",
      value: []
    }
  ];
}
function Pf() {
  return [
    {
      type: "event",
      field: "event",
      value: []
    }
  ];
}
function Xi(u, y, l) {
  u[y] = l;
}
const St = {
  type(u, y) {
    return Object.prototype.toString.call(u) === "[object " + y + "]";
  },
  Undef(u) {
    return u == null;
  },
  Element(u) {
    return typeof u == "object" && u !== null && u.nodeType === 1 && !St.Object(u);
  },
  trueArray(u) {
    return Array.isArray(u) && u.length > 0;
  },
  Function(u) {
    const y = this.getType(u);
    return y === "Function" || y === "AsyncFunction";
  },
  getType(u) {
    const y = Object.prototype.toString.call(u);
    return /^\[object (.*)\]$/.exec(y)[1];
  },
  empty(u) {
    return u == null || Array.isArray(u) && Array.isArray(u) && !u.length ? !0 : typeof u == "string" && !u;
  }
};
["Date", "Object", "String", "Boolean", "Array", "Number"].forEach((u) => {
  St[u] = function(y) {
    return St.type(y, u);
  };
});
function md(u, y) {
  return {}.hasOwnProperty.call(u, y);
}
function gd(u, y = {}, l) {
  let o = !1;
  for (let t in y)
    if (Object.prototype.hasOwnProperty.call(y, t)) {
      let s = y[t];
      if ((o = Array.isArray(s)) || St.Object(s)) {
        let f = u[t] === void 0;
        if (o)
          o = !1, f && Xi(u, t, []);
        else if (s._clone && l !== void 0)
          if (l)
            s = s.getRule(), f && Xi(u, t, {});
          else {
            Xi(u, t, s._clone());
            continue;
          }
        else
          f && Xi(u, t, {});
        u[t] = gd(u[t], s, l);
      } else
        Xi(u, t, s), St.Undef(s) || (St.Undef(s.__json) || (u[t].__json = s.__json), St.Undef(s.__origin) || (u[t].__origin = s.__origin));
    }
  return l !== void 0 && Array.isArray(u) ? u.filter((t) => !t || !t.__ctrl) : u;
}
function Jn(u) {
  return gd({}, { value: u }).value;
}
function np(u) {
  const y = u.replace(/(-[a-z])/g, function(l) {
    return l.replace("-", "").toLocaleUpperCase();
  });
  return zl(y);
}
function zl(u) {
  return u.replace(u[0], u[0].toLowerCase());
}
let rp = 0;
function yt() {
  return "F" + Math.random().toString(36).substr(3, 3) + Number(`${Date.now()}${++rp}`).toString(36);
}
function ip(u, y, l) {
  return `[form-create ${u}]: ${y}` + (l ? `

rule: ` + JSON.stringify(l.getRule ? l.getRule() : l) : "");
}
function op(u, y) {
  console.error(ip("err", u, y));
}
const If = "[[FORM-CREATE-PREFIX-", Lf = "-FORM-CREATE-SUFFIX]]", Nf = "$FN:", Ff = "$FNX:", jo = "function";
function Of(u) {
  return new Function("return " + u)();
}
function ap(u, y) {
  if (u && St.String(u) && u.length > 4) {
    let l = u.trim(), o = !1;
    try {
      if (l.indexOf(Lf) > 0 && l.indexOf(If) === 0)
        l = l.replace(Lf, "").replace(If, ""), o = !0;
      else if (l.indexOf(Nf) === 0)
        l = l.replace(Nf, ""), o = !0;
      else {
        if (l.indexOf(Ff) === 0)
          return l = Of("function($inject){" + l.replace(Ff, "") + "}"), l.__json = u, l.__inject = !0, l;
        !y && l.indexOf(jo) === 0 && l !== jo && (o = !0);
      }
      if (!o)
        return u;
      const t = Of(l.indexOf(jo) === -1 && l.indexOf("(") !== 0 ? jo + " " + l : l);
      return t.__json = u, t;
    } catch (t) {
      op(`\u89E3\u6790\u5931\u8D25:${l}

err: ${t}`);
      return;
    }
  }
  return u;
}
const lp = {
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
  emit: {
    type: "\u5B57\u6BB5\u7C7B\u578B",
    typePlaceholder: "\u8BF7\u9009\u62E9",
    eventName: "\u4E8B\u4EF6\u540D",
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
    action: "\u5B57\u5178\u7C7B\u578B",
    actionRequired: "\u8BF7\u586B\u5199\u5B57\u5178\u7C7B\u578B",
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
      validate: "\u9A8C\u8BC1\u914D\u7F6E",
      emit: "\u54CD\u5E94\u4E8B\u4EF6"
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
      fetch: "\u5B57\u5178\u6570\u636E",
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
function hi(u, y, l) {
  const o = [
    { label: u("props.optionsType.fetch"), value: 1 }
  ], t = [
    {
      value: 1,
      rule: [
        {
          type: "Fetch",
          field: "formCreateOptions",
          props: {
            to: y
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
        field: "formCreate" + ta(y).replace(".", ">"),
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
function ta(u) {
  return u.replace(u[0], u[0].toLocaleUpperCase());
}
const eo = function(u) {
  const y = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(u));
  return y && Bf[y[1].toLowerCase()] ? Bf[y[1].toLowerCase()](u) : u;
}, Bf = {
  object: function(u) {
    var y = [];
    for (var l in u)
      !md(u, l) || y.push(
        eo(l) + ": " + (u[l] != null ? eo(u[l]) : "null")
      );
    return `{
 ` + y.join(`,
 `) + `
}`;
  },
  function: function(u) {
    u = "" + u;
    var y = /^ *([\w]+) *\(/.exec(u);
    return y && y[1] !== "function" ? "function " + u : u;
  },
  array: function(u) {
    for (var y = 0, l = []; y < u.length; y++)
      l[y] = u[y] != null ? eo(u[y]) : "null";
    return "[" + l.join(", ") + "]";
  },
  string: function(u) {
    for (var y = u.split(""), l = 0; l < y.length; l++) {
      var o = y[l];
      o >= " " ? o === "\\" ? y[l] = "\\\\" : o === '"' && (y[l] = '\\"') : y[l] = o === `
` ? "\\n" : o === "\r" ? "\\r" : o === "	" ? "\\t" : o === "\b" ? "\\b" : o === "\f" ? "\\f" : (o = o.charCodeAt(), "\\u00" + (o > 15 ? 1 : 0) + o % 16);
    }
    return '"' + y.join("") + '"';
  }
}, yd = function(u) {
  if (u && typeof u == "object") {
    for (let y in u)
      if (Object.prototype.hasOwnProperty.call(u, y)) {
        let l = u[y];
        (Array.isArray(l) || St.Object(l)) && yd(l), St.String(l) && (u[y] = ap(l));
      }
  }
  return u;
};
function sp(u, y, l) {
  y = (y || "").split(".");
  let o = 0, t = y.length;
  for (; u != null && o < t; )
    u = u[y[o++]];
  return o && o === t && u !== void 0 ? u : l;
}
const up = (u) => (y, l) => fp(y, l, dd(u)), fp = (u, y, l) => sp(l, u, "").replace(
  /\{(\w+)\}/g,
  (o, t) => {
    var s;
    return `${(s = y == null ? void 0 : y[t]) != null ? s : `{${t}}`}`;
  }
), dp = (u) => {
  const y = ao(() => dd(u).name), l = ao(() => ta(np(y.value || ""))), o = Vv(u) ? u : _i(u);
  return {
    lang: y,
    name: l,
    locale: o,
    t: up(u)
  };
}, $l = (u) => dp(ao(() => u.value || lp)), Ze = (u, y, l) => l.map((o) => (o.field === "formCreate$required" ? o.title = u("props.required") || o.title : o.field && o.field !== "_optionType" && (o.title = u("components." + y + "." + o.field) || o.title), o)), cp = "\u5355\u9009\u6846", ol = "radio", Wl = {
  icon: "icon-radio",
  label: cp,
  name: ol,
  rule({ t: u }) {
    const y = u("props.option");
    return {
      type: ol,
      field: yt(),
      title: u("components.radio.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: y + l,
        value: l
      }))
    };
  },
  props(u, { t: y }) {
    return Ze(y, ol + ".props", [
      Kt(),
      hi(y, "options"),
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
}, vp = "\u591A\u9009\u6846", al = "checkbox", jl = {
  icon: "icon-checkbox",
  label: vp,
  name: al,
  rule({ t: u }) {
    const y = u("props.option");
    return {
      type: al,
      field: yt(),
      title: u("components.checkbox.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: y + l,
        value: l
      }))
    };
  },
  props(u, { t: y }) {
    return Ze(y, al + ".props", [
      Kt(),
      hi(y, "options"),
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
}, pp = "\u8F93\u5165\u6846", ll = "input", Vl = {
  icon: "icon-input",
  label: pp,
  name: ll,
  rule({ t: u }) {
    return {
      type: ll,
      field: yt(),
      title: u("components.input.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, ll + ".props", [Kt(), {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [
        { label: "text", value: "text" },
        { label: "textarea", value: "textarea" },
        { label: "number", value: "number" },
        { label: "password", value: "password" }
      ]
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
      info: y("components.input.props.rowsInfo"),
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
}, hp = "\u8BA1\u6570\u5668", sl = "inputNumber", Yl = {
  icon: "icon-number",
  label: hp,
  name: sl,
  rule({ t: u }) {
    return {
      type: sl,
      field: yt(),
      title: u("components.inputNumber.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, sl + ".props", [Kt(), {
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
}, mp = "\u9009\u62E9\u5668", ul = "select", kl = {
  icon: "icon-select",
  label: mp,
  name: ul,
  rule({ t: u }) {
    const y = u("props.option");
    return {
      type: ul,
      field: yt(),
      title: u("components.select.name"),
      info: "",
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: y + l,
        value: l
      }))
    };
  },
  watch: {
    multiple({ rule: u }) {
      u.key = yt();
    }
  },
  props(u, { t: y }) {
    return Ze(y, ul + ".props", [
      Kt(),
      hi(y, "options"),
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
}, gp = "\u5F00\u5173", fl = "switch", Ql = {
  icon: "icon-switch",
  label: gp,
  name: fl,
  rule({ t: u }) {
    return {
      type: fl,
      field: yt(),
      title: u("components.switch.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, fl + ".props", [Kt(), {
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
}, yp = "\u6ED1\u5757", dl = "slider", Gl = {
  icon: "icon-slider",
  label: yp,
  name: dl,
  rule({ t: u }) {
    return {
      type: dl,
      field: yt(),
      title: u("components.slider.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, dl + ".props", [Kt(), {
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
}, Ap = "\u65F6\u95F4\u9009\u62E9\u5668", cl = "timePicker", Kl = {
  icon: "icon-time",
  label: Ap,
  name: cl,
  rule({ t: u }) {
    return {
      type: cl,
      field: yt(),
      title: u("components.timePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, cl + ".props", [Kt(), {
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
}, xp = "\u65E5\u671F\u9009\u62E9\u5668", vl = "datePicker", Xl = {
  icon: "icon-date",
  label: xp,
  name: vl,
  rule({ t: u }) {
    return {
      type: vl,
      field: yt(),
      title: u("components.datePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, vl + ".props", [Kt(), {
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
}, bp = "\u8BC4\u5206", pl = "rate", Jl = {
  icon: "icon-rate",
  label: bp,
  name: pl,
  rule({ t: u }) {
    return {
      type: pl,
      field: yt(),
      title: u("components.rate.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, pl + ".props", [
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
      field: yt(),
      title: u("components.colorPicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, hl + ".props", [Kt(), {
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
}, Ep = "\u6805\u683C\u5E03\u5C40", Hf = "row", ql = {
  icon: "icon-row",
  label: Ep,
  name: Hf,
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
  props(u, { t: y }) {
    return Ze(y, Hf + ".props", [{
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
}, ml = "col", Uf = {
  name: ml,
  label: "\u683C\u5B50",
  drag: !0,
  dragBtn: !1,
  inside: !0,
  mask: !1,
  rule() {
    return {
      type: ml,
      props: { span: 12 },
      fullWidth: !0,
      children: []
    };
  },
  props(u, { t: y }) {
    return Ze(y, ml + ".props", [
      { type: "slider", field: "span", title: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570", value: 12, props: { min: 0, max: 24 } },
      { type: "slider", field: "offset", title: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "push", title: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "pull", title: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } }
    ]);
  }
}, Cp = "\u6807\u7B7E\u9875", zf = "tab-pane", $f = {
  label: Cp,
  name: zf,
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
  props(u, { t: y }) {
    return Ze(y, zf + ".props", [{ type: "input", field: "label", title: "\u9009\u9879\u5361\u6807\u9898" }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, { type: "input", field: "name", title: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D" }, {
      type: "switch",
      field: "lazy",
      title: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
    }]);
  }
}, Tp = "\u5206\u5272\u7EBF", gl = "divider", _l = {
  icon: "icon-divider",
  label: Tp,
  name: gl,
  rule() {
    return {
      type: gl,
      props: {},
      wrap: { show: !1 },
      native: !1,
      children: [""]
    };
  },
  props(u, { t: y }) {
    return Ze(y, gl + ".props", [{
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
}, wp = "\u7EA7\u8054\u9009\u62E9\u5668", Vo = "cascader", es = {
  icon: "icon-cascader",
  label: wp,
  name: Vo,
  rule({ t: u }) {
    const y = u("props.option");
    return {
      type: Vo,
      field: yt(),
      title: u("components.cascader.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        options: [1, 2].map((l) => ({
          label: y + l,
          value: l,
          children: []
        }))
      }
    };
  },
  props(u, { t: y }) {
    return Ze(y, Vo + ".props", [
      Kt(),
      hi(y, "props.options", !1),
      {
        type: "Object",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879",
        props: {
          rule: Ze(y, Vo + ".propsOpt", [{
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
}, Dp = "\u4E0A\u4F20", yl = "upload", ts = {
  icon: "icon-upload",
  label: Dp,
  name: yl,
  rule({ t: u }) {
    return {
      type: yl,
      field: yt(),
      title: u("components.upload.name"),
      info: "",
      $required: !1,
      props: {
        action: "",
        onSuccess(y, l) {
          l.url = y.data.url;
        }
      }
    };
  },
  props(u, { t: y }) {
    return Ze(y, yl + ".props", [Kt(), {
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
}, Mp = "\u7A7F\u68AD\u6846", Al = "transfer", Rp = () => {
  const u = [];
  for (let y = 1; y <= 15; y++)
    u.push({
      key: y,
      label: `\u5907\u9009\u9879 ${y}`,
      disabled: y % 4 === 0
    });
  return u;
}, ns = {
  icon: "icon-transfer",
  label: Mp,
  name: Al,
  rule({ t: u }) {
    return {
      type: Al,
      field: yt(),
      title: u("components.el-transfer.name"),
      info: "",
      $required: !1,
      props: {
        data: Rp()
      }
    };
  },
  props(u, { t: y }) {
    return Ze(y, Al + ".props", [{
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
}, Pp = "\u6811\u5F62\u63A7\u4EF6", xl = "tree", rs = {
  icon: "icon-tree",
  label: Pp,
  name: xl,
  rule({ t: u }) {
    const y = u("props.option");
    return {
      type: xl,
      field: yt(),
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
          label: y + l,
          id: l,
          children: []
        }))
      }
    };
  },
  props(u, { t: y }) {
    return Ze(y, xl + ".props", [
      Kt(),
      hi(y, "props.data", !1),
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
}, Ip = "\u63D0\u793A", bl = "alert", is = {
  icon: "icon-alert",
  label: Ip,
  name: bl,
  rule({ t: u }) {
    return {
      type: bl,
      props: {
        title: u("components.el-alert.name"),
        description: u("components.el-alert.description"),
        type: "success",
        effect: "dark"
      },
      children: []
    };
  },
  props(u, { t: y }) {
    return Ze(y, bl + ".props", [{ type: "input", field: "title", title: "\u6807\u9898" }, {
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
}, Lp = "\u6587\u5B57", Sl = "span", os = {
  icon: "icon-span",
  label: Lp,
  name: Sl,
  rule({ t: u }) {
    return {
      type: Sl,
      title: u("components.span.name"),
      native: !1,
      children: [u("components.span.name")]
    };
  },
  props(u, { t: y }) {
    return Ze(y, Sl + ".props", [
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
}, Np = "\u95F4\u8DDD", El = "div", as = {
  icon: "icon-space",
  label: Np,
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
  props(u, { t: y }) {
    return [
      {
        type: "object",
        field: "formCreateStyle",
        native: !0,
        props: {
          rule: Ze(y, El + ".props", [
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
}, Fp = "\u6807\u7B7E\u9875", Wf = "tab", ls = {
  icon: "icon-tab",
  label: Fp,
  name: Wf,
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
  props(u, { t: y }) {
    return Ze(y, Wf + ".props", [{
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
}, Op = "\u6309\u94AE", Cl = "button", ss = {
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
  props(u, { t: y }) {
    return Ze(y, Cl + ".props", [
      {
        type: "input",
        field: "formCreateChild",
        title: "\u5185\u5BB9"
      },
      {
        type: "input",
        field: "v-hasPermi",
        title: "\u6743\u9650"
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
      {
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
      },
      { type: "switch", field: "plain", title: "\u662F\u5426\u6734\u7D20\u6309\u94AE" },
      {
        type: "switch",
        field: "round",
        title: "\u662F\u5426\u5706\u89D2\u6309\u94AE"
      },
      { type: "switch", field: "circle", title: "\u662F\u5426\u5706\u5F62\u6309\u94AE" },
      {
        type: "switch",
        field: "loading",
        title: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001"
      },
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u72B6\u6001" },
      {
        type: "input",
        field: "icon",
        title: "\u56FE\u6807\u7C7B\u540D"
      }
    ]);
  }
}, Bp = "\u5BCC\u6587\u672C\u6846", Tl = "fc-editor", us = {
  icon: "icon-editor",
  label: Bp,
  name: Tl,
  rule({ t: u }) {
    return {
      type: Tl,
      field: yt(),
      title: u("components.fc-editor.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(u, { t: y }) {
    return Ze(y, Tl + ".props", [Kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }]);
  }
}, Hp = "\u5B50\u8868\u5355", jf = "group", fs = {
  icon: "icon-group",
  label: Hp,
  name: jf,
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
      field: yt(),
      title: u("components.group.name"),
      info: "",
      $required: !1,
      props: {},
      children: []
    };
  },
  props(u, { t: y }) {
    return Ze(y, jf + ".props", [
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
          label: y("components.group.props.modeOpts.group"),
          value: "group"
        }, { label: y("components.group.props.modeOpts.subform"), value: "subForm" }],
        value: "group"
      },
      { type: "switch", field: "button", title: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE", value: !0 },
      { type: "switch", field: "sortBtn", title: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE", value: !0 },
      { type: "inputNumber", field: "expand", title: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879" },
      { type: "inputNumber", field: "min", title: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879" },
      { type: "inputNumber", field: "max", title: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879" }
    ]);
  }
}, Up = "\u8868\u5355", Vf = "form", ds = {
  icon: "icon-form",
  label: Up,
  name: Vf,
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
  props(u, { t: y }) {
    return Ze(y, Vf + ".props", [
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
        field: ":model",
        title: "\u8868\u5355\u6570\u636E\u5BF9\u8C61",
        value: ""
      },
      {
        type: "input",
        field: "ref",
        title: "ref\u5BF9\u8C61",
        value: ""
      },
      {
        type: "input",
        field: ":rules",
        title: "\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u5BF9\u8C61",
        value: ""
      }
    ]);
  }
}, zp = "\u5185\u5BB9\u5757", Yf = "ContentWrap", cs = {
  icon: "icon-form",
  label: zp,
  name: Yf,
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
  props(u, { t: y }) {
    return Ze(y, Yf + ".props", []);
  }
}, $p = "\u5217\u8868", kf = "table", vs = {
  icon: "icon-form",
  label: $p,
  name: kf,
  mask: !1,
  rule() {
    return {
      type: "el-table",
      field: yt(),
      style: {
        width: "100%"
      },
      fullWidth: !0,
      children: [],
      column: [],
      menu: []
    };
  },
  props(u, { t: y }) {
    return Ze(y, kf + ".props", [
      {
        type: "TableColumnOptions",
        title: "\u5B57\u6BB5",
        field: "formCreateColumn",
        props: { defaultValue: [] }
      },
      {
        type: "TableMenuOptions",
        title: "\u83DC\u5355",
        field: "formCreateMenu",
        props: { defaultValue: [] }
      },
      { type: "input", field: ":columns", title: "\u5B57\u6BB5\u5217\u53D8\u91CF\u540D" },
      { type: "input", field: ":data", title: "\u7ED1\u5B9A\u6570\u636E" },
      { type: "input", field: ":page-data", title: "\u5206\u9875\u7ED1\u5B9A\u6570\u636E" },
      { type: "switch", field: "adaptive", title: "\u662F\u5426\u81EA\u9002\u5E94\u5206\u8FA8\u7387" },
      { type: "input", field: "save-key", title: "\u7F13\u5B58\u914D\u7F6E\u540D" },
      { type: "input", field: "height", title: "\u9AD8\u5EA6" },
      { type: "input", field: "max-height", title: "\u6700\u5927\u9AD8\u5EA6" },
      { type: "switch", field: "border", title: "\u662F\u5426\u81EA\u9002\u5E94\u5206\u8FA8\u7387" },
      { type: "switch", field: "highlight-current-row", title: "\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C" }
    ]);
  }
}, Wp = "\u5217\u8868\u5B57\u6BB5", Qf = "tableColumn", Gf = {
  icon: "icon-form",
  label: Wp,
  name: Qf,
  mask: !1,
  rule() {
    return {
      type: "el-table-column"
    };
  },
  props(u, { t: y }) {
    return Ze(y, Qf + ".props", []);
  }
}, pr = {
  [Wl.name]: Wl,
  [jl.name]: jl,
  [Vl.name]: Vl,
  [Yl.name]: Yl,
  [kl.name]: kl,
  [Ql.name]: Ql,
  [Gl.name]: Gl,
  [Kl.name]: Kl,
  [Xl.name]: Xl,
  [Jl.name]: Jl,
  [Zl.name]: Zl,
  [ql.name]: ql,
  [Uf.name]: Uf,
  [ls.name]: ls,
  [$f.name]: $f,
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
  [Gf.name]: Gf
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Kf(u, y) {
  var l = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(u);
    y && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(u, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function jn(u) {
  for (var y = 1; y < arguments.length; y++) {
    var l = arguments[y] != null ? arguments[y] : {};
    y % 2 ? Kf(Object(l), !0).forEach(function(o) {
      jp(u, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(l)) : Kf(Object(l)).forEach(function(o) {
      Object.defineProperty(u, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return u;
}
function Xo(u) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xo = function(y) {
    return typeof y;
  } : Xo = function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  }, Xo(u);
}
function jp(u, y, l) {
  return y in u ? Object.defineProperty(u, y, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[y] = l, u;
}
function qn() {
  return qn = Object.assign || function(u) {
    for (var y = 1; y < arguments.length; y++) {
      var l = arguments[y];
      for (var o in l)
        Object.prototype.hasOwnProperty.call(l, o) && (u[o] = l[o]);
    }
    return u;
  }, qn.apply(this, arguments);
}
function Vp(u, y) {
  if (u == null)
    return {};
  var l = {}, o = Object.keys(u), t, s;
  for (s = 0; s < o.length; s++)
    t = o[s], !(y.indexOf(t) >= 0) && (l[t] = u[t]);
  return l;
}
function Yp(u, y) {
  if (u == null)
    return {};
  var l = Vp(u, y), o, t;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(u);
    for (t = 0; t < s.length; t++)
      o = s[t], !(y.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, o) || (l[o] = u[o]));
  }
  return l;
}
var kp = "1.14.0";
function Zn(u) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(u);
}
var _n = Zn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), lo = Zn(/Edge/i), Xf = Zn(/firefox/i), to = Zn(/safari/i) && !Zn(/chrome/i) && !Zn(/android/i), Ad = Zn(/iP(ad|od|hone)/i), Qp = Zn(/chrome/i) && Zn(/android/i), xd = {
  capture: !1,
  passive: !1
};
function Je(u, y, l) {
  u.addEventListener(y, l, !_n && xd);
}
function ke(u, y, l) {
  u.removeEventListener(y, l, !_n && xd);
}
function na(u, y) {
  if (!!y) {
    if (y[0] === ">" && (y = y.substring(1)), u)
      try {
        if (u.matches)
          return u.matches(y);
        if (u.msMatchesSelector)
          return u.msMatchesSelector(y);
        if (u.webkitMatchesSelector)
          return u.webkitMatchesSelector(y);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Gp(u) {
  return u.host && u !== document && u.host.nodeType ? u.host : u.parentNode;
}
function $n(u, y, l, o) {
  if (u) {
    l = l || document;
    do {
      if (y != null && (y[0] === ">" ? u.parentNode === l && na(u, y) : na(u, y)) || o && u === l)
        return u;
      if (u === l)
        break;
    } while (u = Gp(u));
  }
  return null;
}
var Jf = /\s+/g;
function vn(u, y, l) {
  if (u && y)
    if (u.classList)
      u.classList[l ? "add" : "remove"](y);
    else {
      var o = (" " + u.className + " ").replace(Jf, " ").replace(" " + y + " ", " ");
      u.className = (o + (l ? " " + y : "")).replace(Jf, " ");
    }
}
function Ne(u, y, l) {
  var o = u && u.style;
  if (o) {
    if (l === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? l = document.defaultView.getComputedStyle(u, "") : u.currentStyle && (l = u.currentStyle), y === void 0 ? l : l[y];
    !(y in o) && y.indexOf("webkit") === -1 && (y = "-webkit-" + y), o[y] = l + (typeof l == "string" ? "" : "px");
  }
}
function vi(u, y) {
  var l = "";
  if (typeof u == "string")
    l = u;
  else
    do {
      var o = Ne(u, "transform");
      o && o !== "none" && (l = o + " " + l);
    } while (!y && (u = u.parentNode));
  var t = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return t && new t(l);
}
function bd(u, y, l) {
  if (u) {
    var o = u.getElementsByTagName(y), t = 0, s = o.length;
    if (l)
      for (; t < s; t++)
        l(o[t], t);
    return o;
  }
  return [];
}
function Wn() {
  var u = document.scrollingElement;
  return u || document.documentElement;
}
function Lt(u, y, l, o, t) {
  if (!(!u.getBoundingClientRect && u !== window)) {
    var s, f, d, c, m, E, A;
    if (u !== window && u.parentNode && u !== Wn() ? (s = u.getBoundingClientRect(), f = s.top, d = s.left, c = s.bottom, m = s.right, E = s.height, A = s.width) : (f = 0, d = 0, c = window.innerHeight, m = window.innerWidth, E = window.innerHeight, A = window.innerWidth), (y || l) && u !== window && (t = t || u.parentNode, !_n))
      do
        if (t && t.getBoundingClientRect && (Ne(t, "transform") !== "none" || l && Ne(t, "position") !== "static")) {
          var D = t.getBoundingClientRect();
          f -= D.top + parseInt(Ne(t, "border-top-width")), d -= D.left + parseInt(Ne(t, "border-left-width")), c = f + s.height, m = d + s.width;
          break;
        }
      while (t = t.parentNode);
    if (o && u !== window) {
      var C = vi(t || u), h = C && C.a, x = C && C.d;
      C && (f /= x, d /= h, A /= h, E /= x, c = f + E, m = d + A);
    }
    return {
      top: f,
      left: d,
      bottom: c,
      right: m,
      width: A,
      height: E
    };
  }
}
function Zf(u, y, l) {
  for (var o = gr(u, !0), t = Lt(u)[y]; o; ) {
    var s = Lt(o)[l], f = void 0;
    if (l === "top" || l === "left" ? f = t >= s : f = t <= s, !f)
      return o;
    if (o === Wn())
      break;
    o = gr(o, !1);
  }
  return !1;
}
function pi(u, y, l, o) {
  for (var t = 0, s = 0, f = u.children; s < f.length; ) {
    if (f[s].style.display !== "none" && f[s] !== Fe.ghost && (o || f[s] !== Fe.dragged) && $n(f[s], l.draggable, u, !1)) {
      if (t === y)
        return f[s];
      t++;
    }
    s++;
  }
  return null;
}
function Ss(u, y) {
  for (var l = u.lastElementChild; l && (l === Fe.ghost || Ne(l, "display") === "none" || y && !na(l, y)); )
    l = l.previousElementSibling;
  return l || null;
}
function yn(u, y) {
  var l = 0;
  if (!u || !u.parentNode)
    return -1;
  for (; u = u.previousElementSibling; )
    u.nodeName.toUpperCase() !== "TEMPLATE" && u !== Fe.clone && (!y || na(u, y)) && l++;
  return l;
}
function qf(u) {
  var y = 0, l = 0, o = Wn();
  if (u)
    do {
      var t = vi(u), s = t.a, f = t.d;
      y += u.scrollLeft * s, l += u.scrollTop * f;
    } while (u !== o && (u = u.parentNode));
  return [y, l];
}
function Kp(u, y) {
  for (var l in u)
    if (!!u.hasOwnProperty(l)) {
      for (var o in y)
        if (y.hasOwnProperty(o) && y[o] === u[l][o])
          return Number(l);
    }
  return -1;
}
function gr(u, y) {
  if (!u || !u.getBoundingClientRect)
    return Wn();
  var l = u, o = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var t = Ne(l);
      if (l.clientWidth < l.scrollWidth && (t.overflowX == "auto" || t.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (t.overflowY == "auto" || t.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body)
          return Wn();
        if (o || y)
          return l;
        o = !0;
      }
    }
  while (l = l.parentNode);
  return Wn();
}
function Xp(u, y) {
  if (u && y)
    for (var l in y)
      y.hasOwnProperty(l) && (u[l] = y[l]);
  return u;
}
function wl(u, y) {
  return Math.round(u.top) === Math.round(y.top) && Math.round(u.left) === Math.round(y.left) && Math.round(u.height) === Math.round(y.height) && Math.round(u.width) === Math.round(y.width);
}
var no;
function Sd(u, y) {
  return function() {
    if (!no) {
      var l = arguments, o = this;
      l.length === 1 ? u.call(o, l[0]) : u.apply(o, l), no = setTimeout(function() {
        no = void 0;
      }, y);
    }
  };
}
function Jp() {
  clearTimeout(no), no = void 0;
}
function Ed(u, y, l) {
  u.scrollLeft += y, u.scrollTop += l;
}
function Cd(u) {
  var y = window.Polymer, l = window.jQuery || window.Zepto;
  return y && y.dom ? y.dom(u).cloneNode(!0) : l ? l(u).clone(!0)[0] : u.cloneNode(!0);
}
var hn = "Sortable" + new Date().getTime();
function Zp() {
  var u = [], y;
  return {
    captureAnimationState: function() {
      if (u = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(t) {
          if (!(Ne(t, "display") === "none" || t === Fe.ghost)) {
            u.push({
              target: t,
              rect: Lt(t)
            });
            var s = jn({}, u[u.length - 1].rect);
            if (t.thisAnimationDuration) {
              var f = vi(t, !0);
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
      u.splice(Kp(u, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var t = this;
      if (!this.options.animation) {
        clearTimeout(y), typeof o == "function" && o();
        return;
      }
      var s = !1, f = 0;
      u.forEach(function(d) {
        var c = 0, m = d.target, E = m.fromRect, A = Lt(m), D = m.prevFromRect, C = m.prevToRect, h = d.rect, x = vi(m, !0);
        x && (A.top -= x.f, A.left -= x.e), m.toRect = A, m.thisAnimationDuration && wl(D, A) && !wl(E, A) && (h.top - A.top) / (h.left - A.left) === (E.top - A.top) / (E.left - A.left) && (c = _p(h, D, C, t.options)), wl(A, E) || (m.prevFromRect = E, m.prevToRect = A, c || (c = t.options.animation), t.animate(m, h, A, c)), c && (s = !0, f = Math.max(f, c), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, c), m.thisAnimationDuration = c);
      }), clearTimeout(y), s ? y = setTimeout(function() {
        typeof o == "function" && o();
      }, f) : typeof o == "function" && o(), u = [];
    },
    animate: function(o, t, s, f) {
      if (f) {
        Ne(o, "transition", ""), Ne(o, "transform", "");
        var d = vi(this.el), c = d && d.a, m = d && d.d, E = (t.left - s.left) / (c || 1), A = (t.top - s.top) / (m || 1);
        o.animatingX = !!E, o.animatingY = !!A, Ne(o, "transform", "translate3d(" + E + "px," + A + "px,0)"), this.forRepaintDummy = qp(o), Ne(o, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ne(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Ne(o, "transition", ""), Ne(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, f);
      }
    }
  };
}
function qp(u) {
  return u.offsetWidth;
}
function _p(u, y, l, o) {
  return Math.sqrt(Math.pow(y.top - u.top, 2) + Math.pow(y.left - u.left, 2)) / Math.sqrt(Math.pow(y.top - l.top, 2) + Math.pow(y.left - l.left, 2)) * o.animation;
}
var ui = [], Dl = {
  initializeByDefault: !0
}, so = {
  mount: function(y) {
    for (var l in Dl)
      Dl.hasOwnProperty(l) && !(l in y) && (y[l] = Dl[l]);
    ui.forEach(function(o) {
      if (o.pluginName === y.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(y.pluginName, " more than once");
    }), ui.push(y);
  },
  pluginEvent: function(y, l, o) {
    var t = this;
    this.eventCanceled = !1, o.cancel = function() {
      t.eventCanceled = !0;
    };
    var s = y + "Global";
    ui.forEach(function(f) {
      !l[f.pluginName] || (l[f.pluginName][s] && l[f.pluginName][s](jn({
        sortable: l
      }, o)), l.options[f.pluginName] && l[f.pluginName][y] && l[f.pluginName][y](jn({
        sortable: l
      }, o)));
    });
  },
  initializePlugins: function(y, l, o, t) {
    ui.forEach(function(d) {
      var c = d.pluginName;
      if (!(!y.options[c] && !d.initializeByDefault)) {
        var m = new d(y, l, y.options);
        m.sortable = y, m.options = y.options, y[c] = m, qn(o, m.defaults);
      }
    });
    for (var s in y.options)
      if (!!y.options.hasOwnProperty(s)) {
        var f = this.modifyOption(y, s, y.options[s]);
        typeof f < "u" && (y.options[s] = f);
      }
  },
  getEventProperties: function(y, l) {
    var o = {};
    return ui.forEach(function(t) {
      typeof t.eventProperties == "function" && qn(o, t.eventProperties.call(l[t.pluginName], y));
    }), o;
  },
  modifyOption: function(y, l, o) {
    var t;
    return ui.forEach(function(s) {
      !y[s.pluginName] || s.optionListeners && typeof s.optionListeners[l] == "function" && (t = s.optionListeners[l].call(y[s.pluginName], o));
    }), t;
  }
};
function eh(u) {
  var y = u.sortable, l = u.rootEl, o = u.name, t = u.targetEl, s = u.cloneEl, f = u.toEl, d = u.fromEl, c = u.oldIndex, m = u.newIndex, E = u.oldDraggableIndex, A = u.newDraggableIndex, D = u.originalEvent, C = u.putSortable, h = u.extraEventProperties;
  if (y = y || l && l[hn], !!y) {
    var x, S = y.options, g = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !_n && !lo ? x = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(o, !0, !0)), x.to = f || l, x.from = d || l, x.item = t || l, x.clone = s, x.oldIndex = c, x.newIndex = m, x.oldDraggableIndex = E, x.newDraggableIndex = A, x.originalEvent = D, x.pullMode = C ? C.lastPutMode : void 0;
    var b = jn(jn({}, h), so.getEventProperties(o, y));
    for (var w in b)
      x[w] = b[w];
    l && l.dispatchEvent(x), S[g] && S[g].call(y, x);
  }
}
var th = ["evt"], sn = function(y, l) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = o.evt, s = Yp(o, th);
  so.pluginEvent.bind(Fe)(y, l, jn({
    dragEl: Ae,
    parentEl: pt,
    ghostEl: Ue,
    rootEl: at,
    nextEl: Nr,
    lastDownEl: Jo,
    cloneEl: ht,
    cloneHidden: mr,
    dragStarted: Ji,
    putSortable: jt,
    activeSortable: Fe.active,
    originalEvent: t,
    oldIndex: ci,
    oldDraggableIndex: ro,
    newIndex: pn,
    newDraggableIndex: hr,
    hideGhostForTarget: Md,
    unhideGhostForTarget: Rd,
    cloneNowHidden: function() {
      mr = !0;
    },
    cloneNowShown: function() {
      mr = !1;
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
  eh(jn({
    putSortable: jt,
    cloneEl: ht,
    targetEl: Ae,
    rootEl: at,
    oldIndex: ci,
    oldDraggableIndex: ro,
    newIndex: pn,
    newDraggableIndex: hr
  }, u));
}
var Ae, pt, Ue, at, Nr, Jo, ht, mr, ci, pn, ro, hr, Yo, jt, di = !1, ra = !1, ia = [], Ir, Ln, Ml, Rl, _f, ed, Ji, fi, io, oo = !1, ko = !1, Zo, Gt, Pl = [], ps = !1, oa = [], la = typeof document < "u", Qo = Ad, td = lo || _n ? "cssFloat" : "float", nh = la && !Qp && !Ad && "draggable" in document.createElement("div"), Td = function() {
  if (!!la) {
    if (_n)
      return !1;
    var u = document.createElement("x");
    return u.style.cssText = "pointer-events:auto", u.style.pointerEvents === "auto";
  }
}(), wd = function(y, l) {
  var o = Ne(y), t = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), s = pi(y, 0, l), f = pi(y, 1, l), d = s && Ne(s), c = f && Ne(f), m = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Lt(s).width, E = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Lt(f).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && d.float && d.float !== "none") {
    var A = d.float === "left" ? "left" : "right";
    return f && (c.clear === "both" || c.clear === A) ? "vertical" : "horizontal";
  }
  return s && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || m >= t && o[td] === "none" || f && o[td] === "none" && m + E > t) ? "vertical" : "horizontal";
}, rh = function(y, l, o) {
  var t = o ? y.left : y.top, s = o ? y.right : y.bottom, f = o ? y.width : y.height, d = o ? l.left : l.top, c = o ? l.right : l.bottom, m = o ? l.width : l.height;
  return t === d || s === c || t + f / 2 === d + m / 2;
}, ih = function(y, l) {
  var o;
  return ia.some(function(t) {
    var s = t[hn].options.emptyInsertThreshold;
    if (!(!s || Ss(t))) {
      var f = Lt(t), d = y >= f.left - s && y <= f.right + s, c = l >= f.top - s && l <= f.bottom + s;
      if (d && c)
        return o = t;
    }
  }), o;
}, Dd = function(y) {
  function l(s, f) {
    return function(d, c, m, E) {
      var A = d.options.group.name && c.options.group.name && d.options.group.name === c.options.group.name;
      if (s == null && (f || A))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (f && s === "clone")
        return s;
      if (typeof s == "function")
        return l(s(d, c, m, E), f)(d, c, m, E);
      var D = (f ? d : c).options.group.name;
      return s === !0 || typeof s == "string" && s === D || s.join && s.indexOf(D) > -1;
    };
  }
  var o = {}, t = y.group;
  (!t || Xo(t) != "object") && (t = {
    name: t
  }), o.name = t.name, o.checkPull = l(t.pull, !0), o.checkPut = l(t.put), o.revertClone = t.revertClone, y.group = o;
}, Md = function() {
  !Td && Ue && Ne(Ue, "display", "none");
}, Rd = function() {
  !Td && Ue && Ne(Ue, "display", "");
};
la && document.addEventListener("click", function(u) {
  if (ra)
    return u.preventDefault(), u.stopPropagation && u.stopPropagation(), u.stopImmediatePropagation && u.stopImmediatePropagation(), ra = !1, !1;
}, !0);
var Lr = function(y) {
  if (Ae) {
    y = y.touches ? y.touches[0] : y;
    var l = ih(y.clientX, y.clientY);
    if (l) {
      var o = {};
      for (var t in y)
        y.hasOwnProperty(t) && (o[t] = y[t]);
      o.target = o.rootEl = l, o.preventDefault = void 0, o.stopPropagation = void 0, l[hn]._onDragOver(o);
    }
  }
}, oh = function(y) {
  Ae && Ae.parentNode[hn]._isOutsideThisEl(y.target);
};
function Fe(u, y) {
  if (!(u && u.nodeType && u.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(u));
  this.el = u, this.options = y = qn({}, y), u[hn] = this;
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
      return wd(u, this.options);
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
    supportPointer: Fe.supportPointer !== !1 && "PointerEvent" in window && !to,
    emptyInsertThreshold: 5
  };
  so.initializePlugins(this, u, l);
  for (var o in l)
    !(o in y) && (y[o] = l[o]);
  Dd(y);
  for (var t in this)
    t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  this.nativeDraggable = y.forceFallback ? !1 : nh, this.nativeDraggable && (this.options.touchStartThreshold = 1), y.supportPointer ? Je(u, "pointerdown", this._onTapStart) : (Je(u, "mousedown", this._onTapStart), Je(u, "touchstart", this._onTapStart)), this.nativeDraggable && (Je(u, "dragover", this), Je(u, "dragenter", this)), ia.push(this.el), y.store && y.store.get && this.sort(y.store.get(this) || []), qn(this, Zp());
}
Fe.prototype = {
  constructor: Fe,
  _isOutsideThisEl: function(y) {
    !this.el.contains(y) && y !== this.el && (fi = null);
  },
  _getDirection: function(y, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, y, l, Ae) : this.options.direction;
  },
  _onTapStart: function(y) {
    if (!!y.cancelable) {
      var l = this, o = this.el, t = this.options, s = t.preventOnFilter, f = y.type, d = y.touches && y.touches[0] || y.pointerType && y.pointerType === "touch" && y, c = (d || y).target, m = y.target.shadowRoot && (y.path && y.path[0] || y.composedPath && y.composedPath()[0]) || c, E = t.filter;
      if (vh(o), !Ae && !(/mousedown|pointerdown/.test(f) && y.button !== 0 || t.disabled) && !m.isContentEditable && !(!this.nativeDraggable && to && c && c.tagName.toUpperCase() === "SELECT") && (c = $n(c, t.draggable, o, !1), !(c && c.animated) && Jo !== c)) {
        if (ci = yn(c), ro = yn(c, t.draggable), typeof E == "function") {
          if (E.call(this, y, c, this)) {
            on({
              sortable: l,
              rootEl: m,
              name: "filter",
              targetEl: c,
              toEl: o,
              fromEl: o
            }), sn("filter", l, {
              evt: y
            }), s && y.cancelable && y.preventDefault();
            return;
          }
        } else if (E && (E = E.split(",").some(function(A) {
          if (A = $n(m, A.trim(), o, !1), A)
            return on({
              sortable: l,
              rootEl: A,
              name: "filter",
              targetEl: c,
              fromEl: o,
              toEl: o
            }), sn("filter", l, {
              evt: y
            }), !0;
        }), E)) {
          s && y.cancelable && y.preventDefault();
          return;
        }
        t.handle && !$n(m, t.handle, o, !1) || this._prepareDragStart(y, d, c);
      }
    }
  },
  _prepareDragStart: function(y, l, o) {
    var t = this, s = t.el, f = t.options, d = s.ownerDocument, c;
    if (o && !Ae && o.parentNode === s) {
      var m = Lt(o);
      if (at = s, Ae = o, pt = Ae.parentNode, Nr = Ae.nextSibling, Jo = o, Yo = f.group, Fe.dragged = Ae, Ir = {
        target: Ae,
        clientX: (l || y).clientX,
        clientY: (l || y).clientY
      }, _f = Ir.clientX - m.left, ed = Ir.clientY - m.top, this._lastX = (l || y).clientX, this._lastY = (l || y).clientY, Ae.style["will-change"] = "all", c = function() {
        if (sn("delayEnded", t, {
          evt: y
        }), Fe.eventCanceled) {
          t._onDrop();
          return;
        }
        t._disableDelayedDragEvents(), !Xf && t.nativeDraggable && (Ae.draggable = !0), t._triggerDragStart(y, l), on({
          sortable: t,
          name: "choose",
          originalEvent: y
        }), vn(Ae, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(E) {
        bd(Ae, E.trim(), Il);
      }), Je(d, "dragover", Lr), Je(d, "mousemove", Lr), Je(d, "touchmove", Lr), Je(d, "mouseup", t._onDrop), Je(d, "touchend", t._onDrop), Je(d, "touchcancel", t._onDrop), Xf && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ae.draggable = !0), sn("delayStart", this, {
        evt: y
      }), f.delay && (!f.delayOnTouchOnly || l) && (!this.nativeDraggable || !(lo || _n))) {
        if (Fe.eventCanceled) {
          this._onDrop();
          return;
        }
        Je(d, "mouseup", t._disableDelayedDrag), Je(d, "touchend", t._disableDelayedDrag), Je(d, "touchcancel", t._disableDelayedDrag), Je(d, "mousemove", t._delayedDragTouchMoveHandler), Je(d, "touchmove", t._delayedDragTouchMoveHandler), f.supportPointer && Je(d, "pointermove", t._delayedDragTouchMoveHandler), t._dragStartTimer = setTimeout(c, f.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(y) {
    var l = y.touches ? y.touches[0] : y;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Ae && Il(Ae), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var y = this.el.ownerDocument;
    ke(y, "mouseup", this._disableDelayedDrag), ke(y, "touchend", this._disableDelayedDrag), ke(y, "touchcancel", this._disableDelayedDrag), ke(y, "mousemove", this._delayedDragTouchMoveHandler), ke(y, "touchmove", this._delayedDragTouchMoveHandler), ke(y, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(y, l) {
    l = l || y.pointerType == "touch" && y, !this.nativeDraggable || l ? this.options.supportPointer ? Je(document, "pointermove", this._onTouchMove) : l ? Je(document, "touchmove", this._onTouchMove) : Je(document, "mousemove", this._onTouchMove) : (Je(Ae, "dragend", this), Je(at, "dragstart", this._onDragStart));
    try {
      document.selection ? qo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(y, l) {
    if (di = !1, at && Ae) {
      sn("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && Je(document, "dragover", oh);
      var o = this.options;
      !y && vn(Ae, o.dragClass, !1), vn(Ae, o.ghostClass, !0), Fe.active = this, y && this._appendGhost(), on({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ln) {
      this._lastX = Ln.clientX, this._lastY = Ln.clientY, Md();
      for (var y = document.elementFromPoint(Ln.clientX, Ln.clientY), l = y; y && y.shadowRoot && (y = y.shadowRoot.elementFromPoint(Ln.clientX, Ln.clientY), y !== l); )
        l = y;
      if (Ae.parentNode[hn]._isOutsideThisEl(y), l)
        do {
          if (l[hn]) {
            var o = void 0;
            if (o = l[hn]._onDragOver({
              clientX: Ln.clientX,
              clientY: Ln.clientY,
              target: y,
              rootEl: l
            }), o && !this.options.dragoverBubble)
              break;
          }
          y = l;
        } while (l = l.parentNode);
      Rd();
    }
  },
  _onTouchMove: function(y) {
    if (Ir) {
      var l = this.options, o = l.fallbackTolerance, t = l.fallbackOffset, s = y.touches ? y.touches[0] : y, f = Ue && vi(Ue, !0), d = Ue && f && f.a, c = Ue && f && f.d, m = Qo && Gt && qf(Gt), E = (s.clientX - Ir.clientX + t.x) / (d || 1) + (m ? m[0] - Pl[0] : 0) / (d || 1), A = (s.clientY - Ir.clientY + t.y) / (c || 1) + (m ? m[1] - Pl[1] : 0) / (c || 1);
      if (!Fe.active && !di) {
        if (o && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < o)
          return;
        this._onDragStart(y, !0);
      }
      if (Ue) {
        f ? (f.e += E - (Ml || 0), f.f += A - (Rl || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: E,
          f: A
        };
        var D = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Ne(Ue, "webkitTransform", D), Ne(Ue, "mozTransform", D), Ne(Ue, "msTransform", D), Ne(Ue, "transform", D), Ml = E, Rl = A, Ln = s;
      }
      y.cancelable && y.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ue) {
      var y = this.options.fallbackOnBody ? document.body : at, l = Lt(Ae, !0, Qo, !0, y), o = this.options;
      if (Qo) {
        for (Gt = y; Ne(Gt, "position") === "static" && Ne(Gt, "transform") === "none" && Gt !== document; )
          Gt = Gt.parentNode;
        Gt !== document.body && Gt !== document.documentElement ? (Gt === document && (Gt = Wn()), l.top += Gt.scrollTop, l.left += Gt.scrollLeft) : Gt = Wn(), Pl = qf(Gt);
      }
      Ue = Ae.cloneNode(!0), vn(Ue, o.ghostClass, !1), vn(Ue, o.fallbackClass, !0), vn(Ue, o.dragClass, !0), Ne(Ue, "transition", ""), Ne(Ue, "transform", ""), Ne(Ue, "box-sizing", "border-box"), Ne(Ue, "margin", 0), Ne(Ue, "top", l.top), Ne(Ue, "left", l.left), Ne(Ue, "width", l.width), Ne(Ue, "height", l.height), Ne(Ue, "opacity", "0.8"), Ne(Ue, "position", Qo ? "absolute" : "fixed"), Ne(Ue, "zIndex", "100000"), Ne(Ue, "pointerEvents", "none"), Fe.ghost = Ue, y.appendChild(Ue), Ne(Ue, "transform-origin", _f / parseInt(Ue.style.width) * 100 + "% " + ed / parseInt(Ue.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(y, l) {
    var o = this, t = y.dataTransfer, s = o.options;
    if (sn("dragStart", this, {
      evt: y
    }), Fe.eventCanceled) {
      this._onDrop();
      return;
    }
    sn("setupClone", this), Fe.eventCanceled || (ht = Cd(Ae), ht.draggable = !1, ht.style["will-change"] = "", this._hideClone(), vn(ht, this.options.chosenClass, !1), Fe.clone = ht), o.cloneId = qo(function() {
      sn("clone", o), !Fe.eventCanceled && (o.options.removeCloneOnHide || at.insertBefore(ht, Ae), o._hideClone(), on({
        sortable: o,
        name: "clone"
      }));
    }), !l && vn(Ae, s.dragClass, !0), l ? (ra = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (ke(document, "mouseup", o._onDrop), ke(document, "touchend", o._onDrop), ke(document, "touchcancel", o._onDrop), t && (t.effectAllowed = "move", s.setData && s.setData.call(o, t, Ae)), Je(document, "drop", o), Ne(Ae, "transform", "translateZ(0)")), di = !0, o._dragStartId = qo(o._dragStarted.bind(o, l, y)), Je(document, "selectstart", o), Ji = !0, to && Ne(document.body, "user-select", "none");
  },
  _onDragOver: function(y) {
    var l = this.el, o = y.target, t, s, f, d = this.options, c = d.group, m = Fe.active, E = Yo === c, A = d.sort, D = jt || m, C, h = this, x = !1;
    if (ps)
      return;
    function S(K, q) {
      sn(K, h, jn({
        evt: y,
        isOwner: E,
        axis: C ? "vertical" : "horizontal",
        revert: f,
        dragRect: t,
        targetRect: s,
        canSort: A,
        fromSortable: D,
        target: o,
        completed: b,
        onMove: function(_, le) {
          return Go(at, l, Ae, t, _, Lt(_), y, le);
        },
        changed: w
      }, q));
    }
    function g() {
      S("dragOverAnimationCapture"), h.captureAnimationState(), h !== D && D.captureAnimationState();
    }
    function b(K) {
      return S("dragOverCompleted", {
        insertion: K
      }), K && (E ? m._hideClone() : m._showClone(h), h !== D && (vn(Ae, jt ? jt.options.ghostClass : m.options.ghostClass, !1), vn(Ae, d.ghostClass, !0)), jt !== h && h !== Fe.active ? jt = h : h === Fe.active && jt && (jt = null), D === h && (h._ignoreWhileAnimating = o), h.animateAll(function() {
        S("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== D && (D.animateAll(), D._ignoreWhileAnimating = null)), (o === Ae && !Ae.animated || o === l && !o.animated) && (fi = null), !d.dragoverBubble && !y.rootEl && o !== document && (Ae.parentNode[hn]._isOutsideThisEl(y.target), !K && Lr(y)), !d.dragoverBubble && y.stopPropagation && y.stopPropagation(), x = !0;
    }
    function w() {
      pn = yn(Ae), hr = yn(Ae, d.draggable), on({
        sortable: h,
        name: "change",
        toEl: l,
        newIndex: pn,
        newDraggableIndex: hr,
        originalEvent: y
      });
    }
    if (y.preventDefault !== void 0 && y.cancelable && y.preventDefault(), o = $n(o, d.draggable, l, !0), S("dragOver"), Fe.eventCanceled)
      return x;
    if (Ae.contains(y.target) || o.animated && o.animatingX && o.animatingY || h._ignoreWhileAnimating === o)
      return b(!1);
    if (ra = !1, m && !d.disabled && (E ? A || (f = pt !== at) : jt === this || (this.lastPutMode = Yo.checkPull(this, m, Ae, y)) && c.checkPut(this, m, Ae, y))) {
      if (C = this._getDirection(y, o) === "vertical", t = Lt(Ae), S("dragOverValid"), Fe.eventCanceled)
        return x;
      if (f)
        return pt = at, g(), this._hideClone(), S("revert"), Fe.eventCanceled || (Nr ? at.insertBefore(Ae, Nr) : at.appendChild(Ae)), b(!0);
      var p = Ss(l, d.draggable);
      if (!p || uh(y, C, this) && !p.animated) {
        if (p === Ae)
          return b(!1);
        if (p && l === y.target && (o = p), o && (s = Lt(o)), Go(at, l, Ae, t, o, s, y, !!o) !== !1)
          return g(), l.appendChild(Ae), pt = l, w(), b(!0);
      } else if (p && sh(y, C, this)) {
        var T = pi(l, 0, d, !0);
        if (T === Ae)
          return b(!1);
        if (o = T, s = Lt(o), Go(at, l, Ae, t, o, s, y, !1) !== !1)
          return g(), l.insertBefore(Ae, T), pt = l, w(), b(!0);
      } else if (o.parentNode === l) {
        s = Lt(o);
        var M = 0, N, U = Ae.parentNode !== l, O = !rh(Ae.animated && Ae.toRect || t, o.animated && o.toRect || s, C), B = C ? "top" : "left", P = Zf(o, "top", "top") || Zf(Ae, "top", "top"), z = P ? P.scrollTop : void 0;
        fi !== o && (N = s[B], oo = !1, ko = !O && d.invertSwap || U), M = fh(y, o, s, C, O ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, ko, fi === o);
        var H;
        if (M !== 0) {
          var j = yn(Ae);
          do
            j -= M, H = pt.children[j];
          while (H && (Ne(H, "display") === "none" || H === Ue));
        }
        if (M === 0 || H === o)
          return b(!1);
        fi = o, io = M;
        var I = o.nextElementSibling, V = !1;
        V = M === 1;
        var k = Go(at, l, Ae, t, o, s, y, V);
        if (k !== !1)
          return (k === 1 || k === -1) && (V = k === 1), ps = !0, setTimeout(lh, 30), g(), V && !I ? l.appendChild(Ae) : o.parentNode.insertBefore(Ae, V ? I : o), P && Ed(P, 0, z - P.scrollTop), pt = Ae.parentNode, N !== void 0 && !ko && (Zo = Math.abs(N - Lt(o)[B])), w(), b(!0);
      }
      if (l.contains(Ae))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ke(document, "mousemove", this._onTouchMove), ke(document, "touchmove", this._onTouchMove), ke(document, "pointermove", this._onTouchMove), ke(document, "dragover", Lr), ke(document, "mousemove", Lr), ke(document, "touchmove", Lr);
  },
  _offUpEvents: function() {
    var y = this.el.ownerDocument;
    ke(y, "mouseup", this._onDrop), ke(y, "touchend", this._onDrop), ke(y, "pointerup", this._onDrop), ke(y, "touchcancel", this._onDrop), ke(document, "selectstart", this);
  },
  _onDrop: function(y) {
    var l = this.el, o = this.options;
    if (pn = yn(Ae), hr = yn(Ae, o.draggable), sn("drop", this, {
      evt: y
    }), pt = Ae && Ae.parentNode, pn = yn(Ae), hr = yn(Ae, o.draggable), Fe.eventCanceled) {
      this._nulling();
      return;
    }
    di = !1, ko = !1, oo = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), hs(this.cloneId), hs(this._dragStartId), this.nativeDraggable && (ke(document, "drop", this), ke(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), to && Ne(document.body, "user-select", ""), Ne(Ae, "transform", ""), y && (Ji && (y.cancelable && y.preventDefault(), !o.dropBubble && y.stopPropagation()), Ue && Ue.parentNode && Ue.parentNode.removeChild(Ue), (at === pt || jt && jt.lastPutMode !== "clone") && ht && ht.parentNode && ht.parentNode.removeChild(ht), Ae && (this.nativeDraggable && ke(Ae, "dragend", this), Il(Ae), Ae.style["will-change"] = "", Ji && !di && vn(Ae, jt ? jt.options.ghostClass : this.options.ghostClass, !1), vn(Ae, this.options.chosenClass, !1), on({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: y
    }), at !== pt ? (pn >= 0 && (on({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: at,
      originalEvent: y
    }), on({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: y
    }), on({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: at,
      originalEvent: y
    }), on({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: y
    })), jt && jt.save()) : pn !== ci && pn >= 0 && (on({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: y
    }), on({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: y
    })), Fe.active && ((pn == null || pn === -1) && (pn = ci, hr = ro), on({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: y
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), at = Ae = pt = Ue = Nr = ht = Jo = mr = Ir = Ln = Ji = pn = hr = ci = ro = fi = io = jt = Yo = Fe.dragged = Fe.ghost = Fe.clone = Fe.active = null, oa.forEach(function(y) {
      y.checked = !0;
    }), oa.length = Ml = Rl = 0;
  },
  handleEvent: function(y) {
    switch (y.type) {
      case "drop":
      case "dragend":
        this._onDrop(y);
        break;
      case "dragenter":
      case "dragover":
        Ae && (this._onDragOver(y), ah(y));
        break;
      case "selectstart":
        y.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var y = [], l, o = this.el.children, t = 0, s = o.length, f = this.options; t < s; t++)
      l = o[t], $n(l, f.draggable, this.el, !1) && y.push(l.getAttribute(f.dataIdAttr) || ch(l));
    return y;
  },
  sort: function(y, l) {
    var o = {}, t = this.el;
    this.toArray().forEach(function(s, f) {
      var d = t.children[f];
      $n(d, this.options.draggable, t, !1) && (o[s] = d);
    }, this), l && this.captureAnimationState(), y.forEach(function(s) {
      o[s] && (t.removeChild(o[s]), t.appendChild(o[s]));
    }), l && this.animateAll();
  },
  save: function() {
    var y = this.options.store;
    y && y.set && y.set(this);
  },
  closest: function(y, l) {
    return $n(y, l || this.options.draggable, this.el, !1);
  },
  option: function(y, l) {
    var o = this.options;
    if (l === void 0)
      return o[y];
    var t = so.modifyOption(this, y, l);
    typeof t < "u" ? o[y] = t : o[y] = l, y === "group" && Dd(o);
  },
  destroy: function() {
    sn("destroy", this);
    var y = this.el;
    y[hn] = null, ke(y, "mousedown", this._onTapStart), ke(y, "touchstart", this._onTapStart), ke(y, "pointerdown", this._onTapStart), this.nativeDraggable && (ke(y, "dragover", this), ke(y, "dragenter", this)), Array.prototype.forEach.call(y.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ia.splice(ia.indexOf(this.el), 1), this.el = y = null;
  },
  _hideClone: function() {
    if (!mr) {
      if (sn("hideClone", this), Fe.eventCanceled)
        return;
      Ne(ht, "display", "none"), this.options.removeCloneOnHide && ht.parentNode && ht.parentNode.removeChild(ht), mr = !0;
    }
  },
  _showClone: function(y) {
    if (y.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (mr) {
      if (sn("showClone", this), Fe.eventCanceled)
        return;
      Ae.parentNode == at && !this.options.group.revertClone ? at.insertBefore(ht, Ae) : Nr ? at.insertBefore(ht, Nr) : at.appendChild(ht), this.options.group.revertClone && this.animate(Ae, ht), Ne(ht, "display", ""), mr = !1;
    }
  }
};
function ah(u) {
  u.dataTransfer && (u.dataTransfer.dropEffect = "move"), u.cancelable && u.preventDefault();
}
function Go(u, y, l, o, t, s, f, d) {
  var c, m = u[hn], E = m.options.onMove, A;
  return window.CustomEvent && !_n && !lo ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = y, c.from = u, c.dragged = l, c.draggedRect = o, c.related = t || y, c.relatedRect = s || Lt(y), c.willInsertAfter = d, c.originalEvent = f, u.dispatchEvent(c), E && (A = E.call(m, c, f)), A;
}
function Il(u) {
  u.draggable = !1;
}
function lh() {
  ps = !1;
}
function sh(u, y, l) {
  var o = Lt(pi(l.el, 0, l.options, !0)), t = 10;
  return y ? u.clientX < o.left - t || u.clientY < o.top && u.clientX < o.right : u.clientY < o.top - t || u.clientY < o.bottom && u.clientX < o.left;
}
function uh(u, y, l) {
  var o = Lt(Ss(l.el, l.options.draggable)), t = 10;
  return y ? u.clientX > o.right + t || u.clientX <= o.right && u.clientY > o.bottom && u.clientX >= o.left : u.clientX > o.right && u.clientY > o.top || u.clientX <= o.right && u.clientY > o.bottom + t;
}
function fh(u, y, l, o, t, s, f, d) {
  var c = o ? u.clientY : u.clientX, m = o ? l.height : l.width, E = o ? l.top : l.left, A = o ? l.bottom : l.right, D = !1;
  if (!f) {
    if (d && Zo < m * t) {
      if (!oo && (io === 1 ? c > E + m * s / 2 : c < A - m * s / 2) && (oo = !0), oo)
        D = !0;
      else if (io === 1 ? c < E + Zo : c > A - Zo)
        return -io;
    } else if (c > E + m * (1 - t) / 2 && c < A - m * (1 - t) / 2)
      return dh(y);
  }
  return D = D || f, D && (c < E + m * s / 2 || c > A - m * s / 2) ? c > E + m / 2 ? 1 : -1 : 0;
}
function dh(u) {
  return yn(Ae) < yn(u) ? 1 : -1;
}
function ch(u) {
  for (var y = u.tagName + u.className + u.src + u.href + u.textContent, l = y.length, o = 0; l--; )
    o += y.charCodeAt(l);
  return o.toString(36);
}
function vh(u) {
  oa.length = 0;
  for (var y = u.getElementsByTagName("input"), l = y.length; l--; ) {
    var o = y[l];
    o.checked && oa.push(o);
  }
}
function qo(u) {
  return setTimeout(u, 0);
}
function hs(u) {
  return clearTimeout(u);
}
la && Je(document, "touchmove", function(u) {
  (Fe.active || di) && u.cancelable && u.preventDefault();
});
Fe.utils = {
  on: Je,
  off: ke,
  css: Ne,
  find: bd,
  is: function(y, l) {
    return !!$n(y, l, y, !1);
  },
  extend: Xp,
  throttle: Sd,
  closest: $n,
  toggleClass: vn,
  clone: Cd,
  index: yn,
  nextTick: qo,
  cancelNextTick: hs,
  detectDirection: wd,
  getChild: pi
};
Fe.get = function(u) {
  return u[hn];
};
Fe.mount = function() {
  for (var u = arguments.length, y = new Array(u), l = 0; l < u; l++)
    y[l] = arguments[l];
  y[0].constructor === Array && (y = y[0]), y.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Fe.utils = jn(jn({}, Fe.utils), o.utils)), so.mount(o);
  });
};
Fe.create = function(u, y) {
  return new Fe(u, y);
};
Fe.version = kp;
var bt = [], Zi, ms, gs = !1, Ll, Nl, aa, qi;
function ph() {
  function u() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var y in this)
      y.charAt(0) === "_" && typeof this[y] == "function" && (this[y] = this[y].bind(this));
  }
  return u.prototype = {
    dragStarted: function(l) {
      var o = l.originalEvent;
      this.sortable.nativeDraggable ? Je(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Je(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? Je(document, "touchmove", this._handleFallbackAutoScroll) : Je(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var o = l.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : (ke(document, "pointermove", this._handleFallbackAutoScroll), ke(document, "touchmove", this._handleFallbackAutoScroll), ke(document, "mousemove", this._handleFallbackAutoScroll)), nd(), _o(), Jp();
    },
    nulling: function() {
      aa = ms = Zi = gs = qi = Ll = Nl = null, bt.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, o) {
      var t = this, s = (l.touches ? l.touches[0] : l).clientX, f = (l.touches ? l.touches[0] : l).clientY, d = document.elementFromPoint(s, f);
      if (aa = l, o || this.options.forceAutoScrollFallback || lo || _n || to) {
        Fl(l, this.options, d, o);
        var c = gr(d, !0);
        gs && (!qi || s !== Ll || f !== Nl) && (qi && nd(), qi = setInterval(function() {
          var m = gr(document.elementFromPoint(s, f), !0);
          m !== c && (c = m, _o()), Fl(l, t.options, m, o);
        }, 10), Ll = s, Nl = f);
      } else {
        if (!this.options.bubbleScroll || gr(d, !0) === Wn()) {
          _o();
          return;
        }
        Fl(l, this.options, gr(d, !1), !1);
      }
    }
  }, qn(u, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function _o() {
  bt.forEach(function(u) {
    clearInterval(u.pid);
  }), bt = [];
}
function nd() {
  clearInterval(qi);
}
var Fl = Sd(function(u, y, l, o) {
  if (!!y.scroll) {
    var t = (u.touches ? u.touches[0] : u).clientX, s = (u.touches ? u.touches[0] : u).clientY, f = y.scrollSensitivity, d = y.scrollSpeed, c = Wn(), m = !1, E;
    ms !== l && (ms = l, _o(), Zi = y.scroll, E = y.scrollFn, Zi === !0 && (Zi = gr(l, !0)));
    var A = 0, D = Zi;
    do {
      var C = D, h = Lt(C), x = h.top, S = h.bottom, g = h.left, b = h.right, w = h.width, p = h.height, T = void 0, M = void 0, N = C.scrollWidth, U = C.scrollHeight, O = Ne(C), B = C.scrollLeft, P = C.scrollTop;
      C === c ? (T = w < N && (O.overflowX === "auto" || O.overflowX === "scroll" || O.overflowX === "visible"), M = p < U && (O.overflowY === "auto" || O.overflowY === "scroll" || O.overflowY === "visible")) : (T = w < N && (O.overflowX === "auto" || O.overflowX === "scroll"), M = p < U && (O.overflowY === "auto" || O.overflowY === "scroll"));
      var z = T && (Math.abs(b - t) <= f && B + w < N) - (Math.abs(g - t) <= f && !!B), H = M && (Math.abs(S - s) <= f && P + p < U) - (Math.abs(x - s) <= f && !!P);
      if (!bt[A])
        for (var j = 0; j <= A; j++)
          bt[j] || (bt[j] = {});
      (bt[A].vx != z || bt[A].vy != H || bt[A].el !== C) && (bt[A].el = C, bt[A].vx = z, bt[A].vy = H, clearInterval(bt[A].pid), (z != 0 || H != 0) && (m = !0, bt[A].pid = setInterval(function() {
        o && this.layer === 0 && Fe.active._onTouchMove(aa);
        var I = bt[this.layer].vy ? bt[this.layer].vy * d : 0, V = bt[this.layer].vx ? bt[this.layer].vx * d : 0;
        typeof E == "function" && E.call(Fe.dragged.parentNode[hn], V, I, u, aa, bt[this.layer].el) !== "continue" || Ed(bt[this.layer].el, V, I);
      }.bind({
        layer: A
      }), 24))), A++;
    } while (y.bubbleScroll && D !== c && (D = gr(D, !1)));
    gs = m;
  }
}, 30), Pd = function(y) {
  var l = y.originalEvent, o = y.putSortable, t = y.dragEl, s = y.activeSortable, f = y.dispatchSortableEvent, d = y.hideGhostForTarget, c = y.unhideGhostForTarget;
  if (!!l) {
    var m = o || s;
    d();
    var E = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, A = document.elementFromPoint(E.clientX, E.clientY);
    c(), m && !m.el.contains(A) && (f("spill"), this.onSpill({
      dragEl: t,
      putSortable: o
    }));
  }
};
function Es() {
}
Es.prototype = {
  startIndex: null,
  dragStart: function(y) {
    var l = y.oldDraggableIndex;
    this.startIndex = l;
  },
  onSpill: function(y) {
    var l = y.dragEl, o = y.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var t = pi(this.sortable.el, this.startIndex, this.options);
    t ? this.sortable.el.insertBefore(l, t) : this.sortable.el.appendChild(l), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Pd
};
qn(Es, {
  pluginName: "revertOnSpill"
});
function Cs() {
}
Cs.prototype = {
  onSpill: function(y) {
    var l = y.dragEl, o = y.putSortable, t = o || this.sortable;
    t.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), t.animateAll();
  },
  drop: Pd
};
qn(Cs, {
  pluginName: "removeOnSpill"
});
Fe.mount(new ph());
Fe.mount(Cs, Es);
function Ol(u) {
  u.parentElement !== null && u.parentElement.removeChild(u);
}
function rd(u, y, l) {
  const o = l === 0 ? u.children[0] : u.children[l - 1].nextSibling;
  u.insertBefore(y, o);
}
function hh() {
  return typeof window < "u" ? window.console : global.console;
}
const mh = hh();
function gh(u) {
  const y = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return y[o] || (y[o] = u(o));
  };
}
const yh = /-(\w)/g, Ah = gh((u) => u.replace(yh, (y, l) => l.toUpperCase())), Id = ["Start", "Add", "Remove", "Update", "End"], Ld = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Nd = ["Move"], xh = [Nd, Id, Ld].flatMap((u) => u).map((u) => `on${u}`), ys = {
  manage: Nd,
  manageAndEmit: Id,
  emit: Ld
};
function bh(u) {
  return xh.indexOf(u) !== -1;
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
function Eh(u) {
  return Sh.includes(u);
}
function Ch(u) {
  return ["transition-group", "TransitionGroup"].includes(u);
}
function Fd(u) {
  return ["id", "class", "role", "style"].includes(u) || u.startsWith("data-") || u.startsWith("aria-") || u.startsWith("on");
}
function Od(u) {
  return u.reduce((y, [l, o]) => (y[l] = o, y), {});
}
function Th({ $attrs: u, componentData: y = {} }) {
  return {
    ...Od(
      Object.entries(u).filter(([o, t]) => Fd(o))
    ),
    ...y
  };
}
function wh({ $attrs: u, callBackBuilder: y }) {
  const l = Od(Bd(u));
  Object.entries(y).forEach(([t, s]) => {
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
function Bd(u) {
  return Object.entries(u).filter(([y, l]) => !Fd(y)).map(([y, l]) => [Ah(y), l]).filter(([y, l]) => !bh(y));
}
const id = ({ el: u }) => u, Dh = (u, y) => u.__draggable_context = y, od = (u) => u.__draggable_context;
class Mh {
  constructor({
    nodes: { header: y, default: l, footer: o },
    root: t,
    realList: s
  }) {
    this.defaultNodes = l, this.children = [...y, ...l, ...o], this.externalComponent = t.externalComponent, this.rootTransition = t.transition, this.tag = t.tag, this.realList = s;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(y, l) {
    const { tag: o, children: t, _isRootComponent: s } = this;
    return y(o, l, s ? { default: () => t } : t);
  }
  updated() {
    const { defaultNodes: y, realList: l } = this;
    y.forEach((o, t) => {
      Dh(id(o), {
        element: l[t],
        index: t
      });
    });
  }
  getUnderlyingVm(y) {
    return od(y);
  }
  getVmIndexFromDomIndex(y, l) {
    const { defaultNodes: o } = this, { length: t } = o, s = l.children, f = s.item(y);
    if (f === null)
      return t;
    const d = od(f);
    if (d)
      return d.index;
    if (t === 0)
      return 0;
    const c = id(o[0]), m = [...s].findIndex(
      (E) => E === c
    );
    return y < m ? 0 : t;
  }
}
function Rh(u, y) {
  const l = u[y];
  return l ? l() : [];
}
function Ph({ $slots: u, realList: y, getKey: l }) {
  const o = y || [], [t, s] = ["header", "footer"].map(
    (c) => Rh(u, c)
  ), { item: f } = u;
  if (!f)
    throw new Error("draggable element must have an item slot");
  const d = o.flatMap(
    (c, m) => f({ element: c, index: m }).map((E) => (E.key = l(c), E.props = { ...E.props || {}, "data-draggable": !0 }, E))
  );
  if (d.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: t,
    footer: s,
    default: d
  };
}
function Ih(u) {
  const y = Ch(u), l = !Eh(u) && !y;
  return {
    transition: y,
    externalComponent: l,
    tag: l ? Qe(u) : y ? Yv : u
  };
}
function Lh({ $slots: u, tag: y, realList: l, getKey: o }) {
  const t = Ph({ $slots: u, realList: l, getKey: o }), s = Ih(y);
  return new Mh({ nodes: t, root: s, realList: l });
}
function Hd(u, y) {
  Fr(() => this.$emit(u.toLowerCase(), y));
}
function Ud(u) {
  return (y, l) => {
    if (this.realList !== null)
      return this[`onDrag${u}`](y, l);
  };
}
function Nh(u) {
  const y = Ud.call(this, u);
  return (l, o) => {
    y.call(this, l, o), Hd.call(this, u, l);
  };
}
let Bl = null;
const Fh = {
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
], Ts = fn({
  name: "draggable",
  inheritAttrs: !1,
  props: Fh,
  emits: Oh,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: u, $attrs: y, tag: l, componentData: o, realList: t, getKey: s } = this, f = Lh({
        $slots: u,
        tag: l,
        realList: t,
        getKey: s
      });
      this.componentStructure = f;
      const d = Th({ $attrs: y, componentData: o });
      return f.render(ea, d);
    } catch (u) {
      return this.error = !0, ea("pre", { style: { color: "red" } }, u.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && mh.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: u, $el: y, componentStructure: l } = this;
    l.updated();
    const o = wh({
      $attrs: u,
      callBackBuilder: {
        manageAndEmit: (s) => Nh.call(this, s),
        emit: (s) => Hd.bind(this, s),
        manage: (s) => Ud.call(this, s)
      }
    }), t = y.nodeType === 1 ? y : y.parentElement;
    this._sortable = new Fe(t, o), this.targetDomElement = t, t.__draggable_component__ = this;
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
      return typeof u == "function" ? u : (y) => y[u];
    }
  },
  watch: {
    $attrs: {
      handler(u) {
        const { _sortable: y } = this;
        !y || Bd(u).forEach(([l, o]) => {
          y.option(l, o);
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
      Fr(() => this.$emit("change", u));
    },
    alterList(u) {
      if (this.list) {
        u(this.list);
        return;
      }
      const y = [...this.modelValue];
      u(y), this.$emit("update:modelValue", y);
    },
    spliceList() {
      const u = (y) => y.splice(...arguments);
      this.alterList(u);
    },
    updatePosition(u, y) {
      const l = (o) => o.splice(y, 0, o.splice(u, 1)[0]);
      this.alterList(l);
    },
    getRelatedContextFromMoveEvent({ to: u, related: y }) {
      const l = this.getUnderlyingPotencialDraggableComponent(u);
      if (!l)
        return { component: l };
      const o = l.realList, t = { list: o, component: l };
      return u !== y && o ? { ...l.getUnderlyingVm(y) || {}, ...t } : t;
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
      const y = u.item._underlying_vm_;
      if (y === void 0)
        return;
      Ol(u.item);
      const l = this.getVmIndexFromDomIndex(u.newIndex);
      this.spliceList(l, 0, y);
      const o = { element: y, newIndex: l };
      this.emitChanges({ added: o });
    },
    onDragRemove(u) {
      if (rd(this.$el, u.item, u.oldIndex), u.pullMode === "clone") {
        Ol(u.clone);
        return;
      }
      const { index: y, element: l } = this.context;
      this.spliceList(y, 1);
      const o = { element: l, oldIndex: y };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(u) {
      Ol(u.item), rd(u.from, u.item, u.oldIndex);
      const y = this.context.index, l = this.getVmIndexFromDomIndex(u.newIndex);
      this.updatePosition(y, l);
      const o = { element: this.context.element, oldIndex: y, newIndex: l };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(u, y) {
      if (!u.element)
        return 0;
      const l = [...y.to.children].filter(
        (f) => f.style.display !== "none"
      ), o = l.indexOf(y.related), t = u.component.getVmIndexFromDomIndex(
        o
      );
      return l.indexOf(Bl) !== -1 || !y.willInsertAfter ? t : t + 1;
    },
    onDragMove(u, y) {
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
      return l(d, y);
    },
    onDragEnd() {
      Bl = null;
    }
  }
});
function Bh({ t: u }) {
  return [
    {
      name: "main",
      title: u("menu.main"),
      list: [
        Vl,
        Yl,
        Wl,
        jl,
        kl,
        Ql,
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
const ws = hd, dt = hd.factory();
let zd = null, ad = _i(null);
function As(...u) {
  return zd(...u);
}
const $d = (u) => {
  ad.value = u;
  const y = $l(ad);
  return zd = y.t, y;
};
$d();
const Hh = fn({
  name: "FcDesigner",
  components: {
    draggable: Ts,
    DragForm: dt.$form(),
    ViewForm: ws.$form()
  },
  props: ["menu", "height", "config", "mask", "locale"],
  setup(u) {
    const { menu: y, height: l, mask: o, locale: t } = Ul(u), s = kv(), f = rl({ active: null });
    Df("fcx", f), Df("designer", s);
    const d = li(u, "config", {}), c = li(d.value, "baseRule", null), m = li(d.value, "componentRule", {}), E = li(d.value, "validateRule", null), A = li(d.value, "eventRule", null), D = li(d.value, "formRule", null), C = ao(() => {
      const p = l.value;
      return p ? St.Number(p) ? `${p}px` : p : "100%";
    });
    let h = As;
    t.value && (h = $l(t).t);
    const x = (...p) => h(...p), S = (p, T, ...M) => {
      if (T) {
        if (St.Function(T))
          return T(...M);
        if (T.rule) {
          let N = T.rule(...M);
          return T.append && (N = [...N, ...p(...M)]), N;
        }
      }
      return p(...M);
    }, g = rl({
      cacheProps: {},
      moveRule: null,
      addRule: null,
      added: null,
      activeTab: "form",
      activeRule: null,
      children: _i([]),
      menuList: y.value || Bh({ t: x }),
      showBaseRule: !1,
      visible: {
        preview: !1
      },
      t: x,
      preview: {
        state: !1,
        rule: [],
        option: {}
      },
      dragForm: _i({
        rule: [],
        api: {}
      }),
      form: {
        rule: S(Mf, D.value, { t: x }),
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
        rule: S(si, c.value, { t: x }),
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = g.activeRule, p.setValue(p.options.formData || {});
          }
        }
      },
      validateForm: {
        rule: S(Rf, E.value, { t: x }),
        api: {},
        value: [],
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = g.activeRule, p.setValue(p.options.formData || {});
          }
        }
      },
      eventFrom: {
        rule: S(Pf, A.value, { t: x }),
        api: {},
        value: [],
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = g.activeRule, p.setValue(p.options.formData || {});
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
          mounted: (p) => {
            p.activeRule = g.activeRule, p.setValue(p.options.formData || {});
          }
        }
      }
    });
    il(() => g.preview.state, function(p) {
      p || Fr(() => {
        g.preview.rule = g.preview.option = null;
      });
    });
    let b = null;
    il(() => t.value, (p) => {
      h = p ? $l(t).t : As;
      const T = g.form.api.formData && g.form.api.formData(), M = g.baseForm.api.formData && g.baseForm.api.formData(), N = g.validateForm.api.formData && g.validateForm.api.formData(), U = g.eventFrom.api.formData && g.eventFrom.api.formData();
      g.validateForm.rule = S(Rf, E.value, { t: x }), g.eventFrom.rule = S(Pf, A.value, { t: x }), g.baseForm.rule = S(si, c.value, { t: x }), g.form.rule = S(Mf, D.value, { t: x }), g.cacheProps = {};
      const O = g.activeRule;
      let B = null;
      O && (B = g.propsForm.api.formData && g.propsForm.api.formData(), g.propsForm.rule = g.cacheProps[O._id] = S(O.config.config.props, m.value && m.value[O.config.config.name], O, {
        t: x,
        api: g.dragForm.api
      })), Fr(() => {
        T && g.form.api.setValue(T), M && g.baseForm.api.setValue(M), N && g.validateForm.api.setValue(N), U && g.eventFrom.api.setValue(U), B && g.propsForm.api.setValue(B);
      });
    });
    const w = {
      unWatchActiveRule() {
        b && b(), b = null;
      },
      watchActiveRule() {
        w.unWatchActiveRule(), b = il(() => g.activeRule, function(p) {
          p && w.updateRuleFormData();
        }, { deep: !0, flush: "post" });
      },
      makeChildren(p) {
        return rl({ children: p }).children;
      },
      addMenu(p) {
        if (!p.name || !p.list)
          return;
        let T = !0;
        g.menuList.forEach((M, N) => {
          M.name === p.name && (g.menuList[N] = p, T = !1);
        }), T && g.menuList.push(p);
      },
      removeMenu(p) {
        [...g.menuList].forEach((T, M) => {
          T.name === p && g.menuList.splice(M, 1);
        });
      },
      setMenuItem(p, T) {
        g.menuList.forEach((M) => {
          M.name === p && (M.list = T);
        });
      },
      appendMenuItem(p, T) {
        g.menuList.forEach((M) => {
          M.name === p && M.list.push(...Array.isArray(T) ? T : [T]);
        });
      },
      removeMenuItem(p) {
        g.menuList.forEach((T) => {
          let M;
          St.String(p) ? [...T.list].forEach((N, U) => {
            N.name === p && T.list.splice(U, 1);
          }) : (M = T.list.indexOf(p)) > -1 && T.list.splice(M, 1);
        });
      },
      addComponent(p) {
        Array.isArray(p) ? p.forEach((T) => {
          pr[T.name] = T;
        }) : pr[p.name] = p;
      },
      getParent(p) {
        let T = p.__fc__.parent.rule;
        const M = T.config;
        return M && M.config.inside && (p = T, T = T.__fc__.parent.rule), { root: T, parent: p };
      },
      makeDrag(p, T, M, N) {
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
                group: p === !0 ? "default" : p,
                ghostClass: "ghost",
                animation: 150,
                handle: "._fc-drag-btn",
                emptyInsertThreshold: 0,
                direction: "vertical",
                itemKey: "type"
              }
            },
            tag: T
          },
          children: M,
          on: N
        };
      },
      clearDragRule() {
        w.setRule([]);
      },
      makeDragRule(p) {
        return w.makeChildren([w.makeDrag(!0, "draggable", p, {
          add: (T, M) => w.dragAdd(p, M),
          end: (T, M) => w.dragEnd(p, M),
          start: (T, M) => w.dragStart(p, M),
          unchoose: (T, M) => w.dragUnchoose(p, M)
        })]);
      },
      previewFc() {
        g.preview.state = !0, g.preview.rule = w.getRule(), g.preview.option = w.getOption();
      },
      getRule() {
        return w.parseRule(Jn(g.dragForm.api.rule[0].children));
      },
      getJson() {
        return dt.toJson(w.getRule());
      },
      getOption() {
        const p = Jn(g.form.value);
        return p.submitBtn = p._submitBtn, p.resetBtn = p._resetBtn, typeof p.submitBtn == "object" ? p.submitBtn.show = p.form.formCreateSubmitBtn : p.submitBtn = {
          show: p.form.formCreateSubmitBtn,
          innerText: x("form.submit")
        }, typeof p.resetBtn == "object" ? p.resetBtn.show = p.form.formCreateResetBtn : p.resetBtn = {
          show: p.form.formCreateResetBtn,
          innerText: x("form.reset")
        }, delete p.form.formCreateSubmitBtn, delete p.form.formCreateResetBtn, delete p._submitBtn, delete p._resetBtn, p;
      },
      getOptions() {
        w.getOption();
      },
      setRule(p) {
        p || (p = []), g.children = _i(w.loadRule(St.String(p) ? dt.parseJson(p) : Jn(p))), w.clearActiveRule(), g.dragForm.rule = w.makeDragRule(w.makeChildren(g.children));
      },
      setBaseRuleConfig(p, T) {
        c.value = { rule: p, append: T }, g.baseForm.rule = S(si, c.value, { t: x });
      },
      setComponentRuleConfig(p, T, M) {
        m.value[p] = { rule: T, append: M }, g.cacheProps = {};
        const N = g.activeRule;
        if (N) {
          const U = g.propsForm.api.formData && g.propsForm.api.formData();
          g.propsForm.rule = g.cacheProps[N._id] = S(N.config.config.props, m.value && m.value[N.config.config.name], N, {
            t: x,
            api: g.dragForm.api
          }), Fr(() => {
            U && g.propsForm.api.setValue(U);
          });
        }
      },
      setValidateRuleConfig(p, T) {
        E.value = { rule: p, append: T }, g.validateForm.rule = S(si, E.value, { t: x });
      },
      setEventRuleConfig(p, T) {
        A.value = { rule: p, append: T }, g.eventFrom.rule = S(si, A.value, { t: x });
      },
      setFormRuleConfig(p, T) {
        D.value = { rule: p, append: T }, g.form.rule = S(si, D.value, { t: x });
      },
      clearActiveRule() {
        g.activeRule = null, g.activeTab = "form";
      },
      setOption(p) {
        let T = { ...p };
        T.form.formCreateSubmitBtn = typeof T.submitBtn == "object" ? T.submitBtn.show === void 0 ? !0 : !!T.submitBtn.show : !!T.submitBtn, T.form.formCreateResetBtn = typeof T.resetBtn == "object" ? !!T.resetBtn.show : !!T.resetBtn, T._resetBtn = T.resetBtn, T.resetBtn = !1, T._submitBtn = T.submitBtn, T.submitBtn = !1, g.form.value = T;
      },
      setOptions(p) {
        w.setOption(p);
      },
      loadRule(p) {
        const T = [];
        return p.forEach((M) => {
          if (St.String(M))
            return T.push(M);
          const N = pr[M._fc_drag_tag] || pr[M.type];
          N && N.loadRule && N.loadRule(M);
          const U = M.children;
          if (M.children = [], M.control && (M._control = M.control, delete M.control), N) {
            if (M = w.makeRule(N, M), U) {
              let O = M.children[0].children;
              N.drag && (O = O[0].children), O.push(...w.loadRule(U));
            }
          } else
            U && (M.children = w.loadRule(U));
          T.push(M);
        }), T;
      },
      parseRule(p) {
        return [...p].reduce((T, M) => St.String(M) ? (T.push(M), T) : M.type === "DragBox" ? (T.push(...w.parseRule(M.children)), T) : M.type === "DragTool" && (M = M.children[0], M.type === "DragBox") ? (T.push(...w.parseRule(M.children)), T) : (M && (M = { ...M }, M.children.length && (M.children = w.parseRule(M.children)), delete M._id, delete M.key, delete M.component, M.config && (M.config.config && M.config.config.parseRule && M.config.config.parseRule(M), delete M.config.config), M.effect && (delete M.effect._fc, delete M.effect._fc_tool), M._control && (M.control = M._control, delete M._control), Object.keys(M).filter((N) => Array.isArray(M[N]) && M[N].length === 0 || St.Object(M[N]) && Object.keys(M[N]).length === 0).forEach((N) => {
          delete M[N];
        }), T.push(M)), T), []);
      },
      baseChange(p, T, M, N) {
        var U, O, B;
        g.activeRule && N[g.activeRule._id] === g.activeRule && (w.unWatchActiveRule(), g.activeRule[p] = T, w.watchActiveRule(), (B = (O = (U = g.activeRule.config.config) == null ? void 0 : U.watch) == null ? void 0 : O["$" + p]) == null || B.call(O, {
          field: p,
          value: T,
          api: N,
          rule: g.activeRule
        }));
      },
      propRemoveField(p, T, M) {
        var N, U, O;
        if (g.activeRule && M[g.activeRule._id] === g.activeRule) {
          w.unWatchActiveRule();
          const B = p;
          if (g.dragForm.api.sync(g.activeRule), p.indexOf("formCreate") === 0) {
            if (p = p.replace("formCreate", ""), !p)
              return;
            p = zl(p), p.indexOf("effect") === 0 && p.indexOf(">") > -1 ? delete g.activeRule.effect[p.split(">")[1]] : p.indexOf("props") === 0 && p.indexOf(">") > -1 ? delete g.activeRule.props[p.split(">")[1]] : p.indexOf("attrs") === 0 && p.indexOf(">") > -1 ? delete g.activeRule.attrs[p.split(">")[1]] : p === "child" ? delete g.activeRule.children[0] : p && (g.activeRule[p] = void 0);
          } else
            delete g.activeRule.props[p];
          w.watchActiveRule(), (O = (U = (N = g.activeRule.config.config) == null ? void 0 : N.watch) == null ? void 0 : U[B]) == null || O.call(U, {
            field: B,
            value: void 0,
            api: M,
            rule: g.activeRule
          });
        }
      },
      propChange(p, T, M, N) {
        var U, O, B;
        if (g.activeRule && N[g.activeRule._id] === g.activeRule) {
          w.unWatchActiveRule();
          const P = p;
          if (p.indexOf("formCreate") === 0) {
            if (p = p.replace("formCreate", ""), !p)
              return;
            p = zl(p), p.indexOf("effect") === 0 && p.indexOf(">") > -1 ? g.activeRule.effect[p.split(">")[1]] = T : p.indexOf("props") === 0 && p.indexOf(">") > -1 ? g.activeRule.props[p.split(">")[1]] = T : p.indexOf("attrs") === 0 && p.indexOf(">") > -1 ? g.activeRule.attrs[p.split(">")[1]] = T : p === "child" ? g.activeRule.children[0] = T : g.activeRule[p] = T;
          } else
            g.activeRule.props[p] = T;
          w.watchActiveRule(), (B = (O = (U = g.activeRule.config.config) == null ? void 0 : U.watch) == null ? void 0 : O[P]) == null || B.call(O, {
            field: P,
            value: T,
            api: N,
            rule: g.activeRule
          });
        }
      },
      validateChange(p) {
        !g.activeRule || g.validateForm.api[g.activeRule._id] !== g.activeRule || (g.activeRule.validate = p.validate || [], g.dragForm.api.refreshValidate(), g.dragForm.api.nextTick(() => {
          g.dragForm.api.clearValidateState(g.activeRule.__fc__.id);
        }));
      },
      eventChange(p) {
        w.unWatchActiveRule(), !(!g.activeRule || g.eventFrom.api[g.activeRule._id] !== g.activeRule) && (g.activeRule.event = p.event || [], w.watchActiveRule());
      },
      toolActive(p) {
        w.unWatchActiveRule(), g.activeRule && (delete g.propsForm.api[g.activeRule._id], delete g.baseForm.api[g.activeRule._id], delete g.validateForm.api[g.activeRule._id], delete g.eventFrom.api[g.activeRule._id], delete g.dragForm.api.activeRule), g.activeRule = p, g.dragForm.api.activeRule = p, Fr(() => {
          g.activeTab = "props", Fr(() => {
            g.propsForm.api[g.activeRule._id] = g.activeRule, g.baseForm.api[g.activeRule._id] = g.activeRule, g.validateForm.api[g.activeRule._id] = g.activeRule, g.eventFrom.api[g.activeRule._id] = g.activeRule;
          });
        }), g.cacheProps[p._id] || (g.cacheProps[p._id] = S(p.config.config.props, m.value && m.value[p.config.config.name], p, {
          t: x,
          api: g.dragForm.api
        })), g.propsForm.rule = g.cacheProps[p._id], w.updateRuleFormData(), w.watchActiveRule();
      },
      updateRuleFormData() {
        const p = g.activeRule, T = { ...p.props, formCreateChild: Jn(p.children[0]) };
        if (Object.keys(p).forEach((M) => {
          ["effect", "config", "payload", "id", "type"].indexOf(M) < 0 && (T["formCreate" + ta(M)] = Jn(p[M]));
        }), ["props", "effect", "attrs"].forEach((M) => {
          p[M] && Object.keys(p[M]).forEach((N) => {
            T["formCreate" + ta(M) + ">" + N] = Jn(p[M][N]);
          });
        }), g.propsForm.value = T, g.showBaseRule = md(p, "field") && p.input !== !1 && (!d.value || d.value.showBaseForm !== !1), g.showBaseRule) {
          g.baseForm.value = {
            field: p.field,
            title: p.title || "",
            info: p.info,
            _control: p._control
          }, g.validateForm.value = { validate: p.validate ? [...p.validate] : [] };
          const M = p.type == "el-table" ? "table" : p.type;
          p.event !== void 0 && p.event[p.event.length - 1] === M ? g.eventFrom.value = { event: p.event ? [...p.event] : [] } : g.eventFrom.value = { event: p.event ? [...p.event, M] : [M] }, g.dragForm.api.refreshValidate(), g.dragForm.api.nextTick(() => {
            g.dragForm.api.clearValidateState(p.__fc__.id);
          });
        }
      },
      dragStart(p) {
        g.moveRule = p, g.added = !1;
      },
      dragUnchoose(p, T) {
        g.addRule = {
          children: p,
          oldIndex: T.oldIndex
        };
      },
      dragAdd(p, T) {
        const M = T.newIndex, N = T.item._underlying_vm_;
        if (!N || N.__fc__) {
          if (g.addRule) {
            const U = g.addRule.children.splice(g.addRule.oldIndex, 1);
            p.splice(M, 0, U[0]);
          }
        } else {
          const U = w.makeRule(pr[N.name]);
          p.splice(M, 0, U);
        }
        g.added = !0;
      },
      dragEnd(p, { newIndex: T, oldIndex: M }) {
        if (!g.added && !(g.moveRule === p && T === M)) {
          const N = g.moveRule.splice(M, 1);
          p.splice(T, 0, N[0]);
        }
        g.moveRule = null, g.addRule = null, g.added = !1;
      },
      makeRule(p, T) {
        const M = T || p.rule({ t: x });
        M.config = { config: p }, p.component && (M.component = fd(p.component)), M.effect || (M.effect = {}), M.effect._fc = !0, M._fc_drag_tag = p.name;
        let N;
        if (p.drag && M.children.push(N = w.makeDrag(p.drag, M.type, w.makeChildren([]), {
          end: (O, B) => w.dragEnd(O.self.children, B),
          add: (O, B) => w.dragAdd(O.self.children, B),
          start: (O, B) => w.dragStart(O.self.children, B),
          unchoose: (O, B) => w.dragUnchoose(O.self.children, B)
        })), p.children && !T)
          for (let O = 0; O < (p.childrenLen || 1); O++) {
            const B = w.makeRule(pr[p.children]);
            (N || M).children.push(B);
          }
        const U = o.value !== void 0 ? o.value !== !1 : p.mask !== !1;
        return p.inside ? (M.children = w.makeChildren([{
          type: "DragTool",
          props: {
            dragBtn: p.dragBtn !== !1,
            children: p.children,
            mask: U,
            fullWidth: M.fullWidth,
            type: M.type
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: O }) => {
              const B = w.getParent(O).parent;
              B.__fc__.rm(), s.emit("delete", B), w.clearActiveRule();
            },
            create: ({ self: O }) => {
              const B = w.getParent(O);
              s.emit("create", B.parent), B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, w.makeRule(B.parent.config.config));
            },
            addChild: ({ self: O }) => {
              const B = w.getParent(O), P = B.parent.config.config, z = pr[P.children];
              !z || (P.drag ? B.parent.children[0] : B.parent).children[0].children.push(w.makeRule(z));
            },
            copy: ({ self: O }) => {
              const B = w.getParent(O);
              s.emit("copy", B.parent), B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, dt.copyRule(B.parent));
            },
            active: ({ self: O }) => {
              const B = w.getParent(O);
              s.emit("active", B.parent), w.toolActive(B.parent);
            }
          },
          children: M.children
        }]), M) : {
          type: "DragTool",
          props: {
            dragBtn: p.dragBtn !== !1,
            children: p.children,
            mask: U,
            fullWidth: M.fullWidth,
            type: M.type
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: O }) => {
              s.emit("delete", O.children[0]), O.__fc__.rm(), w.clearActiveRule();
            },
            create: ({ self: O }) => {
              s.emit("create", O.children[0]);
              const B = w.getParent(O);
              B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, w.makeRule(O.children[0].config.config));
            },
            addChild: ({ self: O }) => {
              const B = O.children[0].config.config, P = pr[B.children];
              !P || (B.drag ? O.children[0] : O).children[0].children.push(w.makeRule(P));
            },
            copy: ({ self: O }) => {
              s.emit("copy", O.children[0]);
              const B = w.getParent(O);
              B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, dt.copyRule(B.parent));
            },
            active: ({ self: O }) => {
              s.emit("active", O.children[0]), w.toolActive(O.children[0]);
            }
          },
          children: w.makeChildren([M])
        };
      }
    };
    return g.dragForm.rule = w.makeDragRule(w.makeChildren(g.children)), {
      ...Ul(g),
      ...w,
      dragHeight: C,
      t: x
    };
  },
  created() {
    document.body.ondrop = (u) => {
      u.preventDefault(), u.stopPropagation();
    };
  }
}), Uh = { class: "_fc-l-title" }, zh = { class: "_fc-l-item" }, $h = { class: "_fc-l-icon" }, Wh = { class: "_fc-l-name" }, jh = /* @__PURE__ */ rt("i", { class: "fc-icon icon-preview" }, null, -1), Vh = /* @__PURE__ */ rt("i", { class: "fc-icon icon-delete" }, null, -1), Yh = { class: "_fc-m-drag" };
function kh(u, y, l, o, t, s) {
  const f = Qe("draggable"), d = Qe("el-aside"), c = Qe("el-button"), m = Qe("el-popconfirm"), E = Qe("el-header"), A = Qe("DragForm"), D = Qe("ElMain"), C = Qe("ElContainer"), h = Qe("ElDivider"), x = Qe("ElAside"), S = Qe("ViewForm"), g = Qe("ElDialog");
  return et(), An(C, {
    class: "_fc-designer",
    style: Qv("height:" + u.dragHeight)
  }, {
    default: ze(() => [
      Le(D, null, {
        default: ze(() => [
          Le(C, { style: { height: "100%" } }, {
            default: ze(() => [
              Le(d, {
                class: "_fc-l",
                width: "266px"
              }, {
                default: ze(() => [
                  (et(!0), Bt(cd, null, vd(u.menuList, (b, w) => (et(), Bt("div", {
                    key: w,
                    class: "_fc-l-group"
                  }, [
                    rt("h4", Uh, Ot(b.title), 1),
                    Le(f, {
                      group: { name: "default", pull: "clone", put: !1 },
                      sort: !1,
                      itemKey: "name",
                      list: b.list
                    }, {
                      item: ze(({ element: p }) => [
                        rt("div", zh, [
                          rt("div", $h, [
                            rt("i", {
                              class: Ko(["fc-icon", p.icon || "icon-input"])
                            }, null, 2)
                          ]),
                          rt("span", Wh, Ot(u.t("components." + p.name + ".name") || p.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["list"])
                  ]))), 128))
                ]),
                _: 1
              }),
              Le(C, { class: "_fc-m" }, {
                default: ze(() => [
                  Le(E, {
                    class: "_fc-m-tools",
                    height: "45"
                  }, {
                    default: ze(() => [
                      pd(u.$slots, "handle"),
                      Le(c, {
                        type: "primary",
                        plain: "",
                        round: "",
                        size: "small",
                        onClick: u.previewFc
                      }, {
                        default: ze(() => [
                          jh,
                          xn(" " + Ot(u.t("designer.preview")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      Le(m, {
                        title: u.t("designer.clearConfirmTitle"),
                        width: "200px",
                        "confirm-button-text": u.t("designer.clearConfirm"),
                        "cancel-button-text": u.t("designer.clearCancel"),
                        onConfirm: u.clearDragRule
                      }, {
                        reference: ze(() => [
                          Le(c, {
                            type: "danger",
                            plain: "",
                            round: "",
                            size: "small"
                          }, {
                            default: ze(() => [
                              Vh,
                              xn(Ot(u.t("designer.clear")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title", "confirm-button-text", "cancel-button-text", "onConfirm"])
                    ]),
                    _: 3
                  }),
                  Le(D, { style: { background: "#F5F5F5", padding: "20px" } }, {
                    default: ze(() => [
                      rt("div", Yh, [
                        Le(A, {
                          rule: u.dragForm.rule,
                          option: u.form.value,
                          api: u.dragForm.api,
                          "onUpdate:api": y[0] || (y[0] = (b) => u.dragForm.api = b),
                          style: { border: "1px solid red" }
                        }, null, 8, ["rule", "option", "api"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }),
              !u.config || u.config.showConfig !== !1 ? (et(), An(x, {
                key: 0,
                class: "_fc-r",
                width: "320px"
              }, {
                default: ze(() => [
                  Le(C, { style: { height: "100%" } }, {
                    default: ze(() => [
                      Le(E, {
                        height: "40px",
                        class: "_fc-r-tabs"
                      }, {
                        default: ze(() => [
                          !!u.activeRule || u.config && u.config.showFormConfig === !1 ? (et(), Bt("div", {
                            key: 0,
                            class: Ko(["_fc-r-tab", { active: u.activeTab === "props" }]),
                            onClick: y[1] || (y[1] = (b) => u.activeTab = "props")
                          }, Ot(u.t("designer.config.component")), 3)) : un("", !0),
                          !u.config || u.config.showFormConfig !== !1 ? (et(), Bt("div", {
                            key: 1,
                            class: Ko(["_fc-r-tab", { active: u.activeTab === "form" && !!u.activeRule }]),
                            onClick: y[2] || (y[2] = (b) => u.activeTab = "form")
                          }, Ot(u.t("designer.config.form")), 3)) : un("", !0)
                        ]),
                        _: 1
                      }),
                      !u.config || u.config.showFormConfig !== !1 ? Gi((et(), An(D, { key: 0 }, {
                        default: ze(() => [
                          Le(A, {
                            rule: u.form.rule,
                            option: u.form.option,
                            modelValue: u.form.value.form,
                            "onUpdate:modelValue": y[3] || (y[3] = (b) => u.form.value.form = b),
                            api: u.form.api,
                            "onUpdate:api": y[4] || (y[4] = (b) => u.form.api = b)
                          }, null, 8, ["rule", "option", "modelValue", "api"])
                        ]),
                        _: 1
                      }, 512)), [
                        [Ki, u.activeTab === "form"]
                      ]) : un("", !0),
                      Gi((et(), An(D, {
                        style: { padding: "0 20px" },
                        key: u.activeRule ? u.activeRule._id : ""
                      }, {
                        default: ze(() => [
                          rt("div", null, [
                            u.showBaseRule ? (et(), An(h, { key: 0 }, {
                              default: ze(() => [
                                xn(Ot(u.t("designer.config.rule")), 1)
                              ]),
                              _: 1
                            })) : un("", !0),
                            Gi(Le(A, {
                              api: u.baseForm.api,
                              "onUpdate:api": y[5] || (y[5] = (b) => u.baseForm.api = b),
                              rule: u.baseForm.rule,
                              option: u.baseForm.options,
                              modelValue: u.baseForm.value,
                              onChange: u.baseChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange"]), [
                              [Ki, u.showBaseRule]
                            ]),
                            Le(h, null, {
                              default: ze(() => [
                                xn(Ot(u.t("designer.config.props")), 1)
                              ]),
                              _: 1
                            }),
                            Le(A, {
                              api: u.propsForm.api,
                              "onUpdate:api": y[6] || (y[6] = (b) => u.propsForm.api = b),
                              rule: u.propsForm.rule,
                              option: u.propsForm.options,
                              modelValue: u.propsForm.value,
                              onChange: u.propChange,
                              onRemoveField: u.propRemoveField
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange", "onRemoveField"]),
                            u.showBaseRule ? (et(), An(h, { key: 1 }, {
                              default: ze(() => [
                                xn(Ot(u.t("designer.config.validate")), 1)
                              ]),
                              _: 1
                            })) : un("", !0),
                            Gi(Le(A, {
                              api: u.validateForm.api,
                              "onUpdate:api": y[7] || (y[7] = (b) => u.validateForm.api = b),
                              rule: u.validateForm.rule,
                              option: u.validateForm.options,
                              modelValue: u.validateForm.value,
                              "onUpdate:modelValue": u.validateChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onUpdate:modelValue"]), [
                              [Ki, u.showBaseRule]
                            ]),
                            u.showBaseRule ? (et(), An(h, { key: 2 }, {
                              default: ze(() => [
                                xn(Ot(u.t("designer.config.emit")), 1)
                              ]),
                              _: 1
                            })) : un("", !0),
                            Gi(Le(A, {
                              api: u.eventFrom.api,
                              "onUpdate:api": y[8] || (y[8] = (b) => u.eventFrom.api = b),
                              rule: u.eventFrom.rule,
                              option: u.eventFrom.options,
                              modelValue: u.eventFrom.value,
                              "onUpdate:modelValue": u.eventChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onUpdate:modelValue"]), [
                              [Ki, u.showBaseRule]
                            ])
                          ])
                        ]),
                        _: 1
                      })), [
                        [Ki, u.activeTab === "props"]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : un("", !0),
              Le(g, {
                modelValue: u.preview.state,
                "onUpdate:modelValue": y[9] || (y[9] = (b) => u.preview.state = b),
                width: "800px",
                "append-to-body": ""
              }, {
                default: ze(() => [
                  u.preview.state ? (et(), An(S, {
                    key: 0,
                    rule: u.preview.rule,
                    option: u.preview.option
                  }, null, 8, ["rule", "option"])) : un("", !0)
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
const yr = /* @__PURE__ */ Nn(Hh, [["render", kh]]);
let Qh = 1;
const Gh = fn({
  name: "DragTool",
  props: ["dragBtn", "children", "unique", "mask", "fullWidth", "type"],
  setup(u) {
    const { unique: y } = Ul(u), l = ao(() => y.value || Qh++), o = Gv("fcx");
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
}), Kh = {
  key: 0,
  class: "drag-mask"
}, Xh = { class: "drag-l" }, Jh = {
  key: 0,
  class: "drag-btn _fc-drag-btn",
  style: { cursor: "move" }
}, Zh = /* @__PURE__ */ rt("i", { class: "fc-icon icon-move" }, null, -1), qh = [
  Zh
], _h = { class: "drag-r" }, em = /* @__PURE__ */ rt("i", { class: "fc-icon icon-add" }, null, -1), tm = [
  em
], nm = /* @__PURE__ */ rt("i", { class: "fc-icon icon-copy" }, null, -1), rm = [
  nm
], im = /* @__PURE__ */ rt("i", { class: "fc-icon icon-add-child" }, null, -1), om = [
  im
], am = /* @__PURE__ */ rt("i", { class: "fc-icon icon-delete" }, null, -1), lm = [
  am
];
function sm(u, y, l, o, t, s) {
  return et(), Bt("div", {
    class: Ko(["drag-tool", { active: u.state.active === u.id }]),
    onClick: y[4] || (y[4] = Kv((...f) => u.active && u.active(...f), ["stop"]))
  }, [
    u.mask ? (et(), Bt("div", Kh)) : un("", !0),
    rt("div", Xh, [
      u.state.active === u.id && u.dragBtn !== !1 ? (et(), Bt("div", Jh, qh)) : un("", !0)
    ]),
    rt("div", _h, [
      rt("div", {
        class: "drag-btn",
        onClick: y[0] || (y[0] = (f) => u.$emit("create"))
      }, tm),
      rt("div", {
        class: "drag-btn",
        onClick: y[1] || (y[1] = (f) => u.$emit("copy"))
      }, rm),
      u.children ? (et(), Bt("div", {
        key: 0,
        class: "drag-btn",
        onClick: y[2] || (y[2] = (f) => u.$emit("addChild"))
      }, om)) : un("", !0),
      rt("div", {
        class: "drag-btn drag-btn-danger",
        onClick: y[3] || (y[3] = (f) => u.$emit("delete"))
      }, lm)
    ]),
    pd(u.$slots, "default")
  ], 2);
}
const um = /* @__PURE__ */ Nn(Gh, [["render", sm]]);
var fm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hl = { exports: {} }, ld;
function Wd() {
  return ld || (ld = 1, function(u, y) {
    (function(l, o) {
      u.exports = o();
    })(fm, function() {
      var l = navigator.userAgent, o = navigator.platform, t = /gecko\/\d/i.test(l), s = /MSIE \d/.test(l), f = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(l), d = /Edge\/(\d+)/.exec(l), c = s || f || d, m = c && (s ? document.documentMode || 6 : +(d || f)[1]), E = !d && /WebKit\//.test(l), A = E && /Qt\/\d+\.\d+/.test(l), D = !d && /Chrome\/(\d+)/.exec(l), C = D && +D[1], h = /Opera\//.test(l), x = /Apple Computer/.test(navigator.vendor), S = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(l), g = /PhantomJS/.test(l), b = x && (/Mobile\/\w+/.test(l) || navigator.maxTouchPoints > 2), w = /Android/.test(l), p = b || w || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(l), T = b || /Mac/.test(o), M = /\bCrOS\b/.test(l), N = /win/i.test(o), U = h && l.match(/Version\/(\d*\.\d*)/);
      U && (U = Number(U[1])), U && U >= 15 && (h = !1, E = !0);
      var O = T && (A || h && (U == null || U < 12.11)), B = t || c && m >= 9;
      function P(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var z = function(e, n) {
        var i = e.className, r = P(n).exec(i);
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
      function I(e, n, i, r) {
        var a = document.createElement(e);
        if (i && (a.className = i), r && (a.style.cssText = r), typeof n == "string")
          a.appendChild(document.createTextNode(n));
        else if (n)
          for (var v = 0; v < n.length; ++v)
            a.appendChild(n[v]);
        return a;
      }
      function V(e, n, i, r) {
        var a = I(e, n, i, r);
        return a.setAttribute("role", "presentation"), a;
      }
      var k;
      document.createRange ? k = function(e, n, i, r) {
        var a = document.createRange();
        return a.setEnd(r || e, i), a.setStart(e, n), a;
      } : k = function(e, n, i) {
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
        P(n).test(i) || (e.className += (i ? " " : "") + n);
      }
      function _(e, n) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          i[r] && !P(i[r]).test(n) && (n += " " + i[r]);
        return n;
      }
      var le = function(e) {
        e.select();
      };
      b ? le = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : c && (le = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function be(e) {
        return e.display.wrapper.ownerDocument;
      }
      function ve(e) {
        return ce(e.display.wrapper);
      }
      function ce(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function ae(e) {
        return be(e).defaultView;
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
        for (var v = r || 0, R = a || 0; ; ) {
          var L = e.indexOf("	", v);
          if (L < 0 || L >= n)
            return R + (n - v);
          R += L - v, R += i - R % i, v = L + 1;
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
      var Ve = 50, Ht = { toString: function() {
        return "CodeMirror.Pass";
      } }, Nt = { scroll: !1 }, lt = { origin: "*mouse" }, Et = { origin: "+move" };
      function Ut(e, n, i) {
        for (var r = 0, a = 0; ; ) {
          var v = e.indexOf("	", r);
          v == -1 && (v = e.length);
          var R = v - r;
          if (v == e.length || a + R >= n)
            return r + Math.min(R, n - a);
          if (a += v - r, a += i - a % i, r = v + 1, a >= n)
            return r;
        }
      }
      var ct = [""];
      function Xt(e) {
        for (; ct.length <= e; )
          ct.push($e(ct) + " ");
        return ct[e];
      }
      function $e(e) {
        return e[e.length - 1];
      }
      function zt(e, n) {
        for (var i = [], r = 0; r < e.length; r++)
          i[r] = n(e[r], r);
        return i;
      }
      function Ar(e, n, i) {
        for (var r = 0, a = i(n); r < e.length && i(e[r]) <= a; )
          r++;
        e.splice(r, 0, n);
      }
      function bn() {
      }
      function mn(e, n) {
        var i;
        return Object.create ? i = Object.create(e) : (bn.prototype = e, i = new bn()), n && se(n, i), i;
      }
      var Fn = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function Sn(e) {
        return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || Fn.test(e));
      }
      function Vt(e, n) {
        return n ? n.source.indexOf("\\w") > -1 && Sn(e) ? !0 : n.test(e) : Sn(e);
      }
      function En(e) {
        for (var n in e)
          if (e.hasOwnProperty(n) && e[n])
            return !1;
        return !0;
      }
      var Ct = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function qe(e) {
        return e.charCodeAt(0) >= 768 && Ct.test(e);
      }
      function Jt(e, n, i) {
        for (; (i < 0 ? n > 0 : n < e.length) && qe(e.charAt(n)); )
          n += i;
        return n;
      }
      function je(e, n, i) {
        for (var r = n > i ? -1 : 1; ; ) {
          if (n == i)
            return n;
          var a = (n + i) / 2, v = r < 0 ? Math.ceil(a) : Math.floor(a);
          if (v == n)
            return e(v) ? n : i;
          e(v) ? i = v : n = v + r;
        }
      }
      function Ce(e, n, i, r) {
        if (!e)
          return r(n, i, "ltr", 0);
        for (var a = !1, v = 0; v < e.length; ++v) {
          var R = e[v];
          (R.from < i && R.to > n || n == i && R.to == n) && (r(Math.max(R.from, n), Math.min(R.to, i), R.level == 1 ? "rtl" : "ltr", v), a = !0);
        }
        a || r(n, i, "ltr");
      }
      var ge = null;
      function Oe(e, n, i) {
        var r;
        ge = null;
        for (var a = 0; a < e.length; ++a) {
          var v = e[a];
          if (v.from < n && v.to > n)
            return a;
          v.to == n && (v.from != v.to && i == "before" ? r = a : ge = a), v.from == n && (v.from != v.to && i != "before" ? r = a : ge = a);
        }
        return r != null ? r : ge;
      }
      var Se = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", n = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function i($) {
          return $ <= 247 ? e.charAt($) : 1424 <= $ && $ <= 1524 ? "R" : 1536 <= $ && $ <= 1785 ? n.charAt($ - 1536) : 1774 <= $ && $ <= 2220 ? "r" : 8192 <= $ && $ <= 8203 ? "w" : $ == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, a = /[stwN]/, v = /[LRr]/, R = /[Lb1n]/, L = /[1n]/;
        function F($, Y, G) {
          this.level = $, this.from = Y, this.to = G;
        }
        return function($, Y) {
          var G = Y == "ltr" ? "L" : "R";
          if ($.length == 0 || Y == "ltr" && !r.test($))
            return !1;
          for (var Z = $.length, J = [], te = 0; te < Z; ++te)
            J.push(i($.charCodeAt(te)));
          for (var ie = 0, de = G; ie < Z; ++ie) {
            var he = J[ie];
            he == "m" ? J[ie] = de : de = he;
          }
          for (var xe = 0, me = G; xe < Z; ++xe) {
            var Te = J[xe];
            Te == "1" && me == "r" ? J[xe] = "n" : v.test(Te) && (me = Te, Te == "r" && (J[xe] = "R"));
          }
          for (var Re = 1, Me = J[0]; Re < Z - 1; ++Re) {
            var He = J[Re];
            He == "+" && Me == "1" && J[Re + 1] == "1" ? J[Re] = "1" : He == "," && Me == J[Re + 1] && (Me == "1" || Me == "n") && (J[Re] = Me), Me = He;
          }
          for (var nt = 0; nt < Z; ++nt) {
            var Rt = J[nt];
            if (Rt == ",")
              J[nt] = "N";
            else if (Rt == "%") {
              var ot = void 0;
              for (ot = nt + 1; ot < Z && J[ot] == "%"; ++ot)
                ;
              for (var ln = nt && J[nt - 1] == "!" || ot < Z && J[ot] == "1" ? "1" : "N", tn = nt; tn < ot; ++tn)
                J[tn] = ln;
              nt = ot - 1;
            }
          }
          for (var mt = 0, nn = G; mt < Z; ++mt) {
            var Ft = J[mt];
            nn == "L" && Ft == "1" ? J[mt] = "L" : v.test(Ft) && (nn = Ft);
          }
          for (var xt = 0; xt < Z; ++xt)
            if (a.test(J[xt])) {
              var gt = void 0;
              for (gt = xt + 1; gt < Z && a.test(J[gt]); ++gt)
                ;
              for (var ft = (xt ? J[xt - 1] : G) == "L", rn = (gt < Z ? J[gt] : G) == "L", oi = ft == rn ? ft ? "L" : "R" : G, vr = xt; vr < gt; ++vr)
                J[vr] = oi;
              xt = gt - 1;
            }
          for (var Wt = [], zn, Pt = 0; Pt < Z; )
            if (R.test(J[Pt])) {
              var tl = Pt;
              for (++Pt; Pt < Z && R.test(J[Pt]); ++Pt)
                ;
              Wt.push(new F(0, tl, Pt));
            } else {
              var Xn = Pt, Rr = Wt.length, Pr = Y == "rtl" ? 1 : 0;
              for (++Pt; Pt < Z && J[Pt] != "L"; ++Pt)
                ;
              for (var Qt = Xn; Qt < Pt; )
                if (L.test(J[Qt])) {
                  Xn < Qt && (Wt.splice(Rr, 0, new F(1, Xn, Qt)), Rr += Pr);
                  var ai = Qt;
                  for (++Qt; Qt < Pt && L.test(J[Qt]); ++Qt)
                    ;
                  Wt.splice(Rr, 0, new F(2, ai, Qt)), Rr += Pr, Xn = Qt;
                } else
                  ++Qt;
              Xn < Pt && Wt.splice(Rr, 0, new F(1, Xn, Pt));
            }
          return Y == "ltr" && (Wt[0].level == 1 && (zn = $.match(/^\s+/)) && (Wt[0].from = zn[0].length, Wt.unshift(new F(0, 0, zn[0].length))), $e(Wt).level == 1 && (zn = $.match(/\s+$/)) && ($e(Wt).to -= zn[0].length, Wt.push(new F(0, Z - zn[0].length, Z)))), Y == "rtl" ? Wt.reverse() : Wt;
        };
      }();
      function oe(e, n) {
        var i = e.order;
        return i == null && (i = e.order = Se(e.text, n)), i;
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
      function We(e, n, i) {
        if (e.removeEventListener)
          e.removeEventListener(n, i, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + n, i);
        else {
          var r = e._handlers, a = r && r[n];
          if (a) {
            var v = Ee(a, i);
            v > -1 && (r[n] = a.slice(0, v).concat(a.slice(v + 1)));
          }
        }
      }
      function Ye(e, n) {
        var i = Ie(e, n);
        if (!!i.length)
          for (var r = Array.prototype.slice.call(arguments, 2), a = 0; a < i.length; ++a)
            i[a].apply(null, r);
      }
      function Xe(e, n, i) {
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
      function tt(e, n) {
        return Ie(e, n).length > 0;
      }
      function Yt(e) {
        e.prototype.on = function(n, i) {
          ue(this, n, i);
        }, e.prototype.off = function(n, i) {
          We(this, n, i);
        };
      }
      function At(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function er(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Zt(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function tr(e) {
        At(e), er(e);
      }
      function mi(e) {
        return e.target || e.srcElement;
      }
      function Cn(e) {
        var n = e.which;
        return n == null && (e.button & 1 ? n = 1 : e.button & 2 ? n = 3 : e.button & 4 && (n = 2)), T && e.ctrlKey && n == 1 && (n = 3), n;
      }
      var sa = function() {
        if (c && m < 9)
          return !1;
        var e = I("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Or;
      function uo(e) {
        if (Or == null) {
          var n = I("span", "\u200B");
          j(e, I("span", [n, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Or = n.offsetWidth <= 1 && n.offsetHeight > 2 && !(c && m < 8));
        }
        var i = Or ? I("span", "\u200B") : I("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""), i;
      }
      var gi;
      function nr(e) {
        if (gi != null)
          return gi;
        var n = j(e, document.createTextNode("A\u062EA")), i = k(n, 0, 1).getBoundingClientRect(), r = k(n, 1, 2).getBoundingClientRect();
        return H(e), !i || i.left == i.right ? !1 : gi = r.right - i.right < 3;
      }
      var gn = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var n = 0, i = [], r = e.length; n <= r; ) {
          var a = e.indexOf(`
`, n);
          a == -1 && (a = e.length);
          var v = e.slice(n, e.charAt(a - 1) == "\r" ? a - 1 : a), R = v.indexOf("\r");
          R != -1 ? (i.push(v.slice(0, R)), n += R + 1) : (i.push(v), n = a + 1);
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
      }, fo = function() {
        var e = I("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), Tn = null;
      function ua(e) {
        if (Tn != null)
          return Tn;
        var n = j(e, I("span", "x")), i = n.getBoundingClientRect(), r = k(n, 0, 1).getBoundingClientRect();
        return Tn = Math.abs(i.left - r.left) > 1;
      }
      var Br = {}, wn = {};
      function Dn(e, n) {
        arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), Br[e] = n;
      }
      function xr(e, n) {
        wn[e] = n;
      }
      function Hr(e) {
        if (typeof e == "string" && wn.hasOwnProperty(e))
          e = wn[e];
        else if (e && typeof e.name == "string" && wn.hasOwnProperty(e.name)) {
          var n = wn[e.name];
          typeof n == "string" && (n = { name: n }), e = mn(n, e), e.name = n.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Hr("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Hr("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function Ur(e, n) {
        n = Hr(n);
        var i = Br[n.name];
        if (!i)
          return Ur(e, "text/plain");
        var r = i(e, n);
        if (ir.hasOwnProperty(n.name)) {
          var a = ir[n.name];
          for (var v in a)
            !a.hasOwnProperty(v) || (r.hasOwnProperty(v) && (r["_" + v] = r[v]), r[v] = a[v]);
        }
        if (r.name = n.name, n.helperType && (r.helperType = n.helperType), n.modeProps)
          for (var R in n.modeProps)
            r[R] = n.modeProps[R];
        return r;
      }
      var ir = {};
      function zr(e, n) {
        var i = ir.hasOwnProperty(e) ? ir[e] : ir[e] = {};
        se(n, i);
      }
      function On(e, n) {
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
      function yi(e, n) {
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
          var r = function(R) {
            return i ? R.toLowerCase() : R;
          }, a = this.string.substr(this.pos, e.length);
          if (r(a) == r(e))
            return n !== !1 && (this.pos += e.length), !0;
        } else {
          var v = this.string.slice(this.pos).match(e);
          return v && v.index > 0 ? null : (v && n !== !1 && (this.pos += v[0].length), v);
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
            var a = i.children[r], v = a.chunkSize();
            if (n < v) {
              i = a;
              break;
            }
            n -= v;
          }
        return i.lines[n];
      }
      function Vn(e, n, i) {
        var r = [], a = n.line;
        return e.iter(n.line, i.line + 1, function(v) {
          var R = v.text;
          a == i.line && (R = R.slice(0, i.ch)), a == n.line && (R = R.slice(n.ch)), r.push(R), ++a;
        }), r;
      }
      function Ai(e, n, i) {
        var r = [];
        return e.iter(n, i, function(a) {
          r.push(a.text);
        }), r;
      }
      function dn(e, n) {
        var i = n - e.height;
        if (i)
          for (var r = e; r; r = r.parent)
            r.height += i;
      }
      function W(e) {
        if (e.parent == null)
          return null;
        for (var n = e.parent, i = Ee(n.lines, e), r = n.parent; r; n = r, r = r.parent)
          for (var a = 0; r.children[a] != n; ++a)
            i += r.children[a].chunkSize();
        return i + n.first;
      }
      function Q(e, n) {
        var i = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var a = e.children[r], v = a.height;
              if (n < v) {
                e = a;
                continue e;
              }
              n -= v, i += a.chunkSize();
            }
            return i;
          } while (!e.lines);
        for (var R = 0; R < e.lines.length; ++R) {
          var L = e.lines[R], F = L.height;
          if (n < F)
            break;
          n -= F;
        }
        return i + R;
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
      function Ge(e, n) {
        return e.sticky == n.sticky && ye(e, n) == 0;
      }
      function Tt(e) {
        return ee(e.line, e.ch);
      }
      function qt(e, n) {
        return ye(e, n) < 0 ? n : e;
      }
      function Wr(e, n) {
        return ye(e, n) < 0 ? e : n;
      }
      function Ds(e, n) {
        return Math.max(e.first, Math.min(n, e.first + e.size - 1));
      }
      function Be(e, n) {
        if (n.line < e.first)
          return ee(e.first, 0);
        var i = e.first + e.size - 1;
        return n.line > i ? ee(i, we(e, i).text.length) : Yd(n, we(e, n.line).text.length);
      }
      function Yd(e, n) {
        var i = e.ch;
        return i == null || i > n ? ee(e.line, n) : i < 0 ? ee(e.line, 0) : e;
      }
      function Ms(e, n) {
        for (var i = [], r = 0; r < n.length; r++)
          i[r] = Be(e, n[r]);
        return i;
      }
      var co = function(e, n) {
        this.state = e, this.lookAhead = n;
      }, Bn = function(e, n, i, r) {
        this.state = n, this.doc = e, this.line = i, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      Bn.prototype.lookAhead = function(e) {
        var n = this.doc.getLine(this.line + e);
        return n != null && e > this.maxLookAhead && (this.maxLookAhead = e), n;
      }, Bn.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var n = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: n && n.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, Bn.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, Bn.fromSaved = function(e, n, i) {
        return n instanceof co ? new Bn(e, On(e.mode, n.state), i, n.lookAhead) : new Bn(e, On(e.mode, n), i);
      }, Bn.prototype.save = function(e) {
        var n = e !== !1 ? On(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new co(n, this.maxLookAhead) : n;
      };
      function Rs(e, n, i, r) {
        var a = [e.state.modeGen], v = {};
        Os(
          e,
          n.text,
          e.doc.mode,
          i,
          function($, Y) {
            return a.push($, Y);
          },
          v,
          r
        );
        for (var R = i.state, L = function($) {
          i.baseTokens = a;
          var Y = e.state.overlays[$], G = 1, Z = 0;
          i.state = !0, Os(e, n.text, Y.mode, i, function(J, te) {
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
          }, v), i.state = R, i.baseTokens = null, i.baseTokenPos = 1;
        }, F = 0; F < e.state.overlays.length; ++F)
          L(F);
        return { styles: a, classes: v.bgClass || v.textClass ? v : null };
      }
      function Ps(e, n, i) {
        if (!n.styles || n.styles[0] != e.state.modeGen) {
          var r = xi(e, W(n)), a = n.text.length > e.options.maxHighlightLength && On(e.doc.mode, r.state), v = Rs(e, n, r);
          a && (r.state = a), n.stateAfter = r.save(!a), n.styles = v.styles, v.classes ? n.styleClasses = v.classes : n.styleClasses && (n.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return n.styles;
      }
      function xi(e, n, i) {
        var r = e.doc, a = e.display;
        if (!r.mode.startState)
          return new Bn(r, !0, n);
        var v = kd(e, n, i), R = v > r.first && we(r, v - 1).stateAfter, L = R ? Bn.fromSaved(r, R, v) : new Bn(r, $r(r.mode), v);
        return r.iter(v, n, function(F) {
          fa(e, F.text, L);
          var $ = L.line;
          F.stateAfter = $ == n - 1 || $ % 5 == 0 || $ >= a.viewFrom && $ < a.viewTo ? L.save() : null, L.nextLine();
        }), i && (r.modeFrontier = L.line), L;
      }
      function fa(e, n, i, r) {
        var a = e.doc.mode, v = new ut(n, e.options.tabSize, i);
        for (v.start = v.pos = r || 0, n == "" && Is(a, i.state); !v.eol(); )
          da(a, v, i.state), v.start = v.pos;
      }
      function Is(e, n) {
        if (e.blankLine)
          return e.blankLine(n);
        if (!!e.innerMode) {
          var i = yi(e, n);
          if (i.mode.blankLine)
            return i.mode.blankLine(i.state);
        }
      }
      function da(e, n, i, r) {
        for (var a = 0; a < 10; a++) {
          r && (r[0] = yi(e, i).mode);
          var v = e.token(n, i);
          if (n.pos > n.start)
            return v;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var Ls = function(e, n, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = n || null, this.state = i;
      };
      function Ns(e, n, i, r) {
        var a = e.doc, v = a.mode, R;
        n = Be(a, n);
        var L = we(a, n.line), F = xi(e, n.line, i), $ = new ut(L.text, e.options.tabSize, F), Y;
        for (r && (Y = []); (r || $.pos < n.ch) && !$.eol(); )
          $.start = $.pos, R = da(v, $, F.state), r && Y.push(new Ls($, R, On(a.mode, F.state)));
        return r ? Y : new Ls($, R, F.state);
      }
      function Fs(e, n) {
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
      function Os(e, n, i, r, a, v, R) {
        var L = i.flattenSpans;
        L == null && (L = e.options.flattenSpans);
        var F = 0, $ = null, Y = new ut(n, e.options.tabSize, r), G, Z = e.options.addModeClass && [null];
        for (n == "" && Fs(Is(i, r.state), v); !Y.eol(); ) {
          if (Y.pos > e.options.maxHighlightLength ? (L = !1, R && fa(e, n, r, Y.pos), Y.pos = n.length, G = null) : G = Fs(da(i, Y, r.state, Z), v), Z) {
            var J = Z[0].name;
            J && (G = "m-" + (G ? J + " " + G : J));
          }
          if (!L || $ != G) {
            for (; F < Y.start; )
              F = Math.min(Y.start, F + 5e3), a(F, $);
            $ = G;
          }
          Y.start = Y.pos;
        }
        for (; F < Y.pos; ) {
          var te = Math.min(Y.pos, F + 5e3);
          a(te, $), F = te;
        }
      }
      function kd(e, n, i) {
        for (var r, a, v = e.doc, R = i ? -1 : n - (e.doc.mode.innerMode ? 1e3 : 100), L = n; L > R; --L) {
          if (L <= v.first)
            return v.first;
          var F = we(v, L - 1), $ = F.stateAfter;
          if ($ && (!i || L + ($ instanceof co ? $.lookAhead : 0) <= v.modeFrontier))
            return L;
          var Y = pe(F.text, null, e.options.tabSize);
          (a == null || r > Y) && (a = L - 1, r = Y);
        }
        return a;
      }
      function Qd(e, n) {
        if (e.modeFrontier = Math.min(e.modeFrontier, n), !(e.highlightFrontier < n - 10)) {
          for (var i = e.first, r = n - 1; r > i; r--) {
            var a = we(e, r).stateAfter;
            if (a && (!(a instanceof co) || r + a.lookAhead < n)) {
              i = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, i);
        }
      }
      var Bs = !1, Yn = !1;
      function Gd() {
        Bs = !0;
      }
      function Kd() {
        Yn = !0;
      }
      function vo(e, n, i) {
        this.marker = e, this.from = n, this.to = i;
      }
      function bi(e, n) {
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.marker == n)
              return r;
          }
      }
      function Xd(e, n) {
        for (var i, r = 0; r < e.length; ++r)
          e[r] != n && (i || (i = [])).push(e[r]);
        return i;
      }
      function Jd(e, n, i) {
        var r = i && window.WeakSet && (i.markedSpans || (i.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(n) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([n]) : [n], r && r.add(e.markedSpans)), n.marker.attachLine(e);
      }
      function Zd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var v = e[a], R = v.marker, L = v.from == null || (R.inclusiveLeft ? v.from <= n : v.from < n);
            if (L || v.from == n && R.type == "bookmark" && (!i || !v.marker.insertLeft)) {
              var F = v.to == null || (R.inclusiveRight ? v.to >= n : v.to > n);
              (r || (r = [])).push(new vo(R, v.from, F ? null : v.to));
            }
          }
        return r;
      }
      function qd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var v = e[a], R = v.marker, L = v.to == null || (R.inclusiveRight ? v.to >= n : v.to > n);
            if (L || v.from == n && R.type == "bookmark" && (!i || v.marker.insertLeft)) {
              var F = v.from == null || (R.inclusiveLeft ? v.from <= n : v.from < n);
              (r || (r = [])).push(new vo(
                R,
                F ? null : v.from - n,
                v.to == null ? null : v.to - n
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
        var a = n.from.ch, v = n.to.ch, R = ye(n.from, n.to) == 0, L = Zd(i, a, R), F = qd(r, v, R), $ = n.text.length == 1, Y = $e(n.text).length + ($ ? a : 0);
        if (L)
          for (var G = 0; G < L.length; ++G) {
            var Z = L[G];
            if (Z.to == null) {
              var J = bi(F, Z.marker);
              J ? $ && (Z.to = J.to == null ? null : J.to + Y) : Z.to = a;
            }
          }
        if (F)
          for (var te = 0; te < F.length; ++te) {
            var ie = F[te];
            if (ie.to != null && (ie.to += Y), ie.from == null) {
              var de = bi(L, ie.marker);
              de || (ie.from = Y, $ && (L || (L = [])).push(ie));
            } else
              ie.from += Y, $ && (L || (L = [])).push(ie);
          }
        L && (L = Hs(L)), F && F != L && (F = Hs(F));
        var he = [L];
        if (!$) {
          var xe = n.text.length - 2, me;
          if (xe > 0 && L)
            for (var Te = 0; Te < L.length; ++Te)
              L[Te].to == null && (me || (me = [])).push(new vo(L[Te].marker, null, null));
          for (var Re = 0; Re < xe; ++Re)
            he.push(me);
          he.push(F);
        }
        return he;
      }
      function Hs(e) {
        for (var n = 0; n < e.length; ++n) {
          var i = e[n];
          i.from != null && i.from == i.to && i.marker.clearWhenEmpty !== !1 && e.splice(n--, 1);
        }
        return e.length ? e : null;
      }
      function _d(e, n, i) {
        var r = null;
        if (e.iter(n.line, i.line + 1, function(J) {
          if (J.markedSpans)
            for (var te = 0; te < J.markedSpans.length; ++te) {
              var ie = J.markedSpans[te].marker;
              ie.readOnly && (!r || Ee(r, ie) == -1) && (r || (r = [])).push(ie);
            }
        }), !r)
          return null;
        for (var a = [{ from: n, to: i }], v = 0; v < r.length; ++v)
          for (var R = r[v], L = R.find(0), F = 0; F < a.length; ++F) {
            var $ = a[F];
            if (!(ye($.to, L.from) < 0 || ye($.from, L.to) > 0)) {
              var Y = [F, 1], G = ye($.from, L.from), Z = ye($.to, L.to);
              (G < 0 || !R.inclusiveLeft && !G) && Y.push({ from: $.from, to: L.from }), (Z > 0 || !R.inclusiveRight && !Z) && Y.push({ from: L.to, to: $.to }), a.splice.apply(a, Y), F += Y.length - 3;
            }
          }
        return a;
      }
      function Us(e) {
        var n = e.markedSpans;
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function zs(e, n) {
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.attachLine(e);
          e.markedSpans = n;
        }
      }
      function po(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function ho(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function va(e, n) {
        var i = e.lines.length - n.lines.length;
        if (i != 0)
          return i;
        var r = e.find(), a = n.find(), v = ye(r.from, a.from) || po(e) - po(n);
        if (v)
          return -v;
        var R = ye(r.to, a.to) || ho(e) - ho(n);
        return R || n.id - e.id;
      }
      function $s(e, n) {
        var i = Yn && e.markedSpans, r;
        if (i)
          for (var a = void 0, v = 0; v < i.length; ++v)
            a = i[v], a.marker.collapsed && (n ? a.from : a.to) == null && (!r || va(r, a.marker) < 0) && (r = a.marker);
        return r;
      }
      function Ws(e) {
        return $s(e, !0);
      }
      function mo(e) {
        return $s(e, !1);
      }
      function ec(e, n) {
        var i = Yn && e.markedSpans, r;
        if (i)
          for (var a = 0; a < i.length; ++a) {
            var v = i[a];
            v.marker.collapsed && (v.from == null || v.from < n) && (v.to == null || v.to > n) && (!r || va(r, v.marker) < 0) && (r = v.marker);
          }
        return r;
      }
      function js(e, n, i, r, a) {
        var v = we(e, n), R = Yn && v.markedSpans;
        if (R)
          for (var L = 0; L < R.length; ++L) {
            var F = R[L];
            if (!!F.marker.collapsed) {
              var $ = F.marker.find(0), Y = ye($.from, i) || po(F.marker) - po(a), G = ye($.to, r) || ho(F.marker) - ho(a);
              if (!(Y >= 0 && G <= 0 || Y <= 0 && G >= 0) && (Y <= 0 && (F.marker.inclusiveRight && a.inclusiveLeft ? ye($.to, i) >= 0 : ye($.to, i) > 0) || Y >= 0 && (F.marker.inclusiveRight && a.inclusiveLeft ? ye($.from, r) <= 0 : ye($.from, r) < 0)))
                return !0;
            }
          }
      }
      function Mn(e) {
        for (var n; n = Ws(e); )
          e = n.find(-1, !0).line;
        return e;
      }
      function tc(e) {
        for (var n; n = mo(e); )
          e = n.find(1, !0).line;
        return e;
      }
      function nc(e) {
        for (var n, i; n = mo(e); )
          e = n.find(1, !0).line, (i || (i = [])).push(e);
        return i;
      }
      function pa(e, n) {
        var i = we(e, n), r = Mn(i);
        return i == r ? n : W(r);
      }
      function Vs(e, n) {
        if (n > e.lastLine())
          return n;
        var i = we(e, n), r;
        if (!or(e, i))
          return n;
        for (; r = mo(i); )
          i = r.find(1, !0).line;
        return W(i) + 1;
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
          return ha(e, r.line, bi(r.line.markedSpans, i.marker));
        }
        if (i.marker.inclusiveRight && i.to == n.text.length)
          return !0;
        for (var a = void 0, v = 0; v < n.markedSpans.length; ++v)
          if (a = n.markedSpans[v], a.marker.collapsed && !a.marker.widgetNode && a.from == i.to && (a.to == null || a.to != i.from) && (a.marker.inclusiveLeft || i.marker.inclusiveRight) && ha(e, n, a))
            return !0;
      }
      function kn(e) {
        e = Mn(e);
        for (var n = 0, i = e.parent, r = 0; r < i.lines.length; ++r) {
          var a = i.lines[r];
          if (a == e)
            break;
          n += a.height;
        }
        for (var v = i.parent; v; i = v, v = i.parent)
          for (var R = 0; R < v.children.length; ++R) {
            var L = v.children[R];
            if (L == i)
              break;
            n += L.height;
          }
        return n;
      }
      function go(e) {
        if (e.height == 0)
          return 0;
        for (var n = e.text.length, i, r = e; i = Ws(r); ) {
          var a = i.find(0, !0);
          r = a.from.line, n += a.from.ch - a.to.ch;
        }
        for (r = e; i = mo(r); ) {
          var v = i.find(0, !0);
          n -= r.text.length - v.from.ch, r = v.to.line, n += r.text.length - v.to.ch;
        }
        return n;
      }
      function ma(e) {
        var n = e.display, i = e.doc;
        n.maxLine = we(i, i.first), n.maxLineLength = go(n.maxLine), n.maxLineChanged = !0, i.iter(function(r) {
          var a = go(r);
          a > n.maxLineLength && (n.maxLineLength = a, n.maxLine = r);
        });
      }
      var jr = function(e, n, i) {
        this.text = e, zs(this, n), this.height = i ? i(this) : 1;
      };
      jr.prototype.lineNo = function() {
        return W(this);
      }, Yt(jr);
      function rc(e, n, i, r) {
        e.text = n, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Us(e), zs(e, i);
        var a = r ? r(e) : 1;
        a != e.height && dn(e, a);
      }
      function ic(e) {
        e.parent = null, Us(e);
      }
      var oc = {}, ac = {};
      function Ys(e, n) {
        if (!e || /^\s*$/.test(e))
          return null;
        var i = n.addModeClass ? ac : oc;
        return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function ks(e, n) {
        var i = V("span", null, null, E ? "padding-right: .1px" : null), r = {
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
          var v = a ? n.rest[a - 1] : n.line, R = void 0;
          r.pos = 0, r.addToken = sc, nr(e.display.measure) && (R = oe(v, e.doc.direction)) && (r.addToken = fc(r.addToken, R)), r.map = [];
          var L = n != e.display.externalMeasured && W(v);
          dc(v, r, Ps(e, v, L)), v.styleClasses && (v.styleClasses.bgClass && (r.bgClass = _(v.styleClasses.bgClass, r.bgClass || "")), v.styleClasses.textClass && (r.textClass = _(v.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(uo(e.display.measure))), a == 0 ? (n.measure.map = r.map, n.measure.cache = {}) : ((n.measure.maps || (n.measure.maps = [])).push(r.map), (n.measure.caches || (n.measure.caches = [])).push({}));
        }
        if (E) {
          var F = r.content.lastChild;
          (/\bcm-tab\b/.test(F.className) || F.querySelector && F.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return Ye(e, "renderLine", e, n.line, r.pre), r.pre.className && (r.textClass = _(r.pre.className, r.textClass || "")), r;
      }
      function lc(e) {
        var n = I("span", "\u2022", "cm-invalidchar");
        return n.title = "\\u" + e.charCodeAt(0).toString(16), n.setAttribute("aria-label", n.title), n;
      }
      function sc(e, n, i, r, a, v, R) {
        if (!!n) {
          var L = e.splitSpaces ? uc(n, e.trailingSpace) : n, F = e.cm.state.specialChars, $ = !1, Y;
          if (!F.test(n))
            e.col += n.length, Y = document.createTextNode(L), e.map.push(e.pos, e.pos + n.length, Y), c && m < 9 && ($ = !0), e.pos += n.length;
          else {
            Y = document.createDocumentFragment();
            for (var G = 0; ; ) {
              F.lastIndex = G;
              var Z = F.exec(n), J = Z ? Z.index - G : n.length - G;
              if (J) {
                var te = document.createTextNode(L.slice(G, G + J));
                c && m < 9 ? Y.appendChild(I("span", [te])) : Y.appendChild(te), e.map.push(e.pos, e.pos + J, te), e.col += J, e.pos += J;
              }
              if (!Z)
                break;
              G += J + 1;
              var ie = void 0;
              if (Z[0] == "	") {
                var de = e.cm.options.tabSize, he = de - e.col % de;
                ie = Y.appendChild(I("span", Xt(he), "cm-tab")), ie.setAttribute("role", "presentation"), ie.setAttribute("cm-text", "	"), e.col += he;
              } else
                Z[0] == "\r" || Z[0] == `
` ? (ie = Y.appendChild(I("span", Z[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), ie.setAttribute("cm-text", Z[0]), e.col += 1) : (ie = e.cm.options.specialCharPlaceholder(Z[0]), ie.setAttribute("cm-text", Z[0]), c && m < 9 ? Y.appendChild(I("span", [ie])) : Y.appendChild(ie), e.col += 1);
              e.map.push(e.pos, e.pos + 1, ie), e.pos++;
            }
          }
          if (e.trailingSpace = L.charCodeAt(n.length - 1) == 32, i || r || a || $ || v || R) {
            var xe = i || "";
            r && (xe += r), a && (xe += a);
            var me = I("span", [Y], xe, v);
            if (R)
              for (var Te in R)
                R.hasOwnProperty(Te) && Te != "style" && Te != "class" && me.setAttribute(Te, R[Te]);
            return e.content.appendChild(me);
          }
          e.content.appendChild(Y);
        }
      }
      function uc(e, n) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var i = n, r = "", a = 0; a < e.length; a++) {
          var v = e.charAt(a);
          v == " " && i && (a == e.length - 1 || e.charCodeAt(a + 1) == 32) && (v = "\xA0"), r += v, i = v == " ";
        }
        return r;
      }
      function fc(e, n) {
        return function(i, r, a, v, R, L, F) {
          a = a ? a + " cm-force-border" : "cm-force-border";
          for (var $ = i.pos, Y = $ + r.length; ; ) {
            for (var G = void 0, Z = 0; Z < n.length && (G = n[Z], !(G.to > $ && G.from <= $)); Z++)
              ;
            if (G.to >= Y)
              return e(i, r, a, v, R, L, F);
            e(i, r.slice(0, G.to - $), a, v, null, L, F), v = null, r = r.slice(G.to - $), $ = G.to;
          }
        };
      }
      function Qs(e, n, i, r) {
        var a = !r && i.widgetNode;
        a && e.map.push(e.pos, e.pos + n, a), !r && e.cm.display.input.needsContentAttribute && (a || (a = e.content.appendChild(document.createElement("span"))), a.setAttribute("cm-marker", i.id)), a && (e.cm.display.input.setUneditable(a), e.content.appendChild(a)), e.pos += n, e.trailingSpace = !1;
      }
      function dc(e, n, i) {
        var r = e.markedSpans, a = e.text, v = 0;
        if (!r) {
          for (var R = 1; R < i.length; R += 2)
            n.addToken(n, a.slice(v, v = i[R]), Ys(i[R + 1], n.cm.options));
          return;
        }
        for (var L = a.length, F = 0, $ = 1, Y = "", G, Z, J = 0, te, ie, de, he, xe; ; ) {
          if (J == F) {
            te = ie = de = Z = "", xe = null, he = null, J = 1 / 0;
            for (var me = [], Te = void 0, Re = 0; Re < r.length; ++Re) {
              var Me = r[Re], He = Me.marker;
              if (He.type == "bookmark" && Me.from == F && He.widgetNode)
                me.push(He);
              else if (Me.from <= F && (Me.to == null || Me.to > F || He.collapsed && Me.to == F && Me.from == F)) {
                if (Me.to != null && Me.to != F && J > Me.to && (J = Me.to, ie = ""), He.className && (te += " " + He.className), He.css && (Z = (Z ? Z + ";" : "") + He.css), He.startStyle && Me.from == F && (de += " " + He.startStyle), He.endStyle && Me.to == J && (Te || (Te = [])).push(He.endStyle, Me.to), He.title && ((xe || (xe = {})).title = He.title), He.attributes)
                  for (var nt in He.attributes)
                    (xe || (xe = {}))[nt] = He.attributes[nt];
                He.collapsed && (!he || va(he.marker, He) < 0) && (he = Me);
              } else
                Me.from > F && J > Me.from && (J = Me.from);
            }
            if (Te)
              for (var Rt = 0; Rt < Te.length; Rt += 2)
                Te[Rt + 1] == J && (ie += " " + Te[Rt]);
            if (!he || he.from == F)
              for (var ot = 0; ot < me.length; ++ot)
                Qs(n, 0, me[ot]);
            if (he && (he.from || 0) == F) {
              if (Qs(
                n,
                (he.to == null ? L + 1 : he.to) - F,
                he.marker,
                he.from == null
              ), he.to == null)
                return;
              he.to == F && (he = !1);
            }
          }
          if (F >= L)
            break;
          for (var ln = Math.min(L, J); ; ) {
            if (Y) {
              var tn = F + Y.length;
              if (!he) {
                var mt = tn > ln ? Y.slice(0, ln - F) : Y;
                n.addToken(
                  n,
                  mt,
                  G ? G + te : te,
                  de,
                  F + mt.length == J ? ie : "",
                  Z,
                  xe
                );
              }
              if (tn >= ln) {
                Y = Y.slice(ln - F), F = ln;
                break;
              }
              F = tn, de = "";
            }
            Y = a.slice(v, v = i[$++]), G = Ys(i[$++], n.cm.options);
          }
        }
      }
      function Gs(e, n, i) {
        this.line = n, this.rest = nc(n), this.size = this.rest ? W($e(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = or(e, n);
      }
      function yo(e, n, i) {
        for (var r = [], a, v = n; v < i; v = a) {
          var R = new Gs(e.doc, we(e.doc, v), v);
          a = v + R.size, r.push(R);
        }
        return r;
      }
      var Vr = null;
      function cc(e) {
        Vr ? Vr.ops.push(e) : e.ownsGroup = Vr = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function vc(e) {
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
      function pc(e, n) {
        var i = e.ownsGroup;
        if (!!i)
          try {
            vc(i);
          } finally {
            Vr = null, n(i);
          }
      }
      var Si = null;
      function wt(e, n) {
        var i = Ie(e, n);
        if (!!i.length) {
          var r = Array.prototype.slice.call(arguments, 2), a;
          Vr ? a = Vr.delayedCallbacks : Si ? a = Si : (a = Si = [], setTimeout(hc, 0));
          for (var v = function(L) {
            a.push(function() {
              return i[L].apply(null, r);
            });
          }, R = 0; R < i.length; ++R)
            v(R);
        }
      }
      function hc() {
        var e = Si;
        Si = null;
        for (var n = 0; n < e.length; ++n)
          e[n]();
      }
      function Ks(e, n, i, r) {
        for (var a = 0; a < n.changes.length; a++) {
          var v = n.changes[a];
          v == "text" ? gc(e, n) : v == "gutter" ? Js(e, n, i, r) : v == "class" ? ga(e, n) : v == "widget" && yc(e, n, r);
        }
        n.changes = null;
      }
      function Ei(e) {
        return e.node == e.text && (e.node = I("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), c && m < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function mc(e, n) {
        var i = n.bgClass ? n.bgClass + " " + (n.line.bgClass || "") : n.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), n.background)
          i ? n.background.className = i : (n.background.parentNode.removeChild(n.background), n.background = null);
        else if (i) {
          var r = Ei(n);
          n.background = r.insertBefore(I("div", null, i), r.firstChild), e.display.input.setUneditable(n.background);
        }
      }
      function Xs(e, n) {
        var i = e.display.externalMeasured;
        return i && i.line == n.line ? (e.display.externalMeasured = null, n.measure = i.measure, i.built) : ks(e, n);
      }
      function gc(e, n) {
        var i = n.text.className, r = Xs(e, n);
        n.text == n.node && (n.node = r.pre), n.text.parentNode.replaceChild(r.pre, n.text), n.text = r.pre, r.bgClass != n.bgClass || r.textClass != n.textClass ? (n.bgClass = r.bgClass, n.textClass = r.textClass, ga(e, n)) : i && (n.text.className = i);
      }
      function ga(e, n) {
        mc(e, n), n.line.wrapClass ? Ei(n).className = n.line.wrapClass : n.node != n.text && (n.node.className = "");
        var i = n.textClass ? n.textClass + " " + (n.line.textClass || "") : n.line.textClass;
        n.text.className = i || "";
      }
      function Js(e, n, i, r) {
        if (n.gutter && (n.node.removeChild(n.gutter), n.gutter = null), n.gutterBackground && (n.node.removeChild(n.gutterBackground), n.gutterBackground = null), n.line.gutterClass) {
          var a = Ei(n);
          n.gutterBackground = I(
            "div",
            null,
            "CodeMirror-gutter-background " + n.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(n.gutterBackground), a.insertBefore(n.gutterBackground, n.text);
        }
        var v = n.line.gutterMarkers;
        if (e.options.lineNumbers || v) {
          var R = Ei(n), L = n.gutter = I("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (L.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(L), R.insertBefore(L, n.text), n.line.gutterClass && (L.className += " " + n.line.gutterClass), e.options.lineNumbers && (!v || !v["CodeMirror-linenumbers"]) && (n.lineNumber = L.appendChild(
            I(
              "div",
              fe(e.options, i),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), v)
            for (var F = 0; F < e.display.gutterSpecs.length; ++F) {
              var $ = e.display.gutterSpecs[F].className, Y = v.hasOwnProperty($) && v[$];
              Y && L.appendChild(I(
                "div",
                [Y],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[$] + "px; width: " + r.gutterWidth[$] + "px"
              ));
            }
        }
      }
      function yc(e, n, i) {
        n.alignable && (n.alignable = null);
        for (var r = P("CodeMirror-linewidget"), a = n.node.firstChild, v = void 0; a; a = v)
          v = a.nextSibling, r.test(a.className) && n.node.removeChild(a);
        Zs(e, n, i);
      }
      function Ac(e, n, i, r) {
        var a = Xs(e, n);
        return n.text = n.node = a.pre, a.bgClass && (n.bgClass = a.bgClass), a.textClass && (n.textClass = a.textClass), ga(e, n), Js(e, n, i, r), Zs(e, n, r), n.node;
      }
      function Zs(e, n, i) {
        if (qs(e, n.line, n, i, !0), n.rest)
          for (var r = 0; r < n.rest.length; r++)
            qs(e, n.rest[r], n, i, !1);
      }
      function qs(e, n, i, r, a) {
        if (!!n.widgets)
          for (var v = Ei(i), R = 0, L = n.widgets; R < L.length; ++R) {
            var F = L[R], $ = I("div", [F.node], "CodeMirror-linewidget" + (F.className ? " " + F.className : ""));
            F.handleMouseEvents || $.setAttribute("cm-ignore-events", "true"), xc(F, $, i, r), e.display.input.setUneditable($), a && F.above ? v.insertBefore($, i.gutter || i.text) : v.appendChild($), wt(F, "redraw");
          }
      }
      function xc(e, n, i, r) {
        if (e.noHScroll) {
          (i.alignable || (i.alignable = [])).push(n);
          var a = r.wrapperWidth;
          n.style.left = r.fixedPos + "px", e.coverGutter || (a -= r.gutterTotalWidth, n.style.paddingLeft = r.gutterTotalWidth + "px"), n.style.width = a + "px";
        }
        e.coverGutter && (n.style.zIndex = 5, n.style.position = "relative", e.noHScroll || (n.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function Ci(e) {
        if (e.height != null)
          return e.height;
        var n = e.doc.cm;
        if (!n)
          return 0;
        if (!K(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + n.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + n.display.wrapper.clientWidth + "px;"), j(n.display.measure, I("div", [e.node], null, i));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function Qn(e, n) {
        for (var i = mi(n); i != e.wrapper; i = i.parentNode)
          if (!i || i.nodeType == 1 && i.getAttribute("cm-ignore-events") == "true" || i.parentNode == e.sizer && i != e.mover)
            return !0;
      }
      function Ao(e) {
        return e.lineSpace.offsetTop;
      }
      function ya(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function _s(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var n = j(e.measure, I("pre", "x", "CodeMirror-line-like")), i = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle, r = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function Hn(e) {
        return Ve - e.display.nativeBarWidth;
      }
      function br(e) {
        return e.display.scroller.clientWidth - Hn(e) - e.display.barWidth;
      }
      function Aa(e) {
        return e.display.scroller.clientHeight - Hn(e) - e.display.barHeight;
      }
      function bc(e, n, i) {
        var r = e.options.lineWrapping, a = r && br(e);
        if (!n.measure.heights || r && n.measure.width != a) {
          var v = n.measure.heights = [];
          if (r) {
            n.measure.width = a;
            for (var R = n.text.firstChild.getClientRects(), L = 0; L < R.length - 1; L++) {
              var F = R[L], $ = R[L + 1];
              Math.abs(F.bottom - $.bottom) > 2 && v.push((F.bottom + $.top) / 2 - i.top);
            }
          }
          v.push(i.bottom - i.top);
        }
      }
      function eu(e, n, i) {
        if (e.line == n)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == n)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var a = 0; a < e.rest.length; a++)
            if (W(e.rest[a]) > i)
              return { map: e.measure.maps[a], cache: e.measure.caches[a], before: !0 };
        }
      }
      function Sc(e, n) {
        n = Mn(n);
        var i = W(n), r = e.display.externalMeasured = new Gs(e.doc, n, i);
        r.lineN = i;
        var a = r.built = ks(e, r);
        return r.text = a.pre, j(e.display.lineMeasure, a.pre), r;
      }
      function tu(e, n, i, r) {
        return Un(e, Yr(e, n), i, r);
      }
      function xa(e, n) {
        if (n >= e.display.viewFrom && n < e.display.viewTo)
          return e.display.view[Cr(e, n)];
        var i = e.display.externalMeasured;
        if (i && n >= i.lineN && n < i.lineN + i.size)
          return i;
      }
      function Yr(e, n) {
        var i = W(n), r = xa(e, i);
        r && !r.text ? r = null : r && r.changes && (Ks(e, r, i, Ta(e)), e.curOp.forceUpdate = !0), r || (r = Sc(e, n));
        var a = eu(r, n, i);
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
      function Un(e, n, i, r, a) {
        n.before && (i = -1);
        var v = i + (r || ""), R;
        return n.cache.hasOwnProperty(v) ? R = n.cache[v] : (n.rect || (n.rect = n.view.text.getBoundingClientRect()), n.hasHeights || (bc(e, n.view, n.rect), n.hasHeights = !0), R = Cc(e, n, i, r), R.bogus || (n.cache[v] = R)), {
          left: R.left,
          right: R.right,
          top: a ? R.rtop : R.top,
          bottom: a ? R.rbottom : R.bottom
        };
      }
      var nu = { left: 0, right: 0, top: 0, bottom: 0 };
      function ru(e, n, i) {
        for (var r, a, v, R, L, F, $ = 0; $ < e.length; $ += 3)
          if (L = e[$], F = e[$ + 1], n < L ? (a = 0, v = 1, R = "left") : n < F ? (a = n - L, v = a + 1) : ($ == e.length - 3 || n == F && e[$ + 3] > n) && (v = F - L, a = v - 1, n >= F && (R = "right")), a != null) {
            if (r = e[$ + 2], L == F && i == (r.insertLeft ? "left" : "right") && (R = i), i == "left" && a == 0)
              for (; $ && e[$ - 2] == e[$ - 3] && e[$ - 1].insertLeft; )
                r = e[($ -= 3) + 2], R = "left";
            if (i == "right" && a == F - L)
              for (; $ < e.length - 3 && e[$ + 3] == e[$ + 4] && !e[$ + 5].insertLeft; )
                r = e[($ += 3) + 2], R = "right";
            break;
          }
        return { node: r, start: a, end: v, collapse: R, coverStart: L, coverEnd: F };
      }
      function Ec(e, n) {
        var i = nu;
        if (n == "left")
          for (var r = 0; r < e.length && (i = e[r]).left == i.right; r++)
            ;
        else
          for (var a = e.length - 1; a >= 0 && (i = e[a]).left == i.right; a--)
            ;
        return i;
      }
      function Cc(e, n, i, r) {
        var a = ru(n.map, i, r), v = a.node, R = a.start, L = a.end, F = a.collapse, $;
        if (v.nodeType == 3) {
          for (var Y = 0; Y < 4; Y++) {
            for (; R && qe(n.line.text.charAt(a.coverStart + R)); )
              --R;
            for (; a.coverStart + L < a.coverEnd && qe(n.line.text.charAt(a.coverStart + L)); )
              ++L;
            if (c && m < 9 && R == 0 && L == a.coverEnd - a.coverStart ? $ = v.parentNode.getBoundingClientRect() : $ = Ec(k(v, R, L).getClientRects(), r), $.left || $.right || R == 0)
              break;
            L = R, R = R - 1, F = "right";
          }
          c && m < 11 && ($ = Tc(e.display.measure, $));
        } else {
          R > 0 && (F = r = "right");
          var G;
          e.options.lineWrapping && (G = v.getClientRects()).length > 1 ? $ = G[r == "right" ? G.length - 1 : 0] : $ = v.getBoundingClientRect();
        }
        if (c && m < 9 && !R && (!$ || !$.left && !$.right)) {
          var Z = v.parentNode.getClientRects()[0];
          Z ? $ = { left: Z.left, right: Z.left + Qr(e.display), top: Z.top, bottom: Z.bottom } : $ = nu;
        }
        for (var J = $.top - n.rect.top, te = $.bottom - n.rect.top, ie = (J + te) / 2, de = n.view.measure.heights, he = 0; he < de.length - 1 && !(ie < de[he]); he++)
          ;
        var xe = he ? de[he - 1] : 0, me = de[he], Te = {
          left: (F == "right" ? $.right : $.left) - n.rect.left,
          right: (F == "left" ? $.left : $.right) - n.rect.left,
          top: xe,
          bottom: me
        };
        return !$.left && !$.right && (Te.bogus = !0), e.options.singleCursorHeightPerLine || (Te.rtop = J, Te.rbottom = te), Te;
      }
      function Tc(e, n) {
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
      function iu(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var n = 0; n < e.rest.length; n++)
            e.measure.caches[n] = {};
      }
      function ou(e) {
        e.display.externalMeasure = null, H(e.display.lineMeasure);
        for (var n = 0; n < e.display.view.length; n++)
          iu(e.display.view[n]);
      }
      function Ti(e) {
        ou(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function au(e) {
        return D && w ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function lu(e) {
        return D && w ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function ba(e) {
        var n = Mn(e), i = n.widgets, r = 0;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].above && (r += Ci(i[a]));
        return r;
      }
      function xo(e, n, i, r, a) {
        if (!a) {
          var v = ba(n);
          i.top += v, i.bottom += v;
        }
        if (r == "line")
          return i;
        r || (r = "local");
        var R = kn(n);
        if (r == "local" ? R += Ao(e.display) : R -= e.display.viewOffset, r == "page" || r == "window") {
          var L = e.display.lineSpace.getBoundingClientRect();
          R += L.top + (r == "window" ? 0 : lu(be(e)));
          var F = L.left + (r == "window" ? 0 : au(be(e)));
          i.left += F, i.right += F;
        }
        return i.top += R, i.bottom += R, i;
      }
      function su(e, n, i) {
        if (i == "div")
          return n;
        var r = n.left, a = n.top;
        if (i == "page")
          r -= au(be(e)), a -= lu(be(e));
        else if (i == "local" || !i) {
          var v = e.display.sizer.getBoundingClientRect();
          r += v.left, a += v.top;
        }
        var R = e.display.lineSpace.getBoundingClientRect();
        return { left: r - R.left, top: a - R.top };
      }
      function bo(e, n, i, r, a) {
        return r || (r = we(e.doc, n.line)), xo(e, r, tu(e, r, n.ch, a), i);
      }
      function Rn(e, n, i, r, a, v) {
        r = r || we(e.doc, n.line), a || (a = Yr(e, r));
        function R(te, ie) {
          var de = Un(e, a, te, ie ? "right" : "left", v);
          return ie ? de.left = de.right : de.right = de.left, xo(e, r, de, i);
        }
        var L = oe(r, e.doc.direction), F = n.ch, $ = n.sticky;
        if (F >= r.text.length ? (F = r.text.length, $ = "before") : F <= 0 && (F = 0, $ = "after"), !L)
          return R($ == "before" ? F - 1 : F, $ == "before");
        function Y(te, ie, de) {
          var he = L[ie], xe = he.level == 1;
          return R(de ? te - 1 : te, xe != de);
        }
        var G = Oe(L, F, $), Z = ge, J = Y(F, G, $ == "before");
        return Z != null && (J.other = Y(F, Z, $ != "before")), J;
      }
      function uu(e, n) {
        var i = 0;
        n = Be(e.doc, n), e.options.lineWrapping || (i = Qr(e.display) * n.ch);
        var r = we(e.doc, n.line), a = kn(r) + Ao(e.display);
        return { left: i, right: i, top: a, bottom: a + r.height };
      }
      function Sa(e, n, i, r, a) {
        var v = ee(e, n, i);
        return v.xRel = a, r && (v.outside = r), v;
      }
      function Ea(e, n, i) {
        var r = e.doc;
        if (i += e.display.viewOffset, i < 0)
          return Sa(r.first, 0, null, -1, -1);
        var a = Q(r, i), v = r.first + r.size - 1;
        if (a > v)
          return Sa(r.first + r.size - 1, we(r, v).text.length, null, 1, 1);
        n < 0 && (n = 0);
        for (var R = we(r, a); ; ) {
          var L = wc(e, R, a, n, i), F = ec(R, L.ch + (L.xRel > 0 || L.outside > 0 ? 1 : 0));
          if (!F)
            return L;
          var $ = F.find(1);
          if ($.line == a)
            return $;
          R = we(r, a = $.line);
        }
      }
      function fu(e, n, i, r) {
        r -= ba(n);
        var a = n.text.length, v = je(function(R) {
          return Un(e, i, R - 1).bottom <= r;
        }, a, 0);
        return a = je(function(R) {
          return Un(e, i, R).top > r;
        }, v, a), { begin: v, end: a };
      }
      function du(e, n, i, r) {
        i || (i = Yr(e, n));
        var a = xo(e, n, Un(e, i, r), "line").top;
        return fu(e, n, i, a);
      }
      function Ca(e, n, i, r) {
        return e.bottom <= i ? !1 : e.top > i ? !0 : (r ? e.left : e.right) > n;
      }
      function wc(e, n, i, r, a) {
        a -= kn(n);
        var v = Yr(e, n), R = ba(n), L = 0, F = n.text.length, $ = !0, Y = oe(n, e.doc.direction);
        if (Y) {
          var G = (e.options.lineWrapping ? Mc : Dc)(e, n, i, v, Y, r, a);
          $ = G.level != 1, L = $ ? G.from : G.to - 1, F = $ ? G.to : G.from - 1;
        }
        var Z = null, J = null, te = je(function(Re) {
          var Me = Un(e, v, Re);
          return Me.top += R, Me.bottom += R, Ca(Me, r, a, !1) ? (Me.top <= a && Me.left <= r && (Z = Re, J = Me), !0) : !1;
        }, L, F), ie, de, he = !1;
        if (J) {
          var xe = r - J.left < J.right - r, me = xe == $;
          te = Z + (me ? 0 : 1), de = me ? "after" : "before", ie = xe ? J.left : J.right;
        } else {
          !$ && (te == F || te == L) && te++, de = te == 0 ? "after" : te == n.text.length ? "before" : Un(e, v, te - ($ ? 1 : 0)).bottom + R <= a == $ ? "after" : "before";
          var Te = Rn(e, ee(i, te, de), "line", n, v);
          ie = Te.left, he = a < Te.top ? -1 : a >= Te.bottom ? 1 : 0;
        }
        return te = Jt(n.text, te, 1), Sa(i, te, de, he, r - ie);
      }
      function Dc(e, n, i, r, a, v, R) {
        var L = je(function(G) {
          var Z = a[G], J = Z.level != 1;
          return Ca(Rn(
            e,
            ee(i, J ? Z.to : Z.from, J ? "before" : "after"),
            "line",
            n,
            r
          ), v, R, !0);
        }, 0, a.length - 1), F = a[L];
        if (L > 0) {
          var $ = F.level != 1, Y = Rn(
            e,
            ee(i, $ ? F.from : F.to, $ ? "after" : "before"),
            "line",
            n,
            r
          );
          Ca(Y, v, R, !0) && Y.top > R && (F = a[L - 1]);
        }
        return F;
      }
      function Mc(e, n, i, r, a, v, R) {
        var L = fu(e, n, r, R), F = L.begin, $ = L.end;
        /\s/.test(n.text.charAt($ - 1)) && $--;
        for (var Y = null, G = null, Z = 0; Z < a.length; Z++) {
          var J = a[Z];
          if (!(J.from >= $ || J.to <= F)) {
            var te = J.level != 1, ie = Un(e, r, te ? Math.min($, J.to) - 1 : Math.max(F, J.from)).right, de = ie < v ? v - ie + 1e9 : ie - v;
            (!Y || G > de) && (Y = J, G = de);
          }
        }
        return Y || (Y = a[a.length - 1]), Y.from < F && (Y = { from: F, to: Y.to, level: Y.level }), Y.to > $ && (Y = { from: Y.from, to: $, level: Y.level }), Y;
      }
      var Sr;
      function kr(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Sr == null) {
          Sr = I("pre", null, "CodeMirror-line-like");
          for (var n = 0; n < 49; ++n)
            Sr.appendChild(document.createTextNode("x")), Sr.appendChild(I("br"));
          Sr.appendChild(document.createTextNode("x"));
        }
        j(e.measure, Sr);
        var i = Sr.offsetHeight / 50;
        return i > 3 && (e.cachedTextHeight = i), H(e.measure), i || 1;
      }
      function Qr(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var n = I("span", "xxxxxxxxxx"), i = I("pre", [n], "CodeMirror-line-like");
        j(e.measure, i);
        var r = n.getBoundingClientRect(), a = (r.right - r.left) / 10;
        return a > 2 && (e.cachedCharWidth = a), a || 10;
      }
      function Ta(e) {
        for (var n = e.display, i = {}, r = {}, a = n.gutters.clientLeft, v = n.gutters.firstChild, R = 0; v; v = v.nextSibling, ++R) {
          var L = e.display.gutterSpecs[R].className;
          i[L] = v.offsetLeft + v.clientLeft + a, r[L] = v.clientWidth;
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
      function cu(e) {
        var n = kr(e.display), i = e.options.lineWrapping, r = i && Math.max(5, e.display.scroller.clientWidth / Qr(e.display) - 3);
        return function(a) {
          if (or(e.doc, a))
            return 0;
          var v = 0;
          if (a.widgets)
            for (var R = 0; R < a.widgets.length; R++)
              a.widgets[R].height && (v += a.widgets[R].height);
          return i ? v + (Math.ceil(a.text.length / r) || 1) * n : v + n;
        };
      }
      function Da(e) {
        var n = e.doc, i = cu(e);
        n.iter(function(r) {
          var a = i(r);
          a != r.height && dn(r, a);
        });
      }
      function Er(e, n, i, r) {
        var a = e.display;
        if (!i && mi(n).getAttribute("cm-not-content") == "true")
          return null;
        var v, R, L = a.lineSpace.getBoundingClientRect();
        try {
          v = n.clientX - L.left, R = n.clientY - L.top;
        } catch {
          return null;
        }
        var F = Ea(e, v, R), $;
        if (r && F.xRel > 0 && ($ = we(e.doc, F.line).text).length == F.ch) {
          var Y = pe($, $.length, e.options.tabSize) - $.length;
          F = ee(F.line, Math.max(0, Math.round((v - _s(e.display).left) / Qr(e.display)) - Y));
        }
        return F;
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
          Yn && Vs(e.doc, i + r) > a.viewFrom ? lr(e) : (a.viewFrom += r, a.viewTo += r);
        else if (n <= a.viewFrom && i >= a.viewTo)
          lr(e);
        else if (n <= a.viewFrom) {
          var v = So(e, i, i + r, 1);
          v ? (a.view = a.view.slice(v.index), a.viewFrom = v.lineN, a.viewTo += r) : lr(e);
        } else if (i >= a.viewTo) {
          var R = So(e, n, n, -1);
          R ? (a.view = a.view.slice(0, R.index), a.viewTo = R.lineN) : lr(e);
        } else {
          var L = So(e, n, n, -1), F = So(e, i, i + r, 1);
          L && F ? (a.view = a.view.slice(0, L.index).concat(yo(e, L.lineN, F.lineN)).concat(a.view.slice(F.index)), a.viewTo += r) : lr(e);
        }
        var $ = a.externalMeasured;
        $ && (i < $.lineN ? $.lineN += r : n < $.lineN + $.size && (a.externalMeasured = null));
      }
      function ar(e, n, i) {
        e.curOp.viewChanged = !0;
        var r = e.display, a = e.display.externalMeasured;
        if (a && n >= a.lineN && n < a.lineN + a.size && (r.externalMeasured = null), !(n < r.viewFrom || n >= r.viewTo)) {
          var v = r.view[Cr(e, n)];
          if (v.node != null) {
            var R = v.changes || (v.changes = []);
            Ee(R, i) == -1 && R.push(i);
          }
        }
      }
      function lr(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function So(e, n, i, r) {
        var a = Cr(e, n), v, R = e.display.view;
        if (!Yn || i == e.doc.first + e.doc.size)
          return { index: a, lineN: i };
        for (var L = e.display.viewFrom, F = 0; F < a; F++)
          L += R[F].size;
        if (L != n) {
          if (r > 0) {
            if (a == R.length - 1)
              return null;
            v = L + R[a].size - n, a++;
          } else
            v = L - n;
          n += v, i += v;
        }
        for (; pa(e.doc, i) != i; ) {
          if (a == (r < 0 ? 0 : R.length - 1))
            return null;
          i += r * R[a - (r < 0 ? 1 : 0)].size, a += r;
        }
        return { index: a, lineN: i };
      }
      function Rc(e, n, i) {
        var r = e.display, a = r.view;
        a.length == 0 || n >= r.viewTo || i <= r.viewFrom ? (r.view = yo(e, n, i), r.viewFrom = n) : (r.viewFrom > n ? r.view = yo(e, n, r.viewFrom).concat(r.view) : r.viewFrom < n && (r.view = r.view.slice(Cr(e, n))), r.viewFrom = n, r.viewTo < i ? r.view = r.view.concat(yo(e, r.viewTo, i)) : r.viewTo > i && (r.view = r.view.slice(0, Cr(e, i)))), r.viewTo = i;
      }
      function vu(e) {
        for (var n = e.display.view, i = 0, r = 0; r < n.length; r++) {
          var a = n[r];
          !a.hidden && (!a.node || a.changes) && ++i;
        }
        return i;
      }
      function wi(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function pu(e, n) {
        n === void 0 && (n = !0);
        var i = e.doc, r = {}, a = r.cursors = document.createDocumentFragment(), v = r.selection = document.createDocumentFragment(), R = e.options.$customCursor;
        R && (n = !0);
        for (var L = 0; L < i.sel.ranges.length; L++)
          if (!(!n && L == i.sel.primIndex)) {
            var F = i.sel.ranges[L];
            if (!(F.from().line >= e.display.viewTo || F.to().line < e.display.viewFrom)) {
              var $ = F.empty();
              if (R) {
                var Y = R(e, F);
                Y && Ma(e, Y, a);
              } else
                ($ || e.options.showCursorWhenSelecting) && Ma(e, F.head, a);
              $ || Pc(e, F, v);
            }
          }
        return r;
      }
      function Ma(e, n, i) {
        var r = Rn(e, n, "div", null, null, !e.options.singleCursorHeightPerLine), a = i.appendChild(I("div", "\xA0", "CodeMirror-cursor"));
        if (a.style.left = r.left + "px", a.style.top = r.top + "px", a.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var v = bo(e, n, "div", null, null), R = v.right - v.left;
          a.style.width = (R > 0 ? R : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var L = i.appendChild(I("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
          L.style.display = "", L.style.left = r.other.left + "px", L.style.top = r.other.top + "px", L.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function Eo(e, n) {
        return e.top - n.top || e.left - n.left;
      }
      function Pc(e, n, i) {
        var r = e.display, a = e.doc, v = document.createDocumentFragment(), R = _s(e.display), L = R.left, F = Math.max(r.sizerWidth, br(e) - r.sizer.offsetLeft) - R.right, $ = a.direction == "ltr";
        function Y(me, Te, Re, Me) {
          Te < 0 && (Te = 0), Te = Math.round(Te), Me = Math.round(Me), v.appendChild(I("div", null, "CodeMirror-selected", "position: absolute; left: " + me + `px;
                             top: ` + Te + "px; width: " + (Re == null ? F - me : Re) + `px;
                             height: ` + (Me - Te) + "px"));
        }
        function G(me, Te, Re) {
          var Me = we(a, me), He = Me.text.length, nt, Rt;
          function ot(mt, nn) {
            return bo(e, ee(me, mt), "div", Me, nn);
          }
          function ln(mt, nn, Ft) {
            var xt = du(e, Me, null, mt), gt = nn == "ltr" == (Ft == "after") ? "left" : "right", ft = Ft == "after" ? xt.begin : xt.end - (/\s/.test(Me.text.charAt(xt.end - 1)) ? 2 : 1);
            return ot(ft, gt)[gt];
          }
          var tn = oe(Me, a.direction);
          return Ce(tn, Te || 0, Re == null ? He : Re, function(mt, nn, Ft, xt) {
            var gt = Ft == "ltr", ft = ot(mt, gt ? "left" : "right"), rn = ot(nn - 1, gt ? "right" : "left"), oi = Te == null && mt == 0, vr = Re == null && nn == He, Wt = xt == 0, zn = !tn || xt == tn.length - 1;
            if (rn.top - ft.top <= 3) {
              var Pt = ($ ? oi : vr) && Wt, tl = ($ ? vr : oi) && zn, Xn = Pt ? L : (gt ? ft : rn).left, Rr = tl ? F : (gt ? rn : ft).right;
              Y(Xn, ft.top, Rr - Xn, ft.bottom);
            } else {
              var Pr, Qt, ai, nl;
              gt ? (Pr = $ && oi && Wt ? L : ft.left, Qt = $ ? F : ln(mt, Ft, "before"), ai = $ ? L : ln(nn, Ft, "after"), nl = $ && vr && zn ? F : rn.right) : (Pr = $ ? ln(mt, Ft, "before") : L, Qt = !$ && oi && Wt ? F : ft.right, ai = !$ && vr && zn ? L : rn.left, nl = $ ? ln(nn, Ft, "after") : F), Y(Pr, ft.top, Qt - Pr, ft.bottom), ft.bottom < rn.top && Y(L, ft.bottom, null, rn.top), Y(ai, rn.top, nl - ai, rn.bottom);
            }
            (!nt || Eo(ft, nt) < 0) && (nt = ft), Eo(rn, nt) < 0 && (nt = rn), (!Rt || Eo(ft, Rt) < 0) && (Rt = ft), Eo(rn, Rt) < 0 && (Rt = rn);
          }), { start: nt, end: Rt };
        }
        var Z = n.from(), J = n.to();
        if (Z.line == J.line)
          G(Z.line, Z.ch, J.ch);
        else {
          var te = we(a, Z.line), ie = we(a, J.line), de = Mn(te) == Mn(ie), he = G(Z.line, Z.ch, de ? te.text.length + 1 : null).end, xe = G(J.line, de ? 0 : null, J.ch).start;
          de && (he.top < xe.top - 2 ? (Y(he.right, he.top, null, he.bottom), Y(L, xe.top, xe.left, xe.bottom)) : Y(he.right, he.top, xe.left - he.right, he.bottom)), he.bottom < xe.top && Y(L, he.bottom, null, xe.top);
        }
        i.appendChild(v);
      }
      function Ra(e) {
        if (!!e.state.focused) {
          var n = e.display;
          clearInterval(n.blinker);
          var i = !0;
          n.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? n.blinker = setInterval(function() {
            e.hasFocus() || Gr(e), n.cursorDiv.style.visibility = (i = !i) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (n.cursorDiv.style.visibility = "hidden");
        }
      }
      function hu(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Ia(e));
      }
      function Pa(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Gr(e));
        }, 100);
      }
      function Ia(e, n) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (Ye(e, "focus", e, n), e.state.focused = !0, X(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), E && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), Ra(e));
      }
      function Gr(e, n) {
        e.state.delayingBlurEvent || (e.state.focused && (Ye(e, "blur", e, n), e.state.focused = !1, z(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function Co(e) {
        for (var n = e.display, i = n.lineDiv.offsetTop, r = Math.max(0, n.scroller.getBoundingClientRect().top), a = n.lineDiv.getBoundingClientRect().top, v = 0, R = 0; R < n.view.length; R++) {
          var L = n.view[R], F = e.options.lineWrapping, $ = void 0, Y = 0;
          if (!L.hidden) {
            if (a += L.line.height, c && m < 8) {
              var G = L.node.offsetTop + L.node.offsetHeight;
              $ = G - i, i = G;
            } else {
              var Z = L.node.getBoundingClientRect();
              $ = Z.bottom - Z.top, !F && L.text.firstChild && (Y = L.text.firstChild.getBoundingClientRect().right - Z.left - 1);
            }
            var J = L.line.height - $;
            if ((J > 5e-3 || J < -5e-3) && (a < r && (v -= J), dn(L.line, $), mu(L.line), L.rest))
              for (var te = 0; te < L.rest.length; te++)
                mu(L.rest[te]);
            if (Y > e.display.sizerWidth) {
              var ie = Math.ceil(Y / Qr(e.display));
              ie > e.display.maxLineLength && (e.display.maxLineLength = ie, e.display.maxLine = L.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(v) > 2 && (n.scroller.scrollTop += v);
      }
      function mu(e) {
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n) {
            var i = e.widgets[n], r = i.node.parentNode;
            r && (i.height = r.offsetHeight);
          }
      }
      function To(e, n, i) {
        var r = i && i.top != null ? Math.max(0, i.top) : e.scroller.scrollTop;
        r = Math.floor(r - Ao(e));
        var a = i && i.bottom != null ? i.bottom : r + e.wrapper.clientHeight, v = Q(n, r), R = Q(n, a);
        if (i && i.ensure) {
          var L = i.ensure.from.line, F = i.ensure.to.line;
          L < v ? (v = L, R = Q(n, kn(we(n, L)) + e.wrapper.clientHeight)) : Math.min(F, n.lastLine()) >= R && (v = Q(n, kn(we(n, F)) - e.wrapper.clientHeight), R = F);
        }
        return { from: v, to: Math.max(R, v + 1) };
      }
      function Ic(e, n) {
        if (!Xe(e, "scrollCursorIntoView")) {
          var i = e.display, r = i.sizer.getBoundingClientRect(), a = null, v = i.wrapper.ownerDocument;
          if (n.top + r.top < 0 ? a = !0 : n.bottom + r.top > (v.defaultView.innerHeight || v.documentElement.clientHeight) && (a = !1), a != null && !g) {
            var R = I("div", "\u200B", null, `position: absolute;
                         top: ` + (n.top - i.viewOffset - Ao(e.display)) + `px;
                         height: ` + (n.bottom - n.top + Hn(e) + i.barHeight) + `px;
                         left: ` + n.left + "px; width: " + Math.max(2, n.right - n.left) + "px;");
            e.display.lineSpace.appendChild(R), R.scrollIntoView(a), e.display.lineSpace.removeChild(R);
          }
        }
      }
      function Lc(e, n, i, r) {
        r == null && (r = 0);
        var a;
        !e.options.lineWrapping && n == i && (i = n.sticky == "before" ? ee(n.line, n.ch + 1, "before") : n, n = n.ch ? ee(n.line, n.sticky == "before" ? n.ch - 1 : n.ch, "after") : n);
        for (var v = 0; v < 5; v++) {
          var R = !1, L = Rn(e, n), F = !i || i == n ? L : Rn(e, i);
          a = {
            left: Math.min(L.left, F.left),
            top: Math.min(L.top, F.top) - r,
            right: Math.max(L.left, F.left),
            bottom: Math.max(L.bottom, F.bottom) + r
          };
          var $ = La(e, a), Y = e.doc.scrollTop, G = e.doc.scrollLeft;
          if ($.scrollTop != null && (Mi(e, $.scrollTop), Math.abs(e.doc.scrollTop - Y) > 1 && (R = !0)), $.scrollLeft != null && (Tr(e, $.scrollLeft), Math.abs(e.doc.scrollLeft - G) > 1 && (R = !0)), !R)
            break;
        }
        return a;
      }
      function Nc(e, n) {
        var i = La(e, n);
        i.scrollTop != null && Mi(e, i.scrollTop), i.scrollLeft != null && Tr(e, i.scrollLeft);
      }
      function La(e, n) {
        var i = e.display, r = kr(e.display);
        n.top < 0 && (n.top = 0);
        var a = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : i.scroller.scrollTop, v = Aa(e), R = {};
        n.bottom - n.top > v && (n.bottom = n.top + v);
        var L = e.doc.height + ya(i), F = n.top < r, $ = n.bottom > L - r;
        if (n.top < a)
          R.scrollTop = F ? 0 : n.top;
        else if (n.bottom > a + v) {
          var Y = Math.min(n.top, ($ ? L : n.bottom) - v);
          Y != a && (R.scrollTop = Y);
        }
        var G = e.options.fixedGutter ? 0 : i.gutters.offsetWidth, Z = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : i.scroller.scrollLeft - G, J = br(e) - i.gutters.offsetWidth, te = n.right - n.left > J;
        return te && (n.right = n.left + J), n.left < 10 ? R.scrollLeft = 0 : n.left < Z ? R.scrollLeft = Math.max(0, n.left + G - (te ? 0 : 10)) : n.right > J + Z - 3 && (R.scrollLeft = n.right + (te ? 0 : 10) - J), R;
      }
      function Na(e, n) {
        n != null && (wo(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + n);
      }
      function Kr(e) {
        wo(e);
        var n = e.getCursor();
        e.curOp.scrollToPos = { from: n, to: n, margin: e.options.cursorScrollMargin };
      }
      function Di(e, n, i) {
        (n != null || i != null) && wo(e), n != null && (e.curOp.scrollLeft = n), i != null && (e.curOp.scrollTop = i);
      }
      function Fc(e, n) {
        wo(e), e.curOp.scrollToPos = n;
      }
      function wo(e) {
        var n = e.curOp.scrollToPos;
        if (n) {
          e.curOp.scrollToPos = null;
          var i = uu(e, n.from), r = uu(e, n.to);
          gu(e, i, r, n.margin);
        }
      }
      function gu(e, n, i, r) {
        var a = La(e, {
          left: Math.min(n.left, i.left),
          top: Math.min(n.top, i.top) - r,
          right: Math.max(n.right, i.right),
          bottom: Math.max(n.bottom, i.bottom) + r
        });
        Di(e, a.scrollLeft, a.scrollTop);
      }
      function Mi(e, n) {
        Math.abs(e.doc.scrollTop - n) < 2 || (t || Oa(e, { top: n }), yu(e, n, !0), t && Oa(e), Ii(e, 100));
      }
      function yu(e, n, i) {
        n = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, n)), !(e.display.scroller.scrollTop == n && !i) && (e.doc.scrollTop = n, e.display.scrollbars.setScrollTop(n), e.display.scroller.scrollTop != n && (e.display.scroller.scrollTop = n));
      }
      function Tr(e, n, i, r) {
        n = Math.max(0, Math.min(n, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((i ? n == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - n) < 2) && !r) && (e.doc.scrollLeft = n, Eu(e), e.display.scroller.scrollLeft != n && (e.display.scroller.scrollLeft = n), e.display.scrollbars.setScrollLeft(n));
      }
      function Ri(e) {
        var n = e.display, i = n.gutters.offsetWidth, r = Math.round(e.doc.height + ya(e.display));
        return {
          clientHeight: n.scroller.clientHeight,
          viewHeight: n.wrapper.clientHeight,
          scrollWidth: n.scroller.scrollWidth,
          clientWidth: n.scroller.clientWidth,
          viewWidth: n.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? i : 0,
          docHeight: r,
          scrollHeight: r + Hn(e) + n.barHeight,
          nativeBarWidth: n.nativeBarWidth,
          gutterWidth: i
        };
      }
      var wr = function(e, n, i) {
        this.cm = i;
        var r = this.vert = I("div", [I("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), a = this.horiz = I("div", [I("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
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
          var v = e.viewWidth - e.barLeft - (i ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + v) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: i ? r : 0, bottom: n ? r : 0 };
      }, wr.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, wr.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, wr.prototype.zeroWidthHack = function() {
        var e = T && !S ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new Pe(), this.disableVert = new Pe();
      }, wr.prototype.enableZeroWidthBar = function(e, n, i) {
        e.style.visibility = "";
        function r() {
          var a = e.getBoundingClientRect(), v = i == "vert" ? document.elementFromPoint(a.right - 1, (a.top + a.bottom) / 2) : document.elementFromPoint((a.right + a.left) / 2, a.bottom - 1);
          v != e ? e.style.visibility = "hidden" : n.set(1e3, r);
        }
        n.set(1e3, r);
      }, wr.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Pi = function() {
      };
      Pi.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Pi.prototype.setScrollLeft = function() {
      }, Pi.prototype.setScrollTop = function() {
      }, Pi.prototype.clear = function() {
      };
      function Xr(e, n) {
        n || (n = Ri(e));
        var i = e.display.barWidth, r = e.display.barHeight;
        Au(e, n);
        for (var a = 0; a < 4 && i != e.display.barWidth || r != e.display.barHeight; a++)
          i != e.display.barWidth && e.options.lineWrapping && Co(e), Au(e, Ri(e)), i = e.display.barWidth, r = e.display.barHeight;
      }
      function Au(e, n) {
        var i = e.display, r = i.scrollbars.update(n);
        i.sizer.style.paddingRight = (i.barWidth = r.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = r.bottom) + "px", i.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = r.bottom + "px", i.scrollbarFiller.style.width = r.right + "px") : i.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = r.bottom + "px", i.gutterFiller.style.width = n.gutterWidth + "px") : i.gutterFiller.style.display = "";
      }
      var xu = { native: wr, null: Pi };
      function bu(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && z(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new xu[e.options.scrollbarStyle](function(n) {
          e.display.wrapper.insertBefore(n, e.display.scrollbarFiller), ue(n, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), n.setAttribute("cm-not-content", "true");
        }, function(n, i) {
          i == "horizontal" ? Tr(e, n) : Mi(e, n);
        }, e), e.display.scrollbars.addClass && X(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var Oc = 0;
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
          id: ++Oc,
          markArrays: null
        }, cc(e.curOp);
      }
      function Mr(e) {
        var n = e.curOp;
        n && pc(n, function(i) {
          for (var r = 0; r < i.ops.length; r++)
            i.ops[r].cm.curOp = null;
          Bc(i);
        });
      }
      function Bc(e) {
        for (var n = e.ops, i = 0; i < n.length; i++)
          Hc(n[i]);
        for (var r = 0; r < n.length; r++)
          Uc(n[r]);
        for (var a = 0; a < n.length; a++)
          zc(n[a]);
        for (var v = 0; v < n.length; v++)
          $c(n[v]);
        for (var R = 0; R < n.length; R++)
          Wc(n[R]);
      }
      function Hc(e) {
        var n = e.cm, i = n.display;
        Vc(n), e.updateMaxLine && ma(n), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && n.options.lineWrapping, e.update = e.mustUpdate && new Do(n, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function Uc(e) {
        e.updatedDisplay = e.mustUpdate && Fa(e.cm, e.update);
      }
      function zc(e) {
        var n = e.cm, i = n.display;
        e.updatedDisplay && Co(n), e.barMeasure = Ri(n), i.maxLineChanged && !n.options.lineWrapping && (e.adjustWidthTo = tu(n, i.maxLine, i.maxLine.text.length).left + 3, n.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(i.scroller.clientWidth, i.sizer.offsetLeft + e.adjustWidthTo + Hn(n) + n.display.barWidth), e.maxScrollLeft = Math.max(0, i.sizer.offsetLeft + e.adjustWidthTo - br(n))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = i.input.prepareSelection());
      }
      function $c(e) {
        var n = e.cm;
        e.adjustWidthTo != null && (n.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < n.doc.scrollLeft && Tr(n, Math.min(n.display.scroller.scrollLeft, e.maxScrollLeft), !0), n.display.maxLineChanged = !1);
        var i = e.focus && e.focus == q(ve(n));
        e.preparedSelection && n.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != n.doc.height) && Xr(n, e.barMeasure), e.updatedDisplay && Ha(n, e.barMeasure), e.selectionChanged && Ra(n), n.state.focused && e.updateInput && n.display.input.reset(e.typing), i && hu(e.cm);
      }
      function Wc(e) {
        var n = e.cm, i = n.display, r = n.doc;
        if (e.updatedDisplay && Su(n, e.update), i.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (i.wheelStartX = i.wheelStartY = null), e.scrollTop != null && yu(n, e.scrollTop, e.forceScroll), e.scrollLeft != null && Tr(n, e.scrollLeft, !0, !0), e.scrollToPos) {
          var a = Lc(
            n,
            Be(r, e.scrollToPos.from),
            Be(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          Ic(n, a);
        }
        var v = e.maybeHiddenMarkers, R = e.maybeUnhiddenMarkers;
        if (v)
          for (var L = 0; L < v.length; ++L)
            v[L].lines.length || Ye(v[L], "hide");
        if (R)
          for (var F = 0; F < R.length; ++F)
            R[F].lines.length && Ye(R[F], "unhide");
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
      function kt(e) {
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
      function Ii(e, n) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(n, re(jc, e));
      }
      function jc(e) {
        var n = e.doc;
        if (!(n.highlightFrontier >= e.display.viewTo)) {
          var i = +new Date() + e.options.workTime, r = xi(e, n.highlightFrontier), a = [];
          n.iter(r.line, Math.min(n.first + n.size, e.display.viewTo + 500), function(v) {
            if (r.line >= e.display.viewFrom) {
              var R = v.styles, L = v.text.length > e.options.maxHighlightLength ? On(n.mode, r.state) : null, F = Rs(e, v, r, !0);
              L && (r.state = L), v.styles = F.styles;
              var $ = v.styleClasses, Y = F.classes;
              Y ? v.styleClasses = Y : $ && (v.styleClasses = null);
              for (var G = !R || R.length != v.styles.length || $ != Y && (!$ || !Y || $.bgClass != Y.bgClass || $.textClass != Y.textClass), Z = 0; !G && Z < R.length; ++Z)
                G = R[Z] != v.styles[Z];
              G && a.push(r.line), v.stateAfter = r.save(), r.nextLine();
            } else
              v.text.length <= e.options.maxHighlightLength && fa(e, v.text, r), v.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+new Date() > i)
              return Ii(e, e.options.workDelay), !0;
          }), n.highlightFrontier = r.line, n.modeFrontier = Math.max(n.modeFrontier, r.line), a.length && an(e, function() {
            for (var v = 0; v < a.length; v++)
              ar(e, a[v], "text");
          });
        }
      }
      var Do = function(e, n, i) {
        var r = e.display;
        this.viewport = n, this.visible = To(r, e.doc, n), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = br(e), this.force = i, this.dims = Ta(e), this.events = [];
      };
      Do.prototype.signal = function(e, n) {
        tt(e, n) && this.events.push(arguments);
      }, Do.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          Ye.apply(null, this.events[e]);
      };
      function Vc(e) {
        var n = e.display;
        !n.scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = Hn(e) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = Hn(e) + "px", n.scrollbarsClipped = !0);
      }
      function Yc(e) {
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
      function kc(e) {
        if (!(!e || !e.activeElt || e.activeElt == q(ce(e.activeElt))) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && K(document.body, e.anchorNode) && K(document.body, e.focusNode))) {
          var n = e.activeElt.ownerDocument, i = n.defaultView.getSelection(), r = n.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), i.removeAllRanges(), i.addRange(r), i.extend(e.focusNode, e.focusOffset);
        }
      }
      function Fa(e, n) {
        var i = e.display, r = e.doc;
        if (n.editorIsHidden)
          return lr(e), !1;
        if (!n.force && n.visible.from >= i.viewFrom && n.visible.to <= i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && vu(e) == 0)
          return !1;
        Cu(e) && (lr(e), n.dims = Ta(e));
        var a = r.first + r.size, v = Math.max(n.visible.from - e.options.viewportMargin, r.first), R = Math.min(a, n.visible.to + e.options.viewportMargin);
        i.viewFrom < v && v - i.viewFrom < 20 && (v = Math.max(r.first, i.viewFrom)), i.viewTo > R && i.viewTo - R < 20 && (R = Math.min(a, i.viewTo)), Yn && (v = pa(e.doc, v), R = Vs(e.doc, R));
        var L = v != i.viewFrom || R != i.viewTo || i.lastWrapHeight != n.wrapperHeight || i.lastWrapWidth != n.wrapperWidth;
        Rc(e, v, R), i.viewOffset = kn(we(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
        var F = vu(e);
        if (!L && F == 0 && !n.force && i.renderedView == i.view && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo))
          return !1;
        var $ = Yc(e);
        return F > 4 && (i.lineDiv.style.display = "none"), Qc(e, i.updateLineNumbers, n.dims), F > 4 && (i.lineDiv.style.display = ""), i.renderedView = i.view, kc($), H(i.cursorDiv), H(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, L && (i.lastWrapHeight = n.wrapperHeight, i.lastWrapWidth = n.wrapperWidth, Ii(e, 400)), i.updateLineNumbers = null, !0;
      }
      function Su(e, n) {
        for (var i = n.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || n.oldDisplayWidth == br(e)) {
            if (i && i.top != null && (i = { top: Math.min(e.doc.height + ya(e.display) - Aa(e), i.top) }), n.visible = To(e.display, e.doc, i), n.visible.from >= e.display.viewFrom && n.visible.to <= e.display.viewTo)
              break;
          } else
            r && (n.visible = To(e.display, e.doc, i));
          if (!Fa(e, n))
            break;
          Co(e);
          var a = Ri(e);
          wi(e), Xr(e, a), Ha(e, a), n.force = !1;
        }
        n.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (n.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Oa(e, n) {
        var i = new Do(e, n);
        if (Fa(e, i)) {
          Co(e), Su(e, i);
          var r = Ri(e);
          wi(e), Xr(e, r), Ha(e, r), i.finish();
        }
      }
      function Qc(e, n, i) {
        var r = e.display, a = e.options.lineNumbers, v = r.lineDiv, R = v.firstChild;
        function L(te) {
          var ie = te.nextSibling;
          return E && T && e.display.currentWheelTarget == te ? te.style.display = "none" : te.parentNode.removeChild(te), ie;
        }
        for (var F = r.view, $ = r.viewFrom, Y = 0; Y < F.length; Y++) {
          var G = F[Y];
          if (!G.hidden)
            if (!G.node || G.node.parentNode != v) {
              var Z = Ac(e, G, $, i);
              v.insertBefore(Z, R);
            } else {
              for (; R != G.node; )
                R = L(R);
              var J = a && n != null && n <= $ && G.lineNumber;
              G.changes && (Ee(G.changes, "gutter") > -1 && (J = !1), Ks(e, G, $, i)), J && (H(G.lineNumber), G.lineNumber.appendChild(document.createTextNode(fe(e.options, $)))), R = G.node.nextSibling;
            }
          $ += G.size;
        }
        for (; R; )
          R = L(R);
      }
      function Ba(e) {
        var n = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = n + "px", wt(e, "gutterChanged", e);
      }
      function Ha(e, n) {
        e.display.sizer.style.minHeight = n.docHeight + "px", e.display.heightForcer.style.top = n.docHeight + "px", e.display.gutters.style.height = n.docHeight + e.display.barHeight + Hn(e) + "px";
      }
      function Eu(e) {
        var n = e.display, i = n.view;
        if (!(!n.alignWidgets && (!n.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = wa(n) - n.scroller.scrollLeft + e.doc.scrollLeft, a = n.gutters.offsetWidth, v = r + "px", R = 0; R < i.length; R++)
            if (!i[R].hidden) {
              e.options.fixedGutter && (i[R].gutter && (i[R].gutter.style.left = v), i[R].gutterBackground && (i[R].gutterBackground.style.left = v));
              var L = i[R].alignable;
              if (L)
                for (var F = 0; F < L.length; F++)
                  L[F].style.left = v;
            }
          e.options.fixedGutter && (n.gutters.style.left = r + a + "px");
        }
      }
      function Cu(e) {
        if (!e.options.lineNumbers)
          return !1;
        var n = e.doc, i = fe(e.options, n.first + n.size - 1), r = e.display;
        if (i.length != r.lineNumChars) {
          var a = r.measure.appendChild(I(
            "div",
            [I("div", i)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), v = a.firstChild.offsetWidth, R = a.offsetWidth - v;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(v, r.lineGutter.offsetWidth - R) + 1, r.lineNumWidth = r.lineNumInnerWidth + R, r.lineNumChars = r.lineNumInnerWidth ? i.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ba(e.display), !0;
        }
        return !1;
      }
      function Ua(e, n) {
        for (var i = [], r = !1, a = 0; a < e.length; a++) {
          var v = e[a], R = null;
          if (typeof v != "string" && (R = v.style, v = v.className), v == "CodeMirror-linenumbers")
            if (n)
              r = !0;
            else
              continue;
          i.push({ className: v, style: R });
        }
        return n && !r && i.push({ className: "CodeMirror-linenumbers", style: null }), i;
      }
      function Tu(e) {
        var n = e.gutters, i = e.gutterSpecs;
        H(n), e.lineGutter = null;
        for (var r = 0; r < i.length; ++r) {
          var a = i[r], v = a.className, R = a.style, L = n.appendChild(I("div", null, "CodeMirror-gutter " + v));
          R && (L.style.cssText = R), v == "CodeMirror-linenumbers" && (e.lineGutter = L, L.style.width = (e.lineNumWidth || 1) + "px");
        }
        n.style.display = i.length ? "" : "none", Ba(e);
      }
      function Li(e) {
        Tu(e.display), _t(e), Eu(e);
      }
      function Gc(e, n, i, r) {
        var a = this;
        this.input = i, a.scrollbarFiller = I("div", null, "CodeMirror-scrollbar-filler"), a.scrollbarFiller.setAttribute("cm-not-content", "true"), a.gutterFiller = I("div", null, "CodeMirror-gutter-filler"), a.gutterFiller.setAttribute("cm-not-content", "true"), a.lineDiv = V("div", null, "CodeMirror-code"), a.selectionDiv = I("div", null, null, "position: relative; z-index: 1"), a.cursorDiv = I("div", null, "CodeMirror-cursors"), a.measure = I("div", null, "CodeMirror-measure"), a.lineMeasure = I("div", null, "CodeMirror-measure"), a.lineSpace = V(
          "div",
          [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var v = V("div", [a.lineSpace], "CodeMirror-lines");
        a.mover = I("div", [v], null, "position: relative"), a.sizer = I("div", [a.mover], "CodeMirror-sizer"), a.sizerWidth = null, a.heightForcer = I("div", null, null, "position: absolute; height: " + Ve + "px; width: 1px;"), a.gutters = I("div", null, "CodeMirror-gutters"), a.lineGutter = null, a.scroller = I("div", [a.sizer, a.heightForcer, a.gutters], "CodeMirror-scroll"), a.scroller.setAttribute("tabIndex", "-1"), a.wrapper = I("div", [a.scrollbarFiller, a.gutterFiller, a.scroller], "CodeMirror"), D && C >= 105 && (a.wrapper.style.clipPath = "inset(0px)"), a.wrapper.setAttribute("translate", "no"), c && m < 8 && (a.gutters.style.zIndex = -1, a.scroller.style.paddingRight = 0), !E && !(t && p) && (a.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(a.wrapper) : e(a.wrapper)), a.viewFrom = a.viewTo = n.first, a.reportedViewFrom = a.reportedViewTo = n.first, a.view = [], a.renderedView = null, a.externalMeasured = null, a.viewOffset = 0, a.lastWrapHeight = a.lastWrapWidth = 0, a.updateLineNumbers = null, a.nativeBarWidth = a.barHeight = a.barWidth = 0, a.scrollbarsClipped = !1, a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null, a.alignWidgets = !1, a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null, a.maxLine = null, a.maxLineLength = 0, a.maxLineChanged = !1, a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null, a.shift = !1, a.selForContextMenu = null, a.activeTouch = null, a.gutterSpecs = Ua(r.gutters, r.lineNumbers), Tu(a), i.init(a);
      }
      var Mo = 0, Gn = null;
      c ? Gn = -0.53 : t ? Gn = 15 : D ? Gn = -0.7 : x && (Gn = -1 / 3);
      function wu(e) {
        var n = e.wheelDeltaX, i = e.wheelDeltaY;
        return n == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (n = e.detail), i == null && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : i == null && (i = e.wheelDelta), { x: n, y: i };
      }
      function Kc(e) {
        var n = wu(e);
        return n.x *= Gn, n.y *= Gn, n;
      }
      function Du(e, n) {
        D && C == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var i = wu(n), r = i.x, a = i.y, v = Gn;
        n.deltaMode === 0 && (r = n.deltaX, a = n.deltaY, v = 1);
        var R = e.display, L = R.scroller, F = L.scrollWidth > L.clientWidth, $ = L.scrollHeight > L.clientHeight;
        if (!!(r && F || a && $)) {
          if (a && T && E) {
            e:
              for (var Y = n.target, G = R.view; Y != L; Y = Y.parentNode)
                for (var Z = 0; Z < G.length; Z++)
                  if (G[Z].node == Y) {
                    e.display.currentWheelTarget = Y;
                    break e;
                  }
          }
          if (r && !t && !h && v != null) {
            a && $ && Mi(e, Math.max(0, L.scrollTop + a * v)), Tr(e, Math.max(0, L.scrollLeft + r * v)), (!a || a && $) && At(n), R.wheelStartX = null;
            return;
          }
          if (a && v != null) {
            var J = a * v, te = e.doc.scrollTop, ie = te + R.wrapper.clientHeight;
            J < 0 ? te = Math.max(0, te + J - 50) : ie = Math.min(e.doc.height, ie + J + 50), Oa(e, { top: te, bottom: ie });
          }
          Mo < 20 && n.deltaMode !== 0 && (R.wheelStartX == null ? (R.wheelStartX = L.scrollLeft, R.wheelStartY = L.scrollTop, R.wheelDX = r, R.wheelDY = a, setTimeout(function() {
            if (R.wheelStartX != null) {
              var de = L.scrollLeft - R.wheelStartX, he = L.scrollTop - R.wheelStartY, xe = he && R.wheelDY && he / R.wheelDY || de && R.wheelDX && de / R.wheelDX;
              R.wheelStartX = R.wheelStartY = null, xe && (Gn = (Gn * Mo + xe) / (Mo + 1), ++Mo);
            }
          }, 200)) : (R.wheelDX += r, R.wheelDY += a));
        }
      }
      var cn = function(e, n) {
        this.ranges = e, this.primIndex = n;
      };
      cn.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, cn.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var n = 0; n < this.ranges.length; n++) {
          var i = this.ranges[n], r = e.ranges[n];
          if (!Ge(i.anchor, r.anchor) || !Ge(i.head, r.head))
            return !1;
        }
        return !0;
      }, cn.prototype.deepCopy = function() {
        for (var e = [], n = 0; n < this.ranges.length; n++)
          e[n] = new Ke(Tt(this.ranges[n].anchor), Tt(this.ranges[n].head));
        return new cn(e, this.primIndex);
      }, cn.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, cn.prototype.contains = function(e, n) {
        n || (n = e);
        for (var i = 0; i < this.ranges.length; i++) {
          var r = this.ranges[i];
          if (ye(n, r.from()) >= 0 && ye(e, r.to()) <= 0)
            return i;
        }
        return -1;
      };
      var Ke = function(e, n) {
        this.anchor = e, this.head = n;
      };
      Ke.prototype.from = function() {
        return Wr(this.anchor, this.head);
      }, Ke.prototype.to = function() {
        return qt(this.anchor, this.head);
      }, Ke.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function Pn(e, n, i) {
        var r = e && e.options.selectionsMayTouch, a = n[i];
        n.sort(function(Z, J) {
          return ye(Z.from(), J.from());
        }), i = Ee(n, a);
        for (var v = 1; v < n.length; v++) {
          var R = n[v], L = n[v - 1], F = ye(L.to(), R.from());
          if (r && !R.empty() ? F > 0 : F >= 0) {
            var $ = Wr(L.from(), R.from()), Y = qt(L.to(), R.to()), G = L.empty() ? R.from() == R.head : L.from() == L.head;
            v <= i && --i, n.splice(--v, 2, new Ke(G ? Y : $, G ? $ : Y));
          }
        }
        return new cn(n, i);
      }
      function sr(e, n) {
        return new cn([new Ke(e, n || e)], 0);
      }
      function ur(e) {
        return e.text ? ee(
          e.from.line + e.text.length - 1,
          $e(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function Mu(e, n) {
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
          i.push(new Ke(
            Mu(a.anchor, n),
            Mu(a.head, n)
          ));
        }
        return Pn(e.cm, i, e.sel.primIndex);
      }
      function Ru(e, n, i) {
        return e.line == n.line ? ee(i.line, e.ch - n.ch + i.ch) : ee(i.line + (e.line - n.line), e.ch);
      }
      function Xc(e, n, i) {
        for (var r = [], a = ee(e.first, 0), v = a, R = 0; R < n.length; R++) {
          var L = n[R], F = Ru(L.from, a, v), $ = Ru(ur(L), a, v);
          if (a = L.to, v = $, i == "around") {
            var Y = e.sel.ranges[R], G = ye(Y.head, Y.anchor) < 0;
            r[R] = new Ke(G ? $ : F, G ? F : $);
          } else
            r[R] = new Ke(F, F);
        }
        return new cn(r, e.sel.primIndex);
      }
      function $a(e) {
        e.doc.mode = Ur(e.options, e.doc.modeOption), Ni(e);
      }
      function Ni(e) {
        e.doc.iter(function(n) {
          n.stateAfter && (n.stateAfter = null), n.styles && (n.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Ii(e, 100), e.state.modeGen++, e.curOp && _t(e);
      }
      function Pu(e, n) {
        return n.from.ch == 0 && n.to.ch == 0 && $e(n.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function Wa(e, n, i, r) {
        function a(xe) {
          return i ? i[xe] : null;
        }
        function v(xe, me, Te) {
          rc(xe, me, Te, r), wt(xe, "change", xe, n);
        }
        function R(xe, me) {
          for (var Te = [], Re = xe; Re < me; ++Re)
            Te.push(new jr($[Re], a(Re), r));
          return Te;
        }
        var L = n.from, F = n.to, $ = n.text, Y = we(e, L.line), G = we(e, F.line), Z = $e($), J = a($.length - 1), te = F.line - L.line;
        if (n.full)
          e.insert(0, R(0, $.length)), e.remove($.length, e.size - $.length);
        else if (Pu(e, n)) {
          var ie = R(0, $.length - 1);
          v(G, G.text, J), te && e.remove(L.line, te), ie.length && e.insert(L.line, ie);
        } else if (Y == G)
          if ($.length == 1)
            v(Y, Y.text.slice(0, L.ch) + Z + Y.text.slice(F.ch), J);
          else {
            var de = R(1, $.length - 1);
            de.push(new jr(Z + Y.text.slice(F.ch), J, r)), v(Y, Y.text.slice(0, L.ch) + $[0], a(0)), e.insert(L.line + 1, de);
          }
        else if ($.length == 1)
          v(Y, Y.text.slice(0, L.ch) + $[0] + G.text.slice(F.ch), a(0)), e.remove(L.line + 1, te);
        else {
          v(Y, Y.text.slice(0, L.ch) + $[0], a(0)), v(G, Z + G.text.slice(F.ch), J);
          var he = R(1, $.length - 1);
          te > 1 && e.remove(L.line + 1, te - 1), e.insert(L.line + 1, he);
        }
        wt(e, "change", e, n);
      }
      function fr(e, n, i) {
        function r(a, v, R) {
          if (a.linked)
            for (var L = 0; L < a.linked.length; ++L) {
              var F = a.linked[L];
              if (F.doc != v) {
                var $ = R && F.sharedHist;
                i && !$ || (n(F.doc, $), r(F.doc, a, $));
              }
            }
        }
        r(e, null, !0);
      }
      function Iu(e, n) {
        if (n.cm)
          throw new Error("This document is already in use.");
        e.doc = n, n.cm = e, Da(e), $a(e), Lu(e), e.options.direction = n.direction, e.options.lineWrapping || ma(e), e.options.mode = n.modeOption, _t(e);
      }
      function Lu(e) {
        (e.doc.direction == "rtl" ? X : z)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Jc(e) {
        an(e, function() {
          Lu(e), _t(e);
        });
      }
      function Ro(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function ja(e, n) {
        var i = { from: Tt(n.from), to: ur(n), text: Vn(e, n.from, n.to) };
        return Ou(e, i, n.from.line, n.to.line + 1), fr(e, function(r) {
          return Ou(r, i, n.from.line, n.to.line + 1);
        }, !0), i;
      }
      function Nu(e) {
        for (; e.length; ) {
          var n = $e(e);
          if (n.ranges)
            e.pop();
          else
            break;
        }
      }
      function Zc(e, n) {
        if (n)
          return Nu(e.done), $e(e.done);
        if (e.done.length && !$e(e.done).ranges)
          return $e(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), $e(e.done);
      }
      function Fu(e, n, i, r) {
        var a = e.history;
        a.undone.length = 0;
        var v = +new Date(), R, L;
        if ((a.lastOp == r || a.lastOrigin == n.origin && n.origin && (n.origin.charAt(0) == "+" && a.lastModTime > v - (e.cm ? e.cm.options.historyEventDelay : 500) || n.origin.charAt(0) == "*")) && (R = Zc(a, a.lastOp == r)))
          L = $e(R.changes), ye(n.from, n.to) == 0 && ye(n.from, L.to) == 0 ? L.to = ur(n) : R.changes.push(ja(e, n));
        else {
          var F = $e(a.done);
          for ((!F || !F.ranges) && Po(e.sel, a.done), R = {
            changes: [ja(e, n)],
            generation: a.generation
          }, a.done.push(R); a.done.length > a.undoDepth; )
            a.done.shift(), a.done[0].ranges || a.done.shift();
        }
        a.done.push(i), a.generation = ++a.maxGeneration, a.lastModTime = a.lastSelTime = v, a.lastOp = a.lastSelOp = r, a.lastOrigin = a.lastSelOrigin = n.origin, L || Ye(e, "historyAdded");
      }
      function qc(e, n, i, r) {
        var a = n.charAt(0);
        return a == "*" || a == "+" && i.ranges.length == r.ranges.length && i.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function _c(e, n, i, r) {
        var a = e.history, v = r && r.origin;
        i == a.lastSelOp || v && a.lastSelOrigin == v && (a.lastModTime == a.lastSelTime && a.lastOrigin == v || qc(e, v, $e(a.done), n)) ? a.done[a.done.length - 1] = n : Po(n, a.done), a.lastSelTime = +new Date(), a.lastSelOrigin = v, a.lastSelOp = i, r && r.clearRedo !== !1 && Nu(a.undone);
      }
      function Po(e, n) {
        var i = $e(n);
        i && i.ranges && i.equals(e) || n.push(e);
      }
      function Ou(e, n, i, r) {
        var a = n["spans_" + e.id], v = 0;
        e.iter(Math.max(e.first, i), Math.min(e.first + e.size, r), function(R) {
          R.markedSpans && ((a || (a = n["spans_" + e.id] = {}))[v] = R.markedSpans), ++v;
        });
      }
      function ev(e) {
        if (!e)
          return null;
        for (var n, i = 0; i < e.length; ++i)
          e[i].marker.explicitlyCleared ? n || (n = e.slice(0, i)) : n && n.push(e[i]);
        return n ? n.length ? n : null : e;
      }
      function tv(e, n) {
        var i = n["spans_" + e.id];
        if (!i)
          return null;
        for (var r = [], a = 0; a < n.text.length; ++a)
          r.push(ev(i[a]));
        return r;
      }
      function Bu(e, n) {
        var i = tv(e, n), r = ca(e, n);
        if (!i)
          return r;
        if (!r)
          return i;
        for (var a = 0; a < i.length; ++a) {
          var v = i[a], R = r[a];
          if (v && R) {
            e:
              for (var L = 0; L < R.length; ++L) {
                for (var F = R[L], $ = 0; $ < v.length; ++$)
                  if (v[$].marker == F.marker)
                    continue e;
                v.push(F);
              }
          } else
            R && (i[a] = R);
        }
        return i;
      }
      function Jr(e, n, i) {
        for (var r = [], a = 0; a < e.length; ++a) {
          var v = e[a];
          if (v.ranges) {
            r.push(i ? cn.prototype.deepCopy.call(v) : v);
            continue;
          }
          var R = v.changes, L = [];
          r.push({ changes: L });
          for (var F = 0; F < R.length; ++F) {
            var $ = R[F], Y = void 0;
            if (L.push({ from: $.from, to: $.to, text: $.text }), n)
              for (var G in $)
                (Y = G.match(/^spans_(\d+)$/)) && Ee(n, Number(Y[1])) > -1 && ($e(L)[G] = $[G], delete $[G]);
          }
        }
        return r;
      }
      function Va(e, n, i, r) {
        if (r) {
          var a = e.anchor;
          if (i) {
            var v = ye(n, a) < 0;
            v != ye(i, a) < 0 ? (a = n, n = i) : v != ye(n, i) < 0 && (n = i);
          }
          return new Ke(a, n);
        } else
          return new Ke(i || n, n);
      }
      function Io(e, n, i, r, a) {
        a == null && (a = e.cm && (e.cm.display.shift || e.extend)), $t(e, new cn([Va(e.sel.primary(), n, i, a)], 0), r);
      }
      function Hu(e, n, i) {
        for (var r = [], a = e.cm && (e.cm.display.shift || e.extend), v = 0; v < e.sel.ranges.length; v++)
          r[v] = Va(e.sel.ranges[v], n[v], null, a);
        var R = Pn(e.cm, r, e.sel.primIndex);
        $t(e, R, i);
      }
      function Ya(e, n, i, r) {
        var a = e.sel.ranges.slice(0);
        a[n] = i, $t(e, Pn(e.cm, a, e.sel.primIndex), r);
      }
      function Uu(e, n, i, r) {
        $t(e, sr(n, i), r);
      }
      function nv(e, n, i) {
        var r = {
          ranges: n.ranges,
          update: function(a) {
            this.ranges = [];
            for (var v = 0; v < a.length; v++)
              this.ranges[v] = new Ke(
                Be(e, a[v].anchor),
                Be(e, a[v].head)
              );
          },
          origin: i && i.origin
        };
        return Ye(e, "beforeSelectionChange", e, r), e.cm && Ye(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != n.ranges ? Pn(e.cm, r.ranges, r.ranges.length - 1) : n;
      }
      function zu(e, n, i) {
        var r = e.history.done, a = $e(r);
        a && a.ranges ? (r[r.length - 1] = n, Lo(e, n, i)) : $t(e, n, i);
      }
      function $t(e, n, i) {
        Lo(e, n, i), _c(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i);
      }
      function Lo(e, n, i) {
        (tt(e, "beforeSelectionChange") || e.cm && tt(e.cm, "beforeSelectionChange")) && (n = nv(e, n, i));
        var r = i && i.bias || (ye(n.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        $u(e, ju(e, n, r, !0)), !(i && i.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Kr(e.cm);
      }
      function $u(e, n) {
        n.equals(e.sel) || (e.sel = n, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, st(e.cm)), wt(e, "cursorActivity", e));
      }
      function Wu(e) {
        $u(e, ju(e, e.sel, null, !1));
      }
      function ju(e, n, i, r) {
        for (var a, v = 0; v < n.ranges.length; v++) {
          var R = n.ranges[v], L = n.ranges.length == e.sel.ranges.length && e.sel.ranges[v], F = No(e, R.anchor, L && L.anchor, i, r), $ = R.head == R.anchor ? F : No(e, R.head, L && L.head, i, r);
          (a || F != R.anchor || $ != R.head) && (a || (a = n.ranges.slice(0, v)), a[v] = new Ke(F, $));
        }
        return a ? Pn(e.cm, a, n.primIndex) : n;
      }
      function Zr(e, n, i, r, a) {
        var v = we(e, n.line);
        if (v.markedSpans)
          for (var R = 0; R < v.markedSpans.length; ++R) {
            var L = v.markedSpans[R], F = L.marker, $ = "selectLeft" in F ? !F.selectLeft : F.inclusiveLeft, Y = "selectRight" in F ? !F.selectRight : F.inclusiveRight;
            if ((L.from == null || ($ ? L.from <= n.ch : L.from < n.ch)) && (L.to == null || (Y ? L.to >= n.ch : L.to > n.ch))) {
              if (a && (Ye(F, "beforeCursorEnter"), F.explicitlyCleared))
                if (v.markedSpans) {
                  --R;
                  continue;
                } else
                  break;
              if (!F.atomic)
                continue;
              if (i) {
                var G = F.find(r < 0 ? 1 : -1), Z = void 0;
                if ((r < 0 ? Y : $) && (G = Vu(e, G, -r, G && G.line == n.line ? v : null)), G && G.line == n.line && (Z = ye(G, i)) && (r < 0 ? Z < 0 : Z > 0))
                  return Zr(e, G, n, r, a);
              }
              var J = F.find(r < 0 ? -1 : 1);
              return (r < 0 ? $ : Y) && (J = Vu(e, J, r, J.line == n.line ? v : null)), J ? Zr(e, J, n, r, a) : null;
            }
          }
        return n;
      }
      function No(e, n, i, r, a) {
        var v = r || 1, R = Zr(e, n, i, v, a) || !a && Zr(e, n, i, v, !0) || Zr(e, n, i, -v, a) || !a && Zr(e, n, i, -v, !0);
        return R || (e.cantEdit = !0, ee(e.first, 0));
      }
      function Vu(e, n, i, r) {
        return i < 0 && n.ch == 0 ? n.line > e.first ? Be(e, ee(n.line - 1)) : null : i > 0 && n.ch == (r || we(e, n.line)).text.length ? n.line < e.first + e.size - 1 ? ee(n.line + 1, 0) : null : new ee(n.line, n.ch + i);
      }
      function Yu(e) {
        e.setSelection(ee(e.firstLine(), 0), ee(e.lastLine()), Nt);
      }
      function ku(e, n, i) {
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
        return i && (r.update = function(a, v, R, L) {
          a && (r.from = Be(e, a)), v && (r.to = Be(e, v)), R && (r.text = R), L !== void 0 && (r.origin = L);
        }), Ye(e, "beforeChange", e, r), e.cm && Ye(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function qr(e, n, i) {
        if (e.cm) {
          if (!e.cm.curOp)
            return Dt(e.cm, qr)(e, n, i);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((tt(e, "beforeChange") || e.cm && tt(e.cm, "beforeChange")) && (n = ku(e, n, !0), !n))) {
          var r = Bs && !i && _d(e, n.from, n.to);
          if (r)
            for (var a = r.length - 1; a >= 0; --a)
              Qu(e, { from: r[a].from, to: r[a].to, text: a ? [""] : n.text, origin: n.origin });
          else
            Qu(e, n);
        }
      }
      function Qu(e, n) {
        if (!(n.text.length == 1 && n.text[0] == "" && ye(n.from, n.to) == 0)) {
          var i = za(e, n);
          Fu(e, n, i, e.cm ? e.cm.curOp.id : NaN), Fi(e, n, i, ca(e, n));
          var r = [];
          fr(e, function(a, v) {
            !v && Ee(r, a.history) == -1 && (Ju(a.history, n), r.push(a.history)), Fi(a, n, null, ca(a, n));
          });
        }
      }
      function Fo(e, n, i) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !i)) {
          for (var a = e.history, v, R = e.sel, L = n == "undo" ? a.done : a.undone, F = n == "undo" ? a.undone : a.done, $ = 0; $ < L.length && (v = L[$], !(i ? v.ranges && !v.equals(e.sel) : !v.ranges)); $++)
            ;
          if ($ != L.length) {
            for (a.lastOrigin = a.lastSelOrigin = null; ; )
              if (v = L.pop(), v.ranges) {
                if (Po(v, F), i && !v.equals(e.sel)) {
                  $t(e, v, { clearRedo: !1 });
                  return;
                }
                R = v;
              } else if (r) {
                L.push(v);
                return;
              } else
                break;
            var Y = [];
            Po(R, F), F.push({ changes: Y, generation: a.generation }), a.generation = v.generation || ++a.maxGeneration;
            for (var G = tt(e, "beforeChange") || e.cm && tt(e.cm, "beforeChange"), Z = function(ie) {
              var de = v.changes[ie];
              if (de.origin = n, G && !ku(e, de, !1))
                return L.length = 0, {};
              Y.push(ja(e, de));
              var he = ie ? za(e, de) : $e(L);
              Fi(e, de, he, Bu(e, de)), !ie && e.cm && e.cm.scrollIntoView({ from: de.from, to: ur(de) });
              var xe = [];
              fr(e, function(me, Te) {
                !Te && Ee(xe, me.history) == -1 && (Ju(me.history, de), xe.push(me.history)), Fi(me, de, null, Bu(me, de));
              });
            }, J = v.changes.length - 1; J >= 0; --J) {
              var te = Z(J);
              if (te)
                return te.v;
            }
          }
        }
      }
      function Gu(e, n) {
        if (n != 0 && (e.first += n, e.sel = new cn(zt(e.sel.ranges, function(a) {
          return new Ke(
            ee(a.anchor.line + n, a.anchor.ch),
            ee(a.head.line + n, a.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          _t(e.cm, e.first, e.first - n, n);
          for (var i = e.cm.display, r = i.viewFrom; r < i.viewTo; r++)
            ar(e.cm, r, "gutter");
        }
      }
      function Fi(e, n, i, r) {
        if (e.cm && !e.cm.curOp)
          return Dt(e.cm, Fi)(e, n, i, r);
        if (n.to.line < e.first) {
          Gu(e, n.text.length - 1 - (n.to.line - n.from.line));
          return;
        }
        if (!(n.from.line > e.lastLine())) {
          if (n.from.line < e.first) {
            var a = n.text.length - 1 - (e.first - n.from.line);
            Gu(e, a), n = {
              from: ee(e.first, 0),
              to: ee(n.to.line + a, n.to.ch),
              text: [$e(n.text)],
              origin: n.origin
            };
          }
          var v = e.lastLine();
          n.to.line > v && (n = {
            from: n.from,
            to: ee(v, we(e, v).text.length),
            text: [n.text[0]],
            origin: n.origin
          }), n.removed = Vn(e, n.from, n.to), i || (i = za(e, n)), e.cm ? rv(e.cm, n, r) : Wa(e, n, r), Lo(e, i, Nt), e.cantEdit && No(e, ee(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function rv(e, n, i) {
        var r = e.doc, a = e.display, v = n.from, R = n.to, L = !1, F = v.line;
        e.options.lineWrapping || (F = W(Mn(we(r, v.line))), r.iter(F, R.line + 1, function(J) {
          if (J == a.maxLine)
            return L = !0, !0;
        })), r.sel.contains(n.from, n.to) > -1 && st(e), Wa(r, n, i, cu(e)), e.options.lineWrapping || (r.iter(F, v.line + n.text.length, function(J) {
          var te = go(J);
          te > a.maxLineLength && (a.maxLine = J, a.maxLineLength = te, a.maxLineChanged = !0, L = !1);
        }), L && (e.curOp.updateMaxLine = !0)), Qd(r, v.line), Ii(e, 400);
        var $ = n.text.length - (R.line - v.line) - 1;
        n.full ? _t(e) : v.line == R.line && n.text.length == 1 && !Pu(e.doc, n) ? ar(e, v.line, "text") : _t(e, v.line, R.line + 1, $);
        var Y = tt(e, "changes"), G = tt(e, "change");
        if (G || Y) {
          var Z = {
            from: v,
            to: R,
            text: n.text,
            removed: n.removed,
            origin: n.origin
          };
          G && wt(e, "change", e, Z), Y && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(Z);
        }
        e.display.selForContextMenu = null;
      }
      function _r(e, n, i, r, a) {
        var v;
        r || (r = i), ye(r, i) < 0 && (v = [r, i], i = v[0], r = v[1]), typeof n == "string" && (n = e.splitLines(n)), qr(e, { from: i, to: r, text: n, origin: a });
      }
      function Ku(e, n, i, r) {
        i < e.line ? e.line += r : n < e.line && (e.line = n, e.ch = 0);
      }
      function Xu(e, n, i, r) {
        for (var a = 0; a < e.length; ++a) {
          var v = e[a], R = !0;
          if (v.ranges) {
            v.copied || (v = e[a] = v.deepCopy(), v.copied = !0);
            for (var L = 0; L < v.ranges.length; L++)
              Ku(v.ranges[L].anchor, n, i, r), Ku(v.ranges[L].head, n, i, r);
            continue;
          }
          for (var F = 0; F < v.changes.length; ++F) {
            var $ = v.changes[F];
            if (i < $.from.line)
              $.from = ee($.from.line + r, $.from.ch), $.to = ee($.to.line + r, $.to.ch);
            else if (n <= $.to.line) {
              R = !1;
              break;
            }
          }
          R || (e.splice(0, a + 1), a = 0);
        }
      }
      function Ju(e, n) {
        var i = n.from.line, r = n.to.line, a = n.text.length - (r - i) - 1;
        Xu(e.done, i, r, a), Xu(e.undone, i, r, a);
      }
      function Oi(e, n, i, r) {
        var a = n, v = n;
        return typeof n == "number" ? v = we(e, Ds(e, n)) : a = W(n), a == null ? null : (r(v, a) && e.cm && ar(e.cm, a, i), v);
      }
      function Bi(e) {
        this.lines = e, this.parent = null;
        for (var n = 0, i = 0; i < e.length; ++i)
          e[i].parent = this, n += e[i].height;
        this.height = n;
      }
      Bi.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        removeInner: function(e, n) {
          for (var i = e, r = e + n; i < r; ++i) {
            var a = this.lines[i];
            this.height -= a.height, ic(a), wt(a, "delete");
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
      function Hi(e) {
        this.children = e;
        for (var n = 0, i = 0, r = 0; r < e.length; ++r) {
          var a = e[r];
          n += a.chunkSize(), i += a.height, a.parent = this;
        }
        this.size = n, this.height = i, this.parent = null;
      }
      Hi.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, n) {
          this.size -= n;
          for (var i = 0; i < this.children.length; ++i) {
            var r = this.children[i], a = r.chunkSize();
            if (e < a) {
              var v = Math.min(n, a - e), R = r.height;
              if (r.removeInner(e, v), this.height -= R - r.height, a == v && (this.children.splice(i--, 1), r.parent = null), (n -= v) == 0)
                break;
              e = 0;
            } else
              e -= a;
          }
          if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof Bi))) {
            var L = [];
            this.collapse(L), this.children = [new Bi(L)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var n = 0; n < this.children.length; ++n)
            this.children[n].collapse(e);
        },
        insertInner: function(e, n, i) {
          this.size += n.length, this.height += i;
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], v = a.chunkSize();
            if (e <= v) {
              if (a.insertInner(e, n, i), a.lines && a.lines.length > 50) {
                for (var R = a.lines.length % 25 + 25, L = R; L < a.lines.length; ) {
                  var F = new Bi(a.lines.slice(L, L += 25));
                  a.height -= F.height, this.children.splice(++r, 0, F), F.parent = this;
                }
                a.lines = a.lines.slice(0, R), this.maybeSpill();
              }
              break;
            }
            e -= v;
          }
        },
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var n = e.children.splice(e.children.length - 5, 5), i = new Hi(n);
              if (e.parent) {
                e.size -= i.size, e.height -= i.height;
                var a = Ee(e.parent.children, e);
                e.parent.children.splice(a + 1, 0, i);
              } else {
                var r = new Hi(e.children);
                r.parent = e, e.children = [r, i], e = r;
              }
              i.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, n, i) {
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], v = a.chunkSize();
            if (e < v) {
              var R = Math.min(n, v - e);
              if (a.iterN(e, R, i))
                return !0;
              if ((n -= R) == 0)
                break;
              e = 0;
            } else
              e -= v;
          }
        }
      };
      var Ui = function(e, n, i) {
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && (this[r] = i[r]);
        this.doc = e, this.node = n;
      };
      Ui.prototype.clear = function() {
        var e = this.doc.cm, n = this.line.widgets, i = this.line, r = W(i);
        if (!(r == null || !n)) {
          for (var a = 0; a < n.length; ++a)
            n[a] == this && n.splice(a--, 1);
          n.length || (i.widgets = null);
          var v = Ci(this);
          dn(i, Math.max(0, i.height - v)), e && (an(e, function() {
            Zu(e, i, -v), ar(e, r, "widget");
          }), wt(e, "lineWidgetCleared", e, this, r));
        }
      }, Ui.prototype.changed = function() {
        var e = this, n = this.height, i = this.doc.cm, r = this.line;
        this.height = null;
        var a = Ci(this) - n;
        !a || (or(this.doc, r) || dn(r, r.height + a), i && an(i, function() {
          i.curOp.forceUpdate = !0, Zu(i, r, a), wt(i, "lineWidgetChanged", i, e, W(r));
        }));
      }, Yt(Ui);
      function Zu(e, n, i) {
        kn(n) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Na(e, i);
      }
      function iv(e, n, i, r) {
        var a = new Ui(e, i, r), v = e.cm;
        return v && a.noHScroll && (v.display.alignWidgets = !0), Oi(e, n, "widget", function(R) {
          var L = R.widgets || (R.widgets = []);
          if (a.insertAt == null ? L.push(a) : L.splice(Math.min(L.length, Math.max(0, a.insertAt)), 0, a), a.line = R, v && !or(e, R)) {
            var F = kn(R) < e.scrollTop;
            dn(R, R.height + Ci(a)), F && Na(v, a.height), v.curOp.forceUpdate = !0;
          }
          return !0;
        }), v && wt(v, "lineWidgetAdded", v, a, typeof n == "number" ? n : W(n)), a;
      }
      var qu = 0, dr = function(e, n) {
        this.lines = [], this.type = n, this.doc = e, this.id = ++qu;
      };
      dr.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, n = e && !e.curOp;
          if (n && Dr(e), tt(this, "clear")) {
            var i = this.find();
            i && wt(this, "clear", i.from, i.to);
          }
          for (var r = null, a = null, v = 0; v < this.lines.length; ++v) {
            var R = this.lines[v], L = bi(R.markedSpans, this);
            e && !this.collapsed ? ar(e, W(R), "text") : e && (L.to != null && (a = W(R)), L.from != null && (r = W(R))), R.markedSpans = Xd(R.markedSpans, L), L.from == null && this.collapsed && !or(this.doc, R) && e && dn(R, kr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var F = 0; F < this.lines.length; ++F) {
              var $ = Mn(this.lines[F]), Y = go($);
              Y > e.display.maxLineLength && (e.display.maxLine = $, e.display.maxLineLength = Y, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && _t(e, r, a + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Wu(e.doc)), e && wt(e, "markerCleared", e, this, r, a), n && Mr(e), this.parent && this.parent.clear();
        }
      }, dr.prototype.find = function(e, n) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var i, r, a = 0; a < this.lines.length; ++a) {
          var v = this.lines[a], R = bi(v.markedSpans, this);
          if (R.from != null && (i = ee(n ? v : W(v), R.from), e == -1))
            return i;
          if (R.to != null && (r = ee(n ? v : W(v), R.to), e == 1))
            return r;
        }
        return i && { from: i, to: r };
      }, dr.prototype.changed = function() {
        var e = this, n = this.find(-1, !0), i = this, r = this.doc.cm;
        !n || !r || an(r, function() {
          var a = n.line, v = W(n.line), R = xa(r, v);
          if (R && (iu(R), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !or(i.doc, a) && i.height != null) {
            var L = i.height;
            i.height = null;
            var F = Ci(i) - L;
            F && dn(a, a.height + F);
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
      }, Yt(dr);
      function ei(e, n, i, r, a) {
        if (r && r.shared)
          return ov(e, n, i, r, a);
        if (e.cm && !e.cm.curOp)
          return Dt(e.cm, ei)(e, n, i, r, a);
        var v = new dr(e, a), R = ye(n, i);
        if (r && se(r, v, !1), R > 0 || R == 0 && v.clearWhenEmpty !== !1)
          return v;
        if (v.replacedWith && (v.collapsed = !0, v.widgetNode = V("span", [v.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || v.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (v.widgetNode.insertLeft = !0)), v.collapsed) {
          if (js(e, n.line, n, i, v) || n.line != i.line && js(e, i.line, n, i, v))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          Kd();
        }
        v.addToHistory && Fu(e, { from: n, to: i, origin: "markText" }, e.sel, NaN);
        var L = n.line, F = e.cm, $;
        if (e.iter(L, i.line + 1, function(G) {
          F && v.collapsed && !F.options.lineWrapping && Mn(G) == F.display.maxLine && ($ = !0), v.collapsed && L != n.line && dn(G, 0), Jd(G, new vo(
            v,
            L == n.line ? n.ch : null,
            L == i.line ? i.ch : null
          ), e.cm && e.cm.curOp), ++L;
        }), v.collapsed && e.iter(n.line, i.line + 1, function(G) {
          or(e, G) && dn(G, 0);
        }), v.clearOnEnter && ue(v, "beforeCursorEnter", function() {
          return v.clear();
        }), v.readOnly && (Gd(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), v.collapsed && (v.id = ++qu, v.atomic = !0), F) {
          if ($ && (F.curOp.updateMaxLine = !0), v.collapsed)
            _t(F, n.line, i.line + 1);
          else if (v.className || v.startStyle || v.endStyle || v.css || v.attributes || v.title)
            for (var Y = n.line; Y <= i.line; Y++)
              ar(F, Y, "text");
          v.atomic && Wu(F.doc), wt(F, "markerAdded", F, v);
        }
        return v;
      }
      var zi = function(e, n) {
        this.markers = e, this.primary = n;
        for (var i = 0; i < e.length; ++i)
          e[i].parent = this;
      };
      zi.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          wt(this, "clear");
        }
      }, zi.prototype.find = function(e, n) {
        return this.primary.find(e, n);
      }, Yt(zi);
      function ov(e, n, i, r, a) {
        r = se(r), r.shared = !1;
        var v = [ei(e, n, i, r, a)], R = v[0], L = r.widgetNode;
        return fr(e, function(F) {
          L && (r.widgetNode = L.cloneNode(!0)), v.push(ei(F, Be(F, n), Be(F, i), r, a));
          for (var $ = 0; $ < F.linked.length; ++$)
            if (F.linked[$].isParent)
              return;
          R = $e(v);
        }), new zi(v, R);
      }
      function _u(e) {
        return e.findMarks(ee(e.first, 0), e.clipPos(ee(e.lastLine())), function(n) {
          return n.parent;
        });
      }
      function av(e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i], a = r.find(), v = e.clipPos(a.from), R = e.clipPos(a.to);
          if (ye(v, R)) {
            var L = ei(e, v, R, r.primary, r.primary.type);
            r.markers.push(L), L.parent = r;
          }
        }
      }
      function lv(e) {
        for (var n = function(r) {
          var a = e[r], v = [a.primary.doc];
          fr(a.primary.doc, function(F) {
            return v.push(F);
          });
          for (var R = 0; R < a.markers.length; R++) {
            var L = a.markers[R];
            Ee(v, L.doc) == -1 && (L.parent = null, a.markers.splice(R--, 1));
          }
        }, i = 0; i < e.length; i++)
          n(i);
      }
      var sv = 0, en = function(e, n, i, r, a) {
        if (!(this instanceof en))
          return new en(e, n, i, r, a);
        i == null && (i = 0), Hi.call(this, [new Bi([new jr("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var v = ee(i, 0);
        this.sel = sr(v), this.history = new Ro(null), this.id = ++sv, this.modeOption = n, this.lineSep = r, this.direction = a == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), Wa(this, { from: v, to: v, text: e }), $t(this, sr(v), Nt);
      };
      en.prototype = mn(Hi.prototype, {
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
          var n = Ai(this, this.first, this.first + this.size);
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        setValue: Mt(function(e) {
          var n = ee(this.first, 0), i = this.first + this.size - 1;
          qr(this, {
            from: n,
            to: ee(i, we(this, i).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && Di(this.cm, 0, 0), $t(this, sr(n), Nt);
        }),
        replaceRange: function(e, n, i, r) {
          n = Be(this, n), i = i ? Be(this, i) : n, _r(this, e, n, i, r);
        },
        getRange: function(e, n, i) {
          var r = Vn(this, Be(this, e), Be(this, n));
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
          return W(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = we(this, e)), Mn(e);
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
          return Be(this, e);
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
          Uu(this, Be(this, typeof e == "number" ? ee(e, n || 0) : e), null, i);
        }),
        setSelection: Mt(function(e, n, i) {
          Uu(this, Be(this, e), Be(this, n || e), i);
        }),
        extendSelection: Mt(function(e, n, i) {
          Io(this, Be(this, e), n && Be(this, n), i);
        }),
        extendSelections: Mt(function(e, n) {
          Hu(this, Ms(this, e), n);
        }),
        extendSelectionsBy: Mt(function(e, n) {
          var i = zt(this.sel.ranges, e);
          Hu(this, Ms(this, i), n);
        }),
        setSelections: Mt(function(e, n, i) {
          if (!!e.length) {
            for (var r = [], a = 0; a < e.length; a++)
              r[a] = new Ke(
                Be(this, e[a].anchor),
                Be(this, e[a].head || e[a].anchor)
              );
            n == null && (n = Math.min(e.length - 1, this.sel.primIndex)), $t(this, Pn(this.cm, r, n), i);
          }
        }),
        addSelection: Mt(function(e, n, i) {
          var r = this.sel.ranges.slice(0);
          r.push(new Ke(Be(this, e), Be(this, n || e))), $t(this, Pn(this.cm, r, r.length - 1), i);
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
          for (var r = [], a = this.sel, v = 0; v < a.ranges.length; v++) {
            var R = a.ranges[v];
            r[v] = { from: R.from(), to: R.to(), text: this.splitLines(e[v]), origin: i };
          }
          for (var L = n && n != "end" && Xc(this, r, n), F = r.length - 1; F >= 0; F--)
            qr(this, r[F]);
          L ? zu(this, L) : this.cm && Kr(this.cm);
        }),
        undo: Mt(function() {
          Fo(this, "undo");
        }),
        redo: Mt(function() {
          Fo(this, "redo");
        }),
        undoSelection: Mt(function() {
          Fo(this, "undo", !0);
        }),
        redoSelection: Mt(function() {
          Fo(this, "redo", !0);
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
          this.history = new Ro(this.history), fr(this, function(n) {
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
            done: Jr(this.history.done),
            undone: Jr(this.history.undone)
          };
        },
        setHistory: function(e) {
          var n = this.history = new Ro(this.history);
          n.done = Jr(e.done.slice(0), null, !0), n.undone = Jr(e.undone.slice(0), null, !0);
        },
        setGutterMarker: Mt(function(e, n, i) {
          return Oi(this, e, "gutter", function(r) {
            var a = r.gutterMarkers || (r.gutterMarkers = {});
            return a[n] = i, !i && En(a) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Mt(function(e) {
          var n = this;
          this.iter(function(i) {
            i.gutterMarkers && i.gutterMarkers[e] && Oi(n, i, "gutter", function() {
              return i.gutterMarkers[e] = null, En(i.gutterMarkers) && (i.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var n;
          if (typeof e == "number") {
            if (!ne(this, e) || (n = e, e = we(this, e), !e))
              return null;
          } else if (n = W(e), n == null)
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
              if (P(i).test(r[a]))
                return !1;
              r[a] += " " + i;
            }
            return !0;
          });
        }),
        removeLineClass: Mt(function(e, n, i) {
          return Oi(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass", v = r[a];
            if (v)
              if (i == null)
                r[a] = null;
              else {
                var R = v.match(P(i));
                if (!R)
                  return !1;
                var L = R.index + R[0].length;
                r[a] = v.slice(0, R.index) + (!R.index || L == v.length ? "" : " ") + v.slice(L) || null;
              }
            else
              return !1;
            return !0;
          });
        }),
        addLineWidget: Mt(function(e, n, i) {
          return iv(this, e, n, i);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, n, i) {
          return ei(this, Be(this, e), Be(this, n), i, i && i.type || "range");
        },
        setBookmark: function(e, n) {
          var i = {
            replacedWith: n && (n.nodeType == null ? n.widget : n),
            insertLeft: n && n.insertLeft,
            clearWhenEmpty: !1,
            shared: n && n.shared,
            handleMouseEvents: n && n.handleMouseEvents
          };
          return e = Be(this, e), ei(this, e, e, i, "bookmark");
        },
        findMarksAt: function(e) {
          e = Be(this, e);
          var n = [], i = we(this, e.line).markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var a = i[r];
              (a.from == null || a.from <= e.ch) && (a.to == null || a.to >= e.ch) && n.push(a.marker.parent || a.marker);
            }
          return n;
        },
        findMarks: function(e, n, i) {
          e = Be(this, e), n = Be(this, n);
          var r = [], a = e.line;
          return this.iter(e.line, n.line + 1, function(v) {
            var R = v.markedSpans;
            if (R)
              for (var L = 0; L < R.length; L++) {
                var F = R[L];
                !(F.to != null && a == e.line && e.ch >= F.to || F.from == null && a != e.line || F.from != null && a == n.line && F.from >= n.ch) && (!i || i(F.marker)) && r.push(F.marker.parent || F.marker);
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
            var v = a.text.length + r;
            if (v > e)
              return n = e, !0;
            e -= v, ++i;
          }), Be(this, ee(i, n));
        },
        indexFromPos: function(e) {
          e = Be(this, e);
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
            Ai(this, this.first, this.first + this.size),
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
          var r = new en(Ai(this, n, i), e.mode || this.modeOption, n, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], av(r, _u(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof it && (e = e.doc), this.linked)
            for (var n = 0; n < this.linked.length; ++n) {
              var i = this.linked[n];
              if (i.doc == e) {
                this.linked.splice(n, 1), e.unlinkDoc(this), lv(_u(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            fr(e, function(a) {
              return r.push(a.id);
            }, !0), e.history = new Ro(null), e.history.done = Jr(this.history.done, r), e.history.undone = Jr(this.history.undone, r);
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
          }), this.cm && Jc(this.cm));
        })
      }), en.prototype.eachLine = en.prototype.iter;
      var ef = 0;
      function uv(e) {
        var n = this;
        if (tf(n), !(Xe(n, e) || Qn(n.display, e))) {
          At(e), c && (ef = +new Date());
          var i = Er(n, e, !0), r = e.dataTransfer.files;
          if (!(!i || n.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var a = r.length, v = Array(a), R = 0, L = function() {
                ++R == a && Dt(n, function() {
                  i = Be(n.doc, i);
                  var J = {
                    from: i,
                    to: i,
                    text: n.doc.splitLines(
                      v.filter(function(te) {
                        return te != null;
                      }).join(n.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  qr(n.doc, J), zu(n.doc, sr(Be(n.doc, i), Be(n.doc, ur(J))));
                })();
              }, F = function(J, te) {
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
                  v[te] = de, L();
                }, ie.readAsText(J);
              }, $ = 0; $ < r.length; $++)
                F(r[$], $);
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
                  if (n.state.draggingText && !n.state.draggingText.copy && (G = n.listSelections()), Lo(n.doc, sr(i, i)), G)
                    for (var Z = 0; Z < G.length; ++Z)
                      _r(n.doc, "", G[Z].anchor, G[Z].head, "drag");
                  n.replaceSelection(Y, "around", "paste"), n.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function fv(e, n) {
        if (c && (!e.state.draggingText || +new Date() - ef < 100)) {
          tr(n);
          return;
        }
        if (!(Xe(e, n) || Qn(e.display, n)) && (n.dataTransfer.setData("Text", e.getSelection()), n.dataTransfer.effectAllowed = "copyMove", n.dataTransfer.setDragImage && !x)) {
          var i = I("img", null, null, "position: fixed; left: 0; top: 0;");
          i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", h && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), n.dataTransfer.setDragImage(i, 0, 0), h && i.parentNode.removeChild(i);
        }
      }
      function dv(e, n) {
        var i = Er(e, n);
        if (!!i) {
          var r = document.createDocumentFragment();
          Ma(e, i, r), e.display.dragCursor || (e.display.dragCursor = I("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), j(e.display.dragCursor, r);
        }
      }
      function tf(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function nf(e) {
        if (!!document.getElementsByClassName) {
          for (var n = document.getElementsByClassName("CodeMirror"), i = [], r = 0; r < n.length; r++) {
            var a = n[r].CodeMirror;
            a && i.push(a);
          }
          i.length && i[0].operation(function() {
            for (var v = 0; v < i.length; v++)
              e(i[v]);
          });
        }
      }
      var rf = !1;
      function cv() {
        rf || (vv(), rf = !0);
      }
      function vv() {
        var e;
        ue(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, nf(pv);
          }, 100));
        }), ue(window, "blur", function() {
          return nf(Gr);
        });
      }
      function pv(e) {
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
      }, $i = 0; $i < 10; $i++)
        cr[$i + 48] = cr[$i + 96] = String($i);
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
      }, Kn.default = T ? Kn.macDefault : Kn.pcDefault;
      function hv(e) {
        var n = e.split(/-(?!$)/);
        e = n[n.length - 1];
        for (var i, r, a, v, R = 0; R < n.length - 1; R++) {
          var L = n[R];
          if (/^(cmd|meta|m)$/i.test(L))
            v = !0;
          else if (/^a(lt)?$/i.test(L))
            i = !0;
          else if (/^(c|ctrl|control)$/i.test(L))
            r = !0;
          else if (/^s(hift)?$/i.test(L))
            a = !0;
          else
            throw new Error("Unrecognized modifier name: " + L);
        }
        return i && (e = "Alt-" + e), r && (e = "Ctrl-" + e), v && (e = "Cmd-" + e), a && (e = "Shift-" + e), e;
      }
      function mv(e) {
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
            for (var a = zt(i.split(" "), hv), v = 0; v < a.length; v++) {
              var R = void 0, L = void 0;
              v == a.length - 1 ? (L = a.join(" "), R = r) : (L = a.slice(0, v + 1).join(" "), R = "...");
              var F = n[L];
              if (!F)
                n[L] = R;
              else if (F != R)
                throw new Error("Inconsistent bindings for " + L);
            }
            delete e[i];
          }
        for (var $ in n)
          e[$] = n[$];
        return e;
      }
      function ti(e, n, i, r) {
        n = Bo(n);
        var a = n.call ? n.call(e, r) : n[e];
        if (a === !1)
          return "nothing";
        if (a === "...")
          return "multi";
        if (a != null && i(a))
          return "handled";
        if (n.fallthrough) {
          if (Object.prototype.toString.call(n.fallthrough) != "[object Array]")
            return ti(e, n.fallthrough, i, r);
          for (var v = 0; v < n.fallthrough.length; v++) {
            var R = ti(e, n.fallthrough[v], i, r);
            if (R)
              return R;
          }
        }
      }
      function of(e) {
        var n = typeof e == "string" ? e : cr[e.keyCode];
        return n == "Ctrl" || n == "Alt" || n == "Shift" || n == "Mod";
      }
      function af(e, n, i) {
        var r = e;
        return n.altKey && r != "Alt" && (e = "Alt-" + e), (O ? n.metaKey : n.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (O ? n.ctrlKey : n.metaKey) && r != "Mod" && (e = "Cmd-" + e), !i && n.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function lf(e, n) {
        if (h && e.keyCode == 34 && e.char)
          return !1;
        var i = cr[e.keyCode];
        return i == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (i = e.code), af(i, e, n));
      }
      function Bo(e) {
        return typeof e == "string" ? Kn[e] : e;
      }
      function ni(e, n) {
        for (var i = e.doc.sel.ranges, r = [], a = 0; a < i.length; a++) {
          for (var v = n(i[a]); r.length && ye(v.from, $e(r).to) <= 0; ) {
            var R = r.pop();
            if (ye(R.from, v.from) < 0) {
              v.from = R.from;
              break;
            }
          }
          r.push(v);
        }
        an(e, function() {
          for (var L = r.length - 1; L >= 0; L--)
            _r(e.doc, "", r[L].from, r[L].to, "+delete");
          Kr(e);
        });
      }
      function ka(e, n, i) {
        var r = Jt(e.text, n + i, i);
        return r < 0 || r > e.text.length ? null : r;
      }
      function Qa(e, n, i) {
        var r = ka(e, n.ch, i);
        return r == null ? null : new ee(n.line, r, i < 0 ? "after" : "before");
      }
      function Ga(e, n, i, r, a) {
        if (e) {
          n.doc.direction == "rtl" && (a = -a);
          var v = oe(i, n.doc.direction);
          if (v) {
            var R = a < 0 ? $e(v) : v[0], L = a < 0 == (R.level == 1), F = L ? "after" : "before", $;
            if (R.level > 0 || n.doc.direction == "rtl") {
              var Y = Yr(n, i);
              $ = a < 0 ? i.text.length - 1 : 0;
              var G = Un(n, Y, $).top;
              $ = je(function(Z) {
                return Un(n, Y, Z).top == G;
              }, a < 0 == (R.level == 1) ? R.from : R.to - 1, $), F == "before" && ($ = ka(i, $, 1));
            } else
              $ = a < 0 ? R.to : R.from;
            return new ee(r, $, F);
          }
        }
        return new ee(r, a < 0 ? i.text.length : 0, a < 0 ? "before" : "after");
      }
      function gv(e, n, i, r) {
        var a = oe(n, e.doc.direction);
        if (!a)
          return Qa(n, i, r);
        i.ch >= n.text.length ? (i.ch = n.text.length, i.sticky = "before") : i.ch <= 0 && (i.ch = 0, i.sticky = "after");
        var v = Oe(a, i.ch, i.sticky), R = a[v];
        if (e.doc.direction == "ltr" && R.level % 2 == 0 && (r > 0 ? R.to > i.ch : R.from < i.ch))
          return Qa(n, i, r);
        var L = function(he, xe) {
          return ka(n, he instanceof ee ? he.ch : he, xe);
        }, F, $ = function(he) {
          return e.options.lineWrapping ? (F = F || Yr(e, n), du(e, n, F, he)) : { begin: 0, end: n.text.length };
        }, Y = $(i.sticky == "before" ? L(i, -1) : i.ch);
        if (e.doc.direction == "rtl" || R.level == 1) {
          var G = R.level == 1 == r < 0, Z = L(i, G ? 1 : -1);
          if (Z != null && (G ? Z <= R.to && Z <= Y.end : Z >= R.from && Z >= Y.begin)) {
            var J = G ? "before" : "after";
            return new ee(i.line, Z, J);
          }
        }
        var te = function(he, xe, me) {
          for (var Te = function(nt, Rt) {
            return Rt ? new ee(i.line, L(nt, 1), "before") : new ee(i.line, nt, "after");
          }; he >= 0 && he < a.length; he += xe) {
            var Re = a[he], Me = xe > 0 == (Re.level != 1), He = Me ? me.begin : L(me.end, -1);
            if (Re.from <= He && He < Re.to || (He = Me ? Re.from : L(Re.to, -1), me.begin <= He && He < me.end))
              return Te(He, Me);
          }
        }, ie = te(v + r, r, Y);
        if (ie)
          return ie;
        var de = r > 0 ? Y.end : L(Y.begin, -1);
        return de != null && !(r > 0 && de == n.text.length) && (ie = te(r > 0 ? 0 : a.length - 1, r, $(de)), ie) ? ie : null;
      }
      var ji = {
        selectAll: Yu,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Nt);
        },
        killLine: function(e) {
          return ni(e, function(n) {
            if (n.empty()) {
              var i = we(e.doc, n.head.line).text.length;
              return n.head.ch == i && n.head.line < e.lastLine() ? { from: n.head, to: ee(n.head.line + 1, 0) } : { from: n.head, to: ee(n.head.line, i) };
            } else
              return { from: n.from(), to: n.to() };
          });
        },
        deleteLine: function(e) {
          return ni(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: Be(e.doc, ee(n.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return ni(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: n.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return ni(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return { from: r, to: n.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return ni(e, function(n) {
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
              return sf(e, n.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return uf(e, n.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return yv(e, n.head.line);
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
            return r.ch < e.getLine(r.line).search(/\S/) ? uf(e, n.head) : r;
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
            var v = i[a].from(), R = pe(e.getLine(v.line), v.ch, r);
            n.push(Xt(r - R % r));
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
                var a = n[r].head, v = we(e.doc, a.line).text;
                if (v) {
                  if (a.ch == v.length && (a = new ee(a.line, a.ch - 1)), a.ch > 0)
                    a = new ee(a.line, a.ch + 1), e.replaceRange(
                      v.charAt(a.ch - 1) + v.charAt(a.ch - 2),
                      ee(a.line, a.ch - 2),
                      a,
                      "+transpose"
                    );
                  else if (a.line > e.doc.first) {
                    var R = we(e.doc, a.line - 1).text;
                    R && (a = new ee(a.line, 1), e.replaceRange(
                      v.charAt(0) + e.doc.lineSeparator() + R.charAt(R.length - 1),
                      ee(a.line - 1, R.length - 1),
                      a,
                      "+transpose"
                    ));
                  }
                }
                i.push(new Ke(a, a));
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
            Kr(e);
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
      function sf(e, n) {
        var i = we(e.doc, n), r = Mn(i);
        return r != i && (n = W(r)), Ga(!0, e, r, n, 1);
      }
      function yv(e, n) {
        var i = we(e.doc, n), r = tc(i);
        return r != i && (n = W(r)), Ga(!0, e, i, n, -1);
      }
      function uf(e, n) {
        var i = sf(e, n.line), r = we(e.doc, i.line), a = oe(r, e.doc.direction);
        if (!a || a[0].level == 0) {
          var v = Math.max(i.ch, r.text.search(/\S/)), R = n.line == i.line && n.ch <= v && n.ch;
          return ee(i.line, R ? 0 : v, i.sticky);
        }
        return i;
      }
      function Ho(e, n, i) {
        if (typeof n == "string" && (n = ji[n], !n))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, a = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), a = n(e) != Ht;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return a;
      }
      function Av(e, n, i) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var a = ti(n, e.state.keyMaps[r], i, e);
          if (a)
            return a;
        }
        return e.options.extraKeys && ti(n, e.options.extraKeys, i, e) || ti(n, e.options.keyMap, i, e);
      }
      var xv = new Pe();
      function Vi(e, n, i, r) {
        var a = e.state.keySeq;
        if (a) {
          if (of(n))
            return "handled";
          if (/\'$/.test(n) ? e.state.keySeq = null : xv.set(50, function() {
            e.state.keySeq == a && (e.state.keySeq = null, e.display.input.reset());
          }), ff(e, a + " " + n, i, r))
            return !0;
        }
        return ff(e, n, i, r);
      }
      function ff(e, n, i, r) {
        var a = Av(e, n, r);
        return a == "multi" && (e.state.keySeq = n), a == "handled" && wt(e, "keyHandled", e, n, i), (a == "handled" || a == "multi") && (At(i), Ra(e)), !!a;
      }
      function df(e, n) {
        var i = lf(n, !0);
        return i ? n.shiftKey && !e.state.keySeq ? Vi(e, "Shift-" + i, n, function(r) {
          return Ho(e, r, !0);
        }) || Vi(e, i, n, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return Ho(e, r);
        }) : Vi(e, i, n, function(r) {
          return Ho(e, r);
        }) : !1;
      }
      function bv(e, n, i) {
        return Vi(e, "'" + i + "'", n, function(r) {
          return Ho(e, r, !0);
        });
      }
      var Ka = null;
      function cf(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && (n.curOp.focus = q(ve(n)), !Xe(n, e))) {
          c && m < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var i = e.keyCode;
          n.display.shift = i == 16 || e.shiftKey;
          var r = df(n, e);
          h && (Ka = r ? i : null, !r && i == 88 && !fo && (T ? e.metaKey : e.ctrlKey) && n.replaceSelection("", null, "cut")), t && !T && !r && i == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), i == 18 && !/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className) && Sv(n);
        }
      }
      function Sv(e) {
        var n = e.display.lineDiv;
        X(n, "CodeMirror-crosshair");
        function i(r) {
          (r.keyCode == 18 || !r.altKey) && (z(n, "CodeMirror-crosshair"), We(document, "keyup", i), We(document, "mouseover", i));
        }
        ue(document, "keyup", i), ue(document, "mouseover", i);
      }
      function vf(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Xe(this, e);
      }
      function pf(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && !(Qn(n.display, e) || Xe(n, e) || e.ctrlKey && !e.altKey || T && e.metaKey)) {
          var i = e.keyCode, r = e.charCode;
          if (h && i == Ka) {
            Ka = null, At(e);
            return;
          }
          if (!(h && (!e.which || e.which < 10) && df(n, e))) {
            var a = String.fromCharCode(r == null ? i : r);
            a != "\b" && (bv(n, e, a) || n.display.input.onKeyPress(e));
          }
        }
      }
      var Ev = 400, Xa = function(e, n, i) {
        this.time = e, this.pos = n, this.button = i;
      };
      Xa.prototype.compare = function(e, n, i) {
        return this.time + Ev > e && ye(n, this.pos) == 0 && i == this.button;
      };
      var Yi, ki;
      function Cv(e, n) {
        var i = +new Date();
        return ki && ki.compare(i, e, n) ? (Yi = ki = null, "triple") : Yi && Yi.compare(i, e, n) ? (ki = new Xa(i, e, n), Yi = null, "double") : (Yi = new Xa(i, e, n), ki = null, "single");
      }
      function hf(e) {
        var n = this, i = n.display;
        if (!(Xe(n, e) || i.activeTouch && i.input.supportsTouch())) {
          if (i.input.ensurePolled(), i.shift = e.shiftKey, Qn(i, e)) {
            E || (i.scroller.draggable = !1, setTimeout(function() {
              return i.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!Ja(n, e)) {
            var r = Er(n, e), a = Cn(e), v = r ? Cv(r, a) : "single";
            ae(n).focus(), a == 1 && n.state.selectingText && n.state.selectingText(e), !(r && Tv(n, a, r, v, e)) && (a == 1 ? r ? Dv(n, r, v, e) : mi(e) == i.scroller && At(e) : a == 2 ? (r && Io(n.doc, r), setTimeout(function() {
              return i.input.focus();
            }, 20)) : a == 3 && (B ? n.display.input.onContextMenu(e) : Pa(n)));
          }
        }
      }
      function Tv(e, n, i, r, a) {
        var v = "Click";
        return r == "double" ? v = "Double" + v : r == "triple" && (v = "Triple" + v), v = (n == 1 ? "Left" : n == 2 ? "Middle" : "Right") + v, Vi(e, af(v, a), a, function(R) {
          if (typeof R == "string" && (R = ji[R]), !R)
            return !1;
          var L = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), L = R(e, i) != Ht;
          } finally {
            e.state.suppressEdits = !1;
          }
          return L;
        });
      }
      function wv(e, n, i) {
        var r = e.getOption("configureMouse"), a = r ? r(e, n, i) : {};
        if (a.unit == null) {
          var v = M ? i.shiftKey && i.metaKey : i.altKey;
          a.unit = v ? "rectangle" : n == "single" ? "char" : n == "double" ? "word" : "line";
        }
        return (a.extend == null || e.doc.extend) && (a.extend = e.doc.extend || i.shiftKey), a.addNew == null && (a.addNew = T ? i.metaKey : i.ctrlKey), a.moveOnDrag == null && (a.moveOnDrag = !(T ? i.altKey : i.ctrlKey)), a;
      }
      function Dv(e, n, i, r) {
        c ? setTimeout(re(hu, e), 0) : e.curOp.focus = q(ve(e));
        var a = wv(e, i, r), v = e.doc.sel, R;
        e.options.dragDrop && sa && !e.isReadOnly() && i == "single" && (R = v.contains(n)) > -1 && (ye((R = v.ranges[R]).from(), n) < 0 || n.xRel > 0) && (ye(R.to(), n) > 0 || n.xRel < 0) ? Mv(e, r, n, a) : Rv(e, r, n, a);
      }
      function Mv(e, n, i, r) {
        var a = e.display, v = !1, R = Dt(e, function($) {
          E && (a.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Pa(e)), We(a.wrapper.ownerDocument, "mouseup", R), We(a.wrapper.ownerDocument, "mousemove", L), We(a.scroller, "dragstart", F), We(a.scroller, "drop", R), v || (At($), r.addNew || Io(e.doc, i, null, null, r.extend), E && !x || c && m == 9 ? setTimeout(function() {
            a.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), a.input.focus();
          }, 20) : a.input.focus());
        }), L = function($) {
          v = v || Math.abs(n.clientX - $.clientX) + Math.abs(n.clientY - $.clientY) >= 10;
        }, F = function() {
          return v = !0;
        };
        E && (a.scroller.draggable = !0), e.state.draggingText = R, R.copy = !r.moveOnDrag, ue(a.wrapper.ownerDocument, "mouseup", R), ue(a.wrapper.ownerDocument, "mousemove", L), ue(a.scroller, "dragstart", F), ue(a.scroller, "drop", R), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return a.input.focus();
        }, 20), a.scroller.dragDrop && a.scroller.dragDrop();
      }
      function mf(e, n, i) {
        if (i == "char")
          return new Ke(n, n);
        if (i == "word")
          return e.findWordAt(n);
        if (i == "line")
          return new Ke(ee(n.line, 0), Be(e.doc, ee(n.line + 1, 0)));
        var r = i(e, n);
        return new Ke(r.from, r.to);
      }
      function Rv(e, n, i, r) {
        c && Pa(e);
        var a = e.display, v = e.doc;
        At(n);
        var R, L, F = v.sel, $ = F.ranges;
        if (r.addNew && !r.extend ? (L = v.sel.contains(i), L > -1 ? R = $[L] : R = new Ke(i, i)) : (R = v.sel.primary(), L = v.sel.primIndex), r.unit == "rectangle")
          r.addNew || (R = new Ke(i, i)), i = Er(e, n, !0, !0), L = -1;
        else {
          var Y = mf(e, i, r.unit);
          r.extend ? R = Va(R, Y.anchor, Y.head, r.extend) : R = Y;
        }
        r.addNew ? L == -1 ? (L = $.length, $t(
          v,
          Pn(e, $.concat([R]), L),
          { scroll: !1, origin: "*mouse" }
        )) : $.length > 1 && $[L].empty() && r.unit == "char" && !r.extend ? ($t(
          v,
          Pn(e, $.slice(0, L).concat($.slice(L + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), F = v.sel) : Ya(v, L, R, lt) : (L = 0, $t(v, new cn([R], 0), lt), F = v.sel);
        var G = i;
        function Z(me) {
          if (ye(G, me) != 0)
            if (G = me, r.unit == "rectangle") {
              for (var Te = [], Re = e.options.tabSize, Me = pe(we(v, i.line).text, i.ch, Re), He = pe(we(v, me.line).text, me.ch, Re), nt = Math.min(Me, He), Rt = Math.max(Me, He), ot = Math.min(i.line, me.line), ln = Math.min(e.lastLine(), Math.max(i.line, me.line)); ot <= ln; ot++) {
                var tn = we(v, ot).text, mt = Ut(tn, nt, Re);
                nt == Rt ? Te.push(new Ke(ee(ot, mt), ee(ot, mt))) : tn.length > mt && Te.push(new Ke(ee(ot, mt), ee(ot, Ut(tn, Rt, Re))));
              }
              Te.length || Te.push(new Ke(i, i)), $t(
                v,
                Pn(e, F.ranges.slice(0, L).concat(Te), L),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(me);
            } else {
              var nn = R, Ft = mf(e, me, r.unit), xt = nn.anchor, gt;
              ye(Ft.anchor, xt) > 0 ? (gt = Ft.head, xt = Wr(nn.from(), Ft.anchor)) : (gt = Ft.anchor, xt = qt(nn.to(), Ft.head));
              var ft = F.ranges.slice(0);
              ft[L] = Pv(e, new Ke(Be(v, xt), gt)), $t(v, Pn(e, ft, L), lt);
            }
        }
        var J = a.wrapper.getBoundingClientRect(), te = 0;
        function ie(me) {
          var Te = ++te, Re = Er(e, me, !0, r.unit == "rectangle");
          if (!!Re)
            if (ye(Re, G) != 0) {
              e.curOp.focus = q(ve(e)), Z(Re);
              var Me = To(a, v);
              (Re.line >= Me.to || Re.line < Me.from) && setTimeout(Dt(e, function() {
                te == Te && ie(me);
              }), 150);
            } else {
              var He = me.clientY < J.top ? -20 : me.clientY > J.bottom ? 20 : 0;
              He && setTimeout(Dt(e, function() {
                te == Te && (a.scroller.scrollTop += He, ie(me));
              }), 50);
            }
        }
        function de(me) {
          e.state.selectingText = !1, te = 1 / 0, me && (At(me), a.input.focus()), We(a.wrapper.ownerDocument, "mousemove", he), We(a.wrapper.ownerDocument, "mouseup", xe), v.history.lastSelOrigin = null;
        }
        var he = Dt(e, function(me) {
          me.buttons === 0 || !Cn(me) ? de(me) : ie(me);
        }), xe = Dt(e, de);
        e.state.selectingText = xe, ue(a.wrapper.ownerDocument, "mousemove", he), ue(a.wrapper.ownerDocument, "mouseup", xe);
      }
      function Pv(e, n) {
        var i = n.anchor, r = n.head, a = we(e.doc, i.line);
        if (ye(i, r) == 0 && i.sticky == r.sticky)
          return n;
        var v = oe(a);
        if (!v)
          return n;
        var R = Oe(v, i.ch, i.sticky), L = v[R];
        if (L.from != i.ch && L.to != i.ch)
          return n;
        var F = R + (L.from == i.ch == (L.level != 1) ? 0 : 1);
        if (F == 0 || F == v.length)
          return n;
        var $;
        if (r.line != i.line)
          $ = (r.line - i.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var Y = Oe(v, r.ch, r.sticky), G = Y - R || (r.ch - i.ch) * (L.level == 1 ? -1 : 1);
          Y == F - 1 || Y == F ? $ = G < 0 : $ = G > 0;
        }
        var Z = v[F + ($ ? -1 : 0)], J = $ == (Z.level == 1), te = J ? Z.from : Z.to, ie = J ? "after" : "before";
        return i.ch == te && i.sticky == ie ? n : new Ke(new ee(i.line, te, ie), r);
      }
      function gf(e, n, i, r) {
        var a, v;
        if (n.touches)
          a = n.touches[0].clientX, v = n.touches[0].clientY;
        else
          try {
            a = n.clientX, v = n.clientY;
          } catch {
            return !1;
          }
        if (a >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && At(n);
        var R = e.display, L = R.lineDiv.getBoundingClientRect();
        if (v > L.bottom || !tt(e, i))
          return Zt(n);
        v -= L.top - R.viewOffset;
        for (var F = 0; F < e.display.gutterSpecs.length; ++F) {
          var $ = R.gutters.childNodes[F];
          if ($ && $.getBoundingClientRect().right >= a) {
            var Y = Q(e.doc, v), G = e.display.gutterSpecs[F];
            return Ye(e, i, e, Y, G.className, n), Zt(n);
          }
        }
      }
      function Ja(e, n) {
        return gf(e, n, "gutterClick", !0);
      }
      function yf(e, n) {
        Qn(e.display, n) || Iv(e, n) || Xe(e, n, "contextmenu") || B || e.display.input.onContextMenu(n);
      }
      function Iv(e, n) {
        return tt(e, "gutterContextMenu") ? gf(e, n, "gutterContextMenu", !1) : !1;
      }
      function Af(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Ti(e);
      }
      var ri = { toString: function() {
        return "CodeMirror.Init";
      } }, xf = {}, Uo = {};
      function Lv(e) {
        var n = e.optionHandlers;
        function i(r, a, v, R) {
          e.defaults[r] = a, v && (n[r] = R ? function(L, F, $) {
            $ != ri && v(L, F, $);
          } : v);
        }
        e.defineOption = i, e.Init = ri, i("value", "", function(r, a) {
          return r.setValue(a);
        }, !0), i("mode", null, function(r, a) {
          r.doc.modeOption = a, $a(r);
        }, !0), i("indentUnit", 2, $a, !0), i("indentWithTabs", !1), i("smartIndent", !0), i("tabSize", 4, function(r) {
          Ni(r), Ti(r), _t(r);
        }, !0), i("lineSeparator", null, function(r, a) {
          if (r.doc.lineSep = a, !!a) {
            var v = [], R = r.doc.first;
            r.doc.iter(function(F) {
              for (var $ = 0; ; ) {
                var Y = F.text.indexOf(a, $);
                if (Y == -1)
                  break;
                $ = Y + a.length, v.push(ee(R, Y));
              }
              R++;
            });
            for (var L = v.length - 1; L >= 0; L--)
              _r(r.doc, a, v[L], ee(v[L].line, v[L].ch + a.length));
          }
        }), i("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, a, v) {
          r.state.specialChars = new RegExp(a.source + (a.test("	") ? "" : "|	"), "g"), v != ri && r.refresh();
        }), i("specialCharPlaceholder", lc, function(r) {
          return r.refresh();
        }, !0), i("electricChars", !0), i("inputStyle", p ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), i("spellcheck", !1, function(r, a) {
          return r.getInputField().spellcheck = a;
        }, !0), i("autocorrect", !1, function(r, a) {
          return r.getInputField().autocorrect = a;
        }, !0), i("autocapitalize", !1, function(r, a) {
          return r.getInputField().autocapitalize = a;
        }, !0), i("rtlMoveVisually", !N), i("wholeLineUpdateBefore", !0), i("theme", "default", function(r) {
          Af(r), Li(r);
        }, !0), i("keyMap", "default", function(r, a, v) {
          var R = Bo(a), L = v != ri && Bo(v);
          L && L.detach && L.detach(r, R), R.attach && R.attach(r, L || null);
        }), i("extraKeys", null), i("configureMouse", null), i("lineWrapping", !1, Fv, !0), i("gutters", [], function(r, a) {
          r.display.gutterSpecs = Ua(a, r.options.lineNumbers), Li(r);
        }, !0), i("fixedGutter", !0, function(r, a) {
          r.display.gutters.style.left = a ? wa(r.display) + "px" : "0", r.refresh();
        }, !0), i("coverGutterNextToScrollbar", !1, function(r) {
          return Xr(r);
        }, !0), i("scrollbarStyle", "native", function(r) {
          bu(r), Xr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), i("lineNumbers", !1, function(r, a) {
          r.display.gutterSpecs = Ua(r.options.gutters, a), Li(r);
        }, !0), i("firstLineNumber", 1, Li, !0), i("lineNumberFormatter", function(r) {
          return r;
        }, Li, !0), i("showCursorWhenSelecting", !1, wi, !0), i("resetSelectionOnContextMenu", !0), i("lineWiseCopyCut", !0), i("pasteLinesPerSelection", !0), i("selectionsMayTouch", !1), i("readOnly", !1, function(r, a) {
          a == "nocursor" && (Gr(r), r.display.input.blur()), r.display.input.readOnlyChanged(a);
        }), i("screenReaderLabel", null, function(r, a) {
          a = a === "" ? null : a, r.display.input.screenReaderLabelChanged(a);
        }), i("disableInput", !1, function(r, a) {
          a || r.display.input.reset();
        }, !0), i("dragDrop", !0, Nv), i("allowDropFileTypes", null), i("cursorBlinkRate", 530), i("cursorScrollMargin", 0), i("cursorHeight", 1, wi, !0), i("singleCursorHeightPerLine", !0, wi, !0), i("workTime", 100), i("workDelay", 100), i("flattenSpans", !0, Ni, !0), i("addModeClass", !1, Ni, !0), i("pollInterval", 100), i("undoDepth", 200, function(r, a) {
          return r.doc.history.undoDepth = a;
        }), i("historyEventDelay", 1250), i("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), i("maxHighlightLength", 1e4, Ni, !0), i("moveInputWithCursor", !0, function(r, a) {
          a || r.display.input.resetPosition();
        }), i("tabindex", null, function(r, a) {
          return r.display.input.getField().tabIndex = a || "";
        }), i("autofocus", null), i("direction", "ltr", function(r, a) {
          return r.doc.setDirection(a);
        }, !0), i("phrases", null);
      }
      function Nv(e, n, i) {
        var r = i && i != ri;
        if (!n != !r) {
          var a = e.display.dragFunctions, v = n ? ue : We;
          v(e.display.scroller, "dragstart", a.start), v(e.display.scroller, "dragenter", a.enter), v(e.display.scroller, "dragover", a.over), v(e.display.scroller, "dragleave", a.leave), v(e.display.scroller, "drop", a.drop);
        }
      }
      function Fv(e) {
        e.options.lineWrapping ? (X(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (z(e.display.wrapper, "CodeMirror-wrap"), ma(e)), Da(e), _t(e), Ti(e), setTimeout(function() {
          return Xr(e);
        }, 100);
      }
      function it(e, n) {
        var i = this;
        if (!(this instanceof it))
          return new it(e, n);
        this.options = n = n ? se(n) : {}, se(xf, n, !1);
        var r = n.value;
        typeof r == "string" ? r = new en(r, n.mode, null, n.lineSeparator, n.direction) : n.mode && (r.modeOption = n.mode), this.doc = r;
        var a = new it.inputStyles[n.inputStyle](this), v = this.display = new Gc(e, r, a, n);
        v.wrapper.CodeMirror = this, Af(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), bu(this), this.state = {
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
        }, n.autofocus && !p && v.input.focus(), c && m < 11 && setTimeout(function() {
          return i.display.input.reset(!0);
        }, 20), Ov(this), cv(), Dr(this), this.curOp.forceUpdate = !0, Iu(this, r), n.autofocus && !p || this.hasFocus() ? setTimeout(function() {
          i.hasFocus() && !i.state.focused && Ia(i);
        }, 20) : Gr(this);
        for (var R in Uo)
          Uo.hasOwnProperty(R) && Uo[R](this, n[R], ri);
        Cu(this), n.finishInit && n.finishInit(this);
        for (var L = 0; L < Za.length; ++L)
          Za[L](this);
        Mr(this), E && n.lineWrapping && getComputedStyle(v.lineDiv).textRendering == "optimizelegibility" && (v.lineDiv.style.textRendering = "auto");
      }
      it.defaults = xf, it.optionHandlers = Uo;
      function Ov(e) {
        var n = e.display;
        ue(n.scroller, "mousedown", Dt(e, hf)), c && m < 11 ? ue(n.scroller, "dblclick", Dt(e, function(F) {
          if (!Xe(e, F)) {
            var $ = Er(e, F);
            if (!(!$ || Ja(e, F) || Qn(e.display, F))) {
              At(F);
              var Y = e.findWordAt($);
              Io(e.doc, Y.anchor, Y.head);
            }
          }
        })) : ue(n.scroller, "dblclick", function(F) {
          return Xe(e, F) || At(F);
        }), ue(n.scroller, "contextmenu", function(F) {
          return yf(e, F);
        }), ue(n.input.getField(), "contextmenu", function(F) {
          n.scroller.contains(F.target) || yf(e, F);
        });
        var i, r = { end: 0 };
        function a() {
          n.activeTouch && (i = setTimeout(function() {
            return n.activeTouch = null;
          }, 1e3), r = n.activeTouch, r.end = +new Date());
        }
        function v(F) {
          if (F.touches.length != 1)
            return !1;
          var $ = F.touches[0];
          return $.radiusX <= 1 && $.radiusY <= 1;
        }
        function R(F, $) {
          if ($.left == null)
            return !0;
          var Y = $.left - F.left, G = $.top - F.top;
          return Y * Y + G * G > 20 * 20;
        }
        ue(n.scroller, "touchstart", function(F) {
          if (!Xe(e, F) && !v(F) && !Ja(e, F)) {
            n.input.ensurePolled(), clearTimeout(i);
            var $ = +new Date();
            n.activeTouch = {
              start: $,
              moved: !1,
              prev: $ - r.end <= 300 ? r : null
            }, F.touches.length == 1 && (n.activeTouch.left = F.touches[0].pageX, n.activeTouch.top = F.touches[0].pageY);
          }
        }), ue(n.scroller, "touchmove", function() {
          n.activeTouch && (n.activeTouch.moved = !0);
        }), ue(n.scroller, "touchend", function(F) {
          var $ = n.activeTouch;
          if ($ && !Qn(n, F) && $.left != null && !$.moved && new Date() - $.start < 300) {
            var Y = e.coordsChar(n.activeTouch, "page"), G;
            !$.prev || R($, $.prev) ? G = new Ke(Y, Y) : !$.prev.prev || R($, $.prev.prev) ? G = e.findWordAt(Y) : G = new Ke(ee(Y.line, 0), Be(e.doc, ee(Y.line + 1, 0))), e.setSelection(G.anchor, G.head), e.focus(), At(F);
          }
          a();
        }), ue(n.scroller, "touchcancel", a), ue(n.scroller, "scroll", function() {
          n.scroller.clientHeight && (Mi(e, n.scroller.scrollTop), Tr(e, n.scroller.scrollLeft, !0), Ye(e, "scroll", e));
        }), ue(n.scroller, "mousewheel", function(F) {
          return Du(e, F);
        }), ue(n.scroller, "DOMMouseScroll", function(F) {
          return Du(e, F);
        }), ue(n.wrapper, "scroll", function() {
          return n.wrapper.scrollTop = n.wrapper.scrollLeft = 0;
        }), n.dragFunctions = {
          enter: function(F) {
            Xe(e, F) || tr(F);
          },
          over: function(F) {
            Xe(e, F) || (dv(e, F), tr(F));
          },
          start: function(F) {
            return fv(e, F);
          },
          drop: Dt(e, uv),
          leave: function(F) {
            Xe(e, F) || tf(e);
          }
        };
        var L = n.input.getField();
        ue(L, "keyup", function(F) {
          return vf.call(e, F);
        }), ue(L, "keydown", Dt(e, cf)), ue(L, "keypress", Dt(e, pf)), ue(L, "focus", function(F) {
          return Ia(e, F);
        }), ue(L, "blur", function(F) {
          return Gr(e, F);
        });
      }
      var Za = [];
      it.defineInitHook = function(e) {
        return Za.push(e);
      };
      function Qi(e, n, i, r) {
        var a = e.doc, v;
        i == null && (i = "add"), i == "smart" && (a.mode.indent ? v = xi(e, n).state : i = "prev");
        var R = e.options.tabSize, L = we(a, n), F = pe(L.text, null, R);
        L.stateAfter && (L.stateAfter = null);
        var $ = L.text.match(/^\s*/)[0], Y;
        if (!r && !/\S/.test(L.text))
          Y = 0, i = "not";
        else if (i == "smart" && (Y = a.mode.indent(v, L.text.slice($.length), L.text), Y == Ht || Y > 150)) {
          if (!r)
            return;
          i = "prev";
        }
        i == "prev" ? n > a.first ? Y = pe(we(a, n - 1).text, null, R) : Y = 0 : i == "add" ? Y = F + e.options.indentUnit : i == "subtract" ? Y = F - e.options.indentUnit : typeof i == "number" && (Y = F + i), Y = Math.max(0, Y);
        var G = "", Z = 0;
        if (e.options.indentWithTabs)
          for (var J = Math.floor(Y / R); J; --J)
            Z += R, G += "	";
        if (Z < Y && (G += Xt(Y - Z)), G != $)
          return _r(a, G, ee(n, 0), ee(n, $.length), "+input"), L.stateAfter = null, !0;
        for (var te = 0; te < a.sel.ranges.length; te++) {
          var ie = a.sel.ranges[te];
          if (ie.head.line == n && ie.head.ch < $.length) {
            var de = ee(n, $.length);
            Ya(a, te, new Ke(de, de));
            break;
          }
        }
      }
      var In = null;
      function zo(e) {
        In = e;
      }
      function qa(e, n, i, r, a) {
        var v = e.doc;
        e.display.shift = !1, r || (r = v.sel);
        var R = +new Date() - 200, L = a == "paste" || e.state.pasteIncoming > R, F = gn(n), $ = null;
        if (L && r.ranges.length > 1)
          if (In && In.text.join(`
`) == n) {
            if (r.ranges.length % In.text.length == 0) {
              $ = [];
              for (var Y = 0; Y < In.text.length; Y++)
                $.push(v.splitLines(In.text[Y]));
            }
          } else
            F.length == r.ranges.length && e.options.pasteLinesPerSelection && ($ = zt(F, function(he) {
              return [he];
            }));
        for (var G = e.curOp.updateInput, Z = r.ranges.length - 1; Z >= 0; Z--) {
          var J = r.ranges[Z], te = J.from(), ie = J.to();
          J.empty() && (i && i > 0 ? te = ee(te.line, te.ch - i) : e.state.overwrite && !L ? ie = ee(ie.line, Math.min(we(v, ie.line).text.length, ie.ch + $e(F).length)) : L && In && In.lineWise && In.text.join(`
`) == F.join(`
`) && (te = ie = ee(te.line, 0)));
          var de = {
            from: te,
            to: ie,
            text: $ ? $[Z % $.length] : F,
            origin: a || (L ? "paste" : e.state.cutIncoming > R ? "cut" : "+input")
          };
          qr(e.doc, de), wt(e, "inputRead", e, de);
        }
        n && !L && Sf(e, n), Kr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = G), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function bf(e, n) {
        var i = e.clipboardData && e.clipboardData.getData("Text");
        if (i)
          return e.preventDefault(), !n.isReadOnly() && !n.options.disableInput && n.hasFocus() && an(n, function() {
            return qa(n, i, 0, null, "paste");
          }), !0;
      }
      function Sf(e, n) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var i = e.doc.sel, r = i.ranges.length - 1; r >= 0; r--) {
            var a = i.ranges[r];
            if (!(a.head.ch > 100 || r && i.ranges[r - 1].head.line == a.head.line)) {
              var v = e.getModeAt(a.head), R = !1;
              if (v.electricChars) {
                for (var L = 0; L < v.electricChars.length; L++)
                  if (n.indexOf(v.electricChars.charAt(L)) > -1) {
                    R = Qi(e, a.head.line, "smart");
                    break;
                  }
              } else
                v.electricInput && v.electricInput.test(we(e.doc, a.head.line).text.slice(0, a.head.ch)) && (R = Qi(e, a.head.line, "smart"));
              R && wt(e, "electricInput", e, a.head.line);
            }
          }
      }
      function Ef(e) {
        for (var n = [], i = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var a = e.doc.sel.ranges[r].head.line, v = { anchor: ee(a, 0), head: ee(a + 1, 0) };
          i.push(v), n.push(e.getRange(v.anchor, v.head));
        }
        return { text: n, ranges: i };
      }
      function _a(e, n, i, r) {
        e.setAttribute("autocorrect", i ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!n);
      }
      function Cf() {
        var e = I("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), n = I("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return E ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), b && (e.style.border = "1px solid black"), n;
      }
      function Bv(e) {
        var n = e.optionHandlers, i = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            ae(this).focus(), this.display.input.focus();
          },
          setOption: function(r, a) {
            var v = this.options, R = v[r];
            v[r] == a && r != "mode" || (v[r] = a, n.hasOwnProperty(r) && Dt(this, n[r])(this, a, R), Ye(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, a) {
            this.state.keyMaps[a ? "push" : "unshift"](Bo(r));
          },
          removeKeyMap: function(r) {
            for (var a = this.state.keyMaps, v = 0; v < a.length; ++v)
              if (a[v] == r || a[v].name == r)
                return a.splice(v, 1), !0;
          },
          addOverlay: kt(function(r, a) {
            var v = r.token ? r : e.getMode(this.options, r);
            if (v.startState)
              throw new Error("Overlays may not be stateful.");
            Ar(
              this.state.overlays,
              {
                mode: v,
                modeSpec: r,
                opaque: a && a.opaque,
                priority: a && a.priority || 0
              },
              function(R) {
                return R.priority;
              }
            ), this.state.modeGen++, _t(this);
          }),
          removeOverlay: kt(function(r) {
            for (var a = this.state.overlays, v = 0; v < a.length; ++v) {
              var R = a[v].modeSpec;
              if (R == r || typeof r == "string" && R.name == r) {
                a.splice(v, 1), this.state.modeGen++, _t(this);
                return;
              }
            }
          }),
          indentLine: kt(function(r, a, v) {
            typeof a != "string" && typeof a != "number" && (a == null ? a = this.options.smartIndent ? "smart" : "prev" : a = a ? "add" : "subtract"), ne(this.doc, r) && Qi(this, r, a, v);
          }),
          indentSelection: kt(function(r) {
            for (var a = this.doc.sel.ranges, v = -1, R = 0; R < a.length; R++) {
              var L = a[R];
              if (L.empty())
                L.head.line > v && (Qi(this, L.head.line, r, !0), v = L.head.line, R == this.doc.sel.primIndex && Kr(this));
              else {
                var F = L.from(), $ = L.to(), Y = Math.max(v, F.line);
                v = Math.min(this.lastLine(), $.line - ($.ch ? 0 : 1)) + 1;
                for (var G = Y; G < v; ++G)
                  Qi(this, G, r);
                var Z = this.doc.sel.ranges;
                F.ch == 0 && a.length == Z.length && Z[R].from().ch > 0 && Ya(this.doc, R, new Ke(F, Z[R].to()), Nt);
              }
            }
          }),
          getTokenAt: function(r, a) {
            return Ns(this, r, a);
          },
          getLineTokens: function(r, a) {
            return Ns(this, ee(r), a, !0);
          },
          getTokenTypeAt: function(r) {
            r = Be(this.doc, r);
            var a = Ps(this, we(this.doc, r.line)), v = 0, R = (a.length - 1) / 2, L = r.ch, F;
            if (L == 0)
              F = a[2];
            else
              for (; ; ) {
                var $ = v + R >> 1;
                if (($ ? a[$ * 2 - 1] : 0) >= L)
                  R = $;
                else if (a[$ * 2 + 1] < L)
                  v = $ + 1;
                else {
                  F = a[$ * 2 + 2];
                  break;
                }
              }
            var Y = F ? F.indexOf("overlay ") : -1;
            return Y < 0 ? F : Y == 0 ? null : F.slice(0, Y - 1);
          },
          getModeAt: function(r) {
            var a = this.doc.mode;
            return a.innerMode ? e.innerMode(a, this.getTokenAt(r).state).mode : a;
          },
          getHelper: function(r, a) {
            return this.getHelpers(r, a)[0];
          },
          getHelpers: function(r, a) {
            var v = [];
            if (!i.hasOwnProperty(a))
              return v;
            var R = i[a], L = this.getModeAt(r);
            if (typeof L[a] == "string")
              R[L[a]] && v.push(R[L[a]]);
            else if (L[a])
              for (var F = 0; F < L[a].length; F++) {
                var $ = R[L[a][F]];
                $ && v.push($);
              }
            else
              L.helperType && R[L.helperType] ? v.push(R[L.helperType]) : R[L.name] && v.push(R[L.name]);
            for (var Y = 0; Y < R._global.length; Y++) {
              var G = R._global[Y];
              G.pred(L, this) && Ee(v, G.val) == -1 && v.push(G.val);
            }
            return v;
          },
          getStateAfter: function(r, a) {
            var v = this.doc;
            return r = Ds(v, r == null ? v.first + v.size - 1 : r), xi(this, r + 1, a).state;
          },
          cursorCoords: function(r, a) {
            var v, R = this.doc.sel.primary();
            return r == null ? v = R.head : typeof r == "object" ? v = Be(this.doc, r) : v = r ? R.from() : R.to(), Rn(this, v, a || "page");
          },
          charCoords: function(r, a) {
            return bo(this, Be(this.doc, r), a || "page");
          },
          coordsChar: function(r, a) {
            return r = su(this, r, a || "page"), Ea(this, r.left, r.top);
          },
          lineAtHeight: function(r, a) {
            return r = su(this, { top: r, left: 0 }, a || "page").top, Q(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, a, v) {
            var R = !1, L;
            if (typeof r == "number") {
              var F = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > F && (r = F, R = !0), L = we(this.doc, r);
            } else
              L = r;
            return xo(this, L, { top: 0, left: 0 }, a || "page", v || R).top + (R ? this.doc.height - kn(L) : 0);
          },
          defaultTextHeight: function() {
            return kr(this.display);
          },
          defaultCharWidth: function() {
            return Qr(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, a, v, R, L) {
            var F = this.display;
            r = Rn(this, Be(this.doc, r));
            var $ = r.bottom, Y = r.left;
            if (a.style.position = "absolute", a.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(a), F.sizer.appendChild(a), R == "over")
              $ = r.top;
            else if (R == "above" || R == "near") {
              var G = Math.max(F.wrapper.clientHeight, this.doc.height), Z = Math.max(F.sizer.clientWidth, F.lineSpace.clientWidth);
              (R == "above" || r.bottom + a.offsetHeight > G) && r.top > a.offsetHeight ? $ = r.top - a.offsetHeight : r.bottom + a.offsetHeight <= G && ($ = r.bottom), Y + a.offsetWidth > Z && (Y = Z - a.offsetWidth);
            }
            a.style.top = $ + "px", a.style.left = a.style.right = "", L == "right" ? (Y = F.sizer.clientWidth - a.offsetWidth, a.style.right = "0px") : (L == "left" ? Y = 0 : L == "middle" && (Y = (F.sizer.clientWidth - a.offsetWidth) / 2), a.style.left = Y + "px"), v && Nc(this, { left: Y, top: $, right: Y + a.offsetWidth, bottom: $ + a.offsetHeight });
          },
          triggerOnKeyDown: kt(cf),
          triggerOnKeyPress: kt(pf),
          triggerOnKeyUp: vf,
          triggerOnMouseDown: kt(hf),
          execCommand: function(r) {
            if (ji.hasOwnProperty(r))
              return ji[r].call(null, this);
          },
          triggerElectric: kt(function(r) {
            Sf(this, r);
          }),
          findPosH: function(r, a, v, R) {
            var L = 1;
            a < 0 && (L = -1, a = -a);
            for (var F = Be(this.doc, r), $ = 0; $ < a && (F = el(this.doc, F, L, v, R), !F.hitSide); ++$)
              ;
            return F;
          },
          moveH: kt(function(r, a) {
            var v = this;
            this.extendSelectionsBy(function(R) {
              return v.display.shift || v.doc.extend || R.empty() ? el(v.doc, R.head, r, a, v.options.rtlMoveVisually) : r < 0 ? R.from() : R.to();
            }, Et);
          }),
          deleteH: kt(function(r, a) {
            var v = this.doc.sel, R = this.doc;
            v.somethingSelected() ? R.replaceSelection("", null, "+delete") : ni(this, function(L) {
              var F = el(R, L.head, r, a, !1);
              return r < 0 ? { from: F, to: L.head } : { from: L.head, to: F };
            });
          }),
          findPosV: function(r, a, v, R) {
            var L = 1, F = R;
            a < 0 && (L = -1, a = -a);
            for (var $ = Be(this.doc, r), Y = 0; Y < a; ++Y) {
              var G = Rn(this, $, "div");
              if (F == null ? F = G.left : G.left = F, $ = Tf(this, G, L, v), $.hitSide)
                break;
            }
            return $;
          },
          moveV: kt(function(r, a) {
            var v = this, R = this.doc, L = [], F = !this.display.shift && !R.extend && R.sel.somethingSelected();
            if (R.extendSelectionsBy(function(Y) {
              if (F)
                return r < 0 ? Y.from() : Y.to();
              var G = Rn(v, Y.head, "div");
              Y.goalColumn != null && (G.left = Y.goalColumn), L.push(G.left);
              var Z = Tf(v, G, r, a);
              return a == "page" && Y == R.sel.primary() && Na(v, bo(v, Z, "div").top - G.top), Z;
            }, Et), L.length)
              for (var $ = 0; $ < R.sel.ranges.length; $++)
                R.sel.ranges[$].goalColumn = L[$];
          }),
          findWordAt: function(r) {
            var a = this.doc, v = we(a, r.line).text, R = r.ch, L = r.ch;
            if (v) {
              var F = this.getHelper(r, "wordChars");
              (r.sticky == "before" || L == v.length) && R ? --R : ++L;
              for (var $ = v.charAt(R), Y = Vt($, F) ? function(G) {
                return Vt(G, F);
              } : /\s/.test($) ? function(G) {
                return /\s/.test(G);
              } : function(G) {
                return !/\s/.test(G) && !Vt(G);
              }; R > 0 && Y(v.charAt(R - 1)); )
                --R;
              for (; L < v.length && Y(v.charAt(L)); )
                ++L;
            }
            return new Ke(ee(r.line, R), ee(r.line, L));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? X(this.display.cursorDiv, "CodeMirror-overwrite") : z(this.display.cursorDiv, "CodeMirror-overwrite"), Ye(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == q(ve(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: kt(function(r, a) {
            Di(this, r, a);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - Hn(this) - this.display.barHeight,
              width: r.scrollWidth - Hn(this) - this.display.barWidth,
              clientHeight: Aa(this),
              clientWidth: br(this)
            };
          },
          scrollIntoView: kt(function(r, a) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, a == null && (a = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: ee(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = a || 0, r.from.line != null ? Fc(this, r) : gu(this, r.from, r.to, r.margin);
          }),
          setSize: kt(function(r, a) {
            var v = this, R = function(F) {
              return typeof F == "number" || /^\d+$/.test(String(F)) ? F + "px" : F;
            };
            r != null && (this.display.wrapper.style.width = R(r)), a != null && (this.display.wrapper.style.height = R(a)), this.options.lineWrapping && ou(this);
            var L = this.display.viewFrom;
            this.doc.iter(L, this.display.viewTo, function(F) {
              if (F.widgets) {
                for (var $ = 0; $ < F.widgets.length; $++)
                  if (F.widgets[$].noHScroll) {
                    ar(v, L, "widget");
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
          refresh: kt(function() {
            var r = this.display.cachedTextHeight;
            _t(this), this.curOp.forceUpdate = !0, Ti(this), Di(this, this.doc.scrollLeft, this.doc.scrollTop), Ba(this.display), (r == null || Math.abs(r - kr(this.display)) > 0.5 || this.options.lineWrapping) && Da(this), Ye(this, "refresh", this);
          }),
          swapDoc: kt(function(r) {
            var a = this.doc;
            return a.cm = null, this.state.selectingText && this.state.selectingText(), Iu(this, r), Ti(this), this.display.input.reset(), Di(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, wt(this, "swapDoc", this, a), a;
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
        }, Yt(e), e.registerHelper = function(r, a, v) {
          i.hasOwnProperty(r) || (i[r] = e[r] = { _global: [] }), i[r][a] = v;
        }, e.registerGlobalHelper = function(r, a, v, R) {
          e.registerHelper(r, a, R), i[r]._global.push({ pred: v, val: R });
        };
      }
      function el(e, n, i, r, a) {
        var v = n, R = i, L = we(e, n.line), F = a && e.direction == "rtl" ? -i : i;
        function $() {
          var xe = n.line + F;
          return xe < e.first || xe >= e.first + e.size ? !1 : (n = new ee(xe, n.ch, n.sticky), L = we(e, xe));
        }
        function Y(xe) {
          var me;
          if (r == "codepoint") {
            var Te = L.text.charCodeAt(n.ch + (i > 0 ? 0 : -1));
            if (isNaN(Te))
              me = null;
            else {
              var Re = i > 0 ? Te >= 55296 && Te < 56320 : Te >= 56320 && Te < 57343;
              me = new ee(n.line, Math.max(0, Math.min(L.text.length, n.ch + i * (Re ? 2 : 1))), -i);
            }
          } else
            a ? me = gv(e.cm, L, n, i) : me = Qa(L, n, i);
          if (me == null)
            if (!xe && $())
              n = Ga(a, e.cm, L, n.line, F);
            else
              return !1;
          else
            n = me;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          Y();
        else if (r == "column")
          Y(!0);
        else if (r == "word" || r == "group")
          for (var G = null, Z = r == "group", J = e.cm && e.cm.getHelper(n, "wordChars"), te = !0; !(i < 0 && !Y(!te)); te = !1) {
            var ie = L.text.charAt(n.ch) || `
`, de = Vt(ie, J) ? "w" : Z && ie == `
` ? "n" : !Z || /\s/.test(ie) ? null : "p";
            if (Z && !te && !de && (de = "s"), G && G != de) {
              i < 0 && (i = 1, Y(), n.sticky = "after");
              break;
            }
            if (de && (G = de), i > 0 && !Y(!te))
              break;
          }
        var he = No(e, n, v, R, !0);
        return Ge(v, he) && (he.hitSide = !0), he;
      }
      function Tf(e, n, i, r) {
        var a = e.doc, v = n.left, R;
        if (r == "page") {
          var L = Math.min(e.display.wrapper.clientHeight, ae(e).innerHeight || a(e).documentElement.clientHeight), F = Math.max(L - 0.5 * kr(e.display), 3);
          R = (i > 0 ? n.bottom : n.top) + i * F;
        } else
          r == "line" && (R = i > 0 ? n.bottom + 3 : n.top - 3);
        for (var $; $ = Ea(e, v, R), !!$.outside; ) {
          if (i < 0 ? R <= 0 : R >= a.height) {
            $.hitSide = !0;
            break;
          }
          R += i * 5;
        }
        return $;
      }
      var _e = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Pe(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      _e.prototype.init = function(e) {
        var n = this, i = this, r = i.cm, a = i.div = e.lineDiv;
        a.contentEditable = !0, _a(a, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function v(L) {
          for (var F = L.target; F; F = F.parentNode) {
            if (F == a)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(F.className))
              break;
          }
          return !1;
        }
        ue(a, "paste", function(L) {
          !v(L) || Xe(r, L) || bf(L, r) || m <= 11 && setTimeout(Dt(r, function() {
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
        function R(L) {
          if (!(!v(L) || Xe(r, L))) {
            if (r.somethingSelected())
              zo({ lineWise: !1, text: r.getSelections() }), L.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var F = Ef(r);
              zo({ lineWise: !0, text: F.text }), L.type == "cut" && r.operation(function() {
                r.setSelections(F.ranges, 0, Nt), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (L.clipboardData) {
              L.clipboardData.clearData();
              var $ = In.text.join(`
`);
              if (L.clipboardData.setData("Text", $), L.clipboardData.getData("Text") == $) {
                L.preventDefault();
                return;
              }
            }
            var Y = Cf(), G = Y.firstChild;
            _a(G), r.display.lineSpace.insertBefore(Y, r.display.lineSpace.firstChild), G.value = In.text.join(`
`);
            var Z = q(ce(a));
            le(G), setTimeout(function() {
              r.display.lineSpace.removeChild(Y), Z.focus(), Z == a && i.showPrimarySelection();
            }, 50);
          }
        }
        ue(a, "copy", R), ue(a, "cut", R);
      }, _e.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, _e.prototype.prepareSelection = function() {
        var e = pu(this.cm, !1);
        return e.focus = q(ce(this.div)) == this.div, e;
      }, _e.prototype.showSelection = function(e, n) {
        !e || !this.cm.display.view.length || ((e.focus || n) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, _e.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, _e.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), n = this.cm, i = n.doc.sel.primary(), r = i.from(), a = i.to();
        if (n.display.viewTo == n.display.viewFrom || r.line >= n.display.viewTo || a.line < n.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var v = $o(n, e.anchorNode, e.anchorOffset), R = $o(n, e.focusNode, e.focusOffset);
        if (!(v && !v.bad && R && !R.bad && ye(Wr(v, R), r) == 0 && ye(qt(v, R), a) == 0)) {
          var L = n.display.view, F = r.line >= n.display.viewFrom && wf(n, r) || { node: L[0].measure.map[2], offset: 0 }, $ = a.line < n.display.viewTo && wf(n, a);
          if (!$) {
            var Y = L[L.length - 1].measure, G = Y.maps ? Y.maps[Y.maps.length - 1] : Y.map;
            $ = { node: G[G.length - 1], offset: G[G.length - 2] - G[G.length - 3] };
          }
          if (!F || !$) {
            e.removeAllRanges();
            return;
          }
          var Z = e.rangeCount && e.getRangeAt(0), J;
          try {
            J = k(F.node, F.offset, $.offset, $.node);
          } catch {
          }
          J && (!t && n.state.focused ? (e.collapse(F.node, F.offset), J.collapsed || (e.removeAllRanges(), e.addRange(J))) : (e.removeAllRanges(), e.addRange(J)), Z && e.anchorNode == null ? e.addRange(Z) : t && this.startGracePeriod()), this.rememberSelection();
        }
      }, _e.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, _e.prototype.showMultipleSelections = function(e) {
        j(this.cm.display.cursorDiv, e.cursors), j(this.cm.display.selectionDiv, e.selection);
      }, _e.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, _e.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var n = e.getRangeAt(0).commonAncestorContainer;
        return K(this.div, n);
      }, _e.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || q(ce(this.div)) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, _e.prototype.blur = function() {
        this.div.blur();
      }, _e.prototype.getField = function() {
        return this.div;
      }, _e.prototype.supportsTouch = function() {
        return !0;
      }, _e.prototype.receivedFocus = function() {
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
      }, _e.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, _e.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), n = this.cm;
          if (w && D && this.cm.display.gutterSpecs.length && Hv(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var i = $o(n, e.anchorNode, e.anchorOffset), r = $o(n, e.focusNode, e.focusOffset);
            i && r && an(n, function() {
              $t(n.doc, sr(i, r), Nt), (i.bad || r.bad) && (n.curOp.selectionChanged = !0);
            });
          }
        }
      }, _e.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, n = e.display, i = e.doc.sel.primary(), r = i.from(), a = i.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = ee(r.line - 1, we(e.doc, r.line - 1).length)), a.ch == we(e.doc, a.line).text.length && a.line < e.lastLine() && (a = ee(a.line + 1, 0)), r.line < n.viewFrom || a.line > n.viewTo - 1)
          return !1;
        var v, R, L;
        r.line == n.viewFrom || (v = Cr(e, r.line)) == 0 ? (R = W(n.view[0].line), L = n.view[0].node) : (R = W(n.view[v].line), L = n.view[v - 1].node.nextSibling);
        var F = Cr(e, a.line), $, Y;
        if (F == n.view.length - 1 ? ($ = n.viewTo - 1, Y = n.lineDiv.lastChild) : ($ = W(n.view[F + 1].line) - 1, Y = n.view[F + 1].node.previousSibling), !L)
          return !1;
        for (var G = e.doc.splitLines(Uv(e, L, Y, R, $)), Z = Vn(e.doc, ee(R, 0), ee($, we(e.doc, $).text.length)); G.length > 1 && Z.length > 1; )
          if ($e(G) == $e(Z))
            G.pop(), Z.pop(), $--;
          else if (G[0] == Z[0])
            G.shift(), Z.shift(), R++;
          else
            break;
        for (var J = 0, te = 0, ie = G[0], de = Z[0], he = Math.min(ie.length, de.length); J < he && ie.charCodeAt(J) == de.charCodeAt(J); )
          ++J;
        for (var xe = $e(G), me = $e(Z), Te = Math.min(
          xe.length - (G.length == 1 ? J : 0),
          me.length - (Z.length == 1 ? J : 0)
        ); te < Te && xe.charCodeAt(xe.length - te - 1) == me.charCodeAt(me.length - te - 1); )
          ++te;
        if (G.length == 1 && Z.length == 1 && R == r.line)
          for (; J && J > r.ch && xe.charCodeAt(xe.length - te - 1) == me.charCodeAt(me.length - te - 1); )
            J--, te++;
        G[G.length - 1] = xe.slice(0, xe.length - te).replace(/^\u200b+/, ""), G[0] = G[0].slice(J).replace(/\u200b+$/, "");
        var Re = ee(R, J), Me = ee($, Z.length ? $e(Z).length - te : 0);
        if (G.length > 1 || G[0] || ye(Re, Me))
          return _r(e.doc, G, Re, Me, "+input"), !0;
      }, _e.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, _e.prototype.reset = function() {
        this.forceCompositionEnd();
      }, _e.prototype.forceCompositionEnd = function() {
        !this.composing || (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, _e.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, _e.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && an(this.cm, function() {
          return _t(e.cm);
        });
      }, _e.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, _e.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Dt(this.cm, qa)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, _e.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, _e.prototype.onContextMenu = function() {
      }, _e.prototype.resetPosition = function() {
      }, _e.prototype.needsContentAttribute = !0;
      function wf(e, n) {
        var i = xa(e, n.line);
        if (!i || i.hidden)
          return null;
        var r = we(e.doc, n.line), a = eu(i, r, n.line), v = oe(r, e.doc.direction), R = "left";
        if (v) {
          var L = Oe(v, n.ch);
          R = L % 2 ? "right" : "left";
        }
        var F = ru(a.map, n.ch, R);
        return F.offset = F.collapse == "right" ? F.end : F.start, F;
      }
      function Hv(e) {
        for (var n = e; n; n = n.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(n.className))
            return !0;
        return !1;
      }
      function ii(e, n) {
        return n && (e.bad = !0), e;
      }
      function Uv(e, n, i, r, a) {
        var v = "", R = !1, L = e.doc.lineSeparator(), F = !1;
        function $(J) {
          return function(te) {
            return te.id == J;
          };
        }
        function Y() {
          R && (v += L, F && (v += L), R = F = !1);
        }
        function G(J) {
          J && (Y(), v += J);
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
              var he = e.findMarks(ee(r, 0), ee(a + 1, 0), $(+ie));
              he.length && (de = he[0].find(0)) && G(Vn(e.doc, de.from, de.to).join(L));
              return;
            }
            if (J.getAttribute("contenteditable") == "false")
              return;
            var xe = /^(pre|div|p|li|table|br)$/i.test(J.nodeName);
            if (!/^br$/i.test(J.nodeName) && J.textContent.length == 0)
              return;
            xe && Y();
            for (var me = 0; me < J.childNodes.length; me++)
              Z(J.childNodes[me]);
            /^(pre|p)$/i.test(J.nodeName) && (F = !0), xe && (R = !0);
          } else
            J.nodeType == 3 && G(J.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; Z(n), n != i; )
          n = n.nextSibling, F = !1;
        return v;
      }
      function $o(e, n, i) {
        var r;
        if (n == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[i], !r)
            return ii(e.clipPos(ee(e.display.viewTo - 1)), !0);
          n = null, i = 0;
        } else
          for (r = n; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var a = 0; a < e.display.view.length; a++) {
          var v = e.display.view[a];
          if (v.node == r)
            return zv(v, n, i);
        }
      }
      function zv(e, n, i) {
        var r = e.text.firstChild, a = !1;
        if (!n || !K(r, n))
          return ii(ee(W(e.line), 0), !0);
        if (n == r && (a = !0, n = r.childNodes[i], i = 0, !n)) {
          var v = e.rest ? $e(e.rest) : e.line;
          return ii(ee(W(v), v.text.length), a);
        }
        var R = n.nodeType == 3 ? n : null, L = n;
        for (!R && n.childNodes.length == 1 && n.firstChild.nodeType == 3 && (R = n.firstChild, i && (i = R.nodeValue.length)); L.parentNode != r; )
          L = L.parentNode;
        var F = e.measure, $ = F.maps;
        function Y(de, he, xe) {
          for (var me = -1; me < ($ ? $.length : 0); me++)
            for (var Te = me < 0 ? F.map : $[me], Re = 0; Re < Te.length; Re += 3) {
              var Me = Te[Re + 2];
              if (Me == de || Me == he) {
                var He = W(me < 0 ? e.line : e.rest[me]), nt = Te[Re] + xe;
                return (xe < 0 || Me != de) && (nt = Te[Re + (xe ? 1 : 0)]), ee(He, nt);
              }
            }
        }
        var G = Y(R, L, i);
        if (G)
          return ii(G, a);
        for (var Z = L.nextSibling, J = R ? R.nodeValue.length - i : 0; Z; Z = Z.nextSibling) {
          if (G = Y(Z, Z.firstChild, 0), G)
            return ii(ee(G.line, G.ch - J), a);
          J += Z.textContent.length;
        }
        for (var te = L.previousSibling, ie = i; te; te = te.previousSibling) {
          if (G = Y(te, te.firstChild, -1), G)
            return ii(ee(G.line, G.ch + ie), a);
          ie += te.textContent.length;
        }
      }
      var vt = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Pe(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      vt.prototype.init = function(e) {
        var n = this, i = this, r = this.cm;
        this.createField(e);
        var a = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), b && (a.style.width = "0px"), ue(a, "input", function() {
          c && m >= 9 && n.hasSelection && (n.hasSelection = null), i.poll();
        }), ue(a, "paste", function(R) {
          Xe(r, R) || bf(R, r) || (r.state.pasteIncoming = +new Date(), i.fastPoll());
        });
        function v(R) {
          if (!Xe(r, R)) {
            if (r.somethingSelected())
              zo({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var L = Ef(r);
              zo({ lineWise: !0, text: L.text }), R.type == "cut" ? r.setSelections(L.ranges, null, Nt) : (i.prevInput = "", a.value = L.text.join(`
`), le(a));
            } else
              return;
            R.type == "cut" && (r.state.cutIncoming = +new Date());
          }
        }
        ue(a, "cut", v), ue(a, "copy", v), ue(e.scroller, "paste", function(R) {
          if (!(Qn(e, R) || Xe(r, R))) {
            if (!a.dispatchEvent) {
              r.state.pasteIncoming = +new Date(), i.focus();
              return;
            }
            var L = new Event("paste");
            L.clipboardData = R.clipboardData, a.dispatchEvent(L);
          }
        }), ue(e.lineSpace, "selectstart", function(R) {
          Qn(e, R) || At(R);
        }), ue(a, "compositionstart", function() {
          var R = r.getCursor("from");
          i.composing && i.composing.range.clear(), i.composing = {
            start: R,
            range: r.markText(R, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), ue(a, "compositionend", function() {
          i.composing && (i.poll(), i.composing.range.clear(), i.composing = null);
        });
      }, vt.prototype.createField = function(e) {
        this.wrapper = Cf(), this.textarea = this.wrapper.firstChild;
        var n = this.cm.options;
        _a(this.textarea, n.spellcheck, n.autocorrect, n.autocapitalize);
      }, vt.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, vt.prototype.prepareSelection = function() {
        var e = this.cm, n = e.display, i = e.doc, r = pu(e);
        if (e.options.moveInputWithCursor) {
          var a = Rn(e, i.sel.primary().head, "div"), v = n.wrapper.getBoundingClientRect(), R = n.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            n.wrapper.clientHeight - 10,
            a.top + R.top - v.top
          )), r.teLeft = Math.max(0, Math.min(
            n.wrapper.clientWidth - 10,
            a.left + R.left - v.left
          ));
        }
        return r;
      }, vt.prototype.showSelection = function(e) {
        var n = this.cm, i = n.display;
        j(i.cursorDiv, e.cursors), j(i.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, vt.prototype.reset = function(e) {
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
      }, vt.prototype.getField = function() {
        return this.textarea;
      }, vt.prototype.supportsTouch = function() {
        return !1;
      }, vt.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!p || q(ce(this.textarea)) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, vt.prototype.blur = function() {
        this.textarea.blur();
      }, vt.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, vt.prototype.receivedFocus = function() {
        this.slowPoll();
      }, vt.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, vt.prototype.fastPoll = function() {
        var e = !1, n = this;
        n.pollingFast = !0;
        function i() {
          var r = n.poll();
          !r && !e ? (e = !0, n.polling.set(60, i)) : (n.pollingFast = !1, n.slowPoll());
        }
        n.polling.set(20, i);
      }, vt.prototype.poll = function() {
        var e = this, n = this.cm, i = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !n.state.focused || rr(i) && !r && !this.composing || n.isReadOnly() || n.options.disableInput || n.state.keySeq)
          return !1;
        var a = i.value;
        if (a == r && !n.somethingSelected())
          return !1;
        if (c && m >= 9 && this.hasSelection === a || T && /[\uf700-\uf7ff]/.test(a))
          return n.display.input.reset(), !1;
        if (n.doc.sel == n.display.selForContextMenu) {
          var v = a.charCodeAt(0);
          if (v == 8203 && !r && (r = "\u200B"), v == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var R = 0, L = Math.min(r.length, a.length); R < L && r.charCodeAt(R) == a.charCodeAt(R); )
          ++R;
        return an(n, function() {
          qa(
            n,
            a.slice(R),
            r.length - R,
            null,
            e.composing ? "*compose" : null
          ), a.length > 1e3 || a.indexOf(`
`) > -1 ? i.value = e.prevInput = "" : e.prevInput = a, e.composing && (e.composing.range.clear(), e.composing.range = n.markText(
            e.composing.start,
            n.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, vt.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, vt.prototype.onKeyPress = function() {
        c && m >= 9 && (this.hasSelection = null), this.fastPoll();
      }, vt.prototype.onContextMenu = function(e) {
        var n = this, i = n.cm, r = i.display, a = n.textarea;
        n.contextMenuPending && n.contextMenuPending();
        var v = Er(i, e), R = r.scroller.scrollTop;
        if (!v || h)
          return;
        var L = i.options.resetSelectionOnContextMenu;
        L && i.doc.sel.contains(v) == -1 && Dt(i, $t)(i.doc, sr(v), Nt);
        var F = a.style.cssText, $ = n.wrapper.style.cssText, Y = n.wrapper.offsetParent.getBoundingClientRect();
        n.wrapper.style.cssText = "position: static", a.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - Y.top - 5) + "px; left: " + (e.clientX - Y.left - 5) + `px;
      z-index: 1000; background: ` + (c ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var G;
        E && (G = a.ownerDocument.defaultView.scrollY), r.input.focus(), E && a.ownerDocument.defaultView.scrollTo(null, G), r.input.reset(), i.somethingSelected() || (a.value = n.prevInput = " "), n.contextMenuPending = J, r.selForContextMenu = i.doc.sel, clearTimeout(r.detectingSelectAll);
        function Z() {
          if (a.selectionStart != null) {
            var ie = i.somethingSelected(), de = "\u200B" + (ie ? a.value : "");
            a.value = "\u21DA", a.value = de, n.prevInput = ie ? "" : "\u200B", a.selectionStart = 1, a.selectionEnd = de.length, r.selForContextMenu = i.doc.sel;
          }
        }
        function J() {
          if (n.contextMenuPending == J && (n.contextMenuPending = !1, n.wrapper.style.cssText = $, a.style.cssText = F, c && m < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = R), a.selectionStart != null)) {
            (!c || c && m < 9) && Z();
            var ie = 0, de = function() {
              r.selForContextMenu == i.doc.sel && a.selectionStart == 0 && a.selectionEnd > 0 && n.prevInput == "\u200B" ? Dt(i, Yu)(i) : ie++ < 10 ? r.detectingSelectAll = setTimeout(de, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(de, 200);
          }
        }
        if (c && m >= 9 && Z(), B) {
          tr(e);
          var te = function() {
            We(window, "mouseup", te), setTimeout(J, 20);
          };
          ue(window, "mouseup", te);
        } else
          setTimeout(J, 50);
      }, vt.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, vt.prototype.setUneditable = function() {
      }, vt.prototype.needsContentAttribute = !1;
      function $v(e, n) {
        if (n = n ? se(n) : {}, n.value = e.value, !n.tabindex && e.tabIndex && (n.tabindex = e.tabIndex), !n.placeholder && e.placeholder && (n.placeholder = e.placeholder), n.autofocus == null) {
          var i = q(ce(e));
          n.autofocus = i == e || e.getAttribute("autofocus") != null && i == document.body;
        }
        function r() {
          e.value = L.getValue();
        }
        var a;
        if (e.form && (ue(e.form, "submit", r), !n.leaveSubmitMethodAlone)) {
          var v = e.form;
          a = v.submit;
          try {
            var R = v.submit = function() {
              r(), v.submit = a, v.submit(), v.submit = R;
            };
          } catch {
          }
        }
        n.finishInit = function(F) {
          F.save = r, F.getTextArea = function() {
            return e;
          }, F.toTextArea = function() {
            F.toTextArea = isNaN, r(), e.parentNode.removeChild(F.getWrapperElement()), e.style.display = "", e.form && (We(e.form, "submit", r), !n.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = a));
          };
        }, e.style.display = "none";
        var L = it(
          function(F) {
            return e.parentNode.insertBefore(F, e.nextSibling);
          },
          n
        );
        return L;
      }
      function Wv(e) {
        e.off = We, e.on = ue, e.wheelEventPixels = Kc, e.Doc = en, e.splitLines = gn, e.countColumn = pe, e.findColumn = Ut, e.isWordChar = Sn, e.Pass = Ht, e.signal = Ye, e.Line = jr, e.changeEnd = ur, e.scrollbarModel = xu, e.Pos = ee, e.cmpPos = ye, e.modes = Br, e.mimeModes = wn, e.resolveMode = Hr, e.getMode = Ur, e.modeExtensions = ir, e.extendMode = zr, e.copyState = On, e.startState = $r, e.innerMode = yi, e.commands = ji, e.keyMap = Kn, e.keyName = lf, e.isModifierKey = of, e.lookupKey = ti, e.normalizeKeyMap = mv, e.StringStream = ut, e.SharedTextMarker = zi, e.TextMarker = dr, e.LineWidget = Ui, e.e_preventDefault = At, e.e_stopPropagation = er, e.e_stop = tr, e.addClass = X, e.contains = K, e.rmClass = z, e.keyNames = cr;
      }
      Lv(it), Bv(it);
      var jv = "iter insert remove copy getEditor constructor".split(" ");
      for (var Wo in en.prototype)
        en.prototype.hasOwnProperty(Wo) && Ee(jv, Wo) < 0 && (it.prototype[Wo] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(en.prototype[Wo]));
      return Yt(en), it.inputStyles = { textarea: vt, contenteditable: _e }, it.defineMode = function(e) {
        !it.defaults.mode && e != "null" && (it.defaults.mode = e), Dn.apply(this, arguments);
      }, it.defineMIME = xr, it.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), it.defineMIME("text/plain", "null"), it.defineExtension = function(e, n) {
        it.prototype[e] = n;
      }, it.defineDocExtension = function(e, n) {
        en.prototype[e] = n;
      }, it.fromTextArea = $v, Wv(it), it.version = "5.65.16", it;
    });
  }(Hl)), Hl.exports;
}
var dm = Wd();
(function(u, y) {
  (function(l) {
    l(Wd());
  })(function(l) {
    l.defineMode("javascript", function(o, t) {
      var s = o.indentUnit, f = t.statementIndent, d = t.jsonld, c = t.json || d, m = t.trackScope !== !1, E = t.typescript, A = t.wordCharacters || /[\w$\xa1-\uffff]/, D = function() {
        function W(Tt) {
          return { type: Tt, style: "keyword" };
        }
        var Q = W("keyword a"), ne = W("keyword b"), fe = W("keyword c"), ee = W("keyword d"), ye = W("operator"), Ge = { type: "atom", style: "atom" };
        return {
          if: W("if"),
          while: Q,
          with: Q,
          else: ne,
          do: ne,
          try: ne,
          finally: ne,
          return: ee,
          break: ee,
          continue: ee,
          new: W("new"),
          delete: fe,
          void: fe,
          throw: fe,
          debugger: W("debugger"),
          var: W("var"),
          const: W("var"),
          let: W("var"),
          function: W("function"),
          catch: W("catch"),
          for: W("for"),
          switch: W("switch"),
          case: W("case"),
          default: W("default"),
          in: ye,
          typeof: ye,
          instanceof: ye,
          true: Ge,
          false: Ge,
          null: Ge,
          undefined: Ge,
          NaN: Ge,
          Infinity: Ge,
          this: W("this"),
          class: W("class"),
          super: W("atom"),
          yield: fe,
          export: W("export"),
          import: W("import"),
          extends: fe,
          await: fe
        };
      }(), C = /[+\-*&%=<>!?|~^@]/, h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function x(W) {
        for (var Q = !1, ne, fe = !1; (ne = W.next()) != null; ) {
          if (!Q) {
            if (ne == "/" && !fe)
              return;
            ne == "[" ? fe = !0 : fe && ne == "]" && (fe = !1);
          }
          Q = !Q && ne == "\\";
        }
      }
      var S, g;
      function b(W, Q, ne) {
        return S = W, g = ne, Q;
      }
      function w(W, Q) {
        var ne = W.next();
        if (ne == '"' || ne == "'")
          return Q.tokenize = p(ne), Q.tokenize(W, Q);
        if (ne == "." && W.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return b("number", "number");
        if (ne == "." && W.match(".."))
          return b("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(ne))
          return b(ne);
        if (ne == "=" && W.eat(">"))
          return b("=>", "operator");
        if (ne == "0" && W.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return b("number", "number");
        if (/\d/.test(ne))
          return W.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), b("number", "number");
        if (ne == "/")
          return W.eat("*") ? (Q.tokenize = T, T(W, Q)) : W.eat("/") ? (W.skipToEnd(), b("comment", "comment")) : dn(W, Q, 1) ? (x(W), W.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), b("regexp", "string-2")) : (W.eat("="), b("operator", "operator", W.current()));
        if (ne == "`")
          return Q.tokenize = M, M(W, Q);
        if (ne == "#" && W.peek() == "!")
          return W.skipToEnd(), b("meta", "meta");
        if (ne == "#" && W.eatWhile(A))
          return b("variable", "property");
        if (ne == "<" && W.match("!--") || ne == "-" && W.match("->") && !/\S/.test(W.string.slice(0, W.start)))
          return W.skipToEnd(), b("comment", "comment");
        if (C.test(ne))
          return (ne != ">" || !Q.lexical || Q.lexical.type != ">") && (W.eat("=") ? (ne == "!" || ne == "=") && W.eat("=") : /[<>*+\-|&?]/.test(ne) && (W.eat(ne), ne == ">" && W.eat(ne))), ne == "?" && W.eat(".") ? b(".") : b("operator", "operator", W.current());
        if (A.test(ne)) {
          W.eatWhile(A);
          var fe = W.current();
          if (Q.lastType != ".") {
            if (D.propertyIsEnumerable(fe)) {
              var ee = D[fe];
              return b(ee.type, ee.style, fe);
            }
            if (fe == "async" && W.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return b("async", "keyword", fe);
          }
          return b("variable", "variable", fe);
        }
      }
      function p(W) {
        return function(Q, ne) {
          var fe = !1, ee;
          if (d && Q.peek() == "@" && Q.match(h))
            return ne.tokenize = w, b("jsonld-keyword", "meta");
          for (; (ee = Q.next()) != null && !(ee == W && !fe); )
            fe = !fe && ee == "\\";
          return fe || (ne.tokenize = w), b("string", "string");
        };
      }
      function T(W, Q) {
        for (var ne = !1, fe; fe = W.next(); ) {
          if (fe == "/" && ne) {
            Q.tokenize = w;
            break;
          }
          ne = fe == "*";
        }
        return b("comment", "comment");
      }
      function M(W, Q) {
        for (var ne = !1, fe; (fe = W.next()) != null; ) {
          if (!ne && (fe == "`" || fe == "$" && W.eat("{"))) {
            Q.tokenize = w;
            break;
          }
          ne = !ne && fe == "\\";
        }
        return b("quasi", "string-2", W.current());
      }
      var N = "([{}])";
      function U(W, Q) {
        Q.fatArrowAt && (Q.fatArrowAt = null);
        var ne = W.string.indexOf("=>", W.start);
        if (!(ne < 0)) {
          if (E) {
            var fe = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(W.string.slice(W.start, ne));
            fe && (ne = fe.index);
          }
          for (var ee = 0, ye = !1, Ge = ne - 1; Ge >= 0; --Ge) {
            var Tt = W.string.charAt(Ge), qt = N.indexOf(Tt);
            if (qt >= 0 && qt < 3) {
              if (!ee) {
                ++Ge;
                break;
              }
              if (--ee == 0) {
                Tt == "(" && (ye = !0);
                break;
              }
            } else if (qt >= 3 && qt < 6)
              ++ee;
            else if (A.test(Tt))
              ye = !0;
            else if (/["'\/`]/.test(Tt))
              for (; ; --Ge) {
                if (Ge == 0)
                  return;
                var Wr = W.string.charAt(Ge - 1);
                if (Wr == Tt && W.string.charAt(Ge - 2) != "\\") {
                  Ge--;
                  break;
                }
              }
            else if (ye && !ee) {
              ++Ge;
              break;
            }
          }
          ye && !ee && (Q.fatArrowAt = Ge);
        }
      }
      var O = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0
      };
      function B(W, Q, ne, fe, ee, ye) {
        this.indented = W, this.column = Q, this.type = ne, this.prev = ee, this.info = ye, fe != null && (this.align = fe);
      }
      function P(W, Q) {
        if (!m)
          return !1;
        for (var ne = W.localVars; ne; ne = ne.next)
          if (ne.name == Q)
            return !0;
        for (var fe = W.context; fe; fe = fe.prev)
          for (var ne = fe.vars; ne; ne = ne.next)
            if (ne.name == Q)
              return !0;
      }
      function z(W, Q, ne, fe, ee) {
        var ye = W.cc;
        for (H.state = W, H.stream = ee, H.marked = null, H.cc = ye, H.style = Q, W.lexical.hasOwnProperty("align") || (W.lexical.align = !0); ; ) {
          var Ge = ye.length ? ye.pop() : c ? Ee : pe;
          if (Ge(ne, fe)) {
            for (; ye.length && ye[ye.length - 1].lex; )
              ye.pop()();
            return H.marked ? H.marked : ne == "variable" && P(W, fe) ? "variable-2" : Q;
          }
        }
      }
      var H = { state: null, column: null, marked: null, cc: null };
      function j() {
        for (var W = arguments.length - 1; W >= 0; W--)
          H.cc.push(arguments[W]);
      }
      function I() {
        return j.apply(null, arguments), !0;
      }
      function V(W, Q) {
        for (var ne = Q; ne; ne = ne.next)
          if (ne.name == W)
            return !0;
        return !1;
      }
      function k(W) {
        var Q = H.state;
        if (H.marked = "def", !!m) {
          if (Q.context) {
            if (Q.lexical.info == "var" && Q.context && Q.context.block) {
              var ne = K(W, Q.context);
              if (ne != null) {
                Q.context = ne;
                return;
              }
            } else if (!V(W, Q.localVars)) {
              Q.localVars = new _(W, Q.localVars);
              return;
            }
          }
          t.globalVars && !V(W, Q.globalVars) && (Q.globalVars = new _(W, Q.globalVars));
        }
      }
      function K(W, Q) {
        if (Q)
          if (Q.block) {
            var ne = K(W, Q.prev);
            return ne ? ne == Q.prev ? Q : new X(ne, Q.vars, !0) : null;
          } else
            return V(W, Q.vars) ? Q : new X(Q.prev, new _(W, Q.vars), !1);
        else
          return null;
      }
      function q(W) {
        return W == "public" || W == "private" || W == "protected" || W == "abstract" || W == "readonly";
      }
      function X(W, Q, ne) {
        this.prev = W, this.vars = Q, this.block = ne;
      }
      function _(W, Q) {
        this.name = W, this.next = Q;
      }
      var le = new _("this", new _("arguments", null));
      function be() {
        H.state.context = new X(H.state.context, H.state.localVars, !1), H.state.localVars = le;
      }
      function ve() {
        H.state.context = new X(H.state.context, H.state.localVars, !0), H.state.localVars = null;
      }
      be.lex = ve.lex = !0;
      function ce() {
        H.state.localVars = H.state.context.vars, H.state.context = H.state.context.prev;
      }
      ce.lex = !0;
      function ae(W, Q) {
        var ne = function() {
          var fe = H.state, ee = fe.indented;
          if (fe.lexical.type == "stat")
            ee = fe.lexical.indented;
          else
            for (var ye = fe.lexical; ye && ye.type == ")" && ye.align; ye = ye.prev)
              ee = ye.indented;
          fe.lexical = new B(ee, H.stream.column(), W, null, fe.lexical, Q);
        };
        return ne.lex = !0, ne;
      }
      function re() {
        var W = H.state;
        W.lexical.prev && (W.lexical.type == ")" && (W.indented = W.lexical.indented), W.lexical = W.lexical.prev);
      }
      re.lex = !0;
      function se(W) {
        function Q(ne) {
          return ne == W ? I() : W == ";" || ne == "}" || ne == ")" || ne == "]" ? j() : I(Q);
        }
        return Q;
      }
      function pe(W, Q) {
        return W == "var" ? I(ae("vardef", Q), er, se(";"), re) : W == "keyword a" ? I(ae("form"), Ht, pe, re) : W == "keyword b" ? I(ae("form"), pe, re) : W == "keyword d" ? H.stream.match(/^\s*$/, !1) ? I() : I(ae("stat"), lt, se(";"), re) : W == "debugger" ? I(se(";")) : W == "{" ? I(ae("}"), ve, je, re, ce) : W == ";" ? I() : W == "if" ? (H.state.lexical.info == "else" && H.state.cc[H.state.cc.length - 1] == re && H.state.cc.pop()(), I(ae("form"), Ht, pe, re, Or)) : W == "function" ? I(gn) : W == "for" ? I(ae("form"), ve, uo, pe, ce, re) : W == "class" || E && Q == "interface" ? (H.marked = "keyword", I(ae("form", W == "class" ? W : Q), Br, re)) : W == "variable" ? E && Q == "declare" ? (H.marked = "keyword", I(pe)) : E && (Q == "module" || Q == "enum" || Q == "type") && H.stream.match(/^\s*\w/, !1) ? (H.marked = "keyword", Q == "enum" ? I(we) : Q == "type" ? I(fo, se("operator"), oe, se(";")) : I(ae("form"), Zt, se("{"), ae("}"), je, re, re)) : E && Q == "namespace" ? (H.marked = "keyword", I(ae("form"), Ee, pe, re)) : E && Q == "abstract" ? (H.marked = "keyword", I(pe)) : I(ae("stat"), Fn) : W == "switch" ? I(
          ae("form"),
          Ht,
          se("{"),
          ae("}", "switch"),
          ve,
          je,
          re,
          re,
          ce
        ) : W == "case" ? I(Ee, se(":")) : W == "default" ? I(se(":")) : W == "catch" ? I(ae("form"), be, Pe, pe, re, ce) : W == "export" ? I(ae("stat"), Hr, re) : W == "import" ? I(ae("stat"), ir, re) : W == "async" ? I(pe) : Q == "@" ? I(Ee, pe) : j(ae("stat"), Ee, se(";"), re);
      }
      function Pe(W) {
        if (W == "(")
          return I(Tn, se(")"));
      }
      function Ee(W, Q) {
        return Nt(W, Q, !1);
      }
      function Ve(W, Q) {
        return Nt(W, Q, !0);
      }
      function Ht(W) {
        return W != "(" ? j() : I(ae(")"), lt, se(")"), re);
      }
      function Nt(W, Q, ne) {
        if (H.state.fatArrowAt == H.stream.start) {
          var fe = ne ? zt : $e;
          if (W == "(")
            return I(be, ae(")"), qe(Tn, ")"), re, se("=>"), fe, ce);
          if (W == "variable")
            return j(be, Zt, se("=>"), fe, ce);
        }
        var ee = ne ? Ut : Et;
        return O.hasOwnProperty(W) ? I(ee) : W == "function" ? I(gn, ee) : W == "class" || E && Q == "interface" ? (H.marked = "keyword", I(ae("form"), ua, re)) : W == "keyword c" || W == "async" ? I(ne ? Ve : Ee) : W == "(" ? I(ae(")"), lt, se(")"), re, ee) : W == "operator" || W == "spread" ? I(ne ? Ve : Ee) : W == "[" ? I(ae("]"), ut, re, ee) : W == "{" ? Jt(Vt, "}", null, ee) : W == "quasi" ? j(ct, ee) : W == "new" ? I(Ar(ne)) : I();
      }
      function lt(W) {
        return W.match(/[;\}\)\],]/) ? j() : j(Ee);
      }
      function Et(W, Q) {
        return W == "," ? I(lt) : Ut(W, Q, !1);
      }
      function Ut(W, Q, ne) {
        var fe = ne == !1 ? Et : Ut, ee = ne == !1 ? Ee : Ve;
        if (W == "=>")
          return I(be, ne ? zt : $e, ce);
        if (W == "operator")
          return /\+\+|--/.test(Q) || E && Q == "!" ? I(fe) : E && Q == "<" && H.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? I(ae(">"), qe(oe, ">"), re, fe) : Q == "?" ? I(Ee, se(":"), ee) : I(ee);
        if (W == "quasi")
          return j(ct, fe);
        if (W != ";") {
          if (W == "(")
            return Jt(Ve, ")", "call", fe);
          if (W == ".")
            return I(Sn, fe);
          if (W == "[")
            return I(ae("]"), lt, se("]"), re, fe);
          if (E && Q == "as")
            return H.marked = "keyword", I(oe, fe);
          if (W == "regexp")
            return H.state.lastType = H.marked = "operator", H.stream.backUp(H.stream.pos - H.stream.start - 1), I(ee);
        }
      }
      function ct(W, Q) {
        return W != "quasi" ? j() : Q.slice(Q.length - 2) != "${" ? I(ct) : I(lt, Xt);
      }
      function Xt(W) {
        if (W == "}")
          return H.marked = "string-2", H.state.tokenize = M, I(ct);
      }
      function $e(W) {
        return U(H.stream, H.state), j(W == "{" ? pe : Ee);
      }
      function zt(W) {
        return U(H.stream, H.state), j(W == "{" ? pe : Ve);
      }
      function Ar(W) {
        return function(Q) {
          return Q == "." ? I(W ? mn : bn) : Q == "variable" && E ? I(tt, W ? Ut : Et) : j(W ? Ve : Ee);
        };
      }
      function bn(W, Q) {
        if (Q == "target")
          return H.marked = "keyword", I(Et);
      }
      function mn(W, Q) {
        if (Q == "target")
          return H.marked = "keyword", I(Ut);
      }
      function Fn(W) {
        return W == ":" ? I(re, pe) : j(Et, se(";"), re);
      }
      function Sn(W) {
        if (W == "variable")
          return H.marked = "property", I();
      }
      function Vt(W, Q) {
        if (W == "async")
          return H.marked = "property", I(Vt);
        if (W == "variable" || H.style == "keyword") {
          if (H.marked = "property", Q == "get" || Q == "set")
            return I(En);
          var ne;
          return E && H.state.fatArrowAt == H.stream.start && (ne = H.stream.match(/^\s*:\s*/, !1)) && (H.state.fatArrowAt = H.stream.pos + ne[0].length), I(Ct);
        } else {
          if (W == "number" || W == "string")
            return H.marked = d ? "property" : H.style + " property", I(Ct);
          if (W == "jsonld-keyword")
            return I(Ct);
          if (E && q(Q))
            return H.marked = "keyword", I(Vt);
          if (W == "[")
            return I(Ee, Ce, se("]"), Ct);
          if (W == "spread")
            return I(Ve, Ct);
          if (Q == "*")
            return H.marked = "keyword", I(Vt);
          if (W == ":")
            return j(Ct);
        }
      }
      function En(W) {
        return W != "variable" ? j(Ct) : (H.marked = "property", I(gn));
      }
      function Ct(W) {
        if (W == ":")
          return I(Ve);
        if (W == "(")
          return j(gn);
      }
      function qe(W, Q, ne) {
        function fe(ee, ye) {
          if (ne ? ne.indexOf(ee) > -1 : ee == ",") {
            var Ge = H.state.lexical;
            return Ge.info == "call" && (Ge.pos = (Ge.pos || 0) + 1), I(function(Tt, qt) {
              return Tt == Q || qt == Q ? j() : j(W);
            }, fe);
          }
          return ee == Q || ye == Q ? I() : ne && ne.indexOf(";") > -1 ? j(W) : I(se(Q));
        }
        return function(ee, ye) {
          return ee == Q || ye == Q ? I() : j(W, fe);
        };
      }
      function Jt(W, Q, ne) {
        for (var fe = 3; fe < arguments.length; fe++)
          H.cc.push(arguments[fe]);
        return I(ae(Q, ne), qe(W, Q), re);
      }
      function je(W) {
        return W == "}" ? I() : j(pe, je);
      }
      function Ce(W, Q) {
        if (E) {
          if (W == ":")
            return I(oe);
          if (Q == "?")
            return I(Ce);
        }
      }
      function ge(W, Q) {
        if (E && (W == ":" || Q == "in"))
          return I(oe);
      }
      function Oe(W) {
        if (E && W == ":")
          return H.stream.match(/^\s*\w+\s+is\b/, !1) ? I(Ee, Se, oe) : I(oe);
      }
      function Se(W, Q) {
        if (Q == "is")
          return H.marked = "keyword", I();
      }
      function oe(W, Q) {
        if (Q == "keyof" || Q == "typeof" || Q == "infer" || Q == "readonly")
          return H.marked = "keyword", I(Q == "typeof" ? Ve : oe);
        if (W == "variable" || Q == "void")
          return H.marked = "type", I(st);
        if (Q == "|" || Q == "&")
          return I(oe);
        if (W == "string" || W == "number" || W == "atom")
          return I(st);
        if (W == "[")
          return I(ae("]"), qe(oe, "]", ","), re, st);
        if (W == "{")
          return I(ae("}"), ue, re, st);
        if (W == "(")
          return I(qe(Xe, ")"), De, st);
        if (W == "<")
          return I(qe(oe, ">"), oe);
        if (W == "quasi")
          return j(We, st);
      }
      function De(W) {
        if (W == "=>")
          return I(oe);
      }
      function ue(W) {
        return W.match(/[\}\)\]]/) ? I() : W == "," || W == ";" ? I(ue) : j(Ie, ue);
      }
      function Ie(W, Q) {
        if (W == "variable" || H.style == "keyword")
          return H.marked = "property", I(Ie);
        if (Q == "?" || W == "number" || W == "string")
          return I(Ie);
        if (W == ":")
          return I(oe);
        if (W == "[")
          return I(se("variable"), ge, se("]"), Ie);
        if (W == "(")
          return j(rr, Ie);
        if (!W.match(/[;\}\)\],]/))
          return I();
      }
      function We(W, Q) {
        return W != "quasi" ? j() : Q.slice(Q.length - 2) != "${" ? I(We) : I(oe, Ye);
      }
      function Ye(W) {
        if (W == "}")
          return H.marked = "string-2", H.state.tokenize = M, I(We);
      }
      function Xe(W, Q) {
        return W == "variable" && H.stream.match(/^\s*[?:]/, !1) || Q == "?" ? I(Xe) : W == ":" ? I(oe) : W == "spread" ? I(Xe) : j(oe);
      }
      function st(W, Q) {
        if (Q == "<")
          return I(ae(">"), qe(oe, ">"), re, st);
        if (Q == "|" || W == "." || Q == "&")
          return I(oe);
        if (W == "[")
          return I(oe, se("]"), st);
        if (Q == "extends" || Q == "implements")
          return H.marked = "keyword", I(oe);
        if (Q == "?")
          return I(oe, se(":"), oe);
      }
      function tt(W, Q) {
        if (Q == "<")
          return I(ae(">"), qe(oe, ">"), re, st);
      }
      function Yt() {
        return j(oe, At);
      }
      function At(W, Q) {
        if (Q == "=")
          return I(oe);
      }
      function er(W, Q) {
        return Q == "enum" ? (H.marked = "keyword", I(we)) : j(Zt, Ce, Cn, sa);
      }
      function Zt(W, Q) {
        if (E && q(Q))
          return H.marked = "keyword", I(Zt);
        if (W == "variable")
          return k(Q), I();
        if (W == "spread")
          return I(Zt);
        if (W == "[")
          return Jt(mi, "]");
        if (W == "{")
          return Jt(tr, "}");
      }
      function tr(W, Q) {
        return W == "variable" && !H.stream.match(/^\s*:/, !1) ? (k(Q), I(Cn)) : (W == "variable" && (H.marked = "property"), W == "spread" ? I(Zt) : W == "}" ? j() : W == "[" ? I(Ee, se("]"), se(":"), tr) : I(se(":"), Zt, Cn));
      }
      function mi() {
        return j(Zt, Cn);
      }
      function Cn(W, Q) {
        if (Q == "=")
          return I(Ve);
      }
      function sa(W) {
        if (W == ",")
          return I(er);
      }
      function Or(W, Q) {
        if (W == "keyword b" && Q == "else")
          return I(ae("form", "else"), pe, re);
      }
      function uo(W, Q) {
        if (Q == "await")
          return I(uo);
        if (W == "(")
          return I(ae(")"), gi, re);
      }
      function gi(W) {
        return W == "var" ? I(er, nr) : W == "variable" ? I(nr) : j(nr);
      }
      function nr(W, Q) {
        return W == ")" ? I() : W == ";" ? I(nr) : Q == "in" || Q == "of" ? (H.marked = "keyword", I(Ee, nr)) : j(Ee, nr);
      }
      function gn(W, Q) {
        if (Q == "*")
          return H.marked = "keyword", I(gn);
        if (W == "variable")
          return k(Q), I(gn);
        if (W == "(")
          return I(be, ae(")"), qe(Tn, ")"), re, Oe, pe, ce);
        if (E && Q == "<")
          return I(ae(">"), qe(Yt, ">"), re, gn);
      }
      function rr(W, Q) {
        if (Q == "*")
          return H.marked = "keyword", I(rr);
        if (W == "variable")
          return k(Q), I(rr);
        if (W == "(")
          return I(be, ae(")"), qe(Tn, ")"), re, Oe, ce);
        if (E && Q == "<")
          return I(ae(">"), qe(Yt, ">"), re, rr);
      }
      function fo(W, Q) {
        if (W == "keyword" || W == "variable")
          return H.marked = "type", I(fo);
        if (Q == "<")
          return I(ae(">"), qe(Yt, ">"), re);
      }
      function Tn(W, Q) {
        return Q == "@" && I(Ee, Tn), W == "spread" ? I(Tn) : E && q(Q) ? (H.marked = "keyword", I(Tn)) : E && W == "this" ? I(Ce, Cn) : j(Zt, Ce, Cn);
      }
      function ua(W, Q) {
        return W == "variable" ? Br(W, Q) : wn(W, Q);
      }
      function Br(W, Q) {
        if (W == "variable")
          return k(Q), I(wn);
      }
      function wn(W, Q) {
        if (Q == "<")
          return I(ae(">"), qe(Yt, ">"), re, wn);
        if (Q == "extends" || Q == "implements" || E && W == ",")
          return Q == "implements" && (H.marked = "keyword"), I(E ? oe : Ee, wn);
        if (W == "{")
          return I(ae("}"), Dn, re);
      }
      function Dn(W, Q) {
        if (W == "async" || W == "variable" && (Q == "static" || Q == "get" || Q == "set" || E && q(Q)) && H.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
          return H.marked = "keyword", I(Dn);
        if (W == "variable" || H.style == "keyword")
          return H.marked = "property", I(xr, Dn);
        if (W == "number" || W == "string")
          return I(xr, Dn);
        if (W == "[")
          return I(Ee, Ce, se("]"), xr, Dn);
        if (Q == "*")
          return H.marked = "keyword", I(Dn);
        if (E && W == "(")
          return j(rr, Dn);
        if (W == ";" || W == ",")
          return I(Dn);
        if (W == "}")
          return I();
        if (Q == "@")
          return I(Ee, Dn);
      }
      function xr(W, Q) {
        if (Q == "!" || Q == "?")
          return I(xr);
        if (W == ":")
          return I(oe, Cn);
        if (Q == "=")
          return I(Ve);
        var ne = H.state.lexical.prev, fe = ne && ne.info == "interface";
        return j(fe ? rr : gn);
      }
      function Hr(W, Q) {
        return Q == "*" ? (H.marked = "keyword", I($r, se(";"))) : Q == "default" ? (H.marked = "keyword", I(Ee, se(";"))) : W == "{" ? I(qe(Ur, "}"), $r, se(";")) : j(pe);
      }
      function Ur(W, Q) {
        if (Q == "as")
          return H.marked = "keyword", I(se("variable"));
        if (W == "variable")
          return j(Ve, Ur);
      }
      function ir(W) {
        return W == "string" ? I() : W == "(" ? j(Ee) : W == "." ? j(Et) : j(zr, On, $r);
      }
      function zr(W, Q) {
        return W == "{" ? Jt(zr, "}") : (W == "variable" && k(Q), Q == "*" && (H.marked = "keyword"), I(yi));
      }
      function On(W) {
        if (W == ",")
          return I(zr, On);
      }
      function yi(W, Q) {
        if (Q == "as")
          return H.marked = "keyword", I(zr);
      }
      function $r(W, Q) {
        if (Q == "from")
          return H.marked = "keyword", I(Ee);
      }
      function ut(W) {
        return W == "]" ? I() : j(qe(Ve, "]"));
      }
      function we() {
        return j(ae("form"), Zt, se("{"), ae("}"), qe(Vn, "}"), re, re);
      }
      function Vn() {
        return j(Zt, Cn);
      }
      function Ai(W, Q) {
        return W.lastType == "operator" || W.lastType == "," || C.test(Q.charAt(0)) || /[,.]/.test(Q.charAt(0));
      }
      function dn(W, Q, ne) {
        return Q.tokenize == w && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(Q.lastType) || Q.lastType == "quasi" && /\{\s*$/.test(W.string.slice(0, W.pos - (ne || 0)));
      }
      return {
        startState: function(W) {
          var Q = {
            tokenize: w,
            lastType: "sof",
            cc: [],
            lexical: new B((W || 0) - s, 0, "block", !1),
            localVars: t.localVars,
            context: t.localVars && new X(null, null, !1),
            indented: W || 0
          };
          return t.globalVars && typeof t.globalVars == "object" && (Q.globalVars = t.globalVars), Q;
        },
        token: function(W, Q) {
          if (W.sol() && (Q.lexical.hasOwnProperty("align") || (Q.lexical.align = !1), Q.indented = W.indentation(), U(W, Q)), Q.tokenize != T && W.eatSpace())
            return null;
          var ne = Q.tokenize(W, Q);
          return S == "comment" ? ne : (Q.lastType = S == "operator" && (g == "++" || g == "--") ? "incdec" : S, z(Q, ne, S, g, W));
        },
        indent: function(W, Q) {
          if (W.tokenize == T || W.tokenize == M)
            return l.Pass;
          if (W.tokenize != w)
            return 0;
          var ne = Q && Q.charAt(0), fe = W.lexical, ee;
          if (!/^\s*else\b/.test(Q))
            for (var ye = W.cc.length - 1; ye >= 0; --ye) {
              var Ge = W.cc[ye];
              if (Ge == re)
                fe = fe.prev;
              else if (Ge != Or && Ge != ce)
                break;
            }
          for (; (fe.type == "stat" || fe.type == "form") && (ne == "}" || (ee = W.cc[W.cc.length - 1]) && (ee == Et || ee == Ut) && !/^[,\.=+\-*:?[\(]/.test(Q)); )
            fe = fe.prev;
          f && fe.type == ")" && fe.prev.type == "stat" && (fe = fe.prev);
          var Tt = fe.type, qt = ne == Tt;
          return Tt == "vardef" ? fe.indented + (W.lastType == "operator" || W.lastType == "," ? fe.info.length + 1 : 0) : Tt == "form" && ne == "{" ? fe.indented : Tt == "form" ? fe.indented + s : Tt == "stat" ? fe.indented + (Ai(W, Q) ? f || s : 0) : fe.info == "switch" && !qt && t.doubleIndentSwitch != !1 ? fe.indented + (/^(?:case|default)\b/.test(Q) ? s : 2 * s) : fe.align ? fe.column + (qt ? 0 : 1) : fe.indented + (qt ? 0 : s);
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
        expressionAllowed: dn,
        skipExpression: function(W) {
          z(W, "atom", "atom", "true", new l.StringStream("", 2, null));
        }
      };
    }), l.registerHelper("wordChars", "javascript", /[\w$]/), l.defineMIME("text/javascript", "javascript"), l.defineMIME("text/ecmascript", "javascript"), l.defineMIME("application/javascript", "javascript"), l.defineMIME("application/x-javascript", "javascript"), l.defineMIME("application/ecmascript", "javascript"), l.defineMIME("application/json", { name: "javascript", json: !0 }), l.defineMIME("application/x-json", { name: "javascript", json: !0 }), l.defineMIME("application/manifest+json", { name: "javascript", json: !0 }), l.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), l.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), l.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
  });
})();
const cm = fn({
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
      const u = eo(yd(this.modelValue ? Jn(this.modelValue) : this.defaultValue));
      this.oldVal = u, this.$nextTick(() => {
        this.editor = dm(this.$refs.editor, {
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
      let y;
      try {
        y = new Function("return " + u)();
      } catch (l) {
        this.err = ` (${l})`;
        return;
      }
      if (this.validate && this.validate(y) === !1) {
        this.err = !0;
        return;
      }
      this.visible = !1, eo(y) !== this.oldVal && this.$emit("update:modelValue", y);
    }
  }
}), vm = { class: "_fc_struct" }, pm = {
  key: 0,
  ref: "editor"
}, hm = { class: "dialog-footer" }, mm = {
  key: 0,
  class: "_fc_err"
};
function gm(u, y, l, o, t, s) {
  const f = Qe("ElButton"), d = Qe("ElDialog");
  return et(), Bt("div", vm, [
    Le(f, {
      onClick: y[0] || (y[0] = (c) => u.visible = !0),
      style: { width: "100%" }
    }, {
      default: ze(() => [
        xn(Ot(u.title || u.t("struct.title")), 1)
      ]),
      _: 1
    }),
    Le(d, {
      title: u.title || u.t("struct.title"),
      modelValue: u.visible,
      "onUpdate:modelValue": y[2] || (y[2] = (c) => u.visible = c),
      "close-on-click-modal": !1,
      "append-to-body": ""
    }, {
      footer: ze(() => [
        rt("span", hm, [
          u.err ? (et(), Bt("span", mm, Ot(u.t("struct.error")) + Ot(u.err !== !0 ? u.err : ""), 1)) : un("", !0),
          Le(f, {
            onClick: y[1] || (y[1] = (c) => u.visible = !1),
            size: "small"
          }, {
            default: ze(() => [
              xn(Ot(u.t("struct.cancel")), 1)
            ]),
            _: 1
          }),
          Le(f, {
            type: "primary",
            onClick: u.onOk,
            size: "small"
          }, {
            default: ze(() => [
              xn(Ot(u.t("struct.submit")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: ze(() => [
        u.visible ? (et(), Bt("div", pm, null, 512)) : un("", !0)
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ]);
}
const ym = /* @__PURE__ */ Nn(cm, [["render", gm]]);
function Am(u, y) {
  var l = null;
  return function(...o) {
    l !== null && clearTimeout(l), l = setTimeout(() => u.call(this, ...o), y);
  };
}
const xm = fn({
  name: "Fetch",
  props: {
    modelValue: [Object, String],
    to: String
  },
  components: {
    DragForm: dt.$form()
  },
  inject: ["designer"],
  computed: {
    formValue() {
      const u = this.modelValue;
      return u ? St.String(u) ? {
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
          field: "dict",
          title: u("fetch.action") + ": ",
          validate: [{ required: !0, message: u("fetch.actionRequired") }]
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
    input: Am(function() {
      this._input();
    }, 1e3)
  },
  mounted() {
    this._input();
  }
}), bm = { class: "_fc_fetch" };
function Sm(u, y, l, o, t, s) {
  const f = Qe("DragForm");
  return et(), Bt("div", bm, [
    Le(f, {
      api: u.api,
      "onUpdate:api": y[0] || (y[0] = (d) => u.api = d),
      modelValue: u.formValue,
      rule: u.rule,
      option: u.option,
      onChange: u.input
    }, null, 8, ["api", "modelValue", "rule", "option", "onChange"])
  ]);
}
const Em = /* @__PURE__ */ Nn(xm, [["render", Sm]]);
const Cm = fn({
  name: "Validate",
  inject: ["designer"],
  props: {
    modelValue: Array
  },
  components: {
    DragForm: dt.$form()
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
              handle: (y) => !!y,
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
                              click: (y) => {
                                const l = this.designer.setupState.activeRule.title;
                                this.designer.setupState.activeRule && y.api.setValue("message", u(y.api.form.mode !== "required" ? "validate.autoMode" : "validate.autoRequired", { title: l }));
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
      let y = [];
      const { validate: l, type: o } = Jn(u);
      o && (!l || !l.length) || (o && (l.forEach((t) => {
        t.type = o;
      }), y = [...l]), this.$emit("update:modelValue", y));
    },
    parseValue(u) {
      let y = {
        validate: u ? [...u] : [],
        type: u.length ? u[0].type || "string" : void 0
      };
      return y.validate.forEach((l) => {
        l.mode || Object.keys(l).forEach((o) => {
          ["message", "type", "trigger", "mode"].indexOf(o) < 0 && (l.mode = o);
        });
      }), y;
    }
  }
});
function Tm(u, y, l, o, t, s) {
  const f = Qe("DragForm");
  return et(), An(f, {
    class: "_fc-validate",
    rule: u.rule,
    option: u.option,
    modelValue: u.formValue,
    "onUpdate:modelValue": u.onInput
  }, null, 8, ["rule", "option", "modelValue", "onUpdate:modelValue"]);
}
const wm = /* @__PURE__ */ Nn(Cm, [["render", Tm]]);
const sd = {
  input: ["change", "visible-change", "remove-tag", "clear", "blur", "focus"],
  cascader: ["change", "expand-change", "blur", "focus", "visible-change", "remove-tag"],
  checkbox: ["change"],
  colorPicker: ["change", "active-change", "focus", "blur"],
  datePicker: ["change", "blur", "focus", "calendar-change", "panel-change", "visible-change"],
  inputNumber: ["change", "blur", "focus"],
  radio: ["change"],
  rate: ["change"],
  select: ["change", "visible-change", "remove-tag", "clear", "blur", "focus"],
  slider: ["change", "input"],
  switch: ["change"],
  table: [
    "page-change",
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-click",
    "cell-dblclick",
    "cell-contextmenu",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  timePicker: ["change", "blur", "focus", "visible-change"],
  transfer: ["change", "left-check-change", "right-check-change"],
  upload: [],
  button: ["click"]
}, Dm = fn({
  name: "Event",
  inject: ["designer"],
  props: {
    modelValue: Array
  },
  components: {
    DragForm: dt.$form()
  },
  watch: {},
  data() {
    const u = this.designer.setupState.t, y = this.modelValue.length, l = this.modelValue[y - 1];
    let o = [];
    l in sd && (o = sd[l]), this.modelValue.splice(y - 1, 1);
    const t = o.map((f) => ({
      label: f,
      value: f
    }));
    let s = { event: [] };
    return s.event = this.modelValue.map(function(f) {
      return { eventName: f.eventName, function: f.function };
    }), {
      formValue: [],
      t: u,
      option: {
        form: {
          labelPosition: "top",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1,
        appendValue: !0,
        formData: s
      },
      rule: [
        {
          type: "group",
          field: "event",
          props: {
            expand: 1,
            sortBtn: !1,
            rule: [
              {
                type: "select",
                title: u("emit.eventName"),
                field: "eventName",
                value: "",
                options: t,
                props: {
                  filterable: !0,
                  "allow-create": !0,
                  "default-first-option": !0
                }
              },
              {
                type: "input",
                title: u("emit.function"),
                field: "function",
                value: ""
              }
            ]
          },
          value: []
        }
      ]
    };
  },
  methods: {
    onInput: function(u) {
      let y = [];
      const { event: l } = Jn(u);
      !l || !l.length || (y = [...l], this.$emit("update:modelValue", y));
    }
  }
});
function Mm(u, y, l, o, t, s) {
  const f = Qe("DragForm");
  return et(), An(f, {
    class: "_fc-emit",
    rule: u.rule,
    option: u.option,
    modelValue: u.formValue,
    "onUpdate:modelValue": u.onInput
  }, null, 8, ["rule", "option", "modelValue", "onUpdate:modelValue"]);
}
const Rm = /* @__PURE__ */ Nn(Dm, [["render", Mm]]), Pm = fn({
  name: "DragBox",
  props: ["rule", "tag", "formCreateInject"],
  render(u) {
    const y = { ...u.$props.rule.props, ...u.$attrs };
    let l = y.tag + "-drag drag-box";
    Object.keys(u.$slots).length || (l += " " + y.tag + "-holder"), y.class = l, y.modelValue = [...this.$props.formCreateInject.children];
    const o = {};
    return u.$slots.default && u.$slots.default().forEach((s) => {
      s.key && (o[s.key] = s);
    }), ea(Ts, y, {
      item: ({ element: t }) => {
        var s;
        return (s = t == null ? void 0 : t.__fc__) != null && s.key ? ea("div", {}, o[t.__fc__.key + "fc"]) : void 0;
      }
    });
  }
});
const Im = fn({
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
      const y = St.String(u);
      this.required = u === void 0 ? !1 : y ? !0 : !!u, this.requiredMsg = y ? u : "";
    }
  },
  data() {
    const u = St.String(this.modelValue);
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
}), Lm = { class: "_fc-required" };
function Nm(u, y, l, o, t, s) {
  const f = Qe("ElSwitch"), d = Qe("ElInput");
  return et(), Bt("div", Lm, [
    Le(f, {
      modelValue: u.required,
      "onUpdate:modelValue": y[0] || (y[0] = (c) => u.required = c)
    }, null, 8, ["modelValue"]),
    u.required ? (et(), An(d, {
      key: 0,
      modelValue: u.requiredMsg,
      "onUpdate:modelValue": y[1] || (y[1] = (c) => u.requiredMsg = c),
      placeholder: u.t("validate.requiredPlaceholder")
    }, null, 8, ["modelValue", "placeholder"])) : un("", !0)
  ]);
}
const Fm = /* @__PURE__ */ Nn(Im, [["render", Nm]]);
const Om = fn({
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
      this.modelValue.push(this.column.reduce((u, y) => (u[y.key] = "", u), {}));
    },
    del(u) {
      this.modelValue.splice(u, 1), this.input(this.modelValue);
    }
  }
}), Bm = (u) => (xs("data-v-0d635ce0"), u = u(), bs(), u), Hm = { class: "_fc_table_opt" }, Um = ["onClick"], zm = /* @__PURE__ */ Bm(() => /* @__PURE__ */ rt("i", { class: "fc-icon icon-add" }, null, -1));
function $m(u, y, l, o, t, s) {
  const f = Qe("el-input"), d = Qe("el-table-column"), c = Qe("el-table"), m = Qe("el-button");
  return et(), Bt("div", Hm, [
    Le(c, {
      data: u.modelValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: ze(() => [
        (et(!0), Bt(cd, null, vd(u.column, (E, A) => (et(), An(d, {
          key: E.label + A,
          label: E.label
        }, {
          default: ze((D) => [
            Le(f, {
              size: "small",
              modelValue: D.row[E.key] || "",
              "onUpdate:modelValue": (C) => (D.row[E.key] = C, u.onInput(D.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1032, ["label"]))), 128)),
        Le(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: u.t("tableOptions.handle")
        }, {
          default: ze((E) => [
            rt("i", {
              class: "fc-icon icon-delete",
              onClick: (A) => u.del(E.$index)
            }, null, 8, Um)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    Le(m, {
      link: "",
      type: "primary",
      onClick: u.add
    }, {
      default: ze(() => [
        zm,
        xn(" " + Ot(u.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Wm = /* @__PURE__ */ Nn(Om, [["render", $m], ["__scopeId", "data-v-0d635ce0"]]);
const jm = fn({
  name: "TableColumnOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      t: this.designer.setupState.t,
      columnValue: this.modelValue === void 0 ? [] : this.modelValue
    };
  },
  created() {
    Array.isArray(this.columnValue) || this.$emit("input", []);
  },
  methods: {
    onInput(u) {
      u.label !== void 0 && u.prop !== void 0 && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.columnValue);
    },
    add() {
      this.columnValue.push({ label: "", prop: "", slot: !1 });
    },
    del(u) {
      this.columnValue.splice(u, 1), this.input(this.columnValue);
    }
  }
}), Vm = (u) => (xs("data-v-5bd433d0"), u = u(), bs(), u), Ym = { class: "_fc_table_opt" }, km = ["onClick"], Qm = /* @__PURE__ */ Vm(() => /* @__PURE__ */ rt("i", { class: "fc-icon icon-add" }, null, -1));
function Gm(u, y, l, o, t, s) {
  const f = Qe("el-input"), d = Qe("el-table-column"), c = Qe("el-checkbox"), m = Qe("el-table"), E = Qe("el-button");
  return et(), Bt("div", Ym, [
    Le(m, {
      data: u.columnValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: ze(() => [
        Le(d, { label: "label" }, {
          default: ze((A) => [
            Le(f, {
              size: "small",
              modelValue: A.row.label || "",
              "onUpdate:modelValue": (D) => (A.row.label = D, u.onInput(A.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        Le(d, { label: "prop" }, {
          default: ze((A) => [
            Le(f, {
              size: "small",
              modelValue: A.row.prop || "",
              "onUpdate:modelValue": (D) => (A.row.prop = D, u.onInput(A.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        Le(d, { label: "slot" }, {
          default: ze((A) => [
            Le(c, {
              size: "small",
              modelValue: A.row.slot || "",
              "onUpdate:modelValue": (D) => (A.row.slot = D, u.onInput(A.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        Le(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: u.t("tableOptions.handle")
        }, {
          default: ze((A) => [
            rt("i", {
              class: "fc-icon icon-delete",
              onClick: (D) => u.del(A.$index)
            }, null, 8, km)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    Le(E, {
      link: "",
      type: "primary",
      onClick: u.add
    }, {
      default: ze(() => [
        Qm,
        xn(" " + Ot(u.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Km = /* @__PURE__ */ Nn(jm, [["render", Gm], ["__scopeId", "data-v-5bd433d0"]]);
const Xm = fn({
  name: "TableMenuOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      t: this.designer.setupState.t,
      menuValue: this.modelValue === void 0 ? [] : this.modelValue
    };
  },
  created() {
    Array.isArray(this.menuValue) || this.$emit("input", []);
  },
  methods: {
    onInput(u) {
      u.label !== void 0 && u.function !== void 0 && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.menuValue);
    },
    add() {
      this.menuValue.push({ label: "", function: "", hasPermi: "" });
    },
    del(u) {
      this.menuValue.splice(u, 1), this.input(this.menuValue);
    }
  }
}), Jm = (u) => (xs("data-v-c4468f72"), u = u(), bs(), u), Zm = { class: "_fc_table_opt" }, qm = ["onClick"], _m = /* @__PURE__ */ Jm(() => /* @__PURE__ */ rt("i", { class: "fc-icon icon-add" }, null, -1));
function eg(u, y, l, o, t, s) {
  const f = Qe("el-input"), d = Qe("el-table-column"), c = Qe("el-table"), m = Qe("el-button");
  return et(), Bt("div", Zm, [
    Le(c, {
      data: u.menuValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: ze(() => [
        Le(d, { label: "label" }, {
          default: ze((E) => [
            Le(f, {
              size: "small",
              modelValue: E.row.label || "",
              "onUpdate:modelValue": (A) => (E.row.label = A, u.onInput(E.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        Le(d, { label: "\u54CD\u5E94\u51FD\u6570" }, {
          default: ze((E) => [
            Le(f, {
              size: "small",
              modelValue: E.row.function || "",
              "onUpdate:modelValue": (A) => (E.row.function = A, u.onInput(E.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        Le(d, { label: "\u6743\u9650" }, {
          default: ze((E) => [
            Le(f, {
              size: "small",
              modelValue: E.row.hasPermi || "",
              "onUpdate:modelValue": (A) => (E.row.hasPermi = A, u.onInput(E.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }),
        Le(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: u.t("tableOptions.handle")
        }, {
          default: ze((E) => [
            rt("i", {
              class: "fc-icon icon-delete",
              onClick: (A) => u.del(E.$index)
            }, null, 8, qm)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    Le(m, {
      link: "",
      type: "primary",
      onClick: u.add
    }, {
      default: ze(() => [
        _m,
        xn(" " + Ot(u.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const tg = /* @__PURE__ */ Nn(Xm, [["render", eg], ["__scopeId", "data-v-c4468f72"]]);
/*!
 * @form-create/component-wangeditor v3.1.20
 * (c) 2018-2023 xaboy
 * Github https://github.com/xaboy/form-create with wangeditor
 * Released under the MIT License.
 */
function ud(u, y) {
  var l = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(u);
    y && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(u, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function ng(u) {
  for (var y = 1; y < arguments.length; y++) {
    var l = arguments[y] != null ? arguments[y] : {};
    y % 2 ? ud(Object(l), !0).forEach(function(o) {
      rg(u, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(l)) : ud(Object(l)).forEach(function(o) {
      Object.defineProperty(u, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return u;
}
function It(u) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? It = function(y) {
    return typeof y;
  } : It = function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  }, It(u);
}
function rg(u, y, l) {
  return y in u ? Object.defineProperty(u, y, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[y] = l, u;
}
function ig(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var jd = { exports: {} };
(function(u, y) {
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
        return E;
      }), t.d(o, "__metadata", function() {
        return A;
      }), t.d(o, "__awaiter", function() {
        return D;
      }), t.d(o, "__generator", function() {
        return C;
      }), t.d(o, "__createBinding", function() {
        return h;
      }), t.d(o, "__exportStar", function() {
        return x;
      }), t.d(o, "__values", function() {
        return S;
      }), t.d(o, "__read", function() {
        return g;
      }), t.d(o, "__spread", function() {
        return b;
      }), t.d(o, "__spreadArrays", function() {
        return w;
      }), t.d(o, "__spreadArray", function() {
        return p;
      }), t.d(o, "__await", function() {
        return T;
      }), t.d(o, "__asyncGenerator", function() {
        return M;
      }), t.d(o, "__asyncDelegator", function() {
        return N;
      }), t.d(o, "__asyncValues", function() {
        return U;
      }), t.d(o, "__makeTemplateObject", function() {
        return O;
      }), t.d(o, "__importStar", function() {
        return P;
      }), t.d(o, "__importDefault", function() {
        return z;
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
      var s = function(V, k) {
        return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(K, q) {
          K.__proto__ = q;
        } || function(K, q) {
          for (var X in q)
            Object.prototype.hasOwnProperty.call(q, X) && (K[X] = q[X]);
        }, s(V, k);
      };
      function f(I, V) {
        if (typeof V != "function" && V !== null)
          throw new TypeError("Class extends value " + String(V) + " is not a constructor or null");
        s(I, V);
        function k() {
          this.constructor = I;
        }
        I.prototype = V === null ? Object.create(V) : (k.prototype = V.prototype, new k());
      }
      var d = function() {
        return d = Object.assign || function(k) {
          for (var K, q = 1, X = arguments.length; q < X; q++) {
            K = arguments[q];
            for (var _ in K)
              Object.prototype.hasOwnProperty.call(K, _) && (k[_] = K[_]);
          }
          return k;
        }, d.apply(this, arguments);
      };
      function c(I, V) {
        var k = {};
        for (var K in I)
          Object.prototype.hasOwnProperty.call(I, K) && V.indexOf(K) < 0 && (k[K] = I[K]);
        if (I != null && typeof Object.getOwnPropertySymbols == "function")
          for (var q = 0, K = Object.getOwnPropertySymbols(I); q < K.length; q++)
            V.indexOf(K[q]) < 0 && Object.prototype.propertyIsEnumerable.call(I, K[q]) && (k[K[q]] = I[K[q]]);
        return k;
      }
      function m(I, V, k, K) {
        var q = arguments.length, X = q < 3 ? V : K === null ? K = Object.getOwnPropertyDescriptor(V, k) : K, _;
        if ((typeof Reflect > "u" ? "undefined" : It(Reflect)) === "object" && typeof Reflect.decorate == "function")
          X = Reflect.decorate(I, V, k, K);
        else
          for (var le = I.length - 1; le >= 0; le--)
            (_ = I[le]) && (X = (q < 3 ? _(X) : q > 3 ? _(V, k, X) : _(V, k)) || X);
        return q > 3 && X && Object.defineProperty(V, k, X), X;
      }
      function E(I, V) {
        return function(k, K) {
          V(k, K, I);
        };
      }
      function A(I, V) {
        if ((typeof Reflect > "u" ? "undefined" : It(Reflect)) === "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(I, V);
      }
      function D(I, V, k, K) {
        function q(X) {
          return X instanceof k ? X : new k(function(_) {
            _(X);
          });
        }
        return new (k || (k = Promise))(function(X, _) {
          function le(ce) {
            try {
              ve(K.next(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function be(ce) {
            try {
              ve(K.throw(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function ve(ce) {
            ce.done ? X(ce.value) : q(ce.value).then(le, be);
          }
          ve((K = K.apply(I, V || [])).next());
        });
      }
      function C(I, V) {
        var k = { label: 0, sent: function() {
          if (X[0] & 1)
            throw X[1];
          return X[1];
        }, trys: [], ops: [] }, K, q, X, _;
        return _ = { next: le(0), throw: le(1), return: le(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
          return this;
        }), _;
        function le(ve) {
          return function(ce) {
            return be([ve, ce]);
          };
        }
        function be(ve) {
          if (K)
            throw new TypeError("Generator is already executing.");
          for (; k; )
            try {
              if (K = 1, q && (X = ve[0] & 2 ? q.return : ve[0] ? q.throw || ((X = q.return) && X.call(q), 0) : q.next) && !(X = X.call(q, ve[1])).done)
                return X;
              switch (q = 0, X && (ve = [ve[0] & 2, X.value]), ve[0]) {
                case 0:
                case 1:
                  X = ve;
                  break;
                case 4:
                  return k.label++, { value: ve[1], done: !1 };
                case 5:
                  k.label++, q = ve[1], ve = [0];
                  continue;
                case 7:
                  ve = k.ops.pop(), k.trys.pop();
                  continue;
                default:
                  if (X = k.trys, !(X = X.length > 0 && X[X.length - 1]) && (ve[0] === 6 || ve[0] === 2)) {
                    k = 0;
                    continue;
                  }
                  if (ve[0] === 3 && (!X || ve[1] > X[0] && ve[1] < X[3])) {
                    k.label = ve[1];
                    break;
                  }
                  if (ve[0] === 6 && k.label < X[1]) {
                    k.label = X[1], X = ve;
                    break;
                  }
                  if (X && k.label < X[2]) {
                    k.label = X[2], k.ops.push(ve);
                    break;
                  }
                  X[2] && k.ops.pop(), k.trys.pop();
                  continue;
              }
              ve = V.call(I, k);
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
      var h = Object.create ? function(I, V, k, K) {
        K === void 0 && (K = k), Object.defineProperty(I, K, { enumerable: !0, get: function() {
          return V[k];
        } });
      } : function(I, V, k, K) {
        K === void 0 && (K = k), I[K] = V[k];
      };
      function x(I, V) {
        for (var k in I)
          k !== "default" && !Object.prototype.hasOwnProperty.call(V, k) && h(V, I, k);
      }
      function S(I) {
        var V = typeof Symbol == "function" && Symbol.iterator, k = V && I[V], K = 0;
        if (k)
          return k.call(I);
        if (I && typeof I.length == "number")
          return { next: function() {
            return I && K >= I.length && (I = void 0), { value: I && I[K++], done: !I };
          } };
        throw new TypeError(V ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function g(I, V) {
        var k = typeof Symbol == "function" && I[Symbol.iterator];
        if (!k)
          return I;
        var K = k.call(I), q, X = [], _;
        try {
          for (; (V === void 0 || V-- > 0) && !(q = K.next()).done; )
            X.push(q.value);
        } catch (le) {
          _ = { error: le };
        } finally {
          try {
            q && !q.done && (k = K.return) && k.call(K);
          } finally {
            if (_)
              throw _.error;
          }
        }
        return X;
      }
      function b() {
        for (var I = [], V = 0; V < arguments.length; V++)
          I = I.concat(g(arguments[V]));
        return I;
      }
      function w() {
        for (var I = 0, V = 0, k = arguments.length; V < k; V++)
          I += arguments[V].length;
        for (var K = Array(I), q = 0, V = 0; V < k; V++)
          for (var X = arguments[V], _ = 0, le = X.length; _ < le; _++, q++)
            K[q] = X[_];
        return K;
      }
      function p(I, V) {
        for (var k = 0, K = V.length, q = I.length; k < K; k++, q++)
          I[q] = V[k];
        return I;
      }
      function T(I) {
        return this instanceof T ? (this.v = I, this) : new T(I);
      }
      function M(I, V, k) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var K = k.apply(I, V || []), q, X = [];
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
            be(K[re](se));
          } catch (pe) {
            ae(X[0][3], pe);
          }
        }
        function be(re) {
          re.value instanceof T ? Promise.resolve(re.value.v).then(ve, ce) : ae(X[0][2], re);
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
      function N(I) {
        var V, k;
        return V = {}, K("next"), K("throw", function(q) {
          throw q;
        }), K("return"), V[Symbol.iterator] = function() {
          return this;
        }, V;
        function K(q, X) {
          V[q] = I[q] ? function(_) {
            return (k = !k) ? { value: T(I[q](_)), done: q === "return" } : X ? X(_) : _;
          } : X;
        }
      }
      function U(I) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var V = I[Symbol.asyncIterator], k;
        return V ? V.call(I) : (I = typeof S == "function" ? S(I) : I[Symbol.iterator](), k = {}, K("next"), K("throw"), K("return"), k[Symbol.asyncIterator] = function() {
          return this;
        }, k);
        function K(X) {
          k[X] = I[X] && function(_) {
            return new Promise(function(le, be) {
              _ = I[X](_), q(le, be, _.done, _.value);
            });
          };
        }
        function q(X, _, le, be) {
          Promise.resolve(be).then(function(ve) {
            X({ value: ve, done: le });
          }, _);
        }
      }
      function O(I, V) {
        return Object.defineProperty ? Object.defineProperty(I, "raw", { value: V }) : I.raw = V, I;
      }
      var B = Object.create ? function(I, V) {
        Object.defineProperty(I, "default", { enumerable: !0, value: V });
      } : function(I, V) {
        I.default = V;
      };
      function P(I) {
        if (I && I.__esModule)
          return I;
        var V = {};
        if (I != null)
          for (var k in I)
            k !== "default" && Object.prototype.hasOwnProperty.call(I, k) && h(V, I, k);
        return B(V, I), V;
      }
      function z(I) {
        return I && I.__esModule ? I : { default: I };
      }
      function H(I, V) {
        if (!V.has(I))
          throw new TypeError("attempted to get private field on non-instance");
        return V.get(I);
      }
      function j(I, V, k) {
        if (!V.has(I))
          throw new TypeError("attempted to set private field on non-instance");
        return V.set(I, k), k;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(89)), c = s(t(4)), m = s(t(26)), E = s(t(17)), A = s(t(120)), D = s(t(27)), C = s(t(91)), h = s(t(70)), x = s(t(44)), S = s(t(57));
      (0, f.default)(o, "__esModule", { value: !0 }), o.DomElement = void 0;
      var g = t(2), b = t(6), w = [];
      function p(B) {
        var P = document.createElement("div");
        P.innerHTML = B;
        var z = P.children;
        return b.toArray(z);
      }
      function T(B) {
        return B ? B instanceof HTMLCollection || B instanceof NodeList : !1;
      }
      function M(B) {
        var P = document.querySelectorAll(B);
        return b.toArray(P);
      }
      function N(B) {
        var P = [], z = [];
        return (0, d.default)(B) ? P = B : P = B.split(";"), (0, c.default)(P).call(P, function(H) {
          var j, I = (0, m.default)(j = H.split(":")).call(j, function(V) {
            return (0, E.default)(V).call(V);
          });
          I.length === 2 && z.push(I[0] + ":" + I[1]);
        }), z;
      }
      var U = function() {
        function B(P) {
          if (this.elems = [], this.length = this.elems.length, this.dataSource = new A.default(), !!P) {
            if (P instanceof B)
              return P;
            var z = [], H = P instanceof Node ? P.nodeType : -1;
            if (this.selector = P, H === 1 || H === 9)
              z = [P];
            else if (T(P))
              z = b.toArray(P);
            else if (P instanceof Array)
              z = P;
            else if (typeof P == "string") {
              var j, I = (0, E.default)(j = P.replace(`/
/mg`, "")).call(j);
              (0, D.default)(I).call(I, "<") === 0 ? z = p(I) : z = M(I);
            }
            var V = z.length;
            if (!V)
              return this;
            for (var k = 0; k < V; k++)
              this.elems.push(z[k]);
            this.length = V;
          }
        }
        return (0, f.default)(B.prototype, "id", {
          get: function() {
            return this.elems[0].id;
          },
          enumerable: !1,
          configurable: !0
        }), B.prototype.forEach = function(P) {
          for (var z = 0; z < this.length; z++) {
            var H = this.elems[z], j = P.call(H, H, z);
            if (j === !1)
              break;
          }
          return this;
        }, B.prototype.clone = function(P) {
          var z;
          P === void 0 && (P = !1);
          var H = [];
          return (0, c.default)(z = this.elems).call(z, function(j) {
            H.push(j.cloneNode(!!P));
          }), O(H);
        }, B.prototype.get = function(P) {
          P === void 0 && (P = 0);
          var z = this.length;
          return P >= z && (P = P % z), O(this.elems[P]);
        }, B.prototype.first = function() {
          return this.get(0);
        }, B.prototype.last = function() {
          var P = this.length;
          return this.get(P - 1);
        }, B.prototype.on = function(P, z, H) {
          var j;
          return P ? (typeof z == "function" && (H = z, z = ""), (0, c.default)(j = this).call(j, function(I) {
            if (!z) {
              I.addEventListener(P, H);
              return;
            }
            var V = function(K) {
              var q = K.target;
              q.matches(z) && H.call(q, K);
            };
            I.addEventListener(P, V), w.push({ elem: I, selector: z, fn: H, agentFn: V });
          })) : this;
        }, B.prototype.off = function(P, z, H) {
          var j;
          return P ? (typeof z == "function" && (H = z, z = ""), (0, c.default)(j = this).call(j, function(I) {
            if (z) {
              for (var V = -1, k = 0; k < w.length; k++) {
                var K = w[k];
                if (K.selector === z && K.fn === H && K.elem === I) {
                  V = k;
                  break;
                }
              }
              if (V !== -1) {
                var q = (0, C.default)(w).call(w, V, 1)[0].agentFn;
                I.removeEventListener(P, q);
              }
            } else
              I.removeEventListener(P, H);
          })) : this;
        }, B.prototype.attr = function(P, z) {
          var H;
          return z == null ? this.elems[0].getAttribute(P) || "" : (0, c.default)(H = this).call(H, function(j) {
            j.setAttribute(P, z);
          });
        }, B.prototype.removeAttr = function(P) {
          var z;
          (0, c.default)(z = this).call(z, function(H) {
            H.removeAttribute(P);
          });
        }, B.prototype.addClass = function(P) {
          var z;
          return P ? (0, c.default)(z = this).call(z, function(H) {
            if (H.className) {
              var j = H.className.split(/\s/);
              j = (0, h.default)(j).call(j, function(I) {
                return !!(0, E.default)(I).call(I);
              }), (0, D.default)(j).call(j, P) < 0 && j.push(P), H.className = j.join(" ");
            } else
              H.className = P;
          }) : this;
        }, B.prototype.removeClass = function(P) {
          var z;
          return P ? (0, c.default)(z = this).call(z, function(H) {
            if (!!H.className) {
              var j = H.className.split(/\s/);
              j = (0, h.default)(j).call(j, function(I) {
                return I = (0, E.default)(I).call(I), !(!I || I === P);
              }), H.className = j.join(" ");
            }
          }) : this;
        }, B.prototype.hasClass = function(P) {
          if (!P)
            return !1;
          var z = this.elems[0];
          if (!z.className)
            return !1;
          var H = z.className.split(/\s/);
          return (0, x.default)(H).call(H, P);
        }, B.prototype.css = function(P, z) {
          var H, j;
          return z == "" ? j = "" : j = P + ":" + z + ";", (0, c.default)(H = this).call(H, function(I) {
            var V, k = (0, E.default)(V = I.getAttribute("style") || "").call(V);
            if (k) {
              var K = N(k);
              K = (0, m.default)(K).call(K, function(q) {
                return (0, D.default)(q).call(q, P) === 0 ? j : q;
              }), j != "" && (0, D.default)(K).call(K, j) < 0 && K.push(j), j == "" && (K = N(K)), I.setAttribute("style", K.join("; "));
            } else
              I.setAttribute("style", j);
          });
        }, B.prototype.getBoundingClientRect = function() {
          var P = this.elems[0];
          return P.getBoundingClientRect();
        }, B.prototype.show = function() {
          return this.css("display", "block");
        }, B.prototype.hide = function() {
          return this.css("display", "none");
        }, B.prototype.children = function() {
          var P = this.elems[0];
          return P ? O(P.children) : null;
        }, B.prototype.childNodes = function() {
          var P = this.elems[0];
          return P ? O(P.childNodes) : null;
        }, B.prototype.replaceChildAll = function(P) {
          for (var z = this.getNode(), H = this.elems[0]; H.hasChildNodes(); )
            z.firstChild && H.removeChild(z.firstChild);
          this.append(P);
        }, B.prototype.append = function(P) {
          var z;
          return (0, c.default)(z = this).call(z, function(H) {
            (0, c.default)(P).call(P, function(j) {
              H.appendChild(j);
            });
          });
        }, B.prototype.remove = function() {
          var P;
          return (0, c.default)(P = this).call(P, function(z) {
            if (z.remove)
              z.remove();
            else {
              var H = z.parentElement;
              H && H.removeChild(z);
            }
          });
        }, B.prototype.isContain = function(P) {
          var z = this.elems[0], H = P.elems[0];
          return z.contains(H);
        }, B.prototype.getNodeName = function() {
          var P = this.elems[0];
          return P.nodeName;
        }, B.prototype.getNode = function(P) {
          P === void 0 && (P = 0);
          var z;
          return z = this.elems[P], z;
        }, B.prototype.find = function(P) {
          var z = this.elems[0];
          return O(z.querySelectorAll(P));
        }, B.prototype.text = function(P) {
          if (P) {
            var H;
            return (0, c.default)(H = this).call(H, function(j) {
              j.innerHTML = P;
            });
          } else {
            var z = this.elems[0];
            return z.innerHTML.replace(/<[^>]+>/g, function() {
              return "";
            });
          }
        }, B.prototype.html = function(P) {
          var z = this.elems[0];
          return P ? (z.innerHTML = P, this) : z.innerHTML;
        }, B.prototype.val = function() {
          var P, z = this.elems[0];
          return (0, E.default)(P = z.value).call(P);
        }, B.prototype.focus = function() {
          var P;
          return (0, c.default)(P = this).call(P, function(z) {
            z.focus();
          });
        }, B.prototype.prev = function() {
          var P = this.elems[0];
          return O(P.previousElementSibling);
        }, B.prototype.next = function() {
          var P = this.elems[0];
          return O(P.nextElementSibling);
        }, B.prototype.getNextSibling = function() {
          var P = this.elems[0];
          return O(P.nextSibling);
        }, B.prototype.parent = function() {
          var P = this.elems[0];
          return O(P.parentElement);
        }, B.prototype.parentUntil = function(P, z) {
          var H = z || this.elems[0];
          if (H.nodeName === "BODY")
            return null;
          var j = H.parentElement;
          return j === null ? null : j.matches(P) ? O(j) : this.parentUntil(P, j);
        }, B.prototype.parentUntilEditor = function(P, z, H) {
          var j = H || this.elems[0];
          if (O(j).equal(z.$textContainerElem) || O(j).equal(z.$toolbarElem))
            return null;
          var I = j.parentElement;
          return I === null ? null : I.matches(P) ? O(I) : this.parentUntilEditor(P, z, I);
        }, B.prototype.equal = function(P) {
          return P instanceof B ? this.elems[0] === P.elems[0] : P instanceof HTMLElement ? this.elems[0] === P : !1;
        }, B.prototype.insertBefore = function(P) {
          var z, H = O(P), j = H.elems[0];
          return j ? (0, c.default)(z = this).call(z, function(I) {
            var V = j.parentNode;
            V == null || V.insertBefore(I, j);
          }) : this;
        }, B.prototype.insertAfter = function(P) {
          var z, H = O(P), j = H.elems[0], I = j && j.nextSibling;
          return j ? (0, c.default)(z = this).call(z, function(V) {
            var k = j.parentNode;
            I ? k.insertBefore(V, I) : k.appendChild(V);
          }) : this;
        }, B.prototype.data = function(P, z) {
          if (z != null)
            this.dataSource.set(P, z);
          else
            return this.dataSource.get(P);
        }, B.prototype.getNodeTop = function(P) {
          if (this.length < 1)
            return this;
          var z = this.parent();
          return P.$textElem.equal(this) || P.$textElem.equal(z) ? this : (z.prior = this, z.getNodeTop(P));
        }, B.prototype.getOffsetData = function() {
          var P = this.elems[0];
          return { top: P.offsetTop, left: P.offsetLeft, width: P.offsetWidth, height: P.offsetHeight, parent: P.offsetParent };
        }, B.prototype.scrollTop = function(P) {
          var z = this.elems[0];
          z.scrollTo({ top: P });
        }, B;
      }();
      o.DomElement = U;
      function O() {
        for (var B = [], P = 0; P < arguments.length; P++)
          B[P] = arguments[P];
        return new ((0, S.default)(U).apply(U, g.__spreadArrays([void 0], B)))();
      }
      o.default = O;
    }, function(l, o, t) {
      l.exports = t(180);
    }, function(l, o, t) {
      var s = t(8), f = t(71).f, d = t(100), c = t(9), m = t(39), E = t(19), A = t(16), D = function(h) {
        var x = function(g, b, w) {
          if (this instanceof h) {
            switch (arguments.length) {
              case 0:
                return new h();
              case 1:
                return new h(g);
              case 2:
                return new h(g, b);
            }
            return new h(g, b, w);
          }
          return h.apply(this, arguments);
        };
        return x.prototype = h.prototype, x;
      };
      l.exports = function(C, h) {
        var x = C.target, S = C.global, g = C.stat, b = C.proto, w = S ? s : g ? s[x] : (s[x] || {}).prototype, p = S ? c : c[x] || (c[x] = {}), T = p.prototype, M, N, U, O, B, P, z, H, j;
        for (O in h)
          M = d(S ? O : x + (g ? "." : "#") + O, C.forced), N = !M && w && A(w, O), P = p[O], N && (C.noTargetGet ? (j = f(w, O), z = j && j.value) : z = w[O]), B = N && z ? z : h[O], !(N && It(P) === It(B)) && (C.bind && N ? H = m(B, s) : C.wrap && N ? H = D(B) : b && typeof B == "function" ? H = m(Function.call, B) : H = B, (C.sham || B && B.sham || P && P.sham) && E(H, "sham", !0), p[O] = H, b && (U = x + "Prototype", A(c, U) || E(c, U, {}), c[U][O] = B, C.real && T && !T[O] && E(T, O, B)));
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(92)), d = s(t(1)), c = s(t(256)), m = s(t(45)), E = s(t(46)), A = s(t(89)), D = s(t(26));
      (0, d.default)(o, "__esModule", { value: !0 }), o.hexToRgb = o.getRandomCode = o.toArray = o.deepClone = o.isFunction = o.debounce = o.throttle = o.arrForEach = o.forEach = o.replaceSpecialSymbol = o.replaceHtmlSymbol = o.getRandom = o.UA = void 0;
      var C = t(2), h = function() {
        function P() {
          this._ua = navigator.userAgent;
          var z = this._ua.match(/(Edge?)\/(\d+)/);
          this.isOldEdge = !!(z && z[1] == "Edge" && (0, c.default)(z[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
        }
        return P.prototype.isIE = function() {
          return "ActiveXObject" in window;
        }, P.prototype.isWebkit = function() {
          return /webkit/i.test(this._ua);
        }, P;
      }();
      o.UA = new h();
      function x(P) {
        var z;
        return P === void 0 && (P = ""), P + (0, m.default)(z = Math.random().toString()).call(z, 2);
      }
      o.getRandom = x;
      function S(P) {
        return P.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
      }
      o.replaceHtmlSymbol = S;
      function g(P) {
        return P.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
      }
      o.replaceSpecialSymbol = g;
      function b(P, z) {
        for (var H in P)
          if (Object.prototype.hasOwnProperty.call(P, H)) {
            var j = z(H, P[H]);
            if (j === !1)
              break;
          }
      }
      o.forEach = b;
      function w(P, z) {
        var H, j, I, V = P.length || 0;
        for (H = 0; H < V && (j = P[H], I = z.call(P, j, H), I !== !1); H++)
          ;
      }
      o.arrForEach = w;
      function p(P, z) {
        z === void 0 && (z = 200);
        var H = !1;
        return function() {
          for (var j = this, I = [], V = 0; V < arguments.length; V++)
            I[V] = arguments[V];
          H || (H = !0, (0, E.default)(function() {
            H = !1, P.call.apply(P, C.__spreadArrays([j], I));
          }, z));
        };
      }
      o.throttle = p;
      function T(P, z) {
        z === void 0 && (z = 200);
        var H = 0;
        return function() {
          for (var j = this, I = [], V = 0; V < arguments.length; V++)
            I[V] = arguments[V];
          H && window.clearTimeout(H), H = (0, E.default)(function() {
            H = 0, P.call.apply(P, C.__spreadArrays([j], I));
          }, z);
        };
      }
      o.debounce = T;
      function M(P) {
        return typeof P == "function";
      }
      o.isFunction = M;
      function N(P) {
        if ((0, f.default)(P) !== "object" || typeof P == "function" || P === null)
          return P;
        var z;
        (0, A.default)(P) && (z = []), (0, A.default)(P) || (z = {});
        for (var H in P)
          Object.prototype.hasOwnProperty.call(P, H) && (z[H] = N(P[H]));
        return z;
      }
      o.deepClone = N;
      function U(P) {
        return (0, m.default)(Array.prototype).call(P);
      }
      o.toArray = U;
      function O() {
        var P;
        return (0, m.default)(P = Math.random().toString(36)).call(P, -5);
      }
      o.getRandomCode = O;
      function B(P) {
        var z = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(P);
        if (z == null)
          return null;
        var H = (0, D.default)(z).call(z, function(k) {
          return (0, c.default)(k, 16);
        }), j = H[1], I = H[2], V = H[3];
        return "rgb(" + j + ", " + I + ", " + V + ")";
      }
      o.hexToRgb = B;
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
      var s = t(8), f = t(74), d = t(16), c = t(64), m = t(76), E = t(105), A = f("wks"), D = s.Symbol, C = E ? D : D && D.withoutSetter || c;
      l.exports = function(h) {
        return d(A, h) || (m && d(D, h) ? A[h] = D[h] : A[h] = C("Symbol." + h)), A[h];
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
        var E = s.Symbol || (s.Symbol = {});
        f(E, m) || c(E, m, { value: d.f(m) });
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
      o.f = s ? m : function(A, D, C) {
        if (d(A), D = c(D, !0), d(C), f)
          try {
            return m(A, D, C);
          } catch {
          }
        if ("get" in C || "set" in C)
          throw TypeError("Accessors not supported");
        return "value" in C && (A[D] = C.value), A;
      };
    }, function(l, o, t) {
      var s = t(14), f = t(18), d = t(48);
      l.exports = s ? function(c, m, E) {
        return f.f(c, m, d(1, E));
      } : function(c, m, E) {
        return c[m] = E, c;
      };
    }, function(l, o, t) {
      var s = function() {
        var w;
        return function() {
          return typeof w > "u" && (w = Boolean(window && document && document.all && !window.atob)), w;
        };
      }(), f = function() {
        var w = {};
        return function(T) {
          if (typeof w[T] > "u") {
            var M = document.querySelector(T);
            if (window.HTMLIFrameElement && M instanceof window.HTMLIFrameElement)
              try {
                M = M.contentDocument.head;
              } catch {
                M = null;
              }
            w[T] = M;
          }
          return w[T];
        };
      }(), d = [];
      function c(b) {
        for (var w = -1, p = 0; p < d.length; p++)
          if (d[p].identifier === b) {
            w = p;
            break;
          }
        return w;
      }
      function m(b, w) {
        for (var p = {}, T = [], M = 0; M < b.length; M++) {
          var N = b[M], U = w.base ? N[0] + w.base : N[0], O = p[U] || 0, B = "".concat(U, " ").concat(O);
          p[U] = O + 1;
          var P = c(B), z = { css: N[1], media: N[2], sourceMap: N[3] };
          P !== -1 ? (d[P].references++, d[P].updater(z)) : d.push({ identifier: B, updater: g(z, w), references: 1 }), T.push(B);
        }
        return T;
      }
      function E(b) {
        var w = document.createElement("style"), p = b.attributes || {};
        if (typeof p.nonce > "u") {
          var T = t.nc;
          T && (p.nonce = T);
        }
        if (Object.keys(p).forEach(function(N) {
          w.setAttribute(N, p[N]);
        }), typeof b.insert == "function")
          b.insert(w);
        else {
          var M = f(b.insert || "head");
          if (!M)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          M.appendChild(w);
        }
        return w;
      }
      function A(b) {
        if (b.parentNode === null)
          return !1;
        b.parentNode.removeChild(b);
      }
      var D = function() {
        var w = [];
        return function(T, M) {
          return w[T] = M, w.filter(Boolean).join(`
`);
        };
      }();
      function C(b, w, p, T) {
        var M = p ? "" : T.media ? "@media ".concat(T.media, " {").concat(T.css, "}") : T.css;
        if (b.styleSheet)
          b.styleSheet.cssText = D(w, M);
        else {
          var N = document.createTextNode(M), U = b.childNodes;
          U[w] && b.removeChild(U[w]), U.length ? b.insertBefore(N, U[w]) : b.appendChild(N);
        }
      }
      function h(b, w, p) {
        var T = p.css, M = p.media, N = p.sourceMap;
        if (M ? b.setAttribute("media", M) : b.removeAttribute("media"), N && typeof btoa < "u" && (T += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(N)))), " */")), b.styleSheet)
          b.styleSheet.cssText = T;
        else {
          for (; b.firstChild; )
            b.removeChild(b.firstChild);
          b.appendChild(document.createTextNode(T));
        }
      }
      var x = null, S = 0;
      function g(b, w) {
        var p, T, M;
        if (w.singleton) {
          var N = S++;
          p = x || (x = E(w)), T = C.bind(null, p, N, !1), M = C.bind(null, p, N, !0);
        } else
          p = E(w), T = h.bind(null, p, w), M = function() {
            A(p);
          };
        return T(b), function(O) {
          if (O) {
            if (O.css === b.css && O.media === b.media && O.sourceMap === b.sourceMap)
              return;
            T(b = O);
          } else
            M();
        };
      }
      l.exports = function(b, w) {
        w = w || {}, !w.singleton && typeof w.singleton != "boolean" && (w.singleton = s()), b = b || [];
        var p = m(b, w);
        return function(M) {
          if (M = M || [], Object.prototype.toString.call(M) === "[object Array]") {
            for (var N = 0; N < p.length; N++) {
              var U = p[N], O = c(U);
              d[O].references--;
            }
            for (var B = m(M, w), P = 0; P < p.length; P++) {
              var z = p[P], H = c(z);
              d[H].references === 0 && (d[H].updater(), d.splice(H, 1));
            }
            p = B;
          }
        };
      };
    }, function(l, o, t) {
      l.exports = function(d) {
        var c = [];
        return c.toString = function() {
          return this.map(function(E) {
            var A = s(E, d);
            return E[2] ? "@media ".concat(E[2], " {").concat(A, "}") : A;
          }).join("");
        }, c.i = function(m, E, A) {
          typeof m == "string" && (m = [[null, m, ""]]);
          var D = {};
          if (A)
            for (var C = 0; C < this.length; C++) {
              var h = this[C][0];
              h != null && (D[h] = !0);
            }
          for (var x = 0; x < m.length; x++) {
            var S = [].concat(m[x]);
            A && D[S[0]] || (E && (S[2] ? S[2] = "".concat(E, " and ").concat(S[2]) : S[2] = E), c.push(S));
          }
        }, c;
      };
      function s(d, c) {
        var m = d[1] || "", E = d[3];
        if (!E)
          return m;
        if (c && typeof btoa == "function") {
          var A = f(E), D = E.sources.map(function(C) {
            return "/*# sourceURL=".concat(E.sourceRoot || "").concat(C, " */");
          });
          return [m].concat(D).concat([A]).join(`
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
      var s = t(14), f = t(11), d = t(16), c = Object.defineProperty, m = {}, E = function(D) {
        throw D;
      };
      l.exports = function(A, D) {
        if (d(m, A))
          return m[A];
        D || (D = {});
        var C = [][A], h = d(D, "ACCESSORS") ? D.ACCESSORS : !1, x = d(D, 0) ? D[0] : E, S = d(D, 1) ? D[1] : void 0;
        return m[A] = !!C && !f(function() {
          if (h && !s)
            return !0;
          var g = { length: -1 };
          h ? c(g, 1, { enumerable: !0, get: E }) : g[1] = 1, C.call(g, x, S);
        });
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(95)), m = function(E) {
        d.__extends(A, E);
        function A(D, C) {
          return E.call(this, D, C) || this;
        }
        return A;
      }(c.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3)), A = m.__importDefault(t(95)), D = m.__importDefault(t(133)), C = function(h) {
        m.__extends(x, h);
        function x(S, g, b) {
          var w = h.call(this, S, g) || this;
          b.title = g.i18next.t("menus.dropListMenu." + b.title);
          var p = g.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
          if (p !== "" && b.type === "list") {
            var T;
            (0, d.default)(T = b.list).call(T, function(N) {
              var U = N.$elem, O = E.default(U.children());
              if (O.length > 0) {
                var B = O == null ? void 0 : O.getNodeName();
                B && B === "I" && U.addClass(p);
              }
            });
          }
          var M = new D.default(w, b);
          return w.dropList = M, S.on("click", function() {
            var N;
            g.selection.getRange() != null && (S.css("z-index", g.zIndex.get("menu")), (0, d.default)(N = g.txt.eventHooks.dropListMenuHoverEvents).call(N, function(U) {
              return U();
            }), M.show());
          }).on("mouseleave", function() {
            S.css("z-index", "auto"), M.hideTimeoutId = (0, c.default)(function() {
              M.hide();
            });
          }), w;
        }
        return x;
      }(A.default);
      o.default = C;
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
      var s = t(39), f = t(72), d = t(29), c = t(34), m = t(88), E = [].push, A = function(C) {
        var h = C == 1, x = C == 2, S = C == 3, g = C == 4, b = C == 6, w = C == 5 || b;
        return function(p, T, M, N) {
          for (var U = d(p), O = f(U), B = s(T, M, 3), P = c(O.length), z = 0, H = N || m, j = h ? H(p, P) : x ? H(p, 0) : void 0, I, V; P > z; z++)
            if ((w || z in O) && (I = O[z], V = B(I, z, U), C)) {
              if (h)
                j[z] = V;
              else if (V)
                switch (C) {
                  case 3:
                    return !0;
                  case 5:
                    return I;
                  case 6:
                    return z;
                  case 2:
                    E.call(j, I);
                }
              else if (g)
                return !1;
            }
          return b ? -1 : S || g ? g : j;
        };
      };
      l.exports = {
        forEach: A(0),
        map: A(1),
        filter: A(2),
        some: A(3),
        every: A(4),
        find: A(5),
        findIndex: A(6)
      };
    }, function(l, o, t) {
      l.exports = t(283);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(31)), m = s(t(131));
      (0, f.default)(o, "__esModule", { value: !0 });
      var E = t(2), A = E.__importDefault(t(3)), D = t(7), C = function() {
        function h(x, S) {
          this.menu = x, this.conf = S, this.$container = A.default('<div class="w-e-panel-container"></div>');
          var g = x.editor;
          g.txt.eventHooks.clickEvents.push(h.hideCurAllPanels), g.txt.eventHooks.toolbarClickEvents.push(h.hideCurAllPanels), g.txt.eventHooks.dropListMenuHoverEvents.push(h.hideCurAllPanels);
        }
        return h.prototype.create = function() {
          var x = this, S = this.menu;
          if (!h.createdMenus.has(S)) {
            var g = this.conf, b = this.$container, w = g.width || 300, p = S.editor.$toolbarElem.getBoundingClientRect(), T = S.$elem.getBoundingClientRect(), M = p.height + p.top - T.top, N = (p.width - w) / 2 + p.left - T.left, U = 300;
            Math.abs(N) > U && (T.left < document.documentElement.clientWidth / 2 ? N = -T.width / 2 : N = -w + T.width / 2), b.css("width", w + "px").css("margin-top", M + "px").css("margin-left", N + "px").css("z-index", S.editor.zIndex.get("panel"));
            var O = A.default('<i class="w-e-icon-close w-e-panel-close"></i>');
            b.append(O), O.on("click", function() {
              x.remove();
            });
            var B = A.default('<ul class="w-e-panel-tab-title"></ul>'), P = A.default('<div class="w-e-panel-tab-content"></div>');
            b.append(B).append(P);
            var z = g.height;
            z && P.css("height", z + "px").css("overflow-y", "auto");
            var H = g.tabs || [], j = [], I = [];
            (0, d.default)(H).call(H, function(k, K) {
              if (!!k) {
                var q = k.title || "", X = k.tpl || "", _ = A.default('<li class="w-e-item">' + q + "</li>");
                B.append(_);
                var le = A.default(X);
                P.append(le), j.push(_), I.push(le), K === 0 ? (_.data("active", !0), _.addClass("w-e-active")) : le.hide(), _.on("click", function() {
                  _.data("active") || ((0, d.default)(j).call(j, function(be) {
                    be.data("active", !1), be.removeClass("w-e-active");
                  }), (0, d.default)(I).call(I, function(be) {
                    be.hide();
                  }), _.data("active", !0), _.addClass("w-e-active"), le.show());
                });
              }
            }), b.on("click", function(k) {
              k.stopPropagation();
            }), S.$elem.append(b), (0, d.default)(H).call(H, function(k, K) {
              if (!!k) {
                var q = k.events || [];
                (0, d.default)(q).call(q, function(X) {
                  var _, le = X.selector, be = X.type, ve = X.fn || D.EMPTY_FN, ce = I[K], ae = (_ = X.bindEnter) !== null && _ !== void 0 ? _ : !1, re = function(pe) {
                    return E.__awaiter(x, void 0, void 0, function() {
                      var Pe;
                      return E.__generator(this, function(Ee) {
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
                  (0, c.default)(ce).call(ce, le).on(be, re), ae && be === "click" && ce.on("keyup", function(se) {
                    se.keyCode == 13 && re(se);
                  });
                });
              }
            });
            var V = (0, c.default)(b).call(b, "input[type=text],textarea");
            V.length && V.get(0).focus(), h.hideCurAllPanels(), S.setPanel(this), h.createdMenus.add(S);
          }
        }, h.prototype.remove = function() {
          var x = this.menu, S = this.$container;
          S && S.remove(), h.createdMenus.delete(x);
        }, h.hideCurAllPanels = function() {
          var x;
          h.createdMenus.size !== 0 && (0, d.default)(x = h.createdMenus).call(x, function(S) {
            var g = S.panel;
            g && g.remove();
          });
        }, h.createdMenus = new m.default(), h;
      }();
      o.default = C;
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
      var s = t(81), f = t(18).f, d = t(19), c = t(16), m = t(170), E = t(10), A = E("toStringTag");
      l.exports = function(D, C, h, x) {
        if (D) {
          var S = h ? D : D.prototype;
          c(S, A) || f(S, A, { configurable: !0, value: C }), x && !s && d(S, "toString", m);
        }
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(95)), m = function(E) {
        d.__extends(A, E);
        function A(D, C) {
          return E.call(this, D, C) || this;
        }
        return A.prototype.setPanel = function(D) {
          this.panel = D;
        }, A;
      }(c.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(57));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3)), A = function() {
        function D(C, h, x) {
          this.editor = C, this.$targetElem = h, this.conf = x, this._show = !1, this._isInsertTextContainer = !1;
          var S = E.default("<div></div>");
          S.addClass("w-e-tooltip"), this.$container = S;
        }
        return D.prototype.getPositionData = function() {
          var C = this.$container, h = 0, x = 0, S = 20, g = document.documentElement.scrollTop, b = this.$targetElem.getBoundingClientRect(), w = this.editor.$textElem.getBoundingClientRect(), p = this.$targetElem.getOffsetData(), T = E.default(p.parent), M = this.editor.$textElem.elems[0].scrollTop;
          if (this._isInsertTextContainer = T.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
            var N = T.getBoundingClientRect().height, U = p.top, O = p.left, B = p.height, P = U - M;
            P > S + 5 ? (h = P - S - 15, C.addClass("w-e-tooltip-up")) : P + B + S < N ? (h = P + B + 10, C.addClass("w-e-tooltip-down")) : (h = (P > 0 ? P : 0) + S + 10, C.addClass("w-e-tooltip-down")), O < 0 ? x = 0 : x = O;
          } else
            b.top < S || b.top - w.top < S ? (h = b.bottom + g + 5, C.addClass("w-e-tooltip-down")) : (h = b.top + g - S - 15, C.addClass("w-e-tooltip-up")), b.left < 0 ? x = 0 : x = b.left;
          return { top: h, left: x };
        }, D.prototype.appendMenus = function() {
          var C = this, h = this.conf, x = this.editor, S = this.$targetElem, g = this.$container;
          (0, d.default)(h).call(h, function(b, w) {
            var p = b.$elem, T = E.default("<div></div>");
            T.addClass("w-e-tooltip-item-wrapper "), T.append(p), g.append(T), p.on("click", function(M) {
              M.preventDefault();
              var N = b.onClick(x, S);
              N && C.remove();
            });
          });
        }, D.prototype.create = function() {
          var C, h, x = this.editor, S = this.$container;
          this.appendMenus();
          var g = this.getPositionData(), b = g.top, w = g.left;
          S.css("top", b + "px"), S.css("left", w + "px"), S.css("z-index", x.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(S) : E.default("body").append(S), this._show = !0, x.beforeDestroy((0, c.default)(C = this.remove).call(C, this)), x.txt.eventHooks.onBlurEvents.push((0, c.default)(h = this.remove).call(h, this));
        }, D.prototype.remove = function() {
          this.$container.remove(), this._show = !1;
        }, (0, f.default)(D.prototype, "isShow", {
          get: function() {
            return this._show;
          },
          enumerable: !1,
          configurable: !0
        }), D;
      }();
      o.default = A;
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
            return function(m, E) {
              return f.call(d, m, E);
            };
          case 3:
            return function(m, E, A) {
              return f.call(d, m, E, A);
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
      var s = t(165), f = t(8), d = t(13), c = t(19), m = t(16), E = t(63), A = t(51), D = f.WeakMap, C, h, x, S = function(U) {
        return x(U) ? h(U) : C(U, {});
      }, g = function(U) {
        return function(O) {
          var B;
          if (!d(O) || (B = h(O)).type !== U)
            throw TypeError("Incompatible receiver, " + U + " required");
          return B;
        };
      };
      if (s) {
        var b = new D(), w = b.get, p = b.has, T = b.set;
        C = function(U, O) {
          return T.call(b, U, O), O;
        }, h = function(U) {
          return w.call(b, U) || {};
        }, x = function(U) {
          return p.call(b, U);
        };
      } else {
        var M = E("state");
        A[M] = !0, C = function(U, O) {
          return c(U, M, O), O;
        }, h = function(U) {
          return m(U, M) ? U[M] : {};
        }, x = function(U) {
          return m(U, M);
        };
      }
      l.exports = { set: C, get: h, has: x, enforce: S, getterFor: g };
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
      var c = t(2), m = t(137), E = c.__importDefault(t(3));
      function A(w) {
        var p = [];
        return (0, d.default)(w).call(w, function(T) {
          var M = T.getNodeName();
          if (M !== m.ListType.OrderedList && M !== m.ListType.UnorderedList)
            p.push(T);
          else if (T.prior)
            p.push(T.prior);
          else {
            var N = T.children();
            N == null || (0, d.default)(N).call(N, function(U) {
              p.push(E.default(U));
            });
          }
        }), p;
      }
      o.filterSelectionNodes = A;
      function D(w, p, T) {
        var M = w.selection, N = document.createRange();
        p.length > 1 ? (N.setStart(p.elems[0], 0), N.setEnd(p.elems[p.length - 1], p.elems[p.length - 1].childNodes.length)) : N.selectNodeContents(p.elems[0]), T && N.collapse(!1), M.saveRange(N), M.restoreSelection();
      }
      o.updateRange = D;
      function C(w) {
        var p;
        return w.prior ? w.prior : E.default((p = w.children()) === null || p === void 0 ? void 0 : p.elems[0]);
      }
      o.getStartPoint = C;
      function h(w) {
        var p;
        return w.prior ? w.prior : E.default((p = w.children()) === null || p === void 0 ? void 0 : p.last().elems[0]);
      }
      o.getEndPoint = h;
      function x(w, p, T) {
        T === void 0 && (T = null), w.parent().elems[0].insertBefore(p, T);
      }
      o.insertBefore = x;
      function S(w) {
        return document.createElement(w);
      }
      o.createElement = S;
      function g() {
        return document.createDocumentFragment();
      }
      o.createDocumentFragment = g;
      function b(w, p, T) {
        return T === void 0 && (T = "li"), (0, d.default)(w).call(w, function(M) {
          var N = S(T);
          N.innerHTML = M.html(), p.appendChild(N), M.remove();
        }), p;
      }
      o.createElementFragment = b;
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
      var s = t(164).charAt, f = t(41), d = t(75), c = "String Iterator", m = f.set, E = f.getterFor(c);
      d(String, "String", function(A) {
        m(this, { type: c, string: String(A), index: 0 });
      }, function() {
        var D = E(this), C = D.string, h = D.index, x;
        return h >= C.length ? { value: void 0, done: !0 } : (x = s(C, h), D.index += x.length, { value: x, done: !1 });
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
      var s = t(174), f = t(8), d = t(65), c = t(19), m = t(43), E = t(10), A = E("toStringTag");
      for (var D in s) {
        var C = f[D], h = C && C.prototype;
        h && d(h) !== A && c(h, A, D), m[D] = m.Array;
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
          var E = [], A = E.constructor = {};
          return A[c] = function() {
            return { foo: 1 };
          }, E[m](Boolean).foo !== 1;
        });
      };
    }, function(l, o, t) {
      l.exports = t(222);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.ListHandle = void 0;
      var d = t(2), c = d.__importDefault(t(373)), m = function() {
        function E(A) {
          this.options = A, this.selectionRangeElem = new c.default();
        }
        return E;
      }();
      o.ListHandle = m;
    }, function(l, o, t) {
      var s = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, d = f && !s.call({ 1: 2 }, 1);
      o.f = d ? function(m) {
        var E = f(this, m);
        return !!E && E.enumerable;
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
      }()) == "Arguments", E = function(D, C) {
        try {
          return D[C];
        } catch {
        }
      };
      l.exports = s ? f : function(A) {
        var D, C, h;
        return A === void 0 ? "Undefined" : A === null ? "Null" : typeof (C = E(D = Object(A), c)) == "string" ? C : m ? f(D) : (h = f(D)) == "Object" && typeof D.callee == "function" ? "Arguments" : h;
      };
    }, function(l, o, t) {
      var s = t(25), f = t(111), d = t(34), c = t(39), m = t(112), E = t(113), A = function(h, x) {
        this.stopped = h, this.result = x;
      }, D = l.exports = function(C, h, x, S, g) {
        var b = c(h, x, S ? 2 : 1), w, p, T, M, N, U, O;
        if (g)
          w = C;
        else {
          if (p = m(C), typeof p != "function")
            throw TypeError("Target is not iterable");
          if (f(p)) {
            for (T = 0, M = d(C.length); M > T; T++)
              if (N = S ? b(s(O = C[T])[0], O[1]) : b(C[T]), N && N instanceof A)
                return N;
            return new A(!1);
          }
          w = p.call(C);
        }
        for (U = w.next; !(O = U.call(w)).done; )
          if (N = E(w, b, O.value, S), It(N) == "object" && N && N instanceof A)
            return N;
        return new A(!1);
      };
      D.stop = function(C) {
        return new A(!0, C);
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
      l.exports = function(c, m, E) {
        var A = s(m);
        A in c ? f.f(c, A, d(0, E)) : c[A] = E;
      };
    }, function(l, o, t) {
      l.exports = t(209);
    }, function(l, o, t) {
      var s = t(14), f = t(59), d = t(48), c = t(28), m = t(60), E = t(16), A = t(99), D = Object.getOwnPropertyDescriptor;
      o.f = s ? D : function(h, x) {
        if (h = c(h), x = m(x, !0), A)
          try {
            return D(h, x);
          } catch {
          }
        if (E(h, x))
          return d(!f.f.call(h, x), h[x]);
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
      var s = t(5), f = t(167), d = t(104), c = t(171), m = t(36), E = t(19), A = t(53), D = t(10), C = t(42), h = t(43), x = t(103), S = x.IteratorPrototype, g = x.BUGGY_SAFARI_ITERATORS, b = D("iterator"), w = "keys", p = "values", T = "entries", M = function() {
        return this;
      };
      l.exports = function(N, U, O, B, P, z, H) {
        f(O, U, B);
        var j = function(ce) {
          if (ce === P && q)
            return q;
          if (!g && ce in k)
            return k[ce];
          switch (ce) {
            case w:
              return function() {
                return new O(this, ce);
              };
            case p:
              return function() {
                return new O(this, ce);
              };
            case T:
              return function() {
                return new O(this, ce);
              };
          }
          return function() {
            return new O(this);
          };
        }, I = U + " Iterator", V = !1, k = N.prototype, K = k[b] || k["@@iterator"] || P && k[P], q = !g && K || j(P), X = U == "Array" && k.entries || K, _, le, be;
        if (X && (_ = d(X.call(new N())), S !== Object.prototype && _.next && (!C && d(_) !== S && (c ? c(_, S) : typeof _[b] != "function" && E(_, b, M)), m(_, I, !0, !0), C && (h[I] = M))), P == p && K && K.name !== p && (V = !0, q = function() {
          return K.call(this);
        }), (!C || H) && k[b] !== q && E(k, b, q), h[U] = q, P)
          if (le = { values: j(p), keys: z ? q : j(w), entries: j(T) }, H)
            for (be in le)
              (g || V || !(be in k)) && A(k, be, le[be]);
          else
            s({ target: U, proto: !0, forced: g || V }, le);
        return le;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !!Object.getOwnPropertySymbols && !s(function() {
        return !String(Symbol());
      });
    }, function(l, o, t) {
      var s = t(25), f = t(169), d = t(80), c = t(51), m = t(107), E = t(73), A = t(63), D = ">", C = "<", h = "prototype", x = "script", S = A("IE_PROTO"), g = function() {
      }, b = function(U) {
        return C + x + D + U + C + "/" + x + D;
      }, w = function(U) {
        U.write(b("")), U.close();
        var O = U.parentWindow.Object;
        return U = null, O;
      }, p = function() {
        var U = E("iframe"), O = "java" + x + ":", B;
        return U.style.display = "none", m.appendChild(U), U.src = String(O), B = U.contentWindow.document, B.open(), B.write(b("document.F=Object")), B.close(), B.F;
      }, T, M = function() {
        try {
          T = document.domain && new ActiveXObject("htmlfile");
        } catch {
        }
        M = T ? w(T) : p();
        for (var U = d.length; U--; )
          delete M[h][d[U]];
        return M();
      };
      c[S] = !0, l.exports = Object.create || function(U, O) {
        var B;
        return U !== null ? (g[h] = s(U), B = new g(), g[h] = null, B[S] = U) : B = M(), O === void 0 ? B : f(B, O);
      };
    }, function(l, o, t) {
      var s = t(28), f = t(34), d = t(79), c = function(E) {
        return function(A, D, C) {
          var h = s(A), x = f(h.length), S = d(C, x), g;
          if (E && D != D) {
            for (; x > S; )
              if (g = h[S++], g != g)
                return !0;
          } else
            for (; x > S; S++)
              if ((E || S in h) && h[S] === D)
                return E || S || 0;
          return !E && -1;
        };
      };
      l.exports = {
        includes: c(!0),
        indexOf: c(!1)
      };
    }, function(l, o, t) {
      var s = t(62), f = Math.max, d = Math.min;
      l.exports = function(c, m) {
        var E = s(c);
        return E < 0 ? f(E + m, 0) : d(E, m);
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
        var m, E;
        this.promise = new c(function(A, D) {
          if (m !== void 0 || E !== void 0)
            throw TypeError("Bad Promise constructor");
          m = A, E = D;
        }), this.resolve = s(m), this.reject = s(E);
      };
      l.exports.f = function(d) {
        return new f(d);
      };
    }, function(l, o, t) {
      var s = t(8), f = t(84), d = s.process, c = d && d.versions, m = c && c.v8, E, A;
      m ? (E = m.split("."), A = E[0] + E[1]) : f && (E = f.match(/Edge\/(\d+)/), (!E || E[1] >= 74) && (E = f.match(/Chrome\/(\d+)/), E && (A = E[1]))), l.exports = A && +A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = t(6), A = c.__importDefault(t(267)), D = c.__importDefault(t(280)), C = c.__importDefault(t(281)), h = c.__importDefault(t(282)), x = c.__importDefault(t(301)), S = c.__importStar(t(416)), g = c.__importDefault(t(417)), b = c.__importDefault(t(418)), w = c.__importDefault(t(419)), p = c.__importStar(t(420)), T = c.__importDefault(t(423)), M = c.__importDefault(t(424)), N = c.__importDefault(t(425)), U = c.__importDefault(t(427)), O = c.__importDefault(t(437)), B = c.__importDefault(t(440)), P = c.__importStar(t(441)), z = c.__importDefault(t(23)), H = c.__importDefault(t(133)), j = c.__importDefault(t(24)), I = c.__importDefault(t(32)), V = c.__importDefault(t(37)), k = c.__importDefault(t(38)), K = 1, q = function() {
        function X(_, le) {
          this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + K++, this.toolbarSelector = _, this.textSelector = le, S.selectorValidator(this), this.config = E.deepClone(A.default), this.$toolbarElem = m.default("<div></div>"), this.$textContainerElem = m.default("<div></div>"), this.$textElem = m.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new D.default(this), this.cmd = new C.default(this), this.txt = new h.default(this), this.menus = new x.default(this), this.zIndex = new M.default(), this.change = new N.default(this), this.history = new U.default(this), this.onSelectionChange = new B.default(this);
          var be = O.default(this), ve = be.disable, ce = be.enable;
          this.disable = ve, this.enable = ce, this.isEnable = !0;
        }
        return X.prototype.initSelection = function(_) {
          g.default(this, _);
        }, X.prototype.create = function() {
          this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), w.default(this), S.default(this), this.txt.init(), this.menus.init(), p.default(this), this.initSelection(!0), b.default(this), this.change.observe(), this.history.observe(), P.default(this);
        }, X.prototype.beforeDestroy = function(_) {
          return this.beforeDestroyHooks.push(_), this;
        }, X.prototype.destroy = function() {
          var _, le = this;
          (0, d.default)(_ = this.beforeDestroyHooks).call(_, function(be) {
            return be.call(le);
          }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
        }, X.prototype.fullScreen = function() {
          p.setFullScreen(this);
        }, X.prototype.unFullScreen = function() {
          p.setUnFullScreen(this);
        }, X.prototype.scrollToHead = function(_) {
          T.default(this, _);
        }, X.registerMenu = function(_, le) {
          !le || typeof le != "function" || (X.globalCustomMenuConstructorList[_] = le);
        }, X.prototype.registerPlugin = function(_, le) {
          P.registerPlugin(_, le, this.pluginsFunctionList);
        }, X.registerPlugin = function(_, le) {
          P.registerPlugin(_, le, X.globalPluginsFunctionList);
        }, X.$ = m.default, X.BtnMenu = z.default, X.DropList = H.default, X.DropListMenu = j.default, X.Panel = I.default, X.PanelMenu = V.default, X.Tooltip = k.default, X.globalCustomMenuConstructorList = {}, X.globalPluginsFunctionList = {}, X;
      }();
      o.default = q;
    }, function(l, o, t) {
      var s = t(13), f = t(55), d = t(10), c = d("species");
      l.exports = function(m, E) {
        var A;
        return f(m) && (A = m.constructor, typeof A == "function" && (A === Array || f(A.prototype)) ? A = void 0 : s(A) && (A = A[c], A === null && (A = void 0))), new (A === void 0 ? Array : A)(E === 0 ? 0 : E);
      };
    }, function(l, o, t) {
      l.exports = t(185);
    }, function(l, o, t) {
      var s = t(49), f = t(68), d = "[" + f + "]", c = RegExp("^" + d + d + "*"), m = RegExp(d + d + "*$"), E = function(D) {
        return function(C) {
          var h = String(s(C));
          return D & 1 && (h = h.replace(c, "")), D & 2 && (h = h.replace(m, "")), h;
        };
      };
      l.exports = {
        start: E(1),
        end: E(2),
        trim: E(3)
      };
    }, function(l, o, t) {
      l.exports = t(205);
    }, function(l, o, t) {
      var s = t(227), f = t(230);
      function d(c) {
        return typeof f == "function" && typeof s == "symbol" ? l.exports = d = function(E) {
          return typeof E;
        } : l.exports = d = function(E) {
          return E && typeof f == "function" && E.constructor === f && E !== f.prototype ? "symbol" : typeof E;
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
      var c = t(2), m = c.__importDefault(t(32)), E = function() {
        function A(D, C) {
          var h = this;
          this.$elem = D, this.editor = C, this._active = !1, D.on("click", function(x) {
            var S;
            m.default.hideCurAllPanels(), (0, d.default)(S = C.txt.eventHooks.menuClickEvents).call(S, function(g) {
              return g();
            }), x.stopPropagation(), C.selection.getRange() != null && h.clickHandler(x);
          });
        }
        return A.prototype.clickHandler = function(D) {
        }, A.prototype.active = function() {
          this._active = !0, this.$elem.addClass("w-e-active");
        }, A.prototype.unActive = function() {
          this._active = !1, this.$elem.removeClass("w-e-active");
        }, (0, f.default)(A.prototype, "isActive", {
          get: function() {
            return this._active;
          },
          enumerable: !1,
          configurable: !0
        }), A;
      }();
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(57)), c = s(t(4)), m = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var E = t(2), A = t(6), D = E.__importDefault(t(135)), C = E.__importDefault(t(136)), h = function() {
        function x(S) {
          this.editor = S;
        }
        return x.prototype.insertImg = function(S, g, b) {
          var w = this.editor, p = w.config, T = "validate.", M = function(P, z) {
            return z === void 0 && (z = T), w.i18next.t(z + P);
          }, N = g ? 'alt="' + g + '" ' : "", U = b ? 'data-href="' + encodeURIComponent(b) + '" ' : "";
          w.cmd.do("insertHTML", '<img src="' + S + '" ' + N + U + 'style="max-width:100%;" contenteditable="false"/>'), p.linkImgCallback(S, g, b);
          var O = document.createElement("img");
          O.onload = function() {
            O = null;
          }, O.onerror = function() {
            p.customAlert(M("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + M("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + M("\u56FE\u7247\u94FE\u63A5") + ' "' + S + '"\uFF0C' + M("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), O = null;
          }, O.onabort = function() {
            return O = null;
          }, O.src = S;
        }, x.prototype.uploadImg = function(S) {
          var g = this;
          if (!!S.length) {
            var b = this.editor, w = b.config, p = "validate.", T = function(re) {
              return b.i18next.t(p + re);
            }, M = w.uploadImgServer, N = w.uploadImgShowBase64, U = w.uploadImgMaxSize, O = U / 1024 / 1024, B = w.uploadImgMaxLength, P = w.uploadFileName, z = w.uploadImgParams, H = w.uploadImgParamsWithUrl, j = w.uploadImgHeaders, I = w.uploadImgHooks, V = w.uploadImgTimeout, k = w.withCredentials, K = w.customUploadImg;
            if (!(!K && !M && !N)) {
              var q = [], X = [];
              if (A.arrForEach(S, function(ae) {
                if (!!ae) {
                  var re = ae.name || ae.type.replace("/", "."), se = ae.size;
                  if (!(!re || !se)) {
                    var pe = b.config.uploadImgAccept.join("|"), Pe = ".(" + pe + ")$", Ee = new RegExp(Pe, "i");
                    if (Ee.test(re) === !1) {
                      X.push("\u3010" + re + "\u3011" + T("\u4E0D\u662F\u56FE\u7247"));
                      return;
                    }
                    if (U < se) {
                      X.push("\u3010" + re + "\u3011" + T("\u5927\u4E8E") + " " + O + "M");
                      return;
                    }
                    q.push(ae);
                  }
                }
              }), X.length) {
                w.customAlert(T("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + X.join(`
`), "warning");
                return;
              }
              if (q.length === 0) {
                w.customAlert(T("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (q.length > B) {
                w.customAlert(T("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + B + T("\u5F20\u56FE\u7247"), "warning");
                return;
              }
              if (K && typeof K == "function") {
                var _;
                K(q, (0, d.default)(_ = this.insertImg).call(_, this));
                return;
              }
              var le = new FormData();
              if ((0, c.default)(q).call(q, function(ae, re) {
                var se = P || ae.name;
                q.length > 1 && (se = se + (re + 1)), le.append(se, ae);
              }), M) {
                var be = M.split("#");
                M = be[0];
                var ve = be[1] || "";
                (0, c.default)(A).call(A, z, function(ae, re) {
                  H && ((0, m.default)(M).call(M, "?") > 0 ? M += "&" : M += "?", M = M + ae + "=" + re), le.append(ae, re);
                }), ve && (M += "#" + ve);
                var ce = D.default(M, { timeout: V, formData: le, headers: j, withCredentials: !!k, beforeSend: function(re) {
                  if (I.before)
                    return I.before(re, b, q);
                }, onTimeout: function(re) {
                  w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), I.timeout && I.timeout(re, b);
                }, onProgress: function(re, se) {
                  var pe = new C.default(b);
                  se.lengthComputable && (re = se.loaded / se.total, pe.show(re));
                }, onError: function(re) {
                  w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", T("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + T("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + re.status), I.error && I.error(re, b);
                }, onFail: function(re, se) {
                  w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", T("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + T("\u8FD4\u56DE\u7ED3\u679C") + ": ") + se), I.fail && I.fail(re, b, se);
                }, onSuccess: function(re, se) {
                  if (I.customInsert) {
                    var pe;
                    I.customInsert((0, d.default)(pe = g.insertImg).call(pe, g), se, b);
                    return;
                  }
                  if (se.errno != "0") {
                    w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", T("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + T("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + se.errno), I.fail && I.fail(re, b, se);
                    return;
                  }
                  var Pe = se.data;
                  (0, c.default)(Pe).call(Pe, function(Ee) {
                    typeof Ee == "string" ? g.insertImg(Ee) : g.insertImg(Ee.url, Ee.alt, Ee.href);
                  }), I.success && I.success(re, b, se);
                } });
                typeof ce == "string" && w.customAlert(ce, "error");
                return;
              }
              N && A.arrForEach(S, function(ae) {
                var re = g, se = new FileReader();
                se.readAsDataURL(ae), se.onload = function() {
                  if (!!this.result) {
                    var pe = this.result.toString();
                    re.insertImg(pe, pe);
                  }
                };
              });
            }
          }
        }, x;
      }();
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(410)), c = s(t(4)), m = s(t(45));
      (0, f.default)(o, "__esModule", { value: !0 }), o.dealTextNode = o.isAllTodo = o.isTodo = o.getCursorNextNode = void 0;
      function E(x) {
        return x.length ? x.attr("class") === "w-e-todo" : !1;
      }
      o.isTodo = E;
      function A(x) {
        var S = x.selection.getSelectionRangeTopNodes();
        if (S.length !== 0)
          return (0, d.default)(S).call(S, function(g) {
            return E(g);
          });
      }
      o.isAllTodo = A;
      function D(x, S, g) {
        var b;
        if (!!x.hasChildNodes()) {
          var w = x.cloneNode(), p = !1;
          S.nodeValue === "" && (p = !0);
          var T = [];
          return (0, c.default)(b = x.childNodes).call(b, function(M) {
            if (!C(M, S) && p && (w.appendChild(M.cloneNode(!0)), M.nodeName !== "BR" && T.push(M)), C(M, S)) {
              if (M.nodeType === 1) {
                var N = D(M, S, g);
                N && N.textContent !== "" && (w == null || w.appendChild(N));
              }
              if (M.nodeType === 3 && S.isEqualNode(M)) {
                var U = h(M, g);
                w.textContent = U;
              }
              p = !0;
            }
          }), (0, c.default)(T).call(T, function(M) {
            var N = M;
            N.remove();
          }), w;
        }
      }
      o.getCursorNextNode = D;
      function C(x, S) {
        return x.nodeType === 3 ? x.nodeValue === S.nodeValue : x.contains(S);
      }
      function h(x, S, g) {
        g === void 0 && (g = !0);
        var b = x.nodeValue, w = b == null ? void 0 : (0, m.default)(b).call(b, 0, S);
        if (b = b == null ? void 0 : (0, m.default)(b).call(b, S), !g) {
          var p = b;
          b = w, w = p;
        }
        return x.nodeValue = w, b;
      }
      o.dealTextNode = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(430), c = function() {
        function m(E) {
          this.maxSize = E, this.isRe = !1, this.data = new d.CeilStack(E), this.revokeData = new d.CeilStack(E);
        }
        return (0, f.default)(m.prototype, "size", {
          get: function() {
            return [this.data.size, this.revokeData.size];
          },
          enumerable: !1,
          configurable: !0
        }), m.prototype.resetMaxSize = function(E) {
          this.data.resetMax(E), this.revokeData.resetMax(E);
        }, m.prototype.save = function(E) {
          return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(E), this;
        }, m.prototype.revoke = function(E) {
          !this.isRe && (this.isRe = !0);
          var A = this.data.outstack();
          return A ? (this.revokeData.instack(A), E(A), !0) : !1;
        }, m.prototype.restore = function(E) {
          !this.isRe && (this.isRe = !0);
          var A = this.revokeData.outstack();
          return A ? (this.data.instack(A), E(A), !0) : !1;
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
      var s = t(11), f = /#|\.prototype\./, d = function(C, h) {
        var x = m[c(C)];
        return x == A ? !0 : x == E ? !1 : typeof h == "function" ? s(h) : !!h;
      }, c = d.normalize = function(D) {
        return String(D).replace(f, ".").toLowerCase();
      }, m = d.data = {}, E = d.NATIVE = "N", A = d.POLYFILL = "P";
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
      var s = t(104), f = t(19), d = t(16), c = t(10), m = t(42), E = c("iterator"), A = !1, D = function() {
        return this;
      }, C, h, x;
      [].keys && (x = [].keys(), "next" in x ? (h = s(s(x)), h !== Object.prototype && (C = h)) : A = !0), C == null && (C = {}), !m && !d(C, E) && f(C, E, D), l.exports = { IteratorPrototype: C, BUGGY_SAFARI_ITERATORS: A };
    }, function(l, o, t) {
      var s = t(16), f = t(29), d = t(63), c = t(168), m = d("IE_PROTO"), E = Object.prototype;
      l.exports = c ? Object.getPrototypeOf : function(A) {
        return A = f(A), s(A, m) ? A[m] : typeof A.constructor == "function" && A instanceof A.constructor ? A.constructor.prototype : A instanceof Object ? E : null;
      };
    }, function(l, o, t) {
      var s = t(76);
      l.exports = s && !Symbol.sham && It(Symbol.iterator) == "symbol";
    }, function(l, o, t) {
      var s = t(16), f = t(28), d = t(78).indexOf, c = t(51);
      l.exports = function(m, E) {
        var A = f(m), D = 0, C = [], h;
        for (h in A)
          !s(c, h) && s(A, h) && C.push(h);
        for (; E.length > D; )
          s(A, h = E[D++]) && (~d(C, h) || C.push(h));
        return C;
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
      l.exports = function(E) {
        var A = s(E), D = f.f;
        c && A && !A[m] && D(A, m, { configurable: !0, get: function() {
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
        } catch (A) {
          var E = f.return;
          throw E !== void 0 && s(E.call(f)), A;
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
      l.exports = function(E, A) {
        if (!A && !d)
          return !1;
        var D = !1;
        try {
          var C = {};
          C[f] = function() {
            return { next: function() {
              return { done: D = !0 };
            } };
          }, E(C);
        } catch {
        }
        return D;
      };
    }, function(l, o, t) {
      var s = t(25), f = t(40), d = t(10), c = d("species");
      l.exports = function(m, E) {
        var A = s(m).constructor, D;
        return A === void 0 || (D = s(A)[c]) == null ? E : f(D);
      };
    }, function(l, o, t) {
      var s = t(8), f = t(11), d = t(33), c = t(39), m = t(107), E = t(73), A = t(117), D = s.location, C = s.setImmediate, h = s.clearImmediate, x = s.process, S = s.MessageChannel, g = s.Dispatch, b = 0, w = {}, p = "onreadystatechange", T, M, N, U = function(H) {
        if (w.hasOwnProperty(H)) {
          var j = w[H];
          delete w[H], j();
        }
      }, O = function(H) {
        return function() {
          U(H);
        };
      }, B = function(H) {
        U(H.data);
      }, P = function(H) {
        s.postMessage(H + "", D.protocol + "//" + D.host);
      };
      (!C || !h) && (C = function(H) {
        for (var j = [], I = 1; arguments.length > I; )
          j.push(arguments[I++]);
        return w[++b] = function() {
          (typeof H == "function" ? H : Function(H)).apply(void 0, j);
        }, T(b), b;
      }, h = function(H) {
        delete w[H];
      }, d(x) == "process" ? T = function(H) {
        x.nextTick(O(H));
      } : g && g.now ? T = function(H) {
        g.now(O(H));
      } : S && !A ? (M = new S(), N = M.port2, M.port1.onmessage = B, T = c(N.postMessage, N, 1)) : s.addEventListener && typeof postMessage == "function" && !s.importScripts && !f(P) && D.protocol !== "file:" ? (T = P, s.addEventListener("message", B, !1)) : p in E("script") ? T = function(H) {
        m.appendChild(E("script"))[p] = function() {
          m.removeChild(this), U(H);
        };
      } : T = function(H) {
        setTimeout(O(H), 0);
      }), l.exports = { set: C, clear: h };
    }, function(l, o, t) {
      var s = t(84);
      l.exports = /(iphone|ipod|ipad).*applewebkit/i.test(s);
    }, function(l, o, t) {
      var s = t(25), f = t(13), d = t(85);
      l.exports = function(c, m) {
        if (s(c), f(m) && m.constructor === c)
          return m;
        var E = d.f(c), A = E.resolve;
        return A(m), E.promise;
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
      var s = t(5), f = t(8), d = t(122), c = t(11), m = t(19), E = t(66), A = t(83), D = t(13), C = t(36), h = t(18).f, x = t(30).forEach, S = t(14), g = t(41), b = g.set, w = g.getterFor;
      l.exports = function(p, T, M) {
        var N = p.indexOf("Map") !== -1, U = p.indexOf("Weak") !== -1, O = N ? "set" : "add", B = f[p], P = B && B.prototype, z = {}, H;
        if (!S || typeof B != "function" || !(U || P.forEach && !c(function() {
          new B().entries().next();
        })))
          H = M.getConstructor(T, p, N, O), d.REQUIRED = !0;
        else {
          H = T(function(I, V) {
            b(A(I, H, p), { type: p, collection: new B() }), V != null && E(V, I[O], I, N);
          });
          var j = w(p);
          x(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(I) {
            var V = I == "add" || I == "set";
            I in P && !(U && I == "clear") && m(H.prototype, I, function(k, K) {
              var q = j(this).collection;
              if (!V && U && !D(k))
                return I == "get" ? void 0 : !1;
              var X = q[I](k === 0 ? 0 : k, K);
              return V ? this : X;
            });
          }), U || h(H.prototype, "size", { configurable: !0, get: function() {
            return j(this).collection.size;
          } });
        }
        return C(H, p, !1, !0), z[p] = H, s({ global: !0, forced: !0 }, z), U || M.setStrong(H, p, N), H;
      };
    }, function(l, o, t) {
      var s = t(51), f = t(13), d = t(16), c = t(18).f, m = t(64), E = t(200), A = m("meta"), D = 0, C = Object.isExtensible || function() {
        return !0;
      }, h = function(p) {
        c(p, A, { value: {
          objectID: "O" + ++D,
          weakData: {}
        } });
      }, x = function(p, T) {
        if (!f(p))
          return It(p) == "symbol" ? p : (typeof p == "string" ? "S" : "P") + p;
        if (!d(p, A)) {
          if (!C(p))
            return "F";
          if (!T)
            return "E";
          h(p);
        }
        return p[A].objectID;
      }, S = function(p, T) {
        if (!d(p, A)) {
          if (!C(p))
            return !0;
          if (!T)
            return !1;
          h(p);
        }
        return p[A].weakData;
      }, g = function(p) {
        return E && b.REQUIRED && C(p) && !d(p, A) && h(p), p;
      }, b = l.exports = { REQUIRED: !1, fastKey: x, getWeakData: S, onFreeze: g };
      s[A] = !0;
    }, function(l, o, t) {
      var s = t(18).f, f = t(77), d = t(109), c = t(39), m = t(83), E = t(66), A = t(75), D = t(110), C = t(14), h = t(122).fastKey, x = t(41), S = x.set, g = x.getterFor;
      l.exports = { getConstructor: function(w, p, T, M) {
        var N = w(function(P, z) {
          m(P, N, p), S(P, { type: p, index: f(null), first: void 0, last: void 0, size: 0 }), C || (P.size = 0), z != null && E(z, P[M], P, T);
        }), U = g(p), O = function(z, H, j) {
          var I = U(z), V = B(z, H), k, K;
          return V ? V.value = j : (I.last = V = { index: K = h(H, !0), key: H, value: j, previous: k = I.last, next: void 0, removed: !1 }, I.first || (I.first = V), k && (k.next = V), C ? I.size++ : z.size++, K !== "F" && (I.index[K] = V)), z;
        }, B = function(z, H) {
          var j = U(z), I = h(H), V;
          if (I !== "F")
            return j.index[I];
          for (V = j.first; V; V = V.next)
            if (V.key == H)
              return V;
        };
        return d(N.prototype, {
          clear: function() {
            for (var z = this, H = U(z), j = H.index, I = H.first; I; )
              I.removed = !0, I.previous && (I.previous = I.previous.next = void 0), delete j[I.index], I = I.next;
            H.first = H.last = void 0, C ? H.size = 0 : z.size = 0;
          },
          delete: function(z) {
            var H = this, j = U(H), I = B(H, z);
            if (I) {
              var V = I.next, k = I.previous;
              delete j.index[I.index], I.removed = !0, k && (k.next = V), V && (V.previous = k), j.first == I && (j.first = V), j.last == I && (j.last = k), C ? j.size-- : H.size--;
            }
            return !!I;
          },
          forEach: function(z) {
            for (var H = U(this), j = c(z, arguments.length > 1 ? arguments[1] : void 0, 3), I; I = I ? I.next : H.first; )
              for (j(I.value, I.key, this); I && I.removed; )
                I = I.previous;
          },
          has: function(z) {
            return !!B(this, z);
          }
        }), d(N.prototype, T ? {
          get: function(z) {
            var H = B(this, z);
            return H && H.value;
          },
          set: function(z, H) {
            return O(this, z === 0 ? 0 : z, H);
          }
        } : {
          add: function(z) {
            return O(this, z = z === 0 ? 0 : z, z);
          }
        }), C && s(N.prototype, "size", { get: function() {
          return U(this).size;
        } }), N;
      }, setStrong: function(w, p, T) {
        var M = p + " Iterator", N = g(p), U = g(M);
        A(w, p, function(O, B) {
          S(this, { type: M, target: O, state: N(O), kind: B, last: void 0 });
        }, function() {
          for (var O = U(this), B = O.kind, P = O.last; P && P.removed; )
            P = P.previous;
          return !O.target || !(O.last = P = P ? P.next : O.state.first) ? (O.target = void 0, { value: void 0, done: !0 }) : B == "keys" ? { value: P.key, done: !1 } : B == "values" ? { value: P.value, done: !1 } : { value: [P.key, P.value], done: !1 };
        }, T ? "entries" : "values", !T, !0), D(p);
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
      var c = t(2), m = t(6), E = c.__importDefault(t(292));
      function A(h) {
        var x = h.clipboardData, S = "";
        return x == null ? S = window.clipboardData && window.clipboardData.getData("text") : S = x.getData("text/plain"), m.replaceHtmlSymbol(S);
      }
      o.getPasteText = A;
      function D(h, x, S) {
        x === void 0 && (x = !0), S === void 0 && (S = !1);
        var g = h.clipboardData, b = "";
        if (g && (b = g.getData("text/html")), !b) {
          var w = A(h);
          if (!w)
            return "";
          b = "<p>" + w + "</p>";
        }
        return b = b.replace(/<(\d)/gm, function(p, T) {
          return "&lt;" + T;
        }), b = b.replace(/<(\/?meta.*?)>/gim, ""), b = E.default(b, x, S), b;
      }
      o.getPasteHtml = D;
      function C(h) {
        var x, S = [], g = A(h);
        if (g)
          return S;
        var b = (x = h.clipboardData) === null || x === void 0 ? void 0 : x.items;
        return b && (0, d.default)(m).call(m, b, function(w, p) {
          var T = p.type;
          /image/i.test(T) && S.push(p.getAsFile());
        }), S;
      }
      o.getPasteImgs = C;
    }, function(l, o, t) {
      l.exports = t(294);
    }, function(l, o, t) {
      l.exports = t(310);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3)), A = t(7), D = function() {
        function C(h, x) {
          var S = this;
          this.hideTimeoutId = 0, this.menu = h, this.conf = x;
          var g = E.default('<div class="w-e-droplist"></div>'), b = E.default("<p>" + x.title + "</p>");
          b.addClass("w-e-dp-title"), g.append(b);
          var w = x.list || [], p = x.type || "list", T = x.clickHandler || A.EMPTY_FN, M = E.default('<ul class="' + (p === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
          (0, d.default)(w).call(w, function(N) {
            var U = N.$elem, O = N.value, B = E.default('<li class="w-e-item"></li>');
            U && (B.append(U), M.append(B), B.on("click", function(P) {
              T(O), P.stopPropagation(), S.hideTimeoutId = (0, c.default)(function() {
                S.hide();
              });
            }));
          }), g.append(M), g.on("mouseleave", function() {
            S.hideTimeoutId = (0, c.default)(function() {
              S.hide();
            });
          }), this.$container = g, this.rendered = !1, this._show = !1;
        }
        return C.prototype.show = function() {
          this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
          var h = this.menu, x = h.$elem, S = this.$container;
          if (!this._show) {
            if (this.rendered)
              S.show();
            else {
              var g = x.getBoundingClientRect().height || 0, b = this.conf.width || 100;
              S.css("margin-top", g + "px").css("width", b + "px"), x.append(S), this.rendered = !0;
            }
            this._show = !0;
          }
        }, C.prototype.hide = function() {
          var h = this.$container;
          !this._show || (h.hide(), this._show = !1);
        }, (0, f.default)(C.prototype, "isShow", { get: function() {
          return this._show;
        }, enumerable: !1, configurable: !0 }), C;
      }();
      o.default = D;
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
      function E(A, D) {
        var C = new XMLHttpRequest();
        if (C.open("POST", A), C.timeout = D.timeout || 10 * 1e3, C.ontimeout = function() {
          console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), D.onTimeout && D.onTimeout(C);
        }, C.upload && (C.upload.onprogress = function(x) {
          var S = x.loaded / x.total;
          D.onProgress && D.onProgress(S, x);
        }), D.headers && (0, c.default)(m).call(m, D.headers, function(x, S) {
          C.setRequestHeader(x, S);
        }), C.withCredentials = !!D.withCredentials, D.beforeSend) {
          var h = D.beforeSend(C);
          if (h && (0, f.default)(h) === "object" && h.prevent)
            return h.msg;
        }
        return C.onreadystatechange = function() {
          if (C.readyState === 4) {
            var x = C.status;
            if (!(x < 200) && !(x >= 300 && x < 400)) {
              if (x >= 400) {
                console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + x), D.onError && D.onError(C);
                return;
              }
              var S = C.responseText, g;
              if ((0, f.default)(S) !== "object")
                try {
                  g = JSON.parse(S);
                } catch {
                  console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", S), D.onFail && D.onFail(C, S);
                  return;
                }
              else
                g = S;
              D.onSuccess(C, g);
            }
          }
        }, C.send(D.formData || null), C;
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(342)), c = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3)), A = function() {
        function D(C) {
          this.editor = C, this.$textContainer = C.$textContainerElem, this.$bar = E.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }
        return D.prototype.show = function(C) {
          var h = this;
          if (!this.isShow) {
            this.isShow = !0;
            var x = this.$bar, S = this.$textContainer;
            S.append(x), (0, d.default)() - this.time > 100 && C <= 1 && (x.css("width", C * 100 + "%"), this.time = (0, d.default)());
            var g = this.timeoutId;
            g && clearTimeout(g), this.timeoutId = (0, c.default)(function() {
              h.hide();
            }, 500);
          }
        }, D.prototype.hide = function() {
          var C = this.$bar;
          C.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }, D;
      }();
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.ListType = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(24)), E = t(47), A = d.__importStar(t(371)), D;
      (function(h) {
        h.OrderedList = "OL", h.UnorderedList = "UL";
      })(D = o.ListType || (o.ListType = {}));
      var C = function(h) {
        d.__extends(x, h);
        function x(S) {
          var g = this, b = c.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), w = { width: 130, title: "\u5E8F\u5217", type: "list", list: [{ $elem: c.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + S.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`), value: D.UnorderedList }, { $elem: c.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + S.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`), value: D.OrderedList }], clickHandler: function(T) {
            g.command(T);
          } };
          return g = h.call(this, b, S, w) || this, g;
        }
        return x.prototype.command = function(S) {
          var g = this.editor, b = g.selection.getSelectionContainerElem();
          b !== void 0 && (this.handleSelectionRangeNodes(S), this.tryChangeActive());
        }, x.prototype.validator = function(S, g, b) {
          return !(!S.length || !g.length || b.equal(S) || b.equal(g));
        }, x.prototype.handleSelectionRangeNodes = function(S) {
          var g = this.editor, b = g.selection, w = S.toLowerCase(), p = b.getSelectionContainerElem(), T = b.getSelectionStartElem().getNodeTop(g), M = b.getSelectionEndElem().getNodeTop(g);
          if (!!this.validator(T, M, g.$textElem)) {
            var N = b.getRange(), U = N == null ? void 0 : N.collapsed;
            g.$textElem.equal(p) || (p = p.getNodeTop(g));
            var O = { editor: g, listType: S, listTarget: w, $selectionElem: p, $startElem: T, $endElem: M }, B;
            this.isOrderElem(p) ? B = A.ClassType.Wrap : this.isOrderElem(T) && this.isOrderElem(M) ? B = A.ClassType.Join : this.isOrderElem(T) ? B = A.ClassType.StartJoin : this.isOrderElem(M) ? B = A.ClassType.EndJoin : B = A.ClassType.Other;
            var P = new A.default(A.createListHandle(B, O, N));
            E.updateRange(g, P.getSelectionRangeElem(), !!U);
          }
        }, x.prototype.isOrderElem = function(S) {
          var g = S.getNodeName();
          return g === D.OrderedList || g === D.UnorderedList;
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(m.default);
      o.default = C;
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
      var c = t(2), m = c.__importDefault(t(3)), E = function() {
        function D(C) {
          var h;
          this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = m.default(this.template), this.$child = (h = C == null ? void 0 : C.childNodes()) === null || h === void 0 ? void 0 : h.clone(!0);
        }
        return D.prototype.init = function() {
          var C = this.$child, h = this.getInputContainer();
          C && C.insertAfter(h);
        }, D.prototype.getInput = function() {
          var C = this.$todo, h = (0, d.default)(C).call(C, "input");
          return h;
        }, D.prototype.getInputContainer = function() {
          var C = this.getInput().parent();
          return C;
        }, D.prototype.getTodo = function() {
          return this.$todo;
        }, D;
      }();
      o.todo = E;
      function A(D) {
        var C = new E(D);
        return C.init(), C;
      }
      o.default = A;
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
      var s = t(9), f = s.Object, d = l.exports = function(m, E, A) {
        return f.defineProperty(m, E, A);
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
        return function(E, A) {
          var D = String(f(E)), C = s(A), h = D.length, x, S;
          return C < 0 || C >= h ? m ? "" : void 0 : (x = D.charCodeAt(C), x < 55296 || x > 56319 || C + 1 === h || (S = D.charCodeAt(C + 1)) < 56320 || S > 57343 ? m ? D.charAt(C) : x : m ? D.slice(C, C + 2) : (x - 55296 << 10) + (S - 56320) + 65536);
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
      var s = t(103).IteratorPrototype, f = t(77), d = t(48), c = t(36), m = t(43), E = function() {
        return this;
      };
      l.exports = function(A, D, C) {
        var h = D + " Iterator";
        return A.prototype = f(s, { next: d(1, C) }), c(A, h, !1, !0), m[h] = E, A;
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
      l.exports = s ? Object.defineProperties : function(E, A) {
        d(E);
        for (var D = c(A), C = D.length, h = 0, x; C > h; )
          f.f(E, x = D[h++], A[x]);
        return E;
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
        return function(A, D) {
          return s(A), f(D), d ? m.call(A, D) : A.__proto__ = D, A;
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
      var s = t(28), f = t(82), d = t(43), c = t(41), m = t(75), E = "Array Iterator", A = c.set, D = c.getterFor(E);
      l.exports = m(Array, "Array", function(C, h) {
        A(this, {
          type: E,
          target: s(C),
          index: 0,
          kind: h
        });
      }, function() {
        var C = D(this), h = C.target, x = C.kind, S = C.index++;
        return !h || S >= h.length ? (C.target = void 0, { value: void 0, done: !0 }) : x == "keys" ? { value: S, done: !1 } : x == "values" ? { value: h[S], done: !1 } : { value: [S, h[S]], done: !1 };
      }, "values"), d.Arguments = d.Array, f("keys"), f("values"), f("entries");
    }, function(l, o) {
      l.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, function(l, o, t) {
      var s = t(5), f = t(42), d = t(8), c = t(35), m = t(108), E = t(53), A = t(109), D = t(36), C = t(110), h = t(13), x = t(40), S = t(83), g = t(33), b = t(101), w = t(66), p = t(114), T = t(115), M = t(116).set, N = t(176), U = t(118), O = t(177), B = t(85), P = t(119), z = t(41), H = t(100), j = t(10), I = t(86), V = j("species"), k = "Promise", K = z.get, q = z.set, X = z.getterFor(k), _ = m, le = d.TypeError, be = d.document, ve = d.process, ce = c("fetch"), ae = B.f, re = ae, se = g(ve) == "process", pe = !!(be && be.createEvent && d.dispatchEvent), Pe = "unhandledrejection", Ee = "rejectionhandled", Ve = 0, Ht = 1, Nt = 2, lt = 1, Et = 2, Ut, ct, Xt, $e, zt = H(k, function() {
        var je = b(_) !== String(_);
        if (!je && (I === 66 || !se && typeof PromiseRejectionEvent != "function") || f && !_.prototype.finally)
          return !0;
        if (I >= 51 && /native code/.test(_))
          return !1;
        var Ce = _.resolve(1), ge = function(oe) {
          oe(function() {
          }, function() {
          });
        }, Oe = Ce.constructor = {};
        return Oe[V] = ge, !(Ce.then(function() {
        }) instanceof ge);
      }), Ar = zt || !p(function(je) {
        _.all(je).catch(function() {
        });
      }), bn = function(Ce) {
        var ge;
        return h(Ce) && typeof (ge = Ce.then) == "function" ? ge : !1;
      }, mn = function(Ce, ge, Oe) {
        if (!ge.notified) {
          ge.notified = !0;
          var Se = ge.reactions;
          N(function() {
            for (var oe = ge.value, De = ge.state == Ht, ue = 0; Se.length > ue; ) {
              var Ie = Se[ue++], We = De ? Ie.ok : Ie.fail, Ye = Ie.resolve, Xe = Ie.reject, st = Ie.domain, tt, Yt, At;
              try {
                We ? (De || (ge.rejection === Et && En(Ce, ge), ge.rejection = lt), We === !0 ? tt = oe : (st && st.enter(), tt = We(oe), st && (st.exit(), At = !0)), tt === Ie.promise ? Xe(le("Promise-chain cycle")) : (Yt = bn(tt)) ? Yt.call(tt, Ye, Xe) : Ye(tt)) : Xe(oe);
              } catch (er) {
                st && !At && st.exit(), Xe(er);
              }
            }
            ge.reactions = [], ge.notified = !1, Oe && !ge.rejection && Sn(Ce, ge);
          });
        }
      }, Fn = function(Ce, ge, Oe) {
        var Se, oe;
        pe ? (Se = be.createEvent("Event"), Se.promise = ge, Se.reason = Oe, Se.initEvent(Ce, !1, !0), d.dispatchEvent(Se)) : Se = { promise: ge, reason: Oe }, (oe = d["on" + Ce]) ? oe(Se) : Ce === Pe && O("Unhandled promise rejection", Oe);
      }, Sn = function(Ce, ge) {
        M.call(d, function() {
          var Oe = ge.value, Se = Vt(ge), oe;
          if (Se && (oe = P(function() {
            se ? ve.emit("unhandledRejection", Oe, Ce) : Fn(Pe, Ce, Oe);
          }), ge.rejection = se || Vt(ge) ? Et : lt, oe.error))
            throw oe.value;
        });
      }, Vt = function(Ce) {
        return Ce.rejection !== lt && !Ce.parent;
      }, En = function(Ce, ge) {
        M.call(d, function() {
          se ? ve.emit("rejectionHandled", Ce) : Fn(Ee, Ce, ge.value);
        });
      }, Ct = function(Ce, ge, Oe, Se) {
        return function(oe) {
          Ce(ge, Oe, oe, Se);
        };
      }, qe = function(Ce, ge, Oe, Se) {
        ge.done || (ge.done = !0, Se && (ge = Se), ge.value = Oe, ge.state = Nt, mn(Ce, ge, !0));
      }, Jt = function je(Ce, ge, Oe, Se) {
        if (!ge.done) {
          ge.done = !0, Se && (ge = Se);
          try {
            if (Ce === Oe)
              throw le("Promise can't be resolved itself");
            var oe = bn(Oe);
            oe ? N(function() {
              var De = { done: !1 };
              try {
                oe.call(Oe, Ct(je, Ce, De, ge), Ct(qe, Ce, De, ge));
              } catch (ue) {
                qe(Ce, De, ue, ge);
              }
            }) : (ge.value = Oe, ge.state = Ht, mn(Ce, ge, !1));
          } catch (De) {
            qe(Ce, { done: !1 }, De, ge);
          }
        }
      };
      zt && (_ = function(Ce) {
        S(this, _, k), x(Ce), Ut.call(this);
        var ge = K(this);
        try {
          Ce(Ct(Jt, this, ge), Ct(qe, this, ge));
        } catch (Oe) {
          qe(this, ge, Oe);
        }
      }, Ut = function(Ce) {
        q(this, { type: k, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: Ve, value: void 0 });
      }, Ut.prototype = A(_.prototype, {
        then: function(Ce, ge) {
          var Oe = X(this), Se = ae(T(this, _));
          return Se.ok = typeof Ce == "function" ? Ce : !0, Se.fail = typeof ge == "function" && ge, Se.domain = se ? ve.domain : void 0, Oe.parent = !0, Oe.reactions.push(Se), Oe.state != Ve && mn(this, Oe, !1), Se.promise;
        },
        catch: function(Ce) {
          return this.then(void 0, Ce);
        }
      }), ct = function() {
        var Ce = new Ut(), ge = K(Ce);
        this.promise = Ce, this.resolve = Ct(Jt, Ce, ge), this.reject = Ct(qe, Ce, ge);
      }, B.f = ae = function(Ce) {
        return Ce === _ || Ce === Xt ? new ct(Ce) : re(Ce);
      }, !f && typeof m == "function" && ($e = m.prototype.then, E(m.prototype, "then", function(Ce, ge) {
        var Oe = this;
        return new _(function(Se, oe) {
          $e.call(Oe, Se, oe);
        }).then(Ce, ge);
      }, { unsafe: !0 }), typeof ce == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
        fetch: function(Ce) {
          return U(_, ce.apply(d, arguments));
        }
      }))), s({ global: !0, wrap: !0, forced: zt }, { Promise: _ }), D(_, k, !1, !0), C(k), Xt = c(k), s({ target: k, stat: !0, forced: zt }, {
        reject: function(Ce) {
          var ge = ae(this);
          return ge.reject.call(void 0, Ce), ge.promise;
        }
      }), s({ target: k, stat: !0, forced: f || zt }, {
        resolve: function(Ce) {
          return U(f && this === Xt ? _ : this, Ce);
        }
      }), s({ target: k, stat: !0, forced: Ar }, {
        all: function(Ce) {
          var ge = this, Oe = ae(ge), Se = Oe.resolve, oe = Oe.reject, De = P(function() {
            var ue = x(ge.resolve), Ie = [], We = 0, Ye = 1;
            w(Ce, function(Xe) {
              var st = We++, tt = !1;
              Ie.push(void 0), Ye++, ue.call(ge, Xe).then(function(Yt) {
                tt || (tt = !0, Ie[st] = Yt, --Ye || Se(Ie));
              }, oe);
            }), --Ye || Se(Ie);
          });
          return De.error && oe(De.value), Oe.promise;
        },
        race: function(Ce) {
          var ge = this, Oe = ae(ge), Se = Oe.reject, oe = P(function() {
            var De = x(ge.resolve);
            w(Ce, function(ue) {
              De.call(ge, ue).then(Oe.resolve, Se);
            });
          });
          return oe.error && Se(oe.value), Oe.promise;
        }
      });
    }, function(l, o, t) {
      var s = t(8), f = t(71).f, d = t(33), c = t(116).set, m = t(117), E = s.MutationObserver || s.WebKitMutationObserver, A = s.process, D = s.Promise, C = d(A) == "process", h = f(s, "queueMicrotask"), x = h && h.value, S, g, b, w, p, T, M, N;
      x || (S = function() {
        var O, B;
        for (C && (O = A.domain) && O.exit(); g; ) {
          B = g.fn, g = g.next;
          try {
            B();
          } catch (P) {
            throw g ? w() : b = void 0, P;
          }
        }
        b = void 0, O && O.enter();
      }, C ? w = function() {
        A.nextTick(S);
      } : E && !m ? (p = !0, T = document.createTextNode(""), new E(S).observe(T, { characterData: !0 }), w = function() {
        T.data = p = !p;
      }) : D && D.resolve ? (M = D.resolve(void 0), N = M.then, w = function() {
        N.call(M, S);
      }) : w = function() {
        c.call(s, S);
      }), l.exports = x || function(U) {
        var O = { fn: U, next: void 0 };
        b && (b.next = O), g || (g = O, w()), b = O;
      };
    }, function(l, o, t) {
      var s = t(8);
      l.exports = function(f, d) {
        var c = s.console;
        c && c.error && (arguments.length === 1 ? c.error(f) : c.error(f, d));
      };
    }, function(l, o, t) {
      var s = t(5), f = t(40), d = t(85), c = t(119), m = t(66);
      s({ target: "Promise", stat: !0 }, { allSettled: function(A) {
        var D = this, C = d.f(D), h = C.resolve, x = C.reject, S = c(function() {
          var g = f(D.resolve), b = [], w = 0, p = 1;
          m(A, function(T) {
            var M = w++, N = !1;
            b.push(void 0), p++, g.call(D, T).then(function(U) {
              N || (N = !0, b[M] = { status: "fulfilled", value: U }, --p || h(b));
            }, function(U) {
              N || (N = !0, b[M] = { status: "rejected", reason: U }, --p || h(b));
            });
          }), --p || h(b);
        });
        return S.error && x(S.value), C.promise;
      } });
    }, function(l, o, t) {
      var s = t(5), f = t(42), d = t(108), c = t(11), m = t(35), E = t(115), A = t(118), D = t(53), C = !!d && c(function() {
        d.prototype.finally.call({ then: function() {
        } }, function() {
        });
      });
      s({ target: "Promise", proto: !0, real: !0, forced: C }, { finally: function(x) {
        var S = E(this, m("Promise")), g = typeof x == "function";
        return this.then(g ? function(b) {
          return A(S, x()).then(function() {
            return b;
          });
        } : x, g ? function(b) {
          return A(S, x()).then(function() {
            throw b;
          });
        } : x);
      } }), !f && typeof d == "function" && !d.prototype.finally && D(d.prototype, "finally", m("Promise").prototype.finally);
    }, function(l, o, t) {
      t(54);
      var s = t(181), f = t(65), d = Array.prototype, c = { DOMTokenList: !0, NodeList: !0 };
      l.exports = function(m) {
        var E = m.forEach;
        return m === d || m instanceof Array && E === d.forEach || c.hasOwnProperty(f(m)) ? s : E;
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
      l.exports = !c || !m ? function(A) {
        return s(this, A, arguments.length > 1 ? arguments[1] : void 0);
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
      var s = t(5), f = t(30).map, d = t(56), c = t(22), m = d("map"), E = c("map");
      s({ target: "Array", proto: !0, forced: !m || !E }, { map: function(D) {
        return f(this, D, arguments.length > 1 ? arguments[1] : void 0);
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
      var s = t(5), f = t(78).indexOf, d = t(67), c = t(22), m = [].indexOf, E = !!m && 1 / [1].indexOf(1, -0) < 0, A = d("indexOf"), D = c("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: E || !A || !D }, { indexOf: function(h) {
        return E ? m.apply(this, arguments) || 0 : f(this, h, arguments.length > 1 ? arguments[1] : void 0);
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
      var s = t(5), f = t(79), d = t(62), c = t(34), m = t(29), E = t(88), A = t(69), D = t(56), C = t(22), h = D("splice"), x = C("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), S = Math.max, g = Math.min, b = 9007199254740991, w = "Maximum allowed length exceeded";
      s({ target: "Array", proto: !0, forced: !h || !x }, { splice: function(T, M) {
        var N = m(this), U = c(N.length), O = f(T, U), B = arguments.length, P, z, H, j, I, V;
        if (B === 0 ? P = z = 0 : B === 1 ? (P = 0, z = U - O) : (P = B - 2, z = g(S(d(M), 0), U - O)), U + P - z > b)
          throw TypeError(w);
        for (H = E(N, z), j = 0; j < z; j++)
          I = O + j, I in N && A(H, j, N[I]);
        if (H.length = z, P < z) {
          for (j = O; j < U - z; j++)
            I = j + z, V = j + P, I in N ? N[V] = N[I] : delete N[V];
          for (j = U; j > U - z + P; j--)
            delete N[j - 1];
        } else if (P > z)
          for (j = U - z; j > O; j--)
            I = j + z - 1, V = j + P - 1, I in N ? N[V] = N[I] : delete N[V];
        for (j = 0; j < P; j++)
          N[j + O] = arguments[j + 2];
        return N.length = U - z + P, H;
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
      var s = t(5), f = t(30).filter, d = t(56), c = t(22), m = d("filter"), E = c("filter");
      s({ target: "Array", proto: !0, forced: !m || !E }, { filter: function(D) {
        return f(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(214);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(215), f = t(217), d = Array.prototype, c = String.prototype;
      l.exports = function(m) {
        var E = m.includes;
        return m === d || m instanceof Array && E === d.includes ? s : typeof m == "string" || m === c || m instanceof String && E === c.includes ? f : E;
      };
    }, function(l, o, t) {
      t(216);
      var s = t(15);
      l.exports = s("Array").includes;
    }, function(l, o, t) {
      var s = t(5), f = t(78).includes, d = t(82), c = t(22), m = c("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: !m }, { includes: function(A) {
        return f(this, A, arguments.length > 1 ? arguments[1] : void 0);
      } }), d("includes");
    }, function(l, o, t) {
      t(218);
      var s = t(15);
      l.exports = s("String").includes;
    }, function(l, o, t) {
      var s = t(5), f = t(219), d = t(49), c = t(221);
      s({ target: "String", proto: !0, forced: !c("includes") }, { includes: function(E) {
        return !!~String(d(this)).indexOf(f(E), arguments.length > 1 ? arguments[1] : void 0);
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
        var E;
        return s(m) && ((E = m[c]) !== void 0 ? !!E : f(m) == "RegExp");
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
      var s = t(40), f = t(13), d = [].slice, c = {}, m = function(A, D, C) {
        if (!(D in c)) {
          for (var h = [], x = 0; x < D; x++)
            h[x] = "a[" + x + "]";
          c[D] = Function("C,a", "return new C(" + h.join(",") + ")");
        }
        return c[D](A, C);
      };
      l.exports = Function.bind || function(A) {
        var D = s(this), C = d.call(arguments, 1), h = function() {
          var S = C.concat(d.call(arguments));
          return this instanceof h ? m(D, S.length, S) : D.apply(A, S);
        };
        return f(D.prototype) && (h.prototype = D.prototype), h;
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
      var s = t(5), f = t(11), d = t(55), c = t(13), m = t(29), E = t(34), A = t(69), D = t(88), C = t(56), h = t(10), x = t(86), S = h("isConcatSpreadable"), g = 9007199254740991, b = "Maximum allowed index exceeded", w = x >= 51 || !f(function() {
        var N = [];
        return N[S] = !1, N.concat()[0] !== N;
      }), p = C("concat"), T = function(U) {
        if (!c(U))
          return !1;
        var O = U[S];
        return O !== void 0 ? !!O : d(U);
      }, M = !w || !p;
      s({ target: "Array", proto: !0, forced: M }, { concat: function(U) {
        var O = m(this), B = D(O, 0), P = 0, z, H, j, I, V;
        for (z = -1, j = arguments.length; z < j; z++)
          if (V = z === -1 ? O : arguments[z], T(V)) {
            if (I = E(V.length), P + I > g)
              throw TypeError(b);
            for (H = 0; H < I; H++, P++)
              H in V && A(B, P, V[H]);
          } else {
            if (P >= g)
              throw TypeError(b);
            A(B, P++, V);
          }
        return B.length = P, B;
      } });
    }, function(l, o, t) {
      var s = t(5), f = t(8), d = t(35), c = t(42), m = t(14), E = t(76), A = t(105), D = t(11), C = t(16), h = t(55), x = t(13), S = t(25), g = t(29), b = t(28), w = t(60), p = t(48), T = t(77), M = t(52), N = t(125), U = t(235), O = t(126), B = t(71), P = t(18), z = t(59), H = t(19), j = t(53), I = t(74), V = t(63), k = t(51), K = t(64), q = t(10), X = t(93), _ = t(12), le = t(36), be = t(41), ve = t(30).forEach, ce = V("hidden"), ae = "Symbol", re = "prototype", se = q("toPrimitive"), pe = be.set, Pe = be.getterFor(ae), Ee = Object[re], Ve = f.Symbol, Ht = d("JSON", "stringify"), Nt = B.f, lt = P.f, Et = U.f, Ut = z.f, ct = I("symbols"), Xt = I("op-symbols"), $e = I("string-to-symbol-registry"), zt = I("symbol-to-string-registry"), Ar = I("wks"), bn = f.QObject, mn = !bn || !bn[re] || !bn[re].findChild, Fn = m && D(function() {
        return T(lt({}, "a", { get: function() {
          return lt(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(Se, oe, De) {
        var ue = Nt(Ee, oe);
        ue && delete Ee[oe], lt(Se, oe, De), ue && Se !== Ee && lt(Ee, oe, ue);
      } : lt, Sn = function(oe, De) {
        var ue = ct[oe] = T(Ve[re]);
        return pe(ue, { type: ae, tag: oe, description: De }), m || (ue.description = De), ue;
      }, Vt = A ? function(Se) {
        return It(Se) == "symbol";
      } : function(Se) {
        return Object(Se) instanceof Ve;
      }, En = function(oe, De, ue) {
        oe === Ee && En(Xt, De, ue), S(oe);
        var Ie = w(De, !0);
        return S(ue), C(ct, Ie) ? (ue.enumerable ? (C(oe, ce) && oe[ce][Ie] && (oe[ce][Ie] = !1), ue = T(ue, { enumerable: p(0, !1) })) : (C(oe, ce) || lt(oe, ce, p(1, {})), oe[ce][Ie] = !0), Fn(oe, Ie, ue)) : lt(oe, Ie, ue);
      }, Ct = function(oe, De) {
        S(oe);
        var ue = b(De), Ie = M(ue).concat(ge(ue));
        return ve(Ie, function(We) {
          (!m || Jt.call(ue, We)) && En(oe, We, ue[We]);
        }), oe;
      }, qe = function(oe, De) {
        return De === void 0 ? T(oe) : Ct(T(oe), De);
      }, Jt = function(oe) {
        var De = w(oe, !0), ue = Ut.call(this, De);
        return this === Ee && C(ct, De) && !C(Xt, De) ? !1 : ue || !C(this, De) || !C(ct, De) || C(this, ce) && this[ce][De] ? ue : !0;
      }, je = function(oe, De) {
        var ue = b(oe), Ie = w(De, !0);
        if (!(ue === Ee && C(ct, Ie) && !C(Xt, Ie))) {
          var We = Nt(ue, Ie);
          return We && C(ct, Ie) && !(C(ue, ce) && ue[ce][Ie]) && (We.enumerable = !0), We;
        }
      }, Ce = function(oe) {
        var De = Et(b(oe)), ue = [];
        return ve(De, function(Ie) {
          !C(ct, Ie) && !C(k, Ie) && ue.push(Ie);
        }), ue;
      }, ge = function(oe) {
        var De = oe === Ee, ue = Et(De ? Xt : b(oe)), Ie = [];
        return ve(ue, function(We) {
          C(ct, We) && (!De || C(Ee, We)) && Ie.push(ct[We]);
        }), Ie;
      };
      if (E || (Ve = function() {
        if (this instanceof Ve)
          throw TypeError("Symbol is not a constructor");
        var oe = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), De = K(oe), ue = function Ie(We) {
          this === Ee && Ie.call(Xt, We), C(this, ce) && C(this[ce], De) && (this[ce][De] = !1), Fn(this, De, p(1, We));
        };
        return m && mn && Fn(Ee, De, { configurable: !0, set: ue }), Sn(De, oe);
      }, j(Ve[re], "toString", function() {
        return Pe(this).tag;
      }), j(Ve, "withoutSetter", function(Se) {
        return Sn(K(Se), Se);
      }), z.f = Jt, P.f = En, B.f = je, N.f = U.f = Ce, O.f = ge, X.f = function(Se) {
        return Sn(q(Se), Se);
      }, m && (lt(Ve[re], "description", { configurable: !0, get: function() {
        return Pe(this).description;
      } }), c || j(Ee, "propertyIsEnumerable", Jt, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !E, sham: !E }, { Symbol: Ve }), ve(M(Ar), function(Se) {
        _(Se);
      }), s({ target: ae, stat: !0, forced: !E }, {
        for: function(oe) {
          var De = String(oe);
          if (C($e, De))
            return $e[De];
          var ue = Ve(De);
          return $e[De] = ue, zt[ue] = De, ue;
        },
        keyFor: function(oe) {
          if (!Vt(oe))
            throw TypeError(oe + " is not a symbol");
          if (C(zt, oe))
            return zt[oe];
        },
        useSetter: function() {
          mn = !0;
        },
        useSimple: function() {
          mn = !1;
        }
      }), s({ target: "Object", stat: !0, forced: !E, sham: !m }, {
        create: qe,
        defineProperty: En,
        defineProperties: Ct,
        getOwnPropertyDescriptor: je
      }), s({ target: "Object", stat: !0, forced: !E }, {
        getOwnPropertyNames: Ce,
        getOwnPropertySymbols: ge
      }), s({ target: "Object", stat: !0, forced: D(function() {
        O.f(1);
      }) }, { getOwnPropertySymbols: function(oe) {
        return O.f(g(oe));
      } }), Ht) {
        var Oe = !E || D(function() {
          var Se = Ve();
          return Ht([Se]) != "[null]" || Ht({ a: Se }) != "{}" || Ht(Object(Se)) != "{}";
        });
        s({ target: "JSON", stat: !0, forced: Oe }, {
          stringify: function(oe, De, ue) {
            for (var Ie = [oe], We = 1, Ye; arguments.length > We; )
              Ie.push(arguments[We++]);
            if (Ye = De, !(!x(De) && oe === void 0 || Vt(oe)))
              return h(De) || (De = function(st, tt) {
                if (typeof Ye == "function" && (tt = Ye.call(this, st, tt)), !Vt(tt))
                  return tt;
              }), Ie[1] = De, Ht.apply(null, Ie);
          }
        });
      }
      Ve[re][se] || H(Ve[re], se, Ve[re].valueOf), le(Ve, ae), k[ce] = !0;
    }, function(l, o, t) {
      var s = t(28), f = t(125).f, d = {}.toString, c = (typeof window > "u" ? "undefined" : It(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], m = function(A) {
        try {
          return f(A);
        } catch {
          return c.slice();
        }
      };
      l.exports.f = function(A) {
        return c && d.call(A) == "[object Window]" ? m(A) : f(s(A));
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
      var s = t(8), f = t(90).trim, d = t(68), c = s.parseInt, m = /^[+-]?0[Xx]/, E = c(d + "08") !== 8 || c(d + "0x16") !== 22;
      l.exports = E ? function(D, C) {
        var h = f(String(D));
        return c(h, C >>> 0 || (m.test(h) ? 16 : 10));
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
      var s = t(5), f = t(13), d = t(55), c = t(79), m = t(34), E = t(28), A = t(69), D = t(10), C = t(56), h = t(22), x = C("slice"), S = h("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), g = D("species"), b = [].slice, w = Math.max;
      s({ target: "Array", proto: !0, forced: !x || !S }, { slice: function(T, M) {
        var N = E(this), U = m(N.length), O = c(T, U), B = c(M === void 0 ? U : M, U), P, z, H;
        if (d(N) && (P = N.constructor, typeof P == "function" && (P === Array || d(P.prototype)) ? P = void 0 : f(P) && (P = P[g], P === null && (P = void 0)), P === Array || P === void 0))
          return b.call(N, O, B);
        for (z = new (P === void 0 ? Array : P)(w(B - O, 0)), H = 0; O < B; O++, H++)
          O in N && A(z, H, N[O]);
        return z.length = H, z;
      } });
    }, function(l, o, t) {
      t(266);
      var s = t(9);
      l.exports = s.setTimeout;
    }, function(l, o, t) {
      var s = t(5), f = t(8), d = t(84), c = [].slice, m = /MSIE .\./.test(d), E = function(D) {
        return function(C, h) {
          var x = arguments.length > 2, S = x ? c.call(arguments, 2) : void 0;
          return D(x ? function() {
            (typeof C == "function" ? C : Function(C)).apply(this, S);
          } : C, h);
        };
      };
      s({ global: !0, bind: !0, forced: m }, {
        setTimeout: E(f.setTimeout),
        setInterval: E(f.setInterval)
      });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(127));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(272)), E = c.__importDefault(t(273)), A = c.__importDefault(t(128)), D = c.__importDefault(t(274)), C = c.__importDefault(t(275)), h = c.__importDefault(t(276)), x = c.__importDefault(t(129)), S = c.__importDefault(t(277)), g = c.__importDefault(t(278)), b = c.__importDefault(t(279)), w = (0, d.default)(
        {},
        m.default,
        E.default,
        A.default,
        C.default,
        D.default,
        h.default,
        x.default,
        S.default,
        g.default,
        b.default,
        { linkCheck: function(T, M) {
          return !0;
        } }
      );
      o.default = w;
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
      var s = t(14), f = t(11), d = t(52), c = t(126), m = t(59), E = t(29), A = t(72), D = Object.assign, C = Object.defineProperty;
      l.exports = !D || f(function() {
        if (s && D({ b: 1 }, D(C({}, "a", { enumerable: !0, get: function() {
          C(this, "b", { value: 3, enumerable: !1 });
        } }), { b: 2 })).b !== 1)
          return !0;
        var h = {}, x = {}, S = Symbol(), g = "abcdefghijklmnopqrst";
        return h[S] = 7, g.split("").forEach(function(b) {
          x[b] = b;
        }), D({}, h)[S] != 7 || d(D({}, x)).join("") != g;
      }) ? function(x, S) {
        for (var g = E(x), b = arguments.length, w = 1, p = c.f, T = m.f; b > w; )
          for (var M = A(arguments[w++]), N = p ? d(M).concat(p(M)) : d(M), U = N.length, O = 0, B; U > O; )
            B = N[O++], (!s || T.call(M, B)) && (g[B] = M[B]);
        return g;
      } : D;
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
      function c(m, E, A) {
        window.alert(m), A && console.error("wangEditor: " + A);
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
        linkImgCheck: function(m, E, A) {
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
      var c = t(2), m = c.__importDefault(t(3)), E = t(6), A = t(7), D = function() {
        function C(h) {
          this._currentRange = null, this.editor = h;
        }
        return C.prototype.getRange = function() {
          return this._currentRange;
        }, C.prototype.saveRange = function(h) {
          if (h) {
            this._currentRange = h;
            return;
          }
          var x = window.getSelection();
          if (x.rangeCount !== 0) {
            var S = x.getRangeAt(0), g = this.getSelectionContainerElem(S);
            if (!!(g != null && g.length) && !(g.attr("contenteditable") === "false" || g.parentUntil("[contenteditable=false]"))) {
              var b = this.editor, w = b.$textElem;
              if (w.isContain(g)) {
                if (w.elems[0] === g.elems[0]) {
                  var p;
                  if ((0, d.default)(p = w.html()).call(p) === A.EMPTY_P) {
                    var T = w.children(), M = T == null ? void 0 : T.last();
                    b.selection.createRangeByElem(M, !0, !0), b.selection.restoreSelection();
                  }
                }
                this._currentRange = S;
              }
            }
          }
        }, C.prototype.collapseRange = function(h) {
          h === void 0 && (h = !1);
          var x = this._currentRange;
          x && x.collapse(h);
        }, C.prototype.getSelectionText = function() {
          var h = this._currentRange;
          return h ? h.toString() : "";
        }, C.prototype.getSelectionContainerElem = function(h) {
          var x;
          x = h || this._currentRange;
          var S;
          if (x)
            return S = x.commonAncestorContainer, m.default(S.nodeType === 1 ? S : S.parentNode);
        }, C.prototype.getSelectionStartElem = function(h) {
          var x;
          x = h || this._currentRange;
          var S;
          if (x)
            return S = x.startContainer, m.default(S.nodeType === 1 ? S : S.parentNode);
        }, C.prototype.getSelectionEndElem = function(h) {
          var x;
          x = h || this._currentRange;
          var S;
          if (x)
            return S = x.endContainer, m.default(S.nodeType === 1 ? S : S.parentNode);
        }, C.prototype.isSelectionEmpty = function() {
          var h = this._currentRange;
          return !!(h && h.startContainer && h.startContainer === h.endContainer && h.startOffset === h.endOffset);
        }, C.prototype.restoreSelection = function() {
          var h = window.getSelection(), x = this._currentRange;
          h && x && (h.removeAllRanges(), h.addRange(x));
        }, C.prototype.createEmptyRange = function() {
          var h = this.editor, x = this.getRange(), S;
          if (!!x && !!this.isSelectionEmpty())
            try {
              E.UA.isWebkit() ? (h.cmd.do("insertHTML", "&#8203;"), x.setEnd(x.endContainer, x.endOffset + 1), this.saveRange(x)) : (S = m.default("<strong>&#8203;</strong>"), h.cmd.do("insertElem", S), this.createRangeByElem(S, !0));
            } catch {
            }
        }, C.prototype.createRangeByElems = function(h, x) {
          var S = window.getSelection ? window.getSelection() : document.getSelection();
          S == null || S.removeAllRanges();
          var g = document.createRange();
          g.setStart(h, 0), g.setEnd(x, x.childNodes.length || 1), this.saveRange(g), this.restoreSelection();
        }, C.prototype.createRangeByElem = function(h, x, S) {
          if (!!h.length) {
            var g = h.elems[0], b = document.createRange();
            S ? b.selectNodeContents(g) : b.selectNode(g), x != null && (b.collapse(x), x || (this.saveRange(b), this.editor.selection.moveCursor(g))), this.saveRange(b);
          }
        }, C.prototype.getSelectionRangeTopNodes = function() {
          var h, x, S, g = (h = this.getSelectionStartElem()) === null || h === void 0 ? void 0 : h.getNodeTop(this.editor), b = (x = this.getSelectionEndElem()) === null || x === void 0 ? void 0 : x.getNodeTop(this.editor);
          return S = this.recordSelectionNodes(m.default(g), m.default(b)), S;
        }, C.prototype.moveCursor = function(h, x) {
          var S, g = this.getRange(), b = h.nodeType === 3 ? (S = h.nodeValue) === null || S === void 0 ? void 0 : S.length : h.childNodes.length;
          (E.UA.isFirefox || E.UA.isIE()) && b !== 0 && (h.nodeType === 3 || h.childNodes[b - 1].nodeName === "BR") && (b = b - 1);
          var w = x != null ? x : b;
          !g || h && (g.setStart(h, w), g.setEnd(h, w), this.restoreSelection());
        }, C.prototype.getCursorPos = function() {
          var h = window.getSelection();
          return h == null ? void 0 : h.anchorOffset;
        }, C.prototype.clearWindowSelectionRange = function() {
          var h = window.getSelection();
          h && h.removeAllRanges();
        }, C.prototype.recordSelectionNodes = function(h, x) {
          var S = [], g = !0;
          try {
            for (var b = h, w = this.editor.$textElem; g; ) {
              var p = b == null ? void 0 : b.getNodeTop(this.editor);
              p.getNodeName() === "BODY" && (g = !1), p.length > 0 && (S.push(m.default(b)), (x == null ? void 0 : x.equal(p)) || w.equal(p) ? g = !1 : b = p.getNextSibling());
            }
          } catch {
            g = !1;
          }
          return S;
        }, C.prototype.setRangeToElem = function(h) {
          var x = this.getRange();
          x == null || x.setStart(h, 0), x == null || x.setEnd(h, 0);
        }, C;
      }();
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = function() {
        function E(A) {
          this.editor = A;
        }
        return E.prototype.do = function(A, D) {
          var C = this.editor;
          C.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
          var h = C.selection;
          if (!!h.getRange()) {
            switch (h.restoreSelection(), A) {
              case "insertHTML":
                this.insertHTML(D);
                break;
              case "insertElem":
                this.insertElem(D);
                break;
              default:
                this.execCommand(A, D);
                break;
            }
            C.menus.changeActive(), h.saveRange(), h.restoreSelection();
          }
        }, E.prototype.insertHTML = function(A) {
          var D = this.editor, C = D.selection.getRange();
          if (C != null) {
            if (this.queryCommandSupported("insertHTML"))
              this.execCommand("insertHTML", A);
            else if (C.insertNode) {
              if (C.deleteContents(), c.default(A).elems.length > 0)
                C.insertNode(c.default(A).elems[0]);
              else {
                var h = document.createElement("p");
                h.appendChild(document.createTextNode(A)), C.insertNode(h);
              }
              D.selection.collapseRange();
            }
          }
        }, E.prototype.insertElem = function(A) {
          var D = this.editor, C = D.selection.getRange();
          C != null && C.insertNode && (C.deleteContents(), C.insertNode(A.elems[0]));
        }, E.prototype.execCommand = function(A, D) {
          document.execCommand(A, !1, D);
        }, E.prototype.queryCommandValue = function(A) {
          return document.queryCommandValue(A);
        }, E.prototype.queryCommandState = function(A) {
          return document.queryCommandState(A);
        }, E.prototype.queryCommandSupported = function(A) {
          return document.queryCommandSupported(A);
        }, E;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31)), c = s(t(4)), m = s(t(17)), E = s(t(27)), A = s(t(46));
      (0, f.default)(o, "__esModule", { value: !0 });
      var D = t(2), C = D.__importDefault(t(3)), h = D.__importDefault(t(287)), x = t(6), S = D.__importDefault(t(299)), g = D.__importDefault(t(300)), b = t(7), w = function() {
        function p(T) {
          this.editor = T, this.eventHooks = { onBlurEvents: [], changeEvents: [], dropEvents: [], clickEvents: [], keydownEvents: [], keyupEvents: [], tabUpEvents: [], tabDownEvents: [], enterUpEvents: [], enterDownEvents: [], deleteUpEvents: [], deleteDownEvents: [], pasteEvents: [], linkClickEvents: [], codeClickEvents: [], textScrollEvents: [], toolbarClickEvents: [], imgClickEvents: [], imgDragBarMouseDownEvents: [], tableClickEvents: [], menuClickEvents: [], dropListMenuHoverEvents: [], splitLineEvents: [], videoClickEvents: [] };
        }
        return p.prototype.init = function() {
          this._saveRange(), this._bindEventHooks(), h.default(this);
        }, p.prototype.togglePlaceholder = function() {
          var T, M = this.html(), N = (0, d.default)(T = this.editor.$textContainerElem).call(T, ".placeholder");
          N.hide(), !this.editor.isComposing && (!M || M === " ") && N.show();
        }, p.prototype.clear = function() {
          this.html(b.EMPTY_P);
        }, p.prototype.html = function(T) {
          var M = this.editor, N = M.$textElem;
          if (T == null) {
            var U = N.html();
            U = U.replace(/\u200b/gm, ""), U = U.replace(/<p><\/p>/gim, ""), U = U.replace(b.EMPTY_P_LAST_REGEX, ""), U = U.replace(b.EMPTY_P_REGEX, "<p>");
            var O = U.match(/<(img|br|hr|input)[^>]*>/gi);
            return O !== null && (0, c.default)(O).call(O, function(B) {
              B.match(/\/>/) || (U = U.replace(B, B.substring(0, B.length - 1) + "/>"));
            }), U;
          }
          T = (0, m.default)(T).call(T), T === "" && (T = b.EMPTY_P), (0, E.default)(T).call(T, "<") !== 0 && (T = "<p>" + T + "</p>"), N.html(T), M.initSelection();
        }, p.prototype.setJSON = function(T) {
          var M = g.default(T).children(), N = this.editor, U = N.$textElem;
          !M || U.replaceChildAll(M);
        }, p.prototype.getJSON = function() {
          var T = this.editor, M = T.$textElem;
          return S.default(M);
        }, p.prototype.text = function(T) {
          var M = this.editor, N = M.$textElem;
          if (T == null) {
            var U = N.text();
            return U = U.replace(/\u200b/gm, ""), U;
          }
          N.text("<p>" + T + "</p>"), M.initSelection();
        }, p.prototype.append = function(T) {
          var M = this.editor;
          (0, E.default)(T).call(T, "<") !== 0 && (T = "<p>" + T + "</p>"), this.html(this.html() + T), M.initSelection();
        }, p.prototype._saveRange = function() {
          var T = this.editor, M = T.$textElem, N = C.default(document);
          function U() {
            T.selection.saveRange(), T.menus.changeActive();
          }
          M.on("keyup", U);
          function O() {
            U(), M.off("click", O);
          }
          M.on("click", O);
          function B() {
            U(), N.off("mouseup", B);
          }
          function P() {
            N.on("mouseup", B), M.off("mouseleave", P);
          }
          M.on("mousedown", function() {
            M.on("mouseleave", P);
          }), M.on("mouseup", function(z) {
            M.off("mouseleave", P), (0, A.default)(function() {
              var H = T.selection, j = H.getRange();
              j !== null && U();
            }, 0);
          });
        }, p.prototype._bindEventHooks = function() {
          var T = this.editor, M = T.$textElem, N = this.eventHooks;
          M.on("click", function(O) {
            var B = N.clickEvents;
            (0, c.default)(B).call(B, function(P) {
              return P(O);
            });
          }), M.on("keyup", function(O) {
            if (O.keyCode === 13) {
              var B = N.enterUpEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on("keyup", function(O) {
            var B = N.keyupEvents;
            (0, c.default)(B).call(B, function(P) {
              return P(O);
            });
          }), M.on("keydown", function(O) {
            var B = N.keydownEvents;
            (0, c.default)(B).call(B, function(P) {
              return P(O);
            });
          }), M.on("keyup", function(O) {
            if (!(O.keyCode !== 8 && O.keyCode !== 46)) {
              var B = N.deleteUpEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on("keydown", function(O) {
            if (!(O.keyCode !== 8 && O.keyCode !== 46)) {
              var B = N.deleteDownEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on("paste", function(O) {
            if (!x.UA.isIE()) {
              O.preventDefault();
              var B = N.pasteEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on("keydown", function(O) {
            (T.isFocus || T.isCompatibleMode) && (O.ctrlKey || O.metaKey) && O.keyCode === 90 && (O.preventDefault(), O.shiftKey ? T.history.restore() : T.history.revoke());
          }), M.on("keyup", function(O) {
            if (O.keyCode === 9) {
              O.preventDefault();
              var B = N.tabUpEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on("keydown", function(O) {
            if (O.keyCode === 9) {
              O.preventDefault();
              var B = N.tabDownEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on(
            "scroll",
            x.throttle(function(O) {
              var B = N.textScrollEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }, 100)
          );
          function U(O) {
            O.preventDefault();
          }
          C.default(document).on("dragleave", U).on("drop", U).on("dragenter", U).on("dragover", U), T.beforeDestroy(function() {
            C.default(document).off("dragleave", U).off("drop", U).off("dragenter", U).off("dragover", U);
          }), M.on("drop", function(O) {
            O.preventDefault();
            var B = N.dropEvents;
            (0, c.default)(B).call(B, function(P) {
              return P(O);
            });
          }), M.on("click", function(O) {
            var B = null, P = O.target, z = C.default(P);
            if (z.getNodeName() === "A")
              B = z;
            else {
              var H = z.parentUntil("a");
              H != null && (B = H);
            }
            if (!!B) {
              var j = N.linkClickEvents;
              (0, c.default)(j).call(j, function(I) {
                return I(B);
              });
            }
          }), M.on("click", function(O) {
            var B = null, P = O.target, z = C.default(P);
            if (z.getNodeName() === "IMG" && !z.elems[0].getAttribute("data-emoji") && (O.stopPropagation(), B = z), !!B) {
              var H = N.imgClickEvents;
              (0, c.default)(H).call(H, function(j) {
                return j(B);
              });
            }
          }), M.on("click", function(O) {
            var B = null, P = O.target, z = C.default(P);
            if (z.getNodeName() === "PRE")
              B = z;
            else {
              var H = z.parentUntil("pre");
              H !== null && (B = H);
            }
            if (!!B) {
              var j = N.codeClickEvents;
              (0, c.default)(j).call(j, function(I) {
                return I(B);
              });
            }
          }), M.on("click", function(O) {
            var B = null, P = O.target, z = C.default(P);
            if (z.getNodeName() === "HR" && (B = z), !!B) {
              T.selection.createRangeByElem(B), T.selection.restoreSelection();
              var H = N.splitLineEvents;
              (0, c.default)(H).call(H, function(j) {
                return j(B);
              });
            }
          }), T.$toolbarElem.on("click", function(O) {
            var B = N.toolbarClickEvents;
            (0, c.default)(B).call(B, function(P) {
              return P(O);
            });
          }), T.$textContainerElem.on("mousedown", function(O) {
            var B = O.target, P = C.default(B);
            if (P.hasClass("w-e-img-drag-rb")) {
              var z = N.imgDragBarMouseDownEvents;
              (0, c.default)(z).call(z, function(H) {
                return H();
              });
            }
          }), M.on("click", function(O) {
            var B = null, P = O.target;
            if (B = C.default(P).parentUntilEditor("TABLE", T, P), !!B) {
              var z = N.tableClickEvents;
              (0, c.default)(z).call(z, function(H) {
                return H(B, O);
              });
            }
          }), M.on("keydown", function(O) {
            if (O.keyCode === 13) {
              var B = N.enterDownEvents;
              (0, c.default)(B).call(B, function(P) {
                return P(O);
              });
            }
          }), M.on("click", function(O) {
            var B = null, P = O.target, z = C.default(P);
            if (z.getNodeName() === "VIDEO" && (O.stopPropagation(), B = z), !!B) {
              var H = N.videoClickEvents;
              (0, c.default)(H).call(H, function(j) {
                return j(B);
              });
            }
          });
        }, p;
      }();
      o.default = w;
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
      var s = t(5), f = t(30).find, d = t(82), c = t(22), m = "find", E = !0, A = c(m);
      m in [] && Array(1)[m](function() {
        E = !1;
      }), s({ target: "Array", proto: !0, forced: E || !A }, { find: function(C) {
        return f(this, C, arguments.length > 1 ? arguments[1] : void 0);
      } }), d(m);
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(288)), m = d.__importStar(t(289)), E = d.__importDefault(t(290)), A = d.__importDefault(t(291)), D = d.__importDefault(t(298));
      function C(h) {
        var x = h.editor, S = h.eventHooks;
        c.default(x, S.enterUpEvents, S.enterDownEvents), m.default(x, S.deleteUpEvents, S.deleteDownEvents), m.cutToKeepP(x, S.keyupEvents), E.default(x, S.tabDownEvents), A.default(x, S.pasteEvents), D.default(x, S.imgClickEvents);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(7), E = c.__importDefault(t(3));
      function A(D, C, h) {
        function x(b) {
          var w, p = E.default(m.EMPTY_P);
          if (p.insertBefore(b), (0, d.default)(w = b.html()).call(w, "<img") >= 0) {
            p.remove();
            return;
          }
          D.selection.createRangeByElem(p, !0, !0), D.selection.restoreSelection(), b.remove();
        }
        function S() {
          var b = D.$textElem, w = D.selection.getSelectionContainerElem(), p = w.parent();
          if (p.html() === "<code><br></code>") {
            x(p);
            return;
          }
          if (w.getNodeName() === "FONT" && w.text() === "" && w.attr("face") === "monospace") {
            x(p);
            return;
          }
          if (!!p.equal(b)) {
            var T = w.getNodeName();
            T === "P" && w.attr("data-we-empty-p") === null || w.text() || x(w);
          }
        }
        C.push(S);
        function g(b) {
          var w;
          D.selection.saveRange((w = getSelection()) === null || w === void 0 ? void 0 : w.getRangeAt(0));
          var p = D.selection.getSelectionContainerElem();
          p.id === D.textElemId && (b.preventDefault(), D.cmd.do("insertHTML", "<p><br></p>"));
        }
        h.push(g);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17)), c = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 }), o.cutToKeepP = void 0;
      var m = t(2), E = t(7), A = m.__importDefault(t(3));
      function D(h, x, S) {
        function g() {
          var w = h.$textElem, p = h.$textElem.html(), T = h.$textElem.text(), M = (0, d.default)(p).call(p), N = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', E.EMPTY_P];
          /^\s*$/.test(T) && (!M || (0, c.default)(N).call(N, M)) && (w.html(E.EMPTY_P), h.selection.createRangeByElem(w, !1, !0), h.selection.restoreSelection(), h.selection.moveCursor(w.getNode(), 0));
        }
        x.push(g);
        function b(w) {
          var p, T = h.$textElem, M = (0, d.default)(p = T.html().toLowerCase()).call(p);
          if (M === E.EMPTY_P) {
            w.preventDefault();
            return;
          }
        }
        S.push(b);
      }
      function C(h, x) {
        function S(g) {
          var b;
          if (g.keyCode === 88) {
            var w = h.$textElem, p = (0, d.default)(b = w.html().toLowerCase()).call(b);
            if (!p || p === "<br>") {
              var T = A.default(E.EMPTY_P);
              w.html(" "), w.append(T), h.selection.createRangeByElem(T, !1, !0), h.selection.restoreSelection(), h.selection.moveCursor(T.getNode(), 0);
            }
          }
        }
        x.push(S);
      }
      o.cutToKeepP = C, o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c, m) {
        function E() {
          if (!!c.cmd.queryCommandSupported("insertHTML")) {
            var A = c.selection.getSelectionContainerElem();
            if (!!A) {
              var D = A.parent(), C = A.getNodeName(), h = D.getNodeName();
              C == "CODE" || h === "CODE" || h === "PRE" || /hljs/.test(h) ? c.cmd.do("insertHTML", c.config.languageTab) : c.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
          }
        }
        m.push(E);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(130), m = t(6), E = t(7);
      function A(S) {
        var g, b = (0, d.default)(g = S.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(g), w = document.createElement("div");
        return w.innerHTML = b, w.innerHTML.replace(/<p><\/p>/gim, "");
      }
      function D(S) {
        var g = S.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
        return g;
      }
      function C(S) {
        var g;
        if (S === "")
          return !1;
        var b = document.createElement("div");
        return b.innerHTML = S, ((g = b.firstChild) === null || g === void 0 ? void 0 : g.nodeName) === "P";
      }
      function h(S) {
        if (!(S != null && S.length))
          return !1;
        var g = S.elems[0];
        return g.nodeName === "P" && g.innerHTML === "<br>";
      }
      function x(S, g) {
        function b(w) {
          var p = S.config, T = p.pasteFilterStyle, M = p.pasteIgnoreImg, N = p.pasteTextHandle, U = c.getPasteHtml(w, T, M), O = c.getPasteText(w);
          O = O.replace(/\n/gm, "<br>");
          var B = S.selection.getSelectionContainerElem();
          if (!!B) {
            var P = B == null ? void 0 : B.getNodeName(), z = B == null ? void 0 : B.getNodeTop(S), H = "";
            if (z.elems[0] && (H = z == null ? void 0 : z.getNodeName()), P === "CODE" || H === "PRE") {
              N && m.isFunction(N) && (O = "" + (N(O) || "")), S.cmd.do("insertHTML", D(O));
              return;
            }
            if (E.urlRegex.test(O) && T) {
              N && m.isFunction(N) && (O = "" + (N(O) || ""));
              var j = E.urlRegex.exec(O)[0], I = O.replace(E.urlRegex, "");
              return S.cmd.do("insertHTML", '<a href="' + j + '" target="_blank">' + j + "</a>" + I);
            }
            if (!!U)
              try {
                N && m.isFunction(N) && (U = "" + (N(U) || ""));
                var V = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(U);
                if (V && T)
                  S.cmd.do("insertHTML", "" + A(O));
                else {
                  var k = A(U);
                  if (C(k)) {
                    var K = S.$textElem;
                    if (S.cmd.do("insertHTML", k), K.equal(B)) {
                      S.selection.createEmptyRange();
                      return;
                    }
                    h(z) && z.remove();
                  } else {
                    var q = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;
                    q.test(k) || S.cmd.do("insertHTML", k);
                  }
                }
              } catch {
                N && m.isFunction(N) && (O = "" + (N(O) || "")), S.cmd.do("insertHTML", "" + A(O));
              }
          }
        }
        g.push(b);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17)), c = s(t(4)), m = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 });
      var E = t(2), A = t(293), D = E.__importDefault(t(297));
      function C(b) {
        var w = /<span>.*?<\/span>/gi, p = /<span>(.*?)<\/span>/;
        return b.replace(w, function(T) {
          var M = T.match(p);
          return M == null ? "" : M[1];
        });
      }
      function h(b, w) {
        var p;
        return b = (0, d.default)(p = b.toLowerCase()).call(p), !!(A.IGNORE_TAGS.has(b) || w && b === "img");
      }
      function x(b, w) {
        var p = "";
        p = "<" + b;
        var T = [];
        (0, c.default)(w).call(w, function(N) {
          T.push(N.name + '="' + N.value + '"');
        }), T.length > 0 && (p = p + " " + T.join(" "));
        var M = A.EMPTY_TAGS.has(b);
        return p = p + (M ? "/" : "") + ">", p;
      }
      function S(b) {
        return "</" + b + ">";
      }
      function g(b, w, p) {
        w === void 0 && (w = !0), p === void 0 && (p = !1);
        var T = [], M = "";
        function N(P) {
          P = (0, d.default)(P).call(P), P && (A.EMPTY_TAGS.has(P) || (M = P));
        }
        function U() {
          M = "";
        }
        var O = new D.default();
        O.parse(b, { startElement: function(z, H) {
          if (N(z), !h(z, p)) {
            var j = A.NECESSARY_ATTRS.get(z) || [], I = [];
            (0, c.default)(H).call(H, function(k) {
              var K = k.name;
              if (K === "style") {
                w || I.push(k);
                return;
              }
              (0, m.default)(j).call(j, K) !== !1 && I.push(k);
            });
            var V = x(z, I);
            T.push(V);
          }
        }, characters: function(z) {
          !z || h(M, p) || T.push(z);
        }, endElement: function(z) {
          if (!h(z, p)) {
            var H = S(z);
            T.push(H), U();
          }
        }, comment: function(z) {
          N(z);
        } });
        var B = T.join("");
        return B = C(B), B;
      }
      o.default = g;
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
          for (var c, m, E, A = !1, D = this; f.length > 0; )
            f.substring(0, 4) == "<!--" ? (E = f.indexOf("-->"), E != -1 ? (this.contentHandler.comment(f.substring(4, E)), f = f.substring(E + 3), A = !1) : A = !0) : f.substring(0, 2) == "</" ? this.endTagRe.test(f) ? (c = RegExp.lastMatch, m = RegExp.rightContext, c.replace(this.endTagRe, function() {
              return D.parseEndTag.apply(D, arguments);
            }), f = m, A = !1) : A = !0 : f.charAt(0) == "<" && (this.startTagRe.test(f) ? (c = RegExp.lastMatch, m = RegExp.rightContext, c.replace(this.startTagRe, function() {
              return D.parseStartTag.apply(D, arguments);
            }), f = m, A = !1) : A = !0), A && (E = f.indexOf("<"), E == -1 ? (this.contentHandler.characters(f), f = "") : (this.contentHandler.characters(f.substring(0, E)), f = f.substring(E))), A = !0;
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
          return d.replace(this.attrRe, function(E, A, D, C, h, x, S, g) {
            m.push(c.parseAttribute(f, E, A, D, C, h, x, S, g));
          }), m;
        },
        parseAttribute: function(f, d, c) {
          var m = "";
          arguments[7] ? m = arguments[8] : arguments[5] ? m = arguments[6] : arguments[3] && (m = arguments[4]);
          var E = !m && !arguments[3];
          return { name: c, value: E ? null : m };
        }
      }, l.exports = t;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c, m) {
        function E(A) {
          c.selection.createRangeByElem(A), c.selection.restoreSelection();
        }
        m.push(E);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), E = c.__importDefault(t(3));
      function A(D) {
        var C = [], h = D.childNodes() || [];
        return (0, d.default)(h).call(h, function(x) {
          var S, g = x.nodeType;
          if (g === 3 && (S = x.textContent || "", S = m.replaceHtmlSymbol(S)), g === 1) {
            S = {}, S = S, S.tag = x.nodeName.toLowerCase();
            for (var b = [], w = x.attributes, p = w.length || 0, T = 0; T < p; T++) {
              var M = w[T];
              b.push({ name: M.name, value: M.value });
            }
            S.attrs = b, S.children = A(E.default(x));
          }
          S && C.push(S);
        }), C;
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(92)), d = s(t(1)), c = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3));
      function A(D, C) {
        C === void 0 && (C = document.createElement("div"));
        var h = C;
        return (0, c.default)(D).call(D, function(x) {
          var S;
          if (typeof x == "string" && (S = document.createTextNode(x)), (0, f.default)(x) === "object") {
            var g;
            S = document.createElement(x.tag), (0, c.default)(g = x.attrs).call(g, function(b) {
              E.default(S).attr(b.name, b.value);
            }), x.children && x.children.length > 0 && A(x.children, S.getRootNode());
          }
          S && h.appendChild(S);
        }), E.default(h);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(89)), c = s(t(70)), m = s(t(44)), E = s(t(302)), A = s(t(4)), D = s(t(94)), C = s(t(132)), h = s(t(46)), x = s(t(57));
      (0, f.default)(o, "__esModule", { value: !0 });
      var S = t(2), g = S.__importDefault(t(87)), b = S.__importDefault(t(314)), w = S.__importDefault(t(3)), p = function() {
        function T(M) {
          this.editor = M, this.menuList = [], this.constructorList = b.default;
        }
        return T.prototype.extend = function(M, N) {
          !N || typeof N != "function" || (this.constructorList[M] = N);
        }, T.prototype.init = function() {
          var M, N, U = this, O = this.editor.config, B = O.excludeMenus;
          (0, d.default)(B) === !1 && (B = []), O.menus = (0, c.default)(M = O.menus).call(M, function(K) {
            return (0, m.default)(B).call(B, K) === !1;
          });
          var P = (0, E.default)(g.default.globalCustomMenuConstructorList);
          P = (0, c.default)(P).call(P, function(K) {
            return (0, m.default)(B).call(B, K);
          }), (0, A.default)(P).call(P, function(K) {
            delete g.default.globalCustomMenuConstructorList[K];
          }), (0, A.default)(N = O.menus).call(N, function(K) {
            var q = U.constructorList[K];
            U._initMenuList(K, q);
          });
          for (var z = 0, H = (0, D.default)(g.default.globalCustomMenuConstructorList); z < H.length; z++) {
            var j = H[z], I = j[0], V = j[1], k = V;
            this._initMenuList(I, k);
          }
          this._addToToolbar(), O.showMenuTooltips && this._bindMenuTooltips();
        }, T.prototype._initMenuList = function(M, N) {
          var U;
          if (!(N == null || typeof N != "function"))
            if ((0, C.default)(U = this.menuList).call(U, function(B) {
              return B.key === M;
            }))
              console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + M);
            else {
              var O = new N(this.editor);
              O.key = M, this.menuList.push(O);
            }
        }, T.prototype._bindMenuTooltips = function() {
          var M = this.editor, N = M.$toolbarElem, U = M.config, O = U.menuTooltipPosition, B = w.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + O + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
          B.css("visibility", "hidden"), N.append(B), B.css("z-index", M.zIndex.get("tooltip"));
          var P = 0;
          function z() {
            P && clearTimeout(P);
          }
          function H() {
            z(), B.css("visibility", "hidden");
          }
          N.on("mouseover", function(j) {
            var I = j.target, V = w.default(I), k, K;
            if (V.isContain(N)) {
              H();
              return;
            }
            if (V.parentUntil(".w-e-droplist") != null)
              H();
            else if (V.attr("data-title"))
              k = V.attr("data-title"), K = V;
            else {
              var q = V.parentUntil(".w-e-menu");
              q != null && (k = q.attr("data-title"), K = q);
            }
            if (k && K) {
              z();
              var X = K.getOffsetData();
              B.text(M.i18next.t("menus.title." + k));
              var _ = B.getOffsetData(), le = X.left + X.width / 2 - _.width / 2;
              B.css("left", le + "px"), O === "up" ? B.css("top", X.top - _.height - 8 + "px") : O === "down" && B.css("top", X.top + X.height + 8 + "px"), P = (0, h.default)(function() {
                B.css("visibility", "visible");
              }, 200);
            } else
              H();
          }).on("mouseleave", function() {
            H();
          });
        }, T.prototype._addToToolbar = function() {
          var M, N = this.editor, U = N.$toolbarElem;
          (0, A.default)(M = this.menuList).call(M, function(O) {
            var B = O.$elem;
            B && U.append(B);
          });
        }, T.prototype.menuFind = function(M) {
          for (var N = this.menuList, U = 0, O = N.length; U < O; U++)
            if (N[U].key === M)
              return N[U];
          return N[0];
        }, T.prototype.changeActive = function() {
          var M;
          (0, A.default)(M = this.menuList).call(M, function(N) {
            var U;
            (0, h.default)((0, x.default)(U = N.tryChangeActive).call(U, N), 100);
          });
        }, T;
      }();
      o.default = p;
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
      s({ target: "Object", stat: !0, forced: m }, { keys: function(A) {
        return d(f(A));
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
      var s = t(14), f = t(52), d = t(28), c = t(59).f, m = function(A) {
        return function(D) {
          for (var C = d(D), h = f(C), x = h.length, S = 0, g = [], b; x > S; )
            b = h[S++], (!s || c.call(C, b)) && g.push(A ? [b, C[b]] : C[b]);
          return g;
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
      var s = t(5), f = t(30).some, d = t(67), c = t(22), m = d("some"), E = c("some");
      s({ target: "Array", proto: !0, forced: !m || !E }, { some: function(D) {
        return f(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(315)), m = d.__importDefault(t(316)), E = d.__importDefault(t(321)), A = d.__importDefault(t(326)), D = d.__importDefault(t(327)), C = d.__importDefault(t(328)), h = d.__importDefault(t(329)), x = d.__importDefault(t(331)), S = d.__importDefault(t(333)), g = d.__importDefault(t(334)), b = d.__importDefault(t(337)), w = d.__importDefault(t(338)), p = d.__importDefault(t(339)), T = d.__importDefault(t(350)), M = d.__importDefault(t(365)), N = d.__importDefault(t(369)), U = d.__importDefault(t(137)), O = d.__importDefault(t(378)), B = d.__importDefault(t(380)), P = d.__importDefault(t(381)), z = d.__importDefault(t(382)), H = d.__importDefault(t(401)), j = d.__importDefault(t(406)), I = d.__importDefault(t(409));
      o.default = { bold: c.default, head: m.default, italic: A.default, link: E.default, underline: D.default, strikeThrough: C.default, fontName: h.default, fontSize: x.default, justify: S.default, quote: g.default, backColor: b.default, foreColor: w.default, video: p.default, image: T.default, indent: M.default, emoticon: N.default, list: U.default, lineHeight: O.default, undo: B.default, redo: P.default, table: z.default, code: H.default, splitLine: j.default, todo: I.default };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), E = function(A) {
        d.__extends(D, A);
        function D(C) {
          var h = this, x = m.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
          return h = A.call(this, x, C) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var C = this.editor, h = C.selection.isSelectionEmpty();
          h && C.selection.createEmptyRange(), C.cmd.do("bold"), h && (C.selection.collapseRange(), C.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var C = this.editor;
          C.cmd.queryCommandState("bold") ? this.active() : this.unActive();
        }, D;
      }(c.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(27)), c = s(t(31)), m = s(t(4)), E = s(t(317)), A = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 });
      var D = t(2), C = D.__importDefault(t(24)), h = D.__importDefault(t(3)), x = t(6), S = t(7), g = function(b) {
        D.__extends(w, b);
        function w(p) {
          var T = this, M = h.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), N = { width: 100, title: "\u8BBE\u7F6E\u6807\u9898", type: "list", list: [{ $elem: h.default("<h1>H1</h1>"), value: "<h1>" }, { $elem: h.default("<h2>H2</h2>"), value: "<h2>" }, { $elem: h.default("<h3>H3</h3>"), value: "<h3>" }, { $elem: h.default("<h4>H4</h4>"), value: "<h4>" }, { $elem: h.default("<h5>H5</h5>"), value: "<h5>" }, { $elem: h.default("<p>" + p.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"), value: "<p>" }], clickHandler: function(B) {
            T.command(B);
          } };
          T = b.call(this, M, p, N) || this;
          var U = p.config.onCatalogChange;
          return U && (T.oldCatalogs = [], T.addListenerCatalog(), T.getCatalogs()), T;
        }
        return w.prototype.command = function(p) {
          var T = this.editor, M = T.selection.getSelectionContainerElem();
          if (M && T.$textElem.equal(M))
            this.setMultilineHead(p);
          else {
            var N;
            if ((0, d.default)(N = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(N, h.default(M).getNodeName()) > -1)
              return;
            T.cmd.do("formatBlock", p);
          }
          p !== "<p>" && this.addUidForSelectionElem();
        }, w.prototype.addUidForSelectionElem = function() {
          var p = this.editor, T = p.selection.getSelectionContainerElem(), M = x.getRandomCode();
          h.default(T).attr("id", M);
        }, w.prototype.addListenerCatalog = function() {
          var p = this, T = this.editor;
          T.txt.eventHooks.changeEvents.push(function() {
            p.getCatalogs();
          });
        }, w.prototype.getCatalogs = function() {
          var p = this.editor, T = this.editor.$textElem, M = p.config.onCatalogChange, N = (0, c.default)(T).call(T, "h1,h2,h3,h4,h5"), U = [];
          (0, m.default)(N).call(N, function(O, B) {
            var P = h.default(O), z = P.attr("id"), H = P.getNodeName(), j = P.text();
            z || (z = x.getRandomCode(), P.attr("id", z)), j && U.push({ tag: H, id: z, text: j });
          }), (0, E.default)(this.oldCatalogs) !== (0, E.default)(U) && (this.oldCatalogs = U, M && M(U));
        }, w.prototype.setMultilineHead = function(p) {
          var T = this, M, N, U = this.editor, O = U.selection, B = (M = O.getSelectionContainerElem()) === null || M === void 0 ? void 0 : M.elems[0], P = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], z = h.default(O.getSelectionStartElem()), H = h.default(O.getSelectionEndElem());
          H.elems[0].outerHTML === h.default(S.EMPTY_P).elems[0].outerHTML && !H.elems[0].nextSibling && (H = H.prev());
          var j = [];
          j.push(z.getNodeTop(U));
          var I = [], V = (N = O.getRange()) === null || N === void 0 ? void 0 : N.commonAncestorContainer.childNodes;
          V == null || (0, m.default)(V).call(V, function(q, X) {
            q === j[0].getNode() && I.push(X), q === H.getNodeTop(U).getNode() && I.push(X);
          });
          for (var k = 0; j[k].getNode() !== H.getNodeTop(U).getNode(); ) {
            if (!j[k].elems[0])
              return;
            var K = h.default(j[k].next().getNode());
            j.push(K), k++;
          }
          j == null || (0, m.default)(j).call(j, function(q, X) {
            if (!T.hasTag(q, P)) {
              var _ = h.default(p), le = q.parent().getNode();
              _.html("" + q.html()), le.insertBefore(_.getNode(), q.getNode()), q.remove();
            }
          }), O.createRangeByElems(B.children[I[0]], B.children[I[1]]);
        }, w.prototype.hasTag = function(p, T) {
          var M = this, N;
          if (!p)
            return !1;
          if ((0, A.default)(T).call(T, p == null ? void 0 : p.getNodeName()))
            return !0;
          var U = !1;
          return (N = p.children()) === null || N === void 0 || (0, m.default)(N).call(N, function(O) {
            U = M.hasTag(h.default(O), T);
          }), U;
        }, w.prototype.tryChangeActive = function() {
          var p = this.editor, T = /^h/i, M = p.cmd.queryCommandValue("formatBlock");
          T.test(M) ? this.active() : this.unActive();
        }, w;
      }(C.default);
      o.default = g;
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
      var s = t(5), f = t(35), d = t(11), c = f("JSON", "stringify"), m = /[\uD800-\uDFFF]/g, E = /^[\uD800-\uDBFF]$/, A = /^[\uDC00-\uDFFF]$/, D = function(x, S, g) {
        var b = g.charAt(S - 1), w = g.charAt(S + 1);
        return E.test(x) && !A.test(w) || A.test(x) && !E.test(b) ? "\\u" + x.charCodeAt(0).toString(16) : x;
      }, C = d(function() {
        return c("\uDF06\uD834") !== '"\\udf06\\ud834"' || c("\uDEAD") !== '"\\udead"';
      });
      c && s({ target: "JSON", stat: !0, forced: C }, {
        stringify: function(x, S, g) {
          var b = c.apply(null, arguments);
          return typeof b == "string" ? b.replace(m, D) : b;
        }
      });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(37)), E = c.__importDefault(t(3)), A = c.__importDefault(t(322)), D = c.__importDefault(t(134)), C = c.__importDefault(t(32)), h = c.__importDefault(t(324)), x = t(7), S = function(g) {
        c.__extends(b, g);
        function b(w) {
          var p = this, T = E.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
          return p = g.call(this, T, w) || this, h.default(w), p;
        }
        return b.prototype.clickHandler = function() {
          var w = this.editor, p, T = w.selection.getSelectionContainerElem(), M = w.$textElem, N = M.html(), U = (0, d.default)(N).call(N);
          if (U === x.EMPTY_P) {
            var O = M.children();
            w.selection.createRangeByElem(O, !0, !0), T = w.selection.getSelectionContainerElem();
          }
          if (!(T && w.$textElem.equal(T)))
            if (this.isActive) {
              if (p = w.selection.getSelectionContainerElem(), !p)
                return;
              this.createPanel(p.text(), p.attr("href"));
            } else
              w.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(w.selection.getSelectionText(), "");
        }, b.prototype.createPanel = function(w, p) {
          var T = A.default(this.editor, w, p), M = new C.default(this, T);
          M.create();
        }, b.prototype.tryChangeActive = function() {
          var w = this.editor;
          D.default(w) ? this.active() : this.unActive();
        }, b;
      }(m.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), E = c.__importDefault(t(3)), A = c.__importDefault(t(134)), D = t(323);
      function C(h, x, S) {
        var g = m.getRandom("input-link"), b = m.getRandom("input-text"), w = m.getRandom("btn-ok"), p = m.getRandom("btn-del"), T = A.default(h) ? "inline-block" : "none", M;
        function N() {
          if (!!A.default(h)) {
            var z = h.selection.getSelectionContainerElem();
            !z || (h.selection.createRangeByElem(z), h.selection.restoreSelection(), M = z);
          }
        }
        function U(z, H) {
          var j = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
          z = z.replace(j, ""), A.default(h) && N(), h.cmd.do("insertHTML", '<a href="' + H + '" target="_blank">' + z + "</a>");
        }
        function O() {
          if (!!A.default(h)) {
            N();
            var z = M.text();
            h.cmd.do("insertHTML", "<span>" + z + "</span>");
          }
        }
        function B(z, H) {
          var j = h.config.linkCheck(z, H);
          if (j !== void 0) {
            if (j === !0)
              return !0;
            h.config.customAlert(j, "warning");
          }
          return !1;
        }
        var P = {
          width: 300,
          height: 0,
          tabs: [{
            title: h.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
            tpl: `<div>
                        <input
                            id="` + b + `"
                            type="text"
                            class="block"
                            value="` + x + `"
                            placeholder="` + h.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + g + `"
                            type="text"
                            class="block"
                            value="` + S + `"
                            placeholder="` + h.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + w + `" class="right">
                                ` + h.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + p + '" class="gray right" style="display:' + T + `">
                                ` + h.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + w, type: "click", fn: function() {
                var H, j, I, V;
                h.selection.restoreSelection();
                var k = h.selection.getSelectionRangeTopNodes()[0].getNode(), K = window.getSelection(), q = E.default("#" + g), X = E.default("#" + b), _ = (0, d.default)(H = q.val()).call(H), le = (0, d.default)(j = X.val()).call(j), be = "";
                K && !(K != null && K.isCollapsed) && (be = (I = D.insertHtml(K, k)) === null || I === void 0 ? void 0 : (0, d.default)(I).call(I));
                var ve = be == null ? void 0 : be.replace(/<.*?>/g, ""), ce = (V = ve == null ? void 0 : ve.length) !== null && V !== void 0 ? V : 0;
                if (ce <= le.length) {
                  var ae = le.substring(0, ce), re = le.substring(ce);
                  ve === ae && (le = be + re);
                }
                if (!!_ && (le || (le = _), !!B(le, _)))
                  return U(le, _), !0;
              }, bindEnter: !0 },
              { selector: "#" + p, type: "click", fn: function() {
                return O(), !0;
              } }
            ]
          }]
        };
        return P;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 }), o.insertHtml = o.createPartHtml = o.makeHtmlString = o.getTopNode = void 0;
      function c(h, x) {
        var S = h, g = h;
        do {
          if (S.textContent === x)
            break;
          g = S, S.parentNode && (S = S == null ? void 0 : S.parentNode);
        } while ((S == null ? void 0 : S.nodeName) !== "P");
        return g;
      }
      o.getTopNode = c;
      function m(h, x) {
        var S = h.nodeName, g = "";
        if (h.nodeType === 3 || /^(h|H)[1-6]$/.test(S))
          return x;
        if (h.nodeType === 1) {
          var b = h.getAttribute("style"), w = h.getAttribute("face"), p = h.getAttribute("color");
          b && (g = g + (' style="' + b + '"')), w && (g = g + (' face="' + w + '"')), p && (g = g + (' color="' + p + '"'));
        }
        return S = S.toLowerCase(), "<" + S + g + ">" + x + "</" + S + ">";
      }
      o.makeHtmlString = m;
      function E(h, x, S, g) {
        var b, w = (b = x.textContent) === null || b === void 0 ? void 0 : b.substring(S, g), p = x, T = "";
        do
          T = m(p, w != null ? w : ""), w = T, p = p == null ? void 0 : p.parentElement;
        while (p && p.textContent !== h);
        return T;
      }
      o.createPartHtml = E;
      function A(h, x) {
        var S, g, b, w, p, T = h.anchorNode, M = h.focusNode, N = h.anchorOffset, U = h.focusOffset, O = (S = x.textContent) !== null && S !== void 0 ? S : "", B = D(x), P = "", z = "", H = "", j = "", I = T, V = M, k = T;
        if (T != null && T.isEqualNode(M != null ? M : null)) {
          var K = E(O, T, N, U);
          return K = C(B, K), K;
        }
        for (T && (z = E(O, T, N != null ? N : 0)), M && (j = E(O, M, 0, U)), T && (I = c(T, O)), M && (V = c(M, O)), k = (g = I == null ? void 0 : I.nextSibling) !== null && g !== void 0 ? g : T; !(k != null && k.isEqualNode(V != null ? V : null)); ) {
          var q = k == null ? void 0 : k.nodeName;
          if (q === "#text")
            H = H + (k == null ? void 0 : k.textContent);
          else {
            var X = (w = (b = k == null ? void 0 : k.firstChild) === null || b === void 0 ? void 0 : b.parentElement) === null || w === void 0 ? void 0 : w.innerHTML;
            k && (H = H + m(k, X != null ? X : ""));
          }
          var _ = (p = k == null ? void 0 : k.nextSibling) !== null && p !== void 0 ? p : k;
          if (_ === k)
            break;
          k = _;
        }
        return P = "" + z + H + j, P = C(B, P), P;
      }
      o.insertHtml = A;
      function D(h) {
        for (var x, S = (x = h.textContent) !== null && x !== void 0 ? x : "", g = []; (h == null ? void 0 : h.textContent) === S; )
          h.nodeName !== "P" && h.nodeName !== "TABLE" && g.push(h), h = h.childNodes[0];
        return g;
      }
      function C(h, x) {
        return (0, d.default)(h).call(h, function(S) {
          x = m(S, x);
        }), x;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(325));
      function m(E) {
        c.default(E);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function E(D) {
        var C;
        function h(S) {
          var g = [{ $elem: c.default("<span>" + D.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(w, p) {
            var T = p.attr("href");
            return window.open(T, "_target"), !0;
          } }, { $elem: c.default("<span>" + D.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"), onClick: function(w, p) {
            var T, M;
            w.selection.createRangeByElem(p), w.selection.restoreSelection();
            var N = p.childNodes();
            if ((N == null ? void 0 : N.getNodeName()) === "IMG") {
              var U = (M = (T = w.selection.getSelectionContainerElem()) === null || T === void 0 ? void 0 : T.children()) === null || M === void 0 ? void 0 : M.elems[0].children[0];
              w.cmd.do("insertHTML", `<img 
                                src=` + (U == null ? void 0 : U.getAttribute("src")) + ` 
                                style=` + (U == null ? void 0 : U.getAttribute("style")) + ">");
            } else {
              var O = p.text();
              w.cmd.do("insertHTML", "<span>" + O + "</span>");
            }
            return !0;
          } }];
          C = new m.default(D, S, g), C.create();
        }
        function x() {
          C && (C.remove(), C = null);
        }
        return { showLinkTooltip: h, hideLinkTooltip: x };
      }
      function A(D) {
        var C = E(D), h = C.showLinkTooltip, x = C.hideLinkTooltip;
        D.txt.eventHooks.linkClickEvents.push(h), D.txt.eventHooks.clickEvents.push(x), D.txt.eventHooks.keyupEvents.push(x), D.txt.eventHooks.toolbarClickEvents.push(x), D.txt.eventHooks.menuClickEvents.push(x), D.txt.eventHooks.textScrollEvents.push(x);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), E = function(A) {
        d.__extends(D, A);
        function D(C) {
          var h = this, x = m.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
          return h = A.call(this, x, C) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var C = this.editor, h = C.selection.isSelectionEmpty();
          h && C.selection.createEmptyRange(), C.cmd.do("italic"), h && (C.selection.collapseRange(), C.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var C = this.editor;
          C.cmd.queryCommandState("italic") ? this.active() : this.unActive();
        }, D;
      }(c.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), E = function(A) {
        d.__extends(D, A);
        function D(C) {
          var h = this, x = m.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
          return h = A.call(this, x, C) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var C = this.editor, h = C.selection.isSelectionEmpty();
          h && C.selection.createEmptyRange(), C.cmd.do("underline"), h && (C.selection.collapseRange(), C.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var C = this.editor;
          C.cmd.queryCommandState("underline") ? this.active() : this.unActive();
        }, D;
      }(c.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), E = function(A) {
        d.__extends(D, A);
        function D(C) {
          var h = this, x = m.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
          return h = A.call(this, x, C) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var C = this.editor, h = C.selection.isSelectionEmpty();
          h && C.selection.createEmptyRange(), C.cmd.do("strikeThrough"), h && (C.selection.collapseRange(), C.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var C = this.editor;
          C.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
        }, D;
      }(c.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(24)), m = d.__importDefault(t(3)), E = d.__importDefault(t(330)), A = function(D) {
        d.__extends(C, D);
        function C(h) {
          var x = this, S = m.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), g = new E.default(h.config.fontNames), b = { width: 100, title: "\u8BBE\u7F6E\u5B57\u4F53", type: "list", list: g.getItemList(), clickHandler: function(p) {
            x.command(p);
          } };
          return x = D.call(this, S, h, b) || this, x;
        }
        return C.prototype.command = function(h) {
          var x, S = this.editor, g = S.selection.isSelectionEmpty(), b = (x = S.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          if (b != null) {
            var w = (b == null ? void 0 : b.nodeName.toLowerCase()) !== "p", p = (b == null ? void 0 : b.getAttribute("face")) === h;
            if (g) {
              if (w && !p) {
                var T = S.selection.getSelectionRangeTopNodes();
                S.selection.createRangeByElem(T[0]), S.selection.moveCursor(T[0].elems[0]);
              }
              S.selection.setRangeToElem(b), S.selection.createEmptyRange();
            }
            S.cmd.do("fontName", h), g && (S.selection.collapseRange(), S.selection.restoreSelection());
          }
        }, C.prototype.tryChangeActive = function() {
        }, C;
      }(c.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = function() {
        function A(D) {
          var C = this;
          this.itemList = [], (0, d.default)(D).call(D, function(h) {
            var x = typeof h == "string" ? h : h.value, S = typeof h == "string" ? h : h.name;
            C.itemList.push({ $elem: m.default(`<p style="font-family:'` + x + `'">` + S + "</p>"), value: S });
          });
        }
        return A.prototype.getItemList = function() {
          return this.itemList;
        }, A;
      }();
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(24)), m = d.__importDefault(t(3)), E = d.__importDefault(t(332)), A = function(D) {
        d.__extends(C, D);
        function C(h) {
          var x = this, S = m.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), g = new E.default(h.config.fontSizes), b = { width: 160, title: "\u8BBE\u7F6E\u5B57\u53F7", type: "list", list: g.getItemList(), clickHandler: function(p) {
            x.command(p);
          } };
          return x = D.call(this, S, h, b) || this, x;
        }
        return C.prototype.command = function(h) {
          var x, S = this.editor, g = S.selection.isSelectionEmpty(), b = (x = S.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          b != null && (S.cmd.do("fontSize", h), g && (S.selection.collapseRange(), S.selection.restoreSelection()));
        }, C.prototype.tryChangeActive = function() {
        }, C;
      }(c.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = function() {
        function E(A) {
          this.itemList = [];
          for (var D in A) {
            var C = A[D];
            this.itemList.push({ $elem: c.default('<p style="font-size:' + D + '">' + C.name + "</p>"), value: C.value });
          }
        }
        return E.prototype.getItemList = function() {
          return this.itemList;
        }, E;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(24)), A = m.__importDefault(t(3)), D = ["LI"], C = ["UL", "BLOCKQUOTE"], h = function(x) {
        m.__extends(S, x);
        function S(g) {
          var b = this, w = A.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), p = { width: 100, title: "\u5BF9\u9F50\u65B9\u5F0F", type: "list", list: [{ $elem: A.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + g.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`), value: "left" }, { $elem: A.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + g.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`), value: "center" }, { $elem: A.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + g.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`), value: "right" }, { $elem: A.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + g.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`), value: "justify" }], clickHandler: function(M) {
            b.command(M);
          } };
          return b = x.call(this, w, g, p) || this, b;
        }
        return S.prototype.command = function(g) {
          var b = this.editor, w = b.selection, p = w.getSelectionContainerElem();
          w.saveRange();
          var T = b.selection.getSelectionRangeTopNodes();
          if (p != null && p.length)
            if (this.isSpecialNode(p, T[0]) || this.isSpecialTopNode(T[0])) {
              var M = this.getSpecialNodeUntilTop(p, T[0]);
              if (M == null)
                return;
              A.default(M).css("text-align", g);
            } else
              (0, d.default)(T).call(T, function(N) {
                N.css("text-align", g);
              });
          w.restoreSelection();
        }, S.prototype.getSpecialNodeUntilTop = function(g, b) {
          for (var w = g.elems[0], p = b.elems[0]; w != null; ) {
            if ((0, c.default)(D).call(D, w == null ? void 0 : w.nodeName) !== -1 || w.parentNode === p)
              return w;
            w = w.parentNode;
          }
          return w;
        }, S.prototype.isSpecialNode = function(g, b) {
          var w = this.getSpecialNodeUntilTop(g, b);
          return w == null ? !1 : (0, c.default)(D).call(D, w.nodeName) !== -1;
        }, S.prototype.isSpecialTopNode = function(g) {
          var b;
          return g == null ? !1 : (0, c.default)(C).call(C, (b = g.elems[0]) === null || b === void 0 ? void 0 : b.nodeName) !== -1;
        }, S.prototype.tryChangeActive = function() {
        }, S;
      }(E.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = c.__importDefault(t(23)), A = c.__importDefault(t(335)), D = c.__importDefault(t(336)), C = t(7), h = function(x) {
        c.__extends(S, x);
        function S(g) {
          var b = this, w = m.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
          return b = x.call(this, w, g) || this, A.default(g), b;
        }
        return S.prototype.clickHandler = function() {
          var g, b, w = this.editor, p = w.selection.isSelectionEmpty(), T = w.selection.getSelectionRangeTopNodes(), M = T[T.length - 1], N = this.getTopNodeName();
          if (N === "BLOCKQUOTE") {
            var U = m.default(M.childNodes()), O = U.length, B = M;
            (0, d.default)(U).call(U, function(j) {
              var I = m.default(j);
              I.insertAfter(B), B = I;
            }), M.remove(), w.selection.moveCursor(U.elems[O - 1]), this.tryChangeActive();
          } else {
            var P = D.default(T);
            if (w.$textElem.equal(M)) {
              var z = (g = w.selection.getSelectionContainerElem()) === null || g === void 0 ? void 0 : g.elems[0];
              w.selection.createRangeByElems(z.children[0], z.children[0]), T = w.selection.getSelectionRangeTopNodes(), P = D.default(T), M.append(P);
            } else
              P.insertAfter(M);
            this.delSelectNode(T);
            var H = (b = P.childNodes()) === null || b === void 0 ? void 0 : b.last().getNode();
            if (H == null)
              return;
            H.textContent ? w.selection.moveCursor(H) : w.selection.moveCursor(H, 0), this.tryChangeActive(), m.default(C.EMPTY_P).insertAfter(P);
            return;
          }
          p && (w.selection.collapseRange(), w.selection.restoreSelection());
        }, S.prototype.tryChangeActive = function() {
          var g, b = this.editor, w = (g = b.selection.getSelectionRangeTopNodes()[0]) === null || g === void 0 ? void 0 : g.getNodeName();
          w === "BLOCKQUOTE" ? this.active() : this.unActive();
        }, S.prototype.getTopNodeName = function() {
          var g = this.editor, b = g.selection.getSelectionRangeTopNodes()[0], w = b == null ? void 0 : b.getNodeName();
          return w;
        }, S.prototype.delSelectNode = function(g) {
          (0, d.default)(g).call(g, function(b) {
            b.remove();
          });
        }, S;
      }(E.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(7), m = d.__importDefault(t(3));
      function E(A) {
        function D(C) {
          var h, x = A.selection.getSelectionContainerElem(), S = A.selection.getSelectionRangeTopNodes()[0];
          if ((S == null ? void 0 : S.getNodeName()) === "BLOCKQUOTE") {
            if (x.getNodeName() === "BLOCKQUOTE") {
              var g = (h = x.childNodes()) === null || h === void 0 ? void 0 : h.getNode();
              A.selection.moveCursor(g);
            }
            if (x.text() === "") {
              C.preventDefault(), x.remove();
              var b = m.default(c.EMPTY_P);
              b.insertAfter(S), A.selection.moveCursor(b.getNode(), 0);
            }
            S.text() === "" && S.remove();
          }
        }
        A.txt.eventHooks.enterDownEvents.push(D);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      function E(A) {
        var D = m.default("<blockquote></blockquote>");
        return (0, d.default)(A).call(A, function(C) {
          D.append(C.clone(!0));
        }), D;
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(24)), E = c.__importDefault(t(3)), A = t(6), D = function(C) {
        c.__extends(h, C);
        function h(x) {
          var S, g = this, b = E.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), w = {
            width: 120,
            title: "\u80CC\u666F\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(S = x.config.colors).call(S, function(p) {
              return { $elem: E.default('<i style="color:' + p + ';" class="w-e-icon-paint-brush"></i>'), value: p };
            }),
            clickHandler: function(T) {
              g.command(T);
            }
          };
          return g = C.call(this, b, x, w) || this, g;
        }
        return h.prototype.command = function(x) {
          var S, g = this.editor, b = g.selection.isSelectionEmpty(), w = (S = g.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.elems[0];
          if (w != null) {
            var p = (w == null ? void 0 : w.nodeName.toLowerCase()) !== "p", T = w == null ? void 0 : w.style.backgroundColor, M = A.hexToRgb(x) === T;
            if (b) {
              if (p && !M) {
                var N = g.selection.getSelectionRangeTopNodes();
                g.selection.createRangeByElem(N[0]), g.selection.moveCursor(N[0].elems[0]);
              }
              g.selection.createEmptyRange();
            }
            g.cmd.do("backColor", x), b && (g.selection.collapseRange(), g.selection.restoreSelection());
          }
        }, h.prototype.tryChangeActive = function() {
        }, h;
      }(m.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(24)), E = c.__importDefault(t(3)), A = function(D) {
        c.__extends(C, D);
        function C(h) {
          var x, S = this, g = E.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), b = {
            width: 120,
            title: "\u6587\u5B57\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(x = h.config.colors).call(x, function(w) {
              return { $elem: E.default('<i style="color:' + w + ';" class="w-e-icon-pencil2"></i>'), value: w };
            }),
            clickHandler: function(p) {
              S.command(p);
            }
          };
          return S = D.call(this, g, h, b) || this, S;
        }
        return C.prototype.command = function(h) {
          var x, S = this.editor, g = S.selection.isSelectionEmpty(), b = (x = S.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          if (b != null) {
            var w = S.selection.getSelectionText();
            if (b.nodeName === "A" && b.textContent === w) {
              var p = E.default("<span>&#8203;</span>").getNode();
              b.appendChild(p);
            }
            S.cmd.do("foreColor", h), g && (S.selection.collapseRange(), S.selection.restoreSelection());
          }
        }, C.prototype.tryChangeActive = function() {
        }, C;
      }(m.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(32)), E = d.__importDefault(t(37)), A = d.__importDefault(t(340)), D = d.__importDefault(t(346)), C = function(h) {
        d.__extends(x, h);
        function x(S) {
          var g = this, b = c.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
          return g = h.call(this, b, S) || this, D.default(S), g;
        }
        return x.prototype.clickHandler = function() {
          this.createPanel("");
        }, x.prototype.createPanel = function(S) {
          var g = A.default(this.editor, S), b = new m.default(this, g);
          b.create();
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(E.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), E = c.__importDefault(t(3)), A = c.__importDefault(t(341)), D = t(7);
      function C(h, x) {
        var S = h.config, g = new A.default(h), b = m.getRandom("input-iframe"), w = m.getRandom("btn-ok"), p = m.getRandom("input-upload"), T = m.getRandom("btn-local-ok");
        function M(B) {
          h.cmd.do("insertHTML", B + D.EMPTY_P), h.config.onlineVideoCallback(B);
        }
        function N(B) {
          var P = h.config.onlineVideoCheck(B);
          return P === !0 ? !0 : (typeof P == "string" && h.config.customAlert(P, "error"), !1);
        }
        var U = [{
          title: h.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
          tpl: `<div class="w-e-up-video-container">
                    <div id="` + T + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + p + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
          events: [
            { selector: "#" + T, type: "click", fn: function() {
              var P = E.default("#" + p), z = P.elems[0];
              if (z)
                z.click();
              else
                return !0;
            } },
            { selector: "#" + p, type: "change", fn: function() {
              var P = E.default("#" + p), z = P.elems[0];
              if (!z)
                return !0;
              var H = z.files;
              return H.length && g.uploadVideo(H), !0;
            } }
          ]
        }, {
          title: h.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
          tpl: `<div>
                    <input 
                        id="` + b + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + h.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + w + `" class="right">
                            ` + h.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
          events: [
            { selector: "#" + w, type: "click", fn: function() {
              var P, z = E.default("#" + b), H = (0, d.default)(P = z.val()).call(P);
              if (!!H && !!N(H))
                return M(H), !0;
            }, bindEnter: !0 }
          ]
        }], O = {
          width: 300,
          height: 0,
          tabs: []
        };
        return window.FileReader && (S.uploadVideoServer || S.customUploadVideo) && O.tabs.push(U[0]), S.showLinkVideo && O.tabs.push(U[1]), O;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(132)), c = s(t(57)), m = s(t(4)), E = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var A = t(2), D = t(6), C = A.__importDefault(t(135)), h = A.__importDefault(t(136)), x = t(7), S = t(6), g = function() {
        function b(w) {
          this.editor = w;
        }
        return b.prototype.uploadVideo = function(w) {
          var p = this;
          if (!!w.length) {
            var T = this.editor, M = T.config, N = "validate.", U = function(pe) {
              return T.i18next.t(N + pe);
            }, O = M.uploadVideoServer, B = M.uploadVideoMaxSize, P = B / 1024, z = M.uploadVideoName, H = M.uploadVideoParams, j = M.uploadVideoParamsWithUrl, I = M.uploadVideoHeaders, V = M.uploadVideoHooks, k = M.uploadVideoTimeout, K = M.withVideoCredentials, q = M.customUploadVideo, X = M.uploadVideoAccept, _ = [], le = [];
            if (D.arrForEach(w, function(se) {
              var pe = se.name, Pe = se.size / 1024 / 1024;
              if (!(!pe || !Pe)) {
                if (!(X instanceof Array)) {
                  le.push("\u3010" + X + "\u3011" + U("uploadVideoAccept \u4E0D\u662FArray"));
                  return;
                }
                if (!(0, d.default)(X).call(X, function(Ee) {
                  return Ee === pe.split(".")[pe.split(".").length - 1];
                })) {
                  le.push("\u3010" + pe + "\u3011" + U("\u4E0D\u662F\u89C6\u9891"));
                  return;
                }
                if (P < Pe) {
                  le.push("\u3010" + pe + "\u3011" + U("\u5927\u4E8E") + " " + P + "M");
                  return;
                }
                _.push(se);
              }
            }), le.length) {
              M.customAlert(U("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + le.join(`
`), "warning");
              return;
            }
            if (_.length === 0) {
              M.customAlert(U("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (q && typeof q == "function") {
              var be;
              q(_, (0, c.default)(be = this.insertVideo).call(be, this));
              return;
            }
            var ve = new FormData();
            if ((0, m.default)(_).call(_, function(se, pe) {
              var Pe = z || se.name;
              _.length > 1 && (Pe = Pe + (pe + 1)), ve.append(Pe, se);
            }), O) {
              var ce = O.split("#");
              O = ce[0];
              var ae = ce[1] || "";
              (0, m.default)(D).call(D, H, function(se, pe) {
                j && ((0, E.default)(O).call(O, "?") > 0 ? O += "&" : O += "?", O = O + se + "=" + pe), ve.append(se, pe);
              }), ae && (O += "#" + ae);
              var re = C.default(O, { timeout: k, formData: ve, headers: I, withCredentials: !!K, beforeSend: function(pe) {
                if (V.before)
                  return V.before(pe, T, _);
              }, onTimeout: function(pe) {
                M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), V.timeout && V.timeout(pe, T);
              }, onProgress: function(pe, Pe) {
                var Ee = new h.default(T);
                Pe.lengthComputable && (pe = Pe.loaded / Pe.total, Ee.show(pe));
              }, onError: function(pe) {
                M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", U("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + U("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + pe.status), V.error && V.error(pe, T);
              }, onFail: function(pe, Pe) {
                M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", U("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + U("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Pe), V.fail && V.fail(pe, T, Pe);
              }, onSuccess: function(pe, Pe) {
                if (V.customInsert) {
                  var Ee;
                  V.customInsert((0, c.default)(Ee = p.insertVideo).call(Ee, p), Pe, T);
                  return;
                }
                if (Pe.errno != "0") {
                  M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", U("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + U("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Pe.errno), V.fail && V.fail(pe, T, Pe);
                  return;
                }
                var Ve = Pe.data;
                p.insertVideo(Ve.url), V.success && V.success(pe, T, Pe);
              } });
              typeof re == "string" && M.customAlert(re, "error");
            }
          }
        }, b.prototype.insertVideo = function(w) {
          var p = this.editor, T = p.config, M = "validate.", N = function(B, P) {
            return P === void 0 && (P = M), p.i18next.t(P + B);
          };
          if (!T.customInsertVideo)
            S.UA.isFirefox ? p.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + w + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : p.cmd.do("insertHTML", '<video src="' + w + '" controls="controls" style="max-width:100%"></video>' + x.EMPTY_P);
          else {
            T.customInsertVideo(w);
            return;
          }
          var U = document.createElement("video");
          U.onload = function() {
            U = null;
          }, U.onerror = function() {
            T.customAlert(N("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + N("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + N("\u89C6\u9891\u94FE\u63A5") + ' "' + w + '"\uFF0C' + N("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), U = null;
          }, U.onabort = function() {
            return U = null;
          }, U.src = w;
        }, b;
      }();
      o.default = g;
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
      function E(A) {
        c.default(A), m.default(A);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38)), E = d.__importDefault(t(348));
      function A(C) {
        var h, x = function(w, p) {
          return p === void 0 && (p = ""), C.i18next.t(p + w);
        };
        function S(b) {
          var w = [{ $elem: c.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(T, M) {
            return M.remove(), !0;
          } }, { $elem: c.default("<span>100%</span>"), onClick: function(T, M) {
            return M.attr("width", "100%"), M.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>50%</span>"), onClick: function(T, M) {
            return M.attr("width", "50%"), M.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>30%</span>"), onClick: function(T, M) {
            return M.attr("width", "30%"), M.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>" + x("\u91CD\u7F6E") + "</span>"), onClick: function(T, M) {
            return M.removeAttr("width"), M.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>" + x("menus.justify.\u9760\u5DE6") + "</span>"), onClick: function(T, M) {
            return E.default(M, "left"), !0;
          } }, { $elem: c.default("<span>" + x("menus.justify.\u5C45\u4E2D") + "</span>"), onClick: function(T, M) {
            return E.default(M, "center"), !0;
          } }, { $elem: c.default("<span>" + x("menus.justify.\u9760\u53F3") + "</span>"), onClick: function(T, M) {
            return E.default(M, "right"), !0;
          } }];
          h = new m.default(C, b, w), h.create();
        }
        function g() {
          h && (h.remove(), h = null);
        }
        return { showVideoTooltip: S, hideVideoTooltip: g };
      }
      o.createShowHideFn = A;
      function D(C) {
        var h = A(C), x = h.showVideoTooltip, S = h.hideVideoTooltip;
        C.txt.eventHooks.videoClickEvents.push(x), C.txt.eventHooks.clickEvents.push(S), C.txt.eventHooks.keyupEvents.push(S), C.txt.eventHooks.toolbarClickEvents.push(S), C.txt.eventHooks.menuClickEvents.push(S), C.txt.eventHooks.textScrollEvents.push(S), C.txt.eventHooks.changeEvents.push(S);
      }
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(44));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      function E(D, C) {
        var h = ["P"], x = A(D, h);
        x && m.default(x).css("text-align", C);
      }
      o.default = E;
      function A(D, C) {
        for (var h, x = D.elems[0]; x != null; ) {
          if ((0, d.default)(C).call(C, x == null ? void 0 : x.nodeName))
            return x;
          if (((h = x == null ? void 0 : x.parentNode) === null || h === void 0 ? void 0 : h.nodeName) === "BODY")
            return null;
          x = x.parentNode;
        }
        return x;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function c(m) {
        if (!!d.UA.isFirefox) {
          var E = m.txt, A = m.selection, D = E.eventHooks.keydownEvents;
          D.push(function(C) {
            var h = A.getSelectionContainerElem();
            if (h) {
              var x = h.getNodeTop(m), S = x.length && x.prev().length ? x.prev() : null;
              S && S.attr("data-we-video-p") && A.getCursorPos() === 0 && C.keyCode === 8 && S.remove();
            }
          });
        }
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(7), E = c.__importDefault(t(3)), A = c.__importDefault(t(32)), D = c.__importDefault(t(37)), C = c.__importDefault(t(351)), h = c.__importDefault(t(364)), x = function(S) {
        c.__extends(g, S);
        function g(b) {
          var w = this, p = E.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), T = h.default(b);
          if (T.onlyUploadConf) {
            var M;
            p = T.onlyUploadConf.$elem, (0, d.default)(M = T.onlyUploadConf.events).call(M, function(N) {
              var U = N.type, O = N.fn || m.EMPTY_FN;
              p.on(U, function(B) {
                B.stopPropagation(), O(B);
              });
            });
          }
          return w = S.call(this, p, b) || this, w.imgPanelConfig = T, C.default(b), w;
        }
        return g.prototype.clickHandler = function() {
          this.imgPanelConfig.onlyUploadConf || this.createPanel();
        }, g.prototype.createPanel = function() {
          var b = this.imgPanelConfig, w = new A.default(this, b);
          this.setPanel(w), w.create();
        }, g.prototype.tryChangeActive = function() {
        }, g;
      }(D.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(352)), m = d.__importDefault(t(353)), E = d.__importDefault(t(354)), A = d.__importDefault(t(362)), D = d.__importDefault(t(363));
      function C(h) {
        c.default(h), m.default(h), E.default(h), A.default(h), D.default(h);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(130), m = d.__importDefault(t(96));
      function E(h, x) {
        var S = h.config, g = S.pasteFilterStyle, b = S.pasteIgnoreImg, w = c.getPasteHtml(x, g, b);
        if (w)
          return !0;
        var p = c.getPasteText(x);
        return !!p;
      }
      function A(h, x) {
        for (var S, g = ((S = x.clipboardData) === null || S === void 0 ? void 0 : S.types) || [], b = 0; b < g.length; b++) {
          var w = g[b];
          if (w === "Files")
            return !0;
        }
        return !1;
      }
      function D(h, x) {
        if (!(!A(x, h) && E(x, h))) {
          var S = c.getPasteImgs(h);
          if (!!S.length) {
            var g = new m.default(x);
            g.uploadImg(S);
          }
        }
      }
      function C(h) {
        h.txt.eventHooks.pasteEvents.unshift(function(x) {
          D(x, h);
        });
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(96));
      function m(E) {
        function A(D) {
          var C = D.dataTransfer && D.dataTransfer.files;
          if (!(!C || !C.length)) {
            var h = new c.default(E);
            h.uploadImg(C);
          }
        }
        E.txt.eventHooks.dropEvents.push(A);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31)), c = s(t(355));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var m = t(2), E = m.__importDefault(t(3));
      t(360);
      var A = t(6);
      function D(g, b, w, p, T) {
        g.attr("style", "width:" + b + "px; height:" + w + "px; left:" + p + "px; top:" + T + "px;");
      }
      function C(g, b) {
        var w = E.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
        return w.hide(), b.append(w), w;
      }
      function h(g, b, w) {
        var p = g.getBoundingClientRect(), T = w.getBoundingClientRect(), M = T.width.toFixed(2), N = T.height.toFixed(2);
        (0, d.default)(b).call(b, ".w-e-img-drag-show-size").text(M + "px * " + N + "px"), D(b, (0, c.default)(M), (0, c.default)(N), T.left - p.left, T.top - p.top), b.show();
      }
      function x(g) {
        var b = g.$textContainerElem, w, p = C(g, b);
        function T(U, O) {
          U.on("click", function(B) {
            B.stopPropagation();
          }), U.on("mousedown", ".w-e-img-drag-rb", function(B) {
            if (B.preventDefault(), !w)
              return;
            var P = B.clientX, z = B.clientY, H = O.getBoundingClientRect(), j = w.getBoundingClientRect(), I = j.width, V = j.height, k = j.left - H.left, K = j.top - H.top, q = I / V, X = I, _ = V, le = E.default(document);
            function be() {
              le.off("mousemove", ve), le.off("mouseup", ce);
            }
            function ve(ae) {
              ae.stopPropagation(), ae.preventDefault(), X = I + (ae.clientX - P), _ = V + (ae.clientY - z), X / _ != q && (_ = X / q), X = (0, c.default)(X.toFixed(2)), _ = (0, c.default)(_.toFixed(2)), (0, d.default)(U).call(U, ".w-e-img-drag-show-size").text(X.toFixed(2).replace(".00", "") + "px * " + _.toFixed(2).replace(".00", "") + "px"), D(U, X, _, k, K);
            }
            le.on("mousemove", ve);
            function ce() {
              w.attr("width", X + ""), w.attr("height", _ + "");
              var ae = w.getBoundingClientRect();
              D(U, X, _, ae.left - H.left, ae.top - H.top), be();
            }
            le.on("mouseup", ce), le.on("mouseleave", be);
          });
        }
        function M(U) {
          if (A.UA.isIE())
            return !1;
          U && (w = U, h(b, p, w));
        }
        function N() {
          (0, d.default)(b).call(b, ".w-e-img-drag-mask").hide();
        }
        return T(p, b), E.default(document).on("click", N), g.beforeDestroy(function() {
          E.default(document).off("click", N);
        }), { showDrag: M, hideDrag: N };
      }
      o.createShowHideFn = x;
      function S(g) {
        var b = x(g), w = b.showDrag, p = b.hideDrag;
        g.txt.eventHooks.imgClickEvents.push(w), g.txt.eventHooks.textScrollEvents.push(p), g.txt.eventHooks.keyupEvents.push(p), g.txt.eventHooks.toolbarClickEvents.push(p), g.txt.eventHooks.menuClickEvents.push(p), g.txt.eventHooks.changeEvents.push(p);
      }
      o.default = S;
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
      l.exports = m ? function(A) {
        var D = f(String(A)), C = c(D);
        return C === 0 && D.charAt(0) == "-" ? -0 : C;
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
      function E(D) {
        var C, h = function(b, w) {
          return w === void 0 && (w = ""), D.i18next.t(w + b);
        };
        function x(g) {
          var b = [{ $elem: c.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(p, T) {
            return p.selection.createRangeByElem(T), p.selection.restoreSelection(), p.cmd.do("delete"), !0;
          } }, { $elem: c.default("<span>30%</span>"), onClick: function(p, T) {
            return T.attr("width", "30%"), T.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>50%</span>"), onClick: function(p, T) {
            return T.attr("width", "50%"), T.removeAttr("height"), !0;
          } }, { $elem: c.default("<span>100%</span>"), onClick: function(p, T) {
            return T.attr("width", "100%"), T.removeAttr("height"), !0;
          } }];
          b.push({ $elem: c.default("<span>" + h("\u91CD\u7F6E") + "</span>"), onClick: function(p, T) {
            return T.removeAttr("width"), T.removeAttr("height"), !0;
          } }), g.attr("data-href") && b.push({ $elem: c.default("<span>" + h("\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(p, T) {
            var M = T.attr("data-href");
            return M && (M = decodeURIComponent(M), window.open(M, "_target")), !0;
          } }), C = new m.default(D, g, b), C.create();
        }
        function S() {
          C && (C.remove(), C = null);
        }
        return { showImgTooltip: x, hideImgTooltip: S };
      }
      o.createShowHideFn = E;
      function A(D) {
        var C = E(D), h = C.showImgTooltip, x = C.hideImgTooltip;
        D.txt.eventHooks.imgClickEvents.push(h), D.txt.eventHooks.clickEvents.push(x), D.txt.eventHooks.keyupEvents.push(x), D.txt.eventHooks.toolbarClickEvents.push(x), D.txt.eventHooks.menuClickEvents.push(x), D.txt.eventHooks.textScrollEvents.push(x), D.txt.eventHooks.imgDragBarMouseDownEvents.push(x), D.txt.eventHooks.changeEvents.push(x);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c) {
        var m = c.txt, E = c.selection, A = m.eventHooks.keydownEvents;
        A.push(function(D) {
          var C = E.getSelectionContainerElem(), h = E.getRange();
          if (!(!h || !C || D.keyCode !== 8 || !E.isSelectionEmpty())) {
            var x = h.startContainer, S = h.startOffset, g = null;
            if (S === 0)
              for (; x !== C.elems[0] && C.elems[0].contains(x) && x.parentNode && !g; ) {
                if (x.previousSibling) {
                  g = x.previousSibling;
                  break;
                }
                x = x.parentNode;
              }
            else
              x.nodeType !== 3 && (g = x.childNodes[S - 1]);
            if (!!g) {
              for (var b = g; b.childNodes.length; )
                b = b.childNodes[b.childNodes.length - 1];
              b instanceof HTMLElement && b.tagName === "IMG" && (b.remove(), D.preventDefault());
            }
          }
        });
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26)), c = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3)), A = t(6), D = m.__importDefault(t(96));
      function C(h) {
        var x, S = h.config, g = new D.default(h), b = A.getRandom("up-trigger-id"), w = A.getRandom("up-file-id"), p = A.getRandom("input-link-url"), T = A.getRandom("input-link-url-alt"), M = A.getRandom("input-link-url-href"), N = A.getRandom("btn-link"), U = "menus.panelMenus.image.", O = function(q, X) {
          return X === void 0 && (X = U), h.i18next.t(X + q);
        };
        function B(K, q, X) {
          var _ = S.linkImgCheck(K);
          return _ === !0 ? !0 : (typeof _ == "string" && S.customAlert(_, "error"), !1);
        }
        var P = S.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', z = (0, d.default)(x = S.uploadImgAccept).call(x, function(K) {
          return "image/" + K;
        }).join(","), H = function(q, X, _) {
          return '<div class="' + q + '" data-title="' + _ + `">
            <div id="` + b + `" class="w-e-up-btn">
                <i class="` + X + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + w + '" type="file" ' + P + ' accept="' + z + `"/>
            </div>
        </div>`;
        }, j = [
          { selector: "#" + b, type: "click", fn: function() {
            var q = S.uploadImgFromMedia;
            if (q && typeof q == "function")
              return q(), !0;
            var X = E.default("#" + w), _ = X.elems[0];
            if (_)
              _.click();
            else
              return !0;
          } },
          { selector: "#" + w, type: "change", fn: function() {
            var q = E.default("#" + w), X = q.elems[0];
            if (!X)
              return !0;
            var _ = X.files;
            return _ != null && _.length && g.uploadImg(_), X && (X.value = ""), !0;
          } }
        ], I = [`<input
            id="` + p + `"
            type="text"
            class="block"
            placeholder="` + O("\u56FE\u7247\u5730\u5740") + '"/>'];
        S.showLinkImgAlt && I.push(`
        <input
            id="` + T + `"
            type="text"
            class="block"
            placeholder="` + O("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), S.showLinkImgHref && I.push(`
        <input
            id="` + M + `"
            type="text"
            class="block"
            placeholder="` + O("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
        var V = [
          {
            title: O("\u4E0A\u4F20\u56FE\u7247"),
            tpl: H("w-e-up-img-container", "w-e-icon-upload2", ""),
            events: j
          },
          { title: O("\u7F51\u7EDC\u56FE\u7247"), tpl: `<div>
                    ` + I.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + N + '" class="right">' + O("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + N, type: "click", fn: function() {
            var q, X = E.default("#" + p), _ = (0, c.default)(q = X.val()).call(q);
            if (!!_) {
              var le;
              if (S.showLinkImgAlt) {
                var be;
                le = (0, c.default)(be = E.default("#" + T).val()).call(be);
              }
              var ve;
              if (S.showLinkImgHref) {
                var ce;
                ve = (0, c.default)(ce = E.default("#" + M).val()).call(ce);
              }
              if (!!B(_))
                return g.insertImg(_, le, ve), !0;
            }
          }, bindEnter: !0 }] }
        ], k = { width: 300, height: 0, tabs: [], onlyUploadConf: { $elem: E.default(H("w-e-menu", "w-e-icon-image", "\u56FE\u7247")), events: j } };
        return window.FileReader && (S.uploadImgShowBase64 || S.uploadImgServer || S.customUploadImg || S.uploadImgFromMedia) && k.tabs.push(V[0]), S.showLinkImg && (k.tabs.push(V[1]), k.onlyUploadConf = void 0), k;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = c.__importDefault(t(24)), A = c.__importDefault(t(366)), D = function(C) {
        c.__extends(h, C);
        function h(x) {
          var S = this, g = m.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), b = { width: 130, title: "\u8BBE\u7F6E\u7F29\u8FDB", type: "list", list: [{ $elem: m.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + x.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`), value: "increase" }, { $elem: m.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + x.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`), value: "decrease" }], clickHandler: function(p) {
            S.command(p);
          } };
          return S = C.call(this, g, x, b) || this, S;
        }
        return h.prototype.command = function(x) {
          var S = this.editor, g = S.selection.getSelectionContainerElem();
          if (g && S.$textElem.equal(g)) {
            var b = S.selection.getSelectionRangeTopNodes();
            b.length > 0 && (0, d.default)(b).call(b, function(w) {
              A.default(m.default(w), x, S);
            });
          } else
            g && g.length > 0 && (0, d.default)(g).call(g, function(w) {
              A.default(m.default(w), x, S);
            });
          S.selection.restoreSelection(), this.tryChangeActive();
        }, h.prototype.tryChangeActive = function() {
          var x = this.editor, S = x.selection.getSelectionStartElem(), g = m.default(S).getNodeTop(x);
          g.length <= 0 || (g.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
        }, h;
      }(E.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45)), c = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(367)), A = m.__importDefault(t(368)), D = /^(\d+)(\w+)$/, C = /^(\d+)%$/;
      function h(S) {
        var g = S.config.indentation;
        if (typeof g == "string") {
          if (D.test(g)) {
            var b, w = (0, d.default)(b = (0, c.default)(g).call(g).match(D)).call(b, 1, 3), p = w[0], T = w[1];
            return { value: Number(p), unit: T };
          } else if (C.test(g))
            return { value: Number((0, c.default)(g).call(g).match(C)[1]), unit: "%" };
        } else if (g.value !== void 0 && g.unit)
          return g;
        return { value: 2, unit: "em" };
      }
      function x(S, g, b) {
        var w = S.getNodeTop(b), p = /^(P|H[0-9]*)$/;
        p.test(w.getNodeName()) && (g === "increase" ? E.default(w, h(b)) : g === "decrease" && A.default(w, h(b)));
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45));
      (0, f.default)(o, "__esModule", { value: !0 });
      function c(m, E) {
        var A = m.elems[0];
        if (A.style.paddingLeft === "")
          m.css("padding-left", E.value + E.unit);
        else {
          var D = A.style.paddingLeft, C = (0, d.default)(D).call(D, 0, D.length - E.unit.length), h = Number(C) + E.value;
          m.css("padding-left", "" + h + E.unit);
        }
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45));
      (0, f.default)(o, "__esModule", { value: !0 });
      function c(m, E) {
        var A = m.elems[0];
        if (A.style.paddingLeft !== "") {
          var D = A.style.paddingLeft, C = (0, d.default)(D).call(D, 0, D.length - E.unit.length), h = Number(C) - E.value;
          h > 0 ? m.css("padding-left", "" + h + E.unit) : m.css("padding-left", "");
        }
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(37)), E = d.__importDefault(t(32)), A = d.__importDefault(t(370)), D = function(C) {
        d.__extends(h, C);
        function h(x) {
          var S = this, g = c.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
          return S = C.call(this, g, x) || this, S;
        }
        return h.prototype.createPanel = function() {
          var x = A.default(this.editor), S = new E.default(this, x);
          S.create();
        }, h.prototype.clickHandler = function() {
          this.createPanel();
        }, h.prototype.tryChangeActive = function() {
        }, h;
      }(m.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26)), c = s(t(70)), m = s(t(17));
      (0, f.default)(o, "__esModule", { value: !0 });
      var E = t(2), A = E.__importDefault(t(3));
      function D(C) {
        var h = C.config.emotions;
        function x(b) {
          var w = [];
          if (b.type == "image") {
            var p;
            w = (0, d.default)(p = b.content).call(p, function(M) {
              return typeof M == "string" ? "" : '<span  title="' + M.alt + `">
                    <img class="eleImg" data-emoji="` + M.alt + '" style src="' + M.src + '" alt="[' + M.alt + `]">
                </span>`;
            }), w = (0, c.default)(w).call(w, function(M) {
              return M !== "";
            });
          } else {
            var T;
            w = (0, d.default)(T = b.content).call(T, function(M) {
              return '<span class="eleImg" title="' + M + '">' + M + "</span>";
            });
          }
          return w.join("").replace(/&nbsp;/g, "");
        }
        var S = (0, d.default)(h).call(h, function(b) {
          return {
            title: C.i18next.t("menus.panelMenus.emoticon." + b.title),
            tpl: "<div>" + x(b) + "</div>",
            events: [{ selector: ".eleImg", type: "click", fn: function(p) {
              var T = A.default(p.target), M = T.getNodeName(), N;
              if (M === "IMG") {
                var U;
                N = (0, m.default)(U = T.parent().html()).call(U);
              } else
                N = "<span>" + T.html() + "</span>";
              return C.cmd.do("insertHTML", N), !0;
            } }]
          };
        }), g = { width: 300, height: 230, tabs: S };
        return g;
      }
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createListHandle = o.ClassType = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(372)), E = d.__importDefault(t(374)), A = d.__importDefault(t(375)), D = d.__importDefault(t(376)), C = d.__importDefault(t(377)), h;
      (function(b) {
        b.Wrap = "WrapListHandle", b.Join = "JoinListHandle", b.StartJoin = "StartJoinListHandle", b.EndJoin = "EndJoinListHandle", b.Other = "OtherListHandle";
      })(h = o.ClassType || (o.ClassType = {}));
      var x = { WrapListHandle: m.default, JoinListHandle: E.default, StartJoinListHandle: A.default, EndJoinListHandle: D.default, OtherListHandle: C.default };
      function S(b, w, p) {
        if (b === h.Other && p === void 0)
          throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
        return b !== h.Other ? new x[b](w) : new x[b](w, p);
      }
      o.createListHandle = S;
      var g = function() {
        function b(w) {
          this.handle = w, this.handle.exec();
        }
        return b.prototype.getSelectionRangeElem = function() {
          return c.default(this.handle.selectionRangeElem.get());
        }, b;
      }();
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = t(58), A = t(47), D = function(C) {
        c.__extends(h, C);
        function h(x) {
          return C.call(this, x) || this;
        }
        return h.prototype.exec = function() {
          var x = this.options, S = x.listType, g = x.listTarget, b = x.$selectionElem, w = x.$startElem, p = x.$endElem, T, M = [], N = b == null ? void 0 : b.getNodeName(), U = w.prior, O = p.prior;
          if (!w.prior && !p.prior || !(U != null && U.prev().length) && !(O != null && O.next().length)) {
            var B;
            (0, d.default)(B = b == null ? void 0 : b.children()).call(B, function(k) {
              M.push(m.default(k));
            }), N === S ? T = A.createElementFragment(
              M,
              A.createDocumentFragment(),
              "p"
            ) : (T = A.createElement(g), (0, d.default)(M).call(M, function(k) {
              T.appendChild(k.elems[0]);
            })), this.selectionRangeElem.set(T), A.insertBefore(b, T, b.elems[0]), b.remove();
          } else {
            for (var P = U; P.length; )
              M.push(P), O != null && O.equal(P) ? P = m.default(void 0) : P = P.next();
            var z = U.prev(), H = O.next();
            if (N === S ? T = A.createElementFragment(
              M,
              A.createDocumentFragment(),
              "p"
            ) : (T = A.createElement(g), (0, d.default)(M).call(M, function(k) {
              T.append(k.elems[0]);
            })), z.length && H.length) {
              for (var j = []; H.length; )
                j.push(H), H = H.next();
              var I = A.createElement(N);
              (0, d.default)(j).call(j, function(k) {
                I.append(k.elems[0]);
              }), m.default(I).insertAfter(b), this.selectionRangeElem.set(T);
              var V = b.next();
              V.length ? A.insertBefore(b, T, V.elems[0]) : b.parent().elems[0].append(T);
            } else if (!z.length)
              this.selectionRangeElem.set(T), A.insertBefore(b, T, b.elems[0]);
            else {
              this.selectionRangeElem.set(T);
              var V = b.next();
              V.length ? A.insertBefore(b, T, V.elems[0]) : b.parent().elems[0].append(T);
            }
          }
        }, h;
      }(E.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = function() {
        function m() {
          this._element = null;
        }
        return m.prototype.set = function(E) {
          if (E instanceof DocumentFragment) {
            var A, D = [];
            (0, d.default)(A = E.childNodes).call(A, function(C) {
              D.push(C);
            }), E = D;
          }
          this._element = E;
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
      var c = t(2), m = c.__importDefault(t(3)), E = t(58), A = t(47), D = function(C) {
        c.__extends(h, C);
        function h(x) {
          return C.call(this, x) || this;
        }
        return h.prototype.exec = function() {
          var x, S, g, b, w, p, T, M = this.options, N = M.editor, U = M.listType, O = M.listTarget, B = M.$startElem, P = M.$endElem, z, H = N.selection.getSelectionRangeTopNodes(), j = B == null ? void 0 : B.getNodeName(), I = P == null ? void 0 : P.getNodeName();
          if (j === I)
            if (H.length > 2)
              if (H.shift(), H.pop(), z = A.createElementFragment(
                A.filterSelectionNodes(H),
                A.createDocumentFragment()
              ), j === U)
                (x = P.children()) === null || x === void 0 || (0, d.default)(x).call(x, function(ae) {
                  z.append(ae);
                }), P.remove(), this.selectionRangeElem.set(z), B.elems[0].append(z);
              else {
                for (var V = document.createDocumentFragment(), k = document.createDocumentFragment(), K = A.getStartPoint(B); K.length; ) {
                  var q = K.elems[0];
                  K = K.next(), V.append(q);
                }
                for (var X = A.getEndPoint(P), _ = []; X.length; )
                  _.unshift(X.elems[0]), X = X.prev();
                (0, d.default)(_).call(_, function(ae) {
                  k.append(ae);
                });
                var le = A.createElement(O);
                le.append(V), le.append(z), le.append(k), z = le, this.selectionRangeElem.set(z), m.default(le).insertAfter(B), !(!((S = B.children()) === null || S === void 0) && S.length) && B.remove(), !(!((g = P.children()) === null || g === void 0) && g.length) && P.remove();
              }
            else {
              H.length = 0;
              for (var K = A.getStartPoint(B); K.length; )
                H.push(K), K = K.next();
              for (var X = A.getEndPoint(P), _ = []; X.length; )
                _.unshift(X), X = X.prev();
              H.push.apply(H, _), j === U ? (z = A.createElementFragment(H, A.createDocumentFragment(), "p"), this.selectionRangeElem.set(z), A.insertBefore(B, z, P.elems[0])) : (z = A.createElement(O), (0, d.default)(H).call(H, function(pe) {
                z.append(pe.elems[0]);
              }), this.selectionRangeElem.set(z), m.default(z).insertAfter(B)), !(!((b = B.children()) === null || b === void 0) && b.length) && P.remove(), !(!((w = P.children()) === null || w === void 0) && w.length) && P.remove();
            }
          else {
            for (var be = [], X = A.getEndPoint(P); X.length; )
              be.unshift(X), X = X.prev();
            for (var ve = [], K = A.getStartPoint(B); K.length; )
              ve.push(K), K = K.next();
            if (z = A.createDocumentFragment(), H.shift(), H.pop(), (0, d.default)(ve).call(ve, function(se) {
              return z.append(se.elems[0]);
            }), z = A.createElementFragment(
              A.filterSelectionNodes(H),
              z
            ), (0, d.default)(be).call(be, function(se) {
              return z.append(se.elems[0]);
            }), this.selectionRangeElem.set(z), j === U)
              B.elems[0].append(z), !(!((p = P.children()) === null || p === void 0) && p.length) && P.remove();
            else if (!((T = P.children()) === null || T === void 0) && T.length) {
              var ce = P.children();
              A.insertBefore(ce, z, ce.elems[0]);
            } else
              P.elems[0].append(z);
          }
        }, h;
      }(E.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = t(58), A = t(47), D = function(C) {
        c.__extends(h, C);
        function h(x) {
          return C.call(this, x) || this;
        }
        return h.prototype.exec = function() {
          var x, S = this.options, g = S.editor, b = S.listType, w = S.listTarget, p = S.$startElem, T, M = g.selection.getSelectionRangeTopNodes(), N = p == null ? void 0 : p.getNodeName();
          M.shift();
          for (var U = [], O = A.getStartPoint(p); O.length; )
            U.push(O), O = O.next();
          N === b ? (T = A.createDocumentFragment(), (0, d.default)(U).call(U, function(B) {
            return T.append(B.elems[0]);
          }), T = A.createElementFragment(
            A.filterSelectionNodes(M),
            T
          ), this.selectionRangeElem.set(T), p.elems[0].append(T)) : (T = A.createElement(w), (0, d.default)(U).call(U, function(B) {
            return T.append(B.elems[0]);
          }), T = A.createElementFragment(
            A.filterSelectionNodes(M),
            T
          ), this.selectionRangeElem.set(T), m.default(T).insertAfter(p), !(!((x = p.children()) === null || x === void 0) && x.length) && p.remove());
        }, h;
      }(E.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = t(58), A = t(47), D = function(C) {
        c.__extends(h, C);
        function h(x) {
          return C.call(this, x) || this;
        }
        return h.prototype.exec = function() {
          var x, S, g = this.options, b = g.editor, w = g.listType, p = g.listTarget, T = g.$endElem, M, N = b.selection.getSelectionRangeTopNodes(), U = T == null ? void 0 : T.getNodeName();
          N.pop();
          for (var O = [], B = A.getEndPoint(T); B.length; )
            O.unshift(B), B = B.prev();
          if (U === w)
            if (M = A.createElementFragment(
              A.filterSelectionNodes(N),
              A.createDocumentFragment()
            ), (0, d.default)(O).call(O, function(H) {
              return M.append(H.elems[0]);
            }), this.selectionRangeElem.set(M), !((x = T.children()) === null || x === void 0) && x.length) {
              var P = T.children();
              A.insertBefore(P, M, P.elems[0]);
            } else
              T.elems[0].append(M);
          else {
            var z = A.filterSelectionNodes(N);
            z.push.apply(z, O), M = A.createElementFragment(
              z,
              A.createElement(p)
            ), this.selectionRangeElem.set(M), m.default(M).insertBefore(T), !(!((S = T.children()) === null || S === void 0) && S.length) && T.remove();
          }
        }, h;
      }(E.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(58), m = t(47), E = function(A) {
        d.__extends(D, A);
        function D(C, h) {
          var x = A.call(this, C) || this;
          return x.range = h, x;
        }
        return D.prototype.exec = function() {
          var C = this.options, h = C.editor, x = C.listTarget, S = h.selection.getSelectionRangeTopNodes(), g = m.createElementFragment(
            m.filterSelectionNodes(S),
            m.createElement(x)
          );
          this.selectionRangeElem.set(g), this.range.insertNode(g);
        }, D;
      }(c.ListHandle);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(27));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(24)), A = m.__importDefault(t(3)), D = m.__importDefault(t(379)), C = t(6), h = function(x) {
        m.__extends(S, x);
        function S(g) {
          var b = this, w = A.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), p = new D.default(g, g.config.lineHeights), T = { width: 100, title: "\u8BBE\u7F6E\u884C\u9AD8", type: "list", list: p.getItemList(), clickHandler: function(N) {
            g.selection.saveRange(), b.command(N);
          } };
          return b = x.call(this, w, g, T) || this, b;
        }
        return S.prototype.command = function(g) {
          var b = this, w, p = window.getSelection ? window.getSelection() : document.getSelection(), T = ["P"], M = this.editor, N = "";
          M.selection.restoreSelection();
          var U = A.default(M.selection.getSelectionContainerElem());
          if (!!(U != null && U.length)) {
            var O = A.default(M.selection.getSelectionContainerElem()), B = A.default(M.selection.getSelectionStartElem()).elems[0], P = "", z = [], H = "";
            if (U && M.$textElem.equal(U)) {
              var j = C.UA.isIE(), I = [], V = [], k = [], K = A.default(M.selection.getSelectionStartElem()), q = A.default(M.selection.getSelectionEndElem()), X = (w = M.selection.getRange()) === null || w === void 0 ? void 0 : w.commonAncestorContainer.childNodes;
              V.push(this.getDom(K.elems[0])), X == null || (0, d.default)(X).call(X, function(ce, ae) {
                ce === b.getDom(K.elems[0]) && I.push(ae), ce === b.getDom(q.elems[0]) && I.push(ae);
              });
              var _ = 0, le = void 0;
              for (k.push(this.getDom(K.elems[0])); V[_] !== this.getDom(q.elems[0]); )
                le = A.default(V[_].nextElementSibling).elems[0], (0, c.default)(T).call(T, A.default(le).getNodeName()) !== -1 && k.push(le), V.push(le), _++;
              if (A.default(V[0]).getNodeName() !== "P") {
                _ = 0;
                for (var be = 0; be < V.length; be++)
                  if (A.default(V[be]).getNodeName() === "P") {
                    _ = be;
                    break;
                  }
                if (_ === 0)
                  return;
                for (var ve = 0; ve !== _; )
                  V.shift(), ve++;
              }
              this.setRange(V[0], V[V.length - 1]), (0, d.default)(V).call(V, function(ce) {
                P = ce.getAttribute("style"), z = P ? P.split(";") : [], H = b.styleProcessing(z), A.default(ce).getNodeName() === "P" && g && (H += g ? "line-height:" + g + ";" : ""), j ? A.default(ce).css("line-height", g) : N += "<" + A.default(ce).getNodeName().toLowerCase() + ' style="' + H + '">' + ce.innerHTML + "</" + A.default(ce).getNodeName().toLowerCase() + ">";
              }), N && this.action(N, M), B = O.elems[0], this.setRange(B.children[I[0]], B.children[I[1]]);
              return;
            }
            if (B = this.getDom(B), (0, c.default)(T).call(T, A.default(B).getNodeName()) !== -1) {
              if (P = B.getAttribute("style"), z = P ? P.split(";") : [], p == null || p.selectAllChildren(B), M.selection.saveRange(), !g) {
                P && (H = this.styleProcessing(z), H === "" ? N = "<" + A.default(B).getNodeName().toLowerCase() + ">" + B.innerHTML + "</" + A.default(B).getNodeName().toLowerCase() + ">" : N = "<" + A.default(B).getNodeName().toLowerCase() + ' style="' + H + '">' + B.innerHTML + "</" + A.default(B).getNodeName().toLowerCase() + ">", this.action(N, M));
                return;
              }
              P ? H = this.styleProcessing(z) + ("line-height:" + g + ";") : H = "line-height:" + g + ";", N = "<" + A.default(B).getNodeName().toLowerCase() + ' style="' + H + '">' + B.innerHTML + "</" + A.default(B).getNodeName().toLowerCase() + ">", A.default(B).getNodeName() === "BLOCKQUOTE" || C.UA.isIE() ? A.default(B).css("line-height", g) : this.action(N, M);
            }
          }
        }, S.prototype.getDom = function(g) {
          var b = A.default(g).elems[0];
          if (!b.parentNode)
            return b;
          function w(p, T) {
            var M = A.default(p.parentNode);
            return T.$textElem.equal(M) ? p : w(M.elems[0], T);
          }
          return b = w(b, this.editor), b;
        }, S.prototype.action = function(g, b) {
          b.cmd.do("insertHTML", g);
        }, S.prototype.styleProcessing = function(g) {
          var b = "";
          return (0, d.default)(g).call(g, function(w) {
            w !== "" && (0, c.default)(w).call(w, "line-height") === -1 && (b = b + w + ";");
          }), b;
        }, S.prototype.setRange = function(g, b) {
          var w = this.editor, p = window.getSelection ? window.getSelection() : document.getSelection();
          p == null || p.removeAllRanges();
          var T = document.createRange(), M = g, N = b;
          T.setStart(M, 0), T.setEnd(N, 1), p == null || p.addRange(T), w.selection.saveRange(), p == null || p.removeAllRanges(), w.selection.restoreSelection();
        }, S.prototype.tryChangeActive = function() {
          var g = this.editor, b = g.selection.getSelectionContainerElem();
          if (!(b && g.$textElem.equal(b))) {
            var w = A.default(g.selection.getSelectionStartElem());
            if (w.length !== 0) {
              w = this.getDom(w.elems[0]);
              var p = w.getAttribute("style") ? w.getAttribute("style") : "";
              p && (0, c.default)(p).call(p, "line-height") !== -1 ? this.active() : this.unActive();
            }
          }
        }, S;
      }(E.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = function() {
        function A(D, C) {
          var h = this;
          this.itemList = [{ $elem: m.default("<span>" + D.i18next.t("\u9ED8\u8BA4") + "</span>"), value: "" }], (0, d.default)(C).call(C, function(x) {
            h.itemList.push({ $elem: m.default("<span>" + x + "</span>"), value: x });
          });
        }
        return A.prototype.getItemList = function() {
          return this.itemList;
        }, A;
      }();
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(23)), E = function(A) {
        d.__extends(D, A);
        function D(C) {
          var h = this, x = c.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
          return h = A.call(this, x, C) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var C = this.editor;
          C.history.revoke();
          var h = C.$textElem.children();
          if (!!(h != null && h.length)) {
            var x = h.last();
            C.selection.createRangeByElem(x, !1, !0), C.selection.restoreSelection();
          }
        }, D.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
        }, D;
      }(m.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(23)), E = function(A) {
        d.__extends(D, A);
        function D(C) {
          var h = this, x = c.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
          return h = A.call(this, x, C) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var C = this.editor;
          C.history.restore();
          var h = C.$textElem.children();
          if (!!(h != null && h.length)) {
            var x = h.last();
            C.selection.createRangeByElem(x, !1, !0), C.selection.restoreSelection();
          }
        }, D.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
        }, D;
      }(m.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(37)), m = d.__importDefault(t(3)), E = d.__importDefault(t(383)), A = d.__importDefault(t(32)), D = d.__importDefault(t(392)), C = function(h) {
        d.__extends(x, h);
        function x(S) {
          var g = this, b = m.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
          return g = h.call(this, b, S) || this, D.default(S), g;
        }
        return x.prototype.clickHandler = function() {
          this.createPanel();
        }, x.prototype.createPanel = function() {
          var S = E.default(this.editor), g = new A.default(this, S);
          g.create();
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(c.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(384));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), E = c.__importDefault(t(3));
      t(389);
      var A = c.__importDefault(t(391));
      function D(h) {
        return h > 0 && (0, d.default)(h);
      }
      function C(h) {
        var x = new A.default(h), S = m.getRandom("w-col-id"), g = m.getRandom("w-row-id"), b = m.getRandom("btn-link"), w = "menus.panelMenus.table.", p = function(U) {
          return h.i18next.t(U);
        }, T = [{ title: p(w + "\u63D2\u5165\u8868\u683C"), tpl: `<div>
                    <div class="w-e-table">
                        <span>` + p("\u521B\u5EFA") + `</span>
                        <input id="` + g + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + p(w + "\u884C") + `</span>
                        <input id="` + S + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (p(w + "\u5217") + p(w + "\u7684") + p(w + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + b + '" class="right">' + p("\u63D2\u5165") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + b, type: "click", fn: function() {
          var U = Number(E.default("#" + S).val()), O = Number(E.default("#" + g).val());
          return D(O) && D(U) ? (x.createAction(O, U), !0) : (h.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
        }, bindEnter: !0 }] }], M = { width: 330, height: 0, tabs: [] };
        return M.tabs.push(T[0]), M;
      }
      o.default = C;
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
      var d = t(2), c = t(7), m = d.__importDefault(t(3)), E = function() {
        function A(D) {
          this.editor = D;
        }
        return A.prototype.createAction = function(D, C) {
          var h = this.editor, x = m.default(h.selection.getSelectionContainerElem()), S = m.default(x.elems[0]).parentUntilEditor("UL", h), g = m.default(x.elems[0]).parentUntilEditor("OL", h);
          if (!(S || g)) {
            var b = this.createTableHtml(D, C);
            h.cmd.do("insertHTML", b);
          }
        }, A.prototype.createTableHtml = function(D, C) {
          for (var h = "", x = "", S = 0; S < D; S++) {
            x = "";
            for (var g = 0; g < C; g++)
              S === 0 ? x = x + "<th></th>" : x = x + "<td></td>";
            h = h + "<tr>" + x + "</tr>";
          }
          var b = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + h + ("</tbody></table>" + c.EMPTY_P);
          return b;
        }, A;
      }();
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(393)), m = t(400);
      function E(A) {
        c.default(A), m.bindEventKeyboardEvent(A), m.bindClickEvent(A);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38)), E = d.__importDefault(t(394)), A = d.__importDefault(t(399)), D = t(7);
      function C(g) {
        var b;
        function w(T) {
          var M = new A.default(g), N = "menus.panelMenus.table.", U = function(P, z) {
            return z === void 0 && (z = N), g.i18next.t(z + P);
          }, O = [{
            $elem: c.default("<span>" + U("\u5220\u9664\u8868\u683C") + "</span>"),
            onClick: function(P, z) {
              return P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", D.EMPTY_P), !0;
            }
          }, { $elem: c.default("<span>" + U("\u6DFB\u52A0\u884C") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var j = c.default(P.selection.getSelectionStartElem()), I = M.getRowNode(j.elems[0]);
            if (!I)
              return !0;
            var V = Number(M.getCurrentRowIndex(z.elems[0], I)), k = M.getTableHtml(z.elems[0]), K = M.getTableHtml(E.default.ProcessingRow(c.default(k), V).elems[0]);
            return K = S(z, K), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", K), !0;
          } }, { $elem: c.default("<span>" + U("\u5220\u9664\u884C") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var j = c.default(P.selection.getSelectionStartElem()), I = M.getRowNode(j.elems[0]);
            if (!I)
              return !0;
            var V = Number(M.getCurrentRowIndex(z.elems[0], I)), k = M.getTableHtml(z.elems[0]), K = E.default.DeleteRow(c.default(k), V).elems[0].children[0].children.length, q = "";
            return P.selection.createRangeByElem(z), P.selection.restoreSelection(), K === 0 ? q = D.EMPTY_P : q = M.getTableHtml(E.default.DeleteRow(c.default(k), V).elems[0]), q = S(z, q), P.cmd.do("insertHTML", q), !0;
          } }, { $elem: c.default("<span>" + U("\u6DFB\u52A0\u5217") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var j = c.default(P.selection.getSelectionStartElem()), I = M.getCurrentColIndex(j.elems[0]), V = M.getTableHtml(z.elems[0]), k = M.getTableHtml(E.default.ProcessingCol(c.default(V), I).elems[0]);
            return k = S(z, k), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", k), !0;
          } }, { $elem: c.default("<span>" + U("\u5220\u9664\u5217") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var j = c.default(P.selection.getSelectionStartElem()), I = M.getCurrentColIndex(j.elems[0]), V = M.getTableHtml(z.elems[0]), k = E.default.DeleteCol(c.default(V), I), K = k.elems[0].children[0].children[0].children.length, q = "";
            return P.selection.createRangeByElem(z), P.selection.restoreSelection(), K === 0 ? q = D.EMPTY_P : q = M.getTableHtml(k.elems[0]), q = S(z, q), P.cmd.do("insertHTML", q), !0;
          } }, { $elem: c.default("<span>" + U("\u8BBE\u7F6E\u8868\u5934") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var j = c.default(P.selection.getSelectionStartElem()), I = M.getRowNode(j.elems[0]);
            if (!I)
              return !0;
            var V = Number(M.getCurrentRowIndex(z.elems[0], I));
            V !== 0 && (V = 0);
            var k = M.getTableHtml(z.elems[0]), K = M.getTableHtml(E.default.setTheHeader(c.default(k), V, "th").elems[0]);
            return K = S(z, K), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", K), !0;
          } }, { $elem: c.default("<span>" + U("\u53D6\u6D88\u8868\u5934") + "</span>"), onClick: function(P, z) {
            var H = c.default(P.selection.getSelectionStartElem()), j = M.getRowNode(H.elems[0]);
            if (!j)
              return !0;
            var I = Number(M.getCurrentRowIndex(z.elems[0], j));
            I !== 0 && (I = 0);
            var V = M.getTableHtml(z.elems[0]), k = M.getTableHtml(E.default.setTheHeader(c.default(V), I, "td").elems[0]);
            return k = S(z, k), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", k), !0;
          } }];
          b = new m.default(g, T, O), b.create();
        }
        function p() {
          b && (b.remove(), b = null);
        }
        return { showTableTooltip: w, hideTableTooltip: p };
      }
      function h(g) {
        var b = g.selection.getSelectionStartElem(), w = g.selection.getSelectionEndElem();
        return (b == null ? void 0 : b.elems[0]) !== (w == null ? void 0 : w.elems[0]);
      }
      function x(g) {
        var b = C(g), w = b.showTableTooltip, p = b.hideTableTooltip;
        g.txt.eventHooks.tableClickEvents.push(w), g.txt.eventHooks.clickEvents.push(p), g.txt.eventHooks.keyupEvents.push(p), g.txt.eventHooks.toolbarClickEvents.push(p), g.txt.eventHooks.menuClickEvents.push(p), g.txt.eventHooks.textScrollEvents.push(p);
      }
      o.default = x;
      function S(g, b) {
        var w = g.elems[0].nextSibling;
        return (!w || w.innerHTML === "<br>") && (b += "" + D.EMPTY_P), b;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(45)), c = s(t(91)), m = s(t(4)), E = s(t(138));
      (0, f.default)(o, "__esModule", { value: !0 });
      var A = t(2), D = A.__importDefault(t(3));
      function C(p, T) {
        for (var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children), U = N[0].children.length, O = document.createElement("tr"), B = 0; B < U; B++) {
          var P = document.createElement("td");
          O.appendChild(P);
        }
        return (0, c.default)(N).call(N, T + 1, 0, O), b(M, N), D.default(M.parentNode);
      }
      function h(p, T) {
        for (var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children), U = function(P) {
          var z, H = [];
          for ((0, m.default)(z = (0, E.default)(N[P].children)).call(z, function(V) {
            H.push(V);
          }); N[P].children.length !== 0; )
            N[P].removeChild(N[P].children[0]);
          var j = D.default(H[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
          (0, c.default)(H).call(H, T + 1, 0, j);
          for (var I = 0; I < H.length; I++)
            N[P].appendChild(H[I]);
        }, O = 0; O < N.length; O++)
          U(O);
        return b(M, N), D.default(M.parentNode);
      }
      function x(p, T) {
        var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children);
        return (0, c.default)(N).call(N, T, 1), b(M, N), D.default(M.parentNode);
      }
      function S(p, T) {
        for (var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children), U = function(P) {
          var z, H = [];
          for ((0, m.default)(z = (0, E.default)(N[P].children)).call(z, function(I) {
            H.push(I);
          }); N[P].children.length !== 0; )
            N[P].removeChild(N[P].children[0]);
          (0, c.default)(H).call(H, T, 1);
          for (var j = 0; j < H.length; j++)
            N[P].appendChild(H[j]);
        }, O = 0; O < N.length; O++)
          U(O);
        return b(M, N), D.default(M.parentNode);
      }
      function g(p, T, M) {
        for (var N = w(p), U = (0, d.default)(Array.prototype).apply(N.children), O = U[T].children, B = document.createElement("tr"), P = function(j) {
          var I, V = document.createElement(M), k = O[j];
          (0, m.default)(I = (0, E.default)(k.childNodes)).call(I, function(K) {
            V.appendChild(K);
          }), B.appendChild(V);
        }, z = 0; z < O.length; z++)
          P(z);
        return (0, c.default)(U).call(U, T, 1, B), b(N, U), D.default(N.parentNode);
      }
      function b(p, T) {
        for (; p.children.length !== 0; )
          p.removeChild(p.children[0]);
        for (var M = 0; M < T.length; M++)
          p.appendChild(T[M]);
      }
      function w(p) {
        var T = p.elems[0].children[0];
        return T.nodeName === "COLGROUP" && (T = p.elems[0].children[p.elems[0].children.length - 1]), T;
      }
      o.default = { ProcessingRow: C, ProcessingCol: h, DeleteRow: x, DeleteCol: S, setTheHeader: g };
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
      var s = t(39), f = t(29), d = t(113), c = t(111), m = t(34), E = t(69), A = t(112);
      l.exports = function(C) {
        var h = f(C), x = typeof this == "function" ? this : Array, S = arguments.length, g = S > 1 ? arguments[1] : void 0, b = g !== void 0, w = A(h), p = 0, T, M, N, U, O, B;
        if (b && (g = s(g, S > 2 ? arguments[2] : void 0, 2)), w != null && !(x == Array && c(w)))
          for (U = w.call(h), O = U.next, M = new x(); !(N = O.call(U)).done; p++)
            B = b ? d(U, g, [N.value, p], !0) : N.value, E(M, p, B);
        else
          for (T = m(h.length), M = new x(T); T > p; p++)
            B = b ? g(h[p], p) : h[p], E(M, p, B);
        return M.length = p, M;
      };
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(138));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(3)), A = function() {
        function D(C) {
          this.editor = C;
        }
        return D.prototype.getRowNode = function(C) {
          var h, x = E.default(C).elems[0];
          return x.parentNode && (x = (h = E.default(x).parentUntil("TR", x)) === null || h === void 0 ? void 0 : h.elems[0]), x;
        }, D.prototype.getCurrentRowIndex = function(C, h) {
          var x, S = 0, g = C.children[0];
          return g.nodeName === "COLGROUP" && (g = C.children[C.children.length - 1]), (0, d.default)(x = (0, c.default)(g.children)).call(x, function(b, w) {
            b === h && (S = w);
          }), S;
        }, D.prototype.getCurrentColIndex = function(C) {
          var h, x, S = 0, g = E.default(C).getNodeName() === "TD" || E.default(C).getNodeName() === "TH" ? C : (x = E.default(C).parentUntil("TD", C)) === null || x === void 0 ? void 0 : x.elems[0], b = E.default(g).parent();
          return (0, d.default)(h = (0, c.default)(b.elems[0].children)).call(h, function(w, p) {
            w === g && (S = p);
          }), S;
        }, D.prototype.getTableHtml = function(C) {
          var h = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + E.default(C).html() + "</table>";
          return h;
        }, D;
      }();
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.bindEventKeyboardEvent = o.bindClickEvent = void 0;
      var d = t(2), c = d.__importDefault(t(3));
      function m(D) {
        if (!D.length)
          return !1;
        var C = D.elems[0];
        return C.nodeName === "P" && C.innerHTML === "<br>";
      }
      function E(D) {
        function C(h, x) {
          if (x.detail >= 3) {
            var S = window.getSelection();
            if (S) {
              var g = S.focusNode, b = S.anchorNode, w = c.default(b == null ? void 0 : b.parentElement);
              if (!h.isContain(c.default(g))) {
                var p = w.elems[0].tagName === "TD" ? w : w.parentUntilEditor("td", D);
                if (p) {
                  var T = D.selection.getRange();
                  T == null || T.setEnd(p.elems[0], p.elems[0].childNodes.length), D.selection.restoreSelection();
                }
              }
            }
          }
        }
        D.txt.eventHooks.tableClickEvents.push(C);
      }
      o.bindClickEvent = E;
      function A(D) {
        var C = D.txt, h = D.selection, x = C.eventHooks.keydownEvents;
        x.push(function(S) {
          D.selection.saveRange();
          var g = h.getSelectionContainerElem();
          if (g) {
            var b = g.getNodeTop(D), w = b.length && b.prev().length ? b.prev() : null;
            if (w && w.getNodeName() === "TABLE" && h.isSelectionEmpty() && h.getCursorPos() === 0 && S.keyCode === 8) {
              var p = b.next(), T = !!p.length;
              T && m(b) && (b.remove(), D.selection.setRangeToElem(p.elems[0])), S.preventDefault();
            }
          }
        });
      }
      o.bindEventKeyboardEvent = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 }), o.formatCodeHtml = void 0;
      var c = t(2), m = c.__importDefault(t(37)), E = c.__importDefault(t(3)), A = t(6), D = c.__importDefault(t(402)), C = c.__importDefault(t(139)), h = c.__importDefault(t(32)), x = c.__importDefault(t(403));
      function S(b, w) {
        if (!w)
          return w;
        return w = T(w), w = p(w), w = A.replaceSpecialSymbol(w), w;
        function p(M) {
          var N = M.match(/<pre[\s|\S]+?\/pre>/g);
          return N === null || (0, d.default)(N).call(N, function(U) {
            M = M.replace(U, U.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
          }), M;
        }
        function T(M) {
          var N, U = M.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
          if (!U || !U.length)
            return M;
          for (var O = (0, d.default)(N = A.deepClone(U)).call(N, function(P) {
            return P = P.replace(/<span\sclass="hljs[^>]+>/, ""), P.replace(/<\/span>/, "");
          }), B = 0; B < U.length; B++)
            M = M.replace(U[B], O[B]);
          return T(M);
        }
      }
      o.formatCodeHtml = S;
      var g = function(b) {
        c.__extends(w, b);
        function w(p) {
          var T = this, M = E.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
          return T = b.call(this, M, p) || this, x.default(p), T;
        }
        return w.prototype.insertLineCode = function(p) {
          var T = this.editor, M = E.default("<code>" + p + "</code>");
          T.cmd.do("insertElem", M), T.selection.createRangeByElem(M, !1), T.selection.restoreSelection();
        }, w.prototype.clickHandler = function() {
          var p = this.editor, T = p.selection.getSelectionText();
          this.isActive || (p.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(T));
        }, w.prototype.createPanel = function(p, T) {
          var M = D.default(this.editor, p, T), N = new h.default(this, M);
          N.create();
        }, w.prototype.tryChangeActive = function() {
          var p = this.editor;
          C.default(p) ? this.active() : this.unActive();
        }, w;
      }(m.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = t(6), E = c.__importDefault(t(3)), A = c.__importDefault(t(139)), D = t(7);
      function C(h, x, S) {
        var g, b = m.getRandom("input-iframe"), w = m.getRandom("select"), p = m.getRandom("btn-ok");
        function T(O) {
          var B, P = A.default(h);
          P && M();
          var z = (B = h.selection.getSelectionStartElem()) === null || B === void 0 ? void 0 : B.elems[0].innerHTML;
          z && h.cmd.do("insertHTML", D.EMPTY_P), h.cmd.do("insertHTML", O);
          var H = h.selection.getSelectionStartElem(), j = H == null ? void 0 : H.getNodeTop(h);
          (j == null ? void 0 : j.getNextSibling().elems.length) === 0 && E.default(D.EMPTY_P).insertAfter(j);
        }
        function M() {
          if (!!A.default(h)) {
            var O = h.selection.getSelectionStartElem(), B = O == null ? void 0 : O.getNodeTop(h);
            !B || (h.selection.createRangeByElem(B), h.selection.restoreSelection());
          }
        }
        var N = function(B) {
          return h.i18next.t(B);
        }, U = {
          width: 500,
          height: 0,
          tabs: [{
            title: N("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
            tpl: `<div>
                        <select name="" id="` + w + `">
                            ` + (0, d.default)(g = h.config.languageType).call(g, function(O) {
              return "<option " + (S == O ? "selected" : "") + ' value ="' + O + '">' + O + "</option>";
            }) + `
                        </select>
                        <textarea id="` + b + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + x.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + p + '" class="right">' + (A.default(h) ? N("\u4FEE\u6539") : N("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + p, type: "click", fn: function() {
                var B, P, z = document.getElementById(b), H = E.default("#" + w), j = H.val(), I = z.value;
                if (h.highlight ? B = h.highlight.highlightAuto(I).value : B = "<xmp>" + I + "</xmp>", !!I)
                  return A.default(h) ? !1 : (P = '<pre><code class="' + j + '">' + B + "</code></pre>", T(P), !0);
              } }
            ]
          }]
        };
        return U;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(404)), m = d.__importDefault(t(405));
      function E(A) {
        c.default(A), m.default(A);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function E(D) {
        var C;
        function h(S) {
          var g = "menus.panelMenus.code.", b = function(T, M) {
            return M === void 0 && (M = g), D.i18next.t(M + T);
          }, w = [{ $elem: c.default("<span>" + b("\u5220\u9664\u4EE3\u7801") + "</span>"), onClick: function(T, M) {
            return M.remove(), !0;
          } }];
          C = new m.default(D, S, w), C.create();
        }
        function x() {
          C && (C.remove(), C = null);
        }
        return { showCodeTooltip: h, hideCodeTooltip: x };
      }
      o.createShowHideFn = E;
      function A(D) {
        var C = E(D), h = C.showCodeTooltip, x = C.hideCodeTooltip;
        D.txt.eventHooks.codeClickEvents.push(h), D.txt.eventHooks.clickEvents.push(x), D.txt.eventHooks.toolbarClickEvents.push(x), D.txt.eventHooks.menuClickEvents.push(x), D.txt.eventHooks.textScrollEvents.push(x);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = t(7), m = d.__importDefault(t(3));
      function E(A) {
        var D = A.$textElem, C = A.selection, h = A.txt, x = h.eventHooks.keydownEvents;
        x.push(function(S) {
          var g;
          if (S.keyCode === 40) {
            var b = C.getSelectionContainerElem(), w = (g = D.children()) === null || g === void 0 ? void 0 : g.last();
            if ((b == null ? void 0 : b.elems[0].tagName) === "XMP" && (w == null ? void 0 : w.elems[0].tagName) === "PRE") {
              var p = m.default(c.EMPTY_P);
              D.append(p);
            }
          }
        }), x.push(function(S) {
          A.selection.saveRange();
          var g = C.getSelectionContainerElem();
          if (g) {
            var b = g.getNodeTop(A), w = b == null ? void 0 : b.prev(), p = b == null ? void 0 : b.getNextSibling();
            if (w.length && (w == null ? void 0 : w.getNodeName()) === "PRE" && p.length === 0 && C.getCursorPos() === 0 && S.keyCode === 8) {
              var T = m.default(c.EMPTY_P);
              D.append(T);
            }
          }
        });
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(23)), m = d.__importDefault(t(3)), E = d.__importDefault(t(407)), A = t(6), D = t(7), C = function(h) {
        d.__extends(x, h);
        function x(S) {
          var g = this, b = m.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
          return g = h.call(this, b, S) || this, E.default(S), g;
        }
        return x.prototype.clickHandler = function() {
          var S = this.editor, g = S.selection.getRange(), b = S.selection.getSelectionContainerElem();
          if (!!(b != null && b.length)) {
            var w = m.default(b.elems[0]), p = w.parentUntil("TABLE", b.elems[0]), T = w.children();
            w.getNodeName() !== "CODE" && (p && m.default(p.elems[0]).getNodeName() === "TABLE" || T && T.length !== 0 && m.default(T.elems[0]).getNodeName() === "IMG" && !(g != null && g.collapsed) || this.createSplitLine());
          }
        }, x.prototype.createSplitLine = function() {
          var S = "<hr/>" + D.EMPTY_P;
          A.UA.isFirefox && (S = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", S);
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(c.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(408));
      function m(E) {
        c.default(E);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = d.__importDefault(t(38));
      function E(D) {
        var C;
        function h(S) {
          var g = [{ $elem: c.default("<span>" + D.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"), onClick: function(w, p) {
            return w.selection.createRangeByElem(p), w.selection.restoreSelection(), w.cmd.do("delete"), !0;
          } }];
          C = new m.default(D, S, g), C.create();
        }
        function x() {
          C && (C.remove(), C = null);
        }
        return { showSplitLineTooltip: h, hideSplitLineTooltip: x };
      }
      function A(D) {
        var C = E(D), h = C.showSplitLineTooltip, x = C.hideSplitLineTooltip;
        D.txt.eventHooks.splitLineEvents.push(h), D.txt.eventHooks.clickEvents.push(x), D.txt.eventHooks.keyupEvents.push(x), D.txt.eventHooks.toolbarClickEvents.push(x), D.txt.eventHooks.menuClickEvents.push(x), D.txt.eventHooks.textScrollEvents.push(x);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = c.__importDefault(t(23)), A = t(97), D = c.__importDefault(t(415)), C = c.__importDefault(t(140)), h = function(x) {
        c.__extends(S, x);
        function S(g) {
          var b = this, w = m.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
          return b = x.call(this, w, g) || this, D.default(g), b;
        }
        return S.prototype.clickHandler = function() {
          var g = this.editor;
          A.isAllTodo(g) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
        }, S.prototype.tryChangeActive = function() {
          A.isAllTodo(this.editor) ? this.active() : this.unActive();
        }, S.prototype.setTodo = function() {
          var g = this.editor, b = g.selection.getSelectionRangeTopNodes();
          (0, d.default)(b).call(b, function(w) {
            var p, T = w == null ? void 0 : w.getNodeName();
            if (T === "P") {
              var M = C.default(w), N = M.getTodo(), U = (p = N.children()) === null || p === void 0 ? void 0 : p.getNode();
              N.insertAfter(w), g.selection.moveCursor(U), w.remove();
            }
          }), this.tryChangeActive();
        }, S.prototype.cancelTodo = function() {
          var g = this.editor, b = g.selection.getSelectionRangeTopNodes();
          (0, d.default)(b).call(b, function(w) {
            var p, T, M, N = (T = (p = w.childNodes()) === null || p === void 0 ? void 0 : p.childNodes()) === null || T === void 0 ? void 0 : T.clone(!0), U = m.default("<p></p>");
            U.append(N), U.insertAfter(w), (M = U.childNodes()) === null || M === void 0 || M.get(0).remove(), g.selection.moveCursor(U.getNode()), w.remove();
          });
        }, S;
      }(E.default);
      o.default = h;
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
      var s = t(5), f = t(30).every, d = t(67), c = t(22), m = d("every"), E = c("every");
      s({ target: "Array", proto: !0, forced: !m || !E }, { every: function(D) {
        return f(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3)), E = t(97), A = c.__importDefault(t(140)), D = t(97), C = t(7);
      function h(x) {
        function S(p) {
          var T, M;
          if (E.isAllTodo(x)) {
            p.preventDefault();
            var N = x.selection, U = N.getSelectionRangeTopNodes()[0], O = (T = U.childNodes()) === null || T === void 0 ? void 0 : T.get(0), B = (M = window.getSelection()) === null || M === void 0 ? void 0 : M.anchorNode, P = N.getRange();
            if (!(P != null && P.collapsed)) {
              var z = P == null ? void 0 : P.commonAncestorContainer.childNodes, H = P == null ? void 0 : P.startContainer, j = P == null ? void 0 : P.endContainer, I = P == null ? void 0 : P.startOffset, V = P == null ? void 0 : P.endOffset, k = 0, K = 0, q = [];
              z == null || (0, d.default)(z).call(z, function(pe, Pe) {
                pe.contains(H) && (k = Pe), pe.contains(j) && (K = Pe);
              }), K - k > 1 && (z == null || (0, d.default)(z).call(z, function(pe, Pe) {
                Pe <= k || Pe >= K || q.push(pe);
              }), (0, d.default)(q).call(q, function(pe) {
                pe.remove();
              })), D.dealTextNode(H, I), D.dealTextNode(j, V, !1), x.selection.moveCursor(j, 0);
            }
            if (U.text() === "") {
              var X = m.default(C.EMPTY_P);
              X.insertAfter(U), N.moveCursor(X.getNode()), U.remove();
              return;
            }
            var _ = N.getCursorPos(), le = E.getCursorNextNode(O == null ? void 0 : O.getNode(), B, _), be = A.default(m.default(le)), ve = be.getInputContainer(), ce = ve.parent().getNode(), ae = be.getTodo(), re = ve.getNode().nextSibling;
            if ((O == null ? void 0 : O.text()) === "" && (O == null || O.append(m.default("<br>"))), ae.insertAfter(U), !re || (re == null ? void 0 : re.textContent) === "") {
              if ((re == null ? void 0 : re.nodeName) !== "BR") {
                var se = m.default("<br>");
                se.insertAfter(ve);
              }
              N.moveCursor(ce, 1);
            } else
              N.moveCursor(ce);
          }
        }
        function g(p) {
          var T, M;
          if (E.isAllTodo(x)) {
            var N = x.selection, U = N.getSelectionRangeTopNodes()[0], O = (T = U.childNodes()) === null || T === void 0 ? void 0 : T.getNode(), B = m.default("<p></p>"), P = B.getNode(), z = (M = window.getSelection()) === null || M === void 0 ? void 0 : M.anchorNode, H = N.getCursorPos(), j = z.previousSibling;
            if (U.text() === "") {
              p.preventDefault();
              var I = m.default(C.EMPTY_P);
              I.insertAfter(U), U.remove(), N.moveCursor(I.getNode(), 0);
              return;
            }
            if ((j == null ? void 0 : j.nodeName) === "SPAN" && j.childNodes[0].nodeName === "INPUT" && H === 0) {
              var V;
              p.preventDefault(), O == null || (0, d.default)(V = O.childNodes).call(V, function(k, K) {
                K !== 0 && P.appendChild(k.cloneNode(!0));
              }), B.insertAfter(U), U.remove();
            }
          }
        }
        function b() {
          var p = x.selection, T = p.getSelectionRangeTopNodes()[0];
          T && D.isTodo(T) && T.text() === "" && (m.default(C.EMPTY_P).insertAfter(T), T.remove());
        }
        function w(p) {
          p && p.target instanceof HTMLInputElement && p.target.type === "checkbox" && (p.target.checked ? p.target.setAttribute("checked", "true") : p.target.removeAttribute("checked"));
        }
        x.txt.eventHooks.enterDownEvents.push(S), x.txt.eventHooks.deleteUpEvents.push(b), x.txt.eventHooks.deleteDownEvents.push(g), x.txt.eventHooks.clickEvents.push(w);
      }
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 }), o.selectorValidator = void 0;
      var d = t(2), c = d.__importDefault(t(3)), m = t(6), E = t(7), A = d.__importDefault(t(129)), D = { border: "1px solid #c9d8db", toolbarBgColor: "#FFF", toolbarBottomBorder: "1px solid #EEE" };
      function C(x) {
        var S = x.toolbarSelector, g = c.default(S), b = x.textSelector, w = x.config, p = w.height, T = x.i18next, M = c.default("<div></div>"), N = c.default("<div></div>"), U, O, B = null;
        b == null ? (O = g.children(), g.append(M).append(N), M.css("background-color", D.toolbarBgColor).css("border", D.border).css("border-bottom", D.toolbarBottomBorder), N.css("border", D.border).css("border-top", "none").css("height", p + "px")) : (g.append(M), B = c.default(b).children(), c.default(b).append(N), O = N.children()), U = c.default("<div></div>"), U.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
        var P, z = x.config.placeholder;
        z !== A.default.placeholder ? P = c.default("<div>" + z + "</div>") : P = c.default("<div>" + T.t(z) + "</div>"), P.addClass("placeholder"), O && O.length ? (U.append(O), P.hide()) : U.append(c.default(E.EMPTY_P)), B && B.length && (U.append(B), P.hide()), N.append(U), N.append(P), M.addClass("w-e-toolbar").css("z-index", x.zIndex.get("toolbar")), N.addClass("w-e-text-container"), N.css("z-index", x.zIndex.get()), U.addClass("w-e-text");
        var H = m.getRandom("toolbar-elem");
        M.attr("id", H);
        var j = m.getRandom("text-elem");
        U.attr("id", j);
        var I = N.getBoundingClientRect().height, V = U.getBoundingClientRect().height;
        I !== V && U.css("min-height", I + "px"), x.$toolbarElem = M, x.$textContainerElem = N, x.$textElem = U, x.toolbarElemId = H, x.textElemId = j;
      }
      o.default = C;
      function h(x) {
        var S = "data-we-id", g = /^wangEditor-\d+$/, b = x.textSelector, w = x.toolbarSelector, p = { bar: c.default("<div></div>"), text: c.default("<div></div>") };
        if (w == null)
          throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
        if (p.bar = c.default(w), !p.bar.elems.length)
          throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + w);
        if (g.test(p.bar.attr(S)))
          throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        if (b) {
          if (p.text = c.default(b), !p.text.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + b);
          if (g.test(p.text.attr(S)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        }
        p.bar.attr(S, x.id), p.text.attr(S, x.id), x.beforeDestroy(function() {
          p.bar.removeAttr(S), p.text.removeAttr(S);
        });
      }
      o.selectorValidator = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(3)), m = t(7);
      function E(A, D) {
        var C = A.$textElem, h = C.children();
        if (!h || !h.length) {
          C.append(c.default(m.EMPTY_P)), E(A);
          return;
        }
        var x = h.last();
        if (D) {
          var S = x.html().toLowerCase(), g = x.getNodeName();
          if (S !== "<br>" && S !== "<br/>" || g !== "P") {
            C.append(c.default(m.EMPTY_P)), E(A);
            return;
          }
        }
        A.selection.createRangeByElem(x, !1, !0), A.config.focus ? A.selection.restoreSelection() : A.selection.clearWindowSelectionRange();
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      function E(S) {
        A(S), D(S), C(S);
      }
      function A(S) {
        S.txt.eventHooks.changeEvents.push(function() {
          var g = S.config.onchange;
          if (g) {
            var b = S.txt.html() || "";
            S.isFocus = !0, g(b);
          }
          S.txt.togglePlaceholder();
        });
      }
      function D(S) {
        S.isFocus = !1;
        function g(b) {
          var w = b.target, p = m.default(w), T = S.$textElem, M = S.$toolbarElem, N = T.isContain(p), U = M.isContain(p), O = M.elems[0] == b.target;
          if (N)
            S.isFocus || x(S), S.isFocus = !0;
          else {
            if (U && !O || !S.isFocus)
              return;
            h(S), S.isFocus = !1;
          }
        }
        document.activeElement === S.$textElem.elems[0] && S.config.focus && (x(S), S.isFocus = !0), m.default(document).on("click", g), S.beforeDestroy(function() {
          m.default(document).off("click", g);
        });
      }
      function C(S) {
        S.$textElem.on("compositionstart", function() {
          S.isComposing = !0, S.txt.togglePlaceholder();
        }).on("compositionend", function() {
          S.isComposing = !1, S.txt.togglePlaceholder();
        });
      }
      function h(S) {
        var g, b = S.config, w = b.onblur, p = S.txt.html() || "";
        (0, d.default)(g = S.txt.eventHooks.onBlurEvents).call(g, function(T) {
          return T();
        }), w(p);
      }
      function x(S) {
        var g = S.config, b = g.onfocus, w = S.txt.html() || "";
        b(w);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      function d(c) {
        var m = c.config, E = m.lang, A = m.languages;
        if (c.i18next != null) {
          try {
            c.i18next.init({ ns: "wangEditor", lng: E, defaultNS: "wangEditor", resources: A });
          } catch (D) {
            throw new Error("i18next:" + D);
          }
          return;
        }
        c.i18next = { t: function(C) {
          var h = C.split(".");
          return h[h.length - 1];
        } };
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31));
      (0, f.default)(o, "__esModule", { value: !0 }), o.setUnFullScreen = o.setFullScreen = void 0;
      var c = t(2), m = c.__importDefault(t(3));
      t(421);
      var E = "w-e-icon-fullscreen", A = "w-e-icon-fullscreen_exit", D = "w-e-full-screen-editor";
      o.setFullScreen = function(h) {
        var x = m.default(h.toolbarSelector), S = h.$textContainerElem, g = h.$toolbarElem, b = (0, d.default)(g).call(g, "i." + E), w = h.config;
        b.removeClass(E), b.addClass(A), x.addClass(D), x.css("z-index", w.zIndexFullScreen);
        var p = g.getBoundingClientRect();
        S.css("height", "calc(100% - " + p.height + "px)");
      }, o.setUnFullScreen = function(h) {
        var x = m.default(h.toolbarSelector), S = h.$textContainerElem, g = h.$toolbarElem, b = (0, d.default)(g).call(g, "i." + A), w = h.config;
        b.removeClass(A), b.addClass(E), x.removeClass(D), x.css("z-index", "auto"), S.css("height", w.height + "px");
      };
      var C = function(x) {
        if (!x.textSelector && !!x.config.showFullScreen) {
          var S = x.$toolbarElem, g = m.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + E + `"></i>
        </div>`);
          g.on("click", function(b) {
            var w, p = (0, d.default)(w = m.default(b.currentTarget)).call(w, "i");
            p.hasClass(E) ? (g.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), o.setFullScreen(x)) : (g.attr("data-title", "\u5168\u5C4F"), o.setUnFullScreen(x));
          }), S.append(g);
        }
      };
      o.default = C;
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
      var c = function(E, A) {
        var D, C = E.isEnable ? E.$textElem : (0, d.default)(D = E.$textContainerElem).call(D, ".w-e-content-mantle"), h = (0, d.default)(C).call(C, "[id='" + A + "']"), x = h.getOffsetData().top;
        C.scrollTop(x);
      };
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(128)), m = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 }, E = function() {
        function A() {
          this.tier = m, this.baseZIndex = c.default.zIndex;
        }
        return A.prototype.get = function(D) {
          return D && this.tier[D] ? this.baseZIndex + this.tier[D] : this.baseZIndex;
        }, A.prototype.init = function(D) {
          this.baseZIndex == c.default.zIndex && (this.baseZIndex = D.config.zIndex);
        }, A;
      }();
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(70)), c = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), E = m.__importDefault(t(426)), A = t(6), D = t(7);
      function C(x, S) {
        return (0, d.default)(x).call(x, function(g) {
          var b = g.type, w = g.target, p = g.attributeName;
          return b != "attributes" || b == "attributes" && (p == "contenteditable" || w != S);
        });
      }
      var h = function(x) {
        m.__extends(S, x);
        function S(g) {
          var b = x.call(this, function(w, p) {
            var T;
            if (w = C(w, p.target), (T = b.data).push.apply(T, w), g.isCompatibleMode)
              b.asyncSave();
            else if (!g.isComposing)
              return b.asyncSave();
          }) || this;
          return b.editor = g, b.data = [], b.asyncSave = D.EMPTY_FN, b;
        }
        return S.prototype.save = function() {
          this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
        }, S.prototype.emit = function() {
          var g;
          (0, c.default)(g = this.editor.txt.eventHooks.changeEvents).call(g, function(b) {
            return b();
          });
        }, S.prototype.observe = function() {
          var g = this;
          x.prototype.observe.call(this, this.editor.$textElem.elems[0]);
          var b = this.editor.config.onchangeTimeout;
          this.asyncSave = A.debounce(function() {
            g.save();
          }, b), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
            g.asyncSave();
          });
        }, S;
      }(E.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function c(m, E) {
          var A = this;
          this.options = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, characterData: !0, characterDataOldValue: !0 }, this.callback = function(D) {
            m(D, A);
          }, this.observer = new MutationObserver(this.callback), E && (this.options = E);
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
      var d = t(2), c = d.__importDefault(t(428)), m = d.__importDefault(t(435)), E = d.__importDefault(t(436)), A = function() {
        function D(C) {
          this.editor = C, this.content = new c.default(C), this.scroll = new m.default(C), this.range = new E.default(C);
        }
        return (0, f.default)(D.prototype, "size", {
          get: function() {
            return this.scroll.size;
          },
          enumerable: !1,
          configurable: !0
        }), D.prototype.observe = function() {
          this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
        }, D.prototype.save = function(C) {
          C.length && (this.content.save(C), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
        }, D.prototype.revoke = function() {
          this.editor.change.disconnect();
          var C = this.content.revoke();
          C && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), C && this.editor.change.emit();
        }, D.prototype.restore = function() {
          this.editor.change.disconnect();
          var C = this.content.restore();
          C && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), C && this.editor.change.emit();
        }, D;
      }();
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(429)), m = d.__importDefault(t(433)), E = function() {
        function A(D) {
          this.editor = D;
        }
        return A.prototype.observe = function() {
          this.editor.isCompatibleMode ? this.cache = new m.default(this.editor) : this.cache = new c.default(this.editor), this.cache.observe();
        }, A.prototype.save = function(D) {
          this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(D);
        }, A.prototype.revoke = function() {
          var D;
          return (D = this.cache) === null || D === void 0 ? void 0 : D.revoke();
        }, A.prototype.restore = function() {
          var D;
          return (D = this.cache) === null || D === void 0 ? void 0 : D.restore();
        }, A;
      }();
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(98)), m = d.__importDefault(t(431)), E = t(432), A = function(D) {
        d.__extends(C, D);
        function C(h) {
          var x = D.call(this, h.config.historyMaxSize) || this;
          return x.editor = h, x;
        }
        return C.prototype.observe = function() {
          this.resetMaxSize(this.editor.config.historyMaxSize);
        }, C.prototype.compile = function(h) {
          return this.save(m.default(h)), this;
        }, C.prototype.revoke = function() {
          return D.prototype.revoke.call(this, function(h) {
            E.revoke(h);
          });
        }, C.prototype.restore = function() {
          return D.prototype.restore.call(this, function(h) {
            E.restore(h);
          });
        }, C;
      }(c.default);
      o.default = A;
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
      function E(g) {
        switch (g) {
          case "childList":
            return "node";
          case "attributes":
            return "attr";
          default:
            return "text";
        }
      }
      o.compileType = E;
      function A(g) {
        switch (g.type) {
          case "attributes":
            return g.target.getAttribute(g.attributeName) || "";
          case "characterData":
            return g.target.textContent;
          default:
            return "";
        }
      }
      o.compileValue = A;
      function D(g) {
        var b = {};
        return g.addedNodes.length && (b.add = m.toArray(g.addedNodes)), g.removedNodes.length && (b.remove = m.toArray(g.removedNodes)), b;
      }
      o.complieNodes = D;
      function C(g) {
        var b;
        return g.previousSibling ? b = { type: "before", target: g.previousSibling } : g.nextSibling ? b = { type: "after", target: g.nextSibling } : b = { type: "parent", target: g.target }, b;
      }
      o.compliePosition = C;
      var h = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
      function x(g) {
        var b = [], w = !1, p = [];
        return (0, d.default)(g).call(g, function(T, M) {
          var N = { type: E(T.type), target: T.target, attr: T.attributeName || "", value: A(T) || "", oldValue: T.oldValue || "", nodes: D(T), position: C(T) };
          if (b.push(N), !!m.UA.isFirefox) {
            if (w && T.addedNodes.length && T.addedNodes[0].nodeType == 1) {
              var U = T.addedNodes[0], O = { type: "node", target: U, attr: "", value: "", oldValue: "", nodes: { add: [w] }, position: { type: "parent", target: U } };
              (0, c.default)(h).call(h, U.nodeName) != -1 ? (O.nodes.add = m.toArray(U.childNodes), b.push(O)) : w.nodeType == 3 ? (S(U, p) && (O.nodes.add = m.toArray(U.childNodes)), b.push(O)) : (0, c.default)(h).call(h, T.target.nodeName) == -1 && S(U, p) && (O.nodes.add = m.toArray(U.childNodes), b.push(O));
            }
            N.type == "node" && T.removedNodes.length == 1 ? (w = T.removedNodes[0], p.push(w)) : (w = !1, p.length = 0);
          }
        }), b;
      }
      o.default = x;
      function S(g, b) {
        for (var w = 0, p = b.length - 1; p > 0 && g.contains(b[p]); p--)
          w++;
        return w;
      }
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(4)), c = s(t(94));
      (0, f.default)(o, "__esModule", { value: !0 }), o.restore = o.revoke = void 0;
      function m(p, T) {
        var M = p.position.target;
        switch (p.position.type) {
          case "before":
            M.nextSibling ? (M = M.nextSibling, (0, d.default)(T).call(T, function(N) {
              p.target.insertBefore(N, M);
            })) : (0, d.default)(T).call(T, function(N) {
              p.target.appendChild(N);
            });
            break;
          case "after":
            (0, d.default)(T).call(T, function(N) {
              p.target.insertBefore(N, M);
            });
            break;
          default:
            (0, d.default)(T).call(T, function(N) {
              M.appendChild(N);
            });
            break;
        }
      }
      function E(p) {
        for (var T = 0, M = (0, c.default)(p.nodes); T < M.length; T++) {
          var N = M[T], U = N[0], O = N[1];
          switch (U) {
            case "add":
              (0, d.default)(O).call(O, function(B) {
                p.target.removeChild(B);
              });
              break;
            default: {
              m(p, O);
              break;
            }
          }
        }
      }
      function A(p) {
        var T = p.target;
        p.oldValue == null ? T.removeAttribute(p.attr) : T.setAttribute(p.attr, p.oldValue);
      }
      function D(p) {
        p.target.textContent = p.oldValue;
      }
      var C = { node: E, text: D, attr: A };
      function h(p) {
        for (var T = p.length - 1; T > -1; T--) {
          var M = p[T];
          C[M.type](M);
        }
      }
      o.revoke = h;
      function x(p) {
        for (var T = 0, M = (0, c.default)(p.nodes); T < M.length; T++) {
          var N = M[T], U = N[0], O = N[1];
          switch (U) {
            case "add": {
              m(p, O);
              break;
            }
            default: {
              (0, d.default)(O).call(O, function(B) {
                B.parentNode.removeChild(B);
              });
              break;
            }
          }
        }
      }
      function S(p) {
        p.target.textContent = p.value;
      }
      function g(p) {
        p.target.setAttribute(p.attr, p.value);
      }
      var b = { node: x, text: S, attr: g };
      function w(p) {
        for (var T = 0, M = p; T < M.length; T++) {
          var N = M[T];
          b[N.type](N);
        }
      }
      o.restore = w;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(434), c = function() {
        function m(E) {
          this.editor = E, this.data = new d.TailChain();
        }
        return m.prototype.observe = function() {
          this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
        }, m.prototype.save = function() {
          return this.data.insertLast(this.editor.$textElem.html()), this;
        }, m.prototype.revoke = function() {
          var E = this.data.prev();
          return E ? (this.editor.$textElem.html(E), !0) : !1;
        }, m.prototype.restore = function() {
          var E = this.data.next();
          return E ? (this.editor.$textElem.html(E), !0) : !1;
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
        return m.prototype.resetMax = function(E) {
          E = Math.abs(E), E && (this.max = E);
        }, (0, f.default)(m.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), m.prototype.insertLast = function(E) {
          if (this.isRe) {
            var A;
            (0, d.default)(A = this.data).call(A, this.point + 1), this.isRe = !1;
          }
          for (this.data.push(E); this.max && this.size > this.max; )
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
      var d = t(2), c = d.__importDefault(t(98)), m = function(E) {
        d.__extends(A, E);
        function A(D) {
          var C = E.call(this, D.config.historyMaxSize) || this;
          return C.editor = D, C.last = 0, C.target = D.$textElem.elems[0], C;
        }
        return A.prototype.observe = function() {
          var D = this;
          this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
            D.last = D.target.scrollTop;
          }), this.resetMaxSize(this.editor.config.historyMaxSize);
        }, A.prototype.save = function() {
          return E.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
        }, A.prototype.revoke = function() {
          var D = this;
          return E.prototype.revoke.call(this, function(C) {
            D.target.scrollTop = C[0];
          });
        }, A.prototype.restore = function() {
          var D = this;
          return E.prototype.restore.call(this, function(C) {
            D.target.scrollTop = C[1];
          });
        }, A;
      }(c.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
      var d = t(2), c = d.__importDefault(t(98)), m = d.__importDefault(t(3)), E = t(6);
      function A(C) {
        return { start: [C.startContainer, C.startOffset], end: [C.endContainer, C.endOffset], root: C.commonAncestorContainer, collapsed: C.collapsed };
      }
      var D = function(C) {
        d.__extends(h, C);
        function h(x) {
          var S = C.call(this, x.config.historyMaxSize) || this;
          return S.editor = x, S.lastRange = A(document.createRange()), S.root = x.$textElem.elems[0], S.updateLastRange = E.debounce(function() {
            S.lastRange = A(S.rangeHandle);
          }, x.config.onchangeTimeout), S;
        }
        return (0, f.default)(h.prototype, "rangeHandle", {
          get: function() {
            var S = document.getSelection();
            return S && S.rangeCount ? S.getRangeAt(0) : document.createRange();
          },
          enumerable: !1,
          configurable: !0
        }), h.prototype.observe = function() {
          var x = this;
          this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
          function S() {
            var b = x.rangeHandle;
            (x.root === b.commonAncestorContainer || x.root.contains(b.commonAncestorContainer)) && (x.editor.isComposing || x.updateLastRange());
          }
          function g(b) {
            (b.key == "Backspace" || b.key == "Delete") && x.updateLastRange();
          }
          m.default(document).on("selectionchange", S), this.editor.beforeDestroy(function() {
            m.default(document).off("selectionchange", S);
          }), x.editor.$textElem.on("keydown", g);
        }, h.prototype.save = function() {
          var x = A(this.rangeHandle);
          return C.prototype.save.call(this, [this.lastRange, x]), this.lastRange = x, this;
        }, h.prototype.set = function(x) {
          try {
            if (x) {
              var S = this.rangeHandle;
              return S.setStart.apply(S, x.start), S.setEnd.apply(S, x.end), this.editor.menus.changeActive(), !0;
            }
          } catch {
            return !1;
          }
          return !1;
        }, h.prototype.revoke = function() {
          var x = this;
          return C.prototype.revoke.call(this, function(S) {
            x.set(S[0]);
          });
        }, h.prototype.restore = function() {
          var x = this;
          return C.prototype.restore.call(this, function(S) {
            x.set(S[1]);
          });
        }, h;
      }(c.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(31));
      (0, f.default)(o, "__esModule", { value: !0 });
      var c = t(2), m = c.__importDefault(t(3));
      t(438);
      function E(A) {
        var D = !1, C, h;
        A.txt.eventHooks.changeEvents.push(function() {
          D && (0, d.default)(C).call(C, ".w-e-content-preview").html(A.$textElem.html());
        });
        function x() {
          if (!D) {
            A.$textElem.hide();
            var g = A.zIndex.get("textContainer"), b = A.txt.html();
            C = m.default('<div class="w-e-content-mantle" style="z-index:' + g + `">
                <div class="w-e-content-preview w-e-text">` + b + `</div>
            </div>`), A.$textContainerElem.append(C);
            var w = A.zIndex.get("menu");
            h = m.default('<div class="w-e-menue-mantle" style="z-index:' + w + '"></div>'), A.$toolbarElem.append(h), D = !0, A.isEnable = !1;
          }
        }
        function S() {
          !D || (C.remove(), h.remove(), A.$textElem.show(), D = !1, A.isEnable = !0);
        }
        return { disable: x, enable: S };
      }
      o.default = E;
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
          var E = this;
          this.editor = m;
          var A = function() {
            var C = document.activeElement;
            C === m.$textElem.elems[0] && E.emit();
          };
          window.document.addEventListener("selectionchange", A), this.editor.beforeDestroy(function() {
            window.document.removeEventListener("selectionchange", A);
          });
        }
        return c.prototype.emit = function() {
          var m, E = this.editor.config.onSelectionChange;
          if (E) {
            var A = this.editor.selection;
            A.saveRange(), A.isSelectionEmpty() || E({
              text: A.getSelectionText(),
              html: (m = A.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0].innerHTML,
              selection: A
            });
          }
        }, c;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1)), d = s(t(127)), c = s(t(94)), m = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 }), o.registerPlugin = void 0;
      var E = t(2), A = E.__importDefault(t(87)), D = t(6);
      function C(x, S, g) {
        if (!x)
          throw new TypeError("name is not define");
        if (!S)
          throw new TypeError("options is not define");
        if (!S.intention)
          throw new TypeError("options.intention is not define");
        if (S.intention && typeof S.intention != "function")
          throw new TypeError("options.intention is not function");
        g[x] && console.warn("plugin " + x + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), g[x] = S;
      }
      o.registerPlugin = C;
      function h(x) {
        var S = (0, d.default)({}, D.deepClone(A.default.globalPluginsFunctionList), D.deepClone(x.pluginsFunctionList)), g = (0, c.default)(S);
        (0, m.default)(g).call(g, function(b) {
          var w = b[0], p = b[1];
          console.info("plugin " + w + " initializing");
          var T = p.intention, M = p.config;
          T(x, M), console.info("plugin " + w + " initialization complete");
        });
      }
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), f = s(t(1));
      (0, f.default)(o, "__esModule", { value: !0 });
    }]).default;
  });
})(jd);
var og = /* @__PURE__ */ ig(jd.exports), ag = "fcEditor", lg = 1, sg = Object.assign || function(u) {
  for (var y, l = 1; l < arguments.length; l++)
    for (var o in y = arguments[l], y)
      Object.prototype.hasOwnProperty.call(y, o) && (u[o] = y[o]);
  return u;
}, ug = fn({
  name: ag,
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
      uni: lg++
    };
  },
  watch: {
    disabled: function() {
      this.enable();
    },
    modelValue: function(y) {
      y !== this.editor.txt.html() && this.editor.txt.html(y);
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
    var y = this;
    this.$nextTick(function() {
      y.editor = new og("#editor".concat(y.uni)), y.editor.config.zIndex = 2, y.editor.config.force = !1, y.config && sg(y.editor.config, y.config), y.init && y.init(y.editor), y.editor.create(), y.enable(), y.editor.txt.html(y.modelValue);
    });
  },
  render: function() {
    var y = ng({}, this.$attrs);
    return delete y.id, Le("div", Xv(y, {
      onInput: this.result,
      id: "editor".concat(this.uni),
      style: "line-height: normal;"
    }), null);
  },
  beforeDestroy: function() {
    this.editor && this.editor.destroy(), this.editor = null;
  }
});
const Vd = (u, y) => {
  dt.component(u, y), ws.component(u, y);
};
dt.component("draggable", Ts);
dt.component("DragTool", um);
dt.component("DragBox", Pm);
dt.component("Validate", wm);
dt.component("Event", Rm);
dt.component("Struct", ym);
dt.component("Fetch", Em);
dt.component("Required", Fm);
dt.component("TableOptions", Wm);
dt.component("TableColumnOptions", Km);
dt.component("TableMenuOptions", tg);
Vd("FcEditor", ug);
dt.register("_fc", {
  load(u, y) {
    y._id = yt();
  }
});
dt.register("_fc_tool", {
  load(u, y) {
    y.props.unique = yt();
  }
});
const fg = function(u) {
  u.component("FcDesigner", yr);
};
yr.install = fg;
yr.makeOptionsRule = hi;
yr.formCreate = ws;
yr.designerForm = dt;
yr.component = Vd;
yr.useLocale = $d;
yr.t = As;
export {
  yr as default,
  dt as designerForm,
  ws as formCreate,
  fg as install
};
