const POSTERS=[["grinch","The Grinch"],["lorax","The Lorax"],["luca","Luca"],["shrek","Shrek"],["brave","Brave"]];
const $=(s,r=document)=>r.querySelector(s);
const grid=(rows)=>`<table class="chips">${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
const stems=(rows)=>`<table class="stemtbl">${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table>`;
const q=(t,rows,extra="")=>`<h3>${t}</h3>${extra}${grid(rows)}`;

function bar(){
 return `<div class="bar"><span class="brand">*** VCD Poster Analysis ***</span>
 <a class="btn" href="index.html">Home</a>
 ${document.body.dataset.page==="poster"?'<a class="btn blue" href="index.html#posters">Choose a different poster</a>':""}
 <a class="btn ghost" href="sample.html">Sample response</a>
 <a class="btn ghost" href="criteria.html">Criteria</a>
 ${document.body.dataset.page==="poster"?'<button class="btn" onclick="window.print()">Print this guide</button>':""}</div>`;
}

const ELEMENTS=`
<p>Choose the <b>2 most dominant design elements</b> you see in your poster.</p>
${grid([["Point","Line","Shape","Form"],["Tone","Texture","Colour","Type"]])}
<p class="note">Find the grid below for each of the 2 design elements you have chosen. Select the words carefully and use them together with your own words in a small paragraph on each element.</p>
${q("Point has been used to?",[["differentiate","define","separate","identify"],["emphasis","highlight","bulleted list","dot point"],["a map location","create texture","create pattern","other"]])}
${q("What kind of lines have been used?",[["straight","curvy","thin","thick","of consistent weight"],["flowing/wavy","rough/textured/fuzzy","horizontal","vertical","repetitive"],["opaque","precise","dotted/broken","delicate","other"]])}
${q("What kinds of shapes have been used?",[["geometric: squares, rectangles, circles, triangles","natural/organic","abstract","symbolic","common"],["feathered/soft edged","hard-edged","shape of texture","shape of tone","other"]])}
${q("What kinds of forms have been used?",[["abstract","geometric","natural/organic","soft-edged","hard-edged"],["free-form","common","cylindrical","cube","spherical"]])}
${q("What kind of tones have been used &amp; to what effect?",[["to create the illusion of form","to create depth","to create contrast","to create texture","to add variety"]])}
${q("What kind of textures have been used?",[["realistic","implied","natural","actual"],["sharp","smooth","bumpy","furry"],["prickly","rough","created by point, line, texture or tone","can create a pattern"]])}
${q("What kind of colours have been used &amp; to what effect?",[["primary","secondary","tertiary","complementary"],["harmonious","contrasting","warm","cool"],["monotone","dull","dark","dramatic"],["subdued","bright","vibrant","other"]])}
${q("What kind of Type/s have been used?",[["serif","sans serif","decorative","script"],["handwritten","bold/heavy","medium/regular","thin/light"],["italic","3D","condensed","other"]])}`;

const PRINCIPLES=`
<p>Choose the <b>2 most dominant design principles</b> you see in your poster.</p>
${grid([["Figure and ground","Balance","Contrast","Cropping"],["Hierarchy","Scale","Proportion","Pattern"]])}
<p class="note">Find the grid below for each of the 2 design principles you have chosen. Select the words carefully and use them together with your own words in a small paragraph on each principle.</p>
${q("How has figure and ground been established?",[["figure may also be known as ‘positive space’","ground can be known as ‘background’ or ‘negative space’","subtle","bold"],["visually dominant","visually recessive","creates emphasis through dominance","other"]],"<p class='note'>‘Figure’ refers to components that are more visually dominant than the ground on which they are placed.</p>")}
${q("How has balance been created?",[["asymmetrical (each side of the artwork is different)","symmetrical (each side of the artwork is similar)","aligned to the left","aligned to the right"],["is dynamic","creates harmony","is stable","centred"]])}
${q("How has the designer applied contrast?",[["to create hierarchy","opposite aesthetic qualities of all design elements","opposite aesthetic qualities of some design principles","other"],["to create emphasis","to create focal point","to create visual tension","to create interest"],["light/heavy","long/short","light/dark","centred/off-centred"],["fine/coarse","thick/thin","simple/complex","geometric/organic"]])}
${q("How has the designer used cropping?",[["cutting","framing","masking","to create emphasis"],["to create focal point","open composition, object extending beyond the field of the format","to create impact by showing an object larger than possible in scale","other"]])}
${q("How has the designer applied hierarchy?",[["order of importance of…","of some design elements","of some design principles","imagery"],["can establish a focal point","can draw the eye to key visual information","to communicate ideas &amp; information in a progressively diminishing order","other"]])}
${q("How has the designer applied scale?",[["relative size of 2 objects","of most design elements","to create hierarchy","to create depth"],["to create a focus","to create visual dominance","to be visually recessive","other"]])}
${q("How has the designer applied proportion?",[["ratio between at least 2 dimensions of an object","in proportion","out of proportion","other"]])}
${q("How has the designer applied pattern?",[["repetition: creates a sense of order","repetition: creates a relationship between similar elements","repetition: repetition of one component to create a visual unit"],["alternation: can create complex &amp; dynamic visuals","alternation: alternation of more than one component to create a visual unit","other"]])}`;

const P1=`<ul><li>Write a paragraph to introduce the Visual Communication (VC) you are analysing.</li></ul>
<h3>Who is the client and what did they require?</h3><ul><li>The client is the animation studio. The communication need is what they required.</li></ul>
<div class="stem">The poster to be analysed is ____________ (title of poster).</div>
<div class="stem">The client for this poster is ____________ (animation studio), the communication need was to ____________.</div>
<h3>What do you see in the poster?</h3>
<div class="stem">In the poster I see ____________.</div>
<h3>Is it a landscape or portrait layout?</h3>
<div class="stem">Its layout is ____________ (portrait/landscape).</div>
<h3>What is the purpose/s of the poster?</h3><ul><li>advertise / promote / depict / inform</li></ul>
<div class="stem">The main purpose of the poster is to ____________, because in the poster I see ____________.</div>
<img class="small" src="images/purposes-1.jpg" alt="Purposes of visual communications poster: advertise, promote, depict, teach, inform, identify, guide">`;
const P2=`<img class="small" src="images/audience-1.jpg" alt="Audience characteristics: age, gender, socioeconomic status, interests, cultural background, location">
<ul><li>Write a paragraph to describe the target audience of this poster.</li></ul>
<h3>Describe the target audience</h3>
${stems([["Age","The target audience is aged between ___ and ___ years old."],["Gender","The media product is aimed at ___ (males/females/all genders)."],["Interests","The target audience is interested in ___, ___ and ___."]])}
<h3>How does the poster attract this audience?</h3>
<div class="stem">The poster attracts its target audience through the use of ____________ (elements and principles), which appeals to them because ____________.</div>`;
const P3=`<ul><li>Discuss the two most dominant design elements, and describe why.</li></ul>
<div class="stem">One dominant design element is ____________. This can be seen in ____________.</div>
<div class="stem">Another important design element is ____________, which has been used to ____________.</div>${ELEMENTS}`;
const P4=`<ul><li>Discuss the two most dominant design principles, and describe why.</li></ul>
<div class="stem">One dominant design principle is ____________. This is demonstrated through ____________.</div>
<div class="stem">Another design principle is ____________, which helps to create ____________ and makes the design more ____________.</div>${PRINCIPLES}`;

function viewer(id,alt){
 return `<div class="left"><div class="zoom"><button id="zo" aria-label="Zoom out">−</button><span id="zl">100%</span><button id="zi" aria-label="Zoom in">+</button><button class="t" id="zr">Fit</button></div><div class="view" id="view"><img id="pimg" src="images/${id}.jpg" alt="${alt}"></div></div>`;
}
function zoomInit(){
 const img=$("#pimg"),v=$("#view");let z=1;
 const fit=()=>{const r=Math.min(v.clientWidth/img.naturalWidth,v.clientHeight/img.naturalHeight);img.style.width=img.naturalWidth*r*z+"px";img.style.height="auto";$("#zl").textContent=Math.round(z*100)+"%"};
 img.onload=fit;if(img.complete)fit();addEventListener("resize",fit);
 let d=null;v.onmousedown=e=>{d=[e.clientX,e.clientY,v.scrollLeft,v.scrollTop];v.style.cursor="grabbing"};addEventListener("mouseup",()=>{d=null;v.style.cursor=""});addEventListener("mousemove",e=>{if(d){v.scrollLeft=d[2]-(e.clientX-d[0]);v.scrollTop=d[3]-(e.clientY-d[1])}});
 $("#zi").onclick=()=>{z=Math.min(4,z+.25);fit()};$("#zo").onclick=()=>{z=Math.max(1,z-.25);fit()};$("#zr").onclick=()=>{z=1;fit();v.scrollTo(0,0)};
}
addEventListener("beforeprint",()=>document.querySelectorAll("details").forEach(d=>d.open=true));

const page=document.body.dataset.page;
document.body.insertAdjacentHTML("afterbegin",bar());
if(page==="home"){
 const t=$("#track");
 t.innerHTML=POSTERS.map(([id,n])=>`<a class="card" href="poster.html?p=${id}"><img src="images/${id}.jpg" alt="${n} movie poster"><h2>${n}</h2><span>Select this poster</span></a>`).join("");
 $("#prev").onclick=()=>t.scrollBy({left:-290,behavior:"smooth"});$("#next").onclick=()=>t.scrollBy({left:290,behavior:"smooth"});
}
if(page==="poster"){
 const id=new URLSearchParams(location.search).get("p");const p=POSTERS.find(x=>x[0]===id)||POSTERS[0];
 document.title=p[1]+" – Poster analysis";
 const secs=[P1,P2,P3,P4];const TT=["Introduction", "Audience", "Design Elements", "Design Principles", "Methods, Media and Materials"];
 $("#app").innerHTML=viewer(p[0],p[1]+" movie poster")+`<div class="right"><h1>Analysing: ${p[1]}</h1><p class="sub">Select a paragraph number to open its writing guide. Handwrite your analysis using the sentence stems.</p>${secs.map((s,i)=>`<details><summary><span class="n">${i+1}</span>Paragraph ${i+1} – ${TT[i]}</summary><div class="body">${s}</div></details>`).join("")}</div>`;
 zoomInit();
}
if(page==="sample"){
 $("#app").innerHTML=viewer("powerpuff","The Powerpuff Girls Movie poster")+`<div class="right sample"><h1>Sample response: The Powerpuff Girls Movie</h1>
<h2>PARAGRAPH 1 – Introduction</h2>
<p>The <b>visual communication</b> to be analysed is a poster for the ‘Powerpuff Girls’ movie. The <b>client</b> is Warner Brothers, the <b>communication need</b> is that they required a poster design for the Powerpuff Girls movie. Its <b>format</b> is portrait.</p>
<p>The poster depicts the three main Powerpuff Girl characters from the movie. They are colourful in the centre of the poster, there is an evil character hiding behind them. Behind them I see blue and black city buildings in the night sky which forms the <b>ground</b>. The message they are trying to send their audience is that it’s hinting that there is going to be a battle because of the evil character hiding behind them and the moody sky.</p>
<p>The main <b>purpose</b> for this poster is to <b>promote</b> the movie as the name of the movie and the Powerpuff girls are <b>depicted</b> on the poster to encourage young children to watch this movie.</p>
<h2>PARAGRAPH 2 – Audience</h2>
<p>The <b>age</b> of the target audience is 5-12 because it has a classification of ‘G’ for The Powerpuff Girls. The <b>gender</b> would be both males &amp; females but mainly girls because the main characters are girls fighting crime. This movie is meant for children <b>interested</b> in fighting crime, adventure and teamwork. This poster attracts and maintains the audience’s attention by its strong colour &amp; imagery of the 3 main characters &amp; its city location. The crime theme of the movie, which is solved by The Powerpuff Girls also makes it exciting.</p>
<h2>PARAGRAPH 3 – Design Elements</h2>
<p>The two most dominant <b>design elements</b> displayed in the poster are <b>colour</b> and <b>shape</b>.<br><b>Colour</b> is the most dominant. When I first saw the poster it directed me straight to Blossom, since she is the leader of the group as she is larger, wearing a bright pink dress with red ears and orange hair that are warm advancing colours that make her contrast and stand out from the cooler receding colours worn by the other two girls wearing blue and green. The <b>ground</b> behind the girls is purple and blue in the city building in the night sky, they are also cooler receding colours. The type is also a bright pink &amp; lime green which are light &amp; bright &amp; pop out of the composition attracting the target audience’s attention.</p>
<p>The <b>shapes</b> seen in this poster are hard-edged and show stylized simplified shapes of the girls with exaggerated features that are out of proportion to real children. We also see geometric common shapes of the building and the curved floor the girls are standing on and the decorative swirls behind them, which are Mojo Jojo’s cape. This variety creates visual interest and attracts the audience.</p>
<h2>PARAGRAPH 4 – Design Principles</h2>
<p>The two most dominant <b>design principles</b> in the advertisement are <b>contrast</b> and <b>scale</b>.<br><b>Contrast</b> is displayed in the advertisement using colour as there is a difference between warm and cool colours such as the warm bright pink dress worn by Blossom and her red ears and orange hair and the cooler receding colours worn by the other two girls wearing blue and green, tones such as black and white used widely in the poster, the shapes are stylised and geometric and the scale is large and small. The variety of dramatic contrast creates visual interest for the audience and maintains their attention.</p>
<p><b>Scale</b> is seen with the main characters and the villain scaled up to create visual dominance against the smaller-scaled buildings in the ground. This is also seen in the different scaled type to create a hierarchy of importance for the information to the audience.</p></div>`;
 zoomInit();
}
