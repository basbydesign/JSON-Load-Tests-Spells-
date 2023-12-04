async function populate() {
  const requestURL =
    "https://raw.githubusercontent.com/basbydesign/JSON-Load-Tests-Spells-/main/JSON%20Load%20Test.json?_sm_au_=iVVP4mSWrr5MH4DQVc3KjK0BkWQp0";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const spellList = await response.json();

  populateHeader(spellList);
  populateSpells(spellList);
}
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.listPurpose;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Sheet Totals: ${obj.spellSort} // Formed: ${obj.spellTotal}`;
  header.appendChild(myPara);
}
function populateSpells(obj) {
  const section = document.querySelector("section");
  const spells = obj.spellName;

  for (const spell of spells) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2"); /*Spell Name*/
    const myH4 = document.createElement("h4"); /*Source*/
    const myPara1 = document.createElement("p"); /*School*/
    const myPara2 = document.createElement("p"); /*Casting Time*/
    const myPara3 = document.createElement("p"); /*Range*/
    const myPara4 = document.createElement("p"); /*Duration*/
    const myPara5 = document.createElement("p"); /*Ritual*/
    const myPara6 = document.createElement("p"); /*Verbal/Somatic/Material*/
    const myPara7 = document.createElement("p"); /*Materials*/
    const myPara8 = document.createElement("p"); /*Description*/
    const myList = document.createElement("ul"); /*Spell List*/

    myH2.textContent = spell.name;
    myH4.textContent = spell.source;
    myPara1.textContent = `School of Magic: ${spell.school}`;
    myPara2.textContent = `Casting Time: ${spell.castingtime}`;
    myPara3.textContent = `Range: ${spell.range}`;
    myPara4.textContent = `Duration: ${spell.duration}`;
    myPara5.textContent = `Ritual: ${spell.ritual}`;
    myPara6.textContent = `Components: ${spell.verbal}`;
    myPara7.textContent = `Materials: ${spell.materials}`;
    myPara8.textContent = `Description: ${spell.description}`;

    const magicSchool = spell.spelllist;
    for (const school of magicSchool) {
      const listItem = document.createElement("li");
      listItem.textContent = school;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
populate();
